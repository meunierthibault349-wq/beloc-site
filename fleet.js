/* BeLoc — Fleet / Catalogue page (Babel/JSX) */
function FleetPage(props) {
  const B = window.BELOC;
  const [type, setType] = useState("Tous");
  const [budget, setBudget] = useState("all");
  const [sort, setSort] = useState("featured");
  const types = ["Tous", "Sport", "Polyvalente", "Citadine"];
  let list = B.vehicles.filter(function (v) {
    if (type !== "Tous" && v.type !== type) return false;
    if (budget === "lt150" && priceFrom(v) >= 150) return false;
    if (budget === "150-300" && (priceFrom(v) < 150 || priceFrom(v) > 300)) return false;
    if (budget === "gt300" && priceFrom(v) <= 300) return false;
    return true;
  });
  list = list.slice().sort(function (a, b) {
    if (sort === "price-asc") return priceFrom(a) - priceFrom(b);
    if (sort === "price-desc") return priceFrom(b) - priceFrom(a);
    if (sort === "power") return parseInt(b.specs.puissance) - parseInt(a.specs.puissance);
    return (b.flagship ? 2 : 0) + (b.sport ? 1 : 0) - ((a.flagship ? 2 : 0) + (a.sport ? 1 : 0));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "page pad-top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "fleet-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Catalogue \xB7 ", list.length, " v\xE9hicules disponibles")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead",
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: "clamp(40px,6vw,84px)"
    }
  }, "La Flotte"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Cinq voitures tri\xE9es sur le volet, de la citadine raffin\xE9e \xE0 la sportive d'exception. Toutes pr\xEAtes \xE0 \xEAtre r\xE9serv\xE9es en quelques minutes."))))), /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filters-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chip-row"
  }, types.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      className: "chip" + (type === t ? " on" : ""),
      onClick: function () {
        setType(t);
      }
    }, t);
  })), /*#__PURE__*/React.createElement("div", {
    className: "chip-row"
  }, [{
    id: "all",
    l: "Tous budgets"
  }, {
    id: "lt150",
    l: "< 150€"
  }, {
    id: "150-300",
    l: "150–300€"
  }, {
    id: "gt300",
    l: "> 300€"
  }].map(function (b) {
    return /*#__PURE__*/React.createElement("button", {
      key: b.id,
      className: "chip" + (budget === b.id ? " on" : ""),
      onClick: function () {
        setBudget(b.id);
      }
    }, b.l);
  })), /*#__PURE__*/React.createElement("div", {
    className: "filters-spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sortsel"
  }, /*#__PURE__*/React.createElement("span", null, "Trier"), /*#__PURE__*/React.createElement("select", {
    value: sort,
    onChange: function (e) {
      setSort(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "featured"
  }, "En vedette"), /*#__PURE__*/React.createElement("option", {
    value: "price-asc"
  }, "Prix croissant"), /*#__PURE__*/React.createElement("option", {
    value: "price-desc"
  }, "Prix d\xE9croissant"), /*#__PURE__*/React.createElement("option", {
    value: "power"
  }, "Puissance")))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: "clamp(36px,4vw,56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "80px 0",
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "serif",
    style: {
      fontSize: 28
    }
  }, "Aucun v\xE9hicule pour ces crit\xE8res."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: false,
    onClick: function () {
      setType("Tous");
      setBudget("all");
    }
  }, "R\xE9initialiser les filtres")) : /*#__PURE__*/React.createElement("div", {
    className: "fleet-grid"
  }, list.map(function (v, i) {
    return /*#__PURE__*/React.createElement(Reveal, {
      key: v.id,
      delay: i % 3 + 1
    }, /*#__PURE__*/React.createElement(VehicleCard, {
      v: v,
      nav: props.nav,
      onFav: props.onFav,
      eager: i < 3
    }));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "cta-banner",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Une h\xE9sitation ?"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(26px,3vw,40px)",
      margin: "14px 0 0"
    }
  }, "Notre conciergerie t'aide \xE0 choisir.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    icon: false,
    onClick: function () {
      props.nav("about");
    }
  }, "Nous contacter"), /*#__PURE__*/React.createElement(Button, {
    onClick: function () {
      props.nav("how");
    },
    icon: Icons.arrow
  }, "Comment \xE7a marche")))))));
}
Object.assign(window, {
  FleetPage
});
