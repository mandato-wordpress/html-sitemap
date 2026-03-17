/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

// import for useState
import { useState } from '@wordpress/element';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';
import { 
  TextControl, 
  SelectControl, 
  PanelBody,
  ToolbarButton,
  ToolbarGroup,
  Placeholder,
  __experimentalText as Text,
} from '@wordpress/components'

import { code } from '@wordpress/icons';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

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
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
  // Add a state variable to track if the shortcode or the preview button has been selected
  const [ viewMode, setViewMode ] = useState( 'shortcode' );

	return (
		<div { ...useBlockProps() }>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
              label="Shortcode"
              icon={ code }
              isPressed={ viewMode === 'shortcode' }
              onClick={ () => setViewMode( 'shortcode' ) }
          />
          <ToolbarButton
              label="Preview"
              text={ __( 'Preview', 'html-sitemap' ) }
              isPressed={ viewMode === 'preview' }
              onClick={ () => setViewMode( 'preview' ) }
          />
        </ToolbarGroup>
      </BlockControls>
      <InspectorControls>
        <PanelBody title={ __( 'Page Options', 'html-sitemap' ) }>
          <TextControl
            label={ __( 'Child Of', 'html-sitemap' ) }
            value={ attributes.child_of || '' }
            onChange={ ( newChildOf ) => {
              setAttributes( { child_of: newChildOf } );
            } }
            help={
              __('Specify a parent page ID to only include its child pages in the sitemap. The value \'CURRENT\' will use the current page ID. The value \'PARENT\' will use the current page parent ID.', 'html-sitemap')
            }
          />
          <TextControl
              label={ __( 'Author(s)', 'html-sitemap' ) }
              value={ attributes.authors || '' }
              onChange={ ( newAuthors ) => {
                setAttributes( { authors: newAuthors } );
              } }
              help={ 
                __('Comma-separated list of author IDs to include.', 'html-sitemap')
              }
            />
					<TextControl
							label={ __( 'Exclude Pages', 'html-sitemap' ) }
							value={ attributes.exclude || '' }
							onChange={ ( newExclude ) => {
								setAttributes( { exclude: newExclude } );
							} }
              help={ 
                __('Comma-separated list of page IDs to exclude.', 'html-sitemap')
              }
						/>
          <TextControl
							label={ __( 'Include Pages', 'html-sitemap' ) }
							value={ attributes.include || '' }
							onChange={ ( newInclude ) => {
								setAttributes( { include: newInclude } );
							} }
              help={ 
                __('Comma-separated list of page IDs to include.', 'html-sitemap')
              }
						/>
				</PanelBody>
        <PanelBody title={ __( 'Depth and Sorting', 'html-sitemap' ) } initialOpen={ false }>

          <SelectControl
              label={ __( 'Depth', 'html-sitemap' ) }
              value={ attributes.depth || '' }
              options={ [
                { label: __( 'All pages', 'html-sitemap' ), value: '' },
                { label: __( 'Top-level pages', 'html-sitemap' ), value: '1' },
                { label: __( '2nd-level pages', 'html-sitemap' ), value: '2' },
                { label: __( '3rd-level pages', 'html-sitemap' ), value: '3' },
                { label: __( '4th-level pages', 'html-sitemap' ), value: '4' },
                { label: __( '5th-level pages', 'html-sitemap' ), value: '5' },
                { label: __( '6th-level pages', 'html-sitemap' ), value: '6' },
                { label: __( '7th-level pages', 'html-sitemap' ), value: '7' },
                { label: __( '8th-level pages', 'html-sitemap' ), value: '8' },
                { label: __( '9th-level pages', 'html-sitemap' ), value: '9' },
                { label: __( '10th-level pages', 'html-sitemap' ), value: '10' },
                { label: __( 'All in one-dimensional list', 'html-sitemap' ), value: '-1' },
              ] }
              onChange={ ( newDepth ) => {
                setAttributes( { depth: newDepth } );
              } }
              help={ 
                __('Specify the depth of the sitemap. This will determine how many levels of pages are displayed.', 'html-sitemap')
              }
          />
          <SelectControl
              label={ __( 'Sort Order', 'html-sitemap' ) }
              value={ attributes.sort_order || '' }
              options={ [
                { label: __( 'None', 'html-sitemap' ), value: '' },
                { label: __( 'Ascending', 'html-sitemap' ), value: 'ASC' },
                { label: __( 'Descending', 'html-sitemap' ), value: 'DESC' },
              ] }
              onChange={ ( newSortOrder ) => {
                setAttributes( { sort_order: newSortOrder } );
              } }
              help={ 
                __('Specify the sort order for the sitemap.', 'html-sitemap')
              }
          />
          <TextControl
              label={ __( 'Sort Column', 'html-sitemap' ) }
              value={ attributes.sort_column || '' }
              onChange={ ( newSortColumn ) => {
                setAttributes( { sort_column: newSortColumn } );
              } }
              help={ 
                __('Specify the column to sort by. This should be a valid column name from the wp_posts database table, such as "post_title" or "post_date".', 'html-sitemap')
              }
          />
        </PanelBody>
        <PanelBody title={ __( 'List Styling', 'html-sitemap' ) } initialOpen={ false }>
          <TextControl
            label={ __( 'List CSS class(es)', 'html-sitemap' ) }
            value={ attributes.class || '' }
            onChange={ ( newClass ) => {
              setAttributes( { class: newClass } );
            } }
            help={ 
              __('Separate multiple classes with spaces.', 'html-sitemap')
            }
           
          />
					<TextControl
							label={ __( 'List CSS ID', 'html-sitemap' ) }
							value={ attributes.id || '' }
							onChange={ ( newId ) => {
								setAttributes( { id: newId } );
							} }
              help={ 
                __('Specify a unique element ID.', 'html-sitemap')
              }
						/>
          <SelectControl
              label={ __( 'Ordered List Type', 'html-sitemap' ) }
              value={ attributes.ordered_list_type || '' }
              options={ [
                { label: __( 'Unordered', 'html-sitemap' ), value: '' },
                { label: __( 'Numbers', 'html-sitemap' ), value: '1' },
                { label: __( 'Uppercase Letters', 'html-sitemap' ), value: 'A' },
                { label: __( 'Lowercase Letters', 'html-sitemap' ), value: 'a' },
                { label: __( 'Uppercase Roman Numerals', 'html-sitemap' ), value: 'I' },
                { label: __( 'Lowercase Roman Numerals', 'html-sitemap' ), value: 'i' },
              ] }
              onChange={ ( newOrderedListType ) => {
                setAttributes( { ordered_list_type: newOrderedListType } );
              } }
              help={ 
                __('Specify the type of ordered list. This will be applied to the <ol> element if the sitemap is rendered as an ordered list.', 'html-sitemap')
              }
          />
          <SelectControl
              label={ __( 'Item Spacing', 'html-sitemap' ) }
              value={ attributes.item_spacing || '' }
              options={ [
                { label: __( 'Preserve', 'html-sitemap' ), value: '' },
                { label: __( 'Discard', 'html-sitemap' ), value: 'discard' },
              ] }
              onChange={ ( newItemSpacing ) => {
                setAttributes( { item_spacing: newItemSpacing } );
              } }
              help={ 
                __('Preserve whitespace within the menu’s HTML.', 'html-sitemap')
              }
          />
          <SelectControl
              label={ __( 'Show Page Dates', 'html-sitemap' ) }
              value={ attributes.show_date || '' }
              options={ [
                { label: __( 'No', 'html-sitemap' ), value: '' },
                { label: __( 'Published date', 'html-sitemap' ), value: 'true' },
                { label: __( 'Last modified date', 'html-sitemap' ), value: 'modified' },
              ] }
              onChange={ ( newShowDate ) => {
                setAttributes( { show_date: newShowDate } );
              } }
              help={ 
                __('Whether to display the date in the sitemap.', 'html-sitemap')
              }
          />
          <TextControl
              label={ __( 'Date Format', 'html-sitemap' ) }
              value={ attributes.date_format || '' }
              onChange={ ( newDateFormat ) => {
                setAttributes( { date_format: newDateFormat } );
              } }
              help={ 
                __('Specify the date format to use if page dates are displayed. This should be a valid date format string as defined in the WordPress documentation.', 'html-sitemap')
              }
          />

        </PanelBody>

        <PanelBody title={ __( 'Filters', 'html-sitemap' ) } initialOpen={ false }>
          
          <TextControl
              label={ __( 'Post Type', 'html-sitemap' ) }
              value={ attributes.post_type || '' }
              onChange={ ( newPostType ) => {
                setAttributes( { post_type: newPostType } );
              } }
              help={ 
                __('Specify a custom post type to include in the sitemap. The default is "page".', 'html-sitemap')
              }
          />
          <TextControl
              label={ __( 'Post Status', 'html-sitemap' ) }
              value={ attributes.post_status || '' }
              onChange={ ( newPostStatus ) => {
                setAttributes( { post_status: newPostStatus } );
              } }
              help={ 
                __('Specify the post status to include in the sitemap. The default is "publish".', 'html-sitemap')
              }
          />
          <TextControl
              label={ __( 'Meta Key', 'html-sitemap' ) }
              value={ attributes.meta_key || '' }
              onChange={ ( newMetaKey ) => {
                setAttributes( { meta_key: newMetaKey } );
              } }
              help={ 
                __('Specify a meta key to filter pages by. Only pages with this meta key will be included in the sitemap.', 'html-sitemap')
              }
          />
          <TextControl
              label={ __( 'Meta Value', 'html-sitemap' ) }
              value={ attributes.meta_value || '' }
              onChange={ ( newMetaValue ) => {
                setAttributes( { meta_value: newMetaValue } );
              } }
              help={ 
                __('Specify a meta value to filter pages by. Only pages with this meta value for the specified meta key will be included in the sitemap.', 'html-sitemap')
              }
          />
          <TextControl
              label={ __( 'Number of Pages', 'html-sitemap' ) }
              value={ attributes.number || '' }
              onChange={ ( newNumber ) => {
                setAttributes( { number: newNumber } );
              } }
              help={ 
                __('Specify the maximum number of pages to include in the sitemap. The default is to include all pages.', 'html-sitemap')
              }
          />
          <Text>
            <p className="components-base-control__help">
              { __('List must be one-dimensional.', 'html-sitemap') }
            </p>
          </Text>
          <TextControl
              label={ __( 'Offset', 'html-sitemap' ) }
              value={ attributes.offset || '' }
              onChange={ ( newOffset ) => {
                setAttributes( { offset: newOffset } );
              } }
              help={ 
                __('Specify the number of pages to skip before starting to include pages in the sitemap. The default is 0.', 'html-sitemap')
              }
          />
          <Text>
            <p className="components-base-control__help">
              { __('List must be one-dimensional.', 'html-sitemap') }
            </p>
          </Text>
        </PanelBody>
      </InspectorControls>

      { viewMode === 'shortcode' ? (
        <Placeholder 
          icon={ code }
          label={ __( 'HTML Sitemap', 'html-sitemap' ) }
          instructions={ __( 'Configure the block settings to generate the shortcode.', 'html-sitemap' ) }
        >
          <code>
            [html_sitemap 
              {Object.entries(attributes).some(([key, value]) => value !== '' && key !== 'className') ? ' ' : ''}
              {Object.entries(attributes).filter(([key, value]) => value !== '' && key !== 'className').map(([key, value]) => `${key}="${escapeShortcodeAttributeValue( value )}"`).join(' ')}
            ]
          </code>
        </Placeholder>
      ) : (
        <div className="html-sitemap-preview">
          { 
            'Preview coming soon'
          }
        </div>
      ) }
    </div>
  );
}
