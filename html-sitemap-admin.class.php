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
        add_action('admin_notices', [$this, 'maybe_show_review_notice']);
        add_action('wp_ajax_html_sitemap_dismiss_review', [$this, 'dismiss_review_notice']);
    }

    public function maybe_show_review_notice() {
        $screen = get_current_screen();
        if ( ! $screen || $screen->id !== 'dashboard' ) {
            return;
        }
        if ( get_user_meta( get_current_user_id(), 'html_sitemap_review_dismissed', true ) ) {
            return;
        }
        $review_url = 'https://wordpress.org/support/plugin/html-sitemap/reviews/#new-post';
        $nonce      = wp_create_nonce( 'html_sitemap_dismiss_review' );
        ?>
        <div class="notice notice-info is-dismissible html-sitemap-review-notice" data-nonce="<?php echo esc_attr( $nonce ); ?>">
            <p>
                <strong><?php esc_html_e( 'Are you enjoying the HTML Page Sitemap plugin?', 'html-sitemap' ); ?></strong>
                <?php esc_html_e( 'If it\'s been helpful on your site, your review on WordPress.org makes a huge difference — it helps other site owners discover the plugin and encourages continued development. It only takes a minute and means the world to us!', 'html-sitemap' ); ?>
                &nbsp;&#11088;&nbsp;<a href="<?php echo esc_url( $review_url ); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Click here to leave a review on WordPress.org &rarr;', 'html-sitemap' ); ?></a>
            </p>
        </div>
        <script>
        jQuery(function($) {
            $(document).on('click', '.html-sitemap-review-notice .notice-dismiss', function() {
                $.post(ajaxurl, {
                    action: 'html_sitemap_dismiss_review',
                    nonce: $('.html-sitemap-review-notice').data('nonce')
                });
            });
        });
        </script>
        <?php
    }

    public function dismiss_review_notice() {
        check_ajax_referer( 'html_sitemap_dismiss_review', 'nonce' );
        update_user_meta( get_current_user_id(), 'html_sitemap_review_dismissed', '1' );
        wp_die();
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
}

// eof