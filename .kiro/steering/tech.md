# Technology Stack

## Core Technologies

- **Language**: PHP 5.4+ (plugin core), JavaScript ES6+ (block editor)
- **Platform**: WordPress 3.7+ (tested up to 6.9)
- **License**: GPLv2 or later

## Build System

- **Build Tool**: `@wordpress/scripts` (WordPress official build tooling)
- **Package Manager**: npm
- **Bundler**: Webpack (via @wordpress/scripts)

## Dependencies

### Runtime Dependencies
- `@wordpress/block-editor` - Block editor components
- `@wordpress/blocks` - Block registration and transforms
- `@wordpress/components` - UI components for block controls
- `@wordpress/element` - React abstraction layer
- `@wordpress/icons` - WordPress icon library
- `@wordpress/i18n` - Internationalization utilities

### Development Dependencies
- `@wordpress/scripts` - Build, lint, and format tooling

## Common Commands

```bash
# Development mode with hot reload
npm start

# Production build
npm run build

# Create plugin zip for distribution
npm run plugin-zip

# Code quality
npm run lint:js        # Lint JavaScript
npm run lint:css       # Lint CSS/SCSS
npm run format         # Format code

# Update WordPress packages
npm run packages-update
```

## Build Output

- Source files: `src/html-sitemap-block/`
- Build output: `build/html-sitemap-block/`
- Manifest: `build/blocks-manifest.php` (generated with `--blocks-manifest` flag)

## WordPress Integration

- Block registration via `registerBlockType()` from `@wordpress/blocks`
- Shortcode handler: `html_sitemap_shortcode_handler()` in main PHP file
- Admin functionality: `html-sitemap-admin.class.php`
- Text domain: `html-sitemap` (for translations)
