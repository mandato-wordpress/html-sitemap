<?php
/*
Plugin Name: HTML Page Sitemap
Plugin URI: http://www.pluginspodcast.com/plugins/html-page-sitemap/
Description: <a href="https://wordpress.org/plugins/html-sitemap/" target="_blank">HTML Page Sitemap</a> Adds an HTML (Not XML) sitemap of your blog pages (not posts) by entering the shortcode [html_sitemap]. A plugin from <a href="http://angelo.mandato.com/" target="_blank">Angelo Mandato</a>.
Version: 1.3.9
Contributors: Angelo Mandato, Founder and CTO of [Painless Analytics](https://www.painlessanalytics.com)
Author URI: http://angelo.mandato.com/

Requires at least: 3.7
Tested up to: 6.9
Text Domain: html-sitemap
Change Log: See readme.txt for complete change log
Contributors: Angelo Mandato, founder of Painless Analytics
License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

Copyright 2009-2026 Angelo Mandato, (http://angelo.mandato.com)
*/


/*
	Add the sitemap when shortcode is encountered
	@param $args - arguments or attributes specified in the shortcode tag.
	@param $content - not used
	@return the page sitemap or empty string if not applicable.
*/
function html_sitemap_shortcode_handler( $args, $content = null )
{
	if( is_feed() )
		return '';
	
	$argsLocal = array();
	if( is_array($args) ) {
		$allowedStrings = ['child_of','depth','date_format','link_before','link_after','meta_key','meta_value', 'number', 'offset', 'post_type', 'post_status','show_date','sort_column','item_spacing','class','id','ordered_list_type'];
		$allowedIntLists = ['authors','exclude','include'];
		foreach( $args as $key => $value ) {
			if( in_array( $key, $allowedStrings ) ) {
				$argsLocal[$key] = sanitize_text_field( $value );
			} else if( in_array( $key, $allowedIntLists ) ) {
				$argsLocal[$key] = implode( ',', array_map( 'intval', explode( ',', str_replace(' ', '', $value) ) )	);
			}
		}
	}
	
	$class_tag = '';
	if( isset($argsLocal['class']) ) {
		if( !empty($argsLocal['class']) )
			$class_tag = $argsLocal['class'];
		unset($argsLocal['class']);
	}
	
	$id_tag = '';
	if( isset($argsLocal['id']) ) {
		if( !empty($argsLocal['id']) )
			$id_tag = $argsLocal['id'];
		unset($argsLocal['id']);
	}
	
	$ordered_type = '';
	if( isset($argsLocal['ordered_list_type']) ) {
		if( !empty($argsLocal['ordered_list_type'])) {
			switch( $argsLocal['ordered_list_type'] ) {
				case '1':
				case 'i':
				case 'I':
				case 'a':
				case 'A': { $ordered_type = $argsLocal['ordered_list_type']; }; break;
			}
		}
		unset($argsLocal['ordered_list_type']);
	}
	
	$argsLocal['echo'] = 0;
	$argsLocal['title_li'] = '';
	if( isset($argsLocal['link_before']) ) {
		unset($argsLocal['link_before']);
	}
	if( isset($argsLocal['link_after']) ) {
		unset($argsLocal['link_after']);
	}
	
	if( isset($argsLocal['child_of']) && $argsLocal['child_of'] == 'CURRENT' ) {
		$argsLocal['child_of'] = get_the_ID();
	} else if( isset($argsLocal['child_of']) && $argsLocal['child_of'] == 'PARENT' ) {
		$post = &get_post( get_the_ID() );
		if( $post->post_parent )
			$argsLocal['child_of'] = $post->post_parent;
		else
			unset( $argsLocal['child_of'] );
	}
	
	$html = wp_list_pages($argsLocal);

	// Remove the classes added by WordPress
	$html = preg_replace('/( class="[^"]+")/is', '', $html);
	
	if( !empty($ordered_type) ) {
		// swap the type ul with ol and set the type="$ordered_type"
		$html = preg_replace('/(<ul)/is', '<ol type="'. esc_attr($ordered_type) .'"', $html);
		$html = preg_replace('/(<\/ul)/is', '</ol', $html);
	}
	
	if( empty($ordered_type) ) {
		$prefix = '<ul';
	} else {
		$prefix = '<ol type="'. esc_attr($ordered_type) .'"';
	}
	
	if( !empty($id_tag) ) {
		$prefix .= ' id="'. esc_attr($id_tag) .'"';
	}
	
	if( !empty($class_tag) ) {
		$prefix .= ' class="'. esc_attr($class_tag) .'"';
	}
	$prefix .= '>';
		
	if( empty($ordered_type) ) {
		return $prefix . $html .'</ul>';
	}
	return $prefix . $html .'</ol>';
}

function html_sitemap_something_to_translate() {
	$null = __('HTML Page Sitemap', 'html-sitemap'); // We need to provide something to translate so the plugin can be translated at translate.wordpress.org
}

add_shortcode('html-sitemap', 'html_sitemap_shortcode_handler'); // This is no longer recommended as any plugin that creates their own shortcode starting with 'html' will also get the handler call
add_shortcode('htmlsitemap', 'html_sitemap_shortcode_handler');
add_shortcode('html_sitemap', 'html_sitemap_shortcode_handler');

// eof