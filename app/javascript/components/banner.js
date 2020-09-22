import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  if (document.getElementById("banner-typed-text")) {
    new Typed('#banner-typed-text', {
      strings: ["moniteur", "eleve", "parent d'eleve"],
      typeSpeed: 60,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
