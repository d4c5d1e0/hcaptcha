;(function anonymous(n, r) {
    var e = (function () {
      'use strict'
      function n(r, e, o, v) {
        return new (o || (o = Promise))(function (t, a) {
          function x(n) {
            try {
              f(v.next(n))
            } catch (r) {
              a(r)
            }
          }
          function c(n) {
            try {
              f(v.throw(n))
            } catch (e) {
              a(e)
            }
          }
          function f(n) {
            var e
            n.done
              ? t(n.value)
              : ((e = n.value),
                e instanceof o
                  ? e
                  : new o(function (n) {
                      n(e)
                    })).then(x, c)
          }
          f((v = v.apply(r, e || [])).next())
        })
      }
      function d(x, c) {
        var f,
          o,
          v,
          e,
          u = {
            label: 0,
            sent: function () {
              if (1 & v[0]) {
                throw v[1]
              }
              return v[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (e = {
            next: t(0),
            throw: t(1),
            return: t(2),
          }),
          'function' == typeof Symbol &&
            (e[Symbol.iterator] = function () {
              return this
            }),
          e
        )
        function t(r) {
          return function (n) {
            return (function (n) {
              if (f) {
                throw new TypeError('Generator is already executing.')
              }
              for (; u; ) {
                try {
                  if (
                    ((f = 1),
                    o &&
                      (v =
                        2 & n[0]
                          ? o.return
                          : n[0]
                          ? o.throw || ((v = o.return) && v.call(o), 0)
                          : o.next) &&
                      !(v = v.call(o, n[1])).done)
                  ) {
                    return v
                  }
                  switch (((o = 0), v && (n = [2 & n[0], v.value]), n[0])) {
                    case 0:
                    case 1:
                      v = n
                      break
                    case 4:
                      var e = {
                        oncomplete: function (n) {
                          var e,
                            t,
                            a,
                            i,
                            x = w.reduction,
                            c = x.value || x,
                            f =
                              null ===
                                (t =
                                  null ===
                                    (e = null == n ? void 0 : n.renderedBuffer) ||
                                  void 0 === e
                                    ? void 0
                                    : e.getChannelData) || void 0 === t
                                ? void 0
                                : t.call(e, 0),
                            o = new Float32Array(d.frequencyBinCount),
                            v = new Float32Array(d.fftSize)
                          return (
                            null ===
                              (a =
                                null == d ? void 0 : d.getFloatFrequencyData) ||
                              void 0 === a ||
                              a.call(d, o),
                            null ===
                              (i =
                                null == d ? void 0 : d.getFloatTimeDomainData) ||
                              void 0 === i ||
                              i.call(d, v),
                            w.disconnect(),
                            g.disconnect(),
                            u({
                              channelData: f,
                              gainReduction: c,
                              floatFreqData: o,
                              floatTimeData: v,
                            })
                          )
                        },
                      }
                      ;(e.value = n[1]), (e.done = false)
                      return u.label++, e
                    case 5:
                      u.label++, (o = n[1]), (n = [0])
                      continue
                    case 7:
                      ;(n = u.ops.pop()), u.trys.pop()
                      continue
                    default:
                      if (
                        !((v = u.trys),
                        (v = v.length > 0 && v[v.length - 1]) ||
                          (6 !== n[0] && 2 !== n[0]))
                      ) {
                        u = 0
                        continue
                      }
                      if (3 === n[0] && (!v || (n[1] > v[0] && n[1] < v[3]))) {
                        u.label = n[1]
                        break
                      }
                      if (6 === n[0] && u.label < v[1]) {
                        u.label = v[1]
                        v = n
                        break
                      }
                      if (v && u.label < v[2]) {
                        u.label = v[2]
                        u.ops.push(n)
                        break
                      }
                      v[2] && u.ops.pop(), u.trys.pop()
                      continue
                  }
                  n = c.call(x, u)
                } catch (a) {
                  n = [6, a]
                  o = 0
                } finally {
                  f = v = 0
                }
              }
              if (5 & n[0]) {
                throw n[1]
              }
              var t = {}
              return (t.value = n[0] ? n[1] : void 0), (t.done = true), t
            })([r, n])
          }
        }
      }
      function b(n, r, e) {
        if (e || 2 === arguments.length) {
          for (var i, x = 0, c = r.length; x < c; x++) {
            ;(!i && x in r) ||
              (i || (i = Array.prototype.slice.call(r, 0, x)), (i[x] = r[x]))
          }
        }
        return n.concat(i || Array.prototype.slice.call(r))
      }
      function A0(n, r) {
        var a,
          i,
          x =
            ((a = r),
            [
              new Promise(function (n) {
                i = setTimeout(n, a)
              }),
              function () {
                return clearTimeout(i)
              },
            ]),
          c = x[0],
          f = x[1]
        return Promise.race([
          n.finally(f),
          c.then(function () {
            return Promise.reject(new Error('Timeout '.concat(r, 'ms')))
          }),
        ])
      }
      function a(i, x, c) {
        return (
          void 0 === c && (c = 1000),
          function (e) {
            var r = function (n) {
              n instanceof Error
                ? e(i, n.toString())
                : e(i, 'string' == typeof n ? n : null)
            }
            try {
              var t = x(e)
              if (t instanceof Promise) {
                return A0(t, c).catch(r)
              }
            } catch (a) {
              r(a)
            }
          }
        )
      }
      function M(n) {
        return 2 === AudioBuffer.length
          ? new AudioBuffer(new AudioContext(), n)
          : new AudioBuffer(n)
      }
      function j0(n) {
        var t = n.seed,
          a = n.audioLength,
          i = void 0 === a ? 2000 : a,
          x = n.sampleRate,
          c = M({
            length: i,
            sampleRate: void 0 === x ? 44100 : x,
          }),
          f = new Float32Array(i)
        if (!('copyFromChannel' in c)) {
          return []
        }
        var o,
          v,
          u = c.length,
          _ =
            ((o = 275),
            (v = u - 21),
            Math.floor(Math.random() * (v - o + 1)) + o),
          d = _ + 10,
          w = _ + 20
        c.getChannelData(0)[_] = t
        c.getChannelData(0)[d] = t
        c.getChannelData(0)[w] = t
        var g = c.getChannelData(0)[_]
        c.copyFromChannel(f, 0)
        var z = [
          0 === c.getChannelData(0)[_] ? Math.random() : 0,
          0 === c.getChannelData(0)[d] ? Math.random() : 0,
          0 === c.getChannelData(0)[w] ? Math.random() : 0,
        ]
        return b(b(b([], c.getChannelData(0), true), f, true), z, true)
          .filter(function (n, r, e) {
            return e.indexOf(n) === r
          })
          .filter(function (n) {
            return 0 !== n && n !== g
          })
      }
      function H0() {
        var r = Math.random(),
          e = j0({ seed: r }),
          t = (function (n) {
            var r = n.seed,
              t = n.audioLength,
              a = void 0 === t ? 2000 : t,
              i = n.sampleRate,
              x = M({
                length: a,
                sampleRate: void 0 === i ? 44100 : i,
              }),
              c = new Float32Array(a)
            if (!('copyToChannel' in x)) {
              return []
            }
            x.copyToChannel(
              c.map(function () {
                return r
              }),
              0
            )
            var f = x.getChannelData(0)[0]
            return b([], x.getChannelData(0), true)
              .map(function (n) {
                return n !== f || 0 === n ? Math.random() : n
              })
              .filter(function (n) {
                return n !== f
              })
          })({ seed: r })
        return !!(e.length + t.length)
      }
      var Y0 = a(1000, function (_) {
          return n(void 0, void 0, void 0, function () {
            var i, x, c, f, o, v, u
            return d(this, function (n) {
              switch (n.label) {
                case 0:
                  return (i =
                    window.OfflineAudioContext ||
                    window.webkitOfflineAudioContext)
                    ? [
                        4,
                        ((e = new i(1, 5000, 44100)),
                        new Promise(function (u) {
                          var d = e.createAnalyser(),
                            w = e.createDynamicsCompressor(),
                            g = e.createOscillator()
                          try {
                            g.type = 'triangle'
                            g.frequency.value = 10000
                            w.threshold.value = -50
                            w.knee.value = 40
                            w.attack.value = 0
                          } catch (n) {}
                          d.connect(e.destination)
                          w.connect(d)
                          w.connect(e.destination)
                          g.connect(w)
                          g.start(0)
                          e.startRendering()
                        })),
                      ]
                    : [2]
                case 1:
                  return (x = n.sent())
                    ? ((c = x.channelData),
                      (f = x.gainReduction),
                      (o = x.floatFreqData),
                      (v = x.floatTimeData),
                      _(
                        1001,
                        [
                          c && Array.from(c.slice(-500)),
                          o && Array.from(o.slice(-500)),
                          v && Array.from(v.slice(-500)),
                          f,
                        ],
                        true
                      ),
                      'AudioBuffer' in window &&
                      'copyToChannel' in AudioBuffer.prototype
                        ? ((u = H0()), _(1002, u), [2])
                        : [2])
                    : [2]
              }
              var e
            })
          })
        }),
        U0 = a(1600, function (i) {
          return n(void 0, void 0, void 0, function () {
            var e, t, a
            return d(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    null ===
                      (a =
                        null ===
                          (t =
                            null === navigator || void 0 === navigator
                              ? void 0
                              : navigator.bluetooth) || void 0 === t
                          ? void 0
                          : t.getAvailability) || void 0 === a
                      ? void 0
                      : a.call(t),
                  ]
                case 1:
                  return 'boolean' != typeof (e = n.sent()) || i(1601, e), [2]
              }
            })
          })
        }),
        u = [
          '#FF6633',
          '#FFB399',
          '#FF33FF',
          '#FFFF99',
          '#00B3E6',
          '#E6B333',
          '#3366E6',
          '#999966',
          '#99FF99',
          '#B34D4D',
          '#80B300',
          '#809900',
          '#E6B3B3',
          '#6680B3',
          '#66991A',
          '#FF99E6',
          '#CCFF1A',
          '#FF1A66',
          '#E6331A',
          '#33FFCC',
          '#66994D',
          '#B366CC',
          '#4D8000',
          '#B33300',
          '#CC80CC',
          '#66664D',
          '#991AFF',
          '#E666FF',
          '#4DB3FF',
          '#1AB399',
          '#E666B3',
          '#33991A',
          '#CC9999',
          '#B3B31A',
          '#00E680',
          '#4D8066',
          '#809980',
          '#E6FF80',
          '#1AFF33',
          '#999933',
          '#FF3380',
          '#CCCC00',
          '#66E64D',
          '#4D80CC',
          '#9900B3',
          '#E64D66',
          '#4DB380',
          '#FF4D4D',
          '#99E6E6',
          '#6666FF',
        ]
      function _(n, r, e, t) {
        var x = ((n - 1) / r) * (e || 1) || 0
        return t ? x : Math.floor(x)
      }
      function P0(n, r, e, t, a) {
        var c = r.width,
          f = r.height,
          o = n.createRadialGradient(
            _(a(), e, c),
            _(a(), e, f),
            _(a(), e, c),
            _(a(), e, c),
            _(a(), e, f),
            _(a(), e, c)
          )
        o.addColorStop(0, t[_(a(), e, t.length)])
        o.addColorStop(1, t[_(a(), e, t.length)])
        n.fillStyle = o
      }
      var N0 = [
          [55357, 56832],
          [9786],
          [55358, 56629, 8205, 9794, 65039],
          [9832],
          [9784],
          [9895],
          [8265],
          [8505],
          [55356, 57331, 65039, 8205, 9895, 65039],
          [55358, 56690],
          [9785],
          [9760],
          [55358, 56785, 8205, 55358, 56752],
          [55358, 56783, 8205, 9794, 65039],
          [9975],
          [55358, 56785, 8205, 55358, 56605, 8205, 55358, 56785],
          [9752],
          [9968],
          [9961],
          [9972],
          [9992],
          [9201],
          [9928],
          [9730],
          [9969],
          [9731],
          [9732],
          [9976],
          [9823],
          [9937],
          [9000],
          [9993],
          [9999],
          [
            55357, 56425, 8205, 10084, 65039, 8205, 55357, 56459, 8205, 55357,
            56424,
          ],
          [
            55357, 56424, 8205, 55357, 56425, 8205, 55357, 56423, 8205, 55357,
            56422,
          ],
          [55357, 56424, 8205, 55357, 56425, 8205, 55357, 56422],
          [55357, 56832],
          [169],
          [174],
          [8482],
          [55357, 56385, 65039, 8205, 55357, 56808, 65039],
          [10002],
          [9986],
          [9935],
          [9874],
          [9876],
          [9881],
          [9939],
          [9879],
          [9904],
          [9905],
          [9888],
          [9762],
          [9763],
          [11014],
          [8599],
          [10145],
          [11013],
          [9883],
          [10017],
          [10013],
          [9766],
          [9654],
          [9197],
          [9199],
          [9167],
          [9792],
          [9794],
          [10006],
          [12336],
          [9877],
          [9884],
          [10004],
          [10035],
          [10055],
          [9724],
          [9642],
          [10083],
          [10084],
          [9996],
          [9757],
          [9997],
          [10052],
          [9878],
          [8618],
          [9775],
          [9770],
          [9774],
          [9745],
          [10036],
          [55356, 56688],
          [55356, 56703],
        ].map(function (n) {
          return String.fromCharCode.apply(String, n)
        }),
        q =
          "'Segoe Fluent Icons','Ink Free','Bahnschrift','Segoe MDL2 Assets','HoloLens MDL2 Assets','Leelawadee UI','Javanese Text','Segoe UI Emoji','Aldhabi','Gadugi','Myanmar Text','Nirmala UI','Lucida Console','Cambria Math','Galvji','MuktaMahee Regular','InaiMathi Bold','American Typewriter Semibold','Futura Bold','SignPainter-HouseScript Semibold','PingFang HK Light','Kohinoor Devanagari Medium','Luminari','Geneva','Helvetica Neue','Droid Sans Mono','Roboto','Ubuntu','Noto Color Emoji',sans-serif !important",
        A = {
          bezierCurve: function (n, r, e, t) {
            var x = r.width,
              c = r.height
            n.beginPath()
            n.moveTo(_(t(), e, x), _(t(), e, c))
            n.bezierCurveTo(
              _(t(), e, x),
              _(t(), e, c),
              _(t(), e, x),
              _(t(), e, c),
              _(t(), e, x),
              _(t(), e, c)
            )
            n.stroke()
          },
          circularArc: function (n, r, e, t) {
            var x = r.width,
              c = r.height
            n.beginPath()
            n.arc(
              _(t(), e, x),
              _(t(), e, c),
              _(t(), e, Math.min(x, c)),
              _(t(), e, 2 * Math.PI, true),
              _(t(), e, 2 * Math.PI, true)
            )
            n.stroke()
          },
          ellipticalArc: function (n, r, e, t) {
            if ('ellipse' in n) {
              var x = r.width,
                c = r.height
              n.beginPath()
              n.ellipse(
                _(t(), e, x),
                _(t(), e, c),
                _(t(), e, Math.floor(x / 2)),
                _(t(), e, Math.floor(c / 2)),
                _(t(), e, 2 * Math.PI, true),
                _(t(), e, 2 * Math.PI, true),
                _(t(), e, 2 * Math.PI, true)
              )
              n.stroke()
            }
          },
          quadraticCurve: function (n, r, e, t) {
            var x = r.width,
              c = r.height
            n.beginPath()
            n.moveTo(_(t(), e, x), _(t(), e, c))
            n.quadraticCurveTo(
              _(t(), e, x),
              _(t(), e, c),
              _(t(), e, x),
              _(t(), e, c)
            )
            n.stroke()
          },
          outlineOfText: function (n, r, e, t) {
            var x = r.width,
              c = r.height,
              f = q.replace(/!important/gm, ''),
              o = 'xyz'.concat(String.fromCharCode(55357, 56835, 55357, 56446))
            n.font = ''.concat(c / 2.99, 'px ').concat(f)
            n.strokeText(o, _(t(), e, x), _(t(), e, c), _(t(), e, x))
          },
        },
        K0 = a(1100, function (n) {
          var e = document.createElement('canvas'),
            a = e.getContext('2d')
          if (a) {
            !(function (n, r) {
              if (r) {
                var t = {
                  width: 20,
                  height: 20,
                }
                r.clearRect(0, 0, n.width, n.height)
                n.width = a.width
                n.height = a.height
                n.style && (n.style.display = 'none')
                for (
                  var x = (function (n, r, e) {
                      var t = 500 % r
                      return function () {
                        return (t = (e * t) % r)
                      }
                    })(0, 2001000001, 15000),
                    c = Object.keys(A).map(function (n) {
                      return A[n]
                    }),
                    f = 0;
                  f < 20;
                  f += 1
                ) {
                  P0(r, a, 2001000001, u, x)
                  r.shadowBlur = _(x(), 2001000001, 50, true)
                  r.shadowColor = u[_(x(), 2001000001, u.length)]
                  ;(0, c[_(x(), 2001000001, c.length)])(r, a, 2001000001, x)
                  r.fill()
                }
              }
            })(e, a)
            var i = e.toDataURL()
            n(1101, i, true)
            var x = (function (n, r) {
              return r
                ? (r.clearRect(0, 0, n.width, n.height),
                  Math.max.apply(Math, r.getImageData(0, 0, 8, 8).data))
                : null
            })(e, a)
            n(1102, !!x)
          }
        })
      function j() {
        var e = Math.floor(9 * Math.random()) + 7,
          t = String.fromCharCode(26 * Math.random() + 97),
          a = Math.random().toString(36).slice(-e).replace('.', '')
        return ''.concat(t).concat(a)
      }
      var G0 = 'map',
        p0 = [
          'Segoe Fluent Icons',
          'HoloLens MDL2 Assets',
          'Leelawadee UI',
          'Nirmala UI',
          'Cambria Math',
          'Galvji',
          'InaiMathi Bold',
          'Futura Bold',
          'PingFang HK Light',
          'Luminari',
          'Helvetica Neue',
          'Geneva',
          'Droid Sans Mono',
          'Noto Color Emoji',
          'Roboto',
          'Ubuntu',
          'MS Outlook',
          'ZWAdobeF',
          'KACSTOffice',
          'Gentium Book Basic',
        ]
      var S0 = a(1300, function (a) {
          return n(void 0, void 0, void 0, function () {
            var t
            return d(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, V0(p0)]
                case 1:
                  return (t = n.sent()).length && a(1301, t), [2]
              }
            })
          })
        }),
        i = (function () {
          try {
            return Array(-1), 0
          } catch (e) {
            return (e.message || []).length + Function.toString().length
          }
        })(),
        H = 57 === i,
        Z0 = 61 === i
      function x(n) {
        try {
          return n(), null
        } catch (r) {
          return r.message
        }
      }
      var O0 = a(1900, function (n) {
          var t = [
            String([
              Math.cos(13 * Math.E),
              Math.pow(Math.PI, -100),
              Math.sin(39 * Math.E),
              Math.tan(6 * Math.LN2),
            ]),
            Function.toString().length,
            x(function () {
              return (1).toString(-1)
            }),
            x(function () {
              return new Array(-1)
            }),
          ]
          n(1902, i)
          n(1901, t, true)
        }),
        W0 = [
          '(monochrome)',
          '(monochrome: 0)',
          '(orientation: landscape)',
          '(orientation: portrait)',
          '(color-gamut: rec2020)',
          '(color-gamut: p3)',
          '(color-gamut: srgb)',
          '(any-hover: hover)',
          '(any-hover: none)',
          '(hover: hover)',
          '(hover: none)',
          '(any-pointer: fine)',
          '(any-pointer: coarse)',
          '(any-pointer: none)',
          '(pointer: fine)',
          '(pointer: coarse)',
          '(pointer: none)',
          '(inverted-colors: inverted)',
          '(inverted-colors: none)',
          '(display-mode: fullscreen)',
          '(display-mode: standalone)',
          '(display-mode: minimal-ui)',
          '(display-mode: browser)',
          '(forced-colors: none)',
          '(forced-colors: active)',
          '(prefers-color-scheme: light)',
          '(prefers-color-scheme: dark)',
          '(prefers-contrast: no-preference)',
          '(prefers-contrast: less)',
          '(prefers-contrast: more)',
          '(prefers-contrast: custom)',
          '(prefers-reduced-motion: no-preference)',
          '(prefers-reduced-motion: reduce)',
          '(prefers-reduced-transparency: no-preference)',
          '(prefers-reduced-transparency: reduce)',
        ],
        I0 = a(800, function (n) {
          var r = W0.map(function (n) {
            return matchMedia(n).matches
          })
          n(801, r, true)
        }),
        T0 = [
          'audio/ogg; codecs="vorbis"',
          'audio/mpeg',
          'audio/mpegurl',
          'audio/wav; codecs="1"',
          'audio/x-m4a',
          'audio/aac',
          'video/ogg; codecs="theora"',
          'video/quicktime',
          'video/mp4; codecs="avc1.42E01E"',
          'video/webm; codecs="vp8"',
          'video/webm; codecs="vp9"',
          'video/x-matroska',
        ],
        J0 = 'Noto Color Emoji',
        E0 = a(600, function (n) {
          n(601, navigator.userAgent)
          var o,
            e = [
              navigator.deviceMemory || null,
              navigator.hardwareConcurrency || null,
            ]
          n(603, e)
          n(
            602,
            ((o = Navigator.prototype),
            Object.keys(o).reduce(function (n, r) {
              var t = Object.getOwnPropertyDescriptor(o, r),
                a = t && (t.value || t.get).toString(),
                i = navigator[r],
                x = typeof i,
                c =
                  'object' === x && null !== i
                    ? Object.getOwnPropertyNames(i)
                    : void 0
              return (n[r] = [i, x, a, c]), n
            }, {})),
            true
          )
        }),
        X0 = a(100, function (n) {
          var t = window.screen,
            x = t.width,
            c = t.height,
            f = t.availWidth,
            o = t.availHeight,
            v = t.colorDepth,
            u = t.pixelDepth
          n(101, [x, c])
          n(
            102,
            (function (n) {
              var e = n.width,
                t = n.height
              return !(
                ('CSS2Properties' in window &&
                  'devicePixelRatio' in window &&
                  1 !== devicePixelRatio) ||
                matchMedia(
                  '(device-width: '
                    .concat(e, 'px) and (device-height: ')
                    .concat(t, 'px)')
                ).matches
              )
            })({
              width: x,
              height: c,
            })
          )
          var _ = (function () {
              try {
                return (
                  !!document.createEvent('TouchEvent') && 'ontouchstart' in window
                )
              } catch (r) {
                return false
              }
            })(),
            d = navigator.maxTouchPoints,
            w = [x, c, f, o, v, u, _, void 0 !== d ? d : null, devicePixelRatio]
          n(103, w)
        }),
        k0 = [
          'ActiveBorder',
          'ActiveCaption',
          'ActiveText',
          'AppWorkspace',
          'Background',
          'ButtonBorder',
          'ButtonFace',
          'ButtonHighlight',
          'ButtonShadow',
          'ButtonText',
          'Canvas',
          'CanvasText',
          'CaptionText',
          'Field',
          'FieldText',
          'GrayText',
          'Highlight',
          'HighlightText',
          'InactiveBorder',
          'InactiveCaption',
          'InactiveCaptionText',
          'InfoBackground',
          'InfoText',
          'LinkText',
          'Mark',
          'MarkText',
          'Menu',
          'MenuText',
          'Scrollbar',
          'ThreeDDarkShadow',
          'ThreeDFace',
          'ThreeDHighlight',
          'ThreeDLightShadow',
          'ThreeDShadow',
          'VisitedText',
          'Window',
          'WindowFrame',
          'WindowText',
        ],
        F0 = [
          'caption',
          'icon',
          'menu',
          'message-box',
          'small-caption',
          'status-bar',
        ],
        R0 = 'Node',
        Q0 = [
          'Collator',
          'DateTimeFormat',
          'DisplayNames',
          'ListFormat',
          'NumberFormat',
          'PluralRules',
          'RelativeTimeFormat',
        ]
      function $0(n) {
        var t = JSON.stringify(n).slice(1, 11).split('-'),
          a = t[0],
          i = t[1],
          x = t[2],
          c = ''.concat(i, '/').concat(x, '/').concat(a),
          f = ''.concat(a, '-').concat(i, '-').concat(x),
          o = +(+new Date(c) - +new Date(f)) / 60000
        return Math.floor(o)
      }
      function nn() {
        try {
          var n = Q0.reduce(function (n, r) {
            var t = {}
            return (
              (t.type = 'region'),
              Intl[r]
                ? b(
                    b([], n, true),
                    [
                      'DisplayNames' === r
                        ? new Intl[r](void 0, t).resolvedOptions().locale
                        : new Intl[r]().resolvedOptions().locale,
                    ],
                    false
                  )
                : n
            )
          }, []).filter(function (n, r, e) {
            return e.indexOf(n) === r
          })
          return String(n)
        } catch (r) {
          return null
        }
      }
      function rn(n) {
        var e
        return (
          (null === (e = /\((.+)\)/.exec(n)) || void 0 === e ? void 0 : e[1]) ||
          ''
        )
      }
      var en = a(1400, function (n) {
          var e = (function () {
            try {
              return Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch (r) {
              return null
            }
          })()
          e && n(1401, e)
          var i = new Date('1/1/1970')
          n(1402, [
            e,
            $0(i),
            i.getTimezoneOffset(),
            [1879, 1921, 1952, 1976, 2018].reduce(function (n, r) {
              return n + Number(new Date('7/1/'.concat(r)))
            }, 0),
            rn(String(new Date())),
            nn(),
          ])
        }),
        o = [
          'platform',
          'platformVersion',
          'model',
          'bitness',
          'architecture',
          'uaFullVersion',
        ],
        tn = a(700, function (e) {
          return n(void 0, void 0, void 0, function () {
            var r, i, x, c
            return d(this, function (n) {
              switch (n.label) {
                case 0:
                  return (r = navigator.userAgentData) && r.getHighEntropyValues
                    ? [4, r.getHighEntropyValues(o)]
                    : (e(701, true), [2])
                case 1:
                  return (i = n.sent())
                    ? ((x = []),
                      (c = []),
                      'uaFullVersion',
                      o.forEach(function (n) {
                        var e = i[n] || null
                        x.push(e)
                        'uaFullVersion' !== n && c.push(e)
                      }),
                      e(702, x),
                      e(703, c),
                      [2])
                    : [2]
              }
            })
          })
        }),
        an = [
          35724, 7936, 7937, 7938, 34921, 36347, 35660, 36348, 36349, 33901,
          33902, 34930, 3379, 35661, 34024, 3386, 34076, 2963, 2968, 36004, 36005,
          3408, 35658, 35371, 37154, 35377, 35659, 35968, 35978, 35979, 35657,
          35373, 37157, 35379, 35077, 34852, 36063, 36183, 32883, 35071, 34045,
          35375, 35376, 35374, 33000, 33001, 36203,
        ]
      function Y(n, r) {
        if (!n.getShaderPrecisionFormat) {
          return null
        }
        var a = n.getShaderPrecisionFormat(r, n.LOW_FLOAT),
          i = n.getShaderPrecisionFormat(r, n.MEDIUM_FLOAT),
          x = n.getShaderPrecisionFormat(r, n.HIGH_FLOAT),
          c = n.getShaderPrecisionFormat(r, n.HIGH_INT)
        return [
          a && [a.precision, a.rangeMax, a.rangeMin],
          i && [i.precision, i.rangeMax, i.rangeMin],
          x && [x.precision, x.rangeMax, x.rangeMin],
          c && [c.precision, c.rangeMax, c.rangeMin],
        ]
      }
      function xn(a) {
        if (!a.getParameter) {
          return null
        }
        var r = (function (n, t) {
            var r = n.constructor
            return Object.keys(r)
              .map(function (n) {
                return r[n]
              })
              .reduce(function (n, r) {
                return -1 !== t.indexOf(r) && n.push(r), n
              }, [])
          })(a, an),
          f = r.reduce(function (n, r) {
            var t = a.getParameter(r)
            return (
              t &&
                n.push(
                  t instanceof Int32Array || t instanceof Float32Array
                    ? b([], t, true)
                    : t
                ),
              n
            )
          }, []),
          o = Y(a, 35633),
          v = Y(a, 35632),
          u = (function (n) {
            return n.getExtension &&
              (n.getExtension('EXT_texture_filter_anisotropic') ||
                n.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
                n.getExtension('WEBKIT_EXT_texture_filter_anisotropic'))
              ? n.getParameter(34047)
              : null
          })(a),
          _ = (function (n) {
            return n.getExtension && n.getExtension('WEBGL_draw_buffers')
              ? n.getParameter(34852)
              : null
          })(a),
          d = (function (n) {
            if (!n.getContextAttributes) {
              return null
            }
            var e = n.getContextAttributes()
            return e && 'boolean' == typeof e.antialias ? e.antialias : null
          })(a)
        return b(b([], f, true), [o, v, u, _, d], false)
      }
      function c(n) {
        var r = (function (n) {
          var e =
              'OffscreenCanvas' in window
                ? new OffscreenCanvas(1, 1)
                : document.createElement('canvas'),
            t = e.getContext(n)
          if (t) {
            return t
          }
          try {
            return e.getContext('experimental-'.concat(n))
          } catch (a) {
            return null
          }
        })(n)
        if (!r) {
          return null
        }
        var t = (function (n) {
            try {
              if (Z0 && 'hasOwn' in Object) {
                return [n.getParameter(n.VENDOR), n.getParameter(n.RENDERER)]
              }
              var e = n.getExtension('WEBGL_debug_renderer_info')
              return e
                ? [
                    n.getParameter(e.UNMASKED_VENDOR_WEBGL),
                    n.getParameter(e.UNMASKED_RENDERER_WEBGL),
                  ]
                : null
            } catch (t) {
              return null
            }
          })(r),
          x = (function (n) {
            return n.getSupportedExtensions ? n.getSupportedExtensions() : null
          })(r)
        return [t, x, xn(r)]
      }
      var cn = a(2400, function (n) {
          var t = c('webgl')
          t && t[0] && n(2402, t[0])
          var a = c('webgl2')
          a && a[0] && n(2403, a[0])
          n(2401, [t, a], true)
        }),
        fn = 'RENDERER',
        on = a(2700, function (n) {
          var a, i
          if (H) {
            var x = [
              prompt.toString().length + close.toString().length,
              Object.getOwnPropertyNames(window.chrome || {}) || null,
              (null ===
                (a =
                  null === window || void 0 === window
                    ? void 0
                    : window.process) || void 0 === a
                ? void 0
                : a.type) || null,
            ]
            n(2701, x)
            var c = navigator.userAgent,
              f = navigator.userAgentData || {},
              o = f.brands,
              v = f.mobile,
              u = f.platform,
              _ = [
                (o || []).map(function (n) {
                  return ''.concat(n.brand, ' ').concat(n.version)
                }),
                v,
                u,
              ],
              d = 'hasOwn' in Object && 'share' in navigator
            n(2702, [_, d])
            var w =
              null ===
                (i = /like Gecko\) (.+)\/.+ Chrome\/.+ Electron\//.exec(c)) ||
              void 0 === i
                ? void 0
                : i[1]
            w && n(2703, w)
          }
        }),
        vn = [
          '_evaluation_script__',
          '.<computed> [as apply]',
          'utilityscript.evaluate',
          'evaluatefunction',
          'callfunctionon',
        ],
        v = ['chrome', 'cookieStore', 'ondevicemotion', 'speechSynthesis']
      function un(n) {
        try {
          throw (n(), Error(''))
        } catch (a) {
          var t = (a.stack || '').toLowerCase()
          return vn.map(function (n) {
            return -1 !== t.indexOf(n)
          })
        }
      }
      var _n = v.reduce(function (n, r) {
          return (n[r] = true), n
        }, {}),
        dn = a(2900, function (n) {
          var e = navigator,
            t = e.pdfViewerEnabled,
            a = e.mimeTypes,
            x = e.plugins,
            c = e.webdriver,
            f = [
              void 0 !== c ? c : null,
              un(Number.toString.call),
              null,
              null,
              null,
            ]
          H &&
            ((f[2] = 'PictureInPictureWindow' in window),
            (f[3] = [
              a ? a.length : null,
              x ? x.length : null,
              void 0 !== t ? t : null,
            ]),
            (f[4] = (function (n) {
              var e = {},
                t = 0
              for (var a in n) _n[a] && (e[a] = t), (t += 1)
              return v.map(function (n) {
                return n in e ? e[n] : -1
              })
            })(window)))
          n(2901, f)
        })
      function P(n, r) {
        try {
          throw (n(), Error(''))
        } catch (a) {
          return (a.name + a.message).length
        } finally {
          r && r()
        }
      }
      function N(n, r) {
        if (!n) {
          return 0
        }
        var a = n.name,
          x = /^Screen|Navigator$/.test(a) && window[a.toLowerCase()],
          _ = 'prototype' in n ? n.prototype : Object.getPrototypeOf(n),
          i = (
            (null == r ? void 0 : r.length) ? r : Object.getOwnPropertyNames(_)
          ).reduce(function (n, r) {
            var t = (function (n, r) {
              try {
                var t = Object.getOwnPropertyDescriptor(n, r)
                if (!t) {
                  return null
                }
                var a = t.value,
                  i = t.get
                return a || i
              } catch (x) {
                return null
              }
            })(_, r)
            if (!t) {
              return n
            }
            var i =
              (function (n, r, e) {
                return (
                  (n
                    ? (typeof Object.getOwnPropertyDescriptor(n, e)).length
                    : 0) + Object.getOwnPropertyNames(r).length
                )
              })(x, t, r) +
              (function (r) {
                var n = [
                  P(function () {
                    return r().catch(function () {})
                  }),
                  P(function () {
                    throw Error(Object.create(r))
                  }),
                  P(function () {
                    r.arguments
                    r.caller
                  }),
                  P(function () {
                    r.toString.arguments
                    r.toString.caller
                  }),
                  P(function () {
                    return Object.create(r).toString()
                  }),
                ]
                if ('toString' === r.name) {
                  var c = Object.getPrototypeOf(r)
                  n.push.apply(n, [
                    P(
                      function () {
                        Object.setPrototypeOf(r, Object.create(r)).toString()
                      },
                      function () {
                        return Object.setPrototypeOf(r, c)
                      }
                    ),
                    P(
                      function () {
                        Reflect.setPrototypeOf(r, Object.create(r))
                      },
                      function () {
                        return Object.setPrototypeOf(r, c)
                      }
                    ),
                  ])
                }
                return Number(n.join(''))
              })(t) +
              (function (n) {
                return (n.toString() + n.toString.toString()).length
              })(t)
            return n + i
          }, 0)
        return (x ? Object.getOwnPropertyNames(x).length : 0) + i
      }
      function wn() {
        try {
          return (
            performance.mark(''),
            !(
              performance.getEntriesByType('mark').length +
              performance.getEntries().length
            )
          )
        } catch (r) {
          return null
        }
      }
      var f,
        gn = a(2800, function (n) {
          var t,
            a,
            i,
            x,
            c,
            f = [
              N(window.AudioBuffer, ['getChannelData']),
              N(window.AnalyserNode, ['getFloatFrequencyData']),
              N(window.CanvasRenderingContext2D, ['getImageData']),
              N(window.Date, ['getTimezoneOffset']),
              N(window.Document, ['createElement']),
              N(window.Element, ['append', 'getClientRects']),
              N(window.FontFace, ['load']),
              N(window.Function, ['toString']),
              N(window.HTMLCanvasElement, ['toDataURL', 'getContext']),
              N(window.HTMLIFrameElement, ['contentWindow']),
              N(window.Navigator, [
                'deviceMemory',
                'hardwareConcurrency',
                'maxTouchPoints',
                'userAgent',
              ]),
              N(window.Node, ['appendChild']),
              N(window.Screen, ['width', 'pixelDepth']),
              N(window.SVGTextContentElement, ['getComputedTextLength']),
              N(window.WebGLRenderingContext, ['getParameter']),
            ],
            o = f.reduce(function (n, r) {
              return n + r
            }, 0)
          n(2801, f, true)
          n(2802, o)
          n(
            2803,
            ((t = 'flat' in [] ? 'ReportingObserver' in window : null),
            (a = 'keyboard' in navigator && navigator.keyboard),
            (i = 'MediaDevices' in window),
            (x =
              'PerformanceObserver' in window &&
              'takeRecords' in PerformanceObserver.prototype
                ? 'Credential' in window
                : null),
            (c =
              'onrejectionhandled' in window
                ? 'RTCRtpTransceiver' in window
                : null),
            [
              Function.toString().length,
              wn(),
              t,
              'object' == typeof a ? String(a) : a,
              i,
              x,
              c,
            ])
          )
        }),
        zn = a(3000, function (n) {
          if (!/Android [4-8][^\d]/.test(navigator.userAgent)) {
            var u = 0,
              e = Object.getOwnPropertyNames(window),
              t = String.toString().split(String.name),
              _ = t[0],
              d = t[1],
              w = []
            e.forEach(function (n) {
              try {
                var e = Object.getOwnPropertyDescriptor(window, n)
                if (!e) {
                  return
                }
                var t = e.value,
                  a = e.get,
                  i = t || a
                if (
                  !('function' == typeof i && _ + i.name + d === i.toString())
                ) {
                  return
                }
                var x = i ? Object.getOwnPropertyNames(i) : [],
                  c =
                    'prototype' in i
                      ? Object.getOwnPropertyNames(i.prototype)
                      : []
                u += 1 + x.length + c.length
                w.push(n, x, c)
              } catch (f) {}
            })
            n(3001, w, true)
            n(3002, u)
          }
        }),
        ln =
          (((f = {})[0] = [
            U0,
            G0,
            S0,
            O0,
            I0,
            J0,
            E0,
            X0,
            R0,
            en,
            tn,
            fn,
            K0,
            cn,
            Y0,
            on,
            dn,
            gn,
            zn,
          ]),
          (f[1] = []),
          f)
      return yn
    })()
    return e(n, r)
  })
  