(function (Scratch) {
  !function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Decimal = e() }(this, (function () { "use strict"; function t(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function e(t, e) { for (var i = 0; i < e.length; i++) { var r = e[i]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } function i(t, i, r) { return i && e(t.prototype, i), r && e(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t } var r = function () { function e(i) { t(this, e), this.map = new Map, this.first = void 0, this.last = void 0, this.maxSize = i } return i(e, [{ key: "size", get: function () { return this.map.size } }, { key: "get", value: function (t) { var e = this.map.get(t); if (void 0 !== e) return e !== this.first && (e === this.last ? (this.last = e.prev, this.last.next = void 0) : (e.prev.next = e.next, e.next.prev = e.prev), e.next = this.first, this.first.prev = e, this.first = e), e.value } }, { key: "set", value: function (t, e) { if (!(this.maxSize < 1)) { if (this.map.has(t)) throw new Error("Cannot update existing keys in the cache"); var i = new n(t, e); for (void 0 === this.first ? (this.first = i, this.last = i) : (i.next = this.first, this.first.prev = i, this.first = i), this.map.set(t, i); this.map.size > this.maxSize;) { var r = this.last; this.map.delete(r.key), this.last = r.prev, this.last.next = void 0 } } } }]), e }(), n = i((function e(i, r) { t(this, e), this.next = void 0, this.prev = void 0, this.key = i, this.value = r })), a = Math.log10(9e15), s = function () { for (var t = [], e = -323; e <= 308; e++)t.push(Number("1e" + e)); return function (e) { return t[e + 323] } }(), u = [2, Math.E, 3, 4, 5, 6, 7, 8, 9, 10], h = [[1, 1.0891180521811203, 1.1789767925673957, 1.2701455431742086, 1.3632090180450092, 1.4587818160364217, 1.5575237916251419, 1.6601571006859253, 1.767485818836978, 1.8804192098842727, 2], [1, 1.1121114330934079, 1.231038924931609, 1.3583836963111375, 1.4960519303993531, 1.6463542337511945, 1.8121385357018724, 1.996971324618307, 2.2053895545527546, 2.4432574483385254, Math.E], [1, 1.1187738849693603, 1.2464963939368214, 1.38527004705667, 1.5376664685821402, 1.7068895236551784, 1.897001227148399, 2.1132403089001035, 2.362480153784171, 2.6539010333870774, 3], [1, 1.1367350847096405, 1.2889510672956703, 1.4606478703324786, 1.6570295196661111, 1.8850062585672889, 2.1539465047453485, 2.476829779693097, 2.872061932789197, 3.3664204535587183, 4], [1, 1.1494592900767588, 1.319708228183931, 1.5166291280087583, 1.748171114438024, 2.0253263297298045, 2.3636668498288547, 2.7858359149579424, 3.3257226212448145, 4.035730287722532, 5], [1, 1.159225940787673, 1.343712473580932, 1.5611293155111927, 1.8221199554561318, 2.14183924486326, 2.542468319282638, 3.0574682501653316, 3.7390572020926873, 4.6719550537360774, 6], [1, 1.1670905356972596, 1.3632807444991446, 1.5979222279405536, 1.8842640123816674, 2.2416069644878687, 2.69893426559423, 3.3012632110403577, 4.121250340630164, 5.281493033448316, 7], [1, 1.1736630594087796, 1.379783782386201, 1.6292821855668218, 1.9378971836180754, 2.3289975651071977, 2.8384347394720835, 3.5232708454565906, 4.478242031114584, 5.868592169644505, 8], [1, 1.1793017514670474, 1.394054150657457, 1.65664127441059, 1.985170999970283, 2.4069682290577457, 2.9647310119960752, 3.7278665320924946, 4.814462547283592, 6.436522247411611, 9], [1, 1.1840100246247336, 1.4061375836156955, 1.6802272208863964, 2.026757028388619, 2.4770056063449646, 3.080525271755482, 3.9191964192627284, 5.135152840833187, 6.989961179534715, 10]], o = [[-1, -.9194161097107025, -.8335625019330468, -.7425599821143978, -.6466611521029437, -.5462617907227869, -.4419033816638769, -.3342645487554494, -.224140440909962, -.11241087890006762, 0], [-1, -.90603157029014, -.80786507256596, -.7064666939634, -.60294836853664, -.49849837513117, -.39430303318768, -.29147201034755, -.19097820800866, -.09361896280296, 0], [-1, -.9021579584316141, -.8005762598234203, -.6964780623319391, -.5911906810998454, -.486050182576545, -.3823089430815083, -.28106046722897615, -.1831906535795894, -.08935809204418144, 0], [-1, -.8917227442365535, -.781258746326964, -.6705130326902455, -.5612813129406509, -.4551067709033134, -.35319256652135966, -.2563741554088552, -.1651412821106526, -.0796919581982668, 0], [-1, -.8843387974366064, -.7678744063886243, -.6529563724510552, -.5415870994657841, -.4352842206588936, -.33504449124791424, -.24138853420685147, -.15445285440944467, -.07409659641336663, 0], [-1, -.8786709358426346, -.7577735191184886, -.6399546189952064, -.527284921869926, -.4211627631006314, -.3223479611761232, -.23107655627789858, -.1472057700818259, -.07035171210706326, 0], [-1, -.8740862815291583, -.7497032990976209, -.6297119746181752, -.5161838335958787, -.41036238255751956, -.31277212146489963, -.2233976621705518, -.1418697367979619, -.06762117662323441, 0], [-1, -.8702632331800649, -.7430366914122081, -.6213373075161548, -.5072025698095242, -.40171437727184167, -.30517930701410456, -.21736343968190863, -.137710238299109, -.06550774483471955, 0], [-1, -.8670016295947213, -.7373984232432306, -.6143173985094293, -.49973884395492807, -.394584953527678, -.2989649949848695, -.21245647317021688, -.13434688362382652, -.0638072667348083, 0], [-1, -.8641642839543857, -.732534623168535, -.6083127477059322, -.4934049257184696, -.3885773075899922, -.29376029055315767, -.2083678561173622, -.13155653399373268, -.062401588652553186, 0]], l = function (t) { return k.fromValue_noAlloc(t) }, m = function (t, e, i) { return k.fromComponents(t, e, i) }, g = function (t, e, i) { return k.fromComponents_noNormalize(t, e, i) }, f = function (t, e) { var i = e + 1, r = Math.ceil(Math.log10(Math.abs(t))), n = Math.round(t * Math.pow(10, i - r)) * Math.pow(10, r - i); return parseFloat(n.toFixed(Math.max(i - r, 0))) }, c = function (t) { return Math.sign(t) * Math.log10(Math.abs(t)) }, y = .5671432904097838, v = function (t) { var e, i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e-10; if (!Number.isFinite(t)) return t; if (0 === t) return t; if (1 === t) return y; e = t < 10 ? 0 : Math.log(t) - Math.log(Math.log(t)); for (var n = 0; n < 100; ++n) { if (i = (t * Math.exp(-e) + e * e) / (e + 1), Math.abs(i - e) < r * Math.abs(i)) return i; e = i } throw Error("Iteration failed to converge: ".concat(t.toString())) }; function d(t) { var e, i, r, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e-10; if (!Number.isFinite(t.mag)) return t; if (t.eq(k.dZero)) return t; if (t.eq(k.dOne)) return k.fromNumber(y); e = k.ln(t); for (var s = 0; s < 100; ++s) { if (i = e.neg().exp(), r = e.sub(t.mul(i)), n = e.sub(r.div(e.add(1).sub(e.add(2).mul(r).div(k.mul(2, e).add(2))))), k.abs(n.sub(e)).lt(k.abs(n).mul(a))) return n; e = n } throw Error("Iteration failed to converge: ".concat(t.toString())) } var k = function () { function e(i) { t(this, e), this.sign = 0, this.mag = 0, this.layer = 0, i instanceof e ? this.fromDecimal(i) : "number" == typeof i ? this.fromNumber(i) : "string" == typeof i && this.fromString(i) } return i(e, [{ key: "m", get: function () { if (0 === this.sign) return 0; if (0 === this.layer) { var t, e = Math.floor(Math.log10(this.mag)); return t = 5e-324 === this.mag ? 5 : this.mag / s(e), this.sign * t } if (1 === this.layer) { var i = this.mag - Math.floor(this.mag); return this.sign * Math.pow(10, i) } return this.sign }, set: function (t) { this.layer <= 2 ? this.fromMantissaExponent(t, this.e) : (this.sign = Math.sign(t), 0 === this.sign && (this.layer = 0, this.exponent = 0)) } }, { key: "e", get: function () { return 0 === this.sign ? 0 : 0 === this.layer ? Math.floor(Math.log10(this.mag)) : 1 === this.layer ? Math.floor(this.mag) : 2 === this.layer ? Math.floor(Math.sign(this.mag) * Math.pow(10, Math.abs(this.mag))) : this.mag * Number.POSITIVE_INFINITY }, set: function (t) { this.fromMantissaExponent(this.m, t) } }, { key: "s", get: function () { return this.sign }, set: function (t) { 0 === t ? (this.sign = 0, this.layer = 0, this.mag = 0) : this.sign = t } }, { key: "mantissa", get: function () { return this.m }, set: function (t) { this.m = t } }, { key: "exponent", get: function () { return this.e }, set: function (t) { this.e = t } }, { key: "normalize", value: function () { if (0 === this.sign || 0 === this.mag && 0 === this.layer) return this.sign = 0, this.mag = 0, this.layer = 0, this; if (0 === this.layer && this.mag < 0 && (this.mag = -this.mag, this.sign = -this.sign), 0 === this.layer && this.mag < 1 / 9e15) return this.layer += 1, this.mag = Math.log10(this.mag), this; var t = Math.abs(this.mag), e = Math.sign(this.mag); if (t >= 9e15) return this.layer += 1, this.mag = e * Math.log10(t), this; for (; t < a && this.layer > 0;)this.layer -= 1, 0 === this.layer ? this.mag = Math.pow(10, this.mag) : (this.mag = e * Math.pow(10, t), t = Math.abs(this.mag), e = Math.sign(this.mag)); return 0 === this.layer && (this.mag < 0 ? (this.mag = -this.mag, this.sign = -this.sign) : 0 === this.mag && (this.sign = 0)), this } }, { key: "fromComponents", value: function (t, e, i) { return this.sign = t, this.layer = e, this.mag = i, this.normalize(), this } }, { key: "fromComponents_noNormalize", value: function (t, e, i) { return this.sign = t, this.layer = e, this.mag = i, this } }, { key: "fromMantissaExponent", value: function (t, e) { return this.layer = 1, this.sign = Math.sign(t), t = Math.abs(t), this.mag = e + Math.log10(t), this.normalize(), this } }, { key: "fromMantissaExponent_noNormalize", value: function (t, e) { return this.fromMantissaExponent(t, e), this } }, { key: "fromDecimal", value: function (t) { return this.sign = t.sign, this.layer = t.layer, this.mag = t.mag, this } }, { key: "fromNumber", value: function (t) { return this.mag = Math.abs(t), this.sign = Math.sign(t), this.layer = 0, this.normalize(), this } }, { key: "fromString", value: function (t) { var i = t, r = e.fromStringCache.get(i); if (void 0 !== r) return this.fromDecimal(r); var n = (t = t.replace(",", "")).split("^^^"); if (2 === n.length) { var a = parseFloat(n[0]), s = parseFloat(n[1]), u = n[1].split(";"), h = 1; if (2 === u.length && (h = parseFloat(u[1]), isFinite(h) || (h = 1)), isFinite(a) && isFinite(s)) { var o = e.pentate(a, s, h); return this.sign = o.sign, this.layer = o.layer, this.mag = o.mag, e.fromStringCache.maxSize >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this } } var g = t.split("^^"); if (2 === g.length) { var f = parseFloat(g[0]), y = parseFloat(g[1]), v = g[1].split(";"), d = 1; if (2 === v.length && (d = parseFloat(v[1]), isFinite(d) || (d = 1)), isFinite(f) && isFinite(y)) { var k = e.tetrate(f, y, d); return this.sign = k.sign, this.layer = k.layer, this.mag = k.mag, e.fromStringCache.maxSize >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this } } var p, N, b = t.split("^"); if (2 === b.length) { var M = parseFloat(b[0]), _ = parseFloat(b[1]); if (isFinite(M) && isFinite(_)) { var x = e.pow(M, _); return this.sign = x.sign, this.layer = x.layer, this.mag = x.mag, e.fromStringCache.maxSize >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this } } var F = (t = t.trim().toLowerCase()).split("pt"); if (2 === F.length) { p = 10, N = parseFloat(F[0]), F[1] = F[1].replace("(", ""), F[1] = F[1].replace(")", ""); var S = parseFloat(F[1]); if (isFinite(S) || (S = 1), isFinite(p) && isFinite(N)) { var w = e.tetrate(p, N, S); return this.sign = w.sign, this.layer = w.layer, this.mag = w.mag, e.fromStringCache.maxSize >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this } } if (2 === (F = t.split("p")).length) { p = 10, N = parseFloat(F[0]), F[1] = F[1].replace("(", ""), F[1] = F[1].replace(")", ""); var q = parseFloat(F[1]); if (isFinite(q) || (q = 1), isFinite(p) && isFinite(N)) { var I = e.tetrate(p, N, q); return this.sign = I.sign, this.layer = I.layer, this.mag = I.mag, e.fromStringCache.maxSize >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this } } var E = t.split("e"), C = E.length - 1; if (0 === C) { var z = parseFloat(t); if (isFinite(z)) return this.fromNumber(z), e.fromStringCache.size >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this } else if (1 === C) { var T = parseFloat(t); if (isFinite(T) && 0 !== T) return this.fromNumber(T), e.fromStringCache.maxSize >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this } var O = t.split("e^"); if (2 === O.length) { this.sign = 1, "-" == O[0].charAt(0) && (this.sign = -1); for (var D = "", V = 0; V < O[1].length; ++V) { var A = O[1].charCodeAt(V); if (!(A >= 43 && A <= 57 || 101 === A)) return this.layer = parseFloat(D), this.mag = parseFloat(O[1].substr(V + 1)), this.normalize(), e.fromStringCache.maxSize >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this; D += O[1].charAt(V) } } if (C < 1) return this.sign = 0, this.layer = 0, this.mag = 0, e.fromStringCache.maxSize >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this; var P = parseFloat(E[0]); if (0 === P) return this.sign = 0, this.layer = 0, this.mag = 0, e.fromStringCache.maxSize >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this; var Z = parseFloat(E[E.length - 1]); if (C >= 2) { var Y = parseFloat(E[E.length - 2]); isFinite(Y) && (Z *= Math.sign(Y), Z += c(Y)) } if (isFinite(P)) if (1 === C) this.sign = Math.sign(P), this.layer = 1, this.mag = Z + Math.log10(Math.abs(P)); else { if (this.sign = Math.sign(P), this.layer = C, 2 === C) { var G = e.mul(m(1, 2, Z), l(P)); return this.sign = G.sign, this.layer = G.layer, this.mag = G.mag, e.fromStringCache.maxSize >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this } this.mag = Z } else this.sign = "-" === E[0] ? -1 : 1, this.layer = C, this.mag = Z; return this.normalize(), e.fromStringCache.maxSize >= 1 && e.fromStringCache.set(i, e.fromDecimal(this)), this } }, { key: "fromValue", value: function (t) { return t instanceof e ? this.fromDecimal(t) : "number" == typeof t ? this.fromNumber(t) : "string" == typeof t ? this.fromString(t) : (this.sign = 0, this.layer = 0, this.mag = 0, this) } }, { key: "toNumber", value: function () { return Number.isFinite(this.layer) ? 0 === this.layer ? this.sign * this.mag : 1 === this.layer ? this.sign * Math.pow(10, this.mag) : this.mag > 0 ? this.sign > 0 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : 0 : Number.NaN } }, { key: "mantissaWithDecimalPlaces", value: function (t) { return isNaN(this.m) ? Number.NaN : 0 === this.m ? 0 : f(this.m, t) } }, { key: "magnitudeWithDecimalPlaces", value: function (t) { return isNaN(this.mag) ? Number.NaN : 0 === this.mag ? 0 : f(this.mag, t) } }, { key: "toString", value: function () { return isNaN(this.layer) || isNaN(this.sign) || isNaN(this.mag) ? "NaN" : this.mag === Number.POSITIVE_INFINITY || this.layer === Number.POSITIVE_INFINITY ? 1 === this.sign ? "Infinity" : "-Infinity" : 0 === this.layer ? this.mag < 1e21 && this.mag > 1e-7 || 0 === this.mag ? (this.sign * this.mag).toString() : this.m + "e" + this.e : 1 === this.layer ? this.m + "e" + this.e : this.layer <= 5 ? (-1 === this.sign ? "-" : "") + "e".repeat(this.layer) + this.mag : (-1 === this.sign ? "-" : "") + "(e^" + this.layer + ")" + this.mag } }, { key: "toExponential", value: function (t) { return 0 === this.layer ? (this.sign * this.mag).toExponential(t) : this.toStringWithDecimalPlaces(t) } }, { key: "toFixed", value: function (t) { return 0 === this.layer ? (this.sign * this.mag).toFixed(t) : this.toStringWithDecimalPlaces(t) } }, { key: "toPrecision", value: function (t) { return this.e <= -7 ? this.toExponential(t - 1) : t > this.e ? this.toFixed(t - this.exponent - 1) : this.toExponential(t - 1) } }, { key: "valueOf", value: function () { return this.toString() } }, { key: "toJSON", value: function () { return this.toString() } }, { key: "toStringWithDecimalPlaces", value: function (t) { return 0 === this.layer ? this.mag < 1e21 && this.mag > 1e-7 || 0 === this.mag ? (this.sign * this.mag).toFixed(t) : f(this.m, t) + "e" + f(this.e, t) : 1 === this.layer ? f(this.m, t) + "e" + f(this.e, t) : this.layer <= 5 ? (-1 === this.sign ? "-" : "") + "e".repeat(this.layer) + f(this.mag, t) : (-1 === this.sign ? "-" : "") + "(e^" + this.layer + ")" + f(this.mag, t) } }, { key: "abs", value: function () { return g(0 === this.sign ? 0 : 1, this.layer, this.mag) } }, { key: "neg", value: function () { return g(-this.sign, this.layer, this.mag) } }, { key: "negate", value: function () { return this.neg() } }, { key: "negated", value: function () { return this.neg() } }, { key: "sgn", value: function () { return this.sign } }, { key: "round", value: function () { return this.mag < 0 ? e.dZero : 0 === this.layer ? m(this.sign, 0, Math.round(this.mag)) : this } }, { key: "floor", value: function () { return this.mag < 0 ? e.dZero : 0 === this.layer ? m(this.sign, 0, Math.floor(this.mag)) : this } }, { key: "ceil", value: function () { return this.mag < 0 ? e.dZero : 0 === this.layer ? m(this.sign, 0, Math.ceil(this.mag)) : this } }, { key: "trunc", value: function () { return this.mag < 0 ? e.dZero : 0 === this.layer ? m(this.sign, 0, Math.trunc(this.mag)) : this } }, { key: "add", value: function (t) { var i, r, n = l(t); if (!Number.isFinite(this.layer)) return this; if (!Number.isFinite(n.layer)) return n; if (0 === this.sign) return n; if (0 === n.sign) return this; if (this.sign === -n.sign && this.layer === n.layer && this.mag === n.mag) return g(0, 0, 0); if (this.layer >= 2 || n.layer >= 2) return this.maxabs(n); if (e.cmpabs(this, n) > 0 ? (i = this, r = n) : (i = n, r = this), 0 === i.layer && 0 === r.layer) return e.fromNumber(i.sign * i.mag + r.sign * r.mag); var a = i.layer * Math.sign(i.mag), s = r.layer * Math.sign(r.mag); if (a - s >= 2) return i; if (0 === a && -1 === s) { if (Math.abs(r.mag - Math.log10(i.mag)) > 17) return i; var u = Math.pow(10, Math.log10(i.mag) - r.mag), h = r.sign + i.sign * u; return m(Math.sign(h), 1, r.mag + Math.log10(Math.abs(h))) } if (1 === a && 0 === s) { if (Math.abs(i.mag - Math.log10(r.mag)) > 17) return i; var o = Math.pow(10, i.mag - Math.log10(r.mag)), f = r.sign + i.sign * o; return m(Math.sign(f), 1, Math.log10(r.mag) + Math.log10(Math.abs(f))) } if (Math.abs(i.mag - r.mag) > 17) return i; var c = Math.pow(10, i.mag - r.mag), y = r.sign + i.sign * c; return m(Math.sign(y), 1, r.mag + Math.log10(Math.abs(y))) } }, { key: "plus", value: function (t) { return this.add(t) } }, { key: "sub", value: function (t) { return this.add(l(t).neg()) } }, { key: "subtract", value: function (t) { return this.sub(t) } }, { key: "minus", value: function (t) { return this.sub(t) } }, { key: "mul", value: function (t) { var i, r, n = l(t); if (!Number.isFinite(this.layer)) return this; if (!Number.isFinite(n.layer)) return n; if (0 === this.sign || 0 === n.sign) return g(0, 0, 0); if (this.layer === n.layer && this.mag === -n.mag) return g(this.sign * n.sign, 0, 1); if (this.layer > n.layer || this.layer == n.layer && Math.abs(this.mag) > Math.abs(n.mag) ? (i = this, r = n) : (i = n, r = this), 0 === i.layer && 0 === r.layer) return e.fromNumber(i.sign * r.sign * i.mag * r.mag); if (i.layer >= 3 || i.layer - r.layer >= 2) return m(i.sign * r.sign, i.layer, i.mag); if (1 === i.layer && 0 === r.layer) return m(i.sign * r.sign, 1, i.mag + Math.log10(r.mag)); if (1 === i.layer && 1 === r.layer) return m(i.sign * r.sign, 1, i.mag + r.mag); if (2 === i.layer && 1 === r.layer) { var a = m(Math.sign(i.mag), i.layer - 1, Math.abs(i.mag)).add(m(Math.sign(r.mag), r.layer - 1, Math.abs(r.mag))); return m(i.sign * r.sign, a.layer + 1, a.sign * a.mag) } if (2 === i.layer && 2 === r.layer) { var s = m(Math.sign(i.mag), i.layer - 1, Math.abs(i.mag)).add(m(Math.sign(r.mag), r.layer - 1, Math.abs(r.mag))); return m(i.sign * r.sign, s.layer + 1, s.sign * s.mag) } throw Error("Bad arguments to mul: " + this + ", " + t) } }, { key: "multiply", value: function (t) { return this.mul(t) } }, { key: "times", value: function (t) { return this.mul(t) } }, { key: "div", value: function (t) { var e = l(t); return this.mul(e.recip()) } }, { key: "divide", value: function (t) { return this.div(t) } }, { key: "divideBy", value: function (t) { return this.div(t) } }, { key: "dividedBy", value: function (t) { return this.div(t) } }, { key: "recip", value: function () { return 0 === this.mag ? e.dNaN : 0 === this.layer ? m(this.sign, 0, 1 / this.mag) : m(this.sign, this.layer, -this.mag) } }, { key: "reciprocal", value: function () { return this.recip() } }, { key: "reciprocate", value: function () { return this.recip() } }, { key: "cmp", value: function (t) { var e = l(t); return this.sign > e.sign ? 1 : this.sign < e.sign ? -1 : this.sign * this.cmpabs(t) } }, { key: "cmpabs", value: function (t) { var e = l(t), i = this.mag > 0 ? this.layer : -this.layer, r = e.mag > 0 ? e.layer : -e.layer; return i > r ? 1 : i < r ? -1 : this.mag > e.mag ? 1 : this.mag < e.mag ? -1 : 0 } }, { key: "compare", value: function (t) { return this.cmp(t) } }, { key: "isNan", value: function () { return isNaN(this.sign) || isNaN(this.layer) || isNaN(this.mag) } }, { key: "isFinite", value: function (t) { function e() { return t.apply(this, arguments) } return e.toString = function () { return t.toString() }, e }((function () { return isFinite(this.sign) && isFinite(this.layer) && isFinite(this.mag) })) }, { key: "eq", value: function (t) { var e = l(t); return this.sign === e.sign && this.layer === e.layer && this.mag === e.mag } }, { key: "equals", value: function (t) { return this.eq(t) } }, { key: "neq", value: function (t) { return !this.eq(t) } }, { key: "notEquals", value: function (t) { return this.neq(t) } }, { key: "lt", value: function (t) { return -1 === this.cmp(t) } }, { key: "lte", value: function (t) { return !this.gt(t) } }, { key: "gt", value: function (t) { return 1 === this.cmp(t) } }, { key: "gte", value: function (t) { return !this.lt(t) } }, { key: "max", value: function (t) { var e = l(t); return this.lt(e) ? e : this } }, { key: "min", value: function (t) { var e = l(t); return this.gt(e) ? e : this } }, { key: "maxabs", value: function (t) { var e = l(t); return this.cmpabs(e) < 0 ? e : this } }, { key: "minabs", value: function (t) { var e = l(t); return this.cmpabs(e) > 0 ? e : this } }, { key: "clamp", value: function (t, e) { return this.max(t).min(e) } }, { key: "clampMin", value: function (t) { return this.max(t) } }, { key: "clampMax", value: function (t) { return this.min(t) } }, { key: "cmp_tolerance", value: function (t, e) { var i = l(t); return this.eq_tolerance(i, e) ? 0 : this.cmp(i) } }, { key: "compare_tolerance", value: function (t, e) { return this.cmp_tolerance(t, e) } }, { key: "eq_tolerance", value: function (t, e) { var i = l(t); if (null == e && (e = 1e-7), this.sign !== i.sign) return !1; if (Math.abs(this.layer - i.layer) > 1) return !1; var r = this.mag, n = i.mag; return this.layer > i.layer && (n = c(n)), this.layer < i.layer && (r = c(r)), Math.abs(r - n) <= e * Math.max(Math.abs(r), Math.abs(n)) } }, { key: "equals_tolerance", value: function (t, e) { return this.eq_tolerance(t, e) } }, { key: "neq_tolerance", value: function (t, e) { return !this.eq_tolerance(t, e) } }, { key: "notEquals_tolerance", value: function (t, e) { return this.neq_tolerance(t, e) } }, { key: "lt_tolerance", value: function (t, e) { var i = l(t); return !this.eq_tolerance(i, e) && this.lt(i) } }, { key: "lte_tolerance", value: function (t, e) { var i = l(t); return this.eq_tolerance(i, e) || this.lt(i) } }, { key: "gt_tolerance", value: function (t, e) { var i = l(t); return !this.eq_tolerance(i, e) && this.gt(i) } }, { key: "gte_tolerance", value: function (t, e) { var i = l(t); return this.eq_tolerance(i, e) || this.gt(i) } }, { key: "pLog10", value: function () { return this.lt(e.dZero) ? e.dZero : this.log10() } }, { key: "absLog10", value: function () { return 0 === this.sign ? e.dNaN : this.layer > 0 ? m(Math.sign(this.mag), this.layer - 1, Math.abs(this.mag)) : m(1, 0, Math.log10(this.mag)) } }, { key: "log10", value: function () { return this.sign <= 0 ? e.dNaN : this.layer > 0 ? m(Math.sign(this.mag), this.layer - 1, Math.abs(this.mag)) : m(this.sign, 0, Math.log10(this.mag)) } }, { key: "log", value: function (t) { return t = l(t), this.sign <= 0 || t.sign <= 0 || 1 === t.sign && 0 === t.layer && 1 === t.mag ? e.dNaN : 0 === this.layer && 0 === t.layer ? m(this.sign, 0, Math.log(this.mag) / Math.log(t.mag)) : e.div(this.log10(), t.log10()) } }, { key: "log2", value: function () { return this.sign <= 0 ? e.dNaN : 0 === this.layer ? m(this.sign, 0, Math.log2(this.mag)) : 1 === this.layer ? m(Math.sign(this.mag), 0, 3.321928094887362 * Math.abs(this.mag)) : 2 === this.layer ? m(Math.sign(this.mag), 1, Math.abs(this.mag) + .5213902276543247) : m(Math.sign(this.mag), this.layer - 1, Math.abs(this.mag)) } }, { key: "ln", value: function () { return this.sign <= 0 ? e.dNaN : 0 === this.layer ? m(this.sign, 0, Math.log(this.mag)) : 1 === this.layer ? m(Math.sign(this.mag), 0, 2.302585092994046 * Math.abs(this.mag)) : 2 === this.layer ? m(Math.sign(this.mag), 1, Math.abs(this.mag) + .36221568869946325) : m(Math.sign(this.mag), this.layer - 1, Math.abs(this.mag)) } }, { key: "logarithm", value: function (t) { return this.log(t) } }, { key: "pow", value: function (t) { var i = this, r = l(t); if (0 === i.sign) return r.eq(0) ? g(1, 0, 1) : i; if (1 === i.sign && 0 === i.layer && 1 === i.mag) return i; if (0 === r.sign) return g(1, 0, 1); if (1 === r.sign && 0 === r.layer && 1 === r.mag) return i; var n = i.absLog10().mul(r).pow10(); return -1 === this.sign ? Math.abs(r.toNumber() % 2) % 2 == 1 ? n.neg() : Math.abs(r.toNumber() % 2) % 2 == 0 ? n : e.dNaN : n } }, { key: "pow10", value: function () { if (!Number.isFinite(this.layer) || !Number.isFinite(this.mag)) return e.dNaN; var t = this; if (0 === t.layer) { var i = Math.pow(10, t.sign * t.mag); if (Number.isFinite(i) && Math.abs(i) >= .1) return m(1, 0, i); if (0 === t.sign) return e.dOne; t = g(t.sign, t.layer + 1, Math.log10(t.mag)) } return t.sign > 0 && t.mag >= 0 ? m(t.sign, t.layer + 1, t.mag) : t.sign < 0 && t.mag >= 0 ? m(-t.sign, t.layer + 1, -t.mag) : e.dOne } }, { key: "pow_base", value: function (t) { return l(t).pow(this) } }, { key: "root", value: function (t) { var e = l(t); return this.pow(e.recip()) } }, { key: "factorial", value: function () { return this.mag < 0 || 0 === this.layer ? this.add(1).gamma() : 1 === this.layer ? e.exp(e.mul(this, e.ln(this).sub(1))) : e.exp(this) } }, { key: "gamma", value: function () { if (this.mag < 0) return this.recip(); if (0 === this.layer) { if (this.lt(g(1, 0, 24))) return e.fromNumber(function (t) { if (!isFinite(t)) return t; if (t < -50) return t === Math.trunc(t) ? Number.NEGATIVE_INFINITY : 0; for (var e = 1; t < 10;)e *= t, ++t; var i = .9189385332046727; i += ((t -= 1) + .5) * Math.log(t), i -= t; var r = t * t, n = t; return i += 1 / (12 * n), i += 1 / (360 * (n *= r)), i += 1 / (1260 * (n *= r)), i += 1 / (1680 * (n *= r)), i += 1 / (1188 * (n *= r)), i += 691 / (360360 * (n *= r)), i += 7 / (1092 * (n *= r)), i += 3617 / (122400 * (n *= r)), Math.exp(i) / e }(this.sign * this.mag)); var t = this.mag - 1, i = .9189385332046727; i += (t + .5) * Math.log(t); var r = t * t, n = t, a = 12 * n, s = 1 / a, u = (i -= t) + s; if (u === i) return e.exp(i); if ((u = (i = u) - (s = 1 / (a = 360 * (n *= r)))) === i) return e.exp(i); i = u; var h = 1 / (a = 1260 * (n *= r)); return i += h, i -= h = 1 / (a = 1680 * (n *= r)), e.exp(i) } return 1 === this.layer ? e.exp(e.mul(this, e.ln(this).sub(1))) : e.exp(this) } }, { key: "lngamma", value: function () { return this.gamma().ln() } }, { key: "exp", value: function () { return this.mag < 0 ? e.dOne : 0 === this.layer && this.mag <= 709.7 ? e.fromNumber(Math.exp(this.sign * this.mag)) : 0 === this.layer ? m(1, 1, this.sign * Math.log10(Math.E) * this.mag) : 1 === this.layer ? m(1, 2, this.sign * (Math.log10(.4342944819032518) + this.mag)) : m(1, this.layer + 1, this.sign * this.mag) } }, { key: "sqr", value: function () { return this.pow(2) } }, { key: "sqrt", value: function () { if (0 === this.layer) return e.fromNumber(Math.sqrt(this.sign * this.mag)); if (1 === this.layer) return m(1, 2, Math.log10(this.mag) - .3010299956639812); var t = e.div(g(this.sign, this.layer - 1, this.mag), g(1, 0, 2)); return t.layer += 1, t.normalize(), t } }, { key: "cube", value: function () { return this.pow(3) } }, { key: "cbrt", value: function () { return this.pow(1 / 3) } }, { key: "tetrate", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g(1, 0, 1); if (1 === t) return e.pow(this, i); if (0 === t) return new e(i); if (this.eq(e.dOne)) return e.dOne; if (this.eq(-1)) return e.pow(this, i); if (t === Number.POSITIVE_INFINITY) { var r = this.toNumber(); if (r <= 1.444667861009766 && r >= .06598803584531254) { if (r > 1.444667861009099) return e.fromNumber(Math.E); var n = e.ln(this).neg(); return n.lambertw().div(n) } return r > 1.444667861009766 ? e.fromNumber(Number.POSITIVE_INFINITY) : e.dNaN } if (this.eq(e.dZero)) { var a = Math.abs((t + 1) % 2); return a > 1 && (a = 2 - a), e.fromNumber(a) } if (t < 0) return e.iteratedlog(i, this, -t); i = l(i); var s = t, u = s - (t = Math.trunc(t)); if (this.gt(e.dZero) && this.lte(1.444667861009766)) { t = Math.min(1e4, t); for (var h = 0; h < t; ++h) { var o = i; if (i = this.pow(i), o.eq(i)) return i } if (0 != u) { var m = this.pow(i); return i.mul(1 - u).add(m.mul(u)) } return i } 0 !== u && (i.eq(e.dOne) ? this.gt(10) ? i = this.pow(u) : (i = e.fromNumber(e.tetrate_critical(this.toNumber(), u)), this.lt(2) && (i = i.sub(1).mul(this.minus(1)).plus(1))) : i = this.eq(10) ? i.layeradd10(u) : i.layeradd(u, this)); for (var f = 0; f < t; ++f) { if (i = this.pow(i), !isFinite(i.layer) || !isFinite(i.mag)) return i.normalize(); if (i.layer - this.layer > 3) return g(i.sign, i.layer + (t - f - 1), i.mag); if (f > 1e4) return i } return i } }, { key: "iteratedexp", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g(1, 0, 1); return this.tetrate(t, e) } }, { key: "iteratedlog", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1; if (i < 0) return e.tetrate(t, -i, this); t = l(t); var r = e.fromDecimal(this), n = i, a = n - (i = Math.trunc(i)); if (r.layer - t.layer > 3) { var s = Math.min(i, r.layer - t.layer - 3); i -= s, r.layer -= s } for (var u = 0; u < i; ++u) { if (r = r.log(t), !isFinite(r.layer) || !isFinite(r.mag)) return r.normalize(); if (u > 1e4) return r } return a > 0 && a < 1 && (r = t.eq(10) ? r.layeradd10(-a) : r.layeradd(-a, t)), r } }, { key: "slog", value: function () { for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, r = .001, n = !1, a = !1, s = this.slog_internal(t).toNumber(), u = 1; u < i; ++u) { var h = new e(t).tetrate(s), o = h.gt(this); if (u > 1 && a != o && (n = !0), a = o, n ? r /= 2 : r *= 2, s += r = Math.abs(r) * (o ? -1 : 1), 0 === r) break } return e.fromNumber(s) } }, { key: "slog_internal", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10; if ((t = l(t)).lte(e.dZero)) return e.dNaN; if (t.eq(e.dOne)) return e.dNaN; if (t.lt(e.dOne)) return this.eq(e.dOne) ? e.dZero : this.eq(e.dZero) ? e.dNegOne : e.dNaN; if (this.mag < 0 || this.eq(e.dZero)) return e.dNegOne; var i = 0, r = e.fromDecimal(this); if (r.layer - t.layer > 3) { var n = r.layer - t.layer - 3; i += n, r.layer -= n } for (var a = 0; a < 100; ++a)if (r.lt(e.dZero)) r = e.pow(t, r), i -= 1; else { if (r.lte(e.dOne)) return e.fromNumber(i + e.slog_critical(t.toNumber(), r.toNumber())); i += 1, r = e.log(r, t) } return e.fromNumber(i) } }, { key: "layeradd10", value: function (t) { t = e.fromValue_noAlloc(t).toNumber(); var i = e.fromDecimal(this); if (t >= 1) { i.mag < 0 && i.layer > 0 ? (i.sign = 0, i.mag = 0, i.layer = 0) : -1 === i.sign && 0 == i.layer && (i.sign = 1, i.mag = -i.mag); var r = Math.trunc(t); t -= r, i.layer += r } if (t <= -1) { var n = Math.trunc(t); if (t -= n, i.layer += n, i.layer < 0) for (var a = 0; a < 100; ++a) { if (i.layer++, i.mag = Math.log10(i.mag), !isFinite(i.mag)) return 0 === i.sign && (i.sign = 1), i.layer < 0 && (i.layer = 0), i.normalize(); if (i.layer >= 0) break } } for (; i.layer < 0;)i.layer++, i.mag = Math.log10(i.mag); return 0 === i.sign && (i.sign = 1, 0 === i.mag && i.layer >= 1 && (i.layer -= 1, i.mag = 1)), i.normalize(), 0 !== t ? i.layeradd(t, 10) : i } }, { key: "layeradd", value: function (t, i) { var r = this.slog(i).toNumber() + t; return r >= 0 ? e.tetrate(i, r) : Number.isFinite(r) ? r >= -1 ? e.log(e.tetrate(i, r + 1), i) : e.log(e.log(e.tetrate(i, r + 2), i), i) : e.dNaN } }, { key: "lambertw", value: function () { if (this.lt(-.3678794411710499)) throw Error("lambertw is unimplemented for results less than -1, sorry!"); if (this.mag < 0) return e.fromNumber(v(this.toNumber())); if (0 === this.layer) return e.fromNumber(v(this.sign * this.mag)); if (1 === this.layer) return d(this); if (2 === this.layer) return d(this); if (this.layer >= 3) return g(this.sign, this.layer - 1, this.mag); throw "Unhandled behavior in lambertw()" } }, { key: "ssqrt", value: function () { if (1 == this.sign && this.layer >= 3) return g(this.sign, this.layer - 1, this.mag); var t = this.ln(); return t.div(t.lambertw()) } }, { key: "pentate", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g(1, 0, 1); i = l(i); var r = t, n = r - (t = Math.trunc(t)); 0 !== n && (i.eq(e.dOne) ? (++t, i = e.fromNumber(n)) : i = this.eq(10) ? i.layeradd10(n) : i.layeradd(n, this)); for (var a = 0; a < t; ++a) { if (i = this.tetrate(i.toNumber()), !isFinite(i.layer) || !isFinite(i.mag)) return i.normalize(); if (a > 10) return i } return i } }, { key: "sin", value: function () { return this.mag < 0 ? this : 0 === this.layer ? e.fromNumber(Math.sin(this.sign * this.mag)) : g(0, 0, 0) } }, { key: "cos", value: function () { return this.mag < 0 ? e.dOne : 0 === this.layer ? e.fromNumber(Math.cos(this.sign * this.mag)) : g(0, 0, 0) } }, { key: "tan", value: function () { return this.mag < 0 ? this : 0 === this.layer ? e.fromNumber(Math.tan(this.sign * this.mag)) : g(0, 0, 0) } }, { key: "asin", value: function () { return this.mag < 0 ? this : 0 === this.layer ? e.fromNumber(Math.asin(this.sign * this.mag)) : g(Number.NaN, Number.NaN, Number.NaN) } }, { key: "acos", value: function () { return this.mag < 0 ? e.fromNumber(Math.acos(this.toNumber())) : 0 === this.layer ? e.fromNumber(Math.acos(this.sign * this.mag)) : g(Number.NaN, Number.NaN, Number.NaN) } }, { key: "atan", value: function () { return this.mag < 0 ? this : 0 === this.layer ? e.fromNumber(Math.atan(this.sign * this.mag)) : e.fromNumber(Math.atan(Infinity * this.sign)) } }, { key: "sinh", value: function () { return this.exp().sub(this.negate().exp()).div(2) } }, { key: "cosh", value: function () { return this.exp().add(this.negate().exp()).div(2) } }, { key: "tanh", value: function () { return this.sinh().div(this.cosh()) } }, { key: "asinh", value: function () { return e.ln(this.add(this.sqr().add(1).sqrt())) } }, { key: "acosh", value: function () { return e.ln(this.add(this.sqr().sub(1).sqrt())) } }, { key: "atanh", value: function () { return this.abs().gte(1) ? g(Number.NaN, Number.NaN, Number.NaN) : e.ln(this.add(1).div(e.fromNumber(1).sub(this))).div(2) } }, { key: "ascensionPenalty", value: function (t) { return 0 === t ? this : this.root(e.pow(10, t)) } }, { key: "egg", value: function () { return this.add(9) } }, { key: "lessThanOrEqualTo", value: function (t) { return this.cmp(t) < 1 } }, { key: "lessThan", value: function (t) { return this.cmp(t) < 0 } }, { key: "greaterThanOrEqualTo", value: function (t) { return this.cmp(t) > -1 } }, { key: "greaterThan", value: function (t) { return this.cmp(t) > 0 } }], [{ key: "fromComponents", value: function (t, i, r) { return (new e).fromComponents(t, i, r) } }, { key: "fromComponents_noNormalize", value: function (t, i, r) { return (new e).fromComponents_noNormalize(t, i, r) } }, { key: "fromMantissaExponent", value: function (t, i) { return (new e).fromMantissaExponent(t, i) } }, { key: "fromMantissaExponent_noNormalize", value: function (t, i) { return (new e).fromMantissaExponent_noNormalize(t, i) } }, { key: "fromDecimal", value: function (t) { return (new e).fromDecimal(t) } }, { key: "fromNumber", value: function (t) { return (new e).fromNumber(t) } }, { key: "fromString", value: function (t) { return (new e).fromString(t) } }, { key: "fromValue", value: function (t) { return (new e).fromValue(t) } }, { key: "fromValue_noAlloc", value: function (t) { if (t instanceof e) return t; if ("string" == typeof t) { var i = e.fromStringCache.get(t); return void 0 !== i ? i : e.fromString(t) } return "number" == typeof t ? e.fromNumber(t) : e.dZero } }, { key: "abs", value: function (t) { return l(t).abs() } }, { key: "neg", value: function (t) { return l(t).neg() } }, { key: "negate", value: function (t) { return l(t).neg() } }, { key: "negated", value: function (t) { return l(t).neg() } }, { key: "sign", value: function (t) { return l(t).sign } }, { key: "sgn", value: function (t) { return l(t).sign } }, { key: "round", value: function (t) { return l(t).round() } }, { key: "floor", value: function (t) { return l(t).floor() } }, { key: "ceil", value: function (t) { return l(t).ceil() } }, { key: "trunc", value: function (t) { return l(t).trunc() } }, { key: "add", value: function (t, e) { return l(t).add(e) } }, { key: "plus", value: function (t, e) { return l(t).add(e) } }, { key: "sub", value: function (t, e) { return l(t).sub(e) } }, { key: "subtract", value: function (t, e) { return l(t).sub(e) } }, { key: "minus", value: function (t, e) { return l(t).sub(e) } }, { key: "mul", value: function (t, e) { return l(t).mul(e) } }, { key: "multiply", value: function (t, e) { return l(t).mul(e) } }, { key: "times", value: function (t, e) { return l(t).mul(e) } }, { key: "div", value: function (t, e) { return l(t).div(e) } }, { key: "divide", value: function (t, e) { return l(t).div(e) } }, { key: "recip", value: function (t) { return l(t).recip() } }, { key: "reciprocal", value: function (t) { return l(t).recip() } }, { key: "reciprocate", value: function (t) { return l(t).reciprocate() } }, { key: "cmp", value: function (t, e) { return l(t).cmp(e) } }, { key: "cmpabs", value: function (t, e) { return l(t).cmpabs(e) } }, { key: "compare", value: function (t, e) { return l(t).cmp(e) } }, { key: "isNaN", value: function (t) { function e(e) { return t.apply(this, arguments) } return e.toString = function () { return t.toString() }, e }((function (t) { return t = l(t), isNaN(t.sign) || isNaN(t.layer) || isNaN(t.mag) })) }, { key: "isFinite", value: function (t) { function e(e) { return t.apply(this, arguments) } return e.toString = function () { return t.toString() }, e }((function (t) { return t = l(t), isFinite(t.sign) && isFinite(t.layer) && isFinite(t.mag) })) }, { key: "eq", value: function (t, e) { return l(t).eq(e) } }, { key: "equals", value: function (t, e) { return l(t).eq(e) } }, { key: "neq", value: function (t, e) { return l(t).neq(e) } }, { key: "notEquals", value: function (t, e) { return l(t).notEquals(e) } }, { key: "lt", value: function (t, e) { return l(t).lt(e) } }, { key: "lte", value: function (t, e) { return l(t).lte(e) } }, { key: "gt", value: function (t, e) { return l(t).gt(e) } }, { key: "gte", value: function (t, e) { return l(t).gte(e) } }, { key: "max", value: function (t, e) { return l(t).max(e) } }, { key: "min", value: function (t, e) { return l(t).min(e) } }, { key: "minabs", value: function (t, e) { return l(t).minabs(e) } }, { key: "maxabs", value: function (t, e) { return l(t).maxabs(e) } }, { key: "clamp", value: function (t, e, i) { return l(t).clamp(e, i) } }, { key: "clampMin", value: function (t, e) { return l(t).clampMin(e) } }, { key: "clampMax", value: function (t, e) { return l(t).clampMax(e) } }, { key: "cmp_tolerance", value: function (t, e, i) { return l(t).cmp_tolerance(e, i) } }, { key: "compare_tolerance", value: function (t, e, i) { return l(t).cmp_tolerance(e, i) } }, { key: "eq_tolerance", value: function (t, e, i) { return l(t).eq_tolerance(e, i) } }, { key: "equals_tolerance", value: function (t, e, i) { return l(t).eq_tolerance(e, i) } }, { key: "neq_tolerance", value: function (t, e, i) { return l(t).neq_tolerance(e, i) } }, { key: "notEquals_tolerance", value: function (t, e, i) { return l(t).notEquals_tolerance(e, i) } }, { key: "lt_tolerance", value: function (t, e, i) { return l(t).lt_tolerance(e, i) } }, { key: "lte_tolerance", value: function (t, e, i) { return l(t).lte_tolerance(e, i) } }, { key: "gt_tolerance", value: function (t, e, i) { return l(t).gt_tolerance(e, i) } }, { key: "gte_tolerance", value: function (t, e, i) { return l(t).gte_tolerance(e, i) } }, { key: "pLog10", value: function (t) { return l(t).pLog10() } }, { key: "absLog10", value: function (t) { return l(t).absLog10() } }, { key: "log10", value: function (t) { return l(t).log10() } }, { key: "log", value: function (t, e) { return l(t).log(e) } }, { key: "log2", value: function (t) { return l(t).log2() } }, { key: "ln", value: function (t) { return l(t).ln() } }, { key: "logarithm", value: function (t, e) { return l(t).logarithm(e) } }, { key: "pow", value: function (t, e) { return l(t).pow(e) } }, { key: "pow10", value: function (t) { return l(t).pow10() } }, { key: "root", value: function (t, e) { return l(t).root(e) } }, { key: "factorial", value: function (t, e) { return l(t).factorial() } }, { key: "gamma", value: function (t, e) { return l(t).gamma() } }, { key: "lngamma", value: function (t, e) { return l(t).lngamma() } }, { key: "exp", value: function (t) { return l(t).exp() } }, { key: "sqr", value: function (t) { return l(t).sqr() } }, { key: "sqrt", value: function (t) { return l(t).sqrt() } }, { key: "cube", value: function (t) { return l(t).cube() } }, { key: "cbrt", value: function (t) { return l(t).cbrt() } }, { key: "tetrate", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g(1, 0, 1); return l(t).tetrate(e, i) } }, { key: "iteratedexp", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g(1, 0, 1); return l(t).iteratedexp(e, i) } }, { key: "iteratedlog", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1; return l(t).iteratedlog(e, i) } }, { key: "layeradd10", value: function (t, e) { return l(t).layeradd10(e) } }, { key: "layeradd", value: function (t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10; return l(t).layeradd(e, i) } }, { key: "slog", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10; return l(t).slog(e) } }, { key: "lambertw", value: function (t) { return l(t).lambertw() } }, { key: "ssqrt", value: function (t) { return l(t).ssqrt() } }, { key: "pentate", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g(1, 0, 1); return l(t).pentate(e, i) } }, { key: "affordGeometricSeries", value: function (t, e, i, r) { return this.affordGeometricSeries_core(l(t), l(e), l(i), r) } }, { key: "sumGeometricSeries", value: function (t, e, i, r) { return this.sumGeometricSeries_core(t, l(e), l(i), r) } }, { key: "affordArithmeticSeries", value: function (t, e, i, r) { return this.affordArithmeticSeries_core(l(t), l(e), l(i), l(r)) } }, { key: "sumArithmeticSeries", value: function (t, e, i, r) { return this.sumArithmeticSeries_core(l(t), l(e), l(i), l(r)) } }, { key: "efficiencyOfPurchase", value: function (t, e, i) { return this.efficiencyOfPurchase_core(l(t), l(e), l(i)) } }, { key: "randomDecimalForTesting", value: function (t) { if (20 * Math.random() < 1) return g(0, 0, 0); var e = Math.random() > .5 ? 1 : -1; if (20 * Math.random() < 1) return g(e, 0, 1); var i = Math.floor(Math.random() * (t + 1)), r = 0 === i ? 616 * Math.random() - 308 : 16 * Math.random(); Math.random() > .9 && (r = Math.trunc(r)); var n = Math.pow(10, r); return Math.random() > .9 && (n = Math.trunc(n)), m(e, i, n) } }, { key: "affordGeometricSeries_core", value: function (t, i, r, n) { var a = i.mul(r.pow(n)); return e.floor(t.div(a).mul(r.sub(1)).add(1).log10().div(r.log10())) } }, { key: "sumGeometricSeries_core", value: function (t, i, r, n) { return i.mul(r.pow(n)).mul(e.sub(1, r.pow(t))).div(e.sub(1, r)) } }, { key: "affordArithmeticSeries_core", value: function (t, e, i, r) { var n = e.add(r.mul(i)).sub(i.div(2)), a = n.pow(2); return n.neg().add(a.add(i.mul(t).mul(2)).sqrt()).div(i).floor() } }, { key: "sumArithmeticSeries_core", value: function (t, e, i, r) { var n = e.add(r.mul(i)); return t.div(2).mul(n.mul(2).plus(t.sub(1).mul(i))) } }, { key: "efficiencyOfPurchase_core", value: function (t, e, i) { return t.div(e).add(t.div(i)) } }, { key: "slog_critical", value: function (t, i) { return t > 10 ? i - 1 : e.critical_section(t, i, o) } }, { key: "tetrate_critical", value: function (t, i) { return e.critical_section(t, i, h) } }, { key: "critical_section", value: function (t, e, i) { (e *= 10) < 0 && (e = 0), e > 10 && (e = 10), t < 2 && (t = 2), t > 10 && (t = 10); for (var r = 0, n = 0, a = 0; a < u.length; ++a) { if (u[a] == t) { r = i[a][Math.floor(e)], n = i[a][Math.ceil(e)]; break } if (u[a] < t && u[a + 1] > t) { var s = (t - u[a]) / (u[a + 1] - u[a]); r = i[a][Math.floor(e)] * (1 - s) + i[a + 1][Math.floor(e)] * s, n = i[a][Math.ceil(e)] * (1 - s) + i[a + 1][Math.ceil(e)] * s; break } } var h = e - Math.floor(e); return r <= 0 || n <= 0 ? r * (1 - h) + n * h : Math.pow(t, Math.log(r) / Math.log(t) * (1 - h) + Math.log(n) / Math.log(t) * h) } }]), e }(); return k.dZero = g(0, 0, 0), k.dOne = g(1, 0, 1), k.dNegOne = g(-1, 0, 1), k.dTwo = g(1, 0, 2), k.dTen = g(1, 0, 10), k.dNaN = g(Number.NaN, Number.NaN, Number.NaN), k.dInf = g(1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), k.dNegInf = g(-1, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), k.dNumberMax = m(1, 0, Number.MAX_VALUE), k.dNumberMin = m(1, 0, Number.MIN_VALUE), k.fromStringCache = new r(1023), l = k.fromValue_noAlloc, m = k.fromComponents, g = k.fromComponents_noNormalize, k.fromMantissaExponent, k.fromMantissaExponent_noNormalize, k }));

  const ROUND_FUNCTIONS = {
    'round': Decimal.round,
    'floor': Decimal.floor,
    'ceil': Decimal.ceil,
    'trunc': Decimal.trunc
  };

  const MATHS_FUNCTIONS = {
    "abs": Decimal.abs,
    "neg": Decimal.neg,
    "ln": Decimal.ln,
    "e^": Decimal.exp,
    "sqrt": Decimal.sqrt,
    "ssqrt": Decimal.ssqrt,
    "gamma": Decimal.gamma,
    "factorial": Decimal.factorial,
  }

  const LOG_FUNCTIONS = {
    "log": Decimal.log,
    "slog": Decimal.slog,
  }

  function toDecimal(value) {
    try {
      return new Decimal(value)
    }
    catch (error) {
      return new Decimal(0)
    }
  }

  class BreakInfinity {
    getInfo() {
      return {
        id: 'Yorenibreaketernity',
        name: 'Break Eternity',
        color1: '#c4b513',
        color2: '#545023',
        color3: '#545023',
        blocks: [
          {
            opcode: 'add',
            blockType: Scratch.BlockType.REPORTER,
            text: '[num1] + [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'sub',
            blockType: Scratch.BlockType.REPORTER,
            text: '[num1] - [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'mul',
            blockType: Scratch.BlockType.REPORTER,
            text: '[num1] * [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'div',
            blockType: Scratch.BlockType.REPORTER,
            text: '[num1] / [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'pow',
            blockType: Scratch.BlockType.REPORTER,
            text: '[num1] ^ [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'tet',
            blockType: Scratch.BlockType.REPORTER,
            text: '[num1] â†‘â†‘ [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'pent',
            blockType: Scratch.BlockType.REPORTER,
            text: '[num1] â†‘â†‘â†‘ [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'root',
            blockType: Scratch.BlockType.REPORTER,
            text: '[root]root [num]',
            arguments: {
              root: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
              num: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'log',
            blockType: Scratch.BlockType.REPORTER,
            text: '[base] [function] of [num]',
            arguments: {
              base: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10,
              },
              num: {
                type: Scratch.ArgumentType.STRING
              },
              function: {
                type: Scratch.ArgumentType.STRING,
                menu: 'LOG'
              }
            }
          },
          {
            opcode: 'round',
            blockType: Scratch.BlockType.REPORTER,
            text: ' [round] of [num] ',
            arguments: {
              num: {
                type: Scratch.ArgumentType.STRING
              },
              round: {
                type: Scratch.ArgumentType.STRING,
                menu: 'ROUND'
              }
            }
          },
          {
            opcode: 'maths',
            blockType: Scratch.BlockType.REPORTER,
            text: ' [function] of [num] ',
            arguments: {
              num: {
                type: Scratch.ArgumentType.STRING
              },
              function: {
                type: Scratch.ArgumentType.STRING,
                menu: 'MATHS_FUNCTIONS'
              }
            }
          },
          {
            opcode: 'gt',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[num1] > [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50,
              },
            }
          },
          {
            opcode: 'gte',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[num1] >= [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50,
              },
            }
          },
          {
            opcode: 'lt',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[num1] < [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50,
              },
            }
          },
          {
            opcode: 'lte',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[num1] <= [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50,
              },
            }
          },
          ,
          {
            opcode: 'eq',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[num1] = [num2]',
            arguments: {
              num1: {
                type: Scratch.ArgumentType.STRING
              },
              num2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 50,
              },
            }
          },
        ],
        menus: {
          ROUND: {
            acceptReporters: false,
            items: Object.keys(ROUND_FUNCTIONS)
          },
          MATHS_FUNCTIONS: {
            acceptReporters: false,
            items: Object.keys(MATHS_FUNCTIONS)
          },
          LOG: {
            acceptReporters: false,
            items: Object.keys(LOG_FUNCTIONS)
          },
        }
      };
    }

    #proformNumOperation(args, operation) {
      return this.#proformOperation(args, operation).toString();
    }

    #proformOperation(args, operation) {
      const num1 = toDecimal(args.num1);
      const num2 = toDecimal(args.num2);
      return operation(num1, num2);
    }

    add(args) {
      return this.#proformNumOperation(args, Decimal.add);
    }

    sub(args) {
      return this.#proformNumOperation(args, Decimal.sub);
    }

    mul(args) {
      return this.#proformNumOperation(args, Decimal.mul);
    }

    div(args) {
      return this.#proformNumOperation(args, Decimal.div);
    }

    pow(args) {
      return this.#proformNumOperation(args, Decimal.pow);
    }

    tet(args) {
      return this.#proformNumOperation(args, Decimal.tetrate);
    }

    pent(args) {
      return this.#proformNumOperation(args, Decimal.pentate);
    }

    round(args) {
      const num = toDecimal(args.num);
      const _function = ROUND_FUNCTIONS[args.round];
      return _function(num).toString();
    }

    gt(args) {
      return this.#proformOperation(args, Decimal.gt);
    }

    gte(args) {
      return this.#proformOperation(args, Decimal.gte);
    }

    lt(args) {
      return this.#proformOperation(args, Decimal.lt);
    }

    lte(args) {
      return this.#proformOperation(args, Decimal.lte);
    }

    eq(args) {
      return this.#proformOperation(args, Decimal.eq);
    }

    maths(args) {
      const num = toDecimal(args.num);
      const _function = MATHS_FUNCTIONS[args.function];
      return _function(num).toString();
    }

    root(args) {
      return this.#proformNumOperation({ num1: args.num, num2: args.root }, Decimal.root);
    }

    log(args) {
      return this.#proformNumOperation({ num1: args.num, num2: args.base }, LOG_FUNCTIONS[args.function]);
    }
  }

  Scratch.extensions.register(new BreakInfinity());
})(Scratch);
