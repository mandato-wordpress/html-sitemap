# HTML Page Sitemap Changelog
[HTML Page Sitemap](https://www.pluginspodcast.com/plugins/html-page-sitemap/) WordPress plugin.

All notable changes to this project will be documented in this file.

**Keep a Changelog**
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

Each version section should start with a H2 (`## `), the version number in hard brackets, a space-dash-space (` - `), 
and the release date in ISO date format (ISO 8601), *YYYY-MM-DD*.
The proceeding line may contain 1 or more sentences describing the purpose of the release.
A blank line is added to separate the heading/paragraph from the list of changes.
Changes are listed, each item prefixed with a minus (-) character. Tabs may be used to indent the list.
A blank line is added to separate the list from the next heading/paragraph.

```markdown
## [0.0.0] - 2025-01-02
This is an example changelog entry.

- Fixed this
  - and this,
  - and this
  - and that
- Added that
- Removed other
```

**Semantic Versioning**
This project adheres _somewhat_ to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). 
The first version of a MAJOR or MINOR release will exclude the second dot followed by zero (`.0`).
For example `2.0` will be used rather than `2.0.0`. Otherwise Semantic Versioning is strictly followed.

## [Unreleased]
TBD

## [1.3.9] - 2026-02-09

- Fixed security issue with Authenticated user (Contributor+), user could include Cross-Site Scripting within the HTML Sitemap shortcode
- Added banner and icon images

## [1.3.8] - 2025-12-16

- Tested with WordPress up to version 6.9

## [1.3.7] - 2025-04-21

- Tested with WordPress up to version 6.8
- Added CHANGELOG.md

## [1.3.6] - 2025-02-09

- Tested with WordPress up to version 6.7.1
- Project now managed on [GitHub](https://github.com/mandato-wordpress/html-sitemap)

## [1.3.5] - N/A

- Release skipped

## [1.3.4] - 2024-08-13

- Tested with WordPress up to version 6.6
- Readme.txt updated to latest requirements (ref: https://developer.wordpress.org/plugins/wordpress-org/how-your-readme-txt-works/)

## [1.3.3] - 2020-03-14

- Tested with WordPress up to version 5.4

## [1.3.2] - 2018-10-05

- Fixed warning messages in PHP7 when modifying the $args value when it is not an array.

## [1.3.1] - 2018-01-08

- Added a blank index.php to root plugin folder for extra security.
- Tested with WordPress up to version 4.9.1

## [1.3] - 2015-11-24

- Added `ordered_list_type` option to use an ordered list rather than unordered. (Thanks Allie for the feature suggestion!)
- Tested with WordPress 4.4 beta 4

## [1.2] - 2015-09-15

- Tested with WordPress 4.3.
- Added class and id attribute options for specifying HTML class and/or id attributes in the unordered list `<ul>`. (Thanks phorbidden for the feature suggestion!)
- Updated readme, added additional examples for the class and id attribute options.

## [1.1.4] - 2015-01-11

- Tested with WordPress 4.1.
- End of source no longer includes closing PHP tag as recommended by WordPress.
- Updated readme, added additional example excluding multipe pages.

## [1.1.3] - 2013-03-11

- HTML Sitemap compatible with latest versions of WordPress up to 3.5.1
- Nothing has changed with this plugin other than the readme.txt.

## [1.1.2] - 2012-01-31

- Hyphen in shortcode changed to underscore. `html_sitemap` and `htmlsitemap` shortcodes work.  [read more here](http://wordpress.org/support/topic/plugins-wont-coexist?replies=5)
- HTML Sitemap compatible with latest versions of WordPress up to 3.3.1

## [1.1.1] - 2010-06-27

- HTML Sitemap compatible with latest versions of WordPress 2.9 and 3.0.

## [1.1.0] - 2009-11-24

- Fixed typos in readme
- Added child_of options
-- child_of=CURRENT (starts list of pages that are children of the current page)
-- child_of=PARENT (starts list of pages that are of the same level as current page)

## [1.0.0] - 2009-09-05

- Initial release of HTML Page Sitemap plugin.
