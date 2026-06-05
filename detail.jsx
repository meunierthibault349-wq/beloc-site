/* BeLoc — Vehicle Detail page (Babel/JSX) */
const MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const DOW = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function busySet(seed) {
  // deterministic "booked" days per vehicle
  const s = {};
  let x = seed * 9301 + 49297;
  for (let i = 0; i < 8; i++) { x = (x * 233280 + 49297) % 233281; s[(x % 27) + 1] = true; }
  return s;
}

function Calendar(props) {
  const today = new Date();
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const busy = props.busy || {};

  const first = new Date(view.y, view.m, 1);
  let startDow = (first.getDay() + 6) % 7; // Mon=0
  const days = new Date(view.y, view.m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);

  const isPast = function (d) {
    const dt = new Date(view.y, view.m, d);
    const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dt < t0;
  };
  const isBusy = function (d) { return view.m === today.getMonth() && busy[d]; };

  const sel = props.range; // {start, end} as day numbers in current view (simplified)
  const inRange = function (d) {
    if (!sel || sel.start == null || sel.end == null) return false;
    return d > sel.start && d < sel.end;
  };

  const nav = function (delta) {
    let m = view.m + delta, y = view.y;
    if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; }
    setView({ y: y, m: m });
  };

  return (
    <div className="cal">
      <div className="cal-head">
        <span className="m">{MONTHS[view.m]} {view.y}</span>
        <div className="cal-nav">
          <button onClick={function () { nav(-1); }} aria-label="Mois précédent">{Icons.chevL}</button>
          <button onClick={function () { nav(1); }} aria-label="Mois suivant">{Icons.chevR}</button>
        </div>
      </div>
      <div className="cal-grid">
        {DOW.map(function (d) { return <div className="cal-dow" key={d}>{d}</div>; })}
        {cells.map(function (d, i) {
          if (d == null) return <div key={"e" + i}></div>;
          const off = isPast(d), bz = isBusy(d);
          const isSel = sel && (d === sel.start || d === sel.end);
          const cls = ["cal-day", off ? "off" : "", bz ? "busy" : "", isSel ? "sel" : "", inRange(d) ? "inrange" : ""].join(" ").trim();
          return (
            <div key={i} className={cls} onClick={function () { if (!off && !bz && props.onPick) props.onPick(d, view); }}>{d}</div>
          );
        })}
      </div>
      <div className="cal-legend">
        <span><i style={{ background: "var(--gold)" }}></i>Sélection</span>
        <span><i style={{ background: "var(--ink-600)" }}></i>Disponible</span>
        <span><i style={{ background: "transparent", border: "1px solid var(--muted-2)" }}></i>Réservé</span>
      </div>
    </div>
  );
}

function DetailPage(props) {
  const v = window.BELOC.byId(props.params);
  const [active, setActive] = useState(0);
  const [tier, setTier] = useState("day");
  const [range, setRange] = useState(null);
  const [showSticky, setShowSticky] = useState(false);
  const ctaRef = useRef(null);

  useEffect(function () { window.scrollTo(0, 0); setActive(0); setTier("day"); setRange(null); }, [props.params]);

  useEffect(function () {
    const onScroll = function () { setShowSticky(window.scrollY > 600); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return function () { window.removeEventListener("scroll", onScroll); };
  }, []);

  if (!v) return <div className="page pad-top section"><div className="wrap">Véhicule introuvable.</div></div>;

  const busy = busySet(v.full.length);
  const tiers = [
    { id: "day", t: "La journée", s: "24 heures", price: v.prices.day },
    { id: "weekend", t: "Le week-end", s: "Ven. → Lun. · 3 jours", price: v.prices.weekend },
    { id: "week", t: "La semaine", s: "7 jours", price: v.prices.week },
  ];
  const tierObj = tiers.find(function (t) { return t.id === tier; });

  const pickDay = function (d, view) {
    if (!range || range.start == null || range.end != null) {
      setRange({ start: d, end: null });
    } else {
      if (d < range.start) setRange({ start: d, end: range.start });
      else setRange({ start: range.start, end: d });
    }
  };

  const goBook = function () {
    props.nav("booking", { id: v.id, tier: tier, range: range });
  };

  const specRows = [
    { k: "Puissance", v: v.specs.puissance, u: "ch", ic: Icons.bolt },
    { k: "0 → 100 km/h", v: v.specs.zero, u: "s", ic: Icons.gauge },
    { k: "Vitesse max", v: v.specs.vmax, u: "km/h", ic: Icons.gauge },
    { k: "Moteur", v: v.specs.moteur, u: "", ic: Icons.gear },
    { k: "Boîte", v: v.specs.boite, u: "", ic: Icons.gear },
    { k: "Transmission", v: v.specs.transmission, u: "", ic: Icons.road },
    { k: "Places", v: v.specs.places, u: "", ic: Icons.users },
    { k: "Carburant", v: v.specs.carburant, u: "· " + v.specs.conso, ic: Icons.fuel },
  ];

  return (
    <div className="page pad-top">
      {/* breadcrumb */}
      <section style={{ paddingTop: "clamp(28px,4vw,44px)" }}>
        <div className="wrap">
          <div className="mono-label" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a onClick={function () { props.nav("home"); }} style={{ cursor: "pointer" }}>Accueil</a>
            <span style={{ color: "var(--muted-2)" }}>/</span>
            <a onClick={function () { props.nav("fleet"); }} style={{ cursor: "pointer" }}>Flotte</a>
            <span style={{ color: "var(--muted-2)" }}>/</span>
            <span style={{ color: "var(--gold)" }}>{v.full}</span>
          </div>
        </div>
      </section>

      {/* hero head */}
      <section style={{ paddingTop: "clamp(20px,3vw,30px)" }}>
        <div className="wrap">
          <div className="shead" style={{ alignItems: "flex-end", marginBottom: "clamp(24px,3vw,40px)" }}>
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {v.flagship && <span className="badge badge-gold">{Icons.sparkle} Vaisseau amiral</span>}
                {v.isNew && <span className="badge badge-new">Nouveauté 2026</span>}
                {v.sport && <span className="badge badge-sport">Sport</span>}
                <span className="badge">{v.colorName}</span>
              </div>
              <div className="vcard-brand" style={{ fontSize: 12 }}>{v.brand} · {v.year}</div>
              <h1 className="display" style={{ fontSize: "clamp(44px,6.5vw,92px)", marginTop: 6 }}>{v.name}</h1>
            </div>
            <p className="serif italic" style={{ fontSize: "clamp(22px,2.6vw,34px)", color: "var(--gold-soft)", maxWidth: "20ch", lineHeight: 1.2 }}>“{v.tagline}”</p>
          </div>
        </div>
      </section>

      {/* layout */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="detail-layout">
            {/* LEFT */}
            <div>
              <div className="detail-gallery">
                <div className="detail-stage">
                  <Img src={v.gallery[active]} alt={v.full} eager />
                  <div className="tags">
                    <span className="badge">{active + 1} / {v.gallery.length}</span>
                  </div>
                </div>
                {v.gallery.length > 1 && (
                  <div className="detail-thumbs">
                    {v.gallery.map(function (g, i) {
                      return (
                        <button key={i} className={"detail-thumb" + (i === active ? " on" : "")} onClick={function () { setActive(i); }}>
                          <Img src={g} alt="" />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* description */}
              <div style={{ marginTop: "clamp(40px,5vw,64px)" }}>
                <Eyebrow>Le caractère</Eyebrow>
                <p className="serif" style={{ fontSize: "clamp(24px,3vw,38px)", lineHeight: 1.32, fontWeight: 500, margin: "18px 0 0", textWrap: "pretty" }}>{v.short}</p>
              </div>

              {/* highlights */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 30 }}>
                {v.featured.map(function (f, i) {
                  return <span key={i} className="badge badge-gold" style={{ padding: "9px 14px", fontSize: 11 }}>{f}</span>;
                })}
              </div>

              {/* specsheet */}
              <div style={{ marginTop: "clamp(44px,5vw,72px)" }}>
                <Eyebrow>Fiche technique</Eyebrow>
                <h2 className="display" style={{ fontSize: "clamp(28px,3.4vw,46px)", margin: "16px 0 24px" }}>Les chiffres qui comptent.</h2>
                <div className="specsheet">
                  {specRows.map(function (s, i) {
                    return (
                      <div className="specrow" key={i}>
                        <span className="k">{s.ic}{s.k}</span>
                        <span className="v">{s.v} {s.u && <small>{s.u}</small>}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* availability */}
              <div style={{ marginTop: "clamp(44px,5vw,72px)" }}>
                <Eyebrow>Disponibilités</Eyebrow>
                <h2 className="display" style={{ fontSize: "clamp(28px,3.4vw,46px)", margin: "16px 0 24px" }}>Choisis tes dates.</h2>
                <Calendar busy={busy} range={range} onPick={pickDay} />
              </div>
            </div>

            {/* RIGHT — buybox */}
            <aside className="detail-side">
              <div className="buybox" ref={ctaRef}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
                  <span className="mono-label">À partir de</span>
                  <span className="stars">{[1, 2, 3, 4, 5].map(function (i) { return <span key={i}>{Icons.star}</span>; })}</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 22 }}>
                  <span className="serif" style={{ fontSize: 46, fontWeight: 600, whiteSpace: "nowrap" }}>{eur(v.prices.day)}</span>
                  <span className="mono-label">/ jour · tout inclus</span>
                </div>

                <div className="mono-label" style={{ marginBottom: 12 }}>Formule</div>
                {tiers.map(function (t) {
                  return (
                    <button key={t.id} className={"tier" + (tier === t.id ? " on" : "")} onClick={function () { setTier(t.id); }}>
                      <div className="tier-main">
                        <span className="tier-radio"></span>
                        <span className="tier-l"><span className="t">{t.t}</span><span className="s">{t.s}</span></span>
                      </div>
                      <span className="tier-r">{eur(t.price)}</span>
                    </button>
                  );
                })}

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: "20px 0 18px", paddingTop: 18, borderTop: "1px solid var(--line)" }}>
                  <span style={{ fontWeight: 600 }}>Total estimé</span>
                  <span className="serif" style={{ fontSize: 32, fontWeight: 600 }}>{eur(tierObj.price)}</span>
                </div>

                <Button block size="lg" onClick={goBook}>Réserver ce véhicule</Button>

                <div className="trust-row">
                  <div className="t">{Icons.lock} Paiement 100% sécurisé · 3D Secure</div>
                  <div className="t">{Icons.checkCircle} Annulation gratuite jusqu'à 48h avant</div>
                  <div className="t">{Icons.shield} Assurance tous risques & assistance incluses</div>
                  <div className="t">{Icons.truck} Livraison possible dans toute la région</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* sticky mobile CTA */}
      <div className={"sticky-cta" + (showSticky ? " show" : "")}>
        <div>
          <div className="mono-label" style={{ marginBottom: 2 }}>{v.full} · {tierObj.t}</div>
          <div className="serif" style={{ fontSize: 26, fontWeight: 600 }}>{eur(tierObj.price)}</div>
        </div>
        <Button onClick={goBook}>Réserver</Button>
      </div>
    </div>
  );
}

Object.assign(window, { DetailPage, Calendar });
