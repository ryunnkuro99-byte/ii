/* =========================================================
   LUKE BYPASS — App List (single flat list, ordered)
   Edit:
   - name : label under icon
   - icon : path inside /icons/   (use transparent PNG)
   - link : intent://, samsungapps://, https://, tel:, etc.
   ========================================================= */
const APPS = [
  { name: "Samsung Galaxy Store",       icon: "icons/galaxy-store.png",      link: "samsungapps://MainPage/" },
  { name: "Google Quick Search Box",    icon: "icons/google.png",            link: "intent:#Intent;package=com.google.android.googlequicksearchbox;end" },
  { name: "Settings App",               icon: "icons/settings.png",          link: "intent:#Intent;action=android.settings.SETTINGS;end" },
  { name: "Set Screen Lock",            icon: "icons/screenlock.png",        link: "intent:#Intent;action=android.app.action.SET_NEW_PASSWORD;end" },
  { name: "YouTube App",                icon: "icons/youtube.png",           link: "intent:#Intent;package=com.google.android.youtube;end" },
  { name: "Samsung My Files",           icon: "icons/myfiles.png",           link: "intent:#Intent;package=com.sec.android.app.myfiles;end" },
  { name: "Chrome Browser",             icon: "icons/chrome.png",            link: "intent:#Intent;package=com.android.chrome;end" },
  { name: "Samsung Internet Browser",   icon: "icons/samsung-internet.png",  link: "intent:#Intent;package=com.sec.android.app.sbrowser;end" },
  { name: "Calculator",                 icon: "icons/calculator.png",        link: "intent:#Intent;package=com.google.android.calculator;end" },
  { name: "Alliance Shield",            icon: "icons/alliance.png",          link: "intent:#Intent;package=com.AllianceShield.App;end" },
  { name: "Android Hidden Settings",    icon: "icons/hidden.png",            link: "intent:#Intent;action=android.settings.SETTINGS;component=com.android.settings/.Settings;end" },
  { name: "Login Google Account",       icon: "icons/google-account.png",    link: "intent:#Intent;action=android.settings.ADD_ACCOUNT_SETTINGS;end" },
  { name: "Home Launcher",              icon: "icons/home.png",              link: "intent:#Intent;action=android.settings.HOME_SETTINGS;end" },
  { name: "Google Maps",                icon: "icons/maps.png",              link: "intent:#Intent;package=com.google.android.apps.maps;end" },
  { name: "*#0*#",                      icon: "icons/dialcode.png",          link: "tel:*%230*%23" },
  { name: "Google Assistant",           icon: "icons/assistant.png",         link: "intent:#Intent;package=com.google.android.apps.googleassistant;end" },
  { name: "Gmail",                      icon: "icons/gmail.png",             link: "intent:#Intent;package=com.google.android.gm;end" },
  { name: "Samsung S9 Launcher",        icon: "icons/s9-launcher.png",       link: "intent:#Intent;package=com.sec.android.app.launcher;end" },
  { name: "Samsung Touch ID",           icon: "icons/touchid.png",           link: "intent:#Intent;action=android.settings.FINGERPRINT_ENROLL;end" },
  { name: "Samsung Secure Folder",      icon: "icons/secure-folder.png",     link: "intent:#Intent;package=com.samsung.knox.securefolder;end" },
  { name: "Samsung Smart Switch App",   icon: "icons/smart-switch.png",      link: "intent:#Intent;package=com.sec.android.easyMover;end" },
  { name: "Samsung Dialer Call",        icon: "icons/dialer.png",            link: "intent:#Intent;package=com.samsung.android.dialer;end" },
  { name: "Mi File Manager",            icon: "icons/mi-files.png",          link: "intent:#Intent;package=com.mi.android.globalFileexplorer;end" },
  { name: "Alliance Shield (Galaxy Store)", icon: "icons/alliance.png",      link: "samsungapps://ProductDetail/com.AllianceShield.App" },
  { name: "Files Shortcut (Galaxy Store)",  icon: "icons/files-shortcut.png", link: "samsungapps://ProductDetail/com.applisto.appcloner.filesshortcut" },
  { name: "Palm Store",                 icon: "icons/palm-store.png",        link: "intent:#Intent;package=com.transsnet.store;end" },
  { name: "OPPO Clone Phone",           icon: "icons/oppo-clone.png",        link: "intent:#Intent;package=com.coloros.backuprestore;end" },
  { name: "Clone Phone OnePlus",        icon: "icons/oneplus-clone.png",     link: "intent:#Intent;package=com.oneplus.backuprestore;end" },
  { name: "EasyShare App",              icon: "icons/easyshare.png",         link: "intent:#Intent;package=com.vivo.easyshare;end" },
  { name: "EasyShare APK (Old Version)",icon: "icons/easyshare.png",         link: "https://www.apkmirror.com/apk/vivo-mobile-communication-co-ltd/easyshare/" },
  { name: "Activity Launcher",          icon: "icons/activity.png",          link: "intent:#Intent;package=de.szalkowski.activitylauncher;end" },
  { name: "Activity Launcher APK (Old)",icon: "icons/activity.png",          link: "https://www.apkmirror.com/apk/adam-szalkowski/activity-launcher/" },
  { name: "Xiaomi ShareMe",             icon: "icons/shareme.png",           link: "intent:#Intent;package=com.xiaomi.midrop;end" },
  { name: "Motorola Launcher",          icon: "icons/moto-launcher.png",     link: "intent:#Intent;package=com.motorola.launcher3;end" },
  { name: "Moto Hello You",             icon: "icons/moto-hello.png",        link: "intent:#Intent;package=com.motorola.helloyou;end" },
  { name: "Motorola Moto",              icon: "icons/moto.png",              link: "intent:#Intent;package=com.motorola.motodisplay;end" },
  { name: "Moto Secure",                icon: "icons/moto-secure.png",       link: "intent:#Intent;package=com.motorola.motosecure;end" },
  { name: "Accessibility",              icon: "icons/accessibility.png",     link: "intent:#Intent;action=android.settings.ACCESSIBILITY_SETTINGS;end" },
  { name: "ASUS Phone Clone",           icon: "icons/asus.png",              link: "intent:#Intent;package=com.asus.userguide;end" },
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
