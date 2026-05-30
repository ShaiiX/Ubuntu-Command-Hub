// app object manages language, category filtering, search, and ui rendering
const App = {
  lang: "es",
  theme: localStorage.getItem("theme") || "dark",
  activeCategory: null,
  searchQuery: "",
  sidebarOpen: false,

  // initialize the application and render the initial view
  async init() {
    document.documentElement.setAttribute("data-theme", this.theme);
    this.render();
    this.bindEvents();
  },

  // translate a nested key using the current language data
  t(key) {
    const keys = key.split(".");
    let value = TRANSLATIONS[this.lang];
    for (const k of keys) {
      if (!value || !value[k]) return key;
      value = value[k];
    }
    return value;
  },

  // get a localized category label by its identifier
  getCategoryName(catId) {
    return this.t("categories." + catId);
  },

  // get command translation data or fallback to the command id
  getCommandData(cmdId) {
    const trans = TRANSLATIONS[this.lang].commands[cmdId];
    if (!trans) return { description: cmdId, example: "", display: cmdId };
    return trans;
  },

  // render the full ui state including sidebar, content, and search ui
  render() {
    this.renderSidebar();
    this.renderContent();
    this.renderSearch();
    this.renderLangToggle();
    this.renderThemeToggle();
    document.title = this.t("ui.title") + " — ubuntu linux";
  },

  // build the sidebar navigation buttons for each category
  renderSidebar() {
    const sidebar = document.getElementById("sidebar");
    // start the sidebar nav markup with accessible labels
    let html = '<nav class="sidebar-nav" role="navigation" aria-label="categories">';

    html += `
      <button class="category-btn${!this.activeCategory ? " active" : ""}" data-category="">
        <span class="cat-icon">${this.allIcon()}</span>
        <span>${this.t("ui.allCategories")}</span>
      </button>
      <div class="sidebar-divider"></div>
    `;

    // icon mapping is used to render each category button visually
    const icons = {
      "system-navigation": this.terminalIcon(),
      "files-directories": this.folderIcon(),
      "permissions-users": this.lockIcon(),
      "processes-system": this.cpuIcon(),
      network: this.globeIcon(),
      packages: this.packageIcon(),
      "disk-storage": this.hardDriveIcon(),
      "logs-diagnostics": this.fileTextIcon(),
    };

    // create button for each category, highlighting the active one
    for (const cat of COMMANDS.categories) {
      const isActive = this.activeCategory === cat.id;
      html += `
        <button class="category-btn${isActive ? " active" : ""}" data-category="${cat.id}">
          <span class="cat-icon">${icons[cat.id] || ""}</span>
          <span>${this.getCategoryName(cat.id)}</span>
        </button>
      `;
    }

    html += "</nav>";
    sidebar.innerHTML = html;
  },

  // build the command cards for the selected category and search query
  renderContent() {
    const container = document.getElementById("commands-container");
    let html = "";

    const categories = this.activeCategory
      ? COMMANDS.categories.filter((c) => c.id === this.activeCategory)
      : COMMANDS.categories;

    let hasResults = false;

    for (const cat of categories) {
      // filter commands by search query, command id, description, or tags
      const filtered = this.searchQuery
        ? cat.commands.filter((cmd) => {
            const q = this.searchQuery.toLowerCase();
            const cmdData = this.getCommandData(cmd.id);
            return (
              cmd.id.toLowerCase().includes(q) ||
              cmdData.description.toLowerCase().includes(q) ||
              (cmd.tags || []).some((t) => t.toLowerCase().includes(q))
            );
          })
        : cat.commands;

      if (filtered.length === 0) continue;
      hasResults = true;

      // render a category section only when there are matching commands
      html += `<section class="category-section" id="section-${cat.id}">`;
      html += `<h2 class="category-title">${this.getCategoryName(cat.id)}</h2>`;
      html += '<div class="commands-grid">';

      for (let i = 0; i < filtered.length; i++) {
        const cmd = filtered[i];
        const cmdData = this.getCommandData(cmd.id);
        // add a small animation delay for each card to stagger entrance
        const delay = (i % 12) * 0.04;
        html += `
          <article class="command-card" style="animation-delay: ${delay}s">
            <div class="card-header">
              <code class="command-name">${cmdData.display || cmd.id}</code>
            </div>
            <p class="command-desc">${cmdData.description}</p>
            <div class="command-example">
              <span class="example-label">${this.t("ui.example")}</span>
              <code class="example-code">${cmdData.example || ""}</code>
            </div>
          </article>
        `;
      }

      html += "</div></section>";
    }

    // show a friendly empty state when no commands match the search
    if (!hasResults) {
      html = `
        <div class="no-results">
          <p>${this.t("ui.noResults")}</p>
          <small>${this.t("ui.noResultsHint")}</small>
        </div>
      `;
    }

    container.innerHTML = html;
  },

  // update search input text and clear button visibility
  renderSearch() {
    const searchContainer = document.getElementById("search-container");
    const input = searchContainer.querySelector(".search-input");
    const clear = searchContainer.querySelector(".search-clear");
    input.placeholder = this.t("ui.searchPlaceholder");
    input.value = this.searchQuery;
    clear.textContent = this.t("ui.clearSearch");
    clear.classList.toggle("visible", this.searchQuery.length > 0);
  },

  // update the language toggle button label and active state
  renderLangToggle() {
    const btn = document.getElementById("lang-toggle");
    const label = btn.querySelector(".lang-label");
    label.textContent = this.lang === "es" ? "ES" : "EN";
    btn.classList.toggle("active", this.lang === "en");
  },

  // update search query and refresh relevant ui sections
  setSearch(query) {
    this.searchQuery = query;
    this.renderSearch();
    this.renderContent();
  },

  // set the active category filter and rerender ui
  setCategory(catId) {
    this.activeCategory = catId || null;
    this.render();
    if (window.innerWidth <= 900) {
      this.closeSidebar();
    }
  },

  // switch the current language and rerender the interface
  setLang(lang) {
    if (lang === this.lang) return;
    this.lang = lang;
    this.render();
  },

  // toggle the sidebar open/close state on small screens
  toggleSidebar() {
    this.sidebarOpen ? this.closeSidebar() : this.openSidebar();
  },

  // open the sidebar and show the overlay
  openSidebar() {
    this.sidebarOpen = true;
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("sidebar-overlay").classList.add("open");
  },

  // close the sidebar and hide the overlay
  closeSidebar() {
    this.sidebarOpen = false;
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebar-overlay").classList.remove("open");
  },

  // set the theme and update the document and local storage
  setTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    this.renderThemeToggle();
  },

  // toggle between dark and light theme
  toggleTheme() {
    this.setTheme(this.theme === "dark" ? "light" : "dark");
  },

  // update the theme toggle button icon based on current theme
  renderThemeToggle() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    // show moon icon when in light mode (switch to dark), sun when in dark mode (switch to light)
    btn.innerHTML = this.theme === "dark" ? this.sunIcon() : this.moonIcon();
  },

  // attach event listeners for search, navigation, language toggle, and sidebar controls
  bindEvents() {
    const searchInput = document.querySelector(".search-input");
    let debounceTimer;

    // debounce input events so filtering runs only after typing pauses
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        this.setSearch(e.target.value);
      }, 200);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        this.setSearch("");
        searchInput.blur();
      }
    });

    // handle category button clicks from the sidebar navigation
    document.getElementById("sidebar").addEventListener("click", (e) => {
      const btn = e.target.closest(".category-btn");
      if (!btn) return;
      this.setCategory(btn.dataset.category);
    });

    // toggle between spanish and english when language button is clicked
    document.getElementById("lang-toggle").addEventListener("click", () => {
      this.setLang(this.lang === "es" ? "en" : "es");
    });

    document.getElementById("theme-toggle").addEventListener("click", () => {
      this.toggleTheme();
    });

    document.getElementById("menu-btn").addEventListener("click", () => {
      this.toggleSidebar();
    });

    document.getElementById("sidebar-overlay").addEventListener("click", () => {
      this.closeSidebar();
    });

    // clear search input and reset filters when clear button is pressed
    document.querySelector(".search-clear").addEventListener("click", () => {
      document.querySelector(".search-input").value = "";
      this.setSearch("");
      document.querySelector(".search-input").focus();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.sidebarOpen) {
        this.closeSidebar();
      }
    });
  },

  // svg icon used for the all categories button
  allIcon() {
    return `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`;
  },

  // svg icon for the terminal category
  terminalIcon() {
    return `<svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;
  },

  // svg icon for the files and directories category
  folderIcon() {
    return `<svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`;
  },

  // svg icon for the permissions and users category
  lockIcon() {
    return `<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
  },

  // svg icon for the processes and system category
  cpuIcon() {
    return `<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`;
  },

  // svg icon for the network category
  globeIcon() {
    return `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
  },

  // svg icon for the packages category
  packageIcon() {
    return `<svg viewBox="0 0 24 24"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
  },

  // svg icon for the disk and storage category
  hardDriveIcon() {
    return `<svg viewBox="0 0 24 24"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>`;
  },

  // svg icon for the logs and diagnostics category
  fileTextIcon() {
    return `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
  },

  // sun icon shown in dark mode to indicate switching to light
  sunIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  },

  // moon icon shown in light mode to indicate switching to dark
  moonIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  },
};

// initialize the app once the dom is loaded and ready
document.addEventListener("DOMContentLoaded", () => App.init());
