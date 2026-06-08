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

  const ticker = ["Lyon", "Grenoble", "Annecy", "Chambéry", "Clermont-Ferrand", "Saint-Étienne", "Valence", "Réservation en 3 min", "Livraison à domicile", "Assurance incluse", "7j/7"];

  return (
    <div className="page">

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-media">
          <img ref={heroImg} src={rs3.hero} alt="Audi RS3" />
        </div>
        <div className="hero-content">
          <Reveal>
            <h1 className="display hero-h1">
              <span className="l1">L'exception,</span>
              <span className="l2 italic serif">en location.</span>
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <div className="hero-sub">
              <Button size="lg" onClick={function () { props.nav("fleet"); }} icon={Icons.arrow}>Réserver maintenant</Button>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Stars /><span className="mono-label" style={{ color: "rgba(255,255,255,.55)" }}>4,9 · 100% en ligne · 7j/7</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="hero-scroll">
          <span className="mono-label" style={{ writingMode: "vertical-rl", letterSpacing: ".2em" }}>Défiler</span>
          <span className="line"></span>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="marquee-band">
        <div className="marquee-track">
          {[...ticker, ...ticker].map(function (item, i) {
            return (
              <span key={i} className="marquee-item">
                {item}<span className="marquee-sep">·</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* ─── FLEET EDITORIAL ─── */}
      <section className="section">
        <div className="wrap">
          <div className="shead">
            <div>
              <Reveal><Eyebrow>Notre flotte</Eyebrow></Reveal>
              <Reveal delay={1}><h2 className="display">Cinq voitures.<br />Aucune ordinaire.</h2></Reveal>
            </div>
            <Reveal delay={2}>
              <a className="tlink" onClick={function () { props.nav("fleet"); }}>Voir la flotte complète {Icons.arrow}</a>
            </Reveal>
          </div>
        </div>
        <Reveal style={{ marginTop: 32 }}>
          <div className="fleet-ed">
            <div className="fleet-ed-main" onClick={function () { props.nav("detail", "audi-rs3"); }}>
              <Img src={rs3.hero} alt={rs3.full} style={{ width: "100%", height: "100%", objectFit: "cover" }} eager />
              <div className="fleet-ed-overlay">
                <div><span className="badge badge-gold">{Icons.sparkle} Vaisseau amiral</span></div>
                <div className="fleet-ed-info">
                  <div className="mono-label" style={{ color: "rgba(255,255,255,.5)", marginBottom: 6 }}>{rs3.brand} · {rs3.year}</div>
                  <div className="fleet-ed-name">{rs3.name}</div>
                  <div className="fleet-ed-price">dès {eur(rs3.prices.day)}<span style={{ color: "rgba(255,255,255,.45)", fontSize: 13, fontFamily: "var(--mono)" }}> /jour</span></div>
                </div>
              </div>
            </div>
            <div className="fleet-ed-list">
              {B.vehicles.filter(function (v) { return v.id !== "audi-rs3"; }).map(function (v) {
                return (
                  <div className="fleet-ed-row" key={v.id} onClick={function () { props.nav("detail", v.id); }}>
                    <div className="fleet-ed-row-img">
                      <Img src={v.hero} alt={v.full} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="fleet-ed-row-body">
                      <span className="mono-label">{v.brand}</span>
                      <strong className="fleet-ed-row-name">{v.name}</strong>
                      {v.isNew && <span className="badge badge-new" style={{ fontSize: 9, padding: "3px 7px" }}>Nouveau</span>}
                    </div>
                    <div className="fleet-ed-row-price">{eur(priceFrom(v))}<span className="per">/j</span></div>
                    <span className="fleet-ed-row-arrow">{Icons.chevR}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── PILLARS ─── */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <div className="pillars">
              <div className="pillar">
                <span className="pillar-n">01</span>
                <h3>Réservez en 3 minutes.</h3>
                <p>Tout depuis votre mobile — sans agence, sans comptoir, sans paperasse. La clé vous attend.</p>
              </div>
              <div className="pillar-sep"></div>
              <div className="pillar">
                <span className="pillar-n">02</span>
                <h3>On vient à vous.</h3>
                <p>Livraison à l'adresse de votre choix dans toute l'Auvergne-Rhône-Alpes. Pour 49 €, on amène le véhicule.</p>
              </div>
              <div className="pillar-sep"></div>
              <div className="pillar">
                <span className="pillar-n">03</span>
                <h3>Zéro surprise.</h3>
                <p>Assurance tous risques, assistance 7j/7 et annulation gratuite jusqu'à 48h avant le départ.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="wrap"><hr className="divider" /></div>

      {/* ─── RS3 FEATURE ─── */}
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

      {/* ─── PULLQUOTE ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="pullquote-layout">
              <div className="pullquote">
                <Stars n={5} />
                <blockquote>"La RS3 pour l'anniversaire de mon mari. Service impeccable, voiture immaculée — livrée en avance à notre hôtel."</blockquote>
                <cite>Sofia L. — Lyon · Client BeLoc</cite>
              </div>
              <div className="pullquote-meta">
                <div className="pm-stat"><span className="pm-n">4,9</span><span className="pm-l">Note moyenne</span></div>
                <div className="pm-stat"><span className="pm-n">100%</span><span className="pm-l">En ligne</span></div>
                <div className="pm-stat"><span className="pm-n">7j/7</span><span className="pm-l">Disponible</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="final-cta">
              <Eyebrow center style={{ display: "inline-flex" }}>Prêt à prendre le volant ?</Eyebrow>
              <h2 className="display final-cta-h">Réservez maintenant.<br /><span className="italic" style={{ color: "var(--gold-soft)" }}>En 3 minutes.</span></h2>
              <div className="final-cta-actions">
                <Button size="lg" onClick={function () { props.nav("fleet"); }} icon={Icons.arrow}>Choisir un véhicule</Button>
                <a className="final-cta-phone" href={"tel:" + B.phone.replace(/\s/g, "")}>
                  <span className="final-cta-phone-ic">{Icons.phone}</span>
                  <div>
                    <div className="final-cta-phone-num">{B.phone}</div>
                    <div className="mono-label">Conciergerie · 7j/7</div>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, VehicleCard });
