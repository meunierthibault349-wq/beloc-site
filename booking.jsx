/* BeLoc — Booking flow (Babel/JSX) */
function BookingPage(props) {
  const init = props.params || {};
  const v = window.BELOC.byId(init.id) || window.BELOC.vehicles[0];
  const B = window.BELOC;

  const tiers = {
    day: { t: "La journée", days: 1 },
    weekend: { t: "Le week-end", days: 3 },
    week: { t: "La semaine", days: 7 },
  };
  const [tier, setTier] = useState(init.tier || "day");
  const [step, setStep] = useState(1);
  const [delivery, setDelivery] = useState("agence");
  const [form, setForm] = useState({
    start: "", end: "", time: "10:00", city: B.cities[0], address: "",
    first: "", last: "", email: "", phone: "", age: "25+",
    card: "", exp: "", cvc: "", name: "",
  });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [ref] = useState("BL-" + Math.random().toString(36).slice(2, 7).toUpperCase());

  const set = function (k, val) { setForm(function (f) { const n = Object.assign({}, f); n[k] = val; return n; }); };

  const base = v.prices[tier];
  const deliveryFee = delivery === "livraison" ? 49 : 0;
  const serviceFee = Math.round(base * 0.08);
  const total = base + deliveryFee + serviceFee;

  const steps = ["Dates & lieu", "Coordonnées", "Paiement"];

  useEffect(function () { window.scrollTo(0, 0); }, [step, done]);

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
    if (step < 3) setStep(step + 1);
    else { setDone(true); props.toast && props.toast("Réservation confirmée !"); }
  };
  const back = function () { if (step > 1) setStep(step - 1); else props.nav("detail", v.id); };

  /* ---- confirmation ---- */
  if (done) {
    return (
      <div className="page pad-top">
        <section className="section">
          <div className="wrap">
            <div className="confirm">
              <div className="confirm-check">{Icons.check}</div>
              <Eyebrow center style={{ display: "inline-flex" }}>Réservation confirmée</Eyebrow>
              <h1 className="display" style={{ fontSize: "clamp(34px,5vw,62px)", margin: "18px 0 14px" }}>À très vite sur la route, {form.first || "ami"}.</h1>
              <p className="lede" style={{ margin: "0 auto 8px" }}>Ta {v.full} t'attend. Un email de confirmation vient de partir vers <strong style={{ color: "var(--bone)" }}>{form.email || "ton adresse"}</strong> avec le contrat et les détails de prise en charge.</p>
              <div className="resref">Référence · {ref}</div>

              <div style={{ background: "var(--ink-800)", border: "1px solid var(--line)", borderRadius: 8, padding: 24, marginTop: 36, textAlign: "left" }}>
                <div className="sumrow"><span className="k">Véhicule</span><span className="v">{v.full}</span></div>
                <div className="sumrow"><span className="k">Formule</span><span className="v">{tiers[tier].t}</span></div>
                <div className="sumrow"><span className="k">Dates</span><span className="v">{form.start || "—"} → {form.end || "—"}</span></div>
                <div className="sumrow"><span className="k">Prise en charge</span><span className="v">{delivery === "livraison" ? "Livraison · " + (form.address || form.city) : "Point relais · " + form.city}</span></div>
                <div className="sumrow tot"><span className="k">Payé</span><span className="v">{eur(total)}</span></div>
              </div>

              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
                <Button onClick={function () { props.nav("fleet"); }}>Explorer la flotte</Button>
                <Button variant="ghost" icon={false} onClick={function () { props.nav("home"); }}>Retour à l'accueil</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page pad-top">
      <section className="section">
        <div className="wrap">
          <Reveal><Eyebrow>Réservation · étape {step} / 3</Eyebrow></Reveal>
          <Reveal delay={1}><h1 className="display" style={{ fontSize: "clamp(34px,5vw,64px)", margin: "14px 0 clamp(30px,4vw,46px)" }}>Plus que quelques détails.</h1></Reveal>

          <div className="book-layout">
            {/* FORM SIDE */}
            <div>
              {/* stepper */}
              <div className="stepper">
                {steps.map(function (s, i) {
                  const n = i + 1;
                  const cls = "stepper-item" + (n === step ? " on" : "") + (n < step ? " done" : "");
                  return (
                    <React.Fragment key={s}>
                      <div className={cls}>
                        <span className="stepper-dot">{n < step ? Icons.check : n}</span>
                        <span className="lbl">{s}</span>
                      </div>
                      {i < steps.length - 1 && <span className={"stepper-line" + (n < step ? " done" : "")}></span>}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                <div className="page" style={{ animationDuration: ".4s" }}>
                  <div className="mono-label" style={{ marginBottom: 14 }}>Formule choisie</div>
                  <div className="chip-row" style={{ marginBottom: 28 }}>
                    {Object.keys(tiers).map(function (k) {
                      return <button key={k} className={"chip" + (tier === k ? " on" : "")} onClick={function () { setTier(k); }}>{tiers[k].t} · {eur(v.prices[k])}</button>;
                    })}
                  </div>

                  <div className="field-row">
                    <div className={"field" + (errors.start ? " err" : "")}>
                      <label>Date de départ</label>
                      <input type="date" value={form.start} onChange={function (e) { set("start", e.target.value); }} />
                      {errors.start && <div className="errmsg">{errors.start}</div>}
                    </div>
                    <div className={"field" + (errors.end ? " err" : "")}>
                      <label>Date de retour</label>
                      <input type="date" value={form.end} onChange={function (e) { set("end", e.target.value); }} />
                      {errors.end && <div className="errmsg">{errors.end}</div>}
                    </div>
                  </div>
                  <div className="field" style={{ maxWidth: 200 }}>
                    <label>Heure de prise en charge</label>
                    <input type="time" value={form.time} onChange={function (e) { set("time", e.target.value); }} />
                  </div>

                  <div className="mono-label" style={{ margin: "12px 0 14px" }}>Mode de prise en charge</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div className={"optcard" + (delivery === "agence" ? " on" : "")} onClick={function () { setDelivery("agence"); }}>
                      <span className="oc-radio"></span>
                      <div>
                        <div className="oc-t">Point relais BeLoc — gratuit</div>
                        <div className="oc-s">Récupère les clés dans l'un de nos points sécurisés de la région.</div>
                      </div>
                      <span className="oc-price">Inclus</span>
                    </div>
                    <div className={"optcard" + (delivery === "livraison" ? " on" : "")} onClick={function () { setDelivery("livraison"); }}>
                      <span className="oc-radio"></span>
                      <div>
                        <div className="oc-t">Livraison à l'adresse de ton choix</div>
                        <div className="oc-s">On t'apporte la voiture où tu veux : domicile, gare, aéroport, hôtel.</div>
                      </div>
                      <span className="oc-price">+ {eur(49)}</span>
                    </div>
                  </div>

                  <div className="field-row" style={{ marginTop: 20 }}>
                    <div className="field">
                      <label>Ville</label>
                      <select value={form.city} onChange={function (e) { set("city", e.target.value); }}>
                        {B.cities.map(function (c) { return <option key={c}>{c}</option>; })}
                      </select>
                    </div>
                    {delivery === "livraison" && (
                      <div className={"field" + (errors.address ? " err" : "")}>
                        <label>Adresse de livraison</label>
                        <input value={form.address} onChange={function (e) { set("address", e.target.value); }} placeholder="12 quai du Rhône…" />
                        {errors.address && <div className="errmsg">{errors.address}</div>}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="page" style={{ animationDuration: ".4s" }}>
                  <div className="field-row">
                    <div className={"field" + (errors.first ? " err" : "")}>
                      <label>Prénom</label>
                      <input value={form.first} onChange={function (e) { set("first", e.target.value); }} placeholder="Camille" />
                      {errors.first && <div className="errmsg">{errors.first}</div>}
                    </div>
                    <div className={"field" + (errors.last ? " err" : "")}>
                      <label>Nom</label>
                      <input value={form.last} onChange={function (e) { set("last", e.target.value); }} placeholder="Roux" />
                      {errors.last && <div className="errmsg">{errors.last}</div>}
                    </div>
                  </div>
                  <div className={"field" + (errors.email ? " err" : "")}>
                    <label>Email</label>
                    <input value={form.email} onChange={function (e) { set("email", e.target.value); }} placeholder="camille@email.fr" />
                    {errors.email && <div className="errmsg">{errors.email}</div>}
                  </div>
                  <div className={"field" + (errors.phone ? " err" : "")}>
                    <label>Téléphone</label>
                    <input value={form.phone} onChange={function (e) { set("phone", e.target.value); }} placeholder="06 12 34 56 78" />
                    {errors.phone && <div className="errmsg">{errors.phone}</div>}
                  </div>
                  <div className="field">
                    <label>Âge du conducteur principal</label>
                    <select value={form.age} onChange={function (e) { set("age", e.target.value); }}>
                      <option>21–24 ans</option>
                      <option>25+</option>
                      <option>30+</option>
                    </select>
                  </div>
                  <div className="trust-row" style={{ borderTop: "none", paddingTop: 0 }}>
                    <div className="t">{Icons.lock} Permis de conduire valide depuis 2 ans minimum requis à la prise en charge.</div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="page" style={{ animationDuration: ".4s" }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 22, flexWrap: "wrap" }}>
                    <span className="paychip">{Icons.lock} 3D Secure</span>
                    <span className="paychip">Visa</span>
                    <span className="paychip">Mastercard</span>
                    <span className="paychip">Apple Pay</span>
                  </div>
                  <div className={"field" + (errors.card ? " err" : "")}>
                    <label>Numéro de carte</label>
                    <input value={form.card} onChange={function (e) {
                      let val = e.target.value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
                      set("card", val);
                    }} placeholder="4242 4242 4242 4242" inputMode="numeric" />
                    {errors.card && <div className="errmsg">{errors.card}</div>}
                  </div>
                  <div className="field-row">
                    <div className={"field" + (errors.exp ? " err" : "")}>
                      <label>Expiration</label>
                      <input value={form.exp} onChange={function (e) {
                        let val = e.target.value.replace(/\D/g, "").slice(0, 4);
                        if (val.length > 2) val = val.slice(0, 2) + "/" + val.slice(2);
                        set("exp", val);
                      }} placeholder="MM/AA" inputMode="numeric" />
                      {errors.exp && <div className="errmsg">{errors.exp}</div>}
                    </div>
                    <div className={"field" + (errors.cvc ? " err" : "")}>
                      <label>CVC</label>
                      <input value={form.cvc} onChange={function (e) { set("cvc", e.target.value.replace(/\D/g, "").slice(0, 4)); }} placeholder="123" inputMode="numeric" />
                      {errors.cvc && <div className="errmsg">{errors.cvc}</div>}
                    </div>
                  </div>
                  <div className={"field" + (errors.name ? " err" : "")}>
                    <label>Nom sur la carte</label>
                    <input value={form.name} onChange={function (e) { set("name", e.target.value); }} placeholder="CAMILLE ROUX" />
                    {errors.name && <div className="errmsg">{errors.name}</div>}
                  </div>
                  <p className="oc-s" style={{ marginTop: 6 }}>En confirmant, tu acceptes les CGV de BeLoc. Une empreinte de caution sera réalisée à la prise en charge et libérée au retour du véhicule.</p>
                </div>
              )}

              {/* nav */}
              <div style={{ display: "flex", gap: 14, marginTop: 32, alignItems: "center" }}>
                <Button variant="ghost" icon={Icons.arrowL} onClick={back} style={{ flexDirection: "row-reverse" }}>{step === 1 ? "Retour" : "Précédent"}</Button>
                <Button onClick={next}>{step === 3 ? "Payer " + eur(total) : "Continuer"}</Button>
              </div>
            </div>

            {/* SUMMARY SIDE */}
            <aside className="summary">
              <div className="summary-media">
                <Img src={v.hero} alt={v.full} eager />
                <div className="ov"></div>
                <div className="nm">
                  <div className="vcard-brand" style={{ marginBottom: 4 }}>{v.brand} · {v.year}</div>
                  <div className="serif" style={{ fontSize: 26, fontWeight: 600 }}>{v.name}</div>
                </div>
              </div>
              <div className="summary-body">
                <div className="sumrow"><span className="k">Formule</span><span className="v">{tiers[tier].t}</span></div>
                <div className="sumrow"><span className="k">Dates</span><span className="v">{form.start || "—"} → {form.end || "—"}</span></div>
                <div className="sumrow"><span className="k">Prise en charge</span><span className="v">{delivery === "livraison" ? "Livraison" : "Point relais"} · {form.city}</span></div>
                <hr className="divider" style={{ margin: "10px 0" }} />
                <div className="sumrow"><span className="k">Location ({tiers[tier].days}j)</span><span className="v">{eur(base)}</span></div>
                {deliveryFee > 0 && <div className="sumrow"><span className="k">Livraison</span><span className="v">{eur(deliveryFee)}</span></div>}
                <div className="sumrow"><span className="k">Frais de service</span><span className="v">{eur(serviceFee)}</span></div>
                <div className="sumrow"><span className="k">Assurance tous risques</span><span className="v" style={{ color: "var(--gold-soft)" }}>Incluse</span></div>
                <div className="sumrow tot"><span className="k">Total</span><span className="v">{eur(total)}</span></div>

                <div className="trust-row">
                  <div className="t">{Icons.checkCircle} Annulation gratuite jusqu'à 48h avant</div>
                  <div className="t">{Icons.shield} Assistance 7j/7 incluse</div>
                  <div className="t">{Icons.lock} Paiement chiffré · aucune donnée stockée</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { BookingPage });
