/* BeLoc — Vehicle Detail page (Babel/JSX) */
const MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const DOW = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
function busySet(seed) {
  // deterministic "booked" days per vehicle
  const s = {};
  let x = seed * 9301 + 49297;
  for (let i = 0; i < 8; i++) {
    x = (x * 233280 + 49297) % 233281;
    s[x % 27 + 1] = true;
  }
  return s;
}
function Calendar(props) {
  const today = new Date();
  const [view, setView] = useState({
    y: today.getFullYear(),
    m: today.getMonth()
  });
  const busy = props.busy || {};
  const first = new Date(view.y, view.m, 1);
  let startDow = (first.getDay() + 6) % 7; // Mon=0
  const days = new Date(view.y, view.m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  const isPast = function (d) {
    const dt = new Date(view.y, view.m, d);
    const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dt < t0;
  };
  const isBusy = function (d) {
    return view.m === today.getMonth() && busy[d];
  };
  const sel = props.range; // {start, end} as day numbers in current view (simplified)
  const inRange = function (d) {
    if (!sel || sel.start == null || sel.end == null) return false;
    return d > sel.start && d < sel.end;
  };
  const nav = function (delta) {
    let m = view.m + delta,
      y = view.y;
    if (m < 0) {
      m = 11;
      y--;
    }
    if (m > 11) {
      m = 0;
      y++;
    }
    setView({
      y: y,
      m: m
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "m"
  }, MONTHS[view.m], " ", view.y), /*#__PURE__*/React.createElement("div", {
    className: "cal-nav"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      nav(-1);
    },
    "aria-label": "Mois pr\xE9c\xE9dent"
  }, Icons.chevL), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      nav(1);
    },
    "aria-label": "Mois suivant"
  }, Icons.chevR))), /*#__PURE__*/React.createElement("div", {
    className: "cal-grid"
  }, DOW.map(function (d) {
    return /*#__PURE__*/React.createElement("div", {
      className: "cal-dow",
      key: d
    }, d);
  }), cells.map(function (d, i) {
    if (d == null) return /*#__PURE__*/React.createElement("div", {
      key: "e" + i
    });
    const off = isPast(d),
      bz = isBusy(d);
    const isSel = sel && (d === sel.start || d === sel.end);
    const cls = ["cal-day", off ? "off" : "", bz ? "busy" : "", isSel ? "sel" : "", inRange(d) ? "inrange" : ""].join(" ").trim();
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: cls,
      onClick: function () {
        if (!off && !bz && props.onPick) props.onPick(d, view);
      }
    }, d);
  })), /*#__PURE__*/React.createElement("div", {
    className: "cal-legend"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "var(--gold)"
    }
  }), "S\xE9lection"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "var(--ink-600)"
    }
  }), "Disponible"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "transparent",
      border: "1px solid var(--muted-2)"
    }
  }), "R\xE9serv\xE9")));
}
function DetailPage(props) {
  const v = window.BELOC.byId(props.params);
  const [active, setActive] = useState(0);
  const [tier, setTier] = useState("day");
  const [range, setRange] = useState(null);
  const [showSticky, setShowSticky] = useState(false);
  const ctaRef = useRef(null);
  useEffect(function () {
    window.scrollTo(0, 0);
    setActive(0);
    setTier("day");
    setRange(null);
  }, [props.params]);
  useEffect(function () {
    const onScroll = function () {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  if (!v) return /*#__PURE__*/React.createElement("div", {
    className: "page pad-top section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, "V\xE9hicule introuvable."));
  const busy = busySet(v.full.length);
  const tiers = [{
    id: "day",
    t: "La journée",
    s: "24 heures",
    price: v.prices.day
  }, {
    id: "weekend",
    t: "Le week-end",
    s: "Ven. → Lun. · 3 jours",
    price: v.prices.weekend
  }, {
    id: "week",
    t: "La semaine",
    s: "7 jours",
    price: v.prices.week
  }];
  const tierObj = tiers.find(function (t) {
    return t.id === tier;
  });
  const pickDay = function (d, view) {
    if (!range || range.start == null || range.end != null) {
      setRange({
        start: d,
        end: null
      });
    } else {
      if (d < range.start) setRange({
        start: d,
        end: range.start
      });else setRange({
        start: range.start,
        end: d
      });
    }
  };
  const goBook = function () {
    props.nav("booking", {
      id: v.id,
      tier: tier,
      range: range
    });
  };
  const specRows = [{
    k: "Puissance",
    v: v.specs.puissance,
    u: "ch",
    ic: Icons.bolt
  }, {
    k: "0 → 100 km/h",
    v: v.specs.zero,
    u: "s",
    ic: Icons.gauge
  }, {
    k: "Vitesse max",
    v: v.specs.vmax,
    u: "km/h",
    ic: Icons.gauge
  }, {
    k: "Moteur",
    v: v.specs.moteur,
    u: "",
    ic: Icons.gear
  }, {
    k: "Boîte",
    v: v.specs.boite,
    u: "",
    ic: Icons.gear
  }, {
    k: "Transmission",
    v: v.specs.transmission,
    u: "",
    ic: Icons.road
  }, {
    k: "Places",
    v: v.specs.places,
    u: "",
    ic: Icons.users
  }, {
    k: "Carburant",
    v: v.specs.carburant,
    u: "· " + v.specs.conso,
    ic: Icons.fuel
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page pad-top"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: "clamp(28px,4vw,44px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: function () {
      props.nav("home");
    },
    style: {
      cursor: "pointer"
    }
  }, "Accueil"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted-2)"
    }
  }, "/"), /*#__PURE__*/React.createElement("a", {
    onClick: function () {
      props.nav("fleet");
    },
    style: {
      cursor: "pointer"
    }
  }, "Flotte"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted-2)"
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold)"
    }
  }, v.full)))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: "clamp(20px,3vw,30px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead",
    style: {
      alignItems: "flex-end",
      marginBottom: "clamp(24px,3vw,40px)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, v.flagship && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-gold"
  }, Icons.sparkle, " Vaisseau amiral"), v.isNew && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-new"
  }, "Nouveaut\xE9 2026"), v.sport && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-sport"
  }, "Sport"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, v.colorName)), /*#__PURE__*/React.createElement("div", {
    className: "vcard-brand",
    style: {
      fontSize: 12
    }
  }, v.brand, " \xB7 ", v.year), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: "clamp(44px,6.5vw,92px)",
      marginTop: 6
    }
  }, v.name)), /*#__PURE__*/React.createElement("p", {
    className: "serif italic",
    style: {
      fontSize: "clamp(22px,2.6vw,34px)",
      color: "var(--gold-soft)",
      maxWidth: "20ch",
      lineHeight: 1.2
    }
  }, "\u201C", v.tagline, "\u201D")))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail-layout"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "detail-gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail-stage"
  }, /*#__PURE__*/React.createElement(Img, {
    src: v.gallery[active],
    alt: v.full,
    eager: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, active + 1, " / ", v.gallery.length))), v.gallery.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "detail-thumbs"
  }, v.gallery.map(function (g, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      className: "detail-thumb" + (i === active ? " on" : ""),
      onClick: function () {
        setActive(i);
      }
    }, /*#__PURE__*/React.createElement(Img, {
      src: g,
      alt: ""
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "clamp(40px,5vw,64px)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Le caract\xE8re"), /*#__PURE__*/React.createElement("p", {
    className: "serif",
    style: {
      fontSize: "clamp(24px,3vw,38px)",
      lineHeight: 1.32,
      fontWeight: 500,
      margin: "18px 0 0",
      textWrap: "pretty"
    }
  }, v.short)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginTop: 30
    }
  }, v.featured.map(function (f, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "badge badge-gold",
      style: {
        padding: "9px 14px",
        fontSize: 11
      }
    }, f);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "clamp(44px,5vw,72px)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Fiche technique"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(28px,3.4vw,46px)",
      margin: "16px 0 24px"
    }
  }, "Les chiffres qui comptent."), /*#__PURE__*/React.createElement("div", {
    className: "specsheet"
  }, specRows.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "specrow",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, s.ic, s.k), /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, s.v, " ", s.u && /*#__PURE__*/React.createElement("small", null, s.u)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "clamp(44px,5vw,72px)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Disponibilit\xE9s"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(28px,3.4vw,46px)",
      margin: "16px 0 24px"
    }
  }, "Choisis tes dates."), /*#__PURE__*/React.createElement(Calendar, {
    busy: busy,
    range: range,
    onPick: pickDay
  }))), /*#__PURE__*/React.createElement("aside", {
    className: "detail-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "buybox",
    ref: ctaRef
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono-label"
  }, "\xC0 partir de"), /*#__PURE__*/React.createElement("span", {
    className: "stars"
  }, [1, 2, 3, 4, 5].map(function (i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i
    }, Icons.star);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 46,
      fontWeight: 600,
      whiteSpace: "nowrap"
    }
  }, eur(v.prices.day)), /*#__PURE__*/React.createElement("span", {
    className: "mono-label"
  }, "/ jour \xB7 tout inclus")), /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      marginBottom: 12
    }
  }, "Formule"), tiers.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "tier" + (tier === t.id ? " on" : ""),
      onClick: function () {
        setTier(t.id);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "tier-main"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tier-radio"
    }), /*#__PURE__*/React.createElement("span", {
      className: "tier-l"
    }, /*#__PURE__*/React.createElement("span", {
      className: "t"
    }, t.t), /*#__PURE__*/React.createElement("span", {
      className: "s"
    }, t.s))), /*#__PURE__*/React.createElement("span", {
      className: "tier-r"
    }, eur(t.price)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      margin: "20px 0 18px",
      paddingTop: 18,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "Total estim\xE9"), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 32,
      fontWeight: 600
    }
  }, eur(tierObj.price))), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    onClick: goBook
  }, "R\xE9server ce v\xE9hicule"), /*#__PURE__*/React.createElement("div", {
    className: "trust-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, Icons.lock, " Paiement 100% s\xE9curis\xE9 \xB7 3D Secure"), /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, Icons.checkCircle, " Annulation gratuite jusqu'\xE0 48h avant"), /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, Icons.shield, " Assurance tous risques & assistance incluses"), /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, Icons.truck, " Livraison possible dans toute la r\xE9gion"))))))), /*#__PURE__*/React.createElement("div", {
    className: "sticky-cta" + (showSticky ? " show" : "")
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      marginBottom: 2
    }
  }, v.full, " \xB7 ", tierObj.t), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 26,
      fontWeight: 600
    }
  }, eur(tierObj.price))), /*#__PURE__*/React.createElement(Button, {
    onClick: goBook
  }, "R\xE9server")));
}
Object.assign(window, {
  DetailPage,
  Calendar
});
