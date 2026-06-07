/* BeLoc — How it works + About/Contact (Babel/JSX) */

function HowPage(props) {
  const [open, setOpen] = useState(0);
  const steps = [
    { t: "Je choisis mon véhicule", p: "Parcours nos cinq modèles, compare puissances, formules et tarifs. Chaque fiche te dit tout — sans jargon." },
    { t: "Je réserve en ligne", p: "Dates, lieu de prise en charge, paiement sécurisé : quatre étapes depuis ton téléphone, et c'est réservé." },
    { t: "Je récupère les clés", p: "Au point relais le plus proche, ou en livraison là où tu es. État des lieux digital, signature en deux gestes." },
    { t: "Je profite", p: "La route est à toi. Assistance 7j/7 dans la poche, assurance tous risques incluse. Roule l'esprit léger." },
  ];
  const faqs = [
    { q: "Faut-il un dépôt de garantie ?", a: "Oui, une empreinte de caution est réalisée sur ta carte à la prise en charge, puis libérée automatiquement au retour du véhicule. Son montant dépend du modèle et t'est indiqué avant paiement." },
    { q: "Quelles conditions pour conduire ?", a: "Il faut avoir au minimum 21 ans (25 pour les modèles sportifs RS3 et Golf 8R), être titulaire d'un permis B valide depuis au moins 2 ans, et présenter une pièce d'identité à la prise en charge." },
    { q: "La livraison, comment ça marche ?", a: "Pour 49 €, on t'apporte la voiture à l'adresse de ton choix dans toute la région Auvergne-Rhône-Alpes — domicile, gare, aéroport ou hôtel — à l'heure convenue. Le retour se fait au même endroit." },
    { q: "Puis-je annuler ma réservation ?", a: "L'annulation est gratuite jusqu'à 48 heures avant le début de la location. Passé ce délai, des frais peuvent s'appliquer selon les conditions précisées au moment de la réservation." },
    { q: "Le kilométrage est-il limité ?", a: "Chaque formule inclut un forfait kilométrique généreux (200 km/jour, 600 km/week-end). Au-delà, un tarif au kilomètre clair et sans surprise s'applique." },
    { q: "L'assurance est-elle comprise ?", a: "Oui. Toutes nos locations incluent une assurance tous risques et l'assistance 7j/7. Tu peux réduire la franchise via une option au moment de réserver." },
  ];

  return (
    <div className="page pad-top">
      <section className="section">
        <div className="wrap">
          <Reveal><Eyebrow>Comment ça marche</Eyebrow></Reveal>
          <Reveal delay={1}><h1 className="display" style={{ fontSize: "clamp(40px,6vw,88px)", margin: "16px 0 18px" }}>Du désir au volant,<br />en quatre temps.</h1></Reveal>
          <Reveal delay={2}><p className="lede">BeLoc, c'est la location premium débarrassée de tout ce qui pèse : pas d'agence, pas de comptoir, pas de paperasse. Juste toi, ton téléphone, et la voiture de tes envies.</p></Reveal>

          <Reveal style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            <div className="howsteps">
              {steps.map(function (s, i) {
                return (
                  <div className="howstep" key={i}>
                    <span className="n">0{i + 1}</span>
                    <h3>{s.t}</h3>
                    <p>{s.p}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* reassurance band */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <div className="assure">
              {[
                { ic: Icons.clock, t: "4 étapes, 3 minutes", p: "Le temps d'un café : c'est tout ce qu'il faut pour réserver une voiture d'exception." },
                { ic: Icons.infinity, t: "Zéro contact imposé", p: "Tout est digital de bout en bout. Un humain reste joignable 7j/7 si tu le souhaites." },
                { ic: Icons.headset, t: "Conciergerie dédiée", p: "Un doute, une demande spéciale ? Notre équipe répond et t'accompagne avant, pendant, après." },
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

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="shead">
            <div>
              <Reveal><Eyebrow>Questions fréquentes</Eyebrow></Reveal>
              <Reveal delay={1}><h2 className="display" style={{ fontSize: "clamp(32px,4.5vw,60px)" }}>On vous dit tout.</h2></Reveal>
            </div>
            <Reveal delay={2}><p className="lede">Une question qui n'est pas là ? Notre conciergerie répond sous quelques minutes, 7j/7.</p></Reveal>
          </div>
          <Reveal>
            <div>
              {faqs.map(function (f, i) {
                const isOpen = open === i;
                return (
                  <div className={"faq-item" + (isOpen ? " open" : "")} key={i}>
                    <button className="faq-q" onClick={function () { setOpen(isOpen ? -1 : i); }}>
                      <span>{f.q}</span>
                      <span className="pm">{Icons.plus}</span>
                    </button>
                    <div className="faq-a" style={{ maxHeight: isOpen ? 240 : 0 }}>
                      <div className="faq-a-inner">{f.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight" style={{ paddingBottom: "clamp(64px,9vw,132px)" }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-banner" style={{ textAlign: "center" }}>
              <h2 className="display" style={{ margin: "0 auto 26px" }}>Tu sais tout. Il ne reste qu'à choisir.</h2>
              <Button size="lg" onClick={function () { props.nav("fleet"); }}>Voir la flotte</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function AboutPage(props) {
  const B = window.BELOC;
  const [sent, setSent] = useState(false);
  const rs3 = B.byId("audi-rs3");

  return (
    <div className="page pad-top">
      {/* hero */}
      <section className="section">
        <div className="wrap">
          <div className="about-hero">
            <div>
              <Reveal><Eyebrow>À propos · {B.region}</Eyebrow></Reveal>
              <Reveal delay={1}><h1 className="display" style={{ fontSize: "clamp(40px,6vw,84px)", margin: "16px 0 22px" }}>Jeune agence,<br /><span className="italic" style={{ color: "var(--gold-soft)" }}>vieille obsession :</span><br />le plaisir de conduire.</h1></Reveal>
              <Reveal delay={2}>
                <p className="lede" style={{ marginBottom: 18 }}>BeLoc est née d'une conviction simple : posséder une voiture d'exception n'est plus une fin en soi. La vivre, le temps d'un week-end ou d'une occasion qui compte, l'est bien davantage.</p>
                <p className="lede">Basée au cœur de l'Auvergne-Rhône-Alpes, notre agence 100% en ligne sélectionne une poignée de modèles d'exception et les met à portée de clic. Pas de comptoir, pas de friction — juste l'essentiel : la route, et la voiture qu'il te faut pour la savourer.</p>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <div style={{ aspectRatio: "4/5", borderRadius: 8, overflow: "hidden", border: "1px solid var(--line-soft)" }}>
                <Img src={rs3.hero} alt="BeLoc" style={{ width: "100%", height: "100%", objectFit: "cover" }} eager />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* figures */}
      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <div className="about-figures">
              {[
                { n: "2024", l: "Année de création" },
                { n: "5", l: "Modèles d'exception" },
                { n: "100%", l: "Réservation en ligne" },
              ].map(function (f, i) {
                return <div className="figure" key={i}><div className="n serif">{f.n}</div><div className="l">{f.l}</div></div>;
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="wrap"><hr className="divider" /></div>

      {/* contact */}
      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <Reveal><Eyebrow>Contact</Eyebrow></Reveal>
              <Reveal delay={1}><h2 className="display" style={{ fontSize: "clamp(30px,4vw,52px)", margin: "16px 0 24px" }}>Parlons de ton prochain trajet.</h2></Reveal>
              <Reveal delay={2}><p className="lede" style={{ marginBottom: 28 }}>Une demande particulière, un événement, une question sur un modèle ? Notre conciergerie te répond sous quelques minutes, 7j/7.</p></Reveal>
              <Reveal delay={2}>
                <div>
                  <div className="contact-info-item"><span className="ic">{Icons.phone}</span><div><div className="t">{B.phone}</div><div className="s">Assistance & conciergerie · 7j/7</div></div></div>
                  <div className="contact-info-item"><span className="ic">{Icons.mail}</span><div><div className="t">{B.email}</div><div className="s">Réponse sous quelques minutes</div></div></div>
                  <div className="contact-info-item"><span className="ic">{Icons.pin}</span><div><div className="t">{B.region}</div><div className="s">Livraison dans toute la région</div></div></div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={1}>
              <div style={{ background: "var(--ink-800)", border: "1px solid var(--line)", borderRadius: 8, padding: "clamp(24px,3vw,36px)" }}>
                {sent ? (
                  <div style={{ textAlign: "center", padding: "30px 0" }}>
                    <div className="confirm-check" style={{ width: 64, height: 64, marginBottom: 22 }}>{Icons.check}</div>
                    <h3 className="serif" style={{ fontSize: 28, fontWeight: 600, margin: "0 0 10px" }}>Message envoyé.</h3>
                    <p className="oc-s">On revient vers toi très vite.</p>
                    <Button variant="ghost" icon={false} onClick={function () { setSent(false); }} style={{ marginTop: 18 }}>Nouveau message</Button>
                  </div>
                ) : (
                  <form onSubmit={function (e) { e.preventDefault(); setSent(true); props.toast && props.toast("Message envoyé !"); }}>
                    <div className="field-row">
                      <div className="field"><label>Prénom</label><input required placeholder="Camille" /></div>
                      <div className="field"><label>Nom</label><input required placeholder="Roux" /></div>
                    </div>
                    <div className="field"><label>Email</label><input type="email" required placeholder="camille@email.fr" /></div>
                    <div className="field"><label>Sujet</label>
                      <select><option>Une question sur un véhicule</option><option>Une demande pour un événement</option><option>Réserver une livraison</option><option>Autre</option></select>
                    </div>
                    <div className="field"><label>Message</label><textarea rows="4" required placeholder="Dis-nous tout…"></textarea></div>
                    <Button type="submit" block>Envoyer le message</Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function OffersPage(props) {
  const B = window.BELOC;
  return (
    <div className="page pad-top">
      <section className="section">
        <div className="wrap">
          <Reveal><Eyebrow>Nos offres</Eyebrow></Reveal>
          <Reveal delay={1}><h1 className="display" style={{ fontSize: "clamp(40px,6vw,88px)", margin: "16px 0 18px" }}>Une formule<br /><span className="italic" style={{ color: "var(--gold-soft)" }}>pour chaque aventure.</span></h1></Reveal>
          <Reveal delay={2}><p className="lede">Journée, week-end ou semaine — chaque modèle est disponible dans les trois formules. Assurance tous risques et assistance 7j/7 incluses dans chaque tarif.</p></Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <div className="offers-grid">
              {B.vehicles.map(function(v) {
                return (
                  <div className="offer-card" key={v.id}>
                    <div className="offer-img">
                      <Img src={v.hero} alt={v.full} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="offer-body">
                      <div className="offer-title">
                        <span className="mono-label">{v.brand}</span>
                        <h3 className="serif offer-name">{v.name}</h3>
                        {v.isNew && <span className="badge badge-new" style={{ marginLeft: "auto" }}>Nouveau</span>}
                        {v.sport && !v.isNew && <span className="badge badge-sport" style={{ marginLeft: "auto" }}>{v.type}</span>}
                      </div>
                      <div className="offer-prices">
                        <div className="offer-price"><span className="label">Journée</span><span className="amount">{v.prices.day} €</span></div>
                        <div className="offer-price feat"><span className="label">Week-end</span><span className="amount">{v.prices.weekend} €</span></div>
                        <div className="offer-price"><span className="label">Semaine</span><span className="amount">{v.prices.week} €</span></div>
                      </div>
                      <Button block onClick={function() { props.nav("booking", { vehicleId: v.id }); }}>Réserver ce véhicule</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="shead">
            <div>
              <Reveal><Eyebrow>Toujours inclus</Eyebrow></Reveal>
              <Reveal delay={1}><h2 className="display" style={{ fontSize: "clamp(30px,4vw,54px)" }}>Sans surprise,<br />sans astérisque.</h2></Reveal>
            </div>
          </div>
          <Reveal>
            <div className="assure">
              {[
                { ic: Icons.shield, t: "Assurance tous risques", p: "Incluse dans chaque location. Franchise réductible en option au moment de réserver." },
                { ic: Icons.headset, t: "Assistance 7j/7", p: "Un imprévu sur la route ? Notre équipe est joignable à toute heure, toute la semaine." },
                { ic: Icons.infinity, t: "Annulation gratuite", p: "Jusqu'à 48h avant le départ — sans frais, sans justification, remboursement immédiat." },
              ].map(function(a, i) {
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

      <section className="section-tight" style={{ paddingBottom: "clamp(64px,9vw,132px)" }}>
        <div className="wrap">
          <Reveal><Eyebrow>Options à la carte</Eyebrow></Reveal>
          <Reveal delay={1}><h2 className="display" style={{ fontSize: "clamp(28px,3.5vw,48px)", margin: "16px 0 32px" }}>Personnalisez votre expérience.</h2></Reveal>
          <Reveal>
            <div className="options-list">
              {[
                { t: "Conducteur supplémentaire", p: "+15 €/jour · Partagez le volant — même couverture assurance." },
                { t: "GPS premium", p: "+8 €/jour · Navigation temps réel, mises à jour garanties, support offline." },
                { t: "Livraison à domicile", p: "+49 € · On amène le véhicule à l'adresse de votre choix dans toute la région." },
                { t: "Réduction de franchise", p: "À partir de +19 €/jour · Roulez sans retenue, sans arrière-pensée." },
              ].map(function(o, i) {
                return (
                  <div className="option-item" key={i}>
                    <div className="option-title">{o.t}</div>
                    <div className="option-price">{o.p}</div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function PresencePage(props) {
  const B = window.BELOC;
  return (
    <div className="page pad-top">
      <section className="section">
        <div className="wrap">
          <Reveal><Eyebrow>Notre présence</Eyebrow></Reveal>
          <Reveal delay={1}><h1 className="display" style={{ fontSize: "clamp(40px,6vw,88px)", margin: "16px 0 18px" }}>L'Auvergne-Rhône-Alpes,<br /><span className="italic" style={{ color: "var(--gold-soft)" }}>à portée de volant.</span></h1></Reveal>
          <Reveal delay={2}><p className="lede">BeLoc livre et récupère vos véhicules dans toute la région — à domicile, en gare, à l'aéroport ou à l'hôtel. Une seule règle : c'est nous qui venons à vous.</p></Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <Reveal><Eyebrow>Villes desservies</Eyebrow></Reveal>
          <Reveal delay={1}><h2 className="display" style={{ fontSize: "clamp(30px,4vw,52px)", margin: "16px 0 32px" }}>{B.cities.length} villes,<br />1 000+ points de remise.</h2></Reveal>
          <Reveal>
            <div className="cities-grid">
              {B.cities.map(function(c, i) {
                return (
                  <div className="city-card" key={c}>
                    <span className="city-num">0{i + 1}</span>
                    <span className="city-name">{c}</span>
                    <span className="city-arrow">{Icons.chevR}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="presence-info">
              {[
                { ic: Icons.pin, t: "Livraison à l'adresse de votre choix", p: "Pour 49 €, nous livrons le véhicule où vous le souhaitez : domicile, gare, aéroport, hôtel. Le retour se fait au même endroit, à l'heure convenue." },
                { ic: Icons.clock, t: "Disponible 7j/7", p: "Réservez au minimum 24h à l'avance. Nous confirmons le créneau de livraison par SMS dans l'heure. En cas d'urgence, notre conciergerie vous répond directement." },
                { ic: Icons.shield, t: "Couverture régionale complète", p: "Toute la région Auvergne-Rhône-Alpes est couverte. Pour les demandes hors-région ou les événements spéciaux, contactez-nous — nous étudions chaque cas." },
              ].map(function(b, i) {
                return (
                  <Reveal key={i} delay={i}>
                    <div className="presence-block">
                      <span className="presence-ic">{b.ic}</span>
                      <h3>{b.t}</h3>
                      <p>{b.p}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: "clamp(64px,9vw,132px)" }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-banner" style={{ textAlign: "center" }}>
              <h2 className="display" style={{ margin: "0 0 26px" }}>On vient à vous. Où vous voulez.</h2>
              <Button size="lg" onClick={function() { props.nav("fleet"); }}>Choisir un véhicule</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function ContactPage(props) {
  const B = window.BELOC;
  const [sent, setSent] = useState(false);
  return (
    <div className="page pad-top">
      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <Reveal><Eyebrow>Contact</Eyebrow></Reveal>
              <Reveal delay={1}><h1 className="display" style={{ fontSize: "clamp(36px,5vw,72px)", margin: "16px 0 24px" }}>Parlons de votre<br />prochain trajet.</h1></Reveal>
              <Reveal delay={2}><p className="lede" style={{ marginBottom: 32 }}>Une demande particulière, un événement, une question sur un modèle ? Notre conciergerie vous répond sous quelques minutes, 7j/7.</p></Reveal>
              <Reveal delay={2}>
                <div>
                  <div className="contact-info-item"><span className="ic">{Icons.phone}</span><div><div className="t">{B.phone}</div><div className="s">Assistance & conciergerie · 7j/7</div></div></div>
                  <div className="contact-info-item"><span className="ic">{Icons.mail}</span><div><div className="t">{B.email}</div><div className="s">Réponse sous quelques minutes</div></div></div>
                  <div className="contact-info-item"><span className="ic">{Icons.pin}</span><div><div className="t">{B.region}</div><div className="s">Livraison dans toute la région</div></div></div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={1}>
              <div style={{ background: "var(--ink-800)", border: "1px solid var(--line)", borderRadius: 8, padding: "clamp(24px,3vw,36px)" }}>
                {sent ? (
                  <div style={{ textAlign: "center", padding: "30px 0" }}>
                    <div className="confirm-check" style={{ width: 64, height: 64, marginBottom: 22 }}>{Icons.check}</div>
                    <h3 className="serif" style={{ fontSize: 28, fontWeight: 600, margin: "0 0 10px" }}>Message envoyé.</h3>
                    <p className="oc-s">On revient vers vous très vite.</p>
                    <Button variant="ghost" icon={false} onClick={function() { setSent(false); }} style={{ marginTop: 18 }}>Nouveau message</Button>
                  </div>
                ) : (
                  <form onSubmit={function(e) { e.preventDefault(); setSent(true); props.toast && props.toast("Message envoyé !"); }}>
                    <div className="field-row">
                      <div className="field"><label>Prénom</label><input required placeholder="Camille" /></div>
                      <div className="field"><label>Nom</label><input required placeholder="Roux" /></div>
                    </div>
                    <div className="field"><label>Email</label><input type="email" required placeholder="camille@email.fr" /></div>
                    <div className="field"><label>Sujet</label>
                      <select>
                        <option>Une question sur un véhicule</option>
                        <option>Une demande pour un événement</option>
                        <option>Réserver une livraison</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div className="field"><label>Message</label><textarea rows="4" required placeholder="Dis-nous tout…"></textarea></div>
                    <Button type="submit" block>Envoyer le message</Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HowPage, AboutPage, OffersPage, PresencePage, ContactPage });
