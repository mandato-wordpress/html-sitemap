import { registerBlockType, createBlock } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { generateShortcode } from './shortcode';

// HTML Page Sitemap icon
const icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" fill="#3a80f5" className="bi bi-list-ul" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 11.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-3-4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  </svg>
);

registerBlockType( metadata.name, {
	edit: Edit,
  icon: icon,
	save,
  transforms: {
    to: [
      {
        type: 'block',
        blocks: [ 'core/shortcode' ],
        transform: ( attributes ) => {
          return createBlock( 'core/shortcode', {
            // Map attributes from your block to the target block
            // Save the shortcode to text:
            text: generateShortcode(attributes),
          });
        }
      },
    ],
  },
});
