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
  const railRef = useRef(null);
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
  const railScroll = function (dir) {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * (el.clientWidth * 0.8),
      behavior: "smooth"
    });
  };
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
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "BeLoc \xB7 ", B.region)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display hero-h1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l1"
  }, "Conduis l'extraordinaire."), /*#__PURE__*/React.createElement("span", {
    className: "l2 italic serif"
  }, "Pour un jour."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-sub"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: function () {
      props.nav("fleet");
    }
  }, "Voir la flotte"), /*#__PURE__*/React.createElement("a", {
    className: "tlink",
    onClick: function () {
      props.nav("detail", "audi-rs3");
    }
  }, "D\xE9couvrir l'Audi RS3 ", Icons.arrow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Stars, null), /*#__PURE__*/React.createElement("span", {
    className: "mono-label"
  }, "4,9 \xB7 100% en ligne")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-stats",
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "5"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "mod\xE8les d'exception")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "100%"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "r\xE9servation en ligne")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "7j/7"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "assistance incluse"))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-scroll"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono-label",
    style: {
      writingMode: "vertical-rl",
      letterSpacing: ".2em"
    }
  }, "D\xE9filer"), /*#__PURE__*/React.createElement("span", {
    className: "line"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "flotte"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Notre flotte")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Cinq voitures.", /*#__PURE__*/React.createElement("br", null), "Aucune ordinaire."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2,
    className: "cal-nav",
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      railScroll(-1);
    },
    "aria-label": "Pr\xE9c\xE9dent"
  }, Icons.arrowL), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      railScroll(1);
    },
    "aria-label": "Suivant"
  }, Icons.arrowR)))), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail rail-pad",
    ref: railRef
  }, B.vehicles.map(function (v, i) {
    return /*#__PURE__*/React.createElement(VehicleCard, {
      key: v.id,
      v: v,
      nav: props.nav,
      className: "card-w-rail",
      onFav: props.onFav,
      eager: i < 2
    });
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "tlink",
    onClick: function () {
      props.nav("fleet");
    }
  }, "Voir toute la flotte & les filtres ", Icons.arrow))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("hr", {
    className: "divider"
  })), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Comment \xE7a marche")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Trois gestes, et la route est \xE0 toi."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Pas d'agence, pas de file d'attente, pas de paperasse. Tout se passe depuis ton t\xE9l\xE9phone \u2014 la cl\xE9 t'attend."))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, [{
    ic: Icons.sparkle,
    t: "Choisis",
    p: "Parcours la flotte, compare puissances et tarifs, et trouve la voiture qui fait battre ton cœur."
  }, {
    ic: Icons.calendar,
    t: "Réserve",
    p: "Sélectionne tes dates, ton lieu de prise en charge, paie en ligne en toute sécurité. Quatre étapes, montre en main."
  }, {
    ic: Icons.key,
    t: "Roule",
    p: "Récupère les clés au point convenu — ou fais-toi livrer. Il ne te reste plus qu'à profiter."
  }].map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "step",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "step-n"
    }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
      className: "step-ic"
    }, s.ic), /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", null, s.p));
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2,
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "tlink",
    onClick: function () {
      props.nav("how");
    }
  }, "Tout savoir sur le d\xE9roul\xE9 ", Icons.arrow)))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "cta-banner",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 0,
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "clamp(32px,4vw,64px)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Le vaisseau amiral"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(32px,4vw,56px)",
      margin: "16px 0 18px"
    }
  }, rs3.tagline), /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginBottom: 26
    }
  }, rs3.short), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      marginBottom: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n",
    style: {
      fontFamily: "var(--serif)",
      fontSize: 34,
      fontWeight: 600
    }
  }, rs3.specs.puissance, " ch"), /*#__PURE__*/React.createElement("div", {
    className: "l mono-label"
  }, "Puissance")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n",
    style: {
      fontFamily: "var(--serif)",
      fontSize: 34,
      fontWeight: 600
    }
  }, rs3.specs.zero, "s"), /*#__PURE__*/React.createElement("div", {
    className: "l mono-label"
  }, "0\u2013100 km/h")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n",
    style: {
      fontFamily: "var(--serif)",
      fontSize: 34,
      fontWeight: 600
    }
  }, eur(rs3.prices.day)), /*#__PURE__*/React.createElement("div", {
    className: "l mono-label"
  }, "par jour"))), /*#__PURE__*/React.createElement(Button, {
    onClick: function () {
      props.nav("detail", "audi-rs3");
    }
  }, "R\xE9server la RS3")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 380
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: rs3.gallery[0],
    alt: "Audi RS3",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true,
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, "La promesse BeLoc")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      textAlign: "center",
      fontSize: "clamp(30px,4vw,56px)",
      margin: "16px 0 clamp(40px,5vw,64px)"
    }
  }, "Le premium, sans la friction.")), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "assure"
  }, [{
    ic: Icons.online,
    t: "100% en ligne",
    p: "Réservation, paiement, contrat et état des lieux : tout se fait depuis ton mobile, en quelques minutes."
  }, {
    ic: Icons.truck,
    t: "Livraison possible",
    p: "On t'apporte la voiture là où tu veux dans toute la région — domicile, gare, aéroport, hôtel."
  }, {
    ic: Icons.shield,
    t: "Assistance incluse",
    p: "Assurance tous risques, assistance 7j/7 et hotline dédiée. Tu roules l'esprit tranquille."
  }].map(function (a, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "assure-item",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, a.ic), /*#__PURE__*/React.createElement("h4", null, a.t), /*#__PURE__*/React.createElement("p", null, a.p));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: 22
    }
  }, [{
    q: "Livraison de la Golf R devant chez moi à Annecy, clés en main en 5 minutes. Bluffant.",
    n: "Camille R.",
    c: "Annecy"
  }, {
    q: "La RS3 pour l'anniversaire de mon mari. Service impeccable, voiture immaculée.",
    n: "Sofia L.",
    c: "Lyon"
  }, {
    q: "Premier essai avec la Clio, tout était limpide depuis le téléphone. Je reviendrai.",
    n: "Thomas B.",
    c: "Grenoble"
  }].map(function (r, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "var(--ink-850)",
        border: "1px solid var(--line-soft)",
        borderRadius: 8,
        padding: 26
      }
    }, /*#__PURE__*/React.createElement(Stars, null), /*#__PURE__*/React.createElement("p", {
      className: "serif",
      style: {
        fontSize: 21,
        lineHeight: 1.4,
        margin: "16px 0 18px",
        color: "var(--bone)"
      }
    }, "\u201C", r.q, "\u201D"), /*#__PURE__*/React.createElement("div", {
      className: "mono-label"
    }, r.n, " \u2014 ", r.c));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "cta-banner",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true,
    style: {
      display: "inline-flex"
    }
  }, "Pr\xEAt \xE0 prendre le volant ?"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      margin: "16px auto 26px"
    }
  }, "Ta prochaine voiture n'attend qu'un clic."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: function () {
      props.nav("fleet");
    }
  }, "R\xE9server maintenant"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    onClick: function () {
      props.nav("how");
    },
    icon: Icons.arrow
  }, "Comment \xE7a marche")))))));
}
Object.assign(window, {
  HomePage,
  VehicleCard
});
