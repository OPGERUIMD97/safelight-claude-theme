# Claude Theme

A warm dark theme for [Safelight](https://github.com/anthonyreimche/SafeLight), inspired by Claude's colour palette. Rust-orange accent and slider, off-white text and warm stone-grey panels.

## Install

In Safelight, go to **View ▸ Extensions** and enter:

```
OPGERUIMD97/safelight-claude-theme
```

Then apply it via **View ▸ Theme**.

## Palette

| Role | Hex | Safelight token |
| --- | --- | --- |
| Deepest background (Stone) | `#1C1917` | `--color-surface-0` |
| Panels | `#292524` | `--color-surface-1` |
| Panel headers | `#3C3836` | `--color-surface-2` |
| Selected | `#504A47` | `--color-surface-3` |
| Hover | `#615A56` | `--color-surface-4` |
| Control borders | `#57534E` | `--color-border` |
| Subtle borders | `#3C3836` | `--color-border-subtle` |
| Body text (Pampas) | `#F4F3EE` | `--color-text-primary` |
| Labels, icons (Cloudy) | `#B1ADA1` | `--color-text-secondary` |
| Placeholder | `#78716C` | `--color-text-muted` |
| Accent (Crail) | `#C15F3C` | `--color-accent` |
| Accent hover | `#D4744F` | `--color-accent-hover` |
| Slider fill (Crail) | `#C15F3C` | `--color-slider-fill` |
| Text on accent | `#FFFFFF` | `--color-on-accent` |
| Stars | `#D9A05B` | `--color-rating` |
| Pick flag | `#7A9B76` | `--color-flag-pick` |
| Reject flag | `#C1453C` | `--color-flag-reject` |
| Labels red / yellow / green / blue / purple | `#C1453C` `#D9A05B` `#7A9B76` `#6B8CAE` `#9B7AA3` | `--color-label-*` |

## Notes

- `--font-mono` is left unset. In Safelight 3.x that variable is the interface font, and setting it would override **Preferences ▸ Interface ▸ Interface font**. The monospace stack sits in `--font-code`.
- Built against the Safelight 3.x theming tokens. If a colour doesn't apply after a Safelight update, open an issue with the element and the variable it uses (dev tools, F12).

## Changelog

### 1.2.0
- Safelight 3.x: added `--color-on-accent` (text and icons on the accent and slider fill).
- Moved the monospace stack from `--font-mono` to `--font-code`, so the Interface font preference keeps working.

### 1.1.0
- Added `"categories": "Themes"` to the manifest so Safelight registers it as a theme.
- Fixed `main` to point at `index.js` in the repo root.
- Added the rating, flag, colour-label and font variables.

### 1.0.0
- First release: surfaces, borders, text, accent and slider.

## License

MIT
