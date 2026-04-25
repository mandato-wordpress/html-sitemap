# Project Structure

## Root Level Files

- `html-sitemap.php` - Main plugin file with shortcode handler and plugin metadata
- `html-sitemap-admin.class.php` - Admin functionality (block registration)
- `index.php` - Security file (prevents directory listing)
- `package.json` - npm dependencies and build scripts
- `readme.txt` - WordPress.org plugin directory readme
- `README.md` - GitHub repository readme
- `CHANGELOG.md` - Complete version history
- `LICENSE` - GPL license file

## Directory Structure

```
/
├── src/                          # Source files (not distributed)
│   └── html-sitemap-block/       # Block editor component
│       ├── block.json            # Block metadata and attributes
│       ├── index.js              # Block registration entry point
│       ├── edit.js               # Block editor UI component
│       ├── save.js               # Block save function (dynamic render)
│       ├── shortcode.js          # Shortcode generation utility
│       ├── editor.scss           # Editor-only styles
│       └── style.scss            # Frontend and editor styles
│
├── build/                        # Compiled assets (distributed)
│   ├── html-sitemap-block/       # Built block files
│   └── blocks-manifest.php       # WordPress block manifest
│
├── .wordpress-org/               # WordPress.org assets
│   ├── banner-*.png              # Plugin directory banners
│   ├── icon-*.png                # Plugin directory icons
│   ├── screenshot-*.png          # Plugin directory screenshots
│   └── blueprints/               # WordPress Playground demos
│
├── .github/                      # GitHub configuration
└── .kiro/                        # Kiro AI assistant configuration
    └── steering/                 # AI guidance documents
```

## Code Organization

### PHP Layer
- Main plugin file handles shortcode registration and processing
- Admin class handles block registration via `register_block_type()`
- Security: Direct access prevention with `ABSPATH` check
- Sanitization: All shortcode attributes sanitized (text, int, int lists)

### JavaScript Layer
- Block source in `src/html-sitemap-block/`
- Compiled output in `build/html-sitemap-block/`
- Block transforms to/from core shortcode block
- Uses WordPress components for consistent UI

## File Naming Conventions

- PHP files: `kebab-case.php` or `kebab-case.class.php`
- JS files: `camelCase.js`
- Style files: `kebab-case.scss`
- Config files: `kebab-case.json`

## Distribution

Files excluded from distribution (via `.distignore`):
- `src/` directory (source files)
- `node_modules/`
- `.git/` and `.github/`
- Development configuration files
