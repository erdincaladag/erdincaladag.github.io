/* Site behaviour: dark-mode toggle, mobile menu, publication filter. */
(function () {
  var root = document.documentElement;

  // ----- Dark mode -----
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
  // Follow the OS setting live, unless the visitor picked a theme themselves
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var onChange = function (e) {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (err) {}
    if (!saved) root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  };
  if (mq.addEventListener) mq.addEventListener('change', onChange);

  // ----- Mobile menu -----
  var navBtn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      navBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  // ----- Publication search / year filter -----
  var search = document.getElementById('pub-search');
  var yearSel = document.getElementById('pub-year');
  if (search && yearSel) {
    var items = Array.prototype.slice.call(document.querySelectorAll('.pub'));
    var years = {};
    items.forEach(function (li) { if (li.dataset.year) years[li.dataset.year] = 1; });
    Object.keys(years).sort().reverse().forEach(function (y) {
      var o = document.createElement('option'); o.value = y; o.textContent = y; yearSel.appendChild(o);
    });
    var count = document.getElementById('pub-count');
    var norm = function (s) {
      return s.toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i');
    };
    items.forEach(function (li) {
      var t = li.querySelector('.pub-title'), c = li.querySelector('.pub-cite');
      li._text = norm((t ? t.textContent : '') + ' ' + (c ? c.textContent : ''));
    });
    var apply = function () {
      var q = norm(search.value.trim()), y = yearSel.value, shown = 0;
      items.forEach(function (li) {
        var ok = (!q || li._text.indexOf(q) !== -1) && (!y || li.dataset.year === y);
        li.hidden = !ok; if (ok) shown++;
      });
      document.querySelectorAll('.pub-group').forEach(function (g) {
        g.hidden = !g.querySelector('.pub:not([hidden])');
      });
      count.textContent = (q || y) ? shown + ' of ' + items.length + ' publications' : '';
    };
    search.addEventListener('input', apply);
    yearSel.addEventListener('change', apply);
  }
})();
