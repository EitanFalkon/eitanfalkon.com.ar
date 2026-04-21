// Email obfuscation
(function () {
  const u = 'falkoneitan';
  const d = 'gmail.com';
  const href = 'mailto:' + u + '@' + d;
  ['email-btn', 'email-btn-2'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.href = href;
  });
})();
