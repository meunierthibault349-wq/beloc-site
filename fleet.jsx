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

  return (
    <div className="page pad-top">
      {/* header */}
      <section className="fleet-hero">
        <div className="wrap">
          <Reveal><Eyebrow>Catalogue · {list.length} véhicules disponibles</Eyebrow></Reveal>
          <Reveal delay={1}>
            <div className="shead" style={{ marginBottom: 8 }}>
              <h1 className="display" style={{ fontSize: "clamp(40px,6vw,84px)" }}>La Flotte</h1>
              <p className="lede">Cinq voitures triées sur le volet, de la citadine raffinée à la sportive d'exception. Toutes prêtes à être réservées en quelques minutes.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* filters */}
      <div className="filters">
        <div className="wrap">
          <div className="filters-inner">
            <div className="chip-row">
              {types.map(function (t) {
                return <button key={t} className={"chip" + (type === t ? " on" : "")} onClick={function () { setType(t); }}>{t}</button>;
              })}
            </div>
            <div className="chip-row">
              {[
                { id: "all", l: "Tous budgets" },
                { id: "lt150", l: "< 150€" },
                { id: "150-300", l: "150–300€" },
                { id: "gt300", l: "> 300€" },
              ].map(function (b) {
                return <button key={b.id} className={"chip" + (budget === b.id ? " on" : "")} onClick={function () { setBudget(b.id); }}>{b.l}</button>;
              })}
            </div>
            <div className="filters-spacer"></div>
            <div className="sortsel">
              <span>Trier</span>
              <select value={sort} onChange={function (e) { setSort(e.target.value); }}>
                <option value="featured">En vedette</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="power">Puissance</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* grid */}
      <section className="section" style={{ paddingTop: "clamp(36px,4vw,56px)" }}>
        <div className="wrap">
          {list.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--muted)" }}>
              <p className="serif" style={{ fontSize: 28 }}>Aucun véhicule pour ces critères.</p>
              <Button variant="ghost" icon={false} onClick={function () { setType("Tous"); setBudget("all"); }}>Réinitialiser les filtres</Button>
            </div>
          ) : (
            <div className="fleet-grid">
              {list.map(function (v, i) {
                return (
                  <Reveal key={v.id} delay={(i % 3) + 1}>
                    <VehicleCard v={v} nav={props.nav} onFav={props.onFav} eager={i < 3} />
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* assist banner */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <div className="cta-banner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
              <div>
                <Eyebrow>Une hésitation ?</Eyebrow>
                <h2 className="display" style={{ fontSize: "clamp(26px,3vw,40px)", margin: "14px 0 0" }}>Notre conciergerie t'aide à choisir.</h2>
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Button variant="gold" icon={false} onClick={function () { props.nav("about"); }}>Nous contacter</Button>
                <Button onClick={function () { props.nav("how"); }} icon={Icons.arrow}>Comment ça marche</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { FleetPage });
