/* BeLoc — App router & mount (Babel/JSX) */
function App() {
  const saved = (function () {
    try { return JSON.parse(localStorage.getItem("beloc_route") || "null"); } catch (e) { return null; }
  })();
  const [route, setRoute] = useState((saved && saved.route) || "home");
  const [params, setParams] = useState((saved && saved.params) || null);
  const [toastNode, toast] = useToast();

  const nav = useCallback(function (r, p) {
    setRoute(r);
    setParams(p != null ? p : null);
    window.scrollTo({ top: 0, behavior: "auto" });
    try { localStorage.setItem("beloc_route", JSON.stringify({ route: r, params: p != null ? p : null })); } catch (e) {}
  }, []);

  useEffect(function () {
    try { localStorage.setItem("beloc_route", JSON.stringify({ route: route, params: params })); } catch (e) {}
  }, [route, params]);

  const onFav = function (on) { if (on) toast("Ajouté à tes favoris"); };

  let page;
  if (route === "fleet") page = <FleetPage nav={nav} onFav={onFav} />;
  else if (route === "detail") page = <DetailPage nav={nav} params={params} onFav={onFav} />;
  else if (route === "booking") page = <BookingPage nav={nav} params={params} toast={toast} />;
  else if (route === "how") page = <HowPage nav={nav} />;
  else if (route === "offers") page = <OffersPage nav={nav} />;
  else if (route === "presence") page = <PresencePage nav={nav} />;
  else if (route === "about") page = <AboutPage nav={nav} toast={toast} />;
  else if (route === "contact") page = <ContactPage nav={nav} toast={toast} />;
  else page = <HomePage nav={nav} onFav={onFav} />;

  const solid = route !== "home";

  return (
    <React.Fragment>
      <Header route={route} nav={nav} solid={solid} />
      <main style={{ paddingBottom: 110 }}>{page}</main>
      <Footer nav={nav} />
      {toastNode}
      <ReservationWidget nav={nav} route={route} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
