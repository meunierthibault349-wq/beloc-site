/* BeLoc — How it works + About/Contact (Babel/JSX) */

function HowPage(props) {
  const [open, setOpen] = useState(0);
  const steps = [{
    t: "Je choisis mon véhicule",
    p: "Parcours nos cinq modèles, compare puissances, formules et tarifs. Chaque fiche te dit tout — sans jargon."
  }, {
    t: "Je réserve en ligne",
    p: "Dates, lieu de prise en charge, paiement sécurisé : quatre étapes depuis ton téléphone, et c'est réservé."
  }, {
    t: "Je récupère les clés",
    p: "Au point relais le plus proche, ou en livraison là où tu es. État des lieux digital, signature en deux gestes."
  }, {
    t: "Je profite",
    p: "La route est à toi. Assistance 7j/7 dans la poche, assurance tous risques incluse. Roule l'esprit léger."
  }];
  const faqs = [{
    q: "Faut-il un dépôt de garantie ?",
    a: "Oui, une empreinte de caution est réalisée sur ta carte à la prise en charge, puis libérée automatiquement au retour du véhicule. Son montant dépend du modèle et t'est indiqué avant paiement."
  }, {
    q: "Quelles conditions pour conduire ?",
    a: "Il faut avoir au minimum 21 ans (25 pour les modèles sportifs RS3 et Golf 8R), être titulaire d'un permis B valide depuis au moins 2 ans, et présenter une pièce d'identité à la prise en charge."
  }, {
    q: "La livraison, comment ça marche ?",
    a: "Pour 49 €, on t'apporte la voiture à l'adresse de ton choix dans toute la région Auvergne-Rhône-Alpes — domicile, gare, aéroport ou hôtel — à l'heure convenue. Le retour se fait au même endroit."
  }, {
    q: "Puis-je annuler ma réservation ?",
    a: "L'annulation est gratuite jusqu'à 48 heures avant le début de la location. Passé ce délai, des frais peuvent s'appliquer selon les conditions précisées au moment de la réservation."
  }, {
    q: "Le kilométrage est-il limité ?",
    a: "Chaque formule inclut un forfait kilométrique généreux (200 km/jour, 600 km/week-end). Au-delà, un tarif au kilomètre clair et sans surprise s'applique."
  }, {
    q: "L'assurance est-elle comprise ?",
    a: "Oui. Toutes nos locations incluent une assurance tous risques et l'assistance 7j/7. Tu peux réduire la franchise via une option au moment de réserver."
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page pad-top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Comment \xE7a marche")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: "clamp(40px,6vw,88px)",
      margin: "16px 0 18px"
    }
  }, "Du d\xE9sir au volant,", /*#__PURE__*/React.createElement("br", null), "en quatre temps.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "BeLoc, c'est la location premium d\xE9barrass\xE9e de tout ce qui p\xE8se : pas d'agence, pas de comptoir, pas de paperasse. Juste toi, ton t\xE9l\xE9phone, et la voiture de tes envies.")), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: "clamp(40px,5vw,64px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "howsteps"
  }, steps.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "howstep",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "n"
    }, "0", i + 1), /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", null, s.p));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "assure"
  }, [{
    ic: Icons.clock,
    t: "4 étapes, 3 minutes",
    p: "Le temps d'un café : c'est tout ce qu'il faut pour réserver une voiture d'exception."
  }, {
    ic: Icons.infinity,
    t: "Zéro contact imposé",
    p: "Tout est digital de bout en bout. Un humain reste joignable 7j/7 si tu le souhaites."
  }, {
    ic: Icons.headset,
    t: "Conciergerie dédiée",
    p: "Un doute, une demande spéciale ? Notre équipe répond et t'accompagne avant, pendant, après."
  }].map(function (a, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "assure-item",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, a.ic), /*#__PURE__*/React.createElement("h4", null, a.t), /*#__PURE__*/React.createElement("p", null, a.p));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Questions fr\xE9quentes")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(32px,4.5vw,60px)"
    }
  }, "On vous dit tout."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Une question qui n'est pas l\xE0 ? Notre conciergerie r\xE9pond sous quelques minutes, 7j/7."))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", null, faqs.map(function (f, i) {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      className: "faq-item" + (isOpen ? " open" : ""),
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      className: "faq-q",
      onClick: function () {
        setOpen(isOpen ? -1 : i);
      }
    }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
      className: "pm"
    }, Icons.plus)), /*#__PURE__*/React.createElement("div", {
      className: "faq-a",
      style: {
        maxHeight: isOpen ? 240 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "faq-a-inner"
    }, f.a)));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight",
    style: {
      paddingBottom: "clamp(64px,9vw,132px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "cta-banner",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      margin: "0 auto 26px"
    }
  }, "Tu sais tout. Il ne reste qu'\xE0 choisir."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: function () {
      props.nav("fleet");
    }
  }, "Voir la flotte"))))));
}
function AboutPage(props) {
  const B = window.BELOC;
  const [sent, setSent] = useState(false);
  const rs3 = B.byId("audi-rs3");
  return /*#__PURE__*/React.createElement("div", {
    className: "page pad-top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "\xC0 propos \xB7 ", B.region)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: "clamp(40px,6vw,84px)",
      margin: "16px 0 22px"
    }
  }, "Jeune agence,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: "var(--gold-soft)"
    }
  }, "vieille obsession :"), /*#__PURE__*/React.createElement("br", null), "le plaisir de conduire.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginBottom: 18
    }
  }, "BeLoc est n\xE9e d'une conviction simple : poss\xE9der une voiture d'exception n'est plus une fin en soi. La vivre, le temps d'un week-end ou d'une occasion qui compte, l'est bien davantage."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Bas\xE9e au c\u0153ur de l'Auvergne-Rh\xF4ne-Alpes, notre agence 100% en ligne s\xE9lectionne une poign\xE9e de mod\xE8les d'exception et les met \xE0 port\xE9e de clic. Pas de comptoir, pas de friction \u2014 juste l'essentiel : la route, et la voiture qu'il te faut pour la savourer."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/5",
      borderRadius: 8,
      overflow: "hidden",
      border: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: rs3.hero,
    alt: "BeLoc",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    eager: true
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "about-figures"
  }, [{
    n: "2024",
    l: "Année de création"
  }, {
    n: "5",
    l: "Modèles d'exception"
  }, {
    n: "100%",
    l: "Réservation en ligne"
  }].map(function (f, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "figure",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "n serif"
    }, f.n), /*#__PURE__*/React.createElement("div", {
      className: "l"
    }, f.l));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("hr", {
    className: "divider"
  })), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(30px,4vw,52px)",
      margin: "16px 0 24px"
    }
  }, "Parlons de ton prochain trajet.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginBottom: 28
    }
  }, "Une demande particuli\xE8re, un \xE9v\xE9nement, une question sur un mod\xE8le ? Notre conciergerie te r\xE9pond sous quelques minutes, 7j/7.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-info-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, Icons.phone), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, B.phone), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "Assistance & conciergerie \xB7 7j/7"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-info-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, Icons.mail), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, B.email), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "R\xE9ponse sous quelques minutes"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-info-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, Icons.pin), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, B.region), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "Livraison dans toute la r\xE9gion")))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-800)",
      border: "1px solid var(--line)",
      borderRadius: 8,
      padding: "clamp(24px,3vw,36px)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "30px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm-check",
    style: {
      width: 64,
      height: 64,
      marginBottom: 22
    }
  }, Icons.check), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 28,
      fontWeight: 600,
      margin: "0 0 10px"
    }
  }, "Message envoy\xE9."), /*#__PURE__*/React.createElement("p", {
    className: "oc-s"
  }, "On revient vers toi tr\xE8s vite."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: false,
    onClick: function () {
      setSent(false);
    },
    style: {
      marginTop: 18
    }
  }, "Nouveau message")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: function (e) {
      e.preventDefault();
      setSent(true);
      props.toast && props.toast("Message envoyé !");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Pr\xE9nom"), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "Camille"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Nom"), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "Roux"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: "camille@email.fr"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Sujet"), /*#__PURE__*/React.createElement("select", null, /*#__PURE__*/React.createElement("option", null, "Une question sur un v\xE9hicule"), /*#__PURE__*/React.createElement("option", null, "Une demande pour un \xE9v\xE9nement"), /*#__PURE__*/React.createElement("option", null, "R\xE9server une livraison"), /*#__PURE__*/React.createElement("option", null, "Autre"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Message"), /*#__PURE__*/React.createElement("textarea", {
    rows: "4",
    required: true,
    placeholder: "Dis-nous tout\u2026"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    block: true
  }, "Envoyer le message"))))))));
}
function OffersPage(props) {
  const B = window.BELOC;
  return /*#__PURE__*/React.createElement("div", {
    className: "page pad-top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Nos offres")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: "clamp(40px,6vw,88px)",
      margin: "16px 0 18px"
    }
  }, "Une formule", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: "var(--gold-soft)"
    }
  }, "pour chaque aventure."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Journ\xE9e, week-end ou semaine \u2014 chaque mod\xE8le est disponible dans les trois formules. Assurance tous risques et assistance 7j/7 incluses dans chaque tarif.")))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "offers-grid"
  }, B.vehicles.map(function (v) {
    return /*#__PURE__*/React.createElement("div", {
      className: "offer-card",
      key: v.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "offer-img"
    }, /*#__PURE__*/React.createElement(Img, {
      src: v.hero,
      alt: v.full,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "offer-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "offer-title"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono-label"
    }, v.brand), /*#__PURE__*/React.createElement("h3", {
      className: "serif offer-name"
    }, v.name), v.isNew && /*#__PURE__*/React.createElement("span", {
      className: "badge badge-new",
      style: {
        marginLeft: "auto"
      }
    }, "Nouveau"), v.sport && !v.isNew && /*#__PURE__*/React.createElement("span", {
      className: "badge badge-sport",
      style: {
        marginLeft: "auto"
      }
    }, v.type)), /*#__PURE__*/React.createElement("div", {
      className: "offer-prices"
    }, /*#__PURE__*/React.createElement("div", {
      className: "offer-price"
    }, /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, "Journ\xE9e"), /*#__PURE__*/React.createElement("span", {
      className: "amount"
    }, v.prices.day, " \u20AC")), /*#__PURE__*/React.createElement("div", {
      className: "offer-price feat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, "Week-end"), /*#__PURE__*/React.createElement("span", {
      className: "amount"
    }, v.prices.weekend, " \u20AC")), /*#__PURE__*/React.createElement("div", {
      className: "offer-price"
    }, /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, "Semaine"), /*#__PURE__*/React.createElement("span", {
      className: "amount"
    }, v.prices.week, " \u20AC"))), /*#__PURE__*/React.createElement(Button, {
      block: true,
      onClick: function () {
        props.nav("booking", {
          vehicleId: v.id
        });
      }
    }, "R\xE9server ce v\xE9hicule")));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Toujours inclus")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(30px,4vw,54px)"
    }
  }, "Sans surprise,", /*#__PURE__*/React.createElement("br", null), "sans ast\xE9risque.")))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "assure"
  }, [{
    ic: Icons.shield,
    t: "Assurance tous risques",
    p: "Incluse dans chaque location. Franchise réductible en option au moment de réserver."
  }, {
    ic: Icons.headset,
    t: "Assistance 7j/7",
    p: "Un imprévu sur la route ? Notre équipe est joignable à toute heure, toute la semaine."
  }, {
    ic: Icons.infinity,
    t: "Annulation gratuite",
    p: "Jusqu'à 48h avant le départ — sans frais, sans justification, remboursement immédiat."
  }].map(function (a, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "assure-item",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, a.ic), /*#__PURE__*/React.createElement("h4", null, a.t), /*#__PURE__*/React.createElement("p", null, a.p));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight",
    style: {
      paddingBottom: "clamp(64px,9vw,132px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Options \xE0 la carte")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(28px,3.5vw,48px)",
      margin: "16px 0 32px"
    }
  }, "Personnalisez votre exp\xE9rience.")), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "options-list"
  }, [{
    t: "Conducteur supplémentaire",
    p: "+15 €/jour · Partagez le volant — même couverture assurance."
  }, {
    t: "GPS premium",
    p: "+8 €/jour · Navigation temps réel, mises à jour garanties, support offline."
  }, {
    t: "Livraison à domicile",
    p: "+49 € · On amène le véhicule à l'adresse de votre choix dans toute la région."
  }, {
    t: "Réduction de franchise",
    p: "À partir de +19 €/jour · Roulez sans retenue, sans arrière-pensée."
  }].map(function (o, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "option-item",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "option-title"
    }, o.t), /*#__PURE__*/React.createElement("div", {
      className: "option-price"
    }, o.p));
  }))))));
}
function PresencePage(props) {
  const B = window.BELOC;
  return /*#__PURE__*/React.createElement("div", {
    className: "page pad-top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Notre pr\xE9sence")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: "clamp(40px,6vw,88px)",
      margin: "16px 0 18px"
    }
  }, "L'Auvergne-Rh\xF4ne-Alpes,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic",
    style: {
      color: "var(--gold-soft)"
    }
  }, "\xE0 port\xE9e de volant."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "BeLoc livre et r\xE9cup\xE8re vos v\xE9hicules dans toute la r\xE9gion \u2014 \xE0 domicile, en gare, \xE0 l'a\xE9roport ou \xE0 l'h\xF4tel. Une seule r\xE8gle : c'est nous qui venons \xE0 vous.")))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Villes desservies")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(30px,4vw,52px)",
      margin: "16px 0 32px"
    }
  }, B.cities.length, " villes,", /*#__PURE__*/React.createElement("br", null), "1 000+ points de remise.")), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "cities-grid"
  }, B.cities.map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "city-card",
      key: c
    }, /*#__PURE__*/React.createElement("span", {
      className: "city-num"
    }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
      className: "city-name"
    }, c), /*#__PURE__*/React.createElement("span", {
      className: "city-arrow"
    }, Icons.chevR));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "presence-info"
  }, [{
    ic: Icons.pin,
    t: "Livraison à l'adresse de votre choix",
    p: "Pour 49 €, nous livrons le véhicule où vous le souhaitez : domicile, gare, aéroport, hôtel. Le retour se fait au même endroit, à l'heure convenue."
  }, {
    ic: Icons.clock,
    t: "Disponible 7j/7",
    p: "Réservez au minimum 24h à l'avance. Nous confirmons le créneau de livraison par SMS dans l'heure. En cas d'urgence, notre conciergerie vous répond directement."
  }, {
    ic: Icons.shield,
    t: "Couverture régionale complète",
    p: "Toute la région Auvergne-Rhône-Alpes est couverte. Pour les demandes hors-région ou les événements spéciaux, contactez-nous — nous étudions chaque cas."
  }].map(function (b, i) {
    return /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "presence-block"
    }, /*#__PURE__*/React.createElement("span", {
      className: "presence-ic"
    }, b.ic), /*#__PURE__*/React.createElement("h3", null, b.t), /*#__PURE__*/React.createElement("p", null, b.p)));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section-tight",
    style: {
      paddingBottom: "clamp(64px,9vw,132px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "cta-banner",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      margin: "0 0 26px"
    }
  }, "On vient \xE0 vous. O\xF9 vous voulez."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: function () {
      props.nav("fleet");
    }
  }, "Choisir un v\xE9hicule"))))));
}
function ContactPage(props) {
  const B = window.BELOC;
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "page pad-top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: "clamp(36px,5vw,72px)",
      margin: "16px 0 24px"
    }
  }, "Parlons de votre", /*#__PURE__*/React.createElement("br", null), "prochain trajet.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("p", {
    className: "lede",
    style: {
      marginBottom: 32
    }
  }, "Une demande particuli\xE8re, un \xE9v\xE9nement, une question sur un mod\xE8le ? Notre conciergerie vous r\xE9pond sous quelques minutes, 7j/7.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-info-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, Icons.phone), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, B.phone), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "Assistance & conciergerie \xB7 7j/7"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-info-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, Icons.mail), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, B.email), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "R\xE9ponse sous quelques minutes"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-info-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, Icons.pin), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, B.region), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "Livraison dans toute la r\xE9gion")))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-800)",
      border: "1px solid var(--line)",
      borderRadius: 8,
      padding: "clamp(24px,3vw,36px)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "30px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm-check",
    style: {
      width: 64,
      height: 64,
      marginBottom: 22
    }
  }, Icons.check), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 28,
      fontWeight: 600,
      margin: "0 0 10px"
    }
  }, "Message envoy\xE9."), /*#__PURE__*/React.createElement("p", {
    className: "oc-s"
  }, "On revient vers vous tr\xE8s vite."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: false,
    onClick: function () {
      setSent(false);
    },
    style: {
      marginTop: 18
    }
  }, "Nouveau message")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: function (e) {
      e.preventDefault();
      setSent(true);
      props.toast && props.toast("Message envoyé !");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Pr\xE9nom"), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "Camille"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Nom"), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "Roux"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: "camille@email.fr"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Sujet"), /*#__PURE__*/React.createElement("select", null, /*#__PURE__*/React.createElement("option", null, "Une question sur un v\xE9hicule"), /*#__PURE__*/React.createElement("option", null, "Une demande pour un \xE9v\xE9nement"), /*#__PURE__*/React.createElement("option", null, "R\xE9server une livraison"), /*#__PURE__*/React.createElement("option", null, "Autre"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Message"), /*#__PURE__*/React.createElement("textarea", {
    rows: "4",
    required: true,
    placeholder: "Dis-nous tout\u2026"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    block: true
  }, "Envoyer le message"))))))));
}
Object.assign(window, {
  HowPage,
  AboutPage,
  OffersPage,
  PresencePage,
  ContactPage
});
