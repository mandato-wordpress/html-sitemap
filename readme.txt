=== HTML Page Sitemap ===
Contributors: amandato, painlessanalytics
Donate link: http://angelo.mandato.com/contact/
Tags: html sitemap, sitemap, page, pages, shortcode
Requires at least: 3.7
Tested up to: 6.9
Stable tag: 1.3.9
Requires PHP: 5.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Adds an HTML (Not XML) sitemap of your pages (not posts) by entering the shortcode [html_sitemap], perfect for those who use WordPress as a CMS.

== Description ==
This simple plugin adds an HTML (Not XML) sitemap of your pages (not posts) by using the shortcode `[html_sitemap]`. This plugin can display a sitemap with specific depths, from a specific parent page and include/exclude specific pages by ID. The sitemap uses the unordered HTML list tags `<ul>` and `<li>`.

Shortcode attributes include `sort_column`, `sort_order`, `exclude`, `include`, `depth`, `child_of`, `meta_key`, `meta_value`, `authors`, `number`,  `offset`, `post_type`,  and `post_status` parameters from the [`wp_list_pages`](https://codex.wordpress.org/Function_Reference/wp_list_pages) function. In addition you can also set `class`, `id`, and `ordered_list_type` to further customize the html page sitemap.

**This plugin is perfect for those who use WordPress as a CMS.**

== Shortcode Tag Attribute Options ==

The following wp_list_pages tag attribute options are supported:

* `authors` &mdash; Comma-separated list of author IDs. Default empty (all authors).
* `child_of` &mdash; ID of child page, 'CURRENT', or 'PARENT'. The value 'CURRENT' will use the current page ID. The value 'PARENT' will use the current page parent ID.
* `depth` &mdash; -1 (any depth), 0 (all pages), 1 (top-level pages only), 2 (top-level and 2nd level pages only), etc.
* `date_format` &mdash; e.g. 'l, F j, Y'. See [WordPress Date Format](https://wordpress.org/documentation/article/customize-date-and-time-format/)
* `exclude` &mdash; Comma-separated list of page IDs to exclude.
* `include` &mdash; Comma-separated list of page IDs to include.
* `item_spacing` &mdash; Whether to preserve whitespace within the menu’s HTML. Accepts 'preserve' or 'discard'.
* `meta_key` &mdash; Limits output to pages having a specific custom field key. 
* `meta_value` &mdash; Limits output to pages having a specific custom field value.
* `number` &mdash; Limits the number of links displayed (SQL LIMIT).
* `offset` &mdash; Skips a specific number of pages before displaying the list.
* `post_type` &mdash; Post type to query for. Default 'page'
* `post_status` &mdash; Comma-separated list or array of post statuses to include. Default 'publish'
* `show_date` &mdash; Whether to display the page publish or modified date for each page. Accepts 'modified' or any other value. An empty value hides the date.
* `sort_column` &mdash; Comma-separated list of column names to sort the pages by. Accepts 'post_author', 'post_date', 'post_title', 'post_name', 'post_modified', 'post_modified_gmt', 'menu_order', 'post_parent', 'ID', 'rand', or 'comment_count'. Default 'post_title'.

Please see documentation for the [`wp_list_pages`](https://codex.wordpress.org/Function_Reference/wp_list_pages) function for reference.

In addition the following tag attributes are available exclusively for this plugin:

* `class` &mdash; Specify class values for the initial HTML Page Sitemap `<ul>` list tag.
* `id` &mdash; Specify ID values for the initial HTML Page Sitemap `<ul>` list tag.
* `ordered_list_type` &mdash; Specify the ordered list type. Accepts '', '1', 'A', 'a', 'I', and 'i'. Default empty value will display an unordered list.

The `ordered_list_type` attribute options in more detail:

* `ordered_list_type=""` &mdash; The list items will be unordered
* `ordered_list_type="1"` &mdash; The list items will be numbered with numbers
* `ordered_list_type="A"` &mdash; The list items will be numbered with uppercase letters
* `ordered_list_type="a"` &mdash; The list items will be numbered with lowercase letters
* `ordered_list_type="I"` &mdash; The list items will be numbered with uppercase roman numbers
* `ordered_list_type="i"` &mdash; The list items will be numbered with lowercase roman numbers

Note: This plugin only works with Hierarchical Custom Post Types such as `pages`. This plugin will not work if your post type is not hierarchical. Not setting a ordered_list_type will use an unordered list (default).

= Examples =
First example shows how to add a sitemap for the entire site.

`[html_sitemap]`

Example shortcode will add a sitemap to a page displaying a depth limit of 3 and exclude page ID 708.

`[html_sitemap depth=3 exclude=708]`

Example shortcode will add a sitemap to a page displaying only children and grandchildren of the current page.

`[html_sitemap depth=2 child_of=CURRENT]`

Example shortcode will add a sitemap to a page displaying children and grandchildren of the parent page (would include the curent page as well).

`[html_sitemap depth=2 child_of=PARENT]`

Example shortcode will add a sitemap displaying the page modified date with the pages sorted by the menu order number.

`[html_sitemap show_date=modified sort_column=menu_order]`

Example shortcode excluding multiple pages with ids 708, 1024 and 42.

`[html_sitemap exclude="708,1024,42"]`

Example shortcode will add a class attribute to the `<ul>` tag.

`[html_sitemap class="custom-class"]`

Example shortcode will add an id attribute to the `<ul>` tag.

`[html_sitemap id="custom-element-id"]`

Example shortcode will display an ordered list using lowercase letters with a depth of 1.

`[html_sitemap ordered_list_type="a" depth=1]`

Example shortcode with roman numbering in capitalization, with custom field "field-name" and custom value "field-value"

`[html_sitemap ordered_list_type="I" meta_key=featured-list meta_value=yes sort_column=post_date]`

For the latest information visit the website.

[http://www.pluginspodcast.com/plugins/html-page-sitemap/](http://www.pluginspodcast.com/plugins/html-page-sitemap/)

== Frequently Asked Questions ==

 = Why is there no settings page for the plugin? =
 I put together this plugin in less than 2 hours, this readme.txt actually took longer to create. This plugin is meant to be simple and easy to use. To keep it simple, it doesn't add settings to your database or clutter to your admin screens.

 = How do I style the html sitemap? =
 The HTML sitemap can be styled by specifying your own CSS class or unique element ID. The classes and ID are added to the top level `<ul>` element of the sitemap.

== Installation ==
= Automatic Plugin Installation =
Install using the [built-in plugin installer](https://codex.wordpress.org/Administration_Screens#Add_New_Plugins):

1. Go to Plugins > Add New. 
2. Type in "HTML Page Sitemap" in *Search* Plugins box. 
3. Find "HTML Page Sitemap" in the search results.
4. Click *Install Now* to install the WordPress Plugin.
5. Click Activate to activate it.
6. Add the shortcode [html_sitemap] to the page(s) of your choice.

= Manual Plugin Installation =

1. Download this plugin to your desktop.
2. Extract the plugin zip file (or compressed folder) to your desktop.
3. With your FTP program, upload the plugin folder to the wp-content/plugins folder in your WordPress directory online.
4. Go to Plugins screen and find "HTML Page Sitemap" plugin in the list.
5. Click Activate to activate it.
6. Add the shortcode [html_sitemap] to the page(s) of your choice.

== Screenshots ==
1. HTML Page Sitemap in the Default WordPress theme.

== Changelog ==

= 1.3.9 =
* Released on 2026-02-11
* Fixed security issue with Authenticated user (Contributor+), user could include Cross-Site Scripting within the HTML Sitemap shortcode
* Added banner and icon images

= 1.3.8 =
* Released on 2025-12-16
* Tested with WordPress up to version 6.9

= 1.3.7 =
* Released on 2025-04-21
* Tested with WordPress up to version 6.8
* Complete changelog moved to CHANGELOG.md

= 1.3.6 =
* Released on 2025-02-09
* Tested with WordPress up to version 6.7.1
* Project now managed on [GitHub](https://github.com/mandato-wordpress/html-sitemap)

= 1.3.5 =
* Release skipped

= 1.3.4 =
* Released on 2024-08-13
* Tested with WordPress up to version 6.6
* Readme.txt updated to latest requirements (ref: https://developer.wordpress.org/plugins/wordpress-org/how-your-readme-txt-works/)


= Complete Changelog =
[Complete changelog available on GitHub](https://github.com/mandato-wordpress/html-sitemap/blob/main/CHANGELOG.md)

== Upgrade Notice ==
None at this time.


== Contributors ==
[Angelo Mandato](https://angelo.mandato.com), founder of [Painless Analytics](https://www.painlessanalytics.com) and [FrontPup](https://www.frontpup.com) - Plugin author

