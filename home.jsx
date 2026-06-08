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

  return (
    <div className="page">

      {/* ── HERO ── */}
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
              <Button size="lg" onClick={function () { props.nav("fleet"); }} icon={Icons.arrow}>Choisir un véhicule</Button>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Stars />
                <span style={{ color: "rgba(255,255,255,.55)", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".1em" }}>
                  4,9 · Auvergne-Rhône-Alpes · 7j/7
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FLOTTE ── */}
      <section className="section">
        <div className="wrap">
          <div className="home-fleet-head">
            <Reveal><h2 className="display" style={{ fontSize: "clamp(30px,4.5vw,60px)", margin: 0 }}>Cinq voitures.<br />Aucune ordinaire.</h2></Reveal>
            <Reveal delay={1}><a className="tlink" onClick={function () { props.nav("fleet"); }}>Filtres & détails {Icons.arrow}</a></Reveal>
          </div>
          <Reveal style={{ marginTop: 32 }}>
            <div className="fleet-grid">
              {B.vehicles.map(function (v, i) {
                return <VehicleCard key={v.id} v={v} nav={props.nav} onFav={props.onFav} eager={i < 3} />;
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GARANTIES ── */}
      <div className="wrap">
        <Reveal>
          <div className="gtee-strip">
            {[
              { ic: Icons.clock,    t: "Réservation en 3 min" },
              { ic: Icons.truck,    t: "Livraison à domicile" },
              { ic: Icons.shield,   t: "Assurance incluse"    },
              { ic: Icons.infinity, t: "Annulation gratuite 48h" },
            ].map(function (g, i) {
              return (
                <div className="gtee-item" key={i}>
                  <span className="gtee-ic">{g.ic}</span>
                  <span>{g.t}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* ── AVIS ── */}
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

      {/* ── CTA FINAL ── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="final-cta">
              <h2 className="display final-cta-h">
                Prêt à prendre le volant ?<br />
                <span className="italic" style={{ color: "var(--gold-soft)" }}>Réservez en 3 minutes.</span>
              </h2>
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
