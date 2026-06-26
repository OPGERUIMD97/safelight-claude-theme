// Claude — Warm Dark theme for Safelight
// Palette:
//   Crail   #C15F3C  — warm rust-orange (accent)
//   Pampas  #F4F3EE  — off-white (primary text)
//   Cloudy  #B1ADA1  — light grey (muted text)
//   Stone   #1C1917  — darkest background

export function activate(api) {
  api.registerTheme({
    id: "claude-theme.dark",
    name: "Claude — Warm Dark",
    colorScheme: "dark",
    vars: {
      // Surfaces (0 = deepest, 4 = hover/highlight)
      "--color-surface-0":      "#1C1917",
      "--color-surface-1":      "#292524",
      "--color-surface-2":      "#3C3836",
      "--color-surface-3":      "#504A47",
      "--color-surface-4":      "#615A56",

      // Borders
      "--color-border":         "#57534E",
      "--color-border-subtle":  "#3C3836",

      // Text
      "--color-text-primary":   "#F4F3EE",
      "--color-text-secondary": "#B1ADA1",
      "--color-text-muted":     "#78716C",

      // Accent — Crail
      "--color-accent":         "#C15F3C",
      "--color-accent-hover":   "#D4744F",

      // Slider
      "--color-slider-fill":    "#C15F3C",

      // Rating (Library — star rating)
      "--color-rating":         "#D9A05B",

      // Flags (Library — Pick / Reject)
      "--color-flag-pick":      "#7A9B76",
      "--color-flag-reject":    "#C1453C",

      // Catalog labels
      "--color-label-red":      "#C1453C",
      "--color-label-yellow":   "#D9A05B",
      "--color-label-green":    "#7A9B76",
      "--color-label-blue":     "#6B8CAE",
      "--color-label-purple":   "#9B7AA3",

      // Monospace font (EXIF / metadata panels)
      "--font-mono": "'SF Mono', 'Cascadia Code', 'Fira Code', Consolas, monospace",
    },
  });
}

export function deactivate() {}
