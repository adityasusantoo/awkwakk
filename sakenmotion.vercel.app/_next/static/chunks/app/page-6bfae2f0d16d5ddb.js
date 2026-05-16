(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        199: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 8948))
        },
        8948: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => b
            });
            var l = a(5155),
                r = a(2115);
            let n = {
                    "kling-2.6-std": {
                        label: "Kling 2.6 Standard",
                        createUrl: "https://api.magnific.com/v1/ai/video/kling-v2-6-motion-control-std",
                        statusUrl: "https://api.magnific.com/v1/ai/image-to-video/kling-v2-6/{taskId}"
                    },
                    "kling-2.6-pro": {
                        label: "Kling 2.6 Pro",
                        createUrl: "https://api.magnific.com/v1/ai/video/kling-v2-6-motion-control-pro",
                        statusUrl: "https://api.magnific.com/v1/ai/image-to-video/kling-v2-6/{taskId}"
                    },
                    "kling-3-std": {
                        label: "Kling 3 Standard",
                        createUrl: "https://api.magnific.com/v1/ai/video/kling-v3-motion-control-std",
                        statusUrl: "https://api.magnific.com/v1/ai/video/kling-v3-motion-control-std/{taskId}"
                    },
                    "kling-3-pro": {
                        label: "Kling 3 Pro",
                        createUrl: "https://api.magnific.com/v1/ai/video/kling-v3-motion-control-pro",
                        statusUrl: "https://api.magnific.com/v1/ai/video/kling-v3-motion-control-pro/{taskId}"
                    }
                },
                s = /\.(mp4|webm|mov|m4v|m3u8)/i,
                i = /video|output|result|download/i,
                o = "https://snowy-dream-967b.cintakupalsu38.workers.dev",
                c = Object.keys(n),
                d = [{
                    value: "video",
                    label: "Video (default)"
                }, {
                    value: "image",
                    label: "Image"
                }],
                u = ["insufficient credit", "out of credit", "no credit", "quota", "limit reached", "limit exceeded", "usage limit", "exhausted", "balance", "subscription", "plan", "invalid api key", "invalid key", "api key", "apikey", "unauthorized", "authentication failed", "not authorized", "billing", "payment", "upgrade"];

            function x(e, t) {
                var a;
                if (401 === e) return !0;
                let l = ((null == t ? void 0 : t.message) || (null == t ? void 0 : t.error) || (null == t ? void 0 : t.detail) || (null == t || null == (a = t.data) ? void 0 : a.message) || "").toLowerCase();
                return u.some(e => l.includes(e))
            }

            function p(e, t) {
                if (x(e, t)) return !1;
                if (403 === e || 429 === e) return !0;
                let a = ((null == t ? void 0 : t.message) || (null == t ? void 0 : t.error) || "").toLowerCase();
                return !!(a.includes("suspicious activity") || a.includes("ip") && (a.includes("block") || a.includes("ban")))
            }

            function f(e) {
                var t;
                let a = ((null == e ? void 0 : e.message) || (null == e ? void 0 : e.error) || (null == e ? void 0 : e.detail) || (null == e || null == (t = e.data) ? void 0 : t.message) || "").trim();
                return a ? "API key error: ".concat(a) : "API key tidak valid atau limit habis. Coba ganti API key."
            }

            function m(e) {
                return e[Math.floor(Math.random() * e.length)]
            }

            function h(e) {
                let t = Math.floor(e / 1e3),
                    a = Math.floor(t / 60),
                    l = t % 60;
                return 0 === a ? "".concat(l, " detik") : "".concat(a, " menit ").concat(l, " detik")
            }
            let v = ["Task Dibuat", "Proses", "Selesai"];

            function g(e) {
                let {
                    step: t,
                    errorMsg: a
                } = e;
                if ("idle" === t) return null;
                let r = "created" === t ? 0 : "processing" === t ? 1 : 2,
                    n = "failed" === t,
                    s = "done" === t;
                return (0, l.jsxs)("div", {
                    className: "p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl space-y-4 backdrop-blur-sm",
                    children: [(0, l.jsx)("div", {
                        className: "flex items-center gap-0",
                        children: v.map((e, t) => {
                            let a = !n && r === t,
                                i = !n && r > t;
                            return (0, l.jsxs)("div", {
                                className: "flex items-center flex-1 last:flex-none",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex flex-col items-center gap-1 flex-1",
                                    children: [(0, l.jsx)("div", {
                                        className: "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ".concat(n && 2 === t ? "bg-red-500/20 border border-red-500/50 text-red-400" : i ? "bg-zinc-100 text-zinc-950" : a ? "bg-white ring-4 ring-white/10 text-zinc-950" : "bg-zinc-900 border border-zinc-800 text-zinc-600"),
                                        children: i ? "✓" : n && 2 === t ? "✕" : t + 1
                                    }), (0, l.jsx)("span", {
                                        className: "text-[10px] font-semibold tracking-wider uppercase ".concat(n && 2 === t ? "text-red-400" : i || a ? "text-zinc-200" : "text-zinc-600"),
                                        children: 2 === t && n ? "Gagal" : 2 === t && s ? "Selesai" : e
                                    })]
                                }), t < v.length - 1 && (0, l.jsx)("div", {
                                    className: "h-[1px] flex-1 mx-2 mb-4 rounded transition-all ".concat(r > t && !n ? "bg-zinc-200" : "bg-zinc-800")
                                })]
                            }, e)
                        })
                    }), n && a && (0, l.jsxs)("div", {
                        className: "bg-red-950/30 border border-red-900/50 rounded-xl px-3 py-2",
                        children: [(0, l.jsx)("p", {
                            className: "text-xs text-red-400 font-medium",
                            children: "Alasan gagal:"
                        }), (0, l.jsx)("p", {
                            className: "text-xs text-red-300 mt-0.5 break-words",
                            children: a
                        })]
                    })]
                })
            }

            function b() {
                let [e, t] = (0, r.useState)(""), [a, u] = (0, r.useState)(null), [v, b] = (0, r.useState)(null), [w, F] = (0, r.useState)(null), [S, R] = (0, r.useState)(null), [_, T] = (0, r.useState)(c[0]), [L, P] = (0, r.useState)(""), [U, M] = (0, r.useState)("video"), [I, O] = (0, r.useState)(.5), [E, A] = (0, r.useState)("idle"), [D, G] = (0, r.useState)(0), [K, B] = (0, r.useState)("idle"), [H, V] = (0, r.useState)(""), [W, z] = (0, r.useState)(""), [J, q] = (0, r.useState)(null), [Q, $] = (0, r.useState)(null), [X, Y] = (0, r.useState)(""), Z = (0, r.useRef)(null), ee = (0, r.useRef)(null), et = (0, r.useRef)(null), ea = (0, r.useRef)(null), el = (0, r.useRef)(null), er = (0, r.useRef)(null), en = (0, r.useRef)(null), es = (0, r.useRef)(null), ei = (0, r.useRef)([]), eo = (0, r.useRef)(new Set);
                (0, r.useEffect)(() => {
                    fetch("/proxies.json?_=" + Date.now()).then(e => e.json()).then(e => {
                        let t = (e.proxies || []).map(e => e.trim().replace(/\/$/, "")).filter(Boolean);
                        ei.current = t, Y("".concat(t.length, " proxy tersedia"))
                    }).catch(() => Y("Gagal memuat daftar proxy"))
                }, []), (0, r.useEffect)(() => {
                    let e = () => {
                        fetch("".concat(o, "/count")).then(e => e.json()).then(e => {
                            "number" == typeof e.total && $(e.total)
                        }).catch(() => {})
                    };
                    e();
                    let t = setInterval(e, 6e4);
                    return () => clearInterval(t)
                }, []);
                let ec = (0, r.useCallback)(() => ei.current.filter(e => !eo.current.has(e)), []),
                    ed = (0, r.useCallback)(e => {
                        eo.current.add(e);
                        let t = ei.current.length,
                            a = ei.current.filter(e => !eo.current.has(e)).length;
                        Y("Proxy dirotasi — ".concat(a, "/").concat(t, " tersisa"))
                    }, []),
                    eu = (0, r.useCallback)(async () => {
                        let e = [Z.current, ee.current].filter(Boolean);
                        if (0 !== e.length) {
                            Z.current = null, ee.current = null;
                            try {
                                await fetch("/api/delete-blob", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        urls: e
                                    })
                                })
                            } catch (e) {}
                        }
                    }, []),
                    ex = (0, r.useCallback)(() => {
                        et.current && (clearTimeout(et.current), et.current = null)
                    }, []),
                    ep = (0, r.useCallback)(() => {
                        ea.current && (clearTimeout(ea.current), ea.current = null)
                    }, []),
                    ef = (0, r.useCallback)(() => {
                        el.current && (clearInterval(el.current), el.current = null)
                    }, []),
                    em = (0, r.useCallback)(() => {
                        ef(), er.current = Date.now(), G(0), el.current = setInterval(() => {
                            G(Date.now() - er.current)
                        }, 1e3)
                    }, [ef]),
                    eh = (0, r.useCallback)(async function(e, t, a) {
                        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Set,
                            r = ec().filter(e => !l.has(e));
                        if (0 === r.length) throw Error("Semua ".concat(ei.current.length, " proxy tidak tersedia. Tambah proxy baru di proxies.json."));
                        let n = m(r);
                        l.add(n);
                        try {
                            let r = await fetch("".concat(n, "/generate"), {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "x-proxy-api-key": e
                                    },
                                    body: JSON.stringify({
                                        model: t,
                                        ...a
                                    })
                                }),
                                s = await r.json();
                            if (x(r.status, s)) {
                                let e = Error(f(s));
                                throw e.isApiKeyError = !0, e
                            }
                            if (p(r.status, s)) return ed(n), eh(e, t, a, l);
                            return {
                                res: r,
                                data: s
                            }
                        } catch (r) {
                            if (r.isApiKeyError) throw r;
                            return ed(n), eh(e, t, a, l)
                        }
                    }, [ec, ed]),
                    ev = (0, r.useCallback)((e, t, a) => {
                        ex(), ea.current = setTimeout(async () => {
                            ex(), ef(), await eu(), A("error"), B("failed"), V("Task timeout setelah 20 menit. File referensi sudah dihapus.")
                        }, 12e5);
                        let l = () => {
                                et.current = setTimeout(r, 6e4 + (Math.floor(20001 * Math.random()) - 1e4))
                            },
                            r = async () => {
                                try {
                                    var r, n, c, d, u;
                                    let h, v, g = ec();
                                    if (0 === g.length) {
                                        ex(), ep(), ef(), await eu(), A("error"), B("failed"), V("Semua proxy mati. Tambah proxy baru di proxies.json.");
                                        return
                                    }
                                    let b = m(g);
                                    try {
                                        h = await fetch("".concat(b, "/status/").concat(encodeURIComponent(t), "/").concat(encodeURIComponent(e)), {
                                            method: "GET",
                                            headers: {
                                                "x-proxy-api-key": a
                                            }
                                        }), v = await h.json()
                                    } catch (e) {
                                        ed(b), null !== et.current && l();
                                        return
                                    }
                                    if (!h.ok) {
                                        if (x(h.status, v)) {
                                            ex(), ep(), ef(), await eu(), A("error"), B("failed"), V(f(v));
                                            return
                                        }
                                        if (p(h.status, v)) {
                                            ed(b), null !== et.current && l();
                                            return
                                        }
                                        ex(), ep(), ef(), await eu();
                                        let e = (null == v ? void 0 : v.message) || (null == v ? void 0 : v.error) || "Error ".concat(h.status);
                                        A("error"), B("failed"), V(e);
                                        return
                                    }
                                    let j = (r = v) && ((null == r ? void 0 : r.status) || (null == r || null == (n = r.data) ? void 0 : n.status) || (null == r || null == (c = r.result) ? void 0 : c.status) || (null == r || null == (d = r.task) ? void 0 : d.status)) || null,
                                        y = function(e) {
                                            var t, a, l, r, n, o, c, d, u, x;
                                            if (!e) return null;
                                            for (let s of [null == e ? void 0 : e.video_url, null == e ? void 0 : e.output_url, null == e ? void 0 : e.result_url, null == e ? void 0 : e.url, null == e ? void 0 : e.download_url, null == e || null == (t = e.output) ? void 0 : t[0], null == e || null == (a = e.outputs) ? void 0 : a[0], null == e || null == (r = e.data) || null == (l = r.output) ? void 0 : l[0], null == e || null == (o = e.result) || null == (n = o.output) ? void 0 : n[0], null == e || null == (c = e.data) ? void 0 : c.video_url, null == e || null == (d = e.result) ? void 0 : d.video_url, null == e || null == (u = e.data) ? void 0 : u.url, null == e || null == (x = e.result) ? void 0 : x.url])
                                                if ("string" == typeof s && s.startsWith("http")) return s;
                                            return function e(t) {
                                                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                                if (a > 6) return null;
                                                if ("string" == typeof t) {
                                                    try {
                                                        let e = new URL(t);
                                                        if (s.test(e.pathname) || i.test(e.pathname)) return t
                                                    } catch (e) {}
                                                    return null
                                                }
                                                if (Array.isArray(t)) {
                                                    for (let l of t) {
                                                        let t = e(l, a + 1);
                                                        if (t) return t
                                                    }
                                                    return null
                                                }
                                                if (t && "object" == typeof t) {
                                                    let l = ["video_url", "output_url", "result_url", "url", "download_url"];
                                                    for (let r of l)
                                                        if (t[r]) {
                                                            let l = e(t[r], a + 1);
                                                            if (l) return l
                                                        }
                                                    for (let r of Object.keys(t)) {
                                                        if (l.includes(r)) continue;
                                                        let n = e(t[r], a + 1);
                                                        if (n) return n
                                                    }
                                                }
                                                return null
                                            }(e)
                                        }(v);
                                    if (y) {
                                        ex(), ep(), ef(), await eu(), q(y), A("done"), B("done"), fetch("".concat(o, "/increment"), {
                                            method: "POST"
                                        }).then(e => e.json()).then(e => {
                                            "number" == typeof e.total && $(e.total)
                                        }).catch(() => {});
                                        return
                                    }
                                    let k = (j || "").toLowerCase(),
                                        w = ["success", "completed", "succeeded", "done"].includes(k),
                                        N = ["failed", "error", "cancelled"].includes(k);
                                    if (w) {
                                        ex(), ep(), ef(), await eu(), A("error"), B("failed"), V("Task ".concat(k, " tapi URL video tidak ditemukan. Coba lagi."));
                                        return
                                    }
                                    if (N) {
                                        ex(), ep(), ef(), await eu(),
                                            function e(t) {
                                                if (!t || "object" != typeof t) return t;
                                                let a = ["apikey", "api_key", "x-magnific-api-key", "x-proxy-api-key", "token", "secret"],
                                                    l = Array.isArray(t) ? [] : {};
                                                for (let [r, n] of Object.entries(t)) a.some(e => r.toLowerCase().includes(e)) ? l[r] = "[redacted]" : "object" == typeof n && null !== n ? l[r] = e(n) : l[r] = n;
                                                return l
                                            }(v);
                                        let e = (null == v ? void 0 : v.message) || (null == v ? void 0 : v.error) || (null == v || null == (u = v.data) ? void 0 : u.message) || "Task ".concat(k);
                                        A("error"), B("failed"), V(e);
                                        return
                                    }
                                } catch (e) {
                                    ex(), ep(), ef(), await eu(), A("error"), B("failed"), V(e.message || "Polling error.");
                                    return
                                }
                                null !== et.current && l()
                            };
                        l()
                    }, [ex, ep, ef, eu, ec, ed]),
                    eg = async () => {
                        if (z(""), q(null), B("idle"), V(""), G(0), Z.current = null, ee.current = null, eo.current = new Set, !e.trim()) return void z("API key harus diisi.");
                        if (!a) return void z("Upload gambar referensi dulu.");
                        if (!w) return void z("Upload video referensi dulu.");
                        if (!_) return void z("Pilih model dulu.");
                        if (0 === ei.current.length) return void z("Daftar proxy kosong.");
                        try {
                            var t, l, r, n;
                            A("uploading"), em();
                            let s = new FormData;
                            s.append("file", a), s.append("fileType", "image");
                            let i = await fetch("/api/upload", {
                                    method: "POST",
                                    body: s
                                }),
                                o = await i.json();
                            if (!i.ok) throw Error(o.error || "Upload gambar gagal.");
                            Z.current = o.url;
                            let c = new FormData;
                            c.append("file", w), c.append("fileType", "video");
                            let d = await fetch("/api/upload", {
                                    method: "POST",
                                    body: c
                                }),
                                u = await d.json();
                            if (!d.ok) throw Error(u.error || "Upload video gagal.");
                            ee.current = u.url, A("generating");
                            let {
                                res: x,
                                data: p
                            } = await eh(e, _, {
                                image_url: o.url,
                                video_url: u.url,
                                ...L ? {
                                    prompt: L
                                } : {},
                                ...U ? {
                                    character_orientation: U
                                } : {},
                                cfg_scale: Number(I)
                            });
                            if (!x.ok) throw Error((null == p ? void 0 : p.message) || (null == p ? void 0 : p.error) || "Generate gagal: ".concat(x.status));
                            let f = p && ((null == p ? void 0 : p.task_id) || (null == p ? void 0 : p.id) || (null == p ? void 0 : p.taskId) || (null == p || null == (t = p.data) ? void 0 : t.task_id) || (null == p || null == (l = p.data) ? void 0 : l.id) || (null == p || null == (r = p.result) ? void 0 : r.task_id) || (null == p || null == (n = p.result) ? void 0 : n.id)) || null;
                            if (!f) throw Error("Tidak ada taskId dari response.");
                            A("polling"), B("created"), setTimeout(() => B("processing"), 2e3), ev(f, _, e)
                        } catch (e) {
                            ex(), ep(), ef(), await eu(), A("error"), B("failed"), V(e.message || "Terjadi error tak terduga.")
                        }
                    },
                    eb = "uploading" === E || "generating" === E || "polling" === E,
                    ej = "uploading" === E ? "Mengupload file..." : "generating" === E ? "Mengirim ke Magnific..." : "polling" === E ? "Menunggu hasil... ".concat(h(D)) : "";
                return (0, l.jsx)("main", {
                    className: "min-h-screen bg-black text-zinc-200 py-12 px-4 selection:bg-zinc-500/30",
                    children: (0, l.jsxs)("div", {
                        className: "max-w-2xl mx-auto space-y-4",
                        children: [(0, l.jsxs)("div", {
                            className: "relative overflow-hidden p-10 text-center bg-zinc-900/20 border border-zinc-800/50 rounded-[2.5rem] shadow-2xl backdrop-blur-xl",
                            children: [(0, l.jsx)("h1", {
                                className: "text-4xl font-extrabold tracking-tighter text-white mb-3 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent",
                                children: "ADIT AI TESTER"
                            }), (0, l.jsxs)("p", {
                                className: "text-sm text-zinc-500 font-medium",
                                children: ["motion control generator by", " ", (0, l.jsx)("span", {
                                    className: "text-zinc-300 font-semibold",
                                    children: "ADITYA"
                                })]
                            }), (0, l.jsx)("a", {
                                href: "https://www.facebook.com/aditya.su.ll",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-block mt-4 text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors",
                                children: "Support: facebook.com/aditya.su.ll"
                            }), null !== Q && (0, l.jsxs)("div", {
                                className: "mt-6 inline-flex items-center gap-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full px-5 py-2",
                                children: [(0, l.jsx)("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                                }), (0, l.jsxs)("span", {
                                    className: "text-[10px] font-bold text-zinc-400 uppercase tracking-widest",
                                    children: [Q.toLocaleString(), " video berhasil dibuat"]
                                })]
                            })]
                        }), X && (0, l.jsxs)("div", {
                            className: "card px-4 py-2 text-xs ".concat(X.includes("dirotasi") ? "border-yellow-900/40 bg-yellow-950/20 text-yellow-500" : X.includes("Gagal") ? "border-red-900/40 bg-red-950/20 text-red-400" : "border-[#2a2a1a] text-[#888878]"),
                            children: ["⟳ ", X]
                        }), (0, l.jsxs)("div", {
                            className: "card p-4 space-y-2",
                            children: [(0, l.jsx)(j, {
                                text: "API Key",
                                hint: "Magnific / Freepik API key — tidak disimpan"
                            }), (0, l.jsx)("input", {
                                type: "password",
                                value: e,
                                onChange: e => t(e.target.value),
                                placeholder: "••••••••••••••••••••••••••••",
                                autoComplete: "off",
                                className: "w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-600 focus:bg-zinc-900 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-zinc-700 outline-none transition-all"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: [(0, l.jsxs)("div", {
                                className: "p-1 bg-zinc-900/30 border border-zinc-800/50 rounded-[2rem] space-y-2",
                                children: [(0, l.jsx)(j, {
                                    text: "Image Ref",
                                    hint: "JPG, PNG, WebP \xb7 max 15 MB"
                                }), (0, l.jsx)(k, {
                                    accept: "image/jpeg,image/jpg,image/png,image/webp",
                                    preview: v,
                                    previewType: "image",
                                    label: "Drop image here",
                                    onChange: e => {
                                        var t;
                                        let a = null == (t = e.target.files) ? void 0 : t[0];
                                        a && (u(a), b(URL.createObjectURL(a)))
                                    },
                                    inputRef: en,
                                    fileName: null == a ? void 0 : a.name
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "p-1 bg-zinc-900/30 border border-zinc-800/50 rounded-[2rem] space-y-2",
                                children: [(0, l.jsx)(j, {
                                    text: "Video Ref",
                                    hint: "MP4, MOV, WebM \xb7 max 100 MB"
                                }), (0, l.jsx)(k, {
                                    accept: "video/mp4,video/quicktime,video/webm,video/x-m4v",
                                    preview: S,
                                    previewType: "video",
                                    label: "Drop video here",
                                    onChange: e => {
                                        var t;
                                        let a = null == (t = e.target.files) ? void 0 : t[0];
                                        a && (F(a), R(URL.createObjectURL(a)))
                                    },
                                    inputRef: es,
                                    fileName: null == w ? void 0 : w.name
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "card p-4 space-y-2",
                            children: [(0, l.jsx)(j, {
                                text: "Model"
                            }), (0, l.jsxs)("div", {
                                className: "relative",
                                children: [(0, l.jsx)("select", {
                                    value: _,
                                    onChange: e => T(e.target.value),
                                    className: "w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-600 rounded-2xl px-5 py-4 text-sm text-white outline-none appearance-none cursor-pointer transition-all",
                                    children: c.map(e => (0, l.jsx)("option", {
                                        value: e,
                                        children: n[e].label
                                    }, e))
                                }), (0, l.jsx)(y, {})]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "card p-4 space-y-2",
                            children: [(0, l.jsx)(j, {
                                text: "Prompt",
                                hint: "Opsional"
                            }), (0, l.jsx)("textarea", {
                                value: L,
                                onChange: e => P(e.target.value),
                                placeholder: "contoh: The character walks forward slowly...",
                                rows: 3,
                                className: "w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-600 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-zinc-700 outline-none resize-none transition-all"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: [(0, l.jsxs)("div", {
                                className: "card p-4 space-y-2",
                                children: [(0, l.jsx)(j, {
                                    text: "Character Orientation"
                                }), (0, l.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, l.jsx)("select", {
                                        value: U,
                                        onChange: e => M(e.target.value),
                                        className: "w-full bg-zinc-900/50 border border-zinc-800 focus:border-zinc-600 rounded-2xl px-5 py-4 text-sm text-white outline-none appearance-none cursor-pointer transition-all",
                                        children: d.map(e => (0, l.jsx)("option", {
                                            value: e.value,
                                            children: e.label
                                        }, e.value))
                                    }), (0, l.jsx)(y, {})]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "card p-4 space-y-2",
                                children: [(0, l.jsx)(j, {
                                    text: "CFG Scale",
                                    hint: "".concat(I.toFixed(2), " \xb7 0 = bebas, 1 = ketat")
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center gap-3 pt-1",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-[10px] font-bold text-zinc-700",
                                        children: "0"
                                    }), (0, l.jsx)("input", {
                                        type: "range",
                                        min: 0,
                                        max: 1,
                                        step: .01,
                                        value: I,
                                        onChange: e => O(parseFloat(e.target.value)),
                                        className: "flex-1 h-1 bg-zinc-800 rounded-full cursor-pointer accent-white"
                                    }), (0, l.jsx)("span", {
                                        className: "text-[10px] font-bold text-zinc-700",
                                        children: "1"
                                    })]
                                })]
                            })]
                        }), W && (0, l.jsx)("div", {
                            className: "card border-red-900/60 bg-red-950/30 px-4 py-3 text-red-400 text-sm",
                            children: W
                        }), eb && (0, l.jsxs)("div", {
                            className: "card card-yellow p-4 space-y-2",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [(0, l.jsx)(N, {}), (0, l.jsx)("span", {
                                    className: "text-xs text-zinc-400 font-medium",
                                    children: ej
                                })]
                            }), (0, l.jsx)("div", {
                                className: "progress-bar-track",
                                children: (0, l.jsx)("div", {
                                    className: "progress-bar-indeterminate"
                                })
                            })]
                        }), "done" === E && (0, l.jsxs)("div", {
                            className: "card card-yellow p-4 space-y-2",
                            children: [(0, l.jsxs)("span", {
                                className: "text-xs text-zinc-100 font-medium",
                                children: ["Video siap! Selesai dalam ", h(D)]
                            }), (0, l.jsx)("div", {
                                className: "h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden",
                                children: (0, l.jsx)("div", {
                                    className: "h-full bg-white w-full"
                                })
                            })]
                        }), (0, l.jsx)(g, {
                            step: K,
                            errorMsg: H
                        }), (0, l.jsx)("button", {
                            onClick: eg,
                            disabled: eb,
                            className: "w-full py-5 rounded-[1.5rem] font-bold text-sm uppercase tracking-[0.2em] transition-all bg-white hover:bg-zinc-200 disabled:opacity-20 disabled:cursor-not-allowed text-black shadow-xl shadow-white/5 active:scale-[0.98]",
                            children: eb ? "Processing... ".concat(h(D)) : "Generate Masterpiece"
                        }), J && (0, l.jsx)(C, {
                            url: J
                        }), (0, l.jsx)("div", {
                            className: "pb-4"
                        })]
                    })
                })
            }

            function j(e) {
                let {
                    text: t,
                    hint: a
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex items-baseline gap-2",
                    children: [(0, l.jsx)("span", {
                        className: "text-[10px] font-bold text-zinc-500 uppercase tracking-widest",
                        children: t
                    }), a && (0, l.jsx)("span", {
                        className: "text-[10px] text-zinc-700",
                        children: a
                    })]
                })
            }

            function y() {
                return (0, l.jsx)("div", {
                    className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2",
                    children: (0, l.jsx)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            d: "M2 4L6 8L10 4",
                            stroke: "#888878",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                })
            }

            function k(e) {
                let {
                    accept: t,
                    preview: a,
                    previewType: r,
                    label: n,
                    onChange: s,
                    inputRef: i,
                    fileName: o
                } = e;
                return (0, l.jsxs)("div", {
                    className: "relative group cursor-pointer rounded-[1.75rem] border border-dashed border-zinc-800 hover:border-zinc-600 transition-all overflow-hidden bg-zinc-950/50",
                    style: {
                        minHeight: 140
                    },
                    onClick: () => {
                        var e;
                        return null == (e = i.current) ? void 0 : e.click()
                    },
                    children: [(0, l.jsx)("input", {
                        ref: i,
                        type: "file",
                        accept: t,
                        onChange: s,
                        className: "hidden"
                    }), a ? "image" === r ? (0, l.jsxs)("div", {
                        className: "relative w-full h-full",
                        style: {
                            minHeight: 140
                        },
                        children: [(0, l.jsx)("img", {
                            src: a,
                            alt: "Preview",
                            className: "w-full h-full object-cover",
                            style: {
                                maxHeight: 200
                            }
                        }), (0, l.jsx)("div", {
                            className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                            children: (0, l.jsx)("span", {
                                className: "text-xs text-white font-bold",
                                children: "Ganti"
                            })
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: "relative w-full",
                        style: {
                            minHeight: 140
                        },
                        children: [(0, l.jsx)("video", {
                            src: a,
                            className: "w-full",
                            style: {
                                maxHeight: 200
                            },
                            muted: !0,
                            playsInline: !0
                        }), (0, l.jsx)("div", {
                            className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                            children: (0, l.jsx)("span", {
                                className: "text-xs text-[#000000] font-bold",
                                children: "Ganti"
                            })
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: "flex flex-col items-center justify-center h-full py-8 gap-2",
                        children: [(0, l.jsx)(w, {}), (0, l.jsx)("p", {
                            className: "text-xs text-[#444438] text-center px-2",
                            children: n
                        })]
                    }), o && (0, l.jsx)("div", {
                        className: "absolute bottom-0 left-0 right-0 bg-black/70 px-2 py-1",
                        children: (0, l.jsx)("p", {
                            className: "text-[10px] text-zinc-500 truncate",
                            children: o
                        })
                    })]
                })
            }

            function w() {
                return (0, l.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#3a3200",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, l.jsx)("path", {
                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    }), (0, l.jsx)("polyline", {
                        points: "17 8 12 3 7 8"
                    }), (0, l.jsx)("line", {
                        x1: "12",
                        y1: "3",
                        x2: "12",
                        y2: "15"
                    })]
                })
            }

            function N() {
                return (0, l.jsxs)("span", {
                    className: "flex gap-1 items-center",
                    children: [
                        [0, 1, 2].map(e => (0, l.jsx)("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-white",
                            style: {
                                animation: "pulse 1.2s ease-in-out ".concat(.2 * e, "s infinite")
                            }
                        }, e)), (0, l.jsx)("style", {
                            children: "@keyframes pulse{0%,100%{opacity:.2;transform:scale(.8)}50%{opacity:1;transform:scale(1)}}"
                        })
                    ]
                })
            }

            function C(e) {
                let {
                    url: t
                } = e, [a, n] = (0, r.useState)("preview"), [s, i] = (0, r.useState)(!1), o = async () => {
                    i(!0);
                    try {
                        let e = await fetch(t),
                            a = await e.blob(),
                            l = t.split("?")[0].split(".").pop() || "mp4",
                            r = document.createElement("a");
                        r.href = URL.createObjectURL(a), r.download = "saken-geal-geol-".concat(Date.now(), ".").concat(l), r.click(), URL.revokeObjectURL(r.href)
                    } catch (e) {
                        window.open(t, "_blank")
                    } finally {
                        i(!1)
                    }
                };
                return (0, l.jsxs)("div", {
                    className: "bg-zinc-900/40 border border-zinc-800 rounded-[2rem] overflow-hidden backdrop-blur-sm shadow-2xl",
                    children: [(0, l.jsx)("div", {
                        className: "flex border-b border-zinc-800",
                        children: ["preview", "download"].map(e => (0, l.jsx)("button", {
                            onClick: () => n(e),
                            className: "flex-1 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ".concat(a === e ? "text-white bg-zinc-800" : "text-zinc-600 hover:text-zinc-400"),
                            children: "preview" === e ? "Preview" : "Download"
                        }, e))
                    }), (0, l.jsxs)("div", {
                        className: "p-6",
                        children: ["preview" === a && (0, l.jsx)("video", {
                            src: t,
                            controls: !0,
                            playsInline: !0,
                            className: "w-full rounded-2xl bg-black shadow-inner"
                        }), "download" === a && (0, l.jsxs)("div", {
                            className: "flex flex-col items-center gap-4 py-6",
                            children: [(0, l.jsx)("div", {
                                className: "w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-2xl",
                                children: (0, l.jsxs)("svg", {
                                    width: "28",
                                    height: "28",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "black",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0, l.jsx)("path", {
                                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    }), (0, l.jsx)("polyline", {
                                        points: "7 10 12 15 17 10"
                                    }), (0, l.jsx)("line", {
                                        x1: "12",
                                        y1: "15",
                                        x2: "12",
                                        y2: "3"
                                    })]
                                })
                            }), (0, l.jsxs)("div", {
                                className: "text-center",
                                children: [(0, l.jsx)("p", {
                                    className: "text-sm font-bold text-white mb-1",
                                    children: "Download Video Hasil"
                                }), (0, l.jsx)("p", {
                                    className: "text-xs text-zinc-500",
                                    children: "Video akan tersimpan ke perangkat kamu"
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col gap-2 w-full max-w-xs",
                                children: [(0, l.jsx)("button", {
                                    onClick: o,
                                    disabled: s,
                                    className: "w-full py-4 rounded-2xl font-bold text-sm bg-white hover:bg-zinc-200 disabled:opacity-50 text-black transition-all flex items-center justify-center gap-2",
                                    children: s ? (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(N, {}), (0, l.jsx)("span", {
                                            children: "Mengunduh..."
                                        })]
                                    }) : "Download Video"
                                }), (0, l.jsx)("a", {
                                    href: t,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "w-full py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest text-center text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all",
                                    children: "Buka di Tab Baru ↗"
                                })]
                            })]
                        })]
                    })]
                })
            }
        }
    },
    e => {
        e.O(0, [441, 255, 358], () => e(e.s = 199)), _N_E = e.O()
    }
]);