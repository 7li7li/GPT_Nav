var we = Object.defineProperty,
	Fe = Object.defineProperties;
var Ce = Object.getOwnPropertyDescriptors;
var K = Object.getOwnPropertySymbols;
var ge = Object.prototype.hasOwnProperty,
	fe = Object.prototype.propertyIsEnumerable;
var Y = (o, n, s) => n in o ? we(o, n, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: s
	}) : o[n] = s,
	C = (o, n) => {
		for (var s in n || (n = {})) ge.call(n, s) && Y(o, s, n[s]);
		if (K)
			for (var s of K(n)) fe.call(n, s) && Y(o, s, n[s]);
		return o
	},
	v = (o, n) => Fe(o, Ce(n));
import {
	r as m,
	o as ve,
	j as e,
	a as c,
	R as I,
	A as V,
	b as Ae,
	D as ye,
	C as be,
	S as De,
	F as Q,
	c as O,
	d as G,
	P as Z,
	e as J,
	n as j,
	M as Ee,
	f as ke,
	g as Be,
	h as Ne,
	i as Le
} from "./vendor.js";
const $e = function() {
	const n = document.createElement("link")
		.relList;
	if (n && n.supports && n.supports("modulepreload")) return;
	for (const u of document.querySelectorAll('link[rel="modulepreload"]')) i(u);
	new MutationObserver(u => {
			for (const t of u)
				if (t.type === "childList")
					for (const l of t.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && i(l)
		})
		.observe(document, {
			childList: !0,
			subtree: !0
		});

	function s(u) {
		const t = {};
		return u.integrity && (t.integrity = u.integrity), u.referrerpolicy && (t.referrerPolicy = u.referrerpolicy), u.crossorigin === "use-credentials" ? t.credentials = "include" : u.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t
	}

	function i(u) {
		if (u.ep) return;
		u.ep = !0;
		const t = s(u);
		fetch(u.href, t)
	}
};
$e();
const U = o => {
		try {
			let n = window.localStorage.getItem(o);
			return JSON.parse(n)
		} catch (n) {
			console.error(n)
		}
	},
	B = (o, n) => {
		try {
			let s = JSON.stringify(n);
			window.localStorage.setItem(o, s)
		} catch (s) {
			console.error(s)
		}
	},
	Se = () => {
		try {
			window.localStorage.clear()
		} catch (o) {
			console.error(o)
		}
	},
	M = (o, n) => {
		const [s, i] = m.exports.useState(() => {
			try {
				const u = U(o);
				return u || (B(o, n), n)
			} catch (u) {
				return n
			}
		});
		return m.exports.useEffect(() => {
			B(o, s)
		}, [s]), [s, i]
	},
	P = [{
		name: "\u805A\u5408\u7C7B",
		urls: [{
			title: "\u767E\u5EA6",
			describtion: "\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",
			url: "https://www.baidu.com/s?wd=$keyword$"
		}, {
			title: "Bing",
			describtion: "\u5FAE\u8F6F\u5FC5\u5E94\uFF0C\u7EAF\u51C0\u597D\u7528",
			url: "https://cn.bing.com/search?q=$keyword$"
		}, {
			title: "\u641C\u72D7",
			describtion: "\u641C\u72D7\u641C\u7D22\uFF0C\u503C\u5F97\u62E5\u6709",
			url: "https://www.sogou.com/web?query=$keyword$"
		}, {
			title: "F\u641c",
			describtion: "F\u641c\uff0c\u805a\u5408\u641c\u7d22",
			url: "https://fsoufsou.com/search?q=$keyword$"
		}, {
			title: "\u8C37\u6B4C",
			describtion: "\u4E16\u754C\u4E0A\u6700\u5927\u7684\u641C\u7D22\u5F15\u64CE",
			url: "https://www.google.com/search?query=$keyword$"
		}, {
			title: "\u5934\u6761",
			describtion: "\u4F60\u5173\u5FC3\u7684\uFF0C\u624D\u662F\u5934\u6761",
			url: "  https://so.toutiao.com/search?dvpf=pc&source=input&keyword=$keyword$"
		}]
	}, {
		name: "\u5DE5\u5177\u7C7B",
		urls: [{
			title: "Shodan",
			describtion: "\u8BF7\u8F93\u5165\u67E5\u8BE2\u5173\u952E\u8BCD",
			url: "https://www.shodan.io/search?query=$keyword$"
		}, {
			title: "Censys",
			describtion: "\u8BF7\u8F93\u5165\u57DF\u540D",
			url: "https://censys.io/domain?q=$keyword$"
		}, {
			title: "Ping",
			describtion: "\u8BF7\u8F93\u5165\u57DF\u540D\u6216ip(\u7AD9\u957F\u4E4B\u5BB6ping\u5DE5\u5177)",
			url: "http://ping.chinaz.com/$keyword$"
		}, {
			title: "JsDelivr",
			describtion: "\u8BF7\u8F93\u5165js\u5305\u540D(\u516C\u5171cdn\u5E93)",
			url: "https://www.jsdelivr.com/?query=$keyword$"
		}, {
			title: "Github",
			describtion: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD(\u5F00\u6E90\u5E93)",
			url: "https://github.com/search?q=$keyword$"
		}, {
			title: "CVE",
			describtion: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD(\u6765\u81EA\u963F\u91CC\u4E91\u6F0F\u6D1E\u5E93)",
			url: "https://avd.aliyun.com/search?q=$keyword$"
		}]
	}, {
		name: "\u793E\u533A\u7C7B",
		urls: [{
			title: "\u5929\u6DAF",
			describtion: "\u641C\u904D\u5929\u6DAF\uFF0C\u627E\u5230\u7B54\u6848",
			url: "https://search.tianya.cn/bbs?q=$keyword$"
		}, {
			title: "\u77E5\u4E4E",
			describtion: "\u6709\u95EE\u9898\uFF0C\u5C31\u4F1A\u6709\u7B54\u6848",
			url: "https://www.zhihu.com/search?type=content&q=$keyword$"
		}, {
			title: "\u8C46\u74E3",
			describtion: "\u8C46\u74E3\u91CC\u7684\u751F\u6D3B",
			url: "https://www.douban.com/search?q=$keyword$"
		}, {
			title: "\u5FAE\u535A",
			describtion: "\u6253\u635E\u5168\u7F51\u52A8\u6001",
			url: "https://s.weibo.com/weibo/$keyword$"
		}, {
			title: "Quora",
			describtion: "Quora\u793E\u533A\u641C\u7D22",
			url: "https://www.quora.com/search?q=$keyword$"
		}, {
			title: "Reddit",
			describtion: "Reddit\u793E\u533A\u641C\u7D22",
			url: "https://www.reddit.com/search/?q=$keyword$"
		}]
	}, {
		name: "\u751F\u6D3B\u7C7B",
		urls: [{
			title: "\u6DD8\u5B9D",
			describtion: "\u5728\u6DD8\u5B9D\u4E0A\u641C\u7D22\u5546\u54C1",
			url: "https://s.taobao.com/search?q=$keyword$"
		}, {
			title: "\u4EAC\u4E1C",
			describtion: "\u5728\u4EAC\u4E1C\u4E0A\u641C\u7D22\u5546\u54C1",
			url: "https://search.jd.com/Search?keyword=$keyword$"
		}, {
			title: "\u5FEB\u9012",
			describtion: "\u8F93\u5165\u8FD0\u5355\u53F7\uFF0C\u5728\u5FEB\u9012100\u67E5\u7269\u6D41",
			url: "https://m.kuaidi100.com/result.jsp?nu=$keyword$"
		}, {
			title: "\u5730\u56FE",
			describtion: "\u5728\u9AD8\u5FB7\u5730\u56FE\u641C\u7D22\u5730\u7406\u4F4D\u7F6E",
			url: "  https://ditu.amap.com/search?query=$keyword$"
		}, {
			title: "\u9999\u54C8",
			describtion: "\u5728\u9999\u54C8\u641C\u83DC\u8C31",
			url: "https://www.xiangha.com/so/?q=caipu&s=$keyword$"
		}, {
			title: "\u4E0B\u53A8\u623F",
			describtion: "\u5728\u4E0B\u53A8\u623F\u641C\u7D22\u83DC\u8C31",
			url: "https://www.xiachufang.com/search/?keyword=$keyword$"
		}]
	}, {
		name: "\u5F71\u89C6\u7C7B",
		urls: [{
			title: "bilibili",
			describtion: "\u9AD8\u8D28\u91CF\u5185\u5BB9\u7684\u805A\u96C6\u5730",
			url: "https://search.bilibili.com/all?keyword=$keyword$"
		}, {
			title: "\u7231\u5947\u827A",
			describtion: "\u56FD\u5185\u8001\u724C\u5F71\u89C6\u7F51\u7AD9",
			url: "https://so.iqiyi.com/so/q_$keyword$"
		}, {
			title: "\u4F18\u9177",
			describtion: "\u8FD9\u4E16\u754C\u5F88\u9177",
			url: "https://so.youku.com/search_video/q_$keyword$"
		}, {
			title: "\u6296\u97F3",
			describtion: "\u8BB0\u5F55\u7F8E\u597D\u751F\u6D3B",
			url: "https://www.douyin.com/search/$keyword$"
		}, {
			title: "\u897F\u74DC",
			describtion: "\u70B9\u4EAE\u5BF9\u751F\u6D3B\u7684\u597D\u5947\u5FC3",
			url: "https://www.ixigua.com/search/$keyword$"
		}, {
			title: "Youtube",
			describtion: "\u5168\u7403up\u4E3B\u7684\u805A\u96C6\u5730",
			url: "  https://www.youtube.com/results?search_query=$keyword$"
		}]
	}, {
		name: "\u97F3\u4E50\u7C7B",
		urls: [{
			title: "\u7F51\u6613\u4E91",
			describtion: "\u5728\u7F51\u6613\u4E91\u97F3\u4E50\u5B98\u7F51\u641C\u7D22",
			url: "https://music.163.com/#/search/m/?s=$keyword$"
		}, {
			title: "QQ",
			describtion: "\u5728QQ\u97F3\u4E50\u5B98\u7F51\u641C\u7D22",
			url: "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=$keyword$"
		}, {
			title: "\u9177\u6211",
			describtion: "\u5728\u9177\u6211\u97F3\u4E50\u5B98\u7F51\u641C\u7D22",
			url: "http://www.kuwo.cn/search/list?type=all&key=$keyword$"
		}, {
			title: "\u9177\u72D7",
			describtion: "\u5728\u9177\u72D7\u97F3\u4E50\u5B98\u7F51\u641C\u7D22",
			url: "https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=$keyword$"
		}, {
			title: "5sing",
			describtion: "\u4E2D\u56FD\u539F\u521B\u97F3\u4E50\u57FA\u5730",
			url: "http://search.5sing.kugou.com/?keyword=$keyword$"
		}, {
			title: "\u5343\u5343",
			describtion: "\u5728\u5343\u5343\u97F3\u4E50\u5B98\u7F51\u641C\u7D22",
			url: "  https://music.taihe.com/search?word=$keyword$"
		}]
	}, {
		name: "\u7f16\u7a0b\u7c7b",
			urls: [{
				title: "Devv",
				describtion: "search on devv",
				url: "https://devv.ai/zh/search/$keyword$?lang=zh"
			}, {
				title: "Phind",
				describtion: "search on phind",
				url: "https://www.phind.com/search?q=$keyword$"
			}]
		}
		//, {
		//name: "\u81EA\u5B9A\u4E49",
		//urls: [{
		//	title: "stack",
		//	describtion: "search on stackoverflow",
		//	url: "https://stackoverflow.com/search?q=$keyword$"
		//}, {
		//	title: "wolfram",
		//	describtion: "search on wolframalpha",
		//	url: "https://www.wolframalpha.com/input/?i=$keyword$"
		//}]
		//}
	],
	xe = {
		title: "\u767E\u5EA6",
		describtion: "\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",
		url: "https://www.baidu.com/s?wd=$keyword$"
	};
const Te = o => {
	const {
		keyword: n,
		setKeyword: s
	} = o, [i, u] = m.exports.useState([]);
	return m.exports.useEffect(() => {
		ve(`https://suggestion.baidu.com/su?ie=utf-8&wd=${n}&p=3&cb=bdsug`, {
				callbackQuery: "cb"
			})
			.then(t => {
				console.log(t), u(t.s)
			})
	}, [n]), e("section", {
		className: "SearchSuggestion fade-up",
		children: e("ul", {
			children: i.map((t, l) => c("li", {
				className: "SearchSuggestion-item",
				onClick: () => s(t),
				children: [l + 1, "\u3001", t]
			}, l))
		})
	})
};
const Me = (o, n) => {
		let s = document.createElement("div");
		document.body.appendChild(s);
		const i = t => {
				try {
					let l = U("searchList");
					l || (l = P), console.log(l), l[o].urls.push(t), B("searchList", l), n(l)
				} catch (l) {
					console.log(l)
				}
				document.body.removeChild(s)
			},
			u = () => {
				document.body.removeChild(s)
			};
		I.render(e(Ue, {
			onOK: i,
			onCancle: u
		}), s)
	},
	Ie = (o, n, s, i) => {
		let u = document.createElement("div");
		document.body.appendChild(u);
		const t = r => {
				try {
					let a = U("searchList");
					a || (a = P), a[n].urls[s] = r, B("searchList", a), i(a)
				} catch (a) {
					console.log(a)
				}
				document.body.removeChild(u)
			},
			l = r => {
				try {
					let a = U("searchList");
					a || (a = P), a[n].urls = a[n].urls.filter(F => F.url !== r.url), console.log(a), B("searchList", a), i(a)
				} catch (a) {
					console.log(a)
				}
				document.body.removeChild(u)
			},
			h = () => {
				document.body.removeChild(u)
			};
		I.render(e(qe, {
			data: o,
			onOK: t,
			onDelete: l,
			onCancle: h
		}), u)
	},
	Ue = o => {
		const {
			onOK: n,
			onCancle: s
		} = o, [i, u] = m.exports.useState({
			title: "",
			describtion: "",
			url: ""
		}), t = () => {
			i.title && i.describtion && i.url ? n(i) : alert("\u8BF7\u8F93\u5165\u540D\u79F0\u3001\u63CF\u8FF0\u548C\u94FE\u63A5")
		};
		return c("div", {
			className: "SearchUrlModal",
			children: [e("span", {
				className: "SearchUrlModal_title rowcenter",
				children: "\u6DFB\u52A0\u641C\u7D22\u6E90"
			}), c("div", {
				className: "SearchUrlModal_row",
				children: [e("span", {
					children: "\u6807\u9898\u540D\u79F0\uFF1A"
				}), e("input", {
					onChange: l => {
						u(v(C({}, i), {
							title: l.target.value
						}))
					},
					value: i.title,
					placeholder: "\u8BF7\u8F93\u5165\u6807\u9898",
					required: !0
				})]
			}), c("div", {
				className: "SearchUrlModal_row",
				children: [e("span", {
					children: "\u63CF\u8FF0\u6587\u5B57\uFF1A"
				}), e("input", {
					onChange: l => {
						u(v(C({}, i), {
							describtion: l.target.value
						}))
					},
					value: i.describtion,
					placeholder: "\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u5B57",
					required: !0
				})]
			}), c("div", {
				className: "SearchUrlModal_row",
				children: [e("span", {
					children: "\u641C\u7D22\u5730\u5740\uFF1A"
				}), e("input", {
					onChange: l => {
						u(v(C({}, i), {
							url: l.target.value
						}))
					},
					value: i.url,
					placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5730\u5740",
					required: !0
				}), c("p", {
					children: ["\u8BF7\u5C06\u641C\u7D22\u5173\u952E\u8BCD\u7528$keyword$\u4EE3\u66FF", e("br", {}), "\u5982\uFF1Ahttps://www.baidu.com/s?wd=$keyword$"]
				})]
			}), c("div", {
				className: "SearchUrlModal_btns",
				children: [e("button", {
					className: "btn-primary",
					onClick: s,
					children: "\u53D6\u6D88"
				}), e("button", {
					className: "btn-confirm",
					onClick: () => t(),
					children: "\u786E\u8BA4"
				})]
			})]
		})
	},
	qe = o => {
		const {
			data: n,
			onOK: s,
			onDelete: i,
			onCancle: u
		} = o, [t, l] = m.exports.useState(n), h = () => {
			t.title && t.describtion && t.url ? s(t) : alert("\u8BF7\u8F93\u5165\u540D\u79F0\u3001\u63CF\u8FF0\u548C\u94FE\u63A5")
		};
		return c("div", {
			className: "SearchUrlModal",
			children: [e("span", {
				className: "SearchUrlModal_title rowcenter",
				children: "\u4FEE\u6539\u641C\u7D22\u6E90"
			}), c("div", {
				className: "SearchUrlModal_row",
				children: [e("span", {
					children: "\u6807\u9898\u540D\u79F0\uFF1A"
				}), e("input", {
					onChange: r => {
						l(v(C({}, t), {
							title: r.target.value
						}))
					},
					value: t.title,
					placeholder: "\u8BF7\u8F93\u5165\u6807\u9898",
					required: !0
				})]
			}), c("div", {
				className: "SearchUrlModal_row",
				children: [e("span", {
					children: "\u63CF\u8FF0\u6587\u5B57\uFF1A"
				}), e("input", {
					onChange: r => {
						l(v(C({}, t), {
							describtion: r.target.value
						}))
					},
					value: t.describtion,
					placeholder: "\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u5B57",
					required: !0
				})]
			}), c("div", {
				className: "SearchUrlModal_row",
				children: [e("span", {
					children: "\u641C\u7D22\u5730\u5740\uFF1A"
				}), e("input", {
					onChange: r => {
						l(v(C({}, t), {
							url: r.target.value
						}))
					},
					value: t.url,
					placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5730\u5740"
				}), c("p", {
					children: ["\u8BF7\u5C06\u641C\u7D22\u5173\u952E\u8BCD\u7528$keyword$\u4EE3\u66FF", e("br", {}), "\u5982\uFF1Ahttps://www.baidu.com/s?wd=$keyword$"]
				})]
			}), c("div", {
				className: "SearchUrlModal_btns",
				children: [e("button", {
					className: "btn-primary",
					onClick: u,
					children: "\u53D6\u6D88"
				}), e("button", {
					className: "btn-delete",
					onClick: () => i(t),
					children: "\u5220\u9664"
				}), e("button", {
					className: "btn-confirm",
					onClick: () => h(),
					children: "\u786E\u8BA4"
				})]
			})]
		})
	},
	ze = o => {
		const {
			setShow: n,
			setSearchUrl: s
		} = o, [i, u] = M("searchList", P), t = l => {
			s(l), n(!1)
		};
		return c("div", {
			className: "SearchUrlList",
			children: [e("div", {
				className: "SearchUrlList-about rowcenter",
				children: "\u58F0\u660E\uFF1A\u5168\u90E8\u641C\u7D22\u6E90\u5747\u6765\u81EA\u7B2C\u4E09\u65B9\u7AD9\u70B9\uFF0C\u5982\u6709\u4FB5\u6743\u8BF7\u8054\u7CFB\u5220\u9664"
			}), i && i.map((l, h) => c("div", {
				className: "SearchUrlList-row",
				children: [e("span", {
					children: l.name
				}), c("ul", {
					children: [l.urls.map((r, a) => e("li", {
						onClick: () => t(r),
						onContextMenu: F => {
							F.preventDefault(), Ie(r, h, a, u)
						},
						children: r.title
					}, "url_" + a)), l.urls.length < 6 && e("li", {
						onClick: () => Me(h, u),
						children: e(V, {
							theme: "outline",
							size: "21",
							fill: "#eee"
						})
					})]
				})]
			}, "category_" + h))]
		})
	};

function W(...o) {
	return o.filter(n => !!n)
		.join(" ")
}
const We = () => {
	const [o, n] = M("currentSearch", xe), [s, i] = m.exports.useState(""), [u, t] = m.exports.useState(!1), [l, h] = m.exports.useState(!1), [r, a] = m.exports.useState(!1);
	m.exports.useEffect(() => (h(!!s), () => h(!1)), [s]), m.exports.useEffect(() => {
		const d = () => {
			console.log("here"), t(!1), h(!1)
		};
		return document.addEventListener("click", d, !1), () => {
			console.log("distory"), document.removeEventListener("click", d, !1)
		}
	}, []);
	const F = d => {
		d.preventDefault();
		const w = o.url.replace("$keyword$", s);
		window.open(w)
	};
	return e("div", {
		className: "Search fade-down",
		children: o && c("div", {
			className: W("SearchBar", r ? "active" : ""),
			children: [c("div", {
				className: "SearchUrl rowcenter",
				children: [c("span", {
					className: "urlTag rowcenter",
					onClick: d => {
						d.stopPropagation(), t(!u), h(!1)
					},
					children: [o.title, u ? e(Ae, {
						theme: "outline",
						size: "19",
						fill: "#eee"
					}) : e(ye, {
						theme: "outline",
						size: "19",
						fill: "#eee"
					})]
				}), u && e(ze, {
					setShow: t,
					setSearchUrl: n
				}), l && e(Te, {
					keyword: s,
					setKeyword: i
				})]
			}), e("form", {
				className: "center",
				onSubmit: F,
				children: e("input", {
					type: "text",
					value: s,
					placeholder: o.describtion,
					onChange: d => i(d.target.value),
					onClick: d => d.stopPropagation(),
					onFocus: d => {
						t(!1), h(!!s), a(!0)
					},
					onBlur: () => {
						a(!1)
					}
				})
			}), s.length > 0 && e(be, {
				onClick: () => i(""),
				theme: "outline",
				size: "19",
				fill: "#ddd"
			}), e("div", {
				className: "SearchButton rowcenter",
				children: e(De, {
					onClick: F,
					theme: "outline",
					size: "19",
					fill: "#fff"
				})
			})]
		})
	})
};
const _e = () => {
		document.getElementById("bgFile")
			.click()
	},
	Oe = () => {
		const [o, n] = m.exports.useState({});
		m.exports.useLayoutEffect(() => (s(), () => {
			localStorage.removeItem("backgroundImage")
		}), []);
		const s = () => {
			const u = localStorage.getItem("backgroundImage");
			u && n({
				backgroundImage: `url('${u}')`
			})
		};
		return e("section", {
			className: "bg",
			style: o,
			children: e("input", {
				type: "file",
				id: "bgFile",
				accept: "image/*",
				style: {
					display: "none"
				},
				onChange: () => {
					const u = new FileReader,
						t = document.getElementById("bgFile")
						.files[0];
					if (t.size > 4e6) {
						alert("\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E4m");
						return
					}
					u.readAsDataURL(t), u.onload = function(l) {
						localStorage.removeItem("backgroundImage"), localStorage.setItem("backgroundImage", l.target.result), s()
					}
				}
			})
		})
	},
	Pe = m.exports.createContext({
		zIndex: 0
	}),
	Re = m.exports.createContext((...o) => {}),
	He = (o, n) => C(C({}, o), n),
	je = o => {
		const [n, s] = m.exports.useReducer(He, {
			zIndex: 999
		});
		return e(Q, {
			children: e(Pe.Provider, {
				value: n,
				children: e(Re.Provider, {
					value: s,
					children: o.children
				})
			})
		})
	},
	Xe = [
	//{
	//	id: "qt-SUQNbOKK4n4Zn8izTV",
	//	title: "\u57287\u4E2A\u6708\u5185\u5B66\u5B8CMIT\u6570\u5B66\u57FA\u7840\u8BFE\u7A0B",
	//	createTime: 1643096714078
	//}, {
	//	id: "nqw-TNX8L32b6Dkk8izkC",
	//	title: "\u6BCF\u5929\u4E0A\u5348\u516D\u70B9\u534A\u8D77\u5E8A\u575A\u6301\u5199\u535A\u5BA2",
	//	createTime: 1643096677407
	//}, {
	//	id: "9qeGBwEtc74QZR97HjxoO",
	//	title: "\u738B\u8005\u6253\u5230\u661F\u8000\u6BB5\u4F4D",
	//	createTime: 1643094950696
	//}, {
	//	id: "0UvstY435GXVLVhFPl5jr",
	//	title: "\u6BCF\u5929\u81F3\u5C11\u53BB\u5065\u8EAB\u623F\u953B\u70BC1\u5C0F\u65F6",
	//	createTime: 1643094738177
	//}, {
	//	id: "0UvstY435GXVLVhFPl6er",
	//	title: "\u8BFB\u5B8CVue\u7684\u6E90\u7801\u5206\u6790",
	//	createTime: 1643094738177
	//	}
	],
	Ke = [
	{
		id: "0UvstY435GXVLVhFPl6er",
		title: "\u7F51\u7AD9\u6B63\u5F0F\u7248\u672C\u542F\u52A8",
		createTime: 1643094738177
	}, {
		id: "Ixq4XYjhkASrHcuUy4f6k",
		title: "\u53BB\u8DD1\u6B65\u4E09\u5341\u5206\u949F * 3\u6B21",
		createTime: 1643096402279
	}, {
		id: "Io2SP9DoIBFZyW3OgiBNQ",
		title: "\u8FFD\u6F2B\u5A01\u6700\u8FD1\u7684\u7535\u5F71 * 3\u90E8",
		createTime: 1643096385839
	}, {
		id: "Nx72Sq9RWOxyfbG7uNEjt",
		title: "\u590D\u4E60\u98DE\u6868\u521B\u9020\u8425\u7684\u8BFE\u7A0B",
		createTime: 1643096326151
	}, {
		id: "Xyt8D9ZKSJAoAsxN_GfHf",
		title: "\u5199\u4E00\u4E2AOCR\u8BC6\u522B\u7F51\u9875\u7684\u5F00\u6E90\u5DE5\u5177",
		createTime: 1643096317888
	}, {
		id: "IWCtUN0u1FaJdaFy20kQp",
		title: "nestjs\u505A\u540E\u7AEF\u5F00\u53D1",
		createTime: 1643096300666
	}, {
		id: "0UN2W5kTbvBzMn3BYabUI",
		title: "\u665A\u4E0A\u7FA4\u91CC\u7EC4\u961F\u6253\u738B\u8005",
		createTime: 1643096241999
		}
	];
const Ye = () => {
		const [o, n] = M("long-todolist", Xe), [s, i] = M("long-donelist", []), [u, t] = m.exports.useState("todo");
		return c("section", {
			className: "todo",
			children: [e(Ve, {
				type: u,
				setType: t
			}), u === "todo" && e(Qe, {
				list: o,
				onAdd: d => {
					if (!d.title) return;
					const p = [C({
						id: j()
					}, d), ...o];
					n(p)
				},
				onDelete: d => {
					const w = o.filter(p => p.id !== d.id);
					n(w)
				},
				onCompete: d => {
					const w = o.filter(y => y.id !== d.id),
						p = [v(C({}, d), {
							doneTime: new Date()
								.getTime()
						}), ...s];
					console.log(p), n(w), i(p)
				}
			}), u === "done" && e(Ge, {
				list: s,
				onDelete: d => {
					const w = s.filter(p => p.id !== d.id);
					i(w)
				},
				onRedo: d => {
					const w = s.filter(y => y.id !== d.id),
						p = [d, ...o];
					i(w), n(p)
				}
			})]
		})
	},
	Ve = o => {
		const {
			type: n,
			setType: s
		} = o;
		return c("section", {
			className: "todo-header",
			children: [e("span", {
				className: "todo-header-title",
				children: "\u6211\u7684\u76EE\u6807"
			}), c("section", {
				className: "todo-header-btns",
				children: [e("section", {
					className: W("todo-header-btn center", n === "todo" ? "active" : ""),
					onClick: () => s("todo"),
					children: "\u76EE\u6807"
				}), e("section", {
					className: W("todo-header-btn center", n === "todo" ? "" : "active"),
					onClick: () => s("done"),
					children: "\u8FBE\u6210"
				})]
			})]
		})
	},
	Qe = o => {
		const {
			list: n,
			onAdd: s,
			onDelete: i,
			onCompete: u
		} = o, [t, l] = m.exports.useState(""), h = r => {
			r.preventDefault(), s({
				title: t,
				createTime: new Date()
					.getTime()
			}), l("")
		};
		return c("div", {
			className: "TodoContent",
			children: [e("ul", {
				className: "TodoContent-list",
				children: n.map((r, a) => c("li", {
					className: "TodoContent-item",
					children: [c("section", {
						className: "TodoContent-item-title",
						children: [a + 1, "\u3001", r.title]
					}), c("section", {
						className: "TodoContent-item-btns",
						children: [e("div", {
							className: "TodoContent-item-btn",
							onClick: () => i(r),
							children: e(O, {
								theme: "outline",
								size: "23",
								fill: "rgb(196,196,196)"
							})
						}), e("div", {
							className: "TodoContent-item-btn",
							onClick: () => u(r),
							children: e(G, {
								theme: "outline",
								size: "23",
								fill: "rgb(196,196,196)"
							})
						})]
					})]
				}, a))
			}), c("form", {
				className: "TodoContent-add",
				onSubmit: h,
				children: [e("input", {
					className: t.length > 0 ? "input-active" : "input-default",
					type: "text",
					placeholder: "goal",
					value: t,
					onChange: r => l(r.target.value)
				}), e("div", {
					className: "TodoContent-add-btn center",
					onClick: h,
					children: e(Z, {
						theme: "outline",
						size: "23",
						fill: "rgb(196,196,196)"
					})
				})]
			})]
		})
	},
	Ge = o => {
		const {
			list: n,
			onDelete: s,
			onRedo: i
		} = o;
		return e("div", {
			className: "DoneContent",
			children: e("ul", {
				className: "DoneContent-list",
				children: n.map((u, t) => c("li", {
					className: "DoneContent-item",
					children: [c("section", {
						className: "DoneContent-item-title",
						children: [t + 1, "\u3001", u.title]
					}), c("section", {
						className: "DoneContent-item-btns",
						children: [e("div", {
							className: "DoneContent-item-btn",
							onClick: () => i(u),
							children: e(J, {
								theme: "outline",
								size: "23",
								fill: "rgb(196,196,196)"
							})
						}), e("div", {
							className: "DoneContent-item-btn",
							onClick: () => s(u),
							children: e(O, {
								theme: "outline",
								size: "23",
								fill: "rgb(196,196,196)"
							})
						})]
					})]
				}, t))
			})
		})
	},
	Ze = () => {
		const [o, n] = M("short-todolist", Ke), [s, i] = M("short-donelist", []), [u, t] = m.exports.useState("todo");
		return c("section", {
			className: "todo",
			children: [e(Je, {
				type: u,
				setType: t
			}), u === "todo" && e(et, {
				list: o,
				onAdd: d => {
					if (!d.title) return;
					const p = [C({
						id: j()
					}, d), ...o];
					n(p)
				},
				onDelete: d => {
					const w = o.filter(p => p.id !== d.id);
					n(w)
				},
				onCompete: d => {
					const w = o.filter(y => y.id !== d.id),
						p = [v(C({}, d), {
							doneTime: new Date()
								.getTime()
						}), ...s];
					console.log(p), n(w), i(p)
				}
			}), u === "done" && e(tt, {
				list: s,
				onDelete: d => {
					const w = s.filter(p => p.id !== d.id);
					i(w)
				},
				onRedo: d => {
					const w = s.filter(y => y.id !== d.id),
						p = [d, ...o];
					i(w), n(p)
				}
			})]
		})
	},
	Je = o => {
		const {
			type: n,
			setType: s
		} = o;
		return c("section", {
			className: "todo-header",
			children: [e("span", {
				className: "todo-header-title",
				children: "\u5F85\u529E\u6E05\u5355"
			}), c("section", {
				className: "todo-header-btns",
				children: [e("section", {
					className: W("todo-header-btn center", n === "todo" ? "active" : ""),
					onClick: () => s("todo"),
					children: "\u5F53\u524D"
				}), e("section", {
					className: W("todo-header-btn center", n === "todo" ? "" : "active"),
					onClick: () => s("done"),
					children: "\u8FC7\u53BB"
				})]
			})]
		})
	},
	et = o => {
		const {
			list: n,
			onAdd: s,
			onDelete: i,
			onCompete: u
		} = o, [t, l] = m.exports.useState(""), h = r => {
			r.preventDefault(), s({
				title: t,
				createTime: new Date()
					.getTime()
			}), l("")
		};
		return c("div", {
			className: "TodoContent",
			children: [e("ul", {
				className: "TodoContent-list",
				children: n.map((r, a) => c("li", {
					className: "TodoContent-item",
					children: [c("section", {
						className: "TodoContent-item-title",
						children: [a + 1, "\u3001", r.title]
					}), c("section", {
						className: "TodoContent-item-btns",
						children: [e("div", {
							className: "TodoContent-item-btn",
							onClick: () => i(r),
							children: e(O, {
								theme: "outline",
								size: "23",
								fill: "rgb(196,196,196)"
							})
						}), e("div", {
							className: "TodoContent-item-btn",
							onClick: () => u(r),
							children: e(G, {
								theme: "outline",
								size: "23",
								fill: "rgb(196,196,196)"
							})
						})]
					})]
				}, a))
			}), c("form", {
				className: "TodoContent-add",
				onSubmit: h,
				children: [e("input", {
					className: t.length > 0 ? "input-active" : "input-default",
					type: "text",
					placeholder: "todo",
					value: t,
					onChange: r => l(r.target.value)
				}), e("div", {
					className: "TodoContent-add-btn center",
					onClick: h,
					children: e(Z, {
						theme: "outline",
						size: "23",
						fill: "rgb(196,196,196)"
					})
				})]
			})]
		})
	},
	tt = o => {
		const {
			list: n,
			onDelete: s,
			onRedo: i
		} = o;
		return e("div", {
			className: "DoneContent",
			children: e("ul", {
				className: "DoneContent-list",
				children: n.map((u, t) => c("li", {
					className: "DoneContent-item",
					children: [c("section", {
						className: "DoneContent-item-title",
						children: [t + 1, "\u3001", u.title]
					}), c("section", {
						className: "DoneContent-item-btns",
						children: [e("div", {
							className: "DoneContent-item-btn",
							onClick: () => i(u),
							children: e(J, {
								theme: "outline",
								size: "23",
								fill: "rgb(196,196,196)"
							})
						}), e("div", {
							className: "DoneContent-item-btn",
							onClick: () => s(u),
							children: e(O, {
								theme: "outline",
								size: "23",
								fill: "rgb(196,196,196)"
							})
						})]
					})]
				}, t))
			})
		})
	},
	ot = () => c("div", {
		className: "todo-container rowcenter",
		children: [e(Ze, {}), e(Ye, {})]
	});
let ee = 1e3;
const R = () => ee,
	nt = o => {
		ee = o
	},
	ut = (o, n) => {
		let s = document.createElement("div");
		document.body.appendChild(s);
		const i = t => {
				let l = [...o, t];
				B("userAppList", l), n(l), document.body.removeChild(s)
			},
			u = () => {
				document.body.removeChild(s)
			};
		I.render(e(st, {
			onOK: i,
			onCancel: u
		}), s)
	},
	st = o => {
		const {
			onOK: n,
			onCancel: s
		} = o, [i, u] = m.exports.useState({
			id: j(),
			name: "",
			link: "",
			logo: "",
			type: "inner",
			width: null,
			height: null,
			x: null,
			y: null
		}), t = () => {
			i.name && i.link && i.logo ? n(i) : alert("\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0\u3001\u94FE\u63A5\u548C\u56FE\u6807\u94FE\u63A5")
		};
		return c("div", {
			className: "AppModal",
			style: {
				zIndex: R()
			},
			children: [e("span", {
				className: "AppModal_title rowcenter",
				children: "\u6DFB\u52A0\u5E94\u7528"
			}), c("div", {
				className: "AppModal_row",
				children: [e("span", {
					children: "APP\u540D\u79F0\uFF1A"
				}), e("input", {
					onChange: l => {
						u(v(C({}, i), {
							name: l.target.value
						}))
					},
					value: i.name,
					placeholder: "\u8BF7\u8F93\u5165\u540D\u79F0",
					type: "text",
					required: !0
				})]
			}), c("div", {
				className: "AppModal_row",
				children: [e("span", {
					children: "APP URL\uFF1A"
				}), e("input", {
					onChange: l => {
						u(v(C({}, i), {
							link: l.target.value,
							logo: l.target.value + "/favicon.ico"
						}))
					},
					value: i.link,
					placeholder: "\u8BF7\u8F93\u5165APP\u7684\u94FE\u63A5",
					type: "text",
					required: !0
				})]
			}), c("div", {
				className: "AppModal_row",
				children: [e("span", {
					children: "\u56FE\u6807 URL\uFF1A"
				}), e("input", {
					onChange: l => {
						u(v(C({}, i), {
							logo: l.target.value
						}))
					},
					value: i.logo,
					placeholder: "\u8BF7\u8F93\u5165APP Logo\u7684\u94FE\u63A5",
					type: "text",
					required: !0
				})]
			}), c("div", {
				className: "AppModal_row",
				children: [e("span", {
					children: "\u6253\u5F00\u65B9\u5F0F\uFF1A"
				}), c("label", {
					children: [e("input", {
						className: "radio_type",
						type: "radio",
						value: i.type,
						checked: i.type === "inner",
						onChange: () => u(v(C({}, i), {
							type: "inner"
						}))
					}), "\u7A97\u5185\u6253\u5F00"]
				}), c("label", {
					children: [e("input", {
						className: "radio_type",
						type: "radio",
						value: i.type,
						checked: i.type === "outer",
						onChange: () => u(v(C({}, i), {
							type: "outer"
						}))
					}), "\u76F4\u63A5\u8DF3\u8F6C"]
				})]
			}), c("div", {
				className: "AppModal_btns",
				children: [e("button", {
					onClick: s,
					children: "\u53D6\u6D88"
				}), e("button", {
					className: "confirm",
					onClick: () => t(),
					children: "\u786E\u8BA4"
				})]
			})]
		})
	},
	it = (o, n, s, i) => {
		let u = document.createElement("div");
		document.body.appendChild(u);
		const t = r => {
				let a = [...s];
				a[n] = r, B("userAppList", a), i(a), document.body.removeChild(u)
			},
			l = () => {
				let r = [...s];
				r.splice(n, 1), B("userAppList", r), i(r), document.body.removeChild(u)
			},
			h = () => {
				document.body.removeChild(u)
			};
		I.render(e(lt, {
			appData: o,
			onOK: t,
			onCancel: h,
			onDelete: l
		}), u)
	},
	lt = o => {
		const {
			appData: n,
			onOK: s,
			onCancel: i,
			onDelete: u
		} = o, [t, l] = m.exports.useState(n), h = () => {
			t.name && t.link && t.logo ? s(t) : alert("\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0\u3001\u94FE\u63A5\u548C\u56FE\u6807\u94FE\u63A5")
		};
		return c("div", {
			className: "AppModal",
			style: {
				zIndex: R()
			},
			children: [e("span", {
				className: "AppModal_title rowcenter",
				children: "\u4FEE\u6539\u5E94\u7528"
			}), c("div", {
				className: "AppModal_row",
				children: [e("span", {
					children: "APP\u540D\u79F0\uFF1A"
				}), e("input", {
					onChange: r => {
						l(v(C({}, t), {
							name: r.target.value
						}))
					},
					value: t.name,
					placeholder: "\u8BF7\u8F93\u5165\u540D\u79F0",
					type: "text",
					required: !0
				})]
			}), c("div", {
				className: "AppModal_row",
				children: [e("span", {
					children: "APP URL\uFF1A"
				}), e("input", {
					onChange: r => {
						l(v(C({}, t), {
							link: r.target.value
						}))
					},
					value: t.link,
					placeholder: "\u8BF7\u8F93\u5165APP\u7684\u94FE\u63A5",
					type: "text",
					required: !0
				})]
			}), c("div", {
				className: "AppModal_row",
				children: [e("span", {
					children: "\u56FE\u6807 URL\uFF1A"
				}), e("input", {
					onChange: r => {
						l(v(C({}, t), {
							logo: r.target.value
						}))
					},
					value: t.logo,
					placeholder: "\u8BF7\u8F93\u5165APP Logo\u7684\u94FE\u63A5",
					type: "text",
					required: !0
				})]
			}), c("div", {
				className: "AppModal_row",
				children: [e("span", {
					children: "\u6253\u5F00\u65B9\u5F0F\uFF1A"
				}), c("label", {
					children: [e("input", {
						className: "radio_type",
						type: "radio",
						value: t.type,
						checked: t.type === "inner",
						onChange: () => l(v(C({}, t), {
							type: "inner"
						}))
					}), "\u7A97\u5185\u6253\u5F00"]
				}), c("label", {
					children: [e("input", {
						className: "radio_type",
						type: "radio",
						value: t.type,
						checked: t.type === "outer",
						onChange: () => l(v(C({}, t), {
							type: "outer"
						}))
					}), "\u76F4\u63A5\u8DF3\u8F6C"]
				})]
			}), c("div", {
				className: "AppModal_btns",
				children: [e("button", {
					onClick: i,
					children: "\u53D6\u6D88"
				}), e("button", {
					className: "delete",
					onClick: u,
					children: "\u5220\u9664"
				}), e("button", {
					className: "confirm",
					onClick: () => h(),
					children: "\u786E\u8BA4"
				})]
			})]
		})
	};
var rt = "/assets/icon/error.png";
const ct = (o, n, s, i) => {
		let u = document.getElementById(o.id);
		if (u) {
			u.style.display = "block";
			return
		}
		let t = document.createElement("div");
		t.setAttribute("id", o.id), document.body.appendChild(t);
		const l = (r, a, F, d, w) => {
				let p = U("userAppList");
				p[n] = v(C({}, o), {
					x: r,
					y: a,
					width: F,
					height: d
				}), B("userAppList", p), i(p), document.body.removeChild(t)
			},
			h = () => {
				t.style.display = "none"
			};
		I.render(e(at, {
			appData: o,
			onClose: l,
			onHide: h
		}), t)
	},
	at = o => {
		const {
			appData: n,
			onClose: s,
			onHide: i
		} = o, u = document.body.clientWidth, t = document.body.clientHeight, l = n.width || u / 1.2, h = n.height || t / 1.2, r = n.x || u / 2 - l / 2, a = n.y || t / 2 - h / 2, [F, d] = m.exports.useState({
			AppWidth: l,
			AppHeight: h,
			AppLeft: r,
			AppTop: a,
			display: "true",
			oldState: {}
		}), [w, p] = m.exports.useState(!1), [y, L] = m.exports.useState(!1), {
			AppWidth: N,
			AppHeight: $,
			AppLeft: _,
			AppTop: H,
			display: oe,
			oldState: ne
		} = F, S = f => d(C(C({}, F), f)), ue = () => {
			setTimeout(() => {
				window.onmousemove = () => !1, window.onmouseup = () => !1, T(!1)
			}, 0), p(!1)
		}, T = f => {
			const A = window.document.querySelector(".AppWindow") || null;
			A && (f ? A.style.transition = "all 0s" : A.style.transition = "")
		}, x = () => ue(), se = f => {
			let A = f.pageX,
				k = f.pageY;
			const b = g => {
				g.preventDefault(), p(!0);
				let D = _ + (g.clientX - A),
					E = H + (g.clientY - k);
				D < 0 && (D = 0), E < 0 && (E = 0);
				let q = window.innerWidth - N,
					z = window.innerHeight - $;
				D > q && (D = q), E > z && (E = z), T(!0), S({
					AppLeft: D,
					AppTop: E
				})
			};
			window.onmousemove = b, window.onmouseup = x, window.onblur = x, window.onmouseleave = x
		}, ie = f => {
			let A = f.pageX;
			const k = b => {
				b.preventDefault(), p(!0);
				let g = _ + (b.clientX - A);
				g < 0 && (g = 0);
				let D = window.innerWidth - N;
				g > D && (g = D);
				let E = N - (b.clientX - A);
				T(!0), S({
					AppLeft: g,
					AppWidth: E
				})
			};
			window.onmousemove = k, window.onmouseup = x
		}, le = f => {
			let A = f.pageX;
			const k = b => {
				b.preventDefault(), p(!0);
				let g = N + (b.clientX - A);
				T(!0), S({
					AppWidth: g
				})
			};
			window.onmousemove = k, window.onmouseup = x
		}, re = f => {
			let A = f.pageY;
			const k = b => {
				b.preventDefault(), p(!0);
				let g = $ + (b.clientY - A);
				T(!0), S({
					AppHeight: g
				})
			};
			window.onmousemove = k, window.onmouseup = x
		}, ce = f => {
			let A = f.pageX,
				k = f.pageY;
			const b = g => {
				g.preventDefault(), p(!0);
				let D = N + (g.clientX - A),
					E = $ + (g.clientY - k);
				T(!0), S({
					AppWidth: D,
					AppHeight: E
				})
			};
			window.onmousemove = b, window.onmouseup = x
		}, ae = f => {
			let A = f.pageX,
				k = f.pageY;
			const b = g => {
				g.preventDefault(), p(!0);
				let D = _ + (g.clientX - A),
					E = H + (g.clientY - k);
				D < 0 && (D = 0), E < 0 && (E = 0);
				let q = window.innerWidth - N,
					z = window.innerHeight - $;
				D > q && (D = q), E > z && (E = z);
				let he = N - (g.clientX - A),
					me = $ + (g.clientY - k);
				T(!0), S({
					AppLeft: D,
					AppTop: E,
					AppWidth: he,
					AppHeight: me
				})
			};
			window.onmousemove = b, window.onmouseup = x
		}, X = () => {
			N !== u || $ !== t ? (L(!0), S({
				oldState: F,
				AppLeft: 0,
				AppTop: 0,
				AppWidth: u,
				AppHeight: t
			})) : (L(!1), S(C({}, ne)))
		}, de = () => i(), pe = () => {
			const {
				AppLeft: f,
				AppTop: A,
				AppWidth: k,
				AppHeight: b
			} = F;
			s(f, A, k, b)
		};
		return c("div", {
			className: "AppWindow",
			style: {
				width: N,
				height: $,
				left: _,
				top: H,
				display: oe,
				zIndex: R()
			},
			onClick: () => {
				p(!0), nt(R() + 1), setTimeout(() => p(!1), 300)
			},
			onDoubleClick: X,
			children: [c("div", {
				className: "AppWindowHeader noselect",
				style: y ? {} : {
					borderRadius: "9.6px 9.6px 0 0"
				},
				id: "demo",
				onMouseDown: se,
				children: [e("img", {
					src: n.logo,
					alt: n.name,
					className: "Logo"
				}), e("div", {
					className: "Title",
					children: n.name
				}), c("div", {
					className: "Menu",
					children: [e("a", {
						onClick: de,
						children: e(Ee, {
							theme: "outline",
							size: "19",
							fill: "#666"
						})
					}), e("a", {
						onClick: X,
						children: e(ke, {
							theme: "outline",
							size: "19",
							fill: "#666"
						})
					}), !y && e("a", {
						onClick: pe,
						children: e(Be, {
							theme: "outline",
							size: "19",
							fill: "#666"
						})
					})]
				})]
			}), c("div", {
				className: "AppWindowContent",
				style: {
					height: $ - 39
				},
				children: [w && e("div", {
					className: "mask"
				}), e("iframe", {
					src: n.link,
					name: n.name,
					frameBorder: 0,
					allowTransparency: !0,
					allowFullScreen: !0
				})]
			}), !y && c("div", {
				className: "resizebar",
				children: [e("div", {
					className: "resize-left",
					onMouseDown: ie
				}), e("div", {
					className: "resize-right",
					onMouseDown: le
				}), e("div", {
					className: "resize-bottom",
					onMouseDown: re
				}), e("div", {
					className: "resize-left-bottom",
					onMouseDown: ae
				}), e("div", {
					className: "resize-right-bottom",
					onMouseDown: ce
				})]
			})]
		})
	},
	dt = [//转码http://www.kuquidc.com/convert/Unicode.php
		{
			id: "7li7li",
			name: "7li7li",
			link: "https://www.7li7li.cn/",
			logo: "icon/7li7li.png",
			type: "outer",
			width: 1024,
			height: 768,
			x: 250,
			y: 60
		},
		{
			id: "chatgpt",
			name: "ChatGPT",
			link: "https://link.7li7li.cn/chatgpt",
			logo: "/icon/chatgpt.png",
			type: "inner",
			width: 1024,
			height: 768,
			x: 250,
			y: 70
		},
		{
			id: "newbing",
			name: "NewBing",
			link: "https://link.7li7li.cn/newbing",
			logo: "/icon/bing.png",
			type: "inner",
			width: 1024,
			height: 768,
			x: 300,
			y: 80
		},
		{
			id: "gemini",
			name: "Gemini",
			link: "https://gemini.7li7li.cn/",
			logo: "/icon/gemini.png",
			type: "inner",
			width: 1024,
			height: 768,
			x: 350,
			y: 90
		},
		{
			id: "chatglm",
			name: "ChatGLM",
			link: "https://www.chatglm.cn/",
			logo: "/icon/chatglm.png",
			type: "inner",
			width: 1024,
			height: 768,
			x: 400,
			y: 100
		},
		{
			id: "kimi",
			name: "Kimi",
			link: "https://kimi.moonshot.cn/",
			logo: "/icon/kimi.png",
			type: "inner",
			width: 1024,
			height: 768,
			x: 450,
			y: 110
		},
		{
			id: "xfyun",
			name: "\u8baf\u98de\u661f\u706b",
			link: "https://xinghuo.xfyun.cn/",
			logo: "/icon/xfyun.png",
			type: "inner",			
			width: 1024,
			height: 768,
			x: 500,
			y: 120
		},
		{
			id: "yiyan",
			name: "\u6587\u5FC3\u4E00\u8A00",
			link: "https://yiyan.baidu.com/",
			logo: "/icon/yiyan.png",
			type: "outer",			
			width: 1024,
			height: 768,
			x: 550,
			y: 130
		},
		{
			id: "tongyi",
			name: "\u901a\u4e49",
			link: "https://tongyi.aliyun.com/",
			logo: "/icon/tongyi.png",
			type: "outer",
			width: 1024,
			height: 768,
			x: 600,
			y: 140
		},
		{
			id: "claude",
			name: "Claude",
			link: "https://claude.ai/",
			logo: "/icon/claude.png",
			type: "outer",
			width: 1024,
			height: 768,
			x: 650,
			y: 150
		}, {
			id: "bard",
			name: "Bard",
			link: "https://bard.google.com/",
			logo: "/icon/bard.png",
			type: "outer",
			width: 1024,
			height: 768,
			x: 700,
			y: 160
		}
	];

function pt(o) {
	const [n, s] = m.exports.useState(!1), [i, u] = m.exports.useState(o.feedback);
	return m.exports.useEffect(() => {
		const t = new Image;
		t.src = o.src;
		const l = () => {
				u(e("div", {
					className: "AppList-app-logo-container",
					children: e("img", {
						className: "AppList-app-logo",
						src: o.src,
						alt: o.alt
					})
				})), s(!0)
			},
			h = () => {
				s(!0)
			};
		return t.addEventListener("load", l, !1), t.addEventListener("error", h, !1), () => {
			t.removeEventListener("load", l, !1), t.removeEventListener("error", h, !1)
		}
	}, [o.src]), n ? i : null
}
const ht = () => {
		const [o, n] = M("userAppList", dt), s = (r, a) => {
			r.type === "inner" ? ct(r, a, o, n) : window.open(r.link)
		}, i = m.exports.useRef([]), u = m.exports.useCallback(r => {
			var a;
			(a = i.current) == null || a.push(r)
		}, [o]), t = m.exports.useCallback(r => {
			const a = i.current.indexOf(r.currentTarget);
			if (a >= 0) {
				const F = i.current[a],
					d = i.current[a - 1],
					w = i.current[a + 1];
				F.style.transform = "scale(1.6)";
				const p = .6,
					y = F == null ? void 0 : F.getBoundingClientRect(),
					L = Math.abs(r.nativeEvent.clientX - y.left) / y.width;
				d && (d.style.transform = `scale(${1+p*Math.abs(L-1)}) `), w && (w.style.transform = `scale(${1+p*L})`)
			}
		}, [o]), l = m.exports.useCallback(r => {
			const a = i.current.indexOf(r.currentTarget);
			if (a >= 0) {
				const F = i.current[a],
					d = i.current[a - 1],
					w = i.current[a + 1],
					p = .6,
					y = F == null ? void 0 : F.getBoundingClientRect(),
					L = Math.abs(r.nativeEvent.clientX - y.left) / y.width;
				d && (d.style.transform = `scale(${1+p*Math.abs(L-1)}) `), w && (w.style.transform = `scale(${1+p*L})`)
			}
		}, [o]), h = m.exports.useCallback(r => {
			const a = i.current.indexOf(r.currentTarget);
			if (a >= 0) {
				const F = i.current[a],
					d = i.current[a - 1],
					w = i.current[a + 1];
				F.style.transform = "scale(1)", d && (d.style.transform = "scale(1)"), w && (w.style.transform = "scale(1)")
			}
		}, [o]);
		return c(Q, {
			children: [e("div", {
				id: "App-window"
			}), c("section", {
				className: "AppList",
				children: [e("div", {
					//第一个图标
					//className: "AppList-app center",
					//onClick: () => {},
					//ref: u,
					//onMouseEnter: t,
					//onMouseLeave: h,
					//onMouseMove: l,
					//children: e(Ne, {
					//	className: "AppList-app-logo",
					//	theme: "outline",
					//	size: "30",
					//	fill: "slateblue",
					//	strokeWidth: 3
					//})
				}), o && o.map((r, a) => c("div", {
					className: "AppList-app center",
					onClick: () => s(r, a),
					onContextMenu: F => {
						F.preventDefault(), it(r, a, o, n)
					},
					ref: u,
					onMouseEnter: t,
					onMouseLeave: h,
					onMouseMove: l,
					children: [e("span", {
						className: "AppList-app-name",
						children: r.name
					}), e(pt, {
						src: r.logo,
						alt: r.name,
						feedback: e("div", {
							className: "AppList-app-logo-container",
							children: e("img", {
								className: "AppList-app-logo",
								src: rt,
								alt: r.name
							})
						})
					})]
				}, a)), e("div", {
					className: "AppList-app center",
					onClick: () => ut(o, n),
					ref: u,
					onMouseEnter: t,
					onMouseLeave: h,
					onMouseMove: l,
					children: e(V, {
						className: "AppList-app-logo",
						theme: "outline",
						size: "30",
						fill: "slateblue",
						strokeWidth: 3
					})
				})]
			})]
		})
	},
	mt = () => {
		const [o, n] = m.exports.useState(""), [s, i] = m.exports.useState(""), u = () => {
			let t = new Date,
				l = t.getFullYear(),
				h = t.getMonth() + 1,
				r = t.getDate(),
				a = t.getHours(),
				F = t.getMinutes(),
				d = t.getSeconds();
			n(`${l}-${h}-${r}`), i(`${a}:${F}:${d}`)
		};
		return m.exports.useEffect(() => {
			let t = setInterval(() => {
				u()
			}, 1e3);
			return () => {
				clearInterval(t)
			}
		}, []), c("div", {
			style: {
				textAlign: "right"
			},
			children: [s, e("br", {}), o]
		})
	};
const wt = () => c("div", {
		className: "Dock",
		children: [e("div", {
			onClick: _e,
			style: {
				cursor: "pointer"
			},
			children: "\u5207\u6362\u58C1\u7EB8"
		}), e(ht, {}), e(mt, {})]
	}),
	Ft = () => c(je, {
		children: [c("div", {
			className: "main noselect",
			//注释 we搜 ot清单 wt程序
			children: [e(We, {}), /*e(ot, {}),*/ e(wt, {})]
		}), e(Oe, {})]
	}),
	te = "1.1.2",
	Ct = () => {
		U("version") !== te && (Se(), B("version", te))
	};
Ct();
I.render(e(Le.StrictMode, {
	children: e(Ft, {})
}), document.getElementById("root"));