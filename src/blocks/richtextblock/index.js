import "./styles.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { RichText, BlockControls, AlignmentToolbar } from "@wordpress/editor";
import { Toolbar, DropdownMenu } from "@wordpress/components";

registerBlockType("mytheme-blocks/richtextblock", {
	title: __("RichText Block", "mytheme-blocks"),
	description: __("Our second block", "mytheme-blocks"),
	category: "layout",
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
		</svg>
	),
	keywords: [__("photo", "mytheme-blocks"), __("image", "mytheme-blocks")],
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p'
		},
		alignment: {
			type: 'string'
		}
	},
	edit: ({ className, attributes, setAttributes }) => {

		const { content, alignment } = attributes;

		const onChangeContent = ( content ) => {
			setAttributes( { content } );
		}

		const onChangeAlignment = ( alignment ) => {
			setAttributes( { alignment } );
		}

		return (
			<>
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
						onChange={ onChangeAlignment }
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
					onChange={ onChangeContent }
					value={ content }
					formattingControls={ [ 'bold' ] }
					style={ { textAlign: alignment } }
				/>
			</>
		);
	},
	save: function( { attributes } ) {
		const { content, alignment } = attributes;

		return <RichText.Content
			tagName="p"
			value={ content }
			style={ { textAlign: alignment } }
		/>;
	}
});
