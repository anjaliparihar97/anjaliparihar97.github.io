(function () {
  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Footer year
  document.querySelectorAll(".year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Blog post lists (from posts.js)
  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  document.querySelectorAll("[data-posts]").forEach(function (list) {
    var posts = (window.POSTS || []).slice().sort(function (a, b) {
      return a.date < b.date ? 1 : -1;
    });
    var limit = parseInt(list.getAttribute("data-limit"), 10);
    if (limit) posts = posts.slice(0, limit);
    var base = list.getAttribute("data-base") || "";

    if (!posts.length) {
      list.innerHTML = "<li><p>No posts yet. The first one is on its way.</p></li>";
      return;
    }

    list.innerHTML = posts.map(function (p) {
      return (
        "<li>" +
        '<time datetime="' + escapeHtml(p.date) + '">' + formatDate(p.date) + "</time>" +
        '<a class="post-title" href="' + base + escapeHtml(p.file) + '">' + escapeHtml(p.title) + "</a>" +
        "<p>" + escapeHtml(p.summary) + "</p>" +
        "</li>"
      );
    }).join("");
  });
})();
