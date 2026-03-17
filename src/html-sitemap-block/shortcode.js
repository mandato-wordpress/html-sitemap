/**
 * Shortcode generation logic for the HTML Sitemap block.
 *
 * This file contains the logic to generate the shortcode text based on the block attributes.
 * It is used in both the edit and save functions to ensure consistency between the editor and the front-end output.
 */

// Import shortcode.js generateShortcode function in edit.js and save.js

const escapeShortcodeAttributeValue = ( value ) => {
 	if ( value === null || value === undefined ) {
 		return '';
 	}
 	const stringValue = String( value );
 	return stringValue
 		.replace( /"/g, '&quot;' )
 		.replace( /]/g, '&#93;' );
};

export const generateShortcode = ( attributes ) => {
  var shortcodeText = '[html_sitemap';
  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== '' && key !== 'className') {
      shortcodeText += ` ${key}="${escapeShortcodeAttributeValue( value )}"`;
    }
  });
  shortcodeText += ']';

  return shortcodeText;
};
