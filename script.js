/* =========================================================
   LUKE BYPASS — App List
   --------------------------------------------------------
   Edit anything here:
   - name  : label shown under icon
   - icon  : path to image inside /icons/  (e.g. "icons/settings.png")
   - link  : intent:// URL or any deep-link to open
   ========================================================= */
const SECTIONS = [
  {
    title: "Core Settings",
    apps: [
      { name: "Settings",          icon: "icons/settings.png",       link: "intent://settings#Intent;scheme=android-app;end" },
      { name: "Wi-Fi Settings",    icon: "icons/wifi.png",           link: "intent:#Intent;action=android.settings.WIFI_SETTINGS;end" },
      { name: "Bluetooth",         icon: "icons/bluetooth.png",      link: "intent:#Intent;action=android.settings.BLUETOOTH_SETTINGS;end" },
      { name: "Accessibility",     icon: "icons/accessibility.png",  link: "intent:#Intent;action=android.settings.ACCESSIBILITY_SETTINGS;end" },
      { name: "Security & Privacy",icon: "icons/security.png",       link: "intent:#Intent;action=android.settings.SECURITY_SETTINGS;end" },
      { name: "App Info",          icon: "icons/appinfo.png",        link: "intent:#Intent;action=android.settings.APPLICATION_SETTINGS;end" },
      { name: "Date & Time",       icon: "icons/datetime.png",       link: "intent:#Intent;action=android.settings.DATE_SETTINGS;end" },
      { name: "Language & Input",  icon: "icons/language.png",       link: "intent:#Intent;action=android.settings.LOCALE_SETTINGS;end" },
    ],
  },
  {
    title: "Google Apps",
    apps: [
      { name: "Gmail",      icon: "icons/gmail.png",      link: "intent:#Intent;package=com.google.android.gm;end" },
      { name: "Google",     icon: "icons/google.png",     link: "intent:#Intent;package=com.google.android.googlequicksearchbox;end" },
      { name: "Chrome",     icon: "icons/chrome.png",     link: "intent:#Intent;package=com.android.chrome;end" },
      { name: "YouTube",    icon: "icons/youtube.png",    link: "intent:#Intent;package=com.google.android.youtube;end" },
      { name: "Maps",       icon: "icons/maps.png",       link: "intent:#Intent;package=com.google.android.apps.maps;end" },
      { name: "Drive",      icon: "icons/drive.png",      link: "intent:#Intent;package=com.google.android.apps.docs;end" },
      { name: "Photos",     icon: "icons/photos.png",     link: "intent:#Intent;package=com.google.android.apps.photos;end" },
      { name: "Play Store", icon: "icons/playstore.png",  link: "intent:#Intent;package=com.android.vending;end" },
    ],
  },
  {
    title: "Tools",
    apps: [
      { name: "File Manager",    icon: "icons/filemanager.png", link: "intent:#Intent;action=android.intent.action.GET_CONTENT;type=*/*;end" },
      { name: "Files by Google", icon: "icons/files.png",       link: "intent:#Intent;package=com.google.android.apps.nbu.files;end" },
      { name: "Downloads",       icon: "icons/downloads.png",   link: "intent:#Intent;action=android.intent.action.VIEW_DOWNLOADS;end" },
      { name: "Calculator",      icon: "icons/calculator.png",  link: "intent:#Intent;package=com.google.android.calculator;end" },
      { name: "Clock",           icon: "icons/clock.png",       link: "intent:#Intent;package=com.google.android.deskclock;end" },
      { name: "Contacts",        icon: "icons/contacts.png",    link: "intent:#Intent;package=com.google.android.contacts;end" },
      { name: "Gallery",         icon: "icons/gallery.png",     link: "intent:#Intent;package=com.google.android.apps.photos;end" },
      { name: "Camera",          icon: "icons/camera.png",      link: "intent:#Intent;action=android.media.action.IMAGE_CAPTURE;end" },
    ],
  },
  {
    title: "Connectivity",
    apps: [
      { name: "Mobile Network",      icon: "icons/mobile.png",     link: "intent:#Intent;action=android.settings.DATA_ROAMING_SETTINGS;end" },
      { name: "Hotspot & Tethering", icon: "icons/hotspot.png",    link: "intent:#Intent;action=android.settings.TETHER_SETTINGS;end" },
      { name: "VPN",                 icon: "icons/vpn.png",        link: "intent:#Intent;action=android.settings.VPN_SETTINGS;end" },
      { name: "Airplane Mode",       icon: "icons/airplane.png",   link: "intent:#Intent;action=android.settings.AIRPLANE_MODE_SETTINGS;end" },
    ],
  },
  {
    title: "Advanced",
    apps: [
      { name: "Activity Launcher",   icon: "icons/activity.png",   link: "intent:#Intent;package=de.szalkowski.activitylauncher;end" },
      { name: "QuickShortcutMaker",  icon: "icons/shortcut.png",   link: "intent:#Intent;package=com.sika524.android.quickshortcut;end" },
      { name: "Developer Options",   icon: "icons/developer.png",  link: "intent:#Intent;action=android.settings.APPLICATION_DEVELOPMENT_SETTINGS;end" },
      { name: "System UI Demo",      icon: "icons/sysui.png",      link: "intent:#Intent;action=com.android.systemui.DEMO;end" },
      { name: "Hidden Settings",     icon: "icons/hidden.png",     link: "intent:#Intent;package=com.android.settings;component=com.android.settings/.Settings;end" },
    ],
  },
];

/* =========================================================
   Open app handler — used by every tile
   ========================================================= */
function openApp(link) {
  try {
    window.location.href = link;
  } catch (e) {
    alert("App not available");
  }
}

/* =========================================================
   Render
   ========================================================= */
function renderSections() {
  const root = document.getElementById("app-container");
  const html = SECTIONS.map((section) => {
    const tiles = section.apps.map((app) => {
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
    }).join("");

    return `
      <section class="section" data-section="${section.title.toLowerCase()}">
        <h2 class="section-title">${section.title}</h2>
        <div class="grid">${tiles}</div>
      </section>`;
  }).join("");

  root.innerHTML = html;
}

/* =========================================================
   Search filter (real-time)
   ========================================================= */
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

/* =========================================================
   Init
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderSections();
  setupSearch();
});