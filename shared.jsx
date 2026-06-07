/* BeLoc — shared components & icons (Babel/JSX) */
const { useState, useEffect, useRef, useCallback } = React;

/* ---------------- Icons (thin line) ---------------- */
function Ic(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.sw || 1.5}
      strokeLinecap="round" strokeLinejoin="round" {...(props.attrs || {})}>
      {props.children}
    </svg>
  );
}
const Icons = {
  arrow: <Ic><path d="M5 12h14M13 6l6 6-6 6" /></Ic>,
  arrowR: <Ic><path d="M5 12h14M13 6l6 6-6 6" /></Ic>,
  arrowL: <Ic><path d="M19 12H5M11 6l-6 6 6 6" /></Ic>,
  arrowDown: <Ic><path d="M12 5v14M6 13l6 6 6-6" /></Ic>,
  chevR: <Ic><path d="M9 6l6 6-6 6" /></Ic>,
  chevL: <Ic><path d="M15 6l-6 6 6 6" /></Ic>,
  chevD: <Ic><path d="M6 9l6 6 6-6" /></Ic>,
  menu: <Ic><path d="M3 6h18M3 12h18M3 18h18" /></Ic>,
  close: <Ic><path d="M6 6l12 12M18 6L6 18" /></Ic>,
  phone: <Ic><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L17 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 1-2Z" /></Ic>,
  star: <Ic sw={1}><path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.9 6.7 19.6l1.1-6L3.4 9.4l6-.8L12 3Z" fill="currentColor" /></Ic>,
  heart: <Ic><path d="M12 20s-7-4.5-9.5-9A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 9.5 5c-2.5 4.5-9.5 9-9.5 9Z" /></Ic>,
  check: <Ic><path d="M5 12l5 5L20 6" /></Ic>,
  checkCircle: <Ic><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></Ic>,
  bolt: <Ic><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8Z" /></Ic>,
  gauge: <Ic><path d="M12 14l4-4" /><path d="M4.5 18a9 9 0 1 1 15 0" /><circle cx="12" cy="14" r="1.4" fill="currentColor" stroke="none" /></Ic>,
  road: <Ic><path d="M5 21l3-18M19 21l-3-18M12 5v2M12 11v2M12 17v2" /></Ic>,
  gear: <Ic><circle cx="12" cy="12" r="3.5" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /></Ic>,
  users: <Ic><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.5M21 20a5.5 5.5 0 0 0-4-5.3" /></Ic>,
  fuel: <Ic><path d="M5 21V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15M3 21h13M14 9h2.5a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V9l-2.5-2.5" /></Ic>,
  flag: <Ic><path d="M5 21V4M5 4h11l-2 4 2 4H5" /></Ic>,
  online: <Ic><rect x="3" y="5" width="18" height="13" rx="2" /><path d="M8 21h8M12 18v3" /></Ic>,
  truck: <Ic><path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></Ic>,
  shield: <Ic><path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" /><path d="M9 12l2 2 4-4" /></Ic>,
  lock: <Ic><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></Ic>,
  calendar: <Ic><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></Ic>,
  pin: <Ic><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></Ic>,
  clock: <Ic><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Ic>,
  mail: <Ic><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></Ic>,
  card: <Ic><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18" /></Ic>,
  plus: <Ic><path d="M12 5v14M5 12h14" /></Ic>,
  sparkle: <Ic><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /></Ic>,
  key: <Ic><circle cx="8" cy="14" r="4" /><path d="M11 11l8-8M16 3l3 3M14 5l2 2" /></Ic>,
  headset: <Ic><path d="M4 13v-1a8 8 0 0 1 16 0v1M4 13a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2zM20 13a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2zM18 15v1a4 4 0 0 1-4 4h-2" /></Ic>,
  infinity: <Ic><path d="M7 9a3 3 0 1 0 0 6c2 0 3-2 5-3s3-3 5-3a3 3 0 1 1 0 6c-2 0-3-2-5-3S9 9 7 9Z" /></Ic>,
};

/* ---------------- Wordmark ---------------- */
function Wordmark(props) {
  return (
    <span className="wordmark" style={props.style} onClick={props.onClick} role={props.onClick ? "button" : undefined}>
      <span className="be">Be</span><span className="loc">Loc</span><span className="dot">.</span>
    </span>
  );
}

/* ---------------- Eyebrow ---------------- */
function Eyebrow(props) {
  return <span className={"eyebrow" + (props.center ? " center" : "")} style={props.style}>{props.children}</span>;
}

/* ---------------- Stars ---------------- */
function Stars(props) {
  const n = props.n || 5;
  return (
    <span className="stars" aria-label={props.value + " sur 5"}>
      {Array.from({ length: n }).map((_, i) => <span key={i}>{Icons.star}</span>)}
    </span>
  );
}

/* ---------------- Button (router-aware) ---------------- */
function Button(props) {
  const cls = ["btn", "btn-" + (props.variant || "primary"), props.size ? "btn-" + props.size : "", props.block ? "btn-block" : "", props.className || ""].join(" ").trim();
  return (
    <button className={cls} onClick={props.onClick} disabled={props.disabled} type={props.type || "button"} style={props.style}>
      {props.children}
      {props.icon !== false && (props.icon || Icons.arrow)}
    </button>
  );
}

/* ---------------- Reveal on scroll ---------------- */
function Reveal(props) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(function () {
    const el = ref.current;
    if (!el) return;
    // Immediate check: if already in (or near) the viewport on mount, reveal now.
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    if (r.top < vh * 0.92) { setSeen(true); return; }
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { setSeen(true); io.disconnect(); } });
      }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
      io.observe(el);
    }
    // Safety net: never leave content hidden if observer never fires.
    const t = window.setTimeout(function () { setSeen(true); }, 1200);
    return function () { if (io) io.disconnect(); window.clearTimeout(t); };
  }, []);
  const Tag = props.as || "div";
  const cls = ["reveal", props.delay ? "reveal-d" + props.delay : "", seen ? "in" : "", props.className || ""].join(" ").trim();
  return <Tag ref={ref} className={cls} style={props.style}>{props.children}</Tag>;
}

/* ---------------- Image with graceful fallback ---------------- */
function Img(props) {
  const [err, setErr] = useState(false);
  if (err || !props.src) {
    return <div className={"ph " + (props.className || "")} style={props.style}><span>{props.label || "Visuel"}</span></div>;
  }
  return <img src={props.src} alt={props.alt || ""} className={props.className} style={props.style} loading={props.eager ? "eager" : "lazy"} onError={function () { setErr(true); }} />;
}

/* ---------------- Header ---------------- */
const NAV = [
  { id: "fleet", label: "La Flotte" },
  { id: "offers", label: "Nos offres" },
  { id: "presence", label: "Notre présence" },
  { id: "about", label: "À propos" },
  { id: "contact", label: "Contact" },
];

function Header(props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(function () {
    const onScroll = function () { setScrolled(window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return function () { window.removeEventListener("scroll", onScroll); };
  }, []);
  useEffect(function () { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  const go = function (id) { setOpen(false); props.nav(id); };
  const B = window.BELOC;
  return (
    <React.Fragment>
      <header className={"hdr" + (scrolled || props.solid ? " scrolled" : "")}>
        <div className="hdr-inner">
          <Wordmark onClick={function () { go("home"); }} style={{ cursor: "pointer" }} />
          <nav className="hdr-nav">
            {NAV.map(function (n) {
              return <a key={n.id} className={"hdr-link" + (props.route === n.id ? " active" : "")} onClick={function () { go(n.id); }}>{n.label}</a>;
            })}
          </nav>
          <div className="hdr-right">
            <span className="hdr-phone">{Icons.headset}<span>Assistance 7j/7</span></span>
            <Button size="sm" onClick={function () { go("fleet"); }} icon={Icons.arrow}>Réserver</Button>
            <button className="burger" onClick={function () { setOpen(true); }} aria-label="Menu">{Icons.menu}</button>
          </div>
        </div>
      </header>

      <div className={"drawer" + (open ? " open" : "")}>
        <div className="drawer-top">
          <Wordmark />
          <button className="burger" style={{ display: "inline-flex" }} onClick={function () { setOpen(false); }} aria-label="Fermer">{Icons.close}</button>
        </div>
        <nav className="drawer-nav">
          {NAV.map(function (n, i) {
            return <a key={n.id} onClick={function () { go(n.id); }}>{n.label}<span className="idx">0{i + 1}</span></a>;
          })}
        </nav>
        <div className="drawer-foot">
          <Button block size="lg" onClick={function () { go("fleet"); }}>Réserver un véhicule</Button>
          <span className="hdr-phone" style={{ display: "inline-flex" }}>{Icons.phone}<span>{B.phone}</span></span>
        </div>
      </div>
    </React.Fragment>
  );
}

/* ---------------- Footer ---------------- */
function Footer(props) {
  const B = window.BELOC;
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div className="ftr-col ftr-brand">
            <Wordmark style={{ fontSize: 26 }} />
            <p className="lede">L'agence 100% en ligne de location de véhicules premium et hautes performances en {B.region}.</p>
            <div className="ftr-pay">
              <span className="paychip">{Icons.lock} Paiement sécurisé</span>
              <span className="paychip">Visa</span>
              <span className="paychip">Mastercard</span>
              <span className="paychip">Apple&nbsp;Pay</span>
            </div>
          </div>
          <div className="ftr-col">
            <h5>Naviguer</h5>
            {NAV.map(function (n) { return <a key={n.id} onClick={function () { props.nav(n.id); }}>{n.label}</a>; })}
          </div>
          <div className="ftr-col">
            <h5>La Flotte</h5>
            {B.vehicles.map(function (v) { return <a key={v.id} onClick={function () { props.nav("detail", v.id); }}>{v.full}</a>; })}
          </div>
          <div className="ftr-col">
            <h5>Contact</h5>
            <a onClick={function () { props.nav("about"); }}>{B.phone}</a>
            <a onClick={function () { props.nav("about"); }}>{B.email}</a>
            <a onClick={function () { props.nav("about"); }}>Nous écrire</a>
            <a onClick={function () { props.nav("how"); }}>Aide & FAQ</a>
          </div>
        </div>
        <div className="ftr-bottom">
          <p>© 2026 BeLoc — {B.region}</p>
          <div className="links">
            <a>Mentions légales</a>
            <a>CGV / CGU</a>
            <a>Confidentialité</a>
            <a>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Toast ---------------- */
function useToast() {
  const [msg, setMsg] = useState(null);
  const show = useCallback(function (m) {
    setMsg(m);
    window.clearTimeout(window.__belocToast);
    window.__belocToast = window.setTimeout(function () { setMsg(null); }, 2600);
  }, []);
  const node = (
    <div className={"toast" + (msg ? " show" : "")}>{Icons.check}<span>{msg}</span></div>
  );
  return [node, show];
}

/* ---------------- helpers ---------------- */
function eur(n) { return new Intl.NumberFormat("fr-FR").format(n) + " €"; }
function priceFrom(v) { return Math.min(v.prices.day, v.prices.weekend, v.prices.week); }

Object.assign(window, {
  Ic, Icons, Wordmark, Eyebrow, Stars, Button, Reveal, Img, Header, Footer, NAV, useToast, eur, priceFrom,
});
