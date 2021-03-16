! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) { "use strict"; var n = [],
        i = e.document,
        a = Object.getPrototypeOf,
        r = n.slice,
        o = n.concat,
        s = n.push,
        l = n.indexOf,
        u = {},
        d = u.toString,
        c = u.hasOwnProperty,
        f = c.toString,
        h = f.call(Object),
        p = {},
        g = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        m = function(e) { return null != e && e === e.window },
        v = { type: !0, src: !0, noModule: !0 };

    function y(e, t, n) { var a, r = (t = t || i).createElement("script"); if (r.text = e, n)
            for (a in v) n[a] && (r[a] = n[a]);
        t.head.appendChild(r).parentNode.removeChild(r) }

    function _(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[d.call(e)] || "object" : typeof e } var b = function(e, t) { return new b.fn.init(e, t) },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function x(e) { var t = !!e && "length" in e && e.length,
            n = _(e); return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) } b.fn = b.prototype = { jquery: "3.3.1", constructor: b, length: 0, toArray: function() { return r.call(this) }, get: function(e) { return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = b.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return b.each(this, e) }, map: function(e) { return this.pushStack(b.map(this, function(t, n) { return e.call(t, n, t) })) }, slice: function() { return this.pushStack(r.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: s, sort: n.sort, splice: n.splice }, b.extend = b.fn.extend = function() { var e, t, n, i, a, r, o = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1; for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || g(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = o[t], o !== (i = e[t]) && (u && i && (b.isPlainObject(i) || (a = Array.isArray(i))) ? (a ? (a = !1, r = n && Array.isArray(n) ? n : []) : r = n && b.isPlainObject(n) ? n : {}, o[t] = b.extend(u, r, i)) : void 0 !== i && (o[t] = i)); return o }, b.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== d.call(e)) && (!(t = a(e)) || "function" == typeof(n = c.call(t, "constructor") && t.constructor) && f.call(n) === h) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, globalEval: function(e) { y(e) }, each: function(e, t) { var n, i = 0; if (x(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e }, trim: function(e) { return null == e ? "" : (e + "").replace(w, "") }, makeArray: function(e, t) { var n = t || []; return null != e && (x(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : l.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, i = 0, a = e.length; i < n; i++) e[a++] = t[i]; return e.length = a, e }, grep: function(e, t, n) { for (var i = [], a = 0, r = e.length, o = !n; a < r; a++) !t(e[a], a) !== o && i.push(e[a]); return i }, map: function(e, t, n) { var i, a, r = 0,
                s = []; if (x(e))
                for (i = e.length; r < i; r++) null != (a = t(e[r], r, n)) && s.push(a);
            else
                for (r in e) null != (a = t(e[r], r, n)) && s.push(a); return o.apply([], s) }, guid: 1, support: p }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { u["[object " + t + "]"] = t.toLowerCase() }); var S = function(e) { var t, n, i, a, r, o, s, l, u, d, c, f, h, p, g, m, v, y, _, b = "sizzle" + 1 * new Date,
            w = e.document,
            x = 0,
            S = 0,
            k = oe(),
            T = oe(),
            M = oe(),
            C = function(e, t) { return e === t && (c = !0), 0 },
            D = {}.hasOwnProperty,
            A = [],
            E = A.pop,
            P = A.push,
            O = A.push,
            L = A.slice,
            I = function(e, t) { for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n; return -1 },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            Y = "\\[" + H + "*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Y + ")*)|.*)\\)|)",
            F = new RegExp(H + "+", "g"),
            j = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            z = new RegExp("^" + H + "*," + H + "*"),
            B = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            q = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
            $ = new RegExp(W),
            V = new RegExp("^" + R + "$"),
            U = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + Y), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"), bool: new RegExp("^(?:" + N + ")$", "i"), needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i") },
            X = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Q = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
            ee = function(e, t, n) { var i = "0x" + t - 65536; return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            ie = function() { f() },
            ae = ye(function(e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" }); try { O.apply(A = L.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType } catch (e) { O = { apply: A.length ? function(e, t) { P.apply(e, L.call(t)) } : function(e, t) { for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1 } } }

        function re(e, t, i, a) { var r, s, u, d, c, p, v, y = t && t.ownerDocument,
                x = t ? t.nodeType : 9; if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i; if (!a && ((t ? t.ownerDocument || t : w) !== h && f(t), t = t || h, g)) { if (11 !== x && (c = Z.exec(e)))
                    if (r = c[1]) { if (9 === x) { if (!(u = t.getElementById(r))) return i; if (u.id === r) return i.push(u), i } else if (y && (u = y.getElementById(r)) && _(t, u) && u.id === r) return i.push(u), i }
                else { if (c[2]) return O.apply(i, t.getElementsByTagName(e)), i; if ((r = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(r)), i } if (n.qsa && !M[e + " "] && (!m || !m.test(e))) { if (1 !== x) y = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) { for ((d = t.getAttribute("id")) ? d = d.replace(te, ne) : t.setAttribute("id", d = b), s = (p = o(e)).length; s--;) p[s] = "#" + d + " " + ve(p[s]);
                        v = p.join(","), y = Q.test(e) && ge(t.parentNode) || t } if (v) try { return O.apply(i, y.querySelectorAll(v)), i }
                    catch (e) {} finally { d === b && t.removeAttribute("id") } } } return l(e.replace(j, "$1"), t, i, a) }

        function oe() { var e = []; return function t(n, a) { return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = a } }

        function se(e) { return e[b] = !0, e }

        function le(e) { var t = h.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function ue(e, t) { for (var n = e.split("|"), a = n.length; a--;) i.attrHandle[n[a]] = t }

        function de(e, t) { var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (i) return i; if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1; return e ? 1 : -1 }

        function ce(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

        function fe(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

        function he(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

        function pe(e) { return se(function(t) { return t = +t, se(function(n, i) { for (var a, r = e([], n.length, t), o = r.length; o--;) n[a = r[o]] && (n[a] = !(i[a] = n[a])) }) }) }

        function ge(e) { return e && void 0 !== e.getElementsByTagName && e } for (t in n = re.support = {}, r = re.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, f = re.setDocument = function(e) { var t, a, o = e ? e.ownerDocument || e : w; return o !== h && 9 === o.nodeType && o.documentElement ? (p = (h = o).documentElement, g = !r(h), w !== h && (a = h.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", ie, !1) : a.attachEvent && a.attachEvent("onunload", ie)), n.attributes = le(function(e) { return e.className = "i", !e.getAttribute("className") }), n.getElementsByTagName = le(function(e) { return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length }), n.getElementsByClassName = K.test(h.getElementsByClassName), n.getById = le(function(e) { return p.appendChild(e).id = b, !h.getElementsByName || !h.getElementsByName(b).length }), n.getById ? (i.filter.ID = function(e) { var t = e.replace(J, ee); return function(e) { return e.getAttribute("id") === t } }, i.find.ID = function(e, t) { if (void 0 !== t.getElementById && g) { var n = t.getElementById(e); return n ? [n] : [] } }) : (i.filter.ID = function(e) { var t = e.replace(J, ee); return function(e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, i.find.ID = function(e, t) { if (void 0 !== t.getElementById && g) { var n, i, a, r = t.getElementById(e); if (r) { if ((n = r.getAttributeNode("id")) && n.value === e) return [r]; for (a = t.getElementsByName(e), i = 0; r = a[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r] } return [] } }), i.find.TAG = n.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, i = [],
                        a = 0,
                        r = t.getElementsByTagName(e); if ("*" === e) { for (; n = r[a++];) 1 === n.nodeType && i.push(n); return i } return r }, i.find.CLASS = n.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e) }, v = [], m = [], (n.qsa = K.test(h.querySelectorAll)) && (le(function(e) { p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]") }), le(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:") })), (n.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function(e) { n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", W) }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(p.compareDocumentPosition), _ = t || K.test(p.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode; return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) { if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0; return !1 }, C = t ? function(e, t) { if (e === t) return c = !0, 0; var i = !e.compareDocumentPosition - !t.compareDocumentPosition; return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === w && _(w, e) ? -1 : t === h || t.ownerDocument === w && _(w, t) ? 1 : d ? I(d, e) - I(d, t) : 0 : 4 & i ? -1 : 1) } : function(e, t) { if (e === t) return c = !0, 0; var n, i = 0,
                        a = e.parentNode,
                        r = t.parentNode,
                        o = [e],
                        s = [t]; if (!a || !r) return e === h ? -1 : t === h ? 1 : a ? -1 : r ? 1 : d ? I(d, e) - I(d, t) : 0; if (a === r) return de(e, t); for (n = e; n = n.parentNode;) o.unshift(n); for (n = t; n = n.parentNode;) s.unshift(n); for (; o[i] === s[i];) i++; return i ? de(o[i], s[i]) : o[i] === w ? -1 : s[i] === w ? 1 : 0 }, h) : h }, re.matches = function(e, t) { return re(e, null, null, t) }, re.matchesSelector = function(e, t) { if ((e.ownerDocument || e) !== h && f(e), t = t.replace(q, "='$1']"), n.matchesSelector && g && !M[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try { var i = y.call(e, t); if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i }
                catch (e) {} return re(t, h, null, [e]).length > 0 }, re.contains = function(e, t) { return (e.ownerDocument || e) !== h && f(e), _(e, t) }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== h && f(e); var a = i.attrHandle[t.toLowerCase()],
                    r = a && D.call(i.attrHandle, t.toLowerCase()) ? a(e, t, !g) : void 0; return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, re.escape = function(e) { return (e + "").replace(te, ne) }, re.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, re.uniqueSort = function(e) { var t, i = [],
                    a = 0,
                    r = 0; if (c = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(C), c) { for (; t = e[r++];) t === e[r] && (a = i.push(r)); for (; a--;) e.splice(i[a], 1) } return d = null, e }, a = re.getText = function(e) { var t, n = "",
                    i = 0,
                    r = e.nodeType; if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += a(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                    for (; t = e[i++];) n += a(t); return n }, (i = re.selectors = { cacheLength: 50, createPseudo: se, match: U, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(J, ee).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = k[e + " "]; return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && k(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, t, n) { return function(i) { var a = re.attr(i, e); return null == a ? "!=" === t : !t || (a += "", "=" === t ? a === n : "!=" === t ? a !== n : "^=" === t ? n && 0 === a.indexOf(n) : "*=" === t ? n && a.indexOf(n) > -1 : "$=" === t ? n && a.slice(-n.length) === n : "~=" === t ? (" " + a.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (a === n || a.slice(0, n.length + 1) === n + "-")) } }, CHILD: function(e, t, n, i, a) { var r = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            s = "of-type" === t; return 1 === i && 0 === a ? function(e) { return !!e.parentNode } : function(t, n, l) { var u, d, c, f, h, p, g = r !== o ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                _ = !1; if (m) { if (r) { for (; g;) { for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling" } return !0 } if (p = [o ? m.firstChild : m.lastChild], o && y) { for (_ = (h = (u = (d = (c = (f = m)[b] || (f[b] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (_ = h = 0) || p.pop();)
                                        if (1 === f.nodeType && ++_ && f === t) { d[e] = [x, h, _]; break } } else if (y && (_ = h = (u = (d = (c = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === _)
                                    for (;
                                        (f = ++h && f && f[g] || (_ = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++_ || (y && ((d = (c = f[b] || (f[b] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] = [x, _]), f !== t));); return (_ -= a) === i || _ % i == 0 && _ / i >= 0 } } }, PSEUDO: function(e, t) { var n, a = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e); return a[b] ? a(t) : a.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) { for (var i, r = a(e, t), o = r.length; o--;) e[i = I(e, r[o])] = !(n[i] = r[o]) }) : function(e) { return a(e, 0, n) }) : a } }, pseudos: { not: se(function(e) { var t = [],
                            n = [],
                            i = s(e.replace(j, "$1")); return i[b] ? se(function(e, t, n, a) { for (var r, o = i(e, null, a, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r)) }) : function(e, a, r) { return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop() } }), has: se(function(e) { return function(t) { return re(e, t).length > 0 } }), contains: se(function(e) { return e = e.replace(J, ee),
                            function(t) { return (t.textContent || t.innerText || a(t)).indexOf(e) > -1 } }), lang: se(function(e) { return V.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(),
                            function(t) { var n;
                                do { if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function(e) { return e === p }, focus: function(e) { return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: he(!1), disabled: he(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1; return !0 }, parent: function(e) { return !i.pseudos.empty(e) }, header: function(e) { return G.test(e.nodeName) }, input: function(e) { return X.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: pe(function() { return [0] }), last: pe(function(e, t) { return [t - 1] }), eq: pe(function(e, t, n) { return [n < 0 ? n + t : n] }), even: pe(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: pe(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: pe(function(e, t, n) { for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i); return e }), gt: pe(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e }) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[t] = ce(t); for (t in { submit: !0, reset: !0 }) i.pseudos[t] = fe(t);

        function me() {}

        function ve(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

        function ye(e, t, n) { var i = t.dir,
                a = t.next,
                r = a || i,
                o = n && "parentNode" === r,
                s = S++; return t.first ? function(t, n, a) { for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, a); return !1 } : function(t, n, l) { var u, d, c, f = [x, s]; if (l) { for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, l)) return !0 } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o)
                            if (d = (c = t[b] || (t[b] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[i] || t;
                            else { if ((u = d[r]) && u[0] === x && u[1] === s) return f[2] = u[2]; if (d[r] = f, f[2] = e(t, n, l)) return !0 } return !1 } }

        function _e(e) { return e.length > 1 ? function(t, n, i) { for (var a = e.length; a--;)
                    if (!e[a](t, n, i)) return !1; return !0 } : e[0] }

        function be(e, t, n, i, a) { for (var r, o = [], s = 0, l = e.length, u = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, a) || (o.push(r), u && t.push(s))); return o }

        function we(e, t, n, i, a, r) { return i && !i[b] && (i = we(i)), a && !a[b] && (a = we(a, r)), se(function(r, o, s, l) { var u, d, c, f = [],
                    h = [],
                    p = o.length,
                    g = r || function(e, t, n) { for (var i = 0, a = t.length; i < a; i++) re(e, t[i], n); return n }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !r && t ? g : be(g, f, e, s, l),
                    v = n ? a || (r ? e : p || i) ? [] : o : m; if (n && n(m, v, s, l), i)
                    for (u = be(v, h), i(u, [], s, l), d = u.length; d--;)(c = u[d]) && (v[h[d]] = !(m[h[d]] = c)); if (r) { if (a || e) { if (a) { for (u = [], d = v.length; d--;)(c = v[d]) && u.push(m[d] = c);
                            a(null, v = [], u, l) } for (d = v.length; d--;)(c = v[d]) && (u = a ? I(r, c) : f[d]) > -1 && (r[u] = !(o[u] = c)) } } else v = be(v === o ? v.splice(p, v.length) : v), a ? a(null, o, v, l) : O.apply(o, v) }) }

        function xe(e) { for (var t, n, a, r = e.length, o = i.relative[e[0].type], s = o || i.relative[" "], l = o ? 1 : 0, d = ye(function(e) { return e === t }, s, !0), c = ye(function(e) { return I(t, e) > -1 }, s, !0), f = [function(e, n, i) { var a = !o && (i || n !== u) || ((t = n).nodeType ? d(e, n, i) : c(e, n, i)); return t = null, a }]; l < r; l++)
                if (n = i.relative[e[l].type]) f = [ye(_e(f), n)];
                else { if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) { for (a = ++l; a < r && !i.relative[e[a].type]; a++); return we(l > 1 && _e(f), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(j, "$1"), n, l < a && xe(e.slice(l, a)), a < r && xe(e = e.slice(a)), a < r && ve(e)) } f.push(n) }
            return _e(f) } return me.prototype = i.filters = i.pseudos, i.setFilters = new me, o = re.tokenize = function(e, t) { var n, a, r, o, s, l, u, d = T[e + " "]; if (d) return t ? 0 : d.slice(0); for (s = e, l = [], u = i.preFilter; s;) { for (o in n && !(a = z.exec(s)) || (a && (s = s.slice(a[0].length) || s), l.push(r = [])), n = !1, (a = B.exec(s)) && (n = a.shift(), r.push({ value: n, type: a[0].replace(j, " ") }), s = s.slice(n.length)), i.filter) !(a = U[o].exec(s)) || u[o] && !(a = u[o](a)) || (n = a.shift(), r.push({ value: n, type: o, matches: a }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? re.error(e) : T(e, l).slice(0) }, s = re.compile = function(e, t) { var n, a = [],
                r = [],
                s = M[e + " "]; if (!s) { for (t || (t = o(e)), n = t.length; n--;)(s = xe(t[n]))[b] ? a.push(s) : r.push(s);
                (s = M(e, function(e, t) { var n = t.length > 0,
                        a = e.length > 0,
                        r = function(r, o, s, l, d) { var c, p, m, v = 0,
                                y = "0",
                                _ = r && [],
                                b = [],
                                w = u,
                                S = r || a && i.find.TAG("*", d),
                                k = x += null == w ? 1 : Math.random() || .1,
                                T = S.length; for (d && (u = o === h || o || d); y !== T && null != (c = S[y]); y++) { if (a && c) { for (p = 0, o || c.ownerDocument === h || (f(c), s = !g); m = e[p++];)
                                        if (m(c, o || h, s)) { l.push(c); break }
                                    d && (x = k) } n && ((c = !m && c) && v--, r && _.push(c)) } if (v += y, n && y !== v) { for (p = 0; m = t[p++];) m(_, b, o, s); if (r) { if (v > 0)
                                        for (; y--;) _[y] || b[y] || (b[y] = E.call(l));
                                    b = be(b) } O.apply(l, b), d && !r && b.length > 0 && v + t.length > 1 && re.uniqueSort(l) } return d && (x = k, u = w), _ }; return n ? se(r) : r }(r, a))).selector = e } return s }, l = re.select = function(e, t, n, a) { var r, l, u, d, c, f = "function" == typeof e && e,
                h = !a && o(e = f.selector || e); if (n = n || [], 1 === h.length) { if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) { if (!(t = (i.find.ID(u.matches[0].replace(J, ee), t) || [])[0])) return n;
                    f && (t = t.parentNode), e = e.slice(l.shift().value.length) } for (r = U.needsContext.test(e) ? 0 : l.length; r-- && (u = l[r], !i.relative[d = u.type]);)
                    if ((c = i.find[d]) && (a = c(u.matches[0].replace(J, ee), Q.test(l[0].type) && ge(t.parentNode) || t))) { if (l.splice(r, 1), !(e = a.length && ve(l))) return O.apply(n, a), n; break } } return (f || s(e, h))(a, t, !g, n, !t || Q.test(e) && ge(t.parentNode) || t), n }, n.sortStable = b.split("").sort(C).join("") === b, n.detectDuplicates = !!c, f(), n.sortDetached = le(function(e) { return 1 & e.compareDocumentPosition(h.createElement("fieldset")) }), le(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || ue("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), n.attributes && le(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || ue("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), le(function(e) { return null == e.getAttribute("disabled") }) || ue(N, function(e, t, n) { var i; if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), re }(e);
    b.find = S, b.expr = S.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = S.uniqueSort, b.text = S.getText, b.isXMLDoc = S.isXML, b.contains = S.contains, b.escapeSelector = S.escape; var k = function(e, t, n) { for (var i = [], a = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) { if (a && b(e).is(n)) break;
                    i.push(e) }
            return i },
        T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        M = b.expr.match.needsContext;

    function C(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(e, t, n) { return g(t) ? b.grep(e, function(e, i) { return !!t.call(e, i, e) !== n }) : t.nodeType ? b.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? b.grep(e, function(e) { return l.call(t, e) > -1 !== n }) : b.filter(t, e, n) } b.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? b.find.matchesSelector(i, e) ? [i] : [] : b.find.matches(e, b.grep(t, function(e) { return 1 === e.nodeType })) }, b.fn.extend({ find: function(e) { var t, n, i = this.length,
                a = this; if ("string" != typeof e) return this.pushStack(b(e).filter(function() { for (t = 0; t < i; t++)
                    if (b.contains(a[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < i; t++) b.find(e, a[t], n); return i > 1 ? b.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(A(this, e || [], !1)) }, not: function(e) { return this.pushStack(A(this, e || [], !0)) }, is: function(e) { return !!A(this, "string" == typeof e && M.test(e) ? b(e) : e || [], !1).length } }); var E, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(e, t, n) { var a, r; if (!e) return this; if (n = n || E, "string" == typeof e) { if (!(a = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || !a[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (a[1]) { if (t = t instanceof b ? t[0] : t, b.merge(this, b.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(a[1]) && b.isPlainObject(t))
                    for (a in t) g(this[a]) ? this[a](t[a]) : this.attr(a, t[a]); return this } return (r = i.getElementById(a[2])) && (this[0] = r, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this) }).prototype = b.fn, E = b(i); var O = /^(?:parents|prev(?:Until|All))/,
        L = { children: !0, contents: !0, next: !0, prev: !0 };

    function I(e, t) { for (;
            (e = e[t]) && 1 !== e.nodeType;); return e } b.fn.extend({ has: function(e) { var t = b(e, this),
                n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                    if (b.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, i = 0,
                a = this.length,
                r = [],
                o = "string" != typeof e && b(e); if (!M.test(e))
                for (; i < a; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) { r.push(n); break }
            return this.pushStack(r.length > 1 ? b.uniqueSort(r) : r) }, index: function(e) { return e ? "string" == typeof e ? l.call(b(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), b.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return k(e, "parentNode") }, parentsUntil: function(e, t, n) { return k(e, "parentNode", n) }, next: function(e) { return I(e, "nextSibling") }, prev: function(e) { return I(e, "previousSibling") }, nextAll: function(e) { return k(e, "nextSibling") }, prevAll: function(e) { return k(e, "previousSibling") }, nextUntil: function(e, t, n) { return k(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return k(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return C(e, "iframe") ? e.contentDocument : (C(e, "template") && (e = e.content || e), b.merge([], e.childNodes)) } }, function(e, t) { b.fn[e] = function(n, i) { var a = b.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = b.filter(i, a)), this.length > 1 && (L[e] || b.uniqueSort(a), O.test(e) && a.reverse()), this.pushStack(a) } }); var N = /[^\x20\t\r\n\f]+/g;

    function H(e) { return e }

    function R(e) { throw e }

    function Y(e, t, n, i) { var a; try { e && g(a = e.promise) ? a.call(e).done(t).fail(n) : e && g(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(i)) } catch (e) { n.apply(void 0, [e]) } } b.Callbacks = function(e) { e = "string" == typeof e ? function(e) { var t = {}; return b.each(e.match(N) || [], function(e, n) { t[n] = !0 }), t }(e) : b.extend({}, e); var t, n, i, a, r = [],
            o = [],
            s = -1,
            l = function() { for (a = a || e.once, i = t = !0; o.length; s = -1)
                    for (n = o.shift(); ++s < r.length;) !1 === r[s].apply(n[0], n[1]) && e.stopOnFalse && (s = r.length, n = !1);
                e.memory || (n = !1), t = !1, a && (r = n ? [] : "") },
            u = { add: function() { return r && (n && !t && (s = r.length - 1, o.push(n)), function t(n) { b.each(n, function(n, i) { g(i) ? e.unique && u.has(i) || r.push(i) : i && i.length && "string" !== _(i) && t(i) }) }(arguments), n && !t && l()), this }, remove: function() { return b.each(arguments, function(e, t) { for (var n;
                            (n = b.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= s && s-- }), this }, has: function(e) { return e ? b.inArray(e, r) > -1 : r.length > 0 }, empty: function() { return r && (r = []), this }, disable: function() { return a = o = [], r = n = "", this }, disabled: function() { return !r }, lock: function() { return a = o = [], n || t || (r = n = ""), this }, locked: function() { return !!a }, fireWith: function(e, n) { return a || (n = [e, (n = n || []).slice ? n.slice() : n], o.push(n), t || l()), this }, fire: function() { return u.fireWith(this, arguments), this }, fired: function() { return !!i } }; return u }, b.extend({ Deferred: function(t) { var n = [
                    ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                    ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = { state: function() { return i }, always: function() { return r.done(arguments).fail(arguments), this }, catch: function(e) { return a.then(null, e) }, pipe: function() { var e = arguments; return b.Deferred(function(t) { b.each(n, function(n, i) { var a = g(e[i[4]]) && e[i[4]];
                                r[i[1]](function() { var e = a && a.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, a ? [e] : arguments) }) }), e = null }).promise() }, then: function(t, i, a) { var r = 0;

                        function o(t, n, i, a) { return function() { var s = this,
                                    l = arguments,
                                    u = function() { var e, u; if (!(t < r)) { if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, g(u) ? a ? u.call(e, o(r, n, H, a), o(r, n, R, a)) : (r++, u.call(e, o(r, n, H, a), o(r, n, R, a), o(r, n, H, n.notifyWith))) : (i !== H && (s = void 0, l = [e]), (a || n.resolveWith)(s, l)) } },
                                    d = a ? u : function() { try { u() } catch (e) { b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= r && (i !== R && (s = void 0, l = [e]), n.rejectWith(s, l)) } };
                                t ? d() : (b.Deferred.getStackHook && (d.stackTrace = b.Deferred.getStackHook()), e.setTimeout(d)) } } return b.Deferred(function(e) { n[0][3].add(o(0, e, g(a) ? a : H, e.notifyWith)), n[1][3].add(o(0, e, g(t) ? t : H)), n[2][3].add(o(0, e, g(i) ? i : R)) }).promise() }, promise: function(e) { return null != e ? b.extend(e, a) : a } },
                r = {}; return b.each(n, function(e, t) { var o = t[2],
                    s = t[5];
                a[t[1]] = o.add, s && o.add(function() { i = s }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), o.add(t[3].fire), r[t[0]] = function() { return r[t[0] + "With"](this === r ? void 0 : this, arguments), this }, r[t[0] + "With"] = o.fireWith }), a.promise(r), t && t.call(r, r), r }, when: function(e) { var t = arguments.length,
                n = t,
                i = Array(n),
                a = r.call(arguments),
                o = b.Deferred(),
                s = function(e) { return function(n) { i[e] = this, a[e] = arguments.length > 1 ? r.call(arguments) : n, --t || o.resolveWith(i, a) } }; if (t <= 1 && (Y(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || g(a[n] && a[n].then))) return o.then(); for (; n--;) Y(a[n], s(n), o.reject); return o.promise() } }); var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && W.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, b.readyException = function(t) { e.setTimeout(function() { throw t }) }; var F = b.Deferred();

    function j() { i.removeEventListener("DOMContentLoaded", j), e.removeEventListener("load", j), b.ready() } b.fn.ready = function(e) { return F.then(e).catch(function(e) { b.readyException(e) }), this }, b.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== e && --b.readyWait > 0 || F.resolveWith(i, [b])) } }), b.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(b.ready) : (i.addEventListener("DOMContentLoaded", j), e.addEventListener("load", j)); var z = function(e, t, n, i, a, r, o) { var s = 0,
                l = e.length,
                u = null == n; if ("object" === _(n))
                for (s in a = !0, n) z(e, t, s, n[s], !0, r, o);
            else if (void 0 !== i && (a = !0, g(i) || (o = !0), u && (o ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) { return u.call(b(e), n) })), t))
                for (; s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n))); return a ? e : u ? t.call(e) : l ? t(e[0], n) : r },
        B = /^-ms-/,
        q = /-([a-z])/g;

    function $(e, t) { return t.toUpperCase() }

    function V(e) { return e.replace(B, "ms-").replace(q, $) } var U = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function X() { this.expando = b.expando + X.uid++ } X.uid = 1, X.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var i, a = this.cache(e); if ("string" == typeof t) a[V(t)] = n;
            else
                for (i in t) a[V(i)] = t[i]; return a }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, i = e[this.expando]; if (void 0 !== i) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(N) || []).length; for (; n--;) delete i[t[n]] }(void 0 === t || b.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !b.isEmptyObject(t) } }; var G = new X,
        K = new X,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function J(e, t, n) { var i; if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Q, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) { try { n = function(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e) }(n) } catch (e) {} K.set(e, t, n) }
        else n = void 0; return n } b.extend({ hasData: function(e) { return K.hasData(e) || G.hasData(e) }, data: function(e, t, n) { return K.access(e, t, n) }, removeData: function(e, t) { K.remove(e, t) }, _data: function(e, t, n) { return G.access(e, t, n) }, _removeData: function(e, t) { G.remove(e, t) } }), b.fn.extend({ data: function(e, t) { var n, i, a, r = this[0],
                o = r && r.attributes; if (void 0 === e) { if (this.length && (a = K.get(r), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))) { for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = V(i.slice(5)), J(r, i, a[i]));
                    G.set(r, "hasDataAttrs", !0) } return a } return "object" == typeof e ? this.each(function() { K.set(this, e) }) : z(this, function(t) { var n; if (r && void 0 === t) return void 0 !== (n = K.get(r, e)) ? n : void 0 !== (n = J(r, e)) ? n : void 0;
                this.each(function() { K.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function(e) { return this.each(function() { K.remove(this, e) }) } }), b.extend({ queue: function(e, t, n) { var i; if (e) return t = (t || "fx") + "queue", i = G.get(e, t), n && (!i || Array.isArray(n) ? i = G.access(e, t, b.makeArray(n)) : i.push(n)), i || [] }, dequeue: function(e, t) { t = t || "fx"; var n = b.queue(e, t),
                i = n.length,
                a = n.shift(),
                r = b._queueHooks(e, t); "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete r.stop, a.call(e, function() { b.dequeue(e, t) }, r)), !i && r && r.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return G.get(e, n) || G.access(e, n, { empty: b.Callbacks("once memory").add(function() { G.remove(e, [t + "queue", n]) }) }) } }), b.fn.extend({ queue: function(e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each(function() { var n = b.queue(this, e, t);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e) }) }, dequeue: function(e) { return this.each(function() { b.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, i = 1,
                a = b.Deferred(),
                r = this,
                o = this.length,
                s = function() {--i || a.resolveWith(r, [r]) }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = G.get(r[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(s)); return s(), a.promise(t) } }); var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && b.contains(e.ownerDocument, e) && "none" === b.css(e, "display") },
        ae = function(e, t, n, i) { var a, r, o = {}; for (r in t) o[r] = e.style[r], e.style[r] = t[r]; for (r in a = n.apply(e, i || []), t) e.style[r] = o[r]; return a };

    function re(e, t, n, i) { var a, r, o = 20,
            s = i ? function() { return i.cur() } : function() { return b.css(e, t, "") },
            l = s(),
            u = n && n[3] || (b.cssNumber[t] ? "" : "px"),
            d = (b.cssNumber[t] || "px" !== u && +l) && te.exec(b.css(e, t)); if (d && d[3] !== u) { for (l /= 2, u = u || d[3], d = +l || 1; o--;) b.style(e, t, d + u), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (o = 0), d /= r;
            d *= 2, b.style(e, t, d + u), n = n || [] } return n && (d = +d || +l || 0, a = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = d, i.end = a)), a } var oe = {};

    function se(e) { var t, n = e.ownerDocument,
            i = e.nodeName,
            a = oe[i]; return a || (t = n.body.appendChild(n.createElement(i)), a = b.css(t, "display"), t.parentNode.removeChild(t), "none" === a && (a = "block"), oe[i] = a, a) }

    function le(e, t) { for (var n, i, a = [], r = 0, o = e.length; r < o; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (a[r] = G.get(i, "display") || null, a[r] || (i.style.display = "")), "" === i.style.display && ie(i) && (a[r] = se(i))) : "none" !== n && (a[r] = "none", G.set(i, "display", n))); for (r = 0; r < o; r++) null != a[r] && (e[r].style.display = a[r]); return e } b.fn.extend({ show: function() { return le(this, !0) }, hide: function() { return le(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ie(this) ? b(this).show() : b(this).hide() }) } }); var ue = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ce = /^$|^module$|\/(?:java|ecma)script/i,
        fe = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function he(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && C(e, t) ? b.merge([e], n) : n }

    function pe(e, t) { for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval")) } fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td; var ge, me, ve = /<|&#?\w+;/;

    function ye(e, t, n, i, a) { for (var r, o, s, l, u, d, c = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
            if ((r = e[h]) || 0 === r)
                if ("object" === _(r)) b.merge(f, r.nodeType ? [r] : r);
                else if (ve.test(r)) { for (o = o || c.appendChild(t.createElement("div")), s = (de.exec(r) || ["", ""])[1].toLowerCase(), l = fe[s] || fe._default, o.innerHTML = l[1] + b.htmlPrefilter(r) + l[2], d = l[0]; d--;) o = o.lastChild;
            b.merge(f, o.childNodes), (o = c.firstChild).textContent = "" } else f.push(t.createTextNode(r)); for (c.textContent = "", h = 0; r = f[h++];)
            if (i && b.inArray(r, i) > -1) a && a.push(r);
            else if (u = b.contains(r.ownerDocument, r), o = he(c.appendChild(r), "script"), u && pe(o), n)
            for (d = 0; r = o[d++];) ce.test(r.type || "") && n.push(r); return c } ge = i.createDocumentFragment().appendChild(i.createElement("div")), (me = i.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ge.appendChild(me), p.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue; var _e = i.documentElement,
        be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;

    function Se() { return !0 }

    function ke() { return !1 }

    function Te() { try { return i.activeElement } catch (e) {} }

    function Me(e, t, n, i, a, r) { var o, s; if ("object" == typeof t) { for (s in "string" != typeof n && (i = i || n, n = void 0), t) Me(e, s, n, i, t[s], r); return e } if (null == i && null == a ? (a = n, i = n = void 0) : null == a && ("string" == typeof n ? (a = i, i = void 0) : (a = i, i = n, n = void 0)), !1 === a) a = ke;
        else if (!a) return e; return 1 === r && (o = a, (a = function(e) { return b().off(e), o.apply(this, arguments) }).guid = o.guid || (o.guid = b.guid++)), e.each(function() { b.event.add(this, t, a, i, n) }) } b.event = { global: {}, add: function(e, t, n, i, a) { var r, o, s, l, u, d, c, f, h, p, g, m = G.get(e); if (m)
                for (n.handler && (n = (r = n).handler, a = r.selector), a && b.find.matchesSelector(_e, a), n.guid || (n.guid = b.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function(t) { return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0 }), u = (t = (t || "").match(N) || [""]).length; u--;) h = g = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h && (c = b.event.special[h] || {}, h = (a ? c.delegateType : c.bindType) || h, c = b.event.special[h] || {}, d = b.extend({ type: h, origType: g, data: i, handler: n, guid: n.guid, selector: a, needsContext: a && b.expr.match.needsContext.test(a), namespace: p.join(".") }, r), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, p, o) || e.addEventListener && e.addEventListener(h, o)), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), a ? f.splice(f.delegateCount++, 0, d) : f.push(d), b.event.global[h] = !0) }, remove: function(e, t, n, i, a) { var r, o, s, l, u, d, c, f, h, p, g, m = G.hasData(e) && G.get(e); if (m && (l = m.events)) { for (u = (t = (t || "").match(N) || [""]).length; u--;)
                    if (h = g = (s = xe.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) { for (c = b.event.special[h] || {}, f = l[h = (i ? c.delegateType : c.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = f.length; r--;) d = f[r], !a && g !== d.origType || n && n.guid !== d.guid || s && !s.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (f.splice(r, 1), d.selector && f.delegateCount--, c.remove && c.remove.call(e, d));
                        o && !f.length && (c.teardown && !1 !== c.teardown.call(e, p, m.handle) || b.removeEvent(e, h, m.handle), delete l[h]) }
                else
                    for (h in l) b.event.remove(e, h + t[u], n, i, !0);
                b.isEmptyObject(l) && G.remove(e, "handle events") } }, dispatch: function(e) { var t, n, i, a, r, o, s = b.event.fix(e),
                l = new Array(arguments.length),
                u = (G.get(this, "events") || {})[s.type] || [],
                d = b.event.special[s.type] || {}; for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t]; if (s.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, s)) { for (o = b.event.handlers.call(this, s, u), t = 0;
                    (a = o[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = a.elem, n = 0;
                        (r = a.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((b.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation())); return d.postDispatch && d.postDispatch.call(this, s), s.result } }, handlers: function(e, t) { var n, i, a, r, o, s = [],
                l = t.delegateCount,
                u = e.target; if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) { for (r = [], o = {}, n = 0; n < l; n++) void 0 === o[a = (i = t[n]).selector + " "] && (o[a] = i.needsContext ? b(a, this).index(u) > -1 : b.find(a, this, null, [u]).length), o[a] && r.push(i);
                        r.length && s.push({ elem: u, handlers: r }) }
            return u = this, l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s }, addProp: function(e, t) { Object.defineProperty(b.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function(e) { return e[b.expando] ? e : new b.Event(e) }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== Te() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === Te() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && C(this, "input")) return this.click(), !1 }, _default: function(e) { return C(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, b.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, b.Event = function(e, t) { if (!(this instanceof b.Event)) return new b.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[b.expando] = !0 }, b.Event.prototype = { constructor: b.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, b.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, b.event.addProp), b.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { b.event.special[e] = { delegateType: t, bindType: t, handle: function(e) { var n, i = e.relatedTarget,
                    a = e.handleObj; return i && (i === this || b.contains(this, i)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n } } }), b.fn.extend({ on: function(e, t, n, i) { return Me(this, e, t, n, i) }, one: function(e, t, n, i) { return Me(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, a; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (a in e) this.off(a, t, e[a]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() { b.event.remove(this, e, n, t) }) } }); var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        De = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Pe(e, t) { return C(e, "table") && C(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e }

    function Oe(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function Le(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Ie(e, t) { var n, i, a, r, o, s, l, u; if (1 === t.nodeType) { if (G.hasData(e) && (r = G.access(e), o = G.set(t, r), u = r.events))
                for (a in delete o.handle, o.events = {}, u)
                    for (n = 0, i = u[a].length; n < i; n++) b.event.add(t, a, u[a][n]);
            K.hasData(e) && (s = K.access(e), l = b.extend({}, s), K.set(t, l)) } }

    function Ne(e, t, n, i) { t = o.apply([], t); var a, r, s, l, u, d, c = 0,
            f = e.length,
            h = f - 1,
            m = t[0],
            v = g(m); if (v || f > 1 && "string" == typeof m && !p.checkClone && Ae.test(m)) return e.each(function(a) { var r = e.eq(a);
            v && (t[0] = m.call(this, a, r.html())), Ne(r, t, n, i) }); if (f && (r = (a = ye(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === a.childNodes.length && (a = r), r || i)) { for (l = (s = b.map(he(a, "script"), Oe)).length; c < f; c++) u = a, c !== h && (u = b.clone(u, !0, !0), l && b.merge(s, he(u, "script"))), n.call(e[c], u, c); if (l)
                for (d = s[s.length - 1].ownerDocument, b.map(s, Le), c = 0; c < l; c++) u = s[c], ce.test(u.type || "") && !G.access(u, "globalEval") && b.contains(d, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? b._evalUrl && b._evalUrl(u.src) : y(u.textContent.replace(Ee, ""), d, u)) } return e }

    function He(e, t, n) { for (var i, a = t ? b.filter(t, e) : e, r = 0; null != (i = a[r]); r++) n || 1 !== i.nodeType || b.cleanData(he(i)), i.parentNode && (n && b.contains(i.ownerDocument, i) && pe(he(i, "script")), i.parentNode.removeChild(i)); return e } b.extend({ htmlPrefilter: function(e) { return e.replace(Ce, "<$1></$2>") }, clone: function(e, t, n) { var i, a, r, o, s, l, u, d = e.cloneNode(!0),
                c = b.contains(e.ownerDocument, e); if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (o = he(d), i = 0, a = (r = he(e)).length; i < a; i++) s = r[i], l = o[i], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && ue.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue); if (t)
                if (n)
                    for (r = r || he(e), o = o || he(d), i = 0, a = r.length; i < a; i++) Ie(r[i], o[i]);
                else Ie(e, d); return (o = he(d, "script")).length > 0 && pe(o, !c && he(e, "script")), d }, cleanData: function(e) { for (var t, n, i, a = b.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (U(n)) { if (t = n[G.expando]) { if (t.events)
                            for (i in t.events) a[i] ? b.event.remove(n, i) : b.removeEvent(n, i, t.handle);
                        n[G.expando] = void 0 } n[K.expando] && (n[K.expando] = void 0) } } }), b.fn.extend({ detach: function(e) { return He(this, e, !0) }, remove: function(e) { return He(this, e) }, text: function(e) { return z(this, function(e) { return void 0 === e ? b.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return Ne(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e) }) }, prepend: function() { return Ne(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Pe(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return Ne(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return Ne(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (b.cleanData(he(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return b.clone(this, e, t) }) }, html: function(e) { return z(this, function(e) { var t = this[0] || {},
                    n = 0,
                    i = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !De.test(e) && !fe[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = b.htmlPrefilter(e); try { for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (b.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var e = []; return Ne(this, arguments, function(t) { var n = this.parentNode;
                b.inArray(this, e) < 0 && (b.cleanData(he(this)), n && n.replaceChild(t, this)) }, e) } }), b.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { b.fn[e] = function(e) { for (var n, i = [], a = b(e), r = a.length - 1, o = 0; o <= r; o++) n = o === r ? this : this.clone(!0), b(a[o])[t](n), s.apply(i, n.get()); return this.pushStack(i) } }); var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ye = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) },
        We = new RegExp(ne.join("|"), "i");

    function Fe(e, t, n) { var i, a, r, o, s = e.style; return (n = n || Ye(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || b.contains(e.ownerDocument, e) || (o = b.style(e, t)), !p.pixelBoxStyles() && Re.test(o) && We.test(t) && (i = s.width, a = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = a, s.maxWidth = r)), void 0 !== o ? o + "" : o }

    function je(e, t) { return { get: function() { if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get } } }! function() {
        function t() { if (d) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", _e.appendChild(u).appendChild(d); var t = e.getComputedStyle(d);
                a = "1%" !== t.top, l = 12 === n(t.marginLeft), d.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), d.style.position = "absolute", o = 36 === d.offsetWidth || "absolute", _e.removeChild(u), d = null } }

        function n(e) { return Math.round(parseFloat(e)) } var a, r, o, s, l, u = i.createElement("div"),
            d = i.createElement("div");
        d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === d.style.backgroundClip, b.extend(p, { boxSizingReliable: function() { return t(), r }, pixelBoxStyles: function() { return t(), s }, pixelPosition: function() { return t(), a }, reliableMarginLeft: function() { return t(), l }, scrollboxSize: function() { return t(), o } })) }(); var ze = /^(none|table(?!-c[ea]).+)/,
        Be = /^--/,
        qe = { position: "absolute", visibility: "hidden", display: "block" },
        $e = { letterSpacing: "0", fontWeight: "400" },
        Ve = ["Webkit", "Moz", "ms"],
        Ue = i.createElement("div").style;

    function Xe(e) { var t = b.cssProps[e]; return t || (t = b.cssProps[e] = function(e) { if (e in Ue) return e; for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                if ((e = Ve[n] + t) in Ue) return e }(e) || e), t }

    function Ge(e, t, n) { var i = te.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

    function Ke(e, t, n, i, a, r) { var o = "width" === t ? 1 : 0,
            s = 0,
            l = 0; if (n === (i ? "border" : "content")) return 0; for (; o < 4; o += 2) "margin" === n && (l += b.css(e, n + ne[o], !0, a)), i ? ("content" === n && (l -= b.css(e, "padding" + ne[o], !0, a)), "margin" !== n && (l -= b.css(e, "border" + ne[o] + "Width", !0, a))) : (l += b.css(e, "padding" + ne[o], !0, a), "padding" !== n ? l += b.css(e, "border" + ne[o] + "Width", !0, a) : s += b.css(e, "border" + ne[o] + "Width", !0, a)); return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5))), l }

    function Ze(e, t, n) { var i = Ye(e),
            a = Fe(e, t, i),
            r = "border-box" === b.css(e, "boxSizing", !1, i),
            o = r; if (Re.test(a)) { if (!n) return a;
            a = "auto" } return o = o && (p.boxSizingReliable() || a === e.style[t]), ("auto" === a || !parseFloat(a) && "inline" === b.css(e, "display", !1, i)) && (a = e["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (a = parseFloat(a) || 0) + Ke(e, t, n || (r ? "border" : "content"), o, i, a) + "px" }

    function Qe(e, t, n, i, a) { return new Qe.prototype.init(e, t, n, i, a) } b.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Fe(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(e, t, n, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var a, r, o, s = V(t),
                    l = Be.test(t),
                    u = e.style; if (l || (t = Xe(s)), o = b.cssHooks[t] || b.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (a = o.get(e, !1, i)) ? a : u[t]; "string" === (r = typeof n) && (a = te.exec(n)) && a[1] && (n = re(e, t, a), r = "number"), null != n && n == n && ("number" === r && (n += a && a[3] || (b.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n)) } }, css: function(e, t, n, i) { var a, r, o, s = V(t); return Be.test(t) || (t = Xe(s)), (o = b.cssHooks[t] || b.cssHooks[s]) && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = Fe(e, t, i)), "normal" === a && t in $e && (a = $e[t]), "" === n || n ? (r = parseFloat(a), !0 === n || isFinite(r) ? r || 0 : a) : a } }), b.each(["height", "width"], function(e, t) { b.cssHooks[t] = { get: function(e, n, i) { if (n) return !ze.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, i) : ae(e, qe, function() { return Ze(e, t, i) }) }, set: function(e, n, i) { var a, r = Ye(e),
                    o = "border-box" === b.css(e, "boxSizing", !1, r),
                    s = i && Ke(e, t, i, o, r); return o && p.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Ke(e, t, "border", !1, r) - .5)), s && (a = te.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = b.css(e, t)), Ge(0, n, s) } } }), b.cssHooks.marginLeft = je(p.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), b.each({ margin: "", padding: "", border: "Width" }, function(e, t) { b.cssHooks[e + t] = { expand: function(n) { for (var i = 0, a = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) a[e + ne[i] + t] = r[i] || r[i - 2] || r[0]; return a } }, "margin" !== e && (b.cssHooks[e + t].set = Ge) }), b.fn.extend({ css: function(e, t) { return z(this, function(e, t, n) { var i, a, r = {},
                    o = 0; if (Array.isArray(t)) { for (i = Ye(e), a = t.length; o < a; o++) r[t[o]] = b.css(e, t[o], !1, i); return r } return void 0 !== n ? b.style(e, t, n) : b.css(e, t) }, e, t, arguments.length > 1) } }), b.Tween = Qe, Qe.prototype = { constructor: Qe, init: function(e, t, n, i, a, r) { this.elem = e, this.prop = n, this.easing = a || b.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (b.cssNumber[n] ? "" : "px") }, cur: function() { var e = Qe.propHooks[this.prop]; return e && e.get ? e.get(this) : Qe.propHooks._default.get(this) }, run: function(e) { var t, n = Qe.propHooks[this.prop]; return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Qe.propHooks._default.set(this), this } }, Qe.prototype.init.prototype = Qe.prototype, Qe.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[b.cssProps[e.prop]] && !b.cssHooks[e.prop] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit) } } }, Qe.propHooks.scrollTop = Qe.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, b.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, b.fx = Qe.prototype.init, b.fx.step = {}; var Je, et, tt = /^(?:toggle|show|hide)$/,
        nt = /queueHooks$/;

    function it() { et && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, b.fx.interval), b.fx.tick()) }

    function at() { return e.setTimeout(function() { Je = void 0 }), Je = Date.now() }

    function rt(e, t) { var n, i = 0,
            a = { height: e }; for (t = t ? 1 : 0; i < 4; i += 2 - t) a["margin" + (n = ne[i])] = a["padding" + n] = e; return t && (a.opacity = a.width = e), a }

    function ot(e, t, n) { for (var i, a = (st.tweeners[t] || []).concat(st.tweeners["*"]), r = 0, o = a.length; r < o; r++)
            if (i = a[r].call(n, t, e)) return i }

    function st(e, t, n) { var i, a, r = 0,
            o = st.prefilters.length,
            s = b.Deferred().always(function() { delete l.elem }),
            l = function() { if (a) return !1; for (var t = Je || at(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), r = 0, o = u.tweens.length; r < o; r++) u.tweens[r].run(i); return s.notifyWith(e, [u, i, n]), i < 1 && o ? n : (o || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1) },
            u = s.promise({ elem: e, props: b.extend({}, t), opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Je || at(), duration: n.duration, tweens: [], createTween: function(t, n) { var i = b.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(i), i }, stop: function(t) { var n = 0,
                        i = t ? u.tweens.length : 0; if (a) return this; for (a = !0; n < i; n++) u.tweens[n].run(1); return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this } }),
            d = u.props; for (! function(e, t) { var n, i, a, r, o; for (n in e)
                    if (a = t[i = V(n)], r = e[n], Array.isArray(r) && (a = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (o = b.cssHooks[i]) && "expand" in o)
                        for (n in r = o.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = a);
                    else t[i] = a }(d, u.opts.specialEasing); r < o; r++)
            if (i = st.prefilters[r].call(u, e, d, u.opts)) return g(i.stop) && (b._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i; return b.map(d, ot, u), g(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), b.fx.timer(b.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u } b.Animation = b.extend(st, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return re(n.elem, e, te.exec(t), n), n }] }, tweener: function(e, t) { g(e) ? (t = e, e = ["*"]) : e = e.match(N); for (var n, i = 0, a = e.length; i < a; i++) n = e[i], st.tweeners[n] = st.tweeners[n] || [], st.tweeners[n].unshift(t) }, prefilters: [function(e, t, n) { var i, a, r, o, s, l, u, d, c = "width" in t || "height" in t,
                    f = this,
                    h = {},
                    p = e.style,
                    g = e.nodeType && ie(e),
                    m = G.get(e, "fxshow"); for (i in n.queue || (null == (o = b._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() { o.unqueued || s() }), o.unqueued++, f.always(function() { f.always(function() { o.unqueued--, b.queue(e, "fx").length || o.empty.fire() }) })), t)
                    if (a = t[i], tt.test(a)) { if (delete t[i], r = r || "toggle" === a, a === (g ? "hide" : "show")) { if ("show" !== a || !m || void 0 === m[i]) continue;
                            g = !0 } h[i] = m && m[i] || b.style(e, i) }
                if ((l = !b.isEmptyObject(t)) || !b.isEmptyObject(h))
                    for (i in c && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = G.get(e, "display")), "none" === (d = b.css(e, "display")) && (u ? d = u : (le([e], !0), u = e.style.display || u, d = b.css(e, "display"), le([e]))), ("inline" === d || "inline-block" === d && null != u) && "none" === b.css(e, "float") && (l || (f.done(function() { p.display = u }), null == u && (d = p.display, u = "none" === d ? "" : d)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = G.access(e, "fxshow", { display: u }), r && (m.hidden = !g), g && le([e], !0), f.done(function() { for (i in g || le([e]), G.remove(e, "fxshow"), h) b.style(e, i, h[i]) })), l = ot(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0)) }], prefilter: function(e, t) { t ? st.prefilters.unshift(e) : st.prefilters.push(e) } }), b.speed = function(e, t, n) { var i = e && "object" == typeof e ? b.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t }; return b.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in b.fx.speeds ? i.duration = b.fx.speeds[i.duration] : i.duration = b.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { g(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue) }, i }, b.fn.extend({ fadeTo: function(e, t, n, i) { return this.filter(ie).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(e, t, n, i) { var a = b.isEmptyObject(e),
                    r = b.speed(t, n, i),
                    o = function() { var t = st(this, b.extend({}, e), r);
                        (a || G.get(this, "finish")) && t.stop(!0) }; return o.finish = o, a || !1 === r.queue ? this.each(o) : this.queue(r.queue, o) }, stop: function(e, t, n) { var i = function(e) { var t = e.stop;
                    delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() { var t = !0,
                        a = null != e && e + "queueHooks",
                        r = b.timers,
                        o = G.get(this); if (a) o[a] && o[a].stop && i(o[a]);
                    else
                        for (a in o) o[a] && o[a].stop && nt.test(a) && i(o[a]); for (a = r.length; a--;) r[a].elem !== this || null != e && r[a].queue !== e || (r[a].anim.stop(n), t = !1, r.splice(a, 1));!t && n || b.dequeue(this, e) }) }, finish: function(e) { return !1 !== e && (e = e || "fx"), this.each(function() { var t, n = G.get(this),
                        i = n[e + "queue"],
                        a = n[e + "queueHooks"],
                        r = b.timers,
                        o = i ? i.length : 0; for (n.finish = !0, b.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1)); for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish }) } }), b.each(["toggle", "show", "hide"], function(e, t) { var n = b.fn[t];
            b.fn[t] = function(e, i, a) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, a) } }), b.each({ slideDown: rt("show"), slideUp: rt("hide"), slideToggle: rt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { b.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), b.timers = [], b.fx.tick = function() { var e, t = 0,
                n = b.timers; for (Je = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || b.fx.stop(), Je = void 0 }, b.fx.timer = function(e) { b.timers.push(e), b.fx.start() }, b.fx.interval = 13, b.fx.start = function() { et || (et = !0, it()) }, b.fx.stop = function() { et = null }, b.fx.speeds = { slow: 600, fast: 200, _default: 400 }, b.fn.delay = function(t, n) { return t = b.fx && b.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) { var a = e.setTimeout(n, t);
                i.stop = function() { e.clearTimeout(a) } }) },
        function() { var e = i.createElement("input"),
                t = i.createElement("select").appendChild(i.createElement("option"));
            e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value }(); var lt, ut = b.expr.attrHandle;
    b.fn.extend({ attr: function(e, t) { return z(this, b.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { b.removeAttr(this, e) }) } }), b.extend({ attr: function(e, t, n) { var i, a, r = e.nodeType; if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === r && b.isXMLDoc(e) || (a = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void b.removeAttr(e, t) : a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (i = a.get(e, t)) ? i : null == (i = b.find.attr(e, t)) ? void 0 : i) }, attrHooks: { type: { set: function(e, t) { if (!p.radioValue && "radio" === t && C(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, i = 0,
                a = t && t.match(N); if (a && 1 === e.nodeType)
                for (; n = a[i++];) e.removeAttribute(n) } }), lt = { set: function(e, t, n) { return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n } }, b.each(b.expr.match.bool.source.match(/\w+/g), function(e, t) { var n = ut[t] || b.find.attr;
        ut[t] = function(e, t, i) { var a, r, o = t.toLowerCase(); return i || (r = ut[o], ut[o] = a, a = null != n(e, t, i) ? o : null, ut[o] = r), a } }); var dt = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;

    function ft(e) { return (e.match(N) || []).join(" ") }

    function ht(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function pt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || [] } b.fn.extend({ prop: function(e, t) { return z(this, b.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[b.propFix[e] || e] }) } }), b.extend({ prop: function(e, t, n) { var i, a, r = e.nodeType; if (3 !== r && 8 !== r && 2 !== r) return 1 === r && b.isXMLDoc(e) || (t = b.propFix[t] || t, a = b.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = b.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : dt.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), p.optSelected || (b.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { b.propFix[this.toLowerCase()] = this }), b.fn.extend({ addClass: function(e) { var t, n, i, a, r, o, s, l = 0; if (g(e)) return this.each(function(t) { b(this).addClass(e.call(this, t, ht(this))) }); if ((t = pt(e)).length)
                for (; n = this[l++];)
                    if (a = ht(n), i = 1 === n.nodeType && " " + ft(a) + " ") { for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a !== (s = ft(i)) && n.setAttribute("class", s) }
            return this }, removeClass: function(e) { var t, n, i, a, r, o, s, l = 0; if (g(e)) return this.each(function(t) { b(this).removeClass(e.call(this, t, ht(this))) }); if (!arguments.length) return this.attr("class", ""); if ((t = pt(e)).length)
                for (; n = this[l++];)
                    if (a = ht(n), i = 1 === n.nodeType && " " + ft(a) + " ") { for (o = 0; r = t[o++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        a !== (s = ft(i)) && n.setAttribute("class", s) }
            return this }, toggleClass: function(e, t) { var n = typeof e,
                i = "string" === n || Array.isArray(e); return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) { b(this).toggleClass(e.call(this, n, ht(this), t), t) }) : this.each(function() { var t, a, r, o; if (i)
                    for (a = 0, r = b(this), o = pt(e); t = o[a++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = ht(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, i = 0; for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + ft(ht(n)) + " ").indexOf(t) > -1) return !0; return !1 } }); var gt = /\r/g;
    b.fn.extend({ val: function(e) { var t, n, i, a = this[0]; return arguments.length ? (i = g(e), this.each(function(n) { var a;
                1 === this.nodeType && (null == (a = i ? e.call(this, n, b(this).val()) : e) ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = b.map(a, function(e) { return null == e ? "" : e + "" })), (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a)) })) : a ? (t = b.valHooks[a.type] || b.valHooks[a.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : "string" == typeof(n = a.value) ? n.replace(gt, "") : null == n ? "" : n : void 0 } }), b.extend({ valHooks: { option: { get: function(e) { var t = b.find.attr(e, "value"); return null != t ? t : ft(b.text(e)) } }, select: { get: function(e) { var t, n, i, a = e.options,
                        r = e.selectedIndex,
                        o = "select-one" === e.type,
                        s = o ? null : [],
                        l = o ? r + 1 : a.length; for (i = r < 0 ? l : o ? r : 0; i < l; i++)
                        if (((n = a[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) { if (t = b(n).val(), o) return t;
                            s.push(t) }
                    return s }, set: function(e, t) { for (var n, i, a = e.options, r = b.makeArray(t), o = a.length; o--;)((i = a[o]).selected = b.inArray(b.valHooks.option.get(i), r) > -1) && (n = !0); return n || (e.selectedIndex = -1), r } } } }), b.each(["radio", "checkbox"], function() { b.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = b.inArray(b(e).val(), t) > -1 } }, p.checkOn || (b.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), p.focusin = "onfocusin" in e; var mt = /^(?:focusinfocus|focusoutblur)$/,
        vt = function(e) { e.stopPropagation() };
    b.extend(b.event, { trigger: function(t, n, a, r) { var o, s, l, u, d, f, h, p, v = [a || i],
                y = c.call(t, "type") ? t.type : t,
                _ = c.call(t, "namespace") ? t.namespace.split(".") : []; if (s = p = l = a = a || i, 3 !== a.nodeType && 8 !== a.nodeType && !mt.test(y + b.event.triggered) && (y.indexOf(".") > -1 && (_ = y.split("."), y = _.shift(), _.sort()), d = y.indexOf(":") < 0 && "on" + y, (t = t[b.expando] ? t : new b.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = _.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = a), n = null == n ? [t] : b.makeArray(n, [t]), h = b.event.special[y] || {}, r || !h.trigger || !1 !== h.trigger.apply(a, n))) { if (!r && !h.noBubble && !m(a)) { for (u = h.delegateType || y, mt.test(u + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), l = s;
                    l === (a.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e) } for (o = 0;
                    (s = v[o++]) && !t.isPropagationStopped();) p = s, t.type = o > 1 ? u : h.bindType || y, (f = (G.get(s, "events") || {})[t.type] && G.get(s, "handle")) && f.apply(s, n), (f = d && s[d]) && f.apply && U(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault()); return t.type = y, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !U(a) || d && g(a[y]) && !m(a) && ((l = a[d]) && (a[d] = null), b.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, vt), a[y](), t.isPropagationStopped() && p.removeEventListener(y, vt), b.event.triggered = void 0, l && (a[d] = l)), t.result } }, simulate: function(e, t, n) { var i = b.extend(new b.Event, n, { type: e, isSimulated: !0 });
            b.event.trigger(i, null, t) } }), b.fn.extend({ trigger: function(e, t) { return this.each(function() { b.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return b.event.trigger(e, t, n, !0) } }), p.focusin || b.each({ focus: "focusin", blur: "focusout" }, function(e, t) { var n = function(e) { b.event.simulate(t, e.target, b.event.fix(e)) };
        b.event.special[t] = { setup: function() { var i = this.ownerDocument || this,
                    a = G.access(i, t);
                a || i.addEventListener(e, n, !0), G.access(i, t, (a || 0) + 1) }, teardown: function() { var i = this.ownerDocument || this,
                    a = G.access(i, t) - 1;
                a ? G.access(i, t, a) : (i.removeEventListener(e, n, !0), G.remove(i, t)) } } }); var yt = e.location,
        _t = Date.now(),
        bt = /\?/;
    b.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + t), n }; var wt = /\[\]$/,
        xt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function Tt(e, t, n, i) { var a; if (Array.isArray(t)) b.each(t, function(t, a) { n || wt.test(e) ? i(e, a) : Tt(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, i) });
        else if (n || "object" !== _(t)) i(e, t);
        else
            for (a in t) Tt(e + "[" + a + "]", t[a], n, i) } b.param = function(e, t) { var n, i = [],
            a = function(e, t) { var n = g(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (Array.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() { a(this.name, this.value) });
        else
            for (n in e) Tt(n, e[n], t, a); return i.join("&") }, b.fn.extend({ serialize: function() { return b.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = b.prop(this, "elements"); return e ? b.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !b(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !ue.test(e)) }).map(function(e, t) { var n = b(this).val(); return null == n ? null : Array.isArray(n) ? b.map(n, function(e) { return { name: t.name, value: e.replace(xt, "\r\n") } }) : { name: t.name, value: n.replace(xt, "\r\n") } }).get() } }); var Mt = /%20/g,
        Ct = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Et = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Ot = {},
        Lt = {},
        It = "*/".concat("*"),
        Nt = i.createElement("a");

    function Ht(e) { return function(t, n) { "string" != typeof t && (n = t, t = "*"); var i, a = 0,
                r = t.toLowerCase().match(N) || []; if (g(n))
                for (; i = r[a++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n) } }

    function Rt(e, t, n, i) { var a = {},
            r = e === Lt;

        function o(s) { var l; return a[s] = !0, b.each(e[s] || [], function(e, s) { var u = s(t, n, i); return "string" != typeof u || r || a[u] ? r ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1) }), l } return o(t.dataTypes[0]) || !a["*"] && o("*") }

    function Yt(e, t) { var n, i, a = b.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((a[n] ? e : i || (i = {}))[n] = t[n]); return i && b.extend(!0, e, i), e } Nt.href = yt.href, b.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": b.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? Yt(Yt(e, b.ajaxSettings), t) : Yt(b.ajaxSettings, e) }, ajaxPrefilter: Ht(Ot), ajaxTransport: Ht(Lt), ajax: function(t, n) { "object" == typeof t && (n = t, t = void 0), n = n || {}; var a, r, o, s, l, u, d, c, f, h, p = b.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? b(g) : b.event,
                v = b.Deferred(),
                y = b.Callbacks("once memory"),
                _ = p.statusCode || {},
                w = {},
                x = {},
                S = "canceled",
                k = { readyState: 0, getResponseHeader: function(e) { var t; if (d) { if (!s)
                                for (s = {}; t = At.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function() { return d ? o : null }, setRequestHeader: function(e, t) { return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this }, overrideMimeType: function(e) { return null == d && (p.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (d) k.always(e[k.status]);
                            else
                                for (t in e) _[t] = [_[t], e[t]]; return this }, abort: function(e) { var t = e || S; return a && a.abort(t), T(0, t), this } }; if (v.promise(k), p.url = ((t || p.url || yt.href) + "").replace(Pt, yt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(N) || [""], null == p.crossDomain) { u = i.createElement("a"); try { u.href = p.url, u.href = u.href, p.crossDomain = Nt.protocol + "//" + Nt.host != u.protocol + "//" + u.host } catch (e) { p.crossDomain = !0 } } if (p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), Rt(Ot, p, n, k), d) return k; for (f in (c = b.event && p.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Et.test(p.type), r = p.url.replace(Ct, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Mt, "+")) : (h = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (bt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Dt, "$1"), h = (bt.test(r) ? "&" : "?") + "_=" + _t++ + h), p.url = r + h), p.ifModified && (b.lastModified[r] && k.setRequestHeader("If-Modified-Since", b.lastModified[r]), b.etag[r] && k.setRequestHeader("If-None-Match", b.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + It + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(f, p.headers[f]); if (p.beforeSend && (!1 === p.beforeSend.call(g, k, p) || d)) return k.abort(); if (S = "abort", y.add(p.complete), k.done(p.success), k.fail(p.error), a = Rt(Lt, p, n, k)) { if (k.readyState = 1, c && m.trigger("ajaxSend", [k, p]), d) return k;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() { k.abort("timeout") }, p.timeout)); try { d = !1, a.send(w, T) } catch (e) { if (d) throw e;
                    T(-1, e) } } else T(-1, "No Transport");

            function T(t, n, i, s) { var u, f, h, w, x, S = n;
                d || (d = !0, l && e.clearTimeout(l), a = void 0, o = s || "", k.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = function(e, t, n) { for (var i, a, r, o, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type")); if (i)
                        for (a in s)
                            if (s[a] && s[a].test(i)) { l.unshift(a); break }
                    if (l[0] in n) r = l[0];
                    else { for (a in n) { if (!l[0] || e.converters[a + " " + l[0]]) { r = a; break } o || (o = a) } r = r || o } if (r) return r !== l[0] && l.unshift(r), n[r] }(p, k, i)), w = function(e, t, n, i) { var a, r, o, s, l, u = {},
                        d = e.dataTypes.slice(); if (d[1])
                        for (o in e.converters) u[o.toLowerCase()] = e.converters[o]; for (r = d.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) { if (!(o = u[l + " " + r] || u["* " + r]))
                            for (a in u)
                                if ((s = a.split(" "))[1] === r && (o = u[l + " " + s[0]] || u["* " + s[0]])) {!0 === o ? o = u[a] : !0 !== u[a] && (r = s[0], d.unshift(s[1])); break }
                        if (!0 !== o)
                            if (o && e.throws) t = o(t);
                            else try { t = o(t) }
                        catch (e) { return { state: "parsererror", error: o ? e : "No conversion from " + l + " to " + r } } } return { state: "success", data: t } }(p, w, k, u), u ? (p.ifModified && ((x = k.getResponseHeader("Last-Modified")) && (b.lastModified[r] = x), (x = k.getResponseHeader("etag")) && (b.etag[r] = x)), 204 === t || "HEAD" === p.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = w.state, f = w.data, u = !(h = w.error))) : (h = S, !t && S || (S = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || S) + "", u ? v.resolveWith(g, [f, S, k]) : v.rejectWith(g, [k, S, h]), k.statusCode(_), _ = void 0, c && m.trigger(u ? "ajaxSuccess" : "ajaxError", [k, p, u ? f : h]), y.fireWith(g, [k, S]), c && (m.trigger("ajaxComplete", [k, p]), --b.active || b.event.trigger("ajaxStop"))) } return k }, getJSON: function(e, t, n) { return b.get(e, t, n, "json") }, getScript: function(e, t) { return b.get(e, void 0, t, "script") } }), b.each(["get", "post"], function(e, t) { b[t] = function(e, n, i, a) { return g(n) && (a = a || i, i = n, n = void 0), b.ajax(b.extend({ url: e, type: t, dataType: a, data: n, success: i }, b.isPlainObject(e) && e)) } }), b._evalUrl = function(e) { return b.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, b.fn.extend({ wrapAll: function(e) { var t; return this[0] && (g(e) && (e = e.call(this[0])), t = b(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(e) { return g(e) ? this.each(function(t) { b(this).wrapInner(e.call(this, t)) }) : this.each(function() { var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) { var t = g(e); return this.each(function(n) { b(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { b(this).replaceWith(this.childNodes) }), this } }), b.expr.pseudos.hidden = function(e) { return !b.expr.pseudos.visible(e) }, b.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, b.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (e) {} }; var Wt = { 0: 200, 1223: 204 },
        Ft = b.ajaxSettings.xhr();
    p.cors = !!Ft && "withCredentials" in Ft, p.ajax = Ft = !!Ft, b.ajaxTransport(function(t) { var n, i; if (p.cors || Ft && !t.crossDomain) return { send: function(a, r) { var o, s = t.xhr(); if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) s[o] = t.xhrFields[o]; for (o in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest"), a) s.setRequestHeader(o, a[o]);
                n = function(e) { return function() { n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() { 4 === s.readyState && e.setTimeout(function() { n && i() }) }, n = n("abort"); try { s.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e } }, abort: function() { n && n() } } }), b.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), b.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return b.globalEval(e), e } } }), b.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), b.ajaxTransport("script", function(e) { var t, n; if (e.crossDomain) return { send: function(a, r) { t = b("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type) }), i.head.appendChild(t[0]) }, abort: function() { n && n() } } }); var jt, zt = [],
        Bt = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = zt.pop() || b.expando + "_" + _t++; return this[e] = !0, e } }), b.ajaxPrefilter("json jsonp", function(t, n, i) { var a, r, o, s = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return a = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Bt, "$1" + a) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function() { return o || b.error(a + " was not called"), o[0] }, t.dataTypes[0] = "json", r = e[a], e[a] = function() { o = arguments }, i.always(function() { void 0 === r ? b(e).removeProp(a) : e[a] = r, t[a] && (t.jsonpCallback = n.jsonpCallback, zt.push(a)), o && g(r) && r(o[0]), o = r = void 0 }), "script" }), p.createHTMLDocument = ((jt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === jt.childNodes.length), b.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((a = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(a)) : t = i), o = !n && [], (r = D.exec(e)) ? [t.createElement(r[1])] : (r = ye([e], t, o), o && o.length && b(o).remove(), b.merge([], r.childNodes))); var a, r, o }, b.fn.load = function(e, t, n) { var i, a, r, o = this,
            s = e.indexOf(" "); return s > -1 && (i = ft(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), o.length > 0 && b.ajax({ url: e, type: a || "GET", dataType: "html", data: t }).done(function(e) { r = arguments, o.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { o.each(function() { n.apply(this, r || [e.responseText, t, e]) }) }), this }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { b.fn[t] = function(e) { return this.on(t, e) } }), b.expr.pseudos.animated = function(e) { return b.grep(b.timers, function(t) { return e === t.elem }).length }, b.offset = { setOffset: function(e, t, n) { var i, a, r, o, s, l, u = b.css(e, "position"),
                d = b(e),
                c = {}; "static" === u && (e.style.position = "relative"), s = d.offset(), r = b.css(e, "top"), l = b.css(e, "left"), ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1 ? (o = (i = d.position()).top, a = i.left) : (o = parseFloat(r) || 0, a = parseFloat(l) || 0), g(t) && (t = t.call(e, n, b.extend({}, s))), null != t.top && (c.top = t.top - s.top + o), null != t.left && (c.left = t.left - s.left + a), "using" in t ? t.using.call(e, c) : d.css(c) } }, b.fn.extend({ offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { b.offset.setOffset(this, e, t) }); var t, n, i = this[0]; return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, t, n, i = this[0],
                    a = { top: 0, left: 0 }; if ("fixed" === b.css(i, "position")) t = i.getBoundingClientRect();
                else { for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((a = b(e).offset()).top += b.css(e, "borderTopWidth", !0), a.left += b.css(e, "borderLeftWidth", !0)) } return { top: t.top - a.top - b.css(i, "marginTop", !0), left: t.left - a.left - b.css(i, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === b.css(e, "position");) e = e.offsetParent; return e || _e }) } }), b.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) { var n = "pageYOffset" === t;
        b.fn[e] = function(i) { return z(this, function(e, i, a) { var r; if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === a) return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : a, n ? a : r.pageYOffset) : e[i] = a }, e, i, arguments.length) } }), b.each(["top", "left"], function(e, t) { b.cssHooks[t] = je(p.pixelPosition, function(e, n) { if (n) return n = Fe(e, t), Re.test(n) ? b(e).position()[t] + "px" : n }) }), b.each({ Height: "height", Width: "width" }, function(e, t) { b.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) { b.fn[i] = function(a, r) { var o = arguments.length && (n || "boolean" != typeof a),
                    s = n || (!0 === a || !0 === r ? "margin" : "border"); return z(this, function(t, n, a) { var r; return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === a ? b.css(t, n, s) : b.style(t, n, a, s) }, t, o ? a : void 0, o) } }) }), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { b.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), b.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), b.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), b.proxy = function(e, t) { var n, i, a; if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = r.call(arguments, 2), (a = function() { return e.apply(t || this, i.concat(r.call(arguments))) }).guid = e.guid = e.guid || b.guid++, a }, b.holdReady = function(e) { e ? b.readyWait++ : b.ready(!0) }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = C, b.isFunction = g, b.isWindow = m, b.camelCase = V, b.type = _, b.now = Date.now, b.isNumeric = function(e) { var t = b.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return b }); var qt = e.jQuery,
        $t = e.$; return b.noConflict = function(t) { return e.$ === b && (e.$ = $t), t && e.jQuery === b && (e.jQuery = qt), b }, t || (e.jQuery = e.$ = b), b }),
function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery) }(this, function(e, t) { "use strict";

    function n(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

    function i(e, t, i) { return t && n(e.prototype, t), i && n(e, i), e }

    function a(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n); "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable }))), i.forEach(function(t) { var i, a, r;
                i = e, r = n[a = t], a in i ? Object.defineProperty(i, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : i[a] = r }) } return e } t = t && t.hasOwnProperty("default") ? t.default : t; var r = "transitionend"; var o = { TRANSITION_END: "bsTransitionEnd", getUID: function(e) { for (; e += ~~(1e6 * Math.random()), document.getElementById(e);); return e }, getSelectorFromElement: function(e) { var t = e.getAttribute("data-target"); if (!t || "#" === t) { var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : "" } try { return document.querySelector(t) ? t : null } catch (e) { return null } }, getTransitionDurationFromElement: function(e) { if (!e) return 0; var n = t(e).css("transition-duration"),
                i = t(e).css("transition-delay"),
                a = parseFloat(n),
                r = parseFloat(i); return a || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0 }, reflow: function(e) { return e.offsetHeight }, triggerTransitionEnd: function(e) { t(e).trigger(r) }, supportsTransitionEnd: function() { return Boolean(r) }, isElement: function(e) { return (e[0] || e).nodeType }, typeCheckConfig: function(e, t, n) { for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) { var a = n[i],
                        r = t[i],
                        s = r && o.isElement(r) ? "element" : (l = r, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(a).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + a + '".') }
            var l }, findShadowRoot: function(e) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? o.findShadowRoot(e.parentNode) : null; var t = e.getRootNode(); return t instanceof ShadowRoot ? t : null } };
    t.fn.emulateTransitionEnd = function(e) { var n = this,
            i = !1; return t(this).one(o.TRANSITION_END, function() { i = !0 }), setTimeout(function() { i || o.triggerTransitionEnd(n) }, e), this }, t.event.special[o.TRANSITION_END] = { bindType: r, delegateType: r, handle: function(e) { if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }; var s = "alert",
        l = "bs.alert",
        u = "." + l,
        d = t.fn[s],
        c = { CLOSE: "close" + u, CLOSED: "closed" + u, CLICK_DATA_API: "click" + u + ".data-api" },
        f = function() {
            function e(e) { this._element = e } var n = e.prototype; return n.close = function(e) { var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t) }, n.dispose = function() { t.removeData(this._element, l), this._element = null }, n._getRootElement = function(e) { var n = o.getSelectorFromElement(e),
                    i = !1; return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i }, n._triggerCloseEvent = function(e) { var n = t.Event(c.CLOSE); return t(e).trigger(n), n }, n._removeElement = function(e) { var n = this; if (t(e).removeClass("show"), t(e).hasClass("fade")) { var i = o.getTransitionDurationFromElement(e);
                    t(e).one(o.TRANSITION_END, function(t) { return n._destroyElement(e, t) }).emulateTransitionEnd(i) } else this._destroyElement(e) }, n._destroyElement = function(e) { t(e).detach().trigger(c.CLOSED).remove() }, e._jQueryInterface = function(n) { return this.each(function() { var i = t(this),
                        a = i.data(l);
                    a || (a = new e(this), i.data(l, a)), "close" === n && a[n](this) }) }, e._handleDismiss = function(e) { return function(t) { t && t.preventDefault(), e.close(this) } }, i(e, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), e }();
    t(document).on(c.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)), t.fn[s] = f._jQueryInterface, t.fn[s].Constructor = f, t.fn[s].noConflict = function() { return t.fn[s] = d, f._jQueryInterface }; var h = "button",
        p = "bs.button",
        g = "." + p,
        m = ".data-api",
        v = t.fn[h],
        y = "active",
        _ = '[data-toggle^="button"]',
        b = ".btn",
        w = { CLICK_DATA_API: "click" + g + m, FOCUS_BLUR_DATA_API: "focus" + g + m + " blur" + g + m },
        x = function() {
            function e(e) { this._element = e } var n = e.prototype; return n.toggle = function() { var e = !0,
                    n = !0,
                    i = t(this._element).closest('[data-toggle="buttons"]')[0]; if (i) { var a = this._element.querySelector('input:not([type="hidden"])'); if (a) { if ("radio" === a.type)
                            if (a.checked && this._element.classList.contains(y)) e = !1;
                            else { var r = i.querySelector(".active");
                                r && t(r).removeClass(y) }
                        if (e) { if (a.hasAttribute("disabled") || i.hasAttribute("disabled") || a.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            a.checked = !this._element.classList.contains(y), t(a).trigger("change") } a.focus(), n = !1 } } n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)), e && t(this._element).toggleClass(y) }, n.dispose = function() { t.removeData(this._element, p), this._element = null }, e._jQueryInterface = function(n) { return this.each(function() { var i = t(this).data(p);
                    i || (i = new e(this), t(this).data(p, i)), "toggle" === n && i[n]() }) }, i(e, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), e }();
    t(document).on(w.CLICK_DATA_API, _, function(e) { e.preventDefault(); var n = e.target;
        t(n).hasClass("btn") || (n = t(n).closest(b)), x._jQueryInterface.call(t(n), "toggle") }).on(w.FOCUS_BLUR_DATA_API, _, function(e) { var n = t(e.target).closest(b)[0];
        t(n).toggleClass("focus", /^focus(in)?$/.test(e.type)) }), t.fn[h] = x._jQueryInterface, t.fn[h].Constructor = x, t.fn[h].noConflict = function() { return t.fn[h] = v, x._jQueryInterface }; var S = "carousel",
        k = "bs.carousel",
        T = "." + k,
        M = ".data-api",
        C = t.fn[S],
        D = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        A = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        E = "next",
        P = "prev",
        O = { SLIDE: "slide" + T, SLID: "slid" + T, KEYDOWN: "keydown" + T, MOUSEENTER: "mouseenter" + T, MOUSELEAVE: "mouseleave" + T, TOUCHSTART: "touchstart" + T, TOUCHMOVE: "touchmove" + T, TOUCHEND: "touchend" + T, POINTERDOWN: "pointerdown" + T, POINTERUP: "pointerup" + T, DRAG_START: "dragstart" + T, LOAD_DATA_API: "load" + T + M, CLICK_DATA_API: "click" + T + M },
        L = "active",
        I = ".active.carousel-item",
        N = ".carousel-indicators",
        H = { TOUCH: "touch", PEN: "pen" },
        R = function() {
            function e(e, t) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(N), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var n = e.prototype; return n.next = function() { this._isSliding || this._slide(E) }, n.nextWhenVisible = function() {!document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next() }, n.prev = function() { this._isSliding || this._slide(P) }, n.pause = function(e) { e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (o.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, n.cycle = function(e) { e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, n.to = function(e) { var n = this;
                this._activeElement = this._element.querySelector(I); var i = this._getItemIndex(this._activeElement); if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(O.SLID, function() { return n.to(e) });
                    else { if (i === e) return this.pause(), void this.cycle(); var a = i < e ? E : P;
                        this._slide(a, this._items[e]) } }, n.dispose = function() { t(this._element).off(T), t.removeData(this._element, k), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, n._getConfig = function(e) { return e = a({}, D, e), o.typeCheckConfig(S, e, A), e }, n._handleSwipe = function() { var e = Math.abs(this.touchDeltaX); if (!(e <= 40)) { var t = e / this.touchDeltaX;
                    0 < t && this.prev(), t < 0 && this.next() } }, n._addEventListeners = function() { var e = this;
                this._config.keyboard && t(this._element).on(O.KEYDOWN, function(t) { return e._keydown(t) }), "hover" === this._config.pause && t(this._element).on(O.MOUSEENTER, function(t) { return e.pause(t) }).on(O.MOUSELEAVE, function(t) { return e.cycle(t) }), this._config.touch && this._addTouchEventListeners() }, n._addTouchEventListeners = function() { var e = this; if (this._touchSupported) { var n = function(t) { e._pointerEvent && H[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX) },
                        i = function(t) { e._pointerEvent && H[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) { return e.cycle(t) }, 500 + e._config.interval)) };
                    t(this._element.querySelectorAll(".carousel-item img")).on(O.DRAG_START, function(e) { return e.preventDefault() }), this._pointerEvent ? (t(this._element).on(O.POINTERDOWN, function(e) { return n(e) }), t(this._element).on(O.POINTERUP, function(e) { return i(e) }), this._element.classList.add("pointer-event")) : (t(this._element).on(O.TOUCHSTART, function(e) { return n(e) }), t(this._element).on(O.TOUCHMOVE, function(t) { var n;
                        (n = t).originalEvent.touches && 1 < n.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = n.originalEvent.touches[0].clientX - e.touchStartX }), t(this._element).on(O.TOUCHEND, function(e) { return i(e) })) } }, n._keydown = function(e) { if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev(); break;
                    case 39:
                        e.preventDefault(), this.next() } }, n._getItemIndex = function(e) { return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e) }, n._getItemByDirection = function(e, t) { var n = e === E,
                    i = e === P,
                    a = this._getItemIndex(t),
                    r = this._items.length - 1; if ((i && 0 === a || n && a === r) && !this._config.wrap) return t; var o = (a + (e === P ? -1 : 1)) % this._items.length; return -1 === o ? this._items[this._items.length - 1] : this._items[o] }, n._triggerSlideEvent = function(e, n) { var i = this._getItemIndex(e),
                    a = this._getItemIndex(this._element.querySelector(I)),
                    r = t.Event(O.SLIDE, { relatedTarget: e, direction: n, from: a, to: i }); return t(this._element).trigger(r), r }, n._setActiveIndicatorElement = function(e) { if (this._indicatorsElement) { var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    t(n).removeClass(L); var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(L) } }, n._slide = function(e, n) { var i, a, r, s = this,
                    l = this._element.querySelector(I),
                    u = this._getItemIndex(l),
                    d = n || l && this._getItemByDirection(e, l),
                    c = this._getItemIndex(d),
                    f = Boolean(this._interval); if (r = e === E ? (i = "carousel-item-left", a = "carousel-item-next", "left") : (i = "carousel-item-right", a = "carousel-item-prev", "right"), d && t(d).hasClass(L)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && l && d) { this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(d); var h = t.Event(O.SLID, { relatedTarget: d, direction: r, from: u, to: c }); if (t(this._element).hasClass("slide")) { t(d).addClass(a), o.reflow(d), t(l).addClass(i), t(d).addClass(i); var p = parseInt(d.getAttribute("data-interval"), 10);
                        this._config.interval = p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, p) : this._config.defaultInterval || this._config.interval; var g = o.getTransitionDurationFromElement(l);
                        t(l).one(o.TRANSITION_END, function() { t(d).removeClass(i + " " + a).addClass(L), t(l).removeClass(L + " " + a + " " + i), s._isSliding = !1, setTimeout(function() { return t(s._element).trigger(h) }, 0) }).emulateTransitionEnd(g) } else t(l).removeClass(L), t(d).addClass(L), this._isSliding = !1, t(this._element).trigger(h);
                    f && this.cycle() } }, e._jQueryInterface = function(n) { return this.each(function() { var i = t(this).data(k),
                        r = a({}, D, t(this).data()); "object" == typeof n && (r = a({}, r, n)); var o = "string" == typeof n ? n : r.slide; if (i || (i = new e(this, r), t(this).data(k, i)), "number" == typeof n) i.to(n);
                    else if ("string" == typeof o) { if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
                        i[o]() } else r.interval && r.ride && (i.pause(), i.cycle()) }) }, e._dataApiClickHandler = function(n) { var i = o.getSelectorFromElement(this); if (i) { var r = t(i)[0]; if (r && t(r).hasClass("carousel")) { var s = a({}, t(r).data(), t(this).data()),
                            l = this.getAttribute("data-slide-to");
                        l && (s.interval = !1), e._jQueryInterface.call(t(r), s), l && t(r).data(k).to(l), n.preventDefault() } } }, i(e, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return D } }]), e }();
    t(document).on(O.CLICK_DATA_API, "[data-slide], [data-slide-to]", R._dataApiClickHandler), t(window).on(O.LOAD_DATA_API, function() { for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) { var a = t(e[n]);
            R._jQueryInterface.call(a, a.data()) } }), t.fn[S] = R._jQueryInterface, t.fn[S].Constructor = R, t.fn[S].noConflict = function() { return t.fn[S] = C, R._jQueryInterface }; var Y = "collapse",
        W = "bs.collapse",
        F = "." + W,
        j = t.fn[Y],
        z = { toggle: !0, parent: "" },
        B = { toggle: "boolean", parent: "(string|element)" },
        q = { SHOW: "show" + F, SHOWN: "shown" + F, HIDE: "hide" + F, HIDDEN: "hidden" + F, CLICK_DATA_API: "click" + F + ".data-api" },
        $ = "show",
        V = "collapse",
        U = "collapsing",
        X = "collapsed",
        G = '[data-toggle="collapse"]',
        K = function() {
            function e(e, t) { this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')); for (var n = [].slice.call(document.querySelectorAll(G)), i = 0, a = n.length; i < a; i++) { var r = n[i],
                        s = o.getSelectorFromElement(r),
                        l = [].slice.call(document.querySelectorAll(s)).filter(function(t) { return t === e });
                    null !== s && 0 < l.length && (this._selector = s, this._triggerArray.push(r)) } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var n = e.prototype; return n.toggle = function() { t(this._element).hasClass($) ? this.hide() : this.show() }, n.show = function() { var n, i, a = this; if (!(this._isTransitioning || t(this._element).hasClass($) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) { return "string" == typeof a._config.parent ? e.getAttribute("data-parent") === a._config.parent : e.classList.contains(V) })).length && (n = null), n && (i = t(n).not(this._selector).data(W)) && i._isTransitioning))) { var r = t.Event(q.SHOW); if (t(this._element).trigger(r), !r.isDefaultPrevented()) { n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data(W, null)); var s = this._getDimension();
                        t(this._element).removeClass(V).addClass(U), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(X).attr("aria-expanded", !0), this.setTransitioning(!0); var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            u = o.getTransitionDurationFromElement(this._element);
                        t(this._element).one(o.TRANSITION_END, function() { t(a._element).removeClass(U).addClass(V).addClass($), a._element.style[s] = "", a.setTransitioning(!1), t(a._element).trigger(q.SHOWN) }).emulateTransitionEnd(u), this._element.style[s] = this._element[l] + "px" } } }, n.hide = function() { var e = this; if (!this._isTransitioning && t(this._element).hasClass($)) { var n = t.Event(q.HIDE); if (t(this._element).trigger(n), !n.isDefaultPrevented()) { var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", o.reflow(this._element), t(this._element).addClass(U).removeClass(V).removeClass($); var a = this._triggerArray.length; if (0 < a)
                            for (var r = 0; r < a; r++) { var s = this._triggerArray[r],
                                    l = o.getSelectorFromElement(s);
                                null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass($) || t(s).addClass(X).attr("aria-expanded", !1)) } this.setTransitioning(!0), this._element.style[i] = ""; var u = o.getTransitionDurationFromElement(this._element);
                        t(this._element).one(o.TRANSITION_END, function() { e.setTransitioning(!1), t(e._element).removeClass(U).addClass(V).trigger(q.HIDDEN) }).emulateTransitionEnd(u) } } }, n.setTransitioning = function(e) { this._isTransitioning = e }, n.dispose = function() { t.removeData(this._element, W), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, n._getConfig = function(e) { return (e = a({}, z, e)).toggle = Boolean(e.toggle), o.typeCheckConfig(Y, e, B), e }, n._getDimension = function() { return t(this._element).hasClass("width") ? "width" : "height" }, n._getParent = function() { var n, i = this;
                o.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent); var a = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(n.querySelectorAll(a)); return t(r).each(function(t, n) { i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]) }), n }, n._addAriaAndCollapsedClass = function(e, n) { var i = t(e).hasClass($);
                n.length && t(n).toggleClass(X, !i).attr("aria-expanded", i) }, e._getTargetFromElement = function(e) { var t = o.getSelectorFromElement(e); return t ? document.querySelector(t) : null }, e._jQueryInterface = function(n) { return this.each(function() { var i = t(this),
                        r = i.data(W),
                        o = a({}, z, i.data(), "object" == typeof n && n ? n : {}); if (!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1), r || (r = new e(this, o), i.data(W, r)), "string" == typeof n) { if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]() } }) }, i(e, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return z } }]), e }();
    t(document).on(q.CLICK_DATA_API, G, function(e) { "A" === e.currentTarget.tagName && e.preventDefault(); var n = t(this),
            i = o.getSelectorFromElement(this),
            a = [].slice.call(document.querySelectorAll(i));
        t(a).each(function() { var e = t(this),
                i = e.data(W) ? "toggle" : n.data();
            K._jQueryInterface.call(e, i) }) }), t.fn[Y] = K._jQueryInterface, t.fn[Y].Constructor = K, t.fn[Y].noConflict = function() { return t.fn[Y] = j, K._jQueryInterface }; for (var Z = "undefined" != typeof window && "undefined" != typeof document, Q = ["Edge", "Trident", "Firefox"], J = 0, ee = 0; ee < Q.length; ee += 1)
        if (Z && 0 <= navigator.userAgent.indexOf(Q[ee])) { J = 1; break }
    var te = Z && window.Promise ? function(e) { var t = !1; return function() { t || (t = !0, window.Promise.resolve().then(function() { t = !1, e() })) } } : function(e) { var t = !1; return function() { t || (t = !0, setTimeout(function() { t = !1, e() }, J)) } };

    function ne(e) { return e && "[object Function]" === {}.toString.call(e) }

    function ie(e, t) { if (1 !== e.nodeType) return []; var n = e.ownerDocument.defaultView.getComputedStyle(e, null); return t ? n[t] : n }

    function ae(e) { return "HTML" === e.nodeName ? e : e.parentNode || e.host }

    function re(e) { if (!e) return document.body; switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body } var t = ie(e),
            n = t.overflow,
            i = t.overflowX,
            a = t.overflowY; return /(auto|scroll|overlay)/.test(n + a + i) ? e : re(ae(e)) } var oe = Z && !(!window.MSInputMethodContext || !document.documentMode),
        se = Z && /MSIE 10/.test(navigator.userAgent);

    function le(e) { return 11 === e ? oe : 10 === e ? se : oe || se }

    function ue(e) { if (!e) return document.documentElement; for (var t = le(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === ie(n, "position") ? ue(n) : n : e ? e.ownerDocument.documentElement : document.documentElement }

    function de(e) { return null !== e.parentNode ? de(e.parentNode) : e }

    function ce(e, t) { if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement; var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            a = n ? t : e,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(a, 0); var o, s, l = r.commonAncestorContainer; if (e !== l && t !== l || i.contains(a)) return "BODY" === (s = (o = l).nodeName) || "HTML" !== s && ue(o.firstElementChild) !== o ? ue(l) : l; var u = de(e); return u.host ? ce(u.host, t) : ce(e, de(t).host) }

    function fe(e) { var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName; if ("BODY" !== n && "HTML" !== n) return e[t]; var i = e.ownerDocument.documentElement; return (e.ownerDocument.scrollingElement || i)[t] }

    function he(e, t) { var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom"; return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10) }

    function pe(e, t, n, i) { return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], le(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0) }

    function ge(e) { var t = e.body,
            n = e.documentElement,
            i = le(10) && getComputedStyle(n); return { height: pe("Height", t, n, i), width: pe("Width", t, n, i) } } var me = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }(),
        ve = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e },
        ye = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e };

    function _e(e) { return ye({}, e, { right: e.left + e.width, bottom: e.top + e.height }) }

    function be(e) { var t = {}; try { if (le(10)) { t = e.getBoundingClientRect(); var n = fe(e, "top"),
                    i = fe(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i } else t = e.getBoundingClientRect() } catch (e) {} var a = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
            r = "HTML" === e.nodeName ? ge(e.ownerDocument) : {},
            o = r.width || e.clientWidth || a.right - a.left,
            s = r.height || e.clientHeight || a.bottom - a.top,
            l = e.offsetWidth - o,
            u = e.offsetHeight - s; if (l || u) { var d = ie(e);
            l -= he(d, "x"), u -= he(d, "y"), a.width -= l, a.height -= u } return _e(a) }

    function we(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = le(10),
            a = "HTML" === t.nodeName,
            r = be(e),
            o = be(t),
            s = re(e),
            l = ie(t),
            u = parseFloat(l.borderTopWidth, 10),
            d = parseFloat(l.borderLeftWidth, 10);
        n && a && (o.top = Math.max(o.top, 0), o.left = Math.max(o.left, 0)); var c = _e({ top: r.top - o.top - u, left: r.left - o.left - d, width: r.width, height: r.height }); if (c.marginTop = 0, c.marginLeft = 0, !i && a) { var f = parseFloat(l.marginTop, 10),
                h = parseFloat(l.marginLeft, 10);
            c.top -= u - f, c.bottom -= u - f, c.left -= d - h, c.right -= d - h, c.marginTop = f, c.marginLeft = h } return (i && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (c = function(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = fe(t, "top"),
                a = fe(t, "left"),
                r = n ? -1 : 1; return e.top += i * r, e.bottom += i * r, e.left += a * r, e.right += a * r, e }(c, t)), c }

    function xe(e) { if (!e || !e.parentElement || le()) return document.documentElement; for (var t = e.parentElement; t && "none" === ie(t, "transform");) t = t.parentElement; return t || document.documentElement }

    function Se(e, t, n, i) { var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            r = { top: 0, left: 0 },
            o = a ? xe(e) : ce(e, t); if ("viewport" === i) r = function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = we(e, n),
                a = Math.max(n.clientWidth, window.innerWidth || 0),
                r = Math.max(n.clientHeight, window.innerHeight || 0),
                o = t ? 0 : fe(n),
                s = t ? 0 : fe(n, "left"); return _e({ top: o - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: a, height: r }) }(o, a);
        else { var s = void 0; "scrollParent" === i ? "BODY" === (s = re(ae(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === i ? e.ownerDocument.documentElement : i; var l = we(s, o, a); if ("HTML" !== s.nodeName || function e(t) { var n = t.nodeName; if ("BODY" === n || "HTML" === n) return !1; if ("fixed" === ie(t, "position")) return !0; var i = ae(t); return !!i && e(i) }(o)) r = l;
            else { var u = ge(e.ownerDocument),
                    d = u.height,
                    c = u.width;
                r.top += l.top - l.marginTop, r.bottom = d + l.top, r.left += l.left - l.marginLeft, r.right = c + l.left } } var f = "number" == typeof(n = n || 0); return r.left += f ? n : n.left || 0, r.top += f ? n : n.top || 0, r.right -= f ? n : n.right || 0, r.bottom -= f ? n : n.bottom || 0, r }

    function ke(e, t, n, i, a) { var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === e.indexOf("auto")) return e; var o = Se(n, i, r, a),
            s = { top: { width: o.width, height: t.top - o.top }, right: { width: o.right - t.right, height: o.height }, bottom: { width: o.width, height: o.bottom - t.bottom }, left: { width: t.left - o.left, height: o.height } },
            l = Object.keys(s).map(function(e) { return ye({ key: e }, s[e], { area: (t = s[e], t.width * t.height) }); var t }).sort(function(e, t) { return t.area - e.area }),
            u = l.filter(function(e) { var t = e.width,
                    i = e.height; return t >= n.clientWidth && i >= n.clientHeight }),
            d = 0 < u.length ? u[0].key : l[0].key,
            c = e.split("-")[1]; return d + (c ? "-" + c : "") }

    function Te(e, t, n) { var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return we(n, i ? xe(t) : ce(t, n), i) }

    function Me(e) { var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0); return { width: e.offsetWidth + i, height: e.offsetHeight + n } }

    function Ce(e) { var t = { left: "right", right: "left", bottom: "top", top: "bottom" }; return e.replace(/left|right|bottom|top/g, function(e) { return t[e] }) }

    function De(e, t, n) { n = n.split("-")[0]; var i = Me(e),
            a = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            o = r ? "top" : "left",
            s = r ? "left" : "top",
            l = r ? "height" : "width",
            u = r ? "width" : "height"; return a[o] = t[o] + t[l] / 2 - i[l] / 2, a[s] = n === s ? t[s] - i[u] : t[Ce(s)], a }

    function Ae(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] }

    function Ee(e, t, n) { return (void 0 === n ? e : e.slice(0, function(e, t, n) { if (Array.prototype.findIndex) return e.findIndex(function(e) { return e[t] === n }); var i = Ae(e, function(e) { return e[t] === n }); return e.indexOf(i) }(e, "name", n))).forEach(function(e) { e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!"); var n = e.function || e.fn;
            e.enabled && ne(n) && (t.offsets.popper = _e(t.offsets.popper), t.offsets.reference = _e(t.offsets.reference), t = n(t, e)) }), t }

    function Pe(e, t) { return e.some(function(e) { var n = e.name; return e.enabled && n === t }) }

    function Oe(e) { for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) { var a = t[i],
                r = a ? "" + a + n : e; if (void 0 !== document.body.style[r]) return r } return null }

    function Le(e) { var t = e.ownerDocument; return t ? t.defaultView : window }

    function Ie(e) { return "" !== e && !isNaN(parseFloat(e)) && isFinite(e) }

    function Ne(e, t) { Object.keys(t).forEach(function(n) { var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Ie(t[n]) && (i = "px"), e.style[n] = t[n] + i }) } var He = Z && /Firefox/i.test(navigator.userAgent);

    function Re(e, t, n) { var i = Ae(e, function(e) { return e.name === t }),
            a = !!i && e.some(function(e) { return e.name === n && e.enabled && e.order < i.order }); if (!a) { var r = "`" + t + "`",
                o = "`" + n + "`";
            console.warn(o + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!") } return a } var Ye = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        We = Ye.slice(3);

    function Fe(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = We.indexOf(e),
            i = We.slice(n + 1).concat(We.slice(0, n)); return t ? i.reverse() : i } var je = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function(e) { var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1]; if (i) { var a = e.offsets,
                                r = a.reference,
                                o = a.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                u = s ? "width" : "height",
                                d = { start: ve({}, l, r[l]), end: ve({}, l, r[l] + r[u] - o[u]) };
                            e.offsets.popper = ye({}, o, d[i]) } return e } }, offset: { order: 200, enabled: !0, fn: function(e, t) { var n, i = t.offset,
                            a = e.placement,
                            r = e.offsets,
                            o = r.popper,
                            s = r.reference,
                            l = a.split("-")[0]; return n = Ie(+i) ? [+i, 0] : function(e, t, n, i) { var a = [0, 0],
                                r = -1 !== ["right", "left"].indexOf(i),
                                o = e.split(/(\+|\-)/).map(function(e) { return e.trim() }),
                                s = o.indexOf(Ae(o, function(e) { return -1 !== e.search(/,|\s/) }));
                            o[s] && -1 === o[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."); var l = /\s*,\s*|\s+/,
                                u = -1 !== s ? [o.slice(0, s).concat([o[s].split(l)[0]]), [o[s].split(l)[1]].concat(o.slice(s + 1))] : [o]; return (u = u.map(function(e, i) { var a = (1 === i ? !r : r) ? "height" : "width",
                                    o = !1; return e.reduce(function(e, t) { return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t) }, []).map(function(e) { return function(e, t, n, i) { var a = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            r = +a[1],
                                            o = a[2]; if (!r) return e; if (0 !== o.indexOf("%")) return "vh" !== o && "vw" !== o ? r : ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r; var s = void 0; switch (o) {
                                            case "%p":
                                                s = n; break;
                                            case "%":
                                            case "%r":
                                            default:
                                                s = i } return _e(s)[t] / 100 * r }(e, a, t, n) }) })).forEach(function(e, t) { e.forEach(function(n, i) { Ie(n) && (a[t] += n * ("-" === e[i - 1] ? -1 : 1)) }) }), a }(i, o, s, l), "left" === l ? (o.top += n[0], o.left -= n[1]) : "right" === l ? (o.top += n[0], o.left += n[1]) : "top" === l ? (o.left += n[0], o.top -= n[1]) : "bottom" === l && (o.left += n[0], o.top += n[1]), e.popper = o, e }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(e, t) { var n = t.boundariesElement || ue(e.instance.popper);
                        e.instance.reference === n && (n = ue(n)); var i = Oe("transform"),
                            a = e.instance.popper.style,
                            r = a.top,
                            o = a.left,
                            s = a[i];
                        a.top = "", a.left = "", a[i] = ""; var l = Se(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        a.top = r, a.left = o, a[i] = s, t.boundaries = l; var u = t.priority,
                            d = e.offsets.popper,
                            c = { primary: function(e) { var n = d[e]; return d[e] < l[e] && !t.escapeWithReference && (n = Math.max(d[e], l[e])), ve({}, e, n) }, secondary: function(e) { var n = "right" === e ? "left" : "top",
                                        i = d[n]; return d[e] > l[e] && !t.escapeWithReference && (i = Math.min(d[n], l[e] - ("right" === e ? d.width : d.height))), ve({}, n, i) } }; return u.forEach(function(e) { var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            d = ye({}, d, c[t](e)) }), e.offsets.popper = d, e }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function(e) { var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            a = e.placement.split("-")[0],
                            r = Math.floor,
                            o = -1 !== ["top", "bottom"].indexOf(a),
                            s = o ? "right" : "bottom",
                            l = o ? "left" : "top",
                            u = o ? "width" : "height"; return n[s] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[u]), n[l] > r(i[s]) && (e.offsets.popper[l] = r(i[s])), e } }, arrow: { order: 500, enabled: !0, fn: function(e, t) { var n; if (!Re(e.instance.modifiers, "arrow", "keepTogether")) return e; var i = t.element; if ("string" == typeof i) { if (!(i = e.instance.popper.querySelector(i))) return e } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e; var a = e.placement.split("-")[0],
                            r = e.offsets,
                            o = r.popper,
                            s = r.reference,
                            l = -1 !== ["left", "right"].indexOf(a),
                            u = l ? "height" : "width",
                            d = l ? "Top" : "Left",
                            c = d.toLowerCase(),
                            f = l ? "left" : "top",
                            h = l ? "bottom" : "right",
                            p = Me(i)[u];
                        s[h] - p < o[c] && (e.offsets.popper[c] -= o[c] - (s[h] - p)), s[c] + p > o[h] && (e.offsets.popper[c] += s[c] + p - o[h]), e.offsets.popper = _e(e.offsets.popper); var g = s[c] + s[u] / 2 - p / 2,
                            m = ie(e.instance.popper),
                            v = parseFloat(m["margin" + d], 10),
                            y = parseFloat(m["border" + d + "Width"], 10),
                            _ = g - e.offsets.popper[c] - v - y; return _ = Math.max(Math.min(o[u] - p, _), 0), e.arrowElement = i, e.offsets.arrow = (ve(n = {}, c, Math.round(_)), ve(n, f, ""), n), e }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function(e, t) { if (Pe(e.instance.modifiers, "inner")) return e; if (e.flipped && e.placement === e.originalPlacement) return e; var n = Se(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            i = e.placement.split("-")[0],
                            a = Ce(i),
                            r = e.placement.split("-")[1] || "",
                            o = []; switch (t.behavior) {
                            case "flip":
                                o = [i, a]; break;
                            case "clockwise":
                                o = Fe(i); break;
                            case "counterclockwise":
                                o = Fe(i, !0); break;
                            default:
                                o = t.behavior } return o.forEach(function(s, l) { if (i !== s || o.length === l + 1) return e;
                            i = e.placement.split("-")[0], a = Ce(i); var u, d = e.offsets.popper,
                                c = e.offsets.reference,
                                f = Math.floor,
                                h = "left" === i && f(d.right) > f(c.left) || "right" === i && f(d.left) < f(c.right) || "top" === i && f(d.bottom) > f(c.top) || "bottom" === i && f(d.top) < f(c.bottom),
                                p = f(d.left) < f(n.left),
                                g = f(d.right) > f(n.right),
                                m = f(d.top) < f(n.top),
                                v = f(d.bottom) > f(n.bottom),
                                y = "left" === i && p || "right" === i && g || "top" === i && m || "bottom" === i && v,
                                _ = -1 !== ["top", "bottom"].indexOf(i),
                                b = !!t.flipVariations && (_ && "start" === r && p || _ && "end" === r && g || !_ && "start" === r && m || !_ && "end" === r && v);
                            (h || y || b) && (e.flipped = !0, (h || y) && (i = o[l + 1]), b && (r = "end" === (u = r) ? "start" : "start" === u ? "end" : u), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = ye({}, e.offsets.popper, De(e.instance.popper, e.offsets.reference, e.placement)), e = Ee(e.instance.modifiers, e, "flip")) }), e }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function(e) { var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            a = i.popper,
                            r = i.reference,
                            o = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n); return a[o ? "left" : "top"] = r[n] - (s ? a[o ? "width" : "height"] : 0), e.placement = Ce(t), e.offsets.popper = _e(a), e } }, hide: { order: 800, enabled: !0, fn: function(e) { if (!Re(e.instance.modifiers, "hide", "preventOverflow")) return e; var t = e.offsets.reference,
                            n = Ae(e.instance.modifiers, function(e) { return "preventOverflow" === e.name }).boundaries; if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) { if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = "" } else { if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function(e, t) { var n = t.x,
                            i = t.y,
                            a = e.offsets.popper,
                            r = Ae(e.instance.modifiers, function(e) { return "applyStyle" === e.name }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"); var o, s, l, u, d, c, f, h, p, g, m, v, y, _, b, w, x = void 0 !== r ? r : t.gpuAcceleration,
                            S = ue(e.instance.popper),
                            k = be(S),
                            T = { position: a.position },
                            M = (o = e, s = window.devicePixelRatio < 2 || !He, u = (l = o.offsets).popper, d = l.reference, c = Math.round, f = Math.floor, h = function(e) { return e }, p = c(d.width), g = c(u.width), m = -1 !== ["left", "right"].indexOf(o.placement), v = -1 !== o.placement.indexOf("-"), _ = s ? c : h, { left: (y = s ? m || v || p % 2 == g % 2 ? c : f : h)(p % 2 == 1 && g % 2 == 1 && !v && s ? u.left - 1 : u.left), top: _(u.top), bottom: _(u.bottom), right: y(u.right) }),
                            C = "bottom" === n ? "top" : "bottom",
                            D = "right" === i ? "left" : "right",
                            A = Oe("transform"); if (w = "bottom" === C ? "HTML" === S.nodeName ? -S.clientHeight + M.bottom : -k.height + M.bottom : M.top, b = "right" === D ? "HTML" === S.nodeName ? -S.clientWidth + M.right : -k.width + M.right : M.left, x && A) T[A] = "translate3d(" + b + "px, " + w + "px, 0)", T[C] = 0, T[D] = 0, T.willChange = "transform";
                        else { var E = "bottom" === C ? -1 : 1,
                                P = "right" === D ? -1 : 1;
                            T[C] = w * E, T[D] = b * P, T.willChange = C + ", " + D } var O = { "x-placement": e.placement }; return e.attributes = ye({}, O, e.attributes), e.styles = ye({}, T, e.styles), e.arrowStyles = ye({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function(e) { var t, n; return Ne(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {!1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e) }), e.arrowElement && Object.keys(e.arrowStyles).length && Ne(e.arrowElement, e.arrowStyles), e }, onLoad: function(e, t, n, i, a) { var r = Te(a, t, e, n.positionFixed),
                            o = ke(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding); return t.setAttribute("x-placement", o), Ne(t, { position: n.positionFixed ? "fixed" : "absolute" }), n }, gpuAcceleration: void 0 } } },
        ze = function() {
            function e(t, n) { var i = this,
                    a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};! function(t, n) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this), this.scheduleUpdate = function() { return requestAnimationFrame(i.update) }, this.update = te(this.update.bind(this)), this.options = ye({}, e.Defaults, a), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(ye({}, e.Defaults.modifiers, a.modifiers)).forEach(function(t) { i.options.modifiers[t] = ye({}, e.Defaults.modifiers[t] || {}, a.modifiers ? a.modifiers[t] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) { return ye({ name: e }, i.options.modifiers[e]) }).sort(function(e, t) { return e.order - t.order }), this.modifiers.forEach(function(e) { e.enabled && ne(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state) }), this.update(); var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r } return me(e, [{ key: "update", value: function() { return function() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                            e.offsets.reference = Te(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = ke(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = De(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = Ee(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } }.call(this) } }, { key: "destroy", value: function() { return function() { return this.state.isDestroyed = !0, Pe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Oe("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function() { return function() { this.state.eventsEnabled || (this.state = function(e, t, n, i) { n.updateBound = i, Le(e).addEventListener("resize", n.updateBound, { passive: !0 }); var a = re(e); return function e(t, n, i, a) { var r = "BODY" === t.nodeName,
                                    o = r ? t.ownerDocument.defaultView : t;
                                o.addEventListener(n, i, { passive: !0 }), r || e(re(o.parentNode), n, i, a), a.push(o) }(a, "scroll", n.updateBound, n.scrollParents), n.scrollElement = a, n.eventsEnabled = !0, n }(this.reference, this.options, this.state, this.scheduleUpdate)) }.call(this) } }, { key: "disableEventListeners", value: function() { return function() { var e, t;
                        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, Le(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) { e.removeEventListener("scroll", t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t)) }.call(this) } }]), e }();
    ze.Utils = ("undefined" != typeof window ? window : global).PopperUtils, ze.placements = Ye, ze.Defaults = je; var Be = "dropdown",
        qe = "bs.dropdown",
        $e = "." + qe,
        Ve = ".data-api",
        Ue = t.fn[Be],
        Xe = new RegExp("38|40|27"),
        Ge = { HIDE: "hide" + $e, HIDDEN: "hidden" + $e, SHOW: "show" + $e, SHOWN: "shown" + $e, CLICK: "click" + $e, CLICK_DATA_API: "click" + $e + Ve, KEYDOWN_DATA_API: "keydown" + $e + Ve, KEYUP_DATA_API: "keyup" + $e + Ve },
        Ke = "disabled",
        Ze = "show",
        Qe = "dropdown-menu-right",
        Je = '[data-toggle="dropdown"]',
        et = ".dropdown-menu",
        tt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        nt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        it = function() {
            function e(e, t) { this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var n = e.prototype; return n.toggle = function() { if (!this._element.disabled && !t(this._element).hasClass(Ke)) { var n = e._getParentFromElement(this._element),
                        i = t(this._menu).hasClass(Ze); if (e._clearMenus(), !i) { var a = { relatedTarget: this._element },
                            r = t.Event(Ge.SHOW, a); if (t(n).trigger(r), !r.isDefaultPrevented()) { if (!this._inNavbar) { if (void 0 === ze) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var s = this._element; "parent" === this._config.reference ? s = n : o.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(n).addClass("position-static"), this._popper = new ze(s, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === t(n).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(Ze), t(n).toggleClass(Ze).trigger(t.Event(Ge.SHOWN, a)) } } } }, n.show = function() { if (!(this._element.disabled || t(this._element).hasClass(Ke) || t(this._menu).hasClass(Ze))) { var n = { relatedTarget: this._element },
                        i = t.Event(Ge.SHOW, n),
                        a = e._getParentFromElement(this._element);
                    t(a).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(Ze), t(a).toggleClass(Ze).trigger(t.Event(Ge.SHOWN, n))) } }, n.hide = function() { if (!this._element.disabled && !t(this._element).hasClass(Ke) && t(this._menu).hasClass(Ze)) { var n = { relatedTarget: this._element },
                        i = t.Event(Ge.HIDE, n),
                        a = e._getParentFromElement(this._element);
                    t(a).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(Ze), t(a).toggleClass(Ze).trigger(t.Event(Ge.HIDDEN, n))) } }, n.dispose = function() { t.removeData(this._element, qe), t(this._element).off($e), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, n.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, n._addEventListeners = function() { var e = this;
                t(this._element).on(Ge.CLICK, function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() }) }, n._getConfig = function(e) { return e = a({}, this.constructor.Default, t(this._element).data(), e), o.typeCheckConfig(Be, e, this.constructor.DefaultType), e }, n._getMenuElement = function() { if (!this._menu) { var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(et)) } return this._menu }, n._getPlacement = function() { var e = t(this._element.parentNode),
                    n = "bottom-start"; return e.hasClass("dropup") ? (n = "top-start", t(this._menu).hasClass(Qe) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(Qe) && (n = "bottom-end"), n }, n._detectNavbar = function() { return 0 < t(this._element).closest(".navbar").length }, n._getOffset = function() { var e = this,
                    t = {}; return "function" == typeof this._config.offset ? t.fn = function(t) { return t.offsets = a({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t } : t.offset = this._config.offset, t }, n._getPopperConfig = function() { var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), e }, e._jQueryInterface = function(n) { return this.each(function() { var i = t(this).data(qe); if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data(qe, i)), "string" == typeof n) { if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]() } }) }, e._clearMenus = function(n) { if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                    for (var i = [].slice.call(document.querySelectorAll(Je)), a = 0, r = i.length; a < r; a++) { var o = e._getParentFromElement(i[a]),
                            s = t(i[a]).data(qe),
                            l = { relatedTarget: i[a] }; if (n && "click" === n.type && (l.clickEvent = n), s) { var u = s._menu; if (t(o).hasClass(Ze) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(o, n.target))) { var d = t.Event(Ge.HIDE, l);
                                t(o).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[a].setAttribute("aria-expanded", "false"), t(u).removeClass(Ze), t(o).removeClass(Ze).trigger(t.Event(Ge.HIDDEN, l))) } } } }, e._getParentFromElement = function(e) { var t, n = o.getSelectorFromElement(e); return n && (t = document.querySelector(n)), t || e.parentNode }, e._dataApiKeydownHandler = function(n) { if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(et).length)) : Xe.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(Ke))) { var i = e._getParentFromElement(this),
                        a = t(i).hasClass(Ze); if (a && (!a || 27 !== n.which && 32 !== n.which)) { var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")); if (0 !== r.length) { var o = r.indexOf(n.target);
                            38 === n.which && 0 < o && o--, 40 === n.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus() } } else { if (27 === n.which) { var s = i.querySelector(Je);
                            t(s).trigger("focus") } t(this).trigger("click") } } }, i(e, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return tt } }, { key: "DefaultType", get: function() { return nt } }]), e }();
    t(document).on(Ge.KEYDOWN_DATA_API, Je, it._dataApiKeydownHandler).on(Ge.KEYDOWN_DATA_API, et, it._dataApiKeydownHandler).on(Ge.CLICK_DATA_API + " " + Ge.KEYUP_DATA_API, it._clearMenus).on(Ge.CLICK_DATA_API, Je, function(e) { e.preventDefault(), e.stopPropagation(), it._jQueryInterface.call(t(this), "toggle") }).on(Ge.CLICK_DATA_API, ".dropdown form", function(e) { e.stopPropagation() }), t.fn[Be] = it._jQueryInterface, t.fn[Be].Constructor = it, t.fn[Be].noConflict = function() { return t.fn[Be] = Ue, it._jQueryInterface }; var at = "modal",
        rt = "bs.modal",
        ot = "." + rt,
        st = t.fn[at],
        lt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        ut = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        dt = { HIDE: "hide" + ot, HIDDEN: "hidden" + ot, SHOW: "show" + ot, SHOWN: "shown" + ot, FOCUSIN: "focusin" + ot, RESIZE: "resize" + ot, CLICK_DISMISS: "click.dismiss" + ot, KEYDOWN_DISMISS: "keydown.dismiss" + ot, MOUSEUP_DISMISS: "mouseup.dismiss" + ot, MOUSEDOWN_DISMISS: "mousedown.dismiss" + ot, CLICK_DATA_API: "click" + ot + ".data-api" },
        ct = "modal-open",
        ft = "fade",
        ht = "show",
        pt = ".modal-dialog",
        gt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        mt = ".sticky-top",
        vt = function() {
            function e(e, t) { this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(pt), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 } var n = e.prototype; return n.toggle = function(e) { return this._isShown ? this.hide() : this.show(e) }, n.show = function(e) { var n = this; if (!this._isShown && !this._isTransitioning) { t(this._element).hasClass(ft) && (this._isTransitioning = !0); var i = t.Event(dt.SHOW, { relatedTarget: e });
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(dt.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) { return n.hide(e) }), t(this._dialog).on(dt.MOUSEDOWN_DISMISS, function() { t(n._element).one(dt.MOUSEUP_DISMISS, function(e) { t(e.target).is(n._element) && (n._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return n._showElement(e) })) } }, n.hide = function(e) { var n = this; if (e && e.preventDefault(), this._isShown && !this._isTransitioning) { var i = t.Event(dt.HIDE); if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) { this._isShown = !1; var a = t(this._element).hasClass(ft); if (a && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(dt.FOCUSIN), t(this._element).removeClass(ht), t(this._element).off(dt.CLICK_DISMISS), t(this._dialog).off(dt.MOUSEDOWN_DISMISS), a) { var r = o.getTransitionDurationFromElement(this._element);
                            t(this._element).one(o.TRANSITION_END, function(e) { return n._hideModal(e) }).emulateTransitionEnd(r) } else this._hideModal() } } }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) { return t(e).off(ot) }), t(document).off(dt.FOCUSIN), t.removeData(this._element, rt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, n.handleUpdate = function() { this._adjustDialog() }, n._getConfig = function(e) { return e = a({}, lt, e), o.typeCheckConfig(at, e, ut), e }, n._showElement = function(e) { var n = this,
                    i = t(this._element).hasClass(ft);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, i && o.reflow(this._element), t(this._element).addClass(ht), this._config.focus && this._enforceFocus(); var a = t.Event(dt.SHOWN, { relatedTarget: e }),
                    r = function() { n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(a) }; if (i) { var s = o.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(o.TRANSITION_END, r).emulateTransitionEnd(s) } else r() }, n._enforceFocus = function() { var e = this;
                t(document).off(dt.FOCUSIN).on(dt.FOCUSIN, function(n) { document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus() }) }, n._setEscapeEvent = function() { var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(dt.KEYDOWN_DISMISS, function(t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || t(this._element).off(dt.KEYDOWN_DISMISS) }, n._setResizeEvent = function() { var e = this;
                this._isShown ? t(window).on(dt.RESIZE, function(t) { return e.handleUpdate(t) }) : t(window).off(dt.RESIZE) }, n._hideModal = function() { var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() { t(document.body).removeClass(ct), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(dt.HIDDEN) }) }, n._removeBackdrop = function() { this._backdrop && (t(this._backdrop).remove(), this._backdrop = null) }, n._showBackdrop = function(e) { var n = this,
                    i = t(this._element).hasClass(ft) ? ft : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(dt.CLICK_DISMISS, function(e) { n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()) }), i && o.reflow(this._backdrop), t(this._backdrop).addClass(ht), !e) return; if (!i) return void e(); var a = o.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(o.TRANSITION_END, e).emulateTransitionEnd(a) } else if (!this._isShown && this._backdrop) { t(this._backdrop).removeClass(ht); var r = function() { n._removeBackdrop(), e && e() }; if (t(this._element).hasClass(ft)) { var s = o.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(o.TRANSITION_END, r).emulateTransitionEnd(s) } else r() } else e && e() }, n._adjustDialog = function() { var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, n._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, n._checkScrollbar = function() { var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, n._setScrollbar = function() { var e = this; if (this._isBodyOverflowing) { var n = [].slice.call(document.querySelectorAll(gt)),
                        i = [].slice.call(document.querySelectorAll(mt));
                    t(n).each(function(n, i) { var a = i.style.paddingRight,
                            r = t(i).css("padding-right");
                        t(i).data("padding-right", a).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px") }), t(i).each(function(n, i) { var a = i.style.marginRight,
                            r = t(i).css("margin-right");
                        t(i).data("margin-right", a).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px") }); var a = document.body.style.paddingRight,
                        r = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", a).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px") } t(document.body).addClass(ct) }, n._resetScrollbar = function() { var e = [].slice.call(document.querySelectorAll(gt));
                t(e).each(function(e, n) { var i = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = i || "" }); var n = [].slice.call(document.querySelectorAll("" + mt));
                t(n).each(function(e, n) { var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right") }); var i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || "" }, n._getScrollbarWidth = function() { var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e); var t = e.getBoundingClientRect().width - e.clientWidth; return document.body.removeChild(e), t }, e._jQueryInterface = function(n, i) { return this.each(function() { var r = t(this).data(rt),
                        o = a({}, lt, t(this).data(), "object" == typeof n && n ? n : {}); if (r || (r = new e(this, o), t(this).data(rt, r)), "string" == typeof n) { if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](i) } else o.show && r.show(i) }) }, i(e, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return lt } }]), e }();
    t(document).on(dt.CLICK_DATA_API, '[data-toggle="modal"]', function(e) { var n, i = this,
            r = o.getSelectorFromElement(this);
        r && (n = document.querySelector(r)); var s = t(n).data(rt) ? "toggle" : a({}, t(n).data(), t(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(); var l = t(n).one(dt.SHOW, function(e) { e.isDefaultPrevented() || l.one(dt.HIDDEN, function() { t(i).is(":visible") && i.focus() }) });
        vt._jQueryInterface.call(t(n), s, this) }), t.fn[at] = vt._jQueryInterface, t.fn[at].Constructor = vt, t.fn[at].noConflict = function() { return t.fn[at] = st, vt._jQueryInterface }; var yt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        _t = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        bt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function wt(e, t, n) { if (0 === e.length) return e; if (n && "function" == typeof n) return n(e); for (var i = (new window.DOMParser).parseFromString(e, "text/html"), a = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), o = function(e, n) { var i = r[e],
                    o = i.nodeName.toLowerCase(); if (-1 === a.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue"; var s = [].slice.call(i.attributes),
                    l = [].concat(t["*"] || [], t[o] || []);
                s.forEach(function(e) {
                    (function(e, t) { var n = e.nodeName.toLowerCase(); if (-1 !== t.indexOf(n)) return -1 === yt.indexOf(n) || Boolean(e.nodeValue.match(_t) || e.nodeValue.match(bt)); for (var i = t.filter(function(e) { return e instanceof RegExp }), a = 0, r = i.length; a < r; a++)
                            if (n.match(i[a])) return !0; return !1 })(e, l) || i.removeAttribute(e.nodeName) }) }, s = 0, l = r.length; s < l; s++) o(s); return i.body.innerHTML } var xt = "tooltip",
        St = "bs.tooltip",
        kt = "." + St,
        Tt = t.fn[xt],
        Mt = "bs-tooltip",
        Ct = new RegExp("(^|\\s)" + Mt + "\\S+", "g"),
        Dt = ["sanitize", "whiteList", "sanitizeFn"],
        At = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" },
        Et = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Pt = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] } },
        Ot = "show",
        Lt = { HIDE: "hide" + kt, HIDDEN: "hidden" + kt, SHOW: "show" + kt, SHOWN: "shown" + kt, INSERTED: "inserted" + kt, CLICK: "click" + kt, FOCUSIN: "focusin" + kt, FOCUSOUT: "focusout" + kt, MOUSEENTER: "mouseenter" + kt, MOUSELEAVE: "mouseleave" + kt },
        It = "fade",
        Nt = "show",
        Ht = "hover",
        Rt = "focus",
        Yt = function() {
            function e(e, t) { if (void 0 === ze) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners() } var n = e.prototype; return n.enable = function() { this._isEnabled = !0 }, n.disable = function() { this._isEnabled = !1 }, n.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, n.toggle = function(e) { if (this._isEnabled)
                    if (e) { var n = this.constructor.DATA_KEY,
                            i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i) }
                else { if (t(this.getTipElement()).hasClass(Nt)) return void this._leave(null, this);
                    this._enter(null, this) } }, n.dispose = function() { clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, n.show = function() { var e = this; if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements"); var n = t.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { t(this.element).trigger(n); var i = o.findShadowRoot(this.element),
                        a = t.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element); if (n.isDefaultPrevented() || !a) return; var r = this.getTipElement(),
                        s = o.getUID(this.constructor.NAME);
                    r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(r).addClass(It); var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        u = this._getAttachment(l);
                    this.addAttachmentClass(u); var d = this._getContainer();
                    t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new ze(this.element, r, { placement: u, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { return e._handlePopperPlacementChange(t) } }), t(r).addClass(Nt), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop); var c = function() { e.config.animation && e._fixTransition(); var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e) }; if (t(this.tip).hasClass(It)) { var f = o.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(o.TRANSITION_END, c).emulateTransitionEnd(f) } else c() } }, n.hide = function(e) { var n = this,
                    i = this.getTipElement(),
                    a = t.Event(this.constructor.Event.HIDE),
                    r = function() { n._hoverState !== Ot && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e() }; if (t(this.element).trigger(a), !a.isDefaultPrevented()) { if (t(i).removeClass(Nt), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[Rt] = !1, this._activeTrigger[Ht] = !1, t(this.tip).hasClass(It)) { var s = o.getTransitionDurationFromElement(i);
                        t(i).one(o.TRANSITION_END, r).emulateTransitionEnd(s) } else r();
                    this._hoverState = "" } }, n.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, n.isWithContent = function() { return Boolean(this.getTitle()) }, n.addAttachmentClass = function(e) { t(this.getTipElement()).addClass(Mt + "-" + e) }, n.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, n.setContent = function() { var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass(It + " " + Nt) }, n.setElementContent = function(e, n) { "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = wt(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) }, n.getTitle = function() { var e = this.element.getAttribute("data-original-title"); return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e }, n._getOffset = function() { var e = this,
                    t = {}; return "function" == typeof this.config.offset ? t.fn = function(t) { return t.offsets = a({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t } : t.offset = this.config.offset, t }, n._getContainer = function() { return !1 === this.config.container ? document.body : o.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container) }, n._getAttachment = function(e) { return Et[e.toUpperCase()] }, n._setListeners = function() { var e = this;
                this.config.trigger.split(" ").forEach(function(n) { if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) { return e.toggle(t) });
                    else if ("manual" !== n) { var i = n === Ht ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            a = n === Ht ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function(t) { return e._enter(t) }).on(a, e.config.selector, function(t) { return e._leave(t) }) } }), t(this.element).closest(".modal").on("hide.bs.modal", function() { e.element && e.hide() }), this.config.selector ? this.config = a({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, n._fixTitle = function() { var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, n._enter = function(e, n) { var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? Rt : Ht] = !0), t(n.getTipElement()).hasClass(Nt) || n._hoverState === Ot ? n._hoverState = Ot : (clearTimeout(n._timeout), n._hoverState = Ot, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() { n._hoverState === Ot && n.show() }, n.config.delay.show) : n.show()) }, n._leave = function(e, n) { var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? Rt : Ht] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() { "out" === n._hoverState && n.hide() }, n.config.delay.hide) : n.hide()) }, n._isWithActiveTrigger = function() { for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0; return !1 }, n._getConfig = function(e) { var n = t(this.element).data(); return Object.keys(n).forEach(function(e) {-1 !== Dt.indexOf(e) && delete n[e] }), "number" == typeof(e = a({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), o.typeCheckConfig(xt, e, this.constructor.DefaultType), e.sanitize && (e.template = wt(e.template, e.whiteList, e.sanitizeFn)), e }, n._getDelegateConfig = function() { var e = {}; if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]); return e }, n._cleanTipClass = function() { var e = t(this.getTipElement()),
                    n = e.attr("class").match(Ct);
                null !== n && n.length && e.removeClass(n.join("")) }, n._handlePopperPlacementChange = function(e) { var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement)) }, n._fixTransition = function() { var e = this.getTipElement(),
                    n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(It), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n) }, e._jQueryInterface = function(n) { return this.each(function() { var i = t(this).data(St),
                        a = "object" == typeof n && n; if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, a), t(this).data(St, i)), "string" == typeof n)) { if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]() } }) }, i(e, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return Pt } }, { key: "NAME", get: function() { return xt } }, { key: "DATA_KEY", get: function() { return St } }, { key: "Event", get: function() { return Lt } }, { key: "EVENT_KEY", get: function() { return kt } }, { key: "DefaultType", get: function() { return At } }]), e }();
    t.fn[xt] = Yt._jQueryInterface, t.fn[xt].Constructor = Yt, t.fn[xt].noConflict = function() { return t.fn[xt] = Tt, Yt._jQueryInterface }; var Wt = "popover",
        Ft = "bs.popover",
        jt = "." + Ft,
        zt = t.fn[Wt],
        Bt = "bs-popover",
        qt = new RegExp("(^|\\s)" + Bt + "\\S+", "g"),
        $t = a({}, Yt.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        Vt = a({}, Yt.DefaultType, { content: "(string|element|function)" }),
        Ut = { HIDE: "hide" + jt, HIDDEN: "hidden" + jt, SHOW: "show" + jt, SHOWN: "shown" + jt, INSERTED: "inserted" + jt, CLICK: "click" + jt, FOCUSIN: "focusin" + jt, FOCUSOUT: "focusout" + jt, MOUSEENTER: "mouseenter" + jt, MOUSELEAVE: "mouseleave" + jt },
        Xt = function(e) { var n, a;

            function r() { return e.apply(this, arguments) || this } a = e, (n = r).prototype = Object.create(a.prototype), (n.prototype.constructor = n).__proto__ = a; var o = r.prototype; return o.isWithContent = function() { return this.getTitle() || this._getContent() }, o.addAttachmentClass = function(e) { t(this.getTipElement()).addClass(Bt + "-" + e) }, o.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, o.setContent = function() { var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle()); var n = this._getContent(); "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show") }, o._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, o._cleanTipClass = function() { var e = t(this.getTipElement()),
                    n = e.attr("class").match(qt);
                null !== n && 0 < n.length && e.removeClass(n.join("")) }, r._jQueryInterface = function(e) { return this.each(function() { var n = t(this).data(Ft),
                        i = "object" == typeof e ? e : null; if ((n || !/dispose|hide/.test(e)) && (n || (n = new r(this, i), t(this).data(Ft, n)), "string" == typeof e)) { if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]() } }) }, i(r, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return $t } }, { key: "NAME", get: function() { return Wt } }, { key: "DATA_KEY", get: function() { return Ft } }, { key: "Event", get: function() { return Ut } }, { key: "EVENT_KEY", get: function() { return jt } }, { key: "DefaultType", get: function() { return Vt } }]), r }(Yt);
    t.fn[Wt] = Xt._jQueryInterface, t.fn[Wt].Constructor = Xt, t.fn[Wt].noConflict = function() { return t.fn[Wt] = zt, Xt._jQueryInterface }; var Gt = "scrollspy",
        Kt = "bs.scrollspy",
        Zt = "." + Kt,
        Qt = t.fn[Gt],
        Jt = { offset: 10, method: "auto", target: "" },
        en = { offset: "number", method: "string", target: "(string|element)" },
        tn = { ACTIVATE: "activate" + Zt, SCROLL: "scroll" + Zt, LOAD_DATA_API: "load" + Zt + ".data-api" },
        nn = "active",
        an = ".nav, .list-group",
        rn = ".nav-link",
        on = ".list-group-item",
        sn = ".dropdown-item",
        ln = "position",
        un = function() {
            function e(e, n) { var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + rn + "," + this._config.target + " " + on + "," + this._config.target + " " + sn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(tn.SCROLL, function(e) { return i._process(e) }), this.refresh(), this._process() } var n = e.prototype; return n.refresh = function() { var e = this,
                    n = this._scrollElement === this._scrollElement.window ? "offset" : ln,
                    i = "auto" === this._config.method ? n : this._config.method,
                    a = i === ln ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) { var n, r = o.getSelectorFromElement(e); if (r && (n = document.querySelector(r)), n) { var s = n.getBoundingClientRect(); if (s.width || s.height) return [t(n)[i]().top + a, r] } return null }).filter(function(e) { return e }).sort(function(e, t) { return e[0] - t[0] }).forEach(function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) }) }, n.dispose = function() { t.removeData(this._element, Kt), t(this._scrollElement).off(Zt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, n._getConfig = function(e) { if ("string" != typeof(e = a({}, Jt, "object" == typeof e && e ? e : {})).target) { var n = t(e.target).attr("id");
                    n || (n = o.getUID(Gt), t(e.target).attr("id", n)), e.target = "#" + n } return o.typeCheckConfig(Gt, e, en), e }, n._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, n._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, n._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, n._process = function() { var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight(); if (this._scrollHeight !== t && this.refresh(), n <= e) { var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var a = this._offsets.length; a--;) this._activeTarget !== this._targets[a] && e >= this._offsets[a] && (void 0 === this._offsets[a + 1] || e < this._offsets[a + 1]) && this._activate(this._targets[a]) } }, n._activate = function(e) { this._activeTarget = e, this._clear(); var n = this._selector.split(",").map(function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }),
                    i = t([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(nn), i.addClass(nn)) : (i.addClass(nn), i.parents(an).prev(rn + ", " + on).addClass(nn), i.parents(an).prev(".nav-item").children(rn).addClass(nn)), t(this._scrollElement).trigger(tn.ACTIVATE, { relatedTarget: e }) }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) { return e.classList.contains(nn) }).forEach(function(e) { return e.classList.remove(nn) }) }, e._jQueryInterface = function(n) { return this.each(function() { var i = t(this).data(Kt); if (i || (i = new e(this, "object" == typeof n && n), t(this).data(Kt, i)), "string" == typeof n) { if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]() } }) }, i(e, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return Jt } }]), e }();
    t(window).on(tn.LOAD_DATA_API, function() { for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) { var i = t(e[n]);
            un._jQueryInterface.call(i, i.data()) } }), t.fn[Gt] = un._jQueryInterface, t.fn[Gt].Constructor = un, t.fn[Gt].noConflict = function() { return t.fn[Gt] = Qt, un._jQueryInterface }; var dn = "bs.tab",
        cn = "." + dn,
        fn = t.fn.tab,
        hn = { HIDE: "hide" + cn, HIDDEN: "hidden" + cn, SHOW: "show" + cn, SHOWN: "shown" + cn, CLICK_DATA_API: "click" + cn + ".data-api" },
        pn = "active",
        gn = ".active",
        mn = "> li > .active",
        vn = function() {
            function e(e) { this._element = e } var n = e.prototype; return n.show = function() { var e = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(pn) || t(this._element).hasClass("disabled"))) { var n, i, a = t(this._element).closest(".nav, .list-group")[0],
                        r = o.getSelectorFromElement(this._element); if (a) { var s = "UL" === a.nodeName || "OL" === a.nodeName ? mn : gn;
                        i = (i = t.makeArray(t(a).find(s)))[i.length - 1] } var l = t.Event(hn.HIDE, { relatedTarget: this._element }),
                        u = t.Event(hn.SHOW, { relatedTarget: i }); if (i && t(i).trigger(l), t(this._element).trigger(u), !u.isDefaultPrevented() && !l.isDefaultPrevented()) { r && (n = document.querySelector(r)), this._activate(this._element, a); var d = function() { var n = t.Event(hn.HIDDEN, { relatedTarget: e._element }),
                                a = t.Event(hn.SHOWN, { relatedTarget: i });
                            t(i).trigger(n), t(e._element).trigger(a) };
                        n ? this._activate(n, n.parentNode, d) : d() } } }, n.dispose = function() { t.removeData(this._element, dn), this._element = null }, n._activate = function(e, n, i) { var a = this,
                    r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(gn) : t(n).find(mn))[0],
                    s = i && r && t(r).hasClass("fade"),
                    l = function() { return a._transitionComplete(e, r, i) }; if (r && s) { var u = o.getTransitionDurationFromElement(r);
                    t(r).removeClass("show").one(o.TRANSITION_END, l).emulateTransitionEnd(u) } else l() }, n._transitionComplete = function(e, n, i) { if (n) { t(n).removeClass(pn); var a = t(n.parentNode).find("> .dropdown-menu .active")[0];
                    a && t(a).removeClass(pn), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1) } if (t(e).addClass(pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), o.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) { var r = t(e).closest(".dropdown")[0]; if (r) { var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        t(s).addClass(pn) } e.setAttribute("aria-expanded", !0) } i && i() }, e._jQueryInterface = function(n) { return this.each(function() { var i = t(this),
                        a = i.data(dn); if (a || (a = new e(this), i.data(dn, a)), "string" == typeof n) { if (void 0 === a[n]) throw new TypeError('No method named "' + n + '"');
                        a[n]() } }) }, i(e, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), e }();
    t(document).on(hn.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) { e.preventDefault(), vn._jQueryInterface.call(t(this), "show") }), t.fn.tab = vn._jQueryInterface, t.fn.tab.Constructor = vn, t.fn.tab.noConflict = function() { return t.fn.tab = fn, vn._jQueryInterface }; var yn = "toast",
        _n = "bs.toast",
        bn = "." + _n,
        wn = t.fn[yn],
        xn = { CLICK_DISMISS: "click.dismiss" + bn, HIDE: "hide" + bn, HIDDEN: "hidden" + bn, SHOW: "show" + bn, SHOWN: "shown" + bn },
        Sn = "show",
        kn = "showing",
        Tn = { animation: "boolean", autohide: "boolean", delay: "number" },
        Mn = { animation: !0, autohide: !0, delay: 500 },
        Cn = function() {
            function e(e, t) { this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners() } var n = e.prototype; return n.show = function() { var e = this;
                t(this._element).trigger(xn.SHOW), this._config.animation && this._element.classList.add("fade"); var n = function() { e._element.classList.remove(kn), e._element.classList.add(Sn), t(e._element).trigger(xn.SHOWN), e._config.autohide && e.hide() }; if (this._element.classList.remove("hide"), this._element.classList.add(kn), this._config.animation) { var i = o.getTransitionDurationFromElement(this._element);
                    t(this._element).one(o.TRANSITION_END, n).emulateTransitionEnd(i) } else n() }, n.hide = function(e) { var n = this;
                this._element.classList.contains(Sn) && (t(this._element).trigger(xn.HIDE), e ? this._close() : this._timeout = setTimeout(function() { n._close() }, this._config.delay)) }, n.dispose = function() { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Sn) && this._element.classList.remove(Sn), t(this._element).off(xn.CLICK_DISMISS), t.removeData(this._element, _n), this._element = null, this._config = null }, n._getConfig = function(e) { return e = a({}, Mn, t(this._element).data(), "object" == typeof e && e ? e : {}), o.typeCheckConfig(yn, e, this.constructor.DefaultType), e }, n._setListeners = function() { var e = this;
                t(this._element).on(xn.CLICK_DISMISS, '[data-dismiss="toast"]', function() { return e.hide(!0) }) }, n._close = function() { var e = this,
                    n = function() { e._element.classList.add("hide"), t(e._element).trigger(xn.HIDDEN) }; if (this._element.classList.remove(Sn), this._config.animation) { var i = o.getTransitionDurationFromElement(this._element);
                    t(this._element).one(o.TRANSITION_END, n).emulateTransitionEnd(i) } else n() }, e._jQueryInterface = function(n) { return this.each(function() { var i = t(this),
                        a = i.data(_n); if (a || (a = new e(this, "object" == typeof n && n), i.data(_n, a)), "string" == typeof n) { if (void 0 === a[n]) throw new TypeError('No method named "' + n + '"');
                        a[n](this) } }) }, i(e, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "DefaultType", get: function() { return Tn } }, { key: "Default", get: function() { return Mn } }]), e }();
    t.fn[yn] = Cn._jQueryInterface, t.fn[yn].Constructor = Cn, t.fn[yn].noConflict = function() { return t.fn[yn] = wn, Cn._jQueryInterface },
        function() { if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(), e.Util = o, e.Alert = f, e.Button = x, e.Carousel = R, e.Collapse = K, e.Dropdown = it, e.Modal = vt, e.Popover = Xt, e.Scrollspy = un, e.Tab = vn, e.Toast = Cn, e.Tooltip = Yt, Object.defineProperty(e, "__esModule", { value: !0 }) }),
function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Amplitude", [], t) : "object" == typeof exports ? exports.Amplitude = t() : e.Amplitude = t() }(this, function() { return function(e) {
        function t(i) { if (n[i]) return n[i].exports; var a = n[i] = { i: i, l: !1, exports: {} }; return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports } var n = {}; return t.m = e, t.c = n, t.i = function(e) { return e }, t.d = function(e, n, i) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 47) }([function(e, t, n) { "use strict"; var i = n(59);
        e.exports = { version: i.version, audio: new Audio, active_metadata: {}, active_album: "", active_index: 0, active_playlist: null, playback_speed: 1, callbacks: {}, songs: [], playlists: {}, start_song: "", starting_playlist: "", starting_playlist_song: "", repeat: !1, repeat_song: !1, shuffle_list: {}, shuffle_on: !1, default_album_art: "", default_playlist_art: "", debug: !1, volume: .5, pre_mute_volume: .5, volume_increment: 5, volume_decrement: 5, soundcloud_client: "", soundcloud_use_art: !1, soundcloud_song_count: 0, soundcloud_songs_ready: 0, is_touch_moving: !1, buffered: 0, bindings: {}, continue_next: !0, delay: 0, player_state: "stopped", web_audio_api_available: !1, context: null, source: null, analyser: null, visualizations: { available: [], active: [], backup: "" }, waveforms: { sample_rate: 100, built: [] } } }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = (i(n(5)), n(3)),
            o = (i(r), n(2)),
            s = (i(o), n(8)),
            l = (i(s), n(7)),
            u = i(l),
            d = i(n(4)),
            c = i(n(16)),
            f = function() {
                function e() { a.default.audio.src = "", a.default.audio.load() }

                function t() { a.default.audio.src = a.default.active_metadata.url, a.default.audio.load() } return { play: function() { c.default.stop(), c.default.run(), a.default.active_metadata.live && t(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && !a.default.paused && t(), a.default.audio.play(), a.default.audio.playbackRate = a.default.playback_speed }, pause: function() { c.default.stop(), a.default.audio.pause(), a.default.paused = !0, a.default.active_metadata.live && e() }, stop: function() { c.default.stop(), 0 != a.default.audio.currentTime && (a.default.audio.currentTime = 0), a.default.audio.pause(), a.default.active_metadata.live && e(), u.default.run("stop") }, setVolume: function(e) { a.default.audio.muted = 0 == e, a.default.volume = e, a.default.audio.volume = e / 100 }, setSongLocation: function(e) { a.default.active_metadata.live || (a.default.audio.currentTime = a.default.audio.duration * (e / 100)) }, skipToLocation: function(e) { a.default.audio.addEventListener("canplaythrough", function() { a.default.audio.duration >= e && e > 0 ? a.default.audio.currentTime = e : d.default.writeMessage("Amplitude can't skip to a location greater than the duration of the audio or less than 0") }, { once: !0 }) }, disconnectStream: e, reconnectStream: t, setPlaybackSpeed: function(e) { a.default.playback_speed = e, a.default.audio.playbackRate = a.default.playback_speed } } }();
        t.default = f, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() {
                function e() { for (var e = i.default.audio.paused ? "paused" : "playing", t = document.querySelectorAll(".amplitude-play-pause"), n = 0; n < t.length; n++) { var a = t[n].getAttribute("data-amplitude-playlist"),
                            s = t[n].getAttribute("data-amplitude-song-index"); if (null == a && null == s) switch (e) {
                            case "playing":
                                r(t[n]); break;
                            case "paused":
                                o(t[n]) } } }

                function t() { for (var e = i.default.audio.paused ? "paused" : "playing", t = document.querySelectorAll('.amplitude-play-pause[data-amplitude-playlist="' + i.default.active_playlist + '"]'), n = 0; n < t.length; n++)
                        if (null == t[n].getAttribute("data-amplitude-song-index")) switch (e) {
                            case "playing":
                                r(t[n]); break;
                            case "paused":
                                o(t[n]) } }

                function n() { for (var e = i.default.audio.paused ? "paused" : "playing", t = document.querySelectorAll('.amplitude-play-pause[data-amplitude-song-index="' + i.default.active_index + '"]'), n = 0; n < t.length; n++)
                        if (null == t[n].getAttribute("data-amplitude-playlist")) switch (e) {
                            case "playing":
                                r(t[n]); break;
                            case "paused":
                                o(t[n]) } }

                function a() { for (var e = i.default.audio.paused ? "paused" : "playing", t = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, n = document.querySelectorAll('.amplitude-play-pause[data-amplitude-song-index="' + t + '"][data-amplitude-playlist="' + i.default.active_playlist + '"]'), a = 0; a < n.length; a++) switch (e) {
                        case "playing":
                            r(n[a]); break;
                        case "paused":
                            o(n[a]) } }

                function r(e) { e.classList.add("amplitude-playing"), e.classList.remove("amplitude-paused") }

                function o(e) { e.classList.remove("amplitude-playing"), e.classList.add("amplitude-paused") } return { sync: function() { e(), t(), n(), a() }, syncGlobal: e, syncPlaylist: t, syncSong: n, syncSongInPlaylist: a, syncToPause: function() { for (var e = document.querySelectorAll(".amplitude-play-pause"), t = 0; t < e.length; t++) o(e[t]) } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(1)),
            o = i(n(7)),
            s = i(n(5)),
            l = i(n(2)),
            u = i(n(14)),
            d = i(n(19)),
            c = i(n(15)),
            f = i(n(8)),
            h = i(n(49)),
            p = function() {
                function e(e, t) { n(e), a.default.audio.src = e.url, a.default.active_metadata = e, a.default.active_album = e.album, a.default.active_index = parseInt(t), i() }

                function t(e, t, r) { n(t), a.default.audio.src = t.url, a.default.active_metadata = t, a.default.active_album = t.album, a.default.active_index = null, a.default.playlists[e].active_index = parseInt(r), i() }

                function n(e) { r.default.stop(), l.default.syncToPause(), u.default.resetElements(), d.default.resetElements(), c.default.resetCurrentTimes(), s.default.newAlbum(e) && o.default.run("album_change") }

                function i() { f.default.displayMetaData(), h.default.setActive(), c.default.resetDurationTimes(), o.default.run("song_change") }

                function p(e) { a.default.active_playlist != e && (o.default.run("playlist_changed"), a.default.active_playlist = e, null != e && (a.default.playlists[e].active_index = 0)) } return { setNext: function() { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = null,
                            i = {},
                            s = !1;
                        a.default.repeat_song ? a.default.shuffle_on ? (n = a.default.active_index, i = a.default.shuffle_list[n]) : (n = a.default.active_index, i = a.default.songs[n]) : a.default.shuffle_on ? (parseInt(a.default.active_index) + 1 < a.default.shuffle_list.length ? n = parseInt(a.default.active_index) + 1 : (n = 0, s = !0), i = a.default.shuffle_list[n]) : (parseInt(a.default.active_index) + 1 < a.default.songs.length ? n = parseInt(a.default.active_index) + 1 : (n = 0, s = !0), i = a.default.songs[n]), e(i, n), s && !a.default.repeat || t && !a.default.repeat && s || r.default.play(), l.default.sync(), o.default.run("next"), a.default.repeat_song && o.default.run("song_repeated") }, setNextPlaylist: function(e) { var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = null,
                            s = {},
                            u = !1;
                        a.default.repeat_song ? a.default.playlists[e].shuffle ? (i = a.default.playlists[e].active_index, s = a.default.playlists[e].shuffle_list[i]) : (i = a.default.playlists[e].active_index, s = a.default.playlists[e].songs[i]) : a.default.playlists[e].shuffle ? (parseInt(a.default.playlists[e].active_index) + 1 < a.default.playlists[e].shuffle_list.length ? i = a.default.playlists[e].active_index + 1 : (i = 0, u = !0), s = a.default.playlists[e].shuffle_list[i]) : (parseInt(a.default.playlists[e].active_index) + 1 < a.default.playlists[e].songs.length ? i = parseInt(a.default.playlists[e].active_index) + 1 : (i = 0, u = !0), s = a.default.playlists[e].songs[i]), p(e), t(e, s, i), u && !a.default.repeat || n && !a.default.repeat && u || r.default.play(), l.default.sync(), o.default.run("next"), a.default.repeat_song && o.default.run("song_repeated") }, setPrevious: function() { var t = null,
                            n = {};
                        a.default.repeat_song ? a.default.shuffle_on ? (t = a.default.active_index, n = a.default.shuffle_list[t]) : (t = a.default.active_index, n = a.default.songs[t]) : (t = parseInt(a.default.active_index) - 1 >= 0 ? parseInt(a.default.active_index - 1) : parseInt(a.default.songs.length - 1), n = a.default.shuffle_on ? a.default.shuffle_list[t] : a.default.songs[t]), e(n, t), r.default.play(), l.default.sync(), o.default.run("prev"), a.default.repeat_song && o.default.run("song_repeated") }, setPreviousPlaylist: function(e) { var n = null,
                            i = {};
                        a.default.repeat_song ? a.default.playlists[e].shuffle ? (n = a.default.playlists[e].active_index, i = a.default.playlists[e].shuffle_list[n]) : (n = a.default.playlists[e].active_index, i = a.default.playlists[e].songs[n]) : (n = parseInt(a.default.playlists[e].active_index) - 1 >= 0 ? parseInt(a.default.playlists[e].active_index - 1) : parseInt(a.default.playlists[e].songs.length - 1), i = a.default.playlists[e].shuffle ? a.default.playlists[e].shuffle_list[n] : a.default.playlists[e].songs[n]), p(e), t(e, i, n), r.default.play(), l.default.sync(), o.default.run("prev"), a.default.repeat_song && o.default.run("song_repeated") }, changeSong: e, changeSongPlaylist: t, setActivePlaylist: p } }();
        t.default = p, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { writeMessage: function(e) { i.default.debug && console.log(e) } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { newSong: function(e, t) { return i.default.active_playlist != e || (null == i.default.active_playlist && null == e ? i.default.active_index != t : i.default.active_playlist == e && i.default.playlists[e].active_index != t) }, newAlbum: function(e) { return i.default.active_album != e }, newPlaylist: function(e) { return i.default.active_playlist != e }, isURL: function(e) { return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e) }, isInt: function(e) { return !isNaN(e) && parseInt(Number(e)) == e && !isNaN(parseInt(e, 10)) } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { resetConfig: function() { i.default.audio = new Audio, i.default.active_metadata = {}, i.default.active_album = "", i.default.active_index = 0, i.default.active_playlist = null, i.default.playback_speed = 1, i.default.callbacks = {}, i.default.songs = [], i.default.playlists = {}, i.default.start_song = "", i.default.starting_playlist = "", i.default.starting_playlist_song = "", i.default.repeat = !1, i.default.shuffle_list = {}, i.default.shuffle_on = !1, i.default.default_album_art = "", i.default.default_playlist_art = "", i.default.debug = !1, i.default.volume = .5, i.default.pre_mute_volume = .5, i.default.volume_increment = 5, i.default.volume_decrement = 5, i.default.soundcloud_client = "", i.default.soundcloud_use_art = !1, i.default.soundcloud_song_count = 0, i.default.soundcloud_songs_ready = 0, i.default.continue_next = !0 }, setPlayerState: function() { i.default.audio.paused && 0 == i.default.audio.currentTime && (i.default.player_state = "stopped"), i.default.audio.paused && i.default.audio.currentTime > 0 && (i.default.player_state = "paused"), i.default.audio.paused || (i.default.player_state = "playing") } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(4)),
            o = function() {
                function e(e) { if (a.default.callbacks[e]) { var t = a.default.callbacks[e];
                        r.default.writeMessage("Running Callback: " + e); try { t() } catch (e) { if ("CANCEL EVENT" == e.message) throw e;
                            r.default.writeMessage("Callback error: " + e.message) } } } return { initialize: function() { a.default.audio.addEventListener("abort", function() { e("abort") }), a.default.audio.addEventListener("error", function() { e("error") }), a.default.audio.addEventListener("loadeddata", function() { e("loadeddata") }), a.default.audio.addEventListener("loadedmetadata", function() { e("loadedmetadata") }), a.default.audio.addEventListener("loadstart", function() { e("loadstart") }), a.default.audio.addEventListener("pause", function() { e("pause") }), a.default.audio.addEventListener("playing", function() { e("playing") }), a.default.audio.addEventListener("play", function() { e("play") }), a.default.audio.addEventListener("progress", function() { e("progress") }), a.default.audio.addEventListener("ratechange", function() { e("ratechange") }), a.default.audio.addEventListener("seeked", function() { e("seeked") }), a.default.audio.addEventListener("seeking", function() { e("seeking") }), a.default.audio.addEventListener("stalled", function() { e("stalled") }), a.default.audio.addEventListener("suspend", function() { e("suspend") }), a.default.audio.addEventListener("timeupdate", function() { e("timeupdate") }), a.default.audio.addEventListener("volumechange", function() { e("volumechange") }), a.default.audio.addEventListener("waiting", function() { e("waiting") }), a.default.audio.addEventListener("canplay", function() { e("canplay") }), a.default.audio.addEventListener("canplaythrough", function() { e("canplaythrough") }), a.default.audio.addEventListener("durationchange", function() { e("durationchange") }), a.default.audio.addEventListener("ended", function() { e("ended") }) }, run: e } }();
        t.default = o, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() {
                function e() { for (var e = ["image_url"], t = document.querySelectorAll("[data-amplitude-playlist-info]"), n = 0; n < t.length; n++) { var a = t[n].getAttribute("data-amplitude-playlist-info"),
                            r = t[n].getAttribute("data-amplitude-playlist");
                        null != i.default.playlists[r][a] ? e.indexOf(a) >= 0 ? t[n].setAttribute("src", i.default.playlists[r][a]) : t[n].innerHTML = i.default.playlists[r][a] : e.indexOf(a) >= 0 ? "" != i.default.default_playlist_art ? t[n].setAttribute("src", i.default.default_playlist_art) : t[n].setAttribute("src", "") : t[n].innerHTML = "" } } return { displayMetaData: function() { for (var e = ["cover_art_url", "station_art_url", "podcast_episode_cover_art_url"], t = document.querySelectorAll("[data-amplitude-song-info]"), n = 0; n < t.length; n++) { var a = t[n].getAttribute("data-amplitude-song-info"),
                                r = t[n].getAttribute("data-amplitude-playlist"),
                                o = t[n].getAttribute("data-amplitude-song-index");
                            null == o && (i.default.active_playlist == r || null == r && null == o) && (null != i.default.active_metadata[a] ? e.indexOf(a) >= 0 ? t[n].setAttribute("src", i.default.active_metadata[a]) : t[n].innerHTML = i.default.active_metadata[a] : e.indexOf(a) >= 0 ? "" != i.default.default_album_art ? t[n].setAttribute("src", i.default.default_album_art) : t[n].setAttribute("src", "") : t[n].innerHTML = "") } }, setFirstSongInPlaylist: function(e, t) { for (var n = ["cover_art_url", "station_art_url", "podcast_episode_cover_art_url"], i = document.querySelectorAll('[data-amplitude-song-info][data-amplitude-playlist="' + t + '"]'), a = 0; a < i.length; a++) { var r = i[a].getAttribute("data-amplitude-song-info");
                            i[a].getAttribute("data-amplitude-playlist") == t && (null != e[r] ? n.indexOf(r) >= 0 ? i[a].setAttribute("src", e[r]) : i[a].innerHTML = e[r] : n.indexOf(r) >= 0 ? "" != e.default_album_art ? i[a].setAttribute("src", e.default_album_art) : i[a].setAttribute("src", "") : i[a].innerHTML = "") } }, syncMetaData: function() { for (var t = ["cover_art_url", "station_art_url", "podcast_episode_cover_art_url"], n = document.querySelectorAll("[data-amplitude-song-info]"), a = 0; a < n.length; a++) { var r = n[a].getAttribute("data-amplitude-song-index"),
                                o = n[a].getAttribute("data-amplitude-playlist"); if (null != r && null == o) { var s = n[a].getAttribute("data-amplitude-song-info");
                                null != i.default.songs[r][s] && (t.indexOf(s) >= 0 ? n[a].setAttribute("src", i.default.songs[r][s]) : n[a].innerHTML = i.default.songs[r][s]) } if (null != r && null != o) { var l = n[a].getAttribute("data-amplitude-song-info");
                                null != i.default.playlists[o].songs[r][l] && (t.indexOf(l) >= 0 ? n[a].setAttribute("src", i.default.playlists[o].songs[r][l]) : n[a].innerHTML = i.default.playlists[o].songs[r][l]) } } e() }, displayPlaylistMetaData: e } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { syncRepeat: function() { for (var e = document.getElementsByClassName("amplitude-repeat"), t = 0; t < e.length; t++) i.default.repeat ? (e[t].classList.add("amplitude-repeat-on"), e[t].classList.remove("amplitude-repeat-off")) : (e[t].classList.remove("amplitude-repeat-on"), e[t].classList.add("amplitude-repeat-off")) }, syncRepeatPlaylist: function(e) { for (var t = document.getElementsByClassName("amplitude-repeat"), n = 0; n < t.length; n++) t[n].getAttribute("data-amplitude-playlist") == e && (i.default.playlists[e].repeat ? (t[n].classList.add("amplitude-repeat-on"), t[n].classList.remove("amplitude-repeat-off")) : (t[n].classList.add("amplitude-repeat-off"), t[n].classList.remove("amplitude-repeat-on"))) }, syncRepeatSong: function() { for (var e = document.getElementsByClassName("amplitude-repeat-song"), t = 0; t < e.length; t++) i.default.repeat_song ? (e[t].classList.add("amplitude-repeat-song-on"), e[t].classList.remove("amplitude-repeat-song-off")) : (e[t].classList.remove("amplitude-repeat-song-on"), e[t].classList.add("amplitude-repeat-song-off")) } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function() { return { setMuted: function(e) { for (var t = document.getElementsByClassName("amplitude-mute"), n = 0; n < t.length; n++) e ? (t[n].classList.remove("amplitude-not-muted"), t[n].classList.add("amplitude-muted")) : (t[n].classList.add("amplitude-not-muted"), t[n].classList.remove("amplitude-muted")) } } }();
        t.default = i, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { sync: function() { for (var e = document.getElementsByClassName("amplitude-volume-slider"), t = 0; t < e.length; t++) e[t].value = 100 * i.default.audio.volume } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { setRepeat: function(e) { i.default.repeat = e }, setRepeatPlaylist: function(e, t) { i.default.playlists[t].repeat = e }, setRepeatSong: function(e) { i.default.repeat_song = e } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() {
                function e() { for (var e = new Array(i.default.songs.length), t = 0; t < i.default.songs.length; t++) e[t] = i.default.songs[t]; for (var a = i.default.songs.length - 1; a > 0; a--) n(e, a, Math.floor(Math.random() * i.default.songs.length + 1) - 1);
                    i.default.shuffle_list = e }

                function t(e) { for (var t = new Array(i.default.playlists[e].songs.length), a = 0; a < i.default.playlists[e].songs.length; a++) t[a] = i.default.playlists[e].songs[a]; for (var r = i.default.playlists[e].songs.length - 1; r > 0; r--) n(t, r, Math.floor(Math.random() * i.default.playlists[e].songs.length + 1) - 1);
                    i.default.playlists[e].shuffle_list = t }

                function n(e, t, n) { var i = e[t];
                    e[t] = e[n], e[n] = i } return { setShuffle: function(t) { i.default.shuffle_on = t, t ? e() : i.default.shuffle_list = [] }, toggleShuffle: function() { i.default.shuffle_on ? (i.default.shuffle_on = !1, i.default.shuffle_list = []) : (i.default.shuffle_on = !0, e()) }, setShufflePlaylist: function(e, n) { i.default.playlists[e].shuffle = n, i.default.playlists[e].shuffle ? t(e) : i.default.playlists[e].shuffle_list = [] }, toggleShufflePlaylist: function(e) { i.default.playlists[e].shuffle ? (i.default.playlists[e].shuffle = !1, i.default.playlists[e].shuffle_list = []) : (i.default.playlists[e].shuffle = !0, t(e)) }, shuffleSongs: e, shufflePlaylistSongs: t } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() {
                function e(e) { e = isNaN(e) ? 0 : e; for (var t = document.querySelectorAll(".amplitude-song-slider"), n = 0; n < t.length; n++) { var i = t[n].getAttribute("data-amplitude-playlist"),
                            a = t[n].getAttribute("data-amplitude-song-index");
                        null == i && null == a && (t[n].value = e) } }

                function t(e, t) { e = isNaN(e) ? 0 : e; for (var n = document.querySelectorAll('.amplitude-song-slider[data-amplitude-playlist="' + t + '"]'), i = 0; i < n.length; i++) { var a = n[i].getAttribute("data-amplitude-playlist"),
                            r = n[i].getAttribute("data-amplitude-song-index");
                        a == t && null == r && (n[i].value = e) } }

                function n(e, t) { if (null == i.default.active_playlist) { e = isNaN(e) ? 0 : e; for (var n = document.querySelectorAll('.amplitude-song-slider[data-amplitude-song-index="' + t + '"]'), a = 0; a < n.length; a++) { var r = n[a].getAttribute("data-amplitude-playlist"),
                                o = n[a].getAttribute("data-amplitude-song-index");
                            null == r && o == t && (n[a].value = e) } } }

                function a(e, t) { e = isNaN(e) ? 0 : e; for (var n = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, a = document.querySelectorAll('.amplitude-song-slider[data-amplitude-playlist="' + t + '"][data-amplitude-song-index="' + n + '"]'), r = 0; r < a.length; r++) a[r].value = e } return { sync: function(i, r, o) { e(i), t(i, r), n(i, o), a(i, r) }, syncMain: e, syncPlaylist: t, syncSong: n, syncSongInPlaylist: a, resetElements: function() { for (var e = document.getElementsByClassName("amplitude-song-slider"), t = 0; t < e.length; t++) e[t].value = 0 } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(53)),
            r = i(n(50)),
            o = i(n(51)),
            s = i(n(52)),
            l = i(n(54)),
            u = i(n(55)),
            d = i(n(56)),
            c = i(n(57)),
            f = i(n(58)),
            h = function() { return { resetCurrentTimes: function() { a.default.resetTimes(), r.default.resetTimes(), o.default.resetTimes(), s.default.resetTimes() }, syncCurrentTimes: function(e) { a.default.sync(e), r.default.sync(e.hours), o.default.sync(e.minutes), s.default.sync(e.seconds) }, resetDurationTimes: function() { l.default.resetTimes(), u.default.resetTimes(), d.default.resetTimes(), c.default.resetTimes(), f.default.resetTimes() }, syncDurationTimes: function(e, t) { l.default.sync(e, t), f.default.sync(t), u.default.sync(t.hours), d.default.sync(t.minutes), c.default.sync(t.seconds) } } }();
        t.default = h, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = (i(n(4)), function() {
                function e(e) { var t = a.default.visualization,
                        n = null != a.default.active_index ? a.default.songs[a.default.active_index].visualization : a.default.playlists[a.default.active_playlist].songs[a.default.playlists[a.default.active_playlist].active_index].visualization; if (null != n && null != a.default.visualizations.available[n]) r(n, e);
                    else if (null != t && null != a.default.visualizations.available[t]) r(t, e);
                    else { var i = Object.keys(a.default.visualizations.available).length > 0 ? Object.keys(a.default.visualizations.available)[0] : null;
                        null != i && r(i, e) } }

                function t(e, t) { if (t == a.default.active_playlist) { var n = a.default.playlists[a.default.active_playlist].songs[a.default.playlists[a.default.active_playlist].active_index].visualization,
                            i = a.default.playlists[a.default.active_playlist].visualization,
                            o = a.default.visualization; if (null != n && null != a.default.visualizations.available[n]) r(n, e);
                        else if (null != i && null != a.default.visualizations.available[i]) r(i, e);
                        else if (null != o && null != a.default.visualizations.available[o]) r(o, e);
                        else { var s = Object.keys(a.default.visualizations.available).length > 0 ? Object.keys(a.default.visualizations.available)[0] : null;
                            null != s && r(s, e) } } }

                function n(e, t) { if (t == a.default.active_index) { var n = a.default.songs[a.default.active_index].visualization,
                            i = a.default.visualization; if (null != n && null != a.default.visualizations.available[n]) r(n, e);
                        else if (null != i && null != a.default.visualizations.available[i]) r(i, e);
                        else { var o = Object.keys(a.default.visualizations.available).length > 0 ? Object.keys(a.default.visualizations.available)[0] : null;
                            null != o && r(o, e) } } }

                function i(e, t, n) { if (t == a.default.active_playlist && a.default.playlists[t].active_index == n) { var i = a.default.playlists[a.default.active_playlist].songs[a.default.playlists[a.default.active_playlist].active_index].visualization,
                            o = a.default.playlists[a.default.active_playlist].visualization,
                            s = a.default.visualization; if (null != i && null != a.default.visualizations.available[i]) r(i, e);
                        else if (null != o && null != a.default.visualizations.available[o]) r(o, e);
                        else if (null != s && null != a.default.visualizations.available[s]) r(s, e);
                        else { var l = Object.keys(a.default.visualizations.available).length > 0 ? Object.keys(a.default.visualizations.available)[0] : null;
                            null != l && r(l, e) } } }

                function r(e, t) { var n = new a.default.visualizations.available[e].object;
                    n.setPreferences(a.default.visualizations.available[e].preferences), n.startVisualization(t), a.default.visualizations.active.push(n) }

                function o(e) { e.style.backgroundImage = "url(" + a.default.active_metadata.cover_art_url + ")" }

                function s(e, t) { a.default.active_playlist == t && (e.style.backgroundImage = "url(" + a.default.active_metadata.cover_art_url + ")") }

                function l(e, t) { a.default.active_index == t && (e.style.backgroundImage = "url(" + a.default.active_metadata.cover_art_url + ")") }

                function u(e, t, n) { a.default.active_playlist == t && a.default.playlists[active_playlist].active_index == n && (e.style.backgroundImage = "url(" + a.default.active_metadata.cover_art_url + ")") } return { run: function() { var r = document.querySelectorAll(".amplitude-visualization"); if (a.default.web_audio_api_available) { if (Object.keys(a.default.visualizations.available).length > 0 && r.length > 0)
                                for (var d = 0; d < r.length; d++) { var c = r[d].getAttribute("data-amplitude-playlist"),
                                        f = r[d].getAttribute("data-amplitude-song-index");
                                    null == c && null == f && e(r[d]), null != c && null == f && t(r[d], c), null == c && null != f && n(r[d], f), null != c && null != f && i(r[d], c, f) } } else ! function() { var e = document.querySelectorAll(".amplitude-visualization"); if (e.length > 0)
                                for (var t = 0; t < e.length; t++) { var n = e[t].getAttribute("data-amplitude-playlist"),
                                        i = e[t].getAttribute("data-amplitude-song-index");
                                    null == n && null == i && o(e[t]), null != n && null == i && s(e[t], n), null == n && null != i && l(e[t], i), null != n && null != i && u(e[t], n, i) } }() }, stop: function() { for (var e = 0; e < a.default.visualizations.active.length; e++) a.default.visualizations.active[e].stopVisualization();
                        a.default.visualizations.active = [] }, register: function(e, t) { var n = new e;
                        a.default.visualizations.available[n.getID()] = new Array, a.default.visualizations.available[n.getID()].object = e, a.default.visualizations.available[n.getID()].preferences = t } } }());
        t.default = r, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(20)),
            o = function() {
                function e() { SC.initialize({ client_id: a.default.soundcloud_client }),
                        function() { for (var e = /^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/, n = 0; n < a.default.songs.length; n++) a.default.songs[n].url.match(e) && (a.default.soundcloud_song_count++, t(a.default.songs[n].url, n)) }() }

                function t(e, t) { SC.get("/resolve/?url=" + e, function(e) { e.streamable ? (a.default.songs[t].url = e.stream_url + "?client_id=" + a.default.soundcloud_client, a.default.soundcloud_use_art && (a.default.songs[t].cover_art_url = e.artwork_url), a.default.songs[t].soundcloud_data = e) : AmplitudeHelpers.writeDebugMessage(a.default.songs[t].name + " by " + a.default.songs[t].artist + " is not streamable by the Soundcloud API"), ++a.default.soundcloud_songs_ready == a.default.soundcloud_song_count && r.default.setConfig(n) }) } var n = {}; return { loadSoundCloud: function(t) { n = t; var i = document.getElementsByTagName("head")[0],
                            a = document.createElement("script");
                        a.type = "text/javascript", a.src = "https://connect.soundcloud.com/sdk.js", a.onreadystatechange = e, a.onload = e, i.appendChild(a) }, resolveIndividualStreamableURL: function(e, t, n) { var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        SC.get("/resolve/?url=" + e, function(e) { e.streamable ? null != t ? (a.default.playlists[t].songs[n].url = e.stream_url + "?client_id=" + a.default.soundcloud_client, i && (a.default.playlists[t].shuffle_list[n].url = e.stream_url + "?client_id=" + a.default.soundcloud_client), a.default.soundcloud_use_art && (a.default.playlists[t].songs[n].cover_art_url = e.artwork_url, i && (a.default.playlists[t].shuffle_list[n].cover_art_url = e.artwork_url)), a.default.playlists[t].songs[n].soundcloud_data = e, i && (a.default.playlists[t].shuffle_list[n].soundcloud_data = e)) : (a.default.songs[n].url = e.stream_url + "?client_id=" + a.default.soundcloud_client, i && (a.default.shuffle_list[n].stream_url, a.default.soundcloud_client), a.default.soundcloud_use_art && (a.default.songs[n].cover_art_url = e.artwork_url, i && (a.default.shuffle_list[n].cover_art_url = e.artwork_url)), a.default.songs[n].soundcloud_data = e, i && (a.default.shuffle_list[n].soundcloud_data = e)) : null != t ? AmplitudeHelpers.writeDebugMessage(a.default.playlists[t].songs[n].name + " by " + a.default.playlists[t].songs[n].artist + " is not streamable by the Soundcloud API") : AmplitudeHelpers.writeDebugMessage(a.default.songs[n].name + " by " + a.default.songs[n].artist + " is not streamable by the Soundcloud API") }) }, isSoundCloudURL: function(e) { return e.match(/^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/) } } }();
        t.default = o, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { syncMain: function() { for (var e = document.getElementsByClassName("amplitude-shuffle"), t = 0; t < e.length; t++) null == e[t].getAttribute("data-amplitude-playlist") && (i.default.shuffle_on ? (e[t].classList.add("amplitude-shuffle-on"), e[t].classList.remove("amplitude-shuffle-off")) : (e[t].classList.add("amplitude-shuffle-off"), e[t].classList.remove("amplitude-shuffle-on"))) }, syncPlaylist: function(e) { for (var t = document.querySelectorAll('.amplitude-shuffle[data-amplitude-playlist="' + e + '"]'), n = 0; n < t.length; n++) i.default.playlists[e].shuffle ? (t[n].classList.add("amplitude-shuffle-on"), t[n].classList.remove("amplitude-shuffle-off")) : (t[n].classList.add("amplitude-shuffle-off"), t[n].classList.remove("amplitude-shuffle-on")) } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { sync: function(e) {
                        (function(e) { if (!isNaN(e))
                                for (var t = document.querySelectorAll(".amplitude-song-played-progress"), n = 0; n < t.length; n++) { var i = t[n].getAttribute("data-amplitude-playlist"),
                                        a = t[n].getAttribute("data-amplitude-song-index"); if (null == i && null == a) { var r = t[n].max;
                                        t[n].value = e / 100 * r } } })(e),
                        function(e) { if (!isNaN(e))
                                for (var t = document.querySelectorAll('.amplitude-song-played-progress[data-amplitude-playlist="' + i.default.active_playlist + '"]'), n = 0; n < t.length; n++) { var a = t[n].getAttribute("data-amplitude-song-index"); if (null == a) { var r = t[n].max;
                                        t[n].value = e / 100 * r } } }(e),
                        function(e) { if (null == i.default.active_playlist && !isNaN(e))
                                for (var t = document.querySelectorAll('.amplitude-song-played-progress[data-amplitude-song-index="' + i.default.active_index + '"]'), n = 0; n < t.length; n++) { var a = t[n].getAttribute("data-amplitude-playlist"); if (null == a) { var r = t[n].max;
                                        t[n].value = e / 100 * r } } }(e),
                        function(e) { if (!isNaN(e))
                                for (var t = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, n = document.querySelectorAll('.amplitude-song-played-progress[data-amplitude-playlist="' + i.default.active_playlist + '"][data-amplitude-song-index="' + t + '"]'), a = 0; a < n.length; a++) { var r = n[a].getAttribute("data-amplitude-playlist"),
                                        o = n[a].getAttribute("data-amplitude-song-index"); if (null != r && null != o) { var s = n[a].max;
                                        n[a].value = e / 100 * s } } }(e) }, resetElements: function() { for (var e = document.getElementsByClassName("amplitude-song-played-progress"), t = 0; t < e.length; t++) e[t].value = 0 } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            r = i(n(0)),
            o = i(n(1)),
            s = i(n(17)),
            l = i(n(6)),
            u = i(n(4)),
            d = i(n(5)),
            c = i(n(13)),
            f = i(n(26)),
            h = i(n(46)),
            p = i(n(16)),
            g = i(n(21)),
            m = i(n(3)),
            v = i(n(7)),
            y = i(n(48)),
            _ = i(n(18)),
            b = i(n(10)),
            w = i(n(11)),
            x = i(n(15)),
            S = i(n(2)),
            k = i(n(8)),
            T = i(n(24)),
            M = i(n(9)),
            C = function() {
                function e(e) { e.playlists && function(e) { var t = 0,
                            n = void 0; for (n in e) e.hasOwnProperty(n) && t++; return u.default.writeMessage("You have " + t + " playlist(s) in your config"), t }(e.playlists) > 0 && y.default.initialize(e.playlists), null != e.start_song && e.starting_playlist ? d.default.isInt(e.start_song) ? m.default.changeSong(r.default.songs[e.start_song], e.start_song) : u.default.writeMessage("You must enter an integer index for the start song.") : m.default.changeSong(r.default.songs[0], 0), null != e.shuffle_on && e.shuffle_on && (r.default.shuffle_on = !0, c.default.shuffleSongs(), m.default.changeSong(r.default.shuffle_list[0], 0)), r.default.continue_next = null == e.continue_next || e.continue_next, r.default.playback_speed = null != e.playback_speed ? e.playback_speed : 1, o.default.setPlaybackSpeed(r.default.playback_speed), r.default.audio.preload = null != e.preload ? e.preload : "auto", r.default.callbacks = null != e.callbacks ? e.callbacks : {}, r.default.bindings = null != e.bindings ? e.bindings : {}, r.default.volume = null != e.volume ? e.volume : 50, r.default.delay = null != e.delay ? e.delay : 0, r.default.volume_increment = null != e.volume_increment ? e.volume_increment : 5, r.default.volume_decrement = null != e.volume_decrement ? e.volume_decrement : 5, o.default.setVolume(r.default.volume), null != e.default_album_art ? r.default.default_album_art = e.default_album_art : r.default.default_album_art = "", null != e.default_playlist_art ? r.default.default_playlist_art = e.default_playlist_art : r.default.default_playlist_art = "", _.default.syncMain(), b.default.setMuted(0 == r.default.volume), w.default.sync(), T.default.sync(), x.default.resetCurrentTimes(), S.default.syncToPause(), k.default.syncMetaData(), M.default.syncRepeatSong(), null != e.starting_playlist && "" != e.starting_playlist && (r.default.active_playlist = e.starting_playlist, null != e.starting_playlist_song && "" != e.starting_playlist_song ? null != a(e.playlists[e.starting_playlist].songs[parseInt(e.starting_playlist_song)]) ? m.default.changeSongPlaylist(r.default.active_playlist, e.playlists[e.starting_playlist].songs[parseInt(e.starting_playlist_song)], parseInt(e.starting_playlist_song)) : (m.default.changeSongPlaylist(r.default.active_playlist, e.playlists[e.starting_playlist].songs[0], 0), u.default.writeMessage("The index of " + e.starting_playlist_song + " does not exist in the playlist " + e.starting_playlist)) : m.default.changeSong(r.default.active_playlist, e.playlists[e.starting_playlist].songs[0], 0), S.default.sync()), v.default.run("initialized") } return { initialize: function(t) { var n = !1; if (l.default.resetConfig(), f.default.initialize(), v.default.initialize(), r.default.debug = null != t.debug && t.debug, t.songs ? 0 != t.songs.length ? (r.default.songs = t.songs, n = !0) : u.default.writeMessage("Please add some songs, to your songs object!") : u.default.writeMessage("Please provide a songs object for AmplitudeJS to run!"), h.default.webAudioAPIAvailable()) { if (h.default.configureWebAudioAPI(), document.documentElement.addEventListener("mousedown", function() { "running" !== r.default.context.state && r.default.context.resume() }), document.documentElement.addEventListener("keydown", function() { "running" !== r.default.context.state && r.default.context.resume() }), document.documentElement.addEventListener("keyup", function() { "running" !== r.default.context.state && r.default.context.resume() }), null != t.waveforms && null != t.waveforms.sample_rate && (r.default.waveforms.sample_rate = t.waveforms.sample_rate), g.default.init(), null != t.visualizations && t.visualizations.length > 0)
                                for (var i = 0; i < t.visualizations.length; i++) p.default.register(t.visualizations[i].object, t.visualizations[i].params) } else u.default.writeMessage("The Web Audio API is not available on this platform. We are using your defined backups!"); if (function() { for (var e = 0; e < r.default.songs.length; e++) null == r.default.songs[e].live && (r.default.songs[e].live = !1) }(), n) { r.default.soundcloud_client = null != t.soundcloud_client ? t.soundcloud_client : "", r.default.soundcloud_use_art = null != t.soundcloud_use_art ? t.soundcloud_use_art : ""; var a = {}; "" != r.default.soundcloud_client ? (a = t, s.default.loadSoundCloud(a)) : e(t) } u.default.writeMessage("Initialized With: "), u.default.writeMessage(r.default) }, setConfig: e, rebindDisplay: function() { f.default.initialize(), k.default.displayMetaData() } } }();
        t.default = C, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() {
                function e(e) { for (var i = document.querySelectorAll(".amplitude-wave-form"), o = 0; o < i.length; o++) { var s = i[o].getAttribute("data-amplitude-playlist"),
                            l = i[o].getAttribute("data-amplitude-song-index");
                        null == s && null == l && t(i[o], e), null != s && null == l && n(i[o], e, s), null == s && null != l && a(i[o], e, l), null != s && null != l && r(i[o], e, s, l) } }

                function t(e, t) { e.querySelector("svg g path").setAttribute("d", t) }

                function n(e, t, n) { i.default.active_playlist == n && e.querySelector("svg g path").setAttribute("d", t) }

                function a(e, t, n) { i.default.active_index == n && e.querySelector("svg g path").setAttribute("d", t) }

                function r(e, t, n, a) { i.default.active_playlist == n && i.default.playlists[i.default.active_playlist].active_index == a && e.querySelector("svg g path").setAttribute("d", t) } var o = "",
                    s = i.default.waveforms.sample_rate,
                    l = ""; return { init: function() { var e = document.querySelectorAll(".amplitude-wave-form"); if (e.length > 0)
                            for (var t = 0; t < e.length; t++) { e[t].innerHTML = ""; var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                n.setAttribute("viewBox", "0 -1 " + s + " 2"), n.setAttribute("preserveAspectRatio", "none"); var i = document.createElementNS("http://www.w3.org/2000/svg", "g");
                                n.appendChild(i); var a = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                a.setAttribute("d", ""), a.setAttribute("id", "waveform"), i.appendChild(a), e[t].appendChild(n) } }, build: function() { if (i.default.web_audio_api_available)
                            if (null == i.default.waveforms.built[Math.abs(i.default.audio.src.split("").reduce(function(e, t) { return (e = (e << 5) - e + t.charCodeAt(0)) & e }, 0))]) { var t = new XMLHttpRequest;
                                t.open("GET", i.default.audio.src, !0), t.responseType = "arraybuffer", t.onreadystatechange = function(n) { 4 == t.readyState && 200 == t.status && i.default.context.decodeAudioData(t.response, function(t) { l = function(e, t) { for (var n = t.length / e, i = ~~(n / 10) || 1, a = t.numberOfChannels, r = [], o = 0; o < a; o++)
                                                    for (var s = [], l = t.getChannelData(o), u = 0; u < e; u++) { for (var d = ~~(u * n), c = ~~(d + n), f = l[0], h = l[0], p = d; p < c; p += i) { var g = l[p];
                                                            g > h && (h = g), g < f && (f = g) } s[2 * u] = h, s[2 * u + 1] = f, (0 === o || h > r[2 * u]) && (r[2 * u] = h), (0 === o || f < r[2 * u + 1]) && (r[2 * u + 1] = f) }
                                                return r }(s, o = t),
                                            function(t, n, a) { if (n) { for (var r = a.length, o = "", s = 0; s < r; s++) o += s % 2 == 0 ? " M" + ~~(s / 2) + ", " + a.shift() : " L" + ~~(s / 2) + ", " + a.shift();
                                                    i.default.waveforms.built[Math.abs(i.default.audio.src.split("").reduce(function(e, t) { return (e = (e << 5) - e + t.charCodeAt(0)) & e }, 0))] = o, e(i.default.waveforms.built[Math.abs(i.default.audio.src.split("").reduce(function(e, t) { return (e = (e << 5) - e + t.charCodeAt(0)) & e }, 0))]) } }(0, o, l) }) }, t.send() }
                        else e(i.default.waveforms.built[Math.abs(i.default.audio.src.split("").reduce(function(e, t) { return (e = (e << 5) - e + t.charCodeAt(0)) & e }, 0))]) } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { computeCurrentTimes: function() { var e = {},
                            t = (Math.floor(i.default.audio.currentTime % 60) < 10 ? "0" : "") + Math.floor(i.default.audio.currentTime % 60),
                            n = Math.floor(i.default.audio.currentTime / 60),
                            a = "00"; return n < 10 && (n = "0" + n), n >= 60 && (a = Math.floor(n / 60), (n %= 60) < 10 && (n = "0" + n)), e.seconds = t, e.minutes = n, e.hours = a, e }, computeSongDuration: function() { var e = {},
                            t = (Math.floor(i.default.audio.duration % 60) < 10 ? "0" : "") + Math.floor(i.default.audio.duration % 60),
                            n = Math.floor(i.default.audio.duration / 60),
                            a = "00"; return n < 10 && (n = "0" + n), n >= 60 && (a = Math.floor(n / 60), (n %= 60) < 10 && (n = "0" + n)), e.seconds = isNaN(t) ? "00" : t, e.minutes = isNaN(n) ? "00" : n, e.hours = isNaN(a) ? "00" : a.toString(), e }, computeSongCompletionPercentage: function() { return i.default.audio.currentTime / i.default.audio.duration * 100 }, setCurrentTime: function(e) { i.default.active_metadata.live || isFinite(e) && (i.default.audio.currentTime = e) } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { sync: function() {
                        (function() { for (var e = document.getElementsByClassName("amplitude-buffered-progress"), t = 0; t < e.length; t++) { var n = e[t].getAttribute("data-amplitude-playlist"),
                                    a = e[t].getAttribute("data-amplitude-song-index");
                                null == n && null == a && (e[t].value = parseFloat(parseFloat(i.default.buffered) / 100)) } })(),
                        function() { for (var e = document.querySelectorAll('.amplitude-buffered-progress[data-amplitude-playlist="' + i.default.active_playlist + '"]'), t = 0; t < e.length; t++) null == e[t].getAttribute("data-amplitude-song-index") && (e[t].value = parseFloat(parseFloat(i.default.buffered) / 100)) }(),
                        function() { for (var e = document.querySelectorAll('.amplitude-buffered-progress[data-amplitude-song-index="' + i.default.active_index + '"]'), t = 0; t < e.length; t++) null == e[t].getAttribute("data-amplitude-playlist") && (e[t].value = parseFloat(parseFloat(i.default.buffered) / 100)) }(),
                        function() { for (var e = null != i.default.active_playlist && "" != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, t = document.querySelectorAll('.amplitude-buffered-progress[data-amplitude-song-index="' + e + '"][data-amplitude-playlist="' + i.default.active_playlist + '"]'), n = 0; n < t.length; n++) t[n].value = parseFloat(parseFloat(i.default.buffered) / 100) }() }, reset: function() { for (var e = document.getElementsByClassName("amplitude-buffered-progress"), t = 0; t < e.length; t++) e[t].value = 0 } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { sync: function() { for (var e = document.getElementsByClassName("amplitude-playback-speed"), t = 0; t < e.length; t++) switch (e[t].classList.remove("amplitude-playback-speed-10"), e[t].classList.remove("amplitude-playback-speed-15"), e[t].classList.remove("amplitude-playback-speed-20"), i.default.playback_speed) {
                            case 1:
                                e[t].classList.add("amplitude-playback-speed-10"); break;
                            case 1.5:
                                e[t].classList.add("amplitude-playback-speed-15"); break;
                            case 2:
                                e[t].classList.add("amplitude-playback-speed-20") } } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(3)),
            o = (i(n(7)), n(1)),
            s = (i(o), n(2)),
            l = i(s),
            u = function() { return { handle: function() { setTimeout(function() { a.default.continue_next ? "" == a.default.active_playlist || null == a.default.active_playlist ? r.default.setNext(!0) : r.default.setNextPlaylist(a.default.active_playlist, !0) : a.default.is_touch_moving || (AmplitudeCore.stop(), l.default.sync()) }, a.default.delay) } } }();
        t.default = u, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(27)),
            o = i(n(42)),
            s = i(n(25)),
            l = i(n(35)),
            u = i(n(31)),
            d = i(n(30)),
            c = i(n(32)),
            f = i(n(41)),
            h = i(n(28)),
            p = i(n(45)),
            g = i(n(43)),
            m = i(n(40)),
            v = i(n(44)),
            y = i(n(29)),
            _ = i(n(34)),
            b = i(n(36)),
            w = i(n(37)),
            x = i(n(33)),
            S = i(n(38)),
            k = i(n(39)),
            T = i(n(21)),
            M = i(n(4)),
            C = function() { return { initialize: function() { M.default.writeMessage("Beginning initialization of event handlers.."), document.addEventListener("touchmove", function() { a.default.is_touch_moving = !0 }), document.addEventListener("touchend", function() { a.default.is_touch_moving && (a.default.is_touch_moving = !1) }), a.default.audio.removeEventListener("timeupdate", o.default.handle), a.default.audio.addEventListener("timeupdate", o.default.handle), a.default.audio.removeEventListener("durationchange", o.default.handle), a.default.audio.addEventListener("durationchange", o.default.handle), document.removeEventListener("keydown", r.default.handle), document.addEventListener("keydown", r.default.handle), a.default.audio.removeEventListener("ended", s.default.handle), a.default.audio.addEventListener("ended", s.default.handle), a.default.audio.removeEventListener("progress", l.default.handle), a.default.audio.addEventListener("progress", l.default.handle),
                            function() { for (var e = document.getElementsByClassName("amplitude-play"), t = 0; t < e.length; t++) /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e[t].removeEventListener("touchend", u.default.handle), e[t].addEventListener("touchend", u.default.handle)) : (e[t].removeEventListener("click", u.default.handle), e[t].addEventListener("click", u.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-pause"), t = 0; t < e.length; t++) /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e[t].removeEventListener("touchend", d.default.handle), e[t].addEventListener("touchend", d.default.handle)) : (e[t].removeEventListener("click", d.default.handle), e[t].addEventListener("click", d.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-play-pause"), t = 0; t < e.length; t++) /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e[t].removeEventListener("touchend", c.default.handle), e[t].addEventListener("touchend", c.default.handle)) : (e[t].removeEventListener("click", c.default.handle), e[t].addEventListener("click", c.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-stop"), t = 0; t < e.length; t++) /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e[t].removeEventListener("touchend", f.default.handle), e[t].addEventListener("touchend", f.default.handle)) : (e[t].removeEventListener("click", f.default.handle), e[t].addEventListener("click", f.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-mute"), t = 0; t < e.length; t++) /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? /iPhone|iPad|iPod/i.test(navigator.userAgent) ? M.default.writeMessage("iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4") : (e[t].removeEventListener("touchend", h.default.handle), e[t].addEventListener("touchend", h.default.handle)) : (e[t].removeEventListener("click", h.default.handle), e[t].addEventListener("click", h.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-volume-up"), t = 0; t < e.length; t++) /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? /iPhone|iPad|iPod/i.test(navigator.userAgent) ? M.default.writeMessage("iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4") : (e[t].removeEventListener("touchend", p.default.handle), e[t].addEventListener("touchend", p.default.handle)) : (e[t].removeEventListener("click", p.default.handle), e[t].addEventListener("click", p.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-volume-down"), t = 0; t < e.length; t++) /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? /iPhone|iPad|iPod/i.test(navigator.userAgent) ? M.default.writeMessage("iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4") : (e[t].removeEventListener("touchend", g.default.handle), e[t].addEventListener("touchend", g.default.handle)) : (e[t].removeEventListener("click", g.default.handle), e[t].addEventListener("click", g.default.handle)) }(),
                            function() { for (var e = window.navigator.userAgent.indexOf("MSIE "), t = document.getElementsByClassName("amplitude-song-slider"), n = 0; n < t.length; n++) e > 0 || navigator.userAgent.match(/Trident.*rv\:11\./) ? (t[n].removeEventListener("change", m.default.handle), t[n].addEventListener("change", m.default.handle)) : (t[n].removeEventListener("input", m.default.handle), t[n].addEventListener("input", m.default.handle)) }(),
                            function() { for (var e = window.navigator.userAgent.indexOf("MSIE "), t = document.getElementsByClassName("amplitude-volume-slider"), n = 0; n < t.length; n++) /iPhone|iPad|iPod/i.test(navigator.userAgent) ? M.default.writeMessage("iOS does NOT allow volume to be set through javascript: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW4") : e > 0 || navigator.userAgent.match(/Trident.*rv\:11\./) ? (t[n].removeEventListener("change", v.default.handle), t[n].addEventListener("change", v.default.handle)) : (t[n].removeEventListener("input", v.default.handle), t[n].addEventListener("input", v.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-next"), t = 0; t < e.length; t++) /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e[t].removeEventListener("touchend", y.default.handle), e[t].addEventListener("touchend", y.default.handle)) : (e[t].removeEventListener("click", y.default.handle), e[t].addEventListener("click", y.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-prev"), t = 0; t < e.length; t++) /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e[t].removeEventListener("touchend", _.default.handle), e[t].addEventListener("touchend", _.default.handle)) : (e[t].removeEventListener("click", _.default.handle), e[t].addEventListener("click", _.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-shuffle"), t = 0; t < e.length; t++) e[t].classList.remove("amplitude-shuffle-on"), e[t].classList.add("amplitude-shuffle-off"), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e[t].removeEventListener("touchend", S.default.handle), e[t].addEventListener("touchend", S.default.handle)) : (e[t].removeEventListener("click", S.default.handle), e[t].addEventListener("click", S.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-repeat"), t = 0; t < e.length; t++) e[t].classList.remove("amplitude-repeat-on"), e[t].classList.add("amplitude-repeat-off"), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e[t].removeEventListener("touchend", b.default.handle), e[t].addEventListener("touchend", b.default.handle)) : (e[t].removeEventListener("click", b.default.handle), e[t].addEventListener("click", b.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-repeat-song"), t = 0; t < e.length; t++) e[t].classList.remove("amplitude-repeat-on"), e[t].classList.add("amplitude-repeat-off"), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e[t].removeEventListener("touchend", w.default.handle), e[t].addEventListener("touchend", w.default.handle)) : (e[t].removeEventListener("click", w.default.handle), e[t].addEventListener("click", w.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-playback-speed"), t = 0; t < e.length; t++) /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e[t].removeEventListener("touchend", x.default.handle), e[t].addEventListener("touchend", x.default.handle)) : (e[t].removeEventListener("click", x.default.handle), e[t].addEventListener("click", x.default.handle)) }(),
                            function() { for (var e = document.getElementsByClassName("amplitude-skip-to"), t = 0; t < e.length; t++) /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (e[t].removeEventListener("touchend", k.default.handle), e[t].addEventListener("touchend", k.default.handle)) : (e[t].removeEventListener("click", k.default.handle), e[t].addEventListener("click", k.default.handle)) }(), a.default.audio.removeEventListener("canplaythrough", T.default.build), a.default.audio.addEventListener("canplaythrough", T.default.build) } } }();
        t.default = C, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(1)),
            o = i(n(13)),
            s = i(n(12)),
            l = i(n(3)),
            u = i(n(9)),
            d = i(n(2)),
            c = function() { return { handle: function(e) {! function(e) { if (null != a.default.bindings[e]) switch (a.default.bindings[e]) {
                                case "play_pause":
                                    a.default.audio.paused ? r.default.play() : r.default.pause(), d.default.sync(); break;
                                case "next":
                                    "" == a.default.active_playlist || null == a.default.active_playlist ? l.default.setNext() : l.default.setNextPlaylist(a.default.active_playlist); break;
                                case "prev":
                                    "" == a.default.active_playlist || null == a.default.active_playlist ? l.default.setPrev() : l.default.setPrevPlaylist(a.default.active_playlist); break;
                                case "stop":
                                    d.default.syncToPause(), r.default.stop(); break;
                                case "shuffle":
                                    "" == a.default.active_playlist || null == a.default.active_playlist ? o.default.toggleShuffle() : o.default.toggleShufflePlaylist(a.default.active_playlist); break;
                                case "repeat":
                                    s.default.setRepeat(!a.default.repeat), u.default.syncRepeat() } }(e.which) } } }();
        t.default = c, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(1)),
            o = i(n(10)),
            s = i(n(11)),
            l = function() { return { handle: function() { a.default.is_touch_moving || (0 == a.default.volume ? r.default.setVolume(a.default.pre_mute_volume) : (a.default.pre_mute_volume = a.default.volume, r.default.setVolume(0)), o.default.setMuted(0 == a.default.volume), s.default.sync()) } } }();
        t.default = l, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = (i(n(1)), n(2)),
            o = (i(r), n(7)),
            s = (i(o), n(3)),
            l = i(s),
            u = i(n(4)),
            d = function() { return { handle: function() { if (!a.default.is_touch_moving) { var e = this.getAttribute("data-amplitude-playlist");
                            null == e && ("" == a.default.active_playlist || null == a.default.active_playlist ? l.default.setNext() : l.default.setNextPlaylist(a.default.active_playlist)), null != e && function(e) { e == a.default.active_playlist ? l.default.setNextPlaylist(e) : u.default.writeMessage("You can not go to the next song on a playlist that is not being played!") }(e) } } } }();
        t.default = d, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(6)),
            o = i(n(1)),
            s = i(n(2)),
            l = function() { return { handle: function() { if (!a.default.is_touch_moving) { var e = this.getAttribute("data-amplitude-song-index"),
                                t = this.getAttribute("data-amplitude-playlist");
                            null == t && null == e && (o.default.pause(), s.default.sync()), null != t && null == e && function(e) { a.default.active_playlist == e && (o.default.pause(), s.default.sync()) }(t), null == t && null != e && function(e) { "" != a.default.active_playlist && null != a.default.active_playlist || a.default.active_index != e || (o.default.pause(), s.default.sync()) }(e), null != t && null != e && function(e, t) { a.default.active_playlist == e && a.default.playlists[e].active_index == t && (o.default.pause(), s.default.sync()) }(t, e), r.default.setPlayerState() } } } }();
        t.default = l, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(6)),
            o = i(n(1)),
            s = i(n(5)),
            l = i(n(3)),
            u = i(n(2)),
            d = function() { return { handle: function() { if (!a.default.is_touch_moving) { var e = this.getAttribute("data-amplitude-song-index"),
                                t = this.getAttribute("data-amplitude-playlist");
                            null == t && null == e && (o.default.play(), u.default.sync()), null != t && null == e && function(e) { s.default.newPlaylist(e) && (l.default.setActivePlaylist(e), a.default.playlists[e].shuffle ? l.default.changeSongPlaylist(e, a.default.playlists[e].shuffle_list[0], 0) : l.default.changeSongPlaylist(e, a.default.playlists[e].songs[0], 0)), o.default.play(), u.default.sync() }(t), null == t && null != e && function(e) { s.default.newPlaylist(null) && (l.default.setActivePlaylist(null), l.default.changeSong(a.default.songs[e], e)), s.default.newSong(null, e) && l.default.changeSong(a.default.songs[e], e), o.default.play(), u.default.sync() }(e), null != t && null != e && function(e, t) { s.default.newPlaylist(e) && (l.default.setActivePlaylist(e), l.default.changeSongPlaylist(e, a.default.playlists[e].songs[t], t)), s.default.newSong(e, t) && l.default.changeSongPlaylist(e, a.default.playlists[e].songs[t], t), o.default.play(), u.default.sync() }(t, e), r.default.setPlayerState() } } } }();
        t.default = d, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(6)),
            o = i(n(1)),
            s = i(n(5)),
            l = i(n(3)),
            u = i(n(2)),
            d = function() { return { handle: function() { if (!a.default.is_touch_moving) { var e = this.getAttribute("data-amplitude-playlist"),
                                t = this.getAttribute("data-amplitude-song-index");
                            null == e && null == t && (a.default.audio.paused ? o.default.play() : o.default.pause(), u.default.sync()), null != e && null == t && function(e) { s.default.newPlaylist(e) && (l.default.setActivePlaylist(e), a.default.playlists[e].shuffle ? l.default.changeSongPlaylist(e, a.default.playlists[e].shuffle_list[0], 0) : l.default.changeSongPlaylist(e, a.default.playlists[e].songs[0], 0)), a.default.audio.paused ? o.default.play() : o.default.pause(), u.default.sync() }(e), null == e && null != t && function(e) { s.default.newPlaylist(null) && (l.default.setActivePlaylist(null), l.default.changeSong(a.default.songs[e], e)), s.default.newSong(null, e) && l.default.changeSong(a.default.songs[e], e), a.default.audio.paused ? o.default.play() : o.default.pause(), u.default.sync() }(t), null != e && null != t && function(e, t) { s.default.newPlaylist(e) && (l.default.setActivePlaylist(e), l.default.changeSongPlaylist(e, a.default.playlists[e].songs[t], t)), s.default.newSong(e, t) && l.default.changeSongPlaylist(e, a.default.playlists[e].songs[t], t), a.default.audio.paused ? o.default.play() : o.default.pause(), u.default.sync() }(e, t), r.default.setPlayerState() } } } }();
        t.default = d, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(1)),
            o = i(n(24)),
            s = function() { return { handle: function() { if (!a.default.is_touch_moving) { switch (a.default.playback_speed) {
                                case 1:
                                    r.default.setPlaybackSpeed(1.5); break;
                                case 1.5:
                                    r.default.setPlaybackSpeed(2); break;
                                case 2:
                                    r.default.setPlaybackSpeed(1) } o.default.sync() } } } }();
        t.default = s, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(3)),
            o = i(n(4)),
            s = function() { return { handle: function() { if (!a.default.is_touch_moving) { var e = this.getAttribute("data-amplitude-playlist");
                            null == e && ("" == a.default.active_playlist || null == a.default.active_playlist ? r.default.setPrevious() : r.default.setPreviousPlaylist(a.default.active_playlist)), null != e && function(e) { e == a.default.active_playlist ? r.default.setPreviousPlaylist(a.default.active_playlist) : o.default.writeMessage("You can not go to the previous song on a playlist that is not being played!") }(e) } } } }();
        t.default = s, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(23)),
            o = function() { return { handle: function() { if (a.default.audio.buffered.length - 1 >= 0) { var e = a.default.audio.buffered.end(a.default.audio.buffered.length - 1),
                                t = a.default.audio.duration;
                            a.default.buffered = e / t * 100 } r.default.sync() } } }();
        t.default = o, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(12)),
            o = i(n(9)),
            s = function() { return { handle: function() { if (!a.default.is_touch_moving) { var e = this.getAttribute("data-amplitude-playlist");
                            null == e && (r.default.setRepeat(!a.default.repeat), o.default.syncRepeat()), null != e && function(e) { r.default.setRepeatPlaylist(!a.default.playlists[e].repeat, e), o.default.syncRepeatPlaylist(e) }(e) } } } }();
        t.default = s, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(12)),
            o = i(n(9)),
            s = function() { return { handle: function() { a.default.is_touch_moving || (r.default.setRepeatSong(!a.default.repeat_song), o.default.syncRepeatSong()) } } }();
        t.default = s, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(13)),
            o = i(n(18)),
            s = function() { return { handle: function() { if (!a.default.is_touch_moving) { var e = this.getAttribute("data-amplitude-playlist");
                            null == e ? (r.default.toggleShuffle(), o.default.syncMain(a.default.shuffle_on)) : function(e) { r.default.toggleShufflePlaylist(e), o.default.syncPlaylist(e) }(e) } } } }();
        t.default = s, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(4)),
            o = i(n(3)),
            s = i(n(5)),
            l = i(n(1)),
            u = i(n(2)),
            d = function() { return { handle: function() { if (!a.default.is_touch_moving) { var e = this.getAttribute("data-amplitude-playlist"),
                                t = this.getAttribute("data-amplitude-song-index"),
                                n = this.getAttribute("data-amplitude-location");
                            null == n && r.default.writeMessage("You must add an 'data-amplitude-location' attribute in seconds to your 'amplitude-skip-to' element."), null == t && r.default.writeMessage("You must add an 'data-amplitude-song-index' attribute to your 'amplitude-skip-to' element."), null != n && null != t && (null == e ? function(e, t) { o.default.changeSong(a.default.songs[e], e), l.default.play(), u.default.syncGlobal(), u.default.syncSong(), l.default.skipToLocation(t) }(parseInt(t), parseInt(n)) : function(e, t, n) { s.default.newPlaylist(e) && o.default.setActivePlaylist(e), o.default.changeSongPlaylist(e, a.default.playlists[e].songs[t], t), l.default.play(), u.default.syncGlobal(), u.default.syncPlaylist(), u.default.syncSong(), l.default.skipToLocation(n) }(e, parseInt(t), parseInt(n))) } } } }();
        t.default = d, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(22)),
            o = i(n(14)),
            s = function() {
                function e(e, t) { a.default.active_metadata.live || (r.default.setCurrentTime(e), o.default.sync(t, a.default.active_playlist, a.default.active_index)) }

                function t(e, t, n) { a.default.active_playlist == n && (a.default.active_metadata.live || (r.default.setCurrentTime(e), o.default.sync(t, n, a.default.active_index))) }

                function n(e, t, n) { a.default.active_index == n && null == a.default.active_playlist && (a.default.active_metadata.live || (r.default.setCurrentTime(e), o.default.sync(t, a.default.active_playlist, n))) }

                function i(e, t, n, i) { a.default.playlists[n].active_index == i && a.default.active_playlist == n && (a.default.active_metadata.live || (r.default.setCurrentTime(e), o.default.sync(t, n, i))) } return { handle: function() { var r = this.value,
                            o = a.default.audio.duration * (r / 100),
                            s = this.getAttribute("data-amplitude-playlist"),
                            l = this.getAttribute("data-amplitude-song-index");
                        null == s && null == l && e(o, r), null != s && null == l && t(o, r, s), null == s && null != l && n(o, r, l), null != s && null != l && i(o, r, s, l) } } }();
        t.default = s, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(6)),
            o = i(n(2)),
            s = i(n(1)),
            l = function() { return { handle: function() { a.default.is_touch_moving || (o.default.syncToPause(), s.default.stop(), r.default.setPlayerState()) } } }();
        t.default = l, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(23)),
            o = i(n(15)),
            s = i(n(14)),
            l = i(n(19)),
            u = i(n(22)),
            d = (i(n(7)), function() { return { handle: function() {
                        (function() { if (a.default.audio.buffered.length - 1 >= 0) { var e = a.default.audio.buffered.end(a.default.audio.buffered.length - 1),
                                    t = a.default.audio.duration;
                                a.default.buffered = e / t * 100 } })(), r.default.sync(),
                            function() { if (!a.default.active_metadata.live) { var e = u.default.computeCurrentTimes(),
                                        t = u.default.computeSongCompletionPercentage(),
                                        n = u.default.computeSongDuration();
                                    o.default.syncCurrentTimes(e), s.default.sync(t, a.default.active_playlist, a.default.active_index), l.default.sync(t), o.default.syncDurationTimes(e, n) } }(),
                            function() { var e = Math.floor(a.default.audio.currentTime); if (null != a.default.active_metadata.time_callbacks && null != a.default.active_metadata.time_callbacks[e]) a.default.active_metadata.time_callbacks[e].run || (a.default.active_metadata.time_callbacks[e].run = !0, a.default.active_metadata.time_callbacks[e]());
                                else
                                    for (var t in a.default.active_metadata.time_callbacks) a.default.active_metadata.time_callbacks.hasOwnProperty(t) && (a.default.active_metadata.time_callbacks[t].run = !1) }() } } }());
        t.default = d, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(1)),
            o = i(n(10)),
            s = i(n(11)),
            l = function() { return { handle: function() { var e;
                        a.default.is_touch_moving || (e = a.default.volume - a.default.volume_increment > 0 ? a.default.volume - a.default.volume_increment : 0, r.default.setVolume(e), o.default.setMuted(0 == a.default.volume), s.default.sync()) } } }();
        t.default = l, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(1)),
            o = i(n(10)),
            s = i(n(11)),
            l = function() { return { handle: function() { r.default.setVolume(this.value), o.default.setMuted(0 == a.default.volume), s.default.sync() } } }();
        t.default = l, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(1)),
            o = i(n(10)),
            s = i(n(11)),
            l = function() { return { handle: function() { var e;
                        a.default.is_touch_moving || (e = a.default.volume + a.default.volume_increment <= 100 ? a.default.volume + a.default.volume_increment : 100, r.default.setVolume(e), o.default.setMuted(0 == a.default.volume), s.default.sync()) } } }();
        t.default = l, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { configureWebAudioAPI: function() { var e = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;
                        e ? (i.default.context = new e, i.default.analyser = i.default.context.createAnalyser(), i.default.source = i.default.context.createMediaElementSource(i.default.audio), i.default.source.connect(i.default.analyser), i.default.analyser.connect(i.default.context.destination), i.default.audio.crossOrigin = "anonymous") : AmplitudeHelpers.writeDebugMessage("Web Audio API is unavailable! We will set any of your visualizations with your back up definition!") }, webAudioAPIAvailable: function() { var e = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext; return i.default.web_audio_api_available = !1, e ? (i.default.web_audio_api_available = !0, !0) : (i.default.web_audio_api_available = !1, !1) } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(20)),
            r = i(n(0)),
            o = i(n(1)),
            s = i(n(13)),
            l = i(n(6)),
            u = i(n(3)),
            d = i(n(12)),
            c = i(n(5)),
            f = i(n(16)),
            h = i(n(18)),
            p = i(n(9)),
            g = i(n(14)),
            m = i(n(19)),
            v = i(n(15)),
            y = i(n(2)),
            _ = i(n(8)),
            b = i(n(4)),
            w = i(n(17)),
            x = function() { return { init: function(e) { a.default.initialize(e) }, getConfig: function() { return r.default }, bindNewElements: function() { a.default.rebindDisplay() }, getActivePlaylist: function() { return r.default.active_playlist }, getPlaybackSpeed: function() { return r.default.playback_speed }, getRepeat: function() { return r.default.repeat }, getRepeatPlaylist: function(e) { return r.default.playlists[e].repeat }, getShuffle: function() { return r.default.shuffle_on }, getShufflePlaylist: function(e) { return r.default.playlists[e].shuffle }, setShuffle: function(e) { s.default.setShuffle(e), h.default.syncMain() }, setShufflePlaylist: function(e, t) { s.default.setShufflePlaylist(e, t), h.default.syncMain(), h.default.syncPlaylist(e) }, setRepeat: function(e) { d.default.setRepeat(e), p.default.syncRepeat() }, setRepeatSong: function(e) { r.default.is_touch_moving || (d.default.setRepeatSong(!r.default.repeat_song), p.default.syncRepeatSong()) }, setRepeatPlaylist: function(e, t) { d.default.setRepeatPlaylist(t, e), p.default.syncRepeatPlaylist(e) }, getDefaultAlbumArt: function() { return r.default.default_album_art }, setDefaultAlbumArt: function(e) { r.default.default_album_art = e }, getDefaultPlaylistArt: function() { return r.default.default_playlist_art }, setDefaultPlaylistArt: function(e) { r.default.default_plalist_art = e }, getSongPlayedPercentage: function() { return r.default.audio.currentTime / r.default.audio.duration * 100 }, setSongPlayedPercentage: function(e) { "number" == typeof e && e > 0 && e < 100 && (r.default.audio.currentTime = r.default.audio.duration * (e / 100)) }, getSongPlayedSeconds: function() { return r.default.audio.currentTime }, getSongDuration: function() { return r.default.audio.duration }, setDebug: function(e) { r.default.debug = e }, getActiveSongMetadata: function() { return r.default.active_metadata }, getActivePlaylistMetadata: function() { return r.default.playlists[r.default.active_playlist] }, getSongAtIndex: function(e) { return r.default.songs[e] }, getSongAtPlaylistIndex: function(e, t) { return r.default.playlists[e].songs[t] }, addSong: function(e) { return null == r.default.songs && (r.default.songs = []), r.default.songs.push(e), r.default.shuffle_on && r.default.shuffle_list.push(e), w.default.isSoundCloudURL(e.url) && w.default.resolveIndividualStreamableURL(e.url, null, r.default.songs.length - 1, r.default.shuffle_on), r.default.songs.length - 1 }, addSongToPlaylist: function(e, t) { return null != r.default.playlists[t] ? (r.default.playlists[t].songs.push(e), r.default.playlists[t].shuffle && r.default.playlists[t].shuffle_list.push(e), w.default.isSoundCloudURL(e.url) && w.default.resolveIndividualStreamableURL(e.url, t, r.default.playlists[t].songs.length - 1, r.default.playlists[t].shuffle), r.default.playlists[t].songs.length - 1) : (b.default.writeMessage("Playlist doesn't exist!"), null) }, removeSong: function(e) { r.default.songs.splice(e, 1) }, removeSongFromPlaylist: function(e, t) { null != r.default.playlists[t] && r.default.playlists[t].songs.splice(e, 1) }, playNow: function(e) { e.url ? (r.default.audio.src = e.url, r.default.active_metadata = e, r.default.active_album = e.album) : b.default.writeMessage("The song needs to have a URL!"), o.default.play(), y.default.sync(), _.default.displayMetaData(), g.default.resetElements(), m.default.resetElements(), v.default.resetCurrentTimes(), v.default.resetDurationTimes(), l.default.setPlayerState() }, playSongAtIndex: function(e) { o.default.stop(), c.default.newPlaylist(null) && (u.default.setActivePlaylist(null), u.default.changeSong(r.default.songs[e], e)), c.default.newSong(null, e) && u.default.changeSong(r.default.songs[e], e), o.default.play(), l.default.setPlayerState(), y.default.sync() }, playPlaylistSongAtIndex: function(e, t) { o.default.stop(), c.default.newPlaylist(t) && (u.default.setActivePlaylist(t), u.default.changeSongPlaylist(t, r.default.playlists[t].songs[e], e)), c.default.newSong(t, e) && u.default.changeSongPlaylist(t, r.default.playlists[t].songs[e], e), y.default.sync(), o.default.play(), l.default.setPlayerState() }, play: function() { o.default.play(), l.default.setPlayerState() }, pause: function() { o.default.pause(), l.default.setPlayerState() }, getAudio: function() { return r.default.audio }, getAnalyser: function() { return r.default.analyser }, next: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; "" == e || null == e ? null == r.default.active_playlist || "" == r.default.active_playlist ? u.default.setNext() : u.default.setNextPlaylist(r.default.active_playlist) : u.default.setNextPlaylist(e) }, prev: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; "" == e || null == e ? null == r.default.active_playlist || "" == r.default.active_playlist ? u.default.setPrevious() : u.default.setPreviousPlaylist(r.default.active_playlist) : u.default.setPreviousPlaylist(e) }, getSongs: function() { return r.default.songs }, getSongsInPlaylist: function(e) { return r.default.playlists[e].songs }, getSongsState: function() { return r.default.shuffle_on ? r.default.shuffle_list : r.default.songs }, getSongsStatePlaylist: function(e) { return r.default.playlists[e].shuffle ? r.default.playlists[e].shuffle_list : r.default.playlists[e].songs }, getActiveIndex: function() { return parseInt(r.default.active_index) }, getVersion: function() { return r.default.version }, getBuffered: function() { return r.default.buffered }, skipTo: function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        e = parseInt(e), null != n ? (c.default.newPlaylist(n) && u.default.setActivePlaylist(n), u.default.changeSongPlaylist(n, r.default.playlists[n].songs[t], t), o.default.play(), y.default.syncGlobal(), y.default.syncPlaylist(), y.default.syncSong(), o.default.skipToLocation(e)) : (u.default.changeSong(r.default.songs[t], t), o.default.play(), y.default.syncGlobal(), y.default.syncSong(), o.default.skipToLocation(e)) }, setSongMetaData: function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; if ("" != n && null != n && null != r.default.playlists[n])
                            for (var i in t) t.hasOwnProperty(i) && "url" != i && "URL" != i && "live" != i && "LIVE" != i && (r.default.playlists[n].songs[e][i] = t[i]);
                        else
                            for (var i in t) t.hasOwnProperty(i) && "url" != i && "URL" != i && "live" != i && "LIVE" != i && (r.default.songs[e][i] = t[i]);
                        _.default.displayMetaData(), _.default.syncMetaData() }, setPlaylistMetaData: function(e, t) { if (null != r.default.playlists[e]) { var n = ["repeat", "shuffle", "shuffle_list", "songs", "src"]; for (var i in t) t.hasOwnProperty(i) && n.indexOf(i) < 0 && (r.default.playlists[e][i] = t[i]);
                            _.default.displayPlaylistMetaData() } else b.default.writeMessage("You must provide a valid playlist key!") }, setDelay: function(e) { r.default.delay = e }, getDelay: function() { return r.default.delay }, getPlayerState: function() { return r.default.player_state }, addPlaylist: function(e, t, n) { if (null == r.default.playlists[e]) { r.default.playlists[e] = {}; var i = ["repeat", "shuffle", "shuffle_list", "songs", "src"]; for (var a in t) i.indexOf(a) < 0 && (r.default.playlists[e][a] = t[a]); return r.default.playlists[e].songs = n, r.default.playlists[e].active_index = null, r.default.playlists[e].repeat = !1, r.default.playlists[e].shuffle = !1, r.default.playlists[e].shuffle_list = [], r.default.playlists[e] } return b.default.writeMessage("A playlist already exists with that key!"), null }, registerVisualization: function(e, t) { f.default.register(e, t) }, setPlaylistVisualization: function(e, t) { null != r.default.playlists[e] ? null != r.default.visualizations.available[t] ? r.default.playlists[e].visualization = t : b.default.writeMessage("A visualization does not exist for the key provided.") : b.default.writeMessage("The playlist for the key provided does not exist") }, setSongVisualization: function(e, t) { r.default.songs[e] ? null != r.default.visualizations.available[t] ? r.default.songs[e].visualization = t : b.default.writeMessage("A visualization does not exist for the key provided.") : b.default.writeMessage("A song at that index is undefined") }, setSongInPlaylistVisualization: function(e, t, n) { null != r.default.playlists[e].songs[t] ? null != r.default.visualizations.available[n] ? r.default.playlists[e].songs[t].visualization = n : b.default.writeMessage("A visualization does not exist for the key provided.") : b.default.writeMessage("The song in the playlist at that key is not defined") }, setGlobalVisualization: function(e) { null != r.default.visualizations.available[e] ? r.default.visualization = e : b.default.writeMessage("A visualization does not exist for the key provided.") } } }();
        t.default = x, e.exports = t.default }, function(e, t, n) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var a = i(n(0)),
            r = i(n(4)),
            o = i(n(5)),
            s = i(n(8)),
            l = i(n(17)),
            u = function() { return { initialize: function(e) { a.default.playlists = e,
                            function() { for (var e in a.default.playlists)
                                    if (a.default.playlists.hasOwnProperty(e) && a.default.playlists[e].songs)
                                        for (var t = 0; t < a.default.playlists[e].songs.length; t++) o.default.isInt(a.default.playlists[e].songs[t]) && (a.default.playlists[e].songs[t] = a.default.songs[a.default.playlists[e].songs[t]]), o.default.isInt(a.default.playlists[e].songs[t]) && !a.default.songs[a.default.playlists[e].songs[t]] && r.default.writeMessage("The song index: " + a.default.playlists[e].songs[t] + " in playlist with key: " + e + " is not defined in your songs array!") }(),
                            function() { for (var e in a.default.playlists)
                                    if (a.default.playlists.hasOwnProperty(e))
                                        for (var t = 0; t < a.default.playlists[e].songs.length; t++) l.default.isSoundCloudURL(a.default.playlists[e].songs[t].url) && null == a.default.playlists[e].songs[t].soundcloud_data && l.default.resolveIndividualStreamableURL(a.default.playlists[e].songs[t].url, e, t) }(),
                            function() { for (var e in a.default.playlists) a.default.playlists[e].active_index = null }(),
                            function() { for (var e in a.default.playlists) a.default.playlists[e].shuffle = !1 }(),
                            function() { for (var e in a.default.playlists) a.default.playlists[e].repeat = !1 }(),
                            function() { for (var e in a.default.playlists) a.default.playlists[e].shuffle_list = [] }(),
                            function() { for (var e in a.default.playlists) s.default.setFirstSongInPlaylist(a.default.playlists[e].songs[0], e) }() } } }();
        t.default = u, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { setActive: function() { for (var e = document.getElementsByClassName("amplitude-song-container"), t = 0; t < e.length; t++) e[t].classList.remove("amplitude-active-song-container"); if ("" == i.default.active_playlist || null == i.default.active_playlist) { if (document.querySelectorAll('.amplitude-song-container[data-amplitude-song-index="' + i.default.active_index + '"]'))
                                for (var n = document.querySelectorAll('.amplitude-song-container[data-amplitude-song-index="' + i.default.active_index + '"]'), a = 0; a < n.length; a++) n[a].hasAttribute("data-amplitude-playlist") || n[a].classList.add("amplitude-active-song-container") } else { var r = null != i.default.active_playlist && "" != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null; if (document.querySelectorAll('.amplitude-song-container[data-amplitude-song-index="' + r + '"][data-amplitude-playlist="' + i.default.active_playlist + '"]'))
                                for (var o = document.querySelectorAll('.amplitude-song-container[data-amplitude-song-index="' + r + '"][data-amplitude-playlist="' + i.default.active_playlist + '"]'), s = 0; s < o.length; s++) o[s].classList.add("amplitude-active-song-container") } } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { sync: function(e) {
                        (function(e) { for (var t = document.querySelectorAll(".amplitude-current-hours"), n = 0; n < t.length; n++) { var i = t[n].getAttribute("data-amplitude-playlist"),
                                    a = t[n].getAttribute("data-amplitude-song-index");
                                null == i && null == a && (t[n].innerHTML = e) } })(e),
                        function(e) { for (var t = document.querySelectorAll('.amplitude-current-hours[data-amplitude-playlist="' + i.default.active_playlist + '"]'), n = 0; n < t.length; n++) null == t[n].getAttribute("data-amplitude-song-index") && (t[n].innerHTML = e) }(e),
                        function(e) { if (null == i.default.active_playlist)
                                for (var t = document.querySelectorAll('.amplitude-current-hours[data-amplitude-song-index="' + i.default.active_index + '"]'), n = 0; n < t.length; n++) { var a = t[n].getAttribute("data-amplitude-playlist");
                                    null == a && (t[n].innerHTML = e) } }(e),
                        function(e) { for (var t = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, n = document.querySelectorAll('.amplitude-current-hours[data-amplitude-playlist="' + i.default.active_playlist + '"][data-amplitude-song-index="' + t + '"]'), a = 0; a < n.length; a++) n[a].innerHTML = e }(e) }, resetTimes: function() { for (var e = document.querySelectorAll(".amplitude-current-hours"), t = 0; t < e.length; t++) e[t].innerHTML = "00" } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { sync: function(e) {
                        (function(e) { for (var t = document.querySelectorAll(".amplitude-current-minutes"), n = 0; n < t.length; n++) { var i = t[n].getAttribute("data-amplitude-playlist"),
                                    a = t[n].getAttribute("data-amplitude-song-index");
                                null == i && null == a && (t[n].innerHTML = e) } })(e),
                        function(e) { for (var t = document.querySelectorAll('.amplitude-current-minutes[data-amplitude-playlist="' + i.default.active_playlist + '"]'), n = 0; n < t.length; n++) null == t[n].getAttribute("data-amplitude-song-index") && (t[n].innerHTML = e) }(e),
                        function(e) { if (null == i.default.active_playlist)
                                for (var t = document.querySelectorAll('.amplitude-current-minutes[data-amplitude-song-index="' + i.default.active_index + '"]'), n = 0; n < t.length; n++) { var a = t[n].getAttribute("data-amplitude-playlist");
                                    null == a && (t[n].innerHTML = e) } }(e),
                        function(e) { for (var t = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, n = document.querySelectorAll('.amplitude-current-minutes[data-amplitude-playlist="' + i.default.active_playlist + '"][data-amplitude-song-index="' + t + '"]'), a = 0; a < n.length; a++) n[a].innerHTML = e }(e) }, resetTimes: function() { for (var e = document.querySelectorAll(".amplitude-current-minutes"), t = 0; t < e.length; t++) e[t].innerHTML = "00" } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { sync: function(e) {
                        (function(e) { for (var t = document.querySelectorAll(".amplitude-current-seconds"), n = 0; n < t.length; n++) { var i = t[n].getAttribute("data-amplitude-playlist"),
                                    a = t[n].getAttribute("data-amplitude-song-index");
                                null == i && null == a && (t[n].innerHTML = e) } })(e),
                        function(e) { for (var t = document.querySelectorAll('.amplitude-current-seconds[data-amplitude-playlist="' + i.default.active_playlist + '"]'), n = 0; n < t.length; n++) null == t[n].getAttribute("data-amplitude-song-index") && (t[n].innerHTML = e) }(e),
                        function(e) { if (null == i.default.active_playlist)
                                for (var t = document.querySelectorAll('.amplitude-current-seconds[data-amplitude-song-index="' + i.default.active_index + '"]'), n = 0; n < t.length; n++) { var a = t[n].getAttribute("data-amplitude-playlist");
                                    null == a && (t[n].innerHTML = e) } }(e),
                        function(e) { for (var t = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, n = document.querySelectorAll('.amplitude-current-seconds[data-amplitude-playlist="' + i.default.active_playlist + '"][data-amplitude-song-index="' + t + '"]'), a = 0; a < n.length; a++) n[a].innerHTML = e }(e) }, resetTimes: function() { for (var e = document.querySelectorAll(".amplitude-current-seconds"), t = 0; t < e.length; t++) e[t].innerHTML = "00" } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { sync: function(e) {
                        (function(e) { var t = document.querySelectorAll(".amplitude-current-time"),
                                n = e.minutes + ":" + e.seconds;
                            e.hours > 0 && (n = e.hours + ":" + n); for (var i = 0; i < t.length; i++) { var a = t[i].getAttribute("data-amplitude-playlist"),
                                    r = t[i].getAttribute("data-amplitude-song-index");
                                null == a && null == r && (t[i].innerHTML = n) } })(e),
                        function(e) { var t = document.querySelectorAll('.amplitude-current-time[data-amplitude-playlist="' + i.default.active_playlist + '"]'),
                                n = e.minutes + ":" + e.seconds;
                            e.hours > 0 && (n = e.hours + ":" + n); for (var a = 0; a < t.length; a++) null == t[a].getAttribute("data-amplitude-song-index") && (t[a].innerHTML = n) }(e),
                        function(e) { if (null == i.default.active_playlist) { var t = document.querySelectorAll('.amplitude-current-time[data-amplitude-song-index="' + i.default.active_index + '"]'),
                                    n = e.minutes + ":" + e.seconds;
                                e.hours > 0 && (n = e.hours + ":" + n); for (var a = 0; a < t.length; a++) null == t[a].getAttribute("data-amplitude-playlist") && (t[a].innerHTML = n) } }(e),
                        function(e) { var t = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null,
                                n = document.querySelectorAll('.amplitude-current-time[data-amplitude-playlist="' + i.default.active_playlist + '"][data-amplitude-song-index="' + t + '"]'),
                                a = e.minutes + ":" + e.seconds;
                            e.hours > 0 && (a = e.hours + ":" + a); for (var r = 0; r < n.length; r++) n[r].innerHTML = a }(e) }, resetTimes: function() { for (var e = document.querySelectorAll(".amplitude-current-time"), t = 0; t < e.length; t++) e[t].innerHTML = "00:00" } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() {
                function e(e) { for (var t = document.querySelectorAll('.amplitude-time-remaining[data-amplitude-playlist="' + i.default.active_playlist + '"]'), n = 0; n < t.length; n++) null == t[n].getAttribute("data-amplitude-song-index") && (t[n].innerHTML = e) }

                function t(e) { if (null == i.default.active_playlist)
                        for (var t = document.querySelectorAll('.amplitude-time-remaining[data-amplitude-song-index="' + i.default.active_index + '"]'), n = 0; n < t.length; n++) { null == t[n].getAttribute("data-amplitude-playlist") && (t[n].innerHTML = e) } }

                function n(e) { for (var t = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, n = document.querySelectorAll('.amplitude-time-remaining[data-amplitude-playlist="' + i.default.active_playlist + '"][data-amplitude-song-index="' + t + '"]'), a = 0; a < n.length; a++) n[a].innerHTML = e } return { sync: function(i, a) { var r = function(e, t) { var n = "00:00",
                                i = parseInt(e.seconds) + 60 * parseInt(e.minutes) + 60 * parseInt(e.hours) * 60,
                                a = parseInt(t.seconds) + 60 * parseInt(t.minutes) + 60 * parseInt(t.hours) * 60; if (!isNaN(i) && !isNaN(a)) { var r = a - i,
                                    o = Math.floor(r / 3600),
                                    s = Math.floor((r - 3600 * o) / 60),
                                    l = r - 3600 * o - 60 * s;
                                n = (s < 10 ? "0" + s : s) + ":" + (l < 10 ? "0" + l : l), o > 0 && (n = o + ":" + n) } return n }(i, a);
                        (function(e) { for (var t = document.querySelectorAll(".amplitude-time-remaining"), n = 0; n < t.length; n++) { var i = t[n].getAttribute("data-amplitude-playlist"),
                                    a = t[n].getAttribute("data-amplitude-song-index");
                                null == i && null == a && (t[n].innerHTML = e) } })(r), e(r), t(r), n(r) }, resetTimes: function() { for (var e = document.querySelectorAll(".amplitude-time-remaining"), t = 0; t < e.length; t++) e[t].innerHTML = "00" } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { sync: function(e) {
                        (function(e) { for (var t = document.querySelectorAll(".amplitude-duration-hours"), n = 0; n < t.length; n++) { var i = t[n].getAttribute("data-amplitude-playlist"),
                                    a = t[n].getAttribute("data-amplitude-song-index");
                                null == i && null == a && (t[n].innerHTML = e) } })(e),
                        function(e) { for (var t = document.querySelectorAll('.amplitude-duration-hours[data-amplitude-playlist="' + i.default.active_playlist + '"]'), n = 0; n < t.length; n++) null == t[n].getAttribute("data-amplitude-song-index") && (t[n].innerHTML = e) }(e),
                        function(e) { if (null == i.default.active_playlist)
                                for (var t = document.querySelectorAll('.amplitude-duration-hours[data-amplitude-song-index="' + i.default.active_index + '"]'), n = 0; n < t.length; n++) { var a = t[n].getAttribute("data-amplitude-playlist");
                                    null == a && (t[n].innerHTML = e) } }(e),
                        function(e) { for (var t = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, n = document.querySelectorAll('.amplitude-duration-hours[data-amplitude-playlist="' + i.default.active_playlist + '"][data-amplitude-song-index="' + t + '"]'), a = 0; a < n.length; a++) n[a].innerHTML = e }(e) }, resetTimes: function() { for (var e = document.querySelectorAll(".amplitude-duration-hours"), t = 0; t < e.length; t++) e[t].innerHTML = "00" } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { sync: function(e) {
                        (function(e) { for (var t = document.querySelectorAll(".amplitude-duration-minutes"), n = 0; n < t.length; n++) { var i = t[n].getAttribute("data-amplitude-playlist"),
                                    a = t[n].getAttribute("data-amplitude-song-index");
                                null == i && null == a && (t[n].innerHTML = e) } })(e),
                        function(e) { for (var t = document.querySelectorAll('.amplitude-duration-minutes[data-amplitude-playlist="' + i.default.active_playlist + '"]'), n = 0; n < t.length; n++) null == t[n].getAttribute("data-amplitude-song-index") && (t[n].innerHTML = e) }(e),
                        function(e) { if (null == i.default.active_playlist)
                                for (var t = document.querySelectorAll('.amplitude-duration-minutes[data-amplitude-song-index="' + i.default.active_index + '"]'), n = 0; n < t.length; n++) { var a = t[n].getAttribute("data-amplitude-playlist");
                                    null == a && (t[n].innerHTML = e) } }(e),
                        function(e) { for (var t = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, n = document.querySelectorAll('.amplitude-duration-minutes[data-amplitude-playlist="' + i.default.active_playlist + '"][data-amplitude-song-index="' + t + '"]'), a = 0; a < n.length; a++) n[a].innerHTML = e }(e) }, resetTimes: function() { for (var e = document.querySelectorAll(".amplitude-duration-minutes"), t = 0; t < e.length; t++) e[t].innerHTML = "00" } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() { return { sync: function(e) {
                        (function(e) { for (var t = document.querySelectorAll(".amplitude-duration-seconds"), n = 0; n < t.length; n++) { var i = t[n].getAttribute("data-amplitude-playlist"),
                                    a = t[n].getAttribute("data-amplitude-song-index");
                                null == i && null == a && (t[n].innerHTML = e) } })(e),
                        function(e) { for (var t = document.querySelectorAll('.amplitude-duration-seconds[data-amplitude-playlist="' + i.default.active_playlist + '"]'), n = 0; n < t.length; n++) null == t[n].getAttribute("data-amplitude-song-index") && (t[n].innerHTML = e) }(e),
                        function(e) { if (null == i.default.active_playlist)
                                for (var t = document.querySelectorAll('.amplitude-duration-seconds[data-amplitude-song-index="' + i.default.active_index + '"]'), n = 0; n < t.length; n++) { var a = t[n].getAttribute("data--amplitude-playlist");
                                    null == a && (t[n].innerHTML = e) } }(e),
                        function(e) { for (var t = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, n = document.querySelectorAll('.amplitude-duration-seconds[data-amplitude-playlist="' + i.default.active_playlist + '"][data-amplitude-song-index="' + t + '"]'), a = 0; a < n.length; a++) n[a].innerHTML = e }(e) }, resetTimes: function() { for (var e = document.querySelectorAll(".amplitude-duration-seconds"), t = 0; t < e.length; t++) e[t].innerHTML = "00" } } }();
        t.default = a, e.exports = t.default }, function(e, t, n) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
            a = function() {
                function e(e) { for (var t = document.querySelectorAll('.amplitude-duration-time[data-amplitude-playlist="' + i.default.active_playlist + '"]'), n = 0; n < t.length; n++) null == t[n].getAttribute("data-amplitude-song-index") && (t[n].innerHTML = e) }

                function t(e) { if (null == i.default.active_playlist)
                        for (var t = document.querySelectorAll('.amplitude-duration-time[data-amplitude-song-index="' + i.default.active_index + '"]'), n = 0; n < t.length; n++) { null == t[n].getAttribute("data-amplitude-playlist") && (t[n].innerHTML = e) } }

                function n(e) { for (var t = "" != i.default.active_playlist && null != i.default.active_playlist ? i.default.playlists[i.default.active_playlist].active_index : null, n = document.querySelectorAll('.amplitude-duration-time[data-amplitude-playlist="' + i.default.active_playlist + '"][data-amplitude-song-index="' + t + '"]'), a = 0; a < n.length; a++) n[a].innerHTML = e } return { sync: function(i) { var a = function(e) { var t = "00:00"; return isNaN(e.minutes) || isNaN(e.seconds) || (t = e.minutes + ":" + e.seconds, !isNaN(e.hours) && e.hours > 0 && (t = e.hours + ":" + t)), t }(i);
                        (function(e) { for (var t = document.querySelectorAll(".amplitude-duration-time"), n = 0; n < t.length; n++) { var i = t[n].getAttribute("data-amplitude-playlist"),
                                    a = t[n].getAttribute("data-amplitude-song-index");
                                null == i && null == a && (t[n].innerHTML = e) } })(a), e(a), t(a), n(a) }, resetTimes: function() { for (var e = document.querySelectorAll(".amplitude-duration-time"), t = 0; t < e.length; t++) e[t].innerHTML = "00:00" } } }();
        t.default = a, e.exports = t.default }, function(e, t) { e.exports = { name: "amplitudejs", version: "4.0.0", description: "A JavaScript library that allows you to control the design of your media controls in your webpage -- not the browser. No dependencies (jQuery not required) https://521dimensions.com/open-source/amplitudejs", main: "dist/amplitude.js", devDependencies: { "babel-core": "^6.18.2", "babel-loader": "^7.0.0", "babel-plugin-add-module-exports": "0.2.1", "babel-polyfill": "^6.16.0", "babel-preset-es2015": "^6.18.0", husky: "^1.2.0", jest: "^23.6.0", prettier: "1.15.1", "pretty-quick": "^1.8.0", watch: "^1.0.2", webpack: "^2.6.0" }, directories: { doc: "docs" }, files: ["dist"], scripts: { build: "node_modules/.bin/webpack", watch: "watch 'node_modules/.bin/webpack' dist", prettier: "npx pretty-quick", test: "jest" }, repository: { type: "git", url: "git+https://github.com/521dimensions/amplitudejs.git" }, keywords: ["webaudio", "html5", "javascript", "audio-player"], author: "521 Dimensions (https://521dimensions.com)", license: "MIT", bugs: { url: "https://github.com/521dimensions/amplitudejs/issues" }, homepage: "https://github.com/521dimensions/amplitudejs#readme" } }]) }),
function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery) }(function(e) { var t = /\+/g;

    function n(e) { return r.raw ? e : encodeURIComponent(e) }

    function i(e) { return n(r.json ? JSON.stringify(e) : String(e)) }

    function a(n, i) { var a = r.raw ? n : function(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(t, " ")), r.json ? JSON.parse(e) : e } catch (e) {} }(n); return e.isFunction(i) ? i(a) : a } var r = e.cookie = function(t, o, s) { if (void 0 !== o && !e.isFunction(o)) { if ("number" == typeof(s = e.extend({}, r.defaults, s)).expires) { var l = s.expires,
                    u = s.expires = new Date;
                u.setTime(+u + 864e5 * l) } return document.cookie = [n(t), "=", i(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("") } for (var d, c = t ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], h = 0, p = f.length; h < p; h++) { var g = f[h].split("="),
                m = (d = g.shift(), r.raw ? d : decodeURIComponent(d)),
                v = g.join("="); if (t && t === m) { c = a(v, o); break } t || void 0 === (v = a(v)) || (c[m] = v) } return c };
    r.defaults = {}, e.removeCookie = function(t, n) { return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, { expires: -1 })), !e.cookie(t)) } }),
function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t() }(this, function() { "use strict"; var e, t;

    function n() { return e.apply(null, arguments) }

    function i(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) }

    function a(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) }

    function r(e) { return void 0 === e }

    function o(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) }

    function s(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) }

    function l(e, t) { var n, i = []; for (n = 0; n < e.length; ++n) i.push(t(e[n], n)); return i }

    function u(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }

    function d(e, t) { for (var n in t) u(t, n) && (e[n] = t[n]); return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e }

    function c(e, t, n, i) { return Mt(e, t, n, i, !0).utc() }

    function f(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf }

    function h(e) { if (null == e._isValid) { var n = f(e),
                i = t.call(n.parsedDateParts, function(e) { return null != e }),
                a = !isNaN(e._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && i); if (e._strict && (a = a && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
            e._isValid = a } return e._isValid }

    function p(e) { var t = c(NaN); return null != e ? d(f(t), e) : f(t).userInvalidated = !0, t } t = Array.prototype.some ? Array.prototype.some : function(e) { for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
            if (i in t && e.call(this, t[i], i, t)) return !0; return !1 }; var g = n.momentProperties = [];

    function m(e, t) { var n, i, a; if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = f(t)), r(t._locale) || (e._locale = t._locale), 0 < g.length)
            for (n = 0; n < g.length; n++) r(a = t[i = g[n]]) || (e[i] = a); return e } var v = !1;

    function y(e) { m(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, n.updateOffset(this), v = !1) }

    function _(e) { return e instanceof y || null != e && null != e._isAMomentObject }

    function b(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

    function w(e) { var t = +e,
            n = 0; return 0 !== t && isFinite(t) && (n = b(t)), n }

    function x(e, t, n) { var i, a = Math.min(e.length, t.length),
            r = Math.abs(e.length - t.length),
            o = 0; for (i = 0; i < a; i++)(n && e[i] !== t[i] || !n && w(e[i]) !== w(t[i])) && o++; return o + r }

    function S(e) {!1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

    function k(e, t) { var i = !0; return d(function() { if (null != n.deprecationHandler && n.deprecationHandler(null, e), i) { for (var a, r = [], o = 0; o < arguments.length; o++) { if (a = "", "object" == typeof arguments[o]) { for (var s in a += "\n[" + o + "] ", arguments[0]) a += s + ": " + arguments[0][s] + ", ";
                        a = a.slice(0, -2) } else a = arguments[o];
                    r.push(a) } S(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), i = !1 } return t.apply(this, arguments) }, t) } var T, M = {};

    function C(e, t) { null != n.deprecationHandler && n.deprecationHandler(e, t), M[e] || (S(t), M[e] = !0) }

    function D(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }

    function A(e, t) { var n, i = d({}, e); for (n in t) u(t, n) && (a(e[n]) && a(t[n]) ? (i[n] = {}, d(i[n], e[n]), d(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]); for (n in e) u(e, n) && !u(t, n) && a(e[n]) && (i[n] = d({}, i[n])); return i }

    function E(e) { null != e && this.set(e) } n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, T = Object.keys ? Object.keys : function(e) { var t, n = []; for (t in e) u(e, t) && n.push(t); return n }; var P = {};

    function O(e, t) { var n = e.toLowerCase();
        P[n] = P[n + "s"] = P[t] = e }

    function L(e) { return "string" == typeof e ? P[e] || P[e.toLowerCase()] : void 0 }

    function I(e) { var t, n, i = {}; for (n in e) u(e, n) && (t = L(n)) && (i[t] = e[n]); return i } var N = {};

    function H(e, t) { N[e] = t }

    function R(e, t, n) { var i = "" + Math.abs(e),
            a = t - i.length; return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i } var Y = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        W = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        F = {},
        j = {};

    function z(e, t, n, i) { var a = i; "string" == typeof i && (a = function() { return this[i]() }), e && (j[e] = a), t && (j[t[0]] = function() { return R(a.apply(this, arguments), t[1], t[2]) }), n && (j[n] = function() { return this.localeData().ordinal(a.apply(this, arguments), e) }) }

    function B(e, t) { return e.isValid() ? (t = q(t, e.localeData()), F[t] = F[t] || function(e) { var t, n, i, a = e.match(Y); for (t = 0, n = a.length; t < n; t++) j[a[t]] ? a[t] = j[a[t]] : a[t] = (i = a[t]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, ""); return function(t) { var i, r = ""; for (i = 0; i < n; i++) r += D(a[i]) ? a[i].call(t, e) : a[i]; return r } }(t), F[t](e)) : e.localeData().invalidDate() }

    function q(e, t) { var n = 5;

        function i(e) { return t.longDateFormat(e) || e } for (W.lastIndex = 0; 0 <= n && W.test(e);) e = e.replace(W, i), W.lastIndex = 0, n -= 1; return e } var $ = /\d/,
        V = /\d\d/,
        U = /\d{3}/,
        X = /\d{4}/,
        G = /[+-]?\d{6}/,
        K = /\d\d?/,
        Z = /\d\d\d\d?/,
        Q = /\d\d\d\d\d\d?/,
        J = /\d{1,3}/,
        ee = /\d{1,4}/,
        te = /[+-]?\d{1,6}/,
        ne = /\d+/,
        ie = /[+-]?\d+/,
        ae = /Z|[+-]\d\d:?\d\d/gi,
        re = /Z|[+-]\d\d(?::?\d\d)?/gi,
        oe = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        se = {};

    function le(e, t, n) { se[e] = D(t) ? t : function(e, i) { return e && n ? n : t } }

    function ue(e, t) { return u(se, e) ? se[e](t._strict, t._locale) : new RegExp(de(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, a) { return t || n || i || a }))) }

    function de(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var ce = {};

    function fe(e, t) { var n, i = t; for ("string" == typeof e && (e = [e]), o(t) && (i = function(e, n) { n[t] = w(e) }), n = 0; n < e.length; n++) ce[e[n]] = i }

    function he(e, t) { fe(e, function(e, n, i, a) { i._w = i._w || {}, t(e, i._w, i, a) }) } var pe = 0,
        ge = 1,
        me = 2,
        ve = 3,
        ye = 4,
        _e = 5,
        be = 6,
        we = 7,
        xe = 8;

    function Se(e) { return ke(e) ? 366 : 365 }

    function ke(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 } z("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? "" + e : "+" + e }), z(0, ["YY", 2], 0, function() { return this.year() % 100 }), z(0, ["YYYY", 4], 0, "year"), z(0, ["YYYYY", 5], 0, "year"), z(0, ["YYYYYY", 6, !0], 0, "year"), O("year", "y"), H("year", 1), le("Y", ie), le("YY", K, V), le("YYYY", ee, X), le("YYYYY", te, G), le("YYYYYY", te, G), fe(["YYYYY", "YYYYYY"], pe), fe("YYYY", function(e, t) { t[pe] = 2 === e.length ? n.parseTwoDigitYear(e) : w(e) }), fe("YY", function(e, t) { t[pe] = n.parseTwoDigitYear(e) }), fe("Y", function(e, t) { t[pe] = parseInt(e, 10) }), n.parseTwoDigitYear = function(e) { return w(e) + (68 < w(e) ? 1900 : 2e3) }; var Te, Me = Ce("FullYear", !0);

    function Ce(e, t) { return function(i) { return null != i ? (Ae(this, e, i), n.updateOffset(this, t), this) : De(this, e) } }

    function De(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN }

    function Ae(e, t, n) { e.isValid() && !isNaN(n) && ("FullYear" === t && ke(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Ee(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)) }

    function Ee(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var n = (t % 12 + 12) % 12; return e += (t - n) / 12, 1 === n ? ke(e) ? 29 : 28 : 31 - n % 7 % 2 } Te = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) { var t; for (t = 0; t < this.length; ++t)
            if (this[t] === e) return t; return -1 }, z("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), z("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) }), z("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) }), O("month", "M"), H("month", 8), le("M", K), le("MM", K, V), le("MMM", function(e, t) { return t.monthsShortRegex(e) }), le("MMMM", function(e, t) { return t.monthsRegex(e) }), fe(["M", "MM"], function(e, t) { t[ge] = w(e) - 1 }), fe(["MMM", "MMMM"], function(e, t, n, i) { var a = n._locale.monthsParse(e, i, n._strict);
        null != a ? t[ge] = a : f(n).invalidMonth = e }); var Pe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Oe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Le = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function Ie(e, t) { var n; if (!e.isValid()) return e; if ("string" == typeof t)
            if (/^\d+$/.test(t)) t = w(t);
            else if (!o(t = e.localeData().monthsParse(t))) return e; return n = Math.min(e.date(), Ee(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e }

    function Ne(e) { return null != e ? (Ie(this, e), n.updateOffset(this, !0), this) : De(this, "Month") } var He = oe,
        Re = oe;

    function Ye() {
        function e(e, t) { return t.length - e.length } var t, n, i = [],
            a = [],
            r = []; for (t = 0; t < 12; t++) n = c([2e3, t]), i.push(this.monthsShort(n, "")), a.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, "")); for (i.sort(e), a.sort(e), r.sort(e), t = 0; t < 12; t++) i[t] = de(i[t]), a[t] = de(a[t]); for (t = 0; t < 24; t++) r[t] = de(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i") }

    function We(e) { var t; if (e < 100 && 0 <= e) { var n = Array.prototype.slice.call(arguments);
            n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e) } else t = new Date(Date.UTC.apply(null, arguments)); return t }

    function Fe(e, t, n) { var i = 7 + t - n; return -(7 + We(e, 0, i).getUTCDay() - t) % 7 + i - 1 }

    function je(e, t, n, i, a) { var r, o, s = 1 + 7 * (t - 1) + (7 + n - i) % 7 + Fe(e, i, a); return o = s <= 0 ? Se(r = e - 1) + s : s > Se(e) ? (r = e + 1, s - Se(e)) : (r = e, s), { year: r, dayOfYear: o } }

    function ze(e, t, n) { var i, a, r = Fe(e.year(), t, n),
            o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1; return o < 1 ? i = o + Be(a = e.year() - 1, t, n) : o > Be(e.year(), t, n) ? (i = o - Be(e.year(), t, n), a = e.year() + 1) : (a = e.year(), i = o), { week: i, year: a } }

    function Be(e, t, n) { var i = Fe(e, t, n),
            a = Fe(e + 1, t, n); return (Se(e) - i + a) / 7 }

    function qe(e, t) { return e.slice(t, 7).concat(e.slice(0, t)) } z("w", ["ww", 2], "wo", "week"), z("W", ["WW", 2], "Wo", "isoWeek"), O("week", "w"), O("isoWeek", "W"), H("week", 5), H("isoWeek", 5), le("w", K), le("ww", K, V), le("W", K), le("WW", K, V), he(["w", "ww", "W", "WW"], function(e, t, n, i) { t[i.substr(0, 1)] = w(e) }), z("d", 0, "do", "day"), z("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) }), z("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) }), z("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) }), z("e", 0, 0, "weekday"), z("E", 0, 0, "isoWeekday"), O("day", "d"), O("weekday", "e"), O("isoWeekday", "E"), H("day", 11), H("weekday", 11), H("isoWeekday", 11), le("d", K), le("e", K), le("E", K), le("dd", function(e, t) { return t.weekdaysMinRegex(e) }), le("ddd", function(e, t) { return t.weekdaysShortRegex(e) }), le("dddd", function(e, t) { return t.weekdaysRegex(e) }), he(["dd", "ddd", "dddd"], function(e, t, n, i) { var a = n._locale.weekdaysParse(e, i, n._strict);
        null != a ? t.d = a : f(n).invalidWeekday = e }), he(["d", "e", "E"], function(e, t, n, i) { t[i] = w(e) }); var $e = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Ve = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Ue = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        Xe = oe,
        Ge = oe,
        Ke = oe;

    function Ze() {
        function e(e, t) { return t.length - e.length } var t, n, i, a, r, o = [],
            s = [],
            l = [],
            u = []; for (t = 0; t < 7; t++) n = c([2e3, 1]).day(t), i = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), o.push(i), s.push(a), l.push(r), u.push(i), u.push(a), u.push(r); for (o.sort(e), s.sort(e), l.sort(e), u.sort(e), t = 0; t < 7; t++) s[t] = de(s[t]), l[t] = de(l[t]), u[t] = de(u[t]);
        this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i") }

    function Qe() { return this.hours() % 12 || 12 }

    function Je(e, t) { z(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) }

    function et(e, t) { return t._meridiemParse } z("H", ["HH", 2], 0, "hour"), z("h", ["hh", 2], 0, Qe), z("k", ["kk", 2], 0, function() { return this.hours() || 24 }), z("hmm", 0, 0, function() { return "" + Qe.apply(this) + R(this.minutes(), 2) }), z("hmmss", 0, 0, function() { return "" + Qe.apply(this) + R(this.minutes(), 2) + R(this.seconds(), 2) }), z("Hmm", 0, 0, function() { return "" + this.hours() + R(this.minutes(), 2) }), z("Hmmss", 0, 0, function() { return "" + this.hours() + R(this.minutes(), 2) + R(this.seconds(), 2) }), Je("a", !0), Je("A", !1), O("hour", "h"), H("hour", 13), le("a", et), le("A", et), le("H", K), le("h", K), le("k", K), le("HH", K, V), le("hh", K, V), le("kk", K, V), le("hmm", Z), le("hmmss", Q), le("Hmm", Z), le("Hmmss", Q), fe(["H", "HH"], ve), fe(["k", "kk"], function(e, t, n) { var i = w(e);
        t[ve] = 24 === i ? 0 : i }), fe(["a", "A"], function(e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e }), fe(["h", "hh"], function(e, t, n) { t[ve] = w(e), f(n).bigHour = !0 }), fe("hmm", function(e, t, n) { var i = e.length - 2;
        t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i)), f(n).bigHour = !0 }), fe("hmmss", function(e, t, n) { var i = e.length - 4,
            a = e.length - 2;
        t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i, 2)), t[_e] = w(e.substr(a)), f(n).bigHour = !0 }), fe("Hmm", function(e, t, n) { var i = e.length - 2;
        t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i)) }), fe("Hmmss", function(e, t, n) { var i = e.length - 4,
            a = e.length - 2;
        t[ve] = w(e.substr(0, i)), t[ye] = w(e.substr(i, 2)), t[_e] = w(e.substr(a)) }); var tt, nt = Ce("Hours", !0),
        it = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Oe, monthsShort: Le, week: { dow: 0, doy: 6 }, weekdays: $e, weekdaysMin: Ue, weekdaysShort: Ve, meridiemParse: /[ap]\.?m?\.?/i },
        at = {},
        rt = {};

    function ot(e) { return e ? e.toLowerCase().replace("_", "-") : e }

    function st(e) { var t = null; if (!at[e] && "undefined" != typeof module && module && module.exports) try { t = tt._abbr, require("./locale/" + e), lt(t) }
        catch (e) {} return at[e] }

    function lt(e, t) { var n; return e && ((n = r(t) ? dt(e) : ut(e, t)) ? tt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), tt._abbr }

    function ut(e, t) { if (null === t) return delete at[e], null; var n, i = it; if (t.abbr = e, null != at[e]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = at[e]._config;
        else if (null != t.parentLocale)
            if (null != at[t.parentLocale]) i = at[t.parentLocale]._config;
            else { if (null == (n = st(t.parentLocale))) return rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({ name: e, config: t }), null;
                i = n._config }
        return at[e] = new E(A(i, t)), rt[e] && rt[e].forEach(function(e) { ut(e.name, e.config) }), lt(e), at[e] }

    function dt(e) { var t; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return tt; if (!i(e)) { if (t = st(e)) return t;
            e = [e] } return function(e) { for (var t, n, i, a, r = 0; r < e.length;) { for (t = (a = ot(e[r]).split("-")).length, n = (n = ot(e[r + 1])) ? n.split("-") : null; 0 < t;) { if (i = st(a.slice(0, t).join("-"))) return i; if (n && n.length >= t && x(a, n, !0) >= t - 1) break;
                    t-- } r++ } return tt }(e) }

    function ct(e) { var t, n = e._a; return n && -2 === f(e).overflow && (t = n[ge] < 0 || 11 < n[ge] ? ge : n[me] < 1 || n[me] > Ee(n[pe], n[ge]) ? me : n[ve] < 0 || 24 < n[ve] || 24 === n[ve] && (0 !== n[ye] || 0 !== n[_e] || 0 !== n[be]) ? ve : n[ye] < 0 || 59 < n[ye] ? ye : n[_e] < 0 || 59 < n[_e] ? _e : n[be] < 0 || 999 < n[be] ? be : -1, f(e)._overflowDayOfYear && (t < pe || me < t) && (t = me), f(e)._overflowWeeks && -1 === t && (t = we), f(e)._overflowWeekday && -1 === t && (t = xe), f(e).overflow = t), e }

    function ft(e, t, n) { return null != e ? e : null != t ? t : n }

    function ht(e) { var t, i, a, r, o, s = []; if (!e._d) { var l, u; for (l = e, u = new Date(n.now()), a = l._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()], e._w && null == e._a[me] && null == e._a[ge] && function(e) { var t, n, i, a, r, o, s, l; if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, o = 4, n = ft(t.GG, e._a[pe], ze(Ct(), 1, 4).year), i = ft(t.W, 1), ((a = ft(t.E, 1)) < 1 || 7 < a) && (l = !0);
                    else { r = e._locale._week.dow, o = e._locale._week.doy; var u = ze(Ct(), r, o);
                        n = ft(t.gg, e._a[pe], u.year), i = ft(t.w, u.week), null != t.d ? ((a = t.d) < 0 || 6 < a) && (l = !0) : null != t.e ? (a = t.e + r, (t.e < 0 || 6 < t.e) && (l = !0)) : a = r } i < 1 || i > Be(n, r, o) ? f(e)._overflowWeeks = !0 : null != l ? f(e)._overflowWeekday = !0 : (s = je(n, i, a, r, o), e._a[pe] = s.year, e._dayOfYear = s.dayOfYear) }(e), null != e._dayOfYear && (o = ft(e._a[pe], a[pe]), (e._dayOfYear > Se(o) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), i = We(o, 0, e._dayOfYear), e._a[ge] = i.getUTCMonth(), e._a[me] = i.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = a[t]; for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ve] && 0 === e._a[ye] && 0 === e._a[_e] && 0 === e._a[be] && (e._nextDay = !0, e._a[ve] = 0), e._d = (e._useUTC ? We : function(e, t, n, i, a, r, o) { var s; return e < 100 && 0 <= e ? (s = new Date(e + 400, t, n, i, a, r, o), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, n, i, a, r, o), s }).apply(null, s), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ve] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (f(e).weekdayMismatch = !0) } } var pt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        gt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        mt = /Z|[+-]\d\d(?::?\d\d)?/,
        vt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        yt = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        _t = /^\/?Date\((\-?\d+)/i;

    function bt(e) { var t, n, i, a, r, o, s = e._i,
            l = pt.exec(s) || gt.exec(s); if (l) { for (f(e).iso = !0, t = 0, n = vt.length; t < n; t++)
                if (vt[t][1].exec(l[1])) { a = vt[t][0], i = !1 !== vt[t][2]; break }
            if (null == a) return void(e._isValid = !1); if (l[3]) { for (t = 0, n = yt.length; t < n; t++)
                    if (yt[t][1].exec(l[3])) { r = (l[2] || " ") + yt[t][0]; break }
                if (null == r) return void(e._isValid = !1) } if (!i && null != r) return void(e._isValid = !1); if (l[4]) { if (!mt.exec(l[4])) return void(e._isValid = !1);
                o = "Z" } e._f = a + (r || "") + (o || ""), kt(e) } else e._isValid = !1 } var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/; var xt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

    function St(e) { var t, n, i, a = wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")); if (a) { var r = function(e, t, n, i, a, r) { var o = [function(e) { var t = parseInt(e, 10); return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t }(e), Le.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(a, 10)]; return r && o.push(parseInt(r, 10)), o }(a[4], a[3], a[2], a[5], a[6], a[7]); if (n = r, i = e, (t = a[1]) && Ve.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (f(i).weekdayMismatch = !0, !(i._isValid = !1))) return;
            e._a = r, e._tzm = function(e, t, n) { if (e) return xt[e]; if (t) return 0; var i = parseInt(n, 10),
                    a = i % 100; return (i - a) / 100 * 60 + a }(a[8], a[9], a[10]), e._d = We.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0 } else e._isValid = !1 }

    function kt(e) { if (e._f !== n.ISO_8601)
            if (e._f !== n.RFC_2822) { e._a = [], f(e).empty = !0; var t, i, a, r, o, s, l, d, c = "" + e._i,
                    h = c.length,
                    p = 0; for (a = q(e._f, e._locale).match(Y) || [], t = 0; t < a.length; t++) r = a[t], (i = (c.match(ue(r, e)) || [])[0]) && (0 < (o = c.substr(0, c.indexOf(i))).length && f(e).unusedInput.push(o), c = c.slice(c.indexOf(i) + i.length), p += i.length), j[r] ? (i ? f(e).empty = !1 : f(e).unusedTokens.push(r), s = r, d = e, null != (l = i) && u(ce, s) && ce[s](l, d._a, d, s)) : e._strict && !i && f(e).unusedTokens.push(r);
                f(e).charsLeftOver = h - p, 0 < c.length && f(e).unusedInput.push(c), e._a[ve] <= 12 && !0 === f(e).bigHour && 0 < e._a[ve] && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[ve] = function(e, t, n) { var i; return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((i = e.isPM(n)) && t < 12 && (t += 12), i || 12 !== t || (t = 0)), t) }(e._locale, e._a[ve], e._meridiem), ht(e), ct(e) }
        else St(e);
        else bt(e) }

    function Tt(e) { var t, u, c, g, v = e._i,
            b = e._f; return e._locale = e._locale || dt(e._l), null === v || void 0 === b && "" === v ? p({ nullInput: !0 }) : ("string" == typeof v && (e._i = v = e._locale.preparse(v)), _(v) ? new y(ct(v)) : (s(v) ? e._d = v : i(b) ? function(e) { var t, n, i, a, r; if (0 === e._f.length) return f(e).invalidFormat = !0, e._d = new Date(NaN); for (a = 0; a < e._f.length; a++) r = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], kt(t), h(t) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, (null == i || r < i) && (i = r, n = t));
            d(e, n || t) }(e) : b ? kt(e) : r(u = (t = e)._i) ? t._d = new Date(n.now()) : s(u) ? t._d = new Date(u.valueOf()) : "string" == typeof u ? (c = t, null === (g = _t.exec(c._i)) ? (bt(c), !1 === c._isValid && (delete c._isValid, St(c), !1 === c._isValid && (delete c._isValid, n.createFromInputFallback(c)))) : c._d = new Date(+g[1])) : i(u) ? (t._a = l(u.slice(0), function(e) { return parseInt(e, 10) }), ht(t)) : a(u) ? function(e) { if (!e._d) { var t = I(e._i);
                e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) { return e && parseInt(e, 10) }), ht(e) } }(t) : o(u) ? t._d = new Date(u) : n.createFromInputFallback(t), h(e) || (e._d = null), e)) }

    function Mt(e, t, n, r, o) { var s, l = {}; return !0 !== n && !1 !== n || (r = n, n = void 0), (a(e) && function(e) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length; var t; for (t in e)
                if (e.hasOwnProperty(t)) return !1; return !0 }(e) || i(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = n, l._i = e, l._f = t, l._strict = r, (s = new y(ct(Tt(l))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s }

    function Ct(e, t, n, i) { return Mt(e, t, n, i, !1) } n.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), n.ISO_8601 = function() {}, n.RFC_2822 = function() {}; var Dt = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = Ct.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : p() }),
        At = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = Ct.apply(null, arguments); return this.isValid() && e.isValid() ? this < e ? this : e : p() });

    function Et(e, t) { var n, a; if (1 === t.length && i(t[0]) && (t = t[0]), !t.length) return Ct(); for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]); return n } var Pt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Ot(e) { var t = I(e),
            n = t.year || 0,
            i = t.quarter || 0,
            a = t.month || 0,
            r = t.week || t.isoWeek || 0,
            o = t.day || 0,
            s = t.hour || 0,
            l = t.minute || 0,
            u = t.second || 0,
            d = t.millisecond || 0;
        this._isValid = function(e) { for (var t in e)
                if (-1 === Te.call(Pt, t) || null != e[t] && isNaN(e[t])) return !1; for (var n = !1, i = 0; i < Pt.length; ++i)
                if (e[Pt[i]]) { if (n) return !1;
                    parseFloat(e[Pt[i]]) !== w(e[Pt[i]]) && (n = !0) }
            return !0 }(t), this._milliseconds = +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +o + 7 * r, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = dt(), this._bubble() }

    function Lt(e) { return e instanceof Ot }

    function It(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) }

    function Nt(e, t) { z(e, 0, 0, function() { var e = this.utcOffset(),
                n = "+"; return e < 0 && (e = -e, n = "-"), n + R(~~(e / 60), 2) + t + R(~~e % 60, 2) }) } Nt("Z", ":"), Nt("ZZ", ""), le("Z", re), le("ZZ", re), fe(["Z", "ZZ"], function(e, t, n) { n._useUTC = !0, n._tzm = Rt(re, e) }); var Ht = /([\+\-]|\d\d)/gi;

    function Rt(e, t) { var n = (t || "").match(e); if (null === n) return null; var i = ((n[n.length - 1] || []) + "").match(Ht) || ["-", 0, 0],
            a = 60 * i[1] + w(i[2]); return 0 === a ? 0 : "+" === i[0] ? a : -a }

    function Yt(e, t) { var i, a; return t._isUTC ? (i = t.clone(), a = (_(e) || s(e) ? e.valueOf() : Ct(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + a), n.updateOffset(i, !1), i) : Ct(e).local() }

    function Wt(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15) }

    function Ft() { return !!this.isValid() && this._isUTC && 0 === this._offset } n.updateOffset = function() {}; var jt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        zt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function Bt(e, t) { var n, i, a, r = e,
            s = null; return Lt(e) ? r = { ms: e._milliseconds, d: e._days, M: e._months } : o(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (s = jt.exec(e)) ? (n = "-" === s[1] ? -1 : 1, r = { y: 0, d: w(s[me]) * n, h: w(s[ve]) * n, m: w(s[ye]) * n, s: w(s[_e]) * n, ms: w(It(1e3 * s[be])) * n }) : (s = zt.exec(e)) ? (n = "-" === s[1] ? -1 : 1, r = { y: qt(s[2], n), M: qt(s[3], n), w: qt(s[4], n), d: qt(s[5], n), h: qt(s[6], n), m: qt(s[7], n), s: qt(s[8], n) }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (a = function(e, t) { var n; return e.isValid() && t.isValid() ? (t = Yt(t, e), e.isBefore(t) ? n = $t(e, t) : ((n = $t(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 } }(Ct(r.from), Ct(r.to)), (r = {}).ms = a.milliseconds, r.M = a.months), i = new Ot(r), Lt(e) && u(e, "_locale") && (i._locale = e._locale), i }

    function qt(e, t) { var n = e && parseFloat(e.replace(",", ".")); return (isNaN(n) ? 0 : n) * t }

    function $t(e, t) { var n = {}; return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n }

    function Vt(e, t) { return function(n, i) { var a; return null === i || isNaN(+i) || (C(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = i, i = a), Ut(this, Bt(n = "string" == typeof n ? +n : n, i), e), this } }

    function Ut(e, t, i, a) { var r = t._milliseconds,
            o = It(t._days),
            s = It(t._months);
        e.isValid() && (a = null == a || a, s && Ie(e, De(e, "Month") + s * i), o && Ae(e, "Date", De(e, "Date") + o * i), r && e._d.setTime(e._d.valueOf() + r * i), a && n.updateOffset(e, o || s)) } Bt.fn = Ot.prototype, Bt.invalid = function() { return Bt(NaN) }; var Xt = Vt(1, "add"),
        Gt = Vt(-1, "subtract");

    function Kt(e, t) { var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            i = e.clone().add(n, "months"); return -(n + (t - i < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(n + 1, "months") - i))) || 0 }

    function Zt(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = dt(e)) && (this._locale = t), this) } n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var Qt = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return void 0 === e ? this.localeData() : this.locale(e) });

    function Jt() { return this._locale } var en = 126227808e5;

    function tn(e, t) { return (e % t + t) % t }

    function nn(e, t, n) { return e < 100 && 0 <= e ? new Date(e + 400, t, n) - en : new Date(e, t, n).valueOf() }

    function an(e, t, n) { return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - en : Date.UTC(e, t, n) }

    function rn(e, t) { z(0, [e, e.length], 0, t) }

    function on(e, t, n, i, a) { var r; return null == e ? ze(this, i, a).year : ((r = Be(e, i, a)) < t && (t = r), function(e, t, n, i, a) { var r = je(e, t, n, i, a),
                o = We(r.year, 0, r.dayOfYear); return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this }.call(this, e, t, n, i, a)) } z(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), z(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), rn("gggg", "weekYear"), rn("ggggg", "weekYear"), rn("GGGG", "isoWeekYear"), rn("GGGGG", "isoWeekYear"), O("weekYear", "gg"), O("isoWeekYear", "GG"), H("weekYear", 1), H("isoWeekYear", 1), le("G", ie), le("g", ie), le("GG", K, V), le("gg", K, V), le("GGGG", ee, X), le("gggg", ee, X), le("GGGGG", te, G), le("ggggg", te, G), he(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) { t[i.substr(0, 2)] = w(e) }), he(["gg", "GG"], function(e, t, i, a) { t[a] = n.parseTwoDigitYear(e) }), z("Q", 0, "Qo", "quarter"), O("quarter", "Q"), H("quarter", 7), le("Q", $), fe("Q", function(e, t) { t[ge] = 3 * (w(e) - 1) }), z("D", ["DD", 2], "Do", "date"), O("date", "D"), H("date", 9), le("D", K), le("DD", K, V), le("Do", function(e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient }), fe(["D", "DD"], me), fe("Do", function(e, t) { t[me] = w(e.match(K)[0]) }); var sn = Ce("Date", !0);
    z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), O("dayOfYear", "DDD"), H("dayOfYear", 4), le("DDD", J), le("DDDD", U), fe(["DDD", "DDDD"], function(e, t, n) { n._dayOfYear = w(e) }), z("m", ["mm", 2], 0, "minute"), O("minute", "m"), H("minute", 14), le("m", K), le("mm", K, V), fe(["m", "mm"], ye); var ln = Ce("Minutes", !1);
    z("s", ["ss", 2], 0, "second"), O("second", "s"), H("second", 15), le("s", K), le("ss", K, V), fe(["s", "ss"], _e); var un, dn = Ce("Seconds", !1); for (z("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), z(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), z(0, ["SSS", 3], 0, "millisecond"), z(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), z(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), z(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), z(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), z(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), z(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), O("millisecond", "ms"), H("millisecond", 16), le("S", J, $), le("SS", J, V), le("SSS", J, U), un = "SSSS"; un.length <= 9; un += "S") le(un, ne);

    function cn(e, t) { t[be] = w(1e3 * ("0." + e)) } for (un = "S"; un.length <= 9; un += "S") fe(un, cn); var fn = Ce("Milliseconds", !1);
    z("z", 0, 0, "zoneAbbr"), z("zz", 0, 0, "zoneName"); var hn = y.prototype;

    function pn(e) { return e } hn.add = Xt, hn.calendar = function(e, t) { var i = e || Ct(),
            a = Yt(i, this).startOf("day"),
            r = n.calendarFormat(this, a) || "sameElse",
            o = t && (D(t[r]) ? t[r].call(this, i) : t[r]); return this.format(o || this.localeData().calendar(r, this, Ct(i))) }, hn.clone = function() { return new y(this) }, hn.diff = function(e, t, n) { var i, a, r; if (!this.isValid()) return NaN; if (!(i = Yt(e, this)).isValid()) return NaN; switch (a = 6e4 * (i.utcOffset() - this.utcOffset()), t = L(t)) {
            case "year":
                r = Kt(this, i) / 12; break;
            case "month":
                r = Kt(this, i); break;
            case "quarter":
                r = Kt(this, i) / 3; break;
            case "second":
                r = (this - i) / 1e3; break;
            case "minute":
                r = (this - i) / 6e4; break;
            case "hour":
                r = (this - i) / 36e5; break;
            case "day":
                r = (this - i - a) / 864e5; break;
            case "week":
                r = (this - i - a) / 6048e5; break;
            default:
                r = this - i } return n ? r : b(r) }, hn.endOf = function(e) { var t; if (void 0 === (e = L(e)) || "millisecond" === e || !this.isValid()) return this; var i = this._isUTC ? an : nn; switch (e) {
            case "year":
                t = i(this.year() + 1, 0, 1) - 1; break;
            case "quarter":
                t = i(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break;
            case "month":
                t = i(this.year(), this.month() + 1, 1) - 1; break;
            case "week":
                t = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break;
            case "isoWeek":
                t = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break;
            case "day":
            case "date":
                t = i(this.year(), this.month(), this.date() + 1) - 1; break;
            case "hour":
                t = this._d.valueOf(), t += 36e5 - tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1; break;
            case "minute":
                t = this._d.valueOf(), t += 6e4 - tn(t, 6e4) - 1; break;
            case "second":
                t = this._d.valueOf(), t += 1e3 - tn(t, 1e3) - 1 } return this._d.setTime(t), n.updateOffset(this, !0), this }, hn.format = function(e) { e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat); var t = B(this, e); return this.localeData().postformat(t) }, hn.from = function(e, t) { return this.isValid() && (_(e) && e.isValid() || Ct(e).isValid()) ? Bt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, hn.fromNow = function(e) { return this.from(Ct(), e) }, hn.to = function(e, t) { return this.isValid() && (_(e) && e.isValid() || Ct(e).isValid()) ? Bt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, hn.toNow = function(e) { return this.to(Ct(), e) }, hn.get = function(e) { return D(this[e = L(e)]) ? this[e]() : this }, hn.invalidAt = function() { return f(this).overflow }, hn.isAfter = function(e, t) { var n = _(e) ? e : Ct(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = L(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) }, hn.isBefore = function(e, t) { var n = _(e) ? e : Ct(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = L(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) }, hn.isBetween = function(e, t, n, i) { var a = _(e) ? e : Ct(e),
            r = _(t) ? t : Ct(t); return !!(this.isValid() && a.isValid() && r.isValid()) && ("(" === (i = i || "()")[0] ? this.isAfter(a, n) : !this.isBefore(a, n)) && (")" === i[1] ? this.isBefore(r, n) : !this.isAfter(r, n)) }, hn.isSame = function(e, t) { var n, i = _(e) ? e : Ct(e); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = L(t) || "millisecond") ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) }, hn.isSameOrAfter = function(e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, hn.isSameOrBefore = function(e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, hn.isValid = function() { return h(this) }, hn.lang = Qt, hn.locale = Zt, hn.localeData = Jt, hn.max = At, hn.min = Dt, hn.parsingFlags = function() { return d({}, f(this)) }, hn.set = function(e, t) { if ("object" == typeof e)
            for (var n = function(e) { var t = []; for (var n in e) t.push({ unit: n, priority: N[n] }); return t.sort(function(e, t) { return e.priority - t.priority }), t }(e = I(e)), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit]);
        else if (D(this[e = L(e)])) return this[e](t); return this }, hn.startOf = function(e) { var t; if (void 0 === (e = L(e)) || "millisecond" === e || !this.isValid()) return this; var i = this._isUTC ? an : nn; switch (e) {
            case "year":
                t = i(this.year(), 0, 1); break;
            case "quarter":
                t = i(this.year(), this.month() - this.month() % 3, 1); break;
            case "month":
                t = i(this.year(), this.month(), 1); break;
            case "week":
                t = i(this.year(), this.month(), this.date() - this.weekday()); break;
            case "isoWeek":
                t = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break;
            case "day":
            case "date":
                t = i(this.year(), this.month(), this.date()); break;
            case "hour":
                t = this._d.valueOf(), t -= tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5); break;
            case "minute":
                t = this._d.valueOf(), t -= tn(t, 6e4); break;
            case "second":
                t = this._d.valueOf(), t -= tn(t, 1e3) } return this._d.setTime(t), n.updateOffset(this, !0), this }, hn.subtract = Gt, hn.toArray = function() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, hn.toObject = function() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, hn.toDate = function() { return new Date(this.valueOf()) }, hn.toISOString = function(e) { if (!this.isValid()) return null; var t = !0 !== e,
            n = t ? this.clone().utc() : this; return n.year() < 0 || 9999 < n.year() ? B(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : D(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", B(n, "Z")) : B(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, hn.inspect = function() { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var e = "moment",
            t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z"); var n = "[" + e + '("]',
            i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            a = t + '[")]'; return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + a) }, hn.toJSON = function() { return this.isValid() ? this.toISOString() : null }, hn.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, hn.unix = function() { return Math.floor(this.valueOf() / 1e3) }, hn.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, hn.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, hn.year = Me, hn.isLeapYear = function() { return ke(this.year()) }, hn.weekYear = function(e) { return on.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, hn.isoWeekYear = function(e) { return on.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, hn.quarter = hn.quarters = function(e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, hn.month = Ne, hn.daysInMonth = function() { return Ee(this.year(), this.month()) }, hn.week = hn.weeks = function(e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, hn.isoWeek = hn.isoWeeks = function(e) { var t = ze(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, hn.weeksInYear = function() { var e = this.localeData()._week; return Be(this.year(), e.dow, e.doy) }, hn.isoWeeksInYear = function() { return Be(this.year(), 1, 4) }, hn.date = sn, hn.day = hn.days = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - i, "d")) : i }, hn.weekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, hn.isoWeekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; if (null == e) return this.day() || 7; var t, n, i = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t); return this.day(this.day() % 7 ? i : i - 7) }, hn.dayOfYear = function(e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, hn.hour = hn.hours = nt, hn.minute = hn.minutes = ln, hn.second = hn.seconds = dn, hn.millisecond = hn.milliseconds = fn, hn.utcOffset = function(e, t, i) { var a, r = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null == e) return this._isUTC ? r : Wt(this); if ("string" == typeof e) { if (null === (e = Rt(re, e))) return this } else Math.abs(e) < 16 && !i && (e *= 60); return !this._isUTC && t && (a = Wt(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Ut(this, Bt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this }, hn.utc = function(e) { return this.utcOffset(0, e) }, hn.local = function(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Wt(this), "m")), this }, hn.parseZone = function() { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) { var e = Rt(ae, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0) } return this }, hn.hasAlignedHourOffset = function(e) { return !!this.isValid() && (e = e ? Ct(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, hn.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, hn.isLocal = function() { return !!this.isValid() && !this._isUTC }, hn.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, hn.isUtc = Ft, hn.isUTC = Ft, hn.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, hn.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, hn.dates = k("dates accessor is deprecated. Use date instead.", sn), hn.months = k("months accessor is deprecated. Use month instead", Ne), hn.years = k("years accessor is deprecated. Use year instead", Me), hn.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }), hn.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() { if (!r(this._isDSTShifted)) return this._isDSTShifted; var e = {}; if (m(e, this), (e = Tt(e))._a) { var t = e._isUTC ? c(e._a) : Ct(e._a);
            this._isDSTShifted = this.isValid() && 0 < x(e._a, t.toArray()) } else this._isDSTShifted = !1; return this._isDSTShifted }); var gn = E.prototype;

    function mn(e, t, n, i) { var a = dt(),
            r = c().set(i, t); return a[n](r, e) }

    function vn(e, t, n) { if (o(e) && (t = e, e = void 0), e = e || "", null != t) return mn(e, t, n, "month"); var i, a = []; for (i = 0; i < 12; i++) a[i] = mn(e, i, n, "month"); return a }

    function yn(e, t, n, i) { "boolean" == typeof e ? o(t) && (n = t, t = void 0) : (t = e, e = !1, o(n = t) && (n = t, t = void 0)), t = t || ""; var a, r = dt(),
            s = e ? r._week.dow : 0; if (null != n) return mn(t, (n + s) % 7, i, "day"); var l = []; for (a = 0; a < 7; a++) l[a] = mn(t, (a + s) % 7, i, "day"); return l } gn.calendar = function(e, t, n) { var i = this._calendar[e] || this._calendar.sameElse; return D(i) ? i.call(t, n) : i }, gn.longDateFormat = function(e) { var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()]; return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) { return e.slice(1) }), this._longDateFormat[e]) }, gn.invalidDate = function() { return this._invalidDate }, gn.ordinal = function(e) { return this._ordinal.replace("%d", e) }, gn.preparse = pn, gn.postformat = pn, gn.relativeTime = function(e, t, n, i) { var a = this._relativeTime[n]; return D(a) ? a(e, t, n, i) : a.replace(/%d/i, e) }, gn.pastFuture = function(e, t) { var n = this._relativeTime[0 < e ? "future" : "past"]; return D(n) ? n(t) : n.replace(/%s/i, t) }, gn.set = function(e) { var t, n; for (n in e) D(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, gn.months = function(e, t) { return e ? i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Pe).test(t) ? "format" : "standalone"][e.month()] : i(this._months) ? this._months : this._months.standalone }, gn.monthsShort = function(e, t) { return e ? i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Pe.test(t) ? "format" : "standalone"][e.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, gn.monthsParse = function(e, t, n) { var i, a, r; if (this._monthsParseExact) return function(e, t, n) { var i, a, r, o = e.toLocaleLowerCase(); if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) r = c([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase(); return n ? "MMM" === t ? -1 !== (a = Te.call(this._shortMonthsParse, o)) ? a : null : -1 !== (a = Te.call(this._longMonthsParse, o)) ? a : null : "MMM" === t ? -1 !== (a = Te.call(this._shortMonthsParse, o)) ? a : -1 !== (a = Te.call(this._longMonthsParse, o)) ? a : null : -1 !== (a = Te.call(this._longMonthsParse, o)) ? a : -1 !== (a = Te.call(this._shortMonthsParse, o)) ? a : null }.call(this, e, t, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) { if (a = c([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i; if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i; if (!n && this._monthsParse[i].test(e)) return i } }, gn.monthsRegex = function(e) { return this._monthsParseExact ? (u(this, "_monthsRegex") || Ye.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = Re), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, gn.monthsShortRegex = function(e) { return this._monthsParseExact ? (u(this, "_monthsRegex") || Ye.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = He), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, gn.week = function(e) { return ze(e, this._week.dow, this._week.doy).week }, gn.firstDayOfYear = function() { return this._week.doy }, gn.firstDayOfWeek = function() { return this._week.dow }, gn.weekdays = function(e, t) { var n = i(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]; return !0 === e ? qe(n, this._week.dow) : e ? n[e.day()] : n }, gn.weekdaysMin = function(e) { return !0 === e ? qe(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, gn.weekdaysShort = function(e) { return !0 === e ? qe(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, gn.weekdaysParse = function(e, t, n) { var i, a, r; if (this._weekdaysParseExact) return function(e, t, n) { var i, a, r, o = e.toLocaleLowerCase(); if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) r = c([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase(); return n ? "dddd" === t ? -1 !== (a = Te.call(this._weekdaysParse, o)) ? a : null : "ddd" === t ? -1 !== (a = Te.call(this._shortWeekdaysParse, o)) ? a : null : -1 !== (a = Te.call(this._minWeekdaysParse, o)) ? a : null : "dddd" === t ? -1 !== (a = Te.call(this._weekdaysParse, o)) ? a : -1 !== (a = Te.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Te.call(this._minWeekdaysParse, o)) ? a : null : "ddd" === t ? -1 !== (a = Te.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Te.call(this._weekdaysParse, o)) ? a : -1 !== (a = Te.call(this._minWeekdaysParse, o)) ? a : null : -1 !== (a = Te.call(this._minWeekdaysParse, o)) ? a : -1 !== (a = Te.call(this._weekdaysParse, o)) ? a : -1 !== (a = Te.call(this._shortWeekdaysParse, o)) ? a : null }.call(this, e, t, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) { if (a = c([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i; if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i; if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i; if (!n && this._weekdaysParse[i].test(e)) return i } }, gn.weekdaysRegex = function(e) { return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ze.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Xe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, gn.weekdaysShortRegex = function(e) { return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ze.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ge), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, gn.weekdaysMinRegex = function(e) { return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ze.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ke), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, gn.isPM = function(e) { return "p" === (e + "").toLowerCase().charAt(0) }, gn.meridiem = function(e, t, n) { return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM" }, lt("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10; return e + (1 === w(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } }), n.lang = k("moment.lang is deprecated. Use moment.locale instead.", lt), n.langData = k("moment.langData is deprecated. Use moment.localeData instead.", dt); var _n = Math.abs;

    function bn(e, t, n, i) { var a = Bt(t, n); return e._milliseconds += i * a._milliseconds, e._days += i * a._days, e._months += i * a._months, e._bubble() }

    function wn(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

    function xn(e) { return 4800 * e / 146097 }

    function Sn(e) { return 146097 * e / 4800 }

    function kn(e) { return function() { return this.as(e) } } var Tn = kn("ms"),
        Mn = kn("s"),
        Cn = kn("m"),
        Dn = kn("h"),
        An = kn("d"),
        En = kn("w"),
        Pn = kn("M"),
        On = kn("Q"),
        Ln = kn("y");

    function In(e) { return function() { return this.isValid() ? this._data[e] : NaN } } var Nn = In("milliseconds"),
        Hn = In("seconds"),
        Rn = In("minutes"),
        Yn = In("hours"),
        Wn = In("days"),
        Fn = In("months"),
        jn = In("years"),
        zn = Math.round,
        Bn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
        qn = Math.abs;

    function $n(e) { return (0 < e) - (e < 0) || +e }

    function Vn() { if (!this.isValid()) return this.localeData().invalidDate(); var e, t, n = qn(this._milliseconds) / 1e3,
            i = qn(this._days),
            a = qn(this._months);
        t = b((e = b(n / 60)) / 60), n %= 60, e %= 60; var r = b(a / 12),
            o = a %= 12,
            s = i,
            l = t,
            u = e,
            d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            c = this.asSeconds(); if (!c) return "P0D"; var f = c < 0 ? "-" : "",
            h = $n(this._months) !== $n(c) ? "-" : "",
            p = $n(this._days) !== $n(c) ? "-" : "",
            g = $n(this._milliseconds) !== $n(c) ? "-" : ""; return f + "P" + (r ? h + r + "Y" : "") + (o ? h + o + "M" : "") + (s ? p + s + "D" : "") + (l || u || d ? "T" : "") + (l ? g + l + "H" : "") + (u ? g + u + "M" : "") + (d ? g + d + "S" : "") } var Un = Ot.prototype; return Un.isValid = function() { return this._isValid }, Un.abs = function() { var e = this._data; return this._milliseconds = _n(this._milliseconds), this._days = _n(this._days), this._months = _n(this._months), e.milliseconds = _n(e.milliseconds), e.seconds = _n(e.seconds), e.minutes = _n(e.minutes), e.hours = _n(e.hours), e.months = _n(e.months), e.years = _n(e.years), this }, Un.add = function(e, t) { return bn(this, e, t, 1) }, Un.subtract = function(e, t) { return bn(this, e, t, -1) }, Un.as = function(e) { if (!this.isValid()) return NaN; var t, n, i = this._milliseconds; if ("month" === (e = L(e)) || "quarter" === e || "year" === e) switch (t = this._days + i / 864e5, n = this._months + xn(t), e) {
            case "month":
                return n;
            case "quarter":
                return n / 3;
            case "year":
                return n / 12 }
        else switch (t = this._days + Math.round(Sn(this._months)), e) {
            case "week":
                return t / 7 + i / 6048e5;
            case "day":
                return t + i / 864e5;
            case "hour":
                return 24 * t + i / 36e5;
            case "minute":
                return 1440 * t + i / 6e4;
            case "second":
                return 86400 * t + i / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + i;
            default:
                throw new Error("Unknown unit " + e) } }, Un.asMilliseconds = Tn, Un.asSeconds = Mn, Un.asMinutes = Cn, Un.asHours = Dn, Un.asDays = An, Un.asWeeks = En, Un.asMonths = Pn, Un.asQuarters = On, Un.asYears = Ln, Un.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN }, Un._bubble = function() { var e, t, n, i, a, r = this._milliseconds,
            o = this._days,
            s = this._months,
            l = this._data; return 0 <= r && 0 <= o && 0 <= s || r <= 0 && o <= 0 && s <= 0 || (r += 864e5 * wn(Sn(s) + o), s = o = 0), l.milliseconds = r % 1e3, e = b(r / 1e3), l.seconds = e % 60, t = b(e / 60), l.minutes = t % 60, n = b(t / 60), l.hours = n % 24, s += a = b(xn(o += b(n / 24))), o -= wn(Sn(a)), i = b(s / 12), s %= 12, l.days = o, l.months = s, l.years = i, this }, Un.clone = function() { return Bt(this) }, Un.get = function(e) { return e = L(e), this.isValid() ? this[e + "s"]() : NaN }, Un.milliseconds = Nn, Un.seconds = Hn, Un.minutes = Rn, Un.hours = Yn, Un.days = Wn, Un.weeks = function() { return b(this.days() / 7) }, Un.months = Fn, Un.years = jn, Un.humanize = function(e) { if (!this.isValid()) return this.localeData().invalidDate(); var t, n, i, a, r, o, s, l, u, d, c = this.localeData(),
            f = (t = !e, n = c, i = Bt(this).abs(), a = zn(i.as("s")), r = zn(i.as("m")), o = zn(i.as("h")), s = zn(i.as("d")), l = zn(i.as("M")), u = zn(i.as("y")), (d = a <= Bn.ss && ["s", a] || a < Bn.s && ["ss", a] || r <= 1 && ["m"] || r < Bn.m && ["mm", r] || o <= 1 && ["h"] || o < Bn.h && ["hh", o] || s <= 1 && ["d"] || s < Bn.d && ["dd", s] || l <= 1 && ["M"] || l < Bn.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u])[2] = t, d[3] = 0 < +this, d[4] = n, function(e, t, n, i, a) { return a.relativeTime(t || 1, !!n, e, i) }.apply(null, d)); return e && (f = c.pastFuture(+this, f)), c.postformat(f) }, Un.toISOString = Vn, Un.toString = Vn, Un.toJSON = Vn, Un.locale = Zt, Un.localeData = Jt, Un.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vn), Un.lang = Qt, z("X", 0, 0, "unix"), z("x", 0, 0, "valueOf"), le("x", ie), le("X", /[+-]?\d+(\.\d{1,3})?/), fe("X", function(e, t, n) { n._d = new Date(1e3 * parseFloat(e, 10)) }), fe("x", function(e, t, n) { n._d = new Date(w(e)) }), n.version = "2.24.0", e = Ct, n.fn = hn, n.min = function() { return Et("isBefore", [].slice.call(arguments, 0)) }, n.max = function() { return Et("isAfter", [].slice.call(arguments, 0)) }, n.now = function() { return Date.now ? Date.now() : +new Date }, n.utc = c, n.unix = function(e) { return Ct(1e3 * e) }, n.months = function(e, t) { return vn(e, t, "months") }, n.isDate = s, n.locale = lt, n.invalid = p, n.duration = Bt, n.isMoment = _, n.weekdays = function(e, t, n) { return yn(e, t, n, "weekdays") }, n.parseZone = function() { return Ct.apply(null, arguments).parseZone() }, n.localeData = dt, n.isDuration = Lt, n.monthsShort = function(e, t) { return vn(e, t, "monthsShort") }, n.weekdaysMin = function(e, t, n) { return yn(e, t, n, "weekdaysMin") }, n.defineLocale = ut, n.updateLocale = function(e, t) { if (null != t) { var n, i, a = it;
            null != (i = st(e)) && (a = i._config), (n = new E(t = A(a, t))).parentLocale = at[e], at[e] = n, lt(e) } else null != at[e] && (null != at[e].parentLocale ? at[e] = at[e].parentLocale : null != at[e] && delete at[e]); return at[e] }, n.locales = function() { return T(at) }, n.weekdaysShort = function(e, t, n) { return yn(e, t, n, "weekdaysShort") }, n.normalizeUnits = L, n.relativeTimeRounding = function(e) { return void 0 === e ? zn : "function" == typeof e && (zn = e, !0) }, n.relativeTimeThreshold = function(e, t) { return void 0 !== Bn[e] && (void 0 === t ? Bn[e] : (Bn[e] = t, "s" === e && (Bn.ss = t - 1), !0)) }, n.calendarFormat = function(e, t) { var n = e.diff(t, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }, n.prototype = hn, n.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, n }),
function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.PerfectScrollbar = t() }(this, function() { "use strict";

    function e(e) { return getComputedStyle(e) }

    function t(e, t) { for (var n in t) { var i = t[n]; "number" == typeof i && (i += "px"), e.style[n] = i } return e }

    function n(e) { var t = document.createElement("div"); return t.className = e, t } var i = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

    function a(e, t) { if (!i) throw new Error("No element matching method supported"); return i.call(e, t) }

    function r(e) { e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e) }

    function o(e, t) { return Array.prototype.filter.call(e.children, function(e) { return a(e, t) }) } var s = { main: "ps", element: { thumb: function(e) { return "ps__thumb-" + e }, rail: function(e) { return "ps__rail-" + e }, consuming: "ps__child--consume" }, state: { focus: "ps--focus", clicking: "ps--clicking", active: function(e) { return "ps--active-" + e }, scrolling: function(e) { return "ps--scrolling-" + e } } },
        l = { x: null, y: null };

    function u(e, t) { var n = e.element.classList,
            i = s.state.scrolling(t);
        n.contains(i) ? clearTimeout(l[t]) : n.add(i) }

    function d(e, t) { l[t] = setTimeout(function() { return e.isAlive && e.element.classList.remove(s.state.scrolling(t)) }, e.settings.scrollingThreshold) } var c = function(e) { this.element = e, this.handlers = {} },
        f = { isEmpty: { configurable: !0 } };
    c.prototype.bind = function(e, t) { void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1) }, c.prototype.unbind = function(e, t) { var n = this;
        this.handlers[e] = this.handlers[e].filter(function(i) { return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1) }) }, c.prototype.unbindAll = function() { for (var e in this.handlers) this.unbind(e) }, f.isEmpty.get = function() { var e = this; return Object.keys(this.handlers).every(function(t) { return 0 === e.handlers[t].length }) }, Object.defineProperties(c.prototype, f); var h = function() { this.eventElements = [] };

    function p(e) { if ("function" == typeof window.CustomEvent) return new CustomEvent(e); var t = document.createEvent("CustomEvent"); return t.initCustomEvent(e, !1, !1, void 0), t } h.prototype.eventElement = function(e) { var t = this.eventElements.filter(function(t) { return t.element === e })[0]; return t || (t = new c(e), this.eventElements.push(t)), t }, h.prototype.bind = function(e, t, n) { this.eventElement(e).bind(t, n) }, h.prototype.unbind = function(e, t, n) { var i = this.eventElement(e);
        i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1) }, h.prototype.unbindAll = function() { this.eventElements.forEach(function(e) { return e.unbindAll() }), this.eventElements = [] }, h.prototype.once = function(e, t, n) { var i = this.eventElement(e),
            a = function(e) { i.unbind(t, a), n(e) };
        i.bind(t, a) }; var g = function(e, t, n, i, a) { var r; if (void 0 === i && (i = !0), void 0 === a && (a = !1), "top" === t) r = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else { if ("left" !== t) throw new Error("A proper axis should be provided");
            r = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"] }! function(e, t, n, i, a) { var r = n[0],
                o = n[1],
                s = n[2],
                l = n[3],
                c = n[4],
                f = n[5];
            void 0 === i && (i = !0);
            void 0 === a && (a = !1); var h = e.element;
            e.reach[l] = null, h[s] < 1 && (e.reach[l] = "start");
            h[s] > e[r] - e[o] - 1 && (e.reach[l] = "end");
            t && (h.dispatchEvent(p("ps-scroll-" + l)), t < 0 ? h.dispatchEvent(p("ps-scroll-" + c)) : t > 0 && h.dispatchEvent(p("ps-scroll-" + f)), i && function(e, t) { u(e, t), d(e, t) }(e, l));
            e.reach[l] && (t || a) && h.dispatchEvent(p("ps-" + l + "-reach-" + e.reach[l])) }(e, n, r, i, a) };

    function m(e) { return parseInt(e, 10) || 0 } var v = { isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style, supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints, isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent) },
        y = function(e) { var n = e.element,
                i = Math.floor(n.scrollTop);
            e.containerWidth = n.clientWidth, e.containerHeight = n.clientHeight, e.contentWidth = n.scrollWidth, e.contentHeight = n.scrollHeight, n.contains(e.scrollbarXRail) || (o(n, s.element.rail("x")).forEach(function(e) { return r(e) }), n.appendChild(e.scrollbarXRail)), n.contains(e.scrollbarYRail) || (o(n, s.element.rail("y")).forEach(function(e) { return r(e) }), n.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = _(e, m(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = m((e.negativeScrollAdjustment + n.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = _(e, m(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = m(i * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                function(e, n) { var i = { width: n.railXWidth },
                        a = Math.floor(e.scrollTop);
                    n.isRtl ? i.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : i.left = e.scrollLeft;
                    n.isScrollbarXUsingBottom ? i.bottom = n.scrollbarXBottom - a : i.top = n.scrollbarXTop + a;
                    t(n.scrollbarXRail, i); var r = { top: a, height: n.railYHeight };
                    n.isScrollbarYUsingRight ? n.isRtl ? r.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth : r.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? r.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : r.left = n.scrollbarYLeft + e.scrollLeft;
                    t(n.scrollbarYRail, r), t(n.scrollbarX, { left: n.scrollbarXLeft, width: n.scrollbarXWidth - n.railBorderXWidth }), t(n.scrollbarY, { top: n.scrollbarYTop, height: n.scrollbarYHeight - n.railBorderYWidth }) }(n, e), e.scrollbarXActive ? n.classList.add(s.state.active("x")) : (n.classList.remove(s.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, n.scrollLeft = 0), e.scrollbarYActive ? n.classList.add(s.state.active("y")) : (n.classList.remove(s.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, n.scrollTop = 0) };

    function _(e, t) { return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t }

    function b(e, t) { var n = t[0],
            i = t[1],
            a = t[2],
            r = t[3],
            o = t[4],
            l = t[5],
            c = t[6],
            f = t[7],
            h = t[8],
            p = e.element,
            g = null,
            m = null,
            v = null;

        function _(t) { p[c] = g + v * (t[a] - m), u(e, f), y(e), t.stopPropagation(), t.preventDefault() }

        function b() { d(e, f), e[h].classList.remove(s.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", _) } e.event.bind(e[o], "mousedown", function(t) { g = p[c], m = t[a], v = (e[i] - e[n]) / (e[r] - e[l]), e.event.bind(e.ownerDocument, "mousemove", _), e.event.once(e.ownerDocument, "mouseup", b), e[h].classList.add(s.state.clicking), t.stopPropagation(), t.preventDefault() }) } var w = { "click-rail": function(e) { e.event.bind(e.scrollbarY, "mousedown", function(e) { return e.stopPropagation() }), e.event.bind(e.scrollbarYRail, "mousedown", function(t) { var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                    e.element.scrollTop += n * e.containerHeight, y(e), t.stopPropagation() }), e.event.bind(e.scrollbarX, "mousedown", function(e) { return e.stopPropagation() }), e.event.bind(e.scrollbarXRail, "mousedown", function(t) { var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                    e.element.scrollLeft += n * e.containerWidth, y(e), t.stopPropagation() }) }, "drag-thumb": function(e) { b(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), b(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]) }, keyboard: function(e) { var t = e.element;
                e.event.bind(e.ownerDocument, "keydown", function(n) { if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (a(t, ":hover") || a(e.scrollbarX, ":focus") || a(e.scrollbarY, ":focus"))) { var i, r = document.activeElement ? document.activeElement : e.ownerDocument.activeElement; if (r) { if ("IFRAME" === r.tagName) r = r.contentDocument.activeElement;
                            else
                                for (; r.shadowRoot;) r = r.shadowRoot.activeElement; if (a(i = r, "input,[contenteditable]") || a(i, "select,[contenteditable]") || a(i, "textarea,[contenteditable]") || a(i, "button,[contenteditable]")) return } var o = 0,
                            s = 0; switch (n.which) {
                            case 37:
                                o = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30; break;
                            case 38:
                                s = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30; break;
                            case 39:
                                o = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30; break;
                            case 40:
                                s = n.metaKey ? -e.contentHeight : n.altKey ? -e.containerHeight : -30; break;
                            case 32:
                                s = n.shiftKey ? e.containerHeight : -e.containerHeight; break;
                            case 33:
                                s = e.containerHeight; break;
                            case 34:
                                s = -e.containerHeight; break;
                            case 36:
                                s = e.contentHeight; break;
                            case 35:
                                s = -e.contentHeight; break;
                            default:
                                return } e.settings.suppressScrollX && 0 !== o || e.settings.suppressScrollY && 0 !== s || (t.scrollTop -= s, t.scrollLeft += o, y(e), function(n, i) { var a = Math.floor(t.scrollTop); if (0 === n) { if (!e.scrollbarYActive) return !1; if (0 === a && i > 0 || a >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation } var r = t.scrollLeft; if (0 === i) { if (!e.scrollbarXActive) return !1; if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation } return !0 }(o, s) && n.preventDefault()) } }) }, wheel: function(t) { var n = t.element;

                function i(i) { var a = function(e) { var t = e.deltaX,
                                n = -1 * e.deltaY; return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n] }(i),
                        r = a[0],
                        o = a[1]; if (! function(t, i, a) { if (!v.isWebKit && n.querySelector("select:focus")) return !0; if (!n.contains(t)) return !1; for (var r = t; r && r !== n;) { if (r.classList.contains(s.element.consuming)) return !0; var o = e(r); if ([o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) { var l = r.scrollHeight - r.clientHeight; if (l > 0 && !(0 === r.scrollTop && a > 0 || r.scrollTop === l && a < 0)) return !0; var u = r.scrollWidth - r.clientWidth; if (u > 0 && !(0 === r.scrollLeft && i < 0 || r.scrollLeft === u && i > 0)) return !0 } r = r.parentNode } return !1 }(i.target, r, o)) { var l = !1;
                        t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (o ? n.scrollTop -= o * t.settings.wheelSpeed : n.scrollTop += r * t.settings.wheelSpeed, l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (r ? n.scrollLeft += r * t.settings.wheelSpeed : n.scrollLeft -= o * t.settings.wheelSpeed, l = !0) : (n.scrollTop -= o * t.settings.wheelSpeed, n.scrollLeft += r * t.settings.wheelSpeed), y(t), (l = l || function(e, i) { var a = Math.floor(n.scrollTop),
                                r = 0 === n.scrollTop,
                                o = a + n.offsetHeight === n.scrollHeight,
                                s = 0 === n.scrollLeft,
                                l = n.scrollLeft + n.offsetWidth === n.scrollWidth; return !(Math.abs(i) > Math.abs(e) ? r || o : s || l) || !t.settings.wheelPropagation }(r, o)) && !i.ctrlKey && (i.stopPropagation(), i.preventDefault()) } } void 0 !== window.onwheel ? t.event.bind(n, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(n, "mousewheel", i) }, touch: function(t) { if (v.supportsTouch || v.supportsIePointer) { var n = t.element,
                        i = {},
                        a = 0,
                        r = {},
                        o = null;
                    v.supportsTouch ? (t.event.bind(n, "touchstart", c), t.event.bind(n, "touchmove", f), t.event.bind(n, "touchend", h)) : v.supportsIePointer && (window.PointerEvent ? (t.event.bind(n, "pointerdown", c), t.event.bind(n, "pointermove", f), t.event.bind(n, "pointerup", h)) : window.MSPointerEvent && (t.event.bind(n, "MSPointerDown", c), t.event.bind(n, "MSPointerMove", f), t.event.bind(n, "MSPointerUp", h))) }

                function l(e, i) { n.scrollTop -= i, n.scrollLeft -= e, y(t) }

                function u(e) { return e.targetTouches ? e.targetTouches[0] : e }

                function d(e) { return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) }

                function c(e) { if (d(e)) { var t = u(e);
                        i.pageX = t.pageX, i.pageY = t.pageY, a = (new Date).getTime(), null !== o && clearInterval(o) } }

                function f(o) { if (d(o)) { var c = u(o),
                            f = { pageX: c.pageX, pageY: c.pageY },
                            h = f.pageX - i.pageX,
                            p = f.pageY - i.pageY; if (function(t, i, a) { if (!n.contains(t)) return !1; for (var r = t; r && r !== n;) { if (r.classList.contains(s.element.consuming)) return !0; var o = e(r); if ([o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) { var l = r.scrollHeight - r.clientHeight; if (l > 0 && !(0 === r.scrollTop && a > 0 || r.scrollTop === l && a < 0)) return !0; var u = r.scrollLeft - r.clientWidth; if (u > 0 && !(0 === r.scrollLeft && i < 0 || r.scrollLeft === u && i > 0)) return !0 } r = r.parentNode } return !1 }(o.target, h, p)) return;
                        l(h, p), i = f; var g = (new Date).getTime(),
                            m = g - a;
                        m > 0 && (r.x = h / m, r.y = p / m, a = g),
                            function(e, i) { var a = Math.floor(n.scrollTop),
                                    r = n.scrollLeft,
                                    o = Math.abs(e),
                                    s = Math.abs(i); if (s > o) { if (i < 0 && a === t.contentHeight - t.containerHeight || i > 0 && 0 === a) return 0 === window.scrollY && i > 0 && v.isChrome } else if (o > s && (e < 0 && r === t.contentWidth - t.containerWidth || e > 0 && 0 === r)) return !0; return !0 }(h, p) && o.preventDefault() } }

                function h() { t.settings.swipeEasing && (clearInterval(o), o = setInterval(function() { t.isInitialized ? clearInterval(o) : r.x || r.y ? Math.abs(r.x) < .01 && Math.abs(r.y) < .01 ? clearInterval(o) : (l(30 * r.x, 30 * r.y), r.x *= .8, r.y *= .8) : clearInterval(o) }, 10)) } } },
        x = function(i, a) { var r = this; if (void 0 === a && (a = {}), "string" == typeof i && (i = document.querySelector(i)), !i || !i.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar"); for (var o in this.element = i, i.classList.add(s.main), this.settings = { handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollingThreshold: 1e3, scrollXMarginOffset: 0, scrollYMarginOffset: 0, suppressScrollX: !1, suppressScrollY: !1, swipeEasing: !0, useBothWheelAxes: !1, wheelPropagation: !0, wheelSpeed: 1 }, a) r.settings[o] = a[o];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null; var l, u, d = function() { return i.classList.add(s.state.focus) },
                c = function() { return i.classList.remove(s.state.focus) };
            this.isRtl = "rtl" === e(i).direction, this.isNegativeScroll = (u = i.scrollLeft, i.scrollLeft = -1, l = i.scrollLeft < 0, i.scrollLeft = u, l), this.negativeScrollAdjustment = this.isNegativeScroll ? i.scrollWidth - i.clientWidth : 0, this.event = new h, this.ownerDocument = i.ownerDocument || document, this.scrollbarXRail = n(s.element.rail("x")), i.appendChild(this.scrollbarXRail), this.scrollbarX = n(s.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", d), this.event.bind(this.scrollbarX, "blur", c), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null; var f = e(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(f.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = m(f.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = m(f.borderLeftWidth) + m(f.borderRightWidth), t(this.scrollbarXRail, { display: "block" }), this.railXMarginWidth = m(f.marginLeft) + m(f.marginRight), t(this.scrollbarXRail, { display: "" }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = n(s.element.rail("y")), i.appendChild(this.scrollbarYRail), this.scrollbarY = n(s.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", d), this.event.bind(this.scrollbarY, "blur", c), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null; var p = e(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(p.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = m(p.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function(t) { var n = e(t); return m(n.width) + m(n.paddingLeft) + m(n.paddingRight) + m(n.borderLeftWidth) + m(n.borderRightWidth) }(this.scrollbarY) : null, this.railBorderYWidth = m(p.borderTopWidth) + m(p.borderBottomWidth), t(this.scrollbarYRail, { display: "block" }), this.railYMarginHeight = m(p.marginTop) + m(p.marginBottom), t(this.scrollbarYRail, { display: "" }), this.railYHeight = null, this.railYRatio = null, this.reach = { x: i.scrollLeft <= 0 ? "start" : i.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null, y: i.scrollTop <= 0 ? "start" : i.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null }, this.isAlive = !0, this.settings.handlers.forEach(function(e) { return w[e](r) }), this.lastScrollTop = Math.floor(i.scrollTop), this.lastScrollLeft = i.scrollLeft, this.event.bind(this.element, "scroll", function(e) { return r.onScroll(e) }), y(this) }; return x.prototype.update = function() { this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, t(this.scrollbarXRail, { display: "block" }), t(this.scrollbarYRail, { display: "block" }), this.railXMarginWidth = m(e(this.scrollbarXRail).marginLeft) + m(e(this.scrollbarXRail).marginRight), this.railYMarginHeight = m(e(this.scrollbarYRail).marginTop) + m(e(this.scrollbarYRail).marginBottom), t(this.scrollbarXRail, { display: "none" }), t(this.scrollbarYRail, { display: "none" }), y(this), g(this, "top", 0, !1, !0), g(this, "left", 0, !1, !0), t(this.scrollbarXRail, { display: "" }), t(this.scrollbarYRail, { display: "" })) }, x.prototype.onScroll = function(e) { this.isAlive && (y(this), g(this, "top", this.element.scrollTop - this.lastScrollTop), g(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft) }, x.prototype.destroy = function() { this.isAlive && (this.event.unbindAll(), r(this.scrollbarX), r(this.scrollbarY), r(this.scrollbarXRail), r(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1) }, x.prototype.removePsClasses = function() { this.element.className = this.element.className.split(" ").filter(function(e) { return !e.match(/^ps([-_].+|)$/) }).join(" ") }, x }),
function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Chart = t() }(this, function() { "use strict"; var e = { rgb2hsl: t, rgb2hsv: n, rgb2hwb: i, rgb2cmyk: a, rgb2keyword: o, rgb2xyz: s, rgb2lab: l, rgb2lch: function(e) { return v(l(e)) }, hsl2rgb: u, hsl2hsv: function(e) { var t = e[0],
                n = e[1] / 100,
                i = e[2] / 100; return 0 === i ? [0, 0, 0] : [t, 2 * (n *= (i *= 2) <= 1 ? i : 2 - i) / (i + n) * 100, (i + n) / 2 * 100] }, hsl2hwb: function(e) { return i(u(e)) }, hsl2cmyk: function(e) { return a(u(e)) }, hsl2keyword: function(e) { return o(u(e)) }, hsv2rgb: d, hsv2hsl: function(e) { var t, n, i = e[0],
                a = e[1] / 100,
                r = e[2] / 100; return t = a * r, [i, 100 * (t = (t /= (n = (2 - a) * r) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)] }, hsv2hwb: function(e) { return i(d(e)) }, hsv2cmyk: function(e) { return a(d(e)) }, hsv2keyword: function(e) { return o(d(e)) }, hwb2rgb: c, hwb2hsl: function(e) { return t(c(e)) }, hwb2hsv: function(e) { return n(c(e)) }, hwb2cmyk: function(e) { return a(c(e)) }, hwb2keyword: function(e) { return o(c(e)) }, cmyk2rgb: f, cmyk2hsl: function(e) { return t(f(e)) }, cmyk2hsv: function(e) { return n(f(e)) }, cmyk2hwb: function(e) { return i(f(e)) }, cmyk2keyword: function(e) { return o(f(e)) }, keyword2rgb: w, keyword2hsl: function(e) { return t(w(e)) }, keyword2hsv: function(e) { return n(w(e)) }, keyword2hwb: function(e) { return i(w(e)) }, keyword2cmyk: function(e) { return a(w(e)) }, keyword2lab: function(e) { return l(w(e)) }, keyword2xyz: function(e) { return s(w(e)) }, xyz2rgb: h, xyz2lab: p, xyz2lch: function(e) { return v(p(e)) }, lab2xyz: m, lab2rgb: y, lab2lch: v, lch2lab: _, lch2xyz: function(e) { return m(_(e)) }, lch2rgb: function(e) { return y(_(e)) } };

    function t(e) { var t, n, i = e[0] / 255,
            a = e[1] / 255,
            r = e[2] / 255,
            o = Math.min(i, a, r),
            s = Math.max(i, a, r),
            l = s - o; return s == o ? t = 0 : i == s ? t = (a - r) / l : a == s ? t = 2 + (r - i) / l : r == s && (t = 4 + (i - a) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (o + s) / 2, [t, 100 * (s == o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n] }

    function n(e) { var t, n, i = e[0],
            a = e[1],
            r = e[2],
            o = Math.min(i, a, r),
            s = Math.max(i, a, r),
            l = s - o; return n = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? t = 0 : i == s ? t = (a - r) / l : a == s ? t = 2 + (r - i) / l : r == s && (t = 4 + (i - a) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, s / 255 * 1e3 / 10] }

    function i(e) { var n = e[0],
            i = e[1],
            a = e[2]; return [t(e)[0], 1 / 255 * Math.min(n, Math.min(i, a)) * 100, 100 * (a = 1 - 1 / 255 * Math.max(n, Math.max(i, a)))] }

    function a(e) { var t, n = e[0] / 255,
            i = e[1] / 255,
            a = e[2] / 255; return [100 * ((1 - n - (t = Math.min(1 - n, 1 - i, 1 - a))) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * ((1 - a - t) / (1 - t) || 0), 100 * t] }

    function o(e) { return S[JSON.stringify(e)] }

    function s(e) { var t = e[0] / 255,
            n = e[1] / 255,
            i = e[2] / 255; return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * i), 100 * (.0193 * t + .1192 * n + .9505 * i)] }

    function l(e) { var t = s(e),
            n = t[0],
            i = t[1],
            a = t[2]; return i /= 100, a /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))] }

    function u(e) { var t, n, i, a, r, o = e[0] / 360,
            s = e[1] / 100,
            l = e[2] / 100; if (0 == s) return [r = 255 * l, r, r];
        t = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0]; for (var u = 0; u < 3; u++)(i = o + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, r = 6 * i < 1 ? t + 6 * (n - t) * i : 2 * i < 1 ? n : 3 * i < 2 ? t + (n - t) * (2 / 3 - i) * 6 : t, a[u] = 255 * r; return a }

    function d(e) { var t = e[0] / 60,
            n = e[1] / 100,
            i = e[2] / 100,
            a = Math.floor(t) % 6,
            r = t - Math.floor(t),
            o = 255 * i * (1 - n),
            s = 255 * i * (1 - n * r),
            l = 255 * i * (1 - n * (1 - r)); switch (i *= 255, a) {
            case 0:
                return [i, l, o];
            case 1:
                return [s, i, o];
            case 2:
                return [o, i, l];
            case 3:
                return [o, s, i];
            case 4:
                return [l, o, i];
            case 5:
                return [i, o, s] } }

    function c(e) { var t, n, i, a, o = e[0] / 360,
            s = e[1] / 100,
            l = e[2] / 100,
            u = s + l; switch (u > 1 && (s /= u, l /= u), i = 6 * o - (t = Math.floor(6 * o)), 0 != (1 & t) && (i = 1 - i), a = s + i * ((n = 1 - l) - s), t) { default:
                case 6:
                case 0:
                r = n, g = a, b = s; break;
            case 1:
                    r = a, g = n, b = s; break;
            case 2:
                    r = s, g = n, b = a; break;
            case 3:
                    r = s, g = a, b = n; break;
            case 4:
                    r = a, g = s, b = n; break;
            case 5:
                    r = n, g = s, b = a } return [255 * r, 255 * g, 255 * b] }

    function f(e) { var t = e[0] / 100,
            n = e[1] / 100,
            i = e[2] / 100,
            a = e[3] / 100; return [255 * (1 - Math.min(1, t * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a))] }

    function h(e) { var t, n, i, a = e[0] / 100,
            r = e[1] / 100,
            o = e[2] / 100; return n = -.9689 * a + 1.8758 * r + .0415 * o, i = .0557 * a + -.204 * r + 1.057 * o, t = (t = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))] }

    function p(e) { var t = e[0],
            n = e[1],
            i = e[2]; return n /= 100, i /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))] }

    function m(e) { var t, n, i, a, r = e[0],
            o = e[1],
            s = e[2]; return r <= 8 ? a = (n = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((r + 16) / 116, 3), a = Math.pow(n / 100, 1 / 3)), [t = t / 95.047 <= .008856 ? t = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)] }

    function v(e) { var t, n = e[0],
            i = e[1],
            a = e[2]; return (t = 360 * Math.atan2(a, i) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(i * i + a * a), t] }

    function y(e) { return h(m(e)) }

    function _(e) { var t, n = e[0],
            i = e[1]; return t = e[2] / 360 * 2 * Math.PI, [n, i * Math.cos(t), i * Math.sin(t)] }

    function w(e) { return x[e] } var x = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
        S = {}; for (var k in x) S[JSON.stringify(x[k])] = k; var T = function() { return new E }; for (var M in e) { T[M + "Raw"] = function(t) { return function(n) { return "number" == typeof n && (n = Array.prototype.slice.call(arguments)), e[t](n) } }(M); var C = /(\w+)2(\w+)/.exec(M),
            D = C[1],
            A = C[2];
        (T[D] = T[D] || {})[A] = T[M] = function(t) { return function(n) { "number" == typeof n && (n = Array.prototype.slice.call(arguments)); var i = e[t](n); if ("string" == typeof i || void 0 === i) return i; for (var a = 0; a < i.length; a++) i[a] = Math.round(i[a]); return i } }(M) } var E = function() { this.convs = {} };
    E.prototype.routeSpace = function(e, t) { var n = t[0]; return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n)) }, E.prototype.setValues = function(e, t) { return this.space = e, this.convs = {}, this.convs[e] = t, this }, E.prototype.getValues = function(e) { var t = this.convs[e]; if (!t) { var n = this.space,
                i = this.convs[n];
            t = T[n][e](i), this.convs[e] = t } return t }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) { E.prototype[e] = function(t) { return this.routeSpace(e, arguments) } }); var P = T,
        O = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
        L = { getRgba: I, getHsla: N, getRgb: function(e) { var t = I(e); return t && t.slice(0, 3) }, getHsl: function(e) { var t = N(e); return t && t.slice(0, 3) }, getHwb: H, getAlpha: function(e) { var t = I(e); return t ? t[3] : (t = N(e)) ? t[3] : (t = H(e)) ? t[3] : void 0 }, hexString: function(e, t) { t = void 0 !== t && 3 === e.length ? t : e[3]; return "#" + j(e[0]) + j(e[1]) + j(e[2]) + (t >= 0 && t < 1 ? j(Math.round(255 * t)) : "") }, rgbString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? R(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")" }, rgbaString: R, percentString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? Y(e, t) : "rgb(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%)" }, percentaString: Y, hslString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? W(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" }, hslaString: W, hwbString: function(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")" }, keyword: function(e) { return z[e.slice(0, 3)] } };

    function I(e) { if (e) { var t = [0, 0, 0],
                n = 1,
                i = e.match(/^#([a-fA-F0-9]{3,4})$/i),
                a = ""; if (i) { a = (i = i[1])[3]; for (var r = 0; r < t.length; r++) t[r] = parseInt(i[r] + i[r], 16);
                a && (n = Math.round(parseInt(a + a, 16) / 255 * 100) / 100) } else if (i = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) { for (a = i[2], i = i[1], r = 0; r < t.length; r++) t[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16);
                a && (n = Math.round(parseInt(a, 16) / 255 * 100) / 100) } else if (i = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (r = 0; r < t.length; r++) t[r] = parseInt(i[r + 1]);
                n = parseFloat(i[4]) } else if (i = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(i[r + 1]));
                n = parseFloat(i[4]) } else if (i = e.match(/(\w+)/)) { if ("transparent" == i[1]) return [0, 0, 0, 0]; if (!(t = O[i[1]])) return } for (r = 0; r < t.length; r++) t[r] = F(t[r], 0, 255); return n = n || 0 == n ? F(n, 0, 1) : 1, t[3] = n, t } }

    function N(e) { if (e) { var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (t) { var n = parseFloat(t[4]); return [F(parseInt(t[1]), 0, 360), F(parseFloat(t[2]), 0, 100), F(parseFloat(t[3]), 0, 100), F(isNaN(n) ? 1 : n, 0, 1)] } } }

    function H(e) { if (e) { var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (t) { var n = parseFloat(t[4]); return [F(parseInt(t[1]), 0, 360), F(parseFloat(t[2]), 0, 100), F(parseFloat(t[3]), 0, 100), F(isNaN(n) ? 1 : n, 0, 1)] } } }

    function R(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")" }

    function Y(e, t) { return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")" }

    function W(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")" }

    function F(e, t, n) { return Math.min(Math.max(t, e), n) }

    function j(e) { var t = e.toString(16).toUpperCase(); return t.length < 2 ? "0" + t : t } var z = {}; for (var B in O) z[O[B]] = B; var q = function(e) { return e instanceof q ? e : this instanceof q ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void("string" == typeof e ? (t = L.getRgba(e)) ? this.setValues("rgb", t) : (t = L.getHsla(e)) ? this.setValues("hsl", t) : (t = L.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new q(e); var t };
    q.prototype = { isValid: function() { return this.valid }, rgb: function() { return this.setSpace("rgb", arguments) }, hsl: function() { return this.setSpace("hsl", arguments) }, hsv: function() { return this.setSpace("hsv", arguments) }, hwb: function() { return this.setSpace("hwb", arguments) }, cmyk: function() { return this.setSpace("cmyk", arguments) }, rgbArray: function() { return this.values.rgb }, hslArray: function() { return this.values.hsl }, hsvArray: function() { return this.values.hsv }, hwbArray: function() { var e = this.values; return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb }, cmykArray: function() { return this.values.cmyk }, rgbaArray: function() { var e = this.values; return e.rgb.concat([e.alpha]) }, hslaArray: function() { var e = this.values; return e.hsl.concat([e.alpha]) }, alpha: function(e) { return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this) }, red: function(e) { return this.setChannel("rgb", 0, e) }, green: function(e) { return this.setChannel("rgb", 1, e) }, blue: function(e) { return this.setChannel("rgb", 2, e) }, hue: function(e) { return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e) }, saturation: function(e) { return this.setChannel("hsl", 1, e) }, lightness: function(e) { return this.setChannel("hsl", 2, e) }, saturationv: function(e) { return this.setChannel("hsv", 1, e) }, whiteness: function(e) { return this.setChannel("hwb", 1, e) }, blackness: function(e) { return this.setChannel("hwb", 2, e) }, value: function(e) { return this.setChannel("hsv", 2, e) }, cyan: function(e) { return this.setChannel("cmyk", 0, e) }, magenta: function(e) { return this.setChannel("cmyk", 1, e) }, yellow: function(e) { return this.setChannel("cmyk", 2, e) }, black: function(e) { return this.setChannel("cmyk", 3, e) }, hexString: function() { return L.hexString(this.values.rgb) }, rgbString: function() { return L.rgbString(this.values.rgb, this.values.alpha) }, rgbaString: function() { return L.rgbaString(this.values.rgb, this.values.alpha) }, percentString: function() { return L.percentString(this.values.rgb, this.values.alpha) }, hslString: function() { return L.hslString(this.values.hsl, this.values.alpha) }, hslaString: function() { return L.hslaString(this.values.hsl, this.values.alpha) }, hwbString: function() { return L.hwbString(this.values.hwb, this.values.alpha) }, keyword: function() { return L.keyword(this.values.rgb, this.values.alpha) }, rgbNumber: function() { var e = this.values.rgb; return e[0] << 16 | e[1] << 8 | e[2] }, luminosity: function() { for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) { var i = e[n] / 255;
                t[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4) } return .2126 * t[0] + .7152 * t[1] + .0722 * t[2] }, contrast: function(e) { var t = this.luminosity(),
                n = e.luminosity(); return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05) }, level: function(e) { var t = this.contrast(e); return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "" }, dark: function() { var e = this.values.rgb; return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128 }, light: function() { return !this.dark() }, negate: function() { for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t]; return this.setValues("rgb", e), this }, lighten: function(e) { var t = this.values.hsl; return t[2] += t[2] * e, this.setValues("hsl", t), this }, darken: function(e) { var t = this.values.hsl; return t[2] -= t[2] * e, this.setValues("hsl", t), this }, saturate: function(e) { var t = this.values.hsl; return t[1] += t[1] * e, this.setValues("hsl", t), this }, desaturate: function(e) { var t = this.values.hsl; return t[1] -= t[1] * e, this.setValues("hsl", t), this }, whiten: function(e) { var t = this.values.hwb; return t[1] += t[1] * e, this.setValues("hwb", t), this }, blacken: function(e) { var t = this.values.hwb; return t[2] += t[2] * e, this.setValues("hwb", t), this }, greyscale: function() { var e = this.values.rgb,
                t = .3 * e[0] + .59 * e[1] + .11 * e[2]; return this.setValues("rgb", [t, t, t]), this }, clearer: function(e) { var t = this.values.alpha; return this.setValues("alpha", t - t * e), this }, opaquer: function(e) { var t = this.values.alpha; return this.setValues("alpha", t + t * e), this }, rotate: function(e) { var t = this.values.hsl,
                n = (t[0] + e) % 360; return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this }, mix: function(e, t) { var n = e,
                i = void 0 === t ? .5 : t,
                a = 2 * i - 1,
                r = this.alpha() - n.alpha(),
                o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
                s = 1 - o; return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i)) }, toJSON: function() { return this.rgb() }, clone: function() { var e, t, n = new q,
                i = this.values,
                a = n.values; for (var r in i) i.hasOwnProperty(r) && (e = i[r], "[object Array]" === (t = {}.toString.call(e)) ? a[r] = e.slice(0) : "[object Number]" === t ? a[r] = e : console.error("unexpected color value:", e)); return n } }, q.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, q.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, q.prototype.getValues = function(e) { for (var t = this.values, n = {}, i = 0; i < e.length; i++) n[e.charAt(i)] = t[e][i]; return 1 !== t.alpha && (n.a = t.alpha), n }, q.prototype.setValues = function(e, t) { var n, i, a = this.values,
            r = this.spaces,
            o = this.maxes,
            s = 1; if (this.valid = !0, "alpha" === e) s = t;
        else if (t.length) a[e] = t.slice(0, e.length), s = t[e.length];
        else if (void 0 !== t[e.charAt(0)]) { for (n = 0; n < e.length; n++) a[e][n] = t[e.charAt(n)];
            s = t.a } else if (void 0 !== t[r[e][0]]) { var l = r[e]; for (n = 0; n < e.length; n++) a[e][n] = t[l[n]];
            s = t.alpha } if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === e) return !1; for (n = 0; n < e.length; n++) i = Math.max(0, Math.min(o[e][n], a[e][n])), a[e][n] = Math.round(i); for (var u in r) u !== e && (a[u] = P[e][u](a[e])); return !0 }, q.prototype.setSpace = function(e, t) { var n = t[0]; return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this) }, q.prototype.setChannel = function(e, t, n) { var i = this.values[e]; return void 0 === n ? i[t] : n === i[t] ? this : (i[t] = n, this.setValues(e, i), this) }, "undefined" != typeof window && (window.Color = q); var $, V = q,
        U = { noop: function() {}, uid: ($ = 0, function() { return $++ }), isNullOrUndef: function(e) { return null == e }, isArray: function(e) { if (Array.isArray && Array.isArray(e)) return !0; var t = Object.prototype.toString.call(e); return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6) }, isObject: function(e) { return null !== e && "[object Object]" === Object.prototype.toString.call(e) }, isFinite: function(e) { return ("number" == typeof e || e instanceof Number) && isFinite(e) }, valueOrDefault: function(e, t) { return void 0 === e ? t : e }, valueAtIndexOrDefault: function(e, t, n) { return U.valueOrDefault(U.isArray(e) ? e[t] : e, n) }, callback: function(e, t, n) { if (e && "function" == typeof e.call) return e.apply(n, t) }, each: function(e, t, n, i) { var a, r, o; if (U.isArray(e))
                    if (r = e.length, i)
                        for (a = r - 1; a >= 0; a--) t.call(n, e[a], a);
                    else
                        for (a = 0; a < r; a++) t.call(n, e[a], a);
                else if (U.isObject(e))
                    for (r = (o = Object.keys(e)).length, a = 0; a < r; a++) t.call(n, e[o[a]], o[a]) }, arrayEquals: function(e, t) { var n, i, a, r; if (!e || !t || e.length !== t.length) return !1; for (n = 0, i = e.length; n < i; ++n)
                    if (a = e[n], r = t[n], a instanceof Array && r instanceof Array) { if (!U.arrayEquals(a, r)) return !1 }
                else if (a !== r) return !1; return !0 }, clone: function(e) { if (U.isArray(e)) return e.map(U.clone); if (U.isObject(e)) { for (var t = {}, n = Object.keys(e), i = n.length, a = 0; a < i; ++a) t[n[a]] = U.clone(e[n[a]]); return t } return e }, _merger: function(e, t, n, i) { var a = t[e],
                    r = n[e];
                U.isObject(a) && U.isObject(r) ? U.merge(a, r, i) : t[e] = U.clone(r) }, _mergerIf: function(e, t, n) { var i = t[e],
                    a = n[e];
                U.isObject(i) && U.isObject(a) ? U.mergeIf(i, a) : t.hasOwnProperty(e) || (t[e] = U.clone(a)) }, merge: function(e, t, n) { var i, a, r, o, s, l = U.isArray(t) ? t : [t],
                    u = l.length; if (!U.isObject(e)) return e; for (i = (n = n || {}).merger || U._merger, a = 0; a < u; ++a)
                    if (t = l[a], U.isObject(t))
                        for (s = 0, o = (r = Object.keys(t)).length; s < o; ++s) i(r[s], e, t, n); return e }, mergeIf: function(e, t) { return U.merge(e, t, { merger: U._mergerIf }) }, extend: function(e) { for (var t = function(t, n) { e[n] = t }, n = 1, i = arguments.length; n < i; ++n) U.each(arguments[n], t); return e }, inherits: function(e) { var t = this,
                    n = e && e.hasOwnProperty("constructor") ? e.constructor : function() { return t.apply(this, arguments) },
                    i = function() { this.constructor = n }; return i.prototype = t.prototype, n.prototype = new i, n.extend = U.inherits, e && U.extend(n.prototype, e), n.__super__ = t.prototype, n } },
        X = U;
    U.callCallback = U.callback, U.indexOf = function(e, t, n) { return Array.prototype.indexOf.call(e, t, n) }, U.getValueOrDefault = U.valueOrDefault, U.getValueAtIndexOrDefault = U.valueAtIndexOrDefault; var G = { linear: function(e) { return e }, easeInQuad: function(e) { return e * e }, easeOutQuad: function(e) { return -e * (e - 2) }, easeInOutQuad: function(e) { return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1) }, easeInCubic: function(e) { return e * e * e }, easeOutCubic: function(e) { return (e -= 1) * e * e + 1 }, easeInOutCubic: function(e) { return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2) }, easeInQuart: function(e) { return e * e * e * e }, easeOutQuart: function(e) { return -((e -= 1) * e * e * e - 1) }, easeInOutQuart: function(e) { return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2) }, easeInQuint: function(e) { return e * e * e * e * e }, easeOutQuint: function(e) { return (e -= 1) * e * e * e * e + 1 }, easeInOutQuint: function(e) { return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2) }, easeInSine: function(e) { return 1 - Math.cos(e * (Math.PI / 2)) }, easeOutSine: function(e) { return Math.sin(e * (Math.PI / 2)) }, easeInOutSine: function(e) { return -.5 * (Math.cos(Math.PI * e) - 1) }, easeInExpo: function(e) { return 0 === e ? 0 : Math.pow(2, 10 * (e - 1)) }, easeOutExpo: function(e) { return 1 === e ? 1 : 1 - Math.pow(2, -10 * e) }, easeInOutExpo: function(e) { return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e)) }, easeInCirc: function(e) { return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1) }, easeOutCirc: function(e) { return Math.sqrt(1 - (e -= 1) * e) }, easeInOutCirc: function(e) { return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1) }, easeInElastic: function(e) { var t = 1.70158,
                    n = 0,
                    i = 1; return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) }, easeOutElastic: function(e) { var t = 1.70158,
                    n = 0,
                    i = 1; return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1) }, easeInOutElastic: function(e) { var t = 1.70158,
                    n = 0,
                    i = 1; return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), e < 1 ? i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1) }, easeInBack: function(e) { var t = 1.70158; return e * e * ((t + 1) * e - t) }, easeOutBack: function(e) { var t = 1.70158; return (e -= 1) * e * ((t + 1) * e + t) + 1 }, easeInOutBack: function(e) { var t = 1.70158; return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2) }, easeInBounce: function(e) { return 1 - G.easeOutBounce(1 - e) }, easeOutBounce: function(e) { return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375 }, easeInOutBounce: function(e) { return e < .5 ? .5 * G.easeInBounce(2 * e) : .5 * G.easeOutBounce(2 * e - 1) + .5 } },
        K = { effects: G };
    X.easingEffects = G; var Z = Math.PI,
        Q = Z / 180,
        J = 2 * Z,
        ee = Z / 2,
        te = Z / 4,
        ne = 2 * Z / 3,
        ie = { clear: function(e) { e.ctx.clearRect(0, 0, e.width, e.height) }, roundedRect: function(e, t, n, i, a, r) { if (r) { var o = Math.min(r, a / 2, i / 2),
                        s = t + o,
                        l = n + o,
                        u = t + i - o,
                        d = n + a - o;
                    e.moveTo(t, l), s < u && l < d ? (e.arc(s, l, o, -Z, -ee), e.arc(u, l, o, -ee, 0), e.arc(u, d, o, 0, ee), e.arc(s, d, o, ee, Z)) : s < u ? (e.moveTo(s, n), e.arc(u, l, o, -ee, ee), e.arc(s, l, o, ee, Z + ee)) : l < d ? (e.arc(s, l, o, -Z, 0), e.arc(s, d, o, 0, Z)) : e.arc(s, l, o, -Z, Z), e.closePath(), e.moveTo(t, n) } else e.rect(t, n, i, a) }, drawPoint: function(e, t, n, i, a, r) { var o, s, l, u, d, c = (r || 0) * Q; if (!t || "object" != typeof t || "[object HTMLImageElement]" !== (o = t.toString()) && "[object HTMLCanvasElement]" !== o) { if (!(isNaN(n) || n <= 0)) { switch (e.beginPath(), t) { default: e.arc(i, a, n, 0, J), e.closePath(); break;
                            case "triangle":
                                    e.moveTo(i + Math.sin(c) * n, a - Math.cos(c) * n), c += ne, e.lineTo(i + Math.sin(c) * n, a - Math.cos(c) * n), c += ne, e.lineTo(i + Math.sin(c) * n, a - Math.cos(c) * n), e.closePath(); break;
                            case "rectRounded":
                                    u = n - (d = .516 * n), s = Math.cos(c + te) * u, l = Math.sin(c + te) * u, e.arc(i - s, a - l, d, c - Z, c - ee), e.arc(i + l, a - s, d, c - ee, c), e.arc(i + s, a + l, d, c, c + ee), e.arc(i - l, a + s, d, c + ee, c + Z), e.closePath(); break;
                            case "rect":
                                    if (!r) { u = Math.SQRT1_2 * n, e.rect(i - u, a - u, 2 * u, 2 * u); break }c += te;
                            case "rectRot":
                                    s = Math.cos(c) * n, l = Math.sin(c) * n, e.moveTo(i - s, a - l), e.lineTo(i + l, a - s), e.lineTo(i + s, a + l), e.lineTo(i - l, a + s), e.closePath(); break;
                            case "crossRot":
                                    c += te;
                            case "cross":
                                    s = Math.cos(c) * n, l = Math.sin(c) * n, e.moveTo(i - s, a - l), e.lineTo(i + s, a + l), e.moveTo(i + l, a - s), e.lineTo(i - l, a + s); break;
                            case "star":
                                    s = Math.cos(c) * n, l = Math.sin(c) * n, e.moveTo(i - s, a - l), e.lineTo(i + s, a + l), e.moveTo(i + l, a - s), e.lineTo(i - l, a + s), c += te, s = Math.cos(c) * n, l = Math.sin(c) * n, e.moveTo(i - s, a - l), e.lineTo(i + s, a + l), e.moveTo(i + l, a - s), e.lineTo(i - l, a + s); break;
                            case "line":
                                    s = Math.cos(c) * n, l = Math.sin(c) * n, e.moveTo(i - s, a - l), e.lineTo(i + s, a + l); break;
                            case "dash":
                                    e.moveTo(i, a), e.lineTo(i + Math.cos(c) * n, a + Math.sin(c) * n) } e.fill(), e.stroke() } } else e.drawImage(t, i - t.width / 2, a - t.height / 2, t.width, t.height) }, _isPointInArea: function(e, t) { return e.x > t.left - 1e-6 && e.x < t.right + 1e-6 && e.y > t.top - 1e-6 && e.y < t.bottom + 1e-6 }, clipArea: function(e, t) { e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip() }, unclipArea: function(e) { e.restore() }, lineTo: function(e, t, n, i) { var a = n.steppedLine; if (a) { if ("middle" === a) { var r = (t.x + n.x) / 2;
                        e.lineTo(r, i ? n.y : t.y), e.lineTo(r, i ? t.y : n.y) } else "after" === a && !i || "after" !== a && i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
                    e.lineTo(n.x, n.y) } else n.tension ? e.bezierCurveTo(i ? t.controlPointPreviousX : t.controlPointNextX, i ? t.controlPointPreviousY : t.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y) } },
        ae = ie;
    X.clear = ie.clear, X.drawRoundedRectangle = function(e) { e.beginPath(), ie.roundedRect.apply(ie, arguments) }; var re = { _set: function(e, t) { return X.merge(this[e] || (this[e] = {}), t) } };
    re._set("global", { defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", defaultLineHeight: 1.2, showLines: !0 }); var oe = re,
        se = X.valueOrDefault,
        le = { toLineHeight: function(e, t) { var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/); if (!n || "normal" === n[1]) return 1.2 * t; switch (e = +n[2], n[3]) {
                    case "px":
                        return e;
                    case "%":
                        e /= 100 } return t * e }, toPadding: function(e) { var t, n, i, a; return X.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, i = +e.bottom || 0, a = +e.left || 0) : t = n = i = a = +e || 0, { top: t, right: n, bottom: i, left: a, height: t + i, width: a + n } }, _parseFont: function(e) { var t = oe.global,
                    n = se(e.fontSize, t.defaultFontSize),
                    i = { family: se(e.fontFamily, t.defaultFontFamily), lineHeight: X.options.toLineHeight(se(e.lineHeight, t.defaultLineHeight), n), size: n, style: se(e.fontStyle, t.defaultFontStyle), weight: null, string: "" }; return i.string = function(e) { return !e || X.isNullOrUndef(e.size) || X.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family }(i), i }, resolve: function(e, t, n) { var i, a, r; for (i = 0, a = e.length; i < a; ++i)
                    if (void 0 !== (r = e[i]) && (void 0 !== t && "function" == typeof r && (r = r(t)), void 0 !== n && X.isArray(r) && (r = r[n]), void 0 !== r)) return r } },
        ue = X,
        de = K,
        ce = ae,
        fe = le;
    ue.easing = de, ue.canvas = ce, ue.options = fe; var he = function(e) { ue.extend(this, e), this.initialize.apply(this, arguments) };
    ue.extend(he.prototype, { initialize: function() { this.hidden = !1 }, pivot: function() { var e = this; return e._view || (e._view = ue.clone(e._model)), e._start = {}, e }, transition: function(e) { var t = this,
                n = t._model,
                i = t._start,
                a = t._view; return n && 1 !== e ? (a || (a = t._view = {}), i || (i = t._start = {}), function(e, t, n, i) { var a, r, o, s, l, u, d, c, f, h = Object.keys(n); for (a = 0, r = h.length; a < r; ++a)
                    if (u = n[o = h[a]], t.hasOwnProperty(o) || (t[o] = u), (s = t[o]) !== u && "_" !== o[0]) { if (e.hasOwnProperty(o) || (e[o] = s), (d = typeof u) == typeof(l = e[o]))
                            if ("string" === d) { if ((c = V(l)).valid && (f = V(u)).valid) { t[o] = f.mix(c, i).rgbString(); continue } }
                        else if (ue.isFinite(l) && ue.isFinite(u)) { t[o] = l + (u - l) * i; continue } t[o] = u } }(i, a, n, e), t) : (t._view = n, t._start = null, t) }, tooltipPosition: function() { return { x: this._model.x, y: this._model.y } }, hasValue: function() { return ue.isNumber(this._model.x) && ue.isNumber(this._model.y) } }), he.extend = ue.inherits; var pe = he,
        ge = pe.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }),
        me = ge;
    Object.defineProperty(ge.prototype, "animationObject", { get: function() { return this } }), Object.defineProperty(ge.prototype, "chartInstance", { get: function() { return this.chart }, set: function(e) { this.chart = e } }), oe._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: ue.noop, onComplete: ue.noop } }); var ve = { animations: [], request: null, addAnimation: function(e, t, n, i) { var a, r, o = this.animations; for (t.chart = e, t.startTime = Date.now(), t.duration = n, i || (e.animating = !0), a = 0, r = o.length; a < r; ++a)
                    if (o[a].chart === e) return void(o[a] = t);
                o.push(t), 1 === o.length && this.requestAnimationFrame() }, cancelAnimation: function(e) { var t = ue.findIndex(this.animations, function(t) { return t.chart === e }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1) }, requestAnimationFrame: function() { var e = this;
                null === e.request && (e.request = ue.requestAnimFrame.call(window, function() { e.request = null, e.startDigest() })) }, startDigest: function() { this.advance(), this.animations.length > 0 && this.requestAnimationFrame() }, advance: function() { for (var e, t, n, i, a = this.animations, r = 0; r < a.length;) t = (e = a[r]).chart, n = e.numSteps, i = Math.floor((Date.now() - e.startTime) / e.duration * n) + 1, e.currentStep = Math.min(i, n), ue.callback(e.render, [t, e], t), ue.callback(e.onAnimationProgress, [e], t), e.currentStep >= n ? (ue.callback(e.onAnimationComplete, [e], t), t.animating = !1, a.splice(r, 1)) : ++r } },
        ye = ue.options.resolve,
        _e = ["push", "pop", "shift", "splice", "unshift"];

    function be(e, t) { var n = e._chartjs; if (n) { var i = n.listeners,
                a = i.indexOf(t); - 1 !== a && i.splice(a, 1), i.length > 0 || (_e.forEach(function(t) { delete e[t] }), delete e._chartjs) } } var we = function(e, t) { this.initialize(e, t) };
    ue.extend(we.prototype, { datasetElementType: null, dataElementType: null, initialize: function(e, t) { this.chart = e, this.index = t, this.linkScales(), this.addElements() }, updateIndex: function(e) { this.index = e }, linkScales: function() { var e = this,
                t = e.getMeta(),
                n = e.getDataset();
            null !== t.xAxisID && t.xAxisID in e.chart.scales || (t.xAxisID = n.xAxisID || e.chart.options.scales.xAxes[0].id), null !== t.yAxisID && t.yAxisID in e.chart.scales || (t.yAxisID = n.yAxisID || e.chart.options.scales.yAxes[0].id) }, getDataset: function() { return this.chart.data.datasets[this.index] }, getMeta: function() { return this.chart.getDatasetMeta(this.index) }, getScaleForId: function(e) { return this.chart.scales[e] }, _getValueScaleId: function() { return this.getMeta().yAxisID }, _getIndexScaleId: function() { return this.getMeta().xAxisID }, _getValueScale: function() { return this.getScaleForId(this._getValueScaleId()) }, _getIndexScale: function() { return this.getScaleForId(this._getIndexScaleId()) }, reset: function() { this.update(!0) }, destroy: function() { this._data && be(this._data, this) }, createMetaDataset: function() { var e = this.datasetElementType; return e && new e({ _chart: this.chart, _datasetIndex: this.index }) }, createMetaData: function(e) { var t = this.dataElementType; return t && new t({ _chart: this.chart, _datasetIndex: this.index, _index: e }) }, addElements: function() { var e, t, n = this.getMeta(),
                i = this.getDataset().data || [],
                a = n.data; for (e = 0, t = i.length; e < t; ++e) a[e] = a[e] || this.createMetaData(e);
            n.dataset = n.dataset || this.createMetaDataset() }, addElementAndReset: function(e) { var t = this.createMetaData(e);
            this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0) }, buildOrUpdateElements: function() { var e, t, n = this,
                i = n.getDataset(),
                a = i.data || (i.data = []);
            n._data !== a && (n._data && be(n._data, n), a && Object.isExtensible(a) && (t = n, (e = a)._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [t] } }), _e.forEach(function(t) { var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                    i = e[t];
                Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: function() { var t = Array.prototype.slice.call(arguments),
                            a = i.apply(this, t); return ue.each(e._chartjs.listeners, function(e) { "function" == typeof e[n] && e[n].apply(e, t) }), a } }) }))), n._data = a), n.resyncElements() }, update: ue.noop, transition: function(e) { for (var t = this.getMeta(), n = t.data || [], i = n.length, a = 0; a < i; ++a) n[a].transition(e);
            t.dataset && t.dataset.transition(e) }, draw: function() { var e = this.getMeta(),
                t = e.data || [],
                n = t.length,
                i = 0; for (e.dataset && e.dataset.draw(); i < n; ++i) t[i].draw() }, removeHoverStyle: function(e) { ue.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle }, setHoverStyle: function(e) { var t = this.chart.data.datasets[e._datasetIndex],
                n = e._index,
                i = e.custom || {},
                a = e._model,
                r = ue.getHoverColor;
            e.$previousStyle = { backgroundColor: a.backgroundColor, borderColor: a.borderColor, borderWidth: a.borderWidth }, a.backgroundColor = ye([i.hoverBackgroundColor, t.hoverBackgroundColor, r(a.backgroundColor)], void 0, n), a.borderColor = ye([i.hoverBorderColor, t.hoverBorderColor, r(a.borderColor)], void 0, n), a.borderWidth = ye([i.hoverBorderWidth, t.hoverBorderWidth, a.borderWidth], void 0, n) }, resyncElements: function() { var e = this.getMeta(),
                t = this.getDataset().data,
                n = e.data.length,
                i = t.length;
            i < n ? e.data.splice(i, n - i) : i > n && this.insertElements(n, i - n) }, insertElements: function(e, t) { for (var n = 0; n < t; ++n) this.addElementAndReset(e + n) }, onDataPush: function() { var e = arguments.length;
            this.insertElements(this.getDataset().data.length - e, e) }, onDataPop: function() { this.getMeta().data.pop() }, onDataShift: function() { this.getMeta().data.shift() }, onDataSplice: function(e, t) { this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2) }, onDataUnshift: function() { this.insertElements(0, arguments.length) } }), we.extend = ue.inherits; var xe = we;
    oe._set("global", { elements: { arc: { backgroundColor: oe.global.defaultColor, borderColor: "#fff", borderWidth: 2, borderAlign: "center" } } }); var Se = pe.extend({ inLabelRange: function(e) { var t = this._view; return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2) }, inRange: function(e, t) { var n = this._view; if (n) { for (var i = ue.getAngleFromPoint(n, { x: e, y: t }), a = i.angle, r = i.distance, o = n.startAngle, s = n.endAngle; s < o;) s += 2 * Math.PI; for (; a > s;) a -= 2 * Math.PI; for (; a < o;) a += 2 * Math.PI; var l = a >= o && a <= s,
                        u = r >= n.innerRadius && r <= n.outerRadius; return l && u } return !1 }, getCenterPoint: function() { var e = this._view,
                    t = (e.startAngle + e.endAngle) / 2,
                    n = (e.innerRadius + e.outerRadius) / 2; return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n } }, getArea: function() { var e = this._view; return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2)) }, tooltipPosition: function() { var e = this._view,
                    t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                    n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius; return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n } }, draw: function() { var e, t = this._chart.ctx,
                    n = this._view,
                    i = n.startAngle,
                    a = n.endAngle,
                    r = "inner" === n.borderAlign ? .33 : 0;
                t.save(), t.beginPath(), t.arc(n.x, n.y, Math.max(n.outerRadius - r, 0), i, a), t.arc(n.x, n.y, n.innerRadius, a, i, !0), t.closePath(), t.fillStyle = n.backgroundColor, t.fill(), n.borderWidth && ("inner" === n.borderAlign ? (t.beginPath(), e = r / n.outerRadius, t.arc(n.x, n.y, n.outerRadius, i - e, a + e), n.innerRadius > r ? (e = r / n.innerRadius, t.arc(n.x, n.y, n.innerRadius - r, a + e, i - e, !0)) : t.arc(n.x, n.y, r, a + Math.PI / 2, i - Math.PI / 2), t.closePath(), t.clip(), t.beginPath(), t.arc(n.x, n.y, n.outerRadius, i, a), t.arc(n.x, n.y, n.innerRadius, a, i, !0), t.closePath(), t.lineWidth = 2 * n.borderWidth, t.lineJoin = "round") : (t.lineWidth = n.borderWidth, t.lineJoin = "bevel"), t.strokeStyle = n.borderColor, t.stroke()), t.restore() } }),
        ke = ue.valueOrDefault,
        Te = oe.global.defaultColor;
    oe._set("global", { elements: { line: { tension: .4, backgroundColor: Te, borderWidth: 3, borderColor: Te, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } }); var Me = pe.extend({ draw: function() { var e, t, n, i, a = this._view,
                    r = this._chart.ctx,
                    o = a.spanGaps,
                    s = this._children.slice(),
                    l = oe.global,
                    u = l.elements.line,
                    d = -1; for (this._loop && s.length && s.push(s[0]), r.save(), r.lineCap = a.borderCapStyle || u.borderCapStyle, r.setLineDash && r.setLineDash(a.borderDash || u.borderDash), r.lineDashOffset = ke(a.borderDashOffset, u.borderDashOffset), r.lineJoin = a.borderJoinStyle || u.borderJoinStyle, r.lineWidth = ke(a.borderWidth, u.borderWidth), r.strokeStyle = a.borderColor || l.defaultColor, r.beginPath(), d = -1, e = 0; e < s.length; ++e) t = s[e], n = ue.previousItem(s, e), i = t._view, 0 === e ? i.skip || (r.moveTo(i.x, i.y), d = e) : (n = -1 === d ? n : s[d], i.skip || (d !== e - 1 && !o || -1 === d ? r.moveTo(i.x, i.y) : ue.canvas.lineTo(r, n._view, t._view), d = e));
                r.stroke(), r.restore() } }),
        Ce = ue.valueOrDefault,
        De = oe.global.defaultColor;

    function Ae(e) { var t = this._view; return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius } oe._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: De, borderColor: De, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } }); var Ee = pe.extend({ inRange: function(e, t) { var n = this._view; return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2) }, inLabelRange: Ae, inXRange: Ae, inYRange: function(e) { var t = this._view; return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius }, getCenterPoint: function() { var e = this._view; return { x: e.x, y: e.y } }, getArea: function() { return Math.PI * Math.pow(this._view.radius, 2) }, tooltipPosition: function() { var e = this._view; return { x: e.x, y: e.y, padding: e.radius + e.borderWidth } }, draw: function(e) { var t = this._view,
                    n = this._chart.ctx,
                    i = t.pointStyle,
                    a = t.rotation,
                    r = t.radius,
                    o = t.x,
                    s = t.y,
                    l = oe.global,
                    u = l.defaultColor;
                t.skip || (void 0 === e || ue.canvas._isPointInArea(t, e)) && (n.strokeStyle = t.borderColor || u, n.lineWidth = Ce(t.borderWidth, l.elements.point.borderWidth), n.fillStyle = t.backgroundColor || u, ue.canvas.drawPoint(n, i, r, o, s, a)) } }),
        Pe = oe.global.defaultColor;

    function Oe(e) { return e && void 0 !== e.width }

    function Le(e) { var t, n, i, a, r; return Oe(e) ? (r = e.width / 2, t = e.x - r, n = e.x + r, i = Math.min(e.y, e.base), a = Math.max(e.y, e.base)) : (r = e.height / 2, t = Math.min(e.x, e.base), n = Math.max(e.x, e.base), i = e.y - r, a = e.y + r), { left: t, top: i, right: n, bottom: a } }

    function Ie(e, t, n) { return e === t ? n : e === n ? t : e }

    function Ne(e, t, n) { var i = null === t,
            a = null === n,
            r = !(!e || i && a) && Le(e); return r && (i || t >= r.left && t <= r.right) && (a || n >= r.top && n <= r.bottom) } oe._set("global", { elements: { rectangle: { backgroundColor: Pe, borderColor: Pe, borderSkipped: "bottom", borderWidth: 0 } } }); var He = pe.extend({ draw: function() { var e = this._chart.ctx,
                    t = this._view,
                    n = function(e) { var t = Le(e),
                            n = t.right - t.left,
                            i = t.bottom - t.top,
                            a = function(e, t, n) { var i, a, r, o, s = e.borderWidth,
                                    l = function(e) { var t = e.borderSkipped,
                                            n = {}; return t ? (e.horizontal ? e.base > e.x && (t = Ie(t, "left", "right")) : e.base < e.y && (t = Ie(t, "bottom", "top")), n[t] = !0, n) : n }(e); return ue.isObject(s) ? (i = +s.top || 0, a = +s.right || 0, r = +s.bottom || 0, o = +s.left || 0) : i = a = r = o = +s || 0, { t: l.top || i < 0 ? 0 : i > n ? n : i, r: l.right || a < 0 ? 0 : a > t ? t : a, b: l.bottom || r < 0 ? 0 : r > n ? n : r, l: l.left || o < 0 ? 0 : o > t ? t : o } }(e, n / 2, i / 2); return { outer: { x: t.left, y: t.top, w: n, h: i }, inner: { x: t.left + a.l, y: t.top + a.t, w: n - a.l - a.r, h: i - a.t - a.b } } }(t),
                    i = n.outer,
                    a = n.inner;
                e.fillStyle = t.backgroundColor, e.fillRect(i.x, i.y, i.w, i.h), i.w === a.w && i.h === a.h || (e.save(), e.beginPath(), e.rect(i.x, i.y, i.w, i.h), e.clip(), e.fillStyle = t.borderColor, e.rect(a.x, a.y, a.w, a.h), e.fill("evenodd"), e.restore()) }, height: function() { var e = this._view; return e.base - e.y }, inRange: function(e, t) { return Ne(this._view, e, t) }, inLabelRange: function(e, t) { var n = this._view; return Oe(n) ? Ne(n, e, null) : Ne(n, null, t) }, inXRange: function(e) { return Ne(this._view, e, null) }, inYRange: function(e) { return Ne(this._view, null, e) }, getCenterPoint: function() { var e, t, n = this._view; return Oe(n) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), { x: e, y: t } }, getArea: function() { var e = this._view; return Oe(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base) }, tooltipPosition: function() { var e = this._view; return { x: e.x, y: e.y } } }),
        Re = {},
        Ye = Se,
        We = Me,
        Fe = Ee,
        je = He;
    Re.Arc = Ye, Re.Line = We, Re.Point = Fe, Re.Rectangle = je; var ze = ue.options.resolve;
    oe._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }); var Be = xe.extend({ dataElementType: Re.Rectangle, initialize: function() { var e;
                xe.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0 }, update: function(e) { var t, n, i = this.getMeta().data; for (this._ruler = this.getRuler(), t = 0, n = i.length; t < n; ++t) this.updateElement(i[t], t, e) }, updateElement: function(e, t, n) { var i = this,
                    a = i.getMeta(),
                    r = i.getDataset(),
                    o = i._resolveElementOptions(e, t);
                e._xScale = i.getScaleForId(a.xAxisID), e._yScale = i.getScaleForId(a.yAxisID), e._datasetIndex = i.index, e._index = t, e._model = { backgroundColor: o.backgroundColor, borderColor: o.borderColor, borderSkipped: o.borderSkipped, borderWidth: o.borderWidth, datasetLabel: r.label, label: i.chart.data.labels[t] }, i._updateElementGeometry(e, t, n), e.pivot() }, _updateElementGeometry: function(e, t, n) { var i = this,
                    a = e._model,
                    r = i._getValueScale(),
                    o = r.getBasePixel(),
                    s = r.isHorizontal(),
                    l = i._ruler || i.getRuler(),
                    u = i.calculateBarValuePixels(i.index, t),
                    d = i.calculateBarIndexPixels(i.index, t, l);
                a.horizontal = s, a.base = n ? o : u.base, a.x = s ? n ? o : u.head : d.center, a.y = s ? d.center : n ? o : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size }, _getStacks: function(e) { var t, n, i = this.chart,
                    a = this._getIndexScale().options.stacked,
                    r = void 0 === e ? i.data.datasets.length : e + 1,
                    o = []; for (t = 0; t < r; ++t)(n = i.getDatasetMeta(t)).bar && i.isDatasetVisible(t) && (!1 === a || !0 === a && -1 === o.indexOf(n.stack) || void 0 === a && (void 0 === n.stack || -1 === o.indexOf(n.stack))) && o.push(n.stack); return o }, getStackCount: function() { return this._getStacks().length }, getStackIndex: function(e, t) { var n = this._getStacks(e),
                    i = void 0 !== t ? n.indexOf(t) : -1; return -1 === i ? n.length - 1 : i }, getRuler: function() { var e, t, n = this._getIndexScale(),
                    i = this.getStackCount(),
                    a = this.index,
                    r = n.isHorizontal(),
                    o = r ? n.left : n.top,
                    s = o + (r ? n.width : n.height),
                    l = []; for (e = 0, t = this.getMeta().data.length; e < t; ++e) l.push(n.getPixelForValue(null, e, a)); return { min: ue.isNullOrUndef(n.options.barThickness) ? function(e, t) { var n, i, a, r, o = e.isHorizontal() ? e.width : e.height,
                            s = e.getTicks(); for (a = 1, r = t.length; a < r; ++a) o = Math.min(o, Math.abs(t[a] - t[a - 1])); for (a = 0, r = s.length; a < r; ++a) i = e.getPixelForTick(a), o = a > 0 ? Math.min(o, i - n) : o, n = i; return o }(n, l) : -1, pixels: l, start: o, end: s, stackCount: i, scale: n } }, calculateBarValuePixels: function(e, t) { var n, i, a, r, o, s, l = this.chart,
                    u = this.getMeta(),
                    d = this._getValueScale(),
                    c = d.isHorizontal(),
                    f = l.data.datasets,
                    h = +d.getRightValue(f[e].data[t]),
                    p = d.options.minBarLength,
                    g = d.options.stacked,
                    m = u.stack,
                    v = 0; if (g || void 0 === g && void 0 !== m)
                    for (n = 0; n < e; ++n)(i = l.getDatasetMeta(n)).bar && i.stack === m && i.controller._getValueScaleId() === d.id && l.isDatasetVisible(n) && (a = +d.getRightValue(f[n].data[t]), (h < 0 && a < 0 || h >= 0 && a > 0) && (v += a)); return r = d.getPixelForValue(v), s = (o = d.getPixelForValue(v + h)) - r, void 0 !== p && Math.abs(s) < p && (s = p, o = h >= 0 && !c || h < 0 && c ? r - p : r + p), { size: s, base: r, head: o, center: o + s / 2 } }, calculateBarIndexPixels: function(e, t, n) { var i = n.scale.options,
                    a = "flex" === i.barThickness ? function(e, t, n) { var i, a = t.pixels,
                            r = a[e],
                            o = e > 0 ? a[e - 1] : null,
                            s = e < a.length - 1 ? a[e + 1] : null,
                            l = n.categoryPercentage; return null === o && (o = r - (null === s ? t.end - t.start : s - r)), null === s && (s = r + r - o), i = r - (r - Math.min(o, s)) / 2 * l, { chunk: Math.abs(s - o) / 2 * l / t.stackCount, ratio: n.barPercentage, start: i } }(t, n, i) : function(e, t, n) { var i, a, r = n.barThickness,
                            o = t.stackCount,
                            s = t.pixels[e]; return ue.isNullOrUndef(r) ? (i = t.min * n.categoryPercentage, a = n.barPercentage) : (i = r * o, a = 1), { chunk: i / o, ratio: a, start: s - i / 2 } }(t, n, i),
                    r = this.getStackIndex(e, this.getMeta().stack),
                    o = a.start + a.chunk * r + a.chunk / 2,
                    s = Math.min(ue.valueOrDefault(i.maxBarThickness, 1 / 0), a.chunk * a.ratio); return { base: o - s / 2, head: o + s / 2, center: o, size: s } }, draw: function() { var e = this.chart,
                    t = this._getValueScale(),
                    n = this.getMeta().data,
                    i = this.getDataset(),
                    a = n.length,
                    r = 0; for (ue.canvas.clipArea(e.ctx, e.chartArea); r < a; ++r) isNaN(t.getRightValue(i.data[r])) || n[r].draw();
                ue.canvas.unclipArea(e.ctx) }, _resolveElementOptions: function(e, t) { var n, i, a, r = this.chart,
                    o = r.data.datasets[this.index],
                    s = e.custom || {},
                    l = r.options.elements.rectangle,
                    u = {},
                    d = { chart: r, dataIndex: t, dataset: o, datasetIndex: this.index },
                    c = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"]; for (n = 0, i = c.length; n < i; ++n) u[a = c[n]] = ze([s[a], o[a], l[a]], d, t); return u } }),
        qe = ue.valueOrDefault,
        $e = ue.options.resolve;
    oe._set("bubble", { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function() { return "" }, label: function(e, t) { var n = t.datasets[e.datasetIndex].label || "",
                        i = t.datasets[e.datasetIndex].data[e.index]; return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + i.r + ")" } } } }); var Ve = xe.extend({ dataElementType: Re.Point, update: function(e) { var t = this,
                    n = t.getMeta().data;
                ue.each(n, function(n, i) { t.updateElement(n, i, e) }) }, updateElement: function(e, t, n) { var i = this,
                    a = i.getMeta(),
                    r = e.custom || {},
                    o = i.getScaleForId(a.xAxisID),
                    s = i.getScaleForId(a.yAxisID),
                    l = i._resolveElementOptions(e, t),
                    u = i.getDataset().data[t],
                    d = i.index,
                    c = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, t, d),
                    f = n ? s.getBasePixel() : s.getPixelForValue(u, t, d);
                e._xScale = o, e._yScale = s, e._options = l, e._datasetIndex = d, e._index = t, e._model = { backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, hitRadius: l.hitRadius, pointStyle: l.pointStyle, rotation: l.rotation, radius: n ? 0 : l.radius, skip: r.skip || isNaN(c) || isNaN(f), x: c, y: f }, e.pivot() }, setHoverStyle: function(e) { var t = e._model,
                    n = e._options,
                    i = ue.getHoverColor;
                e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = qe(n.hoverBackgroundColor, i(n.backgroundColor)), t.borderColor = qe(n.hoverBorderColor, i(n.borderColor)), t.borderWidth = qe(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius }, _resolveElementOptions: function(e, t) { var n, i, a, r = this.chart,
                    o = r.data.datasets[this.index],
                    s = e.custom || {},
                    l = r.options.elements.point,
                    u = o.data[t],
                    d = {},
                    c = { chart: r, dataIndex: t, dataset: o, datasetIndex: this.index },
                    f = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"]; for (n = 0, i = f.length; n < i; ++n) d[a = f[n]] = $e([s[a], o[a], l[a]], c, t); return d.radius = $e([s.radius, u ? u.r : void 0, o.radius, l.radius], c, t), d } }),
        Ue = ue.options.resolve,
        Xe = ue.valueOrDefault;
    oe._set("doughnut", { animation: { animateRotate: !0, animateScale: !1 }, hover: { mode: "single" }, legendCallback: function(e) { var t = [];
            t.push('<ul class="' + e.id + '-legend">'); var n = e.data,
                i = n.datasets,
                a = n.labels; if (i.length)
                for (var r = 0; r < i[0].data.length; ++r) t.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), a[r] && t.push(a[r]), t.push("</li>"); return t.push("</ul>"), t.join("") }, legend: { labels: { generateLabels: function(e) { var t = e.data; return t.labels.length && t.datasets.length ? t.labels.map(function(n, i) { var a = e.getDatasetMeta(0),
                            r = t.datasets[0],
                            o = a.data[i],
                            s = o && o.custom || {},
                            l = e.options.elements.arc; return { text: n, fillStyle: Ue([s.backgroundColor, r.backgroundColor, l.backgroundColor], void 0, i), strokeStyle: Ue([s.borderColor, r.borderColor, l.borderColor], void 0, i), lineWidth: Ue([s.borderWidth, r.borderWidth, l.borderWidth], void 0, i), hidden: isNaN(r.data[i]) || a.data[i].hidden, index: i } }) : [] } }, onClick: function(e, t) { var n, i, a, r = t.index,
                    o = this.chart; for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
                o.update() } }, cutoutPercentage: 50, rotation: -.5 * Math.PI, circumference: 2 * Math.PI, tooltips: { callbacks: { title: function() { return "" }, label: function(e, t) { var n = t.labels[e.index],
                        i = ": " + t.datasets[e.datasetIndex].data[e.index]; return ue.isArray(n) ? (n = n.slice())[0] += i : n += i, n } } } }); var Ge = xe.extend({ dataElementType: Re.Arc, linkScales: ue.noop, getRingIndex: function(e) { for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t; return t }, update: function(e) { var t, n, i = this,
                a = i.chart,
                r = a.chartArea,
                o = a.options,
                s = r.right - r.left,
                l = r.bottom - r.top,
                u = Math.min(s, l),
                d = { x: 0, y: 0 },
                c = i.getMeta(),
                f = c.data,
                h = o.cutoutPercentage,
                p = o.circumference,
                g = i._getRingWeight(i.index); if (p < 2 * Math.PI) { var m = o.rotation % (2 * Math.PI),
                    v = (m += 2 * Math.PI * (m >= Math.PI ? -1 : m < -Math.PI ? 1 : 0)) + p,
                    y = { x: Math.cos(m), y: Math.sin(m) },
                    _ = { x: Math.cos(v), y: Math.sin(v) },
                    b = m <= 0 && v >= 0 || m <= 2 * Math.PI && 2 * Math.PI <= v,
                    w = m <= .5 * Math.PI && .5 * Math.PI <= v || m <= 2.5 * Math.PI && 2.5 * Math.PI <= v,
                    x = m <= -Math.PI && -Math.PI <= v || m <= Math.PI && Math.PI <= v,
                    S = m <= .5 * -Math.PI && .5 * -Math.PI <= v || m <= 1.5 * Math.PI && 1.5 * Math.PI <= v,
                    k = h / 100,
                    T = { x: x ? -1 : Math.min(y.x * (y.x < 0 ? 1 : k), _.x * (_.x < 0 ? 1 : k)), y: S ? -1 : Math.min(y.y * (y.y < 0 ? 1 : k), _.y * (_.y < 0 ? 1 : k)) },
                    M = { x: b ? 1 : Math.max(y.x * (y.x > 0 ? 1 : k), _.x * (_.x > 0 ? 1 : k)), y: w ? 1 : Math.max(y.y * (y.y > 0 ? 1 : k), _.y * (_.y > 0 ? 1 : k)) },
                    C = { width: .5 * (M.x - T.x), height: .5 * (M.y - T.y) };
                u = Math.min(s / C.width, l / C.height), d = { x: -.5 * (M.x + T.x), y: -.5 * (M.y + T.y) } } for (t = 0, n = f.length; t < n; ++t) f[t]._options = i._resolveElementOptions(f[t], t); for (a.borderWidth = i.getMaxBorderWidth(), a.outerRadius = Math.max((u - a.borderWidth) / 2, 0), a.innerRadius = Math.max(h ? a.outerRadius / 100 * h : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / (i._getVisibleDatasetWeightTotal() || 1), a.offsetX = d.x * a.outerRadius, a.offsetY = d.y * a.outerRadius, c.total = i.calculateTotal(), i.outerRadius = a.outerRadius - a.radiusLength * i._getRingWeightOffset(i.index), i.innerRadius = Math.max(i.outerRadius - a.radiusLength * g, 0), t = 0, n = f.length; t < n; ++t) i.updateElement(f[t], t, e) }, updateElement: function(e, t, n) { var i = this,
                a = i.chart,
                r = a.chartArea,
                o = a.options,
                s = o.animation,
                l = (r.left + r.right) / 2,
                u = (r.top + r.bottom) / 2,
                d = o.rotation,
                c = o.rotation,
                f = i.getDataset(),
                h = n && s.animateRotate ? 0 : e.hidden ? 0 : i.calculateCircumference(f.data[t]) * (o.circumference / (2 * Math.PI)),
                p = n && s.animateScale ? 0 : i.innerRadius,
                g = n && s.animateScale ? 0 : i.outerRadius,
                m = e._options || {};
            ue.extend(e, { _datasetIndex: i.index, _index: t, _model: { backgroundColor: m.backgroundColor, borderColor: m.borderColor, borderWidth: m.borderWidth, borderAlign: m.borderAlign, x: l + a.offsetX, y: u + a.offsetY, startAngle: d, endAngle: c, circumference: h, outerRadius: g, innerRadius: p, label: ue.valueAtIndexOrDefault(f.label, t, a.data.labels[t]) } }); var v = e._model;
            n && s.animateRotate || (v.startAngle = 0 === t ? o.rotation : i.getMeta().data[t - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), e.pivot() }, calculateTotal: function() { var e, t = this.getDataset(),
                n = this.getMeta(),
                i = 0; return ue.each(n.data, function(n, a) { e = t.data[a], isNaN(e) || n.hidden || (i += Math.abs(e)) }), i }, calculateCircumference: function(e) { var t = this.getMeta().total; return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0 }, getMaxBorderWidth: function(e) { var t, n, i, a, r, o, s, l, u = 0,
                d = this.chart; if (!e)
                for (t = 0, n = d.data.datasets.length; t < n; ++t)
                    if (d.isDatasetVisible(t)) { e = (i = d.getDatasetMeta(t)).data, t !== this.index && (r = i.controller); break }
            if (!e) return 0; for (t = 0, n = e.length; t < n; ++t) a = e[t], "inner" !== (o = r ? r._resolveElementOptions(a, t) : a._options).borderAlign && (s = o.borderWidth, u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u); return u }, setHoverStyle: function(e) { var t = e._model,
                n = e._options,
                i = ue.getHoverColor;
            e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = Xe(n.hoverBackgroundColor, i(n.backgroundColor)), t.borderColor = Xe(n.hoverBorderColor, i(n.borderColor)), t.borderWidth = Xe(n.hoverBorderWidth, n.borderWidth) }, _resolveElementOptions: function(e, t) { var n, i, a, r = this.chart,
                o = this.getDataset(),
                s = e.custom || {},
                l = r.options.elements.arc,
                u = {},
                d = { chart: r, dataIndex: t, dataset: o, datasetIndex: this.index },
                c = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"]; for (n = 0, i = c.length; n < i; ++n) u[a = c[n]] = Ue([s[a], o[a], l[a]], d, t); return u }, _getRingWeightOffset: function(e) { for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n)); return t }, _getRingWeight: function(e) { return Math.max(Xe(this.chart.data.datasets[e].weight, 1), 0) }, _getVisibleDatasetWeightTotal: function() { return this._getRingWeightOffset(this.chart.data.datasets.length) } });
    oe._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ type: "category", position: "left", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { mode: "index", axis: "y" } }); var Ke = Be.extend({ _getValueScaleId: function() { return this.getMeta().xAxisID }, _getIndexScaleId: function() { return this.getMeta().yAxisID } }),
        Ze = ue.valueOrDefault,
        Qe = ue.options.resolve,
        Je = ue.canvas._isPointInArea;

    function et(e, t) { return Ze(e.showLine, t.showLines) } oe._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }); var tt = xe.extend({ datasetElementType: Re.Line, dataElementType: Re.Point, update: function(e) { var t, n, i = this,
                    a = i.getMeta(),
                    r = a.dataset,
                    o = a.data || [],
                    s = i.getScaleForId(a.yAxisID),
                    l = i.getDataset(),
                    u = et(l, i.chart.options); for (u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = i.index, r._children = o, r._model = i._resolveLineOptions(r), r.pivot()), t = 0, n = o.length; t < n; ++t) i.updateElement(o[t], t, e); for (u && 0 !== r._model.tension && i.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t) o[t].pivot() }, updateElement: function(e, t, n) { var i, a, r = this,
                    o = r.getMeta(),
                    s = e.custom || {},
                    l = r.getDataset(),
                    u = r.index,
                    d = l.data[t],
                    c = r.getScaleForId(o.yAxisID),
                    f = r.getScaleForId(o.xAxisID),
                    h = o.dataset._model,
                    p = r._resolvePointOptions(e, t);
                i = f.getPixelForValue("object" == typeof d ? d : NaN, t, u), a = n ? c.getBasePixel() : r.calculatePointY(d, t, u), e._xScale = f, e._yScale = c, e._options = p, e._datasetIndex = u, e._index = t, e._model = { x: i, y: a, skip: s.skip || isNaN(i) || isNaN(a), radius: p.radius, pointStyle: p.pointStyle, rotation: p.rotation, backgroundColor: p.backgroundColor, borderColor: p.borderColor, borderWidth: p.borderWidth, tension: Ze(s.tension, h ? h.tension : 0), steppedLine: !!h && h.steppedLine, hitRadius: p.hitRadius } }, _resolvePointOptions: function(e, t) { var n, i, a, r = this.chart,
                    o = r.data.datasets[this.index],
                    s = e.custom || {},
                    l = r.options.elements.point,
                    u = {},
                    d = { chart: r, dataIndex: t, dataset: o, datasetIndex: this.index },
                    c = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
                    f = Object.keys(c); for (n = 0, i = f.length; n < i; ++n) u[a = f[n]] = Qe([s[a], o[c[a]], o[a], l[a]], d, t); return u }, _resolveLineOptions: function(e) { var t, n, i, a = this.chart,
                    r = a.data.datasets[this.index],
                    o = e.custom || {},
                    s = a.options,
                    l = s.elements.line,
                    u = {},
                    d = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"]; for (t = 0, n = d.length; t < n; ++t) u[i = d[t]] = Qe([o[i], r[i], l[i]]); return u.spanGaps = Ze(r.spanGaps, s.spanGaps), u.tension = Ze(r.lineTension, l.tension), u.steppedLine = Qe([o.steppedLine, r.steppedLine, l.stepped]), u }, calculatePointY: function(e, t, n) { var i, a, r, o = this.chart,
                    s = this.getMeta(),
                    l = this.getScaleForId(s.yAxisID),
                    u = 0,
                    d = 0; if (l.options.stacked) { for (i = 0; i < n; i++)
                        if (a = o.data.datasets[i], "line" === (r = o.getDatasetMeta(i)).type && r.yAxisID === l.id && o.isDatasetVisible(i)) { var c = Number(l.getRightValue(a.data[t]));
                            c < 0 ? d += c || 0 : u += c || 0 }
                    var f = Number(l.getRightValue(e)); return f < 0 ? l.getPixelForValue(d + f) : l.getPixelForValue(u + f) } return l.getPixelForValue(e) }, updateBezierControlPoints: function() { var e, t, n, i, a = this.chart,
                    r = this.getMeta(),
                    o = r.dataset._model,
                    s = a.chartArea,
                    l = r.data || [];

                function u(e, t, n) { return Math.max(Math.min(e, n), t) } if (o.spanGaps && (l = l.filter(function(e) { return !e._model.skip })), "monotone" === o.cubicInterpolationMode) ue.splineCurveMonotone(l);
                else
                    for (e = 0, t = l.length; e < t; ++e) n = l[e]._model, i = ue.splineCurve(ue.previousItem(l, e)._model, n, ue.nextItem(l, e)._model, o.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y; if (a.options.elements.line.capBezierPoints)
                    for (e = 0, t = l.length; e < t; ++e) n = l[e]._model, Je(n, s) && (e > 0 && Je(l[e - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), e < l.length - 1 && Je(l[e + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom))) }, draw: function() { var e, t = this.chart,
                    n = this.getMeta(),
                    i = n.data || [],
                    a = t.chartArea,
                    r = i.length,
                    o = 0; for (et(this.getDataset(), t.options) && (e = (n.dataset._model.borderWidth || 0) / 2, ue.canvas.clipArea(t.ctx, { left: a.left, right: a.right, top: a.top - e, bottom: a.bottom + e }), n.dataset.draw(), ue.canvas.unclipArea(t.ctx)); o < r; ++o) i[o].draw(a) }, setHoverStyle: function(e) { var t = e._model,
                    n = e._options,
                    i = ue.getHoverColor;
                e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = Ze(n.hoverBackgroundColor, i(n.backgroundColor)), t.borderColor = Ze(n.hoverBorderColor, i(n.borderColor)), t.borderWidth = Ze(n.hoverBorderWidth, n.borderWidth), t.radius = Ze(n.hoverRadius, n.radius) } }),
        nt = ue.options.resolve;
    oe._set("polarArea", { scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, legendCallback: function(e) { var t = [];
            t.push('<ul class="' + e.id + '-legend">'); var n = e.data,
                i = n.datasets,
                a = n.labels; if (i.length)
                for (var r = 0; r < i[0].data.length; ++r) t.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), a[r] && t.push(a[r]), t.push("</li>"); return t.push("</ul>"), t.join("") }, legend: { labels: { generateLabels: function(e) { var t = e.data; return t.labels.length && t.datasets.length ? t.labels.map(function(n, i) { var a = e.getDatasetMeta(0),
                            r = t.datasets[0],
                            o = a.data[i].custom || {},
                            s = e.options.elements.arc; return { text: n, fillStyle: nt([o.backgroundColor, r.backgroundColor, s.backgroundColor], void 0, i), strokeStyle: nt([o.borderColor, r.borderColor, s.borderColor], void 0, i), lineWidth: nt([o.borderWidth, r.borderWidth, s.borderWidth], void 0, i), hidden: isNaN(r.data[i]) || a.data[i].hidden, index: i } }) : [] } }, onClick: function(e, t) { var n, i, a, r = t.index,
                    o = this.chart; for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
                o.update() } }, tooltips: { callbacks: { title: function() { return "" }, label: function(e, t) { return t.labels[e.index] + ": " + e.yLabel } } } }); var it = xe.extend({ dataElementType: Re.Arc, linkScales: ue.noop, update: function(e) { var t, n, i, a = this,
                r = a.getDataset(),
                o = a.getMeta(),
                s = a.chart.options.startAngle || 0,
                l = a._starts = [],
                u = a._angles = [],
                d = o.data; for (a._updateRadius(), o.count = a.countVisibleElements(), t = 0, n = r.data.length; t < n; t++) l[t] = s, i = a._computeAngle(t), u[t] = i, s += i; for (t = 0, n = d.length; t < n; ++t) d[t]._options = a._resolveElementOptions(d[t], t), a.updateElement(d[t], t, e) }, _updateRadius: function() { var e = this,
                t = e.chart,
                n = t.chartArea,
                i = t.options,
                a = Math.min(n.right - n.left, n.bottom - n.top);
            t.outerRadius = Math.max(a / 2, 0), t.innerRadius = Math.max(i.cutoutPercentage ? t.outerRadius / 100 * i.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength }, updateElement: function(e, t, n) { var i = this,
                a = i.chart,
                r = i.getDataset(),
                o = a.options,
                s = o.animation,
                l = a.scale,
                u = a.data.labels,
                d = l.xCenter,
                c = l.yCenter,
                f = o.startAngle,
                h = e.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[t]),
                p = i._starts[t],
                g = p + (e.hidden ? 0 : i._angles[t]),
                m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[t]),
                v = e._options || {};
            ue.extend(e, { _datasetIndex: i.index, _index: t, _scale: l, _model: { backgroundColor: v.backgroundColor, borderColor: v.borderColor, borderWidth: v.borderWidth, borderAlign: v.borderAlign, x: d, y: c, innerRadius: 0, outerRadius: n ? m : h, startAngle: n && s.animateRotate ? f : p, endAngle: n && s.animateRotate ? f : g, label: ue.valueAtIndexOrDefault(u, t, u[t]) } }), e.pivot() }, countVisibleElements: function() { var e = this.getDataset(),
                t = this.getMeta(),
                n = 0; return ue.each(t.data, function(t, i) { isNaN(e.data[i]) || t.hidden || n++ }), n }, setHoverStyle: function(e) { var t = e._model,
                n = e._options,
                i = ue.getHoverColor,
                a = ue.valueOrDefault;
            e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = a(n.hoverBackgroundColor, i(n.backgroundColor)), t.borderColor = a(n.hoverBorderColor, i(n.borderColor)), t.borderWidth = a(n.hoverBorderWidth, n.borderWidth) }, _resolveElementOptions: function(e, t) { var n, i, a, r = this.chart,
                o = this.getDataset(),
                s = e.custom || {},
                l = r.options.elements.arc,
                u = {},
                d = { chart: r, dataIndex: t, dataset: o, datasetIndex: this.index },
                c = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"]; for (n = 0, i = c.length; n < i; ++n) u[a = c[n]] = nt([s[a], o[a], l[a]], d, t); return u }, _computeAngle: function(e) { var t = this,
                n = this.getMeta().count,
                i = t.getDataset(),
                a = t.getMeta(); if (isNaN(i.data[e]) || a.data[e].hidden) return 0; var r = { chart: t.chart, dataIndex: e, dataset: i, datasetIndex: t.index }; return nt([t.chart.options.elements.arc.angle, 2 * Math.PI / n], r, e) } });
    oe._set("pie", ue.clone(oe.doughnut)), oe._set("pie", { cutoutPercentage: 0 }); var at = Ge,
        rt = ue.valueOrDefault,
        ot = ue.options.resolve;
    oe._set("radar", { scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } }); var st = xe.extend({ datasetElementType: Re.Line, dataElementType: Re.Point, linkScales: ue.noop, update: function(e) { var t, n, i = this,
                a = i.getMeta(),
                r = a.dataset,
                o = a.data || [],
                s = i.chart.scale,
                l = i.getDataset(); for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = i.index, r._children = o, r._loop = !0, r._model = i._resolveLineOptions(r), r.pivot(), t = 0, n = o.length; t < n; ++t) i.updateElement(o[t], t, e); for (i.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t) o[t].pivot() }, updateElement: function(e, t, n) { var i = this,
                a = e.custom || {},
                r = i.getDataset(),
                o = i.chart.scale,
                s = o.getPointPositionForValue(t, r.data[t]),
                l = i._resolvePointOptions(e, t),
                u = i.getMeta().dataset._model,
                d = n ? o.xCenter : s.x,
                c = n ? o.yCenter : s.y;
            e._scale = o, e._options = l, e._datasetIndex = i.index, e._index = t, e._model = { x: d, y: c, skip: a.skip || isNaN(d) || isNaN(c), radius: l.radius, pointStyle: l.pointStyle, rotation: l.rotation, backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, tension: rt(a.tension, u ? u.tension : 0), hitRadius: l.hitRadius } }, _resolvePointOptions: function(e, t) { var n, i, a, r = this.chart,
                o = r.data.datasets[this.index],
                s = e.custom || {},
                l = r.options.elements.point,
                u = {},
                d = { chart: r, dataIndex: t, dataset: o, datasetIndex: this.index },
                c = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
                f = Object.keys(c); for (n = 0, i = f.length; n < i; ++n) u[a = f[n]] = ot([s[a], o[c[a]], o[a], l[a]], d, t); return u }, _resolveLineOptions: function(e) { var t, n, i, a = this.chart,
                r = a.data.datasets[this.index],
                o = e.custom || {},
                s = a.options.elements.line,
                l = {},
                u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"]; for (t = 0, n = u.length; t < n; ++t) l[i = u[t]] = ot([o[i], r[i], s[i]]); return l.tension = rt(r.lineTension, s.tension), l }, updateBezierControlPoints: function() { var e, t, n, i, a = this.getMeta(),
                r = this.chart.chartArea,
                o = a.data || [];

            function s(e, t, n) { return Math.max(Math.min(e, n), t) } for (e = 0, t = o.length; e < t; ++e) n = o[e]._model, i = ue.splineCurve(ue.previousItem(o, e, !0)._model, n, ue.nextItem(o, e, !0)._model, n.tension), n.controlPointPreviousX = s(i.previous.x, r.left, r.right), n.controlPointPreviousY = s(i.previous.y, r.top, r.bottom), n.controlPointNextX = s(i.next.x, r.left, r.right), n.controlPointNextY = s(i.next.y, r.top, r.bottom) }, setHoverStyle: function(e) { var t = e._model,
                n = e._options,
                i = ue.getHoverColor;
            e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = rt(n.hoverBackgroundColor, i(n.backgroundColor)), t.borderColor = rt(n.hoverBorderColor, i(n.borderColor)), t.borderWidth = rt(n.hoverBorderWidth, n.borderWidth), t.radius = rt(n.hoverRadius, n.radius) } });
    oe._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, showLines: !1, tooltips: { callbacks: { title: function() { return "" }, label: function(e) { return "(" + e.xLabel + ", " + e.yLabel + ")" } } } }); var lt = { bar: Be, bubble: Ve, doughnut: Ge, horizontalBar: Ke, line: tt, polarArea: it, pie: at, radar: st, scatter: tt };

    function ut(e, t) { return e.native ? { x: e.x, y: e.y } : ue.getRelativePosition(e, t) }

    function dt(e, t) { var n, i, a, r, o; for (i = 0, r = e.data.datasets.length; i < r; ++i)
            if (e.isDatasetVisible(i))
                for (a = 0, o = (n = e.getDatasetMeta(i)).data.length; a < o; ++a) { var s = n.data[a];
                    s._view.skip || t(s) } }

    function ct(e, t) { var n = []; return dt(e, function(e) { e.inRange(t.x, t.y) && n.push(e) }), n }

    function ft(e, t, n, i) { var a = Number.POSITIVE_INFINITY,
            r = []; return dt(e, function(e) { if (!n || e.inRange(t.x, t.y)) { var o = e.getCenterPoint(),
                    s = i(t, o);
                s < a ? (r = [e], a = s) : s === a && r.push(e) } }), r }

    function ht(e) { var t = -1 !== e.indexOf("x"),
            n = -1 !== e.indexOf("y"); return function(e, i) { var a = t ? Math.abs(e.x - i.x) : 0,
                r = n ? Math.abs(e.y - i.y) : 0; return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2)) } }

    function pt(e, t, n) { var i = ut(t, e);
        n.axis = n.axis || "x"; var a = ht(n.axis),
            r = n.intersect ? ct(e, i) : ft(e, i, !1, a),
            o = []; return r.length ? (e.data.datasets.forEach(function(t, n) { if (e.isDatasetVisible(n)) { var i = e.getDatasetMeta(n).data[r[0]._index];
                i && !i._view.skip && o.push(i) } }), o) : [] } var gt = { modes: { single: function(e, t) { var n = ut(t, e),
                    i = []; return dt(e, function(e) { if (e.inRange(n.x, n.y)) return i.push(e), i }), i.slice(0, 1) }, label: pt, index: pt, dataset: function(e, t, n) { var i = ut(t, e);
                n.axis = n.axis || "xy"; var a = ht(n.axis),
                    r = n.intersect ? ct(e, i) : ft(e, i, !1, a); return r.length > 0 && (r = e.getDatasetMeta(r[0]._datasetIndex).data), r }, "x-axis": function(e, t) { return pt(e, t, { intersect: !1 }) }, point: function(e, t) { return ct(e, ut(t, e)) }, nearest: function(e, t, n) { var i = ut(t, e);
                n.axis = n.axis || "xy"; var a = ht(n.axis); return ft(e, i, n.intersect, a) }, x: function(e, t, n) { var i = ut(t, e),
                    a = [],
                    r = !1; return dt(e, function(e) { e.inXRange(i.x) && a.push(e), e.inRange(i.x, i.y) && (r = !0) }), n.intersect && !r && (a = []), a }, y: function(e, t, n) { var i = ut(t, e),
                    a = [],
                    r = !1; return dt(e, function(e) { e.inYRange(i.y) && a.push(e), e.inRange(i.x, i.y) && (r = !0) }), n.intersect && !r && (a = []), a } } };

    function mt(e, t) { return ue.where(e, function(e) { return e.position === t }) }

    function vt(e, t) { e.forEach(function(e, t) { return e._tmpIndex_ = t, e }), e.sort(function(e, n) { var i = t ? n : e,
                a = t ? e : n; return i.weight === a.weight ? i._tmpIndex_ - a._tmpIndex_ : i.weight - a.weight }), e.forEach(function(e) { delete e._tmpIndex_ }) }

    function yt(e, t) { ue.each(e, function(e) { t[e.position] += e.isHorizontal() ? e.height : e.width }) } oe._set("global", { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } }); var _t = { defaults: {}, addBox: function(e, t) { e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t) }, removeBox: function(e, t) { var n = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== n && e.boxes.splice(n, 1) }, configure: function(e, t, n) { for (var i, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) i = a[o], n.hasOwnProperty(i) && (t[i] = n[i]) }, update: function(e, t, n) { if (e) { var i = e.options.layout || {},
                    a = ue.options.toPadding(i.padding),
                    r = a.left,
                    o = a.right,
                    s = a.top,
                    l = a.bottom,
                    u = mt(e.boxes, "left"),
                    d = mt(e.boxes, "right"),
                    c = mt(e.boxes, "top"),
                    f = mt(e.boxes, "bottom"),
                    h = mt(e.boxes, "chartArea");
                vt(u, !0), vt(d, !1), vt(c, !0), vt(f, !1); var p, g = u.concat(d),
                    m = c.concat(f),
                    v = g.concat(m),
                    y = t - r - o,
                    _ = n - s - l,
                    b = (t - y / 2) / g.length,
                    w = y,
                    x = _,
                    S = { top: s, left: r, bottom: l, right: o },
                    k = [];
                ue.each(v, function(e) { var t, n = e.isHorizontal();
                    n ? (t = e.update(e.fullWidth ? y : w, _ / 2), x -= t.height) : (t = e.update(b, x), w -= t.width), k.push({ horizontal: n, width: t.width, box: e }) }), p = function(e) { var t = 0,
                        n = 0,
                        i = 0,
                        a = 0; return ue.each(e, function(e) { if (e.getPadding) { var r = e.getPadding();
                            t = Math.max(t, r.top), n = Math.max(n, r.left), i = Math.max(i, r.bottom), a = Math.max(a, r.right) } }), { top: t, left: n, bottom: i, right: a } }(v), ue.each(g, P), yt(g, S), ue.each(m, P), yt(m, S), ue.each(g, function(e) { var t = ue.findNextWhere(k, function(t) { return t.box === e }),
                        n = { left: 0, right: 0, top: S.top, bottom: S.bottom };
                    t && e.update(t.width, x, n) }), yt(v, S = { top: s, left: r, bottom: l, right: o }); var T = Math.max(p.left - S.left, 0);
                S.left += T, S.right += Math.max(p.right - S.right, 0); var M = Math.max(p.top - S.top, 0);
                S.top += M, S.bottom += Math.max(p.bottom - S.bottom, 0); var C = n - S.top - S.bottom,
                    D = t - S.left - S.right;
                D === w && C === x || (ue.each(g, function(e) { e.height = C }), ue.each(m, function(e) { e.fullWidth || (e.width = D) }), x = C, w = D); var A = r + T,
                    E = s + M;
                ue.each(u.concat(c), O), A += w, E += x, ue.each(d, O), ue.each(f, O), e.chartArea = { left: S.left, top: S.top, right: S.left + w, bottom: S.top + x }, ue.each(h, function(t) { t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(w, x) }) }

            function P(e) { var t = ue.findNextWhere(k, function(t) { return t.box === e }); if (t)
                    if (t.horizontal) { var n = { left: Math.max(S.left, p.left), right: Math.max(S.right, p.right), top: 0, bottom: 0 };
                        e.update(e.fullWidth ? y : w, _ / 2, n) }
                else e.update(t.width, x) }

            function O(e) { e.isHorizontal() ? (e.left = e.fullWidth ? r : S.left, e.right = e.fullWidth ? t - o : S.left + w, e.top = E, e.bottom = E + e.height, E = e.bottom) : (e.left = A, e.right = A + e.width, e.top = S.top, e.bottom = S.top + x, A = e.right) } } };

    function bt() { throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs") } "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self; var wt, xt = (wt = Object.freeze({ default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}" })) && wt.default || wt,
        St = "$chartjs",
        kt = "chartjs-size-monitor",
        Tt = "chartjs-render-monitor",
        Mt = "chartjs-render-animation",
        Ct = ["animationstart", "webkitAnimationStart"],
        Dt = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };

    function At(e, t) { var n = ue.getStyle(e, t),
            i = n && n.match(/^(\d+)(\.\d+)?px$/); return i ? Number(i[1]) : void 0 } var Et = !! function() { var e = !1; try { var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
            window.addEventListener("e", null, t) } catch (e) {} return e }() && { passive: !0 };

    function Pt(e, t, n) { e.addEventListener(t, n, Et) }

    function Ot(e, t, n) { e.removeEventListener(t, n, Et) }

    function Lt(e, t, n, i, a) { return { type: e, chart: t, native: a || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null } }

    function It(e) { var t = document.createElement("div"); return t.className = e || "", t } var Nt = { disableCSSInjection: !1, _enabled: "undefined" != typeof window && "undefined" != typeof document, _ensureLoaded: function() { var e, t;
            this._loaded || (this._loaded = !0, this.disableCSSInjection || (e = xt, t = this._style || document.createElement("style"), this._style || (this._style = t, e = "/* Chart.js */\n" + e, t.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(t)), t.appendChild(document.createTextNode(e)))) }, acquireContext: function(e, t) { "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas); var n = e && e.getContext && e.getContext("2d"); return this._ensureLoaded(), n && n.canvas === e ? (function(e, t) { var n = e.style,
                    i = e.getAttribute("height"),
                    a = e.getAttribute("width"); if (e[St] = { initial: { height: i, width: a, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || "block", null === a || "" === a) { var r = At(e, "width");
                    void 0 !== r && (e.width = r) } if (null === i || "" === i)
                    if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                    else { var o = At(e, "height");
                        void 0 !== r && (e.height = o) } }(e, t), n) : null }, releaseContext: function(e) { var t = e.canvas; if (t[St]) { var n = t[St].initial;
                ["height", "width"].forEach(function(e) { var i = n[e];
                    ue.isNullOrUndef(i) ? t.removeAttribute(e) : t.setAttribute(e, i) }), ue.each(n.style || {}, function(e, n) { t.style[n] = e }), t.width = t.width, delete t[St] } }, addEventListener: function(e, t, n) { var i = e.canvas; if ("resize" !== t) { var a = n[St] || (n[St] = {});
                Pt(i, t, (a.proxies || (a.proxies = {}))[e.id + "_" + t] = function(t) { n(function(e, t) { var n = Dt[e.type] || e.type,
                            i = ue.getRelativePosition(e, t); return Lt(n, t, i.x, i.y, e) }(t, e)) }) } else ! function(e, t, n) { var i, a, r, o, s = e[St] || (e[St] = {}),
                    l = s.resizer = function(e) { var t = It(kt),
                            n = It(kt + "-expand"),
                            i = It(kt + "-shrink");
                        n.appendChild(It()), i.appendChild(It()), t.appendChild(n), t.appendChild(i), t._reset = function() { n.scrollLeft = 1e6, n.scrollTop = 1e6, i.scrollLeft = 1e6, i.scrollTop = 1e6 }; var a = function() { t._reset(), e() }; return Pt(n, "scroll", a.bind(n, "expand")), Pt(i, "scroll", a.bind(i, "shrink")), t }((i = function() { if (s.resizer) { var i = n.options.maintainAspectRatio && e.parentNode,
                                a = i ? i.clientWidth : 0;
                            t(Lt("resize", n)), i && i.clientWidth < a && n.canvas && t(Lt("resize", n)) } }, r = !1, o = [], function() { o = Array.prototype.slice.call(arguments), a = a || this, r || (r = !0, ue.requestAnimFrame.call(window, function() { r = !1, i.apply(a, o) })) }));! function(e, t) { var n = e[St] || (e[St] = {}),
                        i = n.renderProxy = function(e) { e.animationName === Mt && t() };
                    ue.each(Ct, function(t) { Pt(e, t, i) }), n.reflow = !!e.offsetParent, e.classList.add(Tt) }(e, function() { if (s.resizer) { var t = e.parentNode;
                        t && t !== l.parentNode && t.insertBefore(l, t.firstChild), l._reset() } }) }(i, n, e) }, removeEventListener: function(e, t, n) { var i = e.canvas; if ("resize" !== t) { var a = ((n[St] || {}).proxies || {})[e.id + "_" + t];
                a && Ot(i, t, a) } else ! function(e) { var t = e[St] || {},
                    n = t.resizer;
                delete t.resizer,
                    function(e) { var t = e[St] || {},
                            n = t.renderProxy;
                        n && (ue.each(Ct, function(t) { Ot(e, t, n) }), delete t.renderProxy), e.classList.remove(Tt) }(e), n && n.parentNode && n.parentNode.removeChild(n) }(i) } };
    ue.addEvent = Pt, ue.removeEvent = Ot; var Ht = Nt._enabled ? Nt : { acquireContext: function(e) { return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null } },
        Rt = ue.extend({ initialize: function() {}, acquireContext: function() {}, releaseContext: function() {}, addEventListener: function() {}, removeEventListener: function() {} }, Ht);
    oe._set("global", { plugins: {} }); var Yt = { _plugins: [], _cacheId: 0, register: function(e) { var t = this._plugins;
                [].concat(e).forEach(function(e) {-1 === t.indexOf(e) && t.push(e) }), this._cacheId++ }, unregister: function(e) { var t = this._plugins;
                [].concat(e).forEach(function(e) { var n = t.indexOf(e); - 1 !== n && t.splice(n, 1) }), this._cacheId++ }, clear: function() { this._plugins = [], this._cacheId++ }, count: function() { return this._plugins.length }, getAll: function() { return this._plugins }, notify: function(e, t, n) { var i, a, r, o, s, l = this.descriptors(e),
                    u = l.length; for (i = 0; i < u; ++i)
                    if ("function" == typeof(s = (r = (a = l[i]).plugin)[t]) && ((o = [e].concat(n || [])).push(a.options), !1 === s.apply(r, o))) return !1; return !0 }, descriptors: function(e) { var t = e.$plugins || (e.$plugins = {}); if (t.id === this._cacheId) return t.descriptors; var n = [],
                    i = [],
                    a = e && e.config || {},
                    r = a.options && a.options.plugins || {}; return this._plugins.concat(a.plugins || []).forEach(function(e) { if (-1 === n.indexOf(e)) { var t = e.id,
                            a = r[t];!1 !== a && (!0 === a && (a = ue.clone(oe.global.plugins[t])), n.push(e), i.push({ plugin: e, options: a || {} })) } }), t.descriptors = i, t.id = this._cacheId, i }, _invalidate: function(e) { delete e.$plugins } },
        Wt = { constructors: {}, defaults: {}, registerScaleType: function(e, t, n) { this.constructors[e] = t, this.defaults[e] = ue.clone(n) }, getScaleConstructor: function(e) { return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0 }, getScaleDefaults: function(e) { return this.defaults.hasOwnProperty(e) ? ue.merge({}, [oe.scale, this.defaults[e]]) : {} }, updateScaleDefaults: function(e, t) { this.defaults.hasOwnProperty(e) && (this.defaults[e] = ue.extend(this.defaults[e], t)) }, addScalesToLayout: function(e) { ue.each(e.scales, function(t) { t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, _t.addBox(e, t) }) } },
        Ft = ue.valueOrDefault;
    oe._set("global", { tooltips: { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: { beforeTitle: ue.noop, title: function(e, t) { var n = "",
                        i = t.labels,
                        a = i ? i.length : 0; if (e.length > 0) { var r = e[0];
                        r.label ? n = r.label : r.xLabel ? n = r.xLabel : a > 0 && r.index < a && (n = i[r.index]) } return n }, afterTitle: ue.noop, beforeBody: ue.noop, beforeLabel: ue.noop, label: function(e, t) { var n = t.datasets[e.datasetIndex].label || ""; return n && (n += ": "), ue.isNullOrUndef(e.value) ? n += e.yLabel : n += e.value, n }, labelColor: function(e, t) { var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view; return { borderColor: n.borderColor, backgroundColor: n.backgroundColor } }, labelTextColor: function() { return this._options.bodyFontColor }, afterLabel: ue.noop, afterBody: ue.noop, beforeFooter: ue.noop, footer: ue.noop, afterFooter: ue.noop } } }); var jt = { average: function(e) { if (!e.length) return !1; var t, n, i = 0,
                a = 0,
                r = 0; for (t = 0, n = e.length; t < n; ++t) { var o = e[t]; if (o && o.hasValue()) { var s = o.tooltipPosition();
                    i += s.x, a += s.y, ++r } } return { x: i / r, y: a / r } }, nearest: function(e, t) { var n, i, a, r = t.x,
                o = t.y,
                s = Number.POSITIVE_INFINITY; for (n = 0, i = e.length; n < i; ++n) { var l = e[n]; if (l && l.hasValue()) { var u = l.getCenterPoint(),
                        d = ue.distanceBetweenPoints(t, u);
                    d < s && (s = d, a = l) } } if (a) { var c = a.tooltipPosition();
                r = c.x, o = c.y } return { x: r, y: o } } };

    function zt(e, t) { return t && (ue.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e }

    function Bt(e) { return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e }

    function qt(e) { var t = oe.global; return { xPadding: e.xPadding, yPadding: e.yPadding, xAlign: e.xAlign, yAlign: e.yAlign, bodyFontColor: e.bodyFontColor, _bodyFontFamily: Ft(e.bodyFontFamily, t.defaultFontFamily), _bodyFontStyle: Ft(e.bodyFontStyle, t.defaultFontStyle), _bodyAlign: e.bodyAlign, bodyFontSize: Ft(e.bodyFontSize, t.defaultFontSize), bodySpacing: e.bodySpacing, titleFontColor: e.titleFontColor, _titleFontFamily: Ft(e.titleFontFamily, t.defaultFontFamily), _titleFontStyle: Ft(e.titleFontStyle, t.defaultFontStyle), titleFontSize: Ft(e.titleFontSize, t.defaultFontSize), _titleAlign: e.titleAlign, titleSpacing: e.titleSpacing, titleMarginBottom: e.titleMarginBottom, footerFontColor: e.footerFontColor, _footerFontFamily: Ft(e.footerFontFamily, t.defaultFontFamily), _footerFontStyle: Ft(e.footerFontStyle, t.defaultFontStyle), footerFontSize: Ft(e.footerFontSize, t.defaultFontSize), _footerAlign: e.footerAlign, footerSpacing: e.footerSpacing, footerMarginTop: e.footerMarginTop, caretSize: e.caretSize, cornerRadius: e.cornerRadius, backgroundColor: e.backgroundColor, opacity: 0, legendColorBackground: e.multiKeyBackground, displayColors: e.displayColors, borderColor: e.borderColor, borderWidth: e.borderWidth } }

    function $t(e, t) { return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding }

    function Vt(e) { return zt([], Bt(e)) } var Ut = pe.extend({ initialize: function() { this._model = qt(this._options), this._lastActive = [] }, getTitle: function() { var e = this._options.callbacks,
                    t = e.beforeTitle.apply(this, arguments),
                    n = e.title.apply(this, arguments),
                    i = e.afterTitle.apply(this, arguments),
                    a = []; return a = zt(a, Bt(t)), a = zt(a, Bt(n)), zt(a, Bt(i)) }, getBeforeBody: function() { return Vt(this._options.callbacks.beforeBody.apply(this, arguments)) }, getBody: function(e, t) { var n = this,
                    i = n._options.callbacks,
                    a = []; return ue.each(e, function(e) { var r = { before: [], lines: [], after: [] };
                    zt(r.before, Bt(i.beforeLabel.call(n, e, t))), zt(r.lines, i.label.call(n, e, t)), zt(r.after, Bt(i.afterLabel.call(n, e, t))), a.push(r) }), a }, getAfterBody: function() { return Vt(this._options.callbacks.afterBody.apply(this, arguments)) }, getFooter: function() { var e = this._options.callbacks,
                    t = e.beforeFooter.apply(this, arguments),
                    n = e.footer.apply(this, arguments),
                    i = e.afterFooter.apply(this, arguments),
                    a = []; return a = zt(a, Bt(t)), a = zt(a, Bt(n)), zt(a, Bt(i)) }, update: function(e) { var t, n, i, a, r, o, s, l, u, d, c = this,
                    f = c._options,
                    h = c._model,
                    p = c._model = qt(f),
                    g = c._active,
                    m = c._data,
                    v = { xAlign: h.xAlign, yAlign: h.yAlign },
                    y = { x: h.x, y: h.y },
                    _ = { width: h.width, height: h.height },
                    b = { x: h.caretX, y: h.caretY }; if (g.length) { p.opacity = 1; var w = [],
                        x = [];
                    b = jt[f.position].call(c, g, c._eventPosition); var S = []; for (t = 0, n = g.length; t < n; ++t) S.push((a = void 0, r = void 0, void 0, void 0, l = void 0, u = void 0, d = void 0, a = (i = g[t])._xScale, r = i._yScale || i._scale, o = i._index, s = i._datasetIndex, u = (l = i._chart.getDatasetMeta(s).controller)._getIndexScale(), d = l._getValueScale(), { xLabel: a ? a.getLabelForIndex(o, s) : "", yLabel: r ? r.getLabelForIndex(o, s) : "", label: u ? "" + u.getLabelForIndex(o, s) : "", value: d ? "" + d.getLabelForIndex(o, s) : "", index: o, datasetIndex: s, x: i._model.x, y: i._model.y }));
                    f.filter && (S = S.filter(function(e) { return f.filter(e, m) })), f.itemSort && (S = S.sort(function(e, t) { return f.itemSort(e, t, m) })), ue.each(S, function(e) { w.push(f.callbacks.labelColor.call(c, e, c._chart)), x.push(f.callbacks.labelTextColor.call(c, e, c._chart)) }), p.title = c.getTitle(S, m), p.beforeBody = c.getBeforeBody(S, m), p.body = c.getBody(S, m), p.afterBody = c.getAfterBody(S, m), p.footer = c.getFooter(S, m), p.x = b.x, p.y = b.y, p.caretPadding = f.caretPadding, p.labelColors = w, p.labelTextColors = x, p.dataPoints = S, y = function(e, t, n, i) { var a = e.x,
                            r = e.y,
                            o = e.caretSize,
                            s = e.caretPadding,
                            l = e.cornerRadius,
                            u = n.xAlign,
                            d = n.yAlign,
                            c = o + s,
                            f = l + s; return "right" === u ? a -= t.width : "center" === u && ((a -= t.width / 2) + t.width > i.width && (a = i.width - t.width), a < 0 && (a = 0)), "top" === d ? r += c : r -= "bottom" === d ? t.height + c : t.height / 2, "center" === d ? "left" === u ? a += c : "right" === u && (a -= c) : "left" === u ? a -= f : "right" === u && (a += f), { x: a, y: r } }(p, _ = function(e, t) { var n = e._chart.ctx,
                            i = 2 * t.yPadding,
                            a = 0,
                            r = t.body,
                            o = r.reduce(function(e, t) { return e + t.before.length + t.lines.length + t.after.length }, 0);
                        o += t.beforeBody.length + t.afterBody.length; var s = t.title.length,
                            l = t.footer.length,
                            u = t.titleFontSize,
                            d = t.bodyFontSize,
                            c = t.footerFontSize;
                        i += s * u, i += s ? (s - 1) * t.titleSpacing : 0, i += s ? t.titleMarginBottom : 0, i += o * d, i += o ? (o - 1) * t.bodySpacing : 0, i += l ? t.footerMarginTop : 0, i += l * c, i += l ? (l - 1) * t.footerSpacing : 0; var f = 0,
                            h = function(e) { a = Math.max(a, n.measureText(e).width + f) }; return n.font = ue.fontString(u, t._titleFontStyle, t._titleFontFamily), ue.each(t.title, h), n.font = ue.fontString(d, t._bodyFontStyle, t._bodyFontFamily), ue.each(t.beforeBody.concat(t.afterBody), h), f = t.displayColors ? d + 2 : 0, ue.each(r, function(e) { ue.each(e.before, h), ue.each(e.lines, h), ue.each(e.after, h) }), f = 0, n.font = ue.fontString(c, t._footerFontStyle, t._footerFontFamily), ue.each(t.footer, h), { width: a += 2 * t.xPadding, height: i } }(this, p), v = function(e, t) { var n, i, a, r, o, s = e._model,
                            l = e._chart,
                            u = e._chart.chartArea,
                            d = "center",
                            c = "center";
                        s.y < t.height ? c = "top" : s.y > l.height - t.height && (c = "bottom"); var f = (u.left + u.right) / 2,
                            h = (u.top + u.bottom) / 2; "center" === c ? (n = function(e) { return e <= f }, i = function(e) { return e > f }) : (n = function(e) { return e <= t.width / 2 }, i = function(e) { return e >= l.width - t.width / 2 }), a = function(e) { return e + t.width + s.caretSize + s.caretPadding > l.width }, r = function(e) { return e - t.width - s.caretSize - s.caretPadding < 0 }, o = function(e) { return e <= h ? "top" : "bottom" }, n(s.x) ? (d = "left", a(s.x) && (d = "center", c = o(s.y))) : i(s.x) && (d = "right", r(s.x) && (d = "center", c = o(s.y))); var p = e._options; return { xAlign: p.xAlign ? p.xAlign : d, yAlign: p.yAlign ? p.yAlign : c } }(this, _), c._chart) } else p.opacity = 0; return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = y.x, p.y = y.y, p.width = _.width, p.height = _.height, p.caretX = b.x, p.caretY = b.y, c._model = p, e && f.custom && f.custom.call(c, p), c }, drawCaret: function(e, t) { var n = this._chart.ctx,
                    i = this._view,
                    a = this.getCaretPosition(e, t, i);
                n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3) }, getCaretPosition: function(e, t, n) { var i, a, r, o, s, l, u = n.caretSize,
                    d = n.cornerRadius,
                    c = n.xAlign,
                    f = n.yAlign,
                    h = e.x,
                    p = e.y,
                    g = t.width,
                    m = t.height; if ("center" === f) s = p + m / 2, "left" === c ? (a = (i = h) - u, r = i, o = s + u, l = s - u) : (a = (i = h + g) + u, r = i, o = s - u, l = s + u);
                else if ("left" === c ? (i = (a = h + d + u) - u, r = a + u) : "right" === c ? (i = (a = h + g - d - u) - u, r = a + u) : (i = (a = n.caretX) - u, r = a + u), "top" === f) s = (o = p) - u, l = o;
                else { s = (o = p + m) + u, l = o; var v = r;
                    r = i, i = v } return { x1: i, x2: a, x3: r, y1: o, y2: s, y3: l } }, drawTitle: function(e, t, n) { var i = t.title; if (i.length) { e.x = $t(t, t._titleAlign), n.textAlign = t._titleAlign, n.textBaseline = "top"; var a, r, o = t.titleFontSize,
                        s = t.titleSpacing; for (n.fillStyle = t.titleFontColor, n.font = ue.fontString(o, t._titleFontStyle, t._titleFontFamily), a = 0, r = i.length; a < r; ++a) n.fillText(i[a], e.x, e.y), e.y += o + s, a + 1 === i.length && (e.y += t.titleMarginBottom - s) } }, drawBody: function(e, t, n) { var i, a = t.bodyFontSize,
                    r = t.bodySpacing,
                    o = t._bodyAlign,
                    s = t.body,
                    l = t.displayColors,
                    u = t.labelColors,
                    d = 0,
                    c = l ? $t(t, "left") : 0;
                n.textAlign = o, n.textBaseline = "top", n.font = ue.fontString(a, t._bodyFontStyle, t._bodyFontFamily), e.x = $t(t, o); var f = function(t) { n.fillText(t, e.x + d, e.y), e.y += a + r };
                n.fillStyle = t.bodyFontColor, ue.each(t.beforeBody, f), d = l && "right" !== o ? "center" === o ? a / 2 + 1 : a + 2 : 0, ue.each(s, function(r, o) { i = t.labelTextColors[o], n.fillStyle = i, ue.each(r.before, f), ue.each(r.lines, function(r) { l && (n.fillStyle = t.legendColorBackground, n.fillRect(c, e.y, a, a), n.lineWidth = 1, n.strokeStyle = u[o].borderColor, n.strokeRect(c, e.y, a, a), n.fillStyle = u[o].backgroundColor, n.fillRect(c + 1, e.y + 1, a - 2, a - 2), n.fillStyle = i), f(r) }), ue.each(r.after, f) }), d = 0, ue.each(t.afterBody, f), e.y -= r }, drawFooter: function(e, t, n) { var i = t.footer;
                i.length && (e.x = $t(t, t._footerAlign), e.y += t.footerMarginTop, n.textAlign = t._footerAlign, n.textBaseline = "top", n.fillStyle = t.footerFontColor, n.font = ue.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), ue.each(i, function(i) { n.fillText(i, e.x, e.y), e.y += t.footerFontSize + t.footerSpacing })) }, drawBackground: function(e, t, n, i) { n.fillStyle = t.backgroundColor, n.strokeStyle = t.borderColor, n.lineWidth = t.borderWidth; var a = t.xAlign,
                    r = t.yAlign,
                    o = e.x,
                    s = e.y,
                    l = i.width,
                    u = i.height,
                    d = t.cornerRadius;
                n.beginPath(), n.moveTo(o + d, s), "top" === r && this.drawCaret(e, i), n.lineTo(o + l - d, s), n.quadraticCurveTo(o + l, s, o + l, s + d), "center" === r && "right" === a && this.drawCaret(e, i), n.lineTo(o + l, s + u - d), n.quadraticCurveTo(o + l, s + u, o + l - d, s + u), "bottom" === r && this.drawCaret(e, i), n.lineTo(o + d, s + u), n.quadraticCurveTo(o, s + u, o, s + u - d), "center" === r && "left" === a && this.drawCaret(e, i), n.lineTo(o, s + d), n.quadraticCurveTo(o, s, o + d, s), n.closePath(), n.fill(), t.borderWidth > 0 && n.stroke() }, draw: function() { var e = this._chart.ctx,
                    t = this._view; if (0 !== t.opacity) { var n = { width: t.width, height: t.height },
                        i = { x: t.x, y: t.y },
                        a = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                        r = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                    this._options.enabled && r && (e.save(), e.globalAlpha = a, this.drawBackground(i, t, e, n), i.y += t.yPadding, this.drawTitle(i, t, e), this.drawBody(i, t, e), this.drawFooter(i, t, e), e.restore()) } }, handleEvent: function(e) { var t, n = this,
                    i = n._options; return n._lastActive = n._lastActive || [], "mouseout" === e.type ? n._active = [] : n._active = n._chart.getElementsAtEventForMode(e, i.mode, i), (t = !ue.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = { x: e.x, y: e.y }, n.update(!0), n.pivot())), t } }),
        Xt = jt,
        Gt = Ut;
    Gt.positioners = Xt; var Kt = ue.valueOrDefault;

    function Zt() { return ue.merge({}, [].slice.call(arguments), { merger: function(e, t, n, i) { if ("xAxes" === e || "yAxes" === e) { var a, r, o, s = n[e].length; for (t[e] || (t[e] = []), a = 0; a < s; ++a) o = n[e][a], r = Kt(o.type, "xAxes" === e ? "category" : "linear"), a >= t[e].length && t[e].push({}), !t[e][a].type || o.type && o.type !== t[e][a].type ? ue.merge(t[e][a], [Wt.getScaleDefaults(r), o]) : ue.merge(t[e][a], o) } else ue._merger(e, t, n, i) } }) }

    function Qt() { return ue.merge({}, [].slice.call(arguments), { merger: function(e, t, n, i) { var a = t[e] || {},
                    r = n[e]; "scales" === e ? t[e] = Zt(a, r) : "scale" === e ? t[e] = ue.merge(a, [Wt.getScaleDefaults(r.type), r]) : ue._merger(e, t, n, i) } }) }

    function Jt(e) { return "top" === e || "bottom" === e } oe._set("global", { elements: {}, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, maintainAspectRatio: !0, responsive: !0, responsiveAnimationDuration: 0 }); var en = function(e, t) { return this.construct(e, t), this };
    ue.extend(en.prototype, { construct: function(e, t) { var n = this;
            t = function(e) { var t = (e = e || {}).data = e.data || {}; return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = Qt(oe.global, oe[e.type], e.options || {}), e }(t); var i = Rt.acquireContext(e, t),
                a = i && i.canvas,
                r = a && a.height,
                o = a && a.width;
            n.id = ue.uid(), n.ctx = i, n.canvas = a, n.config = t, n.width = o, n.height = r, n.aspectRatio = r ? o / r : null, n.options = t.options, n._bufferedRender = !1, n.chart = n, n.controller = n, en.instances[n.id] = n, Object.defineProperty(n, "data", { get: function() { return n.config.data }, set: function(e) { n.config.data = e } }), i && a ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item") }, initialize: function() { var e = this; return Yt.notify(e, "beforeInit"), ue.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.initToolTip(), Yt.notify(e, "afterInit"), e }, clear: function() { return ue.canvas.clear(this), this }, stop: function() { return ve.cancelAnimation(this), this }, resize: function(e) { var t = this,
                n = t.options,
                i = t.canvas,
                a = n.maintainAspectRatio && t.aspectRatio || null,
                r = Math.max(0, Math.floor(ue.getMaximumWidth(i))),
                o = Math.max(0, Math.floor(a ? r / a : ue.getMaximumHeight(i))); if ((t.width !== r || t.height !== o) && (i.width = t.width = r, i.height = t.height = o, i.style.width = r + "px", i.style.height = o + "px", ue.retinaScale(t, n.devicePixelRatio), !e)) { var s = { width: r, height: o };
                Yt.notify(t, "resize", [s]), n.onResize && n.onResize(t, s), t.stop(), t.update({ duration: n.responsiveAnimationDuration }) } }, ensureScalesHaveIDs: function() { var e = this.options,
                t = e.scales || {},
                n = e.scale;
            ue.each(t.xAxes, function(e, t) { e.id = e.id || "x-axis-" + t }), ue.each(t.yAxes, function(e, t) { e.id = e.id || "y-axis-" + t }), n && (n.id = n.id || "scale") }, buildOrUpdateScales: function() { var e = this,
                t = e.options,
                n = e.scales || {},
                i = [],
                a = Object.keys(n).reduce(function(e, t) { return e[t] = !1, e }, {});
            t.scales && (i = i.concat((t.scales.xAxes || []).map(function(e) { return { options: e, dtype: "category", dposition: "bottom" } }), (t.scales.yAxes || []).map(function(e) { return { options: e, dtype: "linear", dposition: "left" } }))), t.scale && i.push({ options: t.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), ue.each(i, function(t) { var i = t.options,
                    r = i.id,
                    o = Kt(i.type, t.dtype);
                Jt(i.position) !== Jt(t.dposition) && (i.position = t.dposition), a[r] = !0; var s = null; if (r in n && n[r].type === o)(s = n[r]).options = i, s.ctx = e.ctx, s.chart = e;
                else { var l = Wt.getScaleConstructor(o); if (!l) return;
                    s = new l({ id: r, type: o, options: i, ctx: e.ctx, chart: e }), n[s.id] = s } s.mergeTicksOptions(), t.isDefault && (e.scale = s) }), ue.each(a, function(e, t) { e || delete n[t] }), e.scales = n, Wt.addScalesToLayout(this) }, buildOrUpdateControllers: function() { var e = this,
                t = []; return ue.each(e.data.datasets, function(n, i) { var a = e.getDatasetMeta(i),
                    r = n.type || e.config.type; if (a.type && a.type !== r && (e.destroyDatasetMeta(i), a = e.getDatasetMeta(i)), a.type = r, a.controller) a.controller.updateIndex(i), a.controller.linkScales();
                else { var o = lt[a.type]; if (void 0 === o) throw new Error('"' + a.type + '" is not a chart type.');
                    a.controller = new o(e, i), t.push(a.controller) } }, e), t }, resetElements: function() { var e = this;
            ue.each(e.data.datasets, function(t, n) { e.getDatasetMeta(n).controller.reset() }, e) }, reset: function() { this.resetElements(), this.tooltip.initialize() }, update: function(e) { var t, n, i = this; if (e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] }), n = (t = i).options, ue.each(t.scales, function(e) { _t.removeBox(t, e) }), n = Qt(oe.global, oe[t.config.type], n), t.options = t.config.options = n, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = n.tooltips, t.tooltip.initialize(), Yt._invalidate(i), !1 !== Yt.notify(i, "beforeUpdate")) { i.tooltip._data = i.data; var a = i.buildOrUpdateControllers();
                ue.each(i.data.datasets, function(e, t) { i.getDatasetMeta(t).controller.buildOrUpdateElements() }, i), i.updateLayout(), i.options.animation && i.options.animation.duration && ue.each(a, function(e) { e.reset() }), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], Yt.notify(i, "afterUpdate"), i._bufferedRender ? i._bufferedRequest = { duration: e.duration, easing: e.easing, lazy: e.lazy } : i.render(e) } }, updateLayout: function() {!1 !== Yt.notify(this, "beforeLayout") && (_t.update(this, this.width, this.height), Yt.notify(this, "afterScaleUpdate"), Yt.notify(this, "afterLayout")) }, updateDatasets: function() { if (!1 !== Yt.notify(this, "beforeDatasetsUpdate")) { for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                Yt.notify(this, "afterDatasetsUpdate") } }, updateDataset: function(e) { var t = this.getDatasetMeta(e),
                n = { meta: t, index: e };!1 !== Yt.notify(this, "beforeDatasetUpdate", [n]) && (t.controller.update(), Yt.notify(this, "afterDatasetUpdate", [n])) }, render: function(e) { var t = this;
            e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] }); var n = t.options.animation,
                i = Kt(e.duration, n && n.duration),
                a = e.lazy; if (!1 !== Yt.notify(t, "beforeRender")) { var r = function(e) { Yt.notify(t, "afterRender"), ue.callback(n && n.onComplete, [e], t) }; if (n && i) { var o = new me({ numSteps: i / 16.66, easing: e.easing || n.easing, render: function(e, t) { var n = ue.easing.effects[t.easing],
                                i = t.currentStep,
                                a = i / t.numSteps;
                            e.draw(n(a), a, i) }, onAnimationProgress: n.onProgress, onAnimationComplete: r });
                    ve.addAnimation(t, o, i, a) } else t.draw(), r(new me({ numSteps: 0, chart: t })); return t } }, draw: function(e) { var t = this;
            t.clear(), ue.isNullOrUndef(e) && (e = 1), t.transition(e), t.width <= 0 || t.height <= 0 || !1 !== Yt.notify(t, "beforeDraw", [e]) && (ue.each(t.boxes, function(e) { e.draw(t.chartArea) }, t), t.drawDatasets(e), t._drawTooltip(e), Yt.notify(t, "afterDraw", [e])) }, transition: function(e) { for (var t = 0, n = (this.data.datasets || []).length; t < n; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
            this.tooltip.transition(e) }, drawDatasets: function(e) { var t = this; if (!1 !== Yt.notify(t, "beforeDatasetsDraw", [e])) { for (var n = (t.data.datasets || []).length - 1; n >= 0; --n) t.isDatasetVisible(n) && t.drawDataset(n, e);
                Yt.notify(t, "afterDatasetsDraw", [e]) } }, drawDataset: function(e, t) { var n = this.getDatasetMeta(e),
                i = { meta: n, index: e, easingValue: t };!1 !== Yt.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(t), Yt.notify(this, "afterDatasetDraw", [i])) }, _drawTooltip: function(e) { var t = this.tooltip,
                n = { tooltip: t, easingValue: e };!1 !== Yt.notify(this, "beforeTooltipDraw", [n]) && (t.draw(), Yt.notify(this, "afterTooltipDraw", [n])) }, getElementAtEvent: function(e) { return gt.modes.single(this, e) }, getElementsAtEvent: function(e) { return gt.modes.label(this, e, { intersect: !0 }) }, getElementsAtXAxis: function(e) { return gt.modes["x-axis"](this, e, { intersect: !0 }) }, getElementsAtEventForMode: function(e, t, n) { var i = gt.modes[t]; return "function" == typeof i ? i(this, e, n) : [] }, getDatasetAtEvent: function(e) { return gt.modes.dataset(this, e, { intersect: !0 }) }, getDatasetMeta: function(e) { var t = this.data.datasets[e];
            t._meta || (t._meta = {}); var n = t._meta[this.id]; return n || (n = t._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), n }, getVisibleDatasetCount: function() { for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++; return e }, isDatasetVisible: function(e) { var t = this.getDatasetMeta(e); return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden }, generateLegend: function() { return this.options.legendCallback(this) }, destroyDatasetMeta: function(e) { var t = this.id,
                n = this.data.datasets[e],
                i = n._meta && n._meta[t];
            i && (i.controller.destroy(), delete n._meta[t]) }, destroy: function() { var e, t, n = this,
                i = n.canvas; for (n.stop(), e = 0, t = n.data.datasets.length; e < t; ++e) n.destroyDatasetMeta(e);
            i && (n.unbindEvents(), ue.canvas.clear(n), Rt.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Yt.notify(n, "destroy"), delete en.instances[n.id] }, toBase64Image: function() { return this.canvas.toDataURL.apply(this.canvas, arguments) }, initToolTip: function() { var e = this;
            e.tooltip = new Gt({ _chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips }, e) }, bindEvents: function() { var e = this,
                t = e._listeners = {},
                n = function() { e.eventHandler.apply(e, arguments) };
            ue.each(e.options.events, function(i) { Rt.addEventListener(e, i, n), t[i] = n }), e.options.responsive && (n = function() { e.resize() }, Rt.addEventListener(e, "resize", n), t.resize = n) }, unbindEvents: function() { var e = this,
                t = e._listeners;
            t && (delete e._listeners, ue.each(t, function(t, n) { Rt.removeEventListener(e, n, t) })) }, updateHoverStyle: function(e, t, n) { var i, a, r, o = n ? "setHoverStyle" : "removeHoverStyle"; for (a = 0, r = e.length; a < r; ++a)(i = e[a]) && this.getDatasetMeta(i._datasetIndex).controller[o](i) }, eventHandler: function(e) { var t = this,
                n = t.tooltip; if (!1 !== Yt.notify(t, "beforeEvent", [e])) { t._bufferedRender = !0, t._bufferedRequest = null; var i = t.handleEvent(e);
                n && (i = n._start ? n.handleEvent(e) : i | n.handleEvent(e)), Yt.notify(t, "afterEvent", [e]); var a = t._bufferedRequest; return a ? t.render(a) : i && !t.animating && (t.stop(), t.render({ duration: t.options.hover.animationDuration, lazy: !0 })), t._bufferedRender = !1, t._bufferedRequest = null, t } }, handleEvent: function(e) { var t, n = this,
                i = n.options || {},
                a = i.hover; return n.lastActive = n.lastActive || [], "mouseout" === e.type ? n.active = [] : n.active = n.getElementsAtEventForMode(e, a.mode, a), ue.callback(i.onHover || i.hover.onHover, [e.native, n.active], n), "mouseup" !== e.type && "click" !== e.type || i.onClick && i.onClick.call(n, e.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1), n.active.length && a.mode && n.updateHoverStyle(n.active, a.mode, !0), t = !ue.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, t } }), en.instances = {}; var tn = en;

    function nn() { throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.") }

    function an(e) { this.options = e || {} } en.Controller = en, en.types = {}, ue.configMerge = Qt, ue.scaleMerge = Zt, ue.extend(an.prototype, { formats: nn, parse: nn, format: nn, add: nn, diff: nn, startOf: nn, endOf: nn, _create: function(e) { return e } }), an.override = function(e) { ue.extend(an.prototype, e) }; var rn = { _date: an },
        on = { formatters: { values: function(e) { return ue.isArray(e) ? e : "" + e }, linear: function(e, t, n) { var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                    Math.abs(i) > 1 && e !== Math.floor(e) && (i = e - Math.floor(e)); var a = ue.log10(Math.abs(i)),
                        r = ""; if (0 !== e)
                        if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) { var o = ue.log10(Math.abs(e));
                            r = e.toExponential(Math.floor(o) - Math.floor(a)) }
                    else { var s = -1 * Math.floor(a);
                        s = Math.max(Math.min(s, 20), 0), r = e.toFixed(s) } else r = "0"; return r }, logarithmic: function(e, t, n) { var i = e / Math.pow(10, Math.floor(ue.log10(e))); return 0 === e ? "0" : 1 === i || 2 === i || 5 === i || 0 === t || t === n.length - 1 ? e.toExponential() : "" } } },
        sn = ue.valueOrDefault,
        ln = ue.valueAtIndexOrDefault;

    function un(e) { var t, n, i = []; for (t = 0, n = e.length; t < n; ++t) i.push(e[t].label); return i }

    function dn(e, t, n) { return ue.isArray(t) ? ue.longestText(e, n, t) : e.measureText(t).width } oe._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: on.formatters.values, minor: {}, major: {} } }); var cn = pe.extend({ getPadding: function() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } }, getTicks: function() { return this._ticks }, mergeTicksOptions: function() { var e = this.options.ticks; for (var t in !1 === e.minor && (e.minor = { display: !1 }), !1 === e.major && (e.major = { display: !1 }), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t])) }, beforeUpdate: function() { ue.callback(this.options.beforeUpdate, [this]) }, update: function(e, t, n) { var i, a, r, o, s, l, u = this; for (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = ue.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n), u._maxLabelLines = 0, u.longestLabelWidth = 0, u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), s = u.buildTicks() || [], s = u.afterBuildTicks(s) || s, u.beforeTickToLabelConversion(), r = u.convertTicksToLabels(s) || u.ticks, u.afterTickToLabelConversion(), u.ticks = r, i = 0, a = r.length; i < a; ++i) o = r[i], (l = s[i]) ? l.label = o : s.push(l = { label: o, major: !1 }); return u._ticks = s, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize }, afterUpdate: function() { ue.callback(this.options.afterUpdate, [this]) }, beforeSetDimensions: function() { ue.callback(this.options.beforeSetDimensions, [this]) }, setDimensions: function() { var e = this;
                e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0 }, afterSetDimensions: function() { ue.callback(this.options.afterSetDimensions, [this]) }, beforeDataLimits: function() { ue.callback(this.options.beforeDataLimits, [this]) }, determineDataLimits: ue.noop, afterDataLimits: function() { ue.callback(this.options.afterDataLimits, [this]) }, beforeBuildTicks: function() { ue.callback(this.options.beforeBuildTicks, [this]) }, buildTicks: ue.noop, afterBuildTicks: function(e) { var t = this; return ue.isArray(e) && e.length ? ue.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = ue.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e) }, beforeTickToLabelConversion: function() { ue.callback(this.options.beforeTickToLabelConversion, [this]) }, convertTicksToLabels: function() { var e = this.options.ticks;
                this.ticks = this.ticks.map(e.userCallback || e.callback, this) }, afterTickToLabelConversion: function() { ue.callback(this.options.afterTickToLabelConversion, [this]) }, beforeCalculateTickRotation: function() { ue.callback(this.options.beforeCalculateTickRotation, [this]) }, calculateTickRotation: function() { var e = this,
                    t = e.ctx,
                    n = e.options.ticks,
                    i = un(e._ticks),
                    a = ue.options._parseFont(n);
                t.font = a.string; var r = n.minRotation || 0; if (i.length && e.options.display && e.isHorizontal())
                    for (var o, s = ue.longestText(t, a.string, i, e.longestTextCache), l = s, u = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; l > u && r < n.maxRotation;) { var d = ue.toRadians(r); if (o = Math.cos(d), Math.sin(d) * s > e.maxHeight) { r--; break } r++, l = o * s } e.labelRotation = r }, afterCalculateTickRotation: function() { ue.callback(this.options.afterCalculateTickRotation, [this]) }, beforeFit: function() { ue.callback(this.options.beforeFit, [this]) }, fit: function() { var e = this,
                    t = e.minSize = { width: 0, height: 0 },
                    n = un(e._ticks),
                    i = e.options,
                    a = i.ticks,
                    r = i.scaleLabel,
                    o = i.gridLines,
                    s = e._isVisible(),
                    l = i.position,
                    u = e.isHorizontal(),
                    d = ue.options._parseFont,
                    c = d(a),
                    f = i.gridLines.tickMarkLength; if (t.width = u ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : s && o.drawTicks ? f : 0, t.height = u ? s && o.drawTicks ? f : 0 : e.maxHeight, r.display && s) { var h = d(r),
                        p = ue.options.toPadding(r.padding),
                        g = h.lineHeight + p.height;
                    u ? t.height += g : t.width += g } if (a.display && s) { var m = ue.longestText(e.ctx, c.string, n, e.longestTextCache),
                        v = ue.numberOfLabelLines(n),
                        y = .5 * c.size,
                        _ = e.options.ticks.padding; if (e._maxLabelLines = v, e.longestLabelWidth = m, u) { var b = ue.toRadians(e.labelRotation),
                            w = Math.cos(b),
                            x = Math.sin(b) * m + c.lineHeight * v + y;
                        t.height = Math.min(e.maxHeight, t.height + x + _), e.ctx.font = c.string; var S, k, T = dn(e.ctx, n[0], c.string),
                            M = dn(e.ctx, n[n.length - 1], c.string),
                            C = e.getPixelForTick(0) - e.left,
                            D = e.right - e.getPixelForTick(n.length - 1);
                        0 !== e.labelRotation ? (S = "bottom" === l ? w * T : w * y, k = "bottom" === l ? w * y : w * M) : (S = T / 2, k = M / 2), e.paddingLeft = Math.max(S - C, 0) + 3, e.paddingRight = Math.max(k - D, 0) + 3 } else a.mirror ? m = 0 : m += _ + y, t.width = Math.min(e.maxWidth, t.width + m), e.paddingTop = c.size / 2, e.paddingBottom = c.size / 2 } e.handleMargins(), e.width = t.width, e.height = t.height }, handleMargins: function() { var e = this;
                e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0)) }, afterFit: function() { ue.callback(this.options.afterFit, [this]) }, isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position }, isFullWidth: function() { return this.options.fullWidth }, getRightValue: function(e) { if (ue.isNullOrUndef(e)) return NaN; if (("number" == typeof e || e instanceof Number) && !isFinite(e)) return NaN; if (e)
                    if (this.isHorizontal()) { if (void 0 !== e.x) return this.getRightValue(e.x) }
                else if (void 0 !== e.y) return this.getRightValue(e.y); return e }, getLabelForIndex: ue.noop, getPixelForValue: ue.noop, getValueForPixel: ue.noop, getPixelForTick: function(e) { var t = this,
                    n = t.options.offset; if (t.isHorizontal()) { var i = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (n ? 0 : 1), 1),
                        a = i * e + t.paddingLeft; return n && (a += i / 2), t.left + a + (t.isFullWidth() ? t.margins.left : 0) } var r = t.height - (t.paddingTop + t.paddingBottom); return t.top + e * (r / (t._ticks.length - 1)) }, getPixelForDecimal: function(e) { var t = this; if (t.isHorizontal()) { var n = (t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft; return t.left + n + (t.isFullWidth() ? t.margins.left : 0) } return t.top + e * t.height }, getBasePixel: function() { return this.getPixelForValue(this.getBaseValue()) }, getBaseValue: function() { var e = this.min,
                    t = this.max; return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0 }, _autoSkip: function(e) { var t, n, i = this,
                    a = i.isHorizontal(),
                    r = i.options.ticks.minor,
                    o = e.length,
                    s = !1,
                    l = r.maxTicksLimit,
                    u = i._tickSize() * (o - 1),
                    d = a ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.PaddingBottom),
                    c = []; for (u > d && (s = 1 + Math.floor(u / d)), o > l && (s = Math.max(s, 1 + Math.floor(o / l))), t = 0; t < o; t++) n = e[t], s > 1 && t % s > 0 && delete n.label, c.push(n); return c }, _tickSize: function() { var e = this,
                    t = e.isHorizontal(),
                    n = e.options.ticks.minor,
                    i = ue.toRadians(e.labelRotation),
                    a = Math.abs(Math.cos(i)),
                    r = Math.abs(Math.sin(i)),
                    o = n.autoSkipPadding || 0,
                    s = e.longestLabelWidth + o || 0,
                    l = ue.options._parseFont(n),
                    u = e._maxLabelLines * l.lineHeight + o || 0; return t ? u * a > s * r ? s / a : u / r : u * r < s * a ? u / a : s / r }, _isVisible: function() { var e, t, n, i = this.chart,
                    a = this.options.display; if ("auto" !== a) return !!a; for (e = 0, t = i.data.datasets.length; e < t; ++e)
                    if (i.isDatasetVisible(e) && ((n = i.getDatasetMeta(e)).xAxisID === this.id || n.yAxisID === this.id)) return !0; return !1 }, draw: function(e) { var t = this,
                    n = t.options; if (t._isVisible()) { var i, a, r, o = t.chart,
                        s = t.ctx,
                        l = oe.global.defaultFontColor,
                        u = n.ticks.minor,
                        d = n.ticks.major || u,
                        c = n.gridLines,
                        f = n.scaleLabel,
                        h = n.position,
                        p = 0 !== t.labelRotation,
                        g = u.mirror,
                        m = t.isHorizontal(),
                        v = ue.options._parseFont,
                        y = u.display && u.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                        _ = sn(u.fontColor, l),
                        b = v(u),
                        w = b.lineHeight,
                        x = sn(d.fontColor, l),
                        S = v(d),
                        k = u.padding,
                        T = u.labelOffset,
                        M = c.drawTicks ? c.tickMarkLength : 0,
                        C = sn(f.fontColor, l),
                        D = v(f),
                        A = ue.options.toPadding(f.padding),
                        E = ue.toRadians(t.labelRotation),
                        P = [],
                        O = c.drawBorder ? ln(c.lineWidth, 0, 0) : 0,
                        L = ue._alignPixel; if ("top" === h ? (i = L(o, t.bottom, O), a = t.bottom - M, r = i - O / 2) : "bottom" === h ? (i = L(o, t.top, O), a = i + O / 2, r = t.top + M) : "left" === h ? (i = L(o, t.right, O), a = t.right - M, r = i - O / 2) : (i = L(o, t.left, O), a = i + O / 2, r = t.left + M), ue.each(y, function(i, s) { if (!ue.isNullOrUndef(i.label)) { var l, u, d, f, v, y, _, b, x, S, C, D, A, I, N, H, R = i.label;
                                s === t.zeroLineIndex && n.offset === c.offsetGridLines ? (l = c.zeroLineWidth, u = c.zeroLineColor, d = c.zeroLineBorderDash || [], f = c.zeroLineBorderDashOffset || 0) : (l = ln(c.lineWidth, s), u = ln(c.color, s), d = c.borderDash || [], f = c.borderDashOffset || 0); var Y = ue.isArray(R) ? R.length : 1,
                                    W = function(e, t, n) { var i = e.getPixelForTick(t); return n && (1 === e.getTicks().length ? i -= e.isHorizontal() ? Math.max(i - e.left, e.right - i) : Math.max(i - e.top, e.bottom - i) : i -= 0 === t ? (e.getPixelForTick(1) - i) / 2 : (i - e.getPixelForTick(t - 1)) / 2), i }(t, s, c.offsetGridLines); if (m) { var F = M + k;
                                    W < t.left - 1e-7 && (u = "rgba(0,0,0,0)"), v = _ = x = C = L(o, W, l), y = a, b = r, A = t.getPixelForTick(s) + T, "top" === h ? (S = L(o, e.top, O) + O / 2, D = e.bottom, N = ((p ? 1 : .5) - Y) * w, H = p ? "left" : "center", I = t.bottom - F) : (S = e.top, D = L(o, e.bottom, O) - O / 2, N = (p ? 0 : .5) * w, H = p ? "right" : "center", I = t.top + F) } else { var j = (g ? 0 : M) + k;
                                    W < t.top - 1e-7 && (u = "rgba(0,0,0,0)"), v = a, _ = r, y = b = S = D = L(o, W, l), I = t.getPixelForTick(s) + T, N = (1 - Y) * w / 2, "left" === h ? (x = L(o, e.left, O) + O / 2, C = e.right, H = g ? "left" : "right", A = t.right - j) : (x = e.left, C = L(o, e.right, O) - O / 2, H = g ? "right" : "left", A = t.left + j) } P.push({ tx1: v, ty1: y, tx2: _, ty2: b, x1: x, y1: S, x2: C, y2: D, labelX: A, labelY: I, glWidth: l, glColor: u, glBorderDash: d, glBorderDashOffset: f, rotation: -1 * E, label: R, major: i.major, textOffset: N, textAlign: H }) } }), ue.each(P, function(e) { var t = e.glWidth,
                                n = e.glColor; if (c.display && t && n && (s.save(), s.lineWidth = t, s.strokeStyle = n, s.setLineDash && (s.setLineDash(e.glBorderDash), s.lineDashOffset = e.glBorderDashOffset), s.beginPath(), c.drawTicks && (s.moveTo(e.tx1, e.ty1), s.lineTo(e.tx2, e.ty2)), c.drawOnChartArea && (s.moveTo(e.x1, e.y1), s.lineTo(e.x2, e.y2)), s.stroke(), s.restore()), u.display) { s.save(), s.translate(e.labelX, e.labelY), s.rotate(e.rotation), s.font = e.major ? S.string : b.string, s.fillStyle = e.major ? x : _, s.textBaseline = "middle", s.textAlign = e.textAlign; var i = e.label,
                                    a = e.textOffset; if (ue.isArray(i))
                                    for (var r = 0; r < i.length; ++r) s.fillText("" + i[r], 0, a), a += w;
                                else s.fillText(i, 0, a);
                                s.restore() } }), f.display) { var I, N, H = 0,
                            R = D.lineHeight / 2; if (m) I = t.left + (t.right - t.left) / 2, N = "bottom" === h ? t.bottom - R - A.bottom : t.top + R + A.top;
                        else { var Y = "left" === h;
                            I = Y ? t.left + R + A.top : t.right - R - A.top, N = t.top + (t.bottom - t.top) / 2, H = Y ? -.5 * Math.PI : .5 * Math.PI } s.save(), s.translate(I, N), s.rotate(H), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = C, s.font = D.string, s.fillText(f.labelString, 0, 0), s.restore() } if (O) { var W, F, j, z, B = O,
                            q = ln(c.lineWidth, y.length - 1, 0);
                        m ? (W = L(o, t.left, B) - B / 2, F = L(o, t.right, q) + q / 2, j = z = i) : (j = L(o, t.top, B) - B / 2, z = L(o, t.bottom, q) + q / 2, W = F = i), s.lineWidth = O, s.strokeStyle = ln(c.color, 0), s.beginPath(), s.moveTo(W, j), s.lineTo(F, z), s.stroke() } } } }),
        fn = cn.extend({ getLabels: function() { var e = this.chart.data; return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels }, determineDataLimits: function() { var e, t = this,
                    n = t.getLabels();
                t.minIndex = 0, t.maxIndex = n.length - 1, void 0 !== t.options.ticks.min && (e = n.indexOf(t.options.ticks.min), t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = n.indexOf(t.options.ticks.max), t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex] }, buildTicks: function() { var e = this,
                    t = e.getLabels();
                e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1) }, getLabelForIndex: function(e, t) { var n = this,
                    i = n.chart; return i.getDatasetMeta(t).controller._getValueScaleId() === n.id ? n.getRightValue(i.data.datasets[t].data[e]) : n.ticks[e - n.minIndex] }, getPixelForValue: function(e, t) { var n, i = this,
                    a = i.options.offset,
                    r = Math.max(i.maxIndex + 1 - i.minIndex - (a ? 0 : 1), 1); if (null != e && (n = i.isHorizontal() ? e.x : e.y), void 0 !== n || void 0 !== e && isNaN(t)) { e = n || e; var o = i.getLabels().indexOf(e);
                    t = -1 !== o ? o : t } if (i.isHorizontal()) { var s = i.width / r,
                        l = s * (t - i.minIndex); return a && (l += s / 2), i.left + l } var u = i.height / r,
                    d = u * (t - i.minIndex); return a && (d += u / 2), i.top + d }, getPixelForTick: function(e) { return this.getPixelForValue(this.ticks[e], e + this.minIndex, null) }, getValueForPixel: function(e) { var t = this,
                    n = t.options.offset,
                    i = Math.max(t._ticks.length - (n ? 0 : 1), 1),
                    a = t.isHorizontal(),
                    r = (a ? t.width : t.height) / i; return e -= a ? t.left : t.top, n && (e -= r / 2), (e <= 0 ? 0 : Math.round(e / r)) + t.minIndex }, getBasePixel: function() { return this.bottom } });
    fn._defaults = { position: "bottom" }; var hn = ue.noop,
        pn = ue.isNullOrUndef,
        gn = cn.extend({ getRightValue: function(e) { return "string" == typeof e ? +e : cn.prototype.getRightValue.call(this, e) }, handleTickRangeOptions: function() { var e = this,
                    t = e.options.ticks; if (t.beginAtZero) { var n = ue.sign(e.min),
                        i = ue.sign(e.max);
                    n < 0 && i < 0 ? e.max = 0 : n > 0 && i > 0 && (e.min = 0) } var a = void 0 !== t.min || void 0 !== t.suggestedMin,
                    r = void 0 !== t.max || void 0 !== t.suggestedMax;
                void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), a !== r && e.min >= e.max && (a ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--) }, getTickLimit: function() { var e, t = this.options.ticks,
                    n = t.stepSize,
                    i = t.maxTicksLimit; return n ? e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (e = this._computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e }, _computeTickLimit: function() { return Number.POSITIVE_INFINITY }, handleDirectionalChanges: hn, buildTicks: function() { var e = this,
                    t = e.options.ticks,
                    n = e.getTickLimit(),
                    i = { maxTicks: n = Math.max(2, n), min: t.min, max: t.max, precision: t.precision, stepSize: ue.valueOrDefault(t.fixedStepSize, t.stepSize) },
                    a = e.ticks = function(e, t) { var n, i, a, r, o = [],
                            s = e.stepSize,
                            l = s || 1,
                            u = e.maxTicks - 1,
                            d = e.min,
                            c = e.max,
                            f = e.precision,
                            h = t.min,
                            p = t.max,
                            g = ue.niceNum((p - h) / u / l) * l; if (g < 1e-14 && pn(d) && pn(c)) return [h, p];
                        (r = Math.ceil(p / g) - Math.floor(h / g)) > u && (g = ue.niceNum(r * g / u / l) * l), s || pn(f) ? n = Math.pow(10, ue._decimalPlaces(g)) : (n = Math.pow(10, f), g = Math.ceil(g * n) / n), i = Math.floor(h / g) * g, a = Math.ceil(p / g) * g, s && (!pn(d) && ue.almostWhole(d / g, g / 1e3) && (i = d), !pn(c) && ue.almostWhole(c / g, g / 1e3) && (a = c)), r = (a - i) / g, r = ue.almostEquals(r, Math.round(r), g / 1e3) ? Math.round(r) : Math.ceil(r), i = Math.round(i * n) / n, a = Math.round(a * n) / n, o.push(pn(d) ? i : d); for (var m = 1; m < r; ++m) o.push(Math.round((i + m * g) * n) / n); return o.push(pn(c) ? a : c), o }(i, e);
                e.handleDirectionalChanges(), e.max = ue.max(a), e.min = ue.min(a), t.reverse ? (a.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max) }, convertTicksToLabels: function() { var e = this;
                e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), cn.prototype.convertTicksToLabels.call(e) } }),
        mn = { position: "left", ticks: { callback: on.formatters.linear } },
        vn = gn.extend({ determineDataLimits: function() { var e = this,
                    t = e.options,
                    n = e.chart,
                    i = n.data.datasets,
                    a = e.isHorizontal();

                function r(t) { return a ? t.xAxisID === e.id : t.yAxisID === e.id } e.min = null, e.max = null; var o = t.stacked; if (void 0 === o && ue.each(i, function(e, t) { if (!o) { var i = n.getDatasetMeta(t);
                            n.isDatasetVisible(t) && r(i) && void 0 !== i.stack && (o = !0) } }), t.stacked || o) { var s = {};
                    ue.each(i, function(i, a) { var o = n.getDatasetMeta(a),
                            l = [o.type, void 0 === t.stacked && void 0 === o.stack ? a : "", o.stack].join(".");
                        void 0 === s[l] && (s[l] = { positiveValues: [], negativeValues: [] }); var u = s[l].positiveValues,
                            d = s[l].negativeValues;
                        n.isDatasetVisible(a) && r(o) && ue.each(i.data, function(n, i) { var a = +e.getRightValue(n);
                            isNaN(a) || o.data[i].hidden || (u[i] = u[i] || 0, d[i] = d[i] || 0, t.relativePoints ? u[i] = 100 : a < 0 ? d[i] += a : u[i] += a) }) }), ue.each(s, function(t) { var n = t.positiveValues.concat(t.negativeValues),
                            i = ue.min(n),
                            a = ue.max(n);
                        e.min = null === e.min ? i : Math.min(e.min, i), e.max = null === e.max ? a : Math.max(e.max, a) }) } else ue.each(i, function(t, i) { var a = n.getDatasetMeta(i);
                    n.isDatasetVisible(i) && r(a) && ue.each(t.data, function(t, n) { var i = +e.getRightValue(t);
                        isNaN(i) || a.data[n].hidden || (null === e.min ? e.min = i : i < e.min && (e.min = i), null === e.max ? e.max = i : i > e.max && (e.max = i)) }) });
                e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions() }, _computeTickLimit: function() { var e; return this.isHorizontal() ? Math.ceil(this.width / 40) : (e = ue.options._parseFont(this.options.ticks), Math.ceil(this.height / e.lineHeight)) }, handleDirectionalChanges: function() { this.isHorizontal() || this.ticks.reverse() }, getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) }, getPixelForValue: function(e) { var t = this,
                    n = t.start,
                    i = +t.getRightValue(e),
                    a = t.end - n; return t.isHorizontal() ? t.left + t.width / a * (i - n) : t.bottom - t.height / a * (i - n) }, getValueForPixel: function(e) { var t = this,
                    n = t.isHorizontal(),
                    i = n ? t.width : t.height,
                    a = (n ? e - t.left : t.bottom - e) / i; return t.start + (t.end - t.start) * a }, getPixelForTick: function(e) { return this.getPixelForValue(this.ticksAsNumbers[e]) } }),
        yn = mn;
    vn._defaults = yn; var _n = ue.valueOrDefault,
        bn = { position: "left", ticks: { callback: on.formatters.logarithmic } };

    function wn(e, t) { return ue.isFinite(e) && e >= 0 ? e : t } var xn = cn.extend({ determineDataLimits: function() { var e = this,
                    t = e.options,
                    n = e.chart,
                    i = n.data.datasets,
                    a = e.isHorizontal();

                function r(t) { return a ? t.xAxisID === e.id : t.yAxisID === e.id } e.min = null, e.max = null, e.minNotZero = null; var o = t.stacked; if (void 0 === o && ue.each(i, function(e, t) { if (!o) { var i = n.getDatasetMeta(t);
                            n.isDatasetVisible(t) && r(i) && void 0 !== i.stack && (o = !0) } }), t.stacked || o) { var s = {};
                    ue.each(i, function(i, a) { var o = n.getDatasetMeta(a),
                            l = [o.type, void 0 === t.stacked && void 0 === o.stack ? a : "", o.stack].join(".");
                        n.isDatasetVisible(a) && r(o) && (void 0 === s[l] && (s[l] = []), ue.each(i.data, function(t, n) { var i = s[l],
                                a = +e.getRightValue(t);
                            isNaN(a) || o.data[n].hidden || a < 0 || (i[n] = i[n] || 0, i[n] += a) })) }), ue.each(s, function(t) { if (t.length > 0) { var n = ue.min(t),
                                i = ue.max(t);
                            e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? i : Math.max(e.max, i) } }) } else ue.each(i, function(t, i) { var a = n.getDatasetMeta(i);
                    n.isDatasetVisible(i) && r(a) && ue.each(t.data, function(t, n) { var i = +e.getRightValue(t);
                        isNaN(i) || a.data[n].hidden || i < 0 || (null === e.min ? e.min = i : i < e.min && (e.min = i), null === e.max ? e.max = i : i > e.max && (e.max = i), 0 !== i && (null === e.minNotZero || i < e.minNotZero) && (e.minNotZero = i)) }) });
                this.handleTickRangeOptions() }, handleTickRangeOptions: function() { var e = this,
                    t = e.options.ticks;
                e.min = wn(t.min, e.min), e.max = wn(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(ue.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(ue.log10(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(ue.log10(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(ue.log10(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(ue.log10(e.max))) : e.minNotZero = 1) }, buildTicks: function() { var e = this,
                    t = e.options.ticks,
                    n = !e.isHorizontal(),
                    i = { min: wn(t.min), max: wn(t.max) },
                    a = e.ticks = function(e, t) { var n, i, a = [],
                            r = _n(e.min, Math.pow(10, Math.floor(ue.log10(t.min)))),
                            o = Math.floor(ue.log10(t.max)),
                            s = Math.ceil(t.max / Math.pow(10, o));
                        0 === r ? (n = Math.floor(ue.log10(t.minNotZero)), i = Math.floor(t.minNotZero / Math.pow(10, n)), a.push(r), r = i * Math.pow(10, n)) : (n = Math.floor(ue.log10(r)), i = Math.floor(r / Math.pow(10, n))); var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                        do { a.push(r), 10 == ++i && (i = 1, l = ++n >= 0 ? 1 : l), r = Math.round(i * Math.pow(10, n) * l) / l } while (n < o || n === o && i < s); var u = _n(e.max, r); return a.push(u), a }(i, e);
                e.max = ue.max(a), e.min = ue.min(a), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n && a.reverse() }, convertTicksToLabels: function() { this.tickValues = this.ticks.slice(), cn.prototype.convertTicksToLabels.call(this) }, getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) }, getPixelForTick: function(e) { return this.getPixelForValue(this.tickValues[e]) }, _getFirstTickValue: function(e) { var t = Math.floor(ue.log10(e)); return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t) }, getPixelForValue: function(e) { var t, n, i, a, r, o = this,
                    s = o.options.ticks,
                    l = s.reverse,
                    u = ue.log10,
                    d = o._getFirstTickValue(o.minNotZero),
                    c = 0; return e = +o.getRightValue(e), l ? (i = o.end, a = o.start, r = -1) : (i = o.start, a = o.end, r = 1), o.isHorizontal() ? (t = o.width, n = l ? o.right : o.left) : (t = o.height, r *= -1, n = l ? o.top : o.bottom), e !== i && (0 === i && (t -= c = _n(s.fontSize, oe.global.defaultFontSize), i = d), 0 !== e && (c += t / (u(a) - u(i)) * (u(e) - u(i))), n += r * c), n }, getValueForPixel: function(e) { var t, n, i, a, r = this,
                    o = r.options.ticks,
                    s = o.reverse,
                    l = ue.log10,
                    u = r._getFirstTickValue(r.minNotZero); if (s ? (n = r.end, i = r.start) : (n = r.start, i = r.end), r.isHorizontal() ? (t = r.width, a = s ? r.right - e : e - r.left) : (t = r.height, a = s ? e - r.top : r.bottom - e), a !== n) { if (0 === n) { var d = _n(o.fontSize, oe.global.defaultFontSize);
                        a -= d, t -= d, n = u } a *= l(i) - l(n), a /= t, a = Math.pow(10, l(n) + a) } return a } }),
        Sn = bn;
    xn._defaults = Sn; var kn = ue.valueOrDefault,
        Tn = ue.valueAtIndexOrDefault,
        Mn = ue.options.resolve,
        Cn = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: on.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function(e) { return e } } };

    function Dn(e) { var t = e.options; return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0 }

    function An(e) { var t = e.ticks; return t.display && e.display ? kn(t.fontSize, oe.global.defaultFontSize) + 2 * t.backdropPaddingY : 0 }

    function En(e, t, n, i, a) { return e === i || e === a ? { start: t - n / 2, end: t + n / 2 } : e < i || e > a ? { start: t - n, end: t } : { start: t, end: t + n } }

    function Pn(e) { return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right" }

    function On(e, t, n, i) { var a, r, o = n.y + i / 2; if (ue.isArray(t))
            for (a = 0, r = t.length; a < r; ++a) e.fillText(t[a], n.x, o), o += i;
        else e.fillText(t, n.x, o) }

    function Ln(e, t, n) { 90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h) }

    function In(e) { return ue.isNumber(e) ? e : 0 } var Nn = gn.extend({ setDimensions: function() { var e = this;
                e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = An(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2 }, determineDataLimits: function() { var e = this,
                    t = e.chart,
                    n = Number.POSITIVE_INFINITY,
                    i = Number.NEGATIVE_INFINITY;
                ue.each(t.data.datasets, function(a, r) { if (t.isDatasetVisible(r)) { var o = t.getDatasetMeta(r);
                        ue.each(a.data, function(t, a) { var r = +e.getRightValue(t);
                            isNaN(r) || o.data[a].hidden || (n = Math.min(r, n), i = Math.max(r, i)) }) } }), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = i === Number.NEGATIVE_INFINITY ? 0 : i, e.handleTickRangeOptions() }, _computeTickLimit: function() { return Math.ceil(this.drawingArea / An(this.options)) }, convertTicksToLabels: function() { var e = this;
                gn.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e) }, getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) }, fit: function() { var e = this.options;
                e.display && e.pointLabels.display ? function(e) { var t, n, i, a = ue.options._parseFont(e.options.pointLabels),
                        r = { l: 0, r: e.width, t: 0, b: e.height - e.paddingTop },
                        o = {};
                    e.ctx.font = a.string, e._pointLabelSizes = []; var s, l, u, d = Dn(e); for (t = 0; t < d; t++) { i = e.getPointPosition(t, e.drawingArea + 5), s = e.ctx, l = a.lineHeight, u = e.pointLabels[t] || "", n = ue.isArray(u) ? { w: ue.longestText(s, s.font, u), h: u.length * l } : { w: s.measureText(u).width, h: l }, e._pointLabelSizes[t] = n; var c = e.getIndexAngle(t),
                            f = ue.toDegrees(c) % 360,
                            h = En(f, i.x, n.w, 0, 180),
                            p = En(f, i.y, n.h, 90, 270);
                        h.start < r.l && (r.l = h.start, o.l = c), h.end > r.r && (r.r = h.end, o.r = c), p.start < r.t && (r.t = p.start, o.t = c), p.end > r.b && (r.b = p.end, o.b = c) } e.setReductions(e.drawingArea, r, o) }(this) : this.setCenterPoint(0, 0, 0, 0) }, setReductions: function(e, t, n) { var i = this,
                    a = t.l / Math.sin(n.l),
                    r = Math.max(t.r - i.width, 0) / Math.sin(n.r),
                    o = -t.t / Math.cos(n.t),
                    s = -Math.max(t.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
                a = In(a), r = In(r), o = In(o), s = In(s), i.drawingArea = Math.min(Math.floor(e - (a + r) / 2), Math.floor(e - (o + s) / 2)), i.setCenterPoint(a, r, o, s) }, setCenterPoint: function(e, t, n, i) { var a = this,
                    r = a.width - t - a.drawingArea,
                    o = e + a.drawingArea,
                    s = n + a.drawingArea,
                    l = a.height - a.paddingTop - i - a.drawingArea;
                a.xCenter = Math.floor((o + r) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop) }, getIndexAngle: function(e) { return e * (2 * Math.PI / Dn(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360 }, getDistanceFromCenterForValue: function(e) { var t = this; if (null === e) return 0; var n = t.drawingArea / (t.max - t.min); return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n }, getPointPosition: function(e, t) { var n = this.getIndexAngle(e) - Math.PI / 2; return { x: Math.cos(n) * t + this.xCenter, y: Math.sin(n) * t + this.yCenter } }, getPointPositionForValue: function(e, t) { return this.getPointPosition(e, this.getDistanceFromCenterForValue(t)) }, getBasePosition: function() { var e = this.min,
                    t = this.max; return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0) }, draw: function() { var e = this,
                    t = e.options,
                    n = t.gridLines,
                    i = t.ticks; if (t.display) { var a = e.ctx,
                        r = this.getIndexAngle(0),
                        o = ue.options._parseFont(i);
                    (t.angleLines.display || t.pointLabels.display) && function(e) { var t = e.ctx,
                            n = e.options,
                            i = n.angleLines,
                            a = n.gridLines,
                            r = n.pointLabels,
                            o = kn(i.lineWidth, a.lineWidth),
                            s = kn(i.color, a.color),
                            l = An(n);
                        t.save(), t.lineWidth = o, t.strokeStyle = s, t.setLineDash && (t.setLineDash(Mn([i.borderDash, a.borderDash, []])), t.lineDashOffset = Mn([i.borderDashOffset, a.borderDashOffset, 0])); var u = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max),
                            d = ue.options._parseFont(r);
                        t.font = d.string, t.textBaseline = "middle"; for (var c = Dn(e) - 1; c >= 0; c--) { if (i.display && o && s) { var f = e.getPointPosition(c, u);
                                t.beginPath(), t.moveTo(e.xCenter, e.yCenter), t.lineTo(f.x, f.y), t.stroke() } if (r.display) { var h = 0 === c ? l / 2 : 0,
                                    p = e.getPointPosition(c, u + h + 5),
                                    g = Tn(r.fontColor, c, oe.global.defaultFontColor);
                                t.fillStyle = g; var m = e.getIndexAngle(c),
                                    v = ue.toDegrees(m);
                                t.textAlign = Pn(v), Ln(v, e._pointLabelSizes[c], p), On(t, e.pointLabels[c] || "", p, d.lineHeight) } } t.restore() }(e), ue.each(e.ticks, function(t, s) { if (s > 0 || i.reverse) { var l = e.getDistanceFromCenterForValue(e.ticksAsNumbers[s]); if (n.display && 0 !== s && function(e, t, n, i) { var a, r = e.ctx,
                                        o = t.circular,
                                        s = Dn(e),
                                        l = Tn(t.color, i - 1),
                                        u = Tn(t.lineWidth, i - 1); if ((o || s) && l && u) { if (r.save(), r.strokeStyle = l, r.lineWidth = u, r.setLineDash && (r.setLineDash(t.borderDash || []), r.lineDashOffset = t.borderDashOffset || 0), r.beginPath(), o) r.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI);
                                        else { a = e.getPointPosition(0, n), r.moveTo(a.x, a.y); for (var d = 1; d < s; d++) a = e.getPointPosition(d, n), r.lineTo(a.x, a.y) } r.closePath(), r.stroke(), r.restore() } }(e, n, l, s), i.display) { var u = kn(i.fontColor, oe.global.defaultFontColor); if (a.font = o.string, a.save(), a.translate(e.xCenter, e.yCenter), a.rotate(r), i.showLabelBackdrop) { var d = a.measureText(t).width;
                                    a.fillStyle = i.backdropColor, a.fillRect(-d / 2 - i.backdropPaddingX, -l - o.size / 2 - i.backdropPaddingY, d + 2 * i.backdropPaddingX, o.size + 2 * i.backdropPaddingY) } a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = u, a.fillText(t, 0, -l), a.restore() } } }) } } }),
        Hn = Cn;
    Nn._defaults = Hn; var Rn = ue.valueOrDefault,
        Yn = Number.MIN_SAFE_INTEGER || -9007199254740991,
        Wn = Number.MAX_SAFE_INTEGER || 9007199254740991,
        Fn = { millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 15, 30] }, minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 15, 30] }, hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] }, day: { common: !0, size: 864e5, steps: [1, 2, 5] }, week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] }, month: { common: !0, size: 2628e6, steps: [1, 2, 3] }, quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] }, year: { common: !0, size: 3154e7 } },
        jn = Object.keys(Fn);

    function zn(e, t) { return e - t }

    function Bn(e) { var t, n, i, a = {},
            r = []; for (t = 0, n = e.length; t < n; ++t) a[i = e[t]] || (a[i] = !0, r.push(i)); return r }

    function qn(e, t, n, i) { var a = function(e, t, n) { for (var i, a, r, o = 0, s = e.length - 1; o >= 0 && o <= s;) { if (a = e[(i = o + s >> 1) - 1] || null, r = e[i], !a) return { lo: null, hi: r }; if (r[t] < n) o = i + 1;
                    else { if (!(a[t] > n)) return { lo: a, hi: r };
                        s = i - 1 } } return { lo: r, hi: null } }(e, t, n),
            r = a.lo ? a.hi ? a.lo : e[e.length - 2] : e[0],
            o = a.lo ? a.hi ? a.hi : e[e.length - 1] : e[1],
            s = o[t] - r[t],
            l = s ? (n - r[t]) / s : 0,
            u = (o[i] - r[i]) * l; return r[i] + u }

    function $n(e, t) { var n = e._adapter,
            i = e.options.time,
            a = i.parser,
            r = a || i.format,
            o = t; return "function" == typeof a && (o = a(o)), ue.isFinite(o) || (o = "string" == typeof r ? n.parse(o, r) : n.parse(o)), null !== o ? +o : (a || "function" != typeof r || (o = r(t), ue.isFinite(o) || (o = n.parse(o))), o) }

    function Vn(e, t) { if (ue.isNullOrUndef(t)) return null; var n = e.options.time,
            i = $n(e, e.getRightValue(t)); return null === i ? i : (n.round && (i = +e._adapter.startOf(i, n.round)), i) }

    function Un(e) { for (var t = jn.indexOf(e) + 1, n = jn.length; t < n; ++t)
            if (Fn[jn[t]].common) return jn[t] } var Xn = cn.extend({ initialize: function() { this.mergeTicksOptions(), cn.prototype.initialize.call(this) }, update: function() { var e = this.options,
                t = e.time || (e.time = {}),
                n = this._adapter = new rn._date(e.adapters.date); return t.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), ue.mergeIf(t.displayFormats, n.formats()), cn.prototype.update.apply(this, arguments) }, getRightValue: function(e) { return e && void 0 !== e.t && (e = e.t), cn.prototype.getRightValue.call(this, e) }, determineDataLimits: function() { var e, t, n, i, a, r, o = this,
                s = o.chart,
                l = o._adapter,
                u = o.options.time,
                d = u.unit || "day",
                c = Wn,
                f = Yn,
                h = [],
                p = [],
                g = [],
                m = s.data.labels || []; for (e = 0, n = m.length; e < n; ++e) g.push(Vn(o, m[e])); for (e = 0, n = (s.data.datasets || []).length; e < n; ++e)
                if (s.isDatasetVisible(e))
                    if (a = s.data.datasets[e].data, ue.isObject(a[0]))
                        for (p[e] = [], t = 0, i = a.length; t < i; ++t) r = Vn(o, a[t]), h.push(r), p[e][t] = r;
                    else { for (t = 0, i = g.length; t < i; ++t) h.push(g[t]);
                        p[e] = g.slice(0) } else p[e] = [];
            g.length && (g = Bn(g).sort(zn), c = Math.min(c, g[0]), f = Math.max(f, g[g.length - 1])), h.length && (h = Bn(h).sort(zn), c = Math.min(c, h[0]), f = Math.max(f, h[h.length - 1])), c = Vn(o, u.min) || c, f = Vn(o, u.max) || f, c = c === Wn ? +l.startOf(Date.now(), d) : c, f = f === Yn ? +l.endOf(Date.now(), d) + 1 : f, o.min = Math.min(c, f), o.max = Math.max(c + 1, f), o._horizontal = o.isHorizontal(), o._table = [], o._timestamps = { data: h, datasets: p, labels: g } }, buildTicks: function() { var e, t, n, i = this,
                a = i.min,
                r = i.max,
                o = i.options,
                s = o.time,
                l = [],
                u = []; switch (o.ticks.source) {
                case "data":
                    l = i._timestamps.data; break;
                case "labels":
                    l = i._timestamps.labels; break;
                case "auto":
                default:
                    l = function(e, t, n, i) { var a, r = e._adapter,
                            o = e.options,
                            s = o.time,
                            l = s.unit || function(e, t, n, i) { var a, r, o, s = jn.length; for (a = jn.indexOf(e); a < s - 1; ++a)
                                    if (o = (r = Fn[jn[a]]).steps ? r.steps[r.steps.length - 1] : Wn, r.common && Math.ceil((n - t) / (o * r.size)) <= i) return jn[a]; return jn[s - 1] }(s.minUnit, t, n, i),
                            u = Un(l),
                            d = Rn(s.stepSize, s.unitStepSize),
                            c = "week" === l && s.isoWeekday,
                            f = o.ticks.major.enabled,
                            h = Fn[l],
                            p = t,
                            g = n,
                            m = []; for (d || (d = function(e, t, n, i) { var a, r, o, s = t - e,
                                    l = Fn[n],
                                    u = l.size,
                                    d = l.steps; if (!d) return Math.ceil(s / (i * u)); for (a = 0, r = d.length; a < r && (o = d[a], !(Math.ceil(s / (u * o)) <= i)); ++a); return o }(t, n, l, i)), c && (p = +r.startOf(p, "isoWeek", c), g = +r.startOf(g, "isoWeek", c)), p = +r.startOf(p, c ? "day" : l), (g = +r.startOf(g, c ? "day" : l)) < n && (g = +r.add(g, 1, l)), a = p, f && u && !c && !s.round && (a = +r.startOf(a, u), a = +r.add(a, ~~((p - a) / (h.size * d)) * d, l)); a < g; a = +r.add(a, d, l)) m.push(+a); return m.push(+a), m }(i, a, r, i.getLabelCapacity(a)) } for ("ticks" === o.bounds && l.length && (a = l[0], r = l[l.length - 1]), a = Vn(i, s.min) || a, r = Vn(i, s.max) || r, e = 0, t = l.length; e < t; ++e)(n = l[e]) >= a && n <= r && u.push(n); return i.min = a, i.max = r, i._unit = s.unit || function(e, t, n, i, a) { var r, o; for (r = jn.length - 1; r >= jn.indexOf(n); r--)
                        if (o = jn[r], Fn[o].common && e._adapter.diff(a, i, o) >= t.length) return o; return jn[n ? jn.indexOf(n) : 0] }(i, u, s.minUnit, i.min, i.max), i._majorUnit = Un(i._unit), i._table = function(e, t, n, i) { if ("linear" === i || !e.length) return [{ time: t, pos: 0 }, { time: n, pos: 1 }]; var a, r, o, s, l, u = [],
                        d = [t]; for (a = 0, r = e.length; a < r; ++a)(s = e[a]) > t && s < n && d.push(s); for (d.push(n), a = 0, r = d.length; a < r; ++a) l = d[a + 1], o = d[a - 1], s = d[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({ time: s, pos: a / (r - 1) }); return u }(i._timestamps.data, a, r, o.distribution), i._offsets = function(e, t, n, i, a) { var r, o, s = 0,
                        l = 0; return a.offset && t.length && (a.time.min || (r = qn(e, "time", t[0], "pos"), s = 1 === t.length ? 1 - r : (qn(e, "time", t[1], "pos") - r) / 2), a.time.max || (o = qn(e, "time", t[t.length - 1], "pos"), l = 1 === t.length ? o : (o - qn(e, "time", t[t.length - 2], "pos")) / 2)), { start: s, end: l } }(i._table, u, 0, 0, o), o.ticks.reverse && u.reverse(),
                function(e, t, n) { var i, a, r, o, s = []; for (i = 0, a = t.length; i < a; ++i) r = t[i], o = !!n && r === +e._adapter.startOf(r, n), s.push({ value: r, major: o }); return s }(i, u, i._majorUnit) }, getLabelForIndex: function(e, t) { var n = this,
                i = n._adapter,
                a = n.chart.data,
                r = n.options.time,
                o = a.labels && e < a.labels.length ? a.labels[e] : "",
                s = a.datasets[t].data[e]; return ue.isObject(s) && (o = n.getRightValue(s)), r.tooltipFormat ? i.format($n(n, o), r.tooltipFormat) : "string" == typeof o ? o : i.format($n(n, o), r.displayFormats.datetime) }, tickFormatFunction: function(e, t, n, i) { var a = this._adapter,
                r = this.options,
                o = r.time.displayFormats,
                s = o[this._unit],
                l = this._majorUnit,
                u = o[l],
                d = +a.startOf(e, l),
                c = r.ticks.major,
                f = c.enabled && l && u && e === d,
                h = a.format(e, i || (f ? u : s)),
                p = f ? c : r.ticks.minor,
                g = Rn(p.callback, p.userCallback); return g ? g(h, t, n) : h }, convertTicksToLabels: function(e) { var t, n, i = []; for (t = 0, n = e.length; t < n; ++t) i.push(this.tickFormatFunction(e[t].value, t, e)); return i }, getPixelForOffset: function(e) { var t = this,
                n = t.options.ticks.reverse,
                i = t._horizontal ? t.width : t.height,
                a = t._horizontal ? n ? t.right : t.left : n ? t.bottom : t.top,
                r = qn(t._table, "time", e, "pos"),
                o = i * (t._offsets.start + r) / (t._offsets.start + 1 + t._offsets.end); return n ? a - o : a + o }, getPixelForValue: function(e, t, n) { var i = null; if (void 0 !== t && void 0 !== n && (i = this._timestamps.datasets[n][t]), null === i && (i = Vn(this, e)), null !== i) return this.getPixelForOffset(i) }, getPixelForTick: function(e) { var t = this.getTicks(); return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null }, getValueForPixel: function(e) { var t = this,
                n = t._horizontal ? t.width : t.height,
                i = t._horizontal ? t.left : t.top,
                a = (n ? (e - i) / n : 0) * (t._offsets.start + 1 + t._offsets.start) - t._offsets.end,
                r = qn(t._table, "pos", a, "time"); return t._adapter._create(r) }, getLabelWidth: function(e) { var t = this.options.ticks,
                n = this.ctx.measureText(e).width,
                i = ue.toRadians(t.maxRotation),
                a = Math.cos(i),
                r = Math.sin(i); return n * a + Rn(t.fontSize, oe.global.defaultFontSize) * r }, getLabelCapacity: function(e) { var t = this,
                n = t.options.time.displayFormats.millisecond,
                i = t.tickFormatFunction(e, 0, [], n),
                a = t.getLabelWidth(i),
                r = t.isHorizontal() ? t.width : t.height,
                o = Math.floor(r / a); return o > 0 ? o : 1 } });
    Xn._defaults = { position: "bottom", distribution: "linear", bounds: "data", adapters: {}, time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } }; var Gn, Kn = { category: fn, linear: vn, logarithmic: xn, radialLinear: Nn, time: Xn },
        Zn = (function(e, t) { e.exports = function() { var t, n;

                function i() { return t.apply(null, arguments) }

                function a(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) }

                function r(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) }

                function o(e) { return void 0 === e }

                function s(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) }

                function l(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) }

                function u(e, t) { var n, i = []; for (n = 0; n < e.length; ++n) i.push(t(e[n], n)); return i }

                function d(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }

                function c(e, t) { for (var n in t) d(t, n) && (e[n] = t[n]); return d(t, "toString") && (e.toString = t.toString), d(t, "valueOf") && (e.valueOf = t.valueOf), e }

                function f(e, t, n, i) { return Et(e, t, n, i, !0).utc() }

                function h(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf }

                function p(e) { if (null == e._isValid) { var t = h(e),
                            i = n.call(t.parsedDateParts, function(e) { return null != e }),
                            a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && i); if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
                        e._isValid = a } return e._isValid }

                function g(e) { var t = f(NaN); return null != e ? c(h(t), e) : h(t).userInvalidated = !0, t } n = Array.prototype.some ? Array.prototype.some : function(e) { for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
                        if (i in t && e.call(this, t[i], i, t)) return !0; return !1 }; var m = i.momentProperties = [];

                function v(e, t) { var n, i, a; if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = h(t)), o(t._locale) || (e._locale = t._locale), m.length > 0)
                        for (n = 0; n < m.length; n++) o(a = t[i = m[n]]) || (e[i] = a); return e } var y = !1;

                function _(e) { v(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === y && (y = !0, i.updateOffset(this), y = !1) }

                function b(e) { return e instanceof _ || null != e && null != e._isAMomentObject }

                function w(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

                function x(e) { var t = +e,
                        n = 0; return 0 !== t && isFinite(t) && (n = w(t)), n }

                function S(e, t, n) { var i, a = Math.min(e.length, t.length),
                        r = Math.abs(e.length - t.length),
                        o = 0; for (i = 0; i < a; i++)(n && e[i] !== t[i] || !n && x(e[i]) !== x(t[i])) && o++; return o + r }

                function k(e) {!1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

                function T(e, t) { var n = !0; return c(function() { if (null != i.deprecationHandler && i.deprecationHandler(null, e), n) { for (var a, r = [], o = 0; o < arguments.length; o++) { if (a = "", "object" == typeof arguments[o]) { for (var s in a += "\n[" + o + "] ", arguments[0]) a += s + ": " + arguments[0][s] + ", ";
                                    a = a.slice(0, -2) } else a = arguments[o];
                                r.push(a) } k(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), n = !1 } return t.apply(this, arguments) }, t) } var M, C = {};

                function D(e, t) { null != i.deprecationHandler && i.deprecationHandler(e, t), C[e] || (k(t), C[e] = !0) }

                function A(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }

                function E(e, t) { var n, i = c({}, e); for (n in t) d(t, n) && (r(e[n]) && r(t[n]) ? (i[n] = {}, c(i[n], e[n]), c(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]); for (n in e) d(e, n) && !d(t, n) && r(e[n]) && (i[n] = c({}, i[n])); return i }

                function P(e) { null != e && this.set(e) } i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, M = Object.keys ? Object.keys : function(e) { var t, n = []; for (t in e) d(e, t) && n.push(t); return n }; var O = {};

                function L(e, t) { var n = e.toLowerCase();
                    O[n] = O[n + "s"] = O[t] = e }

                function I(e) { return "string" == typeof e ? O[e] || O[e.toLowerCase()] : void 0 }

                function N(e) { var t, n, i = {}; for (n in e) d(e, n) && (t = I(n)) && (i[t] = e[n]); return i } var H = {};

                function R(e, t) { H[e] = t }

                function Y(e, t, n) { var i = "" + Math.abs(e),
                        a = t - i.length; return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i } var W = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    F = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    j = {},
                    z = {};

                function B(e, t, n, i) { var a = i; "string" == typeof i && (a = function() { return this[i]() }), e && (z[e] = a), t && (z[t[0]] = function() { return Y(a.apply(this, arguments), t[1], t[2]) }), n && (z[n] = function() { return this.localeData().ordinal(a.apply(this, arguments), e) }) }

                function q(e, t) { return e.isValid() ? (t = $(t, e.localeData()), j[t] = j[t] || function(e) { var t, n, i, a = e.match(W); for (t = 0, n = a.length; t < n; t++) z[a[t]] ? a[t] = z[a[t]] : a[t] = (i = a[t]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, ""); return function(t) { var i, r = ""; for (i = 0; i < n; i++) r += A(a[i]) ? a[i].call(t, e) : a[i]; return r } }(t), j[t](e)) : e.localeData().invalidDate() }

                function $(e, t) { var n = 5;

                    function i(e) { return t.longDateFormat(e) || e } for (F.lastIndex = 0; n >= 0 && F.test(e);) e = e.replace(F, i), F.lastIndex = 0, n -= 1; return e } var V = /\d/,
                    U = /\d\d/,
                    X = /\d{3}/,
                    G = /\d{4}/,
                    K = /[+-]?\d{6}/,
                    Z = /\d\d?/,
                    Q = /\d\d\d\d?/,
                    J = /\d\d\d\d\d\d?/,
                    ee = /\d{1,3}/,
                    te = /\d{1,4}/,
                    ne = /[+-]?\d{1,6}/,
                    ie = /\d+/,
                    ae = /[+-]?\d+/,
                    re = /Z|[+-]\d\d:?\d\d/gi,
                    oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    se = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                    le = {};

                function ue(e, t, n) { le[e] = A(t) ? t : function(e, i) { return e && n ? n : t } }

                function de(e, t) { return d(le, e) ? le[e](t._strict, t._locale) : new RegExp(ce(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, a) { return t || n || i || a }))) }

                function ce(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var fe = {};

                function he(e, t) { var n, i = t; for ("string" == typeof e && (e = [e]), s(t) && (i = function(e, n) { n[t] = x(e) }), n = 0; n < e.length; n++) fe[e[n]] = i }

                function pe(e, t) { he(e, function(e, n, i, a) { i._w = i._w || {}, t(e, i._w, i, a) }) }

                function ge(e, t, n) { null != t && d(fe, e) && fe[e](t, n._a, n, e) } var me = 0,
                    ve = 1,
                    ye = 2,
                    _e = 3,
                    be = 4,
                    we = 5,
                    xe = 6,
                    Se = 7,
                    ke = 8;

                function Te(e) { return Me(e) ? 366 : 365 }

                function Me(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 } B("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? "" + e : "+" + e }), B(0, ["YY", 2], 0, function() { return this.year() % 100 }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), R("year", 1), ue("Y", ae), ue("YY", Z, U), ue("YYYY", te, G), ue("YYYYY", ne, K), ue("YYYYYY", ne, K), he(["YYYYY", "YYYYYY"], me), he("YYYY", function(e, t) { t[me] = 2 === e.length ? i.parseTwoDigitYear(e) : x(e) }), he("YY", function(e, t) { t[me] = i.parseTwoDigitYear(e) }), he("Y", function(e, t) { t[me] = parseInt(e, 10) }), i.parseTwoDigitYear = function(e) { return x(e) + (x(e) > 68 ? 1900 : 2e3) }; var Ce, De = Ae("FullYear", !0);

                function Ae(e, t) { return function(n) { return null != n ? (Pe(this, e, n), i.updateOffset(this, t), this) : Ee(this, e) } }

                function Ee(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN }

                function Pe(e, t, n) { e.isValid() && !isNaN(n) && ("FullYear" === t && Me(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Oe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)) }

                function Oe(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var n = (t % 12 + 12) % 12; return e += (t - n) / 12, 1 === n ? Me(e) ? 29 : 28 : 31 - n % 7 % 2 } Ce = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) { var t; for (t = 0; t < this.length; ++t)
                        if (this[t] === e) return t; return -1 }, B("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), B("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) }), B("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) }), L("month", "M"), R("month", 8), ue("M", Z), ue("MM", Z, U), ue("MMM", function(e, t) { return t.monthsShortRegex(e) }), ue("MMMM", function(e, t) { return t.monthsRegex(e) }), he(["M", "MM"], function(e, t) { t[ve] = x(e) - 1 }), he(["MMM", "MMMM"], function(e, t, n, i) { var a = n._locale.monthsParse(e, i, n._strict);
                    null != a ? t[ve] = a : h(n).invalidMonth = e }); var Le = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    Ie = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    Ne = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

                function He(e, t) { var n; if (!e.isValid()) return e; if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = x(t);
                        else if (!s(t = e.localeData().monthsParse(t))) return e; return n = Math.min(e.date(), Oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e }

                function Re(e) { return null != e ? (He(this, e), i.updateOffset(this, !0), this) : Ee(this, "Month") } var Ye = se,
                    We = se;

                function Fe() {
                    function e(e, t) { return t.length - e.length } var t, n, i = [],
                        a = [],
                        r = []; for (t = 0; t < 12; t++) n = f([2e3, t]), i.push(this.monthsShort(n, "")), a.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, "")); for (i.sort(e), a.sort(e), r.sort(e), t = 0; t < 12; t++) i[t] = ce(i[t]), a[t] = ce(a[t]); for (t = 0; t < 24; t++) r[t] = ce(r[t]);
                    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i") }

                function je(e) { var t; if (e < 100 && e >= 0) { var n = Array.prototype.slice.call(arguments);
                        n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e) } else t = new Date(Date.UTC.apply(null, arguments)); return t }

                function ze(e, t, n) { var i = 7 + t - n; return -((7 + je(e, 0, i).getUTCDay() - t) % 7) + i - 1 }

                function Be(e, t, n, i, a) { var r, o, s = 1 + 7 * (t - 1) + (7 + n - i) % 7 + ze(e, i, a); return s <= 0 ? o = Te(r = e - 1) + s : s > Te(e) ? (r = e + 1, o = s - Te(e)) : (r = e, o = s), { year: r, dayOfYear: o } }

                function qe(e, t, n) { var i, a, r = ze(e.year(), t, n),
                        o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1; return o < 1 ? i = o + $e(a = e.year() - 1, t, n) : o > $e(e.year(), t, n) ? (i = o - $e(e.year(), t, n), a = e.year() + 1) : (a = e.year(), i = o), { week: i, year: a } }

                function $e(e, t, n) { var i = ze(e, t, n),
                        a = ze(e + 1, t, n); return (Te(e) - i + a) / 7 }

                function Ve(e, t) { return e.slice(t, 7).concat(e.slice(0, t)) } B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), R("week", 5), R("isoWeek", 5), ue("w", Z), ue("ww", Z, U), ue("W", Z), ue("WW", Z, U), pe(["w", "ww", "W", "WW"], function(e, t, n, i) { t[i.substr(0, 1)] = x(e) }), B("d", 0, "do", "day"), B("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) }), B("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) }), B("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), R("day", 11), R("weekday", 11), R("isoWeekday", 11), ue("d", Z), ue("e", Z), ue("E", Z), ue("dd", function(e, t) { return t.weekdaysMinRegex(e) }), ue("ddd", function(e, t) { return t.weekdaysShortRegex(e) }), ue("dddd", function(e, t) { return t.weekdaysRegex(e) }), pe(["dd", "ddd", "dddd"], function(e, t, n, i) { var a = n._locale.weekdaysParse(e, i, n._strict);
                    null != a ? t.d = a : h(n).invalidWeekday = e }), pe(["d", "e", "E"], function(e, t, n, i) { t[i] = x(e) }); var Ue = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    Xe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    Ge = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    Ke = se,
                    Ze = se,
                    Qe = se;

                function Je() {
                    function e(e, t) { return t.length - e.length } var t, n, i, a, r, o = [],
                        s = [],
                        l = [],
                        u = []; for (t = 0; t < 7; t++) n = f([2e3, 1]).day(t), i = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), o.push(i), s.push(a), l.push(r), u.push(i), u.push(a), u.push(r); for (o.sort(e), s.sort(e), l.sort(e), u.sort(e), t = 0; t < 7; t++) s[t] = ce(s[t]), l[t] = ce(l[t]), u[t] = ce(u[t]);
                    this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i") }

                function et() { return this.hours() % 12 || 12 }

                function tt(e, t) { B(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) }

                function nt(e, t) { return t._meridiemParse } B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, et), B("k", ["kk", 2], 0, function() { return this.hours() || 24 }), B("hmm", 0, 0, function() { return "" + et.apply(this) + Y(this.minutes(), 2) }), B("hmmss", 0, 0, function() { return "" + et.apply(this) + Y(this.minutes(), 2) + Y(this.seconds(), 2) }), B("Hmm", 0, 0, function() { return "" + this.hours() + Y(this.minutes(), 2) }), B("Hmmss", 0, 0, function() { return "" + this.hours() + Y(this.minutes(), 2) + Y(this.seconds(), 2) }), tt("a", !0), tt("A", !1), L("hour", "h"), R("hour", 13), ue("a", nt), ue("A", nt), ue("H", Z), ue("h", Z), ue("k", Z), ue("HH", Z, U), ue("hh", Z, U), ue("kk", Z, U), ue("hmm", Q), ue("hmmss", J), ue("Hmm", Q), ue("Hmmss", J), he(["H", "HH"], _e), he(["k", "kk"], function(e, t, n) { var i = x(e);
                    t[_e] = 24 === i ? 0 : i }), he(["a", "A"], function(e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e }), he(["h", "hh"], function(e, t, n) { t[_e] = x(e), h(n).bigHour = !0 }), he("hmm", function(e, t, n) { var i = e.length - 2;
                    t[_e] = x(e.substr(0, i)), t[be] = x(e.substr(i)), h(n).bigHour = !0 }), he("hmmss", function(e, t, n) { var i = e.length - 4,
                        a = e.length - 2;
                    t[_e] = x(e.substr(0, i)), t[be] = x(e.substr(i, 2)), t[we] = x(e.substr(a)), h(n).bigHour = !0 }), he("Hmm", function(e, t, n) { var i = e.length - 2;
                    t[_e] = x(e.substr(0, i)), t[be] = x(e.substr(i)) }), he("Hmmss", function(e, t, n) { var i = e.length - 4,
                        a = e.length - 2;
                    t[_e] = x(e.substr(0, i)), t[be] = x(e.substr(i, 2)), t[we] = x(e.substr(a)) }); var it, at = Ae("Hours", !0),
                    rt = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Ie, monthsShort: Ne, week: { dow: 0, doy: 6 }, weekdays: Ue, weekdaysMin: Ge, weekdaysShort: Xe, meridiemParse: /[ap]\.?m?\.?/i },
                    ot = {},
                    st = {};

                function lt(e) { return e ? e.toLowerCase().replace("_", "-") : e }

                function ut(t) { var n = null; if (!ot[t] && e && e.exports) try { n = it._abbr, bt("./locale/" + t), dt(n) }
                    catch (e) {} return ot[t] }

                function dt(e, t) { var n; return e && ((n = o(t) ? ft(e) : ct(e, t)) ? it = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), it._abbr }

                function ct(e, t) { if (null !== t) { var n, i = rt; if (t.abbr = e, null != ot[e]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = ot[e]._config;
                        else if (null != t.parentLocale)
                            if (null != ot[t.parentLocale]) i = ot[t.parentLocale]._config;
                            else { if (null == (n = ut(t.parentLocale))) return st[t.parentLocale] || (st[t.parentLocale] = []), st[t.parentLocale].push({ name: e, config: t }), null;
                                i = n._config }
                        return ot[e] = new P(E(i, t)), st[e] && st[e].forEach(function(e) { ct(e.name, e.config) }), dt(e), ot[e] } return delete ot[e], null }

                function ft(e) { var t; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return it; if (!a(e)) { if (t = ut(e)) return t;
                        e = [e] } return function(e) { for (var t, n, i, a, r = 0; r < e.length;) { for (t = (a = lt(e[r]).split("-")).length, n = (n = lt(e[r + 1])) ? n.split("-") : null; t > 0;) { if (i = ut(a.slice(0, t).join("-"))) return i; if (n && n.length >= t && S(a, n, !0) >= t - 1) break;
                                t-- } r++ } return it }(e) }

                function ht(e) { var t, n = e._a; return n && -2 === h(e).overflow && (t = n[ve] < 0 || n[ve] > 11 ? ve : n[ye] < 1 || n[ye] > Oe(n[me], n[ve]) ? ye : n[_e] < 0 || n[_e] > 24 || 24 === n[_e] && (0 !== n[be] || 0 !== n[we] || 0 !== n[xe]) ? _e : n[be] < 0 || n[be] > 59 ? be : n[we] < 0 || n[we] > 59 ? we : n[xe] < 0 || n[xe] > 999 ? xe : -1, h(e)._overflowDayOfYear && (t < me || t > ye) && (t = ye), h(e)._overflowWeeks && -1 === t && (t = Se), h(e)._overflowWeekday && -1 === t && (t = ke), h(e).overflow = t), e }

                function pt(e, t, n) { return null != e ? e : null != t ? t : n }

                function gt(e) { var t, n, a, r, o, s = []; if (!e._d) { for (a = function(e) { var t = new Date(i.now()); return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()] }(e), e._w && null == e._a[ye] && null == e._a[ve] && function(e) { var t, n, i, a, r, o, s, l; if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, o = 4, n = pt(t.GG, e._a[me], qe(Pt(), 1, 4).year), i = pt(t.W, 1), ((a = pt(t.E, 1)) < 1 || a > 7) && (l = !0);
                                else { r = e._locale._week.dow, o = e._locale._week.doy; var u = qe(Pt(), r, o);
                                    n = pt(t.gg, e._a[me], u.year), i = pt(t.w, u.week), null != t.d ? ((a = t.d) < 0 || a > 6) && (l = !0) : null != t.e ? (a = t.e + r, (t.e < 0 || t.e > 6) && (l = !0)) : a = r } i < 1 || i > $e(n, r, o) ? h(e)._overflowWeeks = !0 : null != l ? h(e)._overflowWeekday = !0 : (s = Be(n, i, a, r, o), e._a[me] = s.year, e._dayOfYear = s.dayOfYear) }(e), null != e._dayOfYear && (o = pt(e._a[me], a[me]), (e._dayOfYear > Te(o) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = je(o, 0, e._dayOfYear), e._a[ve] = n.getUTCMonth(), e._a[ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = a[t]; for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                        24 === e._a[_e] && 0 === e._a[be] && 0 === e._a[we] && 0 === e._a[xe] && (e._nextDay = !0, e._a[_e] = 0), e._d = (e._useUTC ? je : function(e, t, n, i, a, r, o) { var s; return e < 100 && e >= 0 ? (s = new Date(e + 400, t, n, i, a, r, o), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, n, i, a, r, o), s }).apply(null, s), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[_e] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (h(e).weekdayMismatch = !0) } } var mt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    vt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    yt = /Z|[+-]\d\d(?::?\d\d)?/,
                    _t = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/]
                    ],
                    wt = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    xt = /^\/?Date\((\-?\d+)/i;

                function St(e) { var t, n, i, a, r, o, s = e._i,
                        l = mt.exec(s) || vt.exec(s); if (l) { for (h(e).iso = !0, t = 0, n = _t.length; t < n; t++)
                            if (_t[t][1].exec(l[1])) { a = _t[t][0], i = !1 !== _t[t][2]; break }
                        if (null == a) return void(e._isValid = !1); if (l[3]) { for (t = 0, n = wt.length; t < n; t++)
                                if (wt[t][1].exec(l[3])) { r = (l[2] || " ") + wt[t][0]; break }
                            if (null == r) return void(e._isValid = !1) } if (!i && null != r) return void(e._isValid = !1); if (l[4]) { if (!yt.exec(l[4])) return void(e._isValid = !1);
                            o = "Z" } e._f = a + (r || "") + (o || ""), Dt(e) } else e._isValid = !1 } var kt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

                function Tt(e) { var t = parseInt(e, 10); return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t } var Mt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

                function Ct(e) { var t, n, i, a, r, o, s, l = kt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")); if (l) { var u = (t = l[4], n = l[3], i = l[2], a = l[5], r = l[6], o = l[7], s = [Tt(t), Ne.indexOf(n), parseInt(i, 10), parseInt(a, 10), parseInt(r, 10)], o && s.push(parseInt(o, 10)), s); if (! function(e, t, n) { if (e && Xe.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) return h(n).weekdayMismatch = !0, n._isValid = !1, !1; return !0 }(l[1], u, e)) return;
                        e._a = u, e._tzm = function(e, t, n) { if (e) return Mt[e]; if (t) return 0; var i = parseInt(n, 10),
                                a = i % 100; return 60 * ((i - a) / 100) + a }(l[8], l[9], l[10]), e._d = je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), h(e).rfc2822 = !0 } else e._isValid = !1 }

                function Dt(e) { if (e._f !== i.ISO_8601)
                        if (e._f !== i.RFC_2822) { e._a = [], h(e).empty = !0; var t, n, a, r, o, s = "" + e._i,
                                l = s.length,
                                u = 0; for (a = $(e._f, e._locale).match(W) || [], t = 0; t < a.length; t++) r = a[t], (n = (s.match(de(r, e)) || [])[0]) && ((o = s.substr(0, s.indexOf(n))).length > 0 && h(e).unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), u += n.length), z[r] ? (n ? h(e).empty = !1 : h(e).unusedTokens.push(r), ge(r, n, e)) : e._strict && !n && h(e).unusedTokens.push(r);
                            h(e).charsLeftOver = l - u, s.length > 0 && h(e).unusedInput.push(s), e._a[_e] <= 12 && !0 === h(e).bigHour && e._a[_e] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[_e] = (d = e._locale, c = e._a[_e], null == (f = e._meridiem) ? c : null != d.meridiemHour ? d.meridiemHour(c, f) : null != d.isPM ? ((p = d.isPM(f)) && c < 12 && (c += 12), p || 12 !== c || (c = 0), c) : c), gt(e), ht(e) }
                    else Ct(e);
                    else St(e); var d, c, f, p }

                function At(e) { var t = e._i,
                        n = e._f; return e._locale = e._locale || ft(e._l), null === t || void 0 === n && "" === t ? g({ nullInput: !0 }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), b(t) ? new _(ht(t)) : (l(t) ? e._d = t : a(n) ? function(e) { var t, n, i, a, r; if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN)); for (a = 0; a < e._f.length; a++) r = 0, t = v({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], Dt(t), p(t) && (r += h(t).charsLeftOver, r += 10 * h(t).unusedTokens.length, h(t).score = r, (null == i || r < i) && (i = r, n = t));
                        c(e, n || t) }(e) : n ? Dt(e) : function(e) { var t = e._i;
                        o(t) ? e._d = new Date(i.now()) : l(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) { var t = xt.exec(e._i);
                            null === t ? (St(e), !1 === e._isValid && (delete e._isValid, Ct(e), !1 === e._isValid && (delete e._isValid, i.createFromInputFallback(e)))) : e._d = new Date(+t[1]) }(e) : a(t) ? (e._a = u(t.slice(0), function(e) { return parseInt(e, 10) }), gt(e)) : r(t) ? function(e) { if (!e._d) { var t = N(e._i);
                                e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) { return e && parseInt(e, 10) }), gt(e) } }(e) : s(t) ? e._d = new Date(t) : i.createFromInputFallback(e) }(e), p(e) || (e._d = null), e)) }

                function Et(e, t, n, i, o) { var s, l = {}; return !0 !== n && !1 !== n || (i = n, n = void 0), (r(e) && function(e) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length; var t; for (t in e)
                            if (e.hasOwnProperty(t)) return !1; return !0 }(e) || a(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = n, l._i = e, l._f = t, l._strict = i, (s = new _(ht(At(l))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s }

                function Pt(e, t, n, i) { return Et(e, t, n, i, !1) } i.createFromInputFallback = T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), i.ISO_8601 = function() {}, i.RFC_2822 = function() {}; var Ot = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = Pt.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : g() }),
                    Lt = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = Pt.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : g() });

                function It(e, t) { var n, i; if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return Pt(); for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]); return n } var Nt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                function Ht(e) { var t = N(e),
                        n = t.year || 0,
                        i = t.quarter || 0,
                        a = t.month || 0,
                        r = t.week || t.isoWeek || 0,
                        o = t.day || 0,
                        s = t.hour || 0,
                        l = t.minute || 0,
                        u = t.second || 0,
                        d = t.millisecond || 0;
                    this._isValid = function(e) { for (var t in e)
                            if (-1 === Ce.call(Nt, t) || null != e[t] && isNaN(e[t])) return !1; for (var n = !1, i = 0; i < Nt.length; ++i)
                            if (e[Nt[i]]) { if (n) return !1;
                                parseFloat(e[Nt[i]]) !== x(e[Nt[i]]) && (n = !0) }
                        return !0 }(t), this._milliseconds = +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +o + 7 * r, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = ft(), this._bubble() }

                function Rt(e) { return e instanceof Ht }

                function Yt(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) }

                function Wt(e, t) { B(e, 0, 0, function() { var e = this.utcOffset(),
                            n = "+"; return e < 0 && (e = -e, n = "-"), n + Y(~~(e / 60), 2) + t + Y(~~e % 60, 2) }) } Wt("Z", ":"), Wt("ZZ", ""), ue("Z", oe), ue("ZZ", oe), he(["Z", "ZZ"], function(e, t, n) { n._useUTC = !0, n._tzm = jt(oe, e) }); var Ft = /([\+\-]|\d\d)/gi;

                function jt(e, t) { var n = (t || "").match(e); if (null === n) return null; var i = ((n[n.length - 1] || []) + "").match(Ft) || ["-", 0, 0],
                        a = 60 * i[1] + x(i[2]); return 0 === a ? 0 : "+" === i[0] ? a : -a }

                function zt(e, t) { var n, a; return t._isUTC ? (n = t.clone(), a = (b(e) || l(e) ? e.valueOf() : Pt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), i.updateOffset(n, !1), n) : Pt(e).local() }

                function Bt(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15) }

                function qt() { return !!this.isValid() && this._isUTC && 0 === this._offset } i.updateOffset = function() {}; var $t = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    Vt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                function Ut(e, t) { var n, i, a, r, o, l, u = e,
                        c = null; return Rt(e) ? u = { ms: e._milliseconds, d: e._days, M: e._months } : s(e) ? (u = {}, t ? u[t] = e : u.milliseconds = e) : (c = $t.exec(e)) ? (n = "-" === c[1] ? -1 : 1, u = { y: 0, d: x(c[ye]) * n, h: x(c[_e]) * n, m: x(c[be]) * n, s: x(c[we]) * n, ms: x(Yt(1e3 * c[xe])) * n }) : (c = Vt.exec(e)) ? (n = "-" === c[1] ? -1 : 1, u = { y: Xt(c[2], n), M: Xt(c[3], n), w: Xt(c[4], n), d: Xt(c[5], n), h: Xt(c[6], n), m: Xt(c[7], n), s: Xt(c[8], n) }) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (r = Pt(u.from), o = Pt(u.to), a = r.isValid() && o.isValid() ? (o = zt(o, r), r.isBefore(o) ? l = Gt(r, o) : ((l = Gt(o, r)).milliseconds = -l.milliseconds, l.months = -l.months), l) : { milliseconds: 0, months: 0 }, (u = {}).ms = a.milliseconds, u.M = a.months), i = new Ht(u), Rt(e) && d(e, "_locale") && (i._locale = e._locale), i }

                function Xt(e, t) { var n = e && parseFloat(e.replace(",", ".")); return (isNaN(n) ? 0 : n) * t }

                function Gt(e, t) { var n = {}; return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n }

                function Kt(e, t) { return function(n, i) { var a; return null === i || isNaN(+i) || (D(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = i, i = a), Zt(this, Ut(n = "string" == typeof n ? +n : n, i), e), this } }

                function Zt(e, t, n, a) { var r = t._milliseconds,
                        o = Yt(t._days),
                        s = Yt(t._months);
                    e.isValid() && (a = null == a || a, s && He(e, Ee(e, "Month") + s * n), o && Pe(e, "Date", Ee(e, "Date") + o * n), r && e._d.setTime(e._d.valueOf() + r * n), a && i.updateOffset(e, o || s)) } Ut.fn = Ht.prototype, Ut.invalid = function() { return Ut(NaN) }; var Qt = Kt(1, "add"),
                    Jt = Kt(-1, "subtract");

                function en(e, t) { var n, i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                        a = e.clone().add(i, "months"); return t - a < 0 ? n = (t - a) / (a - e.clone().add(i - 1, "months")) : n = (t - a) / (e.clone().add(i + 1, "months") - a), -(i + n) || 0 }

                function tn(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = ft(e)) && (this._locale = t), this) } i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var nn = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return void 0 === e ? this.localeData() : this.locale(e) });

                function an() { return this._locale } var rn = 126227808e5;

                function on(e, t) { return (e % t + t) % t }

                function sn(e, t, n) { return e < 100 && e >= 0 ? new Date(e + 400, t, n) - rn : new Date(e, t, n).valueOf() }

                function ln(e, t, n) { return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - rn : Date.UTC(e, t, n) }

                function un(e, t) { B(0, [e, e.length], 0, t) }

                function dn(e, t, n, i, a) { var r; return null == e ? qe(this, i, a).year : (t > (r = $e(e, i, a)) && (t = r), function(e, t, n, i, a) { var r = Be(e, t, n, i, a),
                            o = je(r.year, 0, r.dayOfYear); return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this }.call(this, e, t, n, i, a)) } B(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), B(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), un("gggg", "weekYear"), un("ggggg", "weekYear"), un("GGGG", "isoWeekYear"), un("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), R("weekYear", 1), R("isoWeekYear", 1), ue("G", ae), ue("g", ae), ue("GG", Z, U), ue("gg", Z, U), ue("GGGG", te, G), ue("gggg", te, G), ue("GGGGG", ne, K), ue("ggggg", ne, K), pe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) { t[i.substr(0, 2)] = x(e) }), pe(["gg", "GG"], function(e, t, n, a) { t[a] = i.parseTwoDigitYear(e) }), B("Q", 0, "Qo", "quarter"), L("quarter", "Q"), R("quarter", 7), ue("Q", V), he("Q", function(e, t) { t[ve] = 3 * (x(e) - 1) }), B("D", ["DD", 2], "Do", "date"), L("date", "D"), R("date", 9), ue("D", Z), ue("DD", Z, U), ue("Do", function(e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient }), he(["D", "DD"], ye), he("Do", function(e, t) { t[ye] = x(e.match(Z)[0]) }); var cn = Ae("Date", !0);
                B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), R("dayOfYear", 4), ue("DDD", ee), ue("DDDD", X), he(["DDD", "DDDD"], function(e, t, n) { n._dayOfYear = x(e) }), B("m", ["mm", 2], 0, "minute"), L("minute", "m"), R("minute", 14), ue("m", Z), ue("mm", Z, U), he(["m", "mm"], be); var fn = Ae("Minutes", !1);
                B("s", ["ss", 2], 0, "second"), L("second", "s"), R("second", 15), ue("s", Z), ue("ss", Z, U), he(["s", "ss"], we); var hn, pn = Ae("Seconds", !1); for (B("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), B(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), B(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), B(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), B(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), B(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), B(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), L("millisecond", "ms"), R("millisecond", 16), ue("S", ee, V), ue("SS", ee, U), ue("SSS", ee, X), hn = "SSSS"; hn.length <= 9; hn += "S") ue(hn, ie);

                function gn(e, t) { t[xe] = x(1e3 * ("0." + e)) } for (hn = "S"; hn.length <= 9; hn += "S") he(hn, gn); var mn = Ae("Milliseconds", !1);
                B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName"); var vn = _.prototype;

                function yn(e) { return e } vn.add = Qt, vn.calendar = function(e, t) { var n = e || Pt(),
                        a = zt(n, this).startOf("day"),
                        r = i.calendarFormat(this, a) || "sameElse",
                        o = t && (A(t[r]) ? t[r].call(this, n) : t[r]); return this.format(o || this.localeData().calendar(r, this, Pt(n))) }, vn.clone = function() { return new _(this) }, vn.diff = function(e, t, n) { var i, a, r; if (!this.isValid()) return NaN; if (!(i = zt(e, this)).isValid()) return NaN; switch (a = 6e4 * (i.utcOffset() - this.utcOffset()), t = I(t)) {
                        case "year":
                            r = en(this, i) / 12; break;
                        case "month":
                            r = en(this, i); break;
                        case "quarter":
                            r = en(this, i) / 3; break;
                        case "second":
                            r = (this - i) / 1e3; break;
                        case "minute":
                            r = (this - i) / 6e4; break;
                        case "hour":
                            r = (this - i) / 36e5; break;
                        case "day":
                            r = (this - i - a) / 864e5; break;
                        case "week":
                            r = (this - i - a) / 6048e5; break;
                        default:
                            r = this - i } return n ? r : w(r) }, vn.endOf = function(e) { var t; if (void 0 === (e = I(e)) || "millisecond" === e || !this.isValid()) return this; var n = this._isUTC ? ln : sn; switch (e) {
                        case "year":
                            t = n(this.year() + 1, 0, 1) - 1; break;
                        case "quarter":
                            t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break;
                        case "month":
                            t = n(this.year(), this.month() + 1, 1) - 1; break;
                        case "week":
                            t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break;
                        case "isoWeek":
                            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break;
                        case "day":
                        case "date":
                            t = n(this.year(), this.month(), this.date() + 1) - 1; break;
                        case "hour":
                            t = this._d.valueOf(), t += 36e5 - on(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1; break;
                        case "minute":
                            t = this._d.valueOf(), t += 6e4 - on(t, 6e4) - 1; break;
                        case "second":
                            t = this._d.valueOf(), t += 1e3 - on(t, 1e3) - 1 } return this._d.setTime(t), i.updateOffset(this, !0), this }, vn.format = function(e) { e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat); var t = q(this, e); return this.localeData().postformat(t) }, vn.from = function(e, t) { return this.isValid() && (b(e) && e.isValid() || Pt(e).isValid()) ? Ut({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, vn.fromNow = function(e) { return this.from(Pt(), e) }, vn.to = function(e, t) { return this.isValid() && (b(e) && e.isValid() || Pt(e).isValid()) ? Ut({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, vn.toNow = function(e) { return this.to(Pt(), e) }, vn.get = function(e) { return A(this[e = I(e)]) ? this[e]() : this }, vn.invalidAt = function() { return h(this).overflow }, vn.isAfter = function(e, t) { var n = b(e) ? e : Pt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) }, vn.isBefore = function(e, t) { var n = b(e) ? e : Pt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) }, vn.isBetween = function(e, t, n, i) { var a = b(e) ? e : Pt(e),
                        r = b(t) ? t : Pt(t); return !!(this.isValid() && a.isValid() && r.isValid()) && ("(" === (i = i || "()")[0] ? this.isAfter(a, n) : !this.isBefore(a, n)) && (")" === i[1] ? this.isBefore(r, n) : !this.isAfter(r, n)) }, vn.isSame = function(e, t) { var n, i = b(e) ? e : Pt(e); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) }, vn.isSameOrAfter = function(e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, vn.isSameOrBefore = function(e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, vn.isValid = function() { return p(this) }, vn.lang = nn, vn.locale = tn, vn.localeData = an, vn.max = Lt, vn.min = Ot, vn.parsingFlags = function() { return c({}, h(this)) }, vn.set = function(e, t) { if ("object" == typeof e)
                        for (var n = function(e) { var t = []; for (var n in e) t.push({ unit: n, priority: H[n] }); return t.sort(function(e, t) { return e.priority - t.priority }), t }(e = N(e)), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit]);
                    else if (A(this[e = I(e)])) return this[e](t); return this }, vn.startOf = function(e) { var t; if (void 0 === (e = I(e)) || "millisecond" === e || !this.isValid()) return this; var n = this._isUTC ? ln : sn; switch (e) {
                        case "year":
                            t = n(this.year(), 0, 1); break;
                        case "quarter":
                            t = n(this.year(), this.month() - this.month() % 3, 1); break;
                        case "month":
                            t = n(this.year(), this.month(), 1); break;
                        case "week":
                            t = n(this.year(), this.month(), this.date() - this.weekday()); break;
                        case "isoWeek":
                            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break;
                        case "day":
                        case "date":
                            t = n(this.year(), this.month(), this.date()); break;
                        case "hour":
                            t = this._d.valueOf(), t -= on(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5); break;
                        case "minute":
                            t = this._d.valueOf(), t -= on(t, 6e4); break;
                        case "second":
                            t = this._d.valueOf(), t -= on(t, 1e3) } return this._d.setTime(t), i.updateOffset(this, !0), this }, vn.subtract = Jt, vn.toArray = function() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, vn.toObject = function() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, vn.toDate = function() { return new Date(this.valueOf()) }, vn.toISOString = function(e) { if (!this.isValid()) return null; var t = !0 !== e,
                        n = t ? this.clone().utc() : this; return n.year() < 0 || n.year() > 9999 ? q(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : A(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", q(n, "Z")) : q(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, vn.inspect = function() { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var e = "moment",
                        t = "";
                    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z"); var n = "[" + e + '("]',
                        i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        a = t + '[")]'; return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + a) }, vn.toJSON = function() { return this.isValid() ? this.toISOString() : null }, vn.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, vn.unix = function() { return Math.floor(this.valueOf() / 1e3) }, vn.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, vn.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, vn.year = De, vn.isLeapYear = function() { return Me(this.year()) }, vn.weekYear = function(e) { return dn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, vn.isoWeekYear = function(e) { return dn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, vn.quarter = vn.quarters = function(e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, vn.month = Re, vn.daysInMonth = function() { return Oe(this.year(), this.month()) }, vn.week = vn.weeks = function(e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, vn.isoWeek = vn.isoWeeks = function(e) { var t = qe(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, vn.weeksInYear = function() { var e = this.localeData()._week; return $e(this.year(), e.dow, e.doy) }, vn.isoWeeksInYear = function() { return $e(this.year(), 1, 4) }, vn.date = cn, vn.day = vn.days = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (e = function(e, t) { return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10) }(e, this.localeData()), this.add(e - t, "d")) : t }, vn.weekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, vn.isoWeekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; if (null != e) { var t = function(e, t) { return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e }(e, this.localeData()); return this.day(this.day() % 7 ? t : t - 7) } return this.day() || 7 }, vn.dayOfYear = function(e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, vn.hour = vn.hours = at, vn.minute = vn.minutes = fn, vn.second = vn.seconds = pn, vn.millisecond = vn.milliseconds = mn, vn.utcOffset = function(e, t, n) { var a, r = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null != e) { if ("string" == typeof e) { if (null === (e = jt(oe, e))) return this } else Math.abs(e) < 16 && !n && (e *= 60); return !this._isUTC && t && (a = Bt(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Zt(this, Ut(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? r : Bt(this) }, vn.utc = function(e) { return this.utcOffset(0, e) }, vn.local = function(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Bt(this), "m")), this }, vn.parseZone = function() { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) { var e = jt(re, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0) } return this }, vn.hasAlignedHourOffset = function(e) { return !!this.isValid() && (e = e ? Pt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, vn.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, vn.isLocal = function() { return !!this.isValid() && !this._isUTC }, vn.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, vn.isUtc = qt, vn.isUTC = qt, vn.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, vn.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, vn.dates = T("dates accessor is deprecated. Use date instead.", cn), vn.months = T("months accessor is deprecated. Use month instead", Re), vn.years = T("years accessor is deprecated. Use year instead", De), vn.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }), vn.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() { if (!o(this._isDSTShifted)) return this._isDSTShifted; var e = {}; if (v(e, this), (e = At(e))._a) { var t = e._isUTC ? f(e._a) : Pt(e._a);
                        this._isDSTShifted = this.isValid() && S(e._a, t.toArray()) > 0 } else this._isDSTShifted = !1; return this._isDSTShifted }); var _n = P.prototype;

                function bn(e, t, n, i) { var a = ft(),
                        r = f().set(i, t); return a[n](r, e) }

                function wn(e, t, n) { if (s(e) && (t = e, e = void 0), e = e || "", null != t) return bn(e, t, n, "month"); var i, a = []; for (i = 0; i < 12; i++) a[i] = bn(e, i, n, "month"); return a }

                function xn(e, t, n, i) { "boolean" == typeof e ? (s(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, s(t) && (n = t, t = void 0), t = t || ""); var a, r = ft(),
                        o = e ? r._week.dow : 0; if (null != n) return bn(t, (n + o) % 7, i, "day"); var l = []; for (a = 0; a < 7; a++) l[a] = bn(t, (a + o) % 7, i, "day"); return l } _n.calendar = function(e, t, n) { var i = this._calendar[e] || this._calendar.sameElse; return A(i) ? i.call(t, n) : i }, _n.longDateFormat = function(e) { var t = this._longDateFormat[e],
                        n = this._longDateFormat[e.toUpperCase()]; return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) { return e.slice(1) }), this._longDateFormat[e]) }, _n.invalidDate = function() { return this._invalidDate }, _n.ordinal = function(e) { return this._ordinal.replace("%d", e) }, _n.preparse = yn, _n.postformat = yn, _n.relativeTime = function(e, t, n, i) { var a = this._relativeTime[n]; return A(a) ? a(e, t, n, i) : a.replace(/%d/i, e) }, _n.pastFuture = function(e, t) { var n = this._relativeTime[e > 0 ? "future" : "past"]; return A(n) ? n(t) : n.replace(/%s/i, t) }, _n.set = function(e) { var t, n; for (n in e) A(t = e[n]) ? this[n] = t : this["_" + n] = t;
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, _n.months = function(e, t) { return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Le).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone }, _n.monthsShort = function(e, t) { return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Le.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, _n.monthsParse = function(e, t, n) { var i, a, r; if (this._monthsParseExact) return function(e, t, n) { var i, a, r, o = e.toLocaleLowerCase(); if (!this._monthsParse)
                            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) r = f([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase(); return n ? "MMM" === t ? -1 !== (a = Ce.call(this._shortMonthsParse, o)) ? a : null : -1 !== (a = Ce.call(this._longMonthsParse, o)) ? a : null : "MMM" === t ? -1 !== (a = Ce.call(this._shortMonthsParse, o)) ? a : -1 !== (a = Ce.call(this._longMonthsParse, o)) ? a : null : -1 !== (a = Ce.call(this._longMonthsParse, o)) ? a : -1 !== (a = Ce.call(this._shortMonthsParse, o)) ? a : null }.call(this, e, t, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) { if (a = f([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i; if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i; if (!n && this._monthsParse[i].test(e)) return i } }, _n.monthsRegex = function(e) { return this._monthsParseExact ? (d(this, "_monthsRegex") || Fe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = We), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, _n.monthsShortRegex = function(e) { return this._monthsParseExact ? (d(this, "_monthsRegex") || Fe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = Ye), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, _n.week = function(e) { return qe(e, this._week.dow, this._week.doy).week }, _n.firstDayOfYear = function() { return this._week.doy }, _n.firstDayOfWeek = function() { return this._week.dow }, _n.weekdays = function(e, t) { var n = a(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]; return !0 === e ? Ve(n, this._week.dow) : e ? n[e.day()] : n }, _n.weekdaysMin = function(e) { return !0 === e ? Ve(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, _n.weekdaysShort = function(e) { return !0 === e ? Ve(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, _n.weekdaysParse = function(e, t, n) { var i, a, r; if (this._weekdaysParseExact) return function(e, t, n) { var i, a, r, o = e.toLocaleLowerCase(); if (!this._weekdaysParse)
                            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) r = f([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase(); return n ? "dddd" === t ? -1 !== (a = Ce.call(this._weekdaysParse, o)) ? a : null : "ddd" === t ? -1 !== (a = Ce.call(this._shortWeekdaysParse, o)) ? a : null : -1 !== (a = Ce.call(this._minWeekdaysParse, o)) ? a : null : "dddd" === t ? -1 !== (a = Ce.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ce.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Ce.call(this._minWeekdaysParse, o)) ? a : null : "ddd" === t ? -1 !== (a = Ce.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Ce.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ce.call(this._minWeekdaysParse, o)) ? a : null : -1 !== (a = Ce.call(this._minWeekdaysParse, o)) ? a : -1 !== (a = Ce.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ce.call(this._shortWeekdaysParse, o)) ? a : null }.call(this, e, t, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) { if (a = f([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i; if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i; if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i; if (!n && this._weekdaysParse[i].test(e)) return i } }, _n.weekdaysRegex = function(e) { return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Je.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, _n.weekdaysShortRegex = function(e) { return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Je.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ze), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, _n.weekdaysMinRegex = function(e) { return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Je.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, _n.isPM = function(e) { return "p" === (e + "").toLowerCase().charAt(0) }, _n.meridiem = function(e, t, n) { return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" }, dt("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10; return e + (1 === x(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } }), i.lang = T("moment.lang is deprecated. Use moment.locale instead.", dt), i.langData = T("moment.langData is deprecated. Use moment.localeData instead.", ft); var Sn = Math.abs;

                function kn(e, t, n, i) { var a = Ut(t, n); return e._milliseconds += i * a._milliseconds, e._days += i * a._days, e._months += i * a._months, e._bubble() }

                function Tn(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

                function Mn(e) { return 4800 * e / 146097 }

                function Cn(e) { return 146097 * e / 4800 }

                function Dn(e) { return function() { return this.as(e) } } var An = Dn("ms"),
                    En = Dn("s"),
                    Pn = Dn("m"),
                    On = Dn("h"),
                    Ln = Dn("d"),
                    In = Dn("w"),
                    Nn = Dn("M"),
                    Hn = Dn("Q"),
                    Rn = Dn("y");

                function Yn(e) { return function() { return this.isValid() ? this._data[e] : NaN } } var Wn = Yn("milliseconds"),
                    Fn = Yn("seconds"),
                    jn = Yn("minutes"),
                    zn = Yn("hours"),
                    Bn = Yn("days"),
                    qn = Yn("months"),
                    $n = Yn("years"),
                    Vn = Math.round,
                    Un = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
                    Xn = Math.abs;

                function Gn(e) { return (e > 0) - (e < 0) || +e }

                function Kn() { if (!this.isValid()) return this.localeData().invalidDate(); var e, t, n = Xn(this._milliseconds) / 1e3,
                        i = Xn(this._days),
                        a = Xn(this._months);
                    e = w(n / 60), t = w(e / 60), n %= 60, e %= 60; var r = w(a / 12),
                        o = a %= 12,
                        s = i,
                        l = t,
                        u = e,
                        d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                        c = this.asSeconds(); if (!c) return "P0D"; var f = c < 0 ? "-" : "",
                        h = Gn(this._months) !== Gn(c) ? "-" : "",
                        p = Gn(this._days) !== Gn(c) ? "-" : "",
                        g = Gn(this._milliseconds) !== Gn(c) ? "-" : ""; return f + "P" + (r ? h + r + "Y" : "") + (o ? h + o + "M" : "") + (s ? p + s + "D" : "") + (l || u || d ? "T" : "") + (l ? g + l + "H" : "") + (u ? g + u + "M" : "") + (d ? g + d + "S" : "") } var Zn = Ht.prototype; return Zn.isValid = function() { return this._isValid }, Zn.abs = function() { var e = this._data; return this._milliseconds = Sn(this._milliseconds), this._days = Sn(this._days), this._months = Sn(this._months), e.milliseconds = Sn(e.milliseconds), e.seconds = Sn(e.seconds), e.minutes = Sn(e.minutes), e.hours = Sn(e.hours), e.months = Sn(e.months), e.years = Sn(e.years), this }, Zn.add = function(e, t) { return kn(this, e, t, 1) }, Zn.subtract = function(e, t) { return kn(this, e, t, -1) }, Zn.as = function(e) { if (!this.isValid()) return NaN; var t, n, i = this._milliseconds; if ("month" === (e = I(e)) || "quarter" === e || "year" === e) switch (t = this._days + i / 864e5, n = this._months + Mn(t), e) {
                        case "month":
                            return n;
                        case "quarter":
                            return n / 3;
                        case "year":
                            return n / 12 }
                    else switch (t = this._days + Math.round(Cn(this._months)), e) {
                        case "week":
                            return t / 7 + i / 6048e5;
                        case "day":
                            return t + i / 864e5;
                        case "hour":
                            return 24 * t + i / 36e5;
                        case "minute":
                            return 1440 * t + i / 6e4;
                        case "second":
                            return 86400 * t + i / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + i;
                        default:
                            throw new Error("Unknown unit " + e) } }, Zn.asMilliseconds = An, Zn.asSeconds = En, Zn.asMinutes = Pn, Zn.asHours = On, Zn.asDays = Ln, Zn.asWeeks = In, Zn.asMonths = Nn, Zn.asQuarters = Hn, Zn.asYears = Rn, Zn.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12) : NaN }, Zn._bubble = function() { var e, t, n, i, a, r = this._milliseconds,
                        o = this._days,
                        s = this._months,
                        l = this._data; return r >= 0 && o >= 0 && s >= 0 || r <= 0 && o <= 0 && s <= 0 || (r += 864e5 * Tn(Cn(s) + o), o = 0, s = 0), l.milliseconds = r % 1e3, e = w(r / 1e3), l.seconds = e % 60, t = w(e / 60), l.minutes = t % 60, n = w(t / 60), l.hours = n % 24, o += w(n / 24), s += a = w(Mn(o)), o -= Tn(Cn(a)), i = w(s / 12), s %= 12, l.days = o, l.months = s, l.years = i, this }, Zn.clone = function() { return Ut(this) }, Zn.get = function(e) { return e = I(e), this.isValid() ? this[e + "s"]() : NaN }, Zn.milliseconds = Wn, Zn.seconds = Fn, Zn.minutes = jn, Zn.hours = zn, Zn.days = Bn, Zn.weeks = function() { return w(this.days() / 7) }, Zn.months = qn, Zn.years = $n, Zn.humanize = function(e) { if (!this.isValid()) return this.localeData().invalidDate(); var t = this.localeData(),
                        n = function(e, t, n) { var i = Ut(e).abs(),
                                a = Vn(i.as("s")),
                                r = Vn(i.as("m")),
                                o = Vn(i.as("h")),
                                s = Vn(i.as("d")),
                                l = Vn(i.as("M")),
                                u = Vn(i.as("y")),
                                d = a <= Un.ss && ["s", a] || a < Un.s && ["ss", a] || r <= 1 && ["m"] || r < Un.m && ["mm", r] || o <= 1 && ["h"] || o < Un.h && ["hh", o] || s <= 1 && ["d"] || s < Un.d && ["dd", s] || l <= 1 && ["M"] || l < Un.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u]; return d[2] = t, d[3] = +e > 0, d[4] = n,
                                function(e, t, n, i, a) { return a.relativeTime(t || 1, !!n, e, i) }.apply(null, d) }(this, !e, t); return e && (n = t.pastFuture(+this, n)), t.postformat(n) }, Zn.toISOString = Kn, Zn.toString = Kn, Zn.toJSON = Kn, Zn.locale = tn, Zn.localeData = an, Zn.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Kn), Zn.lang = nn, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), ue("x", ae), ue("X", /[+-]?\d+(\.\d{1,3})?/), he("X", function(e, t, n) { n._d = new Date(1e3 * parseFloat(e, 10)) }), he("x", function(e, t, n) { n._d = new Date(x(e)) }), i.version = "2.24.0", t = Pt, i.fn = vn, i.min = function() { return It("isBefore", [].slice.call(arguments, 0)) }, i.max = function() { return It("isAfter", [].slice.call(arguments, 0)) }, i.now = function() { return Date.now ? Date.now() : +new Date }, i.utc = f, i.unix = function(e) { return Pt(1e3 * e) }, i.months = function(e, t) { return wn(e, t, "months") }, i.isDate = l, i.locale = dt, i.invalid = g, i.duration = Ut, i.isMoment = b, i.weekdays = function(e, t, n) { return xn(e, t, n, "weekdays") }, i.parseZone = function() { return Pt.apply(null, arguments).parseZone() }, i.localeData = ft, i.isDuration = Rt, i.monthsShort = function(e, t) { return wn(e, t, "monthsShort") }, i.weekdaysMin = function(e, t, n) { return xn(e, t, n, "weekdaysMin") }, i.defineLocale = ct, i.updateLocale = function(e, t) { if (null != t) { var n, i, a = rt;
                        null != (i = ut(e)) && (a = i._config), (n = new P(t = E(a, t))).parentLocale = ot[e], ot[e] = n, dt(e) } else null != ot[e] && (null != ot[e].parentLocale ? ot[e] = ot[e].parentLocale : null != ot[e] && delete ot[e]); return ot[e] }, i.locales = function() { return M(ot) }, i.weekdaysShort = function(e, t, n) { return xn(e, t, n, "weekdaysShort") }, i.normalizeUnits = I, i.relativeTimeRounding = function(e) { return void 0 === e ? Vn : "function" == typeof e && (Vn = e, !0) }, i.relativeTimeThreshold = function(e, t) { return void 0 !== Un[e] && (void 0 === t ? Un[e] : (Un[e] = t, "s" === e && (Un.ss = t - 1), !0)) }, i.calendarFormat = function(e, t) { var n = e.diff(t, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }, i.prototype = vn, i.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, i }() }(Gn = { exports: {} }), Gn.exports),
        Qn = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };
    rn._date.override("function" == typeof Zn ? { _id: "moment", formats: function() { return Qn }, parse: function(e, t) { return "string" == typeof e && "string" == typeof t ? e = Zn(e, t) : e instanceof Zn || (e = Zn(e)), e.isValid() ? e.valueOf() : null }, format: function(e, t) { return Zn(e).format(t) }, add: function(e, t, n) { return Zn(e).add(t, n).valueOf() }, diff: function(e, t, n) { return Zn.duration(Zn(e).diff(Zn(t))).as(n) }, startOf: function(e, t, n) { return e = Zn(e), "isoWeek" === t ? e.isoWeekday(n).valueOf() : e.startOf(t).valueOf() }, endOf: function(e, t) { return Zn(e).endOf(t).valueOf() }, _create: function(e) { return Zn(e) } } : {}), oe._set("global", { plugins: { filler: { propagate: !0 } } }); var Jn = { dataset: function(e) { var t = e.fill,
                n = e.chart,
                i = n.getDatasetMeta(t),
                a = i && n.isDatasetVisible(t) && i.dataset._children || [],
                r = a.length || 0; return r ? function(e, t) { return t < r && a[t]._view || null } : null }, boundary: function(e) { var t = e.boundary,
                n = t ? t.x : null,
                i = t ? t.y : null; return function(e) { return { x: null === n ? e.x : n, y: null === i ? e.y : i } } } };

    function ei(e, t, n) { var i, a = e._model || {},
            r = a.fill; if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1; if (!0 === r) return "origin"; if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = t + i), !(i === t || i < 0 || i >= n) && i; switch (r) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return r;
            default:
                return !1 } }

    function ti(e) { var t, n = e.el._model || {},
            i = e.el._scale || {},
            a = e.fill,
            r = null; if (isFinite(a)) return null; if ("start" === a ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePosition ? r = i.getBasePosition() : i.getBasePixel && (r = i.getBasePixel()), null != r) { if (void 0 !== r.x && void 0 !== r.y) return r; if (ue.isFinite(r)) return { x: (t = i.isHorizontal()) ? r : null, y: t ? null : r } } return null }

    function ni(e, t, n) { var i, a = e[t].fill,
            r = [t]; if (!n) return a; for (; !1 !== a && -1 === r.indexOf(a);) { if (!isFinite(a)) return a; if (!(i = e[a])) return !1; if (i.visible) return a;
            r.push(a), a = i.fill } return !1 }

    function ii(e) { var t = e.fill,
            n = "dataset"; return !1 === t ? null : (isFinite(t) || (n = "boundary"), Jn[n](e)) }

    function ai(e) { return e && !e.skip }

    function ri(e, t, n, i, a) { var r; if (i && a) { for (e.moveTo(t[0].x, t[0].y), r = 1; r < i; ++r) ue.canvas.lineTo(e, t[r - 1], t[r]); for (e.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r) ue.canvas.lineTo(e, n[r], n[r - 1], !0) } } var oi = { id: "filler", afterDatasetsUpdate: function(e, t) { var n, i, a, r, o = (e.data.datasets || []).length,
                    s = t.propagate,
                    l = []; for (i = 0; i < o; ++i) r = null, (a = (n = e.getDatasetMeta(i)).dataset) && a._model && a instanceof Re.Line && (r = { visible: e.isDatasetVisible(i), fill: ei(a, i, o), chart: e, el: a }), n.$filler = r, l.push(r); for (i = 0; i < o; ++i)(r = l[i]) && (r.fill = ni(l, i, s), r.boundary = ti(r), r.mapper = ii(r)) }, beforeDatasetDraw: function(e, t) { var n = t.meta.$filler; if (n) { var i = e.ctx,
                        a = n.el,
                        r = a._view,
                        o = a._children || [],
                        s = n.mapper,
                        l = r.backgroundColor || oe.global.defaultColor;
                    s && l && o.length && (ue.canvas.clipArea(i, e.chartArea), function(e, t, n, i, a, r) { var o, s, l, u, d, c, f, h = t.length,
                            p = i.spanGaps,
                            g = [],
                            m = [],
                            v = 0,
                            y = 0; for (e.beginPath(), o = 0, s = h + !!r; o < s; ++o) d = n(u = t[l = o % h]._view, l, i), c = ai(u), f = ai(d), c && f ? (v = g.push(u), y = m.push(d)) : v && y && (p ? (c && g.push(u), f && m.push(d)) : (ri(e, g, m, v, y), v = y = 0, g = [], m = []));
                        ri(e, g, m, v, y), e.closePath(), e.fillStyle = a, e.fill() }(i, o, s, r, l, a._loop), ue.canvas.unclipArea(i)) } } },
        si = ue.noop,
        li = ue.valueOrDefault;

    function ui(e, t) { return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth } oe._set("global", { legend: { display: !0, position: "top", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function(e, t) { var n = t.datasetIndex,
                    i = this.chart,
                    a = i.getDatasetMeta(n);
                a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update() }, onHover: null, onLeave: null, labels: { boxWidth: 40, padding: 10, generateLabels: function(e) { var t = e.data; return ue.isArray(t.datasets) ? t.datasets.map(function(t, n) { return { text: t.label, fillStyle: ue.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor, hidden: !e.isDatasetVisible(n), lineCap: t.borderCapStyle, lineDash: t.borderDash, lineDashOffset: t.borderDashOffset, lineJoin: t.borderJoinStyle, lineWidth: t.borderWidth, strokeStyle: t.borderColor, pointStyle: t.pointStyle, datasetIndex: n } }, this) : [] } } }, legendCallback: function(e) { var t = [];
            t.push('<ul class="' + e.id + '-legend">'); for (var n = 0; n < e.data.datasets.length; n++) t.push('<li><span style="background-color:' + e.data.datasets[n].backgroundColor + '"></span>'), e.data.datasets[n].label && t.push(e.data.datasets[n].label), t.push("</li>"); return t.push("</ul>"), t.join("") } }); var di = pe.extend({ initialize: function(e) { ue.extend(this, e), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1 }, beforeUpdate: si, update: function(e, t, n) { var i = this; return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize }, afterUpdate: si, beforeSetDimensions: si, setDimensions: function() { var e = this;
            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 } }, afterSetDimensions: si, beforeBuildLabels: si, buildLabels: function() { var e = this,
                t = e.options.labels || {},
                n = ue.callback(t.generateLabels, [e.chart], e) || [];
            t.filter && (n = n.filter(function(n) { return t.filter(n, e.chart.data) })), e.options.reverse && n.reverse(), e.legendItems = n }, afterBuildLabels: si, beforeFit: si, fit: function() { var e = this,
                t = e.options,
                n = t.labels,
                i = t.display,
                a = e.ctx,
                r = ue.options._parseFont(n),
                o = r.size,
                s = e.legendHitBoxes = [],
                l = e.minSize,
                u = e.isHorizontal(); if (u ? (l.width = e.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = e.maxHeight), i)
                if (a.font = r.string, u) { var d = e.lineWidths = [0],
                        c = 0;
                    a.textAlign = "left", a.textBaseline = "top", ue.each(e.legendItems, function(e, t) { var i = ui(n, o) + o / 2 + a.measureText(e.text).width;
                        (0 === t || d[d.length - 1] + i + n.padding > l.width) && (c += o + n.padding, d[d.length - (t > 0 ? 0 : 1)] = n.padding), s[t] = { left: 0, top: 0, width: i, height: o }, d[d.length - 1] += i + n.padding }), l.height += c }
            else { var f = n.padding,
                    h = e.columnWidths = [],
                    p = n.padding,
                    g = 0,
                    m = 0,
                    v = o + f;
                ue.each(e.legendItems, function(e, t) { var i = ui(n, o) + o / 2 + a.measureText(e.text).width;
                    t > 0 && m + v > l.height - f && (p += g + n.padding, h.push(g), g = 0, m = 0), g = Math.max(g, i), m += v, s[t] = { left: 0, top: 0, width: i, height: o } }), p += g, h.push(g), l.width += p } e.width = l.width, e.height = l.height }, afterFit: si, isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position }, draw: function() { var e = this,
                t = e.options,
                n = t.labels,
                i = oe.global,
                a = i.defaultColor,
                r = i.elements.line,
                o = e.width,
                s = e.lineWidths; if (t.display) { var l, u = e.ctx,
                    d = li(n.fontColor, i.defaultFontColor),
                    c = ue.options._parseFont(n),
                    f = c.size;
                u.textAlign = "left", u.textBaseline = "middle", u.lineWidth = .5, u.strokeStyle = d, u.fillStyle = d, u.font = c.string; var h = ui(n, f),
                    p = e.legendHitBoxes,
                    g = e.isHorizontal();
                l = g ? { x: e.left + (o - s[0]) / 2 + n.padding, y: e.top + n.padding, line: 0 } : { x: e.left + n.padding, y: e.top + n.padding, line: 0 }; var m = f + n.padding;
                ue.each(e.legendItems, function(i, d) { var c = u.measureText(i.text).width,
                        v = h + f / 2 + c,
                        y = l.x,
                        _ = l.y;
                    g ? d > 0 && y + v + n.padding > e.left + e.minSize.width && (_ = l.y += m, l.line++, y = l.x = e.left + (o - s[l.line]) / 2 + n.padding) : d > 0 && _ + m > e.top + e.minSize.height && (y = l.x = y + e.columnWidths[l.line] + n.padding, _ = l.y = e.top + n.padding, l.line++),
                        function(e, n, i) { if (!(isNaN(h) || h <= 0)) { u.save(); var o = li(i.lineWidth, r.borderWidth); if (u.fillStyle = li(i.fillStyle, a), u.lineCap = li(i.lineCap, r.borderCapStyle), u.lineDashOffset = li(i.lineDashOffset, r.borderDashOffset), u.lineJoin = li(i.lineJoin, r.borderJoinStyle), u.lineWidth = o, u.strokeStyle = li(i.strokeStyle, a), u.setLineDash && u.setLineDash(li(i.lineDash, r.borderDash)), t.labels && t.labels.usePointStyle) { var s = h * Math.SQRT2 / 2,
                                        l = e + h / 2,
                                        d = n + f / 2;
                                    ue.canvas.drawPoint(u, i.pointStyle, s, l, d) } else 0 !== o && u.strokeRect(e, n, h, f), u.fillRect(e, n, h, f);
                                u.restore() } }(y, _, i), p[d].left = y, p[d].top = _,
                        function(e, t, n, i) { var a = f / 2,
                                r = h + a + y,
                                o = _ + a;
                            u.fillText(n.text, r, o), n.hidden && (u.beginPath(), u.lineWidth = 2, u.moveTo(r, o), u.lineTo(r + i, o), u.stroke()) }(0, 0, i, c), g ? l.x += v + n.padding : l.y += m }) } }, _getLegendItemAt: function(e, t) { var n, i, a, r = this; if (e >= r.left && e <= r.right && t >= r.top && t <= r.bottom)
                for (a = r.legendHitBoxes, n = 0; n < a.length; ++n)
                    if (e >= (i = a[n]).left && e <= i.left + i.width && t >= i.top && t <= i.top + i.height) return r.legendItems[n]; return null }, handleEvent: function(e) { var t, n = this,
                i = n.options,
                a = "mouseup" === e.type ? "click" : e.type; if ("mousemove" === a) { if (!i.onHover && !i.onLeave) return } else { if ("click" !== a) return; if (!i.onClick) return } t = n._getLegendItemAt(e.x, e.y), "click" === a ? t && i.onClick && i.onClick.call(n, e.native, t) : (i.onLeave && t !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, e.native, n._hoveredItem), n._hoveredItem = t), i.onHover && t && i.onHover.call(n, e.native, t)) } });

    function ci(e, t) { var n = new di({ ctx: e.ctx, options: t, chart: e });
        _t.configure(e, n, t), _t.addBox(e, n), e.legend = n } var fi = { id: "legend", _element: di, beforeInit: function(e) { var t = e.options.legend;
                t && ci(e, t) }, beforeUpdate: function(e) { var t = e.options.legend,
                    n = e.legend;
                t ? (ue.mergeIf(t, oe.global.legend), n ? (_t.configure(e, n, t), n.options = t) : ci(e, t)) : n && (_t.removeBox(e, n), delete e.legend) }, afterEvent: function(e, t) { var n = e.legend;
                n && n.handleEvent(t) } },
        hi = ue.noop;
    oe._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, padding: 10, position: "top", text: "", weight: 2e3 } }); var pi = pe.extend({ initialize: function(e) { ue.extend(this, e), this.legendHitBoxes = [] }, beforeUpdate: hi, update: function(e, t, n) { var i = this; return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize }, afterUpdate: hi, beforeSetDimensions: hi, setDimensions: function() { var e = this;
            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 } }, afterSetDimensions: hi, beforeBuildLabels: hi, buildLabels: hi, afterBuildLabels: hi, beforeFit: hi, fit: function() { var e = this,
                t = e.options,
                n = t.display,
                i = e.minSize,
                a = ue.isArray(t.text) ? t.text.length : 1,
                r = ue.options._parseFont(t),
                o = n ? a * r.lineHeight + 2 * t.padding : 0;
            e.isHorizontal() ? (i.width = e.maxWidth, i.height = o) : (i.width = o, i.height = e.maxHeight), e.width = i.width, e.height = i.height }, afterFit: hi, isHorizontal: function() { var e = this.options.position; return "top" === e || "bottom" === e }, draw: function() { var e = this,
                t = e.ctx,
                n = e.options; if (n.display) { var i, a, r, o = ue.options._parseFont(n),
                    s = o.lineHeight,
                    l = s / 2 + n.padding,
                    u = 0,
                    d = e.top,
                    c = e.left,
                    f = e.bottom,
                    h = e.right;
                t.fillStyle = ue.valueOrDefault(n.fontColor, oe.global.defaultFontColor), t.font = o.string, e.isHorizontal() ? (a = c + (h - c) / 2, r = d + l, i = h - c) : (a = "left" === n.position ? c + l : h - l, r = d + (f - d) / 2, i = f - d, u = Math.PI * ("left" === n.position ? -.5 : .5)), t.save(), t.translate(a, r), t.rotate(u), t.textAlign = "center", t.textBaseline = "middle"; var p = n.text; if (ue.isArray(p))
                    for (var g = 0, m = 0; m < p.length; ++m) t.fillText(p[m], 0, g, i), g += s;
                else t.fillText(p, 0, 0, i);
                t.restore() } } });

    function gi(e, t) { var n = new pi({ ctx: e.ctx, options: t, chart: e });
        _t.configure(e, n, t), _t.addBox(e, n), e.titleBlock = n } var mi = {},
        vi = oi,
        yi = fi,
        _i = { id: "title", _element: pi, beforeInit: function(e) { var t = e.options.title;
                t && gi(e, t) }, beforeUpdate: function(e) { var t = e.options.title,
                    n = e.titleBlock;
                t ? (ue.mergeIf(t, oe.global.title), n ? (_t.configure(e, n, t), n.options = t) : gi(e, t)) : n && (_t.removeBox(e, n), delete e.titleBlock) } }; for (var bi in mi.filler = vi, mi.legend = yi, mi.title = _i, tn.helpers = ue,
            function() {
                function e(e, t, n) { var i; return "string" == typeof e ? (i = parseInt(e, 10), -1 !== e.indexOf("%") && (i = i / 100 * t.parentNode[n])) : i = e, i }

                function t(e) { return null != e && "none" !== e }

                function n(n, i, a) { var r = document.defaultView,
                        o = ue._getParentNode(n),
                        s = r.getComputedStyle(n)[i],
                        l = r.getComputedStyle(o)[i],
                        u = t(s),
                        d = t(l),
                        c = Number.POSITIVE_INFINITY; return u || d ? Math.min(u ? e(s, n, a) : c, d ? e(l, o, a) : c) : "none" } ue.where = function(e, t) { if (ue.isArray(e) && Array.prototype.filter) return e.filter(t); var n = []; return ue.each(e, function(e) { t(e) && n.push(e) }), n }, ue.findIndex = Array.prototype.findIndex ? function(e, t, n) { return e.findIndex(t, n) } : function(e, t, n) { n = void 0 === n ? e : n; for (var i = 0, a = e.length; i < a; ++i)
                        if (t.call(n, e[i], i, e)) return i; return -1 }, ue.findNextWhere = function(e, t, n) { ue.isNullOrUndef(n) && (n = -1); for (var i = n + 1; i < e.length; i++) { var a = e[i]; if (t(a)) return a } }, ue.findPreviousWhere = function(e, t, n) { ue.isNullOrUndef(n) && (n = e.length); for (var i = n - 1; i >= 0; i--) { var a = e[i]; if (t(a)) return a } }, ue.isNumber = function(e) { return !isNaN(parseFloat(e)) && isFinite(e) }, ue.almostEquals = function(e, t, n) { return Math.abs(e - t) < n }, ue.almostWhole = function(e, t) { var n = Math.round(e); return n - t < e && n + t > e }, ue.max = function(e) { return e.reduce(function(e, t) { return isNaN(t) ? e : Math.max(e, t) }, Number.NEGATIVE_INFINITY) }, ue.min = function(e) { return e.reduce(function(e, t) { return isNaN(t) ? e : Math.min(e, t) }, Number.POSITIVE_INFINITY) }, ue.sign = Math.sign ? function(e) { return Math.sign(e) } : function(e) { return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1 }, ue.log10 = Math.log10 ? function(e) { return Math.log10(e) } : function(e) { var t = Math.log(e) * Math.LOG10E,
                        n = Math.round(t); return e === Math.pow(10, n) ? n : t }, ue.toRadians = function(e) { return e * (Math.PI / 180) }, ue.toDegrees = function(e) { return e * (180 / Math.PI) }, ue._decimalPlaces = function(e) { if (ue.isFinite(e)) { for (var t = 1, n = 0; Math.round(e * t) / t !== e;) t *= 10, n++; return n } }, ue.getAngleFromPoint = function(e, t) { var n = t.x - e.x,
                        i = t.y - e.y,
                        a = Math.sqrt(n * n + i * i),
                        r = Math.atan2(i, n); return r < -.5 * Math.PI && (r += 2 * Math.PI), { angle: r, distance: a } }, ue.distanceBetweenPoints = function(e, t) { return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) }, ue.aliasPixel = function(e) { return e % 2 == 0 ? 0 : .5 }, ue._alignPixel = function(e, t, n) { var i = e.currentDevicePixelRatio,
                        a = n / 2; return Math.round((t - a) * i) / i + a }, ue.splineCurve = function(e, t, n, i) { var a = e.skip ? t : e,
                        r = t,
                        o = n.skip ? t : n,
                        s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                        l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                        u = s / (s + l),
                        d = l / (s + l),
                        c = i * (u = isNaN(u) ? 0 : u),
                        f = i * (d = isNaN(d) ? 0 : d); return { previous: { x: r.x - c * (o.x - a.x), y: r.y - c * (o.y - a.y) }, next: { x: r.x + f * (o.x - a.x), y: r.y + f * (o.y - a.y) } } }, ue.EPSILON = Number.EPSILON || 1e-14, ue.splineCurveMonotone = function(e) { var t, n, i, a, r, o, s, l, u, d = (e || []).map(function(e) { return { model: e._model, deltaK: 0, mK: 0 } }),
                        c = d.length; for (t = 0; t < c; ++t)
                        if (!(i = d[t]).model.skip) { if (n = t > 0 ? d[t - 1] : null, (a = t < c - 1 ? d[t + 1] : null) && !a.model.skip) { var f = a.model.x - i.model.x;
                                i.deltaK = 0 !== f ? (a.model.y - i.model.y) / f : 0 }!n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2 }
                    for (t = 0; t < c - 1; ++t) i = d[t], a = d[t + 1], i.model.skip || a.model.skip || (ue.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (r = i.mK / i.deltaK, o = a.mK / i.deltaK, (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = r * s * i.deltaK, a.mK = o * s * i.deltaK))); for (t = 0; t < c; ++t)(i = d[t]).model.skip || (n = t > 0 ? d[t - 1] : null, a = t < c - 1 ? d[t + 1] : null, n && !n.model.skip && (u = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - u, i.model.controlPointPreviousY = i.model.y - u * i.mK), a && !a.model.skip && (u = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + u, i.model.controlPointNextY = i.model.y + u * i.mK)) }, ue.nextItem = function(e, t, n) { return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1] }, ue.previousItem = function(e, t, n) { return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1] }, ue.niceNum = function(e, t) { var n = Math.floor(ue.log10(e)),
                        i = e / Math.pow(10, n); return (t ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n) }, ue.requestAnimFrame = "undefined" == typeof window ? function(e) { e() } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) { return window.setTimeout(e, 1e3 / 60) }, ue.getRelativePosition = function(e, t) { var n, i, a = e.originalEvent || e,
                        r = e.target || e.srcElement,
                        o = r.getBoundingClientRect(),
                        s = a.touches;
                    s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = a.clientX, i = a.clientY); var l = parseFloat(ue.getStyle(r, "padding-left")),
                        u = parseFloat(ue.getStyle(r, "padding-top")),
                        d = parseFloat(ue.getStyle(r, "padding-right")),
                        c = parseFloat(ue.getStyle(r, "padding-bottom")),
                        f = o.right - o.left - l - d,
                        h = o.bottom - o.top - u - c; return { x: n = Math.round((n - o.left - l) / f * r.width / t.currentDevicePixelRatio), y: i = Math.round((i - o.top - u) / h * r.height / t.currentDevicePixelRatio) } }, ue.getConstraintWidth = function(e) { return n(e, "max-width", "clientWidth") }, ue.getConstraintHeight = function(e) { return n(e, "max-height", "clientHeight") }, ue._calculatePadding = function(e, t, n) { return (t = ue.getStyle(e, t)).indexOf("%") > -1 ? n * parseInt(t, 10) / 100 : parseInt(t, 10) }, ue._getParentNode = function(e) { var t = e.parentNode; return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t }, ue.getMaximumWidth = function(e) { var t = ue._getParentNode(e); if (!t) return e.clientWidth; var n = t.clientWidth,
                        i = n - ue._calculatePadding(t, "padding-left", n) - ue._calculatePadding(t, "padding-right", n),
                        a = ue.getConstraintWidth(e); return isNaN(a) ? i : Math.min(i, a) }, ue.getMaximumHeight = function(e) { var t = ue._getParentNode(e); if (!t) return e.clientHeight; var n = t.clientHeight,
                        i = n - ue._calculatePadding(t, "padding-top", n) - ue._calculatePadding(t, "padding-bottom", n),
                        a = ue.getConstraintHeight(e); return isNaN(a) ? i : Math.min(i, a) }, ue.getStyle = function(e, t) { return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t) }, ue.retinaScale = function(e, t) { var n = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1; if (1 !== n) { var i = e.canvas,
                            a = e.height,
                            r = e.width;
                        i.height = a * n, i.width = r * n, e.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = a + "px", i.style.width = r + "px") } }, ue.fontString = function(e, t, n) { return t + " " + e + "px " + n }, ue.longestText = function(e, t, n, i) { var a = (i = i || {}).data = i.data || {},
                        r = i.garbageCollect = i.garbageCollect || [];
                    i.font !== t && (a = i.data = {}, r = i.garbageCollect = [], i.font = t), e.font = t; var o = 0;
                    ue.each(n, function(t) { null != t && !0 !== ue.isArray(t) ? o = ue.measureText(e, a, r, o, t) : ue.isArray(t) && ue.each(t, function(t) { null == t || ue.isArray(t) || (o = ue.measureText(e, a, r, o, t)) }) }); var s = r.length / 2; if (s > n.length) { for (var l = 0; l < s; l++) delete a[r[l]];
                        r.splice(0, s) } return o }, ue.measureText = function(e, t, n, i, a) { var r = t[a]; return r || (r = t[a] = e.measureText(a).width, n.push(a)), r > i && (i = r), i }, ue.numberOfLabelLines = function(e) { var t = 1; return ue.each(e, function(e) { ue.isArray(e) && e.length > t && (t = e.length) }), t }, ue.color = V ? function(e) { return e instanceof CanvasGradient && (e = oe.global.defaultColor), V(e) } : function(e) { return console.error("Color.js not found!"), e }, ue.getHoverColor = function(e) { return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : ue.color(e).saturate(.5).darken(.1).rgbString() } }(), tn._adapters = rn, tn.Animation = me, tn.animationService = ve, tn.controllers = lt, tn.DatasetController = xe, tn.defaults = oe, tn.Element = pe, tn.elements = Re, tn.Interaction = gt, tn.layouts = _t, tn.platform = Rt, tn.plugins = Yt, tn.Scale = cn, tn.scaleService = Wt, tn.Ticks = on, tn.Tooltip = Gt, tn.helpers.each(Kn, function(e, t) { tn.scaleService.registerScaleType(t, e, e._defaults) }), mi) mi.hasOwnProperty(bi) && tn.plugins.register(mi[bi]);
    tn.platform.initialize(); var wi = tn; return "undefined" != typeof window && (window.Chart = tn), tn.Chart = tn, tn.Legend = mi.legend._element, tn.Title = mi.title._element, tn.pluginService = tn.plugins, tn.PluginBase = tn.Element.extend({}), tn.canvasHelpers = tn.helpers.canvas, tn.layoutService = tn.layouts, tn.LinearScaleBase = gn, tn.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function(e) { tn[e] = function(t, n) { return new tn(t, tn.helpers.merge(n || {}, { type: e.charAt(0).toLowerCase() + e.slice(1) })) } }), wi }),
function(e) { "use strict";

    function t(e) { var t = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"); return new RegExp(t) }

    function n(e) { var n = { Y: "years", m: "months", n: "daysToMonth", d: "daysToWeek", w: "weeks", W: "weeksToMonth", H: "hours", M: "minutes", S: "seconds", D: "totalDays", I: "totalHours", N: "totalMinutes", T: "totalSeconds" }; return function(a) { var r = a.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi); if (r)
                for (var o = 0, s = r.length; o < s; ++o) { var l = r[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        u = t(l[0]),
                        d = l[1] || "",
                        c = l[3] || "",
                        f = null;
                    l = l[2], n.hasOwnProperty(l) && (f = n[l], f = Number(e[f])), null !== f && ("!" === d && (f = i(c, f)), "" === d && f < 10 && (f = "0" + f.toString()), a = a.replace(u, f.toString())) }
            return a.replace(/%%/, "%") } }

    function i(e, t) { var n = "s",
            i = ""; return e && (1 === (e = e.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? n = e[0] : (i = e[0], n = e[1])), Math.abs(t) > 1 ? n : i } var a = [],
        r = { precision: 100, elapse: !1, defer: !1 },
        o = function(t, n, i) { this.el = t, this.$el = e(t), this.interval = null, this.offset = {}, this.options = e.extend({}, r), this.instanceNumber = a.length, a.push(this), this.$el.data("countdown-instance", this.instanceNumber), i && ("function" == typeof i ? (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), this.$el.on("finish.countdown", i)) : this.options = e.extend({}, r, i)), this.setFinalDate(n), !1 === this.options.defer && this.start() };
    o.prototype.start = function() { null !== this.interval && clearInterval(this.interval); var e = this;
        this.update(), this.interval = setInterval(function() { e.update.call(e) }, this.options.precision) }, o.prototype.stop = function() { clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped") }, o.prototype.toggle = function() { this.interval ? this.stop() : this.start() }, o.prototype.pause = function() { this.stop() }, o.prototype.resume = function() { this.start() }, o.prototype.remove = function() { this.stop.call(this), a[this.instanceNumber] = null, delete this.$el.data().countdownInstance }, o.prototype.setFinalDate = function(e) { this.finalDate = function(e) { if (e instanceof Date) return e; throw new Error("Couldn't cast `" + e + "` to a date object.") }(e) }, o.prototype.update = function() { if (0 !== this.$el.closest("html").length) { var t, n = void 0 !== e._data(this.el, "events"),
                i = new Date;
            t = this.finalDate.getTime() - i.getTime(), t = Math.ceil(t / 1e3), t = !this.options.elapse && t < 0 ? 0 : Math.abs(t), this.totalSecsLeft !== t && n && (this.totalSecsLeft = t, this.elapsed = i >= this.finalDate, this.offset = { seconds: this.totalSecsLeft % 60, minutes: Math.floor(this.totalSecsLeft / 60) % 60, hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24, days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368), weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7), weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4, months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368), years: Math.abs(this.finalDate.getFullYear() - i.getFullYear()), totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24), totalHours: Math.floor(this.totalSecsLeft / 60 / 60), totalMinutes: Math.floor(this.totalSecsLeft / 60), totalSeconds: this.totalSecsLeft }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish"))) } else this.remove() }, o.prototype.dispatchEvent = function(t) { var i = e.Event(t + ".countdown");
        i.finalDate = this.finalDate, i.elapsed = this.elapsed, i.offset = e.extend({}, this.offset), i.strftime = n(this.offset), this.$el.trigger(i) }, e.fn.countdown = function() { var t = Array.prototype.slice.call(arguments, 0); return this.each(function() { var n = e(this).data("countdown-instance"); if (void 0 !== n) { var i = a[n],
                    r = t[0];
                o.prototype.hasOwnProperty(r) ? i[r].apply(i, t.slice(1)) : null === String(r).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (i.setFinalDate.call(i, r), i.start()) : e.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, r)) } else new o(this, t[0], t[1]) }) } }(window.jQuery),
function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(e) { "use strict"; var t = window.Slick || {};
    (t = function() { var t = 0; return function(n, i) { var a, r = this;
            r.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: e(n), appendDots: e(n), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(t, n) { return e('<button type="button" />').text(n + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, r.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, a = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, i, a), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0) } }()).prototype.activateADA = function() { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) { var a = this; if ("boolean" == typeof n) i = n, n = null;
        else if (n < 0 || n >= a.slideCount) return !1;
        a.unload(), "number" == typeof n ? 0 === n && 0 === a.$slides.length ? e(t).appendTo(a.$slideTrack) : i ? e(t).insertBefore(a.$slides.eq(n)) : e(t).insertAfter(a.$slides.eq(n)) : !0 === i ? e(t).prependTo(a.$slideTrack) : e(t).appendTo(a.$slideTrack), a.$slides = a.$slideTrack.children(this.options.slide), a.$slideTrack.children(this.options.slide).detach(), a.$slideTrack.append(a.$slides), a.$slides.each(function(t, n) { e(n).attr("data-slick-index", t) }), a.$slidesCache = a.$slides, a.reinit() }, t.prototype.animateHeight = function() { var e = this; if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) { var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({ height: t }, e.options.speed) } }, t.prototype.animateSlide = function(t, n) { var i = {},
            a = this;
        a.animateHeight(), !0 === a.options.rtl && !1 === a.options.vertical && (t = -t), !1 === a.transformsEnabled ? !1 === a.options.vertical ? a.$slideTrack.animate({ left: t }, a.options.speed, a.options.easing, n) : a.$slideTrack.animate({ top: t }, a.options.speed, a.options.easing, n) : !1 === a.cssTransitions ? (!0 === a.options.rtl && (a.currentLeft = -a.currentLeft), e({ animStart: a.currentLeft }).animate({ animStart: t }, { duration: a.options.speed, easing: a.options.easing, step: function(e) { e = Math.ceil(e), !1 === a.options.vertical ? (i[a.animType] = "translate(" + e + "px, 0px)", a.$slideTrack.css(i)) : (i[a.animType] = "translate(0px," + e + "px)", a.$slideTrack.css(i)) }, complete: function() { n && n.call() } })) : (a.applyTransition(), t = Math.ceil(t), !1 === a.options.vertical ? i[a.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[a.animType] = "translate3d(0px," + t + "px, 0px)", a.$slideTrack.css(i), n && setTimeout(function() { a.disableTransition(), n.call() }, a.options.speed)) }, t.prototype.getNavTarget = function() { var t = this.options.asNavFor; return t && null !== t && (t = e(t).not(this.$slider)), t }, t.prototype.asNavFor = function(t) { var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() { var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0) }) }, t.prototype.applyTransition = function(e) { var t = this,
            n = {};!1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n) }, t.prototype.autoPlay = function() { var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed)) }, t.prototype.autoPlayClear = function() { this.autoPlayTimer && clearInterval(this.autoPlayTimer) }, t.prototype.autoPlayIterator = function() { var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t)) }, t.prototype.buildArrows = function() { var t = this;!0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, t.prototype.buildDots = function() { var t, n, i = this; if (!0 === i.options.dots) { for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active") } }, t.prototype.buildOut = function() { var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) { e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "") }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable") }, t.prototype.buildRows = function() { var e, t, n, i, a, r, o, s = this; if (i = document.createDocumentFragment(), r = s.$slider.children(), s.options.rows > 1) { for (o = s.options.slidesPerRow * s.options.rows, a = Math.ceil(r.length / o), e = 0; e < a; e++) { var l = document.createElement("div"); for (t = 0; t < s.options.rows; t++) { var u = document.createElement("div"); for (n = 0; n < s.options.slidesPerRow; n++) { var d = e * o + (t * s.options.slidesPerRow + n);
                        r.get(d) && u.appendChild(r.get(d)) } l.appendChild(u) } i.appendChild(l) } s.$slider.empty().append(i), s.$slider.children().children().children().css({ width: 100 / s.options.slidesPerRow + "%", display: "inline-block" }) } }, t.prototype.checkResponsive = function(t, n) { var i, a, r, o = this,
            s = !1,
            l = o.$slider.width(),
            u = window.innerWidth || e(window).width(); if ("window" === o.respondTo ? r = u : "slider" === o.respondTo ? r = l : "min" === o.respondTo && (r = Math.min(u, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) { for (i in a = null, o.breakpoints) o.breakpoints.hasOwnProperty(i) && (!1 === o.originalSettings.mobileFirst ? r < o.breakpoints[i] && (a = o.breakpoints[i]) : r > o.breakpoints[i] && (a = o.breakpoints[i]));
            null !== a ? null !== o.activeBreakpoint ? (a !== o.activeBreakpoint || n) && (o.activeBreakpoint = a, "unslick" === o.breakpointSettings[a] ? o.unslick(a) : (o.options = e.extend({}, o.originalSettings, o.breakpointSettings[a]), !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t)), s = a) : (o.activeBreakpoint = a, "unslick" === o.breakpointSettings[a] ? o.unslick(a) : (o.options = e.extend({}, o.originalSettings, o.breakpointSettings[a]), !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t)), s = a) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t), s = a), t || !1 === s || o.$slider.trigger("breakpoint", [o, s]) } }, t.prototype.changeSlide = function(t, n) { var i, a, r = this,
            o = e(t.currentTarget); switch (o.is("a") && t.preventDefault(), o.is("li") || (o = o.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case "previous":
                a = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - a, !1, n); break;
            case "next":
                a = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + a, !1, n); break;
            case "index":
                var s = 0 === t.data.index ? 0 : t.data.index || o.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(s), !1, n), o.children().trigger("focus"); break;
            default:
                return } }, t.prototype.checkNavigable = function(e) { var t, n; if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var i in t) { if (e < t[i]) { e = n; break } n = t[i] }
        return e }, t.prototype.cleanUpEvents = function() { var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition) }, t.prototype.cleanUpSlideEvents = function() { var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1)) }, t.prototype.cleanUpRows = function() { var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e)) }, t.prototype.clickHandler = function(e) {!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()) }, t.prototype.destroy = function(t) { var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { e(this).attr("style", e(this).data("originalStyling")) }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n]) }, t.prototype.disableTransition = function(e) { var t = this,
            n = {};
        n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n) }, t.prototype.fadeSlide = function(e, t) { var n = this;!1 === n.cssTransitions ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }), t && setTimeout(function() { n.disableTransition(e), t.call() }, n.options.speed)) }, t.prototype.fadeSlideOut = function(e) { var t = this;!1 === t.cssTransitions ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 })) }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) { var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit()) }, t.prototype.focusHandler = function() { var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) { n.stopImmediatePropagation(); var i = e(this);
            setTimeout(function() { t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay()) }, 0) }) }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() { return this.currentSlide }, t.prototype.getDotCount = function() { var e = this,
            t = 0,
            n = 0,
            i = 0; if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++i;
            else
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll); return i - 1 }, t.prototype.getLeft = function(e) { var t, n, i, a, r = this,
            o = 0; return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, a = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? a = -1.5 : 1 === r.options.slidesToShow && (a = -2)), o = n * r.options.slidesToShow * a), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + o, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t }, t.prototype.getOption = t.prototype.slickGetOption = function(e) { return this.options[e] }, t.prototype.getNavigableIndexes = function() { var e, t = this,
            n = 0,
            i = 0,
            a = []; for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) a.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; return a }, t.prototype.getSlick = function() { return this }, t.prototype.getSlideCount = function() { var t, n, i = this; return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(a, r) { if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1 }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) { this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t) }, t.prototype.init = function(t) { var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay()) }, t.prototype.initADA = function() { var t = this,
            n = Math.ceil(t.slideCount / t.options.slidesToShow),
            i = t.getNavigableIndexes().filter(function(e) { return e >= 0 && e < t.slideCount });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) { var a = i.indexOf(n);
            e(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + n, tabindex: -1 }), -1 !== a && e(this).attr({ "aria-describedby": "slick-slide-control" + t.instanceUid + a }) }), t.$dots.attr("role", "tablist").find("li").each(function(a) { var r = i[a];
            e(this).attr({ role: "presentation" }), e(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + t.instanceUid + a, "aria-controls": "slick-slide" + t.instanceUid + r, "aria-label": a + 1 + " of " + n, "aria-selected": null, tabindex: "-1" }) }).eq(t.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end()); for (var a = t.currentSlide, r = a + t.options.slidesToShow; a < r; a++) t.$slides.eq(a).attr("tabindex", 0);
        t.activateADA() }, t.prototype.initArrowEvents = function() { var e = this;!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler))) }, t.prototype.initDotEvents = function() { var t = this;!0 === t.options.dots && (e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1)) }, t.prototype.initSlideEvents = function() { var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1))) }, t.prototype.initializeEvents = function() { var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition) }, t.prototype.initUI = function() { var e = this;!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show() }, t.prototype.keyHandler = function(e) { var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } })) }, t.prototype.lazyLoad = function() {
        function t(t) { e("img[data-lazy]", t).each(function() { var t = e(this),
                    n = e(this).attr("data-lazy"),
                    i = e(this).attr("data-srcset"),
                    a = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    o = document.createElement("img");
                o.onload = function() { t.animate({ opacity: 0 }, 100, function() { i && (t.attr("srcset", i), a && t.attr("sizes", a)), t.attr("src", n).animate({ opacity: 1 }, 200, function() { t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), r.$slider.trigger("lazyLoaded", [r, t, n]) }) }, o.onerror = function() { t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]) }, o.src = n }) } var n, i, a, r = this; if (!0 === r.options.centerMode ? !0 === r.options.infinite ? a = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), a = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, a = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (i > 0 && i--, a <= r.slideCount && a++)), n = r.$slider.find(".slick-slide").slice(i, a), "anticipated" === r.options.lazyLoad)
            for (var o = i - 1, s = a, l = r.$slider.find(".slick-slide"), u = 0; u < r.options.slidesToScroll; u++) o < 0 && (o = r.slideCount - 1), n = (n = n.add(l.eq(o))).add(l.eq(s)), o--, s++;
        t(n), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow)) }, t.prototype.loadSlider = function() { var e = this;
        e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad() }, t.prototype.next = t.prototype.slickNext = function() { this.changeSlide({ data: { message: "next" } }) }, t.prototype.orientationChange = function() { this.checkResponsive(), this.setPosition() }, t.prototype.pause = t.prototype.slickPause = function() { this.autoPlayClear(), this.paused = !0 }, t.prototype.play = t.prototype.slickPlay = function() { var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1 }, t.prototype.postSlide = function(t) { var n = this;
        n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus())) }, t.prototype.prev = t.prototype.slickPrev = function() { this.changeSlide({ data: { message: "previous" } }) }, t.prototype.preventDefault = function(e) { e.preventDefault() }, t.prototype.progressiveLazyLoad = function(t) { t = t || 1; var n, i, a, r, o, s = this,
            l = e("img[data-lazy]", s.$slider);
        l.length ? (n = l.first(), i = n.attr("data-lazy"), a = n.attr("data-srcset"), r = n.attr("data-sizes") || s.$slider.attr("data-sizes"), (o = document.createElement("img")).onload = function() { a && (n.attr("srcset", a), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, n, i]), s.progressiveLazyLoad() }, o.onerror = function() { t < 3 ? setTimeout(function() { s.progressiveLazyLoad(t + 1) }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, n, i]), s.progressiveLazyLoad()) }, o.src = i) : s.$slider.trigger("allImagesLoaded", [s]) }, t.prototype.refresh = function(t) { var n, i, a = this;
        i = a.slideCount - a.options.slidesToShow, !a.options.infinite && a.currentSlide > i && (a.currentSlide = i), a.slideCount <= a.options.slidesToShow && (a.currentSlide = 0), n = a.currentSlide, a.destroy(!0), e.extend(a, a.initials, { currentSlide: n }), a.init(), t || a.changeSlide({ data: { message: "index", index: n } }, !1) }, t.prototype.registerBreakpoints = function() { var t, n, i, a = this,
            r = a.options.responsive || null; if ("array" === e.type(r) && r.length) { for (t in a.respondTo = a.options.respondTo || "window", r)
                if (i = a.breakpoints.length - 1, r.hasOwnProperty(t)) { for (n = r[t].breakpoint; i >= 0;) a.breakpoints[i] && a.breakpoints[i] === n && a.breakpoints.splice(i, 1), i--;
                    a.breakpoints.push(n), a.breakpointSettings[n] = r[t].settings }
            a.breakpoints.sort(function(e, t) { return a.options.mobileFirst ? e - t : t - e }) } }, t.prototype.reinit = function() { var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t]) }, t.prototype.resize = function() { var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() { t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition() }, 50)) }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) { var i = this; if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
        i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit() }, t.prototype.setCSS = function(e) { var t, n, i = this,
            a = {};!0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", a[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(a) : (a = {}, !1 === i.cssTransitions ? (a[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(a)) : (a[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(a))) }, t.prototype.setDimensions = function() { var e = this;!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length))); var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();!1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t) }, t.prototype.setFade = function() { var t, n = this;
        n.$slides.each(function(i, a) { t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(a).css({ position: "relative", right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) : e(a).css({ position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) }), n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 }) }, t.prototype.setHeight = function() { var e = this; if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) { var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t) } }, t.prototype.setOption = t.prototype.slickSetOption = function() { var t, n, i, a, r, o = this,
            s = !1; if ("object" === e.type(arguments[0]) ? (i = arguments[0], s = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], a = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) o.options[i] = a;
        else if ("multiple" === r) e.each(i, function(e, t) { o.options[e] = t });
        else if ("responsive" === r)
            for (n in a)
                if ("array" !== e.type(o.options.responsive)) o.options.responsive = [a[n]];
                else { for (t = o.options.responsive.length - 1; t >= 0;) o.options.responsive[t].breakpoint === a[n].breakpoint && o.options.responsive.splice(t, 1), t--;
                    o.options.responsive.push(a[n]) }
        s && (o.unload(), o.reinit()) }, t.prototype.setPosition = function() { var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]) }, t.prototype.setProps = function() { var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType }, t.prototype.setSlideClasses = function(e) { var t, n, i, a, r = this; if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) { var o = r.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + o, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + o, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center") } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (a = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - a), i + a).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")); "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad() }, t.prototype.setupInfinite = function() { var t, n, i, a = this; if (!0 === a.options.fade && (a.options.centerMode = !1), !0 === a.options.infinite && !1 === a.options.fade && (n = null, a.slideCount > a.options.slidesToShow)) { for (i = !0 === a.options.centerMode ? a.options.slidesToShow + 1 : a.options.slidesToShow, t = a.slideCount; t > a.slideCount - i; t -= 1) n = t - 1, e(a.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned"); for (t = 0; t < i + a.slideCount; t += 1) n = t, e(a.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned");
            a.$slideTrack.find(".slick-cloned").find("[id]").each(function() { e(this).attr("id", "") }) } }, t.prototype.interrupt = function(e) { e || this.autoPlay(), this.interrupted = e }, t.prototype.selectHandler = function(t) { var n = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            a = parseInt(i.attr("data-slick-index"));
        a || (a = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(a, !1, !0) : n.slideHandler(a) }, t.prototype.slideHandler = function(e, t, n) { var i, a, r, o, s, l = null,
            u = this; if (t = t || !1, !(!0 === u.animating && !0 === u.options.waitForAnimate || !0 === u.options.fade && u.currentSlide === e))
            if (!1 === t && u.asNavFor(e), i = e, l = u.getLeft(i), o = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? o : u.swipeLeft, !1 === u.options.infinite && !1 === u.options.centerMode && (e < 0 || e > u.getDotCount() * u.options.slidesToScroll)) !1 === u.options.fade && (i = u.currentSlide, !0 !== n ? u.animateSlide(o, function() { u.postSlide(i) }) : u.postSlide(i));
            else if (!1 === u.options.infinite && !0 === u.options.centerMode && (e < 0 || e > u.slideCount - u.options.slidesToScroll)) !1 === u.options.fade && (i = u.currentSlide, !0 !== n ? u.animateSlide(o, function() { u.postSlide(i) }) : u.postSlide(i));
        else { if (u.options.autoplay && clearInterval(u.autoPlayTimer), a = i < 0 ? u.slideCount % u.options.slidesToScroll != 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + i : i >= u.slideCount ? u.slideCount % u.options.slidesToScroll != 0 ? 0 : i - u.slideCount : i, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, a]), r = u.currentSlide, u.currentSlide = a, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (s = (s = u.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(u.currentSlide), u.updateDots(), u.updateArrows(), !0 === u.options.fade) return !0 !== n ? (u.fadeSlideOut(r), u.fadeSlide(a, function() { u.postSlide(a) })) : u.postSlide(a), void u.animateHeight();!0 !== n ? u.animateSlide(l, function() { u.postSlide(a) }) : u.postSlide(a) } }, t.prototype.startLoad = function() { var e = this;!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading") }, t.prototype.swipeDirection = function() { var e, t, n, i, a = this; return e = a.touchObject.startX - a.touchObject.curX, t = a.touchObject.startY - a.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === a.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === a.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === a.options.rtl ? "right" : "left" : !0 === a.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical" }, t.prototype.swipeEnd = function(e) { var t, n, i = this; if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1; if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1; if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) { switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0; break;
                case "right":
                case "up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1 } "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n])) } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {}) }, t.prototype.swipeHandler = function(e) { var t = this; if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e); break;
            case "move":
                t.swipeMove(e); break;
            case "end":
                t.swipeEnd(e) } }, t.prototype.swipeMove = function(e) { var t, n, i, a, r, o, s = this; return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || s.scrolling || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), o = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))), !s.options.verticalSwiping && !s.swiping && o > 4 ? (s.scrolling = !0, !1) : (!0 === s.options.verticalSwiping && (s.touchObject.swipeLength = o), n = s.swipeDirection(), void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && (s.swiping = !0, e.preventDefault()), a = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (a = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + i * a : s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * a, !0 === s.options.verticalSwiping && (s.swipeLeft = t + i * a), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft)))) }, t.prototype.swipeStart = function(e) { var t, n = this; if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0 }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() { var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit()) }, t.prototype.unload = function() { var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, t.prototype.unslick = function(e) { var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy() }, t.prototype.updateArrows = function() { var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, t.prototype.updateDots = function() { var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active")) }, t.prototype.visibility = function() { var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1) }, e.fn.slick = function() { var e, n, i = this,
            a = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            o = i.length; for (e = 0; e < o; e++)
            if ("object" == typeof a || void 0 === a ? i[e].slick = new t(i[e], a) : n = i[e].slick[a].apply(i[e].slick, r), void 0 !== n) return n; return i } });
//# sourceMappingURL=vendors.bundle.js.map
