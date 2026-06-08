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
                <span className="italic">Réservez en 3 minutes.</span>
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

/* ── RESERVATION WIDGET — Barre sticky compacte, toutes pages ── */
function ReservationWidget(props) {
  var B = window.BELOC;
  var today = new Date().toISOString().split("T")[0];

  var _s1 = useState("");      var vehicleId = _s1[0]; var setVehicleId = _s1[1];
  var _s2 = useState("");      var dateFrom  = _s2[0]; var setDateFrom  = _s2[1];
  var _s3 = useState("day");   var duration  = _s3[0]; var setDuration  = _s3[1];

  var vehicle = vehicleId ? B.byId(vehicleId) : null;
  var durMap    = { day: 1, weekend: 2, week: 7 };
  var durLabels = { day: "À la journée", weekend: "Week-end", week: "À la semaine" };

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
    try { return new Date(iso + "T12:00").toLocaleDateString("fr-FR", { day: "numeric", month: "short" }); }
    catch (ex) { return null; }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (vehicleId) { props.nav("booking", { id: vehicleId, tier: duration }); }
    else { props.nav("fleet"); }
  }

  var cls = "resa-bar-widget";

  return (
    <form className={cls} onSubmit={handleSubmit}>
      <div className="resa-bar-fields">

        <label className="resa-bar-field">
          <span className="resa-bar-field-label">Durée</span>
          <span className={"resa-bar-field-value" + (!duration ? " resa-bar-field-value--ph" : "")}>
            {durLabels[duration] || "Choisir"}
          </span>
          <select className="resa-bar-field-select" value={duration}
            onChange={function(e) { setDuration(e.target.value); }}>
            <option value="day">À la journée</option>
            <option value="weekend">Week-end (2 jours)</option>
            <option value="week">À la semaine</option>
          </select>
        </label>

        <div className="resa-bar-sep" />

        <label className="resa-bar-field">
          <span className="resa-bar-field-label">Véhicule</span>
          <span className={"resa-bar-field-value" + (!vehicleId ? " resa-bar-field-value--ph" : "")}>
            {vehicle ? vehicle.full : "Tous les véhicules"}
          </span>
          <select className="resa-bar-field-select" value={vehicleId}
            onChange={function(e) { setVehicleId(e.target.value); }}>
            <option value="">Tous les véhicules</option>
            {B.vehicles.map(function(v) {
              return <option key={v.id} value={v.id}>{v.full}</option>;
            })}
          </select>
        </label>

        <div className="resa-bar-sep" />

        <label className="resa-bar-field">
          <span className="resa-bar-field-label">Date de départ</span>
          <span className={"resa-bar-field-value" + (!dateFrom ? " resa-bar-field-value--ph" : "")}>
            {fmt(dateFrom) || "Choisir une date"}
          </span>
          <input type="date" className="resa-bar-field-date" value={dateFrom} min={today}
            onChange={function(e) { setDateFrom(e.target.value); }} />
        </label>

        <div className="resa-bar-sep" />

        <div className="resa-bar-field">
          <span className="resa-bar-field-label">Date de retour</span>
          <span className={"resa-bar-field-value" + (!dateTo ? " resa-bar-field-value--ph" : "")}>
            {fmt(dateTo) || "Calculée auto."}
          </span>
        </div>

      </div>
      <button className="resa-bar-btn" type="submit">
        {vehicle ? "Réserver" : "Continuer"}
        <span className="resa-bar-btn-arrow">→</span>
      </button>
    </form>
  );
}

Object.assign(window, { HomePage, VehicleCard, ReservationWidget });
