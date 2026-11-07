# Claude Theme for Safelight

A warm dark theme for [Safelight](https://github.com/anthonyreimche/SafeLight) inspired by Claude's color palette.

## Colors

| Name    | Hex       | Role                        |
|---------|-----------|-----------------------------|
| Crail   | `#C15F3C` | Accent, sliders, focus ring |
| Pampas  | `#F4F3EE` | Primary text                |
| Cloudy  | `#B1ADA1` | Muted text, icons           |
| Stone   | `#1C1917` | Deepest background          |

## Full variable set

This theme defines every CSS variable Safelight currently supports (per the
[official theming tokens](https://github.com/anthonyreimche/SafeLight/blob/main/docs/dev/api/components.md#theming-tokens)):

```
--color-surface-0 .. --color-surface-4
--color-border
--color-border-subtle
--color-text-primary
--color-text-secondary
--color-text-muted
--color-accent
--color-accent-hover
--color-slider-fill
--color-on-accent
--color-rating
--color-flag-pick
--color-flag-reject
--color-label-red / yellow / green / blue / purple
--font-code
```

`--font-mono` (the interface font in Safelight 3.x) is intentionally left unset
so **Preferences ▸ Interface ▸ Interface font** keeps working.

## Installation

In Safelight, go to **View ▸ Extensions** and enter:

```
OPGERUIMD97/safelight-claude-theme
```

Then apply via **View ▸ Theme**.

## Notes

- This theme is built against Safelight 3.x variable names.
- If CSS variable names change in future versions, please open an issue.
- If some colors don't apply correctly, open the browser dev tools (F12), inspect the element, and let me know which CSS variable name is used — I'll update the theme.

## Changelog

### 1.2.0
- Safelight 3.x compatibility: added `--color-on-accent` (text/icons on accent and slider fills).
- Moved the monospace stack from `--font-mono` to `--font-code`. In 3.x, `--font-mono` is the whole interface font; leaving it unset preserves the user's Interface font preference (Afacad / JetBrains Mono).

### 1.1.0
- Added `"categories": "Themes"` to the manifest — likely required for Safelight to correctly register and apply the theme (was previously missing, possibly causing the theme not to apply at all and showing a fallback black background across all extension panels).
- Fixed `main` field: pointed to `index.js` in the project root instead of a nonexistent `dist/index.js`.
- Added the full set of catalog/rating/label/font variables that were missing from the original release: `--color-rating`, `--color-flag-pick`, `--color-flag-reject`, `--color-label-red/yellow/green/blue/purple`, `--font-mono`.

### 1.0.0
- Initial release with surface, border, text, accent, and slider variables.

## License

MIT
