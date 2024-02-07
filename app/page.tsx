"use client";

import { ImageMagick, MagickFormat } from "../utils/imagemagick/index.js";
import _ from "lodash";
import forge from "node-forge";
import * as fflate from "fflate";
import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import { useState } from "react";
import useImageMagick from "../utils/useImageMagick";

let a: HTMLAnchorElement;

try {
  a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
} catch (e) {}

export function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
}

export async function convertAndZipImages(
  files: Array<File>
): Promise<Array<ArrayBuffer>> {
  return new Promise(async (res, rej) => {
    const streams: Array<any> = [];

    const zip = new fflate.Zip();
    zip.ondata = (err: any, dat: any, final: any) => {
      if (!err) {
        // output of the streams
        streams.push(dat);
        if (final) {
          res(streams);
        }
      } else {
        return rej(err);
      }
    };

    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();

      const out = await convertImageWithImageMagick(
        new Uint8Array(arrayBuffer),
        MagickFormat.Png,
        MagickFormat.Jpeg
      );
      const zipFile = new fflate.ZipPassThrough(file.name);

      // Always add streams to ZIP archives before pushing to those streams
      zip.add(zipFile);

      zipFile.push(out, true);
    }

    zip.end();
  });
}

export function convertImageWithImageMagick(
  file: Uint8Array,
  inputFormat: MagickFormat,
  outputFormat: MagickFormat
): Promise<Uint8Array> {
  return new Promise((res, rej) => {
    try {
      ImageMagick.read(file, inputFormat, (image: any) => {
        image.write(outputFormat, (data: Uint8Array) => {
          res(data);
        });
      });
    } catch (e) {
      rej(e);
    }
  });
}

export default function Home() {
  const [files, setFiles] = useState([]);

  useImageMagick();

  const updateFiles = async (incommingFiles: Array<any>) => {
    const streams = await convertAndZipImages(
      incommingFiles.map((x) => x.file)
    );
    const md = forge.md.md5.create();
    const decoder = new TextDecoder();
    for (const stream of streams) {
      const str = decoder.decode(stream);
      md.update(str);
    }
    const hash = md.digest().toHex();
    const blob = new Blob(streams, {
      type: "application/octet-stream",
    });
    downloadBlob(blob, `image.${hash}.zip`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Dropzone accept="image/png" onChange={updateFiles} value={files}>
          {files.map((file) => (
            <FileMosaic {...file} preview />
          ))}
        </Dropzone>
      </div>
    </main>
  );
}
