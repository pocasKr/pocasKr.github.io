(function () {
  const html = document.documentElement;
  const themeBtn = document.getElementById("themeBtn");
  const themeLabel = document.getElementById("themeLabel");
  const pdfBtn = document.getElementById("pdfBtn");
  const year = document.getElementById("y");

  if (year) year.textContent = String(new Date().getFullYear());

  const THEMES = ["auto", "dark", "light"];

  function setTheme(next) {
    html.setAttribute("data-theme", next);
    localStorage.setItem("cv_theme", next);
    if (themeLabel) themeLabel.textContent = next[0].toUpperCase() + next.slice(1);
  }

  function getTheme() {
    const saved = localStorage.getItem("cv_theme");
    if (saved && THEMES.includes(saved)) return saved;
    return "auto";
  }

  function cycleTheme() {
    const current = getTheme();
    const idx = THEMES.indexOf(current);
    const next = THEMES[(idx + 1) % THEMES.length];
    setTheme(next);
  }


  setTheme(getTheme());

  if (themeBtn) themeBtn.addEventListener("click", cycleTheme);

  if (pdfBtn) {
    pdfBtn.addEventListener("click", () => {
      document.title = document.title || "CV";
      window.print();
    });
  }
})();
