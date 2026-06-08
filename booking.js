/* BeLoc — Booking flow (Babel/JSX) */
function BookingPage(props) {
  const init = props.params || {};
  const v = window.BELOC.byId(init.id) || window.BELOC.vehicles[0];
  const B = window.BELOC;
  const tiers = {
    day: {
      t: "La journée",
      days: 1
    },
    weekend: {
      t: "Le week-end",
      days: 3
    },
    week: {
      t: "La semaine",
      days: 7
    }
  };
  const [tier, setTier] = useState(init.tier || "day");
  const [step, setStep] = useState(1);
  const [delivery, setDelivery] = useState("agence");
  const [form, setForm] = useState({
    start: "",
    end: "",
    time: "10:00",
    city: B.cities[0],
    address: "",
    first: "",
    last: "",
    email: "",
    phone: "",
    age: "25+",
    card: "",
    exp: "",
    cvc: "",
    name: ""
  });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [ref] = useState("BL-" + Math.random().toString(36).slice(2, 7).toUpperCase());
  const set = function (k, val) {
    setForm(function (f) {
      const n = Object.assign({}, f);
      n[k] = val;
      return n;
    });
  };
  const base = v.prices[tier];
  const deliveryFee = delivery === "livraison" ? 49 : 0;
  const serviceFee = Math.round(base * 0.08);
  const total = base + deliveryFee + serviceFee;
  const steps = ["Dates & lieu", "Coordonnées", "Paiement"];
  useEffect(function () {
    window.scrollTo(0, 0);
  }, [step, done]);
  const validate = function () {
    const e = {};
    if (step === 1) {
      if (!form.start) e.start = "Requis";
      if (!form.end) e.end = "Requis";
      if (delivery === "livraison" && !form.address) e.address = "Adresse requise";
    }
    if (step === 2) {
      if (!form.first) e.first = "Requis";
      if (!form.last) e.last = "Requis";
      if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email invalide";
      if (form.phone.replace(/\D/g, "").length < 9) e.phone = "Téléphone invalide";
    }
    if (step === 3) {
      if (form.card.replace(/\s/g, "").length < 16) e.card = "Numéro incomplet";
      if (!/^\d\d\/\d\d$/.test(form.exp)) e.exp = "MM/AA";
      if (form.cvc.length < 3) e.cvc = "CVC";
      if (!form.name) e.name = "Requis";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const next = function () {
    if (!validate()) return;
    if (step < 3) setStep(step + 1);else {
      setDone(true);
      props.toast && props.toast("Réservation confirmée !");
    }
  };
  const back = function () {
    if (step > 1) setStep(step - 1);else props.nav("detail", v.id);
  };

  /* ---- confirmation ---- */
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      className: "page pad-top"
    }, /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "confirm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "confirm-check"
    }, Icons.check), /*#__PURE__*/React.createElement(Eyebrow, {
      center: true,
      style: {
        display: "inline-flex"
      }
    }, "R\xE9servation confirm\xE9e"), /*#__PURE__*/React.createElement("h1", {
      className: "display",
      style: {
        fontSize: "clamp(34px,5vw,62px)",
        margin: "18px 0 14px"
      }
    }, "\xC0 tr\xE8s vite sur la route, ", form.first || "ami", "."), /*#__PURE__*/React.createElement("p", {
      className: "lede",
      style: {
        margin: "0 auto 8px"
      }
    }, "Ta ", v.full, " t'attend. Un email de confirmation vient de partir vers ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--bone)"
      }
    }, form.email || "ton adresse"), " avec le contrat et les d\xE9tails de prise en charge."), /*#__PURE__*/React.createElement("div", {
      className: "resref"
    }, "R\xE9f\xE9rence \xB7 ", ref), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--ink-800)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        padding: 24,
        marginTop: 36,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sumrow"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, "V\xE9hicule"), /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, v.full)), /*#__PURE__*/React.createElement("div", {
      className: "sumrow"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, "Formule"), /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, tiers[tier].t)), /*#__PURE__*/React.createElement("div", {
      className: "sumrow"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, "Dates"), /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, form.start || "—", " \u2192 ", form.end || "—")), /*#__PURE__*/React.createElement("div", {
      className: "sumrow"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, "Prise en charge"), /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, delivery === "livraison" ? "Livraison · " + (form.address || form.city) : "Point relais · " + form.city)), /*#__PURE__*/React.createElement("div", {
      className: "sumrow tot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, "Pay\xE9"), /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, eur(total)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: function () {
        props.nav("fleet");
      }
    }, "Explorer la flotte"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: false,
      onClick: function () {
        props.nav("home");
      }
    }, "Retour \xE0 l'accueil"))))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "page pad-top"
  }, /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "R\xE9servation \xB7 \xE9tape ", step, " / 3")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: "clamp(34px,5vw,64px)",
      margin: "14px 0 clamp(30px,4vw,46px)"
    }
  }, "Plus que quelques d\xE9tails.")), /*#__PURE__*/React.createElement("div", {
    className: "book-layout"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, steps.map(function (s, i) {
    const n = i + 1;
    const cls = "stepper-item" + (n === step ? " on" : "") + (n < step ? " done" : "");
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s
    }, /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement("span", {
      className: "stepper-dot"
    }, n < step ? Icons.check : n), /*#__PURE__*/React.createElement("span", {
      className: "lbl"
    }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "stepper-line" + (n < step ? " done" : "")
    }));
  })), step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      animationDuration: ".4s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      marginBottom: 14
    }
  }, "Formule choisie"), /*#__PURE__*/React.createElement("div", {
    className: "chip-row",
    style: {
      marginBottom: 28
    }
  }, Object.keys(tiers).map(function (k) {
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      className: "chip" + (tier === k ? " on" : ""),
      onClick: function () {
        setTier(k);
      }
    }, tiers[k].t, " \xB7 ", eur(v.prices[k]));
  })), /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.start ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Date de d\xE9part"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: form.start,
    onChange: function (e) {
      set("start", e.target.value);
    }
  }), errors.start && /*#__PURE__*/React.createElement("div", {
    className: "errmsg"
  }, errors.start)), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.end ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Date de retour"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: form.end,
    onChange: function (e) {
      set("end", e.target.value);
    }
  }), errors.end && /*#__PURE__*/React.createElement("div", {
    className: "errmsg"
  }, errors.end))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      maxWidth: 200
    }
  }, /*#__PURE__*/React.createElement("label", null, "Heure de prise en charge"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    value: form.time,
    onChange: function (e) {
      set("time", e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono-label",
    style: {
      margin: "12px 0 14px"
    }
  }, "Mode de prise en charge"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "optcard" + (delivery === "agence" ? " on" : ""),
    onClick: function () {
      setDelivery("agence");
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-radio"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-t"
  }, "Point relais BeLoc \u2014 gratuit"), /*#__PURE__*/React.createElement("div", {
    className: "oc-s"
  }, "R\xE9cup\xE8re les cl\xE9s dans l'un de nos points s\xE9curis\xE9s de la r\xE9gion.")), /*#__PURE__*/React.createElement("span", {
    className: "oc-price"
  }, "Inclus")), /*#__PURE__*/React.createElement("div", {
    className: "optcard" + (delivery === "livraison" ? " on" : ""),
    onClick: function () {
      setDelivery("livraison");
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-radio"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-t"
  }, "Livraison \xE0 l'adresse de ton choix"), /*#__PURE__*/React.createElement("div", {
    className: "oc-s"
  }, "On t'apporte la voiture o\xF9 tu veux : domicile, gare, a\xE9roport, h\xF4tel.")), /*#__PURE__*/React.createElement("span", {
    className: "oc-price"
  }, "+ ", eur(49)))), /*#__PURE__*/React.createElement("div", {
    className: "field-row",
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Ville"), /*#__PURE__*/React.createElement("select", {
    value: form.city,
    onChange: function (e) {
      set("city", e.target.value);
    }
  }, B.cities.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  }))), delivery === "livraison" && /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.address ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Adresse de livraison"), /*#__PURE__*/React.createElement("input", {
    value: form.address,
    onChange: function (e) {
      set("address", e.target.value);
    },
    placeholder: "12 quai du Rh\xF4ne\u2026"
  }), errors.address && /*#__PURE__*/React.createElement("div", {
    className: "errmsg"
  }, errors.address)))), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      animationDuration: ".4s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.first ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Pr\xE9nom"), /*#__PURE__*/React.createElement("input", {
    value: form.first,
    onChange: function (e) {
      set("first", e.target.value);
    },
    placeholder: "Camille"
  }), errors.first && /*#__PURE__*/React.createElement("div", {
    className: "errmsg"
  }, errors.first)), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.last ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Nom"), /*#__PURE__*/React.createElement("input", {
    value: form.last,
    onChange: function (e) {
      set("last", e.target.value);
    },
    placeholder: "Roux"
  }), errors.last && /*#__PURE__*/React.createElement("div", {
    className: "errmsg"
  }, errors.last))), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.email ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    value: form.email,
    onChange: function (e) {
      set("email", e.target.value);
    },
    placeholder: "camille@email.fr"
  }), errors.email && /*#__PURE__*/React.createElement("div", {
    className: "errmsg"
  }, errors.email)), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.phone ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "T\xE9l\xE9phone"), /*#__PURE__*/React.createElement("input", {
    value: form.phone,
    onChange: function (e) {
      set("phone", e.target.value);
    },
    placeholder: "06 12 34 56 78"
  }), errors.phone && /*#__PURE__*/React.createElement("div", {
    className: "errmsg"
  }, errors.phone)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "\xC2ge du conducteur principal"), /*#__PURE__*/React.createElement("select", {
    value: form.age,
    onChange: function (e) {
      set("age", e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", null, "21\u201324 ans"), /*#__PURE__*/React.createElement("option", null, "25+"), /*#__PURE__*/React.createElement("option", null, "30+"))), /*#__PURE__*/React.createElement("div", {
    className: "trust-row",
    style: {
      borderTop: "none",
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, Icons.lock, " Permis de conduire valide depuis 2 ans minimum requis \xE0 la prise en charge."))), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      animationDuration: ".4s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 22,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "paychip"
  }, Icons.lock, " 3D Secure"), /*#__PURE__*/React.createElement("span", {
    className: "paychip"
  }, "Visa"), /*#__PURE__*/React.createElement("span", {
    className: "paychip"
  }, "Mastercard"), /*#__PURE__*/React.createElement("span", {
    className: "paychip"
  }, "Apple Pay")), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.card ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Num\xE9ro de carte"), /*#__PURE__*/React.createElement("input", {
    value: form.card,
    onChange: function (e) {
      let val = e.target.value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
      set("card", val);
    },
    placeholder: "4242 4242 4242 4242",
    inputMode: "numeric"
  }), errors.card && /*#__PURE__*/React.createElement("div", {
    className: "errmsg"
  }, errors.card)), /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.exp ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Expiration"), /*#__PURE__*/React.createElement("input", {
    value: form.exp,
    onChange: function (e) {
      let val = e.target.value.replace(/\D/g, "").slice(0, 4);
      if (val.length > 2) val = val.slice(0, 2) + "/" + val.slice(2);
      set("exp", val);
    },
    placeholder: "MM/AA",
    inputMode: "numeric"
  }), errors.exp && /*#__PURE__*/React.createElement("div", {
    className: "errmsg"
  }, errors.exp)), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.cvc ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "CVC"), /*#__PURE__*/React.createElement("input", {
    value: form.cvc,
    onChange: function (e) {
      set("cvc", e.target.value.replace(/\D/g, "").slice(0, 4));
    },
    placeholder: "123",
    inputMode: "numeric"
  }), errors.cvc && /*#__PURE__*/React.createElement("div", {
    className: "errmsg"
  }, errors.cvc))), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.name ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Nom sur la carte"), /*#__PURE__*/React.createElement("input", {
    value: form.name,
    onChange: function (e) {
      set("name", e.target.value);
    },
    placeholder: "CAMILLE ROUX"
  }), errors.name && /*#__PURE__*/React.createElement("div", {
    className: "errmsg"
  }, errors.name)), /*#__PURE__*/React.createElement("p", {
    className: "oc-s",
    style: {
      marginTop: 6
    }
  }, "En confirmant, tu acceptes les CGV de BeLoc. Une empreinte de caution sera r\xE9alis\xE9e \xE0 la prise en charge et lib\xE9r\xE9e au retour du v\xE9hicule.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: Icons.arrowL,
    onClick: back,
    style: {
      flexDirection: "row-reverse"
    }
  }, step === 1 ? "Retour" : "Précédent"), /*#__PURE__*/React.createElement(Button, {
    onClick: next
  }, step === 3 ? "Payer " + eur(total) : "Continuer"))), /*#__PURE__*/React.createElement("aside", {
    className: "summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "summary-media"
  }, /*#__PURE__*/React.createElement(Img, {
    src: v.hero,
    alt: v.full,
    eager: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "ov"
  }), /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vcard-brand",
    style: {
      marginBottom: 4
    }
  }, v.brand, " \xB7 ", v.year), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 26,
      fontWeight: 600
    }
  }, v.name))), /*#__PURE__*/React.createElement("div", {
    className: "summary-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sumrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Formule"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, tiers[tier].t)), /*#__PURE__*/React.createElement("div", {
    className: "sumrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Dates"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, form.start || "—", " \u2192 ", form.end || "—")), /*#__PURE__*/React.createElement("div", {
    className: "sumrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Prise en charge"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, delivery === "livraison" ? "Livraison" : "Point relais", " \xB7 ", form.city)), /*#__PURE__*/React.createElement("hr", {
    className: "divider",
    style: {
      margin: "10px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sumrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Location (", tiers[tier].days, "j)"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, eur(base))), deliveryFee > 0 && /*#__PURE__*/React.createElement("div", {
    className: "sumrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Livraison"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, eur(deliveryFee))), /*#__PURE__*/React.createElement("div", {
    className: "sumrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Frais de service"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, eur(serviceFee))), /*#__PURE__*/React.createElement("div", {
    className: "sumrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Assurance tous risques"), /*#__PURE__*/React.createElement("span", {
    className: "v",
    style: {
      color: "var(--gold-soft)"
    }
  }, "Incluse")), /*#__PURE__*/React.createElement("div", {
    className: "sumrow tot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, eur(total))), /*#__PURE__*/React.createElement("div", {
    className: "trust-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, Icons.checkCircle, " Annulation gratuite jusqu'\xE0 48h avant"), /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, Icons.shield, " Assistance 7j/7 incluse"), /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, Icons.lock, " Paiement chiffr\xE9 \xB7 aucune donn\xE9e stock\xE9e"))))))));
}
Object.assign(window, {
  BookingPage
});