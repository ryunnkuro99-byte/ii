/* =========================================================
   LUKE BYPASS — App List (single flat list, ordered)
   Edit:
   - name : label under icon
   - icon : path inside /icons/   (use transparent PNG)
   - link : intent://, samsungapps://, https://, tel:, etc.
   ========================================================= */
const APPS = [
  { name: "Samsung Galaxy Store",       icon: "icons/galaxy-store.png",      link: "intent://com.sec.android.app.samsungapps/#Intent;scheme=android-app;end" },
  { name: "Google Quick Search Box",    icon: "icons/google.png",            link: "intent://com.google.android.googlequicksearchbox/#Intent;scheme=android-app;end" },
  { name: "Settings App",               icon: "icons/settings.png",          link: "intent://com.android.settings/#Intent;scheme=android-app;end" },
  { name: "Set Screen Lock",            icon: "icons/screen-lock.png",        link: "intent://com.google.android.gms/#Intent;scheme=promote_smartlock_scheme;end" },
  { name: "YouTube App",                icon: "icons/youtube.png",           link: "intent://com.google.android.youtube/#Intent;scheme=android-app;end" },
  { name: "Samsung My Files",           icon: "icons/myfiles.png",           link: "intent://com.sec.android.app.myfiles/#Intent;scheme=android-app;end" },
  { name: "Chrome Browser",             icon: "icons/chrome.png",            link: "intent://com.android.chrome/#Intent;scheme=android-app;end" },
  { name: "Samsung Internet Browser",   icon: "icons/samsung-internet.png",  link: "https://apps.samsung.com/appquery/appDetail.as?appId=com.sec.android.app.sbrowser&cld-000005006635" },
  { name: "Samsung Calculator",         icon: "icons/calculator.png",        link: "intent://com.sec.android.app.popupcalculator/#Intent;scheme=android-app;end" },
  { name: "Alliance Shield",            icon: "icons/alliance.png",          link: "intent://com.rrivenllc.shieldx/#Intent;scheme=android-app;end" },
  { name: "Android Hidden Settings",    icon: "icons/hidden.png",            link: "intent:#Intent;action=android.settings.SETTINGS;component=com.android.settings/.Settings;end" },
  { name: "Login Google Account",       icon: "icons/google-account.png",    link: "intent://com.google.android.gsf.login.LoginActivity/#Intent;scheme=android-app;end" },
  { name: "Home Launcher",              icon: "icons/home.png",              link: "intent://com.sec.android.app.launcher/#Intent;scheme=android-app;end" },
  { name: "Google Maps",                icon: "icons/maps.png",              link: "intent://com.google.android.apps.maps/#Intent;scheme=android-app;end" },
  { name: "*#0*#",                      icon: "icons/dialer.png",            link: "tel:*#0*#/#Intent;scheme=android-app;end" },
  { name: "Google Assistant",           icon: "icons/assistant.png",         link: "intent://com.google.android.apps.googleassistant/#Intent;scheme=android-app;end" },
  { name: "Gmail",                      icon: "icons/gmail.png",             link: "intent://com.google.android.gm/#Intent;scheme=android-app;end" },
  { name: "Samsung S9 Launcher",        icon: "icons/s9-launcher.png",       link: "https://galaxystore.samsung.com/detail/com.s9launcher.dir.launcher" },
  { name: "Samsung Touch ID",           icon: "icons/touchid.png",           link: "intent://com.android.settings/com.samsung.android.settings.biometrics.fingerprint.FingerprintEntry/#Intent;scheme=android-app;end" },
  { name: "Samsung Secure Folder",      icon: "icons/secure-folder.png",     link: "intent://com.samsung.knox.securefolder/#Intent;scheme=android-app;end" },
  { name: "Samsung Smart Switch App",   icon: "icons/smart-switch.png",      link: "intent://com.sec.android.easyMover/#Intent;scheme=android-app;end" },
  { name: "Samsung Dialer Call",        icon: "icons/dialer.png",            link: "intent://com.samsung.android.dialer/#Intent;scheme=android-app;end" },
  { name: "Mi File Manager",            icon: "icons/mi-files.png",          link: "intent://com.mi.android.globalFileexplorer/#Intent;scheme=android-app;end" },
  { name: "Palm Store",                 icon: "icons/palm-store.png",        link: "https://m.palmplaystore.com/#category=HOME#subCategory=" },
  { name: "OPPO Clone Phone",           icon: "icons/oppo-clone.png",        link: "intent://com.coloros.backuprestore/#Intent;scheme=android-app;end" },
  { name: "Clone Phone OnePlus",        icon: "icons/oneplus-clone.png",     link: "intent://com.oneplus.backuprestore/#Intent;scheme=android-app;end" },
  { name: "EasyShare App",              icon: "icons/easyshare.png",         link: "intent://com.vivo.easyshare/#Intent;scheme=android-app;end%22" },
  { name: "Activity Launcher",          icon: "icons/activity.png",          link: "intent://de.szalkowski.activitylauncher/#Intent;scheme=android-app;end" },
  { name: "Xiaomi ShareMe",             icon: "icons/shareme.png",           link: "intent://com.xiaomi.midrop/#Intent;scheme=android-app;end" },
  { name: "Accessibility",              icon: "icons/accessibility.png",     link: "intent://com.google.android.accessibility.switchaccess/#Intent;scheme=android-app;end" },
  { name: "ASUS Phone Clone",           icon: "icons/asus.png",              link: "intent://com.futuredial.asusdatatransfer/#Intent;scheme=android-app;end" },
];

function openApp(link) {
  try { window.location.href = link; }
  catch (e) { alert("App not available"); }
}

function renderApps() {
  const root = document.getElementById("app-container");
  root.innerHTML = `<div class="grid">` + APPS.map((app) => {
    const safeLink = app.link.replace(/'/g, "\\'");
    const fallbackLetter = app.name.trim().charAt(0).toUpperCase();
    return `
      <div class="app" data-name="${app.name.toLowerCase()}" onclick="openApp('${safeLink}')">
        <div class="app-icon">
          <img src="${app.icon}" alt="${app.name}" loading="lazy"
               onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'fallback',textContent:'${fallbackLetter}'}))" />
        </div>
        <span class="label">${app.name}</span>
      </div>`;
  }).join("") + `</div>`;
}

function setupSearch() {
  const input = document.getElementById("search");
  const empty = document.getElementById("empty-state");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    let visible = 0;
    document.querySelectorAll(".app").forEach((tile) => {
      const match = tile.dataset.name.includes(q);
      tile.style.display = match ? "" : "none";
      if (match) visible++;
    });
    empty.hidden = visible !== 0;
  });
}

function setupTheme() {
  const btn = document.getElementById("theme-toggle");
  const meta = document.getElementById("theme-color-meta");
  const saved = localStorage.getItem("lb-theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  if (meta) meta.setAttribute("content", saved === "light" ? "#f7f8fa" : "#0a0a0c");
  btn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = cur === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("lb-theme", next);
    if (meta) meta.setAttribute("content", next === "light" ? "#f7f8fa" : "#0a0a0c");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderApps();
  setupSearch();
  setupTheme();
});
