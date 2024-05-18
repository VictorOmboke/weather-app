(() => {
  "use strict";
  var t = {
      208: (t, e, n) => {
        n.d(e, { A: () => c });
        var r = n(601),
          a = n.n(r),
          o = n(314),
          i = n.n(o)()(a());
        i.push([
          t.id,
          'html {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: "Roboto", sans-serif;\n  height: 100vh;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(to top right, #0a78e0, #ffffac);\n}\n\n.formContainer {\n  margin-top: 80px;\n}\n\n#form {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n#location {\n  border-style: none;\n  border-radius: 15px;\n  padding: 10px 20px;\n}\nlabel {\n  color: white;\n  font-size: 16px;\n}\n\nbutton {\n  height: 35px;\n  width: 35px;\n  border-style: none;\n  border-radius: 50%;\n  background-color: rgb(21, 144, 245);\n  color: white;\n  cursor: pointer;\n}\n\nbutton:active {\n  transform: scale(0.96);\n}\n\n.tempToggle {\n  margin: 12px 0 80px 0;\n}\n\n#today {\n  height: 350px;\n  width: 350px;\n  border-radius: 15px;\n  background: rgba(255, 255, 255, 0.11);\n  margin-bottom: 70px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.city {\n  color: white;\n  font-size: 25px;\n}\n\n.temp {\n  color: white;\n  font-size: 150px;\n  font-weight: 400;\n}\n\n.conditions {\n  color: white;\n  font-size: 25px;\n}\n\n.tempRange {\n  color: white;\n}\n\n#dayOneForecast,\n#dayTwoForecast,\n#dayThreeForecast {\n  border-radius: 15px;\n  background: rgba(255, 255, 255, 0.11);\n  height: 100px;\n  width: 700px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  margin-bottom: 20px;\n  padding: 0 12px;\n}\n\n.dayOneDate,\n.dayOneConditions,\n.dayOneTemp {\n  width: 175px;\n  font-size: 22px;\n  text-align: center;\n}\n\n.dayTwoDate,\n.dayTwoConditions,\n.dayTwoTemp {\n  width: 175px;\n  font-size: 22px;\n  text-align: center;\n}\n\n.dayThreeDate,\n.dayThreeConditions,\n.dayThreeTemp {\n  width: 175px;\n  font-size: 22px;\n  text-align: center;\n}\n',
          "",
        ]);
        const c = i;
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, a, o) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var d = [].concat(t[u]);
                (r && i[d[0]]) ||
                  (void 0 !== o &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = o)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  a &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = a))
                      : (d[4] = "".concat(a))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var o = {}, i = [], c = 0; c < t.length; c++) {
            var s = t[c],
              u = r.base ? s[0] + r.base : s[0],
              d = o[u] || 0,
              l = "".concat(u, " ").concat(d);
            o[u] = d + 1;
            var f = n(l),
              m = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) e[f].references++, e[f].updater(m);
            else {
              var h = a(m, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: l, updater: h, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function a(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, a) {
          var o = r((t = t || []), (a = a || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < o.length; i++) {
              var c = n(o[i]);
              e[c].references--;
            }
            for (var s = r(t, a), u = 0; u < o.length; u++) {
              var d = n(o[u]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            o = s;
          };
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var a = e[r];
    if (void 0 !== a) return a.exports;
    var o = (e[r] = { id: r, exports: {} });
    return t[r](o, o.exports, n), o.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      var t = n(72),
        e = n.n(t),
        r = n(825),
        a = n.n(r),
        o = n(659),
        i = n.n(o),
        c = n(56),
        s = n.n(c),
        u = n(540),
        d = n.n(u),
        l = n(113),
        f = n.n(l),
        m = n(208),
        h = {};
      (h.styleTagTransform = f()),
        (h.setAttributes = s()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = a()),
        (h.insertStyleElement = d()),
        e()(m.A, h),
        m.A && m.A.locals && m.A.locals;
      const g = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function p(t) {
        return (e = {}) => {
          const n = e.width ? String(e.width) : t.defaultWidth;
          return t.formats[n] || t.formats[t.defaultWidth];
        };
      }
      const y = {
          date: p({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: p({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: p({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        w = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function b(t) {
        return (e, n) => {
          let r;
          if (
            "formatting" === (n?.context ? String(n.context) : "standalone") &&
            t.formattingValues
          ) {
            const e = t.defaultFormattingWidth || t.defaultWidth,
              a = n?.width ? String(n.width) : e;
            r = t.formattingValues[a] || t.formattingValues[e];
          } else {
            const e = t.defaultWidth,
              a = n?.width ? String(n.width) : t.defaultWidth;
            r = t.values[a] || t.values[e];
          }
          return r[t.argumentCallback ? t.argumentCallback(e) : e];
        };
      }
      const x = {
        ordinalNumber: (t, e) => {
          const n = Number(t),
            r = n % 100;
          if (r > 20 || r < 10)
            switch (r % 10) {
              case 1:
                return n + "st";
              case 2:
                return n + "nd";
              case 3:
                return n + "rd";
            }
          return n + "th";
        },
        era: b({
          values: {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"],
          },
          defaultWidth: "wide",
        }),
        quarter: b({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
          },
          defaultWidth: "wide",
          argumentCallback: (t) => t - 1,
        }),
        month: b({
          values: {
            narrow: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            abbreviated: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            wide: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          defaultWidth: "wide",
        }),
        day: b({
          values: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: b({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      function v(t) {
        return (e, n = {}) => {
          const r = n.width,
            a =
              (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
            o = e.match(a);
          if (!o) return null;
          const i = o[0],
            c =
              (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
            s = Array.isArray(c)
              ? (function (t, e) {
                  for (let e = 0; e < t.length; e++) if (t[e].test(i)) return e;
                })(c)
              : (function (t, e) {
                  for (const e in t)
                    if (
                      Object.prototype.hasOwnProperty.call(t, e) &&
                      t[e].test(i)
                    )
                      return e;
                })(c);
          let u;
          return (
            (u = t.valueCallback ? t.valueCallback(s) : s),
            (u = n.valueCallback ? n.valueCallback(u) : u),
            { value: u, rest: e.slice(i.length) }
          );
        };
      }
      const M = {
        ordinalNumber:
          ((T = {
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: (t) => parseInt(t, 10),
          }),
          (t, e = {}) => {
            const n = t.match(T.matchPattern);
            if (!n) return null;
            const r = n[0],
              a = t.match(T.parsePattern);
            if (!a) return null;
            let o = T.valueCallback ? T.valueCallback(a[0]) : a[0];
            return (
              (o = e.valueCallback ? e.valueCallback(o) : o),
              { value: o, rest: t.slice(r.length) }
            );
          }),
        era: v({
          matchPatterns: {
            narrow: /^(b|a)/i,
            abbreviated:
              /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
            wide: /^(before christ|before common era|anno domini|common era)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: { any: [/^b/i, /^(a|c)/i] },
          defaultParseWidth: "any",
        }),
        quarter: v({
          matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^q[1234]/i,
            wide: /^[1234](th|st|nd|rd)? quarter/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
          defaultParseWidth: "any",
          valueCallback: (t) => t + 1,
        }),
        month: v({
          matchPatterns: {
            narrow: /^[jfmasond]/i,
            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: {
            narrow: [
              /^j/i,
              /^f/i,
              /^m/i,
              /^a/i,
              /^m/i,
              /^j/i,
              /^j/i,
              /^a/i,
              /^s/i,
              /^o/i,
              /^n/i,
              /^d/i,
            ],
            any: [
              /^ja/i,
              /^f/i,
              /^mar/i,
              /^ap/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^au/i,
              /^s/i,
              /^o/i,
              /^n/i,
              /^d/i,
            ],
          },
          defaultParseWidth: "any",
        }),
        day: v({
          matchPatterns: {
            narrow: /^[smtwf]/i,
            short: /^(su|mo|tu|we|th|fr|sa)/i,
            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: {
            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
          },
          defaultParseWidth: "any",
        }),
        dayPeriod: v({
          matchPatterns: {
            narrow:
              /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
          },
          defaultMatchWidth: "any",
          parsePatterns: {
            any: {
              am: /^a/i,
              pm: /^p/i,
              midnight: /^mi/i,
              noon: /^no/i,
              morning: /morning/i,
              afternoon: /afternoon/i,
              evening: /evening/i,
              night: /night/i,
            },
          },
          defaultParseWidth: "any",
        }),
      };
      var T;
      const C = {
        code: "en-US",
        formatDistance: (t, e, n) => {
          let r;
          const a = g[t];
          return (
            (r =
              "string" == typeof a
                ? a
                : 1 === e
                ? a.one
                : a.other.replace("{{count}}", e.toString())),
            n?.addSuffix
              ? n.comparison && n.comparison > 0
                ? "in " + r
                : r + " ago"
              : r
          );
        },
        formatLong: y,
        formatRelative: (t, e, n, r) => w[t],
        localize: x,
        match: M,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      let S = {};
      function D() {
        return S;
      }
      Math.pow(10, 8);
      const k = 6048e5,
        N = 864e5,
        P = 6e4,
        q = 36e5;
      function W(t) {
        const e = Object.prototype.toString.call(t);
        return t instanceof Date ||
          ("object" == typeof t && "[object Date]" === e)
          ? new t.constructor(+t)
          : "number" == typeof t ||
            "[object Number]" === e ||
            "string" == typeof t ||
            "[object String]" === e
          ? new Date(t)
          : new Date(NaN);
      }
      function E(t) {
        const e = W(t);
        return e.setHours(0, 0, 0, 0), e;
      }
      function O(t) {
        const e = W(t),
          n = new Date(
            Date.UTC(
              e.getFullYear(),
              e.getMonth(),
              e.getDate(),
              e.getHours(),
              e.getMinutes(),
              e.getSeconds(),
              e.getMilliseconds()
            )
          );
        return n.setUTCFullYear(e.getFullYear()), +t - +n;
      }
      function Y(t, e) {
        return t instanceof Date ? new t.constructor(e) : new Date(e);
      }
      function F(t) {
        const e = W(t);
        return (
          (function (t, e) {
            const n = E(t),
              r = E(e),
              a = +n - O(n),
              o = +r - O(r);
            return Math.round((a - o) / N);
          })(
            e,
            (function (t) {
              const e = W(t),
                n = Y(t, 0);
              return (
                n.setFullYear(e.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
              );
            })(e)
          ) + 1
        );
      }
      function j(t, e) {
        const n = D(),
          r =
            e?.weekStartsOn ??
            e?.locale?.options?.weekStartsOn ??
            n.weekStartsOn ??
            n.locale?.options?.weekStartsOn ??
            0,
          a = W(t),
          o = a.getDay(),
          i = (o < r ? 7 : 0) + o - r;
        return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
      }
      function $(t) {
        return j(t, { weekStartsOn: 1 });
      }
      function z(t) {
        const e = W(t),
          n = e.getFullYear(),
          r = Y(t, 0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        const a = $(r),
          o = Y(t, 0);
        o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
        const i = $(o);
        return e.getTime() >= a.getTime()
          ? n + 1
          : e.getTime() >= i.getTime()
          ? n
          : n - 1;
      }
      function H(t) {
        const e = W(t),
          n =
            +$(e) -
            +(function (t) {
              const e = z(t),
                n = Y(t, 0);
              return n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0), $(n);
            })(e);
        return Math.round(n / k) + 1;
      }
      function L(t, e) {
        const n = W(t),
          r = n.getFullYear(),
          a = D(),
          o =
            e?.firstWeekContainsDate ??
            e?.locale?.options?.firstWeekContainsDate ??
            a.firstWeekContainsDate ??
            a.locale?.options?.firstWeekContainsDate ??
            1,
          i = Y(t, 0);
        i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
        const c = j(i, e),
          s = Y(t, 0);
        s.setFullYear(r, 0, o), s.setHours(0, 0, 0, 0);
        const u = j(s, e);
        return n.getTime() >= c.getTime()
          ? r + 1
          : n.getTime() >= u.getTime()
          ? r
          : r - 1;
      }
      function A(t, e) {
        const n = W(t),
          r =
            +j(n, e) -
            +(function (t, e) {
              const n = D(),
                r =
                  e?.firstWeekContainsDate ??
                  e?.locale?.options?.firstWeekContainsDate ??
                  n.firstWeekContainsDate ??
                  n.locale?.options?.firstWeekContainsDate ??
                  1,
                a = L(t, e),
                o = Y(t, 0);
              return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), j(o, e);
            })(n, e);
        return Math.round(r / k) + 1;
      }
      function _(t, e) {
        return (t < 0 ? "-" : "") + Math.abs(t).toString().padStart(e, "0");
      }
      const U = {
          y(t, e) {
            const n = t.getFullYear(),
              r = n > 0 ? n : 1 - n;
            return _("yy" === e ? r % 100 : r, e.length);
          },
          M(t, e) {
            const n = t.getMonth();
            return "M" === e ? String(n + 1) : _(n + 1, 2);
          },
          d: (t, e) => _(t.getDate(), e.length),
          a(t, e) {
            const n = t.getHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
                return n.toUpperCase();
              case "aaa":
                return n;
              case "aaaaa":
                return n[0];
              default:
                return "am" === n ? "a.m." : "p.m.";
            }
          },
          h: (t, e) => _(t.getHours() % 12 || 12, e.length),
          H: (t, e) => _(t.getHours(), e.length),
          m: (t, e) => _(t.getMinutes(), e.length),
          s: (t, e) => _(t.getSeconds(), e.length),
          S(t, e) {
            const n = e.length,
              r = t.getMilliseconds();
            return _(Math.trunc(r * Math.pow(10, n - 3)), e.length);
          },
        },
        I = {
          G: function (t, e, n) {
            const r = t.getFullYear() > 0 ? 1 : 0;
            switch (e) {
              case "G":
              case "GG":
              case "GGG":
                return n.era(r, { width: "abbreviated" });
              case "GGGGG":
                return n.era(r, { width: "narrow" });
              default:
                return n.era(r, { width: "wide" });
            }
          },
          y: function (t, e, n) {
            if ("yo" === e) {
              const e = t.getFullYear(),
                r = e > 0 ? e : 1 - e;
              return n.ordinalNumber(r, { unit: "year" });
            }
            return U.y(t, e);
          },
          Y: function (t, e, n, r) {
            const a = L(t, r),
              o = a > 0 ? a : 1 - a;
            return "YY" === e
              ? _(o % 100, 2)
              : "Yo" === e
              ? n.ordinalNumber(o, { unit: "year" })
              : _(o, e.length);
          },
          R: function (t, e) {
            return _(z(t), e.length);
          },
          u: function (t, e) {
            return _(t.getFullYear(), e.length);
          },
          Q: function (t, e, n) {
            const r = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
              case "Q":
                return String(r);
              case "QQ":
                return _(r, 2);
              case "Qo":
                return n.ordinalNumber(r, { unit: "quarter" });
              case "QQQ":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return n.quarter(r, { width: "narrow", context: "formatting" });
              default:
                return n.quarter(r, { width: "wide", context: "formatting" });
            }
          },
          q: function (t, e, n) {
            const r = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
              case "q":
                return String(r);
              case "qq":
                return _(r, 2);
              case "qo":
                return n.ordinalNumber(r, { unit: "quarter" });
              case "qqq":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return n.quarter(r, { width: "narrow", context: "standalone" });
              default:
                return n.quarter(r, { width: "wide", context: "standalone" });
            }
          },
          M: function (t, e, n) {
            const r = t.getMonth();
            switch (e) {
              case "M":
              case "MM":
                return U.M(t, e);
              case "Mo":
                return n.ordinalNumber(r + 1, { unit: "month" });
              case "MMM":
                return n.month(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return n.month(r, { width: "narrow", context: "formatting" });
              default:
                return n.month(r, { width: "wide", context: "formatting" });
            }
          },
          L: function (t, e, n) {
            const r = t.getMonth();
            switch (e) {
              case "L":
                return String(r + 1);
              case "LL":
                return _(r + 1, 2);
              case "Lo":
                return n.ordinalNumber(r + 1, { unit: "month" });
              case "LLL":
                return n.month(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return n.month(r, { width: "narrow", context: "standalone" });
              default:
                return n.month(r, { width: "wide", context: "standalone" });
            }
          },
          w: function (t, e, n, r) {
            const a = A(t, r);
            return "wo" === e
              ? n.ordinalNumber(a, { unit: "week" })
              : _(a, e.length);
          },
          I: function (t, e, n) {
            const r = H(t);
            return "Io" === e
              ? n.ordinalNumber(r, { unit: "week" })
              : _(r, e.length);
          },
          d: function (t, e, n) {
            return "do" === e
              ? n.ordinalNumber(t.getDate(), { unit: "date" })
              : U.d(t, e);
          },
          D: function (t, e, n) {
            const r = F(t);
            return "Do" === e
              ? n.ordinalNumber(r, { unit: "dayOfYear" })
              : _(r, e.length);
          },
          E: function (t, e, n) {
            const r = t.getDay();
            switch (e) {
              case "E":
              case "EE":
              case "EEE":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return n.day(r, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return n.day(r, { width: "short", context: "formatting" });
              default:
                return n.day(r, { width: "wide", context: "formatting" });
            }
          },
          e: function (t, e, n, r) {
            const a = t.getDay(),
              o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "e":
                return String(o);
              case "ee":
                return _(o, 2);
              case "eo":
                return n.ordinalNumber(o, { unit: "day" });
              case "eee":
                return n.day(a, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return n.day(a, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return n.day(a, { width: "short", context: "formatting" });
              default:
                return n.day(a, { width: "wide", context: "formatting" });
            }
          },
          c: function (t, e, n, r) {
            const a = t.getDay(),
              o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "c":
                return String(o);
              case "cc":
                return _(o, e.length);
              case "co":
                return n.ordinalNumber(o, { unit: "day" });
              case "ccc":
                return n.day(a, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return n.day(a, { width: "narrow", context: "standalone" });
              case "cccccc":
                return n.day(a, { width: "short", context: "standalone" });
              default:
                return n.day(a, { width: "wide", context: "standalone" });
            }
          },
          i: function (t, e, n) {
            const r = t.getDay(),
              a = 0 === r ? 7 : r;
            switch (e) {
              case "i":
                return String(a);
              case "ii":
                return _(a, e.length);
              case "io":
                return n.ordinalNumber(a, { unit: "day" });
              case "iii":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return n.day(r, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return n.day(r, { width: "short", context: "formatting" });
              default:
                return n.day(r, { width: "wide", context: "formatting" });
            }
          },
          a: function (t, e, n) {
            const r = t.getHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return n
                  .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "aaaaa":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          b: function (t, e, n) {
            const r = t.getHours();
            let a;
            switch (
              ((a =
                12 === r
                  ? "noon"
                  : 0 === r
                  ? "midnight"
                  : r / 12 >= 1
                  ? "pm"
                  : "am"),
              e)
            ) {
              case "b":
              case "bb":
                return n.dayPeriod(a, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return n
                  .dayPeriod(a, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "bbbbb":
                return n.dayPeriod(a, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(a, { width: "wide", context: "formatting" });
            }
          },
          B: function (t, e, n) {
            const r = t.getHours();
            let a;
            switch (
              ((a =
                r >= 17
                  ? "evening"
                  : r >= 12
                  ? "afternoon"
                  : r >= 4
                  ? "morning"
                  : "night"),
              e)
            ) {
              case "B":
              case "BB":
              case "BBB":
                return n.dayPeriod(a, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return n.dayPeriod(a, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(a, { width: "wide", context: "formatting" });
            }
          },
          h: function (t, e, n) {
            if ("ho" === e) {
              let e = t.getHours() % 12;
              return 0 === e && (e = 12), n.ordinalNumber(e, { unit: "hour" });
            }
            return U.h(t, e);
          },
          H: function (t, e, n) {
            return "Ho" === e
              ? n.ordinalNumber(t.getHours(), { unit: "hour" })
              : U.H(t, e);
          },
          K: function (t, e, n) {
            const r = t.getHours() % 12;
            return "Ko" === e
              ? n.ordinalNumber(r, { unit: "hour" })
              : _(r, e.length);
          },
          k: function (t, e, n) {
            let r = t.getHours();
            return (
              0 === r && (r = 24),
              "ko" === e ? n.ordinalNumber(r, { unit: "hour" }) : _(r, e.length)
            );
          },
          m: function (t, e, n) {
            return "mo" === e
              ? n.ordinalNumber(t.getMinutes(), { unit: "minute" })
              : U.m(t, e);
          },
          s: function (t, e, n) {
            return "so" === e
              ? n.ordinalNumber(t.getSeconds(), { unit: "second" })
              : U.s(t, e);
          },
          S: function (t, e) {
            return U.S(t, e);
          },
          X: function (t, e, n) {
            const r = t.getTimezoneOffset();
            if (0 === r) return "Z";
            switch (e) {
              case "X":
                return B(r);
              case "XXXX":
              case "XX":
                return G(r);
              default:
                return G(r, ":");
            }
          },
          x: function (t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "x":
                return B(r);
              case "xxxx":
              case "xx":
                return G(r);
              default:
                return G(r, ":");
            }
          },
          O: function (t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + Q(r, ":");
              default:
                return "GMT" + G(r, ":");
            }
          },
          z: function (t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + Q(r, ":");
              default:
                return "GMT" + G(r, ":");
            }
          },
          t: function (t, e, n) {
            return _(Math.trunc(t.getTime() / 1e3), e.length);
          },
          T: function (t, e, n) {
            return _(t.getTime(), e.length);
          },
        };
      function Q(t, e = "") {
        const n = t > 0 ? "-" : "+",
          r = Math.abs(t),
          a = Math.trunc(r / 60),
          o = r % 60;
        return 0 === o ? n + String(a) : n + String(a) + e + _(o, 2);
      }
      function B(t, e) {
        return t % 60 == 0
          ? (t > 0 ? "-" : "+") + _(Math.abs(t) / 60, 2)
          : G(t, e);
      }
      function G(t, e = "") {
        const n = t > 0 ? "-" : "+",
          r = Math.abs(t);
        return n + _(Math.trunc(r / 60), 2) + e + _(r % 60, 2);
      }
      const X = (t, e) => {
          switch (t) {
            case "P":
              return e.date({ width: "short" });
            case "PP":
              return e.date({ width: "medium" });
            case "PPP":
              return e.date({ width: "long" });
            default:
              return e.date({ width: "full" });
          }
        },
        R = (t, e) => {
          switch (t) {
            case "p":
              return e.time({ width: "short" });
            case "pp":
              return e.time({ width: "medium" });
            case "ppp":
              return e.time({ width: "long" });
            default:
              return e.time({ width: "full" });
          }
        },
        J = {
          p: R,
          P: (t, e) => {
            const n = t.match(/(P+)(p+)?/) || [],
              r = n[1],
              a = n[2];
            if (!a) return X(t, e);
            let o;
            switch (r) {
              case "P":
                o = e.dateTime({ width: "short" });
                break;
              case "PP":
                o = e.dateTime({ width: "medium" });
                break;
              case "PPP":
                o = e.dateTime({ width: "long" });
                break;
              default:
                o = e.dateTime({ width: "full" });
            }
            return o.replace("{{date}}", X(r, e)).replace("{{time}}", R(a, e));
          },
        },
        Z = /^D+$/,
        V = /^Y+$/,
        K = ["D", "DD", "YY", "YYYY"];
      function tt(t) {
        if (
          !((e = t),
          e instanceof Date ||
            ("object" == typeof e &&
              "[object Date]" === Object.prototype.toString.call(e)) ||
            "number" == typeof t)
        )
          return !1;
        var e;
        const n = W(t);
        return !isNaN(Number(n));
      }
      const et = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        nt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        rt = /^'([^]*?)'?$/,
        at = /''/g,
        ot = /[a-zA-Z]/;
      function it(t, e, n) {
        const r = D(),
          a = n?.locale ?? r.locale ?? C,
          o =
            n?.firstWeekContainsDate ??
            n?.locale?.options?.firstWeekContainsDate ??
            r.firstWeekContainsDate ??
            r.locale?.options?.firstWeekContainsDate ??
            1,
          i =
            n?.weekStartsOn ??
            n?.locale?.options?.weekStartsOn ??
            r.weekStartsOn ??
            r.locale?.options?.weekStartsOn ??
            0,
          c = W(t);
        if (!tt(c)) throw new RangeError("Invalid time value");
        let s = e
          .match(nt)
          .map((t) => {
            const e = t[0];
            return "p" === e || "P" === e ? (0, J[e])(t, a.formatLong) : t;
          })
          .join("")
          .match(et)
          .map((t) => {
            if ("''" === t) return { isToken: !1, value: "'" };
            const e = t[0];
            if ("'" === e) return { isToken: !1, value: ct(t) };
            if (I[e]) return { isToken: !0, value: t };
            if (e.match(ot))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  e +
                  "`"
              );
            return { isToken: !1, value: t };
          });
        a.localize.preprocessor && (s = a.localize.preprocessor(c, s));
        const u = { firstWeekContainsDate: o, weekStartsOn: i, locale: a };
        return s
          .map((r) => {
            if (!r.isToken) return r.value;
            const o = r.value;
            return (
              ((!n?.useAdditionalWeekYearTokens &&
                (function (t) {
                  return V.test(t);
                })(o)) ||
                (!n?.useAdditionalDayOfYearTokens &&
                  (function (t) {
                    return Z.test(t);
                  })(o))) &&
                (function (t, e, n) {
                  const r = (function (t, e, n) {
                    const r = "Y" === t[0] ? "years" : "days of the month";
                    return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
                  })(t, e, n);
                  if ((console.warn(r), K.includes(t))) throw new RangeError(r);
                })(o, e, String(t)),
              (0, I[o[0]])(c, o, a.localize, u)
            );
          })
          .join("");
      }
      function ct(t) {
        const e = t.match(rt);
        return e ? e[1].replace(at, "'") : t;
      }
      function st(t, e) {
        const n = e?.additionalDigits ?? 2,
          r = (function (t) {
            const e = {},
              n = t.split(ut.dateTimeDelimiter);
            let r;
            if (n.length > 2) return e;
            if (
              (/:/.test(n[0])
                ? (r = n[0])
                : ((e.date = n[0]),
                  (r = n[1]),
                  ut.timeZoneDelimiter.test(e.date) &&
                    ((e.date = t.split(ut.timeZoneDelimiter)[0]),
                    (r = t.substr(e.date.length, t.length)))),
              r)
            ) {
              const t = ut.timezone.exec(r);
              t
                ? ((e.time = r.replace(t[1], "")), (e.timezone = t[1]))
                : (e.time = r);
            }
            return e;
          })(t);
        let a;
        if (r.date) {
          const t = (function (t, e) {
            const n = new RegExp(
                "^(?:(\\d{4}|[+-]\\d{" +
                  (4 + e) +
                  "})|(\\d{2}|[+-]\\d{" +
                  (2 + e) +
                  "})$)"
              ),
              r = t.match(n);
            if (!r) return { year: NaN, restDateString: "" };
            const a = r[1] ? parseInt(r[1]) : null,
              o = r[2] ? parseInt(r[2]) : null;
            return {
              year: null === o ? a : 100 * o,
              restDateString: t.slice((r[1] || r[2]).length),
            };
          })(r.date, n);
          a = (function (t, e) {
            if (null === e) return new Date(NaN);
            const n = t.match(dt);
            if (!n) return new Date(NaN);
            const r = !!n[4],
              a = mt(n[1]),
              o = mt(n[2]) - 1,
              i = mt(n[3]),
              c = mt(n[4]),
              s = mt(n[5]) - 1;
            if (r)
              return (function (t, e, n) {
                return e >= 1 && e <= 53 && n >= 0 && n <= 6;
              })(0, c, s)
                ? (function (t, e, n) {
                    const r = new Date(0);
                    r.setUTCFullYear(t, 0, 4);
                    const a = 7 * (e - 1) + n + 1 - (r.getUTCDay() || 7);
                    return r.setUTCDate(r.getUTCDate() + a), r;
                  })(e, c, s)
                : new Date(NaN);
            {
              const t = new Date(0);
              return (function (t, e, n) {
                return (
                  e >= 0 &&
                  e <= 11 &&
                  n >= 1 &&
                  n <= (gt[e] || (pt(t) ? 29 : 28))
                );
              })(e, o, i) &&
                (function (t, e) {
                  return e >= 1 && e <= (pt(t) ? 366 : 365);
                })(e, a)
                ? (t.setUTCFullYear(e, o, Math.max(a, i)), t)
                : new Date(NaN);
            }
          })(t.restDateString, t.year);
        }
        if (!a || isNaN(a.getTime())) return new Date(NaN);
        const o = a.getTime();
        let i,
          c = 0;
        if (
          r.time &&
          ((c = (function (t) {
            const e = t.match(lt);
            if (!e) return NaN;
            const n = ht(e[1]),
              r = ht(e[2]),
              a = ht(e[3]);
            return (function (t, e, n) {
              return 24 === t
                ? 0 === e && 0 === n
                : n >= 0 && n < 60 && e >= 0 && e < 60 && t >= 0 && t < 25;
            })(n, r, a)
              ? n * q + r * P + 1e3 * a
              : NaN;
          })(r.time)),
          isNaN(c))
        )
          return new Date(NaN);
        if (!r.timezone) {
          const t = new Date(o + c),
            e = new Date(0);
          return (
            e.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
            e.setHours(
              t.getUTCHours(),
              t.getUTCMinutes(),
              t.getUTCSeconds(),
              t.getUTCMilliseconds()
            ),
            e
          );
        }
        return (
          (i = (function (t) {
            if ("Z" === t) return 0;
            const e = t.match(ft);
            if (!e) return 0;
            const n = "+" === e[1] ? -1 : 1,
              r = parseInt(e[2]),
              a = (e[3] && parseInt(e[3])) || 0;
            return (function (t, e) {
              return e >= 0 && e <= 59;
            })(0, a)
              ? n * (r * q + a * P)
              : NaN;
          })(r.timezone)),
          isNaN(i) ? new Date(NaN) : new Date(o + c + i)
        );
      }
      const ut = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/,
        },
        dt = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        lt =
          /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        ft = /^([+-])(\d{2})(?::?(\d{2}))?$/;
      function mt(t) {
        return t ? parseInt(t) : 1;
      }
      function ht(t) {
        return (t && parseFloat(t.replace(",", "."))) || 0;
      }
      const gt = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function pt(t) {
        return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
      }
      function yt(t) {
        document.querySelector(".city").textContent = t.location.name;
      }
      function wt(t) {
        document.querySelector(".temp").textContent = `${Math.round(
          t.current.temp_f
        )}°`;
      }
      function bt(t) {
        document.querySelector(".temp").textContent = `${Math.round(
          t.current.temp_c
        )}°`;
      }
      function xt(t) {
        document.querySelector(".conditions").textContent =
          t.current.condition.text;
      }
      function vt(t) {
        document.querySelector(".tempRange").textContent = `L: ${Math.round(
          t.forecast.forecastday[0].day.mintemp_f
        )}° H: ${Math.round(t.forecast.forecastday[0].day.maxtemp_f)}°`;
      }
      function Mt(t) {
        document.querySelector(".tempRange").textContent = `L: ${Math.round(
          t.forecast.forecastday[0].day.mintemp_c
        )}° H: ${Math.round(t.forecast.forecastday[0].day.maxtemp_c)}°`;
      }
      function Tt(t) {
        document.querySelector(".dayOneConditions").textContent =
          t.forecast.forecastday[0].day.condition.text;
      }
      function Ct(t) {
        document.querySelector(".dayOneTemp").textContent = `${Math.round(
          t.forecast.forecastday[0].day.mintemp_f
        )}° - ${Math.round(t.forecast.forecastday[0].day.maxtemp_f)}°`;
      }
      function St(t) {
        document.querySelector(".dayOneTemp").textContent = `${Math.round(
          t.forecast.forecastday[0].day.mintemp_c
        )}° - ${Math.round(t.forecast.forecastday[0].day.maxtemp_c)}°`;
      }
      function Dt(t) {
        const e = document.querySelector(".dayTwoDate"),
          n = it(st(t.forecast.forecastday[1].date), "EEEE");
        e.textContent = n;
      }
      function kt(t) {
        document.querySelector(".dayTwoConditions").textContent =
          t.forecast.forecastday[1].day.condition.text;
      }
      function Nt(t) {
        document.querySelector(".dayTwoTemp").textContent = `${Math.round(
          t.forecast.forecastday[1].day.mintemp_f
        )}° - ${Math.round(t.forecast.forecastday[1].day.maxtemp_f)}°`;
      }
      function Pt(t) {
        document.querySelector(".dayTwoTemp").textContent = `${Math.round(
          t.forecast.forecastday[1].day.mintemp_c
        )}° - ${Math.round(t.forecast.forecastday[1].day.maxtemp_c)}°`;
      }
      function qt(t) {
        const e = document.querySelector(".dayThreeDate"),
          n = it(st(t.forecast.forecastday[2].date), "EEEE");
        e.textContent = n;
      }
      function Wt(t) {
        document.querySelector(".dayThreeConditions").textContent =
          t.forecast.forecastday[2].day.condition.text;
      }
      function Et(t) {
        document.querySelector(".dayThreeTemp").textContent = `${Math.round(
          t.forecast.forecastday[2].day.mintemp_f
        )}° - ${Math.round(t.forecast.forecastday[2].day.maxtemp_f)}°`;
      }
      function Ot(t) {
        document.querySelector(".dayThreeTemp").textContent = `${Math.round(
          t.forecast.forecastday[2].day.mintemp_c
        )}° - ${Math.round(t.forecast.forecastday[2].day.maxtemp_c)}°`;
      }
      document.getElementById("form").addEventListener("submit", (t) => {
        t.preventDefault(),
          (async function () {
            try {
              const t = document.getElementById("location").value.trim(),
                e = await (async function (t) {
                  try {
                    const e = (
                      await fetch(
                        `https://api.weatherapi.com/v1/current.json?key=71778c6486914d6188a01735242704&q=${t}`,
                        { mode: "cors" }
                      )
                    ).json();
                    return await e;
                  } catch (t) {
                    throw (console.error("Error fetching data:", t), t);
                  }
                })(t),
                n = await (async function (t) {
                  try {
                    const e = (
                      await fetch(
                        `https://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${t}&days=3`,
                        { mode: "cors" }
                      )
                    ).json();
                    return await e;
                  } catch (t) {
                    throw (console.error("Error fetching data:", t), t);
                  }
                })(t),
                r = document.querySelector(".tempToggle");
              yt(e),
                wt(e),
                xt(e),
                vt(n),
                Tt(n),
                Ct(n),
                Dt(n),
                kt(n),
                Nt(n),
                qt(n),
                Wt(n),
                Et(n),
                r.addEventListener("click", () => {
                  "°C" !== r.textContent
                    ? (bt(e), Mt(n), St(n), Pt(n), Ot(n))
                    : (wt(e), vt(n), Ct(n), Nt(n), Et(n));
                });
            } catch (t) {
              console.error("Error displaying data:", t);
            }
          })();
      }),
        (function () {
          const t = document.querySelector(".tempToggle");
          let e = !1;
          t.addEventListener("click", () => {
            (t.textContent = e ? "°C" : "°F"), (e = !e);
          });
        })(),
        (async function () {
          const t = document.querySelector(".tempToggle"),
            e = await (async function (t) {
              try {
                const t = (
                  await fetch(
                    "https://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=Los Angeles&days=3",
                    { mode: "cors" }
                  )
                ).json();
                return await t;
              } catch (t) {
                throw (console.error("Error fetching data:", t), t);
              }
            })();
          yt(e),
            wt(e),
            xt(e),
            vt(e),
            Tt(e),
            Ct(e),
            Dt(e),
            kt(e),
            Nt(e),
            qt(e),
            Wt(e),
            Et(e),
            t.addEventListener("click", () => {
              "°C" !== t.textContent
                ? (bt(e), Mt(e), St(e), Pt(e), Ot(e))
                : (wt(e), vt(e), Ct(e), Nt(e), Et(e));
            });
        })();
    })();
})();
