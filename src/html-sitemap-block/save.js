/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

const escapeShortcodeAttributeValue = ( value ) => {
 	if ( value === null || value === undefined ) {
 		return '';
 	}
 	const stringValue = String( value );
 	return stringValue
 		.replace( /"/g, '&quot;' )
 		.replace( /]/g, '&#93;' );
};

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes }) {
  
	return (
		<div { ...useBlockProps.save() }>
      [html_sitemap 
        {Object.entries(attributes).some(([key, value]) => value !== '' && key !== 'className') ? ' ' : ''}
        {Object.entries(attributes).filter(([key, value]) => value !== '' && key !== 'className').map(([key, value]) => `${key}="${escapeShortcodeAttributeValue( value )}"`).join(' ')}
      ]
		</div>
	);
}
