# Assets Folder

## Logo Image

Place your logo image file here as `logo.png` (or update the file extension in the code if you use a different format like `.svg`, `.jpg`, etc.).

The logo will be used as:
- The navigation icon at the top of the navigation bar
- The website favicon (browser tab icon)

**Current expected file:** `/public/assets/logo.png`

If your image has a different extension (e.g., `.svg`, `.jpg`), you'll need to update:
1. `components/Navigation.tsx` - line 93: change `src="/assets/logo.png"` to match your file
2. `app/layout.tsx` - lines 8-11: update the `icons.icon` and `icons.apple` paths

