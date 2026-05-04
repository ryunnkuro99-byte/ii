/* =========================================================
   LUKE BYPASS — App List
   --------------------------------------------------------
   Edit anything here:
   - name  : label shown under icon
   - icon  : path to image inside /icons/  (e.g. "icons/settings.png")
   - link  : intent:// URL, market://, https:// or any deep-link
   ========================================================= */
const SECTIONS = [
  {
    title: "Core Settings",
    apps: [
      { name: "Settings App",         icon: "icons/settings.png",      link: "intent:#Intent;action=android.settings.SETTINGS;end" },
      { name: "Accessibility",        icon: "icons/accessibility.png", link: "intent:#Intent;action=android.settings.ACCESSIBILITY_SETTINGS;end" },
      { name: "Set Screen Lock",      icon: "icons/screenlock.png",    link: "intent:#Intent;action=android.app.action.SET_NEW_PASSWORD;end" },
      { name: "Android Hidden Settings", icon: "icons/hidden.png",     link: "intent:#Intent;action=android.settings.SETTINGS;component=com.android.settings/.Settings;end" },
      { name: "*#0*#",                icon: "icons/dialcode.png",      link: "tel:*%230*%23" },
      { name: "Login Google Account", icon: "icons/google-account.png",link: "intent:#Intent;action=android.settings.ADD_ACCOUNT_SETTINGS;end" },
      { name: "Home Launcher",        icon: "icons/home.png",          link: "intent:#Intent;action=android.settings.HOME_SETTINGS;end" },
    ],
  },
  {
    title: "Google Apps",
    apps: [
      { name: "Google Quick Search Box", icon: "icons/google.png",     link: "intent:#Intent;package=com.google.android.googlequicksearchbox;end" },
      { name: "Google Assistant",     icon: "icons/assistant.png",     link: "intent:#Intent;package=com.google.android.apps.googleassistant;end" },
      { name: "Gmail",                icon: "icons/gmail.png",         link: "intent:#Intent;package=com.google.android.gm;end" },
      { name: "Chrome Browser",       icon: "icons/chrome.png",        link: "intent:#Intent;package=com.android.chrome;end" },
      { name: "YouTube App",          icon: "icons/youtube.png",       link: "intent:#Intent;package=com.google.android.youtube;end" },
      { name: "Google Maps",          icon: "icons/maps.png",          link: "intent:#Intent;package=com.google.android.apps.maps;end" },
      { name: "Calculator",           icon: "icons/calculator.png",    link: "intent:#Intent;package=com.google.android.calculator;end" },
    ],
  },
  {
    title: "Samsung",
    apps: [
      { name: "Galaxy Store",         icon: "icons/galaxy-store.png",  link: "samsungapps://MainPage/" },
      { name: "Samsung My Files",     icon: "icons/myfiles.png",       link: "intent:#Intent;package=com.sec.android.app.myfiles;end" },
      { name: "Samsung Internet Browser", icon: "icons/samsung-internet.png", link: "intent:#Intent;package=com.sec.android.app.sbrowser;end" },
      { name: "Samsung Touch ID",     icon: "icons/touchid.png",       link: "intent:#Intent;action=android.settings.FINGERPRINT_ENROLL;end" },
      { name: "Samsung Secure Folder",icon: "icons/secure-folder.png", link: "intent:#Intent;package=com.samsung.knox.securefolder;end" },
      { name: "Samsung Smart Switch", icon: "icons/smart-switch.png",  link: "intent:#Intent;package=com.sec.android.easyMover;end" },
      { name: "Samsung Dialer Call",  icon: "icons/dialer.png",        link: "intent:#Intent;package=com.samsung.android.dialer;end" },
      { name: "Samsung S9 Launcher",  icon: "icons/s9-launcher.png",   link: "intent:#Intent;package=com.sec.android.app.launcher;end" },
    ],
  },
  {
    title: "Other Brands",
    apps: [
      { name: "Mi File Manager",      icon: "icons/mi-files.png",      link: "intent:#Intent;package=com.mi.android.globalFileexplorer;end" },
      { name: "Xiaomi ShareMe",       icon: "icons/shareme.png",       link: "intent:#Intent;package=com.xiaomi.midrop;end" },
      { name: "Motorola Launcher",    icon: "icons/moto-launcher.png", link: "intent:#Intent;package=com.motorola.launcher3;end" },
      { name: "Moto Hello You",       icon: "icons/moto-hello.png",    link: "intent:#Intent;package=com.motorola.helloyou;end" },
      { name: "Motorola Moto",        icon: "icons/moto.png",          link: "intent:#Intent;package=com.motorola.motodisplay;end" },
      { name: "Moto Secure",          icon: "icons/moto-secure.png",   link: "intent:#Intent;package=com.motorola.motosecure;end" },
      { name: "OPPO Clone Phone",     icon: "icons/oppo-clone.png",    link: "intent:#Intent;package=com.coloros.backuprestore;end" },
      { name: "Clone Phone OnePlus",  icon: "icons/oneplus-clone.png", link: "intent:#Intent;package=com.oneplus.backuprestore;end" },
      { name: "EasyShare App",        icon: "icons/easyshare.png",     link: "intent:#Intent;package=com.vivo.easyshare;end" },
      { name: "Palm Store",           icon: "icons/palm-store.png",    link: "intent:#Intent;package=com.transsnet.store;end" },
      { name: "ASUS Phone",           icon: "icons/asus.png",          link: "intent:#Intent;package=com.asus.userguide;end" },
    ],
  },
  {
    title: "Advanced Tools",
    apps: [
      { name: "Alliance Shield",      icon: "icons/alliance.png",      link: "intent:#Intent;package=com.AllianceShield.App;end" },
      { name: "Activity Launcher",    icon: "icons/activity.png",      link: "intent:#Intent;package=de.szalkowski.activitylauncher;end" },
    ],
  },
  {
    title: "Downloads (APK / Store)",
    apps: [
      { name: "Alliance Shield (Galaxy Store)", icon: "icons/alliance.png",     link: "samsungapps://ProductDetail/com.AllianceShield.App" },
      { name: "Files Shortcut (Galaxy Store)",  icon: "icons/files-shortcut.png", link: "samsungapps://ProductDetail/com.applisto.appcloner.filesshortcut" },
      { name: "EasyShare (Old APK)",  icon: "icons/easyshare.png",     link: "https://www.apkmirror.com/apk/vivo-mobile-communication-co-ltd/easyshare/" },
      { name: "Activity Launcher APK",icon: "icons/activity.png",      link: "https://www.apkmirror.com/apk/adam-szalkowski/activity-launcher/" },
      { name: "Asus Phone Clone",     icon: "icons/asus-clone.png",    link: "https://play.google.com/store/apps/details?id=com.asus.datatransfer" },
    ],
  },
];

function openApp(link) {
  try { window.location.href = link; }
  catch (e) { alert("App not available"); }
}

function renderSections() {
  const root = document.getElementById("app-container");
  const html = SECTIONS.map((section) => {
    const tiles = section.apps.map((app) => {
      const safeLink = app.link.replace(/'/g, "\\'").replace(/"/g, "&quot;");
      const fallbackLetter = app.name.trim().charAt(0).toUpperCase();
      return `
        <div class="app" data-name="${app.name.toLowerCase()}" onclick="openApp('${safeLink}')">
          <div class="app-icon">
            <img src="${app.icon}" alt="${app.name}" loading="lazy"
                 onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'fallback',textContent:'${fallbackLetter}'}))" />
          </div>
          <span class="label">${app.name}</span>
        </div>`;
    }).join("");
    return `
      <section class="section" data-section="${section.title.toLowerCase()}">
        <h2 class="section-title">${section.title}</h2>
        <div class="grid">${tiles}</div>
      </section>`;
  }).join("");
  root.innerHTML = html;
}

function setupSearch() {
  const input = document.getElementById("search");
  const empty = document.getElementById("empty-state");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    let totalVisible = 0;
    document.querySelectorAll(".section").forEach((section) => {
      let visibleInSection = 0;
      section.querySelectorAll(".app").forEach((tile) => {
        const match = tile.dataset.name.includes(q);
        tile.style.display = match ? "" : "none";
        if (match) visibleInSection++;
      });
      section.classList.toggle("hidden", visibleInSection === 0);
      totalVisible += visibleInSection;
    });
    empty.hidden = totalVisible !== 0;
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
  renderSections();
  setupSearch();
  setupTheme();
});
