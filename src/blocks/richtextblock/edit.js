import { Component } from '@wordpress/element';
import { __ } from "@wordpress/i18n";
import { RichText, BlockControls, AlignmentToolbar, InspectorControls, PanelColorSettings, withColors, ContrastChecker } from "@wordpress/editor";
import { Toolbar, DropdownMenu, PanelBody, ToggleControl, ColorPicker, ColorPalette } from "@wordpress/components";

class Edit extends Component {

	constructor( props ) {
		super( props );
	}

	onChangeContent = ( content ) => {
		this.props.setAttributes( { content } );
	}

	onChangeAlignment = ( alignment ) => {
		this.props.setAttributes( { alignment } );
	}

	onChange = ( alignment ) => {
		this.props.setAttributes( { alignment } );
	}

	render() {
		console.log( this.props );
		const { className, attributes, setTextColor, setBackgroundColor, backgroundColor, textColor } = this.props;
		const { content, alignment } = attributes;
		return (
			<>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'PanelColorSettings', 'mytheme-blocks' ) }
						colorSettings={
							[
								{
									value: backgroundColor,
									onChange: setBackgroundColor,
									label: __( 'Background Color', 'mytheme-blocks' )
								},
								{
									value: textColor,
									onChange: setTextColor,
									label: __( 'Text Color', 'mytheme-blocks' )
								}
							]
						}
					>
						<ContrastChecker
							textColor={textColor.color}
							backgroundColor={backgroundColor.color}
						/>
					</PanelColorSettings>
					<PanelBody title={ __( 'Panel', 'mytheme-blocks' ) }>
						<ToggleControl
							label="On/Off"
							onChange={ (v) => console.log( v ) }
						/>
						<ColorPicker
							color="#f03"
							onChangeComplete={ (v) => console.log( v ) }
						/>
					</PanelBody>
					<PanelBody title={ __( 'Color pallet', 'mytheme-blocks' ) }>
						<ColorPalette
							colors={
								[
									{
										color: '#f03'
									},
									{
										color: 'blue'
									}
								]
							}
							onChange={ setBackgroundColor }
						/>
					</PanelBody>
				</InspectorControls>
				<BlockControls
					controls={
						[
							[
								{
									icon: 'wordpress',
									title: __( 'test', 'mytheme-blocks' ),
									onClick: () => alert(true),
									isActive: true
								}
							]
						]
					}
				>
					<Toolbar
						isCollapsed
						controls={
							[
								[
									{
										icon: 'wordpress',
										title: __( 'test', 'mytheme-blocks' ),
										onClick: () => alert(true),
										isActive: true
									}
								],
								[
									{
										icon: 'wordpress',
										title: __( 'test', 'mytheme-blocks' ),
										onClick: () => alert(true),
										isActive: false
									}
								]
							]
						}
					/>
					<AlignmentToolbar
						value={ alignment }
						onChange={ this.onChangeAlignment }
					/>
					{ ( content && content.length > 0 ) &&
					<Toolbar>
						<DropdownMenu
							icon="editor-table"
							label={ __( 'test', 'mytheme-blocks' ) }
							controls={
								[
									[
										{
											icon: 'wordpress',
											title: __( 'test', 'mytheme-blocks' ),
											onClick: () => alert(true),
											isActive: true
										}
									],
									[
										{
											icon: 'wordpress',
											title: __( 'test', 'mytheme-blocks' ),
											onClick: () => alert(true),
											isActive: false
										}
									]
								]
							}
						/>
					</Toolbar>
					}
				</BlockControls>
				<RichText
					tagName="p"
					className={ className }
					onChange={ this.onChangeContent }
					value={ content }
					formattingControls={ [ 'bold' ] }
					style={ { textAlign: alignment, backgroundColor: backgroundColor.color, color:textColor.color } }
				/>
			</>
		);
	}
}

export default withColors( 'backgroundColor', { 'textColor': 'color' } )( Edit );
