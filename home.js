/* BeLoc — Home page (Babel/JSX) */
function VehicleCard(props) {
  const v = props.v;
  const [fav, setFav] = useState(false);
  return /*#__PURE__*/React.createElement("article", {
    className: "vcard " + (props.className || "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "vcard-media"
  }, /*#__PURE__*/React.createElement(Img, {
    src: v.hero,
    alt: v.full,
    label: v.full,
    eager: props.eager
  }), /*#__PURE__*/React.createElement("div", {
    className: "vcard-tags"
  }, v.flagship && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-gold"
  }, Icons.sparkle, " Vaisseau amiral"), v.isNew && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-new"
  }, "Nouveaut\xE9"), v.sport && !v.flagship && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-sport"
  }, "Sport")), /*#__PURE__*/React.createElement("button", {
    className: "vcard-fav" + (fav ? " on" : ""),
    onClick: function () {
      setFav(!fav);
      props.onFav && props.onFav(!fav);
    },
    "aria-label": "Favori"
  }, Icons.heart)), /*#__PURE__*/React.createElement("div", {
    className: "vcard-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vcard-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "vcard-brand"
  }, v.brand, " \xB7 ", v.year), /*#__PURE__*/React.createElement("h3", {
    className: "vcard-name"
  }, v.name))), /*#__PURE__*/React.createElement("div", {
    className: "vcard-specs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vspec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, v.specs.puissance), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "chevaux")), /*#__PURE__*/React.createElement("div", {
    className: "vspec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, v.specs.zero, /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: 12
    }
  }, "s")), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "0\u2013100 km/h")), /*#__PURE__*/React.createElement("div", {
    className: "vspec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, v.specs.places), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "places"))), /*#__PURE__*/React.createElement("div", {
    className: "vcard-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "from"
  }, "d\xE8s"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, eur(priceFrom(v))), " ", /*#__PURE__*/React.createElement("span", {
    className: "per"
  }, "/ jour"))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: function () {
      props.nav("detail", v.id);
    }
  }, "R\xE9server"))));
}
function HomePage(props) {
  const B = window.BELOC;
  const rs3 = B.byId("audi-rs3");
  const heroImg = useRef(null);
  useEffect(function () {
    const el = heroImg.current;
    if (!el) return;
    let raf = 0;
    const onScroll = function () {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        const y = Math.min(window.scrollY, window.innerHeight);
        el.style.transform = "scale(1.08) translateY(" + y * 0.18 + "px)";
        raf = 0;
      });
    };
    el.style.transform = "scale(1.08)";
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-media"
  }, /*#__PURE__*/React.createElement("img", {
    ref: heroImg,
    src: rs3.hero,
    alt: "Audi RS3"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h1", {
    className: "display hero-h1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l1"
  }, "L'exception,"), /*#__PURE__*/React.createElement("span", {
    className: "l2 italic serif"
  }, "en location."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-sub"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: function () {
      props.nav("fleet");
    },
    icon: Icons.arrow
  }, "Choisir un v\xE9hicule"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Stars, null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,.55)",
      fontFamily: "var(--mono)",
      fontSize: 12,
      letterSpacing: ".1em"
    }
  }, "4,9 \xB7 Auvergne-Rh\xF4ne-Alpes \xB7 7j/7")))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-fleet-head"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(30px,4.5vw,60px)",
      margin: 0
    }
  }, "Cinq voitures.", /*#__PURE__*/React.createElement("br", null), "Aucune ordinaire.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("a", {
    className: "tlink",
    onClick: function () {
      props.nav("fleet");
    }
  }, "Filtres & d\xE9tails ", Icons.arrow))), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fleet-grid"
  }, B.vehicles.map(function (v, i) {
    return /*#__PURE__*/React.createElement(VehicleCard, {
      key: v.id,
      v: v,
      nav: props.nav,
      onFav: props.onFav,
      eager: i < 3
    });
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "gtee-strip"
  }, [{
    ic: Icons.clock,
    t: "Réservation en 3 min"
  }, {
    ic: Icons.truck,
    t: "Livraison à domicile"
  }, {
    ic: Icons.shield,
    t: "Assurance incluse"
  }, {
    ic: Icons.infinity,
    t: "Annulation gratuite 48h"
  }].map(function (g, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "gtee-item",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "gtee-ic"
    }, g.ic), /*#__PURE__*/React.createElement("span", null, g.t));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "pullquote-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pullquote"
  }, /*#__PURE__*/React.createElement(Stars, {
    n: 5
  }), /*#__PURE__*/React.createElement("blockquote", null, "\"La RS3 pour l'anniversaire de mon mari. Service impeccable, voiture immacul\xE9e \u2014 livr\xE9e en avance \xE0 notre h\xF4tel.\""), /*#__PURE__*/React.createElement("cite", null, "Sofia L. \u2014 Lyon \xB7 Client BeLoc")), /*#__PURE__*/React.createElement("div", {
    className: "pullquote-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pm-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pm-n"
  }, "4,9"), /*#__PURE__*/React.createElement("span", {
    className: "pm-l"
  }, "Note moyenne")), /*#__PURE__*/React.createElement("div", {
    className: "pm-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pm-n"
  }, "100%"), /*#__PURE__*/React.createElement("span", {
    className: "pm-l"
  }, "En ligne")), /*#__PURE__*/React.createElement("div", {
    className: "pm-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pm-n"
  }, "7j/7"), /*#__PURE__*/React.createElement("span", {
    className: "pm-l"
  }, "Disponible"))))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "final-cta"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display final-cta-h"
  }, "Pr\xEAt \xE0 prendre le volant ?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic"
  }, "R\xE9servez en 3 minutes.")), /*#__PURE__*/React.createElement("div", {
    className: "final-cta-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: function () {
      props.nav("fleet");
    },
    icon: Icons.arrow
  }, "Choisir un v\xE9hicule"), /*#__PURE__*/React.createElement("a", {
    className: "final-cta-phone",
    href: "tel:" + B.phone.replace(/\s/g, "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "final-cta-phone-ic"
  }, Icons.phone), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "final-cta-phone-num"
  }, B.phone), /*#__PURE__*/React.createElement("div", {
    className: "mono-label"
  }, "Conciergerie \xB7 7j/7")))))))));
}

/* ── RESERVATION WIDGET — Barre sticky compacte, toutes pages ── */
function ReservationWidget(props) {
  var B = window.BELOC;
  var today = new Date().toISOString().split("T")[0];
  var _s1 = useState("");
  var vehicleId = _s1[0];
  var setVehicleId = _s1[1];
  var _s2 = useState("");
  var dateFrom = _s2[0];
  var setDateFrom = _s2[1];
  var _s3 = useState("day");
  var duration = _s3[0];
  var setDuration = _s3[1];
  var vehicle = vehicleId ? B.byId(vehicleId) : null;
  var durMap = {
    day: 1,
    weekend: 2,
    week: 7
  };
  var durLabels = {
    day: "À la journée",
    weekend: "Week-end",
    week: "À la semaine"
  };
  var dateTo = "";
  if (dateFrom) {
    try {
      var d = new Date(dateFrom + "T12:00");
      d.setDate(d.getDate() + durMap[duration]);
      dateTo = d.toISOString().split("T")[0];
    } catch (ex) {}
  }
  function fmt(iso) {
    if (!iso) return null;
    try {
      return new Date(iso + "T12:00").toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short"
      });
    } catch (ex) {
      return null;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (vehicleId) {
      props.nav("booking", {
        id: vehicleId,
        tier: duration
      });
    } else {
      props.nav("fleet");
    }
  }
  var cls = "resa-bar-widget";
  return /*#__PURE__*/React.createElement("form", {
    className: cls,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "resa-bar-fields"
  }, /*#__PURE__*/React.createElement("label", {
    className: "resa-bar-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "resa-bar-field-label"
  }, "Dur\xE9e"), /*#__PURE__*/React.createElement("span", {
    className: "resa-bar-field-value" + (!duration ? " resa-bar-field-value--ph" : "")
  }, durLabels[duration] || "Choisir"), /*#__PURE__*/React.createElement("select", {
    className: "resa-bar-field-select",
    value: duration,
    onChange: function (e) {
      setDuration(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "day"
  }, "\xC0 la journ\xE9e"), /*#__PURE__*/React.createElement("option", {
    value: "weekend"
  }, "Week-end (2 jours)"), /*#__PURE__*/React.createElement("option", {
    value: "week"
  }, "\xC0 la semaine"))), /*#__PURE__*/React.createElement("div", {
    className: "resa-bar-sep"
  }), /*#__PURE__*/React.createElement("label", {
    className: "resa-bar-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "resa-bar-field-label"
  }, "V\xE9hicule"), /*#__PURE__*/React.createElement("span", {
    className: "resa-bar-field-value" + (!vehicleId ? " resa-bar-field-value--ph" : "")
  }, vehicle ? vehicle.full : "Tous les véhicules"), /*#__PURE__*/React.createElement("select", {
    className: "resa-bar-field-select",
    value: vehicleId,
    onChange: function (e) {
      setVehicleId(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Tous les v\xE9hicules"), B.vehicles.map(function (v) {
    return /*#__PURE__*/React.createElement("option", {
      key: v.id,
      value: v.id
    }, v.full);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "resa-bar-sep"
  }), /*#__PURE__*/React.createElement("label", {
    className: "resa-bar-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "resa-bar-field-label"
  }, "Date de d\xE9part"), /*#__PURE__*/React.createElement("span", {
    className: "resa-bar-field-value" + (!dateFrom ? " resa-bar-field-value--ph" : "")
  }, fmt(dateFrom) || "Choisir une date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "resa-bar-field-date",
    value: dateFrom,
    min: today,
    onChange: function (e) {
      setDateFrom(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "resa-bar-sep"
  }), /*#__PURE__*/React.createElement("div", {
    className: "resa-bar-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "resa-bar-field-label"
  }, "Date de retour"), /*#__PURE__*/React.createElement("span", {
    className: "resa-bar-field-value" + (!dateTo ? " resa-bar-field-value--ph" : "")
  }, fmt(dateTo) || "Calculée auto."))), /*#__PURE__*/React.createElement("button", {
    className: "resa-bar-btn",
    type: "submit"
  }, vehicle ? "Réserver" : "Continuer", /*#__PURE__*/React.createElement("span", {
    className: "resa-bar-btn-arrow"
  }, "\u2192")));
}
Object.assign(window, {
  HomePage,
  VehicleCard,
  ReservationWidget
});