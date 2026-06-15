export function activate(api) {
  // ─────────────────────────────────────────────────────────────
  // Claude Theme for Safelight
  // Palette:
  //   Crail    #C15F3C  — warm roest-oranje (accent)
  //   Pampas   #F4F3EE  — gebroken wit (primaire tekst)
  //   Cloudy   #B1ADA1  — lichtgrijs (subtiele tekst / iconen)
  //   Dark backgrounds gebaseerd op warme Stone-tinten
  // ─────────────────────────────────────────────────────────────

  api.registerTheme({
    id:          "claude-theme.dark",
    name:        "Claude — Warm Dark",
    colorScheme: "dark",
    vars: {
      // Achtergronden (surface 0 = diepste laag, 3 = hoogste/hover)
      "--color-surface-0":  "#1C1917",   // diepste achtergrond (app bg)
      "--color-surface-1":  "#292524",   // panels / sidebars
      "--color-surface-2":  "#3C3836",   // cards / inputvelden
      "--color-surface-3":  "#504A47",   // hover states

      // Randen
      "--color-border":     "#57534E",   // subtiele rand
      "--color-border-focus":"#C15F3C",  // focus ring = Crail

      // Tekst
      "--color-text":       "#F4F3EE",   // primaire tekst = Pampas
      "--color-text-muted": "#B1ADA1",   // subtiele tekst = Cloudy
      "--color-text-faint": "#78716C",   // nog subtieler (placeholders)

      // Accent = Crail
      "--color-accent":         "#C15F3C",
      "--color-accent-hover":   "#D4744F",
      "--color-accent-active":  "#A84E2F",
      "--color-accent-subtle":  "#3D2318",  // achtergrond bij accent-items

      // Slider fill
      "--color-slider-fill":    "#C15F3C",
      "--color-slider-track":   "#57534E",
      "--color-slider-thumb":   "#F4F3EE",

      // Histogram
      "--color-histogram-bg":   "#1C1917",
      "--color-histogram-r":    "#E05252",
      "--color-histogram-g":    "#52A852",
      "--color-histogram-b":    "#5280E0",
      "--color-histogram-lum":  "#B1ADA1",

      // Ratings / flags
      "--color-star-filled":    "#C15F3C",
      "--color-star-empty":     "#57534E",
      "--color-pick":           "#6EBF8B",
      "--color-reject":         "#E05252",

      // Scrollbar
      "--color-scrollbar-thumb":"#57534E",
      "--color-scrollbar-track":"#1C1917",

      // Topmenu / toolbar
      "--color-toolbar-bg":     "#292524",
      "--color-toolbar-border": "#3C3836",
    },
  });
}

export function deactivate() {
  // Safelight verwijdert theme-contributions automatisch bij deactivatie
}
