/* BeLoc — App router & mount (Babel/JSX) */
function App() {
  const saved = function () {
    try {
      return JSON.parse(localStorage.getItem("beloc_route") || "null");
    } catch (e) {
      return null;
    }
  }();
  const [route, setRoute] = useState(saved && saved.route || "home");
  const [params, setParams] = useState(saved && saved.params || null);
  const [toastNode, toast] = useToast();
  const nav = useCallback(function (r, p) {
    setRoute(r);
    setParams(p != null ? p : null);
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
    try {
      localStorage.setItem("beloc_route", JSON.stringify({
        route: r,
        params: p != null ? p : null
      }));
    } catch (e) {}
  }, []);
  useEffect(function () {
    try {
      localStorage.setItem("beloc_route", JSON.stringify({
        route: route,
        params: params
      }));
    } catch (e) {}
  }, [route, params]);
  const onFav = function (on) {
    if (on) toast("Ajouté à tes favoris");
  };
  let page;
  if (route === "fleet") page = /*#__PURE__*/React.createElement(FleetPage, {
    nav: nav,
    onFav: onFav
  });else if (route === "detail") page = /*#__PURE__*/React.createElement(DetailPage, {
    nav: nav,
    params: params,
    onFav: onFav
  });else if (route === "booking") page = /*#__PURE__*/React.createElement(BookingPage, {
    nav: nav,
    params: params,
    toast: toast
  });else if (route === "how") page = /*#__PURE__*/React.createElement(HowPage, {
    nav: nav
  });else if (route === "offers") page = /*#__PURE__*/React.createElement(OffersPage, {
    nav: nav
  });else if (route === "presence") page = /*#__PURE__*/React.createElement(PresencePage, {
    nav: nav
  });else if (route === "about") page = /*#__PURE__*/React.createElement(AboutPage, {
    nav: nav,
    toast: toast
  });else if (route === "contact") page = /*#__PURE__*/React.createElement(ContactPage, {
    nav: nav,
    toast: toast
  });else page = /*#__PURE__*/React.createElement(HomePage, {
    nav: nav,
    onFav: onFav
  });
  const solid = route !== "home";
  const showWidget = route === "home";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    route: route,
    nav: nav,
    solid: solid
  }), /*#__PURE__*/React.createElement("main", {
    style: showWidget ? {
      paddingBottom: 74
    } : undefined
  }, page), /*#__PURE__*/React.createElement(Footer, {
    nav: nav
  }), toastNode, showWidget && /*#__PURE__*/React.createElement(ReservationWidget, {
    nav: nav
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
