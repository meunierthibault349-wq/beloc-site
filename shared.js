function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* BeLoc — shared components & icons (Babel/JSX) */
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

/* ---------------- Icons (thin line) ---------------- */
function Ic(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: props.sw || 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props.attrs || {}), props.children);
}
const Icons = {
  arrow: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  arrowR: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  arrowL: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M11 6l-6 6 6 6"
  })),
  arrowDown: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M6 13l6 6 6-6"
  })),
  chevR: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  })),
  chevL: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 6l-6 6 6 6"
  })),
  chevD: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })),
  menu: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  })),
  close: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })),
  phone: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L17 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 1-2Z"
  })),
  star: /*#__PURE__*/React.createElement(Ic, {
    sw: 1
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.9 6.7 19.6l1.1-6L3.4 9.4l6-.8L12 3Z",
    fill: "currentColor"
  })),
  heart: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 20s-7-4.5-9.5-9A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 9.5 5c-2.5 4.5-9.5 9-9.5 9Z"
  })),
  check: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 6"
  })),
  checkCircle: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  })),
  bolt: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M13 2L4 14h7l-1 8 9-12h-7l1-8Z"
  })),
  gauge: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 14l4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 18a9 9 0 1 1 15 0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  })),
  road: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 21l3-18M19 21l-3-18M12 5v2M12 11v2M12 17v2"
  })),
  gear: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
  })),
  users: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.5M21 20a5.5 5.5 0 0 0-4-5.3"
  })),
  fuel: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 21V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15M3 21h13M14 9h2.5a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V9l-2.5-2.5"
  })),
  flag: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 21V4M5 4h11l-2 4 2 4H5"
  })),
  online: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 21h8M12 18v3"
  })),
  truck: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h11v9H3zM14 9h4l3 3v3h-7z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "1.6"
  })),
  shield: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4"
  })),
  lock: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "11",
    width: "14",
    height: "9",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V8a4 4 0 0 1 8 0v3"
  })),
  calendar: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M8 3v4M16 3v4"
  })),
  pin: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.6"
  })),
  clock: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  mail: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 7l8 6 8-6"
  })),
  card: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "12",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18"
  })),
  plus: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  sparkle: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
  })),
  key: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "14",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 11l8-8M16 3l3 3M14 5l2 2"
  })),
  headset: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 13v-1a8 8 0 0 1 16 0v1M4 13a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2zM20 13a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2zM18 15v1a4 4 0 0 1-4 4h-2"
  })),
  infinity: /*#__PURE__*/React.createElement(Ic, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 9a3 3 0 1 0 0 6c2 0 3-2 5-3s3-3 5-3a3 3 0 1 1 0 6c-2 0-3-2-5-3S9 9 7 9Z"
  }))
};

/* ---------------- Wordmark ---------------- */
function Wordmark(props) {
  return /*#__PURE__*/React.createElement("span", {
    className: "wordmark",
    style: props.style,
    onClick: props.onClick,
    role: props.onClick ? "button" : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "be"
  }, "Be"), /*#__PURE__*/React.createElement("span", {
    className: "loc"
  }, "Loc"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "."));
}

/* ---------------- Eyebrow ---------------- */
function Eyebrow(props) {
  return /*#__PURE__*/React.createElement("span", {
    className: "eyebrow" + (props.center ? " center" : ""),
    style: props.style
  }, props.children);
}

/* ---------------- Stars ---------------- */
function Stars(props) {
  const n = props.n || 5;
  return /*#__PURE__*/React.createElement("span", {
    className: "stars",
    "aria-label": props.value + " sur 5"
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, Icons.star)));
}

/* ---------------- Button (router-aware) ---------------- */
function Button(props) {
  const cls = ["btn", "btn-" + (props.variant || "primary"), props.size ? "btn-" + props.size : "", props.block ? "btn-block" : "", props.className || ""].join(" ").trim();
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    onClick: props.onClick,
    disabled: props.disabled,
    type: props.type || "button",
    style: props.style
  }, props.children, props.icon !== false && (props.icon || Icons.arrow));
}

/* ---------------- Reveal on scroll ---------------- */
function Reveal(props) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(function () {
    const el = ref.current;
    if (!el) return;
    // Immediate check: if already in (or near) the viewport on mount, reveal now.
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    if (r.top < vh * 0.92) {
      setSeen(true);
      return;
    }
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: "0px 0px -6% 0px"
      });
      io.observe(el);
    }
    // Safety net: never leave content hidden if observer never fires.
    const t = window.setTimeout(function () {
      setSeen(true);
    }, 1200);
    return function () {
      if (io) io.disconnect();
      window.clearTimeout(t);
    };
  }, []);
  const Tag = props.as || "div";
  const cls = ["reveal", props.delay ? "reveal-d" + props.delay : "", seen ? "in" : "", props.className || ""].join(" ").trim();
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    className: cls,
    style: props.style
  }, props.children);
}

/* ---------------- Image with graceful fallback ---------------- */
function Img(props) {
  const [err, setErr] = useState(false);
  if (err || !props.src) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ph " + (props.className || ""),
      style: props.style
    }, /*#__PURE__*/React.createElement("span", null, props.label || "Visuel"));
  }
  return /*#__PURE__*/React.createElement("img", {
    src: props.src,
    alt: props.alt || "",
    className: props.className,
    style: props.style,
    loading: props.eager ? "eager" : "lazy",
    onError: function () {
      setErr(true);
    }
  });
}

/* ---------------- Header ---------------- */
const NAV = [{
  id: "home",
  label: "Accueil"
}, {
  id: "fleet",
  label: "La Flotte"
}, {
  id: "how",
  label: "Comment ça marche"
}, {
  id: "about",
  label: "À propos"
}];
function Header(props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(function () {
    const onScroll = function () {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(function () {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  const go = function (id) {
    setOpen(false);
    props.nav(id);
  };
  const B = window.BELOC;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "hdr" + (scrolled || props.solid ? " scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "hdr-inner"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onClick: function () {
      go("home");
    },
    style: {
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    className: "hdr-nav"
  }, NAV.map(function (n) {
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      className: "hdr-link" + (props.route === n.id ? " active" : ""),
      onClick: function () {
        go(n.id);
      }
    }, n.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "hdr-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hdr-phone"
  }, Icons.headset, /*#__PURE__*/React.createElement("span", null, "Assistance 7j/7")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: function () {
      go("fleet");
    },
    icon: Icons.arrow
  }, "R\xE9server"), /*#__PURE__*/React.createElement("button", {
    className: "burger",
    onClick: function () {
      setOpen(true);
    },
    "aria-label": "Menu"
  }, Icons.menu)))), /*#__PURE__*/React.createElement("div", {
    className: "drawer" + (open ? " open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer-top"
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("button", {
    className: "burger",
    style: {
      display: "inline-flex"
    },
    onClick: function () {
      setOpen(false);
    },
    "aria-label": "Fermer"
  }, Icons.close)), /*#__PURE__*/React.createElement("nav", {
    className: "drawer-nav"
  }, NAV.map(function (n, i) {
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      onClick: function () {
        go(n.id);
      }
    }, n.label, /*#__PURE__*/React.createElement("span", {
      className: "idx"
    }, "0", i + 1));
  })), /*#__PURE__*/React.createElement("div", {
    className: "drawer-foot"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    onClick: function () {
      go("fleet");
    }
  }, "R\xE9server un v\xE9hicule"), /*#__PURE__*/React.createElement("span", {
    className: "hdr-phone",
    style: {
      display: "inline-flex"
    }
  }, Icons.phone, /*#__PURE__*/React.createElement("span", null, B.phone)))));
}

/* ---------------- Footer ---------------- */
function Footer(props) {
  const B = window.BELOC;
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr-col ftr-brand"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    style: {
      fontSize: 26
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "L'agence 100% en ligne de location de v\xE9hicules premium et hautes performances en ", B.region, "."), /*#__PURE__*/React.createElement("div", {
    className: "ftr-pay"
  }, /*#__PURE__*/React.createElement("span", {
    className: "paychip"
  }, Icons.lock, " Paiement s\xE9curis\xE9"), /*#__PURE__*/React.createElement("span", {
    className: "paychip"
  }, "Visa"), /*#__PURE__*/React.createElement("span", {
    className: "paychip"
  }, "Mastercard"), /*#__PURE__*/React.createElement("span", {
    className: "paychip"
  }, "Apple\xA0Pay"))), /*#__PURE__*/React.createElement("div", {
    className: "ftr-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Naviguer"), NAV.map(function (n) {
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      onClick: function () {
        props.nav(n.id);
      }
    }, n.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "ftr-col"
  }, /*#__PURE__*/React.createElement("h5", null, "La Flotte"), B.vehicles.map(function (v) {
    return /*#__PURE__*/React.createElement("a", {
      key: v.id,
      onClick: function () {
        props.nav("detail", v.id);
      }
    }, v.full);
  })), /*#__PURE__*/React.createElement("div", {
    className: "ftr-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Contact"), /*#__PURE__*/React.createElement("a", {
    onClick: function () {
      props.nav("about");
    }
  }, B.phone), /*#__PURE__*/React.createElement("a", {
    onClick: function () {
      props.nav("about");
    }
  }, B.email), /*#__PURE__*/React.createElement("a", {
    onClick: function () {
      props.nav("about");
    }
  }, "Nous \xE9crire"), /*#__PURE__*/React.createElement("a", {
    onClick: function () {
      props.nav("how");
    }
  }, "Aide & FAQ"))), /*#__PURE__*/React.createElement("div", {
    className: "ftr-bottom"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2026 BeLoc \u2014 ", B.region), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, /*#__PURE__*/React.createElement("a", null, "Mentions l\xE9gales"), /*#__PURE__*/React.createElement("a", null, "CGV / CGU"), /*#__PURE__*/React.createElement("a", null, "Confidentialit\xE9"), /*#__PURE__*/React.createElement("a", null, "Cookies")))));
}

/* ---------------- Toast ---------------- */
function useToast() {
  const [msg, setMsg] = useState(null);
  const show = useCallback(function (m) {
    setMsg(m);
    window.clearTimeout(window.__belocToast);
    window.__belocToast = window.setTimeout(function () {
      setMsg(null);
    }, 2600);
  }, []);
  const node = /*#__PURE__*/React.createElement("div", {
    className: "toast" + (msg ? " show" : "")
  }, Icons.check, /*#__PURE__*/React.createElement("span", null, msg));
  return [node, show];
}

/* ---------------- helpers ---------------- */
function eur(n) {
  return new Intl.NumberFormat("fr-FR").format(n) + " €";
}
function priceFrom(v) {
  return Math.min(v.prices.day, v.prices.weekend, v.prices.week);
}
Object.assign(window, {
  Ic,
  Icons,
  Wordmark,
  Eyebrow,
  Stars,
  Button,
  Reveal,
  Img,
  Header,
  Footer,
  NAV,
  useToast,
  eur,
  priceFrom
});
