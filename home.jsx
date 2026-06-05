/* BeLoc — Home page (Babel/JSX) */
function VehicleCard(props) {
  const v = props.v;
  const [fav, setFav] = useState(false);
  return (
    <article className={"vcard " + (props.className || "")}>
      <div className="vcard-media">
        <Img src={v.hero} alt={v.full} label={v.full} eager={props.eager} />
        <div className="vcard-tags">
          {v.flagship && <span className="badge badge-gold">{Icons.sparkle} Vaisseau amiral</span>}
          {v.isNew && <span className="badge badge-new">Nouveauté</span>}
          {v.sport && !v.flagship && <span className="badge badge-sport">Sport</span>}
        </div>
        <button className={"vcard-fav" + (fav ? " on" : "")} onClick={function () { setFav(!fav); props.onFav && props.onFav(!fav); }} aria-label="Favori">{Icons.heart}</button>
      </div>
      <div className="vcard-body">
        <div className="vcard-head">
          <div>
            <div className="vcard-brand">{v.brand} · {v.year}</div>
            <h3 className="vcard-name">{v.name}</h3>
          </div>
        </div>
        <div className="vcard-specs">
          <div className="vspec"><span className="v">{v.specs.puissance}</span><span className="k">chevaux</span></div>
          <div className="vspec"><span className="v">{v.specs.zero}<small style={{ fontSize: 12 }}>s</small></span><span className="k">0–100 km/h</span></div>
          <div className="vspec"><span className="v">{v.specs.places}</span><span className="k">places</span></div>
        </div>
        <div className="vcard-foot">
          <div className="price">
            <div>
              <span className="from">dès</span>
              <span className="amt">{eur(priceFrom(v))}</span> <span className="per">/ jour</span>
            </div>
          </div>
          <Button size="sm" onClick={function () { props.nav("detail", v.id); }}>Réserver</Button>
        </div>
      </div>
    </article>
  );
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
        el.style.transform = "scale(1.08) translateY(" + (y * 0.18) + "px)";
        raf = 0;
      });
    };
    el.style.transform = "scale(1.08)";
    window.addEventListener("scroll", onScroll, { passive: true });
    return function () { window.removeEventListener("scroll", onScroll); };
  }, []);

  const railScroll = function (dir) {
    const el = railRef.current; if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-media">
          <img ref={heroImg} src={rs3.hero} alt="Audi RS3" />
        </div>
        <div className="hero-content">
          <Reveal><Eyebrow>BeLoc · {B.region}</Eyebrow></Reveal>
          <Reveal delay={1}>
            <h1 className="display hero-h1"><span className="l1">Conduis l'extraordinaire.</span><span className="l2 italic serif">Pour un jour.</span></h1>
          </Reveal>
          <Reveal delay={2}>
            <div className="hero-sub">
              <Button size="lg" onClick={function () { props.nav("fleet"); }}>Voir la flotte</Button>
              <a className="tlink" onClick={function () { props.nav("detail", "audi-rs3"); }}>Découvrir l'Audi RS3 {Icons.arrow}</a>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Stars /><span className="mono-label">4,9 · 100% en ligne</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div className="hero-stats" style={{ marginTop: 48 }}>
              <div className="hero-stat"><div className="n">5</div><div className="l">modèles d'exception</div></div>
              <div className="hero-stat"><div className="n">100%</div><div className="l">réservation en ligne</div></div>
              <div className="hero-stat"><div className="n">7j/7</div><div className="l">assistance incluse</div></div>
            </div>
          </Reveal>
        </div>
        <div className="hero-scroll">
          <span className="mono-label" style={{ writingMode: "vertical-rl", letterSpacing: ".2em" }}>Défiler</span>
          <span className="line"></span>
        </div>
      </section>

      {/* FLEET RAIL */}
      <section className="section" id="flotte">
        <div className="wrap">
          <div className="shead">
            <div>
              <Reveal><Eyebrow>Notre flotte</Eyebrow></Reveal>
              <Reveal delay={1}><h2 className="display">Cinq voitures.<br />Aucune ordinaire.</h2></Reveal>
            </div>
            <Reveal delay={2} className="cal-nav" style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button onClick={function () { railScroll(-1); }} aria-label="Précédent">{Icons.arrowL}</button>
              <button onClick={function () { railScroll(1); }} aria-label="Suivant">{Icons.arrowR}</button>
            </Reveal>
          </div>
        </div>
        <Reveal style={{ marginTop: 18 }}>
          <div className="rail rail-pad" ref={railRef}>
            {B.vehicles.map(function (v, i) {
              return <VehicleCard key={v.id} v={v} nav={props.nav} className="card-w-rail" onFav={props.onFav} eager={i < 2} />;
            })}
          </div>
        </Reveal>
        <div className="wrap" style={{ marginTop: 28 }}>
          <a className="tlink" onClick={function () { props.nav("fleet"); }}>Voir toute la flotte & les filtres {Icons.arrow}</a>
        </div>
      </section>

      <div className="wrap"><hr className="divider" /></div>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="wrap">
          <div className="shead">
            <div>
              <Reveal><Eyebrow>Comment ça marche</Eyebrow></Reveal>
              <Reveal delay={1}><h2 className="display">Trois gestes, et la route est à toi.</h2></Reveal>
            </div>
            <Reveal delay={2}><p className="lede">Pas d'agence, pas de file d'attente, pas de paperasse. Tout se passe depuis ton téléphone — la clé t'attend.</p></Reveal>
          </div>
          <Reveal>
            <div className="steps">
              {[
                { ic: Icons.sparkle, t: "Choisis", p: "Parcours la flotte, compare puissances et tarifs, et trouve la voiture qui fait battre ton cœur." },
                { ic: Icons.calendar, t: "Réserve", p: "Sélectionne tes dates, ton lieu de prise en charge, paie en ligne en toute sécurité. Quatre étapes, montre en main." },
                { ic: Icons.key, t: "Roule", p: "Récupère les clés au point convenu — ou fais-toi livrer. Il ne te reste plus qu'à profiter." },
              ].map(function (s, i) {
                return (
                  <div className="step" key={i}>
                    <span className="step-n">0{i + 1}</span>
                    <span className="step-ic">{s.ic}</span>
                    <h3>{s.t}</h3>
                    <p>{s.p}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={2} style={{ marginTop: 32 }}>
            <a className="tlink" onClick={function () { props.nav("how"); }}>Tout savoir sur le déroulé {Icons.arrow}</a>
          </Reveal>
        </div>
      </section>

      {/* SPLIT FEATURE — flagship */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <div className="cta-banner" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 0, padding: 0, overflow: "hidden" }}>
              <div style={{ padding: "clamp(32px,4vw,64px)" }}>
                <Eyebrow>Le vaisseau amiral</Eyebrow>
                <h2 className="display" style={{ fontSize: "clamp(32px,4vw,56px)", margin: "16px 0 18px" }}>{rs3.tagline}</h2>
                <p className="lede" style={{ marginBottom: 26 }}>{rs3.short}</p>
                <div style={{ display: "flex", gap: 26, marginBottom: 30, flexWrap: "wrap" }}>
                  <div className="hero-stat"><div className="n" style={{ fontFamily: "var(--serif)", fontSize: 34, fontWeight: 600 }}>{rs3.specs.puissance} ch</div><div className="l mono-label">Puissance</div></div>
                  <div className="hero-stat"><div className="n" style={{ fontFamily: "var(--serif)", fontSize: 34, fontWeight: 600 }}>{rs3.specs.zero}s</div><div className="l mono-label">0–100 km/h</div></div>
                  <div className="hero-stat"><div className="n" style={{ fontFamily: "var(--serif)", fontSize: 34, fontWeight: 600 }}>{eur(rs3.prices.day)}</div><div className="l mono-label">par jour</div></div>
                </div>
                <Button onClick={function () { props.nav("detail", "audi-rs3"); }}>Réserver la RS3</Button>
              </div>
              <div style={{ position: "relative", minHeight: 380 }}>
                <Img src={rs3.gallery[0]} alt="Audi RS3" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="section">
        <div className="wrap">
          <Reveal><Eyebrow center style={{ display: "flex", justifyContent: "center" }}>La promesse BeLoc</Eyebrow></Reveal>
          <Reveal delay={1}><h2 className="display" style={{ textAlign: "center", fontSize: "clamp(30px,4vw,56px)", margin: "16px 0 clamp(40px,5vw,64px)" }}>Le premium, sans la friction.</h2></Reveal>
          <Reveal>
            <div className="assure">
              {[
                { ic: Icons.online, t: "100% en ligne", p: "Réservation, paiement, contrat et état des lieux : tout se fait depuis ton mobile, en quelques minutes." },
                { ic: Icons.truck, t: "Livraison possible", p: "On t'apporte la voiture là où tu veux dans toute la région — domicile, gare, aéroport, hôtel." },
                { ic: Icons.shield, t: "Assistance incluse", p: "Assurance tous risques, assistance 7j/7 et hotline dédiée. Tu roules l'esprit tranquille." },
              ].map(function (a, i) {
                return (
                  <div className="assure-item" key={i}>
                    <span className="ic">{a.ic}</span>
                    <h4>{a.t}</h4>
                    <p>{a.p}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS STRIP */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 22 }}>
              {[
                { q: "Livraison de la Golf R devant chez moi à Annecy, clés en main en 5 minutes. Bluffant.", n: "Camille R.", c: "Annecy" },
                { q: "La RS3 pour l'anniversaire de mon mari. Service impeccable, voiture immaculée.", n: "Sofia L.", c: "Lyon" },
                { q: "Premier essai avec la Clio, tout était limpide depuis le téléphone. Je reviendrai.", n: "Thomas B.", c: "Grenoble" },
              ].map(function (r, i) {
                return (
                  <div key={i} style={{ background: "var(--ink-850)", border: "1px solid var(--line-soft)", borderRadius: 8, padding: 26 }}>
                    <Stars />
                    <p className="serif" style={{ fontSize: 21, lineHeight: 1.4, margin: "16px 0 18px", color: "var(--bone)" }}>“{r.q}”</p>
                    <div className="mono-label">{r.n} — {r.c}</div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="cta-banner" style={{ textAlign: "center" }}>
              <Eyebrow center style={{ display: "inline-flex" }}>Prêt à prendre le volant ?</Eyebrow>
              <h2 className="display" style={{ margin: "16px auto 26px" }}>Ta prochaine voiture n'attend qu'un clic.</h2>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <Button size="lg" onClick={function () { props.nav("fleet"); }}>Réserver maintenant</Button>
                <Button size="lg" variant="ghost" onClick={function () { props.nav("how"); }} icon={Icons.arrow}>Comment ça marche</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, VehicleCard });
