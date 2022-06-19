(function anonymous(n, r) {
    var t = function() {
        "use strict";

        function n(r, t, f, x) {
            return new(f || (f = Promise))(function(i, e) {
                function u(n) {
                    try {
                        o(x.next(n))
                    } catch (t) {
                        e(t)
                    }
                }

                function c(n) {
                    try {
                        o(x["throw"](n))
                    } catch (t) {
                        e(t)
                    }
                }

                function o(n) {
                    var t;
                    n.done ? i(n.value) : (t = n.value, t instanceof f ? t : new f(function(n) {
                        n(t)
                    })).then(u, c)
                }
                o((x = x.apply(r, t || [])).next())
            })
        }

        function r(v, u) {
            var c, o, f, t, x = {
                label: 0,
                _: function() {
                    if (1 & f[0]) {
                        throw f[1]
                    }
                    return f[1]
                },
                l: [],
                M: []
            };
            return t = {
                next: i(0),
                C: i(1),
                h: i(2)
            }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function i(r) {
                return function(n) {
                    return function(n) {
                        if (c) {
                            throw new TypeError("Generator is already executing.")
                        }
                        for (; x;) {
                            try {
                                if (c = 1, o && (f = 2 & n[0] ? o.h : n[0] ? o.C || ((f = o["return"]) && f.call(o), 0) : o.next) && !(f = f.call(o, n[1])).done) {
                                    return f
                                }
                                switch (o = 0, f && (n = [2 & n[0], f.value]), n[0]) {
                                    case 0:
                                    case 1:
                                        f = n;
                                        break;
                                    case 4:
                                        var t = {};
                                        t.value = n[1], t.done = false;
                                        return x.label++, t;
                                    case 5:
                                        x.label++, o = n[1], n = [0];
                                        continue;
                                    case 7:
                                        ;
                                        n = x.M.pop(), x.trys.pop();
                                        continue;
                                    default:
                                        if (!(f = x.l, (f = f.length > 0 && f[f.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                            x = 0;
                                            continue
                                        }
                                        if (3 === n[0] && (!f || n[1] > f[0] && n[1] < f[3])) {
                                            x.label = n[1];
                                            break
                                        }
                                        if (6 === n[0] && x.label < f[1]) {
                                            x.label = f[1];
                                            f = n;
                                            break
                                        }
                                        if (f && x.label < f[2]) {
                                            x.label = f[2];
                                            x.ops.push(n);
                                            break
                                        }
                                        f[2] && x.M.pop(), x.trys.pop();
                                        continue
                                }
                                n = u.call(v, x)
                            } catch (e) {
                                n = [6, e];
                                o = 0
                            } finally {
                                c = f = 0
                            }
                        }
                        if (5 & n[0]) {
                            throw n[1]
                        }
                        var i = {
                            oncomplete: function(n) {
                                var t, i, e, a, v = g.reduction,
                                    u = v.value || v,
                                    c = null === (i = null === (t = null == n ? void 0 : n.renderedBuffer) || void 0 === t ? void 0 : t.getChannelData) || void 0 === i ? void 0 : i.call(t, 0),
                                    o = new Float32Array(z.frequencyBinCount),
                                    f = new Float32Array(z.fftSize);
                                return null === (e = null == z ? void 0 : z.getFloatFrequencyData) || void 0 === e || e.call(z, o), null === (a = null == z ? void 0 : z.getFloatTimeDomainData) || void 0 === a || a.call(z, f), g.disconnect(), d.disconnect(), x({
                                    _0: c,
                                    l0: u,
                                    M0: o,
                                    b0: f
                                })
                            }
                        };
                        return i.value = n[0] ? n[1] : void 0, i.done = true, i
                    }([r, n])
                }
            }
        }

        function B(n, r, t) {
            if (t || 2 === arguments.length) {
                for (var a, v = 0, u = r.length; v < u; v++) {
                    !a && v in r || (a || (a = Array.prototype.slice.call(r, 0, v)), a[v] = r[v])
                }
            }
            return n.concat(a || Array.prototype.slice.call(r))
        }

        function _0(n, r) {
            var a, v, u = (a = r, [new Promise(function(n) {
                    v = setTimeout(n, a)
                }), function() {
                    return clearTimeout(v)
                }]),
                c = u[0],
                o = u[1];
            return Promise.race([n["finally"](o), c.then(function() {
                return Promise.reject(new Error("Timeout ".concat(r, "ms")))
            })])
        }

        function c(e, a, v) {
            return void 0 === v && (v = 1e3),
                function(t) {
                    var n = function(n) {
                        n instanceof Error ? t(e, n.toString()) : t(e, "string" == typeof n ? n : null)
                    };
                    try {
                        var r = a(t);
                        if (r instanceof Promise) {
                            return _0(r, v)["catch"](n)
                        }
                    } catch (i) {
                        n(i)
                    }
                }
        }

        function _(n) {
            return 2 === AudioBuffer.length ? new AudioBuffer(new AudioContext, n) : new AudioBuffer(n)
        }

        function l0(n) {
            var t = n.seed,
                i = n.R,
                v = void 0 === i ? 2e3 : i,
                u = n.sampleRate,
                c = _({
                    length: v,
                    sampleRate: void 0 === u ? 44100 : u
                }),
                o = new Float32Array(v);
            if (!("copyFromChannel" in c)) {
                return []
            }
            var f, x, w = c.length,
                z = (f = 275, x = w - 21, Math.floor(Math.random() * (x - f + 1)) + f),
                g = z + 10,
                d = z + 20;
            c.getChannelData(0)[z] = t;
            c.getChannelData(0)[g] = t;
            c.getChannelData(0)[d] = t;
            var L = c.getChannelData(0)[z];
            c.copyFromChannel(o, 0);
            var y = [0 === c.getChannelData(0)[z] ? Math.random() : 0, 0 === c.getChannelData(0)[g] ? Math.random() : 0, 0 === c.getChannelData(0)[d] ? Math.random() : 0];
            return B(B(B([], c.getChannelData(0), true), o, true), y, true).filter(function(n, r, t) {
                return t.indexOf(n) === r
            }).filter(function(n) {
                return 0 !== n && n !== L
            })
        }

        function M0() {
            var r = Math.random(),
                t = l0({
                    seed: r
                }),
                i = function(n) {
                    var r = n.seed,
                        i = n.R,
                        e = void 0 === i ? 2e3 : i,
                        a = n.sampleRate,
                        v = _({
                            length: e,
                            sampleRate: void 0 === a ? 44100 : a
                        }),
                        u = new Float32Array(e);
                    if (!("copyToChannel" in v)) {
                        return []
                    }
                    v.copyToChannel(u.map(function() {
                        return r
                    }), 0);
                    var c = v.getChannelData(0)[0];
                    return B([], v.getChannelData(0), true).map(function(n) {
                        return n !== c || 0 === n ? Math.random() : n
                    }).filter(function(n) {
                        return n !== c
                    })
                }({
                    seed: r
                });
            return !!(t.length + i.length)
        }
        var b0 = c(1e3, function(w) {
                return n(void 0, void 0, void 0, function() {
                    var a, v, u, c, o, f, x;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return (a = window.OfflineAudioContext || window.webkitOfflineAudioContext) ? [4, (i = new a(1, 5e3, 44100), new Promise(function(x) {
                                    var z = i.createAnalyser(),
                                        g = i.createDynamicsCompressor(),
                                        d = i.createOscillator();
                                    try {
                                        d.type = "triangle";
                                        d.frequency.value = 1e4;
                                        g.threshold.value = -50;
                                        g.knee.value = 40;
                                        g.attack.value = 0
                                    } catch (n) {}
                                    z.connect(i.destination);
                                    g.connect(z);
                                    g.connect(i.destination);
                                    d.connect(g);
                                    d.start(0);
                                    i.startRendering()
                                }))] : [2];
                            case 1:
                                return (v = n.sent()) ? (u = v["_0"], c = v.l0, o = v.M0, f = v.floatTimeData, w(1001, [u && Array.from(u.slice(-500)), o && Array.from(o.slice(-500)), f && Array.from(f.slice(-500)), c], true), "AudioBuffer" in window && "copyToChannel" in AudioBuffer.prototype ? (x = M0(), w(1002, x), [2]) : [2]) : [2]
                        }
                        var i
                    })
                })
            }),
            C0 = c(1600, function(a) {
                return n(void 0, void 0, void 0, function() {
                    var t, i, e;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, null === (e = null === (i = null === navigator || void 0 === navigator ? void 0 : navigator.bluetooth) || void 0 === i ? void 0 : i.getAvailability) || void 0 === e ? void 0 : e.call(i)];
                            case 1:
                                return "boolean" != typeof(t = n.sent()) || a(1601, t), [2]
                        }
                    })
                })
            }),
            l = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"];

        function M(n, r, t, i) {
            var a = (n - 1) / r * (t || 1) || 0;
            return i ? a : Math.floor(a)
        }

        function h0(n, r, t, i, e) {
            var u = r.width,
                c = r.height,
                o = n.createRadialGradient(M(e(), t, u), M(e(), t, c), M(e(), t, u), M(e(), t, u), M(e(), t, c), M(e(), t, u));
            o.addColorStop(0, i[M(e(), t, i.length)]);
            o.addColorStop(1, i[M(e(), t, i.length)]);
            n.fillStyle = o
        }
        var s0 = [
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
                [9e3],
                [9993],
                [9999],
                [55357, 56425, 8205, 10084, 65039, 8205, 55357, 56459, 8205, 55357, 56424],
                [55357, 56424, 8205, 55357, 56425, 8205, 55357, 56423, 8205, 55357, 56422],
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
                [55356, 56703]
            ].map(function(n) {
                return String.fromCharCode.apply(String, n)
            }),
            b = "'Segoe Fluent Icons','Ink Free','Bahnschrift','Segoe MDL2 Assets','HoloLens MDL2 Assets','Leelawadee UI','Javanese Text','Segoe UI Emoji','Aldhabi','Gadugi','Myanmar Text','Nirmala UI','Lucida Console','Cambria Math','Galvji','MuktaMahee Regular','InaiMathi Bold','American Typewriter Semibold','Futura Bold','SignPainter-HouseScript Semibold','PingFang HK Light','Kohinoor Devanagari Medium','Luminari','Geneva','Helvetica Neue','Droid Sans Mono','Roboto','Ubuntu','Noto Color Emoji',sans-serif !important",
            C = {
                N0: function(n, r, t, i) {
                    var v = r.width,
                        u = r.height;
                    n.beginPath();
                    n.moveTo(M(i(), t, v), M(i(), t, u));
                    n.bezierCurveTo(M(i(), t, v), M(i(), t, u), M(i(), t, v), M(i(), t, u), M(i(), t, v), M(i(), t, u));
                    n.stroke()
                },
                K0: function(n, r, t, i) {
                    var v = r.width,
                        u = r.height;
                    n.beginPath();
                    n.arc(M(i(), t, v), M(i(), t, u), M(i(), t, Math.min(v, u)), M(i(), t, 2 * Math.PI, true), M(i(), t, 2 * Math.PI, true));
                    n.stroke()
                },
                W0: function(n, r, t, i) {
                    if ("ellipse" in n) {
                        var v = r.width,
                            u = r.height;
                        n.beginPath();
                        n.ellipse(M(i(), t, v), M(i(), t, u), M(i(), t, Math.floor(v / 2)), M(i(), t, Math.floor(u / 2)), M(i(), t, 2 * Math.PI, true), M(i(), t, 2 * Math.PI, true), M(i(), t, 2 * Math.PI, true));
                        n.stroke()
                    }
                },
                T0: function(n, r, t, i) {
                    var a = r.width,
                        v = r.height;
                    n.beginPath();
                    n.moveTo(M(i(), t, a), M(i(), t, v));
                    n.quadraticCurveTo(M(i(), t, a), M(i(), t, v), M(i(), t, a), M(i(), t, v));
                    n.stroke()
                },
                X0: function(n, r, t, i) {
                    var v = r.width,
                        u = r.height,
                        c = b.replace(/!important/gm, ""),
                        o = "xyz".concat(String.fromCharCode(55357, 56835, 55357, 56446));
                    n.font = "".concat(u / 2.99, "px ").concat(c);
                    n.strokeText(o, M(i(), t, v), M(i(), t, u), M(i(), t, v))
                }
            },
            q0 = c(1100, function(n) {
                var t = document.createElement("canvas"),
                    e = t.getContext("2d");
                if (e) {
                    ! function(n, r) {
                        if (r) {
                            var i = {
                                width: 20,
                                height: 20
                            };
                            r.clearRect(0, 0, n.width, n.height);
                            n.width = e.width;
                            n.height = e.height;
                            n.style && (n.style.display = "none");
                            for (var v = function(n, r, t) {
                                    var i = 500 % r;
                                    return function() {
                                        return i = t * i % r
                                    }
                                }(0, 2001000001, 15e3), u = Object.keys(C).map(function(n) {
                                    return C[n]
                                }), c = 0; c < 20; c += 1) {
                                h0(r, e, 2001000001, l, v);
                                r.shadowBlur = M(v(), 2001000001, 50, true);
                                r.shadowColor = l[M(v(), 2001000001, l.length)];
                                (0, u[M(v(), 2001000001, u.length)])(r, e, 2001000001, v);
                                r.fill()
                            }
                        }
                    }(t, e);
                    var a = t.toDataURL();
                    n(1101, a, true);
                    var v = function(n, r) {
                        return r ? (r.clearRect(0, 0, n.width, n.height), Math.max.apply(Math, r.getImageData(0, 0, 8, 8).data)) : null
                    }(t, e);
                    n(1102, !!v)
                }
            });

        function h() {
            var t = Math.floor(9 * Math.random()) + 7,
                i = String.fromCharCode(26 * Math.random() + 97),
                e = Math.random().toString(36).slice(-t).replace(".", "");
            return "".concat(i).concat(e)
        }
        var m0 = c(200, function(n) {
                var i = h(),
                    e = h(),
                    a = document.createElement("div");
                a.insertAdjacentHTML("beforeend", "<div>\n      <style>\n        #".concat(e, " {\n          top: 0;\n          left: 0;\n          position: absolute;\n          visibility: hidden;\n          width: 100px;\n          height: 100px;\n          transform: rotate(45deg);\n        }\n        .").concat(i, " {\n          font-family: ").concat(b, ';\n          font-size: 200px !important;\n          height: auto;\n          position: absolute !important;\n          visibility: hidden;\n          transform: scale(1.123456789);\n        }\n      </style>\n      <div id="').concat(e, '"></div>\n      ').concat(s0.map(function(n) {
                    return '<div class="'.concat(i, '">').concat(n, "</div>")
                }), "\n    </div>"));
                document.body.appendChild(a);
                try {
                    var v = function(n) {
                        for (var t = document.getElementsByClassName(n), i = [], e = 0, a = t.length; e < a; e += 1) {
                            var v = t[e].getClientRects()[0],
                                u = v.width,
                                c = v.height;
                            i.push(u, c)
                        }
                        return i
                    }(i);
                    n(201, v, true);
                    var u = document.getElementById(e).getClientRects()[0],
                        c = u.height,
                        x = u.width;
                    n(202, [x, c])
                } finally {
                    document.body.removeChild(a)
                }
            }),
            A0 = ["Segoe Fluent Icons", "HoloLens MDL2 Assets", "Leelawadee UI", "Nirmala UI", "Cambria Math", "Galvji", "InaiMathi Bold", "Futura Bold", "PingFang HK Light", "Luminari", "Helvetica Neue", "Geneva", "Droid Sans Mono", "Noto Color Emoji", "Roboto", "Ubuntu", "MS Outlook", "ZWAdobeF", "KACSTOffice", "Gentium Book Basic"];
        var H0 = c(1300, function(i) {
            return n(void 0, void 0, void 0, function() {
                var t;
                return r(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, j0(A0)];
                        case 1:
                            return (t = n["_"]()).length && i(1301, t), [2]
                    }
                })
            })
        });

        function o(n) {
            try {
                return n(), null
            } catch (t) {
                return t.message
            }
        }
        var U0 = c(1900, function(n) {
                var e = [String([Math.cos(13 * Math.E), Math.pow(Math.PI, -100), Math.sin(39 * Math.E), Math.tan(6 * Math.LN2)]), Function.toString().length, o(function() {
                    return 1..toString(-1)
                }), o(function() {
                    return new Array(-1)
                })];
                n(1901, e, true)
            }),
            G0 = ["(monochrome)", "(monochrome: 0)", "(orientation: landscape)", "(orientation: portrait)", "(color-gamut: rec2020)", "(color-gamut: p3)", "(color-gamut: srgb)", "(any-hover: hover)", "(any-hover: none)", "(hover: hover)", "(hover: none)", "(any-pointer: fine)", "(any-pointer: coarse)", "(any-pointer: none)", "(pointer: fine)", "(pointer: coarse)", "(pointer: none)", "(inverted-colors: inverted)", "(inverted-colors: none)", "(display-mode: fullscreen)", "(display-mode: standalone)", "(display-mode: minimal-ui)", "(display-mode: browser)", "(forced-colors: none)", "(forced-colors: active)", "(prefers-color-scheme: light)", "(prefers-color-scheme: dark)", "(prefers-contrast: no-preference)", "(prefers-contrast: less)", "(prefers-contrast: more)", "(prefers-contrast: custom)", "(prefers-reduced-motion: no-preference)", "(prefers-reduced-motion: reduce)", "(prefers-reduced-transparency: no-preference)", "(prefers-reduced-transparency: reduce)"],
            N0 = c(800, function(n) {
                var r = G0.map(function(n) {
                    return matchMedia(n).matches
                });
                n(801, r, true)
            }),
            Y0 = ['audio/ogg; codecs="vorbis"', "audio/mpeg", "audio/mpegurl", 'audio/wav; codecs="1"', "audio/x-m4a", "audio/aac", 'video/ogg; codecs="theora"', "video/quicktime", 'video/mp4; codecs="avc1.42E01E"', 'video/webm; codecs="vp8"', 'video/webm; codecs="vp9"', "video/x-matroska"],
            K0 = c(500, function(n) {
                var c = document.createElement("video"),
                    o = new Audio,
                    t = Y0.reduce(function(n, r) {
                        var i, e, a = {
                            Yn: r,
                            Kn: null == o ? void 0 : o.canPlayType(r),
                            Pn: null == c ? void 0 : c.canPlayType(r),
                            Vn: (null === (i = window.MediaSource) || void 0 === i ? void 0 : i.isTypeSupported(r)) || false,
                            Zn: (null === (e = window.MediaRecorder) || void 0 === e ? void 0 : e.isTypeSupported(r)) || false
                        };
                        return (a.audioPlayType || a.videoPlayType || a.Vn || a.mediaRecorder) && n.push(a), n
                    }, []);
                "ButtonBorder"
            }),
            P0 = c(600, function(n) {
                var f;
                "seed";
                "test"
            }),
            V0 = c(100, function(n) {
                var i = window.screen,
                    v = i.width,
                    u = i.height,
                    c = i.availWidth,
                    o = i.availHeight,
                    f = i.colorDepth,
                    x = i.pixelDepth;
                n(101, [v, u]);
                n(102, function(n) {
                    var t = n.width,
                        i = n.height;
                    return !("CSS2Properties" in window && "devicePixelRatio" in window && 1 !== devicePixelRatio || matchMedia("(device-width: ".concat(t, "px) and (device-height: ").concat(i, "px)")).matches)
                }({
                    width: v,
                    height: u
                }));
                var w = function() {
                        try {
                            return !!document.createEvent("TouchEvent") && "ontouchstart" in window
                        } catch (r) {
                            return false
                        }
                    }(),
                    z = navigator.maxTouchPoints,
                    g = [v, u, c, o, f, x, w, void 0 !== z ? z : null, devicePixelRatio];
                n(103, g)
            }),
            Z0 = ["ActiveBorder", "ActiveCaption", "ActiveText", "AppWorkspace", "Background", "ButtonBorder", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "Canvas", "CanvasText", "CaptionText", "Field", "FieldText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "LinkText", "Mark", "MarkText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "VisitedText", "Window", "WindowFrame", "WindowText"],
            W0 = ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"],
            S0 = c(300, function(n) {
                var i, e, a, c = document.createElement("div");
                document.body.appendChild(c);
                try {
                    var o = function(i) {
                        var a = {
                            n: getComputedStyle(i).backgroundColor,
                            n: "".concat(t.fontSize, " ").concat(t.fontFamily)
                        };
                        return Z0.forEach(function(n) {
                            i.setAttribute("style", "background-color: ".concat(n, " !important"))
                        }), W0.forEach(function(n) {
                            i.setAttribute("style", "font: ".concat(n, " !important"));
                            var t = getComputedStyle(i)
                        }), a
                    }(c);
                    n(302, o, true);
                    var f = (i = document.body, e = getComputedStyle(i), a = Object.getPrototypeOf(e), B(B([], Object.getOwnPropertyNames(a), true), Object.keys(e), true).filter(function(n) {
                        return isNaN(Number(n)) && -1 === n.indexOf("-")
                    }));
                    n(301, f, true)
                } finally {
                    document.body.removeChild(c)
                }
            }),
            p0 = ["Collator", "DateTimeFormat", "DisplayNames", "ListFormat", "NumberFormat", "PluralRules", "RelativeTimeFormat"];

        function T0(n) {
            var i = JSON.stringify(n).slice(1, 11).split("-"),
                e = i[0],
                a = i[1],
                v = i[2],
                u = "".concat(a, "/").concat(v, "/").concat(e),
                c = "".concat(e, "-").concat(a, "-").concat(v),
                o = +(+new Date(u) - +new Date(c)) / 6e4;
            return Math.floor(o)
        }

        function X0() {
            try {
                var r = p0.reduce(function(n, r) {
                    var i = {};
                    return i.type = "region", Intl[r] ? B(B([], n, true), ["DisplayNames" === r ? new Intl[r](void 0, i).resolvedOptions().locale : (new Intl[r]).resolvedOptions().locale], false) : n
                }, []).filter(function(n, r, t) {
                    return t.indexOf(n) === r
                });
                return String(r)
            } catch (t) {
                return null
            }
        }

        function J0(n) {
            var t;
            return (null === (t = /\((.+)\)/.exec(n)) || void 0 === t ? void 0 : t[1]) || ""
        }
        var O0 = c(1400, function(n) {
                var a = function() {
                    try {
                        return Intl.DateTimeFormat().resolvedOptions().timeZone
                    } catch (r) {
                        return null
                    }
                }();
                a && n(1401, a);
                var v = new Date("1/1/1970");
                n(1402, [a, T0(v), v.getTimezoneOffset(), [1879, 1921, 1952, 1976, 2018].reduce(function(n, r) {
                    return n + Number(new Date("7/1/".concat(r)))
                }, 0), J0(String(new Date)), X0()])
            }),
            f = ["platform", "platformVersion", "model", "bitness", "architecture", "uaFullVersion"],
            I0 = c(700, function(a) {
                return n(void 0, void 0, void 0, function() {
                    var i, e;
                    return r(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return (i = navigator.userAgentData) && i.getHighEntropyValues ? [4, i.sr(f)] : ("Timeout ", [2]);
                            case 1:
                                return (e = n.sent()) ? ("sin", [2]) : [2]
                        }
                    })
                })
            }),
            k0 = [35724, 7936, 7937, 7938, 34921, 36347, 35660, 36348, 36349, 33901, 33902, 34930, 3379, 35661, 34024, 3386, 34076, 2963, 2968, 36004, 36005, 3408, 35658, 35371, 37154, 35377, 35659, 35968, 35978, 35979, 35657, 35373, 37157, 35379, 35077, 34852, 36063, 36183, 32883, 35071, 34045, 35375, 35376, 35374, 33e3, 33001, 36203];

        function s(n, r) {
            if (!n.getShaderPrecisionFormat) {
                return null
            }
            var e = n.getShaderPrecisionFormat(r, n.LOW_FLOAT),
                a = n.getShaderPrecisionFormat(r, n.MEDIUM_FLOAT),
                v = n.getShaderPrecisionFormat(r, n.HIGH_FLOAT),
                u = n.getShaderPrecisionFormat(r, n.HIGH_INT);
            return [e && [e.precision, e.rangeMax, e.rangeMin], a && [a.precision, a.rangeMax, a.rangeMin], v && [v.precision, v.rangeMax, v.rangeMin], u && [u.precision, u.rangeMax, u.rangeMin]]
        }

        function E0(i) {
            if (!i.getParameter) {
                return null
            }
            var r = function(n, i) {
                    var r = n.constructor;
                    return Object.keys(r).map(function(n) {
                        return r[n]
                    }).reduce(function(n, r) {
                        return -1 !== i.indexOf(r) && n.push(r), n
                    }, [])
                }(i, k0),
                u = r.reduce(function(n, r) {
                    var t = i.getParameter(r);
                    return t && n.push(t instanceof Int32Array || t instanceof Float32Array ? B([], t, true) : t), n
                }, []),
                c = s(i, 35633),
                o = s(i, 35632),
                f = function(n) {
                    return n.getExtension && (n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic")) ? n.getParameter(34047) : null
                }(i),
                x = function(n) {
                    return n.getExtension && n.getExtension("WEBGL_draw_buffers") ? n.getParameter(34852) : null
                }(i),
                w = function(n) {
                    if (!n.getContextAttributes) {
                        return null
                    }
                    var t = n.getContextAttributes();
                    return t && "boolean" == typeof t.antialias ? t.antialias : null
                }(i);
            return B(B([], u, true), [c, o, f, x, w], false)
        }
        var A = function() {
                try {
                    return Array(-1), 0
                } catch (t) {
                    return (t.message || []).length + Function.toString().length
                }
            }(),
            j = 57 === A,
            F0 = 61 === A;

        function H(n) {
            var r = function(n) {
                var t = "OffscreenCanvas" in window ? new OffscreenCanvas(1, 1) : document.createElement("canvas"),
                    i = t.getContext(n);
                if (i) {
                    return i
                }
                try {
                    return t.getContext("experimental-".concat(n))
                } catch (e) {
                    return null
                }
            }(n);
            if (!r) {
                return null
            }
            var i = function(n) {
                    try {
                        if (F0 && "hasOwn" in Object) {
                            return [n.getParameter(n.VENDOR), n.getParameter(n.RENDERER)]
                        }
                        var t = n.getExtension("WEBGL_debug_renderer_info");
                        return t ? [n.getParameter(t.UNMASKED_VENDOR_WEBGL), n.getParameter(t.UNMASKED_RENDERER_WEBGL)] : null
                    } catch (i) {
                        return null
                    }
                }(r),
                v = function(n) {
                    return n.getSupportedExtensions ? n.getSupportedExtensions() : null
                }(r);
            return [i, v, E0(r)]
        }
        var R0 = c(2400, function(n) {
                var r = H("webgl");
                r && r[0] && n(2402, r[0]);
                var t = H("webgl2");
                t && t[0] && n(2403, t[0]);
                n(2401, [r, t], true)
            }),
            Q0 = c(400, function(n) {
                var r = Object.getOwnPropertyNames(window);
                "WEBKIT_EXT_texture_filter_anisotropic";
                "Navigator"
            }),
            $0 = c(2700, function(n) {
                var e, a;
                if (j) {
                    var v = [prompt.toString().length + close.toString().length, Object.getOwnPropertyNames(window.chrome || {}) || null, (null === (e = null === window || void 0 === window ? void 0 : window.process) || void 0 === e ? void 0 : e.type) || null];
                    n(2701, v);
                    var u = navigator.userAgent,
                        c = navigator.userAgentData || {},
                        o = c.et,
                        f = c.vt,
                        x = c.platform,
                        w = [(o || []).map(function(n) {
                            return "".concat(n.brand, " ").concat(n.version)
                        }), f, x],
                        z = "hasOwn" in Object && "share" in navigator;
                    n(2702, [w, z]);
                    var g = null === (a = /like Gecko\) (.+)\/.+ Chrome\/.+ Electron\//.exec(u)) || void 0 === a ? void 0 : a[1];
                    g && n(2703, g)
                }
            }),
            nn = ["_evaluation_script__", ".<computed> [as apply]", "utilityscript.evaluate", "evaluatefunction", "callfunctionon"],
            U = ["chrome", "cookieStore", "ondevicemotion", "speechSynthesis"];

        function rn(n) {
            try {
                throw n(), Error("")
            } catch (e) {
                var i = (e.stack || "").toLowerCase();
                return nn.map(function(n) {
                    return -1 !== i.indexOf(n)
                })
            }
        }
        var tn = U.reduce(function(n, r) {
                return n[r] = true, n
            }, {}),
            en = c(2900, function(n) {
                var t = navigator,
                    i = t.pdfViewerEnabled,
                    e = t.mimeTypes,
                    v = t.plugins,
                    u = t.webdriver,
                    c = [void 0 !== u ? u : null, rn(Number.toString.call), null, null, null];
                j && (c[2] = "PictureInPictureWindow" in window, c[3] = [e ? e.length : null, v ? v.length : null, void 0 !== i ? i : null], c[4] = function(n) {
                    var t = {},
                        i = 0;
                    for (var e in n) tn[e] && (t[e] = i), i += 1;
                    return U.map(function(n) {
                        return n in t ? t[n] : -1
                    })
                }(window));
                n(2901, c)
            });

        function G(n, r) {
            try {
                throw n(), Error("")
            } catch (e) {
                return (e.name + e.message).length
            } finally {
                r && r()
            }
        }

        function N(n, r) {
            if (!n) {
                return 0
            }
            var a = n.name,
                v = /^Screen|Navigator$/.test(a) && window[a.toLowerCase()],
                u = "prototype" in n ? n.prototype : Object.getPrototypeOf(n),
                c = ((null == r ? void 0 : r.length) ? r : Object.getOwnPropertyNames(u)).reduce(function(n, r) {
                    var t = function(n, r) {
                        try {
                            var i = Object.getOwnPropertyDescriptor(n, r);
                            if (!i) {
                                return null
                            }
                            var e = i.value,
                                a = i.get;
                            return e || a
                        } catch (v) {
                            return null
                        }
                    }(u, r);
                    if (!t) {
                        return n
                    }
                    var i = function(n, r, t) {
                        return (n ? (typeof Object.getOwnPropertyDescriptor(n, t)).length : 0) + Object.getOwnPropertyNames(r).length
                    }(v, t, r) + function(r) {
                        var n = [G(function() {
                            return r()["catch"](function() {})
                        }), G(function() {
                            throw Error(Object.create(r))
                        }), G(function() {
                            r.arguments;
                            r.caller
                        }), G(function() {
                            r.toString.arguments;
                            r.toString.caller
                        }), G(function() {
                            return Object.create(r).toString()
                        })];
                        if ("toString" === r.name) {
                            var u = Object.getPrototypeOf(r);
                            n.push.apply(n, [G(function() {
                                Object.setPrototypeOf(r, Object.create(r)).toString()
                            }, function() {
                                return Object.setPrototypeOf(r, u)
                            }), G(function() {
                                Reflect.setPrototypeOf(r, Object.create(r))
                            }, function() {
                                return Object.setPrototypeOf(r, u)
                            })])
                        }
                        return Number(n.join(""))
                    }(t) + function(n) {
                        return (n.toString() + n.toString.toString()).length
                    }(t);
                    return n + i
                }, 0);
            return (v ? Object.getOwnPropertyNames(v).length : 0) + c
        }

        function an() {
            try {
                return performance.mark(""), !(performance.getEntriesByType("mark").length + performance.getEntries().length)
            } catch (t) {
                return null
            }
        }
        var Y, vn = c(2800, function(n) {
                var i, e, a, v, u, c = [N(window.AudioBuffer, ["getChannelData"]), N(window.AnalyserNode, ["getFloatFrequencyData"]), N(window.CanvasRenderingContext2D, ["getImageData"]), N(window.Date, ["getTimezoneOffset"]), N(window.Document, ["createElement"]), N(window.Element, ["append", "getClientRects"]), N(window.FontFace, ["load"]), N(window.Function, ["toString"]), N(window.HTMLCanvasElement, ["toDataURL", "getContext"]), N(window.HTMLIFrameElement, ["contentWindow"]), N(window.Navigator, ["deviceMemory", "hardwareConcurrency", "maxTouchPoints", "userAgent"]), N(window.Node, ["appendChild"]), N(window.Screen, ["width", "pixelDepth"]), N(window.SVGTextContentElement, ["getComputedTextLength"]), N(window.WebGLRenderingContext, ["getParameter"])],
                    o = c.reduce(function(n, r) {
                        return n + r
                    }, 0);
                n(2801, c, true);
                n(2802, o);
                n(2803, (i = "flat" in [] ? "ReportingObserver" in window : null, e = "keyboard" in navigator && navigator.keyboard, a = "MediaDevices" in window, v = "PerformanceObserver" in window && "takeRecords" in PerformanceObserver.prototype ? "Credential" in window : null, u = "onrejectionhandled" in window ? "RTCRtpTransceiver" in window : null, [Function.toString().length, an(), i, "object" == typeof e ? String(e) : e, a, v, u]))
            }),
            un = ((Y = {})[0] = [C0, m0, H0, U0, N0, K0, P0, V0, S0, O0, I0, Q0, q0, R0, b0, $0, en, vn], Y[1] = [], Y);
        return on
    }();
    return t(n, r)
});