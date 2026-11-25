# Claude Theme

A warm dark theme for [Safelight](https://github.com/anthonyreimche/SafeLight). Rust-orange accent and slider, off-white text and warm stone-grey panels.

## Install

In Safelight, go to **View ▸ Extensions** and enter:

```
OPGERUIMD97/safelight-claude-theme
```

Then apply it via **View ▸ Theme**. No build step; `index.js` is the bundle.

## Palette

| Role | Hex | Safelight token |
| --- | --- | --- |
| Canvas | `#1C1917` | `--color-surface-0` |
| Panels | `#292524` | `--color-surface-1` |
| Panel headers | `#3C3836` | `--color-surface-2` |
| Selected | `#504A47` | `--color-surface-3` |
| Hover | `#615A56` | `--color-surface-4` |
| Borders | `#57534E` | `--color-border` |
| Subtle borders | `#3C3836` | `--color-border-subtle` |
| Body text | `#F4F3EE` | `--color-text-primary` |
| Labels | `#B1ADA1` | `--color-text-secondary` |
| Placeholder | `#78716C` | `--color-text-muted` |
| Accent | `#C15F3C` | `--color-accent` |
| Accent hover | `#D4744F` | `--color-accent-hover` |
| Slider fill | `#C15F3C` | `--color-slider-fill` |
| Text on accent | `#FFFFFF` | `--color-on-accent` |
| Stars | `#D9A05B` | `--color-rating` |

## Notes

- `--font-mono` is left unset, so **Preferences ▸ Interface ▸ Interface font** keeps working (in Safelight 3.x that variable is the interface font).
- Flags and colour labels use matching warm tones: pick `#7A9B76`, reject `#C1453C`.
- There is no separate develop-surround colour, so the area around the photo uses the canvas.

## Changelog

### 1.2.2

- The name in the theme list is Claude Theme. The README uses the same sections as the other themes.

### 1.2.1

- First GitHub release.

### 1.2.0

- Safelight 3.x: `--color-on-accent` added, monospace stack moved to `--font-code`.

### 1.1.0

- Registered as a theme; rating, flag, label and font variables added.

### 1.0.0

- First version.

## License

MIT
