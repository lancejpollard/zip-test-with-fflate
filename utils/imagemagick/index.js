function An(t) {
  return (
    t instanceof Int8Array ||
    t instanceof Uint8Array ||
    t instanceof Uint8ClampedArray
  )
}
class Mn {
  fileName
  data
  constructor(n, e) {
    ;(this.fileName = n), (this.data = e)
  }
}
const In = {
  XmlResourceFiles: {
    log: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE logmap [
<!ELEMENT logmap (log)+>
<!ELEMENT log (#PCDATA)>
<!ATTLIST log events CDATA #IMPLIED>
<!ATTLIST log output CDATA #IMPLIED>
<!ATTLIST log filename CDATA #IMPLIED>
<!ATTLIST log generations CDATA #IMPLIED>
<!ATTLIST log limit CDATA #IMPLIED>
<!ATTLIST log format CDATA #IMPLIED>
]>
<logmap>
  <log events="None"/>
  <log output="Debug"/>
  <log filename="Magick-%g.log"/>
  <log generations="3"/>
  <log limit="2000"/>
  <log format="%t %r %u %v %d %c[%p]: %m/%f/%l/%d
  %e"/>
</logmap>
`,
    policy: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE policymap [
<!ELEMENT policymap (policy)*>
<!ATTLIST policymap xmlns CDATA #FIXED "">
<!ELEMENT policy EMPTY>
<!ATTLIST policy xmlns CDATA #FIXED "">
<!ATTLIST policy domain NMTOKEN #REQUIRED>
<!ATTLIST policy name NMTOKEN #IMPLIED>
<!ATTLIST policy pattern CDATA #IMPLIED>
<!ATTLIST policy rights NMTOKEN #IMPLIED>
<!ATTLIST policy stealth NMTOKEN #IMPLIED>
<!ATTLIST policy value CDATA #IMPLIED>
]>
<policymap>
  <policy domain="cache" name="shared-secret" value="passphrase"/>
  <policy domain="coder" rights="none" pattern="EPHEMERAL" />
  <policy domain="coder" rights="none" pattern="MVG" />
  <policy domain="coder" rights="none" pattern="MSL" />
  <policy domain="path" rights="none" pattern="@*" />
  <policy domain="path" rights="none" pattern="|*" />
</policymap>
`,
  },
}
class At {
  constructor() {
    ;(this.log = new Mn('log.xml', In.XmlResourceFiles.log)),
      (this.policy = new Mn('policy.xml', In.XmlResourceFiles.policy))
  }
  /**
   * Gets the default configuration.
   */
  static default = new At();
  /**
   * Gets all the configuration files.
   */
  *all() {
    yield this.log, yield this.policy
  }
  /// <summary>
  /// Gets the log configuration.
  /// </summary>
  log
  /// <summary>
  /// Gets the policy configuration.
  /// </summary>
  policy
}
class vt {
  constructor(n, e, o) {
    ;(this.format = n), (this.name = e), (this.value = o)
  }
  format
  name
  value
}
class wi {
  format
  constructor(n) {
    this.format = n
  }
  createDefine(n, e) {
    return typeof e == 'boolean'
      ? new vt(this.format, n, e ? 'true' : 'false')
      : typeof e == 'string'
      ? new vt(this.format, n, e)
      : new vt(this.format, n, e.toString())
  }
  hasValue(n) {
    return n != null
  }
}
class us {
  _x
  _y
  _paintMethod
  /**
   * Initializes a new instance of the {@link DrawableColor} class.
   * @param x - The X coordinate.
   * @param  y - The Y coordinate.
   * @param paintMethod - The paint method to use.
   */
  constructor(n, e, o) {
    ;(this._x = n), (this._y = e), (this._paintMethod = o)
  }
  draw(n) {
    n.color(this._x, this._y, this._paintMethod)
  }
}
class _s {
  _color
  /**
   * Initializes a new instance of the {@link DrawableFillColor} class.
   * @param color - The color to use.
   */
  constructor(n) {
    this._color = n
  }
  draw(n) {
    n.fillColor(this._color)
  }
}
class os {
  _opacity
  /**
   * Initializes a new instance of the {@link DrawableFillOpacity} class.
   * @param opacity - The opacity.
   */
  constructor(n) {
    this._opacity = n
  }
  draw(n) {
    n.fillOpacity(this._opacity.toDouble() / 100)
  }
}
class ls {
  _pointSize
  /**
   * Initializes a new instance of the {@link DrawableFontPointSize} class.
   * @param opacity - The point size.
   */
  constructor(n) {
    this._pointSize = n
  }
  draw(n) {
    n.fontPointSize(this._pointSize)
  }
}
class Mi {
  /**
   * Initializes a new instance of the {@link LogEvent} class.
   * @param eventType - The type of the log message.
   * @param message - The log message.
   */
  constructor(n, e) {
    ;(this.eventType = n), (this.message = e ?? '')
  }
  /**
   * Gets the type of the log message.
   */
  eventType
  /**
   * Gets the log message.
   */
  message
}
var Ii = (() => {
    var t =
      typeof document < 'u' && document.currentScript
        ? document.currentScript.src
        : void 0
    return function (n = {}) {
      var e = n,
        o,
        g
      ;(e.ready = new Promise((a, r) => {
        ;(o = a), (g = r)
      })),
        (!globalThis.crypto || !globalThis.crypto.getRandomValues) &&
          (globalThis.crypto = {
            getRandomValues: a => {
              for (let r = 0; r < a.length; r++)
                a[r] = (Math.random() * 256) | 0
            },
          })
      var p = Object.assign({}, e),
        d = './this.program',
        S = (a, r) => {
          throw r
        },
        D = typeof window == 'object',
        T = typeof importScripts == 'function'
      typeof process == 'object' &&
        typeof process.versions == 'object' &&
        process.versions.node
      var x = ''
      function _e(a) {
        return e.locateFile ? e.locateFile(a, x) : x + a
      }
      var De, We, Ye
      ;(D || T) &&
        (T
          ? (x = self.location.href)
          : typeof document < 'u' &&
            document.currentScript &&
            (x = document.currentScript.src),
        t && (x = t),
        x.indexOf('blob:') !== 0
          ? (x = x.substr(
              0,
              x.replace(/[?#].*/, '').lastIndexOf('/') + 1,
            ))
          : (x = ''),
        (De = a => {
          var r = new XMLHttpRequest()
          return r.open('GET', a, !1), r.send(null), r.responseText
        }),
        T &&
          (Ye = a => {
            var r = new XMLHttpRequest()
            return (
              r.open('GET', a, !1),
              (r.responseType = 'arraybuffer'),
              r.send(null),
              new Uint8Array(r.response)
            )
          }),
        (We = (a, r, i) => {
          var s = new XMLHttpRequest()
          s.open('GET', a, !0),
            (s.responseType = 'arraybuffer'),
            (s.onload = () => {
              if (s.status == 200 || (s.status == 0 && s.response)) {
                r(s.response)
                return
              }
              i()
            }),
            (s.onerror = i),
            s.send(null)
        }))
      var ft = e.print || console.log.bind(console),
        ke = e.printErr || console.error.bind(console)
      Object.assign(e, p),
        (p = null),
        e.arguments && e.arguments,
        e.thisProgram && (d = e.thisProgram),
        e.quit && (S = e.quit)
      var je
      e.wasmBinary && (je = e.wasmBinary)
      var Cn = e.noExitRuntime || !0
      typeof WebAssembly != 'object' &&
        ge('no native wasm support detected')
      var Ke,
        pt = !1
      function Wn(a, r) {
        a || ge(r)
      }
      var Y, Z, re, Ze, M, B, Oe, ne, Wt, et
      function Bt() {
        var a = Ke.buffer
        ;(e.HEAP8 = Y = new Int8Array(a)),
          (e.HEAP16 = re = new Int16Array(a)),
          (e.HEAP32 = M = new Int32Array(a)),
          (e.HEAPU8 = Z = new Uint8Array(a)),
          (e.HEAPU16 = Ze = new Uint16Array(a)),
          (e.HEAPU32 = B = new Uint32Array(a)),
          (e.HEAPF32 = Oe = new Float32Array(a)),
          (e.HEAPF64 = et = new Float64Array(a)),
          (e.HEAP64 = ne = new BigInt64Array(a)),
          (e.HEAPU64 = Wt = new BigUint64Array(a))
      }
      var Ge,
        Lt = [],
        Nt = [],
        xt = [],
        Bn = 0
      function Ln() {
        return Cn || Bn > 0
      }
      function Nn() {
        if (e.preRun)
          for (
            typeof e.preRun == 'function' && (e.preRun = [e.preRun]);
            e.preRun.length;

          )
            Un(e.preRun.shift())
        ht(Lt)
      }
      function xn() {
        !e.noFSInit && !u.init.initialized && u.init(),
          (u.ignorePermissions = !1),
          ht(Nt)
      }
      function zn() {
        if (e.postRun)
          for (
            typeof e.postRun == 'function' && (e.postRun = [e.postRun]);
            e.postRun.length;

          )
            Fn(e.postRun.shift())
        ht(xt)
      }
      function Un(a) {
        Lt.unshift(a)
      }
      function Hn(a) {
        Nt.unshift(a)
      }
      function Fn(a) {
        xt.unshift(a)
      }
      var Ae = 0,
        Xe = null
      function ss(a) {
        return a
      }
      function dt(a) {
        Ae++, e.monitorRunDependencies && e.monitorRunDependencies(Ae)
      }
      function tt(a) {
        if (
          (Ae--,
          e.monitorRunDependencies && e.monitorRunDependencies(Ae),
          Ae == 0 && Xe)
        ) {
          var r = Xe
          ;(Xe = null), r()
        }
      }
      function ge(a) {
        e.onAbort && e.onAbort(a),
          (a = 'Aborted(' + a + ')'),
          ke(a),
          (pt = !0),
          (a += '. Build with -sASSERTIONS for more info.')
        var r = new WebAssembly.RuntimeError(a)
        throw (g(r), r)
      }
      var Yn = 'data:application/octet-stream;base64,'
      function zt(a) {
        return a.startsWith(Yn)
      }
      function Ut(a) {
        return a.startsWith('file://')
      }
      var Be
      ;(Be = 'magick.wasm'), zt(Be) || (Be = _e(Be))
      function Ht(a) {
        try {
          if (a == Be && je) return new Uint8Array(je)
          if (Ye) return Ye(a)
          throw 'both async and sync fetching of the wasm failed'
        } catch (r) {
          ge(r)
        }
      }
      function jn(a) {
        if (!je && (D || T)) {
          if (typeof fetch == 'function' && !Ut(a))
            return fetch(a, { credentials: 'same-origin' })
              .then(r => {
                if (!r.ok)
                  throw "failed to load wasm binary file at '" + a + "'"
                return r.arrayBuffer()
              })
              .catch(() => Ht(a))
          if (We)
            return new Promise((r, i) => {
              We(a, s => r(new Uint8Array(s)), i)
            })
        }
        return Promise.resolve().then(() => Ht(a))
      }
      function Ft(a, r, i) {
        return jn(a)
          .then(s => WebAssembly.instantiate(s, r))
          .then(s => s)
          .then(i, s => {
            ke('failed to asynchronously prepare wasm: ' + s), ge(s)
          })
      }
      function Xn(a, r, i, s) {
        return !a &&
          typeof WebAssembly.instantiateStreaming == 'function' &&
          !zt(r) &&
          !Ut(r) &&
          typeof fetch == 'function'
          ? fetch(r, { credentials: 'same-origin' }).then(_ => {
              var c = WebAssembly.instantiateStreaming(_, i)
              return c.then(s, function (m) {
                return (
                  ke('wasm streaming compile failed: ' + m),
                  ke('falling back to ArrayBuffer instantiation'),
                  Ft(r, i, s)
                )
              })
            })
          : Ft(r, i, s)
      }
      function Vn() {
        var a = { a: jr }
        function r(s, _) {
          var c = s.exports
          return (
            (e.asm = c),
            (Ke = e.asm.La),
            Bt(),
            (Ge = e.asm.db),
            Hn(e.asm.Ma),
            tt(),
            c
          )
        }
        dt()
        function i(s) {
          r(s.instance)
        }
        if (e.instantiateWasm)
          try {
            return e.instantiateWasm(a, r)
          } catch (s) {
            ke(
              'Module.instantiateWasm callback failed with error: ' + s,
            ),
              g(s)
          }
        return Xn(je, Be, a, i).catch(g), {}
      }
      function Qn(a) {
        ;(this.name = 'ExitStatus'),
          (this.message = `Program terminated with exit(${a})`),
          (this.status = a)
      }
      var ht = a => {
        for (; a.length > 0; ) a.shift()(e)
      }
      function qn(a, r = 'i8') {
        switch ((r.endsWith('*') && (r = '*'), r)) {
          case 'i1':
            return Y[a >>> 0]
          case 'i8':
            return Y[a >>> 0]
          case 'i16':
            return re[a >>> 1]
          case 'i32':
            return M[a >>> 2]
          case 'i64':
            return ne[a >> 3]
          case 'float':
            return Oe[a >>> 2]
          case 'double':
            return et[a >>> 3]
          case '*':
            return B[a >>> 2]
          default:
            ge(`invalid type for getValue: ${r}`)
        }
      }
      function $n(a, r, i = 'i8') {
        switch ((i.endsWith('*') && (i = '*'), i)) {
          case 'i1':
            Y[a >>> 0] = r
            break
          case 'i8':
            Y[a >>> 0] = r
            break
          case 'i16':
            re[a >>> 1] = r
            break
          case 'i32':
            M[a >>> 2] = r
            break
          case 'i64':
            ne[a >> 3] = BigInt(r)
            break
          case 'float':
            Oe[a >>> 2] = r
            break
          case 'double':
            et[a >>> 3] = r
            break
          case '*':
            B[a >>> 2] = r
            break
          default:
            ge(`invalid type for setValue: ${i}`)
        }
      }
      var Ve = [],
        N = a => {
          var r = Ve[a]
          return (
            r ||
              (a >= Ve.length && (Ve.length = a + 1),
              (Ve[a] = r = Ge.get(a))),
            r
          )
        },
        Jn = (a, r) => N(a)(r),
        Le = 0
      function Yt(a) {
        ;(this.excPtr = a),
          (this.ptr = a - 24),
          (this.set_type = function (r) {
            B[(this.ptr + 4) >>> 2] = r
          }),
          (this.get_type = function () {
            return B[(this.ptr + 4) >>> 2]
          }),
          (this.set_destructor = function (r) {
            B[(this.ptr + 8) >>> 2] = r
          }),
          (this.get_destructor = function () {
            return B[(this.ptr + 8) >>> 2]
          }),
          (this.set_caught = function (r) {
            ;(r = r ? 1 : 0), (Y[(this.ptr + 12) >>> 0] = r)
          }),
          (this.get_caught = function () {
            return Y[(this.ptr + 12) >>> 0] != 0
          }),
          (this.set_rethrown = function (r) {
            ;(r = r ? 1 : 0), (Y[(this.ptr + 13) >>> 0] = r)
          }),
          (this.get_rethrown = function () {
            return Y[(this.ptr + 13) >>> 0] != 0
          }),
          (this.init = function (r, i) {
            this.set_adjusted_ptr(0),
              this.set_type(r),
              this.set_destructor(i)
          }),
          (this.set_adjusted_ptr = function (r) {
            B[(this.ptr + 16) >>> 2] = r
          }),
          (this.get_adjusted_ptr = function () {
            return B[(this.ptr + 16) >>> 2]
          }),
          (this.get_exception_ptr = function () {
            var r = kn(this.get_type())
            if (r) return B[this.excPtr >>> 2]
            var i = this.get_adjusted_ptr()
            return i !== 0 ? i : this.excPtr
          })
      }
      function Kn(a) {
        throw (Le || (Le = a), Le)
      }
      function Zn() {
        var a = Le
        if (!a) return Je(0), 0
        var r = new Yt(a)
        r.set_adjusted_ptr(a)
        var i = r.get_type()
        if (!i) return Je(0), a
        for (var s = 0; s < arguments.length; s++) {
          var _ = arguments[s]
          if (_ === 0 || _ === i) break
          var c = r.ptr + 16
          if (Sn(_, i, c)) return Je(_), a
        }
        return Je(i), a
      }
      var On = Zn
      function ea(a, r, i) {
        var s = new Yt(a)
        throw (s.init(r, i), (Le = a), Le)
      }
      var F = {
          isAbs: a => a.charAt(0) === '/',
          splitPath: a => {
            var r =
              /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
            return r.exec(a).slice(1)
          },
          normalizeArray: (a, r) => {
            for (var i = 0, s = a.length - 1; s >= 0; s--) {
              var _ = a[s]
              _ === '.'
                ? a.splice(s, 1)
                : _ === '..'
                ? (a.splice(s, 1), i++)
                : i && (a.splice(s, 1), i--)
            }
            if (r) for (; i; i--) a.unshift('..')
            return a
          },
          normalize: a => {
            var r = F.isAbs(a),
              i = a.substr(-1) === '/'
            return (
              (a = F.normalizeArray(
                a.split('/').filter(s => !!s),
                !r,
              ).join('/')),
              !a && !r && (a = '.'),
              a && i && (a += '/'),
              (r ? '/' : '') + a
            )
          },
          dirname: a => {
            var r = F.splitPath(a),
              i = r[0],
              s = r[1]
            return !i && !s
              ? '.'
              : (s && (s = s.substr(0, s.length - 1)), i + s)
          },
          basename: a => {
            if (a === '/') return '/'
            ;(a = F.normalize(a)), (a = a.replace(/\/$/, ''))
            var r = a.lastIndexOf('/')
            return r === -1 ? a : a.substr(r + 1)
          },
          join: function () {
            var a = Array.prototype.slice.call(arguments)
            return F.normalize(a.join('/'))
          },
          join2: (a, r) => F.normalize(a + '/' + r),
        },
        ta = () => {
          if (
            typeof crypto == 'object' &&
            typeof crypto.getRandomValues == 'function'
          )
            return a => crypto.getRandomValues(a)
          ge('initRandomDevice')
        },
        yt = a => (yt = ta())(a),
        me = {
          resolve: function () {
            for (
              var a = '', r = !1, i = arguments.length - 1;
              i >= -1 && !r;
              i--
            ) {
              var s = i >= 0 ? arguments[i] : u.cwd()
              if (typeof s != 'string')
                throw new TypeError(
                  'Arguments to path.resolve must be strings',
                )
              if (!s) return ''
              ;(a = s + '/' + a), (r = F.isAbs(s))
            }
            return (
              (a = F.normalizeArray(
                a.split('/').filter(_ => !!_),
                !r,
              ).join('/')),
              (r ? '/' : '') + a || '.'
            )
          },
          relative: (a, r) => {
            ;(a = me.resolve(a).substr(1)),
              (r = me.resolve(r).substr(1))
            function i(k) {
              for (var I = 0; I < k.length && k[I] === ''; I++);
              for (var G = k.length - 1; G >= 0 && k[G] === ''; G--);
              return I > G ? [] : k.slice(I, G - I + 1)
            }
            for (
              var s = i(a.split('/')),
                _ = i(r.split('/')),
                c = Math.min(s.length, _.length),
                m = c,
                f = 0;
              f < c;
              f++
            )
              if (s[f] !== _[f]) {
                m = f
                break
              }
            for (var y = [], f = m; f < s.length; f++) y.push('..')
            return (y = y.concat(_.slice(m))), y.join('/')
          },
        },
        Ee = a => {
          for (var r = 0, i = 0; i < a.length; ++i) {
            var s = a.charCodeAt(i)
            s <= 127
              ? r++
              : s <= 2047
              ? (r += 2)
              : s >= 55296 && s <= 57343
              ? ((r += 4), ++i)
              : (r += 3)
          }
          return r
        },
        St = (a, r, i, s) => {
          if (((i >>>= 0), !(s > 0))) return 0
          for (var _ = i, c = i + s - 1, m = 0; m < a.length; ++m) {
            var f = a.charCodeAt(m)
            if (f >= 55296 && f <= 57343) {
              var y = a.charCodeAt(++m)
              f = (65536 + ((f & 1023) << 10)) | (y & 1023)
            }
            if (f <= 127) {
              if (i >= c) break
              r[i++ >>> 0] = f
            } else if (f <= 2047) {
              if (i + 1 >= c) break
              ;(r[i++ >>> 0] = 192 | (f >> 6)),
                (r[i++ >>> 0] = 128 | (f & 63))
            } else if (f <= 65535) {
              if (i + 2 >= c) break
              ;(r[i++ >>> 0] = 224 | (f >> 12)),
                (r[i++ >>> 0] = 128 | ((f >> 6) & 63)),
                (r[i++ >>> 0] = 128 | (f & 63))
            } else {
              if (i + 3 >= c) break
              ;(r[i++ >>> 0] = 240 | (f >> 18)),
                (r[i++ >>> 0] = 128 | ((f >> 12) & 63)),
                (r[i++ >>> 0] = 128 | ((f >> 6) & 63)),
                (r[i++ >>> 0] = 128 | (f & 63))
            }
          }
          return (r[i >>> 0] = 0), i - _
        }
      function nt(a, r, i) {
        var s = i > 0 ? i : Ee(a) + 1,
          _ = new Array(s),
          c = St(a, _, 0, _.length)
        return r && (_.length = c), _
      }
      var jt =
          typeof TextDecoder < 'u' ? new TextDecoder('utf8') : void 0,
        Ne = (a, r, i) => {
          r >>>= 0
          for (var s = r + i, _ = r; a[_] && !(_ >= s); ) ++_
          if (_ - r > 16 && a.buffer && jt)
            return jt.decode(a.subarray(r, _))
          for (var c = ''; r < _; ) {
            var m = a[r++]
            if (!(m & 128)) {
              c += String.fromCharCode(m)
              continue
            }
            var f = a[r++] & 63
            if ((m & 224) == 192) {
              c += String.fromCharCode(((m & 31) << 6) | f)
              continue
            }
            var y = a[r++] & 63
            if (
              ((m & 240) == 224
                ? (m = ((m & 15) << 12) | (f << 6) | y)
                : (m =
                    ((m & 7) << 18) |
                    (f << 12) |
                    (y << 6) |
                    (a[r++] & 63)),
              m < 65536)
            )
              c += String.fromCharCode(m)
            else {
              var k = m - 65536
              c += String.fromCharCode(
                55296 | (k >> 10),
                56320 | (k & 1023),
              )
            }
          }
          return c
        },
        Re = {
          ttys: [],
          init: function () {},
          shutdown: function () {},
          register: function (a, r) {
            ;(Re.ttys[a] = { input: [], output: [], ops: r }),
              u.registerDevice(a, Re.stream_ops)
          },
          stream_ops: {
            open: function (a) {
              var r = Re.ttys[a.node.rdev]
              if (!r) throw new u.ErrnoError(43)
              ;(a.tty = r), (a.seekable = !1)
            },
            close: function (a) {
              a.tty.ops.fsync(a.tty)
            },
            fsync: function (a) {
              a.tty.ops.fsync(a.tty)
            },
            read: function (a, r, i, s, _) {
              if (!a.tty || !a.tty.ops.get_char)
                throw new u.ErrnoError(60)
              for (var c = 0, m = 0; m < s; m++) {
                var f
                try {
                  f = a.tty.ops.get_char(a.tty)
                } catch {
                  throw new u.ErrnoError(29)
                }
                if (f === void 0 && c === 0) throw new u.ErrnoError(6)
                if (f == null) break
                c++, (r[i + m] = f)
              }
              return c && (a.node.timestamp = Date.now()), c
            },
            write: function (a, r, i, s, _) {
              if (!a.tty || !a.tty.ops.put_char)
                throw new u.ErrnoError(60)
              try {
                for (var c = 0; c < s; c++)
                  a.tty.ops.put_char(a.tty, r[i + c])
              } catch {
                throw new u.ErrnoError(29)
              }
              return s && (a.node.timestamp = Date.now()), c
            },
          },
          default_tty_ops: {
            get_char: function (a) {
              if (!a.input.length) {
                var r = null
                if (
                  (typeof window < 'u' &&
                  typeof window.prompt == 'function'
                    ? ((r = window.prompt('Input: ')),
                      r !== null &&
                        (r += `
`))
                    : typeof readline == 'function' &&
                      ((r = readline()),
                      r !== null &&
                        (r += `
`)),
                  !r)
                )
                  return null
                a.input = nt(r, !0)
              }
              return a.input.shift()
            },
            put_char: function (a, r) {
              r === null || r === 10
                ? (ft(Ne(a.output, 0)), (a.output = []))
                : r != 0 && a.output.push(r)
            },
            fsync: function (a) {
              a.output &&
                a.output.length > 0 &&
                (ft(Ne(a.output, 0)), (a.output = []))
            },
            ioctl_tcgets: function (a) {
              return {
                c_iflag: 25856,
                c_oflag: 5,
                c_cflag: 191,
                c_lflag: 35387,
                c_cc: [
                  3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23,
                  22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
              }
            },
            ioctl_tcsets: function (a, r, i) {
              return 0
            },
            ioctl_tiocgwinsz: function (a) {
              return [24, 80]
            },
          },
          default_tty1_ops: {
            put_char: function (a, r) {
              r === null || r === 10
                ? (ke(Ne(a.output, 0)), (a.output = []))
                : r != 0 && a.output.push(r)
            },
            fsync: function (a) {
              a.output &&
                a.output.length > 0 &&
                (ke(Ne(a.output, 0)), (a.output = []))
            },
          },
        },
        na = (a, r) => (Z.fill(0, a, a + r), a),
        aa = (a, r) => Math.ceil(a / r) * r,
        Xt = a => {
          a = aa(a, 65536)
          var r = yn(65536, a)
          return r ? na(r, a) : 0
        },
        C = {
          ops_table: null,
          mount: function (a) {
            return C.createNode(null, '/', 16895, 0)
          },
          createNode: function (a, r, i, s) {
            if (u.isBlkdev(i) || u.isFIFO(i)) throw new u.ErrnoError(63)
            C.ops_table ||
              (C.ops_table = {
                dir: {
                  node: {
                    getattr: C.node_ops.getattr,
                    setattr: C.node_ops.setattr,
                    lookup: C.node_ops.lookup,
                    mknod: C.node_ops.mknod,
                    rename: C.node_ops.rename,
                    unlink: C.node_ops.unlink,
                    rmdir: C.node_ops.rmdir,
                    readdir: C.node_ops.readdir,
                    symlink: C.node_ops.symlink,
                  },
                  stream: { llseek: C.stream_ops.llseek },
                },
                file: {
                  node: {
                    getattr: C.node_ops.getattr,
                    setattr: C.node_ops.setattr,
                  },
                  stream: {
                    llseek: C.stream_ops.llseek,
                    read: C.stream_ops.read,
                    write: C.stream_ops.write,
                    allocate: C.stream_ops.allocate,
                    mmap: C.stream_ops.mmap,
                    msync: C.stream_ops.msync,
                  },
                },
                link: {
                  node: {
                    getattr: C.node_ops.getattr,
                    setattr: C.node_ops.setattr,
                    readlink: C.node_ops.readlink,
                  },
                  stream: {},
                },
                chrdev: {
                  node: {
                    getattr: C.node_ops.getattr,
                    setattr: C.node_ops.setattr,
                  },
                  stream: u.chrdev_stream_ops,
                },
              })
            var _ = u.createNode(a, r, i, s)
            return (
              u.isDir(_.mode)
                ? ((_.node_ops = C.ops_table.dir.node),
                  (_.stream_ops = C.ops_table.dir.stream),
                  (_.contents = {}))
                : u.isFile(_.mode)
                ? ((_.node_ops = C.ops_table.file.node),
                  (_.stream_ops = C.ops_table.file.stream),
                  (_.usedBytes = 0),
                  (_.contents = null))
                : u.isLink(_.mode)
                ? ((_.node_ops = C.ops_table.link.node),
                  (_.stream_ops = C.ops_table.link.stream))
                : u.isChrdev(_.mode) &&
                  ((_.node_ops = C.ops_table.chrdev.node),
                  (_.stream_ops = C.ops_table.chrdev.stream)),
              (_.timestamp = Date.now()),
              a && ((a.contents[r] = _), (a.timestamp = _.timestamp)),
              _
            )
          },
          getFileDataAsTypedArray: function (a) {
            return a.contents
              ? a.contents.subarray
                ? a.contents.subarray(0, a.usedBytes)
                : new Uint8Array(a.contents)
              : new Uint8Array(0)
          },
          expandFileStorage: function (a, r) {
            r >>>= 0
            var i = a.contents ? a.contents.length : 0
            if (!(i >= r)) {
              var s = 1024 * 1024
              ;(r = Math.max(r, (i * (i < s ? 2 : 1.125)) >>> 0)),
                i != 0 && (r = Math.max(r, 256))
              var _ = a.contents
              ;(a.contents = new Uint8Array(r)),
                a.usedBytes > 0 &&
                  a.contents.set(_.subarray(0, a.usedBytes), 0)
            }
          },
          resizeFileStorage: function (a, r) {
            if (((r >>>= 0), a.usedBytes != r))
              if (r == 0) (a.contents = null), (a.usedBytes = 0)
              else {
                var i = a.contents
                ;(a.contents = new Uint8Array(r)),
                  i &&
                    a.contents.set(
                      i.subarray(0, Math.min(r, a.usedBytes)),
                    ),
                  (a.usedBytes = r)
              }
          },
          node_ops: {
            getattr: function (a) {
              var r = {}
              return (
                (r.dev = u.isChrdev(a.mode) ? a.id : 1),
                (r.ino = a.id),
                (r.mode = a.mode),
                (r.nlink = 1),
                (r.uid = 0),
                (r.gid = 0),
                (r.rdev = a.rdev),
                u.isDir(a.mode)
                  ? (r.size = 4096)
                  : u.isFile(a.mode)
                  ? (r.size = a.usedBytes)
                  : u.isLink(a.mode)
                  ? (r.size = a.link.length)
                  : (r.size = 0),
                (r.atime = new Date(a.timestamp)),
                (r.mtime = new Date(a.timestamp)),
                (r.ctime = new Date(a.timestamp)),
                (r.blksize = 4096),
                (r.blocks = Math.ceil(r.size / r.blksize)),
                r
              )
            },
            setattr: function (a, r) {
              r.mode !== void 0 && (a.mode = r.mode),
                r.timestamp !== void 0 && (a.timestamp = r.timestamp),
                r.size !== void 0 && C.resizeFileStorage(a, r.size)
            },
            lookup: function (a, r) {
              throw u.genericErrors[44]
            },
            mknod: function (a, r, i, s) {
              return C.createNode(a, r, i, s)
            },
            rename: function (a, r, i) {
              if (u.isDir(a.mode)) {
                var s
                try {
                  s = u.lookupNode(r, i)
                } catch {}
                if (s)
                  for (var _ in s.contents) throw new u.ErrnoError(55)
              }
              delete a.parent.contents[a.name],
                (a.parent.timestamp = Date.now()),
                (a.name = i),
                (r.contents[i] = a),
                (r.timestamp = a.parent.timestamp),
                (a.parent = r)
            },
            unlink: function (a, r) {
              delete a.contents[r], (a.timestamp = Date.now())
            },
            rmdir: function (a, r) {
              var i = u.lookupNode(a, r)
              for (var s in i.contents) throw new u.ErrnoError(55)
              delete a.contents[r], (a.timestamp = Date.now())
            },
            readdir: function (a) {
              var r = ['.', '..']
              for (var i in a.contents)
                a.contents.hasOwnProperty(i) && r.push(i)
              return r
            },
            symlink: function (a, r, i) {
              var s = C.createNode(a, r, 41471, 0)
              return (s.link = i), s
            },
            readlink: function (a) {
              if (!u.isLink(a.mode)) throw new u.ErrnoError(28)
              return a.link
            },
          },
          stream_ops: {
            read: function (a, r, i, s, _) {
              var c = a.node.contents
              if (_ >= a.node.usedBytes) return 0
              var m = Math.min(a.node.usedBytes - _, s)
              if (m > 8 && c.subarray) r.set(c.subarray(_, _ + m), i)
              else for (var f = 0; f < m; f++) r[i + f] = c[_ + f]
              return m
            },
            write: function (a, r, i, s, _, c) {
              if ((r.buffer === Y.buffer && (c = !1), !s)) return 0
              var m = a.node
              if (
                ((m.timestamp = Date.now()),
                r.subarray && (!m.contents || m.contents.subarray))
              ) {
                if (c)
                  return (
                    (m.contents = r.subarray(i, i + s)),
                    (m.usedBytes = s),
                    s
                  )
                if (m.usedBytes === 0 && _ === 0)
                  return (
                    (m.contents = r.slice(i, i + s)),
                    (m.usedBytes = s),
                    s
                  )
                if (_ + s <= m.usedBytes)
                  return m.contents.set(r.subarray(i, i + s), _), s
              }
              if (
                (C.expandFileStorage(m, _ + s),
                m.contents.subarray && r.subarray)
              )
                m.contents.set(r.subarray(i, i + s), _)
              else
                for (var f = 0; f < s; f++) m.contents[_ + f] = r[i + f]
              return (m.usedBytes = Math.max(m.usedBytes, _ + s)), s
            },
            llseek: function (a, r, i) {
              var s = r
              if (
                (i === 1
                  ? (s += a.position)
                  : i === 2 &&
                    u.isFile(a.node.mode) &&
                    (s += a.node.usedBytes),
                s < 0)
              )
                throw new u.ErrnoError(28)
              return s
            },
            allocate: function (a, r, i) {
              C.expandFileStorage(a.node, r + i),
                (a.node.usedBytes = Math.max(a.node.usedBytes, r + i))
            },
            mmap: function (a, r, i, s, _) {
              if (!u.isFile(a.node.mode)) throw new u.ErrnoError(43)
              var c,
                m,
                f = a.node.contents
              if (!(_ & 2) && f.buffer === Y.buffer)
                (m = !1), (c = f.byteOffset)
              else {
                if (
                  ((i > 0 || i + r < f.length) &&
                    (f.subarray
                      ? (f = f.subarray(i, i + r))
                      : (f = Array.prototype.slice.call(f, i, i + r))),
                  (m = !0),
                  (c = Xt(r)),
                  !c)
                )
                  throw new u.ErrnoError(48)
                ;(c >>>= 0), Y.set(f, c >>> 0)
              }
              return { ptr: c, allocated: m }
            },
            msync: function (a, r, i, s, _) {
              return C.stream_ops.write(a, r, 0, s, i, !1), 0
            },
          },
        },
        ra = (a, r, i, s) => {
          var _ = s ? '' : `al ${a}`
          We(
            a,
            c => {
              Wn(
                c,
                `Loading data file "${a}" failed (no arrayBuffer).`,
              ),
                r(new Uint8Array(c)),
                _ && tt()
            },
            c => {
              if (i) i()
              else throw `Loading data file "${a}" failed.`
            },
          ),
            _ && dt()
        },
        ia = e.preloadPlugins || []
      function sa(a, r, i, s) {
        typeof Browser < 'u' && Browser.init()
        var _ = !1
        return (
          ia.forEach(function (c) {
            _ || (c.canHandle(r) && (c.handle(a, r, i, s), (_ = !0)))
          }),
          _
        )
      }
      function ua(a, r, i, s, _, c, m, f, y, k) {
        var I = r ? me.resolve(F.join2(a, r)) : a
        function G(v) {
          function A(W) {
            k && k(),
              f || u.createDataFile(a, r, W, s, _, y),
              c && c(),
              tt()
          }
          sa(v, I, A, () => {
            m && m(), tt()
          }) || A(v)
        }
        dt(), typeof i == 'string' ? ra(i, v => G(v), m) : G(i)
      }
      function _a(a) {
        var r = {
            r: 0,
            'r+': 2,
            w: 577,
            'w+': 578,
            a: 1089,
            'a+': 1090,
          },
          i = r[a]
        if (typeof i > 'u')
          throw new Error(`Unknown file open mode: ${a}`)
        return i
      }
      function kt(a, r) {
        var i = 0
        return a && (i |= 365), r && (i |= 146), i
      }
      var u = {
          root: null,
          mounts: [],
          devices: {},
          streams: [],
          nextInode: 1,
          nameTable: null,
          currentPath: '/',
          initialized: !1,
          ignorePermissions: !0,
          ErrnoError: null,
          genericErrors: {},
          filesystems: null,
          syncFSRequests: 0,
          lookupPath: (a, r = {}) => {
            if (((a = me.resolve(a)), !a))
              return { path: '', node: null }
            var i = { follow_mount: !0, recurse_count: 0 }
            if (((r = Object.assign(i, r)), r.recurse_count > 8))
              throw new u.ErrnoError(32)
            for (
              var s = a.split('/').filter(G => !!G),
                _ = u.root,
                c = '/',
                m = 0;
              m < s.length;
              m++
            ) {
              var f = m === s.length - 1
              if (f && r.parent) break
              if (
                ((_ = u.lookupNode(_, s[m])),
                (c = F.join2(c, s[m])),
                u.isMountpoint(_) &&
                  (!f || (f && r.follow_mount)) &&
                  (_ = _.mounted.root),
                !f || r.follow)
              )
                for (var y = 0; u.isLink(_.mode); ) {
                  var k = u.readlink(c)
                  c = me.resolve(F.dirname(c), k)
                  var I = u.lookupPath(c, {
                    recurse_count: r.recurse_count + 1,
                  })
                  if (((_ = I.node), y++ > 40))
                    throw new u.ErrnoError(32)
                }
            }
            return { path: c, node: _ }
          },
          getPath: a => {
            for (var r; ; ) {
              if (u.isRoot(a)) {
                var i = a.mount.mountpoint
                return r
                  ? i[i.length - 1] !== '/'
                    ? `${i}/${r}`
                    : i + r
                  : i
              }
              ;(r = r ? `${a.name}/${r}` : a.name), (a = a.parent)
            }
          },
          hashName: (a, r) => {
            for (var i = 0, s = 0; s < r.length; s++)
              i = ((i << 5) - i + r.charCodeAt(s)) | 0
            return ((a + i) >>> 0) % u.nameTable.length
          },
          hashAddNode: a => {
            var r = u.hashName(a.parent.id, a.name)
            ;(a.name_next = u.nameTable[r]), (u.nameTable[r] = a)
          },
          hashRemoveNode: a => {
            var r = u.hashName(a.parent.id, a.name)
            if (u.nameTable[r] === a) u.nameTable[r] = a.name_next
            else
              for (var i = u.nameTable[r]; i; ) {
                if (i.name_next === a) {
                  i.name_next = a.name_next
                  break
                }
                i = i.name_next
              }
          },
          lookupNode: (a, r) => {
            var i = u.mayLookup(a)
            if (i) throw new u.ErrnoError(i, a)
            for (
              var s = u.hashName(a.id, r), _ = u.nameTable[s];
              _;
              _ = _.name_next
            ) {
              var c = _.name
              if (_.parent.id === a.id && c === r) return _
            }
            return u.lookup(a, r)
          },
          createNode: (a, r, i, s) => {
            var _ = new u.FSNode(a, r, i, s)
            return u.hashAddNode(_), _
          },
          destroyNode: a => {
            u.hashRemoveNode(a)
          },
          isRoot: a => a === a.parent,
          isMountpoint: a => !!a.mounted,
          isFile: a => (a & 61440) === 32768,
          isDir: a => (a & 61440) === 16384,
          isLink: a => (a & 61440) === 40960,
          isChrdev: a => (a & 61440) === 8192,
          isBlkdev: a => (a & 61440) === 24576,
          isFIFO: a => (a & 61440) === 4096,
          isSocket: a => (a & 49152) === 49152,
          flagsToPermissionString: a => {
            var r = ['r', 'w', 'rw'][a & 3]
            return a & 512 && (r += 'w'), r
          },
          nodePermissions: (a, r) =>
            u.ignorePermissions
              ? 0
              : (r.includes('r') && !(a.mode & 292)) ||
                (r.includes('w') && !(a.mode & 146)) ||
                (r.includes('x') && !(a.mode & 73))
              ? 2
              : 0,
          mayLookup: a => {
            var r = u.nodePermissions(a, 'x')
            return r || (a.node_ops.lookup ? 0 : 2)
          },
          mayCreate: (a, r) => {
            try {
              var i = u.lookupNode(a, r)
              return 20
            } catch {}
            return u.nodePermissions(a, 'wx')
          },
          mayDelete: (a, r, i) => {
            var s
            try {
              s = u.lookupNode(a, r)
            } catch (c) {
              return c.errno
            }
            var _ = u.nodePermissions(a, 'wx')
            if (_) return _
            if (i) {
              if (!u.isDir(s.mode)) return 54
              if (u.isRoot(s) || u.getPath(s) === u.cwd()) return 10
            } else if (u.isDir(s.mode)) return 31
            return 0
          },
          mayOpen: (a, r) =>
            a
              ? u.isLink(a.mode)
                ? 32
                : u.isDir(a.mode) &&
                  (u.flagsToPermissionString(r) !== 'r' || r & 512)
                ? 31
                : u.nodePermissions(a, u.flagsToPermissionString(r))
              : 44,
          MAX_OPEN_FDS: 4096,
          nextfd: () => {
            for (var a = 0; a <= u.MAX_OPEN_FDS; a++)
              if (!u.streams[a]) return a
            throw new u.ErrnoError(33)
          },
          getStreamChecked: a => {
            var r = u.getStream(a)
            if (!r) throw new u.ErrnoError(8)
            return r
          },
          getStream: a => u.streams[a],
          createStream: (a, r = -1) => (
            u.FSStream ||
              ((u.FSStream = function () {
                this.shared = {}
              }),
              (u.FSStream.prototype = {}),
              Object.defineProperties(u.FSStream.prototype, {
                object: {
                  get: function () {
                    return this.node
                  },
                  set: function (i) {
                    this.node = i
                  },
                },
                isRead: {
                  get: function () {
                    return (this.flags & 2097155) !== 1
                  },
                },
                isWrite: {
                  get: function () {
                    return (this.flags & 2097155) !== 0
                  },
                },
                isAppend: {
                  get: function () {
                    return this.flags & 1024
                  },
                },
                flags: {
                  get: function () {
                    return this.shared.flags
                  },
                  set: function (i) {
                    this.shared.flags = i
                  },
                },
                position: {
                  get: function () {
                    return this.shared.position
                  },
                  set: function (i) {
                    this.shared.position = i
                  },
                },
              })),
            (a = Object.assign(new u.FSStream(), a)),
            r == -1 && (r = u.nextfd()),
            (a.fd = r),
            (u.streams[r] = a),
            a
          ),
          closeStream: a => {
            u.streams[a] = null
          },
          chrdev_stream_ops: {
            open: a => {
              var r = u.getDevice(a.node.rdev)
              ;(a.stream_ops = r.stream_ops),
                a.stream_ops.open && a.stream_ops.open(a)
            },
            llseek: () => {
              throw new u.ErrnoError(70)
            },
          },
          major: a => a >> 8,
          minor: a => a & 255,
          makedev: (a, r) => (a << 8) | r,
          registerDevice: (a, r) => {
            u.devices[a] = { stream_ops: r }
          },
          getDevice: a => u.devices[a],
          getMounts: a => {
            for (var r = [], i = [a]; i.length; ) {
              var s = i.pop()
              r.push(s), i.push.apply(i, s.mounts)
            }
            return r
          },
          syncfs: (a, r) => {
            typeof a == 'function' && ((r = a), (a = !1)),
              u.syncFSRequests++,
              u.syncFSRequests > 1 &&
                ke(
                  `warning: ${u.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`,
                )
            var i = u.getMounts(u.root.mount),
              s = 0
            function _(m) {
              return u.syncFSRequests--, r(m)
            }
            function c(m) {
              if (m)
                return c.errored ? void 0 : ((c.errored = !0), _(m))
              ++s >= i.length && _(null)
            }
            i.forEach(m => {
              if (!m.type.syncfs) return c(null)
              m.type.syncfs(m, a, c)
            })
          },
          mount: (a, r, i) => {
            var s = i === '/',
              _ = !i,
              c
            if (s && u.root) throw new u.ErrnoError(10)
            if (!s && !_) {
              var m = u.lookupPath(i, { follow_mount: !1 })
              if (((i = m.path), (c = m.node), u.isMountpoint(c)))
                throw new u.ErrnoError(10)
              if (!u.isDir(c.mode)) throw new u.ErrnoError(54)
            }
            var f = { type: a, opts: r, mountpoint: i, mounts: [] },
              y = a.mount(f)
            return (
              (y.mount = f),
              (f.root = y),
              s
                ? (u.root = y)
                : c &&
                  ((c.mounted = f), c.mount && c.mount.mounts.push(f)),
              y
            )
          },
          unmount: a => {
            var r = u.lookupPath(a, { follow_mount: !1 })
            if (!u.isMountpoint(r.node)) throw new u.ErrnoError(28)
            var i = r.node,
              s = i.mounted,
              _ = u.getMounts(s)
            Object.keys(u.nameTable).forEach(m => {
              for (var f = u.nameTable[m]; f; ) {
                var y = f.name_next
                _.includes(f.mount) && u.destroyNode(f), (f = y)
              }
            }),
              (i.mounted = null)
            var c = i.mount.mounts.indexOf(s)
            i.mount.mounts.splice(c, 1)
          },
          lookup: (a, r) => a.node_ops.lookup(a, r),
          mknod: (a, r, i) => {
            var s = u.lookupPath(a, { parent: !0 }),
              _ = s.node,
              c = F.basename(a)
            if (!c || c === '.' || c === '..')
              throw new u.ErrnoError(28)
            var m = u.mayCreate(_, c)
            if (m) throw new u.ErrnoError(m)
            if (!_.node_ops.mknod) throw new u.ErrnoError(63)
            return _.node_ops.mknod(_, c, r, i)
          },
          create: (a, r) => (
            (r = r !== void 0 ? r : 438),
            (r &= 4095),
            (r |= 32768),
            u.mknod(a, r, 0)
          ),
          mkdir: (a, r) => (
            (r = r !== void 0 ? r : 511),
            (r &= 1023),
            (r |= 16384),
            u.mknod(a, r, 0)
          ),
          mkdirTree: (a, r) => {
            for (var i = a.split('/'), s = '', _ = 0; _ < i.length; ++_)
              if (i[_]) {
                s += '/' + i[_]
                try {
                  u.mkdir(s, r)
                } catch (c) {
                  if (c.errno != 20) throw c
                }
              }
          },
          mkdev: (a, r, i) => (
            typeof i > 'u' && ((i = r), (r = 438)),
            (r |= 8192),
            u.mknod(a, r, i)
          ),
          symlink: (a, r) => {
            if (!me.resolve(a)) throw new u.ErrnoError(44)
            var i = u.lookupPath(r, { parent: !0 }),
              s = i.node
            if (!s) throw new u.ErrnoError(44)
            var _ = F.basename(r),
              c = u.mayCreate(s, _)
            if (c) throw new u.ErrnoError(c)
            if (!s.node_ops.symlink) throw new u.ErrnoError(63)
            return s.node_ops.symlink(s, _, a)
          },
          rename: (a, r) => {
            var i = F.dirname(a),
              s = F.dirname(r),
              _ = F.basename(a),
              c = F.basename(r),
              m,
              f,
              y
            if (
              ((m = u.lookupPath(a, { parent: !0 })),
              (f = m.node),
              (m = u.lookupPath(r, { parent: !0 })),
              (y = m.node),
              !f || !y)
            )
              throw new u.ErrnoError(44)
            if (f.mount !== y.mount) throw new u.ErrnoError(75)
            var k = u.lookupNode(f, _),
              I = me.relative(a, s)
            if (I.charAt(0) !== '.') throw new u.ErrnoError(28)
            if (((I = me.relative(r, i)), I.charAt(0) !== '.'))
              throw new u.ErrnoError(55)
            var G
            try {
              G = u.lookupNode(y, c)
            } catch {}
            if (k !== G) {
              var v = u.isDir(k.mode),
                A = u.mayDelete(f, _, v)
              if (A) throw new u.ErrnoError(A)
              if (
                ((A = G ? u.mayDelete(y, c, v) : u.mayCreate(y, c)), A)
              )
                throw new u.ErrnoError(A)
              if (!f.node_ops.rename) throw new u.ErrnoError(63)
              if (u.isMountpoint(k) || (G && u.isMountpoint(G)))
                throw new u.ErrnoError(10)
              if (y !== f && ((A = u.nodePermissions(f, 'w')), A))
                throw new u.ErrnoError(A)
              u.hashRemoveNode(k)
              try {
                f.node_ops.rename(k, y, c)
              } catch (W) {
                throw W
              } finally {
                u.hashAddNode(k)
              }
            }
          },
          rmdir: a => {
            var r = u.lookupPath(a, { parent: !0 }),
              i = r.node,
              s = F.basename(a),
              _ = u.lookupNode(i, s),
              c = u.mayDelete(i, s, !0)
            if (c) throw new u.ErrnoError(c)
            if (!i.node_ops.rmdir) throw new u.ErrnoError(63)
            if (u.isMountpoint(_)) throw new u.ErrnoError(10)
            i.node_ops.rmdir(i, s), u.destroyNode(_)
          },
          readdir: a => {
            var r = u.lookupPath(a, { follow: !0 }),
              i = r.node
            if (!i.node_ops.readdir) throw new u.ErrnoError(54)
            return i.node_ops.readdir(i)
          },
          unlink: a => {
            var r = u.lookupPath(a, { parent: !0 }),
              i = r.node
            if (!i) throw new u.ErrnoError(44)
            var s = F.basename(a),
              _ = u.lookupNode(i, s),
              c = u.mayDelete(i, s, !1)
            if (c) throw new u.ErrnoError(c)
            if (!i.node_ops.unlink) throw new u.ErrnoError(63)
            if (u.isMountpoint(_)) throw new u.ErrnoError(10)
            i.node_ops.unlink(i, s), u.destroyNode(_)
          },
          readlink: a => {
            var r = u.lookupPath(a),
              i = r.node
            if (!i) throw new u.ErrnoError(44)
            if (!i.node_ops.readlink) throw new u.ErrnoError(28)
            return me.resolve(
              u.getPath(i.parent),
              i.node_ops.readlink(i),
            )
          },
          stat: (a, r) => {
            var i = u.lookupPath(a, { follow: !r }),
              s = i.node
            if (!s) throw new u.ErrnoError(44)
            if (!s.node_ops.getattr) throw new u.ErrnoError(63)
            return s.node_ops.getattr(s)
          },
          lstat: a => u.stat(a, !0),
          chmod: (a, r, i) => {
            var s
            if (typeof a == 'string') {
              var _ = u.lookupPath(a, { follow: !i })
              s = _.node
            } else s = a
            if (!s.node_ops.setattr) throw new u.ErrnoError(63)
            s.node_ops.setattr(s, {
              mode: (r & 4095) | (s.mode & -4096),
              timestamp: Date.now(),
            })
          },
          lchmod: (a, r) => {
            u.chmod(a, r, !0)
          },
          fchmod: (a, r) => {
            var i = u.getStreamChecked(a)
            u.chmod(i.node, r)
          },
          chown: (a, r, i, s) => {
            var _
            if (typeof a == 'string') {
              var c = u.lookupPath(a, { follow: !s })
              _ = c.node
            } else _ = a
            if (!_.node_ops.setattr) throw new u.ErrnoError(63)
            _.node_ops.setattr(_, { timestamp: Date.now() })
          },
          lchown: (a, r, i) => {
            u.chown(a, r, i, !0)
          },
          fchown: (a, r, i) => {
            var s = u.getStreamChecked(a)
            u.chown(s.node, r, i)
          },
          truncate: (a, r) => {
            if (r < 0) throw new u.ErrnoError(28)
            var i
            if (typeof a == 'string') {
              var s = u.lookupPath(a, { follow: !0 })
              i = s.node
            } else i = a
            if (!i.node_ops.setattr) throw new u.ErrnoError(63)
            if (u.isDir(i.mode)) throw new u.ErrnoError(31)
            if (!u.isFile(i.mode)) throw new u.ErrnoError(28)
            var _ = u.nodePermissions(i, 'w')
            if (_) throw new u.ErrnoError(_)
            i.node_ops.setattr(i, { size: r, timestamp: Date.now() })
          },
          ftruncate: (a, r) => {
            var i = u.getStreamChecked(a)
            if (!(i.flags & 2097155)) throw new u.ErrnoError(28)
            u.truncate(i.node, r)
          },
          utime: (a, r, i) => {
            var s = u.lookupPath(a, { follow: !0 }),
              _ = s.node
            _.node_ops.setattr(_, { timestamp: Math.max(r, i) })
          },
          open: (a, r, i) => {
            if (a === '') throw new u.ErrnoError(44)
            ;(r = typeof r == 'string' ? _a(r) : r),
              (i = typeof i > 'u' ? 438 : i),
              r & 64 ? (i = (i & 4095) | 32768) : (i = 0)
            var s
            if (typeof a == 'object') s = a
            else {
              a = F.normalize(a)
              try {
                var _ = u.lookupPath(a, { follow: !(r & 131072) })
                s = _.node
              } catch {}
            }
            var c = !1
            if (r & 64)
              if (s) {
                if (r & 128) throw new u.ErrnoError(20)
              } else (s = u.mknod(a, i, 0)), (c = !0)
            if (!s) throw new u.ErrnoError(44)
            if (
              (u.isChrdev(s.mode) && (r &= -513),
              r & 65536 && !u.isDir(s.mode))
            )
              throw new u.ErrnoError(54)
            if (!c) {
              var m = u.mayOpen(s, r)
              if (m) throw new u.ErrnoError(m)
            }
            r & 512 && !c && u.truncate(s, 0), (r &= -131713)
            var f = u.createStream({
              node: s,
              path: u.getPath(s),
              flags: r,
              seekable: !0,
              position: 0,
              stream_ops: s.stream_ops,
              ungotten: [],
              error: !1,
            })
            return (
              f.stream_ops.open && f.stream_ops.open(f),
              e.logReadFiles &&
                !(r & 1) &&
                (u.readFiles || (u.readFiles = {}),
                a in u.readFiles || (u.readFiles[a] = 1)),
              f
            )
          },
          close: a => {
            if (u.isClosed(a)) throw new u.ErrnoError(8)
            a.getdents && (a.getdents = null)
            try {
              a.stream_ops.close && a.stream_ops.close(a)
            } catch (r) {
              throw r
            } finally {
              u.closeStream(a.fd)
            }
            a.fd = null
          },
          isClosed: a => a.fd === null,
          llseek: (a, r, i) => {
            if (u.isClosed(a)) throw new u.ErrnoError(8)
            if (!a.seekable || !a.stream_ops.llseek)
              throw new u.ErrnoError(70)
            if (i != 0 && i != 1 && i != 2) throw new u.ErrnoError(28)
            return (
              (a.position = a.stream_ops.llseek(a, r, i)),
              (a.ungotten = []),
              a.position
            )
          },
          read: (a, r, i, s, _) => {
            if (((i >>>= 0), s < 0 || _ < 0)) throw new u.ErrnoError(28)
            if (u.isClosed(a)) throw new u.ErrnoError(8)
            if ((a.flags & 2097155) === 1) throw new u.ErrnoError(8)
            if (u.isDir(a.node.mode)) throw new u.ErrnoError(31)
            if (!a.stream_ops.read) throw new u.ErrnoError(28)
            var c = typeof _ < 'u'
            if (!c) _ = a.position
            else if (!a.seekable) throw new u.ErrnoError(70)
            var m = a.stream_ops.read(a, r, i, s, _)
            return c || (a.position += m), m
          },
          write: (a, r, i, s, _, c) => {
            if (((i >>>= 0), s < 0 || _ < 0)) throw new u.ErrnoError(28)
            if (u.isClosed(a)) throw new u.ErrnoError(8)
            if (!(a.flags & 2097155)) throw new u.ErrnoError(8)
            if (u.isDir(a.node.mode)) throw new u.ErrnoError(31)
            if (!a.stream_ops.write) throw new u.ErrnoError(28)
            a.seekable && a.flags & 1024 && u.llseek(a, 0, 2)
            var m = typeof _ < 'u'
            if (!m) _ = a.position
            else if (!a.seekable) throw new u.ErrnoError(70)
            var f = a.stream_ops.write(a, r, i, s, _, c)
            return m || (a.position += f), f
          },
          allocate: (a, r, i) => {
            if (u.isClosed(a)) throw new u.ErrnoError(8)
            if (r < 0 || i <= 0) throw new u.ErrnoError(28)
            if (!(a.flags & 2097155)) throw new u.ErrnoError(8)
            if (!u.isFile(a.node.mode) && !u.isDir(a.node.mode))
              throw new u.ErrnoError(43)
            if (!a.stream_ops.allocate) throw new u.ErrnoError(138)
            a.stream_ops.allocate(a, r, i)
          },
          mmap: (a, r, i, s, _) => {
            if (s & 2 && !(_ & 2) && (a.flags & 2097155) !== 2)
              throw new u.ErrnoError(2)
            if ((a.flags & 2097155) === 1) throw new u.ErrnoError(2)
            if (!a.stream_ops.mmap) throw new u.ErrnoError(43)
            return a.stream_ops.mmap(a, r, i, s, _)
          },
          msync: (a, r, i, s, _) => (
            (i >>>= 0),
            a.stream_ops.msync ? a.stream_ops.msync(a, r, i, s, _) : 0
          ),
          munmap: a => 0,
          ioctl: (a, r, i) => {
            if (!a.stream_ops.ioctl) throw new u.ErrnoError(59)
            return a.stream_ops.ioctl(a, r, i)
          },
          readFile: (a, r = {}) => {
            if (
              ((r.flags = r.flags || 0),
              (r.encoding = r.encoding || 'binary'),
              r.encoding !== 'utf8' && r.encoding !== 'binary')
            )
              throw new Error(`Invalid encoding type "${r.encoding}"`)
            var i,
              s = u.open(a, r.flags),
              _ = u.stat(a),
              c = _.size,
              m = new Uint8Array(c)
            return (
              u.read(s, m, 0, c, 0),
              r.encoding === 'utf8'
                ? (i = Ne(m, 0))
                : r.encoding === 'binary' && (i = m),
              u.close(s),
              i
            )
          },
          writeFile: (a, r, i = {}) => {
            i.flags = i.flags || 577
            var s = u.open(a, i.flags, i.mode)
            if (typeof r == 'string') {
              var _ = new Uint8Array(Ee(r) + 1),
                c = St(r, _, 0, _.length)
              u.write(s, _, 0, c, void 0, i.canOwn)
            } else if (ArrayBuffer.isView(r))
              u.write(s, r, 0, r.byteLength, void 0, i.canOwn)
            else throw new Error('Unsupported data type')
            u.close(s)
          },
          cwd: () => u.currentPath,
          chdir: a => {
            var r = u.lookupPath(a, { follow: !0 })
            if (r.node === null) throw new u.ErrnoError(44)
            if (!u.isDir(r.node.mode)) throw new u.ErrnoError(54)
            var i = u.nodePermissions(r.node, 'x')
            if (i) throw new u.ErrnoError(i)
            u.currentPath = r.path
          },
          createDefaultDirectories: () => {
            u.mkdir('/tmp'), u.mkdir('/home'), u.mkdir('/home/web_user')
          },
          createDefaultDevices: () => {
            u.mkdir('/dev'),
              u.registerDevice(u.makedev(1, 3), {
                read: () => 0,
                write: (s, _, c, m, f) => m,
              }),
              u.mkdev('/dev/null', u.makedev(1, 3)),
              Re.register(u.makedev(5, 0), Re.default_tty_ops),
              Re.register(u.makedev(6, 0), Re.default_tty1_ops),
              u.mkdev('/dev/tty', u.makedev(5, 0)),
              u.mkdev('/dev/tty1', u.makedev(6, 0))
            var a = new Uint8Array(1024),
              r = 0,
              i = () => (r === 0 && (r = yt(a).byteLength), a[--r])
            u.createDevice('/dev', 'random', i),
              u.createDevice('/dev', 'urandom', i),
              u.mkdir('/dev/shm'),
              u.mkdir('/dev/shm/tmp')
          },
          createSpecialDirectories: () => {
            u.mkdir('/proc')
            var a = u.mkdir('/proc/self')
            u.mkdir('/proc/self/fd'),
              u.mount(
                {
                  mount: () => {
                    var r = u.createNode(a, 'fd', 16895, 73)
                    return (
                      (r.node_ops = {
                        lookup: (i, s) => {
                          var _ = +s,
                            c = u.getStreamChecked(_),
                            m = {
                              parent: null,
                              mount: { mountpoint: 'fake' },
                              node_ops: { readlink: () => c.path },
                            }
                          return (m.parent = m), m
                        },
                      }),
                      r
                    )
                  },
                },
                {},
                '/proc/self/fd',
              )
          },
          createStandardStreams: () => {
            e.stdin
              ? u.createDevice('/dev', 'stdin', e.stdin)
              : u.symlink('/dev/tty', '/dev/stdin'),
              e.stdout
                ? u.createDevice('/dev', 'stdout', null, e.stdout)
                : u.symlink('/dev/tty', '/dev/stdout'),
              e.stderr
                ? u.createDevice('/dev', 'stderr', null, e.stderr)
                : u.symlink('/dev/tty1', '/dev/stderr'),
              u.open('/dev/stdin', 0),
              u.open('/dev/stdout', 1),
              u.open('/dev/stderr', 1)
          },
          ensureErrnoError: () => {
            u.ErrnoError ||
              ((u.ErrnoError = function (r, i) {
                ;(this.name = 'ErrnoError'),
                  (this.node = i),
                  (this.setErrno = function (s) {
                    this.errno = s
                  }),
                  this.setErrno(r),
                  (this.message = 'FS error')
              }),
              (u.ErrnoError.prototype = new Error()),
              (u.ErrnoError.prototype.constructor = u.ErrnoError),
              [44].forEach(a => {
                ;(u.genericErrors[a] = new u.ErrnoError(a)),
                  (u.genericErrors[a].stack =
                    '<generic error, no stack>')
              }))
          },
          staticInit: () => {
            u.ensureErrnoError(),
              (u.nameTable = new Array(4096)),
              u.mount(C, {}, '/'),
              u.createDefaultDirectories(),
              u.createDefaultDevices(),
              u.createSpecialDirectories(),
              (u.filesystems = { MEMFS: C })
          },
          init: (a, r, i) => {
            ;(u.init.initialized = !0),
              u.ensureErrnoError(),
              (e.stdin = a || e.stdin),
              (e.stdout = r || e.stdout),
              (e.stderr = i || e.stderr),
              u.createStandardStreams()
          },
          quit: () => {
            u.init.initialized = !1
            for (var a = 0; a < u.streams.length; a++) {
              var r = u.streams[a]
              r && u.close(r)
            }
          },
          findObject: (a, r) => {
            var i = u.analyzePath(a, r)
            return i.exists ? i.object : null
          },
          analyzePath: (a, r) => {
            try {
              var i = u.lookupPath(a, { follow: !r })
              a = i.path
            } catch {}
            var s = {
              isRoot: !1,
              exists: !1,
              error: 0,
              name: null,
              path: null,
              object: null,
              parentExists: !1,
              parentPath: null,
              parentObject: null,
            }
            try {
              var i = u.lookupPath(a, { parent: !0 })
              ;(s.parentExists = !0),
                (s.parentPath = i.path),
                (s.parentObject = i.node),
                (s.name = F.basename(a)),
                (i = u.lookupPath(a, { follow: !r })),
                (s.exists = !0),
                (s.path = i.path),
                (s.object = i.node),
                (s.name = i.node.name),
                (s.isRoot = i.path === '/')
            } catch (_) {
              s.error = _.errno
            }
            return s
          },
          createPath: (a, r, i, s) => {
            a = typeof a == 'string' ? a : u.getPath(a)
            for (var _ = r.split('/').reverse(); _.length; ) {
              var c = _.pop()
              if (c) {
                var m = F.join2(a, c)
                try {
                  u.mkdir(m)
                } catch {}
                a = m
              }
            }
            return m
          },
          createFile: (a, r, i, s, _) => {
            var c = F.join2(typeof a == 'string' ? a : u.getPath(a), r),
              m = kt(s, _)
            return u.create(c, m)
          },
          createDataFile: (a, r, i, s, _, c) => {
            var m = r
            a &&
              ((a = typeof a == 'string' ? a : u.getPath(a)),
              (m = r ? F.join2(a, r) : a))
            var f = kt(s, _),
              y = u.create(m, f)
            if (i) {
              if (typeof i == 'string') {
                for (
                  var k = new Array(i.length), I = 0, G = i.length;
                  I < G;
                  ++I
                )
                  k[I] = i.charCodeAt(I)
                i = k
              }
              u.chmod(y, f | 146)
              var v = u.open(y, 577)
              u.write(v, i, 0, i.length, 0, c),
                u.close(v),
                u.chmod(y, f)
            }
            return y
          },
          createDevice: (a, r, i, s) => {
            var _ = F.join2(typeof a == 'string' ? a : u.getPath(a), r),
              c = kt(!!i, !!s)
            u.createDevice.major || (u.createDevice.major = 64)
            var m = u.makedev(u.createDevice.major++, 0)
            return (
              u.registerDevice(m, {
                open: f => {
                  f.seekable = !1
                },
                close: f => {
                  s && s.buffer && s.buffer.length && s(10)
                },
                read: (f, y, k, I, G) => {
                  for (var v = 0, A = 0; A < I; A++) {
                    var W
                    try {
                      W = i()
                    } catch {
                      throw new u.ErrnoError(29)
                    }
                    if (W === void 0 && v === 0)
                      throw new u.ErrnoError(6)
                    if (W == null) break
                    v++, (y[k + A] = W)
                  }
                  return v && (f.node.timestamp = Date.now()), v
                },
                write: (f, y, k, I, G) => {
                  for (var v = 0; v < I; v++)
                    try {
                      s(y[k + v])
                    } catch {
                      throw new u.ErrnoError(29)
                    }
                  return I && (f.node.timestamp = Date.now()), v
                },
              }),
              u.mkdev(_, c, m)
            )
          },
          forceLoadFile: a => {
            if (a.isDevice || a.isFolder || a.link || a.contents)
              return !0
            if (typeof XMLHttpRequest < 'u')
              throw new Error(
                'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.',
              )
            if (De)
              try {
                ;(a.contents = nt(De(a.url), !0)),
                  (a.usedBytes = a.contents.length)
              } catch {
                throw new u.ErrnoError(29)
              }
            else
              throw new Error(
                'Cannot load without read() or XMLHttpRequest.',
              )
          },
          createLazyFile: (a, r, i, s, _) => {
            function c() {
              ;(this.lengthKnown = !1), (this.chunks = [])
            }
            if (
              ((c.prototype.get = function (A) {
                if (!(A > this.length - 1 || A < 0)) {
                  var W = A % this.chunkSize,
                    V = (A / this.chunkSize) | 0
                  return this.getter(V)[W]
                }
              }),
              (c.prototype.setDataGetter = function (A) {
                this.getter = A
              }),
              (c.prototype.cacheLength = function () {
                var A = new XMLHttpRequest()
                if (
                  (A.open('HEAD', i, !1),
                  A.send(null),
                  !(
                    (A.status >= 200 && A.status < 300) ||
                    A.status === 304
                  ))
                )
                  throw new Error(
                    "Couldn't load " + i + '. Status: ' + A.status,
                  )
                var W = Number(A.getResponseHeader('Content-length')),
                  V,
                  ee =
                    (V = A.getResponseHeader('Accept-Ranges')) &&
                    V === 'bytes',
                  te =
                    (V = A.getResponseHeader('Content-Encoding')) &&
                    V === 'gzip',
                  w = 1024 * 1024
                ee || (w = W)
                var R = (j, le) => {
                    if (j > le)
                      throw new Error(
                        'invalid range (' +
                          j +
                          ', ' +
                          le +
                          ') or no bytes requested!',
                      )
                    if (le > W - 1)
                      throw new Error(
                        'only ' +
                          W +
                          ' bytes available! programmer error!',
                      )
                    var Q = new XMLHttpRequest()
                    if (
                      (Q.open('GET', i, !1),
                      W !== w &&
                        Q.setRequestHeader(
                          'Range',
                          'bytes=' + j + '-' + le,
                        ),
                      (Q.responseType = 'arraybuffer'),
                      Q.overrideMimeType &&
                        Q.overrideMimeType(
                          'text/plain; charset=x-user-defined',
                        ),
                      Q.send(null),
                      !(
                        (Q.status >= 200 && Q.status < 300) ||
                        Q.status === 304
                      ))
                    )
                      throw new Error(
                        "Couldn't load " + i + '. Status: ' + Q.status,
                      )
                    return Q.response !== void 0
                      ? new Uint8Array(Q.response || [])
                      : nt(Q.responseText || '', !0)
                  },
                  $ = this
                $.setDataGetter(j => {
                  var le = j * w,
                    Q = (j + 1) * w - 1
                  if (
                    ((Q = Math.min(Q, W - 1)),
                    typeof $.chunks[j] > 'u' &&
                      ($.chunks[j] = R(le, Q)),
                    typeof $.chunks[j] > 'u')
                  )
                    throw new Error('doXHR failed!')
                  return $.chunks[j]
                }),
                  (te || !W) &&
                    ((w = W = 1),
                    (W = this.getter(0).length),
                    (w = W),
                    ft(
                      'LazyFiles on gzip forces download of the whole file when length is accessed',
                    )),
                  (this._length = W),
                  (this._chunkSize = w),
                  (this.lengthKnown = !0)
              }),
              typeof XMLHttpRequest < 'u')
            ) {
              if (!T)
                throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc'
              var m = new c()
              Object.defineProperties(m, {
                length: {
                  get: function () {
                    return (
                      this.lengthKnown || this.cacheLength(),
                      this._length
                    )
                  },
                },
                chunkSize: {
                  get: function () {
                    return (
                      this.lengthKnown || this.cacheLength(),
                      this._chunkSize
                    )
                  },
                },
              })
              var f = { isDevice: !1, contents: m }
            } else var f = { isDevice: !1, url: i }
            var y = u.createFile(a, r, f, s, _)
            f.contents
              ? (y.contents = f.contents)
              : f.url && ((y.contents = null), (y.url = f.url)),
              Object.defineProperties(y, {
                usedBytes: {
                  get: function () {
                    return this.contents.length
                  },
                },
              })
            var k = {},
              I = Object.keys(y.stream_ops)
            I.forEach(v => {
              var A = y.stream_ops[v]
              k[v] = function () {
                return u.forceLoadFile(y), A.apply(null, arguments)
              }
            })
            function G(v, A, W, V, ee) {
              var te = v.node.contents
              if (ee >= te.length) return 0
              var w = Math.min(te.length - ee, V)
              if (te.slice)
                for (var R = 0; R < w; R++) A[W + R] = te[ee + R]
              else for (var R = 0; R < w; R++) A[W + R] = te.get(ee + R)
              return w
            }
            return (
              (k.read = (v, A, W, V, ee) => (
                u.forceLoadFile(y), G(v, A, W, V, ee)
              )),
              (k.mmap = (v, A, W, V, ee) => {
                u.forceLoadFile(y)
                var te = Xt(A)
                if (!te) throw new u.ErrnoError(48)
                return G(v, Y, te, A, W), { ptr: te, allocated: !0 }
              }),
              (y.stream_ops = k),
              y
            )
          },
        },
        Qe = (a, r) => ((a >>>= 0), a ? Ne(Z, a, r) : ''),
        b = {
          DEFAULT_POLLMASK: 5,
          calculateAt: function (a, r, i) {
            if (F.isAbs(r)) return r
            var s
            if (a === -100) s = u.cwd()
            else {
              var _ = b.getStreamFromFD(a)
              s = _.path
            }
            if (r.length == 0) {
              if (!i) throw new u.ErrnoError(44)
              return s
            }
            return F.join2(s, r)
          },
          doStat: function (a, r, i) {
            try {
              var s = a(r)
            } catch (f) {
              if (
                f &&
                f.node &&
                F.normalize(r) !== F.normalize(u.getPath(f.node))
              )
                return -54
              throw f
            }
            ;(M[i >>> 2] = s.dev),
              (M[(i + 4) >>> 2] = s.mode),
              (B[(i + 8) >>> 2] = s.nlink),
              (M[(i + 12) >>> 2] = s.uid),
              (M[(i + 16) >>> 2] = s.gid),
              (M[(i + 20) >>> 2] = s.rdev),
              (ne[(i + 24) >> 3] = BigInt(s.size)),
              (M[(i + 32) >>> 2] = 4096),
              (M[(i + 36) >>> 2] = s.blocks)
            var _ = s.atime.getTime(),
              c = s.mtime.getTime(),
              m = s.ctime.getTime()
            return (
              (ne[(i + 40) >> 3] = BigInt(Math.floor(_ / 1e3))),
              (B[(i + 48) >>> 2] = (_ % 1e3) * 1e3),
              (ne[(i + 56) >> 3] = BigInt(Math.floor(c / 1e3))),
              (B[(i + 64) >>> 2] = (c % 1e3) * 1e3),
              (ne[(i + 72) >> 3] = BigInt(Math.floor(m / 1e3))),
              (B[(i + 80) >>> 2] = (m % 1e3) * 1e3),
              (ne[(i + 88) >> 3] = BigInt(s.ino)),
              0
            )
          },
          doMsync: function (a, r, i, s, _) {
            if (!u.isFile(r.node.mode)) throw new u.ErrnoError(43)
            if (s & 2) return 0
            a >>>= 0
            var c = Z.slice(a, a + i)
            u.msync(r, c, _, i, s)
          },
          varargs: void 0,
          get: function () {
            b.varargs += 4
            var a = M[(b.varargs - 4) >>> 2]
            return a
          },
          getStr: function (a) {
            var r = Qe(a)
            return r
          },
          getStreamFromFD: function (a) {
            var r = u.getStreamChecked(a)
            return r
          },
        }
      function oa(a, r) {
        try {
          return (a = b.getStr(a)), u.chmod(a, r), 0
        } catch (i) {
          if (typeof u > 'u' || i.name !== 'ErrnoError') throw i
          return -i.errno
        }
      }
      function la(a) {
        try {
          var r = b.getStreamFromFD(a)
          return u.createStream(r).fd
        } catch (i) {
          if (typeof u > 'u' || i.name !== 'ErrnoError') throw i
          return -i.errno
        }
      }
      function ca(a, r, i, s) {
        try {
          if (((r = b.getStr(r)), (r = b.calculateAt(a, r)), i & -8))
            return -28
          var _ = u.lookupPath(r, { follow: !0 }),
            c = _.node
          if (!c) return -44
          var m = ''
          return (
            i & 4 && (m += 'r'),
            i & 2 && (m += 'w'),
            i & 1 && (m += 'x'),
            m && u.nodePermissions(c, m) ? -2 : 0
          )
        } catch (f) {
          if (typeof u > 'u' || f.name !== 'ErrnoError') throw f
          return -f.errno
        }
      }
      var ga = 9007199254740992,
        ma = -9007199254740992
      function be(a) {
        return a < ma || a > ga ? NaN : Number(a)
      }
      function fa(a, r, i, s) {
        try {
          if (((i = be(i)), isNaN(i) || ((s = be(s)), isNaN(s))))
            return -61
          var _ = b.getStreamFromFD(a)
          return u.allocate(_, i, s), 0
        } catch (c) {
          if (typeof u > 'u' || c.name !== 'ErrnoError') throw c
          return -c.errno
        }
      }
      function pa(a, r) {
        try {
          return u.fchmod(a, r), 0
        } catch (i) {
          if (typeof u > 'u' || i.name !== 'ErrnoError') throw i
          return -i.errno
        }
      }
      var Vt = a => ((M[hn() >>> 2] = a), a)
      function da(a, r, i) {
        b.varargs = i
        try {
          var s = b.getStreamFromFD(a)
          switch (r) {
            case 0: {
              var _ = b.get()
              if (_ < 0) return -28
              var c
              return (c = u.createStream(s, _)), c.fd
            }
            case 1:
            case 2:
              return 0
            case 3:
              return s.flags
            case 4: {
              var _ = b.get()
              return (s.flags |= _), 0
            }
            case 5: {
              var _ = b.get(),
                m = 0
              return (re[(_ + m) >>> 1] = 2), 0
            }
            case 6:
            case 7:
              return 0
            case 16:
            case 8:
              return -28
            case 9:
              return Vt(28), -1
            default:
              return -28
          }
        } catch (f) {
          if (typeof u > 'u' || f.name !== 'ErrnoError') throw f
          return -f.errno
        }
      }
      function ha(a, r) {
        try {
          var i = b.getStreamFromFD(a)
          return b.doStat(u.stat, i.path, r)
        } catch (s) {
          if (typeof u > 'u' || s.name !== 'ErrnoError') throw s
          return -s.errno
        }
      }
      var xe = (a, r, i) => St(a, Z, r, i)
      function ya(a, r) {
        try {
          if (r === 0) return -28
          var i = u.cwd(),
            s = Ee(i) + 1
          return r < s ? -68 : (xe(i, a, r), s)
        } catch (_) {
          if (typeof u > 'u' || _.name !== 'ErrnoError') throw _
          return -_.errno
        }
      }
      function Sa(a, r, i) {
        try {
          var s = b.getStreamFromFD(a)
          s.getdents || (s.getdents = u.readdir(s.path))
          for (
            var _ = 280,
              c = 0,
              m = u.llseek(s, 0, 1),
              f = Math.floor(m / _);
            f < s.getdents.length && c + _ <= i;

          ) {
            var y,
              k,
              I = s.getdents[f]
            if (I === '.') (y = s.node.id), (k = 4)
            else if (I === '..') {
              var G = u.lookupPath(s.path, { parent: !0 })
              ;(y = G.node.id), (k = 4)
            } else {
              var v = u.lookupNode(s.node, I)
              ;(y = v.id),
                (k = u.isChrdev(v.mode)
                  ? 2
                  : u.isDir(v.mode)
                  ? 4
                  : u.isLink(v.mode)
                  ? 10
                  : 8)
            }
            ;(ne[(r + c) >> 3] = BigInt(y)),
              (ne[(r + c + 8) >> 3] = BigInt((f + 1) * _)),
              (re[(r + c + 16) >>> 1] = 280),
              (Y[(r + c + 18) >>> 0] = k),
              xe(I, r + c + 19, 256),
              (c += _),
              (f += 1)
          }
          return u.llseek(s, f * _, 0), c
        } catch (A) {
          if (typeof u > 'u' || A.name !== 'ErrnoError') throw A
          return -A.errno
        }
      }
      function ka(a, r, i) {
        b.varargs = i
        try {
          var s = b.getStreamFromFD(a)
          switch (r) {
            case 21509:
              return s.tty ? 0 : -59
            case 21505: {
              if (!s.tty) return -59
              if (s.tty.ops.ioctl_tcgets) {
                var _ = s.tty.ops.ioctl_tcgets(s),
                  c = b.get()
                ;(M[c >>> 2] = _.c_iflag || 0),
                  (M[(c + 4) >>> 2] = _.c_oflag || 0),
                  (M[(c + 8) >>> 2] = _.c_cflag || 0),
                  (M[(c + 12) >>> 2] = _.c_lflag || 0)
                for (var m = 0; m < 32; m++)
                  Y[(c + m + 17) >>> 0] = _.c_cc[m] || 0
                return 0
              }
              return 0
            }
            case 21510:
            case 21511:
            case 21512:
              return s.tty ? 0 : -59
            case 21506:
            case 21507:
            case 21508: {
              if (!s.tty) return -59
              if (s.tty.ops.ioctl_tcsets) {
                for (
                  var c = b.get(),
                    f = M[c >>> 2],
                    y = M[(c + 4) >>> 2],
                    k = M[(c + 8) >>> 2],
                    I = M[(c + 12) >>> 2],
                    G = [],
                    m = 0;
                  m < 32;
                  m++
                )
                  G.push(Y[(c + m + 17) >>> 0])
                return s.tty.ops.ioctl_tcsets(s.tty, r, {
                  c_iflag: f,
                  c_oflag: y,
                  c_cflag: k,
                  c_lflag: I,
                  c_cc: G,
                })
              }
              return 0
            }
            case 21519: {
              if (!s.tty) return -59
              var c = b.get()
              return (M[c >>> 2] = 0), 0
            }
            case 21520:
              return s.tty ? -28 : -59
            case 21531: {
              var c = b.get()
              return u.ioctl(s, r, c)
            }
            case 21523: {
              if (!s.tty) return -59
              if (s.tty.ops.ioctl_tiocgwinsz) {
                var v = s.tty.ops.ioctl_tiocgwinsz(s.tty),
                  c = b.get()
                ;(re[c >>> 1] = v[0]), (re[(c + 2) >>> 1] = v[1])
              }
              return 0
            }
            case 21524:
              return s.tty ? 0 : -59
            case 21515:
              return s.tty ? 0 : -59
            default:
              return -28
          }
        } catch (A) {
          if (typeof u > 'u' || A.name !== 'ErrnoError') throw A
          return -A.errno
        }
      }
      function wa(a, r) {
        try {
          return (a = b.getStr(a)), b.doStat(u.lstat, a, r)
        } catch (i) {
          if (typeof u > 'u' || i.name !== 'ErrnoError') throw i
          return -i.errno
        }
      }
      function Ma(a, r, i, s) {
        try {
          r = b.getStr(r)
          var _ = s & 256,
            c = s & 4096
          return (
            (s = s & -6401),
            (r = b.calculateAt(a, r, c)),
            b.doStat(_ ? u.lstat : u.stat, r, i)
          )
        } catch (m) {
          if (typeof u > 'u' || m.name !== 'ErrnoError') throw m
          return -m.errno
        }
      }
      function Ia(a, r, i, s) {
        b.varargs = s
        try {
          ;(r = b.getStr(r)), (r = b.calculateAt(a, r))
          var _ = s ? b.get() : 0
          return u.open(r, i, _).fd
        } catch (c) {
          if (typeof u > 'u' || c.name !== 'ErrnoError') throw c
          return -c.errno
        }
      }
      function va(a, r, i, s) {
        try {
          if (((r = b.getStr(r)), (r = b.calculateAt(a, r)), s <= 0))
            return -28
          var _ = u.readlink(r),
            c = Math.min(s, Ee(_)),
            m = Y[(i + c) >>> 0]
          return xe(_, i, s + 1), (Y[(i + c) >>> 0] = m), c
        } catch (f) {
          if (typeof u > 'u' || f.name !== 'ErrnoError') throw f
          return -f.errno
        }
      }
      function Da(a) {
        try {
          return (a = b.getStr(a)), u.rmdir(a), 0
        } catch (r) {
          if (typeof u > 'u' || r.name !== 'ErrnoError') throw r
          return -r.errno
        }
      }
      function Ga(a, r) {
        try {
          return (a = b.getStr(a)), b.doStat(u.stat, a, r)
        } catch (i) {
          if (typeof u > 'u' || i.name !== 'ErrnoError') throw i
          return -i.errno
        }
      }
      function Aa(a, r) {
        try {
          return (
            (a = b.getStr(a)), (r = b.getStr(r)), u.symlink(a, r), 0
          )
        } catch (i) {
          if (typeof u > 'u' || i.name !== 'ErrnoError') throw i
          return -i.errno
        }
      }
      function Ea(a, r, i) {
        try {
          return (
            (r = b.getStr(r)),
            (r = b.calculateAt(a, r)),
            i === 0
              ? u.unlink(r)
              : i === 512
              ? u.rmdir(r)
              : ge('Invalid flags passed to unlinkat'),
            0
          )
        } catch (s) {
          if (typeof u > 'u' || s.name !== 'ErrnoError') throw s
          return -s.errno
        }
      }
      function Qt(a) {
        if (a === null) return 'null'
        var r = typeof a
        return r === 'object' || r === 'array' || r === 'function'
          ? a.toString()
          : '' + a
      }
      function Ra() {
        for (var a = new Array(256), r = 0; r < 256; ++r)
          a[r] = String.fromCharCode(r)
        qt = a
      }
      var qt = void 0
      function fe(a) {
        for (var r = '', i = a; Z[i >>> 0]; ) r += qt[Z[i++ >>> 0]]
        return r
      }
      var wt = {},
        $t = {},
        ba = 48,
        Pa = 57
      function Ta(a) {
        if (a === void 0) return '_unknown'
        a = a.replace(/[^a-zA-Z0-9_]/g, '$')
        var r = a.charCodeAt(0)
        return r >= ba && r <= Pa ? `_${a}` : a
      }
      function Ca(a, r) {
        return (
          (a = Ta(a)),
          {
            [a]: function () {
              return r.apply(this, arguments)
            },
          }[a]
        )
      }
      function Jt(a, r) {
        var i = Ca(r, function (s) {
          ;(this.name = r), (this.message = s)
          var _ = new Error(s).stack
          _ !== void 0 &&
            (this.stack =
              this.toString() +
              `
` +
              _.replace(/^Error(:[^\n]*)?\n/, ''))
        })
        return (
          (i.prototype = Object.create(a.prototype)),
          (i.prototype.constructor = i),
          (i.prototype.toString = function () {
            return this.message === void 0
              ? this.name
              : `${this.name}: ${this.message}`
          }),
          i
        )
      }
      var Kt = void 0
      function ze(a) {
        throw new Kt(a)
      }
      function pe(a, r, i = {}) {
        if (!('argPackAdvance' in r))
          throw new TypeError(
            'registerType registeredInstance requires argPackAdvance',
          )
        var s = r.name
        if (
          (a ||
            ze(
              `type "${s}" must have a positive integer typeid pointer`,
            ),
          $t.hasOwnProperty(a))
        ) {
          if (i.ignoreDuplicateRegistrations) return
          ze(`Cannot register type '${s}' twice`)
        }
        if ((($t[a] = r), wt.hasOwnProperty(a))) {
          var _ = wt[a]
          delete wt[a], _.forEach(c => c())
        }
      }
      function Zt(a, r, i) {
        switch (r) {
          case 0:
            return i
              ? function (_) {
                  return Y[_ >>> 0]
                }
              : function (_) {
                  return Z[_ >>> 0]
                }
          case 1:
            return i
              ? function (_) {
                  return re[_ >>> 1]
                }
              : function (_) {
                  return Ze[_ >>> 1]
                }
          case 2:
            return i
              ? function (_) {
                  return M[_ >>> 2]
                }
              : function (_) {
                  return B[_ >>> 2]
                }
          case 3:
            return i
              ? function (_) {
                  return ne[_ >> 3]
                }
              : function (_) {
                  return Wt[_ >> 3]
                }
          default:
            throw new TypeError('Unknown integer type: ' + a)
        }
      }
      function Wa(a, r, i, s, _) {
        r = fe(r)
        var c = at(i),
          m = r.indexOf('u') != -1
        m && (_ = (1n << 64n) - 1n),
          pe(a, {
            name: r,
            fromWireType: function (f) {
              return f
            },
            toWireType: function (f, y) {
              if (typeof y != 'bigint' && typeof y != 'number')
                throw new TypeError(
                  `Cannot convert "${Qt(y)}" to ${this.name}`,
                )
              if (y < s || y > _)
                throw new TypeError(
                  `Passing a number "${Qt(
                    y,
                  )}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${s}, ${_}]!`,
                )
              return y
            },
            argPackAdvance: 8,
            readValueFromPointer: Zt(r, c, !m),
            destructorFunction: null,
          })
      }
      function at(a) {
        switch (a) {
          case 1:
            return 0
          case 2:
            return 1
          case 4:
            return 2
          case 8:
            return 3
          default:
            throw new TypeError(`Unknown type size: ${a}`)
        }
      }
      function Ba(a, r, i, s, _) {
        var c = at(i)
        ;(r = fe(r)),
          pe(a, {
            name: r,
            fromWireType: function (m) {
              return !!m
            },
            toWireType: function (m, f) {
              return f ? s : _
            },
            argPackAdvance: 8,
            readValueFromPointer: function (m) {
              var f
              if (i === 1) f = Y
              else if (i === 2) f = re
              else if (i === 4) f = M
              else
                throw new TypeError('Unknown boolean type size: ' + r)
              return this.fromWireType(f[m >>> c])
            },
            destructorFunction: null,
          })
      }
      function La() {
        ;(this.allocated = [void 0]),
          (this.freelist = []),
          (this.get = function (a) {
            return this.allocated[a]
          }),
          (this.has = function (a) {
            return this.allocated[a] !== void 0
          }),
          (this.allocate = function (a) {
            var r = this.freelist.pop() || this.allocated.length
            return (this.allocated[r] = a), r
          }),
          (this.free = function (a) {
            ;(this.allocated[a] = void 0), this.freelist.push(a)
          })
      }
      var oe = new La()
      function Na(a) {
        a >= oe.reserved && --oe.get(a).refcount === 0 && oe.free(a)
      }
      function xa() {
        for (var a = 0, r = oe.reserved; r < oe.allocated.length; ++r)
          oe.allocated[r] !== void 0 && ++a
        return a
      }
      function za() {
        oe.allocated.push(
          { value: void 0 },
          { value: null },
          { value: !0 },
          { value: !1 },
        ),
          (oe.reserved = oe.allocated.length),
          (e.count_emval_handles = xa)
      }
      var Ot = {
        toValue: a => (
          a || ze('Cannot use deleted val. handle = ' + a),
          oe.get(a).value
        ),
        toHandle: a => {
          switch (a) {
            case void 0:
              return 1
            case null:
              return 2
            case !0:
              return 3
            case !1:
              return 4
            default:
              return oe.allocate({ refcount: 1, value: a })
          }
        },
      }
      function Mt(a) {
        return this.fromWireType(M[a >>> 2])
      }
      function Ua(a, r) {
        ;(r = fe(r)),
          pe(a, {
            name: r,
            fromWireType: function (i) {
              var s = Ot.toValue(i)
              return Na(i), s
            },
            toWireType: function (i, s) {
              return Ot.toHandle(s)
            },
            argPackAdvance: 8,
            readValueFromPointer: Mt,
            destructorFunction: null,
          })
      }
      function Ha(a, r) {
        switch (r) {
          case 2:
            return function (i) {
              return this.fromWireType(Oe[i >>> 2])
            }
          case 3:
            return function (i) {
              return this.fromWireType(et[i >>> 3])
            }
          default:
            throw new TypeError('Unknown float type: ' + a)
        }
      }
      function Fa(a, r, i) {
        var s = at(i)
        ;(r = fe(r)),
          pe(a, {
            name: r,
            fromWireType: function (_) {
              return _
            },
            toWireType: function (_, c) {
              return c
            },
            argPackAdvance: 8,
            readValueFromPointer: Ha(r, s),
            destructorFunction: null,
          })
      }
      function Ya(a, r, i, s, _) {
        r = fe(r)
        var c = at(i),
          m = G => G
        if (s === 0) {
          var f = 32 - 8 * i
          m = G => (G << f) >>> f
        }
        var y = r.includes('unsigned'),
          k = (G, v) => {},
          I
        y
          ? (I = function (G, v) {
              return k(v, this.name), v >>> 0
            })
          : (I = function (G, v) {
              return k(v, this.name), v
            }),
          pe(a, {
            name: r,
            fromWireType: m,
            toWireType: I,
            argPackAdvance: 8,
            readValueFromPointer: Zt(r, c, s !== 0),
            destructorFunction: null,
          })
      }
      function ja(a, r, i) {
        var s = [
            Int8Array,
            Uint8Array,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
            BigInt64Array,
            BigUint64Array,
          ],
          _ = s[r]
        function c(m) {
          m = m >> 2
          var f = B,
            y = f[m >>> 0],
            k = f[(m + 1) >>> 0]
          return new _(f.buffer, k, y)
        }
        ;(i = fe(i)),
          pe(
            a,
            {
              name: i,
              fromWireType: c,
              argPackAdvance: 8,
              readValueFromPointer: c,
            },
            { ignoreDuplicateRegistrations: !0 },
          )
      }
      function Xa(a, r) {
        r = fe(r)
        var i = r === 'std::string'
        pe(a, {
          name: r,
          fromWireType: function (s) {
            var _ = B[s >>> 2],
              c = s + 4,
              m
            if (i)
              for (var f = c, y = 0; y <= _; ++y) {
                var k = c + y
                if (y == _ || Z[k >>> 0] == 0) {
                  var I = k - f,
                    G = Qe(f, I)
                  m === void 0 ? (m = G) : ((m += '\0'), (m += G)),
                    (f = k + 1)
                }
              }
            else {
              for (var v = new Array(_), y = 0; y < _; ++y)
                v[y] = String.fromCharCode(Z[(c + y) >>> 0])
              m = v.join('')
            }
            return we(s), m
          },
          toWireType: function (s, _) {
            _ instanceof ArrayBuffer && (_ = new Uint8Array(_))
            var c,
              m = typeof _ == 'string'
            m ||
              _ instanceof Uint8Array ||
              _ instanceof Uint8ClampedArray ||
              _ instanceof Int8Array ||
              ze('Cannot pass non-string to std::string'),
              i && m ? (c = Ee(_)) : (c = _.length)
            var f = st(4 + c + 1),
              y = f + 4
            if (((y >>>= 0), (B[f >>> 2] = c), i && m)) xe(_, y, c + 1)
            else if (m)
              for (var k = 0; k < c; ++k) {
                var I = _.charCodeAt(k)
                I > 255 &&
                  (we(y),
                  ze(
                    'String has UTF-16 code units that do not fit in 8 bits',
                  )),
                  (Z[(y + k) >>> 0] = I)
              }
            else for (var k = 0; k < c; ++k) Z[(y + k) >>> 0] = _[k]
            return s !== null && s.push(we, f), f
          },
          argPackAdvance: 8,
          readValueFromPointer: Mt,
          destructorFunction: function (s) {
            we(s)
          },
        })
      }
      var en =
          typeof TextDecoder < 'u'
            ? new TextDecoder('utf-16le')
            : void 0,
        Va = (a, r) => {
          for (
            var i = a, s = i >> 1, _ = s + r / 2;
            !(s >= _) && Ze[s >>> 0];

          )
            ++s
          if (((i = s << 1), i - a > 32 && en))
            return en.decode(Z.subarray(a >>> 0, i >>> 0))
          for (var c = '', m = 0; !(m >= r / 2); ++m) {
            var f = re[(a + m * 2) >>> 1]
            if (f == 0) break
            c += String.fromCharCode(f)
          }
          return c
        },
        Qa = (a, r, i) => {
          if ((i === void 0 && (i = 2147483647), i < 2)) return 0
          i -= 2
          for (
            var s = r, _ = i < a.length * 2 ? i / 2 : a.length, c = 0;
            c < _;
            ++c
          ) {
            var m = a.charCodeAt(c)
            ;(re[r >>> 1] = m), (r += 2)
          }
          return (re[r >>> 1] = 0), r - s
        },
        qa = a => a.length * 2,
        $a = (a, r) => {
          for (var i = 0, s = ''; !(i >= r / 4); ) {
            var _ = M[(a + i * 4) >>> 2]
            if (_ == 0) break
            if ((++i, _ >= 65536)) {
              var c = _ - 65536
              s += String.fromCharCode(
                55296 | (c >> 10),
                56320 | (c & 1023),
              )
            } else s += String.fromCharCode(_)
          }
          return s
        },
        Ja = (a, r, i) => {
          if (((r >>>= 0), i === void 0 && (i = 2147483647), i < 4))
            return 0
          for (var s = r, _ = s + i - 4, c = 0; c < a.length; ++c) {
            var m = a.charCodeAt(c)
            if (m >= 55296 && m <= 57343) {
              var f = a.charCodeAt(++c)
              m = (65536 + ((m & 1023) << 10)) | (f & 1023)
            }
            if (((M[r >>> 2] = m), (r += 4), r + 4 > _)) break
          }
          return (M[r >>> 2] = 0), r - s
        },
        Ka = a => {
          for (var r = 0, i = 0; i < a.length; ++i) {
            var s = a.charCodeAt(i)
            s >= 55296 && s <= 57343 && ++i, (r += 4)
          }
          return r
        },
        Za = function (a, r, i) {
          i = fe(i)
          var s, _, c, m, f
          r === 2
            ? ((s = Va), (_ = Qa), (m = qa), (c = () => Ze), (f = 1))
            : r === 4 &&
              ((s = $a), (_ = Ja), (m = Ka), (c = () => B), (f = 2)),
            pe(a, {
              name: i,
              fromWireType: function (y) {
                for (
                  var k = B[y >>> 2], I = c(), G, v = y + 4, A = 0;
                  A <= k;
                  ++A
                ) {
                  var W = y + 4 + A * r
                  if (A == k || I[W >>> f] == 0) {
                    var V = W - v,
                      ee = s(v, V)
                    G === void 0 ? (G = ee) : ((G += '\0'), (G += ee)),
                      (v = W + r)
                  }
                }
                return we(y), G
              },
              toWireType: function (y, k) {
                typeof k != 'string' &&
                  ze(`Cannot pass non-string to C++ string type ${i}`)
                var I = m(k),
                  G = st(4 + I + r)
                return (
                  (G >>>= 0),
                  (B[G >>> 2] = I >> f),
                  _(k, G + 4, I + r),
                  y !== null && y.push(we, G),
                  G
                )
              },
              argPackAdvance: 8,
              readValueFromPointer: Mt,
              destructorFunction: function (y) {
                we(y)
              },
            })
        }
      function Oa(a, r) {
        ;(r = fe(r)),
          pe(a, {
            isVoid: !0,
            name: r,
            argPackAdvance: 0,
            fromWireType: function () {},
            toWireType: function (i, s) {},
          })
      }
      var er = !0,
        tr = () => er,
        nr = () => {
          throw 1 / 0
        }
      function tn(a) {
        return B[a >>> 2] + M[(a + 4) >>> 2] * 4294967296
      }
      var ar = (a, r) => {
          var i = new Date(tn(a) * 1e3)
          ;(M[r >>> 2] = i.getUTCSeconds()),
            (M[(r + 4) >>> 2] = i.getUTCMinutes()),
            (M[(r + 8) >>> 2] = i.getUTCHours()),
            (M[(r + 12) >>> 2] = i.getUTCDate()),
            (M[(r + 16) >>> 2] = i.getUTCMonth()),
            (M[(r + 20) >>> 2] = i.getUTCFullYear() - 1900),
            (M[(r + 24) >>> 2] = i.getUTCDay())
          var s = Date.UTC(i.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
            _ = ((i.getTime() - s) / (1e3 * 60 * 60 * 24)) | 0
          M[(r + 28) >>> 2] = _
        },
        qe = a => a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0),
        rr = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
        ir = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        nn = a => {
          var r = qe(a.getFullYear()),
            i = r ? rr : ir,
            s = i[a.getMonth()] + a.getDate() - 1
          return s
        },
        sr = (a, r) => {
          var i = new Date(tn(a) * 1e3)
          ;(M[r >>> 2] = i.getSeconds()),
            (M[(r + 4) >>> 2] = i.getMinutes()),
            (M[(r + 8) >>> 2] = i.getHours()),
            (M[(r + 12) >>> 2] = i.getDate()),
            (M[(r + 16) >>> 2] = i.getMonth()),
            (M[(r + 20) >>> 2] = i.getFullYear() - 1900),
            (M[(r + 24) >>> 2] = i.getDay())
          var s = nn(i) | 0
          ;(M[(r + 28) >>> 2] = s),
            (M[(r + 36) >>> 2] = -(i.getTimezoneOffset() * 60))
          var _ = new Date(i.getFullYear(), 0, 1),
            c = new Date(i.getFullYear(), 6, 1).getTimezoneOffset(),
            m = _.getTimezoneOffset(),
            f = (c != m && i.getTimezoneOffset() == Math.min(m, c)) | 0
          M[(r + 32) >>> 2] = f
        },
        ur = a => {
          var r = new Date(
              M[(a + 20) >>> 2] + 1900,
              M[(a + 16) >>> 2],
              M[(a + 12) >>> 2],
              M[(a + 8) >>> 2],
              M[(a + 4) >>> 2],
              M[a >>> 2],
              0,
            ),
            i = M[(a + 32) >>> 2],
            s = r.getTimezoneOffset(),
            _ = new Date(r.getFullYear(), 0, 1),
            c = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(),
            m = _.getTimezoneOffset(),
            f = Math.min(m, c)
          if (i < 0) M[(a + 32) >>> 2] = +(c != m && f == s)
          else if (i > 0 != (f == s)) {
            var y = Math.max(m, c),
              k = i > 0 ? f : y
            r.setTime(r.getTime() + (k - s) * 6e4)
          }
          M[(a + 24) >>> 2] = r.getDay()
          var I = nn(r) | 0
          return (
            (M[(a + 28) >>> 2] = I),
            (M[a >>> 2] = r.getSeconds()),
            (M[(a + 4) >>> 2] = r.getMinutes()),
            (M[(a + 8) >>> 2] = r.getHours()),
            (M[(a + 12) >>> 2] = r.getDate()),
            (M[(a + 16) >>> 2] = r.getMonth()),
            (M[(a + 20) >>> 2] = r.getYear()),
            (r.getTime() / 1e3) | 0
          )
        }
      function _r(a, r, i, s, _, c, m) {
        try {
          if (((_ = be(_)), isNaN(_))) return -61
          var f = b.getStreamFromFD(s),
            y = u.mmap(f, a, _, r, i),
            k = y.ptr
          return (
            (M[c >>> 2] = y.allocated), (k >>>= 0), (B[m >>> 2] = k), 0
          )
        } catch (I) {
          if (typeof u > 'u' || I.name !== 'ErrnoError') throw I
          return -I.errno
        }
      }
      function or(a, r, i, s, _, c) {
        try {
          if (((c = be(c)), isNaN(c))) return -61
          var m = b.getStreamFromFD(_)
          i & 2 && b.doMsync(a, m, r, s, c), u.munmap(m)
        } catch (f) {
          if (typeof u > 'u' || f.name !== 'ErrnoError') throw f
          return -f.errno
        }
      }
      var an = a => {
          var r = Ee(a) + 1,
            i = st(r)
          return i && xe(a, i, r), i
        },
        lr = (a, r, i) => {
          var s = /* @__PURE__ */ new Date().getFullYear(),
            _ = new Date(s, 0, 1),
            c = new Date(s, 6, 1),
            m = _.getTimezoneOffset(),
            f = c.getTimezoneOffset(),
            y = Math.max(m, f)
          ;(B[a >>> 2] = y * 60), (M[r >>> 2] = +(m != f))
          function k(W) {
            var V = W.toTimeString().match(/\(([A-Za-z ]+)\)$/)
            return V ? V[1] : 'GMT'
          }
          var I = k(_),
            G = k(c),
            v = an(I),
            A = an(G)
          f < m
            ? ((B[i >>> 2] = v), (B[(i + 4) >>> 2] = A))
            : ((B[i >>> 2] = A), (B[(i + 4) >>> 2] = v))
        },
        cr = () => {
          ge('')
        }
      function gr() {
        return Date.now()
      }
      var rn = () => 4294901760,
        mr = () => rn(),
        sn
      sn = () => performance.now()
      var fr = (a, r, i) =>
          Z.copyWithin(a >>> 0, r >>> 0, (r + i) >>> 0),
        pr = a => {
          var r = Ke.buffer,
            i = (a - r.byteLength + 65535) >>> 16
          try {
            return Ke.grow(i), Bt(), 1
          } catch {}
        },
        dr = a => {
          var r = Z.length
          a = a >>> 0
          var i = rn()
          if (a > i) return !1
          for (
            var s = (y, k) => y + ((k - (y % k)) % k), _ = 1;
            _ <= 4;
            _ *= 2
          ) {
            var c = r * (1 + 0.2 / _)
            c = Math.min(c, a + 100663296)
            var m = Math.min(i, s(Math.max(a, c), 65536)),
              f = pr(m)
            if (f) return !0
          }
          return !1
        },
        It = {},
        hr = () => d || './this.program',
        $e = () => {
          if (!$e.strings) {
            var a =
                (
                  (typeof navigator == 'object' &&
                    navigator.languages &&
                    navigator.languages[0]) ||
                  'C'
                ).replace('-', '_') + '.UTF-8',
              r = {
                USER: 'web_user',
                LOGNAME: 'web_user',
                PATH: '/',
                PWD: '/',
                HOME: '/home/web_user',
                LANG: a,
                _: hr(),
              }
            for (var i in It)
              It[i] === void 0 ? delete r[i] : (r[i] = It[i])
            var s = []
            for (var i in r) s.push(`${i}=${r[i]}`)
            $e.strings = s
          }
          return $e.strings
        },
        yr = (a, r) => {
          for (var i = 0; i < a.length; ++i)
            Y[r++ >>> 0] = a.charCodeAt(i)
          Y[r >>> 0] = 0
        },
        Sr = (a, r) => {
          var i = 0
          return (
            $e().forEach(function (s, _) {
              var c = r + i
              ;(B[(a + _ * 4) >>> 2] = c), yr(s, c), (i += s.length + 1)
            }),
            0
          )
        },
        kr = (a, r) => {
          var i = $e()
          B[a >>> 2] = i.length
          var s = 0
          return (
            i.forEach(function (_) {
              s += _.length + 1
            }),
            (B[r >>> 2] = s),
            0
          )
        },
        un = a => {
          Ln() || (e.onExit && e.onExit(a), (pt = !0)), S(a, new Qn(a))
        },
        wr = (a, r) => {
          un(a)
        },
        Mr = wr
      function Ir(a) {
        try {
          var r = b.getStreamFromFD(a)
          return u.close(r), 0
        } catch (i) {
          if (typeof u > 'u' || i.name !== 'ErrnoError') throw i
          return i.errno
        }
      }
      function vr(a, r) {
        try {
          var i = 0,
            s = 0,
            _ = 0,
            c = b.getStreamFromFD(a),
            m = c.tty
              ? 2
              : u.isDir(c.mode)
              ? 3
              : u.isLink(c.mode)
              ? 7
              : 4
          return (
            (Y[r >>> 0] = m),
            (re[(r + 2) >>> 1] = _),
            (ne[(r + 8) >> 3] = BigInt(i)),
            (ne[(r + 16) >> 3] = BigInt(s)),
            0
          )
        } catch (f) {
          if (typeof u > 'u' || f.name !== 'ErrnoError') throw f
          return f.errno
        }
      }
      var _n = (a, r, i, s) => {
        for (var _ = 0, c = 0; c < i; c++) {
          var m = B[r >>> 2],
            f = B[(r + 4) >>> 2]
          r += 8
          var y = u.read(a, Y, m, f, s)
          if (y < 0) return -1
          if (((_ += y), y < f)) break
          typeof s < 'u' && (s += y)
        }
        return _
      }
      function Dr(a, r, i, s, _) {
        try {
          if (((s = be(s)), isNaN(s))) return 61
          var c = b.getStreamFromFD(a),
            m = _n(c, r, i, s)
          return (B[_ >>> 2] = m), 0
        } catch (f) {
          if (typeof u > 'u' || f.name !== 'ErrnoError') throw f
          return f.errno
        }
      }
      var on = (a, r, i, s) => {
        for (var _ = 0, c = 0; c < i; c++) {
          var m = B[r >>> 2],
            f = B[(r + 4) >>> 2]
          r += 8
          var y = u.write(a, Y, m, f, s)
          if (y < 0) return -1
          ;(_ += y), typeof s < 'u' && (s += y)
        }
        return _
      }
      function Gr(a, r, i, s, _) {
        try {
          if (((s = be(s)), isNaN(s))) return 61
          var c = b.getStreamFromFD(a),
            m = on(c, r, i, s)
          return (B[_ >>> 2] = m), 0
        } catch (f) {
          if (typeof u > 'u' || f.name !== 'ErrnoError') throw f
          return f.errno
        }
      }
      function Ar(a, r, i, s) {
        try {
          var _ = b.getStreamFromFD(a),
            c = _n(_, r, i)
          return (B[s >>> 2] = c), 0
        } catch (m) {
          if (typeof u > 'u' || m.name !== 'ErrnoError') throw m
          return m.errno
        }
      }
      function Er(a, r, i, s) {
        try {
          if (((r = be(r)), isNaN(r))) return 61
          var _ = b.getStreamFromFD(a)
          return (
            u.llseek(_, r, i),
            (ne[s >> 3] = BigInt(_.position)),
            _.getdents && r === 0 && i === 0 && (_.getdents = null),
            0
          )
        } catch (c) {
          if (typeof u > 'u' || c.name !== 'ErrnoError') throw c
          return c.errno
        }
      }
      function Rr(a) {
        try {
          var r = b.getStreamFromFD(a)
          return r.stream_ops && r.stream_ops.fsync
            ? r.stream_ops.fsync(r)
            : 0
        } catch (i) {
          if (typeof u > 'u' || i.name !== 'ErrnoError') throw i
          return i.errno
        }
      }
      function br(a, r, i, s) {
        try {
          var _ = b.getStreamFromFD(a),
            c = on(_, r, i)
          return (B[s >>> 2] = c), 0
        } catch (m) {
          if (typeof u > 'u' || m.name !== 'ErrnoError') throw m
          return m.errno
        }
      }
      var Pr = (a, r) => (yt(Z.subarray(a >>> 0, (a + r) >>> 0)), 0),
        Tr = (a, r) => {
          for (var i = 0, s = 0; s <= r; i += a[s++]);
          return i
        },
        ln = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        cn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Cr = (a, r) => {
          for (var i = new Date(a.getTime()); r > 0; ) {
            var s = qe(i.getFullYear()),
              _ = i.getMonth(),
              c = (s ? ln : cn)[_]
            if (r > c - i.getDate())
              (r -= c - i.getDate() + 1),
                i.setDate(1),
                _ < 11
                  ? i.setMonth(_ + 1)
                  : (i.setMonth(0), i.setFullYear(i.getFullYear() + 1))
            else return i.setDate(i.getDate() + r), i
          }
          return i
        },
        Wr = (a, r) => {
          Y.set(a, r >>> 0)
        },
        gn = (a, r, i, s) => {
          var _ = M[(s + 40) >>> 2],
            c = {
              tm_sec: M[s >>> 2],
              tm_min: M[(s + 4) >>> 2],
              tm_hour: M[(s + 8) >>> 2],
              tm_mday: M[(s + 12) >>> 2],
              tm_mon: M[(s + 16) >>> 2],
              tm_year: M[(s + 20) >>> 2],
              tm_wday: M[(s + 24) >>> 2],
              tm_yday: M[(s + 28) >>> 2],
              tm_isdst: M[(s + 32) >>> 2],
              tm_gmtoff: M[(s + 36) >>> 2],
              tm_zone: _ ? Qe(_) : '',
            },
            m = Qe(i),
            f = {
              '%c': '%a %b %d %H:%M:%S %Y',
              '%D': '%m/%d/%y',
              '%F': '%Y-%m-%d',
              '%h': '%b',
              '%r': '%I:%M:%S %p',
              '%R': '%H:%M',
              '%T': '%H:%M:%S',
              '%x': '%m/%d/%y',
              '%X': '%H:%M:%S',
              '%Ec': '%c',
              '%EC': '%C',
              '%Ex': '%m/%d/%y',
              '%EX': '%H:%M:%S',
              '%Ey': '%y',
              '%EY': '%Y',
              '%Od': '%d',
              '%Oe': '%e',
              '%OH': '%H',
              '%OI': '%I',
              '%Om': '%m',
              '%OM': '%M',
              '%OS': '%S',
              '%Ou': '%u',
              '%OU': '%U',
              '%OV': '%V',
              '%Ow': '%w',
              '%OW': '%W',
              '%Oy': '%y',
            }
          for (var y in f) m = m.replace(new RegExp(y, 'g'), f[y])
          var k = [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            I = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ]
          function G(w, R, $) {
            for (
              var j = typeof w == 'number' ? w.toString() : w || '';
              j.length < R;

            )
              j = $[0] + j
            return j
          }
          function v(w, R) {
            return G(w, R, '0')
          }
          function A(w, R) {
            function $(le) {
              return le < 0 ? -1 : le > 0 ? 1 : 0
            }
            var j
            return (
              (j = $(w.getFullYear() - R.getFullYear())) === 0 &&
                (j = $(w.getMonth() - R.getMonth())) === 0 &&
                (j = $(w.getDate() - R.getDate())),
              j
            )
          }
          function W(w) {
            switch (w.getDay()) {
              case 0:
                return new Date(w.getFullYear() - 1, 11, 29)
              case 1:
                return w
              case 2:
                return new Date(w.getFullYear(), 0, 3)
              case 3:
                return new Date(w.getFullYear(), 0, 2)
              case 4:
                return new Date(w.getFullYear(), 0, 1)
              case 5:
                return new Date(w.getFullYear() - 1, 11, 31)
              case 6:
                return new Date(w.getFullYear() - 1, 11, 30)
            }
          }
          function V(w) {
            var R = Cr(new Date(w.tm_year + 1900, 0, 1), w.tm_yday),
              $ = new Date(R.getFullYear(), 0, 4),
              j = new Date(R.getFullYear() + 1, 0, 4),
              le = W($),
              Q = W(j)
            return A(le, R) <= 0
              ? A(Q, R) <= 0
                ? R.getFullYear() + 1
                : R.getFullYear()
              : R.getFullYear() - 1
          }
          var ee = {
            '%a': w => k[w.tm_wday].substring(0, 3),
            '%A': w => k[w.tm_wday],
            '%b': w => I[w.tm_mon].substring(0, 3),
            '%B': w => I[w.tm_mon],
            '%C': w => {
              var R = w.tm_year + 1900
              return v((R / 100) | 0, 2)
            },
            '%d': w => v(w.tm_mday, 2),
            '%e': w => G(w.tm_mday, 2, ' '),
            '%g': w => V(w).toString().substring(2),
            '%G': w => V(w),
            '%H': w => v(w.tm_hour, 2),
            '%I': w => {
              var R = w.tm_hour
              return R == 0 ? (R = 12) : R > 12 && (R -= 12), v(R, 2)
            },
            '%j': w =>
              v(
                w.tm_mday +
                  Tr(qe(w.tm_year + 1900) ? ln : cn, w.tm_mon - 1),
                3,
              ),
            '%m': w => v(w.tm_mon + 1, 2),
            '%M': w => v(w.tm_min, 2),
            '%n': () => `
`,
            '%p': w => (w.tm_hour >= 0 && w.tm_hour < 12 ? 'AM' : 'PM'),
            '%S': w => v(w.tm_sec, 2),
            '%t': () => '	',
            '%u': w => w.tm_wday || 7,
            '%U': w => {
              var R = w.tm_yday + 7 - w.tm_wday
              return v(Math.floor(R / 7), 2)
            },
            '%V': w => {
              var R = Math.floor(
                (w.tm_yday + 7 - ((w.tm_wday + 6) % 7)) / 7,
              )
              if (
                ((w.tm_wday + 371 - w.tm_yday - 2) % 7 <= 2 && R++, R)
              ) {
                if (R == 53) {
                  var j = (w.tm_wday + 371 - w.tm_yday) % 7
                  j != 4 && (j != 3 || !qe(w.tm_year)) && (R = 1)
                }
              } else {
                R = 52
                var $ = (w.tm_wday + 7 - w.tm_yday - 1) % 7
                ;($ == 4 || ($ == 5 && qe((w.tm_year % 400) - 1))) &&
                  R++
              }
              return v(R, 2)
            },
            '%w': w => w.tm_wday,
            '%W': w => {
              var R = w.tm_yday + 7 - ((w.tm_wday + 6) % 7)
              return v(Math.floor(R / 7), 2)
            },
            '%y': w => (w.tm_year + 1900).toString().substring(2),
            '%Y': w => w.tm_year + 1900,
            '%z': w => {
              var R = w.tm_gmtoff,
                $ = R >= 0
              return (
                (R = Math.abs(R) / 60),
                (R = (R / 60) * 100 + (R % 60)),
                ($ ? '+' : '-') + ('0000' + R).slice(-4)
              )
            },
            '%Z': w => w.tm_zone,
            '%%': () => '%',
          }
          m = m.replace(/%%/g, '\0\0')
          for (var y in ee)
            m.includes(y) &&
              (m = m.replace(new RegExp(y, 'g'), ee[y](c)))
          m = m.replace(/\0\0/g, '%')
          var te = nt(m, !1)
          return te.length > r ? 0 : (Wr(te, a), te.length - 1)
        },
        Br = (a, r, i, s, _) => gn(a, r, i, s),
        Lr = a => (a ? (Vt(52), -1) : 0)
      function mn(a, r) {
        a < 128 ? r.push(a) : r.push(a % 128 | 128, a >> 7)
      }
      function Nr(a) {
        for (
          var r = { i: 'i32', j: 'i64', f: 'f32', d: 'f64', p: 'i32' },
            i = {
              parameters: [],
              results: a[0] == 'v' ? [] : [r[a[0]]],
            },
            s = 1;
          s < a.length;
          ++s
        )
          i.parameters.push(r[a[s]])
        return i
      }
      function xr(a, r) {
        var i = a.slice(0, 1),
          s = a.slice(1),
          _ = { i: 127, p: 127, j: 126, f: 125, d: 124 }
        r.push(96), mn(s.length, r)
        for (var c = 0; c < s.length; ++c) r.push(_[s[c]])
        i == 'v' ? r.push(0) : r.push(1, _[i])
      }
      function zr(a, r) {
        if (typeof WebAssembly.Function == 'function')
          return new WebAssembly.Function(Nr(r), a)
        var i = [1]
        xr(r, i)
        var s = [0, 97, 115, 109, 1, 0, 0, 0, 1]
        mn(i.length, s),
          s.push.apply(s, i),
          s.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0)
        var _ = new WebAssembly.Module(new Uint8Array(s)),
          c = new WebAssembly.Instance(_, { e: { f: a } }),
          m = c.exports.f
        return m
      }
      function Ur(a, r) {
        if (Ue)
          for (var i = a; i < a + r; i++) {
            var s = N(i)
            s && Ue.set(s, i)
          }
      }
      var Ue = void 0
      function Hr(a) {
        return (
          Ue ||
            ((Ue = /* @__PURE__ */ new WeakMap()), Ur(0, Ge.length)),
          Ue.get(a) || 0
        )
      }
      var fn = []
      function Fr() {
        if (fn.length) return fn.pop()
        try {
          Ge.grow(1)
        } catch (a) {
          throw a instanceof RangeError
            ? 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.'
            : a
        }
        return Ge.length - 1
      }
      var pn = (a, r) => {
        Ge.set(a, r), (Ve[a] = Ge.get(a))
      }
      function Yr(a, r) {
        var i = Hr(a)
        if (i) return i
        var s = Fr()
        try {
          pn(s, a)
        } catch (c) {
          if (!(c instanceof TypeError)) throw c
          var _ = zr(a, r)
          pn(s, _)
        }
        return Ue.set(a, s), s
      }
      var dn = function (a, r, i, s) {
          a || (a = this),
            (this.parent = a),
            (this.mount = a.mount),
            (this.mounted = null),
            (this.id = u.nextInode++),
            (this.name = r),
            (this.mode = i),
            (this.node_ops = {}),
            (this.stream_ops = {}),
            (this.rdev = s)
        },
        rt = 365,
        it = 146
      Object.defineProperties(dn.prototype, {
        read: {
          get: function () {
            return (this.mode & rt) === rt
          },
          set: function (a) {
            a ? (this.mode |= rt) : (this.mode &= ~rt)
          },
        },
        write: {
          get: function () {
            return (this.mode & it) === it
          },
          set: function (a) {
            a ? (this.mode |= it) : (this.mode &= ~it)
          },
        },
        isFolder: {
          get: function () {
            return u.isDir(this.mode)
          },
        },
        isDevice: {
          get: function () {
            return u.isChrdev(this.mode)
          },
        },
      }),
        (u.FSNode = dn),
        (u.createPreloadedFile = ua),
        u.staticInit(),
        Ra(),
        (Kt = e.BindingError = Jt(Error, 'BindingError')),
        (e.InternalError = Jt(Error, 'InternalError')),
        za()
      var jr = {
        aa: Jn,
        y: On,
        a: ea,
        x: Kn,
        ta: oa,
        sa: la,
        ua: ca,
        da: fa,
        pa,
        B: da,
        H: ha,
        ka: ya,
        $: Sa,
        wa: ka,
        ma: wa,
        na: Ma,
        z: Ia,
        _: va,
        Z: Da,
        oa: Ga,
        Y: Aa,
        F: Ea,
        L: Wa,
        Aa: Ba,
        za: Ua,
        K: Fa,
        q: Ya,
        m: ja,
        J: Xa,
        C: Za,
        Ba: Oa,
        qa: tr,
        U: nr,
        ga: ar,
        ha: sr,
        ia: ur,
        ea: _r,
        fa: or,
        W: lr,
        c: cr,
        s: gr,
        X: mr,
        w: sn,
        ra: fr,
        V: dr,
        xa: Sr,
        ya: kr,
        r: Mr,
        t: Ir,
        G: vr,
        ca: Dr,
        ba: Gr,
        I: Ar,
        ja: Er,
        la: Rr,
        A: br,
        Ka: Pr,
        Ga: _i,
        E: ni,
        d: qr,
        e: Qr,
        g: Vr,
        f: Zr,
        S: ui,
        b: ai,
        R: ci,
        l: ti,
        Q: gi,
        Ea: yi,
        Da: Si,
        n: ri,
        Ia: ii,
        p: ei,
        Ja: Or,
        D: oi,
        k: $r,
        j: Jr,
        P: mi,
        O: fi,
        h: Xr,
        i: Kr,
        o: li,
        Fa: di,
        M: hi,
        Ca: ki,
        N: pi,
        Ha: si,
        va: un,
        u: gn,
        T: Br,
        v: Lr,
      }
      Vn(),
        (e._MagickColor_Create = function () {
          return (e._MagickColor_Create = e.asm.Na).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Dispose = function () {
          return (e._MagickColor_Dispose = e.asm.Oa).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Count_Get = function () {
          return (e._MagickColor_Count_Get = e.asm.Pa).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Red_Get = function () {
          return (e._MagickColor_Red_Get = e.asm.Qa).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Red_Set = function () {
          return (e._MagickColor_Red_Set = e.asm.Ra).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Green_Get = function () {
          return (e._MagickColor_Green_Get = e.asm.Sa).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Green_Set = function () {
          return (e._MagickColor_Green_Set = e.asm.Ta).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Blue_Get = function () {
          return (e._MagickColor_Blue_Get = e.asm.Ua).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Blue_Set = function () {
          return (e._MagickColor_Blue_Set = e.asm.Va).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Alpha_Get = function () {
          return (e._MagickColor_Alpha_Get = e.asm.Wa).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Alpha_Set = function () {
          return (e._MagickColor_Alpha_Set = e.asm.Xa).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Black_Get = function () {
          return (e._MagickColor_Black_Get = e.asm.Ya).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Black_Set = function () {
          return (e._MagickColor_Black_Set = e.asm.Za).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_IsCMYK_Get = function () {
          return (e._MagickColor_IsCMYK_Get = e.asm._a).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_IsCMYK_Set = function () {
          return (e._MagickColor_IsCMYK_Set = e.asm.$a).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Clone = function () {
          return (e._MagickColor_Clone = e.asm.ab).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_FuzzyEquals = function () {
          return (e._MagickColor_FuzzyEquals = e.asm.bb).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColor_Initialize = function () {
          return (e._MagickColor_Initialize = e.asm.cb).apply(
            null,
            arguments,
          )
        }),
        (e._MagickColorCollection_DisposeList = function () {
          return (e._MagickColorCollection_DisposeList =
            e.asm.eb).apply(null, arguments)
        }),
        (e._MagickColorCollection_GetInstance = function () {
          return (e._MagickColorCollection_GetInstance =
            e.asm.fb).apply(null, arguments)
        }),
        (e._DrawingWand_Create = function () {
          return (e._DrawingWand_Create = e.asm.gb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Dispose = function () {
          return (e._DrawingWand_Dispose = e.asm.hb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Affine = function () {
          return (e._DrawingWand_Affine = e.asm.ib).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Alpha = function () {
          return (e._DrawingWand_Alpha = e.asm.jb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Arc = function () {
          return (e._DrawingWand_Arc = e.asm.kb).apply(null, arguments)
        }),
        (e._DrawingWand_Bezier = function () {
          return (e._DrawingWand_Bezier = e.asm.lb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_BorderColor = function () {
          return (e._DrawingWand_BorderColor = e.asm.mb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Circle = function () {
          return (e._DrawingWand_Circle = e.asm.nb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_ClipPath = function () {
          return (e._DrawingWand_ClipPath = e.asm.ob).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_ClipRule = function () {
          return (e._DrawingWand_ClipRule = e.asm.pb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_ClipUnits = function () {
          return (e._DrawingWand_ClipUnits = e.asm.qb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Color = function () {
          return (e._DrawingWand_Color = e.asm.rb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Composite = function () {
          return (e._DrawingWand_Composite = e.asm.sb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Density = function () {
          return (e._DrawingWand_Density = e.asm.tb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Ellipse = function () {
          return (e._DrawingWand_Ellipse = e.asm.ub).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_FillColor = function () {
          return (e._DrawingWand_FillColor = e.asm.vb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_FillOpacity = function () {
          return (e._DrawingWand_FillOpacity = e.asm.wb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_FillPatternUrl = function () {
          return (e._DrawingWand_FillPatternUrl = e.asm.xb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_FillRule = function () {
          return (e._DrawingWand_FillRule = e.asm.yb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Font = function () {
          return (e._DrawingWand_Font = e.asm.zb).apply(null, arguments)
        }),
        (e._DrawingWand_FontFamily = function () {
          return (e._DrawingWand_FontFamily = e.asm.Ab).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_FontPointSize = function () {
          return (e._DrawingWand_FontPointSize = e.asm.Bb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_FontTypeMetrics = function () {
          return (e._DrawingWand_FontTypeMetrics = e.asm.Cb).apply(
            null,
            arguments,
          )
        }),
        (e._TypeMetric_Create = function () {
          return (e._TypeMetric_Create = e.asm.Db).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Gravity = function () {
          return (e._DrawingWand_Gravity = e.asm.Eb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Line = function () {
          return (e._DrawingWand_Line = e.asm.Fb).apply(null, arguments)
        }),
        (e._DrawingWand_PathArcAbs = function () {
          return (e._DrawingWand_PathArcAbs = e.asm.Gb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathArcRel = function () {
          return (e._DrawingWand_PathArcRel = e.asm.Hb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathClose = function () {
          return (e._DrawingWand_PathClose = e.asm.Ib).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathCurveToAbs = function () {
          return (e._DrawingWand_PathCurveToAbs = e.asm.Jb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathCurveToRel = function () {
          return (e._DrawingWand_PathCurveToRel = e.asm.Kb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathFinish = function () {
          return (e._DrawingWand_PathFinish = e.asm.Lb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathLineToAbs = function () {
          return (e._DrawingWand_PathLineToAbs = e.asm.Mb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathLineToHorizontalAbs = function () {
          return (e._DrawingWand_PathLineToHorizontalAbs =
            e.asm.Nb).apply(null, arguments)
        }),
        (e._DrawingWand_PathLineToHorizontalRel = function () {
          return (e._DrawingWand_PathLineToHorizontalRel =
            e.asm.Ob).apply(null, arguments)
        }),
        (e._DrawingWand_PathLineToRel = function () {
          return (e._DrawingWand_PathLineToRel = e.asm.Pb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathLineToVerticalAbs = function () {
          return (e._DrawingWand_PathLineToVerticalAbs =
            e.asm.Qb).apply(null, arguments)
        }),
        (e._DrawingWand_PathLineToVerticalRel = function () {
          return (e._DrawingWand_PathLineToVerticalRel =
            e.asm.Rb).apply(null, arguments)
        }),
        (e._DrawingWand_PathMoveToAbs = function () {
          return (e._DrawingWand_PathMoveToAbs = e.asm.Sb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathMoveToRel = function () {
          return (e._DrawingWand_PathMoveToRel = e.asm.Tb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathQuadraticCurveToAbs = function () {
          return (e._DrawingWand_PathQuadraticCurveToAbs =
            e.asm.Ub).apply(null, arguments)
        }),
        (e._DrawingWand_PathQuadraticCurveToRel = function () {
          return (e._DrawingWand_PathQuadraticCurveToRel =
            e.asm.Vb).apply(null, arguments)
        }),
        (e._DrawingWand_PathSmoothCurveToAbs = function () {
          return (e._DrawingWand_PathSmoothCurveToAbs = e.asm.Wb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathSmoothCurveToRel = function () {
          return (e._DrawingWand_PathSmoothCurveToRel = e.asm.Xb).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PathSmoothQuadraticCurveToAbs = function () {
          return (e._DrawingWand_PathSmoothQuadraticCurveToAbs =
            e.asm.Yb).apply(null, arguments)
        }),
        (e._DrawingWand_PathSmoothQuadraticCurveToRel = function () {
          return (e._DrawingWand_PathSmoothQuadraticCurveToRel =
            e.asm.Zb).apply(null, arguments)
        }),
        (e._DrawingWand_PathStart = function () {
          return (e._DrawingWand_PathStart = e.asm._b).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Point = function () {
          return (e._DrawingWand_Point = e.asm.$b).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Polygon = function () {
          return (e._DrawingWand_Polygon = e.asm.ac).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Polyline = function () {
          return (e._DrawingWand_Polyline = e.asm.bc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PopClipPath = function () {
          return (e._DrawingWand_PopClipPath = e.asm.cc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PopGraphicContext = function () {
          return (e._DrawingWand_PopGraphicContext = e.asm.dc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PopPattern = function () {
          return (e._DrawingWand_PopPattern = e.asm.ec).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PushClipPath = function () {
          return (e._DrawingWand_PushClipPath = e.asm.fc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PushGraphicContext = function () {
          return (e._DrawingWand_PushGraphicContext = e.asm.gc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_PushPattern = function () {
          return (e._DrawingWand_PushPattern = e.asm.hc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Rectangle = function () {
          return (e._DrawingWand_Rectangle = e.asm.ic).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Render = function () {
          return (e._DrawingWand_Render = e.asm.jc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Rotation = function () {
          return (e._DrawingWand_Rotation = e.asm.kc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_RoundRectangle = function () {
          return (e._DrawingWand_RoundRectangle = e.asm.lc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Scaling = function () {
          return (e._DrawingWand_Scaling = e.asm.mc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_SkewX = function () {
          return (e._DrawingWand_SkewX = e.asm.nc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_SkewY = function () {
          return (e._DrawingWand_SkewY = e.asm.oc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_StrokeAntialias = function () {
          return (e._DrawingWand_StrokeAntialias = e.asm.pc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_StrokeColor = function () {
          return (e._DrawingWand_StrokeColor = e.asm.qc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_StrokeDashArray = function () {
          return (e._DrawingWand_StrokeDashArray = e.asm.rc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_StrokeDashOffset = function () {
          return (e._DrawingWand_StrokeDashOffset = e.asm.sc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_StrokeLineCap = function () {
          return (e._DrawingWand_StrokeLineCap = e.asm.tc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_StrokeLineJoin = function () {
          return (e._DrawingWand_StrokeLineJoin = e.asm.uc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_StrokeMiterLimit = function () {
          return (e._DrawingWand_StrokeMiterLimit = e.asm.vc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_StrokeOpacity = function () {
          return (e._DrawingWand_StrokeOpacity = e.asm.wc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_StrokePatternUrl = function () {
          return (e._DrawingWand_StrokePatternUrl = e.asm.xc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_StrokeWidth = function () {
          return (e._DrawingWand_StrokeWidth = e.asm.yc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Text = function () {
          return (e._DrawingWand_Text = e.asm.zc).apply(null, arguments)
        }),
        (e._DrawingWand_TextAlignment = function () {
          return (e._DrawingWand_TextAlignment = e.asm.Ac).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_TextAntialias = function () {
          return (e._DrawingWand_TextAntialias = e.asm.Bc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_TextDecoration = function () {
          return (e._DrawingWand_TextDecoration = e.asm.Cc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_TextDirection = function () {
          return (e._DrawingWand_TextDirection = e.asm.Dc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_TextEncoding = function () {
          return (e._DrawingWand_TextEncoding = e.asm.Ec).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_TextInterlineSpacing = function () {
          return (e._DrawingWand_TextInterlineSpacing = e.asm.Fc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_TextInterwordSpacing = function () {
          return (e._DrawingWand_TextInterwordSpacing = e.asm.Gc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_TextKerning = function () {
          return (e._DrawingWand_TextKerning = e.asm.Hc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_TextUnderColor = function () {
          return (e._DrawingWand_TextUnderColor = e.asm.Ic).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Translation = function () {
          return (e._DrawingWand_Translation = e.asm.Jc).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingWand_Viewbox = function () {
          return (e._DrawingWand_Viewbox = e.asm.Kc).apply(
            null,
            arguments,
          )
        }),
        (e._PointInfoCollection_Create = function () {
          return (e._PointInfoCollection_Create = e.asm.Lc).apply(
            null,
            arguments,
          )
        }),
        (e._PointInfoCollection_Dispose = function () {
          return (e._PointInfoCollection_Dispose = e.asm.Mc).apply(
            null,
            arguments,
          )
        }),
        (e._PointInfoCollection_GetX = function () {
          return (e._PointInfoCollection_GetX = e.asm.Nc).apply(
            null,
            arguments,
          )
        }),
        (e._PointInfoCollection_GetY = function () {
          return (e._PointInfoCollection_GetY = e.asm.Oc).apply(
            null,
            arguments,
          )
        }),
        (e._PointInfoCollection_Set = function () {
          return (e._PointInfoCollection_Set = e.asm.Pc).apply(
            null,
            arguments,
          )
        }),
        (e._MagickExceptionHelper_Description = function () {
          return (e._MagickExceptionHelper_Description =
            e.asm.Qc).apply(null, arguments)
        }),
        (e._MagickExceptionHelper_Dispose = function () {
          return (e._MagickExceptionHelper_Dispose = e.asm.Rc).apply(
            null,
            arguments,
          )
        }),
        (e._MagickExceptionHelper_Related = function () {
          return (e._MagickExceptionHelper_Related = e.asm.Sc).apply(
            null,
            arguments,
          )
        }),
        (e._MagickExceptionHelper_RelatedCount = function () {
          return (e._MagickExceptionHelper_RelatedCount =
            e.asm.Tc).apply(null, arguments)
        }),
        (e._MagickExceptionHelper_Message = function () {
          return (e._MagickExceptionHelper_Message = e.asm.Uc).apply(
            null,
            arguments,
          )
        }),
        (e._MagickExceptionHelper_Severity = function () {
          return (e._MagickExceptionHelper_Severity = e.asm.Vc).apply(
            null,
            arguments,
          )
        }),
        (e._PdfInfo_PageCount = function () {
          return (e._PdfInfo_PageCount = e.asm.Wc).apply(
            null,
            arguments,
          )
        }),
        (e._Environment_Initialize = function () {
          return (e._Environment_Initialize = e.asm.Xc).apply(
            null,
            arguments,
          )
        }),
        (e._Environment_GetEnv = function () {
          return (e._Environment_GetEnv = e.asm.Yc).apply(
            null,
            arguments,
          )
        }),
        (e._Environment_SetEnv = function () {
          return (e._Environment_SetEnv = e.asm.Zc).apply(
            null,
            arguments,
          )
        }),
        (e._MagickMemory_Relinquish = function () {
          return (e._MagickMemory_Relinquish = e.asm._c).apply(
            null,
            arguments,
          )
        }),
        (e._Magick_Delegates_Get = function () {
          return (e._Magick_Delegates_Get = e.asm.$c).apply(
            null,
            arguments,
          )
        }),
        (e._Magick_Features_Get = function () {
          return (e._Magick_Features_Get = e.asm.ad).apply(
            null,
            arguments,
          )
        }),
        (e._Magick_ImageMagickVersion_Get = function () {
          return (e._Magick_ImageMagickVersion_Get = e.asm.bd).apply(
            null,
            arguments,
          )
        }),
        (e._Magick_GetFonts = function () {
          return (e._Magick_GetFonts = e.asm.cd).apply(null, arguments)
        }),
        (e._Magick_GetFontFamily = function () {
          return (e._Magick_GetFontFamily = e.asm.dd).apply(
            null,
            arguments,
          )
        }),
        (e._Magick_GetFontName = function () {
          return (e._Magick_GetFontName = e.asm.ed).apply(
            null,
            arguments,
          )
        }),
        (e._Magick_DisposeFonts = function () {
          return (e._Magick_DisposeFonts = e.asm.fd).apply(
            null,
            arguments,
          )
        }),
        (e._Magick_SetDefaultFontFile = function () {
          return (e._Magick_SetDefaultFontFile = e.asm.gd).apply(
            null,
            arguments,
          )
        }),
        (e._Magick_SetRandomSeed = function () {
          return (e._Magick_SetRandomSeed = e.asm.hd).apply(
            null,
            arguments,
          )
        }),
        (e._Magick_SetLogDelegate = function () {
          return (e._Magick_SetLogDelegate = e.asm.id).apply(
            null,
            arguments,
          )
        }),
        (e._Magick_SetLogEvents = function () {
          return (e._Magick_SetLogEvents = e.asm.jd).apply(
            null,
            arguments,
          )
        }),
        (e._Magick_SetOpenCLEnabled = function () {
          return (e._Magick_SetOpenCLEnabled = e.asm.kd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickFormatInfo_CreateList = function () {
          return (e._MagickFormatInfo_CreateList = e.asm.ld).apply(
            null,
            arguments,
          )
        }),
        (e._MagickFormatInfo_DisposeList = function () {
          return (e._MagickFormatInfo_DisposeList = e.asm.md).apply(
            null,
            arguments,
          )
        }),
        (e._MagickFormatInfo_CanReadMultithreaded_Get = function () {
          return (e._MagickFormatInfo_CanReadMultithreaded_Get =
            e.asm.nd).apply(null, arguments)
        }),
        (e._MagickFormatInfo_CanWriteMultithreaded_Get = function () {
          return (e._MagickFormatInfo_CanWriteMultithreaded_Get =
            e.asm.od).apply(null, arguments)
        }),
        (e._MagickFormatInfo_Description_Get = function () {
          return (e._MagickFormatInfo_Description_Get = e.asm.pd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickFormatInfo_Format_Get = function () {
          return (e._MagickFormatInfo_Format_Get = e.asm.qd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickFormatInfo_MimeType_Get = function () {
          return (e._MagickFormatInfo_MimeType_Get = e.asm.rd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickFormatInfo_Module_Get = function () {
          return (e._MagickFormatInfo_Module_Get = e.asm.sd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickFormatInfo_SupportsMultipleFrames_Get = function () {
          return (e._MagickFormatInfo_SupportsMultipleFrames_Get =
            e.asm.td).apply(null, arguments)
        }),
        (e._MagickFormatInfo_SupportsReading_Get = function () {
          return (e._MagickFormatInfo_SupportsReading_Get =
            e.asm.ud).apply(null, arguments)
        }),
        (e._MagickFormatInfo_SupportsWriting_Get = function () {
          return (e._MagickFormatInfo_SupportsWriting_Get =
            e.asm.vd).apply(null, arguments)
        }),
        (e._MagickFormatInfo_GetInfo = function () {
          return (e._MagickFormatInfo_GetInfo = e.asm.wd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickFormatInfo_GetInfoByName = function () {
          return (e._MagickFormatInfo_GetInfoByName = e.asm.xd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickFormatInfo_GetInfoWithBlob = function () {
          return (e._MagickFormatInfo_GetInfoWithBlob = e.asm.yd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickFormatInfo_Unregister = function () {
          return (e._MagickFormatInfo_Unregister = e.asm.zd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Create = function () {
          return (e._MagickImage_Create = e.asm.Ad).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Dispose = function () {
          return (e._MagickImage_Dispose = e.asm.Bd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AnimationDelay_Get = function () {
          return (e._MagickImage_AnimationDelay_Get = e.asm.Cd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AnimationDelay_Set = function () {
          return (e._MagickImage_AnimationDelay_Set = e.asm.Dd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AnimationIterations_Get = function () {
          return (e._MagickImage_AnimationIterations_Get =
            e.asm.Ed).apply(null, arguments)
        }),
        (e._MagickImage_AnimationIterations_Set = function () {
          return (e._MagickImage_AnimationIterations_Set =
            e.asm.Fd).apply(null, arguments)
        }),
        (e._MagickImage_AnimationTicksPerSecond_Get = function () {
          return (e._MagickImage_AnimationTicksPerSecond_Get =
            e.asm.Gd).apply(null, arguments)
        }),
        (e._MagickImage_AnimationTicksPerSecond_Set = function () {
          return (e._MagickImage_AnimationTicksPerSecond_Set =
            e.asm.Hd).apply(null, arguments)
        }),
        (e._MagickImage_BackgroundColor_Get = function () {
          return (e._MagickImage_BackgroundColor_Get = e.asm.Id).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_BackgroundColor_Set = function () {
          return (e._MagickImage_BackgroundColor_Set = e.asm.Jd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_BaseHeight_Get = function () {
          return (e._MagickImage_BaseHeight_Get = e.asm.Kd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_BaseWidth_Get = function () {
          return (e._MagickImage_BaseWidth_Get = e.asm.Ld).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_BlackPointCompensation_Get = function () {
          return (e._MagickImage_BlackPointCompensation_Get =
            e.asm.Md).apply(null, arguments)
        }),
        (e._MagickImage_BlackPointCompensation_Set = function () {
          return (e._MagickImage_BlackPointCompensation_Set =
            e.asm.Nd).apply(null, arguments)
        }),
        (e._MagickImage_BorderColor_Get = function () {
          return (e._MagickImage_BorderColor_Get = e.asm.Od).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_BorderColor_Set = function () {
          return (e._MagickImage_BorderColor_Set = e.asm.Pd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_BoundingBox_Get = function () {
          return (e._MagickImage_BoundingBox_Get = e.asm.Qd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickRectangle_Create = function () {
          return (e._MagickRectangle_Create = e.asm.Rd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ChannelCount_Get = function () {
          return (e._MagickImage_ChannelCount_Get = e.asm.Sd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ChromaBlue_Get = function () {
          return (e._MagickImage_ChromaBlue_Get = e.asm.Td).apply(
            null,
            arguments,
          )
        }),
        (e._PrimaryInfo_Create = function () {
          return (e._PrimaryInfo_Create = e.asm.Ud).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ChromaBlue_Set = function () {
          return (e._MagickImage_ChromaBlue_Set = e.asm.Vd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ChromaGreen_Get = function () {
          return (e._MagickImage_ChromaGreen_Get = e.asm.Wd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ChromaGreen_Set = function () {
          return (e._MagickImage_ChromaGreen_Set = e.asm.Xd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ChromaRed_Get = function () {
          return (e._MagickImage_ChromaRed_Get = e.asm.Yd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ChromaRed_Set = function () {
          return (e._MagickImage_ChromaRed_Set = e.asm.Zd).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ChromaWhite_Get = function () {
          return (e._MagickImage_ChromaWhite_Get = e.asm._d).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ChromaWhite_Set = function () {
          return (e._MagickImage_ChromaWhite_Set = e.asm.$d).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ClassType_Get = function () {
          return (e._MagickImage_ClassType_Get = e.asm.ae).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ClassType_Set = function () {
          return (e._MagickImage_ClassType_Set = e.asm.be).apply(
            null,
            arguments,
          )
        }),
        (e._QuantizeSettings_Create = function () {
          return (e._QuantizeSettings_Create = e.asm.ce).apply(
            null,
            arguments,
          )
        }),
        (e._QuantizeSettings_Dispose = function () {
          return (e._QuantizeSettings_Dispose = e.asm.de).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ColorFuzz_Get = function () {
          return (e._MagickImage_ColorFuzz_Get = e.asm.ee).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ColorFuzz_Set = function () {
          return (e._MagickImage_ColorFuzz_Set = e.asm.fe).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ColormapSize_Get = function () {
          return (e._MagickImage_ColormapSize_Get = e.asm.ge).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ColormapSize_Set = function () {
          return (e._MagickImage_ColormapSize_Set = e.asm.he).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ColorSpace_Get = function () {
          return (e._MagickImage_ColorSpace_Get = e.asm.ie).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ColorSpace_Set = function () {
          return (e._MagickImage_ColorSpace_Set = e.asm.je).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ColorType_Get = function () {
          return (e._MagickImage_ColorType_Get = e.asm.ke).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ColorType_Set = function () {
          return (e._MagickImage_ColorType_Set = e.asm.le).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Compose_Get = function () {
          return (e._MagickImage_Compose_Get = e.asm.me).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Compose_Set = function () {
          return (e._MagickImage_Compose_Set = e.asm.ne).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Compression_Get = function () {
          return (e._MagickImage_Compression_Get = e.asm.oe).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Compression_Set = function () {
          return (e._MagickImage_Compression_Set = e.asm.pe).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Depth_Get = function () {
          return (e._MagickImage_Depth_Get = e.asm.qe).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Depth_Set = function () {
          return (e._MagickImage_Depth_Set = e.asm.re).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_EncodingGeometry_Get = function () {
          return (e._MagickImage_EncodingGeometry_Get = e.asm.se).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Endian_Get = function () {
          return (e._MagickImage_Endian_Get = e.asm.te).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Endian_Set = function () {
          return (e._MagickImage_Endian_Set = e.asm.ue).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_FileName_Get = function () {
          return (e._MagickImage_FileName_Get = e.asm.ve).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_FileName_Set = function () {
          return (e._MagickImage_FileName_Set = e.asm.we).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_FilterType_Get = function () {
          return (e._MagickImage_FilterType_Get = e.asm.xe).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_FilterType_Set = function () {
          return (e._MagickImage_FilterType_Set = e.asm.ye).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Format_Get = function () {
          return (e._MagickImage_Format_Get = e.asm.ze).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Format_Set = function () {
          return (e._MagickImage_Format_Set = e.asm.Ae).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Gamma_Get = function () {
          return (e._MagickImage_Gamma_Get = e.asm.Be).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GifDisposeMethod_Get = function () {
          return (e._MagickImage_GifDisposeMethod_Get = e.asm.Ce).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GifDisposeMethod_Set = function () {
          return (e._MagickImage_GifDisposeMethod_Set = e.asm.De).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Interpolate_Get = function () {
          return (e._MagickImage_Interpolate_Get = e.asm.Ee).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Interpolate_Set = function () {
          return (e._MagickImage_Interpolate_Set = e.asm.Fe).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_HasAlpha_Get = function () {
          return (e._MagickImage_HasAlpha_Get = e.asm.Ge).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_HasAlpha_Set = function () {
          return (e._MagickImage_HasAlpha_Set = e.asm.He).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Height_Get = function () {
          return (e._MagickImage_Height_Get = e.asm.Ie).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Interlace_Get = function () {
          return (e._MagickImage_Interlace_Get = e.asm.Je).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Interlace_Set = function () {
          return (e._MagickImage_Interlace_Set = e.asm.Ke).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_IsOpaque_Get = function () {
          return (e._MagickImage_IsOpaque_Get = e.asm.Le).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_MatteColor_Get = function () {
          return (e._MagickImage_MatteColor_Get = e.asm.Me).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_MatteColor_Set = function () {
          return (e._MagickImage_MatteColor_Set = e.asm.Ne).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_MeanErrorPerPixel_Get = function () {
          return (e._MagickImage_MeanErrorPerPixel_Get =
            e.asm.Oe).apply(null, arguments)
        }),
        (e._MagickImage_NormalizedMaximumError_Get = function () {
          return (e._MagickImage_NormalizedMaximumError_Get =
            e.asm.Pe).apply(null, arguments)
        }),
        (e._MagickImage_NormalizedMeanError_Get = function () {
          return (e._MagickImage_NormalizedMeanError_Get =
            e.asm.Qe).apply(null, arguments)
        }),
        (e._MagickImage_Orientation_Get = function () {
          return (e._MagickImage_Orientation_Get = e.asm.Re).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Orientation_Set = function () {
          return (e._MagickImage_Orientation_Set = e.asm.Se).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_RenderingIntent_Get = function () {
          return (e._MagickImage_RenderingIntent_Get = e.asm.Te).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_RenderingIntent_Set = function () {
          return (e._MagickImage_RenderingIntent_Set = e.asm.Ue).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Page_Get = function () {
          return (e._MagickImage_Page_Get = e.asm.Ve).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Page_Set = function () {
          return (e._MagickImage_Page_Set = e.asm.We).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Quality_Get = function () {
          return (e._MagickImage_Quality_Get = e.asm.Xe).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Quality_Set = function () {
          return (e._MagickImage_Quality_Set = e.asm.Ye).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ResolutionUnits_Get = function () {
          return (e._MagickImage_ResolutionUnits_Get = e.asm.Ze).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ResolutionUnits_Set = function () {
          return (e._MagickImage_ResolutionUnits_Set = e.asm._e).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ResolutionX_Get = function () {
          return (e._MagickImage_ResolutionX_Get = e.asm.$e).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ResolutionX_Set = function () {
          return (e._MagickImage_ResolutionX_Set = e.asm.af).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ResolutionY_Get = function () {
          return (e._MagickImage_ResolutionY_Get = e.asm.bf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ResolutionY_Set = function () {
          return (e._MagickImage_ResolutionY_Set = e.asm.cf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Signature_Get = function () {
          return (e._MagickImage_Signature_Get = e.asm.df).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_TotalColors_Get = function () {
          return (e._MagickImage_TotalColors_Get = e.asm.ef).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_VirtualPixelMethod_Get = function () {
          return (e._MagickImage_VirtualPixelMethod_Get =
            e.asm.ff).apply(null, arguments)
        }),
        (e._MagickImage_VirtualPixelMethod_Set = function () {
          return (e._MagickImage_VirtualPixelMethod_Set =
            e.asm.gf).apply(null, arguments)
        }),
        (e._MagickImage_Width_Get = function () {
          return (e._MagickImage_Width_Get = e.asm.hf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AdaptiveBlur = function () {
          return (e._MagickImage_AdaptiveBlur = e.asm.jf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AdaptiveResize = function () {
          return (e._MagickImage_AdaptiveResize = e.asm.kf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AdaptiveSharpen = function () {
          return (e._MagickImage_AdaptiveSharpen = e.asm.lf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AdaptiveThreshold = function () {
          return (e._MagickImage_AdaptiveThreshold = e.asm.mf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AddNoise = function () {
          return (e._MagickImage_AddNoise = e.asm.nf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AffineTransform = function () {
          return (e._MagickImage_AffineTransform = e.asm.of).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Annotate = function () {
          return (e._MagickImage_Annotate = e.asm.pf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AnnotateGravity = function () {
          return (e._MagickImage_AnnotateGravity = e.asm.qf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AutoGamma = function () {
          return (e._MagickImage_AutoGamma = e.asm.rf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AutoLevel = function () {
          return (e._MagickImage_AutoLevel = e.asm.sf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AutoOrient = function () {
          return (e._MagickImage_AutoOrient = e.asm.tf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_AutoThreshold = function () {
          return (e._MagickImage_AutoThreshold = e.asm.uf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_BilateralBlur = function () {
          return (e._MagickImage_BilateralBlur = e.asm.vf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_BlackThreshold = function () {
          return (e._MagickImage_BlackThreshold = e.asm.wf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_BlueShift = function () {
          return (e._MagickImage_BlueShift = e.asm.xf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Blur = function () {
          return (e._MagickImage_Blur = e.asm.yf).apply(null, arguments)
        }),
        (e._MagickImage_Border = function () {
          return (e._MagickImage_Border = e.asm.zf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_BrightnessContrast = function () {
          return (e._MagickImage_BrightnessContrast = e.asm.Af).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_CannyEdge = function () {
          return (e._MagickImage_CannyEdge = e.asm.Bf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ChannelOffset = function () {
          return (e._MagickImage_ChannelOffset = e.asm.Cf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Charcoal = function () {
          return (e._MagickImage_Charcoal = e.asm.Df).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Chop = function () {
          return (e._MagickImage_Chop = e.asm.Ef).apply(null, arguments)
        }),
        (e._MagickImage_Clahe = function () {
          return (e._MagickImage_Clahe = e.asm.Ff).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Clamp = function () {
          return (e._MagickImage_Clamp = e.asm.Gf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ClipPath = function () {
          return (e._MagickImage_ClipPath = e.asm.Hf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Clone = function () {
          return (e._MagickImage_Clone = e.asm.If).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_CloneArea = function () {
          return (e._MagickImage_CloneArea = e.asm.Jf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Clut = function () {
          return (e._MagickImage_Clut = e.asm.Kf).apply(null, arguments)
        }),
        (e._MagickImage_ColorDecisionList = function () {
          return (e._MagickImage_ColorDecisionList = e.asm.Lf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Colorize = function () {
          return (e._MagickImage_Colorize = e.asm.Mf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ColorMatrix = function () {
          return (e._MagickImage_ColorMatrix = e.asm.Nf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ColorThreshold = function () {
          return (e._MagickImage_ColorThreshold = e.asm.Of).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Compare = function () {
          return (e._MagickImage_Compare = e.asm.Pf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_CompareDistortion = function () {
          return (e._MagickImage_CompareDistortion = e.asm.Qf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Composite = function () {
          return (e._MagickImage_Composite = e.asm.Rf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_CompositeGravity = function () {
          return (e._MagickImage_CompositeGravity = e.asm.Sf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ConnectedComponents = function () {
          return (e._MagickImage_ConnectedComponents = e.asm.Tf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Contrast = function () {
          return (e._MagickImage_Contrast = e.asm.Uf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ContrastStretch = function () {
          return (e._MagickImage_ContrastStretch = e.asm.Vf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ConvexHull = function () {
          return (e._MagickImage_ConvexHull = e.asm.Wf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Convolve = function () {
          return (e._MagickImage_Convolve = e.asm.Xf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_CopyPixels = function () {
          return (e._MagickImage_CopyPixels = e.asm.Yf).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Crop = function () {
          return (e._MagickImage_Crop = e.asm.Zf).apply(null, arguments)
        }),
        (e._MagickImage_CropToTiles = function () {
          return (e._MagickImage_CropToTiles = e.asm._f).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_CycleColormap = function () {
          return (e._MagickImage_CycleColormap = e.asm.$f).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Decipher = function () {
          return (e._MagickImage_Decipher = e.asm.ag).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Deskew = function () {
          return (e._MagickImage_Deskew = e.asm.bg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Despeckle = function () {
          return (e._MagickImage_Despeckle = e.asm.cg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_DetermineBitDepth = function () {
          return (e._MagickImage_DetermineBitDepth = e.asm.dg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_DetermineColorType = function () {
          return (e._MagickImage_DetermineColorType = e.asm.eg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Distort = function () {
          return (e._MagickImage_Distort = e.asm.fg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Edge = function () {
          return (e._MagickImage_Edge = e.asm.gg).apply(null, arguments)
        }),
        (e._MagickImage_Emboss = function () {
          return (e._MagickImage_Emboss = e.asm.hg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Encipher = function () {
          return (e._MagickImage_Encipher = e.asm.ig).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Enhance = function () {
          return (e._MagickImage_Enhance = e.asm.jg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Equalize = function () {
          return (e._MagickImage_Equalize = e.asm.kg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Equals = function () {
          return (e._MagickImage_Equals = e.asm.lg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_EvaluateFunction = function () {
          return (e._MagickImage_EvaluateFunction = e.asm.mg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_EvaluateGeometry = function () {
          return (e._MagickImage_EvaluateGeometry = e.asm.ng).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_EvaluateOperator = function () {
          return (e._MagickImage_EvaluateOperator = e.asm.og).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Extent = function () {
          return (e._MagickImage_Extent = e.asm.pg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Flip = function () {
          return (e._MagickImage_Flip = e.asm.qg).apply(null, arguments)
        }),
        (e._MagickImage_FloodFill = function () {
          return (e._MagickImage_FloodFill = e.asm.rg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Flop = function () {
          return (e._MagickImage_Flop = e.asm.sg).apply(null, arguments)
        }),
        (e._MagickImage_FontTypeMetrics = function () {
          return (e._MagickImage_FontTypeMetrics = e.asm.tg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_FormatExpression = function () {
          return (e._MagickImage_FormatExpression = e.asm.ug).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Frame = function () {
          return (e._MagickImage_Frame = e.asm.vg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Fx = function () {
          return (e._MagickImage_Fx = e.asm.wg).apply(null, arguments)
        }),
        (e._MagickImage_GammaCorrect = function () {
          return (e._MagickImage_GammaCorrect = e.asm.xg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GaussianBlur = function () {
          return (e._MagickImage_GaussianBlur = e.asm.yg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GetArtifact = function () {
          return (e._MagickImage_GetArtifact = e.asm.zg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GetAttribute = function () {
          return (e._MagickImage_GetAttribute = e.asm.Ag).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GetColormapColor = function () {
          return (e._MagickImage_GetColormapColor = e.asm.Bg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GetNext = function () {
          return (e._MagickImage_GetNext = e.asm.Cg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GetNextArtifactName = function () {
          return (e._MagickImage_GetNextArtifactName = e.asm.Dg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GetNextAttributeName = function () {
          return (e._MagickImage_GetNextAttributeName = e.asm.Eg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GetNextProfileName = function () {
          return (e._MagickImage_GetNextProfileName = e.asm.Fg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GetProfile = function () {
          return (e._MagickImage_GetProfile = e.asm.Gg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GetReadMask = function () {
          return (e._MagickImage_GetReadMask = e.asm.Hg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_GetWriteMask = function () {
          return (e._MagickImage_GetWriteMask = e.asm.Ig).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Grayscale = function () {
          return (e._MagickImage_Grayscale = e.asm.Jg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_HaldClut = function () {
          return (e._MagickImage_HaldClut = e.asm.Kg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_HasChannel = function () {
          return (e._MagickImage_HasChannel = e.asm.Lg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_HasProfile = function () {
          return (e._MagickImage_HasProfile = e.asm.Mg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Histogram = function () {
          return (e._MagickImage_Histogram = e.asm.Ng).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_HoughLine = function () {
          return (e._MagickImage_HoughLine = e.asm.Og).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Implode = function () {
          return (e._MagickImage_Implode = e.asm.Pg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ImportPixels = function () {
          return (e._MagickImage_ImportPixels = e.asm.Qg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Integral = function () {
          return (e._MagickImage_Integral = e.asm.Rg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_InterpolativeResize = function () {
          return (e._MagickImage_InterpolativeResize = e.asm.Sg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_InverseLevel = function () {
          return (e._MagickImage_InverseLevel = e.asm.Tg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Kmeans = function () {
          return (e._MagickImage_Kmeans = e.asm.Ug).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Kuwahara = function () {
          return (e._MagickImage_Kuwahara = e.asm.Vg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Level = function () {
          return (e._MagickImage_Level = e.asm.Wg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_LevelColors = function () {
          return (e._MagickImage_LevelColors = e.asm.Xg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_LinearStretch = function () {
          return (e._MagickImage_LinearStretch = e.asm.Yg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_LiquidRescale = function () {
          return (e._MagickImage_LiquidRescale = e.asm.Zg).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_LocalContrast = function () {
          return (e._MagickImage_LocalContrast = e.asm._g).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Magnify = function () {
          return (e._MagickImage_Magnify = e.asm.$g).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Map = function () {
          return (e._MagickImage_Map = e.asm.ah).apply(null, arguments)
        }),
        (e._MagickImage_MeanShift = function () {
          return (e._MagickImage_MeanShift = e.asm.bh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Minify = function () {
          return (e._MagickImage_Minify = e.asm.ch).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_MinimumBoundingBox = function () {
          return (e._MagickImage_MinimumBoundingBox = e.asm.dh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Modulate = function () {
          return (e._MagickImage_Modulate = e.asm.eh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Moments = function () {
          return (e._MagickImage_Moments = e.asm.fh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Morphology = function () {
          return (e._MagickImage_Morphology = e.asm.gh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_MotionBlur = function () {
          return (e._MagickImage_MotionBlur = e.asm.hh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Negate = function () {
          return (e._MagickImage_Negate = e.asm.ih).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Normalize = function () {
          return (e._MagickImage_Normalize = e.asm.jh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_OilPaint = function () {
          return (e._MagickImage_OilPaint = e.asm.kh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Opaque = function () {
          return (e._MagickImage_Opaque = e.asm.lh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_OrderedDither = function () {
          return (e._MagickImage_OrderedDither = e.asm.mh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Perceptible = function () {
          return (e._MagickImage_Perceptible = e.asm.nh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_PerceptualHash = function () {
          return (e._MagickImage_PerceptualHash = e.asm.oh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Quantize = function () {
          return (e._MagickImage_Quantize = e.asm.ph).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Polaroid = function () {
          return (e._MagickImage_Polaroid = e.asm.qh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Posterize = function () {
          return (e._MagickImage_Posterize = e.asm.rh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_RaiseOrLower = function () {
          return (e._MagickImage_RaiseOrLower = e.asm.sh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_RandomThreshold = function () {
          return (e._MagickImage_RandomThreshold = e.asm.th).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_RangeThreshold = function () {
          return (e._MagickImage_RangeThreshold = e.asm.uh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ReadBlob = function () {
          return (e._MagickImage_ReadBlob = e.asm.vh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ReadFile = function () {
          return (e._MagickImage_ReadFile = e.asm.wh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ReadPixels = function () {
          return (e._MagickImage_ReadPixels = e.asm.xh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ReadStream = function () {
          return (e._MagickImage_ReadStream = e.asm.yh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_RegionMask = function () {
          return (e._MagickImage_RegionMask = e.asm.zh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_RemoveArtifact = function () {
          return (e._MagickImage_RemoveArtifact = e.asm.Ah).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_RemoveAttribute = function () {
          return (e._MagickImage_RemoveAttribute = e.asm.Bh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_RemoveProfile = function () {
          return (e._MagickImage_RemoveProfile = e.asm.Ch).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_ResetArtifactIterator = function () {
          return (e._MagickImage_ResetArtifactIterator =
            e.asm.Dh).apply(null, arguments)
        }),
        (e._MagickImage_ResetAttributeIterator = function () {
          return (e._MagickImage_ResetAttributeIterator =
            e.asm.Eh).apply(null, arguments)
        }),
        (e._MagickImage_ResetProfileIterator = function () {
          return (e._MagickImage_ResetProfileIterator = e.asm.Fh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Resample = function () {
          return (e._MagickImage_Resample = e.asm.Gh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Resize = function () {
          return (e._MagickImage_Resize = e.asm.Hh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Roll = function () {
          return (e._MagickImage_Roll = e.asm.Ih).apply(null, arguments)
        }),
        (e._MagickImage_Rotate = function () {
          return (e._MagickImage_Rotate = e.asm.Jh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_RotationalBlur = function () {
          return (e._MagickImage_RotationalBlur = e.asm.Kh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Sample = function () {
          return (e._MagickImage_Sample = e.asm.Lh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Scale = function () {
          return (e._MagickImage_Scale = e.asm.Mh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Segment = function () {
          return (e._MagickImage_Segment = e.asm.Nh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SelectiveBlur = function () {
          return (e._MagickImage_SelectiveBlur = e.asm.Oh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Separate = function () {
          return (e._MagickImage_Separate = e.asm.Ph).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SepiaTone = function () {
          return (e._MagickImage_SepiaTone = e.asm.Qh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetAlpha = function () {
          return (e._MagickImage_SetAlpha = e.asm.Rh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetArtifact = function () {
          return (e._MagickImage_SetArtifact = e.asm.Sh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetAttribute = function () {
          return (e._MagickImage_SetAttribute = e.asm.Th).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetBitDepth = function () {
          return (e._MagickImage_SetBitDepth = e.asm.Uh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetClientData = function () {
          return (e._MagickImage_SetClientData = e.asm.Vh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetColormapColor = function () {
          return (e._MagickImage_SetColormapColor = e.asm.Wh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetColorMetric = function () {
          return (e._MagickImage_SetColorMetric = e.asm.Xh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetNext = function () {
          return (e._MagickImage_SetNext = e.asm.Yh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetProfile = function () {
          return (e._MagickImage_SetProfile = e.asm.Zh).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetProgressDelegate = function () {
          return (e._MagickImage_SetProgressDelegate = e.asm._h).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetReadMask = function () {
          return (e._MagickImage_SetReadMask = e.asm.$h).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SetWriteMask = function () {
          return (e._MagickImage_SetWriteMask = e.asm.ai).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Shade = function () {
          return (e._MagickImage_Shade = e.asm.bi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Shadow = function () {
          return (e._MagickImage_Shadow = e.asm.ci).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Sharpen = function () {
          return (e._MagickImage_Sharpen = e.asm.di).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Shave = function () {
          return (e._MagickImage_Shave = e.asm.ei).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Shear = function () {
          return (e._MagickImage_Shear = e.asm.fi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SigmoidalContrast = function () {
          return (e._MagickImage_SigmoidalContrast = e.asm.gi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SparseColor = function () {
          return (e._MagickImage_SparseColor = e.asm.hi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Spread = function () {
          return (e._MagickImage_Spread = e.asm.ii).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Sketch = function () {
          return (e._MagickImage_Sketch = e.asm.ji).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Solarize = function () {
          return (e._MagickImage_Solarize = e.asm.ki).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SortPixels = function () {
          return (e._MagickImage_SortPixels = e.asm.li).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Splice = function () {
          return (e._MagickImage_Splice = e.asm.mi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Statistic = function () {
          return (e._MagickImage_Statistic = e.asm.ni).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Statistics = function () {
          return (e._MagickImage_Statistics = e.asm.oi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Stegano = function () {
          return (e._MagickImage_Stegano = e.asm.pi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Stereo = function () {
          return (e._MagickImage_Stereo = e.asm.qi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Strip = function () {
          return (e._MagickImage_Strip = e.asm.ri).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_SubImageSearch = function () {
          return (e._MagickImage_SubImageSearch = e.asm.si).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Swirl = function () {
          return (e._MagickImage_Swirl = e.asm.ti).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Texture = function () {
          return (e._MagickImage_Texture = e.asm.ui).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Threshold = function () {
          return (e._MagickImage_Threshold = e.asm.vi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Thumbnail = function () {
          return (e._MagickImage_Thumbnail = e.asm.wi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Tint = function () {
          return (e._MagickImage_Tint = e.asm.xi).apply(null, arguments)
        }),
        (e._MagickImage_Transparent = function () {
          return (e._MagickImage_Transparent = e.asm.yi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_TransparentChroma = function () {
          return (e._MagickImage_TransparentChroma = e.asm.zi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Transpose = function () {
          return (e._MagickImage_Transpose = e.asm.Ai).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Transverse = function () {
          return (e._MagickImage_Transverse = e.asm.Bi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Trim = function () {
          return (e._MagickImage_Trim = e.asm.Ci).apply(null, arguments)
        }),
        (e._MagickImage_UniqueColors = function () {
          return (e._MagickImage_UniqueColors = e.asm.Di).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_UnsharpMask = function () {
          return (e._MagickImage_UnsharpMask = e.asm.Ei).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Vignette = function () {
          return (e._MagickImage_Vignette = e.asm.Fi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_Wave = function () {
          return (e._MagickImage_Wave = e.asm.Gi).apply(null, arguments)
        }),
        (e._MagickImage_WaveletDenoise = function () {
          return (e._MagickImage_WaveletDenoise = e.asm.Hi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_WhiteBalance = function () {
          return (e._MagickImage_WhiteBalance = e.asm.Ii).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_WhiteThreshold = function () {
          return (e._MagickImage_WhiteThreshold = e.asm.Ji).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_WriteBlob = function () {
          return (e._MagickImage_WriteBlob = e.asm.Ki).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_WriteFile = function () {
          return (e._MagickImage_WriteFile = e.asm.Li).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImage_WriteStream = function () {
          return (e._MagickImage_WriteStream = e.asm.Mi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Append = function () {
          return (e._MagickImageCollection_Append = e.asm.Ni).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Coalesce = function () {
          return (e._MagickImageCollection_Coalesce = e.asm.Oi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Combine = function () {
          return (e._MagickImageCollection_Combine = e.asm.Pi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Complex = function () {
          return (e._MagickImageCollection_Complex = e.asm.Qi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Deconstruct = function () {
          return (e._MagickImageCollection_Deconstruct =
            e.asm.Ri).apply(null, arguments)
        }),
        (e._MagickImageCollection_Dispose = function () {
          return (e._MagickImageCollection_Dispose = e.asm.Si).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Evaluate = function () {
          return (e._MagickImageCollection_Evaluate = e.asm.Ti).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Fx = function () {
          return (e._MagickImageCollection_Fx = e.asm.Ui).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Map = function () {
          return (e._MagickImageCollection_Map = e.asm.Vi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Merge = function () {
          return (e._MagickImageCollection_Merge = e.asm.Wi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Montage = function () {
          return (e._MagickImageCollection_Montage = e.asm.Xi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Morph = function () {
          return (e._MagickImageCollection_Morph = e.asm.Yi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Optimize = function () {
          return (e._MagickImageCollection_Optimize = e.asm.Zi).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_OptimizePlus = function () {
          return (e._MagickImageCollection_OptimizePlus =
            e.asm._i).apply(null, arguments)
        }),
        (e._MagickImageCollection_OptimizeTransparency = function () {
          return (e._MagickImageCollection_OptimizeTransparency =
            e.asm.$i).apply(null, arguments)
        }),
        (e._MagickImageCollection_Polynomial = function () {
          return (e._MagickImageCollection_Polynomial = e.asm.aj).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Quantize = function () {
          return (e._MagickImageCollection_Quantize = e.asm.bj).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_ReadBlob = function () {
          return (e._MagickImageCollection_ReadBlob = e.asm.cj).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_ReadFile = function () {
          return (e._MagickImageCollection_ReadFile = e.asm.dj).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_ReadStream = function () {
          return (e._MagickImageCollection_ReadStream = e.asm.ej).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_Smush = function () {
          return (e._MagickImageCollection_Smush = e.asm.fj).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_WriteFile = function () {
          return (e._MagickImageCollection_WriteFile = e.asm.gj).apply(
            null,
            arguments,
          )
        }),
        (e._MagickImageCollection_WriteStream = function () {
          return (e._MagickImageCollection_WriteStream =
            e.asm.hj).apply(null, arguments)
        }),
        (e._DoubleMatrix_Create = function () {
          return (e._DoubleMatrix_Create = e.asm.ij).apply(
            null,
            arguments,
          )
        }),
        (e._DoubleMatrix_Dispose = function () {
          return (e._DoubleMatrix_Dispose = e.asm.jj).apply(
            null,
            arguments,
          )
        }),
        (e._OpenCL_GetDevices = function () {
          return (e._OpenCL_GetDevices = e.asm.kj).apply(
            null,
            arguments,
          )
        }),
        (e._OpenCL_GetDevice = function () {
          return (e._OpenCL_GetDevice = e.asm.lj).apply(null, arguments)
        }),
        (e._OpenCL_GetEnabled = function () {
          return (e._OpenCL_GetEnabled = e.asm.mj).apply(
            null,
            arguments,
          )
        }),
        (e._OpenCL_SetEnabled = function () {
          return (e._OpenCL_SetEnabled = e.asm.nj).apply(
            null,
            arguments,
          )
        }),
        (e._OpenCLDevice_DeviceType_Get = function () {
          return (e._OpenCLDevice_DeviceType_Get = e.asm.oj).apply(
            null,
            arguments,
          )
        }),
        (e._OpenCLDevice_BenchmarkScore_Get = function () {
          return (e._OpenCLDevice_BenchmarkScore_Get = e.asm.pj).apply(
            null,
            arguments,
          )
        }),
        (e._OpenCLDevice_IsEnabled_Get = function () {
          return (e._OpenCLDevice_IsEnabled_Get = e.asm.qj).apply(
            null,
            arguments,
          )
        }),
        (e._OpenCLDevice_IsEnabled_Set = function () {
          return (e._OpenCLDevice_IsEnabled_Set = e.asm.rj).apply(
            null,
            arguments,
          )
        }),
        (e._OpenCLDevice_Name_Get = function () {
          return (e._OpenCLDevice_Name_Get = e.asm.sj).apply(
            null,
            arguments,
          )
        }),
        (e._OpenCLDevice_Version_Get = function () {
          return (e._OpenCLDevice_Version_Get = e.asm.tj).apply(
            null,
            arguments,
          )
        }),
        (e._OpenCLDevice_GetKernelProfileRecords = function () {
          return (e._OpenCLDevice_GetKernelProfileRecords =
            e.asm.uj).apply(null, arguments)
        }),
        (e._OpenCLDevice_GetKernelProfileRecord = function () {
          return (e._OpenCLDevice_GetKernelProfileRecord =
            e.asm.vj).apply(null, arguments)
        }),
        (e._OpenCLDevice_SetProfileKernels = function () {
          return (e._OpenCLDevice_SetProfileKernels = e.asm.wj).apply(
            null,
            arguments,
          )
        }),
        (e._OpenCLKernelProfileRecord_Count_Get = function () {
          return (e._OpenCLKernelProfileRecord_Count_Get =
            e.asm.xj).apply(null, arguments)
        }),
        (e._OpenCLKernelProfileRecord_Name_Get = function () {
          return (e._OpenCLKernelProfileRecord_Name_Get =
            e.asm.yj).apply(null, arguments)
        }),
        (e._OpenCLKernelProfileRecord_MaximumDuration_Get =
          function () {
            return (e._OpenCLKernelProfileRecord_MaximumDuration_Get =
              e.asm.zj).apply(null, arguments)
          }),
        (e._OpenCLKernelProfileRecord_MinimumDuration_Get =
          function () {
            return (e._OpenCLKernelProfileRecord_MinimumDuration_Get =
              e.asm.Aj).apply(null, arguments)
          }),
        (e._OpenCLKernelProfileRecord_TotalDuration_Get = function () {
          return (e._OpenCLKernelProfileRecord_TotalDuration_Get =
            e.asm.Bj).apply(null, arguments)
        }),
        (e._JpegOptimizer_CompressFile = function () {
          return (e._JpegOptimizer_CompressFile = e.asm.Cj).apply(
            null,
            arguments,
          )
        }),
        (e._JpegOptimizer_CompressStream = function () {
          return (e._JpegOptimizer_CompressStream = e.asm.Dj).apply(
            null,
            arguments,
          )
        })
      var st = (e._malloc = function () {
          return (st = e._malloc = e.asm.Ej).apply(null, arguments)
        }),
        we = (e._free = function () {
          return (we = e._free = e.asm.Fj).apply(null, arguments)
        }),
        Je = function () {
          return (Je = e.asm.Gj).apply(null, arguments)
        }
      ;(e._PixelCollection_Create = function () {
        return (e._PixelCollection_Create = e.asm.Hj).apply(
          null,
          arguments,
        )
      }),
        (e._PixelCollection_Dispose = function () {
          return (e._PixelCollection_Dispose = e.asm.Ij).apply(
            null,
            arguments,
          )
        }),
        (e._PixelCollection_GetArea = function () {
          return (e._PixelCollection_GetArea = e.asm.Jj).apply(
            null,
            arguments,
          )
        }),
        (e._PixelCollection_GetReadOnlyArea = function () {
          return (e._PixelCollection_GetReadOnlyArea = e.asm.Kj).apply(
            null,
            arguments,
          )
        }),
        (e._PixelCollection_SetArea = function () {
          return (e._PixelCollection_SetArea = e.asm.Lj).apply(
            null,
            arguments,
          )
        }),
        (e._PixelCollection_ToByteArray = function () {
          return (e._PixelCollection_ToByteArray = e.asm.Mj).apply(
            null,
            arguments,
          )
        }),
        (e._PixelCollection_ToShortArray = function () {
          return (e._PixelCollection_ToShortArray = e.asm.Nj).apply(
            null,
            arguments,
          )
        }),
        (e._Quantum_Depth_Get = function () {
          return (e._Quantum_Depth_Get = e.asm.Oj).apply(
            null,
            arguments,
          )
        }),
        (e._Quantum_Max_Get = function () {
          return (e._Quantum_Max_Get = e.asm.Pj).apply(null, arguments)
        }),
        (e._Quantum_ScaleToByte = function () {
          return (e._Quantum_ScaleToByte = e.asm.Qj).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Area_Get = function () {
          return (e._ResourceLimits_Area_Get = e.asm.Rj).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Area_Set = function () {
          return (e._ResourceLimits_Area_Set = e.asm.Sj).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Disk_Get = function () {
          return (e._ResourceLimits_Disk_Get = e.asm.Tj).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Disk_Set = function () {
          return (e._ResourceLimits_Disk_Set = e.asm.Uj).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Height_Get = function () {
          return (e._ResourceLimits_Height_Get = e.asm.Vj).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Height_Set = function () {
          return (e._ResourceLimits_Height_Set = e.asm.Wj).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_ListLength_Get = function () {
          return (e._ResourceLimits_ListLength_Get = e.asm.Xj).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_ListLength_Set = function () {
          return (e._ResourceLimits_ListLength_Set = e.asm.Yj).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_MaxMemoryRequest_Get = function () {
          return (e._ResourceLimits_MaxMemoryRequest_Get =
            e.asm.Zj).apply(null, arguments)
        }),
        (e._ResourceLimits_MaxMemoryRequest_Set = function () {
          return (e._ResourceLimits_MaxMemoryRequest_Set =
            e.asm._j).apply(null, arguments)
        }),
        (e._ResourceLimits_Memory_Get = function () {
          return (e._ResourceLimits_Memory_Get = e.asm.$j).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Memory_Set = function () {
          return (e._ResourceLimits_Memory_Set = e.asm.ak).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Thread_Get = function () {
          return (e._ResourceLimits_Thread_Get = e.asm.bk).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Thread_Set = function () {
          return (e._ResourceLimits_Thread_Set = e.asm.ck).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Throttle_Get = function () {
          return (e._ResourceLimits_Throttle_Get = e.asm.dk).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Throttle_Set = function () {
          return (e._ResourceLimits_Throttle_Set = e.asm.ek).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Time_Get = function () {
          return (e._ResourceLimits_Time_Get = e.asm.fk).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Time_Set = function () {
          return (e._ResourceLimits_Time_Set = e.asm.gk).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Width_Get = function () {
          return (e._ResourceLimits_Width_Get = e.asm.hk).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_Width_Set = function () {
          return (e._ResourceLimits_Width_Set = e.asm.ik).apply(
            null,
            arguments,
          )
        }),
        (e._ResourceLimits_LimitMemory = function () {
          return (e._ResourceLimits_LimitMemory = e.asm.jk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_Create = function () {
          return (e._DrawingSettings_Create = e.asm.kk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_Dispose = function () {
          return (e._DrawingSettings_Dispose = e.asm.lk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_BorderColor_Get = function () {
          return (e._DrawingSettings_BorderColor_Get = e.asm.mk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_BorderColor_Set = function () {
          return (e._DrawingSettings_BorderColor_Set = e.asm.nk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_FillColor_Get = function () {
          return (e._DrawingSettings_FillColor_Get = e.asm.ok).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_FillColor_Set = function () {
          return (e._DrawingSettings_FillColor_Set = e.asm.pk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_FillRule_Get = function () {
          return (e._DrawingSettings_FillRule_Get = e.asm.qk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_FillRule_Set = function () {
          return (e._DrawingSettings_FillRule_Set = e.asm.rk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_Font_Get = function () {
          return (e._DrawingSettings_Font_Get = e.asm.sk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_Font_Set = function () {
          return (e._DrawingSettings_Font_Set = e.asm.tk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_FontFamily_Get = function () {
          return (e._DrawingSettings_FontFamily_Get = e.asm.uk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_FontFamily_Set = function () {
          return (e._DrawingSettings_FontFamily_Set = e.asm.vk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_FontPointsize_Get = function () {
          return (e._DrawingSettings_FontPointsize_Get =
            e.asm.wk).apply(null, arguments)
        }),
        (e._DrawingSettings_FontPointsize_Set = function () {
          return (e._DrawingSettings_FontPointsize_Set =
            e.asm.xk).apply(null, arguments)
        }),
        (e._DrawingSettings_FontStyle_Get = function () {
          return (e._DrawingSettings_FontStyle_Get = e.asm.yk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_FontStyle_Set = function () {
          return (e._DrawingSettings_FontStyle_Set = e.asm.zk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_FontWeight_Get = function () {
          return (e._DrawingSettings_FontWeight_Get = e.asm.Ak).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_FontWeight_Set = function () {
          return (e._DrawingSettings_FontWeight_Set = e.asm.Bk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_StrokeAntiAlias_Get = function () {
          return (e._DrawingSettings_StrokeAntiAlias_Get =
            e.asm.Ck).apply(null, arguments)
        }),
        (e._DrawingSettings_StrokeAntiAlias_Set = function () {
          return (e._DrawingSettings_StrokeAntiAlias_Set =
            e.asm.Dk).apply(null, arguments)
        }),
        (e._DrawingSettings_StrokeColor_Get = function () {
          return (e._DrawingSettings_StrokeColor_Get = e.asm.Ek).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_StrokeColor_Set = function () {
          return (e._DrawingSettings_StrokeColor_Set = e.asm.Fk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_StrokeDashOffset_Get = function () {
          return (e._DrawingSettings_StrokeDashOffset_Get =
            e.asm.Gk).apply(null, arguments)
        }),
        (e._DrawingSettings_StrokeDashOffset_Set = function () {
          return (e._DrawingSettings_StrokeDashOffset_Set =
            e.asm.Hk).apply(null, arguments)
        }),
        (e._DrawingSettings_StrokeLineCap_Get = function () {
          return (e._DrawingSettings_StrokeLineCap_Get =
            e.asm.Ik).apply(null, arguments)
        }),
        (e._DrawingSettings_StrokeLineCap_Set = function () {
          return (e._DrawingSettings_StrokeLineCap_Set =
            e.asm.Jk).apply(null, arguments)
        }),
        (e._DrawingSettings_StrokeLineJoin_Get = function () {
          return (e._DrawingSettings_StrokeLineJoin_Get =
            e.asm.Kk).apply(null, arguments)
        }),
        (e._DrawingSettings_StrokeLineJoin_Set = function () {
          return (e._DrawingSettings_StrokeLineJoin_Set =
            e.asm.Lk).apply(null, arguments)
        }),
        (e._DrawingSettings_StrokeMiterLimit_Get = function () {
          return (e._DrawingSettings_StrokeMiterLimit_Get =
            e.asm.Mk).apply(null, arguments)
        }),
        (e._DrawingSettings_StrokeMiterLimit_Set = function () {
          return (e._DrawingSettings_StrokeMiterLimit_Set =
            e.asm.Nk).apply(null, arguments)
        }),
        (e._DrawingSettings_StrokeWidth_Get = function () {
          return (e._DrawingSettings_StrokeWidth_Get = e.asm.Ok).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_StrokeWidth_Set = function () {
          return (e._DrawingSettings_StrokeWidth_Set = e.asm.Pk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_TextAntiAlias_Get = function () {
          return (e._DrawingSettings_TextAntiAlias_Get =
            e.asm.Qk).apply(null, arguments)
        }),
        (e._DrawingSettings_TextAntiAlias_Set = function () {
          return (e._DrawingSettings_TextAntiAlias_Set =
            e.asm.Rk).apply(null, arguments)
        }),
        (e._DrawingSettings_TextDirection_Get = function () {
          return (e._DrawingSettings_TextDirection_Get =
            e.asm.Sk).apply(null, arguments)
        }),
        (e._DrawingSettings_TextDirection_Set = function () {
          return (e._DrawingSettings_TextDirection_Set =
            e.asm.Tk).apply(null, arguments)
        }),
        (e._DrawingSettings_TextEncoding_Get = function () {
          return (e._DrawingSettings_TextEncoding_Get = e.asm.Uk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_TextEncoding_Set = function () {
          return (e._DrawingSettings_TextEncoding_Set = e.asm.Vk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_TextGravity_Get = function () {
          return (e._DrawingSettings_TextGravity_Get = e.asm.Wk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_TextGravity_Set = function () {
          return (e._DrawingSettings_TextGravity_Set = e.asm.Xk).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_TextInterlineSpacing_Get = function () {
          return (e._DrawingSettings_TextInterlineSpacing_Get =
            e.asm.Yk).apply(null, arguments)
        }),
        (e._DrawingSettings_TextInterlineSpacing_Set = function () {
          return (e._DrawingSettings_TextInterlineSpacing_Set =
            e.asm.Zk).apply(null, arguments)
        }),
        (e._DrawingSettings_TextInterwordSpacing_Get = function () {
          return (e._DrawingSettings_TextInterwordSpacing_Get =
            e.asm._k).apply(null, arguments)
        }),
        (e._DrawingSettings_TextInterwordSpacing_Set = function () {
          return (e._DrawingSettings_TextInterwordSpacing_Set =
            e.asm.$k).apply(null, arguments)
        }),
        (e._DrawingSettings_TextKerning_Get = function () {
          return (e._DrawingSettings_TextKerning_Get = e.asm.al).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_TextKerning_Set = function () {
          return (e._DrawingSettings_TextKerning_Set = e.asm.bl).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_TextUnderColor_Get = function () {
          return (e._DrawingSettings_TextUnderColor_Get =
            e.asm.cl).apply(null, arguments)
        }),
        (e._DrawingSettings_TextUnderColor_Set = function () {
          return (e._DrawingSettings_TextUnderColor_Set =
            e.asm.dl).apply(null, arguments)
        }),
        (e._DrawingSettings_SetAffine = function () {
          return (e._DrawingSettings_SetAffine = e.asm.el).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_SetFillPattern = function () {
          return (e._DrawingSettings_SetFillPattern = e.asm.fl).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_SetStrokeDashArray = function () {
          return (e._DrawingSettings_SetStrokeDashArray =
            e.asm.gl).apply(null, arguments)
        }),
        (e._DrawingSettings_SetStrokePattern = function () {
          return (e._DrawingSettings_SetStrokePattern = e.asm.hl).apply(
            null,
            arguments,
          )
        }),
        (e._DrawingSettings_SetText = function () {
          return (e._DrawingSettings_SetText = e.asm.il).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Create = function () {
          return (e._MagickSettings_Create = e.asm.jl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Dispose = function () {
          return (e._MagickSettings_Dispose = e.asm.kl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_AntiAlias_Get = function () {
          return (e._MagickSettings_AntiAlias_Get = e.asm.ll).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_AntiAlias_Set = function () {
          return (e._MagickSettings_AntiAlias_Set = e.asm.ml).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_BackgroundColor_Get = function () {
          return (e._MagickSettings_BackgroundColor_Get =
            e.asm.nl).apply(null, arguments)
        }),
        (e._MagickSettings_BackgroundColor_Set = function () {
          return (e._MagickSettings_BackgroundColor_Set =
            e.asm.ol).apply(null, arguments)
        }),
        (e._MagickSettings_ColorSpace_Get = function () {
          return (e._MagickSettings_ColorSpace_Get = e.asm.pl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_ColorSpace_Set = function () {
          return (e._MagickSettings_ColorSpace_Set = e.asm.ql).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_ColorType_Get = function () {
          return (e._MagickSettings_ColorType_Get = e.asm.rl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_ColorType_Set = function () {
          return (e._MagickSettings_ColorType_Set = e.asm.sl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Compression_Get = function () {
          return (e._MagickSettings_Compression_Get = e.asm.tl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Compression_Set = function () {
          return (e._MagickSettings_Compression_Set = e.asm.ul).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Debug_Get = function () {
          return (e._MagickSettings_Debug_Get = e.asm.vl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Debug_Set = function () {
          return (e._MagickSettings_Debug_Set = e.asm.wl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Density_Get = function () {
          return (e._MagickSettings_Density_Get = e.asm.xl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Density_Set = function () {
          return (e._MagickSettings_Density_Set = e.asm.yl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Depth_Get = function () {
          return (e._MagickSettings_Depth_Get = e.asm.zl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Depth_Set = function () {
          return (e._MagickSettings_Depth_Set = e.asm.Al).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Endian_Get = function () {
          return (e._MagickSettings_Endian_Get = e.asm.Bl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Endian_Set = function () {
          return (e._MagickSettings_Endian_Set = e.asm.Cl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Extract_Get = function () {
          return (e._MagickSettings_Extract_Get = e.asm.Dl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Extract_Set = function () {
          return (e._MagickSettings_Extract_Set = e.asm.El).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Format_Get = function () {
          return (e._MagickSettings_Format_Get = e.asm.Fl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Format_Set = function () {
          return (e._MagickSettings_Format_Set = e.asm.Gl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_FontPointsize_Get = function () {
          return (e._MagickSettings_FontPointsize_Get = e.asm.Hl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_FontPointsize_Set = function () {
          return (e._MagickSettings_FontPointsize_Set = e.asm.Il).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Interlace_Get = function () {
          return (e._MagickSettings_Interlace_Get = e.asm.Jl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Interlace_Set = function () {
          return (e._MagickSettings_Interlace_Set = e.asm.Kl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Monochrome_Get = function () {
          return (e._MagickSettings_Monochrome_Get = e.asm.Ll).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Monochrome_Set = function () {
          return (e._MagickSettings_Monochrome_Set = e.asm.Ml).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Verbose_Get = function () {
          return (e._MagickSettings_Verbose_Get = e.asm.Nl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_Verbose_Set = function () {
          return (e._MagickSettings_Verbose_Set = e.asm.Ol).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_SetColorFuzz = function () {
          return (e._MagickSettings_SetColorFuzz = e.asm.Pl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_SetFileName = function () {
          return (e._MagickSettings_SetFileName = e.asm.Ql).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_SetFont = function () {
          return (e._MagickSettings_SetFont = e.asm.Rl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_SetNumberScenes = function () {
          return (e._MagickSettings_SetNumberScenes = e.asm.Sl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_SetOption = function () {
          return (e._MagickSettings_SetOption = e.asm.Tl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_SetPage = function () {
          return (e._MagickSettings_SetPage = e.asm.Ul).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_SetPing = function () {
          return (e._MagickSettings_SetPing = e.asm.Vl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_SetQuality = function () {
          return (e._MagickSettings_SetQuality = e.asm.Wl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_SetScenes = function () {
          return (e._MagickSettings_SetScenes = e.asm.Xl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_SetScene = function () {
          return (e._MagickSettings_SetScene = e.asm.Yl).apply(
            null,
            arguments,
          )
        }),
        (e._MagickSettings_SetSize = function () {
          return (e._MagickSettings_SetSize = e.asm.Zl).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_Create = function () {
          return (e._MontageSettings_Create = e.asm._l).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_Dispose = function () {
          return (e._MontageSettings_Dispose = e.asm.$l).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetBackgroundColor = function () {
          return (e._MontageSettings_SetBackgroundColor =
            e.asm.am).apply(null, arguments)
        }),
        (e._MontageSettings_SetBorderColor = function () {
          return (e._MontageSettings_SetBorderColor = e.asm.bm).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetBorderWidth = function () {
          return (e._MontageSettings_SetBorderWidth = e.asm.cm).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetFillColor = function () {
          return (e._MontageSettings_SetFillColor = e.asm.dm).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetFont = function () {
          return (e._MontageSettings_SetFont = e.asm.em).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetFontPointsize = function () {
          return (e._MontageSettings_SetFontPointsize = e.asm.fm).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetFrameGeometry = function () {
          return (e._MontageSettings_SetFrameGeometry = e.asm.gm).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetGeometry = function () {
          return (e._MontageSettings_SetGeometry = e.asm.hm).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetGravity = function () {
          return (e._MontageSettings_SetGravity = e.asm.im).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetShadow = function () {
          return (e._MontageSettings_SetShadow = e.asm.jm).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetStrokeColor = function () {
          return (e._MontageSettings_SetStrokeColor = e.asm.km).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetTextureFileName = function () {
          return (e._MontageSettings_SetTextureFileName =
            e.asm.lm).apply(null, arguments)
        }),
        (e._MontageSettings_SetTileGeometry = function () {
          return (e._MontageSettings_SetTileGeometry = e.asm.mm).apply(
            null,
            arguments,
          )
        }),
        (e._MontageSettings_SetTitle = function () {
          return (e._MontageSettings_SetTitle = e.asm.nm).apply(
            null,
            arguments,
          )
        }),
        (e._QuantizeSettings_SetColors = function () {
          return (e._QuantizeSettings_SetColors = e.asm.om).apply(
            null,
            arguments,
          )
        }),
        (e._QuantizeSettings_SetColorSpace = function () {
          return (e._QuantizeSettings_SetColorSpace = e.asm.pm).apply(
            null,
            arguments,
          )
        }),
        (e._QuantizeSettings_SetDitherMethod = function () {
          return (e._QuantizeSettings_SetDitherMethod = e.asm.qm).apply(
            null,
            arguments,
          )
        }),
        (e._QuantizeSettings_SetMeasureErrors = function () {
          return (e._QuantizeSettings_SetMeasureErrors =
            e.asm.rm).apply(null, arguments)
        }),
        (e._QuantizeSettings_SetTreeDepth = function () {
          return (e._QuantizeSettings_SetTreeDepth = e.asm.sm).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelMoments_Centroid_Get = function () {
          return (e._ChannelMoments_Centroid_Get = e.asm.tm).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelMoments_EllipseAngle_Get = function () {
          return (e._ChannelMoments_EllipseAngle_Get = e.asm.um).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelMoments_EllipseAxis_Get = function () {
          return (e._ChannelMoments_EllipseAxis_Get = e.asm.vm).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelMoments_EllipseEccentricity_Get = function () {
          return (e._ChannelMoments_EllipseEccentricity_Get =
            e.asm.wm).apply(null, arguments)
        }),
        (e._ChannelMoments_EllipseIntensity_Get = function () {
          return (e._ChannelMoments_EllipseIntensity_Get =
            e.asm.xm).apply(null, arguments)
        }),
        (e._ChannelMoments_GetHuInvariants = function () {
          return (e._ChannelMoments_GetHuInvariants = e.asm.ym).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelPerceptualHash_GetHuPhash = function () {
          return (e._ChannelPerceptualHash_GetHuPhash = e.asm.zm).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelStatistics_Depth_Get = function () {
          return (e._ChannelStatistics_Depth_Get = e.asm.Am).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelStatistics_Entropy_Get = function () {
          return (e._ChannelStatistics_Entropy_Get = e.asm.Bm).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelStatistics_Kurtosis_Get = function () {
          return (e._ChannelStatistics_Kurtosis_Get = e.asm.Cm).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelStatistics_Maximum_Get = function () {
          return (e._ChannelStatistics_Maximum_Get = e.asm.Dm).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelStatistics_Mean_Get = function () {
          return (e._ChannelStatistics_Mean_Get = e.asm.Em).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelStatistics_Minimum_Get = function () {
          return (e._ChannelStatistics_Minimum_Get = e.asm.Fm).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelStatistics_Skewness_Get = function () {
          return (e._ChannelStatistics_Skewness_Get = e.asm.Gm).apply(
            null,
            arguments,
          )
        }),
        (e._ChannelStatistics_StandardDeviation_Get = function () {
          return (e._ChannelStatistics_StandardDeviation_Get =
            e.asm.Hm).apply(null, arguments)
        }),
        (e._Moments_DisposeList = function () {
          return (e._Moments_DisposeList = e.asm.Im).apply(
            null,
            arguments,
          )
        }),
        (e._Moments_GetInstance = function () {
          return (e._Moments_GetInstance = e.asm.Jm).apply(
            null,
            arguments,
          )
        }),
        (e._PerceptualHash_DisposeList = function () {
          return (e._PerceptualHash_DisposeList = e.asm.Km).apply(
            null,
            arguments,
          )
        }),
        (e._PerceptualHash_GetInstance = function () {
          return (e._PerceptualHash_GetInstance = e.asm.Lm).apply(
            null,
            arguments,
          )
        }),
        (e._Statistics_DisposeList = function () {
          return (e._Statistics_DisposeList = e.asm.Mm).apply(
            null,
            arguments,
          )
        }),
        (e._Statistics_GetInstance = function () {
          return (e._Statistics_GetInstance = e.asm.Nm).apply(
            null,
            arguments,
          )
        }),
        (e._ConnectedComponent_DisposeList = function () {
          return (e._ConnectedComponent_DisposeList = e.asm.Om).apply(
            null,
            arguments,
          )
        }),
        (e._ConnectedComponent_GetArea = function () {
          return (e._ConnectedComponent_GetArea = e.asm.Pm).apply(
            null,
            arguments,
          )
        }),
        (e._ConnectedComponent_GetCentroid = function () {
          return (e._ConnectedComponent_GetCentroid = e.asm.Qm).apply(
            null,
            arguments,
          )
        }),
        (e._ConnectedComponent_GetColor = function () {
          return (e._ConnectedComponent_GetColor = e.asm.Rm).apply(
            null,
            arguments,
          )
        }),
        (e._ConnectedComponent_GetHeight = function () {
          return (e._ConnectedComponent_GetHeight = e.asm.Sm).apply(
            null,
            arguments,
          )
        }),
        (e._ConnectedComponent_GetId = function () {
          return (e._ConnectedComponent_GetId = e.asm.Tm).apply(
            null,
            arguments,
          )
        }),
        (e._ConnectedComponent_GetWidth = function () {
          return (e._ConnectedComponent_GetWidth = e.asm.Um).apply(
            null,
            arguments,
          )
        }),
        (e._ConnectedComponent_GetX = function () {
          return (e._ConnectedComponent_GetX = e.asm.Vm).apply(
            null,
            arguments,
          )
        }),
        (e._ConnectedComponent_GetY = function () {
          return (e._ConnectedComponent_GetY = e.asm.Wm).apply(
            null,
            arguments,
          )
        }),
        (e._ConnectedComponent_GetInstance = function () {
          return (e._ConnectedComponent_GetInstance = e.asm.Xm).apply(
            null,
            arguments,
          )
        }),
        (e._MagickGeometry_Create = function () {
          return (e._MagickGeometry_Create = e.asm.Ym).apply(
            null,
            arguments,
          )
        }),
        (e._MagickGeometry_Dispose = function () {
          return (e._MagickGeometry_Dispose = e.asm.Zm).apply(
            null,
            arguments,
          )
        }),
        (e._MagickGeometry_X_Get = function () {
          return (e._MagickGeometry_X_Get = e.asm._m).apply(
            null,
            arguments,
          )
        }),
        (e._MagickGeometry_Y_Get = function () {
          return (e._MagickGeometry_Y_Get = e.asm.$m).apply(
            null,
            arguments,
          )
        }),
        (e._MagickGeometry_Width_Get = function () {
          return (e._MagickGeometry_Width_Get = e.asm.an).apply(
            null,
            arguments,
          )
        }),
        (e._MagickGeometry_Height_Get = function () {
          return (e._MagickGeometry_Height_Get = e.asm.bn).apply(
            null,
            arguments,
          )
        }),
        (e._MagickGeometry_Initialize = function () {
          return (e._MagickGeometry_Initialize = e.asm.cn).apply(
            null,
            arguments,
          )
        }),
        (e._MagickRectangle_Dispose = function () {
          return (e._MagickRectangle_Dispose = e.asm.dn).apply(
            null,
            arguments,
          )
        }),
        (e._MagickRectangle_X_Get = function () {
          return (e._MagickRectangle_X_Get = e.asm.en).apply(
            null,
            arguments,
          )
        }),
        (e._MagickRectangle_X_Set = function () {
          return (e._MagickRectangle_X_Set = e.asm.fn).apply(
            null,
            arguments,
          )
        }),
        (e._MagickRectangle_Y_Get = function () {
          return (e._MagickRectangle_Y_Get = e.asm.gn).apply(
            null,
            arguments,
          )
        }),
        (e._MagickRectangle_Y_Set = function () {
          return (e._MagickRectangle_Y_Set = e.asm.hn).apply(
            null,
            arguments,
          )
        }),
        (e._MagickRectangle_Width_Get = function () {
          return (e._MagickRectangle_Width_Get = e.asm.jn).apply(
            null,
            arguments,
          )
        }),
        (e._MagickRectangle_Width_Set = function () {
          return (e._MagickRectangle_Width_Set = e.asm.kn).apply(
            null,
            arguments,
          )
        }),
        (e._MagickRectangle_Height_Get = function () {
          return (e._MagickRectangle_Height_Get = e.asm.ln).apply(
            null,
            arguments,
          )
        }),
        (e._MagickRectangle_Height_Set = function () {
          return (e._MagickRectangle_Height_Set = e.asm.mn).apply(
            null,
            arguments,
          )
        }),
        (e._MagickRectangle_FromPageSize = function () {
          return (e._MagickRectangle_FromPageSize = e.asm.nn).apply(
            null,
            arguments,
          )
        }),
        (e._OffsetInfo_Create = function () {
          return (e._OffsetInfo_Create = e.asm.on).apply(
            null,
            arguments,
          )
        }),
        (e._OffsetInfo_Dispose = function () {
          return (e._OffsetInfo_Dispose = e.asm.pn).apply(
            null,
            arguments,
          )
        }),
        (e._OffsetInfo_SetX = function () {
          return (e._OffsetInfo_SetX = e.asm.qn).apply(null, arguments)
        }),
        (e._OffsetInfo_SetY = function () {
          return (e._OffsetInfo_SetY = e.asm.rn).apply(null, arguments)
        }),
        (e._PointInfo_X_Get = function () {
          return (e._PointInfo_X_Get = e.asm.sn).apply(null, arguments)
        }),
        (e._PointInfo_Y_Get = function () {
          return (e._PointInfo_Y_Get = e.asm.tn).apply(null, arguments)
        }),
        (e._PrimaryInfo_Dispose = function () {
          return (e._PrimaryInfo_Dispose = e.asm.un).apply(
            null,
            arguments,
          )
        }),
        (e._PrimaryInfo_X_Get = function () {
          return (e._PrimaryInfo_X_Get = e.asm.vn).apply(
            null,
            arguments,
          )
        }),
        (e._PrimaryInfo_X_Set = function () {
          return (e._PrimaryInfo_X_Set = e.asm.wn).apply(
            null,
            arguments,
          )
        }),
        (e._PrimaryInfo_Y_Get = function () {
          return (e._PrimaryInfo_Y_Get = e.asm.xn).apply(
            null,
            arguments,
          )
        }),
        (e._PrimaryInfo_Y_Set = function () {
          return (e._PrimaryInfo_Y_Set = e.asm.yn).apply(
            null,
            arguments,
          )
        }),
        (e._PrimaryInfo_Z_Get = function () {
          return (e._PrimaryInfo_Z_Get = e.asm.zn).apply(
            null,
            arguments,
          )
        }),
        (e._PrimaryInfo_Z_Set = function () {
          return (e._PrimaryInfo_Z_Set = e.asm.An).apply(
            null,
            arguments,
          )
        }),
        (e._StringInfo_Length_Get = function () {
          return (e._StringInfo_Length_Get = e.asm.Bn).apply(
            null,
            arguments,
          )
        }),
        (e._StringInfo_Datum_Get = function () {
          return (e._StringInfo_Datum_Get = e.asm.Cn).apply(
            null,
            arguments,
          )
        }),
        (e._TypeMetric_Dispose = function () {
          return (e._TypeMetric_Dispose = e.asm.Dn).apply(
            null,
            arguments,
          )
        }),
        (e._TypeMetric_Ascent_Get = function () {
          return (e._TypeMetric_Ascent_Get = e.asm.En).apply(
            null,
            arguments,
          )
        }),
        (e._TypeMetric_Descent_Get = function () {
          return (e._TypeMetric_Descent_Get = e.asm.Fn).apply(
            null,
            arguments,
          )
        }),
        (e._TypeMetric_MaxHorizontalAdvance_Get = function () {
          return (e._TypeMetric_MaxHorizontalAdvance_Get =
            e.asm.Gn).apply(null, arguments)
        }),
        (e._TypeMetric_TextHeight_Get = function () {
          return (e._TypeMetric_TextHeight_Get = e.asm.Hn).apply(
            null,
            arguments,
          )
        }),
        (e._TypeMetric_TextWidth_Get = function () {
          return (e._TypeMetric_TextWidth_Get = e.asm.In).apply(
            null,
            arguments,
          )
        }),
        (e._TypeMetric_UnderlinePosition_Get = function () {
          return (e._TypeMetric_UnderlinePosition_Get = e.asm.Jn).apply(
            null,
            arguments,
          )
        }),
        (e._TypeMetric_UnderlineThickness_Get = function () {
          return (e._TypeMetric_UnderlineThickness_Get =
            e.asm.Kn).apply(null, arguments)
        })
      var hn = function () {
        return (hn = e.asm.Ln).apply(null, arguments)
      }
      e.__embind_initialize_bindings = function () {
        return (e.__embind_initialize_bindings = e.asm.Mn).apply(
          null,
          arguments,
        )
      }
      var yn = function () {
          return (yn = e.asm.Nn).apply(null, arguments)
        },
        z = function () {
          return (z = e.asm.On).apply(null, arguments)
        },
        U = function () {
          return (U = e.asm.Pn).apply(null, arguments)
        },
        H = function () {
          return (H = e.asm.Qn).apply(null, arguments)
        },
        Sn = function () {
          return (Sn = e.asm.Rn).apply(null, arguments)
        },
        kn = function () {
          return (kn = e.asm.Sn).apply(null, arguments)
        }
      function Xr(a, r, i, s) {
        var _ = U()
        try {
          N(a)(r, i, s)
        } catch (c) {
          if ((H(_), c !== c + 0)) throw c
          z(1, 0)
        }
      }
      function Vr(a, r, i, s) {
        var _ = U()
        try {
          return N(a)(r, i, s)
        } catch (c) {
          if ((H(_), c !== c + 0)) throw c
          z(1, 0)
        }
      }
      function Qr(a, r, i) {
        var s = U()
        try {
          return N(a)(r, i)
        } catch (_) {
          if ((H(s), _ !== _ + 0)) throw _
          z(1, 0)
        }
      }
      function qr(a, r) {
        var i = U()
        try {
          return N(a)(r)
        } catch (s) {
          if ((H(i), s !== s + 0)) throw s
          z(1, 0)
        }
      }
      function $r(a, r) {
        var i = U()
        try {
          N(a)(r)
        } catch (s) {
          if ((H(i), s !== s + 0)) throw s
          z(1, 0)
        }
      }
      function Jr(a, r, i) {
        var s = U()
        try {
          N(a)(r, i)
        } catch (_) {
          if ((H(s), _ !== _ + 0)) throw _
          z(1, 0)
        }
      }
      function Kr(a, r, i, s, _) {
        var c = U()
        try {
          N(a)(r, i, s, _)
        } catch (m) {
          if ((H(c), m !== m + 0)) throw m
          z(1, 0)
        }
      }
      function Zr(a, r, i, s, _) {
        var c = U()
        try {
          return N(a)(r, i, s, _)
        } catch (m) {
          if ((H(c), m !== m + 0)) throw m
          z(1, 0)
        }
      }
      function Or(a, r, i, s) {
        var _ = U()
        try {
          return N(a)(r, i, s)
        } catch (c) {
          if ((H(_), c !== c + 0)) throw c
          return z(1, 0), 0n
        }
      }
      function ei(a, r) {
        var i = U()
        try {
          return N(a)(r)
        } catch (s) {
          if ((H(i), s !== s + 0)) throw s
          return z(1, 0), 0n
        }
      }
      function ti(a, r, i, s, _, c, m, f, y) {
        var k = U()
        try {
          return N(a)(r, i, s, _, c, m, f, y)
        } catch (I) {
          if ((H(k), I !== I + 0)) throw I
          z(1, 0)
        }
      }
      function ni(a) {
        var r = U()
        try {
          return N(a)()
        } catch (i) {
          if ((H(r), i !== i + 0)) throw i
          z(1, 0)
        }
      }
      function ai(a, r, i, s, _, c, m) {
        var f = U()
        try {
          return N(a)(r, i, s, _, c, m)
        } catch (y) {
          if ((H(f), y !== y + 0)) throw y
          z(1, 0)
        }
      }
      function ri(a, r, i, s, _) {
        var c = U()
        try {
          return N(a)(r, i, s, _)
        } catch (m) {
          if ((H(c), m !== m + 0)) throw m
          z(1, 0)
        }
      }
      function ii(a, r, i) {
        var s = U()
        try {
          return N(a)(r, i)
        } catch (_) {
          if ((H(s), _ !== _ + 0)) throw _
          z(1, 0)
        }
      }
      function si(a, r, i) {
        var s = U()
        try {
          N(a)(r, i)
        } catch (_) {
          if ((H(s), _ !== _ + 0)) throw _
          z(1, 0)
        }
      }
      function ui(a, r, i, s, _, c) {
        var m = U()
        try {
          return N(a)(r, i, s, _, c)
        } catch (f) {
          if ((H(m), f !== f + 0)) throw f
          z(1, 0)
        }
      }
      function _i(a, r, i) {
        var s = U()
        try {
          return N(a)(r, i)
        } catch (_) {
          if ((H(s), _ !== _ + 0)) throw _
          z(1, 0)
        }
      }
      function oi(a) {
        var r = U()
        try {
          N(a)()
        } catch (i) {
          if ((H(r), i !== i + 0)) throw i
          z(1, 0)
        }
      }
      function li(a, r, i, s, _, c) {
        var m = U()
        try {
          N(a)(r, i, s, _, c)
        } catch (f) {
          if ((H(m), f !== f + 0)) throw f
          z(1, 0)
        }
      }
      function ci(a, r, i, s, _, c, m, f) {
        var y = U()
        try {
          return N(a)(r, i, s, _, c, m, f)
        } catch (k) {
          if ((H(y), k !== k + 0)) throw k
          z(1, 0)
        }
      }
      function gi(a, r, i, s, _, c, m, f, y, k) {
        var I = U()
        try {
          return N(a)(r, i, s, _, c, m, f, y, k)
        } catch (G) {
          if ((H(I), G !== G + 0)) throw G
          z(1, 0)
        }
      }
      function mi(a, r, i, s) {
        var _ = U()
        try {
          N(a)(r, i, s)
        } catch (c) {
          if ((H(_), c !== c + 0)) throw c
          z(1, 0)
        }
      }
      function fi(a, r, i, s, _, c, m, f, y, k, I) {
        var G = U()
        try {
          N(a)(r, i, s, _, c, m, f, y, k, I)
        } catch (v) {
          if ((H(G), v !== v + 0)) throw v
          z(1, 0)
        }
      }
      function pi(a, r, i, s, _, c, m, f, y, k) {
        var I = U()
        try {
          N(a)(r, i, s, _, c, m, f, y, k)
        } catch (G) {
          if ((H(I), G !== G + 0)) throw G
          z(1, 0)
        }
      }
      function di(a, r, i, s, _, c, m) {
        var f = U()
        try {
          N(a)(r, i, s, _, c, m)
        } catch (y) {
          if ((H(f), y !== y + 0)) throw y
          z(1, 0)
        }
      }
      function hi(a, r, i, s, _, c, m, f) {
        var y = U()
        try {
          N(a)(r, i, s, _, c, m, f)
        } catch (k) {
          if ((H(y), k !== k + 0)) throw k
          z(1, 0)
        }
      }
      function yi(a, r, i, s, _, c, m, f, y, k, I, G) {
        var v = U()
        try {
          return N(a)(r, i, s, _, c, m, f, y, k, I, G)
        } catch (A) {
          if ((H(v), A !== A + 0)) throw A
          z(1, 0)
        }
      }
      function Si(a, r, i, s, _, c) {
        var m = U()
        try {
          return N(a)(r, i, s, _, c)
        } catch (f) {
          if ((H(m), f !== f + 0)) throw f
          z(1, 0)
        }
      }
      function ki(a, r, i, s, _, c, m, f, y) {
        var k = U()
        try {
          N(a)(r, i, s, _, c, m, f, y)
        } catch (I) {
          if ((H(k), I !== I + 0)) throw I
          z(1, 0)
        }
      }
      ;(e.addFunction = Yr),
        (e.setValue = $n),
        (e.getValue = qn),
        (e.UTF8ToString = Qe),
        (e.stringToUTF8 = xe),
        (e.lengthBytesUTF8 = Ee),
        (e.FS = u)
      var ut
      Xe = function a() {
        ut || wn(), ut || (Xe = a)
      }
      function wn() {
        if (Ae > 0 || (Nn(), Ae > 0)) return
        function a() {
          ut ||
            ((ut = !0),
            (e.calledRun = !0),
            !pt &&
              (xn(),
              o(e),
              e.onRuntimeInitialized && e.onRuntimeInitialized(),
              zn()))
        }
        e.setStatus
          ? (e.setStatus('Running...'),
            setTimeout(function () {
              setTimeout(function () {
                e.setStatus('')
              }, 1),
                a()
            }, 1))
          : a()
      }
      if (e.preInit)
        for (
          typeof e.preInit == 'function' && (e.preInit = [e.preInit]);
          e.preInit.length > 0;

        )
          e.preInit.pop()()
      return wn(), n.ready
    }
  })(),
  En = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Activate = 1)] = 'Activate'),
    (t[(t.Associate = 2)] = 'Associate'),
    (t[(t.Background = 3)] = 'Background'),
    (t[(t.Copy = 4)] = 'Copy'),
    (t[(t.Deactivate = 5)] = 'Deactivate'),
    (t[(t.Discrete = 6)] = 'Discrete'),
    (t[(t.Disassociate = 7)] = 'Disassociate'),
    (t[(t.Extract = 8)] = 'Extract'),
    (t[(t.Off = 9)] = 'Off'),
    (t[(t.On = 10)] = 'On'),
    (t[(t.Opaque = 11)] = 'Opaque'),
    (t[(t.Remove = 12)] = 'Remove'),
    (t[(t.Set = 13)] = 'Set'),
    (t[(t.Shape = 14)] = 'Shape'),
    (t[(t.Transparent = 15)] = 'Transparent'),
    t
  ))(En || {}),
  E = /* @__PURE__ */ (t => (
    (t[(t.Red = 0)] = 'Red'),
    (t[
      (t.Cyan = 0)
      /* Red */
    ] = 'Cyan'),
    (t[
      (t.Gray = 0)
      /* Red */
    ] = 'Gray'),
    (t[(t.Green = 1)] = 'Green'),
    (t[
      (t.Magenta = 1)
      /* Green */
    ] = 'Magenta'),
    (t[(t.Blue = 2)] = 'Blue'),
    (t[
      (t.Yellow = 2)
      /* Blue */
    ] = 'Yellow'),
    (t[(t.Black = 3)] = 'Black'),
    (t[(t.Alpha = 4)] = 'Alpha'),
    (t[(t.Index = 5)] = 'Index'),
    (t[(t.Meta0 = 10)] = 'Meta0'),
    (t[(t.Meta1 = 11)] = 'Meta1'),
    (t[(t.Meta2 = 12)] = 'Meta2'),
    (t[(t.Meta3 = 13)] = 'Meta3'),
    (t[(t.Meta4 = 14)] = 'Meta4'),
    (t[(t.Meta5 = 15)] = 'Meta5'),
    (t[(t.Meta6 = 16)] = 'Meta6'),
    (t[(t.Meta7 = 17)] = 'Meta7'),
    (t[(t.Meta8 = 18)] = 'Meta8'),
    (t[(t.Meta9 = 19)] = 'Meta9'),
    (t[(t.Meta10 = 20)] = 'Meta10'),
    (t[(t.Meta11 = 21)] = 'Meta11'),
    (t[(t.Meta12 = 22)] = 'Meta12'),
    (t[(t.Meta13 = 23)] = 'Meta13'),
    (t[(t.Meta14 = 24)] = 'Meta14'),
    (t[(t.Meta15 = 25)] = 'Meta15'),
    (t[(t.Meta16 = 26)] = 'Meta16'),
    (t[(t.Meta17 = 27)] = 'Meta17'),
    (t[(t.Meta18 = 28)] = 'Meta18'),
    (t[(t.Meta19 = 29)] = 'Meta19'),
    (t[(t.Meta20 = 30)] = 'Meta20'),
    (t[(t.Meta21 = 31)] = 'Meta21'),
    (t[(t.Meta22 = 32)] = 'Meta22'),
    (t[(t.Meta23 = 33)] = 'Meta23'),
    (t[(t.Meta24 = 34)] = 'Meta24'),
    (t[(t.Meta25 = 35)] = 'Meta25'),
    (t[(t.Meta26 = 36)] = 'Meta26'),
    (t[(t.Meta27 = 37)] = 'Meta27'),
    (t[(t.Meta28 = 38)] = 'Meta28'),
    (t[(t.Meta29 = 39)] = 'Meta29'),
    (t[(t.Meta30 = 40)] = 'Meta30'),
    (t[(t.Meta31 = 41)] = 'Meta31'),
    (t[(t.Meta32 = 42)] = 'Meta32'),
    (t[(t.Meta33 = 43)] = 'Meta33'),
    (t[(t.Meta34 = 44)] = 'Meta34'),
    (t[(t.Meta35 = 45)] = 'Meta35'),
    (t[(t.Meta36 = 46)] = 'Meta36'),
    (t[(t.Meta37 = 47)] = 'Meta37'),
    (t[(t.Meta38 = 48)] = 'Meta38'),
    (t[(t.Meta39 = 49)] = 'Meta39'),
    (t[(t.Meta40 = 50)] = 'Meta40'),
    (t[(t.Meta41 = 51)] = 'Meta41'),
    (t[(t.Meta42 = 52)] = 'Meta42'),
    (t[(t.Meta43 = 53)] = 'Meta43'),
    (t[(t.Meta44 = 54)] = 'Meta44'),
    (t[(t.Meta45 = 55)] = 'Meta45'),
    (t[(t.Meta46 = 56)] = 'Meta46'),
    (t[(t.Meta47 = 57)] = 'Meta47'),
    (t[(t.Meta48 = 58)] = 'Meta48'),
    (t[(t.Meta49 = 59)] = 'Meta49'),
    (t[(t.Meta50 = 60)] = 'Meta50'),
    (t[(t.Meta51 = 61)] = 'Meta51'),
    (t[(t.Meta52 = 62)] = 'Meta52'),
    (t[(t.Composite = 64)] = 'Composite'),
    t
  ))(E || {}),
  K = (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Red = 1)] = 'Red'),
    (t[(t.Gray = 1)] = 'Gray'),
    (t[(t.Cyan = 1)] = 'Cyan'),
    (t[(t.Green = 2)] = 'Green'),
    (t[(t.Magenta = 2)] = 'Magenta'),
    (t[(t.Blue = 4)] = 'Blue'),
    (t[(t.Yellow = 4)] = 'Yellow'),
    (t[(t.Black = 8)] = 'Black'),
    (t[(t.Alpha = 16)] = 'Alpha'),
    (t[(t.Opacity = 16)] = 'Opacity'),
    (t[(t.Index = 32)] = 'Index'),
    (t[(t.Composite = 31)] = 'Composite'),
    (t[(t.TrueAlpha = 256)] = 'TrueAlpha'),
    (t[(t.RGB = 7)] = 'RGB'),
    (t[(t.CMYK = 15)] = 'CMYK'),
    (t[(t.CMYKA = 31)] = 'CMYKA'),
    (t[(t.Meta0 = 1 << E.Meta0)] = 'Meta0'),
    (t[(t.Meta1 = 1 << E.Meta1)] = 'Meta1'),
    (t[(t.Meta2 = 1 << E.Meta2)] = 'Meta2'),
    (t[(t.Meta3 = 1 << E.Meta3)] = 'Meta3'),
    (t[(t.Meta4 = 1 << E.Meta4)] = 'Meta4'),
    (t[(t.Meta5 = 1 << E.Meta5)] = 'Meta5'),
    (t[(t.Meta6 = 1 << E.Meta6)] = 'Meta6'),
    (t[(t.Meta7 = 1 << E.Meta7)] = 'Meta7'),
    (t[(t.Meta8 = 1 << E.Meta8)] = 'Meta8'),
    (t[(t.Meta9 = 1 << E.Meta9)] = 'Meta9'),
    (t[(t.Meta10 = 1 << E.Meta10)] = 'Meta10'),
    (t[(t.Meta11 = 1 << E.Meta11)] = 'Meta11'),
    (t[(t.Meta12 = 1 << E.Meta12)] = 'Meta12'),
    (t[(t.Meta13 = 1 << E.Meta13)] = 'Meta13'),
    (t[(t.Meta14 = 1 << E.Meta14)] = 'Meta14'),
    (t[(t.Meta15 = 1 << E.Meta15)] = 'Meta15'),
    (t[(t.Meta16 = 1 << E.Meta16)] = 'Meta16'),
    (t[(t.Meta17 = 1 << E.Meta17)] = 'Meta17'),
    (t[(t.Meta18 = 1 << E.Meta18)] = 'Meta18'),
    (t[(t.Meta19 = 1 << E.Meta19)] = 'Meta19'),
    (t[(t.Meta20 = 1 << E.Meta20)] = 'Meta20'),
    (t[(t.Meta21 = 1 << E.Meta21)] = 'Meta21'),
    (t[(t.Meta22 = 1 << E.Meta22)] = 'Meta22'),
    (t[(t.Meta23 = 1 << E.Meta23)] = 'Meta23'),
    (t[(t.Meta24 = 1 << E.Meta24)] = 'Meta24'),
    (t[(t.Meta25 = 1 << E.Meta25)] = 'Meta25'),
    (t[(t.Meta26 = 1 << E.Meta26)] = 'Meta26'),
    (t[(t.Meta27 = 1 << E.Meta27)] = 'Meta27'),
    (t[(t.Meta28 = 1 << E.Meta28)] = 'Meta28'),
    (t[(t.Meta29 = 1 << E.Meta29)] = 'Meta29'),
    (t[(t.Meta30 = 1 << E.Meta30)] = 'Meta30'),
    (t[(t.Meta31 = 1 << E.Meta31)] = 'Meta31'),
    (t[(t.Meta32 = 1 << E.Meta32)] = 'Meta32'),
    (t[(t.Meta33 = 1 << E.Meta33)] = 'Meta33'),
    (t[(t.Meta34 = 1 << E.Meta34)] = 'Meta34'),
    (t[(t.Meta35 = 1 << E.Meta35)] = 'Meta35'),
    (t[(t.Meta36 = 1 << E.Meta36)] = 'Meta36'),
    (t[(t.Meta37 = 1 << E.Meta37)] = 'Meta37'),
    (t[(t.Meta38 = 1 << E.Meta38)] = 'Meta38'),
    (t[(t.Meta39 = 1 << E.Meta39)] = 'Meta39'),
    (t[(t.Meta40 = 1 << E.Meta40)] = 'Meta40'),
    (t[(t.Meta41 = 1 << E.Meta41)] = 'Meta41'),
    (t[(t.Meta42 = 1 << E.Meta42)] = 'Meta42'),
    (t[(t.Meta43 = 1 << E.Meta43)] = 'Meta43'),
    (t[(t.Meta44 = 1 << E.Meta44)] = 'Meta44'),
    (t[(t.Meta45 = 1 << E.Meta45)] = 'Meta45'),
    (t[(t.Meta46 = 1 << E.Meta46)] = 'Meta46'),
    (t[(t.Meta47 = 1 << E.Meta47)] = 'Meta47'),
    (t[(t.Meta48 = 1 << E.Meta48)] = 'Meta48'),
    (t[(t.Meta49 = 1 << E.Meta49)] = 'Meta49'),
    (t[(t.Meta50 = 1 << E.Meta50)] = 'Meta50'),
    (t[(t.Meta51 = 1 << E.Meta51)] = 'Meta51'),
    (t[(t.Meta52 = 1 << E.Meta52)] = 'Meta52'),
    (t[(t.All = 134217727)] = 'All'),
    t
  ))(K || {})
class vi {
  constructor(n, e, o, g) {
    ;(this.red = n), (this.green = e), (this.blue = o), (this.white = g)
  }
  /**
   * Gets the chromaticity red primary point.
   */
  red
  /**
   * Gets the chromaticity green primary point.
   */
  green
  /**
   * Gets the chromaticity blue primary point.
   */
  blue
  /**
   * Gets the chromaticity white primary point.
   */
  white
}
var Et = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.CMY = 1)] = 'CMY'),
    (t[(t.CMYK = 2)] = 'CMYK'),
    (t[(t.Gray = 3)] = 'Gray'),
    (t[(t.HCL = 4)] = 'HCL'),
    (t[(t.HCLp = 5)] = 'HCLp'),
    (t[(t.HSB = 6)] = 'HSB'),
    (t[(t.HSI = 7)] = 'HSI'),
    (t[(t.HSL = 8)] = 'HSL'),
    (t[(t.HSV = 9)] = 'HSV'),
    (t[(t.HWB = 10)] = 'HWB'),
    (t[(t.Lab = 11)] = 'Lab'),
    (t[(t.LCH = 12)] = 'LCH'),
    (t[(t.LCHab = 13)] = 'LCHab'),
    (t[(t.LCHuv = 14)] = 'LCHuv'),
    (t[(t.Log = 15)] = 'Log'),
    (t[(t.LMS = 16)] = 'LMS'),
    (t[(t.Luv = 17)] = 'Luv'),
    (t[(t.OHTA = 18)] = 'OHTA'),
    (t[(t.Rec601YCbCr = 19)] = 'Rec601YCbCr'),
    (t[(t.Rec709YCbCr = 20)] = 'Rec709YCbCr'),
    (t[(t.RGB = 21)] = 'RGB'),
    (t[(t.scRGB = 22)] = 'scRGB'),
    (t[(t.sRGB = 23)] = 'sRGB'),
    (t[(t.Transparent = 24)] = 'Transparent'),
    (t[(t.XyY = 25)] = 'XyY'),
    (t[(t.XYZ = 26)] = 'XYZ'),
    (t[(t.YCbCr = 27)] = 'YCbCr'),
    (t[(t.YCC = 28)] = 'YCC'),
    (t[(t.YDbDr = 29)] = 'YDbDr'),
    (t[(t.YIQ = 30)] = 'YIQ'),
    (t[(t.YPbPr = 31)] = 'YPbPr'),
    (t[(t.YUV = 32)] = 'YUV'),
    (t[(t.LinearGray = 33)] = 'LinearGray'),
    t
  ))(Et || {}),
  _t = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Alpha = 1)] = 'Alpha'),
    (t[(t.Atop = 2)] = 'Atop'),
    (t[(t.Blend = 3)] = 'Blend'),
    (t[(t.Blur = 4)] = 'Blur'),
    (t[(t.Bumpmap = 5)] = 'Bumpmap'),
    (t[(t.ChangeMask = 6)] = 'ChangeMask'),
    (t[(t.Clear = 7)] = 'Clear'),
    (t[(t.ColorBurn = 8)] = 'ColorBurn'),
    (t[(t.ColorDodge = 9)] = 'ColorDodge'),
    (t[(t.Colorize = 10)] = 'Colorize'),
    (t[(t.CopyBlack = 11)] = 'CopyBlack'),
    (t[(t.CopyBlue = 12)] = 'CopyBlue'),
    (t[(t.Copy = 13)] = 'Copy'),
    (t[(t.CopyCyan = 14)] = 'CopyCyan'),
    (t[(t.CopyGreen = 15)] = 'CopyGreen'),
    (t[(t.CopyMagenta = 16)] = 'CopyMagenta'),
    (t[(t.CopyAlpha = 17)] = 'CopyAlpha'),
    (t[(t.CopyRed = 18)] = 'CopyRed'),
    (t[(t.CopyYellow = 19)] = 'CopyYellow'),
    (t[(t.Darken = 20)] = 'Darken'),
    (t[(t.DarkenIntensity = 21)] = 'DarkenIntensity'),
    (t[(t.Difference = 22)] = 'Difference'),
    (t[(t.Displace = 23)] = 'Displace'),
    (t[(t.Dissolve = 24)] = 'Dissolve'),
    (t[(t.Distort = 25)] = 'Distort'),
    (t[(t.DivideDst = 26)] = 'DivideDst'),
    (t[(t.DivideSrc = 27)] = 'DivideSrc'),
    (t[(t.DstAtop = 28)] = 'DstAtop'),
    (t[(t.Dst = 29)] = 'Dst'),
    (t[(t.DstIn = 30)] = 'DstIn'),
    (t[(t.DstOut = 31)] = 'DstOut'),
    (t[(t.DstOver = 32)] = 'DstOver'),
    (t[(t.Exclusion = 33)] = 'Exclusion'),
    (t[(t.HardLight = 34)] = 'HardLight'),
    (t[(t.HardMix = 35)] = 'HardMix'),
    (t[(t.Hue = 36)] = 'Hue'),
    (t[(t.In = 37)] = 'In'),
    (t[(t.Intensity = 38)] = 'Intensity'),
    (t[(t.Lighten = 39)] = 'Lighten'),
    (t[(t.LightenIntensity = 40)] = 'LightenIntensity'),
    (t[(t.LinearBurn = 41)] = 'LinearBurn'),
    (t[(t.LinearDodge = 42)] = 'LinearDodge'),
    (t[(t.LinearLight = 43)] = 'LinearLight'),
    (t[(t.Luminize = 44)] = 'Luminize'),
    (t[(t.Mathematics = 45)] = 'Mathematics'),
    (t[(t.MinusDst = 46)] = 'MinusDst'),
    (t[(t.MinusSrc = 47)] = 'MinusSrc'),
    (t[(t.Modulate = 48)] = 'Modulate'),
    (t[(t.ModulusAdd = 49)] = 'ModulusAdd'),
    (t[(t.ModulusSubtract = 50)] = 'ModulusSubtract'),
    (t[(t.Multiply = 51)] = 'Multiply'),
    (t[(t.No = 52)] = 'No'),
    (t[(t.Out = 53)] = 'Out'),
    (t[(t.Over = 54)] = 'Over'),
    (t[(t.Overlay = 55)] = 'Overlay'),
    (t[(t.PegtopLight = 56)] = 'PegtopLight'),
    (t[(t.PinLight = 57)] = 'PinLight'),
    (t[(t.Plus = 58)] = 'Plus'),
    (t[(t.Replace = 59)] = 'Replace'),
    (t[(t.Saturate = 60)] = 'Saturate'),
    (t[(t.Screen = 61)] = 'Screen'),
    (t[(t.SoftLight = 62)] = 'SoftLight'),
    (t[(t.SrcAtop = 63)] = 'SrcAtop'),
    (t[(t.Src = 64)] = 'Src'),
    (t[(t.SrcIn = 65)] = 'SrcIn'),
    (t[(t.SrcOut = 66)] = 'SrcOut'),
    (t[(t.SrcOver = 67)] = 'SrcOver'),
    (t[(t.Threshold = 68)] = 'Threshold'),
    (t[(t.VividLight = 69)] = 'VividLight'),
    (t[(t.Xor = 70)] = 'Xor'),
    (t[(t.Stereo = 71)] = 'Stereo'),
    (t[(t.Freeze = 72)] = 'Freeze'),
    (t[(t.Interpolate = 73)] = 'Interpolate'),
    (t[(t.Negate = 74)] = 'Negate'),
    (t[(t.Reflect = 75)] = 'Reflect'),
    (t[(t.SoftBurn = 76)] = 'SoftBurn'),
    (t[(t.SoftDodge = 77)] = 'SoftDodge'),
    (t[(t.Stamp = 78)] = 'Stamp'),
    (t[(t.RMSE = 79)] = 'RMSE'),
    (t[(t.SaliencyBlend = 80)] = 'SaliencyBlend'),
    (t[(t.SeamlessBlend = 81)] = 'SeamlessBlend'),
    t
  ))(_t || {}),
  gt = /* @__PURE__ */ (t => (
    (t[(t.Warning = 300)] = 'Warning'),
    (t[(t.ResourceLimitWarning = 300)] = 'ResourceLimitWarning'),
    (t[(t.TypeWarning = 305)] = 'TypeWarning'),
    (t[(t.OptionWarning = 310)] = 'OptionWarning'),
    (t[(t.DelegateWarning = 315)] = 'DelegateWarning'),
    (t[(t.MissingDelegateWarning = 320)] = 'MissingDelegateWarning'),
    (t[(t.CorruptImageWarning = 325)] = 'CorruptImageWarning'),
    (t[(t.FileOpenWarning = 330)] = 'FileOpenWarning'),
    (t[(t.BlobWarning = 335)] = 'BlobWarning'),
    (t[(t.StreamWarning = 340)] = 'StreamWarning'),
    (t[(t.CacheWarning = 345)] = 'CacheWarning'),
    (t[(t.CoderWarning = 350)] = 'CoderWarning'),
    (t[(t.FilterWarning = 352)] = 'FilterWarning'),
    (t[(t.ModuleWarning = 355)] = 'ModuleWarning'),
    (t[(t.DrawWarning = 360)] = 'DrawWarning'),
    (t[(t.ImageWarning = 365)] = 'ImageWarning'),
    (t[(t.WandWarning = 370)] = 'WandWarning'),
    (t[(t.RandomWarning = 375)] = 'RandomWarning'),
    (t[(t.XServerWarning = 380)] = 'XServerWarning'),
    (t[(t.MonitorWarning = 385)] = 'MonitorWarning'),
    (t[(t.RegistryWarning = 390)] = 'RegistryWarning'),
    (t[(t.ConfigureWarning = 395)] = 'ConfigureWarning'),
    (t[(t.PolicyWarning = 399)] = 'PolicyWarning'),
    (t[(t.Error = 400)] = 'Error'),
    (t[(t.ResourceLimitError = 400)] = 'ResourceLimitError'),
    (t[(t.TypeError = 405)] = 'TypeError'),
    (t[(t.OptionError = 410)] = 'OptionError'),
    (t[(t.DelegateError = 415)] = 'DelegateError'),
    (t[(t.MissingDelegateError = 420)] = 'MissingDelegateError'),
    (t[(t.CorruptImageError = 425)] = 'CorruptImageError'),
    (t[(t.FileOpenError = 430)] = 'FileOpenError'),
    (t[(t.BlobError = 435)] = 'BlobError'),
    (t[(t.StreamError = 440)] = 'StreamError'),
    (t[(t.CacheError = 445)] = 'CacheError'),
    (t[(t.CoderError = 450)] = 'CoderError'),
    (t[(t.FilterError = 452)] = 'FilterError'),
    (t[(t.ModuleError = 455)] = 'ModuleError'),
    (t[(t.DrawError = 460)] = 'DrawError'),
    (t[(t.ImageError = 465)] = 'ImageError'),
    (t[(t.WandError = 470)] = 'WandError'),
    (t[(t.RandomError = 475)] = 'RandomError'),
    (t[(t.XServerError = 480)] = 'XServerError'),
    (t[(t.MonitorError = 485)] = 'MonitorError'),
    (t[(t.RegistryError = 490)] = 'RegistryError'),
    (t[(t.ConfigureError = 495)] = 'ConfigureError'),
    (t[(t.PolicyError = 499)] = 'PolicyError'),
    t
  ))(gt || {})
class q extends Error {
  _relatedErrors = []
  /** @internal */
  constructor(n, e = gt.Error) {
    super(n), (this.severity = e)
  }
  /**
   * Gets the severity of an exception.
   */
  severity
  /**
   * Gets the exceptions that are related to this exception.
   */
  get relatedErrors() {
    return this._relatedErrors
  }
  /** @internal */
  _setRelatedErrors(n) {
    this._relatedErrors = n
  }
}
class Te {
  /**
   * Gets the quantum depth.
   */
  static get depth() {
    return l._api._Quantum_Depth_Get()
  }
  /**
   * Gets the maximum value of the quantum.
   */
  static get max() {
    return l._api._Quantum_Max_Get()
  }
}
function ue(t) {
  return t === 0 ? null : l._api.UTF8ToString(t)
}
function Dt(t, n, e) {
  const o = t.lengthBytesUTF8(n) + 1,
    g = t._malloc(o)
  try {
    return t.stringToUTF8(n, g, o), e(g)
  } finally {
    t._free(g)
  }
}
function L(t, n) {
  return Dt(l._api, t, n)
}
class h {
  constructor(n, e, o, g, p) {
    if (n !== void 0)
      if (typeof n == 'string') {
        let d = 0
        try {
          ;(d = l._api._MagickColor_Create()),
            L(n, S => {
              if (l._api._MagickColor_Initialize(d, S) === 0)
                throw new q('invalid color specified')
              this.initialize(d)
            })
        } finally {
          l._api._free(d)
        }
      } else
        (this.r = n),
          (this.g = e ?? 0),
          (this.b = o ?? 0),
          p === void 0
            ? (this.a = g ?? Te.max)
            : ((this.k = g ?? 0), (this.a = p), (this.isCmyk = !0))
  }
  r = 0
  g = 0
  b = 0
  a = 0
  k = 0
  isCmyk = !1
  /** @internal */
  static _create(n) {
    const e = new h()
    return e.initialize(n), e
  }
  toShortString() {
    return this.a !== Te.max
      ? this.toString()
      : this.isCmyk
      ? `cmyka(${this.r},${this.g},${this.b},${this.k})`
      : `#${this.toHex(this.r)}${this.toHex(this.g)}${this.toHex(
          this.b,
        )}`
  }
  toString() {
    return this.isCmyk
      ? `cmyka(${this.r},${this.g},${this.b},${this.k},${(
          this.a / Te.max
        ).toFixed(4)})`
      : `#${this.toHex(this.r)}${this.toHex(this.g)}${this.toHex(
          this.b,
        )}${this.toHex(this.a)}`
  }
  /** @internal */
  _use(n) {
    let e = 0
    try {
      ;(e = l._api._MagickColor_Create()),
        l._api._MagickColor_Red_Set(e, this.r),
        l._api._MagickColor_Green_Set(e, this.g),
        l._api._MagickColor_Blue_Set(e, this.b),
        l._api._MagickColor_Alpha_Set(e, this.a),
        l._api._MagickColor_IsCMYK_Set(e, this.isCmyk ? 1 : 0),
        n(e)
    } finally {
      l._api._free(e)
    }
  }
  initialize(n) {
    ;(this.r = l._api._MagickColor_Red_Get(n)),
      (this.g = l._api._MagickColor_Green_Get(n)),
      (this.b = l._api._MagickColor_Blue_Get(n)),
      (this.a = l._api._MagickColor_Alpha_Get(n)),
      (this.isCmyk = l._api._MagickColor_IsCMYK_Get(n) === 1)
  }
  toHex(n) {
    return n.toString(16).padStart(2, '0')
  }
}
var de = /* @__PURE__ */ (t => (
  (t[(t.NoValue = 0)] = 'NoValue'),
  (t[(t.PercentValue = 4096)] = 'PercentValue'),
  (t[(t.IgnoreAspectRatio = 8192)] = 'IgnoreAspectRatio'),
  (t[(t.Less = 16384)] = 'Less'),
  (t[(t.Greater = 32768)] = 'Greater'),
  (t[(t.FillArea = 65536)] = 'FillArea'),
  (t[(t.LimitPixels = 131072)] = 'LimitPixels'),
  (t[(t.AspectRatio = 1048576)] = 'AspectRatio'),
  t
))(de || {})
class se {
  _width = 0
  _height = 0
  _x = 0
  _y = 0
  _aspectRatio = !1
  _fillArea = !1
  _greater = !1
  _isPercentage = !1
  _ignoreAspectRatio = !1
  _less = !1
  _limitPixels = !1
  constructor(n, e, o, g) {
    if (typeof n == 'number') {
      if (
        (o !== void 0 && g !== void 0
          ? ((this._width = o),
            (this._height = g),
            (this._x = n),
            (this._y = e ?? 0))
          : ((this._width = n),
            (this._height = e ?? this._width),
            (this._x = 0),
            (this._y = 0)),
        this._width < 0)
      )
        throw new q('negative width is not allowed')
      if (this._height < 0)
        throw new q('negative height is not allowed')
    } else {
      const p = l._api._MagickGeometry_Create()
      try {
        L(n, d => {
          const S = l._api._MagickGeometry_Initialize(p, d)
          if (S === de.NoValue)
            throw new q('invalid geometry specified')
          this.hasFlag(S, de.AspectRatio)
            ? this.initializeFromAspectRation(p, n)
            : this.initialize(p, S)
        })
      } finally {
        l._api._MagickGeometry_Dispose(p)
      }
    }
  }
  get aspectRatio() {
    return this._aspectRatio
  }
  get fillArea() {
    return this._fillArea
  }
  set fillArea(n) {
    this._fillArea = n
  }
  get greater() {
    return this._greater
  }
  set greater(n) {
    this._greater = n
  }
  get height() {
    return this._height
  }
  set height(n) {
    this._height = n
  }
  get ignoreAspectRatio() {
    return this._ignoreAspectRatio
  }
  set ignoreAspectRatio(n) {
    this._ignoreAspectRatio = n
  }
  get isPercentage() {
    return this._isPercentage
  }
  set isPercentage(n) {
    this._isPercentage = n
  }
  get less() {
    return this._less
  }
  set less(n) {
    this._less = n
  }
  get limitPixels() {
    return this._limitPixels
  }
  set limitPixels(n) {
    this._limitPixels = n
  }
  get width() {
    return this._width
  }
  set width(n) {
    this._width = n
  }
  get x() {
    return this._x
  }
  set x(n) {
    this._x = n
  }
  get y() {
    return this._y
  }
  set y(n) {
    this._y = n
  }
  toString() {
    if (this._aspectRatio) return this._width + ':' + this._height
    let n = ''
    return (
      this._width > 0 && (n += this._width.toString()),
      this._height > 0
        ? (n += 'x' + this._height.toString())
        : (n += 'x'),
      (this._x != 0 || this._y != 0) &&
        (this._x >= 0 && (n += '+'),
        (n += this._x),
        this.y >= 0 && (n += '+'),
        (n += this.y)),
      this._fillArea && (n += '^'),
      this._greater && (n += '>'),
      this._isPercentage && (n += '%'),
      this._ignoreAspectRatio && (n += '!'),
      this._less && (n += '<'),
      this._limitPixels && (n += '@'),
      n
    )
  }
  /** @internal */
  static _fromRectangle(n) {
    if (n === 0) throw new q('unable to allocate memory')
    try {
      const e = l._api._MagickRectangle_Width_Get(n),
        o = l._api._MagickRectangle_Height_Get(n),
        g = l._api._MagickRectangle_X_Get(n),
        p = l._api._MagickRectangle_Y_Get(n)
      return new se(g, p, e, o)
    } finally {
      l._api._MagickRectangle_Dispose(n)
    }
  }
  /** @internal */
  _toRectangle(n) {
    const e = l._api._MagickRectangle_Create()
    if (e === 0) throw new q('unable to allocate memory')
    try {
      l._api._MagickRectangle_Width_Set(e, this._width),
        l._api._MagickRectangle_Height_Set(e, this._height),
        l._api._MagickRectangle_X_Set(e, this._x),
        l._api._MagickRectangle_Y_Set(e, this._y),
        n(e)
    } finally {
      l._api._MagickRectangle_Dispose(e)
    }
  }
  initialize(n, e) {
    ;(this._width = l._api._MagickGeometry_Width_Get(n)),
      (this._height = l._api._MagickGeometry_Height_Get(n)),
      (this._x = l._api._MagickGeometry_X_Get(n)),
      (this._y = l._api._MagickGeometry_Y_Get(n)),
      (this._ignoreAspectRatio = this.hasFlag(e, de.IgnoreAspectRatio)),
      (this._isPercentage = this.hasFlag(e, de.PercentValue)),
      (this._fillArea = this.hasFlag(e, de.FillArea)),
      (this._greater = this.hasFlag(e, de.Greater)),
      (this._less = this.hasFlag(e, de.Less)),
      (this._limitPixels = this.hasFlag(e, de.LimitPixels))
  }
  initializeFromAspectRation(n, e) {
    this._aspectRatio = !0
    const o = e.split(':')
    ;(this._width = this.parseNumber(o[0])),
      (this._height = this.parseNumber(o[1])),
      (this._x = l._api._MagickGeometry_X_Get(n)),
      (this._y = l._api._MagickGeometry_Y_Get(n))
  }
  parseNumber(n) {
    let e = 0
    for (; e < n.length && !this.isNumber(n[e]); ) e++
    const o = e
    for (; e < n.length && this.isNumber(n[e]); ) e++
    return parseInt(n.substr(o, e - o))
  }
  isNumber(n) {
    return n >= '0' && n <= '9'
  }
  hasFlag(n, e) {
    return (n & e) === e
  }
}
class he {
  constructor(n, e) {
    ;(this.x = n), (this.y = e ?? n)
  }
  /**
   * Gets the x-coordinate of this point.
   */
  x
  /**
   * Gets the y-coordinate of this point.
   */
  y
  /** @internal */
  static _create(n) {
    return n === 0
      ? new he(0, 0)
      : new he(l._api._PointInfo_X_Get(n), l._api._PointInfo_Y_Get(n))
  }
}
class Rt {
  constructor(n) {
    ;(this.area = l._api._ConnectedComponent_GetArea(n)),
      (this.centroid = he._create(
        l._api._ConnectedComponent_GetCentroid(n),
      )),
      (this.color = h._create(l._api._ConnectedComponent_GetColor(n))),
      (this.height = l._api._ConnectedComponent_GetHeight(n)),
      (this.id = l._api._ConnectedComponent_GetId(n)),
      (this.width = l._api._ConnectedComponent_GetWidth(n)),
      (this.x = l._api._ConnectedComponent_GetX(n)),
      (this.y = l._api._ConnectedComponent_GetY(n))
  }
  /**
   * The pixel count of the area.
   */
  area
  /**
   * The centroid of the area.
   */
  centroid
  /**
   * The color of the area.
   */
  color
  /**
   * The height of the area.
   */
  height
  /**
   * The id of the area.
   */
  id
  /**
   * The width of the area.
   */
  width
  /**
   * The X offset from origin.
   */
  x
  /**
   * The Y offset from origin.
   */
  y
  /** @internal */
  static _create(n, e) {
    const o = []
    if (n === 0) return o
    for (let g = 0; g < e; g++) {
      const p = l._api._ConnectedComponent_GetInstance(n, g)
      p === 0 ||
        l._api._ConnectedComponent_GetArea(p) < Number.EPSILON ||
        o.push(new Rt(p))
    }
    return o
  }
  /**
   * Returns the geometry of the area of the connected component.
   */
  toGeometry() {
    return new se(this.x, this.y, this.width, this.height)
  }
}
class Di {
  /**
   * The threshold that merges any object not within the min and max angle
   * threshold.
   **/
  angleThreshold
  /**
   * The threshold that eliminates small objects by merging them with their
   * larger neighbors.
   */
  areaThreshold
  /**
   * The threshold that merges any object not within the min and max
   * circularity threshold.
   */
  circularityThreshold
  /**
   * The number of neighbors to visit (4 or 8).
   */
  connectivity
  /**
   * The threshold that merges any object not within the min and max diameter
   * threshold.
   */
  diameterThreshold
  /**
   * The threshold that merges any object not within the min and max
   * eccentricity threshold.
   */
  eccentricityThreshold
  /**
   * The threshold that merges any object not within the min and max ellipse
   * major threshold.
   */
  majorAxisThreshold
  /**
   * Whether the object color in the component labeled image will be replaced
   * with the mean color from the source image (defaults to grayscale).
   */
  meanColor
  /**
   * The threshold that merges any object not within the min and max ellipse
   * minor threshold.
   */
  minorAxisThreshold
  /**
   * The threshold that merges any object not within the min and max perimeter
   * threshold.
   */
  perimeterThreshold
  constructor(n) {
    this.connectivity = n
  }
  /** @internal */
  _removeArtifacts(n) {
    this.angleThreshold !== void 0 &&
      n.removeArtifact('connected-components:angle-threshold'),
      this.areaThreshold !== void 0 &&
        n.removeArtifact('connected-components:area-threshold'),
      this.circularityThreshold !== void 0 &&
        n.removeArtifact('connected-components:circularity-threshold'),
      this.diameterThreshold !== void 0 &&
        n.removeArtifact('connected-components:diameter-threshold'),
      this.eccentricityThreshold !== void 0 &&
        n.removeArtifact('connected-components:eccentricity-threshold'),
      this.majorAxisThreshold !== void 0 &&
        n.removeArtifact('connected-components:major-axis-threshold'),
      this.meanColor !== void 0 &&
        n.removeArtifact('connected-components:mean-color'),
      this.minorAxisThreshold !== void 0 &&
        n.removeArtifact('connected-components:minor-axis-threshold'),
      this.perimeterThreshold !== void 0 &&
        n.removeArtifact('connected-components:perimeter-threshold')
  }
  /** @internal */
  _setArtifacts(n) {
    this.angleThreshold !== void 0 &&
      n.setArtifact(
        'connected-components:angle-threshold',
        this.angleThreshold.toString(),
      ),
      this.areaThreshold !== void 0 &&
        n.setArtifact(
          'connected-components:area-threshold',
          this.areaThreshold.toString(),
        ),
      this.circularityThreshold !== void 0 &&
        n.setArtifact(
          'connected-components:circularity-threshold',
          this.circularityThreshold.toString(),
        ),
      this.diameterThreshold !== void 0 &&
        n.setArtifact(
          'connected-components:diameter-threshold',
          this.diameterThreshold.toString(),
        ),
      this.eccentricityThreshold !== void 0 &&
        n.setArtifact(
          'connected-components:eccentricity-threshold',
          this.eccentricityThreshold.toString(),
        ),
      this.majorAxisThreshold !== void 0 &&
        n.setArtifact(
          'connected-components:major-axis-threshold',
          this.majorAxisThreshold.toString(),
        ),
      this.meanColor !== void 0 &&
        n.setArtifact(
          'connected-components:mean-color',
          this.meanColor.toString(),
        ),
      this.minorAxisThreshold !== void 0 &&
        n.setArtifact(
          'connected-components:minor-axis-threshold',
          this.minorAxisThreshold.toString(),
        ),
      this.perimeterThreshold !== void 0 &&
        n.setArtifact(
          'connected-components:perimeter-threshold',
          this.perimeterThreshold.toString(),
        )
  }
}
var Rn = /* @__PURE__ */ (t => (
  (t[(t.Undefined = 0)] = 'Undefined'),
  (t[(t.PixelsPerInch = 1)] = 'PixelsPerInch'),
  (t[(t.PixelsPerCentimeter = 2)] = 'PixelsPerCentimeter'),
  t
))(Rn || {})
class Gi {
  constructor(n, e, o) {
    e === void 0
      ? ((this.x = n), (this.y = n), (this.units = Rn.PixelsPerInch))
      : o !== void 0
      ? ((this.x = n), (this.y = e), (this.units = o))
      : ((this.x = n), (this.y = n), (this.units = e))
  }
  /**
   * Gets the x resolution.
   */
  x
  /**
   * Gets the y resolution.
   */
  y
  /**
   * Gets the units.
   */
  units
}
class ie {
  static _disposeAfterExecution(n, e) {
    try {
      const o = e(n)
      return o instanceof Promise
        ? Promise.resolve(o).then(
            g => (n.dispose(), ie.checkResult(n, g), g),
          )
        : (n.dispose(), ie.checkResult(n, o), o)
    } catch (o) {
      throw (n.dispose(), o)
    }
  }
  static checkResult(n, e) {
    if (e === n)
      throw new q(
        'The result of the function cannot be the instance that has been disposed.',
      )
    return e
  }
}
class bn {
  _pointer
  _bytes
  _func
  constructor(n, e, o) {
    ;(this._pointer = n),
      (this._func = o),
      (this._bytes = l._api.HEAPU8.subarray(n, n + e))
  }
  func(n) {
    return n._bytes === void 0
      ? n._func(new Uint8Array())
      : n._func(n._bytes)
  }
  dispose() {
    this._pointer = l._api._MagickMemory_Relinquish(this._pointer)
  }
}
class Ce {
  disposeMethod
  instance
  /** @internal */
  constructor(n, e) {
    ;(this.instance = n), (this.disposeMethod = e)
  }
  /** @internal */
  get _instance() {
    if (this.instance > 0) return this.instance
    throw (
      (this.instance === -1 && this._instanceNotInitialized(),
      new q('instance is disposed'))
    )
  }
  /** @internal */
  set _instance(n) {
    this.disposeInstance(this.instance), (this.instance = n)
  }
  dispose() {
    this.instance = this.disposeInstance(this.instance)
  }
  /** @internal */
  _setInstance(n, e) {
    e.check(
      () => {
        this.dispose(), (this.instance = n)
      },
      () => {
        this.disposeInstance(n)
      },
    )
  }
  /** @internal */
  _instanceNotInitialized() {
    throw new q('instance is not initialized')
  }
  disposeInstance(n) {
    return (
      n > 0 &&
        (this.onDispose !== void 0 && this.onDispose(),
        this.disposeMethod(n)),
      0
    )
  }
}
class Ai extends Ce {
  constructor(n) {
    const e = l._api._DrawingSettings_Create(),
      o = l._api._DrawingSettings_Dispose
    if (
      (super(e, o),
      n.fillColor !== void 0 &&
        n.fillColor._use(g => {
          l._api._DrawingSettings_FillColor_Set(this._instance, g)
        }),
      n.font !== void 0)
    ) {
      const g = ye._getFontFileName(n.font)
      L(g, p => {
        l._api._DrawingSettings_Font_Set(this._instance, p)
      })
    }
    n.fontPointsize !== void 0 &&
      l._api._DrawingSettings_FontPointsize_Set(
        this._instance,
        n.fontPointsize,
      ),
      n.strokeColor !== void 0 &&
        n.strokeColor._use(g => {
          l._api._DrawingSettings_StrokeColor_Set(this._instance, g)
        }),
      n.strokeWidth !== void 0 &&
        l._api._DrawingSettings_StrokeWidth_Set(
          this._instance,
          n.strokeWidth,
        )
  }
}
class bt {
  backgroundColor
  fillColor
  font
  fontPointsize
  strokeColor
  strokeWidth
  static _create(n) {
    const e = new bt()
    return (
      (e.fillColor = n.fillColor),
      (e.font = n.font),
      (e.fontPointsize = n.fontPointsize),
      (e.strokeColor = n.strokeColor),
      (e.strokeWidth = n.strokeWidth),
      e
    )
  }
  _use(n) {
    const e = new Ai(this)
    return ie._disposeAfterExecution(e, n)
  }
}
class Se {
  instance
  constructor() {
    ;(this.instance = l._api._malloc(4)),
      l._api.setValue(this.instance, 0, 'i32')
  }
  get ptr() {
    return this.instance
  }
  get value() {
    return l._api.getValue(this.instance, 'i32')
  }
  static use(n) {
    const e = new Se()
    try {
      return n(e)
    } finally {
      l._api._free(e.instance)
    }
  }
}
class P {
  pointer
  constructor(n) {
    this.pointer = n
  }
  get ptr() {
    return this.pointer.ptr
  }
  check(n, e) {
    return this.isError() ? e() : n()
  }
  static usePointer(n, e) {
    return Se.use(o => {
      const g = n(o.ptr)
      return P.checkException(o, g, e)
    })
  }
  static use(n, e) {
    return Se.use(o => {
      const g = n(new P(o))
      return P.checkException(o, g, e)
    })
  }
  static checkException(n, e, o) {
    if (!P.isRaised(n)) return e
    const g = P.getErrorSeverity(n.value)
    if (g >= gt.Error) P.throw(n, g)
    else if (o !== void 0) {
      const p = P.createError(n.value, g)
      o(p)
    } else P.dispose(n)
    return e
  }
  isError() {
    return P.isRaised(this.pointer)
      ? P.getErrorSeverity(this.pointer.value) >= gt.Error
      : !1
  }
  static getErrorSeverity(n) {
    return l._api._MagickExceptionHelper_Severity(n)
  }
  static isRaised(n) {
    return n.value !== 0
  }
  static throw(n, e) {
    const o = P.createError(n.value, e)
    throw (P.dispose(n), o)
  }
  static createError(n, e) {
    const o = P.getMessage(n),
      g = new q(o, e),
      p = l._api._MagickExceptionHelper_RelatedCount(n)
    if (p === 0) return g
    const d = []
    for (let S = 0; S < p; S++) {
      const D = l._api._MagickExceptionHelper_Related(n, S),
        T = P.getErrorSeverity(D),
        x = P.createError(D, T)
      d.push(x)
    }
    return g._setRelatedErrors(d), g
  }
  static getMessage(n) {
    const e = l._api._MagickExceptionHelper_Message(n),
      o = l._api._MagickExceptionHelper_Description(n)
    let g = ue(e)
    return o !== 0 && (g += `(${l._api.UTF8ToString(o)})`), g
  }
  static dispose(n) {
    l._api._MagickExceptionHelper_Dispose(n.value)
  }
}
class Pt extends Ce {
  constructor(n, e) {
    const g = bt
        ._create(e)
        ._use(d =>
          l._api._DrawingWand_Create(n._instance, d._instance),
        ),
      p = l._api._DrawingWand_Dispose
    super(g, p)
  }
  color(n, e, o) {
    P.usePointer(g => {
      l._api._DrawingWand_Color(this._instance, n, e, o, g)
    })
  }
  draw(n) {
    n.forEach(e => {
      e.draw(this)
    }),
      P.usePointer(e => {
        l._api._DrawingWand_Render(this._instance, e)
      })
  }
  fillColor(n) {
    P.usePointer(e => {
      n._use(o => {
        l._api._DrawingWand_FillColor(this._instance, o, e)
      })
    })
  }
  fillOpacity(n) {
    P.usePointer(e => {
      l._api._DrawingWand_FillOpacity(this._instance, n, e)
    })
  }
  font(n) {
    P.usePointer(e => {
      L(n, o => {
        l._api._DrawingWand_Font(this._instance, o, e)
      })
    })
  }
  fontPointSize(n) {
    P.usePointer(e => {
      l._api._DrawingWand_FontPointSize(this._instance, n, e)
    })
  }
  gravity(n) {
    P.usePointer(e => {
      l._api._DrawingWand_Gravity(this._instance, n, e)
    })
  }
  line(n, e, o, g) {
    P.usePointer(p => {
      l._api._DrawingWand_Line(this._instance, n, e, o, g, p)
    })
  }
  point(n, e) {
    P.usePointer(o => {
      l._api._DrawingWand_Point(this._instance, n, e, o)
    })
  }
  rectangle(n, e, o, g) {
    P.usePointer(p => {
      l._api._DrawingWand_Rectangle(this._instance, n, e, o, g, p)
    })
  }
  roundRectangle(n, e, o, g, p, d) {
    P.usePointer(S => {
      l._api._DrawingWand_RoundRectangle(
        this._instance,
        n,
        e,
        o,
        g,
        p,
        d,
        S,
      )
    })
  }
  strokeColor(n) {
    P.usePointer(e => {
      n._use(o => {
        l._api._DrawingWand_StrokeColor(this._instance, o, e)
      })
    })
  }
  strokeWidth(n) {
    P.usePointer(e => {
      l._api._DrawingWand_StrokeWidth(this._instance, n, e)
    })
  }
  text(n, e, o) {
    P.usePointer(g => {
      L(o, p => {
        l._api._DrawingWand_Text(this._instance, n, e, p, g)
      })
    })
  }
  textAlignment(n) {
    P.usePointer(e => {
      l._api._DrawingWand_TextAlignment(this._instance, n, e)
    })
  }
  textAntialias(n) {
    P.usePointer(e => {
      l._api._DrawingWand_TextAntialias(this._instance, n ? 1 : 0, e)
    })
  }
  textDecoration(n) {
    P.usePointer(e => {
      l._api._DrawingWand_TextDecoration(this._instance, n, e)
    })
  }
  textInterlineSpacing(n) {
    P.usePointer(e => {
      l._api._DrawingWand_TextInterlineSpacing(this._instance, n, e)
    })
  }
  textInterwordspacing(n) {
    P.usePointer(e => {
      l._api._DrawingWand_TextInterwordSpacing(this._instance, n, e)
    })
  }
  textKerning(n) {
    P.usePointer(e => {
      l._api._DrawingWand_TextKerning(this._instance, n, e)
    })
  }
  textUnderColor(n) {
    P.usePointer(e => {
      n._use(o => {
        l._api._DrawingWand_TextUnderColor(this._instance, o, e)
      })
    })
  }
  /** @internal */
  static _create(n, e) {
    return new Pt(n, e)
  }
}
var ot = /* @__PURE__ */ (t => (
  (t[(t.Undefined = 0)] = 'Undefined'),
  (t[(t.Forget = 0)] = 'Forget'),
  (t[(t.Northwest = 1)] = 'Northwest'),
  (t[(t.North = 2)] = 'North'),
  (t[(t.Northeast = 3)] = 'Northeast'),
  (t[(t.West = 4)] = 'West'),
  (t[(t.Center = 5)] = 'Center'),
  (t[(t.East = 6)] = 'East'),
  (t[(t.Southwest = 7)] = 'Southwest'),
  (t[(t.South = 8)] = 'South'),
  (t[(t.Southeast = 9)] = 'Southeast'),
  t
))(ot || {})
function* Ei(t) {
  for (const n of t)
    switch (n) {
      case 2:
        yield 'north'
        break
      case 3:
        yield 'north', yield 'east'
        break
      case 1:
        yield 'north', yield 'west'
        break
      case 6:
        yield 'east'
        break
      case 4:
        yield 'west'
        break
      case 8:
        yield 'south'
        break
      case 9:
        yield 'south', yield 'east'
        break
      case 7:
        yield 'south', yield 'west'
    }
}
class Ri {
  constructor(n, e) {
    ;(this.name = n), (this.data = e)
  }
  name
  data
}
var ve = /* @__PURE__ */ (t => (
    (t.Unknown = 'UNKNOWN'),
    (t.ThreeFr = '3FR'),
    (t.ThreeG2 = '3G2'),
    (t.ThreeGp = '3GP'),
    (t.A = 'A'),
    (t.Aai = 'AAI'),
    (t.Ai = 'AI'),
    (t.Apng = 'APNG'),
    (t.Art = 'ART'),
    (t.Arw = 'ARW'),
    (t.Ashlar = 'ASHLAR'),
    (t.Avi = 'AVI'),
    (t.Avif = 'AVIF'),
    (t.Avs = 'AVS'),
    (t.B = 'B'),
    (t.Bayer = 'BAYER'),
    (t.Bayera = 'BAYERA'),
    (t.Bgr = 'BGR'),
    (t.Bgra = 'BGRA'),
    (t.Bgro = 'BGRO'),
    (t.Bmp = 'BMP'),
    (t.Bmp2 = 'BMP2'),
    (t.Bmp3 = 'BMP3'),
    (t.Brf = 'BRF'),
    (t.C = 'C'),
    (t.Cal = 'CAL'),
    (t.Cals = 'CALS'),
    (t.Canvas = 'CANVAS'),
    (t.Caption = 'CAPTION'),
    (t.Cin = 'CIN'),
    (t.Cip = 'CIP'),
    (t.Clip = 'CLIP'),
    (t.Cmyk = 'CMYK'),
    (t.Cmyka = 'CMYKA'),
    (t.Cr2 = 'CR2'),
    (t.Cr3 = 'CR3'),
    (t.Crw = 'CRW'),
    (t.Cube = 'CUBE'),
    (t.Cur = 'CUR'),
    (t.Cut = 'CUT'),
    (t.Data = 'DATA'),
    (t.Dcm = 'DCM'),
    (t.Dcr = 'DCR'),
    (t.Dcraw = 'DCRAW'),
    (t.Dcx = 'DCX'),
    (t.Dds = 'DDS'),
    (t.Dfont = 'DFONT'),
    (t.Dng = 'DNG'),
    (t.Dpx = 'DPX'),
    (t.Dxt1 = 'DXT1'),
    (t.Dxt5 = 'DXT5'),
    (t.Epdf = 'EPDF'),
    (t.Epi = 'EPI'),
    (t.Eps = 'EPS'),
    (t.Eps2 = 'EPS2'),
    (t.Eps3 = 'EPS3'),
    (t.Epsf = 'EPSF'),
    (t.Epsi = 'EPSI'),
    (t.Ept = 'EPT'),
    (t.Ept2 = 'EPT2'),
    (t.Ept3 = 'EPT3'),
    (t.Erf = 'ERF'),
    (t.Exr = 'EXR'),
    (t.Farbfeld = 'FARBFELD'),
    (t.Fax = 'FAX'),
    (t.Ff = 'FF'),
    (t.File = 'FILE'),
    (t.Fits = 'FITS'),
    (t.Fl32 = 'FL32'),
    (t.Flv = 'FLV'),
    (t.Fractal = 'FRACTAL'),
    (t.Ftp = 'FTP'),
    (t.Ftxt = 'FTXT'),
    (t.Fts = 'FTS'),
    (t.G = 'G'),
    (t.G3 = 'G3'),
    (t.G4 = 'G4'),
    (t.Gif = 'GIF'),
    (t.Gif87 = 'GIF87'),
    (t.Gradient = 'GRADIENT'),
    (t.Gray = 'GRAY'),
    (t.Graya = 'GRAYA'),
    (t.Group4 = 'GROUP4'),
    (t.Hald = 'HALD'),
    (t.Hdr = 'HDR'),
    (t.Heic = 'HEIC'),
    (t.Heif = 'HEIF'),
    (t.Histogram = 'HISTOGRAM'),
    (t.Hrz = 'HRZ'),
    (t.Htm = 'HTM'),
    (t.Html = 'HTML'),
    (t.Http = 'HTTP'),
    (t.Https = 'HTTPS'),
    (t.Icb = 'ICB'),
    (t.Ico = 'ICO'),
    (t.Icon = 'ICON'),
    (t.Iiq = 'IIQ'),
    (t.Info = 'INFO'),
    (t.Inline = 'INLINE'),
    (t.Ipl = 'IPL'),
    (t.Isobrl = 'ISOBRL'),
    (t.Isobrl6 = 'ISOBRL6'),
    (t.J2c = 'J2C'),
    (t.J2k = 'J2K'),
    (t.Jng = 'JNG'),
    (t.Jnx = 'JNX'),
    (t.Jp2 = 'JP2'),
    (t.Jpc = 'JPC'),
    (t.Jpe = 'JPE'),
    (t.Jpeg = 'JPEG'),
    (t.Jpg = 'JPG'),
    (t.Jpm = 'JPM'),
    (t.Jps = 'JPS'),
    (t.Jpt = 'JPT'),
    (t.Json = 'JSON'),
    (t.Jxl = 'JXL'),
    (t.K = 'K'),
    (t.K25 = 'K25'),
    (t.Kdc = 'KDC'),
    (t.Label = 'LABEL'),
    (t.M = 'M'),
    (t.M2v = 'M2V'),
    (t.M4v = 'M4V'),
    (t.Mac = 'MAC'),
    (t.Map = 'MAP'),
    (t.Mask = 'MASK'),
    (t.Mat = 'MAT'),
    (t.Matte = 'MATTE'),
    (t.Mef = 'MEF'),
    (t.Miff = 'MIFF'),
    (t.Mkv = 'MKV'),
    (t.Mng = 'MNG'),
    (t.Mono = 'MONO'),
    (t.Mov = 'MOV'),
    (t.Mp4 = 'MP4'),
    (t.Mpc = 'MPC'),
    (t.Mpeg = 'MPEG'),
    (t.Mpg = 'MPG'),
    (t.Mpo = 'MPO'),
    (t.Mrw = 'MRW'),
    (t.Msl = 'MSL'),
    (t.Msvg = 'MSVG'),
    (t.Mtv = 'MTV'),
    (t.Mvg = 'MVG'),
    (t.Nef = 'NEF'),
    (t.Nrw = 'NRW'),
    (t.Null = 'NULL'),
    (t.O = 'O'),
    (t.Ora = 'ORA'),
    (t.Orf = 'ORF'),
    (t.Otb = 'OTB'),
    (t.Otf = 'OTF'),
    (t.Pal = 'PAL'),
    (t.Palm = 'PALM'),
    (t.Pam = 'PAM'),
    (t.Pango = 'PANGO'),
    (t.Pattern = 'PATTERN'),
    (t.Pbm = 'PBM'),
    (t.Pcd = 'PCD'),
    (t.Pcds = 'PCDS'),
    (t.Pcl = 'PCL'),
    (t.Pct = 'PCT'),
    (t.Pcx = 'PCX'),
    (t.Pdb = 'PDB'),
    (t.Pdf = 'PDF'),
    (t.Pdfa = 'PDFA'),
    (t.Pef = 'PEF'),
    (t.Pes = 'PES'),
    (t.Pfa = 'PFA'),
    (t.Pfb = 'PFB'),
    (t.Pfm = 'PFM'),
    (t.Pgm = 'PGM'),
    (t.Pgx = 'PGX'),
    (t.Phm = 'PHM'),
    (t.Picon = 'PICON'),
    (t.Pict = 'PICT'),
    (t.Pix = 'PIX'),
    (t.Pjpeg = 'PJPEG'),
    (t.Plasma = 'PLASMA'),
    (t.Png = 'PNG'),
    (t.Png00 = 'PNG00'),
    (t.Png24 = 'PNG24'),
    (t.Png32 = 'PNG32'),
    (t.Png48 = 'PNG48'),
    (t.Png64 = 'PNG64'),
    (t.Png8 = 'PNG8'),
    (t.Pnm = 'PNM'),
    (t.Pocketmod = 'POCKETMOD'),
    (t.Ppm = 'PPM'),
    (t.Ps = 'PS'),
    (t.Ps2 = 'PS2'),
    (t.Ps3 = 'PS3'),
    (t.Psb = 'PSB'),
    (t.Psd = 'PSD'),
    (t.Ptif = 'PTIF'),
    (t.Pwp = 'PWP'),
    (t.Qoi = 'QOI'),
    (t.R = 'R'),
    (t.RadialGradient = 'RADIAL-GRADIENT'),
    (t.Raf = 'RAF'),
    (t.Ras = 'RAS'),
    (t.Raw = 'RAW'),
    (t.Rgb = 'RGB'),
    (t.Rgb565 = 'RGB565'),
    (t.Rgba = 'RGBA'),
    (t.Rgbo = 'RGBO'),
    (t.Rgf = 'RGF'),
    (t.Rla = 'RLA'),
    (t.Rle = 'RLE'),
    (t.Rmf = 'RMF'),
    (t.Rw2 = 'RW2'),
    (t.Scr = 'SCR'),
    (t.Screenshot = 'SCREENSHOT'),
    (t.Sct = 'SCT'),
    (t.Sfw = 'SFW'),
    (t.Sgi = 'SGI'),
    (t.Shtml = 'SHTML'),
    (t.Six = 'SIX'),
    (t.Sixel = 'SIXEL'),
    (t.SparseColor = 'SPARSE-COLOR'),
    (t.Sr2 = 'SR2'),
    (t.Srf = 'SRF'),
    (t.Stegano = 'STEGANO'),
    (t.StrImg = 'STRIMG'),
    (t.Sun = 'SUN'),
    (t.Svg = 'SVG'),
    (t.Svgz = 'SVGZ'),
    (t.Text = 'TEXT'),
    (t.Tga = 'TGA'),
    (t.Thumbnail = 'THUMBNAIL'),
    (t.Tiff = 'TIFF'),
    (t.Tiff64 = 'TIFF64'),
    (t.Tile = 'TILE'),
    (t.Tim = 'TIM'),
    (t.Tm2 = 'TM2'),
    (t.Ttc = 'TTC'),
    (t.Ttf = 'TTF'),
    (t.Txt = 'TXT'),
    (t.Ubrl = 'UBRL'),
    (t.Ubrl6 = 'UBRL6'),
    (t.Uil = 'UIL'),
    (t.Uyvy = 'UYVY'),
    (t.Vda = 'VDA'),
    (t.Vicar = 'VICAR'),
    (t.Vid = 'VID'),
    (t.Viff = 'VIFF'),
    (t.Vips = 'VIPS'),
    (t.Vst = 'VST'),
    (t.Wbmp = 'WBMP'),
    (t.Webp = 'WEBP'),
    (t.Webm = 'WEBM'),
    (t.Wmv = 'WMV'),
    (t.Wpg = 'WPG'),
    (t.X3f = 'X3F'),
    (t.Xbm = 'XBM'),
    (t.Xc = 'XC'),
    (t.Xcf = 'XCF'),
    (t.Xpm = 'XPM'),
    (t.Xps = 'XPS'),
    (t.Xv = 'XV'),
    (t.Y = 'Y'),
    (t.Yaml = 'YAML'),
    (t.Ycbcr = 'YCbCr'),
    (t.Ycbcra = 'YCbCrA'),
    (t.Yuv = 'YUV'),
    t
  ))(ve || {}),
  lt = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Coalesce = 1)] = 'Coalesce'),
    (t[(t.CompareAny = 2)] = 'CompareAny'),
    (t[(t.CompareClear = 3)] = 'CompareClear'),
    (t[(t.CompareOverlay = 4)] = 'CompareOverlay'),
    (t[(t.Dispose = 5)] = 'Dispose'),
    (t[(t.Optimize = 6)] = 'Optimize'),
    (t[(t.OptimizeImage = 7)] = 'OptimizeImage'),
    (t[(t.OptimizePlus = 8)] = 'OptimizePlus'),
    (t[(t.OptimizeTrans = 9)] = 'OptimizeTrans'),
    (t[(t.RemoveDups = 10)] = 'RemoveDups'),
    (t[(t.RemoveZero = 11)] = 'RemoveZero'),
    (t[(t.Composite = 12)] = 'Composite'),
    (t[(t.Merge = 13)] = 'Merge'),
    (t[(t.Flatten = 14)] = 'Flatten'),
    (t[(t.Mosaic = 15)] = 'Mosaic'),
    (t[(t.Trimbounds = 16)] = 'Trimbounds'),
    t
  ))(lt || {})
class Pn extends Ce {
  constructor(n) {
    const e = l._api._MagickSettings_Create(),
      o = l._api._MagickSettings_Dispose
    if (
      (super(e, o),
      n._fileName !== void 0 &&
        L(n._fileName, g => {
          l._api._MagickSettings_SetFileName(this._instance, g)
        }),
      n._ping && l._api._MagickSettings_SetPing(this._instance, 1),
      n._quality !== void 0 &&
        l._api._MagickSettings_SetQuality(this._instance, n._quality),
      n.antiAlias !== void 0 &&
        l._api._MagickSettings_AntiAlias_Set(
          this._instance,
          n.antiAlias ? 1 : 0,
        ),
      n.backgroundColor !== void 0 &&
        n.backgroundColor._use(g => {
          l._api._MagickSettings_BackgroundColor_Set(this._instance, g)
        }),
      n.colorSpace !== void 0 &&
        l._api._MagickSettings_ColorSpace_Set(
          this._instance,
          n.colorSpace,
        ),
      n.colorType !== void 0 &&
        l._api._MagickSettings_ColorType_Set(
          this._instance,
          n.colorType,
        ),
      n.compression !== void 0 &&
        l._api._MagickSettings_Compression_Set(
          this._instance,
          n.compression,
        ),
      n.debug !== void 0 &&
        l._api._MagickSettings_Debug_Set(
          this._instance,
          n.debug ? 1 : 0,
        ),
      n.depth !== void 0 &&
        l._api._MagickSettings_Depth_Set(this._instance, n.depth),
      n.endian !== void 0 &&
        l._api._MagickSettings_Endian_Set(this._instance, n.endian),
      n.fillColor !== void 0 &&
        this.setOption('fill', n.fillColor.toString()),
      n.font !== void 0)
    ) {
      const g = ye._getFontFileName(n.font)
      L(g, p => {
        l._api._MagickSettings_SetFont(this._instance, p)
      })
    }
    n.fontPointsize !== void 0 &&
      l._api._MagickSettings_FontPointsize_Set(
        this._instance,
        n.fontPointsize,
      ),
      n.format !== void 0 &&
        L(n.format, g => {
          l._api._MagickSettings_Format_Set(this._instance, g)
        }),
      n.interlace !== void 0 &&
        l._api._MagickSettings_Interlace_Set(
          this._instance,
          n.interlace,
        ),
      n.strokeColor !== void 0 &&
        this.setOption('stroke', n.strokeColor.toString()),
      n.strokeWidth !== void 0 &&
        this.setOption('strokeWidth', n.strokeWidth.toString()),
      n.textInterlineSpacing !== void 0 &&
        this.setOption(
          'interline-spacing',
          n.textInterlineSpacing.toString(),
        ),
      n.textKerning !== void 0 &&
        this.setOption('kerning', n.textKerning.toString())
    for (const g in n._options) this.setOption(g, n._options[g])
  }
  setOption(n, e) {
    L(n, o => {
      L(e, g => {
        l._api._MagickSettings_SetOption(this._instance, o, g)
      })
    })
  }
}
class Fe {
  /** @internal */
  _options = {}
  /** @internal */
  _fileName
  /** @internal */
  _ping = !1
  /** @internal */
  _quality
  /**
   * Gets or sets a value indicating whether anti-aliasing should be enabled (default true).
   */
  antiAlias
  /**
   * Gets or sets the background color.
   */
  backgroundColor
  /**
   * Gets or sets the color space.
   */
  colorSpace
  /**
   * Gets or sets the color type of the image.
   */
  colorType
  /**
   * Gets or sets the compression method to use.
   */
  compression
  /**
   * Gets or sets a value indicating whether printing of debug messages from ImageMagick is enabled when a debugger is attached.
   */
  debug
  /**
   * Gets or sets the depth (bits allocated to red/green/blue components).
   */
  depth
  /**
   * Gets or sets the endianness (little like Intel or big like SPARC) for image formats which support
   * endian-specific options.
   */
  endian
  /**
   * Gets or sets the fill color.
   */
  fillColor
  /**
   * Gets or sets the text rendering font.
   */
  font
  /**
   * Gets or sets the font point size.
   */
  fontPointsize
  /**
   * Gets or sets the the format of the image.
   */
  format
  /**
   * Gets or sets the interlace method.
   */
  interlace
  /**
   * Gets or sets the color to use when drawing object outlines.
   */
  strokeColor
  /**
   * Gets or sets the stroke width for drawing lines, circles, ellipses, etc.
   */
  strokeWidth
  /**
   * Gets or sets the text inter-line spacing.
   */
  textInterlineSpacing
  /**
   * Gets or sets the text inter-character kerning.
   */
  textKerning
  getDefine(n, e) {
    return e !== void 0
      ? this._options[`${n}:${e}`] ?? null
      : this._options[n] ?? null
  }
  setDefine(n, e, o) {
    if (o === void 0) this._options[n] = e
    else {
      const g = this.parseDefine(n, e)
      typeof o == 'string'
        ? (this._options[g] = o)
        : typeof o == 'number'
        ? (this._options[g] = o.toString())
        : (this._options[g] = o ? 'true' : 'false')
    }
  }
  /**
   * Sets format-specific options with the specified defines.
   */
  setDefines(n) {
    n.getDefines().forEach(e => {
      e !== void 0 && this.setDefine(e.format, e.name, e.value)
    })
  }
  /** @internal */
  _clone() {
    const n = new Fe()
    return Object.assign(n, this), n
  }
  /** @internal */
  _use(n) {
    const e = new Pn(this)
    return ie._disposeAfterExecution(e, n)
  }
  parseDefine(n, e) {
    return n === ve.Unknown ? e : `${n}:${e}`
  }
}
class Ie extends Fe {
  constructor(n) {
    super(), Object.assign(this, n)
  }
  /**
   * Gets or sets the height.
   */
  height
  /**
   * Gets or sets the width.
   */
  width
  /** @internal */
  _use(n) {
    const e = new Pn(this),
      o = this.getSize()
    return (
      o !== '' &&
        L(o, g => {
          l._api._MagickSettings_SetSize(e._instance, g)
        }),
      ie._disposeAfterExecution(e, n)
    )
  }
  getSize() {
    return this.width !== void 0 && this.height !== void 0
      ? `${this.width}x${this.height}`
      : this.width !== void 0
      ? `${this.width}x`
      : this.height !== void 0
      ? `x${this.height}`
      : ''
  }
}
class ce extends Array {
  constructor() {
    super()
  }
  static create(n) {
    const e = ce.createObject()
    return n !== void 0 && e.read(n), e
  }
  dispose() {
    let n = this.pop()
    for (; n !== void 0; ) n.dispose(), (n = this.pop())
  }
  appendHorizontally(n) {
    return this.createImage(
      (e, o) => l._api._MagickImageCollection_Append(e, 0, o.ptr),
      n,
    )
  }
  appendVertically(n) {
    return this.createImage(
      (e, o) => l._api._MagickImageCollection_Append(e, 1, o.ptr),
      n,
    )
  }
  clone(n) {
    const e = ce.create()
    for (let o = 0; o < this.length; o++) e.push(ae._clone(this[o]))
    return e._use(n)
  }
  coalesce() {
    this.throwIfEmpty()
    let n = 0
    try {
      this.attachImages(),
        (n = P.use(o => {
          const g = l._api._MagickImageCollection_Coalesce(
            this[0]._instance,
            o.ptr,
          )
          return this.checkResult(g, o)
        }))
    } finally {
      this.detachImages()
    }
    const e = this.getSettings()._clone()
    this.dispose(), this.addImages(n, e)
  }
  evaluate(n, e) {
    return this.createImage(
      (o, g) => l._api._MagickImageCollection_Evaluate(o, n, g.ptr),
      e,
    )
  }
  flatten(n) {
    return this.mergeImages(lt.Flatten, n)
  }
  merge(n) {
    return this.mergeImages(lt.Merge, n)
  }
  montage(n, e) {
    this.throwIfEmpty()
    try {
      this.attachImages()
      const o = n._use(d =>
          P.use(S => {
            const D = l._api._MagickImageCollection_Montage(
              this[0]._instance,
              d._instance,
              S.ptr,
            )
            return this.checkResult(D, S)
          }),
        ),
        g = ce._createFromImages(o, this.getSettings()),
        p = n.transparentColor
      return (
        p !== void 0 &&
          g.forEach(d => {
            d.transparent(p)
          }),
        g.merge(e)
      )
    } finally {
      this.detachImages()
    }
  }
  mosaic(n) {
    return this.mergeImages(lt.Mosaic, n)
  }
  read(n, e) {
    this.dispose(),
      P.use(o => {
        const g = ce.createSettings(e)
        typeof n == 'string'
          ? ((g._fileName = n),
            g._use(p => {
              const d = l._api._MagickImageCollection_ReadFile(
                p._instance,
                o.ptr,
              )
              this.addImages(d, g)
            }))
          : g._use(p => {
              const d = n.byteLength
              let S = 0
              try {
                ;(S = l._api._malloc(d)), l._api.HEAPU8.set(n, S)
                const D = l._api._MagickImageCollection_ReadBlob(
                  p._instance,
                  S,
                  0,
                  d,
                  o.ptr,
                )
                this.addImages(D, g)
              } finally {
                S !== 0 && l._api._free(S)
              }
            })
      })
  }
  write(n, e) {
    this.throwIfEmpty()
    let o = 0,
      g = 0
    const p = this[0],
      d = this.getSettings()
    e !== void 0 ? (d.format = n) : ((e = n), (d.format = p.format)),
      P.use(D => {
        Se.use(T => {
          d._use(x => {
            try {
              this.attachImages(),
                (o = l._api._MagickImage_WriteBlob(
                  p._instance,
                  x._instance,
                  T.ptr,
                  D.ptr,
                )),
                (g = T.value)
            } finally {
              this.detachImages()
            }
          })
        })
      })
    const S = new bn(o, g, e)
    return ie._disposeAfterExecution(S, S.func)
  }
  /** @internal */
  static _createFromImages(n, e) {
    const o = ce.createObject()
    return o.addImages(n, e._clone()), o
  }
  _use(n) {
    return ie._disposeAfterExecution(this, n)
  }
  addImages(n, e) {
    e.format = ve.Unknown
    let o = n
    for (; o !== 0; ) {
      const g = l._api._MagickImage_GetNext(o)
      l._api._MagickImage_SetNext(o, 0),
        this.push(ae._createFromImage(o, e)),
        (o = g)
    }
  }
  attachImages() {
    for (let n = 0; n < this.length - 1; n++)
      l._api._MagickImage_SetNext(
        this[n]._instance,
        this[n + 1]._instance,
      )
  }
  static createObject() {
    return Object.create(ce.prototype)
  }
  createImage(n, e) {
    this.throwIfEmpty()
    try {
      this.attachImages()
      const o = P.use(p => {
        const d = n(this[0]._instance, p)
        return this.checkResult(d, p)
      })
      return ae._createFromImage(o, this.getSettings())._use(e)
    } finally {
      this.detachImages()
    }
  }
  static createSettings(n) {
    return n == null ? new Fe() : new Ie(n)
  }
  detachImages() {
    for (let n = 0; n < this.length - 1; n++)
      l._api._MagickImage_SetNext(this[n]._instance, 0)
  }
  getSettings() {
    return this[0]._getSettings()._clone()
  }
  mergeImages(n, e) {
    return this.createImage(
      (o, g) => l._api._MagickImageCollection_Merge(o, n, g.ptr),
      e,
    )
  }
  throwIfEmpty() {
    if (this.length === 0)
      throw new q('operation requires at least one image')
  }
  checkResult(n, e) {
    return e.check(
      () => n,
      () => (l._api._MagickImageCollection_Dispose(n), 0),
    )
  }
}
class J {
  _value
  /**
   * Initializes a new instance of the {@link Percentage} class.
   * @param value -The value (0% = 0.0, 100% = 100.0)
   */
  constructor(n) {
    this._value = n
  }
  /** @internal */
  static _fromQuantum(n) {
    return new J((n / Te.max) * 100)
  }
  /**
   * ultiplies the value by the specified percentage.
   * @param value - The value to use.
   * @returns - The new value.
   */
  multiply(n) {
    return (n * this._value) / 100
  }
  /**
   * Returns a double that represents the current percentage.
   * @returns - A double that represents the current percentage.
   */
  toDouble() {
    return this._value
  }
  /** @internal */
  _toQuantum() {
    return Te.max * (this._value / 100)
  }
}
class vn {
  static use(n, e, o) {
    const g = l._api._MagickRectangle_Create()
    try {
      l._api._MagickRectangle_X_Set(g, e.x),
        l._api._MagickRectangle_Y_Set(g, e.y)
      let p = e.width,
        d = e.height
      return (
        e.isPercentage &&
          ((p = new J(e.width).multiply(n.width)),
          (d = new J(e.height).multiply(n.height))),
        l._api._MagickRectangle_Width_Set(g, p),
        l._api._MagickRectangle_Height_Set(g, d),
        o(g)
      )
    } finally {
      l._api._MagickRectangle_Dispose(g)
    }
  }
}
function Dn(t, n) {
  if (t.byteLength === 0)
    throw new q('The specified array cannot be empty')
  let e = 0
  try {
    return (
      (e = l._api._malloc(t.byteLength)), l._api.HEAPU8.set(t, e), n(e)
    )
  } finally {
    e !== 0 && l._api._free(e)
  }
}
function bi(t, n) {
  const e = t.length * 8
  let o = 0
  try {
    if (e !== 0) {
      o = l._api._malloc(e)
      const g = new ArrayBuffer(e),
        p = new Float64Array(g)
      for (let d = 0; d < t.length; d++) p[d] = t[d]
      l._api.HEAPU8.set(new Int8Array(g), o)
    }
    return n(o)
  } finally {
    o !== 0 && l._api._free(o)
  }
}
function Pi(t, n) {
  if (t.byteLength === 0)
    throw new q('The specified array cannot be empty')
  let e = 0
  try {
    return (
      (e = l._api._malloc(t.byteLength)), l._api.HEAPU8.set(t, e), n(e)
    )
  } finally {
    e !== 0 && l._api._free(e)
  }
}
class He extends Ce {
  image
  constructor(n) {
    const e = P.usePointer(g =>
        l._api._PixelCollection_Create(n._instance, g),
      ),
      o = l._api._PixelCollection_Dispose
    super(e, o), (this.image = n)
  }
  /** @internal */
  static _create(n) {
    return new He(n)
  }
  static _use(n, e) {
    const o = new He(n)
    return ie._disposeAfterExecution(o, e)
  }
  /** @internal */
  static _map(n, e, o) {
    const g = new He(n)
    try {
      g.use(0, 0, n.width, n.height, e, p => {
        o(p)
      })
    } finally {
      g.dispose()
    }
  }
  getArea(n, e, o, g) {
    return P.usePointer(p => {
      const d = l._api._PixelCollection_GetArea(
          this._instance,
          n,
          e,
          o,
          g,
          p,
        ),
        S = o * g * this.image.channelCount
      return l._api.HEAPU8.subarray(d, d + S)
    })
  }
  getPixel(n, e) {
    return this.getArea(n, e, 1, 1)
  }
  setArea(n, e, o, g, p) {
    P.usePointer(d => {
      const S = p instanceof Uint8Array ? p : new Uint8Array(p)
      Pi(S, D => {
        l._api._PixelCollection_SetArea(
          this._instance,
          n,
          e,
          o,
          g,
          D,
          S.length,
          d,
        )
      })
    })
  }
  setPixel(n, e, o) {
    o instanceof Uint8Array
      ? this.setArea(n, e, 1, 1, o)
      : this.setArea(n, e, 1, 1, o)
  }
  toByteArray(n, e, o, g, p) {
    return this.use(n, e, o, g, p, d => {
      if (d === 0) return null
      const S = o * g * p.length
      return l._api.HEAPU8.slice(d, d + S)
    })
  }
  use(n, e, o, g, p, d) {
    return L(p, S =>
      P.use(D => {
        let T = l._api._PixelCollection_ToByteArray(
          this._instance,
          n,
          e,
          o,
          g,
          S,
          D.ptr,
        )
        return D.check(
          () => {
            const x = d(T)
            return (T = l._api._MagickMemory_Relinquish(T)), x
          },
          () => ((T = l._api._MagickMemory_Relinquish(T)), null),
        )
      }),
    )
  }
}
var Tn = /* @__PURE__ */ (t => (
  (t[(t.Undefined = 0)] = 'Undefined'),
  (t[(t.Average = 1)] = 'Average'),
  (t[(t.Brightness = 2)] = 'Brightness'),
  (t[(t.Lightness = 3)] = 'Lightness'),
  (t[(t.MS = 4)] = 'MS'),
  (t[(t.Rec601Luma = 5)] = 'Rec601Luma'),
  (t[(t.Rec601Luminance = 6)] = 'Rec601Luminance'),
  (t[(t.Rec709Luma = 7)] = 'Rec709Luma'),
  (t[(t.Rec709Luminance = 8)] = 'Rec709Luminance'),
  (t[(t.RMS = 9)] = 'RMS'),
  t
))(Tn || {})
class Pe {
  /**
   * Initializes a new instance of the {@link PrimaryInfo} class.
   * @param x - The x,
   * @param y - The y.
   * @param z - The z.
   */
  constructor(n, e, o) {
    ;(this.x = n), (this.y = e), (this.z = o)
  }
  /**
   * Gets the X value.
   */
  x
  /**
   * Gets the Y value.
   */
  y
  /**
   * Gets the Z value.
   */
  z
  /** @internal */
  static _create(n) {
    return n === 0
      ? new Pe(0, 0, 0)
      : new Pe(
          l._api._PrimaryInfo_X_Get(n),
          l._api._PrimaryInfo_Y_Get(n),
          l._api._PrimaryInfo_Z_Get(n),
        )
  }
  /** @internal */
  _use(n) {
    let e = 0
    try {
      ;(e = l._api._PrimaryInfo_Create()),
        l._api._PrimaryInfo_X_Set(e, this.x),
        l._api._PrimaryInfo_Y_Set(e, this.y),
        l._api._PrimaryInfo_Z_Set(e, this.z),
        n(e)
    } finally {
      l._api._free(e)
    }
  }
}
class Ti {
  channel
  depth
  entropy
  kurtosis
  maximum
  mean
  minimum
  skewness
  standardDeviation
  constructor(n, e) {
    ;(this.channel = n),
      (this.depth = l._api._ChannelStatistics_Depth_Get(e)),
      (this.entropy = l._api._ChannelStatistics_Entropy_Get(e)),
      (this.kurtosis = l._api._ChannelStatistics_Kurtosis_Get(e)),
      (this.maximum = l._api._ChannelStatistics_Maximum_Get(e)),
      (this.mean = l._api._ChannelStatistics_Mean_Get(e)),
      (this.minimum = l._api._ChannelStatistics_Minimum_Get(e)),
      (this.skewness = l._api._ChannelStatistics_Skewness_Get(e)),
      (this.standardDeviation =
        l._api._ChannelStatistics_StandardDeviation_Get(e))
  }
}
class Tt {
  _channels = {}
  get channels() {
    const n = []
    for (const e in this._channels) n.push(parseInt(e))
    return n
  }
  composite() {
    return this._channels[E.Composite]
  }
  getChannel(n) {
    const e = this._channels[n]
    return e !== void 0 ? e : null
  }
  static _create(n, e, o) {
    const g = new Tt()
    return (
      n.channels.forEach(p => {
        ;(o >> p) & 1 && g.addChannel(e, p)
      }),
      g.addChannel(e, E.Composite),
      g
    )
  }
  addChannel(n, e) {
    const o = l._api._Statistics_GetInstance(n, e)
    o !== 0 && (this._channels[e] = new Ti(e, o))
  }
}
class Ci {
  static toArray(n) {
    if (n === 0) return null
    const e = l._api._StringInfo_Datum_Get(n),
      o = l._api._StringInfo_Length_Get(n)
    return l._api.HEAPU8.subarray(e, e + o)
  }
}
class mt {
  _image
  _names = []
  constructor(n) {
    this._image = n
  }
  setArtifact(n, e) {
    this._names.push(n), this._image.setArtifact(n, e)
  }
  static use(n, e) {
    const o = new mt(n)
    try {
      return e(o)
    } finally {
      o.dispose()
    }
  }
  dispose() {
    for (const n of this._names) this._image.removeArtifact(n)
  }
}
class Gn {
  /** @internal */
  constructor(n) {
    this.error = n
  }
  /**
   * Gets the warning that was raised.
   */
  error
}
class ae extends Ce {
  _settings
  _progress
  _warning
  constructor(n, e) {
    super(n, l._api._MagickImage_Dispose), (this._settings = e)
  }
  get animationDelay() {
    return l._api._MagickImage_AnimationDelay_Get(this._instance)
  }
  set animationDelay(n) {
    l._api._MagickImage_AnimationDelay_Set(this._instance, n)
  }
  get animationIterations() {
    return l._api._MagickImage_AnimationIterations_Get(this._instance)
  }
  set animationIterations(n) {
    l._api._MagickImage_AnimationIterations_Set(this._instance, n)
  }
  get animationTicksPerSecond() {
    return l._api._MagickImage_AnimationTicksPerSecond_Get(
      this._instance,
    )
  }
  set animationTicksPerSecond(n) {
    l._api._MagickImage_AnimationTicksPerSecond_Set(this._instance, n)
  }
  get artifactNames() {
    const n = []
    l._api._MagickImage_ResetArtifactIterator(this._instance)
    let e = l._api._MagickImage_GetNextArtifactName(this._instance)
    for (; e !== 0; )
      n.push(l._api.UTF8ToString(e)),
        (e = l._api._MagickImage_GetNextArtifactName(this._instance))
    return n
  }
  get attributeNames() {
    const n = []
    l._api._MagickImage_ResetAttributeIterator(this._instance)
    let e = l._api._MagickImage_GetNextAttributeName(this._instance)
    for (; e !== 0; )
      n.push(l._api.UTF8ToString(e)),
        (e = l._api._MagickImage_GetNextAttributeName(this._instance))
    return n
  }
  get backgroundColor() {
    const n = l._api._MagickImage_BackgroundColor_Get(this._instance)
    return h._create(n)
  }
  set backgroundColor(n) {
    n._use(e => {
      l._api._MagickImage_BackgroundColor_Set(this._instance, e)
    })
  }
  get baseHeight() {
    return l._api._MagickImage_BaseHeight_Get(this._instance)
  }
  get baseWidth() {
    return l._api._MagickImage_BaseWidth_Get(this._instance)
  }
  get blackPointCompensation() {
    return (
      l._api._MagickImage_BlackPointCompensation_Get(this._instance) ===
      1
    )
  }
  set blackPointCompensation(n) {
    l._api._MagickImage_BlackPointCompensation_Set(
      this._instance,
      n ? 1 : 0,
    )
  }
  get borderColor() {
    const n = l._api._MagickImage_BorderColor_Get(this._instance)
    return h._create(n)
  }
  set borderColor(n) {
    n._use(e => {
      l._api._MagickImage_BorderColor_Set(this._instance, e)
    })
  }
  get boundingBox() {
    return this.useExceptionPointer(n => {
      const e = l._api._MagickImage_BoundingBox_Get(this._instance, n),
        o = se._fromRectangle(e)
      return o.width === 0 || o.height === 0 ? null : o
    })
  }
  get channelCount() {
    return l._api._MagickImage_ChannelCount_Get(this._instance)
  }
  get channels() {
    const n = []
    return (
      [E.Red, E.Green, E.Blue, E.Black, E.Alpha].forEach(e => {
        l._api._MagickImage_HasChannel(this._instance, e) && n.push(e)
      }),
      n
    )
  }
  get chromaticity() {
    return new vi(
      Pe._create(l._api._MagickImage_ChromaRed_Get(this._instance)),
      Pe._create(l._api._MagickImage_ChromaGreen_Get(this._instance)),
      Pe._create(l._api._MagickImage_ChromaBlue_Get(this._instance)),
      Pe._create(l._api._MagickImage_ChromaWhite_Get(this._instance)),
    )
  }
  set chromaticity(n) {
    n.blue._use(e =>
      l._api._MagickImage_ChromaBlue_Set(this._instance, e),
    ),
      n.green._use(e =>
        l._api._MagickImage_ChromaGreen_Set(this._instance, e),
      ),
      n.red._use(e =>
        l._api._MagickImage_ChromaRed_Set(this._instance, e),
      ),
      n.white._use(e =>
        l._api._MagickImage_ChromaWhite_Set(this._instance, e),
      )
  }
  get classType() {
    return this.useExceptionPointer(n =>
      l._api._MagickImage_ClassType_Get(this._instance, n),
    )
  }
  set classType(n) {
    this.useExceptionPointer(e => {
      l._api._MagickImage_ClassType_Set(this._instance, n, e)
    })
  }
  get colorFuzz() {
    return J._fromQuantum(
      l._api._MagickImage_ColorFuzz_Get(this._instance),
    )
  }
  set colorFuzz(n) {
    l._api._MagickImage_ColorFuzz_Set(this._instance, n._toQuantum())
  }
  get colormapSize() {
    return this.useExceptionPointer(n =>
      l._api._MagickImage_ColormapSize_Get(this._instance, n),
    )
  }
  set colormapSize(n) {
    this.useExceptionPointer(e => {
      l._api._MagickImage_ColormapSize_Set(this._instance, n, e)
    })
  }
  get colorSpace() {
    return this.useExceptionPointer(n =>
      l._api._MagickImage_ColorSpace_Get(this._instance, n),
    )
  }
  set colorSpace(n) {
    this.useExceptionPointer(e => {
      l._api._MagickImage_ColorSpace_Set(this._instance, n, e)
    })
  }
  get colorType() {
    return this.settings.colorType !== void 0
      ? this.settings.colorType
      : this.useExceptionPointer(n =>
          l._api._MagickImage_ColorType_Get(this._instance, n),
        )
  }
  set colorType(n) {
    this.useExceptionPointer(e => {
      l._api._MagickImage_ColorType_Set(this._instance, n, e)
    })
  }
  get comment() {
    return this.getAttribute('comment')
  }
  set comment(n) {
    n === null
      ? this.removeAttribute('comment')
      : this.setAttribute('comment', n)
  }
  get compose() {
    return l._api._MagickImage_Compose_Get(this._instance)
  }
  set compose(n) {
    l._api._MagickImage_Compose_Set(this._instance, n)
  }
  get compression() {
    return l._api._MagickImage_Compression_Get(this._instance)
  }
  get density() {
    return new Gi(
      l._api._MagickImage_ResolutionX_Get(this._instance),
      l._api._MagickImage_ResolutionY_Get(this._instance),
      l._api._MagickImage_ResolutionUnits_Get(this._instance),
    )
  }
  set density(n) {
    l._api._MagickImage_ResolutionX_Set(this._instance, n.x),
      l._api._MagickImage_ResolutionY_Set(this._instance, n.y),
      l._api._MagickImage_ResolutionUnits_Set(this._instance, n.units)
  }
  get depth() {
    return l._api._MagickImage_Depth_Get(this._instance)
  }
  set depth(n) {
    l._api._MagickImage_Depth_Set(this._instance, n)
  }
  get endian() {
    return l._api._MagickImage_Endian_Get(this._instance)
  }
  set endian(n) {
    l._api._MagickImage_Endian_Set(this._instance, n)
  }
  get fileName() {
    const n = l._api._MagickImage_FileName_Get(this._instance)
    return n === 0 ? null : l._api.UTF8ToString(n)
  }
  get filterType() {
    return l._api._MagickImage_FilterType_Get(this._instance)
  }
  set filterType(n) {
    l._api._MagickImage_FilterType_Set(this._instance, n)
  }
  get format() {
    return ue(l._api._MagickImage_Format_Get(this._instance))
  }
  set format(n) {
    L(n.toString(), e =>
      l._api._MagickImage_Format_Set(this._instance, e),
    )
  }
  get gamma() {
    return l._api._MagickImage_Gamma_Get(this._instance)
  }
  get gifDisposeMethod() {
    return l._api._MagickImage_GifDisposeMethod_Get(this._instance)
  }
  set gifDisposeMethod(n) {
    l._api._MagickImage_GifDisposeMethod_Set(this._instance, n)
  }
  get hasAlpha() {
    return this.useExceptionPointer(n =>
      this.toBool(l._api._MagickImage_HasAlpha_Get(this._instance, n)),
    )
  }
  set hasAlpha(n) {
    this.useExceptionPointer(e => {
      n && this.alpha(En.Opaque),
        l._api._MagickImage_HasAlpha_Set(
          this._instance,
          this.fromBool(n),
          e,
        )
    })
  }
  get height() {
    return l._api._MagickImage_Height_Get(this._instance)
  }
  get interlace() {
    return l._api._MagickImage_Interlace_Get(this._instance)
  }
  get isOpaque() {
    return this.useExceptionPointer(n =>
      this.toBool(l._api._MagickImage_IsOpaque_Get(this._instance, n)),
    )
  }
  get interpolate() {
    return l._api._MagickImage_Interpolate_Get(this._instance)
  }
  set interpolate(n) {
    l._api._MagickImage_Interpolate_Set(this._instance, n)
  }
  get label() {
    return this.getAttribute('label')
  }
  set label(n) {
    n === null
      ? this.removeAttribute('label')
      : this.setAttribute('label', n)
  }
  get matteColor() {
    const n = l._api._MagickImage_MatteColor_Get(this._instance)
    return h._create(n)
  }
  set matteColor(n) {
    n._use(e => {
      l._api._MagickImage_MatteColor_Set(this._instance, e)
    })
  }
  get orientation() {
    return l._api._MagickImage_Orientation_Get(this._instance)
  }
  set orientation(n) {
    l._api._MagickImage_Orientation_Set(this._instance, n)
  }
  get page() {
    const n = l._api._MagickImage_Page_Get(this._instance)
    return se._fromRectangle(n)
  }
  set page(n) {
    n._toRectangle(e => {
      l._api._MagickImage_Page_Set(this._instance, e)
    })
  }
  get onProgress() {
    return this._progress
  }
  set onProgress(n) {
    n !== void 0
      ? O.setProgressDelegate(this)
      : this.disposeProgressDelegate(),
      (this._progress = n)
  }
  get onWarning() {
    return this._warning
  }
  set onWarning(n) {
    this._warning = n
  }
  get quality() {
    return l._api._MagickImage_Quality_Get(this._instance)
  }
  set quality(n) {
    let e = n < 1 ? 1 : n
    ;(e = e > 100 ? 100 : e),
      l._api._MagickImage_Quality_Set(this._instance, e),
      (this._settings._quality = e)
  }
  get renderingIntent() {
    return l._api._MagickImage_RenderingIntent_Get(this._instance)
  }
  set renderingIntent(n) {
    l._api._MagickImage_RenderingIntent_Set(this._instance, n)
  }
  get settings() {
    return this._settings
  }
  get signature() {
    return this.useExceptionPointer(n =>
      ue(l._api._MagickImage_Signature_Get(this._instance, n)),
    )
  }
  get totalColors() {
    return this.useExceptionPointer(n =>
      l._api._MagickImage_TotalColors_Get(this._instance, n),
    )
  }
  get virtualPixelMethod() {
    return this.useExceptionPointer(n =>
      l._api._MagickImage_VirtualPixelMethod_Get(this._instance, n),
    )
  }
  set virtualPixelMethod(n) {
    this.useExceptionPointer(e => {
      l._api._MagickImage_VirtualPixelMethod_Set(this._instance, n, e)
    })
  }
  get width() {
    return l._api._MagickImage_Width_Get(this._instance)
  }
  alpha(n) {
    this.useExceptionPointer(e => {
      l._api._MagickImage_SetAlpha(this._instance, n, e)
    })
  }
  autoOrient() {
    this.useException(n => {
      const e = l._api._MagickImage_AutoOrient(this._instance, n.ptr)
      this._setInstance(e, n)
    })
  }
  autoThreshold(n) {
    this.useException(e => {
      l._api._MagickImage_AutoThreshold(this._instance, n, e.ptr)
    })
  }
  blur(n, e, o) {
    let g = 0
    const p = this.valueOrDefault(e, 1)
    let d = this.valueOrDefault(o, K.Undefined)
    typeof n == 'number' ? (g = n) : n !== void 0 && (d = n),
      this.useException(S => {
        const D = l._api._MagickImage_Blur(
          this._instance,
          g,
          p,
          d,
          S.ptr,
        )
        this._setInstance(D, S)
      })
  }
  border(n, e) {
    const o = n,
      g = this.valueOrDefault(e, n),
      p = new se(0, 0, o, g)
    this.useException(d => {
      p._toRectangle(S => {
        const D = l._api._MagickImage_Border(this._instance, S, d.ptr)
        this._setInstance(D, d)
      })
    })
  }
  brightnessContrast(n, e, o) {
    const g = this.valueOrDefault(o, K.Undefined)
    this.useException(p => {
      l._api._MagickImage_BrightnessContrast(
        this._instance,
        n.toDouble(),
        e.toDouble(),
        g,
        p.ptr,
      )
    })
  }
  charcoal(n, e) {
    const o = n === void 0 ? 0 : n,
      g = e === void 0 ? 1 : e
    this.useException(p => {
      const d = l._api._MagickImage_Charcoal(
        this._instance,
        o,
        g,
        p.ptr,
      )
      this._setInstance(d, p)
    })
  }
  clahe(n, e, o, g) {
    this.useExceptionPointer(p => {
      const d = n instanceof J ? n.multiply(this.width) : n,
        S = e instanceof J ? e.multiply(this.height) : e
      l._api._MagickImage_Clahe(this._instance, d, S, o, g, p)
    })
  }
  clone(n) {
    return ae._clone(this)._use(n)
  }
  colorAlpha(n) {
    if (!this.hasAlpha) return
    const e = ae.create()
    e.read(n, this.width, this.height),
      e.composite(this, _t.SrcOver, new he(0, 0)),
      (this._instance = e._instance)
  }
  compare(n, e, o) {
    return this.useExceptionPointer(g => {
      const p = this.valueOrDefault(o, K.Undefined)
      return l._api._MagickImage_CompareDistortion(
        this._instance,
        n._instance,
        e,
        p,
        g,
      )
    })
  }
  composite(n, e, o, g, p) {
    let d = 0,
      S = 0,
      D = _t.In,
      T = K.All,
      x = null
    e instanceof he ? ((d = e.x), (S = e.y)) : e !== void 0 && (D = e),
      o instanceof he
        ? ((d = o.x), (S = o.y))
        : typeof o == 'string'
        ? (x = o)
        : o !== void 0 && (T = o),
      typeof g == 'string' ? (x = g) : g !== void 0 && (T = g),
      p !== void 0 && (T = p),
      x !== null && this.setArtifact('compose:args', x),
      this.useExceptionPointer(_e => {
        l._api._MagickImage_Composite(
          this._instance,
          n._instance,
          d,
          S,
          D,
          T,
          _e,
        )
      }),
      x !== null && this.removeArtifact('compose:args')
  }
  compositeGravity(n, e, o, g, p, d) {
    let S = 0,
      D = 0,
      T = _t.In,
      x = K.All,
      _e = null
    o instanceof he ? ((S = o.x), (D = o.y)) : o !== void 0 && (T = o),
      g instanceof he
        ? ((S = g.x), (D = g.y))
        : typeof g == 'string'
        ? (_e = g)
        : g !== void 0 && (x = g),
      typeof p == 'string' ? (_e = p) : p !== void 0 && (x = p),
      d !== void 0 && (x = d),
      _e !== null && this.setArtifact('compose:args', _e),
      this.useExceptionPointer(De => {
        l._api._MagickImage_CompositeGravity(
          this._instance,
          n._instance,
          e,
          S,
          D,
          T,
          x,
          De,
        )
      }),
      _e !== null && this.removeArtifact('compose:args')
  }
  connectedComponents(n) {
    const e = typeof n == 'number' ? new Di(n) : n
    e._setArtifacts(this)
    const o = this.useException(g =>
      Se.use(p => {
        try {
          const d = l._api._MagickImage_ConnectedComponents(
            this._instance,
            e.connectivity,
            p.ptr,
            g.ptr,
          )
          return (
            this._setInstance(d, g),
            Rt._create(p.value, this.colormapSize)
          )
        } finally {
          p.value !== 0 &&
            l._api._ConnectedComponent_DisposeList(p.value)
        }
      }),
    )
    return e._removeArtifacts(this), o
  }
  contrast = () => this._contrast(!0)
  contrastStretch(n, e, o) {
    const g = this.width * this.height,
      p = n.multiply(g)
    let d = 0,
      S = this.valueOrDefault(o, K.Undefined)
    e instanceof J
      ? (d = g - e.multiply(g))
      : ((d = g - n.multiply(g)), e !== void 0 && (S = e)),
      this.useExceptionPointer(D => {
        l._api._MagickImage_ContrastStretch(this._instance, p, d, S, D)
      })
  }
  static create(n, e, o) {
    const g = new ae(ae.createInstance(), new Fe())
    return n !== void 0 && g.readOrPing(!1, n, e, o), g
  }
  crop(n, e, o) {
    let g, p
    typeof n != 'number'
      ? ((g = n), (p = this.valueOrDefault(e, ot.Undefined)))
      : e !== void 0 &&
        ((g = new se(n, e)),
        (p = this.valueOrDefault(o, ot.Undefined))),
      this.useException(d => {
        L(g.toString(), S => {
          const D = l._api._MagickImage_Crop(
            this._instance,
            S,
            p,
            d.ptr,
          )
          this._setInstance(D, d)
        })
      })
  }
  cropToTiles(n, e, o) {
    let g, p
    return (
      typeof n == 'number' && typeof e == 'number' && o !== void 0
        ? ((g = new se(0, 0, n, e)), (p = o))
        : typeof n != 'number' &&
          typeof e != 'number' &&
          ((g = n), (p = e)),
      this.useException(d =>
        L(g.toString(), S => {
          const D = l._api._MagickImage_CropToTiles(
            this._instance,
            S,
            d.ptr,
          )
          return ce._createFromImages(D, this._settings)._use(p)
        }),
      )
    )
  }
  deskew(n, e) {
    return mt.use(this, o => {
      e !== void 0 && o.setArtifact('deskew:auto-crop', e),
        this.useException(p => {
          const d = l._api._MagickImage_Deskew(
            this._instance,
            n._toQuantum(),
            p.ptr,
          )
          this._setInstance(d, p)
        })
      const g = Number(this.getArtifact('deskew:angle'))
      return isNaN(g) ? 0 : g
    })
  }
  distort(n, e) {
    mt.use(this, o => {
      let g,
        p = 0
      typeof n == 'number'
        ? (g = n)
        : ((g = n.method),
          (p = n.bestFit ? 1 : 0),
          n.scale !== void 0 &&
            o.setArtifact('distort:scale', n.scale.toString()),
          n.viewport !== void 0 &&
            o.setArtifact('distort:viewport', n.viewport.toString()))
      const d = e ?? []
      this.useException(S => {
        bi(d, D => {
          const T = l._api._MagickImage_Distort(
            this._instance,
            g,
            p,
            D,
            d.length,
            S.ptr,
          )
          this._setInstance(T, S)
        })
      })
    })
  }
  draw(...n) {
    const e = Pt._create(this, this._settings)
    try {
      e.draw(n.flat())
    } finally {
      e.dispose()
    }
  }
  evaluate(n, e, o, g) {
    if (typeof e == 'number') {
      const p = e,
        d = typeof o == 'number' ? o : o._toQuantum()
      this.useExceptionPointer(S => {
        l._api._MagickImage_EvaluateOperator(this._instance, n, p, d, S)
      })
    } else if (g !== void 0) {
      if (typeof o != 'number') throw new q('this should not happen')
      const p = e,
        d = o,
        S = typeof g == 'number' ? g : g._toQuantum()
      if (p.isPercentage) throw new q('percentage is not supported')
      this.useExceptionPointer(D => {
        vn.use(this, p, T => {
          l._api._MagickImage_EvaluateGeometry(
            this._instance,
            n,
            T,
            d,
            S,
            D,
          )
        })
      })
    }
  }
  extent(n, e, o) {
    let g = ot.Undefined,
      p
    typeof n != 'number'
      ? (p = n)
      : typeof e == 'number' && (p = new se(n, e)),
      typeof e == 'number'
        ? (g = e)
        : e !== void 0 && (this.backgroundColor = e),
      typeof o == 'number'
        ? (g = o)
        : o !== void 0 && (this.backgroundColor = o),
      this.useException(d => {
        L(p.toString(), S => {
          const D = l._api._MagickImage_Extent(
            this._instance,
            S,
            g,
            d.ptr,
          )
          this._setInstance(D, d)
        })
      })
  }
  flip() {
    this.useException(n => {
      const e = l._api._MagickImage_Flip(this._instance, n.ptr)
      this._setInstance(e, n)
    })
  }
  flop() {
    this.useException(n => {
      const e = l._api._MagickImage_Flop(this._instance, n.ptr)
      this._setInstance(e, n)
    })
  }
  getArtifact(n) {
    return L(n, e => {
      const o = l._api._MagickImage_GetArtifact(this._instance, e)
      return ue(o)
    })
  }
  getAttribute(n) {
    return this.useException(e =>
      L(n, o => {
        const g = l._api._MagickImage_GetAttribute(
          this._instance,
          o,
          e.ptr,
        )
        return ue(g)
      }),
    )
  }
  getPixels(n) {
    if (this._settings._ping)
      throw new q('image contains no pixel data')
    return He._use(this, n)
  }
  getProfile(n) {
    return L(n, e => {
      const o = l._api._MagickImage_GetProfile(this._instance, e),
        g = Ci.toArray(o)
      return g === null ? null : new Ri(n, g)
    })
  }
  getWriteMask(n) {
    const e = this.useExceptionPointer(g =>
        l._api._MagickImage_GetWriteMask(this._instance, g),
      ),
      o = e === 0 ? null : new ae(e, new Fe())
    return o == null ? n(o) : o._use(n)
  }
  grayscale(n = Tn.Undefined) {
    this.useExceptionPointer(e => {
      l._api._MagickImage_Grayscale(this._instance, n, e)
    })
  }
  histogram() {
    const n = /* @__PURE__ */ new Map()
    return (
      this.useExceptionPointer(e => {
        Se.use(o => {
          const g = l._api._MagickImage_Histogram(
            this._instance,
            o.ptr,
            e,
          )
          if (g !== 0) {
            const p = o.value
            for (let d = 0; d < p; d++) {
              const S = l._api._MagickColorCollection_GetInstance(g, d),
                D = h._create(S),
                T = l._api._MagickColor_Count_Get(S)
              n.set(D.toString(), T)
            }
            l._api._MagickColorCollection_DisposeList(g)
          }
        })
      }),
      n
    )
  }
  inverseContrast = () => this._contrast(!1)
  inverseLevel(n, e, o, g) {
    let p = K.Composite,
      d,
      S,
      D = this.valueOrDefault(g, 1)
    typeof n == 'number'
      ? ((p = n), (d = e), o instanceof J && (S = o))
      : ((d = n), (S = e), typeof o == 'number' && (D = o)),
      this.useExceptionPointer(T => {
        l._api._MagickImage_InverseLevel(
          this._instance,
          d.toDouble(),
          S._toQuantum(),
          D,
          p,
          T,
        )
      })
  }
  inverseOpaque = (n, e) => this._opaque(n, e, !0)
  inverseSigmoidalContrast(n, e, o) {
    this._sigmoidalContrast(!1, n, e, o)
  }
  inverseTransparent = n => this._transparent(n, !0)
  level(n, e, o, g) {
    let p = K.Composite,
      d,
      S,
      D = this.valueOrDefault(g, 1)
    typeof n == 'number'
      ? ((p = n), (d = e), o instanceof J && (S = o))
      : ((d = n), (S = e), typeof o == 'number' && (D = o)),
      this.useExceptionPointer(T => {
        l._api._MagickImage_Level(
          this._instance,
          d.toDouble(),
          S._toQuantum(),
          D,
          p,
          T,
        )
      })
  }
  linearStretch(n, e) {
    this.useExceptionPointer(o => {
      l._api._MagickImage_LinearStretch(
        this._instance,
        n.toDouble(),
        e._toQuantum(),
        o,
      )
    })
  }
  liquidRescale(n, e) {
    const o = typeof n == 'number' ? new se(n, e) : n
    this.useException(g => {
      L(o.toString(), p => {
        const d = l._api._MagickImage_LiquidRescale(
          this._instance,
          p,
          o.x,
          o.y,
          g.ptr,
        )
        this._setInstance(d, g)
      })
    })
  }
  negate(n) {
    this.useExceptionPointer(e => {
      const o = this.valueOrDefault(n, K.Undefined)
      l._api._MagickImage_Negate(this._instance, 0, o, e)
    })
  }
  negateGrayScale(n) {
    this.useExceptionPointer(e => {
      const o = this.valueOrDefault(n, K.Undefined)
      l._api._MagickImage_Negate(this._instance, 1, o, e)
    })
  }
  normalize() {
    this.useExceptionPointer(n => {
      l._api._MagickImage_Normalize(this._instance, n)
    })
  }
  modulate(n, e, o) {
    const g = this.valueOrDefault(e, new J(100)),
      p = this.valueOrDefault(o, new J(100))
    this.useExceptionPointer(d => {
      const S = `${n.toDouble()}/${g.toDouble()}/${p.toDouble()}`
      L(S, D => {
        l._api._MagickImage_Modulate(this._instance, D, d)
      })
    })
  }
  morphology(n) {
    this.useException(e => {
      L(n.kernel, o => {
        const g = l._api._MagickImage_Morphology(
          this._instance,
          n.method,
          o,
          n.channels,
          n.iterations,
          e.ptr,
        )
        this._setInstance(g, e)
      })
    })
  }
  motionBlur(n, e, o) {
    this.useException(g => {
      const p = l._api._MagickImage_MotionBlur(
        this._instance,
        n,
        e,
        o,
        g.ptr,
      )
      this._setInstance(p, g)
    })
  }
  oilPaint(n) {
    const e = this.valueOrDefault(n, 3),
      o = 0
    this.useException(g => {
      const p = l._api._MagickImage_OilPaint(
        this._instance,
        e,
        o,
        g.ptr,
      )
      this._setInstance(p, g)
    })
  }
  opaque = (n, e) => this._opaque(n, e, !1)
  ping(n, e) {
    this.readOrPing(!0, n, e)
  }
  quantize(n) {
    this.useException(e => {
      n._use(o => {
        l._api._MagickImage_Quantize(this._instance, o._instance, e.ptr)
      })
    })
  }
  read(n, e, o) {
    this.readOrPing(!1, n, e, o)
  }
  readFromCanvas(n, e) {
    const o = n.getContext('2d', e)
    if (o === null) return
    const g = o.getImageData(0, 0, n.width, n.height),
      p = new Ie()
    ;(p.format = ve.Rgba),
      (p.width = n.width),
      (p.height = n.height),
      this.useException(d => {
        this.readFromArray(g.data, p, d)
      })
  }
  removeArtifact(n) {
    L(n, e => {
      l._api._MagickImage_RemoveArtifact(this._instance, e)
    })
  }
  removeAttribute(n) {
    L(n, e => {
      l._api._MagickImage_RemoveAttribute(this._instance, e)
    })
  }
  removeProfile(n) {
    const e = typeof n == 'string' ? n : n.name
    L(e, o => {
      l._api._MagickImage_RemoveProfile(this._instance, o)
    })
  }
  removeWriteMask() {
    this.useExceptionPointer(n => {
      l._api._MagickImage_SetWriteMask(this._instance, 0, n)
    })
  }
  repage() {
    this.page = new se(0, 0, 0, 0)
  }
  resize(n, e) {
    const o = typeof n == 'number' ? new se(n, e) : n
    this.useException(g => {
      L(o.toString(), p => {
        const d = l._api._MagickImage_Resize(this._instance, p, g.ptr)
        this._setInstance(d, g)
      })
    })
  }
  rotate(n) {
    this.useException(e => {
      const o = l._api._MagickImage_Rotate(this._instance, n, e.ptr)
      this._setInstance(o, e)
    })
  }
  separate(n, e) {
    return this.useException(o => {
      let g,
        p = K.Undefined
      if (typeof n == 'number' && e !== void 0) (p = n), (g = e)
      else if (typeof n == 'function') g = n
      else throw new q('invalid arguments')
      const d = l._api._MagickImage_Separate(this._instance, p, o.ptr)
      return ce._createFromImages(d, this._settings)._use(g)
    })
  }
  sepiaTone(n = new J(80)) {
    this.useException(e => {
      const o = typeof n == 'number' ? new J(n) : n,
        g = l._api._MagickImage_SepiaTone(
          this._instance,
          o._toQuantum(),
          e.ptr,
        )
      this._setInstance(g, e)
    })
  }
  setArtifact(n, e) {
    let o
    typeof e == 'string' ? (o = e) : (o = this.fromBool(e).toString()),
      L(n, g => {
        L(o, p => {
          l._api._MagickImage_SetArtifact(this._instance, g, p)
        })
      })
  }
  setAttribute(n, e) {
    this.useException(o => {
      L(n, g => {
        L(e, p => {
          l._api._MagickImage_SetAttribute(this._instance, g, p, o.ptr)
        })
      })
    })
  }
  setProfile(n, e) {
    const o = typeof n == 'string' ? n : n.name
    let g
    e !== void 0 ? (g = e) : typeof n != 'string' && (g = n.data),
      this.useException(p => {
        L(o, d => {
          Dn(g, S => {
            l._api._MagickImage_SetProfile(
              this._instance,
              d,
              S,
              g.byteLength,
              p.ptr,
            )
          })
        })
      })
  }
  setWriteMask(n) {
    this.useExceptionPointer(e => {
      l._api._MagickImage_SetWriteMask(this._instance, n._instance, e)
    })
  }
  sharpen(n, e, o) {
    const g = this.valueOrDefault(n, 0),
      p = this.valueOrDefault(e, 1),
      d = this.valueOrDefault(o, K.Undefined)
    this.useException(S => {
      const D = l._api._MagickImage_Sharpen(
        this._instance,
        g,
        p,
        d,
        S.ptr,
      )
      this._setInstance(D, S)
    })
  }
  shave(n, e) {
    this.useException(o => {
      const g = l._api._MagickImage_Shave(this._instance, n, e, o.ptr)
      this._setInstance(g, o)
    })
  }
  sigmoidalContrast(n, e, o) {
    this._sigmoidalContrast(!0, n, e, o)
  }
  solarize(n = new J(50)) {
    this.useException(e => {
      const o = typeof n == 'number' ? new J(n) : n
      l._api._MagickImage_Solarize(
        this._instance,
        o._toQuantum(),
        e.ptr,
      )
    })
  }
  splice(n) {
    vn.use(this, n, e => {
      this.useException(o => {
        const g = l._api._MagickImage_Splice(this._instance, e, o.ptr)
        this._setInstance(g, o)
      })
    })
  }
  statistics(n) {
    const e = this.valueOrDefault(n, K.All)
    return this.useExceptionPointer(o => {
      const g = l._api._MagickImage_Statistics(this._instance, e, o),
        p = Tt._create(this, g, e)
      return l._api._Statistics_DisposeList(g), p
    })
  }
  strip() {
    this.useExceptionPointer(n => {
      l._api._MagickImage_Strip(this._instance, n)
    })
  }
  threshold(n, e) {
    const o = this.valueOrDefault(e, K.Undefined)
    this.useExceptionPointer(g => {
      l._api._MagickImage_Threshold(
        this._instance,
        n._toQuantum(),
        o,
        g,
      )
    })
  }
  toString = () =>
    `${this.format} ${this.width}x${this.height} ${this.depth}-bit ${
      Et[this.colorSpace]
    }`
  transparent(n) {
    n._use(e => {
      this.useExceptionPointer(o => {
        l._api._MagickImage_Transparent(this._instance, e, 0, o)
      })
    })
  }
  trim(...n) {
    if (n.length > 0)
      if (n.length == 1 && n[0] instanceof J) {
        const e = n[0]
        this.setArtifact(
          'trim:percent-background',
          e.toDouble().toString(),
        )
      } else {
        const e = n,
          o = [...new Set(Ei(e))].join(',')
        this.setArtifact('trim:edges', o)
      }
    this.useException(e => {
      const o = l._api._MagickImage_Trim(this._instance, e.ptr)
      this._setInstance(o, e),
        this.removeArtifact('trim:edges'),
        this.removeArtifact('trim:percent-background')
    })
  }
  wave(n, e, o) {
    const g = this.valueOrDefault(n, this.interpolate),
      p = this.valueOrDefault(e, 25),
      d = this.valueOrDefault(o, 150)
    this.useException(S => {
      const D = l._api._MagickImage_Wave(this._instance, g, p, d, S.ptr)
      this._setInstance(D, S)
    })
  }
  vignette(n, e, o, g) {
    const p = this.valueOrDefault(n, 0),
      d = this.valueOrDefault(e, 1),
      S = this.valueOrDefault(o, 0),
      D = this.valueOrDefault(g, 0)
    this.useException(T => {
      const x = l._api._MagickImage_Vignette(
        this._instance,
        p,
        d,
        S,
        D,
        T.ptr,
      )
      this._setInstance(x, T)
    })
  }
  write(n, e) {
    let o = 0,
      g = 0
    e !== void 0 ? (this._settings.format = n) : (e = n),
      this.useException(d => {
        Se.use(S => {
          this._settings._use(D => {
            try {
              ;(o = l._api._MagickImage_WriteBlob(
                this._instance,
                D._instance,
                S.ptr,
                d.ptr,
              )),
                (g = S.value)
            } catch {
              o !== 0 && (o = l._api._MagickMemory_Relinquish(o))
            }
          })
        })
      })
    const p = new bn(o, g, e)
    return ie._disposeAfterExecution(p, p.func)
  }
  writeToCanvas(n) {
    ;(n.width = this.width), (n.height = this.height)
    const e = n.getContext('2d')
    e !== null &&
      He._map(this, 'RGBA', o => {
        const g = e.createImageData(this.width, this.height)
        let p = 0
        for (let d = 0; d < this.height; d++)
          for (let S = 0; S < this.width; S++)
            (g.data[p++] = l._api.HEAPU8[o++]),
              (g.data[p++] = l._api.HEAPU8[o++]),
              (g.data[p++] = l._api.HEAPU8[o++]),
              (g.data[p++] = l._api.HEAPU8[o++])
        e.putImageData(g, 0, 0)
      })
  }
  /** @internal */
  static _createFromImage(n, e) {
    return new ae(n, e)
  }
  /** @internal */
  _channelOffset(n) {
    return l._api._MagickImage_HasChannel(this._instance, n)
      ? l._api._MagickImage_ChannelOffset(this._instance, n)
      : -1
  }
  /** @internal */
  static _clone(n) {
    return P.usePointer(
      e =>
        new ae(
          l._api._MagickImage_Clone(n._instance, e),
          n._settings._clone(),
        ),
    )
  }
  /** @internal */
  _getSettings() {
    return this._settings
  }
  /** @internal */
  _instanceNotInitialized() {
    throw new q('no image has been read')
  }
  _use(n) {
    return ie._disposeAfterExecution(this, n)
  }
  static _create(n) {
    return ae.create()._use(n)
  }
  onDispose() {
    this.disposeProgressDelegate()
  }
  _contrast(n) {
    this.useExceptionPointer(e => {
      l._api._MagickImage_Contrast(this._instance, this.fromBool(n), e)
    })
  }
  _opaque(n, e, o) {
    this.useExceptionPointer(g => {
      n._use(p => {
        e._use(d => {
          l._api._MagickImage_Opaque(
            this._instance,
            p,
            d,
            this.fromBool(o),
            g,
          )
        })
      })
    })
  }
  _sigmoidalContrast(n, e, o, g) {
    let p
    o !== void 0
      ? typeof o == 'number'
        ? (p = o)
        : (p = o.multiply(Te.max))
      : (p = Te.max * 0.5)
    const d = this.valueOrDefault(g, K.Undefined)
    this.useExceptionPointer(S => {
      l._api._MagickImage_SigmoidalContrast(
        this._instance,
        this.fromBool(n),
        e,
        p,
        d,
        S,
      )
    })
  }
  _transparent(n, e) {
    n._use(o => {
      this.useExceptionPointer(g => {
        l._api._MagickImage_Transparent(
          this._instance,
          o,
          this.fromBool(e),
          g,
        )
      })
    })
  }
  static createInstance() {
    return P.usePointer(n => l._api._MagickImage_Create(0, n))
  }
  fromBool(n) {
    return n ? 1 : 0
  }
  disposeProgressDelegate() {
    O.removeProgressDelegate(this), (this._progress = void 0)
  }
  readOrPing(n, e, o, g) {
    this.useException(p => {
      const d = o instanceof Ie ? o : new Ie(this._settings)
      if (
        ((d._ping = n),
        (this._settings._ping = n),
        typeof e == 'string')
      )
        d._fileName = e
      else if (An(e)) {
        this.readFromArray(e, d, p)
        return
      } else
        (d._fileName = 'xc:' + e.toShortString()),
          (d.width = typeof o == 'number' ? o : 0),
          (d.height = typeof g == 'number' ? g : 0)
      d._use(S => {
        const D = l._api._MagickImage_ReadFile(S._instance, p.ptr)
        this._setInstance(D, p)
      })
    })
  }
  readFromArray(n, e, o) {
    e._use(g => {
      Dn(n, p => {
        const d = l._api._MagickImage_ReadBlob(
          g._instance,
          p,
          0,
          n.byteLength,
          o.ptr,
        )
        this._setInstance(d, o)
      })
    })
  }
  toBool(n) {
    return n === 1
  }
  valueOrDefault(n, e) {
    return n === void 0 ? e : n
  }
  useException(n) {
    return P.use(
      e => n(e),
      e => {
        this.onWarning !== void 0 && this.onWarning(new Gn(e))
      },
    )
  }
  useExceptionPointer(n) {
    return P.usePointer(
      e => n(e),
      e => {
        this.onWarning !== void 0 && this.onWarning(new Gn(e))
      },
    )
  }
}
class Wi {
  constructor(n) {
    if (n instanceof URL) {
      if (n.protocol !== 'http:' && n.protocol !== 'https:')
        throw new Error('Only http/https protocol is supported')
      this.locateFile = () => n.href
    } else
      n instanceof WebAssembly.Module
        ? (this.instantiateWasm = (e, o) => {
            const g = new WebAssembly.Instance(n, e)
            o(g)
          })
        : (this.wasmBinary = n)
  }
  wasmBinary
  instantiateWasm
  locateFile
}
class l {
  loader
  api
  /** @internal */
  constructor() {
    this.loader = (n, e) =>
      new Promise((o, g) => {
        if (this.api !== void 0) {
          o()
          return
        }
        const p = new Wi(n)
        Ii(p).then(d => {
          try {
            this.writeConfigurationFiles(d, e),
              Dt(d, 'MAGICK_CONFIGURE_PATH', S => {
                Dt(d, '/xml', D => {
                  d._Environment_SetEnv(S, D), (this.api = d), o()
                })
              })
          } catch (S) {
            g(S)
          }
        })
      })
  }
  /** @internal */
  async _initialize(n, e) {
    await this.loader(n, e)
  }
  /** @internal */
  static get _api() {
    if (!ct.api)
      throw new q(
        '`await initializeImageMagick` should be called to initialize the library',
      )
    return ct.api
  }
  /** @internal */
  static set _api(n) {
    ct.api = n
  }
  static read(n, e, o, g) {
    return ae._create(p => {
      let d = g
      if (typeof n != 'string' && !An(n))
        typeof e == 'number' && typeof o == 'number' && p.read(n, e, o)
      else if (typeof e != 'number' && typeof o != 'number') {
        d = o
        let S
        e instanceof Ie
          ? (S = e)
          : typeof e == 'string'
          ? ((S = new Ie()), (S.format = e))
          : (d = e),
          p.read(n, S)
      }
      return d(p)
    })
  }
  static readCollection(n, e, o) {
    return ce.create()._use(p => {
      let d = o,
        S
      return (
        e instanceof Ie
          ? (S = e)
          : typeof e == 'string'
          ? ((S = new Ie()), (S.format = e))
          : (d = e),
        p.read(n, S),
        d(p)
      )
    })
  }
  static readFromCanvas(n, e, o) {
    return ae._create(g => (g.readFromCanvas(n, o), e(g)))
  }
  writeConfigurationFiles(n, e) {
    n.FS.analyzePath('/xml').exists || n.FS.mkdir('/xml')
    for (const g of e.all()) {
      const p = n.FS.open(`/xml/${g.fileName}`, 'w'),
        d = new TextEncoder().encode(g.data)
      n.FS.write(p, d, 0, d.length), n.FS.close(p)
    }
  }
}
const ct = new l()
async function cs(t, n) {
  await ct._initialize(t, n ?? At.default)
}
class Bi {
  /** @internal */
  constructor(n, e, o) {
    ;(this.origin = n), (this.progress = new J((e + 1) / (o * 100)))
  }
  /**
   * Gets the originator of this event.
   */
  origin
  /**
   * Gets the progress percentage.
   */
  progress
  /**
   * Gets or sets a value indicating whether the current operation will be canceled.
   */
  cancel = !1
}
class O {
  static _logDelegate = 0
  static _onLog
  static _progressDelegate = 0
  static _images = {}
  static setLogDelegate(n) {
    O._logDelegate === 0 &&
      n !== void 0 &&
      (O._logDelegate = l._api.addFunction(O.logDelegate, 'vii')),
      l._api._Magick_SetLogDelegate(n === void 0 ? 0 : O._logDelegate),
      (O._onLog = n)
  }
  static setProgressDelegate(n) {
    O._progressDelegate === 0 &&
      (this._progressDelegate = l._api.addFunction(
        O.progressDelegate,
        'iijji',
      )),
      (this._images[n._instance] = n),
      l._api._MagickImage_SetClientData(n._instance, n._instance),
      l._api._MagickImage_SetProgressDelegate(
        n._instance,
        O._progressDelegate,
      )
  }
  static removeProgressDelegate(n) {
    l._api._MagickImage_SetClientData(n._instance, 0),
      l._api._MagickImage_SetProgressDelegate(n._instance, 0),
      delete O._images[n._instance]
  }
  static logDelegate(n, e) {
    if (O._onLog === void 0) return
    const o = ue(e)
    O._onLog(new Mi(n, o))
  }
  static progressDelegate(n, e, o, g) {
    const p = O._images[g]
    if (p === void 0 || p.onProgress === void 0) return 1
    const d = Number(e),
      S = Number(o),
      D = ue(n),
      T = new Bi(D, d, S)
    return p.onProgress(T), T.cancel ? 0 : 1
  }
}
class Me {
  static _allFormats
  constructor(n, e, o, g, p) {
    ;(this.format = n),
      (this.description = e),
      (this.supportsMultipleFrames = o),
      (this.supportsReading = g),
      (this.supportsWriting = p)
  }
  description
  format
  supportsMultipleFrames
  supportsReading
  supportsWriting
  static get all() {
    return (
      Me._allFormats === void 0 && (Me._allFormats = Me.loadFormats()),
      Me._allFormats
    )
  }
  static loadFormats() {
    return P.usePointer(n =>
      Se.use(e => {
        const o = l._api._MagickFormatInfo_CreateList(e.ptr, n),
          g = e.value
        try {
          const p = new Array(g),
            d = Object.values(ve)
          for (let S = 0; S < g; S++) {
            const D = l._api._MagickFormatInfo_GetInfo(o, S, n),
              T = ue(l._api._MagickFormatInfo_Format_Get(D)),
              x = Me.convertFormat(T, d),
              _e = ue(l._api._MagickFormatInfo_Description_Get(D), ''),
              De =
                l._api._MagickFormatInfo_SupportsMultipleFrames_Get(
                  D,
                ) == 1,
              We = l._api._MagickFormatInfo_SupportsReading_Get(D) == 1,
              Ye = l._api._MagickFormatInfo_SupportsWriting_Get(D) == 1
            p[S] = new Me(x, _e, De, We, Ye)
          }
          return p
        } finally {
          l._api._MagickFormatInfo_DisposeList(o, g)
        }
      }),
    )
  }
  static convertFormat(n, e) {
    return n === null ? ve.Unknown : e.includes(n) ? n : ve.Unknown
  }
}
var X = /* @__PURE__ */ (t => (
  (t[(t.None = 0)] = 'None'),
  (t[(t.Accelerate = 1)] = 'Accelerate'),
  (t[(t.Annotate = 2)] = 'Annotate'),
  (t[(t.Blob = 4)] = 'Blob'),
  (t[(t.Cache = 8)] = 'Cache'),
  (t[(t.Coder = 16)] = 'Coder'),
  (t[(t.Configure = 32)] = 'Configure'),
  (t[(t.Deprecate = 64)] = 'Deprecate'),
  (t[(t.Draw = 128)] = 'Draw'),
  (t[(t.Exception = 256)] = 'Exception'),
  (t[(t.Image = 512)] = 'Image'),
  (t[(t.Locale = 1024)] = 'Locale'),
  (t[(t.Module = 2048)] = 'Module'),
  (t[(t.Pixel = 4096)] = 'Pixel'),
  (t[(t.Policy = 8192)] = 'Policy'),
  (t[(t.Resource = 16384)] = 'Resource'),
  (t[(t.Trace = 32768)] = 'Trace'),
  (t[(t.Transform = 65536)] = 'Transform'),
  (t[(t.User = 131072)] = 'User'),
  (t[(t.Wand = 262144)] = 'Wand'),
  (t[(t.Detailed = 2147450879)] = 'Detailed'),
  (t[(t.All = 2147483647)] = 'All'),
  t
))(X || {})
class ye {
  /**
   * Gets the ImageMagick delegate libraries.
   */
  static get delegates() {
    return ue(l._api._Magick_Delegates_Get())
  }
  /**
   * Gets the ImageMagick features.
   */
  static get features() {
    return ue(l._api._Magick_Features_Get()).slice(0, -1)
  }
  /**
   * Gets the ImageMagick version.
   */
  static get imageMagickVersion() {
    return ue(l._api._Magick_ImageMagickVersion_Get())
  }
  /**
   * Gets information about the supported formats.
   */
  static get supportedFormats() {
    return Me.all
  }
  /**
   * Function that will be executed when something is logged by ImageMagick.
   */
  static onLog
  /**
   * Registers a font.
   * @param name - The name of the font.
   * @param data - The byte array containing the font.
   */
  static addFont(n, e) {
    const o = l._api.FS
    o.analyzePath('/fonts').exists || o.mkdir('/fonts')
    const p = o.open(`/fonts/${n}`, 'w')
    o.write(p, e, 0, e.length), o.close(p)
  }
  /**
   * Sets the pseudo-random number generator secret key.
   * @param seed - The secret key.
   */
  static setRandomSeed = n => l._api._Magick_SetRandomSeed(n)
  /**
   * Set the events that will be written to the log. The log will be written to the Log event
   * and the debug window in VisualStudio. To change the log settings you must use a custom
   * log.xml file.
   * @param eventTypes - The events that should be logged.
   */
  static setLogEvents(n) {
    const e = n == X.None ? void 0 : ye.logDelegate
    O.setLogDelegate(e)
    const o = ye.getEventTypeString(n)
    L(o, g => l._api._Magick_SetLogEvents(g))
  }
  /** @internal */
  static _getFontFileName(n) {
    const e = `/fonts/${n}`
    if (!l._api.FS.analyzePath(e).exists)
      throw `Unable to find a font with the name '${n}', add it with Magick.addFont.`
    return e
  }
  static getEventTypeString(n) {
    if (n == X.All) return 'All,Trace'
    if (n == X.Detailed) return 'All'
    switch (n) {
      case X.Accelerate:
        return 'Accelerate'
      case X.Annotate:
        return 'Annotate'
      case X.Blob:
        return 'Blob'
      case X.Cache:
        return 'Cache'
      case X.Coder:
        return 'Coder'
      case X.Configure:
        return 'Configure'
      case X.Deprecate:
        return 'Deprecate'
      case X.Draw:
        return 'Draw'
      case X.Exception:
        return 'Exception'
      case X.Image:
        return 'Image'
      case X.Locale:
        return 'Locale'
      case X.Module:
        return 'Module'
      case X.Pixel:
        return 'Pixel'
      case X.Policy:
        return 'Policy'
      case X.Resource:
        return 'Resource'
      case X.Trace:
        return 'Trace'
      case X.Transform:
        return 'Transform'
      case X.User:
        return 'User'
      case X.Wand:
        return 'Wand'
      case X.None:
      default:
        return 'None'
    }
  }
  static logDelegate(n) {
    ye.onLog !== void 0 && ye.onLog(n)
  }
}
class gs {
  _font
  /**
   * Initializes a new instance of the {@link DrawableFont} class.
   * @param opacity - The name of the font that was registered.
   */
  constructor(n) {
    this._font = n
  }
  draw(n) {
    const e = ye._getFontFileName(this._font)
    n.font(e)
  }
}
class ms {
  _gravity
  /**
   * Initializes a new instance of the {@link DrawableGravity} class.
   * @param gravity - The gravity to use.
   */
  constructor(n) {
    this._gravity = n
  }
  draw(n) {
    n.gravity(this._gravity)
  }
}
class fs {
  _startX
  _startY
  _endX
  _endY
  /**
   * Initializes a new instance of the {@link DrawableLine} class.
   * @param startX - The starting X coordinate.
   * @param startY - The starting Y coordinate.
   * @param endX - The ending X coordinate.
   * @param endY - The ending Y coordinate.
   */
  constructor(n, e, o, g) {
    ;(this._startX = n),
      (this._startY = e),
      (this._endX = o),
      (this._endY = g)
  }
  draw(n) {
    n.line(this._startX, this._startY, this._endX, this._endY)
  }
}
class ps {
  _x
  _y
  /**
   * Initializes a new instance of the {@link DrawablePoint} class.
   * @param x - The X coordinate.
   * @param y - The X coordinate.
   */
  constructor(n, e) {
    ;(this._x = n), (this._y = e)
  }
  draw(n) {
    n.point(this._x, this._y)
  }
}
class ds {
  _upperLeftX
  _upperLeftY
  _lowerRightX
  _lowerRightY
  /**
   * Initializes a new instance of the {@link DrawablePoint} class.
   * @param upperLeftX - The upper left X coordinate.
   * @param upperLeftY - The upper left Y coordinate.
   * @param lowerRightX - The lower right X coordinate.
   * @param lowerRightY - The lower right Y coordinate.
   */
  constructor(n, e, o, g) {
    ;(this._upperLeftX = n),
      (this._upperLeftY = e),
      (this._lowerRightX = o),
      (this._lowerRightY = g)
  }
  draw(n) {
    n.rectangle(
      this._upperLeftX,
      this._upperLeftY,
      this._lowerRightX,
      this._lowerRightY,
    )
  }
}
class hs {
  _upperLeftX
  _upperLeftY
  _lowerRightX
  _lowerRightY
  _cornerWidth
  _cornerHeight
  /**
   * Initializes a new instance of the {@link DrawableRoundRectangle} class.
   * @param upperLeftX - The upper left X coordinate.
   * @param upperLeftY- The upper left Y coordinate.
   * @param lowerRightX - The lower right X coordinate.
   * @param lowerRightY - The lower right Y coordinate.
   * @param cornerWidth - The corner width.
   * @param cornerHeight - The corner height.
   */
  constructor(n, e, o, g, p, d) {
    ;(this._upperLeftX = n),
      (this._upperLeftY = e),
      (this._lowerRightX = o),
      (this._lowerRightY = g),
      (this._cornerWidth = p),
      (this._cornerHeight = d)
  }
  draw(n) {
    n.roundRectangle(
      this._upperLeftX,
      this._upperLeftY,
      this._lowerRightX,
      this._lowerRightY,
      this._cornerWidth,
      this._cornerHeight,
    )
  }
}
class ys {
  _color
  /**
   * Initializes a new instance of the {@link DrawableStrokeColor} class.
   * @param color - The color to use.
   */
  constructor(n) {
    this._color = n
  }
  draw(n) {
    n.strokeColor(this._color)
  }
}
class Ss {
  _width
  /**
   * Initializes a new instance of the {@link DrawableStrokeWidth} class.
   * @param width - The width.
   */
  constructor(n) {
    this._width = n
  }
  draw(n) {
    n.strokeWidth(this._width)
  }
}
class ks {
  _alignment
  /**
   * Initializes a new instance of the {@link DrawableFillColor} class.
   * @param color - The text alignment
   */
  constructor(n) {
    this._alignment = n
  }
  draw(n) {
    n.textAlignment(this._alignment)
  }
}
class Gt {
  _isEnabled
  constructor(n) {
    this._isEnabled = n
  }
  /**
   * Initializes a new instance of the {@link DrawableTextAntialias} class with antialias disabled.
   */
  static get Disabled() {
    return new Gt(!1)
  }
  /**
   * Initializes a new instance of the {@link DrawableTextAntialias} class with antialias enabled.
   */
  static get Enabled() {
    return new Gt(!0)
  }
  draw(n) {
    n.textAntialias(this._isEnabled)
  }
}
class ws {
  _decoration
  /**
   * Initializes a new instance of the {@link DrawableTextDecoration} class.
   * @param decoration - The text decoration.
   */
  constructor(n) {
    this._decoration = n
  }
  draw(n) {
    n.textDecoration(this._decoration)
  }
}
class Ms {
  _spacing
  /**
   * Initializes a new instance of the {@link DrawableTextInterlineSpacing} class.
   * @param decoration - The spacing to use.
   */
  constructor(n) {
    this._spacing = n
  }
  draw(n) {
    n.textInterlineSpacing(this._spacing)
  }
}
class Is {
  _spacing
  /**
   * Initializes a new instance of the {@link DrawableTextInterwordSpacing} class.
   * @param decoration - The spacing to use.
   */
  constructor(n) {
    this._spacing = n
  }
  draw(n) {
    n.textInterwordspacing(this._spacing)
  }
}
class vs {
  _kerning
  /**
   * Initializes a new instance of the {@link DrawableTextKerning} class.
   * @param decoration - The kerning to use.
   */
  constructor(n) {
    this._kerning = n
  }
  draw(n) {
    n.textKerning(this._kerning)
  }
}
class Ds {
  _color
  /**
   * Initializes a new instance of the {@link DrawableTextUnderColor} class.
   * @param decoration - The color to use.
   */
  constructor(n) {
    this._color = n
  }
  draw(n) {
    n.textUnderColor(this._color)
  }
}
class Gs {
  _x
  _y
  _value
  /**
   * Initializes a new instance of the {@link DrawableTextUnderColor} class.
   * @param x - The X coordinate.
   * @param y - The Y coordinate.
   * @param value - The text to draw.
   */
  constructor(n, e, o) {
    ;(this._x = n), (this._y = e), (this._value = o)
  }
  draw(n) {
    n.text(this._x, this._y, this._value)
  }
}
var Li = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Kapur = 1)] = 'Kapur'),
    (t[(t.OTSU = 2)] = 'OTSU'),
    (t[(t.Triangle = 3)] = 'Triangle'),
    t
  ))(Li || {}),
  Ni = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Direct = 1)] = 'Direct'),
    (t[(t.Pseudo = 2)] = 'Pseudo'),
    t
  ))(Ni || {}),
  xi = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Bilevel = 1)] = 'Bilevel'),
    (t[(t.Grayscale = 2)] = 'Grayscale'),
    (t[(t.GrayscaleAlpha = 3)] = 'GrayscaleAlpha'),
    (t[(t.Palette = 4)] = 'Palette'),
    (t[(t.PaletteAlpha = 5)] = 'PaletteAlpha'),
    (t[(t.TrueColor = 6)] = 'TrueColor'),
    (t[(t.TrueColorAlpha = 7)] = 'TrueColorAlpha'),
    (t[(t.ColorSeparation = 8)] = 'ColorSeparation'),
    (t[(t.ColorSeparationAlpha = 9)] = 'ColorSeparationAlpha'),
    (t[(t.Optimize = 10)] = 'Optimize'),
    (t[(t.PaletteBilevelAlpha = 11)] = 'PaletteBilevelAlpha'),
    t
  ))(xi || {}),
  zi = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.B44A = 1)] = 'B44A'),
    (t[(t.B44 = 2)] = 'B44'),
    (t[(t.BZip = 3)] = 'BZip'),
    (t[(t.DXT1 = 4)] = 'DXT1'),
    (t[(t.DXT3 = 5)] = 'DXT3'),
    (t[(t.DXT5 = 6)] = 'DXT5'),
    (t[(t.Fax = 7)] = 'Fax'),
    (t[(t.Group4 = 8)] = 'Group4'),
    (t[(t.JBIG1 = 9)] = 'JBIG1'),
    (t[(t.JBIG2 = 10)] = 'JBIG2'),
    (t[(t.JPEG2000 = 11)] = 'JPEG2000'),
    (t[(t.JPEG = 12)] = 'JPEG'),
    (t[(t.LosslessJPEG = 13)] = 'LosslessJPEG'),
    (t[(t.LZMA = 14)] = 'LZMA'),
    (t[(t.LZW = 15)] = 'LZW'),
    (t[(t.NoCompression = 16)] = 'NoCompression'),
    (t[(t.Piz = 17)] = 'Piz'),
    (t[(t.Pxr24 = 18)] = 'Pxr24'),
    (t[(t.RLE = 19)] = 'RLE'),
    (t[(t.Zip = 20)] = 'Zip'),
    (t[(t.ZipS = 21)] = 'ZipS'),
    (t[(t.Zstd = 22)] = 'Zstd'),
    (t[(t.WebP = 23)] = 'WebP'),
    (t[(t.DWAA = 24)] = 'DWAA'),
    (t[(t.DWAB = 25)] = 'DWAB'),
    (t[(t.BC7 = 26)] = 'BC7'),
    (t[(t.BC5 = 27)] = 'BC5'),
    t
  ))(zi || {}),
  Ui = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Affine = 1)] = 'Affine'),
    (t[(t.AffineProjection = 2)] = 'AffineProjection'),
    (t[(t.ScaleRotateTranslate = 3)] = 'ScaleRotateTranslate'),
    (t[(t.Perspective = 4)] = 'Perspective'),
    (t[(t.PerspectiveProjection = 5)] = 'PerspectiveProjection'),
    (t[(t.BilinearForward = 6)] = 'BilinearForward'),
    (t[(t.BilinearReverse = 7)] = 'BilinearReverse'),
    (t[(t.Polynomial = 8)] = 'Polynomial'),
    (t[(t.Arc = 9)] = 'Arc'),
    (t[(t.Polar = 10)] = 'Polar'),
    (t[(t.DePolar = 11)] = 'DePolar'),
    (t[(t.Cylinder2Plane = 12)] = 'Cylinder2Plane'),
    (t[(t.Plane2Cylinder = 13)] = 'Plane2Cylinder'),
    (t[(t.Barrel = 14)] = 'Barrel'),
    (t[(t.BarrelInverse = 15)] = 'BarrelInverse'),
    (t[(t.Shepards = 16)] = 'Shepards'),
    (t[(t.Resize = 17)] = 'Resize'),
    (t[(t.Sentinel = 18)] = 'Sentinel'),
    (t[(t.RigidAffine = 19)] = 'RigidAffine'),
    t
  ))(Ui || {}),
  Ct = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.No = 1)] = 'No'),
    (t[(t.Riemersma = 2)] = 'Riemersma'),
    (t[(t.FloydSteinberg = 3)] = 'FloydSteinberg'),
    t
  ))(Ct || {}),
  Hi = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.LSB = 1)] = 'LSB'),
    (t[(t.MSB = 2)] = 'MSB'),
    t
  ))(Hi || {}),
  Fi = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Absolute = 1)] = 'Absolute'),
    (t[(t.Fuzz = 2)] = 'Fuzz'),
    (t[(t.MeanAbsolute = 3)] = 'MeanAbsolute'),
    (t[(t.MeanErrorPerPixel = 4)] = 'MeanErrorPerPixel'),
    (t[(t.MeanSquared = 5)] = 'MeanSquared'),
    (t[(t.NormalizedCrossCorrelation = 6)] =
      'NormalizedCrossCorrelation'),
    (t[(t.PeakAbsolute = 7)] = 'PeakAbsolute'),
    (t[(t.PeakSignalToNoiseRatio = 8)] = 'PeakSignalToNoiseRatio'),
    (t[(t.PerceptualHash = 9)] = 'PerceptualHash'),
    (t[(t.RootMeanSquared = 10)] = 'RootMeanSquared'),
    (t[(t.StructuralSimilarity = 11)] = 'StructuralSimilarity'),
    (t[(t.StructuralDissimilarity = 12)] = 'StructuralDissimilarity'),
    t
  ))(Fi || {}),
  Yi = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Abs = 1)] = 'Abs'),
    (t[(t.Add = 2)] = 'Add'),
    (t[(t.AddModulus = 3)] = 'AddModulus'),
    (t[(t.And = 4)] = 'And'),
    (t[(t.Cosine = 5)] = 'Cosine'),
    (t[(t.Divide = 6)] = 'Divide'),
    (t[(t.Exponential = 7)] = 'Exponential'),
    (t[(t.GaussianNoise = 8)] = 'GaussianNoise'),
    (t[(t.ImpulseNoise = 9)] = 'ImpulseNoise'),
    (t[(t.LaplacianNoise = 10)] = 'LaplacianNoise'),
    (t[(t.LeftShift = 11)] = 'LeftShift'),
    (t[(t.Log = 12)] = 'Log'),
    (t[(t.Max = 13)] = 'Max'),
    (t[(t.Mean = 14)] = 'Mean'),
    (t[(t.Median = 15)] = 'Median'),
    (t[(t.Min = 16)] = 'Min'),
    (t[(t.MultiplicativeNoise = 17)] = 'MultiplicativeNoise'),
    (t[(t.Multiply = 18)] = 'Multiply'),
    (t[(t.Or = 19)] = 'Or'),
    (t[(t.PoissonNoise = 20)] = 'PoissonNoise'),
    (t[(t.Pow = 21)] = 'Pow'),
    (t[(t.RightShift = 22)] = 'RightShift'),
    (t[(t.RootMeanSquare = 23)] = 'RootMeanSquare'),
    (t[(t.Set = 24)] = 'Set'),
    (t[(t.Sine = 25)] = 'Sine'),
    (t[(t.Subtract = 26)] = 'Subtract'),
    (t[(t.Sum = 27)] = 'Sum'),
    (t[(t.ThresholdBlack = 28)] = 'ThresholdBlack'),
    (t[(t.Threshold = 29)] = 'Threshold'),
    (t[(t.ThresholdWhite = 30)] = 'ThresholdWhite'),
    (t[(t.UniformNoise = 31)] = 'UniformNoise'),
    (t[(t.Xor = 32)] = 'Xor'),
    (t[(t.InverseLog = 33)] = 'InverseLog'),
    t
  ))(Yi || {}),
  ji = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Point = 1)] = 'Point'),
    (t[(t.Box = 2)] = 'Box'),
    (t[(t.Triangle = 3)] = 'Triangle'),
    (t[(t.Hermite = 4)] = 'Hermite'),
    (t[(t.Hann = 5)] = 'Hann'),
    (t[(t.Hamming = 6)] = 'Hamming'),
    (t[(t.Blackman = 7)] = 'Blackman'),
    (t[(t.Gaussian = 8)] = 'Gaussian'),
    (t[(t.Quadratic = 9)] = 'Quadratic'),
    (t[(t.Cubic = 10)] = 'Cubic'),
    (t[(t.Catrom = 11)] = 'Catrom'),
    (t[(t.Mitchell = 12)] = 'Mitchell'),
    (t[(t.Jinc = 13)] = 'Jinc'),
    (t[(t.Sinc = 14)] = 'Sinc'),
    (t[(t.SincFast = 15)] = 'SincFast'),
    (t[(t.Kaiser = 16)] = 'Kaiser'),
    (t[(t.Welch = 17)] = 'Welch'),
    (t[(t.Parzen = 18)] = 'Parzen'),
    (t[(t.Bohman = 19)] = 'Bohman'),
    (t[(t.Bartlett = 20)] = 'Bartlett'),
    (t[(t.Lagrange = 21)] = 'Lagrange'),
    (t[(t.Lanczos = 22)] = 'Lanczos'),
    (t[(t.LanczosSharp = 23)] = 'LanczosSharp'),
    (t[(t.Lanczos2 = 24)] = 'Lanczos2'),
    (t[(t.Lanczos2Sharp = 25)] = 'Lanczos2Sharp'),
    (t[(t.Robidoux = 26)] = 'Robidoux'),
    (t[(t.RobidouxSharp = 27)] = 'RobidouxSharp'),
    (t[(t.Cosine = 28)] = 'Cosine'),
    (t[(t.Spline = 29)] = 'Spline'),
    (t[(t.LanczosRadius = 30)] = 'LanczosRadius'),
    (t[(t.CubicSpline = 31)] = 'CubicSpline'),
    t
  ))(ji || {}),
  Xi = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.None = 1)] = 'None'),
    (t[(t.Background = 2)] = 'Background'),
    (t[(t.Previous = 3)] = 'Previous'),
    t
  ))(Xi || {}),
  Vi = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.NoInterlace = 1)] = 'NoInterlace'),
    (t[(t.Line = 2)] = 'Line'),
    (t[(t.Plane = 3)] = 'Plane'),
    (t[(t.Partition = 4)] = 'Partition'),
    (t[(t.Gif = 5)] = 'Gif'),
    (t[(t.Jpeg = 6)] = 'Jpeg'),
    (t[(t.Png = 7)] = 'Png'),
    t
  ))(Vi || {}),
  Qi = /* @__PURE__ */ (t => (
    (t.Undefined = 'Undefined'),
    (t.Unity = 'Unity'),
    (t.Gaussian = 'Gaussian'),
    (t.DoG = 'DoG'),
    (t.LoG = 'LoG'),
    (t.Blur = 'Blur'),
    (t.Comet = 'Comet'),
    (t.Binomial = 'Binomial'),
    (t.Laplacian = 'Laplacian'),
    (t.Sobel = 'Sobel'),
    (t.FreiChen = 'FreiChen'),
    (t.Roberts = 'Roberts'),
    (t.Prewitt = 'Prewitt'),
    (t.Compass = 'Compass'),
    (t.Kirsch = 'Kirsch'),
    (t.Diamond = 'Diamond'),
    (t.Square = 'Square'),
    (t.Rectangle = 'Rectangle'),
    (t.Octagon = 'Octagon'),
    (t.Disk = 'Disk'),
    (t.Plus = 'Plus'),
    (t.Cross = 'Cross'),
    (t.Ring = 'Ring'),
    (t.Peaks = 'Peaks'),
    (t.Edges = 'Edges'),
    (t.Corners = 'Corners'),
    (t.Diagonals = 'Diagonals'),
    (t.LineEnds = 'LineEnds'),
    (t.LineJunctions = 'LineJunctions'),
    (t.Ridges = 'Ridges'),
    (t.ConvexHull = 'ConvexHull'),
    (t.ThinSE = 'ThinSE'),
    (t.Skeleton = 'Skeleton'),
    (t.Chebyshev = 'Chebyshev'),
    (t.Manhattan = 'Manhattan'),
    (t.Octagonal = 'Octagonal'),
    (t.Euclidean = 'Euclidean'),
    (t.UserDefined = 'UserDefined'),
    t
  ))(Qi || {}),
  qi = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Convolve = 1)] = 'Convolve'),
    (t[(t.Correlate = 2)] = 'Correlate'),
    (t[(t.Erode = 3)] = 'Erode'),
    (t[(t.Dilate = 4)] = 'Dilate'),
    (t[(t.ErodeIntensity = 5)] = 'ErodeIntensity'),
    (t[(t.DilateIntensity = 6)] = 'DilateIntensity'),
    (t[(t.IterativeDistance = 7)] = 'IterativeDistance'),
    (t[(t.Open = 8)] = 'Open'),
    (t[(t.Close = 9)] = 'Close'),
    (t[(t.OpenIntensity = 10)] = 'OpenIntensity'),
    (t[(t.CloseIntensity = 11)] = 'CloseIntensity'),
    (t[(t.Smooth = 12)] = 'Smooth'),
    (t[(t.EdgeIn = 13)] = 'EdgeIn'),
    (t[(t.EdgeOut = 14)] = 'EdgeOut'),
    (t[(t.Edge = 15)] = 'Edge'),
    (t[(t.TopHat = 16)] = 'TopHat'),
    (t[(t.BottomHat = 17)] = 'BottomHat'),
    (t[(t.HitAndMiss = 18)] = 'HitAndMiss'),
    (t[(t.Thinning = 19)] = 'Thinning'),
    (t[(t.Thicken = 20)] = 'Thicken'),
    (t[(t.Distance = 21)] = 'Distance'),
    (t[(t.Voronoi = 22)] = 'Voronoi'),
    t
  ))(qi || {}),
  $i = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.TopLeft = 1)] = 'TopLeft'),
    (t[(t.TopRight = 2)] = 'TopRight'),
    (t[(t.BottomRight = 3)] = 'BottomRight'),
    (t[(t.BottomLeft = 4)] = 'BottomLeft'),
    (t[(t.LeftTop = 5)] = 'LeftTop'),
    (t[(t.RightTop = 6)] = 'RightTop'),
    (t[(t.RightBottom = 7)] = 'RightBottom'),
    (t[(t.LeftBottom = 8)] = 'LeftBottom'),
    t
  ))($i || {}),
  Ji = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Point = 1)] = 'Point'),
    (t[(t.Replace = 2)] = 'Replace'),
    (t[(t.Floodfill = 3)] = 'Floodfill'),
    (t[(t.FillToBorder = 4)] = 'FillToBorder'),
    (t[(t.Reset = 5)] = 'Reset'),
    t
  ))(Ji || {}),
  Ki = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Average = 1)] = 'Average'),
    (t[(t.Average9 = 2)] = 'Average9'),
    (t[(t.Average16 = 3)] = 'Average16'),
    (t[(t.Background = 4)] = 'Background'),
    (t[(t.Bilinear = 5)] = 'Bilinear'),
    (t[(t.Blend = 6)] = 'Blend'),
    (t[(t.Catrom = 7)] = 'Catrom'),
    (t[(t.Integer = 8)] = 'Integer'),
    (t[(t.Mesh = 9)] = 'Mesh'),
    (t[(t.Nearest = 10)] = 'Nearest'),
    (t[(t.Spline = 11)] = 'Spline'),
    t
  ))(Ki || {}),
  Zi = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Saturation = 1)] = 'Saturation'),
    (t[(t.Perceptual = 2)] = 'Perceptual'),
    (t[(t.Absolute = 3)] = 'Absolute'),
    (t[(t.Relative = 4)] = 'Relative'),
    t
  ))(Zi || {}),
  Oi = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Left = 1)] = 'Left'),
    (t[(t.Center = 2)] = 'Center'),
    (t[(t.Right = 3)] = 'Right'),
    t
  ))(Oi || {}),
  es = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.None = 1)] = 'None'),
    (t[(t.Underline = 2)] = 'Underline'),
    (t[(t.Overline = 3)] = 'Overline'),
    (t[(t.LineThrough = 4)] = 'LineThrough'),
    t
  ))(es || {}),
  ts = /* @__PURE__ */ (t => (
    (t[(t.Undefined = 0)] = 'Undefined'),
    (t[(t.Background = 1)] = 'Background'),
    (t[(t.Dither = 2)] = 'Dither'),
    (t[(t.Edge = 3)] = 'Edge'),
    (t[(t.Mirror = 4)] = 'Mirror'),
    (t[(t.Random = 5)] = 'Random'),
    (t[(t.Tile = 6)] = 'Tile'),
    (t[(t.Transparent = 7)] = 'Transparent'),
    (t[(t.Mask = 8)] = 'Mask'),
    (t[(t.Black = 9)] = 'Black'),
    (t[(t.Gray = 10)] = 'Gray'),
    (t[(t.White = 11)] = 'White'),
    (t[(t.HorizontalTile = 12)] = 'HorizontalTile'),
    (t[(t.VerticalTile = 13)] = 'VerticalTile'),
    (t[(t.HorizontalTileEdge = 14)] = 'HorizontalTileEdge'),
    (t[(t.VerticalTileEdge = 15)] = 'VerticalTileEdge'),
    (t[(t.CheckerTile = 16)] = 'CheckerTile'),
    t
  ))(ts || {}),
  ns = /* @__PURE__ */ (t => (
    (t[(t.Disabled = -1)] = 'Disabled'),
    (t[(t.Linear = 0)] = 'Linear'),
    (t[(t.Vng = 1)] = 'Vng'),
    (t[(t.Ppg = 2)] = 'Ppg'),
    (t[(t.Ahd = 3)] = 'Ahd'),
    (t[(t.DCB = 4)] = 'DCB'),
    (t[(t.Dht = 11)] = 'Dht'),
    (t[(t.ModifiedAhd = 12)] = 'ModifiedAhd'),
    t
  ))(ns || {}),
  as = /* @__PURE__ */ (t => (
    (t[(t.Raw = 0)] = 'Raw'),
    (t[(t.SRGB = 1)] = 'SRGB'),
    (t[(t.AdobeRGB = 2)] = 'AdobeRGB'),
    (t[(t.WideGamutRGB = 3)] = 'WideGamutRGB'),
    (t[(t.KodakProPhotoRGB = 4)] = 'KodakProPhotoRGB'),
    (t[(t.XYZ = 5)] = 'XYZ'),
    (t[(t.ACES = 6)] = 'ACES'),
    t
  ))(as || {})
class As extends wi {
  constructor() {
    super(ve.Dng)
  }
  /**
   * Gets or sets a value indicating wether auto brightness should be used (dng:no-auto-bright).
   */
  disableAutoBrightness
  /**
   * Gets or sets a value indicating the interpolation quality (dng:interpolation-quality).
   */
  interpolationQuality
  /**
   * Gets or sets the output color (dng:output-color).
   */
  outputColor
  /**
   * Gets or sets a value indicating wether auto whitebalance should be used (dng:use-auto-wb).
   */
  useAutoWhitebalance
  /**
   * Gets or sets a value indicating wether the whitebalance of the camera should be used (dng:use-camera-wb).
   */
  useCameraWhitebalance
  getDefines() {
    const n = []
    return (
      this.hasValue(this.interpolationQuality) &&
        n.push(
          this.createDefine(
            'interpolation-quality',
            this.interpolationQuality,
          ),
        ),
      this.hasValue(this.disableAutoBrightness) &&
        n.push(
          this.createDefine(
            'no-auto-bright',
            this.disableAutoBrightness,
          ),
        ),
      this.hasValue(this.outputColor) &&
        n.push(this.createDefine('output-color', this.outputColor)),
      this.hasValue(this.useCameraWhitebalance) &&
        n.push(
          this.createDefine(
            'use-camera-wb',
            this.useCameraWhitebalance,
          ),
        ),
      this.hasValue(this.useAutoWhitebalance) &&
        n.push(
          this.createDefine('use-auto-wb', this.useAutoWhitebalance),
        ),
      n
    )
  }
}
class Es {
  /**
   * Gets a system-defined color that has an RGBA value of #00000000.
   */
  static get None() {
    return new h(0, 0, 0, 0)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00000000.
   */
  static get Transparent() {
    return new h(0, 0, 0, 0)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0F8FFFF.
   */
  static get AliceBlue() {
    return new h(240, 248, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAEBD7FF.
   */
  static get AntiqueWhite() {
    return new h(250, 235, 215, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FFFFFF.
   */
  static get Aqua() {
    return new h(0, 255, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7FFFD4FF.
   */
  static get Aquamarine() {
    return new h(127, 255, 212, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0FFFFFF.
   */
  static get Azure() {
    return new h(240, 255, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5F5DCFF.
   */
  static get Beige() {
    return new h(245, 245, 220, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4C4FF.
   */
  static get Bisque() {
    return new h(255, 228, 196, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #000000FF.
   */
  static get Black() {
    return new h(0, 0, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFEBCDFF.
   */
  static get BlanchedAlmond() {
    return new h(255, 235, 205, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #0000FFFF.
   */
  static get Blue() {
    return new h(0, 0, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8A2BE2FF.
   */
  static get BlueViolet() {
    return new h(138, 43, 226, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A52A2AFF.
   */
  static get Brown() {
    return new h(165, 42, 42, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DEB887FF.
   */
  static get BurlyWood() {
    return new h(222, 184, 135, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #5F9EA0FF.
   */
  static get CadetBlue() {
    return new h(95, 158, 160, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7FFF00FF.
   */
  static get Chartreuse() {
    return new h(127, 255, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D2691EFF.
   */
  static get Chocolate() {
    return new h(210, 105, 30, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF7F50FF.
   */
  static get Coral() {
    return new h(255, 127, 80, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6495EDFF.
   */
  static get CornflowerBlue() {
    return new h(100, 149, 237, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF8DCFF.
   */
  static get Cornsilk() {
    return new h(255, 248, 220, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DC143CFF.
   */
  static get Crimson() {
    return new h(220, 20, 60, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FFFFFF.
   */
  static get Cyan() {
    return new h(0, 255, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00008BFF.
   */
  static get DarkBlue() {
    return new h(0, 0, 139, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008B8BFF.
   */
  static get DarkCyan() {
    return new h(0, 139, 139, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B8860BFF.
   */
  static get DarkGoldenrod() {
    return new h(184, 134, 11, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A9A9A9FF.
   */
  static get DarkGray() {
    return new h(169, 169, 169, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #006400FF.
   */
  static get DarkGreen() {
    return new h(0, 100, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BDB76BFF.
   */
  static get DarkKhaki() {
    return new h(189, 183, 107, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B008BFF.
   */
  static get DarkMagenta() {
    return new h(139, 0, 139, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #556B2FFF.
   */
  static get DarkOliveGreen() {
    return new h(85, 107, 47, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF8C00FF.
   */
  static get DarkOrange() {
    return new h(255, 140, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9932CCFF.
   */
  static get DarkOrchid() {
    return new h(153, 50, 204, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B0000FF.
   */
  static get DarkRed() {
    return new h(139, 0, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E9967AFF.
   */
  static get DarkSalmon() {
    return new h(233, 150, 122, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8FBC8FFF.
   */
  static get DarkSeaGreen() {
    return new h(143, 188, 143, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #483D8BFF.
   */
  static get DarkSlateBlue() {
    return new h(72, 61, 139, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #2F4F4FFF.
   */
  static get DarkSlateGray() {
    return new h(47, 79, 79, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00CED1FF.
   */
  static get DarkTurquoise() {
    return new h(0, 206, 209, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9400D3FF.
   */
  static get DarkViolet() {
    return new h(148, 0, 211, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF1493FF.
   */
  static get DeepPink() {
    return new h(255, 20, 147, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00BFFFFF.
   */
  static get DeepSkyBlue() {
    return new h(0, 191, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #696969FF.
   */
  static get DimGray() {
    return new h(105, 105, 105, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #1E90FFFF.
   */
  static get DodgerBlue() {
    return new h(30, 144, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B22222FF.
   */
  static get Firebrick() {
    return new h(178, 34, 34, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFAF0FF.
   */
  static get FloralWhite() {
    return new h(255, 250, 240, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #228B22FF.
   */
  static get ForestGreen() {
    return new h(34, 139, 34, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF00FFFF.
   */
  static get Fuchsia() {
    return new h(255, 0, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DCDCDCFF.
   */
  static get Gainsboro() {
    return new h(220, 220, 220, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F8F8FFFF.
   */
  static get GhostWhite() {
    return new h(248, 248, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFD700FF.
   */
  static get Gold() {
    return new h(255, 215, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DAA520FF.
   */
  static get Goldenrod() {
    return new h(218, 165, 32, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #808080FF.
   */
  static get Gray() {
    return new h(128, 128, 128, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008000FF.
   */
  static get Green() {
    return new h(0, 128, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #ADFF2FFF.
   */
  static get GreenYellow() {
    return new h(173, 255, 47, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0FFF0FF.
   */
  static get Honeydew() {
    return new h(240, 255, 240, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF69B4FF.
   */
  static get HotPink() {
    return new h(255, 105, 180, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #CD5C5CFF.
   */
  static get IndianRed() {
    return new h(205, 92, 92, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4B0082FF.
   */
  static get Indigo() {
    return new h(75, 0, 130, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFF0FF.
   */
  static get Ivory() {
    return new h(255, 255, 240, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0E68CFF.
   */
  static get Khaki() {
    return new h(240, 230, 140, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E6E6FAFF.
   */
  static get Lavender() {
    return new h(230, 230, 250, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF0F5FF.
   */
  static get LavenderBlush() {
    return new h(255, 240, 245, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7CFC00FF.
   */
  static get LawnGreen() {
    return new h(124, 252, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFACDFF.
   */
  static get LemonChiffon() {
    return new h(255, 250, 205, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #ADD8E6FF.
   */
  static get LightBlue() {
    return new h(173, 216, 230, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F08080FF.
   */
  static get LightCoral() {
    return new h(240, 128, 128, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E0FFFFFF.
   */
  static get LightCyan() {
    return new h(224, 255, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAFAD2FF.
   */
  static get LightGoldenrodYellow() {
    return new h(250, 250, 210, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #90EE90FF.
   */
  static get LightGreen() {
    return new h(144, 238, 144, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D3D3D3FF.
   */
  static get LightGray() {
    return new h(211, 211, 211, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFB6C1FF.
   */
  static get LightPink() {
    return new h(255, 182, 193, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFA07AFF.
   */
  static get LightSalmon() {
    return new h(255, 160, 122, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #20B2AAFF.
   */
  static get LightSeaGreen() {
    return new h(32, 178, 170, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #87CEFAFF.
   */
  static get LightSkyBlue() {
    return new h(135, 206, 250, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #778899FF.
   */
  static get LightSlateGray() {
    return new h(119, 136, 153, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B0C4DEFF.
   */
  static get LightSteelBlue() {
    return new h(176, 196, 222, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFE0FF.
   */
  static get LightYellow() {
    return new h(255, 255, 224, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FF00FF.
   */
  static get Lime() {
    return new h(0, 255, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #32CD32FF.
   */
  static get LimeGreen() {
    return new h(50, 205, 50, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAF0E6FF.
   */
  static get Linen() {
    return new h(250, 240, 230, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF00FFFF.
   */
  static get Magenta() {
    return new h(255, 0, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #800000FF.
   */
  static get Maroon() {
    return new h(128, 0, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #66CDAAFF.
   */
  static get MediumAquamarine() {
    return new h(102, 205, 170, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #0000CDFF.
   */
  static get MediumBlue() {
    return new h(0, 0, 205, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BA55D3FF.
   */
  static get MediumOrchid() {
    return new h(186, 85, 211, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9370DBFF.
   */
  static get MediumPurple() {
    return new h(147, 112, 219, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #3CB371FF.
   */
  static get MediumSeaGreen() {
    return new h(60, 179, 113, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7B68EEFF.
   */
  static get MediumSlateBlue() {
    return new h(123, 104, 238, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FA9AFF.
   */
  static get MediumSpringGreen() {
    return new h(0, 250, 154, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #48D1CCFF.
   */
  static get MediumTurquoise() {
    return new h(72, 209, 204, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #C71585FF.
   */
  static get MediumVioletRed() {
    return new h(199, 21, 133, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #191970FF.
   */
  static get MidnightBlue() {
    return new h(25, 25, 112, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5FFFAFF.
   */
  static get MintCream() {
    return new h(245, 255, 250, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4E1FF.
   */
  static get MistyRose() {
    return new h(255, 228, 225, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4B5FF.
   */
  static get Moccasin() {
    return new h(255, 228, 181, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFDEADFF.
   */
  static get NavajoWhite() {
    return new h(255, 222, 173, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #000080FF.
   */
  static get Navy() {
    return new h(0, 0, 128, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FDF5E6FF.
   */
  static get OldLace() {
    return new h(253, 245, 230, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #808000FF.
   */
  static get Olive() {
    return new h(128, 128, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6B8E23FF.
   */
  static get OliveDrab() {
    return new h(107, 142, 35, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFA500FF.
   */
  static get Orange() {
    return new h(255, 165, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF4500FF.
   */
  static get OrangeRed() {
    return new h(255, 69, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DA70D6FF.
   */
  static get Orchid() {
    return new h(218, 112, 214, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #EEE8AAFF.
   */
  static get PaleGoldenrod() {
    return new h(238, 232, 170, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #98FB98FF.
   */
  static get PaleGreen() {
    return new h(152, 251, 152, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #AFEEEEFF.
   */
  static get PaleTurquoise() {
    return new h(175, 238, 238, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DB7093FF.
   */
  static get PaleVioletRed() {
    return new h(219, 112, 147, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFEFD5FF.
   */
  static get PapayaWhip() {
    return new h(255, 239, 213, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFDAB9FF.
   */
  static get PeachPuff() {
    return new h(255, 218, 185, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #CD853FFF.
   */
  static get Peru() {
    return new h(205, 133, 63, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFC0CBFF.
   */
  static get Pink() {
    return new h(255, 192, 203, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DDA0DDFF.
   */
  static get Plum() {
    return new h(221, 160, 221, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B0E0E6FF.
   */
  static get PowderBlue() {
    return new h(176, 224, 230, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #800080FF.
   */
  static get Purple() {
    return new h(128, 0, 128, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #663399FF.
   */
  static get RebeccaPurple() {
    return new h(102, 51, 153, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF0000FF.
   */
  static get Red() {
    return new h(255, 0, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BC8F8FFF.
   */
  static get RosyBrown() {
    return new h(188, 143, 143, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4169E1FF.
   */
  static get RoyalBlue() {
    return new h(65, 105, 225, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B4513FF.
   */
  static get SaddleBrown() {
    return new h(139, 69, 19, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FA8072FF.
   */
  static get Salmon() {
    return new h(250, 128, 114, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F4A460FF.
   */
  static get SandyBrown() {
    return new h(244, 164, 96, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #2E8B57FF.
   */
  static get SeaGreen() {
    return new h(46, 139, 87, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF5EEFF.
   */
  static get SeaShell() {
    return new h(255, 245, 238, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A0522DFF.
   */
  static get Sienna() {
    return new h(160, 82, 45, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #C0C0C0FF.
   */
  static get Silver() {
    return new h(192, 192, 192, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #87CEEBFF.
   */
  static get SkyBlue() {
    return new h(135, 206, 235, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6A5ACDFF.
   */
  static get SlateBlue() {
    return new h(106, 90, 205, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #708090FF.
   */
  static get SlateGray() {
    return new h(112, 128, 144, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFAFAFF.
   */
  static get Snow() {
    return new h(255, 250, 250, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FF7FFF.
   */
  static get SpringGreen() {
    return new h(0, 255, 127, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4682B4FF.
   */
  static get SteelBlue() {
    return new h(70, 130, 180, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D2B48CFF.
   */
  static get Tan() {
    return new h(210, 180, 140, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008080FF.
   */
  static get Teal() {
    return new h(0, 128, 128, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D8BFD8FF.
   */
  static get Thistle() {
    return new h(216, 191, 216, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF6347FF.
   */
  static get Tomato() {
    return new h(255, 99, 71, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #40E0D0FF.
   */
  static get Turquoise() {
    return new h(64, 224, 208, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #EE82EEFF.
   */
  static get Violet() {
    return new h(238, 130, 238, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5DEB3FF.
   */
  static get Wheat() {
    return new h(245, 222, 179, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFFFFF.
   */
  static get White() {
    return new h(255, 255, 255, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5F5F5FF.
   */
  static get WhiteSmoke() {
    return new h(245, 245, 245, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFF00FF.
   */
  static get Yellow() {
    return new h(255, 255, 0, 255)
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9ACD32FF.
   */
  static get YellowGreen() {
    return new h(154, 205, 50, 255)
  }
}
class Rs {
  constructor(n) {
    this.method = n
  }
  /**
   * Gets the distortion method to use.
   */
  method
  /**
   * Gets or sets a value indicating whether distort attempt to 'bestfit' the size of the resulting image.
   */
  bestFit = !1
  /**
   * Gets or sets a value to scale the size of the output canvas by this amount to provide a method of
   * Zooming, and for super-sampling the results.
   */
  scale
  /**
   * Gets or sets the viewport that directly set the output image canvas area and offest to use for the
   * resulting image, rather than use the original images canvas, or a calculated 'bestfit' canvas.
   */
  viewport
}
class rs extends Ce {
  constructor(n) {
    const e = l._api._MontageSettings_Create(),
      o = l._api._MontageSettings_Dispose
    if (
      (super(e, o),
      n.backgroundColor !== void 0 &&
        n.backgroundColor._use(g => {
          l._api._MontageSettings_SetBackgroundColor(this._instance, g)
        }),
      n.borderColor !== void 0 &&
        n.borderColor._use(g => {
          l._api._MontageSettings_SetBorderColor(this._instance, g)
        }),
      n.borderWidth !== void 0 &&
        l._api._MontageSettings_SetBorderWidth(
          this._instance,
          n.borderWidth,
        ),
      n.fillColor !== void 0 &&
        n.fillColor._use(g => {
          l._api._MontageSettings_SetFillColor(this._instance, g)
        }),
      n.font !== void 0)
    ) {
      const g = ye._getFontFileName(n.font)
      L(g, p => {
        l._api._MontageSettings_SetFont(this._instance, p)
      })
    }
    n.fontPointsize !== void 0 &&
      l._api._MontageSettings_SetFontPointsize(
        this._instance,
        n.fontPointsize,
      ),
      n.frameGeometry !== void 0 &&
        L(n.frameGeometry.toString(), g => {
          l._api._MontageSettings_SetFrameGeometry(this._instance, g)
        }),
      n.geometry !== void 0 &&
        L(n.geometry.toString(), g => {
          l._api._MontageSettings_SetGeometry(this._instance, g)
        }),
      n.gravity !== void 0 &&
        l._api._MontageSettings_SetGravity(this._instance, n.gravity),
      n.shadow !== void 0 &&
        l._api._MontageSettings_SetShadow(
          this._instance,
          n.shadow ? 1 : 0,
        ),
      n.strokeColor !== void 0 &&
        n.strokeColor._use(g => {
          l._api._MontageSettings_SetStrokeColor(this._instance, g)
        }),
      n.textureFileName !== void 0 &&
        L(n.textureFileName, g => {
          l._api._MontageSettings_SetTextureFileName(this._instance, g)
        }),
      n.tileGeometry !== void 0 &&
        L(n.tileGeometry.toString(), g => {
          l._api._MontageSettings_SetTileGeometry(this._instance, g)
        }),
      n.title !== void 0 &&
        L(n.title, g => {
          l._api._MontageSettings_SetTitle(this._instance, g)
        })
  }
}
class bs {
  /**
   * Gets or sets the color of the background that thumbnails are composed on.
   */
  backgroundColor
  /**
   * Gets or sets the frame border color.
   */
  borderColor
  /**
   * Gets or sets the pixels between thumbnail and surrounding frame.
   */
  borderWidth
  /**
   * Gets or sets the fill color.
   */
  fillColor
  /**
   * Gets or sets the label font.
   */
  font
  /**
   * Gets or sets the font point size.
   */
  fontPointsize
  /**
   * Gets or sets the frame geometry (width & height frame thickness).
   */
  frameGeometry
  /**
   * Gets or sets the thumbnail width & height plus border width &amp; height.
   */
  geometry
  /**
   * Gets or sets the thumbnail position (e.g. Southwest).
   */
  gravity
  /**
   * Gets or sets the thumbnail label (applied to image prior to montage).
   */
  label
  /**
   * Gets or sets a value indicating whether drop-shadows on thumbnails are enabled or disabled.
   */
  shadow
  /**
   * Gets or sets the outline color.
   */
  strokeColor
  /**
   * Gets or sets the background texture image.
   */
  textureFileName
  /**
   * Gets or sets the frame geometry (width &amp; height frame thickness).
   */
  tileGeometry
  /**
   * Gets or sets the montage title.
   */
  title
  /**
   * Gets or sets the transparent color.
   */
  transparentColor
  _use(n) {
    const e = new rs(this)
    return ie._disposeAfterExecution(e, n)
  }
}
class Ps {
  constructor(n, e, o) {
    ;(this.method = n),
      (this.kernel = e),
      o !== void 0 && (this.kernel += `:${o}`)
  }
  /**
   * Gets or sets the channels to apply the kernel to.
   */
  channels = K.Composite
  /**
   * Gets or sets the bias to use when the method is Convolve.
   */
  convolveBias
  /**
   * Gets or sets the scale to use when the method is Convolve.
   */
  convolveScale
  /**
   * Gets or sets the number of iterations.
   */
  iterations = 1
  /**
   * Gets or sets built-in kernel.
   */
  kernel
  /**
   * Gets or sets the morphology method.
   */
  method
}
class is extends Ce {
  constructor(n) {
    const e = l._api._QuantizeSettings_Create(),
      o = l._api._QuantizeSettings_Dispose
    super(e, o),
      l._api._QuantizeSettings_SetColors(this._instance, n.colors),
      l._api._QuantizeSettings_SetColorSpace(
        this._instance,
        n.colorSpace,
      ),
      l._api._QuantizeSettings_SetDitherMethod(
        this._instance,
        n.ditherMethod ?? Ct.No,
      ),
      l._api._QuantizeSettings_SetMeasureErrors(
        this._instance,
        n.measureErrors ? 1 : 0,
      ),
      l._api._QuantizeSettings_SetTreeDepth(this._instance, n.treeDepth)
  }
}
class Ts {
  constructor() {
    ;(this.colors = 256),
      (this.colorSpace = Et.Undefined),
      (this.ditherMethod = Ct.Riemersma),
      (this.measureErrors = !1),
      (this.treeDepth = 0)
  }
  /**
   * Gets or sets the maximum number of colors to quantize to.
   */
  colors
  /**
   * Gets or sets the colorspace to quantize in.
   */
  colorSpace
  /// <summary>
  /// Gets or sets the dither method to use.
  /// </summary>
  ditherMethod
  /// <summary>
  /// Gets or sets a value indicating whether errors should be measured.
  /// </summary>
  measureErrors
  /// <summary>
  /// Gets or sets the quantization tree-depth.
  /// </summary>
  treeDepth
  /** @internal */
  _use(n) {
    const e = new is(this)
    return ie._disposeAfterExecution(e, n)
  }
}
class Cs {
  /**
   * Initializes a new instance of the {@link Threshold} class.
   * @param minimum - The minimum value of the threshold.
   * @param maximum - The maximum value of the threshold (or 0 if no maximum).
   */
  constructor(n, e = 0) {
    ;(this.minimum = n), (this.maximum = e)
  }
  /**
   * Gets the minimum of this threshold.
   */
  minimum
  /**
   * Gets the maximum of this threshold.
   */
  maximum
  /**
   * Convert the threshold to a string.
   */
  toString() {
    return this.maximum === 0
      ? this.minimum.toString()
      : `${this.minimum}-${this.maximum}`
  }
}
export {
  En as AlphaOption,
  Li as AutoThresholdMethod,
  Ti as ChannelStatistics,
  K as Channels,
  vi as ChromaticityInfo,
  Ni as ClassType,
  Et as ColorSpace,
  xi as ColorType,
  _t as CompositeOperator,
  zi as CompressionMethod,
  Mn as ConfigurationFile,
  At as ConfigurationFiles,
  Rt as ConnectedComponent,
  Di as ConnectedComponentsSettings,
  wi as DefinesCreator,
  Gi as Density,
  Rn as DensityUnit,
  Ui as DistortMethod,
  Rs as DistortSettings,
  Ct as DitherMethod,
  ns as DngInterpolation,
  as as DngOutputColor,
  As as DngReadDefines,
  us as DrawableColor,
  _s as DrawableFillColor,
  os as DrawableFillOpacity,
  gs as DrawableFont,
  ls as DrawableFontPointSize,
  ms as DrawableGravity,
  fs as DrawableLine,
  ps as DrawablePoint,
  ds as DrawableRectangle,
  hs as DrawableRoundRectangle,
  ys as DrawableStrokeColor,
  Ss as DrawableStrokeWidth,
  Gs as DrawableText,
  ks as DrawableTextAlignment,
  Gt as DrawableTextAntialias,
  ws as DrawableTextDecoration,
  Ms as DrawableTextInterlineSpacing,
  Is as DrawableTextInterwordSpacing,
  vs as DrawableTextKerning,
  Ds as DrawableTextUnderColor,
  Pt as DrawingWand,
  Hi as Endian,
  Fi as ErrorMetric,
  Yi as EvaluateOperator,
  ji as FilterType,
  Xi as GifDisposeMethod,
  ot as Gravity,
  l as ImageMagick,
  Ri as ImageProfile,
  Vi as Interlace,
  Qi as Kernel,
  Mi as LogEvent,
  X as LogEventTypes,
  ye as Magick,
  h as MagickColor,
  Es as MagickColors,
  vt as MagickDefine,
  q as MagickError,
  gt as MagickErrorSeverity,
  ve as MagickFormat,
  Me as MagickFormatInfo,
  se as MagickGeometry,
  ae as MagickImage,
  ce as MagickImageCollection,
  Ie as MagickReadSettings,
  Fe as MagickSettings,
  bs as MontageSettings,
  qi as MorphologyMethod,
  Ps as MorphologySettings,
  Ce as NativeInstance,
  $i as OrientationType,
  Ji as PaintMethod,
  J as Percentage,
  E as PixelChannel,
  He as PixelCollection,
  Tn as PixelIntensityMethod,
  Ki as PixelInterpolateMethod,
  he as Point,
  Pe as PrimaryInfo,
  Bi as ProgressEvent,
  Ts as QuantizeSettings,
  Te as Quantum,
  Zi as RenderingIntent,
  Tt as Statistics,
  Oi as TextAlignment,
  es as TextDecoration,
  Cs as Threshold,
  ts as VirtualPixelMethod,
  Gn as WarningEvent,
  Ei as _getEdges,
  An as _isByteArray,
  cs as initializeImageMagick,
}
