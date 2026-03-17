<?php
/**
 * HTML Page Sitemap Admin class plugin
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class HtmlSitemapAdmin {

    private static $instance = null;
    private $settings = [];

    /**
     * Singleton instance
     */
    public static function get_instance() {
        if ( self::$instance === null ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor
     */
    private function __construct() {
        
        add_action('init', [$this, 'init'] );
    }

    public function init() {
        // Load settings, register shortcodes, etc.

        if( function_exists('register_block_type') ) {
            if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
                wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
            } else {
                if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
                    wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
                }
                $manifest_data = require __DIR__ . '/build/blocks-manifest.php';
                foreach ( array_keys( $manifest_data ) as $block_type ) {
                    register_block_type( __DIR__ . "/build/{$block_type}" );
                }
            }
        }
    }
};

// eof