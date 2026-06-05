/* BeLoc — fleet data (window global, no modules) */
window.BELOC = {
  region: "Auvergne-Rhône-Alpes",
  phone: "+33 4 26 00 18 90",
  email: "bonjour@beloc.fr",
  cities: ["Lyon", "Grenoble", "Annecy", "Chambéry", "Clermont-Ferrand", "Saint-Étienne", "Valence"],
  vehicles: [
    {
      id: "audi-rs3",
      brand: "Audi",
      name: "RS3",
      full: "Audi RS3",
      year: 2025,
      type: "Sport",
      sport: true,
      flagship: true,
      hero: "assets/rs3-action.avif",
      gallery: ["assets/rs3-action.avif", "assets/rs3-studio.jpg"],
      tagline: "La RS3 ne se conduit pas. Elle se vit.",
      short: "Cinq cylindres, transmission quattro, 400 chevaux. Le sommet de notre flotte — une icône qui transforme chaque trajet en événement.",
      colorName: "Vert Kyalami",
      prices: { day: 349, weekend: 629, week: 1990 },
      specs: {
        puissance: "400", puissanceU: "ch",
        zero: "3.8", zeroU: "s 0–100",
        vmax: "290", vmaxU: "km/h",
        moteur: "2.5 TFSI", boite: "S tronic 7",
        transmission: "quattro", places: "5", carburant: "Essence", conso: "8.9 L"
      },
      featured: ["5 cylindres en ligne", "Mode RS Torque Rear", "Sièges baquets RS", "Échappement sport"]
    },
    {
      id: "golf-8r",
      brand: "Volkswagen",
      name: "Golf 8R",
      full: "Volkswagen Golf 8R",
      year: 2025,
      type: "Sport",
      sport: true,
      flagship: false,
      hero: "assets/golfr-track.jpg",
      gallery: ["assets/golfr-track.jpg"],
      tagline: "Le R, majuscule.",
      short: "320 chevaux et la transmission intégrale 4MOTION. La sportive du quotidien : explosive sur route, civilisée en ville.",
      colorName: "Bleu Lapiz",
      prices: { day: 219, weekend: 399, week: 1290 },
      specs: {
        puissance: "320", puissanceU: "ch",
        zero: "4.7", zeroU: "s 0–100",
        vmax: "270", vmaxU: "km/h",
        moteur: "2.0 TSI", boite: "DSG 7",
        transmission: "4MOTION", places: "5", carburant: "Essence", conso: "8.5 L"
      },
      featured: ["Transmission 4MOTION", "Mode Drift & Nürburgring", "Freins R performance", "Akrapovič en option"]
    },
    {
      id: "golf-8",
      brand: "Volkswagen",
      name: "Golf 8",
      full: "Volkswagen Golf 8",
      year: 2025,
      type: "Polyvalente",
      sport: false,
      flagship: false,
      hero: "assets/golf8-black.png",
      gallery: ["assets/golf8-black.png"],
      tagline: "L'élégance, sans le moindre compromis.",
      short: "La référence de la catégorie. Sobre, confortable, parfaitement équipée — la compagne idéale d'un long week-end à deux.",
      colorName: "Noir Intense",
      prices: { day: 119, weekend: 219, week: 720 },
      specs: {
        puissance: "150", puissanceU: "ch",
        zero: "8.5", zeroU: "s 0–100",
        vmax: "224", vmaxU: "km/h",
        moteur: "1.5 eTSI", boite: "DSG 7",
        transmission: "Traction", places: "5", carburant: "Hybride léger", conso: "5.4 L"
      },
      featured: ["Hybridation légère 48V", "Cockpit numérique", "Travel Assist", "Coffre 380 L"]
    },
    {
      id: "clio-6-alpine",
      brand: "Renault",
      name: "Clio 6 Alpine",
      full: "Renault Clio 6 Alpine",
      year: 2026,
      type: "Sport",
      sport: true,
      flagship: false,
      isNew: true,
      hero: "assets/clio6-red.jpg",
      gallery: ["assets/clio6-red.jpg", "assets/clio-grey.png"],
      tagline: "La nouveauté qui rebat les cartes.",
      short: "Tout dernier modèle de notre flotte. Signature Alpine, hybridation E-Tech et un châssis affûté pour le plaisir compact.",
      colorName: "Rouge Flamme",
      prices: { day: 129, weekend: 239, week: 790 },
      specs: {
        puissance: "160", puissanceU: "ch",
        zero: "8.2", zeroU: "s 0–100",
        vmax: "200", vmaxU: "km/h",
        moteur: "E-Tech 160", boite: "Multimode auto",
        transmission: "Traction", places: "5", carburant: "Hybride", conso: "4.1 L"
      },
      featured: ["Signature Alpine", "Hybride full E-Tech", "Freinage régénératif", "OpenR Link"]
    },
    {
      id: "clio-5",
      brand: "Renault",
      name: "Clio 5",
      full: "Renault Clio 5",
      year: 2025,
      type: "Citadine",
      sport: false,
      flagship: false,
      hero: "assets/clio5-blue.jpg",
      gallery: ["assets/clio5-blue.jpg", "assets/clio-grey.png"],
      tagline: "Le premier essai, parfait.",
      short: "L'entrée dans l'univers BeLoc. Agile, économe et raffinée — la manière la plus simple de goûter à l'expérience premium.",
      colorName: "Bleu Iron",
      prices: { day: 89, weekend: 159, week: 540 },
      specs: {
        puissance: "100", puissanceU: "ch",
        zero: "11.8", zeroU: "s 0–100",
        vmax: "187", vmaxU: "km/h",
        moteur: "TCe 100", boite: "Manuelle 6",
        transmission: "Traction", places: "5", carburant: "Essence", conso: "5.2 L"
      },
      featured: ["Compacte & agile", "Faible consommation", "EASY LINK 7\"", "Idéale premier essai"]
    }
  ]
};

window.BELOC.byId = function (id) {
  return window.BELOC.vehicles.find(function (v) { return v.id === id; });
};

/* Resolve asset paths to bundler-provided blob URLs when running standalone.
   Falls back to the original path in the normal (multi-file) version. */
(function () {
  var map = {
    "assets/rs3-action.avif": "rs3Action",
    "assets/rs3-studio.jpg": "rs3Studio",
    "assets/golfr-track.jpg": "golfrTrack",
    "assets/golf8-black.png": "golf8Black",
    "assets/clio6-red.jpg": "clio6Red",
    "assets/clio5-blue.jpg": "clio5Blue",
    "assets/clio-grey.png": "clioGrey"
  };
  function res(p) {
    var id = map[p];
    return (window.__resources && id && window.__resources[id]) ? window.__resources[id] : p;
  }
  window.BELOC.vehicles.forEach(function (v) {
    v.hero = res(v.hero);
    v.gallery = v.gallery.map(res);
  });
})();
