!function (e, t) {"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.HelloSign = t() : e.HelloSign = t()}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {i: r, l: !1, exports: {}};
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      })
    }, n.r = function (e) {"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})}, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {return e[t]}.bind(null, o));
      return r
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {return e.default} : function () {return e};
      return n.d(t, "a", t), t
    }, n.o = function (e, t) {return Object.prototype.hasOwnProperty.call(e, t)}, n.p = "", n(n.s = 85)
  }([function (e, t, n) {
    var r = n(32)("wks"), o = n(22), i = n(4).Symbol, u = "function" == typeof i;
    (e.exports = function (e) {return r[e] || (r[e] = u && i[e] || (u ? i : o)("Symbol." + e))}).store = r
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(114)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(115)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    var r = n(11);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e
    }
  }, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
  }, function (e, t, n) {
    var r = n(3), o = n(60), i = n(33), u = Object.defineProperty;
    t.f = n(6) ? Object.defineProperty : function (e, t, n) {
      if (r(e), t = i(t, !0), r(n), o) try {return u(e, t, n)} catch (e) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (e[t] = n.value), e
    }
  }, function (e, t, n) {e.exports = !n(7)(function () {return 7 != Object.defineProperty({}, "a", {get: function () {return 7}}).a})}, function (e, t) {e.exports = function (e) {try {return !!e()} catch (e) {return !0}}}, function (e, t, n) {
    var r = n(4), o = n(19), i = n(15), u = n(13), a = n(43), s = function (e, t, n) {
      var c, f, l, d, p = e & s.F, h = e & s.G, v = e & s.S, g = e & s.P, y = e & s.B,
        m = h ? r : v ? r[t] || (r[t] = {}) : (r[t] || {}).prototype, b = h ? o : o[t] || (o[t] = {}),
        _ = b.prototype || (b.prototype = {});
      for (c in h && (n = t), n) l = ((f = !p && m && void 0 !== m[c]) ? m : n)[c], d = y && f ? a(l, r) : g && "function" == typeof l ? a(Function.call, l) : l, m && u(m, c, l, e & s.U), b[c] != l && i(b, c, d), g && _[c] != l && (_[c] = l)
    };
    r.core = o, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
  }, function (e, t, n) {
    "use strict";
    var r = n(3), o = n(41), i = n(26), u = n(34), a = n(51), s = n(37), c = Math.max, f = Math.min, l = Math.floor,
      d = /\$([$&`']|\d\d?|<[^>]*>)/g, p = /\$([$&`']|\d\d?)/g;
    n(38)("replace", 2, function (e, t, n, h) {
      return [function (r, o) {
        var i = e(this), u = null == r ? void 0 : r[t];
        return void 0 !== u ? u.call(r, i, o) : n.call(String(i), r, o)
      }, function (e, t) {
        var o = h(n, e, this, t);
        if (o.done) return o.value;
        var l = r(e), d = String(this), p = "function" == typeof t;
        p || (t = String(t));
        var g = l.global;
        if (g) {
          var y = l.unicode;
          l.lastIndex = 0
        }
        for (var m = []; ;) {
          var b = s(l, d);
          if (null === b) break;
          if (m.push(b), !g) break;
          "" === String(b[0]) && (l.lastIndex = a(d, i(l.lastIndex), y))
        }
        for (var _, E = "", S = 0, w = 0; w < m.length; w++) {
          b = m[w];
          for (var O = String(b[0]), x = c(f(u(b.index), d.length), 0), j = [], C = 1; C < b.length; C++) j.push(void 0 === (_ = b[C]) ? _ : String(_));
          var P = b.groups;
          if (p) {
            var R = [O].concat(j, x, d);
            void 0 !== P && R.push(P);
            var M = String(t.apply(void 0, R))
          } else M = v(O, d, x, j, P, t);
          x >= S && (E += d.slice(S, x) + M, S = x + O.length)
        }
        return E + d.slice(S)
      }];

      function v(e, t, r, i, u, a) {
        var s = r + e.length, c = i.length, f = p;
        return void 0 !== u && (u = o(u), f = d), n.call(a, f, function (n, o) {
          var a;
          switch (o.charAt(0)) {
            case"$":
              return "$";
            case"&":
              return e;
            case"`":
              return t.slice(0, r);
            case"'":
              return t.slice(s);
            case"<":
              a = u[o.slice(1, -1)];
              break;
            default:
              var f = +o;
              if (0 === f) return n;
              if (f > c) {
                var d = l(f / 10);
                return 0 === d ? n : d <= c ? void 0 === i[d - 1] ? o.charAt(1) : i[d - 1] + o.charAt(1) : n
              }
              a = i[f - 1]
          }
          return void 0 === a ? "" : a
        })
      }
    })
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(127)) && r.__esModule ? r : {default: r}
  }, function (e, t) {e.exports = function (e) {return "object" == typeof e ? null !== e : "function" == typeof e}}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {return n.call(e, t)}
  }, function (e, t, n) {
    var r = n(4), o = n(15), i = n(12), u = n(22)("src"), a = n(87), s = ("" + a).split("toString");
    n(19).inspectSource = function (e) {return a.call(e)}, (e.exports = function (e, t, n, a) {
      var c = "function" == typeof n;
      c && (i(n, "name") || o(n, "name", t)), e[t] !== n && (c && (i(n, u) || o(n, u, e[t] ? "" + e[t] : s.join(String(t)))), e === r ? e[t] = n : a ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)))
    })(Function.prototype, "toString", function () {return "function" == typeof this && this[u] || a.call(this)})
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(116)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    var r = n(5), o = n(23);
    e.exports = n(6) ? function (e, t, n) {return r.f(e, t, o(1, n))} : function (e, t, n) {return e[t] = n, e}
  }, function (e, t, n) {n(58)("asyncIterator")}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(12), i = n(6), u = n(8), a = n(13), s = n(63).KEY, c = n(7), f = n(32), l = n(44), d = n(22),
      p = n(0), h = n(59), v = n(58), g = n(88), y = n(91), m = n(3), b = n(11), _ = n(20), E = n(33), S = n(23),
      w = n(48), O = n(94), x = n(36), j = n(5), C = n(24), P = x.f, R = j.f, M = O.f, T = r.Symbol, A = r.JSON,
      L = A && A.stringify, k = p("_hidden"), I = p("toPrimitive"), F = {}.propertyIsEnumerable,
      N = f("symbol-registry"), U = f("symbols"), D = f("op-symbols"), q = Object.prototype, B = "function" == typeof T,
      H = r.QObject, G = !H || !H.prototype || !H.prototype.findChild,
      V = i && c(function () {return 7 != w(R({}, "a", {get: function () {return R(this, "a", {value: 7}).a}})).a}) ? function (e, t, n) {
        var r = P(q, t);
        r && delete q[t], R(e, t, n), r && e !== q && R(q, t, r)
      } : R, z = function (e) {
        var t = U[e] = w(T.prototype);
        return t._k = e, t
      },
      $ = B && "symbol" == typeof T.iterator ? function (e) {return "symbol" == typeof e} : function (e) {return e instanceof T},
      Q = function (e, t, n) {return e === q && Q(D, t, n), m(e), t = E(t, !0), m(n), o(U, t) ? (n.enumerable ? (o(e, k) && e[k][t] && (e[k][t] = !1), n = w(n, {enumerable: S(0, !1)})) : (o(e, k) || R(e, k, S(1, {})), e[k][t] = !0), V(e, t, n)) : R(e, t, n)},
      J = function (e, t) {
        m(e);
        for (var n, r = g(t = _(t)), o = 0, i = r.length; i > o;) Q(e, n = r[o++], t[n]);
        return e
      }, Y = function (e) {
        var t = F.call(this, e = E(e, !0));
        return !(this === q && o(U, e) && !o(D, e)) && (!(t || !o(this, e) || !o(U, e) || o(this, k) && this[k][e]) || t)
      }, W = function (e, t) {
        if (e = _(e), t = E(t, !0), e !== q || !o(U, t) || o(D, t)) {
          var n = P(e, t);
          return !n || !o(U, t) || o(e, k) && e[k][t] || (n.enumerable = !0), n
        }
      }, Z = function (e) {
        for (var t, n = M(_(e)), r = [], i = 0; n.length > i;) o(U, t = n[i++]) || t == k || t == s || r.push(t);
        return r
      }, K = function (e) {
        for (var t, n = e === q, r = M(n ? D : _(e)), i = [], u = 0; r.length > u;) !o(U, t = r[u++]) || n && !o(q, t) || i.push(U[t]);
        return i
      };
    B || (a((T = function () {
      if (this instanceof T) throw TypeError("Symbol is not a constructor!");
      var e = d(arguments.length > 0 ? arguments[0] : void 0),
        t = function (n) {this === q && t.call(D, n), o(this, k) && o(this[k], e) && (this[k][e] = !1), V(this, e, S(1, n))};
      return i && G && V(q, e, {configurable: !0, set: t}), z(e)
    }).prototype, "toString", function () {return this._k}), x.f = W, j.f = Q, n(35).f = O.f = Z, n(47).f = Y, n(66).f = K, i && !n(31) && a(q, "propertyIsEnumerable", Y, !0), h.f = function (e) {return z(p(e))}), u(u.G + u.W + u.F * !B, {Symbol: T});
    for (var X = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; X.length > ee;) p(X[ee++]);
    for (var te = C(p.store), ne = 0; te.length > ne;) v(te[ne++]);
    u(u.S + u.F * !B, "Symbol", {
      for: function (e) {return o(N, e += "") ? N[e] : N[e] = T(e)},
      keyFor: function (e) {
        if (!$(e)) throw TypeError(e + " is not a symbol!");
        for (var t in N) if (N[t] === e) return t
      },
      useSetter: function () {G = !0},
      useSimple: function () {G = !1}
    }), u(u.S + u.F * !B, "Object", {
      create: function (e, t) {return void 0 === t ? w(e) : J(w(e), t)},
      defineProperty: Q,
      defineProperties: J,
      getOwnPropertyDescriptor: W,
      getOwnPropertyNames: Z,
      getOwnPropertySymbols: K
    }), A && u(u.S + u.F * (!B || c(function () {
      var e = T();
      return "[null]" != L([e]) || "{}" != L({a: e}) || "{}" != L(Object(e))
    })), "JSON", {
      stringify: function (e) {
        for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
        if (n = t = r[1], (b(t) || void 0 !== e) && !$(e)) return y(t) || (t = function (e, t) {if ("function" == typeof n && (t = n.call(this, e, t)), !$(t)) return t}), r[1] = t, L.apply(A, r)
      }
    }), T.prototype[I] || n(15)(T.prototype, I, T.prototype.valueOf), l(T, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(123)) && r.__esModule ? r : {default: r}
  }, function (e, t) {
    var n = e.exports = {version: "2.6.5"};
    "number" == typeof __e && (__e = n)
  }, function (e, t, n) {
    var r = n(89), o = n(21);
    e.exports = function (e) {return r(o(e))}
  }, function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e
    }
  }, function (e, t) {
    var n = 0, r = Math.random();
    e.exports = function (e) {return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))}
  }, function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    }
  }, function (e, t, n) {
    var r = n(64), o = n(46);
    e.exports = Object.keys || function (e) {return r(e, o)}
  }, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {return n.call(e).slice(8, -1)}
  }, function (e, t, n) {
    var r = n(34), o = Math.min;
    e.exports = function (e) {return e > 0 ? o(r(e), 9007199254740991) : 0}
  }, function (e, t, n) {
    "use strict";
    var r = n(70), o = n(98), i = n(28), u = n(20);
    e.exports = n(71)(Array, "Array", function (e, t) {this._t = u(e), this._i = 0, this._k = t}, function () {
      var e = this._t, t = this._k, n = this._i++;
      return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
  }, function (e, t) {e.exports = {}}, function (e, t, n) {
    "use strict";
    n(100);
    var r = n(3), o = n(39), i = n(6), u = /./.toString, a = function (e) {n(13)(RegExp.prototype, "toString", e, !0)};
    n(7)(function () {return "/a/b" != u.call({source: "a", flags: "b"})}) ? a(function () {
      var e = r(this);
      return "/".concat(e.source, "/", "flags" in e ? e.flags : !i && e instanceof RegExp ? o.call(e) : void 0)
    }) : "toString" != u.name && a(function () {return u.call(this)})
  }, function (e, t, n) {
    var r = Date.prototype, o = r.toString, i = r.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(13)(r, "toString", function () {
      var e = i.call(this);
      return e == e ? o.call(this) : "Invalid Date"
    })
  }, function (e, t) {e.exports = !1}, function (e, t, n) {
    var r = n(19), o = n(4), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function (e, t) {return i[e] || (i[e] = void 0 !== t ? t : {})})("versions", []).push({
      version: r.version,
      mode: n(31) ? "pure" : "global",
      copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
    })
  }, function (e, t, n) {
    var r = n(11);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, o;
      if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
      if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
      if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function (e, t) {
    var n = Math.ceil, r = Math.floor;
    e.exports = function (e) {return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)}
  }, function (e, t, n) {
    var r = n(64), o = n(46).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {return r(e, o)}
  }, function (e, t, n) {
    var r = n(47), o = n(23), i = n(20), u = n(33), a = n(12), s = n(60), c = Object.getOwnPropertyDescriptor;
    t.f = n(6) ? c : function (e, t) {
      if (e = i(e), t = u(t, !0), s) try {return c(e, t)} catch (e) {}
      if (a(e, t)) return o(!r.f.call(e, t), e[t])
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(68), o = RegExp.prototype.exec;
    e.exports = function (e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var i = n.call(e, t);
        if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
        return i
      }
      if ("RegExp" !== r(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
      return o.call(e, t)
    }
  }, function (e, t, n) {
    "use strict";
    n(96);
    var r = n(13), o = n(15), i = n(7), u = n(21), a = n(0), s = n(49), c = a("species"), f = !i(function () {
      var e = /./;
      return e.exec = function () {
        var e = [];
        return e.groups = {a: "7"}, e
      }, "7" !== "".replace(e, "$<a>")
    }), l = function () {
      var e = /(?:)/, t = e.exec;
      e.exec = function () {return t.apply(this, arguments)};
      var n = "ab".split(e);
      return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
    e.exports = function (e, t, n) {
      var d = a(e), p = !i(function () {
        var t = {};
        return t[d] = function () {return 7}, 7 != ""[e](t)
      }), h = p ? !i(function () {
        var t = !1, n = /a/;
        return n.exec = function () {return t = !0, null}, "split" === e && (n.constructor = {}, n.constructor[c] = function () {return n}), n[d](""), !t
      }) : void 0;
      if (!p || !h || "replace" === e && !f || "split" === e && !l) {
        var v = /./[d], g = n(u, d, ""[e], function (e, t, n, r, o) {
          return t.exec === s ? p && !o ? {
            done: !0,
            value: v.call(t, n, r)
          } : {done: !0, value: e.call(n, t, r)} : {done: !1}
        }), y = g[0], m = g[1];
        r(String.prototype, e, y), o(RegExp.prototype, d, 2 == t ? function (e, t) {return m.call(e, this, t)} : function (e) {return m.call(e, this)})
      }
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function () {
      var e = r(this), t = "";
      return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(50), o = n(3), i = n(97), u = n(51), a = n(26), s = n(37), c = n(49), f = n(7), l = Math.min, d = [].push,
      p = !f(function () {RegExp(4294967295, "y")});
    n(38)("split", 2, function (e, t, n, f) {
      var h;
      return h = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, t) {
        var o = String(this);
        if (void 0 === e && 0 === t) return [];
        if (!r(e)) return n.call(o, e, t);
        for (var i, u, a, s = [], f = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), l = 0, p = void 0 === t ? 4294967295 : t >>> 0, h = new RegExp(e.source, f + "g"); (i = c.call(h, o)) && !((u = h.lastIndex) > l && (s.push(o.slice(l, i.index)), i.length > 1 && i.index < o.length && d.apply(s, i.slice(1)), a = i[0].length, l = u, s.length >= p));) h.lastIndex === i.index && h.lastIndex++;
        return l === o.length ? !a && h.test("") || s.push("") : s.push(o.slice(l)), s.length > p ? s.slice(0, p) : s
      } : "0".split(void 0, 0).length ? function (e, t) {return void 0 === e && 0 === t ? [] : n.call(this, e, t)} : n, [function (n, r) {
        var o = e(this), i = null == n ? void 0 : n[t];
        return void 0 !== i ? i.call(n, o, r) : h.call(String(o), n, r)
      }, function (e, t) {
        var r = f(h, e, this, t, h !== n);
        if (r.done) return r.value;
        var c = o(e), d = String(this), v = i(c, RegExp), g = c.unicode,
          y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (p ? "y" : "g"),
          m = new v(p ? c : "^(?:" + c.source + ")", y), b = void 0 === t ? 4294967295 : t >>> 0;
        if (0 === b) return [];
        if (0 === d.length) return null === s(m, d) ? [d] : [];
        for (var _ = 0, E = 0, S = []; E < d.length;) {
          m.lastIndex = p ? E : 0;
          var w, O = s(m, p ? d : d.slice(E));
          if (null === O || (w = l(a(m.lastIndex + (p ? 0 : E)), d.length)) === _) E = u(d, E, g); else {
            if (S.push(d.slice(_, E)), S.length === b) return S;
            for (var x = 1; x <= O.length - 1; x++) if (S.push(O[x]), S.length === b) return S;
            E = _ = w
          }
        }
        return S.push(d.slice(_)), S
      }]
    })
  }, function (e, t, n) {
    var r = n(21);
    e.exports = function (e) {return Object(r(e))}
  }, function (e, t, n) {
    for (var r = n(27), o = n(24), i = n(13), u = n(4), a = n(15), s = n(28), c = n(0), f = c("iterator"), l = c("toStringTag"), d = s.Array, p = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, h = o(p), v = 0; v < h.length; v++) {
      var g, y = h[v], m = p[y], b = u[y], _ = b && b.prototype;
      if (_ && (_[f] || a(_, f, d), _[l] || a(_, l, y), s[y] = d, m)) for (g in r) _[g] || i(_, g, r[g], !0)
    }
  }, function (e, t, n) {
    var r = n(62);
    e.exports = function (e, t, n) {
      if (r(e), void 0 === t) return e;
      switch (n) {
        case 1:
          return function (n) {return e.call(t, n)};
        case 2:
          return function (n, r) {return e.call(t, n, r)};
        case 3:
          return function (n, r, o) {return e.call(t, n, r, o)}
      }
      return function () {return e.apply(t, arguments)}
    }
  }, function (e, t, n) {
    var r = n(5).f, o = n(12), i = n(0)("toStringTag");
    e.exports = function (e, t, n) {e && !o(e = n ? e : e.prototype, i) && r(e, i, {configurable: !0, value: t})}
  }, function (e, t, n) {
    var r = n(32)("keys"), o = n(22);
    e.exports = function (e) {return r[e] || (r[e] = o(e))}
  }, function (e, t) {e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}, function (e, t) {t.f = {}.propertyIsEnumerable}, function (e, t, n) {
    var r = n(3), o = n(92), i = n(46), u = n(45)("IE_PROTO"), a = function () {}, s = function () {
      var e, t = n(61)("iframe"), r = i.length;
      for (t.style.display = "none", n(93).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), s = e.F; r--;) delete s.prototype[i[r]];
      return s()
    };
    e.exports = Object.create || function (e, t) {
      var n;
      return null !== e ? (a.prototype = r(e), n = new a, a.prototype = null, n[u] = e) : n = s(), void 0 === t ? n : o(n, t)
    }
  }, function (e, t, n) {
    "use strict";
    var r, o, i = n(39), u = RegExp.prototype.exec, a = String.prototype.replace, s = u,
      c = (r = /a/, o = /b*/g, u.call(r, "a"), u.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
      f = void 0 !== /()??/.exec("")[1];
    (c || f) && (s = function (e) {
      var t, n, r, o, s = this;
      return f && (n = new RegExp("^" + s.source + "$(?!\\s)", i.call(s))), c && (t = s.lastIndex), r = u.call(s, e), c && r && (s.lastIndex = s.global ? r.index + r[0].length : t), f && r && r.length > 1 && a.call(r[0], n, function () {for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)}), r
    }), e.exports = s
  }, function (e, t, n) {
    var r = n(11), o = n(25), i = n(0)("match");
    e.exports = function (e) {
      var t;
      return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e))
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(69)(!0);
    e.exports = function (e, t, n) {return t + (n ? r(e, t).length : 1)}
  }, function (e, t, n) {
    var r = n(5).f, o = Function.prototype, i = /^\s*function ([^ (]*)/;
    "name" in o || n(6) && r(o, "name", {
      configurable: !0,
      get: function () {try {return ("" + this).match(i)[1]} catch (e) {return ""}}
    })
  }, function (e, t, n) {
    var r = n(4), o = n(79), i = n(5).f, u = n(35).f, a = n(50), s = n(39), c = r.RegExp, f = c, l = c.prototype,
      d = /a/g, p = /a/g, h = new c(d) !== d;
    if (n(6) && (!h || n(7)(function () {return p[n(0)("match")] = !1, c(d) != d || c(p) == p || "/a/i" != c(d, "i")}))) {
      c = function (e, t) {
        var n = this instanceof c, r = a(e), i = void 0 === t;
        return !n && r && e.constructor === c && i ? e : o(h ? new f(r && !i ? e.source : e, t) : f((r = e instanceof c) ? e.source : e, r && i ? s.call(e) : t), n ? this : l, c)
      };
      for (var v = function (e) {
        e in c || i(c, e, {
          configurable: !0,
          get: function () {return f[e]},
          set: function (t) {f[e] = t}
        })
      }, g = u(f), y = 0; g.length > y;) v(g[y++]);
      l.constructor = c, c.prototype = l, n(13)(r, "RegExp", c)
    }
    n(117)("RegExp")
  }, function (e, t, n) {
    "use strict";
    var r = n(3), o = n(26), i = n(51), u = n(37);
    n(38)("match", 1, function (e, t, n, a) {
      return [function (n) {
        var r = e(this), o = null == n ? void 0 : n[t];
        return void 0 !== o ? o.call(n, r) : new RegExp(n)[t](String(r))
      }, function (e) {
        var t = a(n, e, this);
        if (t.done) return t.value;
        var s = r(e), c = String(this);
        if (!s.global) return u(s, c);
        var f = s.unicode;
        s.lastIndex = 0;
        for (var l, d = [], p = 0; null !== (l = u(s, c));) {
          var h = String(l[0]);
          d[p] = h, "" === h && (s.lastIndex = i(c, o(s.lastIndex), f)), p++
        }
        return 0 === p ? null : d
      }]
    })
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(128)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(139)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";

    function r(e) {return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}

    var o;
    n(16), n(17), o = function () {return this}();
    try {o = o || new Function("return this")()} catch (e) {"object" === ("undefined" == typeof window ? "undefined" : r(window)) && (o = window)}
    e.exports = o
  }, function (e, t, n) {
    var r = n(4), o = n(19), i = n(31), u = n(59), a = n(5).f;
    e.exports = function (e) {
      var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
      "_" == e.charAt(0) || e in t || a(t, e, {value: u.f(e)})
    }
  }, function (e, t, n) {t.f = n(0)}, function (e, t, n) {e.exports = !n(6) && !n(7)(function () {return 7 != Object.defineProperty(n(61)("div"), "a", {get: function () {return 7}}).a})}, function (e, t, n) {
    var r = n(11), o = n(4).document, i = r(o) && r(o.createElement);
    e.exports = function (e) {return i ? o.createElement(e) : {}}
  }, function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e
    }
  }, function (e, t, n) {
    var r = n(22)("meta"), o = n(11), i = n(12), u = n(5).f, a = 0, s = Object.isExtensible || function () {return !0},
      c = !n(7)(function () {return s(Object.preventExtensions({}))}),
      f = function (e) {u(e, r, {value: {i: "O" + ++a, w: {}}})}, l = e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function (e, t) {
          if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
          if (!i(e, r)) {
            if (!s(e)) return "F";
            if (!t) return "E";
            f(e)
          }
          return e[r].i
        },
        getWeak: function (e, t) {
          if (!i(e, r)) {
            if (!s(e)) return !0;
            if (!t) return !1;
            f(e)
          }
          return e[r].w
        },
        onFreeze: function (e) {return c && l.NEED && s(e) && !i(e, r) && f(e), e}
      }
  }, function (e, t, n) {
    var r = n(12), o = n(20), i = n(65)(!1), u = n(45)("IE_PROTO");
    e.exports = function (e, t) {
      var n, a = o(e), s = 0, c = [];
      for (n in a) n != u && r(a, n) && c.push(n);
      for (; t.length > s;) r(a, n = t[s++]) && (~i(c, n) || c.push(n));
      return c
    }
  }, function (e, t, n) {
    var r = n(20), o = n(26), i = n(90);
    e.exports = function (e) {
      return function (t, n, u) {
        var a, s = r(t), c = o(s.length), f = i(u, c);
        if (e && n != n) {for (; c > f;) if ((a = s[f++]) != a) return !0} else for (; c > f; f++) if ((e || f in s) && s[f] === n) return e || f || 0;
        return !e && -1
      }
    }
  }, function (e, t) {t.f = Object.getOwnPropertySymbols}, function (e, t, n) {
    "use strict";
    var r = n(3), o = n(95), i = n(37);
    n(38)("search", 1, function (e, t, n, u) {
      return [function (n) {
        var r = e(this), o = null == n ? void 0 : n[t];
        return void 0 !== o ? o.call(n, r) : new RegExp(n)[t](String(r))
      }, function (e) {
        var t = u(n, e, this);
        if (t.done) return t.value;
        var a = r(e), s = String(this), c = a.lastIndex;
        o(c, 0) || (a.lastIndex = 0);
        var f = i(a, s);
        return o(a.lastIndex, c) || (a.lastIndex = c), null === f ? -1 : f.index
      }]
    })
  }, function (e, t, n) {
    var r = n(25), o = n(0)("toStringTag"), i = "Arguments" == r(function () {return arguments}());
    e.exports = function (e) {
      var t, n, u;
      return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {try {return e[t]} catch (e) {}}(t = Object(e), o)) ? n : i ? r(t) : "Object" == (u = r(t)) && "function" == typeof t.callee ? "Arguments" : u
    }
  }, function (e, t, n) {
    var r = n(34), o = n(21);
    e.exports = function (e) {
      return function (t, n) {
        var i, u, a = String(o(t)), s = r(n), c = a.length;
        return s < 0 || s >= c ? e ? "" : void 0 : (i = a.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === c || (u = a.charCodeAt(s + 1)) < 56320 || u > 57343 ? e ? a.charAt(s) : i : e ? a.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
      }
    }
  }, function (e, t, n) {
    var r = n(0)("unscopables"), o = Array.prototype;
    null == o[r] && n(15)(o, r, {}), e.exports = function (e) {o[r][e] = !0}
  }, function (e, t, n) {
    "use strict";
    var r = n(31), o = n(8), i = n(13), u = n(15), a = n(28), s = n(99), c = n(44), f = n(72), l = n(0)("iterator"),
      d = !([].keys && "next" in [].keys()), p = function () {return this};
    e.exports = function (e, t, n, h, v, g, y) {
      s(n, t, h);
      var m, b, _, E = function (e) {
          if (!d && e in x) return x[e];
          switch (e) {
            case"keys":
            case"values":
              return function () {return new n(this, e)}
          }
          return function () {return new n(this, e)}
        }, S = t + " Iterator", w = "values" == v, O = !1, x = e.prototype, j = x[l] || x["@@iterator"] || v && x[v],
        C = j || E(v), P = v ? w ? E("entries") : C : void 0, R = "Array" == t && x.entries || j;
      if (R && (_ = f(R.call(new e))) !== Object.prototype && _.next && (c(_, S, !0), r || "function" == typeof _[l] || u(_, l, p)), w && j && "values" !== j.name && (O = !0, C = function () {return j.call(this)}), r && !y || !d && !O && x[l] || u(x, l, C), a[t] = C, a[S] = p, v) if (m = {
        values: w ? C : E("values"),
        keys: g ? C : E("keys"),
        entries: P
      }, y) for (b in m) b in x || i(x, b, m[b]); else o(o.P + o.F * (d || O), t, m);
      return m
    }
  }, function (e, t, n) {
    var r = n(12), o = n(41), i = n(45)("IE_PROTO"), u = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null}
  }, function (e, t, n) {
    var r = n(11), o = n(63).onFreeze;
    n(74)("freeze", function (e) {return function (t) {return e && r(t) ? e(o(t)) : t}})
  }, function (e, t, n) {
    var r = n(8), o = n(19), i = n(7);
    e.exports = function (e, t) {
      var n = (o.Object || {})[e] || Object[e], u = {};
      u[e] = t(n), r(r.S + r.F * i(function () {n(1)}), "Object", u)
    }
  }, function (e, t, n) {
    var r = n(41), o = n(24);
    n(74)("keys", function () {return function (e) {return o(r(e))}})
  }, function (e, t, n) {
    var r = n(11), o = n(3),
      i = function (e, t) {if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")};
    e.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, r) {
        try {(r = n(43)(Function.call, n(36).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)} catch (e) {t = !0}
        return function (e, n) {return i(e, n), t ? e.__proto__ = n : r(e, n), e}
      }({}, !1) : void 0), check: i
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(8), o = n(65)(!0);
    r(r.P, "Array", {includes: function (e) {return o(this, e, arguments.length > 1 ? arguments[1] : void 0)}}), n(70)("includes")
  }, function (e, t, n) {
    "use strict";
    var r = n(8), o = n(110);
    r(r.P + r.F * n(111)("includes"), "String", {includes: function (e) {return !!~o(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)}})
  }, function (e, t, n) {
    var r = n(11), o = n(76).set;
    e.exports = function (e, t, n) {
      var i, u = t.constructor;
      return u !== n && "function" == typeof u && (i = u.prototype) !== n.prototype && r(i) && o && o(e, i), e
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(69)(!0);
    n(71)(String, "String", function (e) {this._t = String(e), this._i = 0}, function () {
      var e, t = this._t, n = this._i;
      return n >= t.length ? {value: void 0, done: !0} : (e = r(t, n), this._i += e.length, {value: e, done: !1})
    })
  }, function (e, t, n) {
    "use strict";
    var r = n(43), o = n(8), i = n(41), u = n(118), a = n(119), s = n(26), c = n(120), f = n(121);
    o(o.S + o.F * !n(122)(function (e) {Array.from(e)}), "Array", {
      from: function (e) {
        var t, n, o, l, d = i(e), p = "function" == typeof this ? this : Array, h = arguments.length,
          v = h > 1 ? arguments[1] : void 0, g = void 0 !== v, y = 0, m = f(d);
        if (g && (v = r(v, h > 2 ? arguments[2] : void 0, 2)), null == m || p == Array && a(m)) for (n = new p(t = s(d.length)); t > y; y++) c(n, y, g ? v(d[y], y) : d[y]); else for (l = m.call(d), n = new p; !(o = l.next()).done; y++) c(n, y, g ? u(l, v, [o.value, y], !0) : o.value);
        return n.length = y, n
      }
    })
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(124)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(129)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(12), i = n(25), u = n(79), a = n(33), s = n(7), c = n(35).f, f = n(36).f, l = n(5).f,
      d = n(130).trim, p = r.Number, h = p, v = p.prototype, g = "Number" == i(n(48)(v)),
      y = "trim" in String.prototype, m = function (e) {
        var t = a(e, !1);
        if ("string" == typeof t && t.length > 2) {
          var n, r, o, i = (t = y ? t.trim() : d(t, 3)).charCodeAt(0);
          if (43 === i || 45 === i) {if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN} else if (48 === i) {
            switch (t.charCodeAt(1)) {
              case 66:
              case 98:
                r = 2, o = 49;
                break;
              case 79:
              case 111:
                r = 8, o = 55;
                break;
              default:
                return +t
            }
            for (var u, s = t.slice(2), c = 0, f = s.length; c < f; c++) if ((u = s.charCodeAt(c)) < 48 || u > o) return NaN;
            return parseInt(s, r)
          }
        }
        return +t
      };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
      p = function (e) {
        var t = arguments.length < 1 ? 0 : e, n = this;
        return n instanceof p && (g ? s(function () {v.valueOf.call(n)}) : "Number" != i(n)) ? u(new h(m(t)), n, p) : m(t)
      };
      for (var b, _ = n(6) ? c(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), E = 0; _.length > E; E++) o(h, b = _[E]) && !o(p, b) && l(p, b, f(h, b));
      p.prototype = v, v.constructor = p, n(13)(r, "Number", p)
    }
  }, function (e, t, n) {n(86), n(101), n(102), e.exports = n(107)}, function (e, t, n) {
    "use strict";
    (function (e) {
      function t(e) {return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}

      n(67), n(40), n(27), n(52), n(29), n(30), n(42), n(9), n(16), n(17), function (e) {
        var n = function () {try {return !!Symbol.iterator} catch (e) {return !1}}(), r = function (e) {
            var t = {
              next: function () {
                var t = e.shift();
                return {done: void 0 === t, value: t}
              }
            };
            return n && (t[Symbol.iterator] = function () {return t}), t
          }, o = function (e) {return encodeURIComponent(e).replace(/%20/g, "+")},
          i = function (e) {return decodeURIComponent(String(e).replace(/\+/g, " "))};
        (function () {
          try {
            var t = e.URLSearchParams;
            return "a=1" === new t("?a=1").toString() && "function" == typeof t.prototype.set
          } catch (e) {return !1}
        })() || function () {
          var i = function e(n) {
            Object.defineProperty(this, "_entries", {writable: !0, value: {}});
            var r = t(n);
            if ("undefined" === r) ; else if ("string" === r) "" !== n && this._fromString(n); else if (n instanceof e) {
              var o = this;
              n.forEach(function (e, t) {o.append(t, e)})
            } else {
              if (null === n || "object" !== r) throw new TypeError("Unsupported input's type for URLSearchParams");
              if ("[object Array]" === Object.prototype.toString.call(n)) for (var i = 0; i < n.length; i++) {
                var u = n[i];
                if ("[object Array]" !== Object.prototype.toString.call(u) && 2 === u.length) throw new TypeError("Expected [string, any] as entry at index " + i + " of URLSearchParams's input");
                this.append(u[0], u[1])
              } else for (var a in n) n.hasOwnProperty(a) && this.append(a, n[a])
            }
          }, u = i.prototype;
          u.append = function (e, t) {e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [String(t)]}, u.delete = function (e) {delete this._entries[e]}, u.get = function (e) {return e in this._entries ? this._entries[e][0] : null}, u.getAll = function (e) {return e in this._entries ? this._entries[e].slice(0) : []}, u.has = function (e) {return e in this._entries}, u.set = function (e, t) {this._entries[e] = [String(t)]}, u.forEach = function (e, t) {
            var n;
            for (var r in this._entries) if (this._entries.hasOwnProperty(r)) {
              n = this._entries[r];
              for (var o = 0; o < n.length; o++) e.call(t, n[o], r, this)
            }
          }, u.keys = function () {
            var e = [];
            return this.forEach(function (t, n) {e.push(n)}), r(e)
          }, u.values = function () {
            var e = [];
            return this.forEach(function (t) {e.push(t)}), r(e)
          }, u.entries = function () {
            var e = [];
            return this.forEach(function (t, n) {e.push([n, t])}), r(e)
          }, n && (u[Symbol.iterator] = u.entries), u.toString = function () {
            var e = [];
            return this.forEach(function (t, n) {e.push(o(n) + "=" + o(t))}), e.join("&")
          }, e.URLSearchParams = i
        }();
        var u = e.URLSearchParams.prototype;
        "function" != typeof u.sort && (u.sort = function () {
          var e = this, t = [];
          this.forEach(function (n, r) {t.push([r, n]), e._entries || e.delete(r)}), t.sort(function (e, t) {return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0}), e._entries && (e._entries = {});
          for (var n = 0; n < t.length; n++) this.append(t[n][0], t[n][1])
        }), "function" != typeof u._fromString && Object.defineProperty(u, "_fromString", {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: function (e) {
            if (this._entries) this._entries = {}; else {
              var t = [];
              this.forEach(function (e, n) {t.push(n)});
              for (var n = 0; n < t.length; n++) this.delete(t[n])
            }
            var r, o = (e = e.replace(/^\?/, "")).split("&");
            for (n = 0; n < o.length; n++) r = o[n].split("="), this.append(i(r[0]), r.length > 1 ? i(r[1]) : "")
          }
        })
      }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0), function (e) {
        var t, n, r;
        if (function () {
          try {
            var t = new e.URL("b", "http://a");
            return t.pathname = "c d", "http://a/c%20d" === t.href && t.searchParams
          } catch (e) {return !1}
        }() || (t = e.URL, r = (n = function (t, n) {
          "string" != typeof t && (t = String(t));
          var r, o = document;
          if (n && (void 0 === e.location || n !== e.location.href)) {
            (r = (o = document.implementation.createHTMLDocument("")).createElement("base")).href = n, o.head.appendChild(r);
            try {if (0 !== r.href.indexOf(n)) throw new Error(r.href)} catch (e) {throw new Error("URL unable to set base " + n + " due to " + e)}
          }
          var i = o.createElement("a");
          if (i.href = t, r && (o.body.appendChild(i), i.href = i.href), ":" === i.protocol || !/:/.test(i.href)) throw new TypeError("Invalid URL");
          Object.defineProperty(this, "_anchorElement", {value: i});
          var u = new e.URLSearchParams(this.search), a = !0, s = !0, c = this;
          ["append", "delete", "set"].forEach(function (e) {
            var t = u[e];
            u[e] = function () {t.apply(u, arguments), a && (s = !1, c.search = u.toString(), s = !0)}
          }), Object.defineProperty(this, "searchParams", {value: u, enumerable: !0});
          var f = void 0;
          Object.defineProperty(this, "_updateSearchParams", {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: function () {this.search !== f && (f = this.search, s && (a = !1, this.searchParams._fromString(this.search), a = !0))}
          })
        }).prototype, ["hash", "host", "hostname", "port", "protocol"].forEach(function (e) {
          !function (e) {
            Object.defineProperty(r, e, {
              get: function () {return this._anchorElement[e]},
              set: function (t) {this._anchorElement[e] = t},
              enumerable: !0
            })
          }(e)
        }), Object.defineProperty(r, "search", {
          get: function () {return this._anchorElement.search},
          set: function (e) {this._anchorElement.search = e, this._updateSearchParams()},
          enumerable: !0
        }), Object.defineProperties(r, {
          toString: {
            get: function () {
              var e = this;
              return function () {return e.href}
            }
          },
          href: {
            get: function () {return this._anchorElement.href.replace(/\?$/, "")},
            set: function (e) {this._anchorElement.href = e, this._updateSearchParams()},
            enumerable: !0
          },
          pathname: {
            get: function () {return this._anchorElement.pathname.replace(/(^\/?)/, "/")},
            set: function (e) {this._anchorElement.pathname = e},
            enumerable: !0
          },
          origin: {
            get: function () {
              var e = {"http:": 80, "https:": 443, "ftp:": 21}[this._anchorElement.protocol],
                t = this._anchorElement.port != e && "" !== this._anchorElement.port;
              return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
            }, enumerable: !0
          },
          password: {get: function () {return ""}, set: function (e) {}, enumerable: !0},
          username: {get: function () {return ""}, set: function (e) {}, enumerable: !0}
        }), n.createObjectURL = function (e) {return t.createObjectURL.apply(t, arguments)}, n.revokeObjectURL = function (e) {return t.revokeObjectURL.apply(t, arguments)}, e.URL = n), void 0 !== e.location && !("origin" in e.location)) {
          var o = function () {return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")};
          try {
            Object.defineProperty(e.location, "origin", {
              get: o,
              enumerable: !0
            })
          } catch (t) {setInterval(function () {e.location.origin = o()}, 100)}
        }
      }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0)
    }).call(this, n(57))
  }, function (e, t, n) {e.exports = n(32)("native-function-to-string", Function.toString)}, function (e, t, n) {
    var r = n(24), o = n(66), i = n(47);
    e.exports = function (e) {
      var t = r(e), n = o.f;
      if (n) for (var u, a = n(e), s = i.f, c = 0; a.length > c;) s.call(e, u = a[c++]) && t.push(u);
      return t
    }
  }, function (e, t, n) {
    var r = n(25);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {return "String" == r(e) ? e.split("") : Object(e)}
  }, function (e, t, n) {
    var r = n(34), o = Math.max, i = Math.min;
    e.exports = function (e, t) {return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)}
  }, function (e, t, n) {
    var r = n(25);
    e.exports = Array.isArray || function (e) {return "Array" == r(e)}
  }, function (e, t, n) {
    var r = n(5), o = n(3), i = n(24);
    e.exports = n(6) ? Object.defineProperties : function (e, t) {
      o(e);
      for (var n, u = i(t), a = u.length, s = 0; a > s;) r.f(e, n = u[s++], t[n]);
      return e
    }
  }, function (e, t, n) {
    var r = n(4).document;
    e.exports = r && r.documentElement
  }, function (e, t, n) {
    var r = n(20), o = n(35).f, i = {}.toString,
      u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function (e) {return u && "[object Window]" == i.call(e) ? function (e) {try {return o(e)} catch (e) {return u.slice()}}(e) : o(r(e))}
  }, function (e, t) {e.exports = Object.is || function (e, t) {return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t}}, function (e, t, n) {
    "use strict";
    var r = n(49);
    n(8)({target: "RegExp", proto: !0, forced: r !== /./.exec}, {exec: r})
  }, function (e, t, n) {
    var r = n(3), o = n(62), i = n(0)("species");
    e.exports = function (e, t) {
      var n, u = r(e).constructor;
      return void 0 === u || null == (n = r(u)[i]) ? t : o(n)
    }
  }, function (e, t) {e.exports = function (e, t) {return {value: t, done: !!e}}}, function (e, t, n) {
    "use strict";
    var r = n(48), o = n(23), i = n(44), u = {};
    n(15)(u, n(0)("iterator"), function () {return this}), e.exports = function (e, t, n) {e.prototype = r(u, {next: o(1, n)}), i(e, t + " Iterator")}
  }, function (e, t, n) {
    n(6) && "g" != /./g.flags && n(5).f(RegExp.prototype, "flags", {
      configurable: !0,
      get: n(39)
    })
  }, function (e, t, n) {
    "use strict";
    (function (e) {
      function t(e) {return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}

      n(16), n(17), n(40), n(9), n(27), n(42), n(52), n(29), n(30), function (e) {
        var n, r = e.URLSearchParams ? e.URLSearchParams : null, o = r && "a=1" === new r({a: 1}).toString(),
          i = r && "+" === new r("s=%2B").get("s"), u = "__URLSearchParams__",
          a = !r || ((n = new r).append("s", " &"), "s=+%26" === n.toString()), s = d.prototype,
          c = !(!e.Symbol || !e.Symbol.iterator);
        if (!(r && o && i && a)) {
          s.append = function (e, t) {y(this[u], e, t)}, s.delete = function (e) {delete this[u][e]}, s.get = function (e) {
            var t = this[u];
            return e in t ? t[e][0] : null
          }, s.getAll = function (e) {
            var t = this[u];
            return e in t ? t[e].slice(0) : []
          }, s.has = function (e) {return e in this[u]}, s.set = function (e, t) {this[u][e] = ["" + t]}, s.toString = function () {
            var e, t, n, r, o = this[u], i = [];
            for (t in o) for (n = p(t), e = 0, r = o[t]; e < r.length; e++) i.push(n + "=" + p(r[e]));
            return i.join("&")
          };
          var f = !!i && r && !o && e.Proxy;
          e.URLSearchParams = f ? new Proxy(r, {construct: function (e, t) {return new e(new d(t[0]).toString())}}) : d;
          var l = e.URLSearchParams.prototype;
          l.polyfill = !0, l.forEach = l.forEach || function (e, t) {
            var n = g(this.toString());
            Object.getOwnPropertyNames(n).forEach(function (r) {n[r].forEach(function (n) {e.call(t, n, r, this)}, this)}, this)
          }, l.sort = l.sort || function () {
            var e, t, n, r = g(this.toString()), o = [];
            for (e in r) o.push(e);
            for (o.sort(), t = 0; t < o.length; t++) this.delete(o[t]);
            for (t = 0; t < o.length; t++) {
              var i = o[t], u = r[i];
              for (n = 0; n < u.length; n++) this.append(i, u[n])
            }
          }, l.keys = l.keys || function () {
            var e = [];
            return this.forEach(function (t, n) {e.push(n)}), v(e)
          }, l.values = l.values || function () {
            var e = [];
            return this.forEach(function (t) {e.push(t)}), v(e)
          }, l.entries = l.entries || function () {
            var e = [];
            return this.forEach(function (t, n) {e.push([n, t])}), v(e)
          }, c && (l[e.Symbol.iterator] = l[e.Symbol.iterator] || l.entries)
        }

        function d(e) {((e = e || "") instanceof URLSearchParams || e instanceof d) && (e = e.toString()), this[u] = g(e)}

        function p(e) {
          var t = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0"};
          return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g, function (e) {return t[e]})
        }

        function h(e) {return decodeURIComponent(e.replace(/\+/g, " "))}

        function v(t) {
          var n = {
            next: function () {
              var e = t.shift();
              return {done: void 0 === e, value: e}
            }
          };
          return c && (n[e.Symbol.iterator] = function () {return n}), n
        }

        function g(e) {
          var n = {};
          if ("object" === t(e)) for (var r in e) e.hasOwnProperty(r) && y(n, r, e[r]); else {
            0 === e.indexOf("?") && (e = e.slice(1));
            for (var o = e.split("&"), i = 0; i < o.length; i++) {
              var u = o[i], a = u.indexOf("=");
              -1 < a ? y(n, h(u.slice(0, a)), h(u.slice(a + 1))) : u && y(n, h(u), "")
            }
          }
          return n
        }

        function y(e, t, n) {
          var r = "string" == typeof n ? n : null != n && "function" == typeof n.toString ? n.toString() : JSON.stringify(n);
          t in e ? e[t].push(r) : e[t] = [r]
        }
      }(void 0 !== e ? e : "undefined" != typeof window ? window : void 0)
    }).call(this, n(57))
  }, function (e, t, n) {
    var r = n(103);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = {hmr: !0, transform: void 0, insertInto: void 0};
    n(105)(r, o);
    r.locals && (e.exports = r.locals)
  }, function (e, t, n) {
    (e.exports = n(104)(!1)).push([e.i, ".x-hellosign-embedded {\n  height: 100%; }\n  .x-hellosign-embedded--in-modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 9997; }\n\n.x-hellosign-embedded__modal-screen {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-screen {\n      display: none; } }\n\n.x-hellosign-embedded__modal-content {\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  top: 5vh;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 90vh;\n  min-height: 400px;\n  width: 80vw;\n  min-width: 512px;\n  max-width: 1024px; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-content {\n      overflow: hidden;\n      box-shadow: none;\n      height: 100%;\n      min-height: 0;\n      width: 100%;\n      min-width: 0;\n      transform: none;\n      left: 0;\n      top: 0; } }\n\n.x-hellosign-embedded__modal-close {\n  position: absolute;\n  top: 0;\n  right: -60px;\n  height: 40px;\n  width: 40px; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-close {\n      display: none; } }\n\n.x-hellosign-embedded__modal-close-button {\n  -webkit-appearance: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  background-color: #1A1A1A;\n  transition: background-color 0.35s ease;\n  will-change: background-color;\n  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  padding: 20px; }\n  .x-hellosign-embedded__modal-close-button:hover {\n    background-color: #4E4E4E; }\n  .x-hellosign-embedded__modal-close-button::before, .x-hellosign-embedded__modal-close-button::after {\n    content: '';\n    position: absolute;\n    width: 1px;\n    background-color: white;\n    height: 20px;\n    top: 10px; }\n  .x-hellosign-embedded__modal-close-button::before {\n    transform: rotateZ(45deg); }\n  .x-hellosign-embedded__modal-close-button::after {\n    transform: rotateZ(-45deg); }\n\n.x-hellosign-embedded__iframe {\n  min-height: 400px;\n  background-color: #F7F8F9;\n  height: 100%;\n  border: none;\n  min-width: 100%;\n  width: 100px;\n  *width: 100%; }\n", ""])
  }, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var n = function (e, t) {
            var n = e[1] || "", r = e[3];
            if (!r) return n;
            if (t && "function" == typeof btoa) {
              var o = (u = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(u)))) + " */"),
                i = r.sources.map(function (e) {return "/*# sourceURL=" + r.sourceRoot + e + " */"});
              return [n].concat(i).concat([o]).join("\n")
            }
            var u;
            return [n].join("\n")
          }(t, e);
          return t[2] ? "@media " + t[2] + "{" + n + "}" : n
        }).join("")
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);
        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          null != i && (r[i] = !0)
        }
        for (o = 0; o < e.length; o++) {
          var u = e[o];
          null != u[0] && r[u[0]] || (n && !u[2] ? u[2] = n : n && (u[2] = "(" + u[2] + ") and (" + n + ")"), t.push(u))
        }
      }, t
    }
  }, function (e, t, n) {
    var r, o, i = {},
      u = (r = function () {return window && document && document.all && !window.atob}, function () {return void 0 === o && (o = r.apply(this, arguments)), o}),
      a = function (e) {
        var t = {};
        return function (e, n) {
          if ("function" == typeof e) return e();
          if (void 0 === t[e]) {
            var r = function (e, t) {return t ? t.querySelector(e) : document.querySelector(e)}.call(this, e, n);
            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {r = r.contentDocument.head} catch (e) {r = null}
            t[e] = r
          }
          return t[e]
        }
      }(), s = null, c = 0, f = [], l = n(106);

    function d(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n], o = i[r.id];
        if (o) {
          o.refs++;
          for (var u = 0; u < o.parts.length; u++) o.parts[u](r.parts[u]);
          for (; u < r.parts.length; u++) o.parts.push(m(r.parts[u], t))
        } else {
          var a = [];
          for (u = 0; u < r.parts.length; u++) a.push(m(r.parts[u], t));
          i[r.id] = {id: r.id, refs: 1, parts: a}
        }
      }
    }

    function p(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o], u = t.base ? i[0] + t.base : i[0], a = {css: i[1], media: i[2], sourceMap: i[3]};
        r[u] ? r[u].parts.push(a) : n.push(r[u] = {id: u, parts: [a]})
      }
      return n
    }

    function h(e, t) {
      var n = a(e.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = f[f.length - 1];
      if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), f.push(t); else if ("bottom" === e.insertAt) n.appendChild(t); else {
        if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var o = a(e.insertAt.before, n);
        n.insertBefore(t, o)
      }
    }

    function v(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = f.indexOf(e);
      t >= 0 && f.splice(t, 1)
    }

    function g(e) {
      var t = document.createElement("style");
      if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
        var r = function () {
          0;
          return n.nc
        }();
        r && (e.attrs.nonce = r)
      }
      return y(t, e.attrs), h(e, t), t
    }

    function y(e, t) {Object.keys(t).forEach(function (n) {e.setAttribute(n, t[n])})}

    function m(e, t) {
      var n, r, o, i;
      if (t.transform && e.css) {
        if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function () {};
        e.css = i
      }
      if (t.singleton) {
        var u = c++;
        n = s || (s = g(t)), r = E.bind(null, n, u, !1), o = E.bind(null, n, u, !0)
      } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
        var t = document.createElement("link");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", y(t, e.attrs), h(e, t), t
      }(t), r = function (e, t, n) {
        var r = n.css, o = n.sourceMap, i = void 0 === t.convertToAbsoluteUrls && o;
        (t.convertToAbsoluteUrls || i) && (r = l(r));
        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var u = new Blob([r], {type: "text/css"}), a = e.href;
        e.href = URL.createObjectURL(u), a && URL.revokeObjectURL(a)
      }.bind(null, n, t), o = function () {v(n), n.href && URL.revokeObjectURL(n.href)}) : (n = g(t), r = function (e, t) {
        var n = t.css, r = t.media;
        r && e.setAttribute("media", r);
        if (e.styleSheet) e.styleSheet.cssText = n; else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n))
        }
      }.bind(null, n), o = function () {v(n)});
      return r(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          r(e = t)
        } else o()
      }
    }

    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = u()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
      var n = p(e, t);
      return d(n, t), function (e) {
        for (var r = [], o = 0; o < n.length; o++) {
          var u = n[o];
          (a = i[u.id]).refs--, r.push(a)
        }
        e && d(p(e, t), t);
        for (o = 0; o < r.length; o++) {
          var a;
          if (0 === (a = r[o]).refs) {
            for (var s = 0; s < a.parts.length; s++) a.parts[s]();
            delete i[a.id]
          }
        }
      }
    };
    var b, _ = (b = [], function (e, t) {return b[e] = t, b.filter(Boolean).join("\n")});

    function E(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = _(t, o); else {
        var i = document.createTextNode(o), u = e.childNodes;
        u[t] && e.removeChild(u[t]), u.length ? e.insertBefore(i, u[t]) : e.appendChild(i)
      }
    }
  }, function (e, t, n) {
    "use strict";
    n(9), e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
        var o,
          i = t.trim().replace(/^"(.*)"$/, function (e, t) {return t}).replace(/^'(.*)'$/, function (e, t) {return t});
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
      })
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(73), n(42), n(27), n(75), n(16), n(17), n(108), n(109), n(9), n(29), n(30), n(67), n(77), n(78);
    var r = s(n(112)), o = n(113), i = s(n(162)), u = s(n(167)), a = s(n(168));

    function s(e) {return e && e.__esModule ? e : {default: e}}

    function c() {
      var e = p(['\n            <iframe class="', '" name="', '" src="', '" scrolling="no"></iframe>\n          </div>\n        </div>\n      ']);
      return c = function () {return e}, e
    }

    function f() {
      var e = p(["\n          <div class=", ">\n            <button class=", ' role="button" title="Close signature request"></button>\n          </div>\n        ']);
      return f = function () {return e}, e
    }

    function l() {
      var e = p(['\n        <div class="', " ", '">\n          <div class="', '"></div>\n          <div class="', '">\n      ']);
      return l = function () {return e}, e
    }

    function d() {
      var e = p(['\n        <div class="', '">\n          <iframe class="', '" name="', '" src="', '" scrolling="no"></iframe>\n        </div>\n      ']);
      return d = function () {return e}, e
    }

    function p(e, t) {return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))}

    function h(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {return Object.getOwnPropertyDescriptor(n, e).enumerable}))), r.forEach(function (t) {E(e, t, n[t])})
      }
      return e
    }

    function v(e) {return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}

    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    function y(e, t, n) {
      return (y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var r = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = m(e));) ;
          return e
        }(e, t);
        if (r) {
          var o = Object.getOwnPropertyDescriptor(r, t);
          return o.get ? o.get.call(n) : o.value
        }
      })(e, t, n || e)
    }

    function m(e) {return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {return e.__proto__ || Object.getPrototypeOf(e)})(e)}

    function b(e, t) {return (b = Object.setPrototypeOf || function (e, t) {return e.__proto__ = t, e})(e, t)}

    function _(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    function E(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    var S = function (e) {
      function t() {
        var e, n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, t), n = this, e = !(r = m(t).call(this)) || "object" !== v(r) && "function" != typeof r ? _(n) : r, E(_(_(e)), "_baseConfig", null), E(_(_(e)), "_baseEl", null), E(_(_(e)), "_config", null), E(_(_(e)), "_iFrameURL", null), E(_(_(e)), "_iFrameEl", null), E(_(_(e)), "_initTimeout", null), E(_(_(e)), "_isOpen", !1), E(_(_(e)), "_isReady", !1), E(_(_(e)), "_isSentOrSigned", !1), E(_(_(e)), "_onEmbeddedClick", e._onEmbeddedClick.bind(_(_(e)))), E(_(_(e)), "_onInitTimeout", e._onInitTimeout.bind(_(_(e)))), E(_(_(e)), "_onBeforeUnload", e._onBeforeUnload.bind(_(_(e)))), E(_(_(e)), "_onMessage", e._onMessage.bind(_(_(e)))), i.default.info("created new HelloSign instance with options", o), !o || "object" !== v(o)) throw new TypeError("Configuration must be an object");
        return e._baseConfig = h({}, o), e
      }

      var n, s, p;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && b(e, t)
      }(t, r.default), n = t, (s = [{
        key: "_applyClientId", value: function (e) {
          var t = this._config.clientId;
          if (!t) throw new TypeError('"clientId" is required');
          if ("string" != typeof t) throw new TypeError('"clientId" must be a string');
          e.append("client_id", t)
        }
      }, {
        key: "_applyDebug", value: function (e) {
          var t = this._config.debug;
          if ("boolean" != typeof t) throw new TypeError('"debug" must be a boolean');
          e.append("debug", t ? 1 : 0)
        }
      }, {
        key: "_applyFinalButtonText",
        value: function (e) {
          if ("finalButtonText" in this._config) {
            var t = this._config.finalButtonText;
            if ("string" != typeof t) throw new TypeError('"finalButtonText" must be a string');
            if (!["Save", "Send", "Continue"].includes(t)) throw new TypeError('"finalButtonText" must be one of "Save", "Send", or "Continue"');
            e.append("final_button_text", t)
          }
        }
      }, {
        key: "_applyHideHeader",
        value: function (e) {
          if ("hideHeader" in this._config) {
            var t = this._config.hideHeader;
            if ("boolean" != typeof t) throw new TypeError('"hideHeader" must be a boolean');
            e.append("hide_header", t)
          }
        }
      }, {
        key: "_applyLocale", value: function (e) {
          var t = this._config.locale;
          t && t.length && e.append("user_culture", t)
        }
      }, {
        key: "_applyParentURL",
        value: function (e) {e.append("parent_url", document.location.href)}
      }, {
        key: "_applyRedirectTo",
        value: function (e) {
          if ("redirectTo" in this._config) {
            var t = this._config.redirectTo;
            if ("string" != typeof t) throw new TypeError('"redirectTo" must be a string');
            e.append("redirect_url", t)
          }
        }
      }, {
        key: "_applyRequestingEmail",
        value: function (e) {
          if ("requestingEmail" in this._config) {
            var t = this._config.requestingEmail;
            if ("string" != typeof t) throw new TypeError('"requestingEmail" must be a string');
            e.append("requester", t)
          }
        }
      }, {
        key: "_applyTestMode",
        value: function (e) {
          var t = this._config.skipDomainVerification || this._config.testMode;
          if ("boolean" != typeof t) throw new TypeError('"testMode" must be a boolean');
          e.append("skip_domain_verification", t ? 1 : 0)
        }
      }, {
        key: "_applyWhiteLabeling",
        value: function (e) {
          if ("whiteLabeling" in this._config) {
            var t = this._config.whiteLabeling;
            if ("object" !== v(t)) throw new TypeError('"whiteLabeling" must be an object');
            e.append("white_labeling_options", JSON.stringify(t))
          }
        }
      }, {key: "_applyUxVersion", value: function (e) {e.append("ux_version", "2")}}, {
        key: "_applyVersion",
        value: function (e) {e.append("js_version", "2.10.0")}
      }, {
        key: "_getFrameParams", value: function (e) {
          var t = new URLSearchParams(e.search);
          return this._applyClientId(t), this._applyDebug(t), this._applyFinalButtonText(t), this._applyHideHeader(t), this._applyLocale(t), this._applyParentURL(t), this._applyRedirectTo(t), this._applyRequestingEmail(t), this._applyTestMode(t), this._applyUxVersion(t), this._applyVersion(t), this._applyWhiteLabeling(t), t
        }
      }, {
        key: "_updateFrameUrl", value: function (e) {
          var t = new URL(e), n = this._getFrameParams(t);
          t.search = n.toString(), this._iFrameURL = t
        }
      }, {
        key: "_renderMarkup", value: function () {
          var e = document.createElement("div");
          return this._config.container ? e.innerHTML = (0, o.safeHtml)(d(), a.default.classNames.BASE, a.default.classNames.IFRAME, a.default.iframe.NAME, this._iFrameURL.href) : e.innerHTML = (0, o.safeHtml)(l(), a.default.classNames.BASE, a.default.classNames.BASE_IN_MODAL, a.default.classNames.MODAL_SCREEN, a.default.classNames.MODAL_CONTENT) + (this._config.allowCancel ? (0, o.safeHtml)(f(), a.default.classNames.MODAL_CLOSE, a.default.classNames.MODAL_CLOSE_BTN) : "") + (0, o.safeHtml)(c(), a.default.classNames.IFRAME, a.default.iframe.NAME, this._iFrameURL.href), e.firstChild
        }
      }, {
        key: "_appendMarkup",
        value: function () {this._baseEl = this._renderMarkup(), this._baseEl.addEventListener("click", this._onEmbeddedClick), this._iFrameEl = this._baseEl.getElementsByClassName(a.default.classNames.IFRAME).item(0), this._config.container ? this._config.container.appendChild(this._baseEl) : document.body.appendChild(this._baseEl)}
      }, {
        key: "_clearMarkup",
        value: function () {this._baseEl.parentElement.removeChild(this._baseEl)}
      }, {
        key: "_sendMessage", value: function (e) {
          i.default.info("posting message", e);
          var t = this._iFrameURL.href;
          this._iFrameEl.contentWindow.postMessage(e, t)
        }
      }, {
        key: "_sendCancelRequestMessage",
        value: function () {i.default.info("sending cancel request message"), this._sendMessage({type: a.default.messages.USER_CANCEL_REQUEST})}
      }, {
        key: "_sendConfigurationMessage",
        value: function () {
          i.default.info("sending app configuration message"), this._sendMessage({
            type: a.default.messages.APP_CONFIGURE,
            payload: {allowCancel: this._config.allowCancel}
          })
        }
      }, {
        key: "_sendDomainVerificationMessage",
        value: function (e) {
          i.default.info("sending domain verification message", e), this._sendMessage({
            type: a.default.messages.APP_VERIFY_DOMAIN_RESPONSE,
            payload: {token: e}
          })
        }
      }, {
        key: "_sendInitializationErrorMessage",
        value: function () {
          i.default.info("sending initialization error message"), this._sendMessage({
            type: a.default.messages.APP_ERROR,
            payload: {message: "App failed to initialize before timeout"}
          })
        }
      }, {
        key: "_clearInitTimeout",
        value: function () {this._initTimeout && (i.default.info("clearing initialization timeout"), clearTimeout(this._initTimeout), this._initTimeout = null)}
      }, {
        key: "_startInitTimeout",
        value: function () {i.default.info("starting initialization timeout"), this._clearInitTimeout(), this._initTimeout = setTimeout(this._onInitTimeout, this._config.timeout)}
      }, {
        key: "_maybeStartInitTimeout",
        value: function () {this._iFrameURL.href.includes("embeddedSign") && this._startInitTimeout()}
      }, {
        key: "_appDidError",
        value: function (e) {i.default.error("app encountered an error with code:", e.code), this.emit(a.default.events.ERROR, e)}
      }, {
        key: "_appDidInitialize",
        value: function (e) {i.default.info("app was initialized"), this._isReady = !0, this._sendConfigurationMessage(), this._clearInitTimeout(), window.addEventListener("beforeunload", this._onBeforeUnload), this.emit(a.default.events.READY, e)}
      }, {
        key: "_appDidRequestDomainVerification", value: function (e) {
          var t = e.token;
          i.default.info("app requested domain verification", t), this._sendDomainVerificationMessage(t)
        }
      }, {
        key: "_appDidSendMessage", value: function (e) {
          var t = e.data, n = e.origin;
          i.default.info("received message", t, n), this.emit(a.default.events.MESSAGE, t), this._delegateMessage(t)
        }
      }, {
        key: "_userDidCancelRequest",
        value: function () {i.default.info("user canceled the signature request"), this.emit(a.default.events.CANCEL), this.close()}
      }, {
        key: "_userDidCreateTemplate",
        value: function (e) {i.default.info("user created the signature request template"), this.emit(a.default.events.CREATE_TEMPLATE, e)}
      }, {
        key: "_userDidDeclineRequest",
        value: function (e) {i.default.info("user declined the signature request"), this.emit(a.default.events.DECLINE, e)}
      }, {
        key: "_userDidFinishRequest",
        value: function () {i.default.info("user finished the signature request"), this.emit(a.default.events.FINISH), this.close()}
      }, {
        key: "_userDidReassignRequest",
        value: function (e) {i.default.info("user reassigned the signature request with reason:", e.reason), this.emit(a.default.events.REASSIGN, e)}
      }, {
        key: "_userDidSendRequest",
        value: function (e) {i.default.info("user sent the signature request"), this._isSentOrSigned = !0, window.removeEventListener("beforeunload", this._onBeforeUnload), this.emit(a.default.events.SEND, e)}
      }, {
        key: "_userDidSignRequest",
        value: function (e) {i.default.info("user signed the signature request"), this._isSentOrSigned = !0, window.removeEventListener("beforeunload", this._onBeforeUnload), this.emit(a.default.events.SIGN, e)}
      }, {
        key: "_onEmbeddedClick",
        value: function (e) {e.target.classList.contains(a.default.classNames.MODAL_CLOSE_BTN) && (e.preventDefault(), this._isReady && !this._isSentOrSigned ? this._sendCancelRequestMessage() : this.close())}
      }, {
        key: "_onInitTimeout",
        value: function () {i.default.error("app failed to initialize before timeout"), alert("Something went wrong when preparing your signature request. Please try again."), this._sendInitializationErrorMessage(), this._clearInitTimeout(), this.close()}
      }, {
        key: "_onBeforeUnload",
        value: function (e) {this._isReady && (confirm("Are you sure you want to close this signature request? You will lose your changes.") || (e.preventDefault(), e.returnValue = ""))}
      }, {
        key: "_onMessage",
        value: function (e) {e.origin.replace(/\/$/, "") === this._iFrameURL.origin && "object" === v(e.data) && this._appDidSendMessage(e)}
      }, {
        key: "_delegateMessage", value: function (e) {
          var t = e.type, n = e.payload;
          switch (t) {
            case a.default.messages.APP_ERROR:
              this._appDidError(n);
              break;
            case a.default.messages.APP_INITIALIZE:
              this._appDidInitialize(n);
              break;
            case a.default.messages.APP_VERIFY_DOMAIN_REQUEST:
              this._appDidRequestDomainVerification(n);
              break;
            case a.default.messages.USER_CANCEL_REQUEST:
              this._userDidCancelRequest();
              break;
            case a.default.messages.USER_CREATE_TEMPLATE:
              this._userDidCreateTemplate(n);
              break;
            case a.default.messages.USER_DECLINE_REQUEST:
              this._userDidDeclineRequest(n);
              break;
            case a.default.messages.USER_FINISH_REQUEST:
              this._userDidFinishRequest();
              break;
            case a.default.messages.USER_REASSIGN_REQUEST:
              this._userDidReassignRequest(n);
              break;
            case a.default.messages.USER_SEND_REQUEST:
              this._userDidSendRequest(n);
              break;
            case a.default.messages.USER_SIGN_REQUEST:
              this._userDidSignRequest(n);
              break;
            default:
              i.default.warn("unhandled cross-origin window message", t)
          }
        }
      }, {
        key: "open", value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (i.default.info("open()", e, t), this._isOpen && this.close(), this._config = h({}, u.default, this._baseConfig, t), this._config.container && !(this._config.container instanceof HTMLElement)) throw new TypeError('"container" must be an element');
          this._updateFrameUrl(e), this._appendMarkup(), this._maybeStartInitTimeout(), this._isOpen = !0, window.addEventListener("message", this._onMessage), this.emit(a.default.events.OPEN, {url: this._iFrameURL.href})
        }
      }, {
        key: "close",
        value: function () {i.default.info("close()"), this._isOpen && (this._clearInitTimeout(), this._clearMarkup(), this._baseEl.removeEventListener("click", this._onEmbeddedClick), this._config = null, this._baseEl = null, this._iFrameEl = null, this._iFrameURL = null, this._isOpen = !1, this._isReady = !1, this._isSentOrSigned = !1, window.removeEventListener("message", this._onMessage), window.removeEventListener("beforeunload", this._onBeforeUnload), this.emit(a.default.events.CLOSE))}
      }, {
        key: "emit",
        value: function () {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          i.default.info.apply(i.default, ["emit()"].concat(r)), (e = y(m(t.prototype), "emit", this)).call.apply(e, [this].concat(r))
        }
      }, {key: "element", get: function () {return this._baseEl}}, {
        key: "iFrame",
        get: function () {return this._iFrameEl}
      }, {key: "isOpen", get: function () {return this._isOpen}}, {
        key: "isReady",
        get: function () {return this._isReady}
      }]) && g(n.prototype, s), p && g(n, p), t
    }();
    E(S, "classNames", a.default.classNames), E(S, "events", a.default.events), E(S, "locales", a.default.locales), E(S, "messages", a.default.messages), E(S, "version", "2.10.0");
    var w = S;
    t.default = w
  }, function (e, t, n) {
    var r = n(36), o = n(72), i = n(12), u = n(8), a = n(11), s = n(3);
    u(u.S, "Reflect", {
      get: function e(t, n) {
        var u, c, f = arguments.length < 3 ? t : arguments[2];
        return s(t) === f ? t[n] : (u = r.f(t, n)) ? i(u, "value") ? u.value : void 0 !== u.get ? u.get.call(f) : void 0 : a(c = o(t)) ? e(c, n, f) : void 0
      }
    })
  }, function (e, t, n) {
    var r = n(8);
    r(r.S, "Object", {setPrototypeOf: n(76).set})
  }, function (e, t, n) {
    var r = n(50), o = n(21);
    e.exports = function (e, t, n) {
      if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
      return String(o(e))
    }
  }, function (e, t, n) {
    var r = n(0)("match");
    e.exports = function (e) {
      var t = /./;
      try {"/./"[e](t)} catch (n) {try {return t[r] = !1, !"/./"[e](t)} catch (e) {}}
      return !0
    }
  }, function (e, t, n) {
    "use strict";

    function r() {}

    n(52), r.prototype = {
      on: function (e, t, n) {
        var r = this.e || (this.e = {});
        return (r[e] || (r[e] = [])).push({fn: t, ctx: n}), this
      },
      once: function (e, t, n) {
        var r = this;

        function o() {r.off(e, o), t.apply(n, arguments)}

        return o._ = t, this.on(e, o, n)
      },
      emit: function (e) {
        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, t);
        return this
      },
      off: function (e, t) {
        var n = this.e || (this.e = {}), r = n[e], o = [];
        if (r && t) for (var i = 0, u = r.length; i < u; i++) r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
        return o.length ? n[e] = o : delete n[e], this
      }
    }, e.exports = r, e.exports.TinyEmitter = r
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "TemplateTag", {
      enumerable: !0,
      get: function () {return r.default}
    }), Object.defineProperty(t, "trimResultTransformer", {
      enumerable: !0,
      get: function () {return o.default}
    }), Object.defineProperty(t, "stripIndentTransformer", {
      enumerable: !0,
      get: function () {return i.default}
    }), Object.defineProperty(t, "replaceResultTransformer", {
      enumerable: !0,
      get: function () {return u.default}
    }), Object.defineProperty(t, "replaceSubstitutionTransformer", {
      enumerable: !0,
      get: function () {return a.default}
    }), Object.defineProperty(t, "replaceStringTransformer", {
      enumerable: !0,
      get: function () {return s.default}
    }), Object.defineProperty(t, "inlineArrayTransformer", {
      enumerable: !0,
      get: function () {return c.default}
    }), Object.defineProperty(t, "splitStringTransformer", {
      enumerable: !0,
      get: function () {return f.default}
    }), Object.defineProperty(t, "removeNonPrintingValuesTransformer", {
      enumerable: !0,
      get: function () {return l.default}
    }), Object.defineProperty(t, "commaLists", {
      enumerable: !0,
      get: function () {return d.default}
    }), Object.defineProperty(t, "commaListsAnd", {
      enumerable: !0,
      get: function () {return p.default}
    }), Object.defineProperty(t, "commaListsOr", {
      enumerable: !0,
      get: function () {return h.default}
    }), Object.defineProperty(t, "html", {
      enumerable: !0,
      get: function () {return v.default}
    }), Object.defineProperty(t, "codeBlock", {
      enumerable: !0,
      get: function () {return g.default}
    }), Object.defineProperty(t, "source", {
      enumerable: !0,
      get: function () {return y.default}
    }), Object.defineProperty(t, "safeHtml", {
      enumerable: !0,
      get: function () {return m.default}
    }), Object.defineProperty(t, "oneLine", {
      enumerable: !0,
      get: function () {return b.default}
    }), Object.defineProperty(t, "oneLineTrim", {
      enumerable: !0,
      get: function () {return _.default}
    }), Object.defineProperty(t, "oneLineCommaLists", {
      enumerable: !0,
      get: function () {return E.default}
    }), Object.defineProperty(t, "oneLineCommaListsOr", {
      enumerable: !0,
      get: function () {return S.default}
    }), Object.defineProperty(t, "oneLineCommaListsAnd", {
      enumerable: !0,
      get: function () {return w.default}
    }), Object.defineProperty(t, "inlineLists", {
      enumerable: !0,
      get: function () {return O.default}
    }), Object.defineProperty(t, "oneLineInlineLists", {
      enumerable: !0,
      get: function () {return x.default}
    }), Object.defineProperty(t, "stripIndent", {
      enumerable: !0,
      get: function () {return j.default}
    }), Object.defineProperty(t, "stripIndents", {enumerable: !0, get: function () {return C.default}});
    var r = P(n(1)), o = P(n(2)), i = P(n(14)), u = P(n(18)), a = P(n(82)), s = P(n(125)), c = P(n(10)), f = P(n(55)),
      l = P(n(83)), d = P(n(133)), p = P(n(135)), h = P(n(137)), v = P(n(56)), g = P(n(140)), y = P(n(141)),
      m = P(n(142)), b = P(n(144)), _ = P(n(146)), E = P(n(148)), S = P(n(150)), w = P(n(152)), O = P(n(154)),
      x = P(n(156)), j = P(n(158)), C = P(n(160));

    function P(e) {return e && e.__esModule ? e : {default: e}}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(73);
    var r, o, i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (t, n, r) {return n && e(t.prototype, n), r && e(t, r), t}
    }(), u = (r = ["", ""], o = ["", ""], Object.freeze(Object.defineProperties(r, {raw: {value: Object.freeze(o)}})));
    var a = function () {
      function e() {
        for (var t = this, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, e), this.tag = function (e) {
          for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
          return "function" == typeof e ? t.interimTag.bind(t, e) : "string" == typeof e ? t.transformEndResult(e) : (e = e.map(t.transformString.bind(t)), t.transformEndResult(e.reduce(t.processSubstitutions.bind(t, r))))
        }, r.length > 0 && Array.isArray(r[0]) && (r = r[0]), this.transformers = r.map(function (e) {return "function" == typeof e ? e() : e}), this.tag
      }

      return i(e, [{
        key: "interimTag",
        value: function (e, t) {
          for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
          return this.tag(u, e.apply(void 0, [t].concat(r)))
        }
      }, {
        key: "processSubstitutions", value: function (e, t, n) {
          var r = this.transformSubstitution(e.shift(), t);
          return "".concat(t, r, n)
        }
      }, {
        key: "transformString",
        value: function (e) {return this.transformers.reduce(function (e, t) {return t.onString ? t.onString(e) : e}, e)}
      }, {
        key: "transformSubstitution",
        value: function (e, t) {return this.transformers.reduce(function (e, n) {return n.onSubstitution ? n.onSubstitution(e, t) : e}, e)}
      }, {
        key: "transformEndResult",
        value: function (e) {return this.transformers.reduce(function (e, t) {return t.onEndResult ? t.onEndResult(e) : e}, e)}
      }]), e
    }();
    t.default = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(9);
    var r = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return {
        onEndResult: function (t) {
          if ("" === e) return t.trim();
          if ("start" === (e = e.toLowerCase()) || "left" === e) return t.replace(/^\s*/, "");
          if ("end" === e || "right" === e) return t.replace(/\s*$/, "");
          throw new Error("Side not supported: " + e)
        }
      }
    };
    t.default = r
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(9), n(53), n(54), n(80), n(81);
    var r = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "initial";
      return {
        onEndResult: function (t) {
          if ("initial" === e) {
            var n = t.match(/^[^\S\n]*(?=\S)/gm), r = n && Math.min.apply(Math, function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
              }
              return Array.from(e)
            }(n.map(function (e) {return e.length})));
            if (r) {
              var o = new RegExp("^.{" + r + "}", "gm");
              return t.replace(o, "")
            }
            return t
          }
          if ("all" === e) return t.replace(/^[^\S\n]+/gm, "");
          throw new Error("Unknown type: " + e)
        }
      }
    };
    t.default = r
  }, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(5), i = n(6), u = n(0)("species");
    e.exports = function (e) {
      var t = r[e];
      i && t && !t[u] && o.f(t, u, {configurable: !0, get: function () {return this}})
    }
  }, function (e, t, n) {
    var r = n(3);
    e.exports = function (e, t, n, o) {
      try {return o ? t(r(n)[0], n[1]) : t(n)} catch (t) {
        var i = e.return;
        throw void 0 !== i && r(i.call(e)), t
      }
    }
  }, function (e, t, n) {
    var r = n(28), o = n(0)("iterator"), i = Array.prototype;
    e.exports = function (e) {return void 0 !== e && (r.Array === e || i[o] === e)}
  }, function (e, t, n) {
    "use strict";
    var r = n(5), o = n(23);
    e.exports = function (e, t, n) {t in e ? r.f(e, t, o(0, n)) : e[t] = n}
  }, function (e, t, n) {
    var r = n(68), o = n(0)("iterator"), i = n(28);
    e.exports = n(19).getIteratorMethod = function (e) {if (null != e) return e[o] || e["@@iterator"] || i[r(e)]}
  }, function (e, t, n) {
    var r = n(0)("iterator"), o = !1;
    try {
      var i = [7][r]();
      i.return = function () {o = !0}, Array.from(i, function () {throw 2})
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !o) return !1;
      var n = !1;
      try {
        var i = [7], u = i[r]();
        u.next = function () {return {done: n = !0}}, i[r] = function () {return u}, e(i)
      } catch (e) {}
      return n
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(9);
    var r = function (e, t) {
      return {
        onEndResult: function (n) {
          if (null == e || null == t) throw new Error("replaceResultTransformer requires at least 2 arguments.");
          return n.replace(e, t)
        }
      }
    };
    t.default = r
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(29), n(30), n(9);
    var r = function (e, t) {
      return {
        onSubstitution: function (n, r) {
          if (null == e || null == t) throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");
          return null == n ? n : n.toString().replace(e, t)
        }
      }
    };
    t.default = r
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(126)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(9);
    var r = function (e, t) {
      return {
        onString: function (n) {
          if (null == e || null == t) throw new Error("replaceStringTransformer requires at least 2 arguments.");
          return n.replace(e, t)
        }
      }
    };
    t.default = r
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(54);
    var r = {separator: "", conjunction: "", serial: !1}, o = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
      return {
        onSubstitution: function (t, n) {
          if (Array.isArray(t)) {
            var r = t.length, o = e.separator, i = e.conjunction, u = e.serial, a = n.match(/(\n?[^\S\n]+)$/);
            if (t = a ? t.join(o + a[1]) : t.join(o + " "), i && r > 1) {
              var s = t.lastIndexOf(o);
              t = t.slice(0, s) + (u ? o : "") + " " + i + t.slice(s + 1)
            }
          }
          return t
        }
      }
    };
    t.default = o
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(40), n(77), n(78);
    var r = function (e) {
      return {
        onSubstitution: function (t, n) {
          if (null == e || "string" != typeof e) throw new Error("You need to specify a string character to split by.");
          return "string" == typeof t && t.includes(e) && (t = t.split(e)), t
        }
      }
    };
    t.default = r
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, n(84), n(132);
    var r = function (e) {return null != e && !Number.isNaN(e) && "boolean" != typeof e},
      o = function () {return {onSubstitution: function (e) {return Array.isArray(e) ? e.filter(r) : r(e) ? e : ""}}};
    t.default = o
  }, function (e, t, n) {
    var r = n(8), o = n(21), i = n(7), u = n(131), a = "[" + u + "]", s = RegExp("^" + a + a + "*"),
      c = RegExp(a + a + "*$"), f = function (e, t, n) {
        var o = {}, a = i(function () {return !!u[e]() || "â€‹Â…" != "â€‹Â…"[e]()}), s = o[e] = a ? t(l) : u[e];
        n && (o[n] = s), r(r.P + r.F * a, "String", o)
      },
      l = f.trim = function (e, t) {return e = String(o(e)), 1 & t && (e = e.replace(s, "")), 2 & t && (e = e.replace(c, "")), e};
    e.exports = f
  }, function (e, t) {e.exports = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff"}, function (e, t, n) {
    var r = n(8);
    r(r.S, "Number", {isNaN: function (e) {return e != e}})
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(134)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = a(n(1)), o = a(n(14)), i = a(n(10)), u = a(n(2));

    function a(e) {return e && e.__esModule ? e : {default: e}}

    var s = new r.default((0, i.default)({separator: ","}), o.default, u.default);
    t.default = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(136)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = a(n(1)), o = a(n(14)), i = a(n(10)), u = a(n(2));

    function a(e) {return e && e.__esModule ? e : {default: e}}

    var s = new r.default((0, i.default)({separator: ",", conjunction: "and"}), o.default, u.default);
    t.default = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(138)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = a(n(1)), o = a(n(14)), i = a(n(10)), u = a(n(2));

    function a(e) {return e && e.__esModule ? e : {default: e}}

    var s = new r.default((0, i.default)({separator: ",", conjunction: "or"}), o.default, u.default);
    t.default = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = c(n(1)), o = c(n(14)), i = c(n(10)), u = c(n(2)), a = c(n(55)), s = c(n(83));

    function c(e) {return e && e.__esModule ? e : {default: e}}

    var f = new r.default((0, a.default)("\n"), s.default, i.default, o.default, u.default);
    t.default = f
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(56)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(56)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(143)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = c(n(1)), o = c(n(14)), i = c(n(10)), u = c(n(2)), a = c(n(55)), s = c(n(82));

    function c(e) {return e && e.__esModule ? e : {default: e}}

    var f = new r.default((0, a.default)("\n"), i.default, o.default, u.default, (0, s.default)(/&/g, "&amp;"), (0, s.default)(/</g, "&lt;"), (0, s.default)(/>/g, "&gt;"), (0, s.default)(/"/g, "&quot;"), (0, s.default)(/'/g, "&#x27;"), (0, s.default)(/`/g, "&#x60;"));
    t.default = f
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(145)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = u(n(1)), o = u(n(2)), i = u(n(18));

    function u(e) {return e && e.__esModule ? e : {default: e}}

    var a = new r.default((0, i.default)(/(?:\n(?:\s*))+/g, " "), o.default);
    t.default = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(147)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = u(n(1)), o = u(n(2)), i = u(n(18));

    function u(e) {return e && e.__esModule ? e : {default: e}}

    var a = new r.default((0, i.default)(/(?:\n\s*)/g, ""), o.default);
    t.default = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(149)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = a(n(1)), o = a(n(10)), i = a(n(2)), u = a(n(18));

    function a(e) {return e && e.__esModule ? e : {default: e}}

    var s = new r.default((0, o.default)({separator: ","}), (0, u.default)(/(?:\s+)/g, " "), i.default);
    t.default = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(151)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = a(n(1)), o = a(n(10)), i = a(n(2)), u = a(n(18));

    function a(e) {return e && e.__esModule ? e : {default: e}}

    var s = new r.default((0, o.default)({
      separator: ",",
      conjunction: "or"
    }), (0, u.default)(/(?:\s+)/g, " "), i.default);
    t.default = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(153)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = a(n(1)), o = a(n(10)), i = a(n(2)), u = a(n(18));

    function a(e) {return e && e.__esModule ? e : {default: e}}

    var s = new r.default((0, o.default)({
      separator: ",",
      conjunction: "and"
    }), (0, u.default)(/(?:\s+)/g, " "), i.default);
    t.default = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(155)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = a(n(1)), o = a(n(14)), i = a(n(10)), u = a(n(2));

    function a(e) {return e && e.__esModule ? e : {default: e}}

    var s = new r.default(i.default, o.default, u.default);
    t.default = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(157)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = a(n(1)), o = a(n(10)), i = a(n(2)), u = a(n(18));

    function a(e) {return e && e.__esModule ? e : {default: e}}

    var s = new r.default(o.default, (0, u.default)(/(?:\s+)/g, " "), i.default);
    t.default = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(159)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = u(n(1)), o = u(n(14)), i = u(n(2));

    function u(e) {return e && e.__esModule ? e : {default: e}}

    var a = new r.default(o.default, i.default);
    t.default = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function () {return o.default}
    });
    var r, o = (r = n(161)) && r.__esModule ? r : {default: r}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = u(n(1)), o = u(n(14)), i = u(n(2));

    function u(e) {return e && e.__esModule ? e : {default: e}}

    var a = new r.default((0, o.default)("all"), i.default);
    t.default = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r, o = (r = n(163)) && r.__esModule ? r : {default: r};
    var i = (0, o.default)("".concat("hellosign-embedded", ":info")),
      u = (0, o.default)("".concat("hellosign-embedded", ":warn")),
      a = (0, o.default)("".concat("hellosign-embedded", ":error"));
    i.log = console.log.bind(console), u.log = console.warn.bind(console);
    var s = {info: i, warn: u, error: a};
    t.default = s
  }, function (e, t, n) {
    "use strict";
    (function (r) {
      function o(e) {return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}

      n(16), n(17), n(9), n(53), n(54), t.log = function () {
        var e;
        return "object" === ("undefined" == typeof console ? "undefined" : o(console)) && console.log && (e = console).log.apply(e, arguments)
      }, t.formatArgs = function (t) {
        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        var n = "color: " + this.color;
        t.splice(1, 0, n, "color: inherit");
        var r = 0, o = 0;
        t[0].replace(/%[a-zA-Z%]/g, function (e) {"%%" !== e && (r++, "%c" === e && (o = r))}), t.splice(o, 0, n)
      }, t.save = function (e) {try {e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")} catch (e) {}}, t.load = function () {
        var e;
        try {e = t.storage.getItem("debug")} catch (e) {}
        !e && void 0 !== r && "env" in r && (e = r.env.DEBUG);
        return e
      }, t.useColors = function () {
        if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
      }, t.storage = function () {try {return localStorage} catch (e) {}}(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = n(165)(t), e.exports.formatters.j = function (e) {try {return JSON.stringify(e)} catch (e) {return "[UnexpectedJSONParseError]: " + e.message}}
    }).call(this, n(164))
  }, function (e, t, n) {
    "use strict";
    var r, o, i = e.exports = {};

    function u() {throw new Error("setTimeout has not been defined")}

    function a() {throw new Error("clearTimeout has not been defined")}

    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === u || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
      try {return r(e, 0)} catch (t) {try {return r.call(null, e, 0)} catch (t) {return r.call(this, e, 0)}}
    }

    !function () {
      try {r = "function" == typeof setTimeout ? setTimeout : u} catch (e) {r = u}
      try {o = "function" == typeof clearTimeout ? clearTimeout : a} catch (e) {o = a}
    }();
    var c, f = [], l = !1, d = -1;

    function p() {l && c && (l = !1, c.length ? f = c.concat(f) : d = -1, f.length && h())}

    function h() {
      if (!l) {
        var e = s(p);
        l = !0;
        for (var t = f.length; t;) {
          for (c = f, f = []; ++d < t;) c && c[d].run();
          d = -1, t = f.length
        }
        c = null, l = !1, function (e) {
          if (o === clearTimeout) return clearTimeout(e);
          if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
          try {o(e)} catch (t) {try {return o.call(null, e)} catch (t) {return o.call(this, e)}}
        }(e)
      }
    }

    function v(e, t) {this.fun = e, this.array = t}

    function g() {}

    i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      f.push(new v(e, t)), 1 !== f.length || l || s(h)
    }, v.prototype.run = function () {this.fun.apply(null, this.array)}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function (e) {return []}, i.binding = function (e) {throw new Error("process.binding is not supported")}, i.cwd = function () {return "/"}, i.chdir = function (e) {throw new Error("process.chdir is not supported")}, i.umask = function () {return 0}
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n
        }
      }(e) || function (e) {if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)}(e) || function () {throw new TypeError("Invalid attempt to spread non-iterable instance")}()
    }

    n(80), n(81), n(16), n(17), n(29), n(30), n(53), n(40), n(9), n(84), n(27), n(75), n(42), e.exports = function (e) {
      function t(e) {
        for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
        return o.colors[Math.abs(t) % o.colors.length]
      }

      function o(e) {
        var n;

        function r() {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
          if (r.enabled) {
            var u = r, a = Number(new Date), s = a - (n || a);
            u.diff = s, u.prev = n, u.curr = a, n = a, t[0] = o.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");
            var c = 0;
            t[0] = t[0].replace(/%([a-zA-Z%])/g, function (e, n) {
              if ("%%" === e) return e;
              c++;
              var r = o.formatters[n];
              if ("function" == typeof r) {
                var i = t[c];
                e = r.call(u, i), t.splice(c, 1), c--
              }
              return e
            }), o.formatArgs.call(u, t), (u.log || o.log).apply(u, t)
          }
        }

        return r.namespace = e, r.enabled = o.enabled(e), r.useColors = o.useColors(), r.color = t(e), r.destroy = i, r.extend = u, "function" == typeof o.init && o.init(r), o.instances.push(r), r
      }

      function i() {
        var e = o.instances.indexOf(this);
        return -1 !== e && (o.instances.splice(e, 1), !0)
      }

      function u(e, t) {
        var n = o(this.namespace + (void 0 === t ? ":" : t) + e);
        return n.log = this.log, n
      }

      function a(e) {return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")}

      return o.debug = o, o.default = o, o.coerce = function (e) {return e instanceof Error ? e.stack || e.message : e}, o.disable = function () {
        var e = [].concat(r(o.names.map(a)), r(o.skips.map(a).map(function (e) {return "-" + e}))).join(",");
        return o.enable(""), e
      }, o.enable = function (e) {
        var t;
        o.save(e), o.names = [], o.skips = [];
        var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length;
        for (t = 0; t < r; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? o.skips.push(new RegExp("^" + e.substr(1) + "$")) : o.names.push(new RegExp("^" + e + "$")));
        for (t = 0; t < o.instances.length; t++) {
          var i = o.instances[t];
          i.enabled = o.enabled(i.namespace)
        }
      }, o.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;
        var t, n;
        for (t = 0, n = o.skips.length; t < n; t++) if (o.skips[t].test(e)) return !1;
        for (t = 0, n = o.names.length; t < n; t++) if (o.names[t].test(e)) return !0;
        return !1
      }, o.humanize = n(166), Object.keys(e).forEach(function (t) {o[t] = e[t]}), o.instances = [], o.names = [], o.skips = [], o.formatters = {}, o.selectColor = t, o.enable(o.load()), o
    }
  }, function (e, t, n) {
    "use strict";

    function r(e) {return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e} : function (e) {return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e})(e)}

    n(16), n(17);
    var o = 1e3, i = 60 * o, u = 60 * i, a = 24 * u, s = 7 * a, c = 365.25 * a;

    function f(e, t, n, r) {
      var o = t >= 1.5 * n;
      return Math.round(e / n) + " " + r + (o ? "s" : "")
    }

    e.exports = function (e, t) {
      t = t || {};
      var n = r(e);
      if ("string" === n && e.length > 0) return function (e) {
        if ((e = String(e)).length > 100) return;
        var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
        if (!t) return;
        var n = parseFloat(t[1]);
        switch ((t[2] || "ms").toLowerCase()) {
          case"years":
          case"year":
          case"yrs":
          case"yr":
          case"y":
            return n * c;
          case"weeks":
          case"week":
          case"w":
            return n * s;
          case"days":
          case"day":
          case"d":
            return n * a;
          case"hours":
          case"hour":
          case"hrs":
          case"hr":
          case"h":
            return n * u;
          case"minutes":
          case"minute":
          case"mins":
          case"min":
          case"m":
            return n * i;
          case"seconds":
          case"second":
          case"secs":
          case"sec":
          case"s":
            return n * o;
          case"milliseconds":
          case"millisecond":
          case"msecs":
          case"msec":
          case"ms":
            return n;
          default:
            return
        }
      }(e);
      if ("number" === n && !1 === isNaN(e)) return t.long ? function (e) {
        var t = Math.abs(e);
        if (t >= a) return f(e, t, a, "day");
        if (t >= u) return f(e, t, u, "hour");
        if (t >= i) return f(e, t, i, "minute");
        if (t >= o) return f(e, t, o, "second");
        return e + " ms"
      }(e) : function (e) {
        var t = Math.abs(e);
        if (t >= a) return Math.round(e / a) + "d";
        if (t >= u) return Math.round(e / u) + "h";
        if (t >= i) return Math.round(e / i) + "m";
        if (t >= o) return Math.round(e / o) + "s";
        return e + "ms"
      }(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    t.default = {allowCancel: !0, debug: !1, skipDomainVerification: !1, testMode: !1, timeout: 3e4}
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var r = {
      classNames: {
        BASE: "x-hellosign-embedded",
        BASE_IN_MODAL: "x-hellosign-embedded--in-modal",
        IFRAME: "x-hellosign-embedded__iframe",
        MODAL_CLOSE: "x-hellosign-embedded__modal-close",
        MODAL_CLOSE_BTN: "x-hellosign-embedded__modal-close-button",
        MODAL_CONTENT: "x-hellosign-embedded__modal-content",
        MODAL_SCREEN: "x-hellosign-embedded__modal-screen"
      },
      events: {
        ERROR: "error",
        SEND: "send",
        CANCEL: "cancel",
        CLOSE: "close",
        CREATE_TEMPLATE: "createTemplate",
        DECLINE: "decline",
        FINISH: "finish",
        MESSAGE: "message",
        OPEN: "open",
        READY: "ready",
        REASSIGN: "reassign",
        SIGN: "sign"
      },
      iframe: {NAME: "x-hellosign-embedded"},
      locales: {
        CS_CZ: "cs-CZ",
        DA_DK: "da-DK",
        DE_DE: "de-DE",
        EN_GB: "en-GB",
        EN_US: "en-US",
        ES_LA: "es-LA",
        ES_ES: "es-ES",
        ES_MX: "es-MX",
        FR_FR: "fr-FR",
        ID_ID: "id-ID",
        IT_IT: "it-IT",
        JA_JP: "ja-JP",
        KO_KR: "ko-KR",
        MS_MY: "ms-MY",
        NB_NO: "nb-NO",
        NL_NL: "nl-NL",
        PL_PL: "pl-PL",
        PT_BR: "pt-BR",
        RU_RU: "ru-RU",
        SV_SE: "sv-SE",
        TH_TH: "th-TH",
        UK_UA: "uk-UA",
        ZH_CN: "zh-CN",
        ZH_TW: "zh-TW"
      },
      messages: {
        APP_CONFIGURE: "hellosign:configure",
        APP_ERROR: "hellosign:error",
        APP_INITIALIZE: "hellosign:initialize",
        APP_VERIFY_DOMAIN_REQUEST: "hellosign:verifyDomainRequest",
        APP_VERIFY_DOMAIN_RESPONSE: "hellosign:verifyDomainResponse",
        USER_CANCEL_REQUEST: "hellosign:userCancelRequest",
        USER_CREATE_TEMPLATE: "hellosign:userCreateTemplate",
        USER_DECLINE_REQUEST: "hellosign:userDeclineRequest",
        USER_FINISH_REQUEST: "hellosign:userFinishRequest",
        USER_REASSIGN_REQUEST: "hellosign:userReassignRequest",
        USER_SEND_REQUEST: "hellosign:userSendRequest",
        USER_SIGN_REQUEST: "hellosign:userSignRequest"
      }
    };
    t.default = r
  }]).default
});
