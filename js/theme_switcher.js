// Theme dropdown: Classic (original), Dark, Pink, Neon.
// The chosen theme is saved in the browser so it is still there after a refresh.
(function () {
  var THEMES = ["classic", "dark", "pink", "neon"];
  var root = document.documentElement;
  var select = document.getElementById("theme-select");

  function applyTheme(name) {
    if (THEMES.indexOf(name) === -1) name = "classic";

    if (name === "classic") {
      root.removeAttribute("data-theme"); // no attribute = the original look
    } else {
      root.setAttribute("data-theme", name);
    }

    try { localStorage.setItem("theme", name); } catch (e) {}

    if (select) select.value = name; // keep the dropdown in sync
  }

  if (select) {
    select.addEventListener("change", function () {
      applyTheme(select.value);
    });
  }

  var saved = "classic";
  try { saved = localStorage.getItem("theme") || "classic"; } catch (e) {}
  applyTheme(saved);
})();
