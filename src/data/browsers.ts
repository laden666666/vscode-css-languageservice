/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// file generated from css-schema.xml and https://github.com/mdn/data using build/generate_browserjs.js

import { CSSDataV1 } from '../cssLanguageTypes';

export const cssData : CSSDataV1 = {
	"version": 1,
	"properties": [
		{
			name: "additive-symbols",
			browsers: [
				"FF33"
			],
			"syntax": "[ <integer> && <symbol> ]#",
			"description": "@counter-style descriptor. Specifies the symbols used by the marker-construction algorithm specified by the system descriptor. Needs to be specified if the counter system is 'additive'.",
			"restrictions": [
				"integer",
				"string",
				"image",
				"identifier"
			]
		},
		{
			name: "align-content",
			values: [
				{
					name: "center",
					"description": "Lines are packed toward the center of the flex container."
				},
				{
					name: "flex-end",
					"description": "Lines are packed toward the end of the flex container."
				},
				{
					name: "flex-start",
					"description": "Lines are packed toward the start of the flex container."
				},
				{
					name: "space-around",
					"description": "Lines are evenly distributed in the flex container, with half-size spaces on either end."
				},
				{
					name: "space-between",
					"description": "Lines are evenly distributed in the flex container."
				},
				{
					name: "stretch",
					"description": "Lines stretch to take up the remaining space."
				}
			],
			"syntax": "normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>",
			"description": "Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "align-items",
			values: [
				{
					name: "baseline",
					"description": "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
				},
				{
					name: "center",
					"description": "The flex item’s margin box is centered in the cross axis within the line."
				},
				{
					name: "flex-end",
					"description": "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
				},
				{
					name: "flex-start",
					"description": "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
				},
				{
					name: "stretch",
					"description": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
				}
			],
			"syntax": "normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]",
			"description": "Aligns flex items along the cross axis of the current line of the flex container.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "justify-items",
			values: [
				{
					name: "auto"
				},
				{
					name: "normal"
				},
				{
					name: "end"
				},
				{
					name: "start"
				},
				{
					name: "flex-end",
					"description": "\"Flex items are packed toward the end of the line.\""
				},
				{
					name: "flex-start",
					"description": "\"Flex items are packed toward the start of the line.\""
				},
				{
					name: "self-end"
				},
				{
					name: "self-start"
				},
				{
					name: "center",
					"description": "The items are packed flush to each other toward the center of the of the alignment container."
				},
				{
					name: "left"
				},
				{
					name: "right"
				},
				{
					name: "baseline"
				},
				{
					name: "first baseline"
				},
				{
					name: "last baseline"
				},
				{
					name: "stretch",
					"description": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
				},
				{
					name: "save"
				},
				{
					name: "unsave"
				},
				{
					name: "legacy"
				}
			],
			"syntax": "normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]",
			"description": "Defines the default justify-self for all items of the box, giving them the default way of justifying each box along the appropriate axis",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "justify-self",
			browsers: [
				"E16",
				"FF45",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "auto"
				},
				{
					name: "normal"
				},
				{
					name: "end"
				},
				{
					name: "start"
				},
				{
					name: "flex-end",
					"description": "\"Flex items are packed toward the end of the line.\""
				},
				{
					name: "flex-start",
					"description": "\"Flex items are packed toward the start of the line.\""
				},
				{
					name: "self-end"
				},
				{
					name: "self-start"
				},
				{
					name: "center",
					"description": "The items are packed flush to each other toward the center of the of the alignment container."
				},
				{
					name: "left"
				},
				{
					name: "right"
				},
				{
					name: "baseline"
				},
				{
					name: "first baseline"
				},
				{
					name: "last baseline"
				},
				{
					name: "stretch",
					"description": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
				},
				{
					name: "save"
				},
				{
					name: "unsave"
				}
			],
			"syntax": "auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]",
			"description": "Defines the way of justifying a box inside its container along the appropriate axis.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "align-self",
			values: [
				{
					name: "auto",
					"description": "Computes to the value of 'align-items' on the element’s parent, or 'stretch' if the element has no parent. On absolutely positioned elements, it computes to itself."
				},
				{
					name: "baseline",
					"description": "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
				},
				{
					name: "center",
					"description": "The flex item’s margin box is centered in the cross axis within the line."
				},
				{
					name: "flex-end",
					"description": "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
				},
				{
					name: "flex-start",
					"description": "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
				},
				{
					name: "stretch",
					"description": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
				}
			],
			"syntax": "auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>",
			"description": "Allows the default alignment along the cross axis to be overridden for individual flex items.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "all",
			browsers: [
				"FF27",
				"S9.1",
				"C37",
				"O24"
			],
			values: [],
			"syntax": "initial | inherit | unset | revert",
			"description": "Shorthand that resets all properties except 'direction' and 'unicode-bidi'.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "alt",
			browsers: [
				"S9"
			],
			values: [],
			"description": "Provides alternative text for assistive technology to replace the generated content of a ::before or ::after element.",
			"restrictions": [
				"string",
				"enum"
			]
		},
		{
			name: "animation",
			values: [
				{
					name: "alternate"
				},
				{
					name: "alternate-reverse"
				},
				{
					name: "backwards"
				},
				{
					name: "both",
					"description": "Both forwards and backwards fill modes are applied."
				},
				{
					name: "forwards"
				},
				{
					name: "infinite",
					"description": "Causes the animation to repeat forever."
				},
				{
					name: "none",
					"description": "No animation is performed"
				},
				{
					name: "normal",
					"description": "Normal playback."
				},
				{
					name: "reverse",
					"description": "All iterations of the animation are played in the reverse direction from the way they were specified."
				}
			],
			"syntax": "<single-animation>#",
			"description": "Shorthand property combines six of the animation properties into a single property.",
			"restrictions": [
				"time",
				"timing-function",
				"enum",
				"identifier",
				"number"
			]
		},
		{
			name: "animation-delay",
			"syntax": "<time>#",
			"description": "Defines when the animation will start.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "animation-direction",
			values: [
				{
					name: "alternate"
				},
				{
					name: "alternate-reverse"
				},
				{
					name: "normal",
					"description": "Normal playback."
				},
				{
					name: "reverse",
					"description": "All iterations of the animation are played in the reverse direction from the way they were specified."
				}
			],
			"syntax": "<single-animation-direction>#",
			"description": "Defines whether or not the animation should play in reverse on alternate cycles.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "animation-duration",
			"syntax": "<time>#",
			"description": "Defines the length of time that an animation takes to complete one cycle.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "animation-fill-mode",
			values: [
				{
					name: "backwards"
				},
				{
					name: "both",
					"description": "Both forwards and backwards fill modes are applied."
				},
				{
					name: "forwards"
				},
				{
					name: "none",
					"description": "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
				}
			],
			"syntax": "<single-animation-fill-mode>#",
			"description": "Defines what values are applied by the animation outside the time it is executing.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "animation-iteration-count",
			values: [
				{
					name: "infinite",
					"description": "Causes the animation to repeat forever."
				}
			],
			"syntax": "<single-animation-iteration-count>#",
			"description": "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
			"restrictions": [
				"number",
				"enum"
			]
		},
		{
			name: "animation-name",
			values: [
				{
					name: "none",
					"description": "No animation is performed"
				}
			],
			"syntax": "[ none | <keyframes-name> ]#",
			"description": "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
			"restrictions": [
				"identifier",
				"enum"
			]
		},
		{
			name: "animation-play-state",
			values: [
				{
					name: "paused"
				},
				{
					name: "running"
				}
			],
			"syntax": "<single-animation-play-state>#",
			"description": "Defines whether the animation is running or paused.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "animation-timing-function",
			"syntax": "<single-timing-function>#",
			"description": "Describes how the animation will progress over one cycle of its duration.",
			"restrictions": [
				"timing-function"
			]
		},
		{
			name: "backface-visibility",
			values: [
				{
					name: "hidden",
					"description": "Back side is hidden."
				},
				{
					name: "visible",
					"description": "Back side is visible."
				}
			],
			"syntax": "visible | hidden",
			"description": "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "background",
			values: [
				{
					name: "fixed",
					"description": "The background is fixed with regard to the viewport. In paged media where there is no viewport, a 'fixed' background is fixed with respect to the page box and therefore replicated on every page."
				},
				{
					name: "local",
					"description": "The background is fixed with regard to the element's contents: if the element has a scrolling mechanism, the background scrolls with the element's contents."
				},
				{
					name: "none",
					"description": "A value of 'none' counts as an image layer but draws nothing."
				},
				{
					name: "scroll",
					"description": "The background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element's border.)"
				}
			],
			"syntax": "[ <bg-layer> , ]* <final-bg-layer>",
			"description": "Shorthand property for setting most background properties at the same place in the style sheet.",
			"restrictions": [
				"enum",
				"image",
				"color",
				"position",
				"length",
				"repeat",
				"percentage",
				"box"
			]
		},
		{
			name: "background-attachment",
			values: [
				{
					name: "fixed",
					"description": "The background is fixed with regard to the viewport. In paged media where there is no viewport, a 'fixed' background is fixed with respect to the page box and therefore replicated on every page."
				},
				{
					name: "local",
					"description": "The background is fixed with regard to the element’s contents: if the element has a scrolling mechanism, the background scrolls with the element’s contents."
				},
				{
					name: "scroll",
					"description": "The background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element’s border.)"
				}
			],
			"syntax": "<attachment>#",
			"description": "Specifies whether the background images are fixed with regard to the viewport ('fixed') or scroll along with the element ('scroll') or its contents ('local').",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "background-blend-mode",
			browsers: [
				"FF30",
				"S",
				"C35",
				"O22"
			],
			values: [
				{
					name: "normal",
					"description": "Default attribute which specifies no blending"
				},
				{
					name: "multiply"
				},
				{
					name: "screen"
				},
				{
					name: "overlay"
				},
				{
					name: "darken"
				},
				{
					name: "lighten"
				},
				{
					name: "color-dodge"
				},
				{
					name: "color-burn"
				},
				{
					name: "hard-light"
				},
				{
					name: "soft-light"
				},
				{
					name: "difference"
				},
				{
					name: "exclusion"
				},
				{
					name: "hue",
					browsers: [
						"FF30",
						"S",
						"C35",
						"O22"
					]
				},
				{
					name: "saturation",
					browsers: [
						"FF30",
						"S",
						"C35",
						"O22"
					]
				},
				{
					name: "color",
					browsers: [
						"FF30",
						"S",
						"C35",
						"O22"
					]
				},
				{
					name: "luminosity",
					browsers: [
						"FF30",
						"S",
						"C35",
						"O22"
					]
				}
			],
			"syntax": "<blend-mode>#",
			"description": "Defines the blending mode of each background layer.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "background-clip",
			"syntax": "<box>#",
			"description": "Determines the background painting area.",
			"restrictions": [
				"box"
			]
		},
		{
			name: "background-color",
			"syntax": "<color>",
			"description": "Sets the background color of an element.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "background-image",
			values: [
				{
					name: "none",
					"description": "Counts as an image layer but draws nothing."
				}
			],
			"syntax": "<bg-image>#",
			"description": "Sets the background image(s) of an element.",
			"restrictions": [
				"image",
				"enum"
			]
		},
		{
			name: "background-origin",
			"syntax": "<box>#",
			"description": "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
			"restrictions": [
				"box"
			]
		},
		{
			name: "background-position",
			"syntax": "<bg-position>#",
			"description": "Specifies the initial position of the background image(s) (after any resizing) within their corresponding background positioning area.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			name: "background-position-x",
			values: [
				{
					name: "center",
					"description": "Equivalent to '50%' ('left 50%') for the horizontal position if the horizontal position is not otherwise specified, or '50%' ('top 50%') for the vertical position if it is."
				},
				{
					name: "left",
					"description": "Equivalent to '0%' for the horizontal position if one or two values are given, otherwise specifies the left edge as the origin for the next offset."
				},
				{
					name: "right",
					"description": "Equivalent to '100%' for the horizontal position if one or two values are given, otherwise specifies the right edge as the origin for the next offset."
				}
			],
			"status": "experimental",
			"syntax": "[ center | [ left | right | x-start | x-end ]? <length-percentage>? ]#",
			"description": "If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "background-position-y",
			values: [
				{
					name: "bottom",
					"description": "Equivalent to '100%' for the vertical position if one or two values are given, otherwise specifies the bottom edge as the origin for the next offset."
				},
				{
					name: "center",
					"description": "Equivalent to '50%' ('left 50%') for the horizontal position if the horizontal position is not otherwise specified, or '50%' ('top 50%') for the vertical position if it is."
				},
				{
					name: "top",
					"description": "Equivalent to '0%' for the vertical position if one or two values are given, otherwise specifies the top edge as the origin for the next offset."
				}
			],
			"status": "experimental",
			"syntax": "[ center | [ top | bottom | y-start | y-end ]? <length-percentage>? ]#",
			"description": "If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "background-repeat",
			values: [],
			"syntax": "<repeat-style>#",
			"description": "Specifies how background images are tiled after they have been sized and positioned.",
			"restrictions": [
				"repeat"
			]
		},
		{
			name: "background-size",
			values: [
				{
					name: "auto",
					"description": "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
				},
				{
					name: "contain",
					"description": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
				},
				{
					name: "cover",
					"description": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
				}
			],
			"syntax": "<bg-size>#",
			"description": "Specifies the size of the background images.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "behavior",
			browsers: [
				"IE6"
			],
			"description": "IE only. Used to extend behaviors of the browser.",
			"restrictions": [
				"url"
			]
		},
		{
			name: "block-size",
			browsers: [
				"FF41",
				"C57",
				"O44"
			],
			values: [
				{
					name: "auto",
					"description": "Depends on the values of other properties."
				}
			],
			"syntax": "<'width'>",
			"description": "Logical 'width'. Mapping depends on the element’s 'writing-mode'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "border",
			"syntax": "<line-width> || <line-style> || <color>",
			"description": "Shorthand property for setting border width, style, and color.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "border-block-end",
			browsers: [
				"FF41"
			],
			"syntax": "<'border-top-width'> || <'border-top-style'> || <'color'>",
			"description": "Logical 'border-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "border-block-start",
			browsers: [
				"FF41"
			],
			"syntax": "<'border-top-width'> || <'border-top-style'> || <'color'>",
			"description": "Logical 'border-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "border-block-end-color",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-color'>",
			"description": "Logical 'border-bottom-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "border-block-start-color",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-color'>",
			"description": "Logical 'border-top-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "border-block-end-style",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-style'>",
			"description": "Logical 'border-bottom-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "border-block-start-style",
			browsers: [
				"FF41",
				"O56"
			],
			"syntax": "<'border-top-style'>",
			"description": "Logical 'border-top-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "border-block-end-width",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'>",
			"description": "Logical 'border-bottom-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "border-block-start-width",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'>",
			"description": "Logical 'border-top-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "border-bottom",
			"syntax": "<line-width> || <line-style> || <color>",
			"description": "Shorthand property for setting border width, style and color.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "border-bottom-color",
			"syntax": "<'border-top-color'>",
			"description": "Sets the color of the bottom border.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "border-bottom-left-radius",
			"syntax": "<length-percentage>{1,2}",
			"description": "Defines the radii of the bottom left outer border edge.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "border-bottom-right-radius",
			"syntax": "<length-percentage>{1,2}",
			"description": "Defines the radii of the bottom right outer border edge.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "border-bottom-style",
			"syntax": "<line-style>",
			"description": "Sets the style of the bottom border.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "border-bottom-width",
			"syntax": "<line-width>",
			"description": "Sets the thickness of the bottom border.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "border-collapse",
			values: [
				{
					name: "collapse",
					"description": "Selects the collapsing borders model."
				},
				{
					name: "separate",
					"description": "Selects the separated borders border model."
				}
			],
			"syntax": "collapse | separate",
			"description": "Selects a table's border model.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "border-color",
			values: [],
			"syntax": "<color>{1,4}",
			"description": "The color of the border around all four edges of an element.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "border-image",
			values: [
				{
					name: "auto",
					"description": "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
				},
				{
					name: "fill",
					"description": "Causes the middle part of the border-image to be preserved."
				},
				{
					name: "none",
					"description": "Use the border styles."
				},
				{
					name: "repeat"
				},
				{
					name: "round",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
				},
				{
					name: "space",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
				},
				{
					name: "stretch",
					"description": "The image is stretched to fill the area."
				},
				{
					name: "url()"
				}
			],
			"syntax": "<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>",
			"description": "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
			"restrictions": [
				"length",
				"percentage",
				"number",
				"url",
				"enum"
			]
		},
		{
			name: "border-image-outset",
			"syntax": "[ <length> | <number> ]{1,4}",
			"description": "The values specify the amount by which the border image area extends beyond the border box on the top, right, bottom, and left sides respectively. If the fourth value is absent, it is the same as the second. If the third one is also absent, it is the same as the first. If the second one is also absent, it is the same as the first. Numbers represent multiples of the corresponding border-width.",
			"restrictions": [
				"length",
				"number"
			]
		},
		{
			name: "border-image-repeat",
			values: [
				{
					name: "repeat"
				},
				{
					name: "round",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
				},
				{
					name: "space",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
				},
				{
					name: "stretch",
					"description": "The image is stretched to fill the area."
				}
			],
			"syntax": "[ stretch | repeat | round | space ]{1,2}",
			"description": "Specifies how the images for the sides and the middle part of the border image are scaled and tiled. If the second keyword is absent, it is assumed to be the same as the first.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "border-image-slice",
			values: [
				{
					name: "fill",
					"description": "Causes the middle part of the border-image to be preserved."
				}
			],
			"syntax": "<number-percentage>{1,4} && fill?",
			"description": "Specifies inward offsets from the top, right, bottom, and left edges of the image, dividing it into nine regions: four corners, four edges and a middle.",
			"restrictions": [
				"number",
				"percentage"
			]
		},
		{
			name: "border-image-source",
			values: [
				{
					name: "none",
					"description": "Use the border styles."
				}
			],
			"syntax": "none | <image>",
			"description": "Specifies an image to use instead of the border styles given by the 'border-style' properties and as an additional background layer for the element. If the value is 'none' or if the image cannot be displayed, the border styles will be used.",
			"restrictions": [
				"image"
			]
		},
		{
			name: "border-image-width",
			values: [
				{
					name: "auto",
					"description": "The border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
				}
			],
			"syntax": "[ <length-percentage> | <number> | auto ]{1,4}",
			"description": "The four values of 'border-image-width' specify offsets that are used to divide the border image area into nine parts. They represent inward distances from the top, right, bottom, and left sides of the area, respectively.",
			"restrictions": [
				"length",
				"percentage",
				"number"
			]
		},
		{
			name: "border-inline-end",
			browsers: [
				"FF41"
			],
			"syntax": "<'border-top-width'> || <'border-top-style'> || <'color'>",
			"description": "Logical 'border-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "border-inline-start",
			browsers: [
				"FF41"
			],
			"syntax": "<'border-top-width'> || <'border-top-style'> || <'color'>",
			"description": "Logical 'border-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "border-inline-end-color",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-color'>",
			"description": "Logical 'border-right-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "border-inline-start-color",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-color'>",
			"description": "Logical 'border-left-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "border-inline-end-style",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-style'>",
			"description": "Logical 'border-right-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "border-inline-start-style",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-style'>",
			"description": "Logical 'border-left-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "border-inline-end-width",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'>",
			"description": "Logical 'border-right-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "border-inline-start-width",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'border-top-width'>",
			"description": "Logical 'border-left-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "border-left",
			"syntax": "<line-width> || <line-style> || <color>",
			"description": "Shorthand property for setting border width, style and color",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "border-left-color",
			"syntax": "<color>",
			"description": "Sets the color of the left border.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "border-left-style",
			"syntax": "<line-style>",
			"description": "Sets the style of the left border.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "border-left-width",
			"syntax": "<line-width>",
			"description": "Sets the thickness of the left border.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "border-radius",
			"syntax": "<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?",
			"description": "Defines the radii of the outer border edge.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "border-right",
			"syntax": "<line-width> || <line-style> || <color>",
			"description": "Shorthand property for setting border width, style and color",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "border-right-color",
			"syntax": "<color>",
			"description": "Sets the color of the right border.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "border-right-style",
			"syntax": "<line-style>",
			"description": "Sets the style of the right border.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "border-right-width",
			"syntax": "<line-width>",
			"description": "Sets the thickness of the right border.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "border-spacing",
			"syntax": "<length> <length>?",
			"description": "The lengths specify the distance that separates adjoining cell borders. If one length is specified, it gives both the horizontal and vertical spacing. If two are specified, the first gives the horizontal spacing and the second the vertical spacing. Lengths may not be negative.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "border-style",
			values: [],
			"syntax": "<line-style>{1,4}",
			"description": "The style of the border around edges of an element.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "border-top",
			"syntax": "<line-width> || <line-style> || <color>",
			"description": "Shorthand property for setting border width, style and color",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "border-top-color",
			"syntax": "<color>",
			"description": "Sets the color of the top border.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "border-top-left-radius",
			"syntax": "<length-percentage>{1,2}",
			"description": "Defines the radii of the top left outer border edge.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "border-top-right-radius",
			"syntax": "<length-percentage>{1,2}",
			"description": "Defines the radii of the top right outer border edge.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "border-top-style",
			"syntax": "<line-style>",
			"description": "Sets the style of the top border.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "border-top-width",
			"syntax": "<line-width>",
			"description": "Sets the thickness of the top border.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "border-width",
			values: [],
			"syntax": "<line-width>{1,4}",
			"description": "Shorthand that sets the four 'border-*-width' properties. If it has four values, they set top, right, bottom and left in that order. If left is missing, it is the same as right; if bottom is missing, it is the same as top; if right is missing, it is the same as top.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "bottom",
			values: [
				{
					name: "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"description": "Specifies how far an absolutely positioned box's bottom margin edge is offset above the bottom edge of the box's 'containing block'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "box-decoration-break",
			browsers: [
				"FF32",
				"S6.1",
				"C22",
				"O15"
			],
			values: [
				{
					name: "clone"
				},
				{
					name: "slice"
				}
			],
			"syntax": "slice | clone",
			"description": "Specifies whether individual boxes are treated as broken pieces of one continuous box, or whether each box is individually wrapped with the border and padding.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "box-shadow",
			values: [
				{
					name: "inset"
				},
				{
					name: "none",
					"description": "No shadow."
				}
			],
			"syntax": "none | <shadow>#",
			"description": "Attaches one or more drop-shadows to the box. The property is a comma-separated list of shadows, each specified by 2-4 length values, an optional color, and an optional 'inset' keyword. Omitted lengths are 0; omitted colors are a user agent chosen color.",
			"restrictions": [
				"length",
				"color",
				"enum"
			]
		},
		{
			name: "box-sizing",
			values: [
				{
					name: "border-box"
				},
				{
					name: "content-box"
				}
			],
			"syntax": "content-box | border-box",
			"description": "Specifies the behavior of the 'width' and 'height' properties.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "break-after",
			values: [
				{
					name: "always",
					"description": "Always force a page break before/after the generated box."
				},
				{
					name: "auto",
					"description": "Neither force nor forbid a page/column break before/after the principal box."
				},
				{
					name: "avoid",
					"description": "Avoid a break before/after the principal box."
				},
				{
					name: "avoid-column",
					"description": "Avoid a column break before/after the principal box."
				},
				{
					name: "avoid-page",
					"description": "Avoid a page break before/after the principal box."
				},
				{
					name: "column",
					"description": "Always force a column break before/after the principal box."
				},
				{
					name: "left",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
				},
				{
					name: "page",
					"description": "Always force a page break before/after the principal box."
				},
				{
					name: "right",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
				}
			],
			"syntax": "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
			"description": "Describes the page/column/region break behavior after the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "break-before",
			values: [
				{
					name: "always",
					"description": "Always force a page break before/after the generated box."
				},
				{
					name: "auto",
					"description": "Neither force nor forbid a page/column break before/after the principal box."
				},
				{
					name: "avoid",
					"description": "Avoid a break before/after the principal box."
				},
				{
					name: "avoid-column",
					"description": "Avoid a column break before/after the principal box."
				},
				{
					name: "avoid-page",
					"description": "Avoid a page break before/after the principal box."
				},
				{
					name: "column",
					"description": "Always force a column break before/after the principal box."
				},
				{
					name: "left",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
				},
				{
					name: "page",
					"description": "Always force a page break before/after the principal box."
				},
				{
					name: "right",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
				}
			],
			"syntax": "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
			"description": "Describes the page/column/region break behavior before the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "break-inside",
			values: [
				{
					name: "auto",
					"description": "Impose no additional breaking constraints within the box."
				},
				{
					name: "avoid",
					"description": "Avoid breaks within the box."
				},
				{
					name: "avoid-column",
					"description": "Avoid a column break within the box."
				},
				{
					name: "avoid-page",
					"description": "Avoid a page break within the box."
				}
			],
			"syntax": "auto | avoid | avoid-page | avoid-column | avoid-region",
			"description": "Describes the page/column/region break behavior inside the principal box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "caption-side",
			values: [
				{
					name: "bottom",
					"description": "Positions the caption box below the table box."
				},
				{
					name: "top",
					"description": "Positions the caption box above the table box."
				}
			],
			"syntax": "top | bottom | block-start | block-end | inline-start | inline-end",
			"description": "Specifies the position of the caption box with respect to the table box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "caret-color",
			browsers: [
				"FF53",
				"S11.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "auto",
					"description": "The user agent selects an appropriate color for the caret. This is generally currentcolor, but the user agent may choose a different color to ensure good visibility and contrast with the surrounding content, taking into account the value of currentcolor, the background, shadows, and other factors."
				}
			],
			"syntax": "auto | <color>",
			"description": "Controls the color of the text insertion indicator.",
			"restrictions": [
				"color",
				"enum"
			]
		},
		{
			name: "clear",
			values: [
				{
					name: "both",
					"description": "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any right-floating and left-floating boxes that resulted from elements earlier in the source document."
				},
				{
					name: "left",
					"description": "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any left-floating boxes that resulted from elements earlier in the source document."
				},
				{
					name: "none",
					"description": "No constraint on the box's position with respect to floats."
				},
				{
					name: "right",
					"description": "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any right-floating boxes that resulted from elements earlier in the source document."
				}
			],
			"syntax": "none | left | right | both | inline-start | inline-end",
			"description": "Indicates which sides of an element's box(es) may not be adjacent to an earlier floating box. The 'clear' property does not consider floats inside the element itself or in other block formatting contexts.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "clip",
			values: [
				{
					name: "auto",
					"description": "The element does not clip."
				},
				{
					name: "rect()"
				}
			],
			"syntax": "<shape> | auto",
			"description": "Deprecated. Use the 'clip-path' property when support allows. Defines the visible portion of an element’s box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "clip-path",
			browsers: [
				"E15",
				"FF3.5",
				"C55",
				"IE",
				"O42"
			],
			values: [
				{
					name: "none",
					"description": "No clipping path gets created."
				},
				{
					name: "url()",
					"description": "References a <clipPath> element to create a clipping path."
				}
			],
			"syntax": "<clip-source> | [ <basic-shape> || <geometry-box> ] | none",
			"description": "Specifies a clipping path where everything inside the path is visible and everything outside is clipped out.",
			"restrictions": [
				"url",
				"shape",
				"geometry-box",
				"enum"
			]
		},
		{
			name: "clip-rule",
			browsers: [
				"E",
				"C5",
				"FF3",
				"IE10",
				"O9",
				"S6"
			],
			values: [
				{
					name: "evenodd"
				},
				{
					name: "nonzero"
				}
			],
			"description": "Indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "color",
			"syntax": "<color>",
			"description": "Color of an element's text",
			"restrictions": [
				"color"
			]
		},
		{
			name: "color-interpolation-filters",
			browsers: [
				"E",
				"C5",
				"FF3",
				"IE10",
				"O9",
				"S6"
			],
			values: [
				{
					name: "auto",
					"description": "Color operations are not required to occur in a particular color space."
				},
				{
					name: "linearRGB"
				},
				{
					name: "sRGB"
				}
			],
			"description": "Specifies the color space for imaging operations performed via filter effects.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "column-count",
			values: [
				{
					name: "auto",
					"description": "Determines the number of columns by the 'column-width' property and the element width."
				}
			],
			"syntax": "<integer> | auto",
			"description": "Describes the optimal number of columns into which the content of the element will be flowed.",
			"restrictions": [
				"integer",
				"enum"
			]
		},
		{
			name: "column-fill",
			browsers: [
				"E12",
				"FF52",
				"C"
			],
			values: [
				{
					name: "auto",
					"description": "Fills columns sequentially."
				},
				{
					name: "balance"
				}
			],
			"syntax": "auto | balance | balance-all",
			"description": "In continuous media, this property will only be consulted if the length of columns has been constrained. Otherwise, columns will automatically be balanced.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "column-gap",
			values: [
				{
					name: "normal",
					"description": "User agent specific and typically equivalent to 1em."
				}
			],
			"syntax": "normal | <length-percentage>",
			"description": "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
			"restrictions": [
				"length",
				"enum"
			]
		},
		{
			name: "column-rule",
			"syntax": "<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>",
			"description": "Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "column-rule-color",
			"syntax": "<color>",
			"description": "Sets the color of the column rule",
			"restrictions": [
				"color"
			]
		},
		{
			name: "column-rule-style",
			"syntax": "<'border-style'>",
			"description": "Sets the style of the rule between columns of an element.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "column-rule-width",
			"syntax": "<'border-width'>",
			"description": "Sets the width of the rule between columns. Negative values are not allowed.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "columns",
			values: [
				{
					name: "auto",
					"description": "The width depends on the values of other properties."
				}
			],
			"syntax": "<'column-width'> || <'column-count'>",
			"description": "A shorthand property which sets both 'column-width' and 'column-count'.",
			"restrictions": [
				"length",
				"integer",
				"enum"
			]
		},
		{
			name: "column-span",
			values: [
				{
					name: "all",
					"description": "The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appear."
				},
				{
					name: "none",
					"description": "The element does not span multiple columns."
				}
			],
			"syntax": "none | all",
			"description": "Describes the page/column break behavior after the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "column-width",
			values: [
				{
					name: "auto",
					"description": "The width depends on the values of other properties."
				}
			],
			"syntax": "<length> | auto",
			"description": "Describes the width of columns in multicol elements.",
			"restrictions": [
				"length",
				"enum"
			]
		},
		{
			name: "contain",
			browsers: [
				"FF41",
				"C52",
				"O40"
			],
			values: [
				{
					name: "none",
					"description": "Indicates that the property has no effect."
				},
				{
					name: "strict",
					"description": "Turns on all forms of containment for the element."
				},
				{
					name: "content",
					"description": "All containment rules except size are applied to the element."
				},
				{
					name: "size"
				},
				{
					name: "layout"
				},
				{
					name: "style",
					"description": "Turns on style containment for the element."
				},
				{
					name: "paint"
				}
			],
			"status": "experimental",
			"syntax": "none | strict | content | [ size || layout || style || paint ]",
			"description": "Indicates that an element and its contents are, as much as possible, independent of the rest of the document tree.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "content",
			values: [
				{
					name: "attr()"
				},
				{
					name: "counter(name)"
				},
				{
					name: "icon",
					"description": "The (pseudo-)element is replaced in its entirety by the resource referenced by its 'icon' property, and treated as a replaced element."
				},
				{
					name: "none",
					"description": "On elements, this inhibits the children of the element from being rendered as children of this element, as if the element was empty. On pseudo-elements it causes the pseudo-element to have no content."
				},
				{
					name: "normal",
					"description": "See http://www.w3.org/TR/css3-content/#content for computation rules."
				},
				{
					name: "url()"
				}
			],
			"syntax": "normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?",
			"description": "Determines which page-based occurrence of a given element is applied to a counter or string value.",
			"restrictions": [
				"string",
				"url"
			]
		},
		{
			name: "counter-increment",
			values: [
				{
					name: "none",
					"description": "This element does not alter the value of any counters."
				}
			],
			"syntax": "[ <custom-ident> <integer>? ]+ | none",
			"description": "Manipulate the value of existing counters.",
			"restrictions": [
				"identifier",
				"integer"
			]
		},
		{
			name: "counter-reset",
			values: [
				{
					name: "none",
					"description": "The counter is not modified."
				}
			],
			"syntax": "[ <custom-ident> <integer>? ]+ | none",
			"description": "Property accepts one or more names of counters (identifiers), each one optionally followed by an integer. The integer gives the value that the counter is set to on each occurrence of the element.",
			"restrictions": [
				"identifier",
				"integer"
			]
		},
		{
			name: "cursor",
			values: [
				{
					name: "alias"
				},
				{
					name: "all-scroll"
				},
				{
					name: "auto",
					"description": "The UA determines the cursor to display based on the current context."
				},
				{
					name: "cell"
				},
				{
					name: "col-resize"
				},
				{
					name: "context-menu"
				},
				{
					name: "copy"
				},
				{
					name: "crosshair"
				},
				{
					name: "default",
					"description": "The platform-dependent default cursor. Often rendered as an arrow."
				},
				{
					name: "e-resize"
				},
				{
					name: "ew-resize"
				},
				{
					name: "grab"
				},
				{
					name: "grabbing"
				},
				{
					name: "help"
				},
				{
					name: "move"
				},
				{
					name: "-moz-grab"
				},
				{
					name: "-moz-grabbing"
				},
				{
					name: "-moz-zoom-in"
				},
				{
					name: "-moz-zoom-out"
				},
				{
					name: "ne-resize"
				},
				{
					name: "nesw-resize"
				},
				{
					name: "no-drop"
				},
				{
					name: "none",
					"description": "No cursor is rendered for the element."
				},
				{
					name: "not-allowed"
				},
				{
					name: "n-resize"
				},
				{
					name: "ns-resize"
				},
				{
					name: "nw-resize"
				},
				{
					name: "nwse-resize"
				},
				{
					name: "pointer"
				},
				{
					name: "progress"
				},
				{
					name: "row-resize"
				},
				{
					name: "se-resize"
				},
				{
					name: "s-resize"
				},
				{
					name: "sw-resize"
				},
				{
					name: "text",
					"description": "Indicates text that may be selected. Often rendered as a vertical I-beam."
				},
				{
					name: "vertical-text"
				},
				{
					name: "wait"
				},
				{
					name: "-webkit-grab"
				},
				{
					name: "-webkit-grabbing"
				},
				{
					name: "-webkit-zoom-in"
				},
				{
					name: "-webkit-zoom-out"
				},
				{
					name: "w-resize"
				},
				{
					name: "zoom-in"
				},
				{
					name: "zoom-out"
				}
			],
			"syntax": "[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]",
			"description": "Allows control over cursor appearance in an element",
			"restrictions": [
				"url",
				"number",
				"enum"
			]
		},
		{
			name: "direction",
			values: [
				{
					name: "ltr"
				},
				{
					name: "rtl"
				}
			],
			"syntax": "ltr | rtl",
			"description": "Specifies the inline base direction or directionality of any bidi paragraph, embedding, isolate, or override established by the box. Note: for HTML content use the 'dir' attribute and 'bdo' element rather than this property.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "display",
			values: [
				{
					name: "block"
				},
				{
					name: "contents",
					"description": "The element itself does not generate any boxes, but its children and pseudo-elements still generate boxes as normal."
				},
				{
					name: "flex"
				},
				{
					name: "flexbox"
				},
				{
					name: "flow-root"
				},
				{
					name: "grid"
				},
				{
					name: "inline",
					"description": "The element generates an inline-level box."
				},
				{
					name: "inline-block"
				},
				{
					name: "inline-flex"
				},
				{
					name: "inline-flexbox"
				},
				{
					name: "inline-table"
				},
				{
					name: "list-item"
				},
				{
					name: "-moz-box"
				},
				{
					name: "-moz-deck"
				},
				{
					name: "-moz-grid"
				},
				{
					name: "-moz-grid-group"
				},
				{
					name: "-moz-grid-line"
				},
				{
					name: "-moz-groupbox"
				},
				{
					name: "-moz-inline-box"
				},
				{
					name: "-moz-inline-grid"
				},
				{
					name: "-moz-inline-stack"
				},
				{
					name: "-moz-marker"
				},
				{
					name: "-moz-popup"
				},
				{
					name: "-moz-stack"
				},
				{
					name: "-ms-flexbox"
				},
				{
					name: "-ms-grid"
				},
				{
					name: "-ms-inline-flexbox"
				},
				{
					name: "-ms-inline-grid"
				},
				{
					name: "none",
					"description": "The element and its descendants generates no boxes."
				},
				{
					name: "ruby",
					"description": "The element generates a principal ruby container box, and establishes a ruby formatting context."
				},
				{
					name: "ruby-base"
				},
				{
					name: "ruby-base-container"
				},
				{
					name: "ruby-text"
				},
				{
					name: "ruby-text-container"
				},
				{
					name: "run-in"
				},
				{
					name: "table"
				},
				{
					name: "table-caption"
				},
				{
					name: "table-cell"
				},
				{
					name: "table-column"
				},
				{
					name: "table-column-group"
				},
				{
					name: "table-footer-group"
				},
				{
					name: "table-header-group"
				},
				{
					name: "table-row"
				},
				{
					name: "table-row-group"
				},
				{
					name: "-webkit-box"
				},
				{
					name: "-webkit-flex"
				},
				{
					name: "-webkit-inline-box"
				},
				{
					name: "-webkit-inline-flex"
				}
			],
			"syntax": "[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>",
			"description": "In combination with 'float' and 'position', determines the type of box or boxes that are generated for an element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "empty-cells",
			values: [
				{
					name: "hide"
				},
				{
					name: "-moz-show-background"
				},
				{
					name: "show"
				}
			],
			"syntax": "show | hide",
			"description": "In the separated borders model, this property controls the rendering of borders and backgrounds around cells that have no visible content.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "enable-background",
			values: [
				{
					name: "accumulate"
				},
				{
					name: "new"
				}
			],
			"description": "Deprecated. Use 'isolation' property instead when support allows. Specifies how the accumulation of the background image is managed.",
			"restrictions": [
				"integer",
				"length",
				"percentage",
				"enum"
			]
		},
		{
			name: "fallback",
			browsers: [
				"FF33"
			],
			"syntax": "<counter-style-name>",
			"description": "@counter-style descriptor. Specifies a fallback counter style to be used when the current counter style can’t create a representation for a given counter value.",
			"restrictions": [
				"identifier"
			]
		},
		{
			name: "fill",
			values: [
				{
					name: "url()",
					"description": "A URL reference to a paint server element, which is an element that defines a paint server: ‘hatch’, ‘linearGradient’, ‘mesh’, ‘pattern’, ‘radialGradient’ and ‘solidcolor’."
				},
				{
					name: "none",
					"description": "No paint is applied in this layer."
				}
			],
			"description": "Paints the interior of the given graphical element.",
			"restrictions": [
				"color",
				"enum",
				"url"
			]
		},
		{
			name: "fill-opacity",
			"description": "Specifies the opacity of the painting operation used to paint the interior the current object.",
			"restrictions": [
				"number(0-1)"
			]
		},
		{
			name: "fill-rule",
			values: [
				{
					name: "evenodd"
				},
				{
					name: "nonzero"
				}
			],
			"description": "Indicates the algorithm (or winding rule) which is to be used to determine what parts of the canvas are included inside the shape.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "filter",
			browsers: [
				"E12",
				"FF35",
				"S6",
				"C53",
				"O40"
			],
			values: [
				{
					name: "none",
					"description": "No filter effects are applied."
				},
				{
					name: "blur()"
				},
				{
					name: "brightness()"
				},
				{
					name: "contrast()"
				},
				{
					name: "drop-shadow()"
				},
				{
					name: "grayscale()"
				},
				{
					name: "hue-rotate()"
				},
				{
					name: "invert()"
				},
				{
					name: "opacity()"
				},
				{
					name: "saturate()"
				},
				{
					name: "sepia()"
				},
				{
					name: "url()",
					browsers: [
						"E12",
						"FF35",
						"S6",
						"C53",
						"O40"
					],
					"description": "A filter reference to a <filter> element."
				}
			],
			"syntax": "none | <filter-function-list>",
			"description": "Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.",
			"restrictions": [
				"enum",
				"url"
			]
		},
		{
			name: "flex",
			values: [
				{
					name: "auto",
					"description": "Retrieves the value of the main size property as the used 'flex-basis'."
				},
				{
					name: "content",
					"description": "Indicates automatic sizing, based on the flex item’s content."
				},
				{
					name: "none",
					"description": "Expands to '0 0 auto'."
				}
			],
			"syntax": "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
			"description": "Specifies the components of a flexible length: the flex grow factor and flex shrink factor, and the flex basis.",
			"restrictions": [
				"length",
				"number",
				"percentage"
			]
		},
		{
			name: "flex-basis",
			values: [
				{
					name: "auto",
					"description": "Retrieves the value of the main size property as the used 'flex-basis'."
				},
				{
					name: "content",
					"description": "Indicates automatic sizing, based on the flex item’s content."
				}
			],
			"syntax": "content | <'width'>",
			"description": "Sets the flex basis.",
			"restrictions": [
				"length",
				"number",
				"percentage"
			]
		},
		{
			name: "flex-direction",
			values: [
				{
					name: "column",
					"description": "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
				},
				{
					name: "column-reverse"
				},
				{
					name: "row",
					"description": "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
				},
				{
					name: "row-reverse"
				}
			],
			"syntax": "row | row-reverse | column | column-reverse",
			"description": "Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "flex-flow",
			values: [
				{
					name: "column",
					"description": "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
				},
				{
					name: "column-reverse"
				},
				{
					name: "nowrap",
					"description": "The flex container is single-line."
				},
				{
					name: "row",
					"description": "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
				},
				{
					name: "row-reverse"
				},
				{
					name: "wrap",
					"description": "The flexbox is multi-line."
				},
				{
					name: "wrap-reverse"
				}
			],
			"syntax": "<'flex-direction'> || <'flex-wrap'>",
			"description": "Specifies how flexbox items are placed in the flexbox.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "flex-grow",
			"syntax": "<number>",
			"description": "Sets the flex grow factor. Negative numbers are invalid.",
			"restrictions": [
				"number"
			]
		},
		{
			name: "flex-shrink",
			"syntax": "<number>",
			"description": "Sets the flex shrink factor. Negative numbers are invalid.",
			"restrictions": [
				"number"
			]
		},
		{
			name: "flex-wrap",
			values: [
				{
					name: "nowrap",
					"description": "The flex container is single-line."
				},
				{
					name: "wrap",
					"description": "The flexbox is multi-line."
				},
				{
					name: "wrap-reverse"
				}
			],
			"syntax": "nowrap | wrap | wrap-reverse",
			"description": "Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "float",
			values: [
				{
					name: "inline-end"
				},
				{
					name: "inline-start"
				},
				{
					name: "left",
					"description": "The element generates a block box that is floated to the left. Content flows on the right side of the box, starting at the top (subject to the 'clear' property)."
				},
				{
					name: "none",
					"description": "The box is not floated."
				},
				{
					name: "right",
					"description": "Similar to 'left', except the box is floated to the right, and content flows on the left side of the box, starting at the top."
				}
			],
			"syntax": "left | right | none | inline-start | inline-end",
			"description": "Specifies how a box should be floated. It may be set for any element, but only applies to elements that generate boxes that are not absolutely positioned.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "flood-color",
			browsers: [
				"E",
				"C5",
				"FF3",
				"IE10",
				"O9",
				"S6"
			],
			"description": "Indicates what color to use to flood the current filter primitive subregion.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "flood-opacity",
			browsers: [
				"E",
				"C5",
				"FF3",
				"IE10",
				"O9",
				"S6"
			],
			"description": "Indicates what opacity to use to flood the current filter primitive subregion.",
			"restrictions": [
				"number(0-1)",
				"percentage"
			]
		},
		{
			name: "font",
			values: [
				{
					name: "100"
				},
				{
					name: "200"
				},
				{
					name: "300"
				},
				{
					name: "400"
				},
				{
					name: "500"
				},
				{
					name: "600"
				},
				{
					name: "700"
				},
				{
					name: "800"
				},
				{
					name: "900"
				},
				{
					name: "bold"
				},
				{
					name: "bolder"
				},
				{
					name: "caption"
				},
				{
					name: "icon",
					"description": "The font used to label icons."
				},
				{
					name: "italic",
					"description": "Selects a font that is labeled 'italic', or, if that is not available, one labeled 'oblique'."
				},
				{
					name: "large"
				},
				{
					name: "larger"
				},
				{
					name: "lighter"
				},
				{
					name: "medium"
				},
				{
					name: "menu"
				},
				{
					name: "message-box"
				},
				{
					name: "normal",
					"description": "Specifies a face that is not labeled as a small-caps font."
				},
				{
					name: "oblique",
					"description": "Selects a font that is labeled 'oblique'."
				},
				{
					name: "small"
				},
				{
					name: "small-caps",
					"description": "Specifies a font that is labeled as a small-caps font. If a genuine small-caps font is not available, user agents should simulate a small-caps font."
				},
				{
					name: "small-caption"
				},
				{
					name: "smaller"
				},
				{
					name: "status-bar"
				},
				{
					name: "x-large"
				},
				{
					name: "x-small"
				},
				{
					name: "xx-large"
				},
				{
					name: "xx-small"
				}
			],
			"syntax": "[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar",
			"description": "Shorthand property for setting 'font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', and 'font-family', at the same place in the style sheet. The syntax of this property is based on a traditional typographical shorthand notation to set multiple properties related to fonts.",
			"restrictions": [
				"font"
			]
		},
		{
			name: "font-family",
			values: [
				{
					name: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
				},
				{
					name: "Arial, Helvetica, sans-serif"
				},
				{
					name: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
				},
				{
					name: "'Courier New', Courier, monospace"
				},
				{
					name: "cursive"
				},
				{
					name: "fantasy"
				},
				{
					name: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
				},
				{
					name: "Georgia, 'Times New Roman', Times, serif"
				},
				{
					name: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
				},
				{
					name: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
				},
				{
					name: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
				},
				{
					name: "monospace"
				},
				{
					name: "sans-serif"
				},
				{
					name: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
				},
				{
					name: "serif"
				},
				{
					name: "'Times New Roman', Times, serif"
				},
				{
					name: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
				},
				{
					name: "Verdana, Geneva, Tahoma, sans-serif"
				}
			],
			"syntax": "<family-name>",
			"description": "Specifies a prioritized list of font family names or generic family names. A user agent iterates through the list of family names until it matches an available font that contains a glyph for the character to be rendered.",
			"restrictions": [
				"font"
			]
		},
		{
			name: "font-feature-settings",
			values: [
				{
					name: "\"aalt\""
				},
				{
					name: "\"abvf\""
				},
				{
					name: "\"abvm\""
				},
				{
					name: "\"abvs\""
				},
				{
					name: "\"afrc\""
				},
				{
					name: "\"akhn\""
				},
				{
					name: "\"blwf\""
				},
				{
					name: "\"blwm\""
				},
				{
					name: "\"blws\""
				},
				{
					name: "\"calt\""
				},
				{
					name: "\"case\""
				},
				{
					name: "\"ccmp\""
				},
				{
					name: "\"cfar\""
				},
				{
					name: "\"cjct\""
				},
				{
					name: "\"clig\""
				},
				{
					name: "\"cpct\""
				},
				{
					name: "\"cpsp\""
				},
				{
					name: "\"cswh\""
				},
				{
					name: "\"curs\""
				},
				{
					name: "\"c2pc\""
				},
				{
					name: "\"c2cs\"",
					"description": "Small Capitals From Capitals. Applies only to bicameral scripts."
				},
				{
					name: "\"dist\""
				},
				{
					name: "\"dlig\"",
					"description": "Discretionary ligatures."
				},
				{
					name: "\"dnom\""
				},
				{
					name: "\"dtls\""
				},
				{
					name: "\"expt\""
				},
				{
					name: "\"falt\""
				},
				{
					name: "\"fin2\""
				},
				{
					name: "\"fin3\""
				},
				{
					name: "\"fina\""
				},
				{
					name: "\"flac\""
				},
				{
					name: "\"frac\""
				},
				{
					name: "\"fwid\""
				},
				{
					name: "\"half\""
				},
				{
					name: "\"haln\""
				},
				{
					name: "\"halt\""
				},
				{
					name: "\"hist\""
				},
				{
					name: "\"hkna\""
				},
				{
					name: "\"hlig\""
				},
				{
					name: "\"hngl\""
				},
				{
					name: "\"hojo\""
				},
				{
					name: "\"hwid\""
				},
				{
					name: "\"init\""
				},
				{
					name: "\"isol\""
				},
				{
					name: "\"ital\""
				},
				{
					name: "\"jalt\""
				},
				{
					name: "\"jp78\""
				},
				{
					name: "\"jp83\""
				},
				{
					name: "\"jp90\""
				},
				{
					name: "\"jp04\""
				},
				{
					name: "\"kern\"",
					"description": "Kerning."
				},
				{
					name: "\"lfbd\""
				},
				{
					name: "\"liga\"",
					"description": "Standard Ligatures."
				},
				{
					name: "\"ljmo\""
				},
				{
					name: "\"lnum\"",
					"description": "Lining Figures."
				},
				{
					name: "\"locl\""
				},
				{
					name: "\"ltra\""
				},
				{
					name: "\"ltrm\""
				},
				{
					name: "\"mark\""
				},
				{
					name: "\"med2\""
				},
				{
					name: "\"medi\""
				},
				{
					name: "\"mgrk\""
				},
				{
					name: "\"mkmk\""
				},
				{
					name: "\"nalt\""
				},
				{
					name: "\"nlck\""
				},
				{
					name: "\"nukt\""
				},
				{
					name: "\"numr\""
				},
				{
					name: "\"onum\"",
					"description": "Oldstyle Figures."
				},
				{
					name: "\"opbd\""
				},
				{
					name: "\"ordn\""
				},
				{
					name: "\"ornm\""
				},
				{
					name: "\"palt\""
				},
				{
					name: "\"pcap\""
				},
				{
					name: "\"pkna\""
				},
				{
					name: "\"pnum\""
				},
				{
					name: "\"pref\""
				},
				{
					name: "\"pres\""
				},
				{
					name: "\"pstf\""
				},
				{
					name: "\"psts\""
				},
				{
					name: "\"pwid\""
				},
				{
					name: "\"qwid\""
				},
				{
					name: "\"rand\""
				},
				{
					name: "\"rclt\""
				},
				{
					name: "\"rlig\""
				},
				{
					name: "\"rkrf\""
				},
				{
					name: "\"rphf\""
				},
				{
					name: "\"rtbd\""
				},
				{
					name: "\"rtla\""
				},
				{
					name: "\"rtlm\""
				},
				{
					name: "\"ruby\""
				},
				{
					name: "\"salt\""
				},
				{
					name: "\"sinf\""
				},
				{
					name: "\"size\""
				},
				{
					name: "\"smcp\"",
					"description": "Small Capitals. Applies only to bicameral scripts."
				},
				{
					name: "\"smpl\""
				},
				{
					name: "\"ssty\""
				},
				{
					name: "\"stch\""
				},
				{
					name: "\"subs\""
				},
				{
					name: "\"sups\""
				},
				{
					name: "\"swsh\"",
					"description": "Swash. Does not apply to ideographic scripts."
				},
				{
					name: "\"titl\""
				},
				{
					name: "\"tjmo\""
				},
				{
					name: "\"tnam\""
				},
				{
					name: "\"tnum\"",
					"description": "Tabular Figures."
				},
				{
					name: "\"trad\""
				},
				{
					name: "\"twid\""
				},
				{
					name: "\"unic\""
				},
				{
					name: "\"valt\""
				},
				{
					name: "\"vatu\""
				},
				{
					name: "\"vert\""
				},
				{
					name: "\"vhal\""
				},
				{
					name: "\"vjmo\""
				},
				{
					name: "\"vkna\""
				},
				{
					name: "\"vkrn\""
				},
				{
					name: "\"vpal\""
				},
				{
					name: "\"vrt2\""
				},
				{
					name: "\"zero\""
				},
				{
					name: "normal",
					"description": "No change in glyph substitution or positioning occurs."
				},
				{
					name: "off",
					"description": "Disable feature."
				},
				{
					name: "on",
					"description": "Enable feature."
				}
			],
			"syntax": "normal | <feature-tag-value>#",
			"description": "Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
			"restrictions": [
				"string",
				"integer"
			]
		},
		{
			name: "font-kerning",
			browsers: [
				"FF32",
				"S7",
				"C32"
			],
			values: [
				{
					name: "auto",
					"description": "Specifies that kerning is applied at the discretion of the user agent."
				},
				{
					name: "none",
					"description": "Specifies that kerning is not applied."
				},
				{
					name: "normal",
					"description": "Specifies that kerning is applied."
				}
			],
			"syntax": "auto | normal | none",
			"description": "Kerning is the contextual adjustment of inter-glyph spacing. This property controls metric kerning, kerning that utilizes adjustment data contained in the font.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "font-language-override",
			browsers: [
				"FF34"
			],
			values: [
				{
					name: "normal",
					"description": "Implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering."
				}
			],
			"syntax": "normal | <string>",
			"description": "The value of 'normal' implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering.",
			"restrictions": [
				"string"
			]
		},
		{
			name: "font-size",
			values: [
				{
					name: "large"
				},
				{
					name: "larger"
				},
				{
					name: "medium"
				},
				{
					name: "small"
				},
				{
					name: "smaller"
				},
				{
					name: "x-large"
				},
				{
					name: "x-small"
				},
				{
					name: "xx-large"
				},
				{
					name: "xx-small"
				}
			],
			"syntax": "<absolute-size> | <relative-size> | <length-percentage>",
			"description": "Indicates the desired height of glyphs from the font. For scalable fonts, the font-size is a scale factor applied to the EM unit of the font. (Note that certain glyphs may bleed outside their EM box.) For non-scalable fonts, the font-size is converted into absolute units and matched against the declared font-size of the font, using the same absolute coordinate space for both of the matched values.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "font-size-adjust",
			browsers: [
				"FF40",
				"C43",
				"O30"
			],
			values: [
				{
					name: "none",
					"description": "Do not preserve the font’s x-height."
				}
			],
			"syntax": "none | <number>",
			"description": "Preserves the readability of text when font fallback occurs by adjusting the font-size so that the x-height is the same irregardless of the font used.",
			"restrictions": [
				"number"
			]
		},
		{
			name: "font-stretch",
			values: [
				{
					name: "condensed"
				},
				{
					name: "expanded"
				},
				{
					name: "extra-condensed"
				},
				{
					name: "extra-expanded"
				},
				{
					name: "narrower"
				},
				{
					name: "normal"
				},
				{
					name: "semi-condensed"
				},
				{
					name: "semi-expanded"
				},
				{
					name: "ultra-condensed"
				},
				{
					name: "ultra-expanded"
				},
				{
					name: "wider"
				}
			],
			"syntax": "<font-stretch-absolute>{1,2}",
			"description": "Selects a normal, condensed, or expanded face from a font family.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "font-style",
			values: [
				{
					name: "italic",
					"description": "Selects a font that is labeled as an 'italic' face, or an 'oblique' face if one is not"
				},
				{
					name: "normal",
					"description": "Selects a face that is classified as 'normal'."
				},
				{
					name: "oblique",
					"description": "Selects a font that is labeled as an 'oblique' face, or an 'italic' face if one is not."
				}
			],
			"syntax": "normal | italic | oblique <angle>{0,2}",
			"description": "Allows italic or oblique faces to be selected. Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "font-synthesis",
			browsers: [
				"FF34",
				"S9"
			],
			values: [
				{
					name: "none",
					"description": "Disallow all synthetic faces."
				},
				{
					name: "style",
					"description": "Allow synthetic italic faces."
				},
				{
					name: "weight"
				}
			],
			"syntax": "none | [ weight || style ]",
			"description": "Controls whether user agents are allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "font-variant",
			values: [
				{
					name: "normal",
					"description": "Specifies a face that is not labeled as a small-caps font."
				},
				{
					name: "small-caps",
					"description": "Specifies a font that is labeled as a small-caps font. If a genuine small-caps font is not available, user agents should simulate a small-caps font."
				}
			],
			"syntax": "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic(<feature-value-name>) || historical-forms || styleset(<feature-value-name>#) || character-variant(<feature-value-name>#) || swash(<feature-value-name>) || ornaments(<feature-value-name>) || annotation(<feature-value-name>) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
			"description": "Specifies variant representations of the font",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "font-variant-alternates",
			browsers: [
				"FF34"
			],
			values: [
				{
					name: "annotation()"
				},
				{
					name: "character-variant()"
				},
				{
					name: "historical-forms"
				},
				{
					name: "normal",
					"description": "None of the features are enabled."
				},
				{
					name: "ornaments()"
				},
				{
					name: "styleset()"
				},
				{
					name: "stylistic()"
				},
				{
					name: "swash()"
				}
			],
			"syntax": "normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]",
			"description": "For any given character, fonts can provide a variety of alternate glyphs in addition to the default glyph for that character. This property provides control over the selection of these alternate glyphs.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "font-variant-caps",
			browsers: [
				"FF34",
				"C52",
				"O39"
			],
			values: [
				{
					name: "all-petite-caps"
				},
				{
					name: "all-small-caps"
				},
				{
					name: "normal",
					"description": "None of the features are enabled."
				},
				{
					name: "petite-caps"
				},
				{
					name: "small-caps",
					"description": "Enables display of small capitals. Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters."
				},
				{
					name: "titling-caps"
				},
				{
					name: "unicase"
				}
			],
			"syntax": "normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps",
			"description": "Specifies control over capitalized forms.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "font-variant-east-asian",
			browsers: [
				"FF34",
				"C63",
				"O50"
			],
			values: [
				{
					name: "full-width"
				},
				{
					name: "jis04"
				},
				{
					name: "jis78"
				},
				{
					name: "jis83"
				},
				{
					name: "jis90"
				},
				{
					name: "normal",
					"description": "None of the features are enabled."
				},
				{
					name: "proportional-width"
				},
				{
					name: "ruby",
					"description": "Enables display of ruby variant glyphs."
				},
				{
					name: "simplified"
				},
				{
					name: "traditional"
				}
			],
			"syntax": "normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
			"description": "Allows control of glyph substitute and positioning in East Asian text.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "font-variant-ligatures",
			browsers: [
				"FF34",
				"S9.1",
				"C34",
				"O21"
			],
			values: [
				{
					name: "additional-ligatures"
				},
				{
					name: "common-ligatures"
				},
				{
					name: "contextual",
					browsers: [
						"FF34",
						"S9.1",
						"C34",
						"O21"
					]
				},
				{
					name: "discretionary-ligatures"
				},
				{
					name: "historical-ligatures"
				},
				{
					name: "no-additional-ligatures"
				},
				{
					name: "no-common-ligatures"
				},
				{
					name: "no-contextual",
					browsers: [
						"FF34",
						"S9.1",
						"C34",
						"O21"
					]
				},
				{
					name: "no-discretionary-ligatures"
				},
				{
					name: "no-historical-ligatures"
				},
				{
					name: "none",
					browsers: [
						"FF34",
						"S9.1",
						"C34",
						"O21"
					],
					"description": "Disables all ligatures."
				},
				{
					name: "normal",
					"description": "Implies that the defaults set by the font are used."
				}
			],
			"syntax": "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]",
			"description": "Specifies control over which ligatures are enabled or disabled. A value of ‘normal’ implies that the defaults set by the font are used.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "font-variant-numeric",
			browsers: [
				"FF34",
				"S9.1",
				"C52",
				"O39"
			],
			values: [
				{
					name: "diagonal-fractions"
				},
				{
					name: "lining-nums"
				},
				{
					name: "normal",
					"description": "None of the features are enabled."
				},
				{
					name: "oldstyle-nums"
				},
				{
					name: "ordinal"
				},
				{
					name: "proportional-nums"
				},
				{
					name: "slashed-zero"
				},
				{
					name: "stacked-fractions"
				},
				{
					name: "tabular-nums"
				}
			],
			"syntax": "normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]",
			"description": "Specifies control over numerical forms.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "font-variant-position",
			browsers: [
				"FF34"
			],
			values: [
				{
					name: "normal",
					"description": "None of the features are enabled."
				},
				{
					name: "sub",
					"description": "Enables display of subscript variants (OpenType feature: subs)."
				},
				{
					name: "super",
					"description": "Enables display of superscript variants (OpenType feature: sups)."
				}
			],
			"syntax": "normal | sub | super",
			"description": "Specifies the vertical position",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "font-weight",
			values: [
				{
					name: "100"
				},
				{
					name: "200"
				},
				{
					name: "300"
				},
				{
					name: "400"
				},
				{
					name: "500"
				},
				{
					name: "600"
				},
				{
					name: "700"
				},
				{
					name: "800"
				},
				{
					name: "900"
				},
				{
					name: "bold"
				},
				{
					name: "bolder"
				},
				{
					name: "lighter"
				},
				{
					name: "normal",
					"description": "Same as 400"
				}
			],
			"syntax": "<font-weight-absolute>{1,2}",
			"description": "Specifies weight of glyphs in the font, their degree of blackness or stroke thickness.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "glyph-orientation-horizontal",
			"description": "Controls glyph orientation when the inline-progression-direction is horizontal.",
			"restrictions": [
				"angle",
				"number"
			]
		},
		{
			name: "glyph-orientation-vertical",
			values: [
				{
					name: "auto",
					"description": "Sets the orientation based on the fullwidth or non-fullwidth characters and the most common orientation."
				}
			],
			"description": "Controls glyph orientation when the inline-progression-direction is vertical.",
			"restrictions": [
				"angle",
				"number",
				"enum"
			]
		},
		{
			name: "grid-area",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					name: "span"
				}
			],
			"syntax": "<grid-line> [ / <grid-line> ]{0,3}",
			"description": "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement. Shorthand for 'grid-row-start', 'grid-column-start', 'grid-row-end', and 'grid-column-end'.",
			"restrictions": [
				"identifier",
				"integer"
			]
		},
		{
			name: "grid",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			"syntax": "<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>",
			"description": "The grid CSS property is a shorthand property that sets all of the explicit grid properties ('grid-template-rows', 'grid-template-columns', and 'grid-template-areas'), and all the implicit grid properties ('grid-auto-rows', 'grid-auto-columns', and 'grid-auto-flow'), in a single declaration.",
			"restrictions": [
				"identifier",
				"length",
				"percentage",
				"string",
				"enum"
			]
		},
		{
			name: "grid-auto-columns",
			values: [
				{
					name: "min-content",
					"description": "Represents the largest min-content contribution of the grid items occupying the grid track."
				},
				{
					name: "max-content",
					"description": "Represents the largest max-content contribution of the grid items occupying the grid track."
				},
				{
					name: "auto",
					"description": "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
				},
				{
					name: "minmax()"
				}
			],
			"syntax": "<track-size>+",
			"description": "Specifies the size of implicitly created columns.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "grid-auto-flow",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "row",
					"description": "The auto-placement algorithm places items by filling each row in turn, adding new rows as necessary."
				},
				{
					name: "column",
					"description": "The auto-placement algorithm places items by filling each column in turn, adding new columns as necessary."
				},
				{
					name: "dense"
				}
			],
			"syntax": "[ row | column ] || dense",
			"description": "Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "grid-auto-rows",
			values: [
				{
					name: "min-content",
					"description": "Represents the largest min-content contribution of the grid items occupying the grid track."
				},
				{
					name: "max-content",
					"description": "Represents the largest max-content contribution of the grid items occupying the grid track."
				},
				{
					name: "auto",
					"description": "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
				},
				{
					name: "minmax()"
				}
			],
			"syntax": "<track-size>+",
			"description": "Specifies the size of implicitly created rows.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "grid-column",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					name: "span"
				}
			],
			"syntax": "<grid-line> [ / <grid-line> ]?",
			"description": "Shorthand for 'grid-column-start' and 'grid-column-end'.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			name: "grid-column-end",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					name: "span"
				}
			],
			"syntax": "<grid-line>",
			"description": "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			name: "grid-column-gap",
			browsers: [
				"FF52",
				"C57",
				"S10.1",
				"O44"
			],
			"status": "obsolete",
			"syntax": "<length-percentage>",
			"description": "Specifies the gutters between grid columns. Replaced by 'column-gap' property.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "grid-column-start",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					name: "span"
				}
			],
			"syntax": "<grid-line>",
			"description": "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			name: "grid-gap",
			browsers: [
				"FF52",
				"C57",
				"S10.1",
				"O44"
			],
			"status": "obsolete",
			"syntax": "<'grid-row-gap'> <'grid-column-gap'>?",
			"description": "Shorthand that specifies the gutters between grid columns and grid rows in one declaration. Replaced by 'gap' property.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "grid-row",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					name: "span"
				}
			],
			"syntax": "<grid-line> [ / <grid-line> ]?",
			"description": "Shorthand for 'grid-row-start' and 'grid-row-end'.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			name: "grid-row-end",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					name: "span"
				}
			],
			"syntax": "<grid-line>",
			"description": "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			name: "grid-row-gap",
			browsers: [
				"FF52",
				"C57",
				"S10.1",
				"O44"
			],
			"status": "obsolete",
			"syntax": "<length-percentage>",
			"description": "Specifies the gutters between grid rows. Replaced by 'row-gap' property.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "grid-row-start",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "auto",
					"description": "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
				},
				{
					name: "span"
				}
			],
			"syntax": "<grid-line>",
			"description": "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
			"restrictions": [
				"identifier",
				"integer",
				"enum"
			]
		},
		{
			name: "grid-template",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "none",
					"description": "Sets all three properties to their initial values."
				},
				{
					name: "min-content",
					"description": "Represents the largest min-content contribution of the grid items occupying the grid track."
				},
				{
					name: "max-content",
					"description": "Represents the largest max-content contribution of the grid items occupying the grid track."
				},
				{
					name: "auto",
					"description": "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
				},
				{
					name: "subgrid",
					"description": "Sets 'grid-template-rows' and 'grid-template-columns' to 'subgrid', and 'grid-template-areas' to its initial value."
				},
				{
					name: "minmax()"
				},
				{
					name: "repeat()",
					"description": "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
				}
			],
			"syntax": "none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?",
			"description": "Shorthand for setting grid-template-columns, grid-template-rows, and grid-template-areas in a single declaration.",
			"restrictions": [
				"identifier",
				"length",
				"percentage",
				"string",
				"enum"
			]
		},
		{
			name: "grid-template-areas",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "none",
					"description": "The grid container doesn’t define any named grid areas."
				}
			],
			"syntax": "none | <string>+",
			"description": "Specifies named grid areas, which are not associated with any particular grid item, but can be referenced from the grid-placement properties.",
			"restrictions": [
				"string"
			]
		},
		{
			name: "grid-template-columns",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "none",
					"description": "There is no explicit grid; any rows/columns will be implicitly generated."
				},
				{
					name: "min-content",
					"description": "Represents the largest min-content contribution of the grid items occupying the grid track."
				},
				{
					name: "max-content",
					"description": "Represents the largest max-content contribution of the grid items occupying the grid track."
				},
				{
					name: "auto",
					"description": "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
				},
				{
					name: "subgrid",
					"description": "Indicates that the grid will align to its parent grid in that axis."
				},
				{
					name: "minmax()"
				},
				{
					name: "repeat()",
					"description": "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
				}
			],
			"syntax": "none | <track-list> | <auto-track-list>",
			"description": "specifies, as a space-separated track list, the line names and track sizing functions of the grid.",
			"restrictions": [
				"identifier",
				"length",
				"percentage",
				"enum"
			]
		},
		{
			name: "grid-template-rows",
			browsers: [
				"E16",
				"FF52",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "none",
					"description": "There is no explicit grid; any rows/columns will be implicitly generated."
				},
				{
					name: "min-content",
					"description": "Represents the largest min-content contribution of the grid items occupying the grid track."
				},
				{
					name: "max-content",
					"description": "Represents the largest max-content contribution of the grid items occupying the grid track."
				},
				{
					name: "auto",
					"description": "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
				},
				{
					name: "subgrid",
					"description": "Indicates that the grid will align to its parent grid in that axis."
				},
				{
					name: "minmax()"
				},
				{
					name: "repeat()",
					"description": "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
				}
			],
			"syntax": "none | <track-list> | <auto-track-list>",
			"description": "specifies, as a space-separated track list, the line names and track sizing functions of the grid.",
			"restrictions": [
				"identifier",
				"length",
				"percentage",
				"string",
				"enum"
			]
		},
		{
			name: "height",
			values: [
				{
					name: "auto",
					"description": "The height depends on the values of other properties."
				},
				{
					name: "fit-content"
				},
				{
					name: "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					name: "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>{1,2}",
			"description": "Specifies the height of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "hyphens",
			values: [
				{
					name: "auto",
					"description": "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
				},
				{
					name: "manual"
				},
				{
					name: "none",
					"description": "Words are not broken at line breaks, even if characters inside the word suggest line break points."
				}
			],
			"syntax": "none | manual | auto",
			"description": "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "image-orientation",
			browsers: [
				"FF26"
			],
			values: [
				{
					name: "flip"
				},
				{
					name: "from-image"
				}
			],
			"syntax": "from-image | <angle> | [ <angle>? flip ]",
			"description": "Specifies an orthogonal rotation to be applied to an image before it is laid out.",
			"restrictions": [
				"angle"
			]
		},
		{
			name: "image-rendering",
			browsers: [
				"FF3.6",
				"S",
				"C",
				"O"
			],
			values: [
				{
					name: "auto",
					"description": "The image should be scaled with an algorithm that maximizes the appearance of the image."
				},
				{
					name: "crisp-edges"
				},
				{
					name: "-moz-crisp-edges",
					browsers: [
						"FF3.6",
						"S",
						"C",
						"O"
					]
				},
				{
					name: "optimizeQuality"
				},
				{
					name: "optimizeSpeed",
					"description": "Deprecated."
				},
				{
					name: "pixelated"
				}
			],
			"syntax": "auto | crisp-edges | pixelated",
			"description": "Provides a hint to the user-agent about what aspects of an image are most important to preserve when the image is scaled, to aid the user-agent in the choice of an appropriate scaling algorithm.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "ime-mode",
			browsers: [
				"FF3",
				"IE5"
			],
			values: [
				{
					name: "active"
				},
				{
					name: "auto",
					"description": "No change is made to the current input method editor state. This is the default."
				},
				{
					name: "disabled"
				},
				{
					name: "inactive"
				},
				{
					name: "normal",
					"description": "The IME state should be normal; this value can be used in a user style sheet to override the page setting."
				}
			],
			"status": "obsolete",
			"syntax": "auto | normal | active | inactive | disabled",
			"description": "Controls the state of the input method editor for text fields.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "inline-size",
			browsers: [
				"FF41",
				"C57",
				"O44"
			],
			values: [
				{
					name: "auto",
					"description": "Depends on the values of other properties."
				}
			],
			"syntax": "<'width'>",
			"description": "Logical 'height'. Mapping depends on the element’s 'writing-mode'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "isolation",
			browsers: [
				"FF36",
				"S",
				"C41",
				"O30"
			],
			values: [
				{
					name: "auto",
					"description": "Elements are not isolated unless an operation is applied that causes the creation of a stacking context."
				},
				{
					name: "isolate",
					"description": "In CSS will turn the element into a stacking context."
				}
			],
			"syntax": "auto | isolate",
			"description": "In CSS setting to 'isolate' will turn the element into a stacking context. In SVG, it defines whether an element is isolated or not.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "justify-content",
			values: [
				{
					name: "center",
					"description": "Flex items are packed toward the center of the line."
				},
				{
					name: "start",
					"description": "The items are packed flush to each other toward the start edge of the alignment container in the main axis."
				},
				{
					name: "end",
					"description": "The items are packed flush to each other toward the end edge of the alignment container in the main axis."
				},
				{
					name: "left",
					"description": "The items are packed flush to each other toward the left edge of the alignment container in the main axis."
				},
				{
					name: "right",
					"description": "The items are packed flush to each other toward the right edge of the alignment container in the main axis."
				},
				{
					name: "safe"
				},
				{
					name: "unsafe"
				},
				{
					name: "stretch",
					"description": "If the combined size of the alignment subjects is less than the size of the alignment container, any auto-sized alignment subjects have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container."
				},
				{
					name: "space-evenly"
				},
				{
					name: "flex-end",
					"description": "Flex items are packed toward the end of the line."
				},
				{
					name: "flex-start",
					"description": "Flex items are packed toward the start of the line."
				},
				{
					name: "space-around",
					"description": "Flex items are evenly distributed in the line, with half-size spaces on either end."
				},
				{
					name: "space-between",
					"description": "Flex items are evenly distributed in the line."
				},
				{
					name: "baseline",
					"description": "Specifies participation in first-baseline alignment."
				},
				{
					name: "first baseline",
					"description": "Specifies participation in first-baseline alignment."
				},
				{
					name: "last baseline",
					"description": "Specifies participation in last-baseline alignment."
				}
			],
			"syntax": "normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]",
			"description": "Aligns flex items along the main axis of the current line of the flex container.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "kerning",
			values: [
				{
					name: "auto",
					"description": "Indicates that the user agent should adjust inter-glyph spacing based on kerning tables that are included in the font that will be used."
				}
			],
			"description": "Indicates whether the user agent should adjust inter-glyph spacing based on kerning tables that are included in the relevant font or instead disable auto-kerning and set inter-character spacing to a specific length.",
			"restrictions": [
				"length",
				"enum"
			]
		},
		{
			name: "left",
			values: [
				{
					name: "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"description": "Specifies how far an absolutely positioned box's left margin edge is offset to the right of the left edge of the box's 'containing block'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "letter-spacing",
			values: [
				{
					name: "normal",
					"description": "The spacing is the normal spacing for the current font. It is typically zero-length."
				}
			],
			"syntax": "normal | <length>",
			"description": "Specifies the minimum, maximum, and optimal spacing between grapheme clusters.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "lighting-color",
			browsers: [
				"E",
				"C5",
				"FF3",
				"IE10",
				"O9",
				"S6"
			],
			"description": "Defines the color of the light source for filter primitives 'feDiffuseLighting' and 'feSpecularLighting'.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "line-break",
			browsers: [
				"E14",
				"S",
				"C58",
				"IE5.5",
				"O45"
			],
			values: [
				{
					name: "auto",
					"description": "The UA determines the set of line-breaking restrictions to use for CJK scripts, and it may vary the restrictions based on the length of the line; e.g., use a less restrictive set of line-break rules for short lines."
				},
				{
					name: "loose",
					"description": "Breaks text using the least restrictive set of line-breaking rules. Typically used for short lines, such as in newspapers."
				},
				{
					name: "normal",
					"description": "Breaks text using the most common set of line-breaking rules."
				},
				{
					name: "strict",
					"description": "Breaks CJK scripts using a more restrictive set of line-breaking rules than 'normal'."
				}
			],
			"syntax": "auto | loose | normal | strict",
			"description": "Specifies what set of line breaking restrictions are in effect within the element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "line-height",
			values: [
				{
					name: "normal",
					"description": "Tells user agents to set the computed value to a 'reasonable' value based on the font size of the element."
				}
			],
			"syntax": "normal | <number> | <length> | <percentage>",
			"description": "Determines the block-progression dimension of the text content area of an inline box.",
			"restrictions": [
				"number",
				"length",
				"percentage"
			]
		},
		{
			name: "list-style",
			values: [
				{
					name: "armenian"
				},
				{
					name: "circle"
				},
				{
					name: "decimal"
				},
				{
					name: "decimal-leading-zero"
				},
				{
					name: "disc"
				},
				{
					name: "georgian"
				},
				{
					name: "inside"
				},
				{
					name: "lower-alpha"
				},
				{
					name: "lower-greek"
				},
				{
					name: "lower-latin"
				},
				{
					name: "lower-roman"
				},
				{
					name: "none"
				},
				{
					name: "outside"
				},
				{
					name: "square",
					"description": "A filled square."
				},
				{
					name: "symbols()"
				},
				{
					name: "upper-alpha"
				},
				{
					name: "upper-latin"
				},
				{
					name: "upper-roman"
				},
				{
					name: "url()"
				}
			],
			"syntax": "<'list-style-type'> || <'list-style-position'> || <'list-style-image'>",
			"description": "Shorthand for setting 'list-style-type', 'list-style-position' and 'list-style-image'",
			"restrictions": [
				"image",
				"enum",
				"url"
			]
		},
		{
			name: "list-style-image",
			values: [
				{
					name: "none",
					"description": "The default contents of the of the list item’s marker are given by 'list-style-type' instead."
				}
			],
			"syntax": "<url> | none",
			"description": "Sets the image that will be used as the list item marker. When the image is available, it will replace the marker set with the 'list-style-type' marker.",
			"restrictions": [
				"image"
			]
		},
		{
			name: "list-style-position",
			values: [
				{
					name: "inside"
				},
				{
					name: "outside"
				}
			],
			"syntax": "inside | outside",
			"description": "Specifies the position of the '::marker' pseudo-element's box in the list item.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "list-style-type",
			values: [
				{
					name: "armenian",
					"description": "Traditional uppercase Armenian numbering."
				},
				{
					name: "circle"
				},
				{
					name: "decimal",
					"description": "Western decimal numbers."
				},
				{
					name: "decimal-leading-zero",
					"description": "Decimal numbers padded by initial zeros."
				},
				{
					name: "disc"
				},
				{
					name: "georgian",
					"description": "Traditional Georgian numbering."
				},
				{
					name: "lower-alpha",
					"description": "Lowercase ASCII letters."
				},
				{
					name: "lower-greek",
					"description": "Lowercase classical Greek."
				},
				{
					name: "lower-latin",
					"description": "Lowercase ASCII letters."
				},
				{
					name: "lower-roman",
					"description": "Lowercase ASCII Roman numerals."
				},
				{
					name: "none",
					"description": "No marker"
				},
				{
					name: "square",
					"description": "A filled square."
				},
				{
					name: "symbols()"
				},
				{
					name: "upper-alpha",
					"description": "Uppercase ASCII letters."
				},
				{
					name: "upper-latin",
					"description": "Uppercase ASCII letters."
				},
				{
					name: "upper-roman",
					"description": "Uppercase ASCII Roman numerals."
				}
			],
			"syntax": "<counter-style> | <string> | none",
			"description": "Used to construct the default contents of a list item’s marker",
			"restrictions": [
				"enum",
				"string"
			]
		},
		{
			name: "margin",
			values: [
				{
					name: "auto"
				}
			],
			"syntax": "[ <length> | <percentage> | auto ]{1,4}",
			"description": "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "margin-block-end",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			values: [
				{
					name: "auto"
				}
			],
			"syntax": "<'margin-left'>",
			"description": "Logical 'margin-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "margin-block-start",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			values: [
				{
					name: "auto"
				}
			],
			"syntax": "<'margin-left'>",
			"description": "Logical 'margin-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "margin-bottom",
			values: [
				{
					name: "auto"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"description": "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "margin-inline-end",
			browsers: [
				"FF41",
				"S3",
				"C69",
				"O56"
			],
			values: [
				{
					name: "auto"
				}
			],
			"syntax": "<'margin-left'>",
			"description": "Logical 'margin-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "margin-inline-start",
			browsers: [
				"FF41",
				"S3",
				"C69",
				"O56"
			],
			values: [
				{
					name: "auto"
				}
			],
			"syntax": "<'margin-left'>",
			"description": "Logical 'margin-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "margin-left",
			values: [
				{
					name: "auto"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"description": "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "margin-right",
			values: [
				{
					name: "auto"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"description": "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "margin-top",
			values: [
				{
					name: "auto"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"description": "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "marker",
			values: [
				{
					name: "none",
					"description": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
				},
				{
					name: "url()",
					"description": "Indicates that the <marker> element referenced will be used."
				}
			],
			"description": "Specifies the marker symbol that shall be used for all points on the sets the value for all vertices on the given ‘path’ element or basic shape.",
			"restrictions": [
				"url"
			]
		},
		{
			name: "marker-end",
			values: [
				{
					name: "none",
					"description": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
				},
				{
					name: "url()",
					"description": "Indicates that the <marker> element referenced will be used."
				}
			],
			"description": "Specifies the marker that will be drawn at the last vertices of the given markable element.",
			"restrictions": [
				"url"
			]
		},
		{
			name: "marker-mid",
			values: [
				{
					name: "none",
					"description": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
				},
				{
					name: "url()",
					"description": "Indicates that the <marker> element referenced will be used."
				}
			],
			"description": "Specifies the marker that will be drawn at all vertices except the first and last.",
			"restrictions": [
				"url"
			]
		},
		{
			name: "marker-start",
			values: [
				{
					name: "none",
					"description": "Indicates that no marker symbol will be drawn at the given vertex or vertices."
				},
				{
					name: "url()",
					"description": "Indicates that the <marker> element referenced will be used."
				}
			],
			"description": "Specifies the marker that will be drawn at the first vertices of the given markable element.",
			"restrictions": [
				"url"
			]
		},
		{
			name: "mask-image",
			browsers: [
				"E16",
				"FF53",
				"S4",
				"C1",
				"O"
			],
			values: [
				{
					name: "none",
					"description": "Counts as a transparent black image layer."
				},
				{
					name: "url()",
					"description": "Reference to a <mask element or to a CSS image."
				}
			],
			"syntax": "<mask-reference>#",
			"description": "Sets the mask layer image of an element.",
			"restrictions": [
				"url",
				"image",
				"enum"
			]
		},
		{
			name: "mask-mode",
			browsers: [
				"FF53"
			],
			values: [
				{
					name: "alpha",
					"description": "Alpha values of the mask layer image should be used as the mask values."
				},
				{
					name: "auto",
					"description": "Use alpha values if 'mask-image' is an image, luminance if a <mask> element or a CSS image."
				},
				{
					name: "luminance",
					"description": "Luminance values of the mask layer image should be used as the mask values."
				}
			],
			"syntax": "<masking-mode>#",
			"description": "Indicates whether the mask layer image is treated as luminance mask or alpha mask.",
			"restrictions": [
				"url",
				"image",
				"enum"
			]
		},
		{
			name: "mask-origin",
			browsers: [
				"FF53",
				"S",
				"C",
				"O"
			],
			"syntax": "<geometry-box>#",
			"description": "Specifies the mask positioning area.",
			"restrictions": [
				"geometry-box",
				"enum"
			]
		},
		{
			name: "mask-position",
			browsers: [
				"E18",
				"FF53",
				"S4",
				"C1"
			],
			"syntax": "<position>#",
			"description": "Specifies how mask layer images are positioned.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			name: "mask-repeat",
			browsers: [
				"E18",
				"FF53",
				"S4",
				"C1"
			],
			"syntax": "<repeat-style>#",
			"description": "Specifies how mask layer images are tiled after they have been sized and positioned.",
			"restrictions": [
				"repeat"
			]
		},
		{
			name: "mask-size",
			browsers: [
				"E17",
				"FF53"
			],
			values: [
				{
					name: "auto",
					"description": "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
				},
				{
					name: "contain",
					"description": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
				},
				{
					name: "cover",
					"description": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
				}
			],
			"syntax": "<bg-size>#",
			"description": "Specifies the size of the mask layer images.",
			"restrictions": [
				"length",
				"percentage",
				"enum"
			]
		},
		{
			name: "mask-type",
			browsers: [
				"FF35",
				"C24"
			],
			values: [
				{
					name: "alpha",
					"description": "Indicates that the alpha values of the mask should be used."
				},
				{
					name: "luminance",
					"description": "Indicates that the luminance values of the mask should be used."
				}
			],
			"syntax": "luminance | alpha",
			"description": "Defines whether the content of the <mask> element is treated as as luminance mask or alpha mask.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "max-block-size",
			browsers: [
				"FF41",
				"C57",
				"O44"
			],
			values: [
				{
					name: "none",
					"description": "No limit on the width of the box."
				}
			],
			"status": "experimental",
			"syntax": "<'max-width'>",
			"description": "Logical 'max-width'. Mapping depends on the element’s 'writing-mode'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "max-height",
			values: [
				{
					name: "none",
					"description": "No limit on the height of the box."
				},
				{
					name: "fit-content"
				},
				{
					name: "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					name: "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>",
			"description": "Allows authors to constrain content height to a certain range.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "max-inline-size",
			browsers: [
				"FF41",
				"S10.1",
				"C57",
				"O44"
			],
			values: [
				{
					name: "none",
					"description": "No limit on the height of the box."
				}
			],
			"status": "experimental",
			"syntax": "<'max-width'>",
			"description": "Logical 'max-height'. Mapping depends on the element’s 'writing-mode'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "max-width",
			values: [
				{
					name: "none",
					"description": "No limit on the width of the box."
				},
				{
					name: "fit-content"
				},
				{
					name: "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					name: "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>",
			"description": "Allows authors to constrain content width to a certain range.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "min-block-size",
			browsers: [
				"FF41",
				"C57",
				"O44"
			],
			"syntax": "<'min-width'>",
			"description": "Logical 'min-width'. Mapping depends on the element’s 'writing-mode'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "min-height",
			values: [
				{
					name: "auto"
				},
				{
					name: "fit-content"
				},
				{
					name: "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					name: "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>",
			"description": "Allows authors to constrain content height to a certain range.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "min-inline-size",
			browsers: [
				"FF41",
				"C57",
				"O44"
			],
			"syntax": "<'min-width'>",
			"description": "Logical 'min-height'. Mapping depends on the element’s 'writing-mode'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "min-width",
			values: [
				{
					name: "auto"
				},
				{
					name: "fit-content"
				},
				{
					name: "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					name: "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>",
			"description": "Allows authors to constrain content width to a certain range.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "mix-blend-mode",
			browsers: [
				"FF32",
				"S8",
				"C41",
				"O"
			],
			values: [
				{
					name: "normal",
					"description": "Default attribute which specifies no blending"
				},
				{
					name: "multiply"
				},
				{
					name: "screen"
				},
				{
					name: "overlay"
				},
				{
					name: "darken"
				},
				{
					name: "lighten"
				},
				{
					name: "color-dodge"
				},
				{
					name: "color-burn"
				},
				{
					name: "hard-light"
				},
				{
					name: "soft-light"
				},
				{
					name: "difference"
				},
				{
					name: "exclusion"
				},
				{
					name: "hue",
					browsers: [
						"FF32",
						"S8",
						"C41",
						"O"
					]
				},
				{
					name: "saturation",
					browsers: [
						"FF32",
						"S8",
						"C41",
						"O"
					]
				},
				{
					name: "color",
					browsers: [
						"FF32",
						"S8",
						"C41",
						"O"
					]
				},
				{
					name: "luminosity",
					browsers: [
						"FF32",
						"S8",
						"C41",
						"O"
					]
				}
			],
			"syntax": "<blend-mode>",
			"description": "Defines the formula that must be used to mix the colors with the backdrop.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "motion",
			browsers: [
				"C46",
				"O33"
			],
			values: [
				{
					name: "none",
					"description": "No motion path gets created."
				},
				{
					name: "path()"
				},
				{
					name: "auto",
					"description": "Indicates that the object is rotated by the angle of the direction of the motion path."
				},
				{
					name: "reverse",
					"description": "Indicates that the object is rotated by the angle of the direction of the motion path plus 180 degrees."
				}
			],
			"description": "Shorthand property for setting 'motion-path', 'motion-offset' and 'motion-rotation'.",
			"restrictions": [
				"url",
				"length",
				"percentage",
				"angle",
				"shape",
				"geometry-box",
				"enum"
			]
		},
		{
			name: "motion-offset",
			browsers: [
				"C46",
				"O33"
			],
			"description": "A distance that describes the position along the specified motion path.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "motion-path",
			browsers: [
				"C46",
				"O33"
			],
			values: [
				{
					name: "none",
					"description": "No motion path gets created."
				},
				{
					name: "path()"
				}
			],
			"description": "Specifies the motion path the element gets positioned at.",
			"restrictions": [
				"url",
				"shape",
				"geometry-box",
				"enum"
			]
		},
		{
			name: "motion-rotation",
			browsers: [
				"C46",
				"O33"
			],
			values: [
				{
					name: "auto",
					"description": "Indicates that the object is rotated by the angle of the direction of the motion path."
				},
				{
					name: "reverse",
					"description": "Indicates that the object is rotated by the angle of the direction of the motion path plus 180 degrees."
				}
			],
			"description": "Defines the direction of the element while positioning along the motion path.",
			"restrictions": [
				"angle"
			]
		},
		{
			name: "-moz-animation",
			browsers: [
				"FF9"
			],
			values: [
				{
					name: "alternate"
				},
				{
					name: "alternate-reverse"
				},
				{
					name: "backwards"
				},
				{
					name: "both",
					"description": "Both forwards and backwards fill modes are applied."
				},
				{
					name: "forwards"
				},
				{
					name: "infinite",
					"description": "Causes the animation to repeat forever."
				},
				{
					name: "none",
					"description": "No animation is performed"
				},
				{
					name: "normal",
					"description": "Normal playback."
				},
				{
					name: "reverse",
					"description": "All iterations of the animation are played in the reverse direction from the way they were specified."
				}
			],
			"description": "Shorthand property combines six of the animation properties into a single property.",
			"restrictions": [
				"time",
				"enum",
				"timing-function",
				"identifier",
				"number"
			]
		},
		{
			name: "-moz-animation-delay",
			browsers: [
				"FF9"
			],
			"description": "Defines when the animation will start.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-moz-animation-direction",
			browsers: [
				"FF9"
			],
			values: [
				{
					name: "alternate"
				},
				{
					name: "alternate-reverse"
				},
				{
					name: "normal",
					"description": "Normal playback."
				},
				{
					name: "reverse",
					"description": "All iterations of the animation are played in the reverse direction from the way they were specified."
				}
			],
			"description": "Defines whether or not the animation should play in reverse on alternate cycles.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-animation-duration",
			browsers: [
				"FF9"
			],
			"description": "Defines the length of time that an animation takes to complete one cycle.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-moz-animation-iteration-count",
			browsers: [
				"FF9"
			],
			values: [
				{
					name: "infinite",
					"description": "Causes the animation to repeat forever."
				}
			],
			"description": "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
			"restrictions": [
				"number",
				"enum"
			]
		},
		{
			name: "-moz-animation-name",
			browsers: [
				"FF9"
			],
			values: [
				{
					name: "none",
					"description": "No animation is performed"
				}
			],
			"description": "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
			"restrictions": [
				"identifier",
				"enum"
			]
		},
		{
			name: "-moz-animation-play-state",
			browsers: [
				"FF9"
			],
			values: [
				{
					name: "paused"
				},
				{
					name: "running"
				}
			],
			"description": "Defines whether the animation is running or paused.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-animation-timing-function",
			browsers: [
				"FF9"
			],
			"description": "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
			"restrictions": [
				"timing-function"
			]
		},
		{
			name: "-moz-appearance",
			browsers: [
				"FF1"
			],
			values: [
				{
					name: "button"
				},
				{
					name: "button-arrow-down"
				},
				{
					name: "button-arrow-next"
				},
				{
					name: "button-arrow-previous"
				},
				{
					name: "button-arrow-up"
				},
				{
					name: "button-bevel"
				},
				{
					name: "checkbox"
				},
				{
					name: "checkbox-container"
				},
				{
					name: "checkbox-label"
				},
				{
					name: "dialog"
				},
				{
					name: "groupbox"
				},
				{
					name: "listbox"
				},
				{
					name: "menuarrow"
				},
				{
					name: "menuimage"
				},
				{
					name: "menuitem"
				},
				{
					name: "menuitemtext"
				},
				{
					name: "menulist"
				},
				{
					name: "menulist-button"
				},
				{
					name: "menulist-text"
				},
				{
					name: "menulist-textfield"
				},
				{
					name: "menupopup"
				},
				{
					name: "menuradio"
				},
				{
					name: "menuseparator"
				},
				{
					name: "-moz-mac-unified-toolbar"
				},
				{
					name: "-moz-win-borderless-glass"
				},
				{
					name: "-moz-win-browsertabbar-toolbox"
				},
				{
					name: "-moz-win-communications-toolbox"
				},
				{
					name: "-moz-win-glass"
				},
				{
					name: "-moz-win-media-toolbox"
				},
				{
					name: "none"
				},
				{
					name: "progressbar"
				},
				{
					name: "progresschunk"
				},
				{
					name: "radio"
				},
				{
					name: "radio-container"
				},
				{
					name: "radio-label"
				},
				{
					name: "radiomenuitem"
				},
				{
					name: "resizer"
				},
				{
					name: "resizerpanel"
				},
				{
					name: "scrollbarbutton-down"
				},
				{
					name: "scrollbarbutton-left"
				},
				{
					name: "scrollbarbutton-right"
				},
				{
					name: "scrollbarbutton-up"
				},
				{
					name: "scrollbar-small"
				},
				{
					name: "scrollbartrack-horizontal"
				},
				{
					name: "scrollbartrack-vertical"
				},
				{
					name: "separator"
				},
				{
					name: "spinner"
				},
				{
					name: "spinner-downbutton"
				},
				{
					name: "spinner-textfield"
				},
				{
					name: "spinner-upbutton"
				},
				{
					name: "statusbar"
				},
				{
					name: "statusbarpanel"
				},
				{
					name: "tab"
				},
				{
					name: "tabpanels"
				},
				{
					name: "tab-scroll-arrow-back"
				},
				{
					name: "tab-scroll-arrow-forward"
				},
				{
					name: "textfield"
				},
				{
					name: "textfield-multiline"
				},
				{
					name: "toolbar"
				},
				{
					name: "toolbox"
				},
				{
					name: "tooltip"
				},
				{
					name: "treeheadercell"
				},
				{
					name: "treeheadersortarrow"
				},
				{
					name: "treeitem"
				},
				{
					name: "treetwistyopen"
				},
				{
					name: "treeview"
				},
				{
					name: "treewisty"
				},
				{
					name: "window"
				}
			],
			"status": "nonstandard",
			"syntax": "none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized",
			"description": "Used in Gecko (Firefox) to display an element using a platform-native styling based on the operating system's theme.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-backface-visibility",
			browsers: [
				"FF10"
			],
			values: [
				{
					name: "hidden"
				},
				{
					name: "visible"
				}
			],
			"description": "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-background-clip",
			browsers: [
				"FF1-3.6"
			],
			values: [
				{
					name: "padding"
				}
			],
			"description": "Determines the background painting area.",
			"restrictions": [
				"box",
				"enum"
			]
		},
		{
			name: "-moz-background-inline-policy",
			browsers: [
				"FF1"
			],
			values: [
				{
					name: "bounding-box"
				},
				{
					name: "continuous"
				},
				{
					name: "each-box"
				}
			],
			"description": "In Gecko-based applications like Firefox, the -moz-background-inline-policy CSS property specifies how the background image of an inline element is determined when the content of the inline element wraps onto multiple lines. The choice of position has significant effects on repetition.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-background-origin",
			browsers: [
				"FF1"
			],
			"description": "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
			"restrictions": [
				"box"
			]
		},
		{
			name: "-moz-border-bottom-colors",
			browsers: [
				"FF1"
			],
			"status": "nonstandard",
			"syntax": "<color>+ | none",
			"description": "Sets a list of colors for the bottom border.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-moz-border-image",
			browsers: [
				"FF3.6"
			],
			values: [
				{
					name: "auto",
					"description": "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
				},
				{
					name: "fill",
					"description": "Causes the middle part of the border-image to be preserved."
				},
				{
					name: "none"
				},
				{
					name: "repeat"
				},
				{
					name: "round",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
				},
				{
					name: "space",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
				},
				{
					name: "stretch",
					"description": "The image is stretched to fill the area."
				},
				{
					name: "url()"
				}
			],
			"description": "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
			"restrictions": [
				"length",
				"percentage",
				"number",
				"url",
				"enum"
			]
		},
		{
			name: "-moz-border-left-colors",
			browsers: [
				"FF1"
			],
			"status": "nonstandard",
			"syntax": "<color>+ | none",
			"description": "Sets a list of colors for the bottom border.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-moz-border-right-colors",
			browsers: [
				"FF1"
			],
			"status": "nonstandard",
			"syntax": "<color>+ | none",
			"description": "Sets a list of colors for the bottom border.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-moz-border-top-colors",
			browsers: [
				"FF1"
			],
			"status": "nonstandard",
			"syntax": "<color>+ | none",
			"description": "Ske Firefox, -moz-border-bottom-colors sets a list of colors for the bottom border.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-moz-box-align",
			browsers: [
				"FF1"
			],
			values: [
				{
					name: "baseline",
					"description": "If this box orientation is inline-axis or horizontal, all children are placed with their baselines aligned, and extra space placed before or after as necessary. For block flows, the baseline of the first non-empty line box located within the element is used. For tables, the baseline of the first cell is used."
				},
				{
					name: "center",
					"description": "Any extra space is divided evenly, with half placed above the child and the other half placed after the child."
				},
				{
					name: "end",
					"description": "For normal direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element. For reverse direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element."
				},
				{
					name: "start",
					"description": "For normal direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element. For reverse direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element."
				},
				{
					name: "stretch",
					"description": "The height of each child is adjusted to that of the containing block."
				}
			],
			"description": "Specifies how a XUL box aligns its contents across (perpendicular to) the direction of its layout. The effect of this is only visible if there is extra space in the box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-box-direction",
			browsers: [
				"FF1"
			],
			values: [
				{
					name: "normal",
					"description": "A box with a computed value of horizontal for box-orient displays its children from left to right. A box with a computed value of vertical displays its children from top to bottom."
				},
				{
					name: "reverse",
					"description": "A box with a computed value of horizontal for box-orient displays its children from right to left. A box with a computed value of vertical displays its children from bottom to top."
				}
			],
			"description": "Specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-box-flex",
			browsers: [
				"FF1"
			],
			"description": "Specifies how a box grows to fill the box that contains it, in the direction of the containing box's layout.",
			"restrictions": [
				"number"
			]
		},
		{
			name: "-moz-box-flexgroup",
			browsers: [
				"FF1"
			],
			"description": "Flexible elements can be assigned to flex groups using the 'box-flex-group' property.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-moz-box-ordinal-group",
			browsers: [
				"FF1"
			],
			"description": "Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-moz-box-orient",
			browsers: [
				"FF1"
			],
			values: [
				{
					name: "block-axis"
				},
				{
					name: "horizontal",
					"description": "The box displays its children from left to right in a horizontal line."
				},
				{
					name: "inline-axis"
				},
				{
					name: "vertical",
					"description": "The box displays its children from stacked from top to bottom vertically."
				}
			],
			"description": "In Mozilla applications, -moz-box-orient specifies whether a box lays out its contents horizontally or vertically.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-box-pack",
			browsers: [
				"FF1"
			],
			values: [
				{
					name: "center",
					"description": "The extra space is divided evenly, with half placed before the first child and the other half placed after the last child."
				},
				{
					name: "end",
					"description": "For normal direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child. For reverse direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child."
				},
				{
					name: "justify",
					"description": "The space is divided evenly in-between each child, with none of the extra space placed before the first child or after the last child. If there is only one child, treat the pack value as if it were start."
				},
				{
					name: "start",
					"description": "For normal direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child. For reverse direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child."
				}
			],
			"description": "Specifies how a box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-box-sizing",
			browsers: [
				"FF1"
			],
			values: [
				{
					name: "border-box"
				},
				{
					name: "content-box"
				},
				{
					name: "padding-box"
				}
			],
			"description": "Box Model addition in CSS3.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-column-count",
			browsers: [
				"FF3.5"
			],
			values: [
				{
					name: "auto",
					"description": "Determines the number of columns by the 'column-width' property and the element width."
				}
			],
			"description": "Describes the optimal number of columns into which the content of the element will be flowed.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-moz-column-gap",
			browsers: [
				"FF3.5"
			],
			values: [
				{
					name: "normal",
					"description": "User agent specific and typically equivalent to 1em."
				}
			],
			"description": "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-moz-column-rule",
			browsers: [
				"FF3.5"
			],
			"description": "Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "-moz-column-rule-color",
			browsers: [
				"FF3.5"
			],
			"description": "Sets the color of the column rule",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-moz-column-rule-style",
			browsers: [
				"FF3.5"
			],
			"description": "Sets the style of the rule between columns of an element.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "-moz-column-rule-width",
			browsers: [
				"FF3.5"
			],
			"description": "Sets the width of the rule between columns. Negative values are not allowed.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "-moz-columns",
			browsers: [
				"FF9"
			],
			values: [
				{
					name: "auto",
					"description": "The width depends on the values of other properties."
				}
			],
			"description": "A shorthand property which sets both 'column-width' and 'column-count'.",
			"restrictions": [
				"length",
				"integer"
			]
		},
		{
			name: "-moz-column-width",
			browsers: [
				"FF3.5"
			],
			values: [
				{
					name: "auto",
					"description": "The width depends on the values of other properties."
				}
			],
			"description": "This property describes the width of columns in multicol elements.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-moz-font-feature-settings",
			browsers: [
				"FF4"
			],
			values: [
				{
					name: "\"c2cs\""
				},
				{
					name: "\"dlig\""
				},
				{
					name: "\"kern\""
				},
				{
					name: "\"liga\""
				},
				{
					name: "\"lnum\""
				},
				{
					name: "\"onum\""
				},
				{
					name: "\"smcp\""
				},
				{
					name: "\"swsh\""
				},
				{
					name: "\"tnum\""
				},
				{
					name: "normal",
					"description": "No change in glyph substitution or positioning occurs."
				},
				{
					name: "off",
					browsers: [
						"FF4"
					]
				},
				{
					name: "on",
					browsers: [
						"FF4"
					]
				}
			],
			"description": "Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
			"restrictions": [
				"string",
				"integer"
			]
		},
		{
			name: "-moz-hyphens",
			browsers: [
				"FF9"
			],
			values: [
				{
					name: "auto",
					"description": "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
				},
				{
					name: "manual"
				},
				{
					name: "none",
					"description": "Words are not broken at line breaks, even if characters inside the word suggest line break points."
				}
			],
			"description": "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-perspective",
			browsers: [
				"FF10"
			],
			values: [
				{
					name: "none",
					"description": "No perspective transform is applied."
				}
			],
			"description": "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-moz-perspective-origin",
			browsers: [
				"FF10"
			],
			"description": "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
			"restrictions": [
				"position",
				"percentage",
				"length"
			]
		},
		{
			name: "-moz-text-align-last",
			browsers: [
				"FF12"
			],
			values: [
				{
					name: "auto"
				},
				{
					name: "center",
					"description": "The inline contents are centered within the line box."
				},
				{
					name: "justify",
					"description": "The text is justified according to the method specified by the 'text-justify' property."
				},
				{
					name: "left",
					"description": "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
				},
				{
					name: "right",
					"description": "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
				}
			],
			"description": "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-text-decoration-color",
			browsers: [
				"FF6"
			],
			"description": "Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-moz-text-decoration-line",
			browsers: [
				"FF6"
			],
			values: [
				{
					name: "line-through"
				},
				{
					name: "none",
					"description": "Neither produces nor inhibits text decoration."
				},
				{
					name: "overline"
				},
				{
					name: "underline"
				}
			],
			"description": "Specifies what line decorations, if any, are added to the element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-text-decoration-style",
			browsers: [
				"FF6"
			],
			values: [
				{
					name: "dashed"
				},
				{
					name: "dotted"
				},
				{
					name: "double"
				},
				{
					name: "none",
					"description": "Produces no line."
				},
				{
					name: "solid"
				},
				{
					name: "wavy"
				}
			],
			"description": "Specifies the line style for underline, line-through and overline text decoration.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-text-size-adjust",
			browsers: [
				"FF"
			],
			values: [
				{
					name: "auto",
					"description": "Renderers must use the default size adjustment when displaying on a small device."
				},
				{
					name: "none",
					"description": "Renderers must not do size adjustment when displaying on a small device."
				}
			],
			"description": "Specifies a size adjustment for displaying text content in mobile browsers.",
			"restrictions": [
				"enum",
				"percentage"
			]
		},
		{
			name: "-moz-transform",
			browsers: [
				"FF3.5"
			],
			values: [
				{
					name: "matrix()"
				},
				{
					name: "matrix3d()"
				},
				{
					name: "none"
				},
				{
					name: "perspective"
				},
				{
					name: "rotate()"
				},
				{
					name: "rotate3d()"
				},
				{
					name: "rotateX('angle')"
				},
				{
					name: "rotateY('angle')"
				},
				{
					name: "rotateZ('angle')"
				},
				{
					name: "scale()"
				},
				{
					name: "scale3d()"
				},
				{
					name: "scaleX()"
				},
				{
					name: "scaleY()"
				},
				{
					name: "scaleZ()"
				},
				{
					name: "skew()"
				},
				{
					name: "skewX()"
				},
				{
					name: "skewY()"
				},
				{
					name: "translate()"
				},
				{
					name: "translate3d()"
				},
				{
					name: "translateX()"
				},
				{
					name: "translateY()"
				},
				{
					name: "translateZ()"
				}
			],
			"description": "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-moz-transform-origin",
			browsers: [
				"FF3.5"
			],
			"description": "Establishes the origin of transformation for an element.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			name: "-moz-transition",
			browsers: [
				"FF4"
			],
			values: [
				{
					name: "all",
					"description": "Every property that is able to undergo a transition will do so."
				},
				{
					name: "none",
					"description": "No property will transition."
				}
			],
			"description": "Shorthand property combines four of the transition properties into a single property.",
			"restrictions": [
				"time",
				"property",
				"timing-function",
				"enum"
			]
		},
		{
			name: "-moz-transition-delay",
			browsers: [
				"FF4"
			],
			"description": "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-moz-transition-duration",
			browsers: [
				"FF4"
			],
			"description": "Specifies how long the transition from the old value to the new value should take.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-moz-transition-property",
			browsers: [
				"FF4"
			],
			values: [
				{
					name: "all",
					"description": "Every property that is able to undergo a transition will do so."
				},
				{
					name: "none",
					"description": "No property will transition."
				}
			],
			"description": "Specifies the name of the CSS property to which the transition is applied.",
			"restrictions": [
				"property"
			]
		},
		{
			name: "-moz-transition-timing-function",
			browsers: [
				"FF4"
			],
			"description": "Describes how the intermediate values used during a transition will be calculated.",
			"restrictions": [
				"timing-function"
			]
		},
		{
			name: "-moz-user-focus",
			browsers: [
				"FF1"
			],
			values: [
				{
					name: "ignore"
				},
				{
					name: "normal"
				}
			],
			"status": "nonstandard",
			"syntax": "ignore | normal | select-after | select-before | select-menu | select-same | select-all | none",
			"description": "Used to indicate whether the element can have focus."
		},
		{
			name: "-moz-user-select",
			browsers: [
				"FF1.5"
			],
			values: [
				{
					name: "all"
				},
				{
					name: "element"
				},
				{
					name: "elements"
				},
				{
					name: "-moz-all"
				},
				{
					name: "-moz-none"
				},
				{
					name: "none"
				},
				{
					name: "text"
				},
				{
					name: "toggle"
				}
			],
			"description": "Controls the appearance of selection.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-accelerator",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "false"
				},
				{
					name: "true"
				}
			],
			"status": "nonstandard",
			"syntax": "false | true",
			"description": "IE only. Has the ability to turn off its system underlines for accelerator keys until the ALT key is pressed",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-behavior",
			browsers: [
				"IE8"
			],
			"description": "IE only. Used to extend behaviors of the browser",
			"restrictions": [
				"url"
			]
		},
		{
			name: "-ms-block-progression",
			browsers: [
				"IE8"
			],
			values: [
				{
					name: "bt"
				},
				{
					name: "lr"
				},
				{
					name: "rl"
				},
				{
					name: "tb"
				}
			],
			"status": "nonstandard",
			"syntax": "tb | rl | bt | lr",
			"description": "Sets the block-progression value and the flow orientation",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-content-zoom-chaining",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "chained",
					"description": "The nearest zoomable parent element begins zooming when the user hits a zoom limit during a manipulation. No bounce effect is shown."
				},
				{
					name: "none",
					"description": "A bounce effect is shown when the user hits a zoom limit during a manipulation."
				}
			],
			"status": "nonstandard",
			"syntax": "none | chained",
			"description": "Specifies the zoom behavior that occurs when a user hits the zoom limit during a manipulation."
		},
		{
			name: "-ms-content-zooming",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "none",
					"description": "The element is not zoomable."
				},
				{
					name: "zoom"
				}
			],
			"status": "nonstandard",
			"syntax": "none | zoom",
			"description": "Specifies whether zooming is enabled.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-content-zoom-limit",
			browsers: [
				"E",
				"IE10"
			],
			"status": "nonstandard",
			"syntax": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
			"description": "Shorthand property for the -ms-content-zoom-limit-min and -ms-content-zoom-limit-max properties.",
			"restrictions": [
				"percentage"
			]
		},
		{
			name: "-ms-content-zoom-limit-max",
			browsers: [
				"E",
				"IE10"
			],
			"status": "nonstandard",
			"syntax": "<percentage>",
			"description": "Specifies the maximum zoom factor.",
			"restrictions": [
				"percentage"
			]
		},
		{
			name: "-ms-content-zoom-limit-min",
			browsers: [
				"E",
				"IE10"
			],
			"status": "nonstandard",
			"syntax": "<percentage>",
			"description": "Specifies the minimum zoom factor.",
			"restrictions": [
				"percentage"
			]
		},
		{
			name: "-ms-content-zoom-snap",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "mandatory",
					"description": "Indicates that the motion of the content after the contact is picked up is always adjusted so that it lands on a snap-point."
				},
				{
					name: "none",
					"description": "Indicates that zooming is unaffected by any defined snap-points."
				},
				{
					name: "proximity",
					"description": "Indicates that the motion of the content after the contact is picked up may be adjusted if the content would normally stop \"close enough\" to a snap-point."
				},
				{
					name: "snapInterval(100%, 100%)",
					"description": "Specifies where the snap-points will be placed."
				},
				{
					name: "snapList()",
					"description": "Specifies the position of individual snap-points as a comma-separated list of zoom factors."
				}
			],
			"status": "nonstandard",
			"syntax": "<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>",
			"description": "Shorthand property for the -ms-content-zoom-snap-type and -ms-content-zoom-snap-points properties."
		},
		{
			name: "-ms-content-zoom-snap-points",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "snapInterval(100%, 100%)",
					"description": "Specifies where the snap-points will be placed."
				},
				{
					name: "snapList()",
					"description": "Specifies the position of individual snap-points as a comma-separated list of zoom factors."
				}
			],
			"status": "nonstandard",
			"syntax": "snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )",
			"description": "Defines where zoom snap-points are located."
		},
		{
			name: "-ms-content-zoom-snap-type",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "mandatory",
					"description": "Indicates that the motion of the content after the contact is picked up is always adjusted so that it lands on a snap-point."
				},
				{
					name: "none",
					"description": "Indicates that zooming is unaffected by any defined snap-points."
				},
				{
					name: "proximity",
					"description": "Indicates that the motion of the content after the contact is picked up may be adjusted if the content would normally stop \"close enough\" to a snap-point."
				}
			],
			"status": "nonstandard",
			"syntax": "none | proximity | mandatory",
			"description": "Specifies how zooming is affected by defined snap-points.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-filter",
			browsers: [
				"IE8-9"
			],
			"status": "nonstandard",
			"syntax": "<string>",
			"description": "IE only. Used to produce visual effects.",
			"restrictions": [
				"string"
			]
		},
		{
			name: "-ms-flex",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "Retrieves the value of the main size property as the used 'flex-basis'."
				},
				{
					name: "none",
					"description": "Expands to '0 0 auto'."
				}
			],
			"description": "specifies the parameters of a flexible length: the positive and negative flexibility, and the preferred size.",
			"restrictions": [
				"length",
				"number",
				"percentage"
			]
		},
		{
			name: "-ms-flex-align",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "baseline",
					"description": "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
				},
				{
					name: "center",
					"description": "The flex item’s margin box is centered in the cross axis within the line."
				},
				{
					name: "end",
					"description": "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
				},
				{
					name: "start",
					"description": "The cross-start margin edge of the flexbox item is placed flush with the cross-start edge of the line."
				},
				{
					name: "stretch",
					"description": "If the cross size property of the flexbox item is anything other than 'auto', this value is identical to 'start'."
				}
			],
			"description": "Aligns flex items along the cross axis of the current line of the flex container.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-flex-direction",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "column",
					"description": "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
				},
				{
					name: "column-reverse"
				},
				{
					name: "row",
					"description": "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
				},
				{
					name: "row-reverse"
				}
			],
			"description": "Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-flex-flow",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "column",
					"description": "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
				},
				{
					name: "column-reverse"
				},
				{
					name: "nowrap",
					"description": "The flex container is single-line."
				},
				{
					name: "row",
					"description": "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
				},
				{
					name: "wrap",
					"description": "The flexbox is multi-line."
				},
				{
					name: "wrap-reverse"
				}
			],
			"description": "Specifies how flexbox items are placed in the flexbox.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-flex-item-align",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "Computes to the value of 'align-items' on the element’s parent, or 'stretch' if the element has no parent. On absolutely positioned elements, it computes to itself."
				},
				{
					name: "baseline",
					"description": "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
				},
				{
					name: "center",
					"description": "The flex item’s margin box is centered in the cross axis within the line."
				},
				{
					name: "end",
					"description": "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
				},
				{
					name: "start",
					"description": "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
				},
				{
					name: "stretch",
					"description": "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
				}
			],
			"description": "Allows the default alignment along the cross axis to be overridden for individual flex items.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-flex-line-pack",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "center",
					"description": "Lines are packed toward the center of the flex container."
				},
				{
					name: "distribute",
					"description": "Lines are evenly distributed in the flex container, with half-size spaces on either end."
				},
				{
					name: "end",
					"description": "Lines are packed toward the end of the flex container."
				},
				{
					name: "justify",
					"description": "Lines are evenly distributed in the flex container."
				},
				{
					name: "start",
					"description": "Lines are packed toward the start of the flex container."
				},
				{
					name: "stretch",
					"description": "Lines stretch to take up the remaining space."
				}
			],
			"description": "Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-flex-order",
			browsers: [
				"IE10"
			],
			"description": "Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-ms-flex-pack",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "center",
					"description": "Flex items are packed toward the center of the line."
				},
				{
					name: "distribute",
					"description": "Flex items are evenly distributed in the line, with half-size spaces on either end."
				},
				{
					name: "end",
					"description": "Flex items are packed toward the end of the line."
				},
				{
					name: "justify",
					"description": "Flex items are evenly distributed in the line."
				},
				{
					name: "start",
					"description": "Flex items are packed toward the start of the line."
				}
			],
			"description": "Aligns flex items along the main axis of the current line of the flex container.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-flex-wrap",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "nowrap",
					"description": "The flex container is single-line."
				},
				{
					name: "wrap",
					"description": "The flexbox is multi-line."
				},
				{
					name: "wrap-reverse"
				}
			],
			"description": "Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-flow-from",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "none",
					"description": "The block container is not a CSS Region."
				}
			],
			"status": "nonstandard",
			"syntax": "[ none | <custom-ident> ]#",
			"description": "Makes a block container a region and associates it with a named flow.",
			"restrictions": [
				"identifier"
			]
		},
		{
			name: "-ms-flow-into",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "none",
					"description": "The element is not moved to a named flow and normal CSS processing takes place."
				}
			],
			"status": "nonstandard",
			"syntax": "[ none | <custom-ident> ]#",
			"description": "Places an element or its contents into a named flow.",
			"restrictions": [
				"identifier"
			]
		},
		{
			name: "-ms-grid-column",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto"
				},
				{
					name: "end"
				},
				{
					name: "start"
				}
			],
			"description": "Used to place grid items and explicitly defined grid cells in the Grid.",
			"restrictions": [
				"integer",
				"string",
				"enum"
			]
		},
		{
			name: "-ms-grid-column-align",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "center",
					"description": "Places the center of the Grid Item's margin box at the center of the Grid Item's column."
				},
				{
					name: "end",
					"description": "Aligns the end edge of the Grid Item's margin box to the end edge of the Grid Item's column."
				},
				{
					name: "start",
					"description": "Aligns the starting edge of the Grid Item's margin box to the starting edge of the Grid Item's column."
				},
				{
					name: "stretch",
					"description": "Ensures that the Grid Item's margin box is equal to the size of the Grid Item's column."
				}
			],
			"description": "Aligns the columns in a grid.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-grid-columns",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Lays out the columns of the grid."
		},
		{
			name: "-ms-grid-column-span",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Specifies the number of columns to span.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-ms-grid-layer",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Grid-layer is similar in concept to z-index, but avoids overloading the meaning of the z-index property, which is applicable only to positioned elements.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-ms-grid-row",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto"
				},
				{
					name: "end"
				},
				{
					name: "start"
				}
			],
			"description": "grid-row is used to place grid items and explicitly defined grid cells in the Grid.",
			"restrictions": [
				"integer",
				"string",
				"enum"
			]
		},
		{
			name: "-ms-grid-row-align",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "center",
					"description": "Places the center of the Grid Item's margin box at the center of the Grid Item's row."
				},
				{
					name: "end",
					"description": "Aligns the end edge of the Grid Item's margin box to the end edge of the Grid Item's row."
				},
				{
					name: "start",
					"description": "Aligns the starting edge of the Grid Item's margin box to the starting edge of the Grid Item's row."
				},
				{
					name: "stretch",
					"description": "Ensures that the Grid Item's margin box is equal to the size of the Grid Item's row."
				}
			],
			"description": "Aligns the rows in a grid.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-grid-rows",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Lays out the columns of the grid."
		},
		{
			name: "-ms-grid-row-span",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Specifies the number of rows to span.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-ms-high-contrast-adjust",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "Properties will be adjusted as applicable."
				},
				{
					name: "none",
					"description": "No adjustments will be applied."
				}
			],
			"status": "nonstandard",
			"syntax": "auto | none",
			"description": "Specifies if properties should be adjusted in high contrast mode.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-hyphenate-limit-chars",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "The user agent chooses a value that adapts to the current layout."
				}
			],
			"status": "nonstandard",
			"syntax": "auto | <integer>{1,3}",
			"description": "Specifies the minimum number of characters in a hyphenated word.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-ms-hyphenate-limit-lines",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "no-limit"
				}
			],
			"status": "nonstandard",
			"syntax": "no-limit | <integer>",
			"description": "Indicates the maximum number of successive hyphenated lines in an element.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-ms-hyphenate-limit-zone",
			browsers: [
				"E",
				"IE10"
			],
			"status": "nonstandard",
			"syntax": "<percentage> | <length>",
			"description": "Specifies the maximum amount of unfilled space (before justification) that may be left in the line box before hyphenation is triggered to pull part of a word from the next line back up into the current line.",
			"restrictions": [
				"percentage",
				"length"
			]
		},
		{
			name: "-ms-hyphens",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
				},
				{
					name: "manual"
				},
				{
					name: "none",
					"description": "Words are not broken at line breaks, even if characters inside the word suggest line break points."
				}
			],
			"description": "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-ime-mode",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "active"
				},
				{
					name: "auto",
					"description": "No change is made to the current input method editor state. This is the default."
				},
				{
					name: "disabled"
				},
				{
					name: "inactive"
				},
				{
					name: "normal",
					"description": "The IME state should be normal; this value can be used in a user style sheet to override the page setting."
				}
			],
			"description": "Controls the state of the input method editor for text fields.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-interpolation-mode",
			browsers: [
				"IE7"
			],
			values: [
				{
					name: "bicubic"
				},
				{
					name: "nearest-neighbor"
				}
			],
			"description": "Gets or sets the interpolation (resampling) method used to stretch images.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-layout-grid",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "char",
					"description": "Any of the range of character values available to the -ms-layout-grid-char property."
				},
				{
					name: "line",
					"description": "Any of the range of line values available to the -ms-layout-grid-line property."
				},
				{
					name: "mode"
				},
				{
					name: "type"
				}
			],
			"description": "Sets or retrieves the composite document grid properties that specify the layout of text characters."
		},
		{
			name: "-ms-layout-grid-char",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "Largest character in the font of the element is used to set the character grid."
				},
				{
					name: "none",
					"description": "Default. No character grid is set."
				}
			],
			"description": "Sets or retrieves the size of the character grid used for rendering the text content of an element.",
			"restrictions": [
				"enum",
				"length",
				"percentage"
			]
		},
		{
			name: "-ms-layout-grid-line",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "Largest character in the font of the element is used to set the character grid."
				},
				{
					name: "none",
					"description": "Default. No grid line is set."
				}
			],
			"description": "Sets or retrieves the gridline value used for rendering the text content of an element.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-ms-layout-grid-mode",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "both",
					"description": "Default. Both the char and line grid modes are enabled. This setting is necessary to fully enable the layout grid on an element."
				},
				{
					name: "char",
					"description": "Only a character grid is used. This is recommended for use with block-level elements, such as a blockquote, where the line grid is intended to be disabled."
				},
				{
					name: "line",
					"description": "Only a line grid is used. This is recommended for use with inline elements, such as a span, to disable the horizontal grid on runs of text that act as a single entity in the grid layout."
				},
				{
					name: "none",
					"description": "No grid is used."
				}
			],
			"description": "Gets or sets whether the text layout grid uses two dimensions.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-layout-grid-type",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "fixed",
					"description": "Grid used for monospaced layout. All noncursive characters are treated as equal; every character is centered within a single grid space by default."
				},
				{
					name: "loose",
					"description": "Default. Grid used for Japanese and Korean characters."
				},
				{
					name: "strict",
					"description": "Grid used for Chinese, as well as Japanese (Genko) and Korean characters. Only the ideographs, kanas, and wide characters are snapped to the grid."
				}
			],
			"description": "Sets or retrieves the type of grid used for rendering the text content of an element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-line-break",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "The UA determines the set of line-breaking restrictions to use for CJK scripts, and it may vary the restrictions based on the length of the line; e.g., use a less restrictive set of line-break rules for short lines."
				},
				{
					name: "keep-all",
					"description": "Sequences of CJK characters can no longer break on implied break points. This option should only be used where the presence of word separator characters still creates line-breaking opportunities, as in Korean."
				},
				{
					name: "newspaper",
					"description": "Breaks CJK scripts using the least restrictive set of line-breaking rules. Typically used for short lines, such as in newspapers."
				},
				{
					name: "normal",
					"description": "Breaks CJK scripts using a normal set of line-breaking rules."
				},
				{
					name: "strict",
					"description": "Breaks CJK scripts using a more restrictive set of line-breaking rules than 'normal'."
				}
			],
			"description": "Specifies what set of line breaking restrictions are in effect within the element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-overflow-style",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "No preference, UA should use the first scrolling method in the list that it supports."
				},
				{
					name: "-ms-autohiding-scrollbar"
				},
				{
					name: "none",
					"description": "Indicates the element does not display scrollbars or panning indicators, even when its content overflows."
				},
				{
					name: "scrollbar"
				}
			],
			"status": "nonstandard",
			"syntax": "auto | none | scrollbar | -ms-autohiding-scrollbar",
			"description": "Specify whether content is clipped when it overflows the element's content area.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-perspective",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "none",
					"description": "No perspective transform is applied."
				}
			],
			"description": "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-ms-perspective-origin",
			browsers: [
				"IE10"
			],
			"description": "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
			"restrictions": [
				"position",
				"percentage",
				"length"
			]
		},
		{
			name: "-ms-perspective-origin-x",
			browsers: [
				"IE10"
			],
			"description": "Establishes the origin for the perspective property. It effectively sets the X  position at which the viewer appears to be looking at the children of the element.",
			"restrictions": [
				"position",
				"percentage",
				"length"
			]
		},
		{
			name: "-ms-perspective-origin-y",
			browsers: [
				"IE10"
			],
			"description": "Establishes the origin for the perspective property. It effectively sets the Y position at which the viewer appears to be looking at the children of the element.",
			"restrictions": [
				"position",
				"percentage",
				"length"
			]
		},
		{
			name: "-ms-progress-appearance",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "bar"
				},
				{
					name: "ring"
				}
			],
			"description": "Gets or sets a value that specifies whether a progress control displays as a bar or a ring.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-scrollbar-3dlight-color",
			browsers: [
				"IE5"
			],
			"status": "nonstandard",
			"syntax": "<color>",
			"description": "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-ms-scrollbar-arrow-color",
			browsers: [
				"IE5"
			],
			"status": "nonstandard",
			"syntax": "<color>",
			"description": "Determines the color of the arrow elements of a scroll arrow.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-ms-scrollbar-base-color",
			browsers: [
				"IE5"
			],
			"status": "nonstandard",
			"syntax": "<color>",
			"description": "Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-ms-scrollbar-darkshadow-color",
			browsers: [
				"IE5"
			],
			"status": "nonstandard",
			"syntax": "<color>",
			"description": "Determines the color of the gutter of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-ms-scrollbar-face-color",
			browsers: [
				"IE5"
			],
			"status": "nonstandard",
			"syntax": "<color>",
			"description": "Determines the color of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-ms-scrollbar-highlight-color",
			browsers: [
				"IE5"
			],
			"status": "nonstandard",
			"syntax": "<color>",
			"description": "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-ms-scrollbar-shadow-color",
			browsers: [
				"IE5"
			],
			"status": "nonstandard",
			"syntax": "<color>",
			"description": "Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-ms-scrollbar-track-color",
			browsers: [
				"IE5"
			],
			"status": "nonstandard",
			"syntax": "<color>",
			"description": "Determines the color of the track element of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-ms-scroll-chaining",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "chained"
				},
				{
					name: "none"
				}
			],
			"status": "nonstandard",
			"syntax": "chained | none",
			"description": "Gets or sets a value that indicates the scrolling behavior that occurs when a user hits the content boundary during a manipulation.",
			"restrictions": [
				"enum",
				"length"
			]
		},
		{
			name: "-ms-scroll-limit",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto"
				}
			],
			"status": "nonstandard",
			"syntax": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
			"description": "Gets or sets a shorthand value that sets values for the -ms-scroll-limit-x-min, -ms-scroll-limit-y-min, -ms-scroll-limit-x-max, and -ms-scroll-limit-y-max properties.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-ms-scroll-limit-x-max",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto"
				}
			],
			"status": "nonstandard",
			"syntax": "auto | <length>",
			"description": "Gets or sets a value that specifies the maximum value for the scrollLeft property.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-ms-scroll-limit-x-min",
			browsers: [
				"E",
				"IE10"
			],
			"status": "nonstandard",
			"syntax": "<length>",
			"description": "Gets or sets a value that specifies the minimum value for the scrollLeft property.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-ms-scroll-limit-y-max",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto"
				}
			],
			"status": "nonstandard",
			"syntax": "auto | <length>",
			"description": "Gets or sets a value that specifies the maximum value for the scrollTop property.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-ms-scroll-limit-y-min",
			browsers: [
				"E",
				"IE10"
			],
			"status": "nonstandard",
			"syntax": "<length>",
			"description": "Gets or sets a value that specifies the minimum value for the scrollTop property.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-ms-scroll-rails",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "none"
				},
				{
					name: "railed"
				}
			],
			"status": "nonstandard",
			"syntax": "none | railed",
			"description": "Gets or sets a value that indicates whether or not small motions perpendicular to the primary axis of motion will result in either changes to both the scrollTop and scrollLeft properties or a change to the primary axis (for instance, either the scrollTop or scrollLeft properties will change, but not both).",
			"restrictions": [
				"enum",
				"length"
			]
		},
		{
			name: "-ms-scroll-snap-points-x",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "snapInterval(100%, 100%)"
				},
				{
					name: "snapList()"
				}
			],
			"status": "nonstandard",
			"syntax": "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )",
			"description": "Gets or sets a value that defines where snap-points will be located along the x-axis.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-scroll-snap-points-y",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "snapInterval(100%, 100%)"
				},
				{
					name: "snapList()"
				}
			],
			"status": "nonstandard",
			"syntax": "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )",
			"description": "Gets or sets a value that defines where snap-points will be located along the y-axis.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-scroll-snap-type",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "none",
					"description": "The visual viewport of this scroll container must ignore snap points, if any, when scrolled."
				},
				{
					name: "mandatory",
					"description": "The visual viewport of this scroll container is guaranteed to rest on a snap point when there are no active scrolling operations."
				},
				{
					name: "proximity",
					"description": "The visual viewport of this scroll container may come to rest on a snap point at the termination of a scroll at the discretion of the UA given the parameters of the scroll."
				}
			],
			"status": "nonstandard",
			"syntax": "none | proximity | mandatory",
			"description": "Gets or sets a value that defines what type of snap-point should be used for the current element. There are two type of snap-points, with the primary difference being whether or not the user is guaranteed to always stop on a snap-point.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-scroll-snap-x",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "mandatory"
				},
				{
					name: "none"
				},
				{
					name: "proximity"
				},
				{
					name: "snapInterval(100%, 100%)"
				},
				{
					name: "snapList()"
				}
			],
			"status": "nonstandard",
			"syntax": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
			"description": "Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-x properties.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-scroll-snap-y",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "mandatory"
				},
				{
					name: "none"
				},
				{
					name: "proximity"
				},
				{
					name: "snapInterval(100%, 100%)"
				},
				{
					name: "snapList()"
				}
			],
			"status": "nonstandard",
			"syntax": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
			"description": "Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-y properties.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-scroll-translation",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "none"
				},
				{
					name: "vertical-to-horizontal"
				}
			],
			"status": "nonstandard",
			"syntax": "none | vertical-to-horizontal",
			"description": "Gets or sets a value that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-text-align-last",
			browsers: [
				"E",
				"IE8"
			],
			values: [
				{
					name: "auto"
				},
				{
					name: "center",
					"description": "The inline contents are centered within the line box."
				},
				{
					name: "justify",
					"description": "The text is justified according to the method specified by the 'text-justify' property."
				},
				{
					name: "left",
					"description": "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
				},
				{
					name: "right",
					"description": "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
				}
			],
			"description": "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-text-autospace",
			browsers: [
				"E",
				"IE8"
			],
			values: [
				{
					name: "ideograph-alpha"
				},
				{
					name: "ideograph-numeric"
				},
				{
					name: "ideograph-parenthesis"
				},
				{
					name: "ideograph-space"
				},
				{
					name: "none",
					"description": "No extra space is created."
				},
				{
					name: "punctuation"
				}
			],
			"status": "nonstandard",
			"syntax": "none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space",
			"description": "Determines whether or not a full-width punctuation mark character should be trimmed if it appears at the beginning of a line, so that its 'ink' lines up with the first glyph in the line above and below.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-text-combine-horizontal",
			browsers: [
				"E",
				"IE11"
			],
			values: [
				{
					name: "all",
					"description": "Attempt to typeset horizontally all consecutive characters within the box such that they take up the space of a single character within the vertical line box."
				},
				{
					name: "digits"
				},
				{
					name: "none",
					"description": "No special processing."
				}
			],
			"description": "This property specifies the combination of multiple characters into the space of a single character.",
			"restrictions": [
				"enum",
				"integer"
			]
		},
		{
			name: "-ms-text-justify",
			browsers: [
				"E",
				"IE8"
			],
			values: [
				{
					name: "auto",
					"description": "The UA determines the justification algorithm to follow, based on a balance between performance and adequate presentation quality."
				},
				{
					name: "distribute",
					"description": "Justification primarily changes spacing both at word separators and at grapheme cluster boundaries in all scripts except those in the connected and cursive groups. This value is sometimes used in e.g. Japanese, often with the 'text-align-last' property."
				},
				{
					name: "inter-cluster"
				},
				{
					name: "inter-ideograph"
				},
				{
					name: "inter-word"
				},
				{
					name: "kashida"
				}
			],
			"description": "Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-text-kashida-space",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Sets or retrieves the ratio of kashida expansion to white space expansion when justifying lines of text in the object.",
			"restrictions": [
				"percentage"
			]
		},
		{
			name: "-ms-text-overflow",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "clip"
				},
				{
					name: "ellipsis"
				}
			],
			"description": "Text can overflow for example when it is prevented from wrapping",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-text-size-adjust",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "Renderers must use the default size adjustment when displaying on a small device."
				},
				{
					name: "none",
					"description": "Renderers must not do size adjustment when displaying on a small device."
				}
			],
			"description": "Specifies a size adjustment for displaying text content in mobile browsers.",
			"restrictions": [
				"enum",
				"percentage"
			]
		},
		{
			name: "-ms-text-underline-position",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "alphabetic",
					"description": "The underline is aligned with the alphabetic baseline. In this case the underline is likely to cross some descenders."
				},
				{
					name: "auto",
					"description": "The user agent may use any algorithm to determine the underline's position. In horizontal line layout, the underline should be aligned as for alphabetic. In vertical line layout, if the language is set to Japanese or Korean, the underline should be aligned as for over."
				},
				{
					name: "over"
				},
				{
					name: "under"
				}
			],
			"description": "Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements.This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-touch-action",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "The element is a passive element, with several exceptions."
				},
				{
					name: "double-tap-zoom",
					"description": "The element will zoom on double-tap."
				},
				{
					name: "manipulation",
					"description": "The element is a manipulation-causing element."
				},
				{
					name: "none",
					"description": "The element is a manipulation-blocking element."
				},
				{
					name: "pan-x",
					"description": "The element permits touch-driven panning on the horizontal axis. The touch pan is performed on the nearest ancestor with horizontally scrollable content."
				},
				{
					name: "pan-y",
					"description": "The element permits touch-driven panning on the vertical axis. The touch pan is performed on the nearest ancestor with vertically scrollable content."
				},
				{
					name: "pinch-zoom",
					"description": "The element permits pinch-zooming. The pinch-zoom is performed on the nearest ancestor with zoomable content."
				}
			],
			"description": "Gets or sets a value that indicates whether and how a given region can be manipulated by the user.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-touch-select",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "grippers"
				},
				{
					name: "none",
					"description": "Grippers are always off."
				}
			],
			"status": "nonstandard",
			"syntax": "grippers | none",
			"description": "Gets or sets a value that toggles the 'gripper' visual elements that enable touch text selection.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-transform",
			browsers: [
				"IE9-9"
			],
			values: [
				{
					name: "matrix()"
				},
				{
					name: "matrix3d()"
				},
				{
					name: "none"
				},
				{
					name: "rotate()"
				},
				{
					name: "rotate3d()"
				},
				{
					name: "rotateX('angle')"
				},
				{
					name: "rotateY('angle')"
				},
				{
					name: "rotateZ('angle')"
				},
				{
					name: "scale()"
				},
				{
					name: "scale3d()"
				},
				{
					name: "scaleX()"
				},
				{
					name: "scaleY()"
				},
				{
					name: "scaleZ()"
				},
				{
					name: "skew()"
				},
				{
					name: "skewX()"
				},
				{
					name: "skewY()"
				},
				{
					name: "translate()"
				},
				{
					name: "translate3d()"
				},
				{
					name: "translateX()"
				},
				{
					name: "translateY()"
				},
				{
					name: "translateZ()"
				}
			],
			"description": "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-transform-origin",
			browsers: [
				"IE9-9"
			],
			"description": "Establishes the origin of transformation for an element.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			name: "-ms-transform-origin-x",
			browsers: [
				"IE10"
			],
			"description": "The x coordinate of the origin for transforms applied to an element with respect to its border box.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "-ms-transform-origin-y",
			browsers: [
				"IE10"
			],
			"description": "The y coordinate of the origin for transforms applied to an element with respect to its border box.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "-ms-transform-origin-z",
			browsers: [
				"IE10"
			],
			"description": "The z coordinate of the origin for transforms applied to an element with respect to its border box.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "-ms-user-select",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "element"
				},
				{
					name: "none"
				},
				{
					name: "text"
				}
			],
			"status": "nonstandard",
			"syntax": "none | element | text",
			"description": "Controls the appearance of selection.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-word-break",
			browsers: [
				"IE8"
			],
			values: [
				{
					name: "break-all"
				},
				{
					name: "keep-all",
					"description": "Block characters can no longer create implied break points."
				},
				{
					name: "normal",
					"description": "Breaks non-CJK scripts according to their own rules."
				}
			],
			"description": "Specifies line break opportunities for non-CJK scripts.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-word-wrap",
			browsers: [
				"IE8"
			],
			values: [
				{
					name: "break-word",
					"description": "An unbreakable 'word' may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
				},
				{
					name: "normal",
					"description": "Lines may break only at allowed break points."
				}
			],
			"description": "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-wrap-flow",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "auto",
					"description": "For floats an exclusion is created, for all other elements an exclusion is not created."
				},
				{
					name: "both",
					"description": "Inline flow content can flow on all sides of the exclusion."
				},
				{
					name: "clear"
				},
				{
					name: "end",
					"description": "Inline flow content can wrap on the end side of the exclusion area but must leave the area to the start edge of the exclusion area empty."
				},
				{
					name: "maximum"
				},
				{
					name: "minimum"
				},
				{
					name: "start",
					"description": "Inline flow content can wrap on the start edge of the exclusion area but must leave the area to end edge of the exclusion area empty."
				}
			],
			"status": "nonstandard",
			"syntax": "auto | both | start | end | maximum | clear",
			"description": "An element becomes an exclusion when its 'wrap-flow' property has a computed value other than 'auto'.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-wrap-margin",
			browsers: [
				"E",
				"IE10"
			],
			"status": "nonstandard",
			"syntax": "<length>",
			"description": "Gets or sets a value that is used to offset the inner wrap shape from other shapes.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "-ms-wrap-through",
			browsers: [
				"E",
				"IE10"
			],
			values: [
				{
					name: "none",
					"description": "The exclusion element does not inherit its parent node's wrapping context. Its descendants are only subject to exclusion shapes defined inside the element."
				},
				{
					name: "wrap",
					"description": "The exclusion element inherits its parent node's wrapping context. Its descendant inline content wraps around exclusions defined outside the element."
				}
			],
			"status": "nonstandard",
			"syntax": "wrap | none",
			"description": "Specifies if an element inherits its parent wrapping context. In other words if it is subject to the exclusions defined outside the element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-writing-mode",
			browsers: [
				"IE8"
			],
			values: [
				{
					name: "bt-lr"
				},
				{
					name: "bt-rl"
				},
				{
					name: "lr-bt"
				},
				{
					name: "lr-tb"
				},
				{
					name: "rl-bt"
				},
				{
					name: "rl-tb"
				},
				{
					name: "tb-lr"
				},
				{
					name: "tb-rl"
				}
			],
			"description": "Shorthand property for both 'direction' and 'block-progression'.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-ms-zoom",
			browsers: [
				"IE8"
			],
			values: [
				{
					name: "normal"
				}
			],
			"description": "Sets or retrieves the magnification scale of the object.",
			"restrictions": [
				"enum",
				"integer",
				"number",
				"percentage"
			]
		},
		{
			name: "-ms-zoom-animation",
			browsers: [
				"IE10"
			],
			values: [
				{
					name: "default"
				},
				{
					name: "none"
				}
			],
			"description": "Gets or sets a value that indicates whether an animation is used when zooming.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "nav-down",
			browsers: [
				"O9.5"
			],
			values: [
				{
					name: "auto",
					"description": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
				},
				{
					name: "current"
				},
				{
					name: "root"
				}
			],
			"description": "Provides an way to control directional focus navigation.",
			"restrictions": [
				"enum",
				"identifier",
				"string"
			]
		},
		{
			name: "nav-index",
			browsers: [
				"O9.5"
			],
			values: [
				{
					name: "auto",
					"description": "The element's sequential navigation order is assigned automatically by the user agent."
				}
			],
			"description": "Provides an input-method-neutral way of specifying the sequential navigation order (also known as 'tabbing order').",
			"restrictions": [
				"number"
			]
		},
		{
			name: "nav-left",
			browsers: [
				"O9.5"
			],
			values: [
				{
					name: "auto",
					"description": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
				},
				{
					name: "current"
				},
				{
					name: "root"
				}
			],
			"description": "Provides an way to control directional focus navigation.",
			"restrictions": [
				"enum",
				"identifier",
				"string"
			]
		},
		{
			name: "nav-right",
			browsers: [
				"O9.5"
			],
			values: [
				{
					name: "auto",
					"description": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
				},
				{
					name: "current"
				},
				{
					name: "root"
				}
			],
			"description": "Provides an way to control directional focus navigation.",
			"restrictions": [
				"enum",
				"identifier",
				"string"
			]
		},
		{
			name: "nav-up",
			browsers: [
				"O9.5"
			],
			values: [
				{
					name: "auto",
					"description": "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
				},
				{
					name: "current"
				},
				{
					name: "root"
				}
			],
			"description": "Provides an way to control directional focus navigation.",
			"restrictions": [
				"enum",
				"identifier",
				"string"
			]
		},
		{
			name: "negative",
			browsers: [
				"FF33"
			],
			"syntax": "<symbol> <symbol>?",
			"description": "@counter-style descriptor. Defines how to alter the representation when the counter value is negative.",
			"restrictions": [
				"image",
				"identifier",
				"string"
			]
		},
		{
			name: "-o-animation",
			browsers: [
				"O12"
			],
			values: [
				{
					name: "alternate"
				},
				{
					name: "alternate-reverse"
				},
				{
					name: "backwards"
				},
				{
					name: "both",
					"description": "Both forwards and backwards fill modes are applied."
				},
				{
					name: "forwards"
				},
				{
					name: "infinite",
					"description": "Causes the animation to repeat forever."
				},
				{
					name: "none",
					"description": "No animation is performed"
				},
				{
					name: "normal",
					"description": "Normal playback."
				},
				{
					name: "reverse",
					"description": "All iterations of the animation are played in the reverse direction from the way they were specified."
				}
			],
			"description": "Shorthand property combines six of the animation properties into a single property.",
			"restrictions": [
				"time",
				"enum",
				"timing-function",
				"identifier",
				"number"
			]
		},
		{
			name: "-o-animation-delay",
			browsers: [
				"O12"
			],
			"description": "Defines when the animation will start.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-o-animation-direction",
			browsers: [
				"O12"
			],
			values: [
				{
					name: "alternate"
				},
				{
					name: "alternate-reverse"
				},
				{
					name: "normal",
					"description": "Normal playback."
				},
				{
					name: "reverse",
					"description": "All iterations of the animation are played in the reverse direction from the way they were specified."
				}
			],
			"description": "Defines whether or not the animation should play in reverse on alternate cycles.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-o-animation-duration",
			browsers: [
				"O12"
			],
			"description": "Defines the length of time that an animation takes to complete one cycle.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-o-animation-fill-mode",
			browsers: [
				"O12"
			],
			values: [
				{
					name: "backwards"
				},
				{
					name: "both",
					"description": "Both forwards and backwards fill modes are applied."
				},
				{
					name: "forwards"
				},
				{
					name: "none",
					"description": "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
				}
			],
			"description": "Defines what values are applied by the animation outside the time it is executing.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-o-animation-iteration-count",
			browsers: [
				"O12"
			],
			values: [
				{
					name: "infinite",
					"description": "Causes the animation to repeat forever."
				}
			],
			"description": "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
			"restrictions": [
				"number",
				"enum"
			]
		},
		{
			name: "-o-animation-name",
			browsers: [
				"O12"
			],
			values: [
				{
					name: "none",
					"description": "No animation is performed"
				}
			],
			"description": "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
			"restrictions": [
				"identifier",
				"enum"
			]
		},
		{
			name: "-o-animation-play-state",
			browsers: [
				"O12"
			],
			values: [
				{
					name: "paused"
				},
				{
					name: "running"
				}
			],
			"description": "Defines whether the animation is running or paused.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-o-animation-timing-function",
			browsers: [
				"O12"
			],
			"description": "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
			"restrictions": [
				"timing-function"
			]
		},
		{
			name: "object-fit",
			browsers: [
				"E16",
				"FF36",
				"S10",
				"C31",
				"O19"
			],
			values: [
				{
					name: "contain",
					"description": "The replaced content is sized to maintain its aspect ratio while fitting within the element’s content box: its concrete object size is resolved as a contain constraint against the element's used width and height."
				},
				{
					name: "cover",
					"description": "The replaced content is sized to maintain its aspect ratio while filling the element's entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height."
				},
				{
					name: "fill",
					"description": "The replaced content is sized to fill the element’s content box: the object's concrete object size is the element's used width and height."
				},
				{
					name: "none",
					"description": "The replaced content is not resized to fit inside the element's content box"
				},
				{
					name: "scale-down"
				}
			],
			"syntax": "fill | contain | cover | none | scale-down",
			"description": "Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "object-position",
			browsers: [
				"E16",
				"FF36",
				"S10",
				"C31",
				"O19"
			],
			"syntax": "<position>",
			"description": "Determines the alignment of the replaced element inside its box.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			name: "-o-border-image",
			browsers: [
				"O11.6"
			],
			values: [
				{
					name: "auto",
					"description": "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
				},
				{
					name: "fill",
					"description": "Causes the middle part of the border-image to be preserved."
				},
				{
					name: "none"
				},
				{
					name: "repeat"
				},
				{
					name: "round",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
				},
				{
					name: "space",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
				},
				{
					name: "stretch",
					"description": "The image is stretched to fill the area."
				}
			],
			"description": "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
			"restrictions": [
				"length",
				"percentage",
				"number",
				"image",
				"enum"
			]
		},
		{
			name: "-o-object-fit",
			browsers: [
				"O10.6"
			],
			values: [
				{
					name: "contain",
					"description": "The replaced content is sized to maintain its aspect ratio while fitting within the element’s content box: its concrete object size is resolved as a contain constraint against the element's used width and height."
				},
				{
					name: "cover",
					"description": "The replaced content is sized to maintain its aspect ratio while filling the element's entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height."
				},
				{
					name: "fill",
					"description": "The replaced content is sized to fill the element’s content box: the object's concrete object size is the element's used width and height."
				},
				{
					name: "none",
					"description": "The replaced content is not resized to fit inside the element's content box"
				},
				{
					name: "scale-down"
				}
			],
			"description": "Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-o-object-position",
			browsers: [
				"O10.6"
			],
			"description": "Determines the alignment of the replaced element inside its box.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			name: "opacity",
			"syntax": "<number>",
			"description": "Opacity of an element's text, where 1 is opaque and 0 is entirely transparent.",
			"restrictions": [
				"number(0-1)"
			]
		},
		{
			name: "order",
			"syntax": "<integer>",
			"description": "Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "orphans",
			browsers: [
				"E12",
				"C25",
				"IE8",
				"O9.2"
			],
			"syntax": "<integer>",
			"description": "Specifies the minimum number of line boxes in a block container that must be left in a fragment before a fragmentation break.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-o-table-baseline",
			browsers: [
				"O9.6"
			],
			"description": "Determines which row of a inline-table should be used as baseline of inline-table.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-o-tab-size",
			browsers: [
				"O10.6"
			],
			"description": "This property determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.",
			"restrictions": [
				"integer",
				"length"
			]
		},
		{
			name: "-o-text-overflow",
			browsers: [
				"O10"
			],
			values: [
				{
					name: "clip"
				},
				{
					name: "ellipsis"
				}
			],
			"description": "Text can overflow for example when it is prevented from wrapping",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-o-transform",
			browsers: [
				"O10.5"
			],
			values: [
				{
					name: "matrix()"
				},
				{
					name: "matrix3d()"
				},
				{
					name: "none"
				},
				{
					name: "rotate()"
				},
				{
					name: "rotate3d()"
				},
				{
					name: "rotateX('angle')"
				},
				{
					name: "rotateY('angle')"
				},
				{
					name: "rotateZ('angle')"
				},
				{
					name: "scale()"
				},
				{
					name: "scale3d()"
				},
				{
					name: "scaleX()"
				},
				{
					name: "scaleY()"
				},
				{
					name: "scaleZ()"
				},
				{
					name: "skew()"
				},
				{
					name: "skewX()"
				},
				{
					name: "skewY()"
				},
				{
					name: "translate()"
				},
				{
					name: "translate3d()"
				},
				{
					name: "translateX()"
				},
				{
					name: "translateY()"
				},
				{
					name: "translateZ()"
				}
			],
			"description": "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-o-transform-origin",
			browsers: [
				"O10.5"
			],
			"description": "Establishes the origin of transformation for an element.",
			"restrictions": [
				"positon",
				"length",
				"percentage"
			]
		},
		{
			name: "-o-transition",
			browsers: [
				"O11.5"
			],
			values: [
				{
					name: "all",
					"description": "Every property that is able to undergo a transition will do so."
				},
				{
					name: "none",
					"description": "No property will transition."
				}
			],
			"description": "Shorthand property combines four of the transition properties into a single property.",
			"restrictions": [
				"time",
				"property",
				"timing-function",
				"enum"
			]
		},
		{
			name: "-o-transition-delay",
			browsers: [
				"O11.5"
			],
			"description": "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-o-transition-duration",
			browsers: [
				"O11.5"
			],
			"description": "Specifies how long the transition from the old value to the new value should take.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-o-transition-property",
			browsers: [
				"O11.5"
			],
			values: [
				{
					name: "all",
					"description": "Every property that is able to undergo a transition will do so."
				},
				{
					name: "none",
					"description": "No property will transition."
				}
			],
			"description": "Specifies the name of the CSS property to which the transition is applied.",
			"restrictions": [
				"property"
			]
		},
		{
			name: "-o-transition-timing-function",
			browsers: [
				"O11.5"
			],
			"description": "Describes how the intermediate values used during a transition will be calculated.",
			"restrictions": [
				"timing-function"
			]
		},
		{
			name: "offset-block-end",
			browsers: [
				"FF41"
			],
			values: [
				{
					name: "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
				}
			],
			"description": "Logical 'bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "offset-block-start",
			browsers: [
				"FF41"
			],
			values: [
				{
					name: "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
				}
			],
			"description": "Logical 'top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "offset-inline-end",
			browsers: [
				"FF41"
			],
			values: [
				{
					name: "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
				}
			],
			"description": "Logical 'right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "offset-inline-start",
			browsers: [
				"FF41"
			],
			values: [
				{
					name: "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
				}
			],
			"description": "Logical 'left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "outline",
			values: [
				{
					name: "auto",
					"description": "Permits the user agent to render a custom outline style, typically the default platform style."
				},
				{
					name: "invert"
				}
			],
			"syntax": "[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]",
			"description": "Shorthand property for 'outline-style', 'outline-width', and 'outline-color'.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color",
				"enum"
			]
		},
		{
			name: "outline-color",
			values: [
				{
					name: "invert"
				}
			],
			"syntax": "<color> | invert",
			"description": "The color of the outline.",
			"restrictions": [
				"enum",
				"color"
			]
		},
		{
			name: "outline-offset",
			browsers: [
				"FF1.5",
				"S1.2",
				"C1",
				"O9.5"
			],
			"syntax": "<length>",
			"description": "Offset the outline and draw it beyond the border edge.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "outline-style",
			values: [
				{
					name: "auto",
					"description": "Permits the user agent to render a custom outline style, typically the default platform style."
				}
			],
			"syntax": "auto | <'border-style'>",
			"description": "Style of the outline.",
			"restrictions": [
				"line-style",
				"enum"
			]
		},
		{
			name: "outline-width",
			"syntax": "<line-width>",
			"description": "Width of the outline.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "overflow",
			values: [
				{
					name: "auto",
					"description": "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
				},
				{
					name: "hidden",
					"description": "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
				},
				{
					name: "-moz-hidden-unscrollable"
				},
				{
					name: "scroll",
					"description": "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
				},
				{
					name: "visible",
					"description": "Content is not clipped, i.e., it may be rendered outside the content box."
				}
			],
			"syntax": "[ visible | hidden | clip | scroll | auto ]{1,2}",
			"description": "Shorthand for setting 'overflow-x' and 'overflow-y'.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "overflow-wrap",
			values: [
				{
					name: "break-word",
					"description": "An otherwise unbreakable sequence of characters may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
				},
				{
					name: "normal",
					"description": "Lines may break only at allowed break points."
				}
			],
			"syntax": "normal | break-word | anywhere",
			"description": "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit within the line box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "overflow-x",
			values: [
				{
					name: "auto",
					"description": "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
				},
				{
					name: "hidden",
					"description": "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
				},
				{
					name: "scroll",
					"description": "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
				},
				{
					name: "visible",
					"description": "Content is not clipped, i.e., it may be rendered outside the content box."
				}
			],
			"syntax": "visible | hidden | clip | scroll | auto",
			"description": "Specifies the handling of overflow in the horizontal direction.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "overflow-y",
			values: [
				{
					name: "auto",
					"description": "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
				},
				{
					name: "hidden",
					"description": "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
				},
				{
					name: "scroll",
					"description": "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
				},
				{
					name: "visible",
					"description": "Content is not clipped, i.e., it may be rendered outside the content box."
				}
			],
			"syntax": "visible | hidden | clip | scroll | auto",
			"description": "Specifies the handling of overflow in the vertical direction.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "pad",
			browsers: [
				"FF33"
			],
			"syntax": "<integer> && <symbol>",
			"description": "@counter-style descriptor. Specifies a “fixed-width” counter style, where representations shorter than the pad value are padded with a particular <symbol>",
			"restrictions": [
				"integer",
				"image",
				"string",
				"identifier"
			]
		},
		{
			name: "padding",
			values: [],
			"syntax": "[ <length> | <percentage> ]{1,4}",
			"description": "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "padding-bottom",
			"syntax": "<length> | <percentage>",
			"description": "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "padding-block-end",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'padding-left'>",
			"description": "Logical 'padding-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "padding-block-start",
			browsers: [
				"FF41",
				"C69",
				"O56"
			],
			"syntax": "<'padding-left'>",
			"description": "Logical 'padding-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "padding-inline-end",
			browsers: [
				"FF41",
				"S3",
				"C69",
				"O56"
			],
			"syntax": "<'padding-left'>",
			"description": "Logical 'padding-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "padding-inline-start",
			browsers: [
				"FF41",
				"S3",
				"C69",
				"O56"
			],
			"syntax": "<'padding-left'>",
			"description": "Logical 'padding-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "padding-left",
			"syntax": "<length> | <percentage>",
			"description": "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "padding-right",
			"syntax": "<length> | <percentage>",
			"description": "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "padding-top",
			"syntax": "<length> | <percentage>",
			"description": "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "page-break-after",
			values: [
				{
					name: "always",
					"description": "Always force a page break after the generated box."
				},
				{
					name: "auto",
					"description": "Neither force nor forbid a page break after generated box."
				},
				{
					name: "avoid",
					"description": "Avoid a page break after the generated box."
				},
				{
					name: "left",
					"description": "Force one or two page breaks after the generated box so that the next page is formatted as a left page."
				},
				{
					name: "right",
					"description": "Force one or two page breaks after the generated box so that the next page is formatted as a right page."
				}
			],
			"syntax": "auto | always | avoid | left | right | recto | verso",
			"description": "Defines rules for page breaks after an element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "page-break-before",
			values: [
				{
					name: "always",
					"description": "Always force a page break before the generated box."
				},
				{
					name: "auto",
					"description": "Neither force nor forbid a page break before the generated box."
				},
				{
					name: "avoid",
					"description": "Avoid a page break before the generated box."
				},
				{
					name: "left",
					"description": "Force one or two page breaks before the generated box so that the next page is formatted as a left page."
				},
				{
					name: "right",
					"description": "Force one or two page breaks before the generated box so that the next page is formatted as a right page."
				}
			],
			"syntax": "auto | always | avoid | left | right | recto | verso",
			"description": "Defines rules for page breaks before an element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "page-break-inside",
			values: [
				{
					name: "auto",
					"description": "Neither force nor forbid a page break inside the generated box."
				},
				{
					name: "avoid",
					"description": "Avoid a page break inside the generated box."
				}
			],
			"syntax": "auto | avoid",
			"description": "Defines rules for page breaks inside an element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "paint-order",
			browsers: [
				"FF60",
				"S"
			],
			values: [
				{
					name: "fill"
				},
				{
					name: "markers"
				},
				{
					name: "normal",
					"description": "The element is painted with the standard order of painting operations: the 'fill' is painted first, then its 'stroke' and finally its markers."
				},
				{
					name: "stroke"
				}
			],
			"status": "experimental",
			"syntax": "normal | [ fill || stroke || markers ]",
			"description": "Controls the order that the three paint operations that shapes and text are rendered with: their fill, their stroke and any markers they might have.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "perspective",
			values: [
				{
					name: "none",
					"description": "No perspective transform is applied."
				}
			],
			"syntax": "none | <length>",
			"description": "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
			"restrictions": [
				"length",
				"enum"
			]
		},
		{
			name: "perspective-origin",
			"syntax": "<position>",
			"description": "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
			"restrictions": [
				"position",
				"percentage",
				"length"
			]
		},
		{
			name: "pointer-events",
			values: [
				{
					name: "all",
					"description": "The given element can be the target element for pointer events whenever the pointer is over either the interior or the perimeter of the element."
				},
				{
					name: "fill",
					"description": "The given element can be the target element for pointer events whenever the pointer is over the interior of the element."
				},
				{
					name: "none",
					"description": "The given element does not receive pointer events."
				},
				{
					name: "painted"
				},
				{
					name: "stroke",
					"description": "The given element can be the target element for pointer events whenever the pointer is over the perimeter of the element."
				},
				{
					name: "visible",
					"description": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and the pointer is over either the interior or the perimete of the element."
				},
				{
					name: "visibleFill"
				},
				{
					name: "visiblePainted"
				},
				{
					name: "visibleStroke"
				}
			],
			"syntax": "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit",
			"description": "Specifies under what circumstances a given element can be the target element for a pointer event.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "position",
			values: [
				{
					name: "absolute"
				},
				{
					name: "fixed",
					"description": "The box's position is calculated according to the 'absolute' model, but in addition, the box is fixed with respect to some reference. As with the 'absolute' model, the box's margins do not collapse with any other margins."
				},
				{
					name: "-ms-page"
				},
				{
					name: "relative"
				},
				{
					name: "static"
				},
				{
					name: "sticky"
				},
				{
					name: "-webkit-sticky"
				}
			],
			"syntax": "static | relative | absolute | sticky | fixed",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "prefix",
			browsers: [
				"FF33"
			],
			"syntax": "<symbol>",
			"description": "@counter-style descriptor. Specifies a <symbol> that is prepended to the marker representation.",
			"restrictions": [
				"image",
				"string",
				"identifier"
			]
		},
		{
			name: "quotes",
			values: [
				{
					name: "none",
					"description": "The 'open-quote' and 'close-quote' values of the 'content' property produce no quotations marks, as if they were 'no-open-quote' and 'no-close-quote' respectively."
				}
			],
			"syntax": "none | [ <string> <string> ]+",
			"description": "Specifies quotation marks for any number of embedded quotations.",
			"restrictions": [
				"string"
			]
		},
		{
			name: "range",
			browsers: [
				"FF33"
			],
			values: [
				{
					name: "auto",
					"description": "The range depends on the counter system."
				},
				{
					name: "infinite",
					"description": "If used as the first value in a range, it represents negative infinity; if used as the second value, it represents positive infinity."
				}
			],
			"syntax": "[ [ <integer> | infinite ]{2} ]# | auto",
			"description": "@counter-style descriptor. Defines the ranges over which the counter style is defined.",
			"restrictions": [
				"integer",
				"enum"
			]
		},
		{
			name: "resize",
			browsers: [
				"FF",
				"S3",
				"C1",
				"O12.1"
			],
			values: [
				{
					name: "both",
					"description": "The UA presents a bidirectional resizing mechanism to allow the user to adjust both the height and the width of the element."
				},
				{
					name: "horizontal",
					"description": "The UA presents a unidirectional horizontal resizing mechanism to allow the user to adjust only the width of the element."
				},
				{
					name: "none",
					"description": "The UA does not present a resizing mechanism on the element, and the user is given no direct manipulation mechanism to resize the element."
				},
				{
					name: "vertical",
					"description": "The UA presents a unidirectional vertical resizing mechanism to allow the user to adjust only the height of the element."
				}
			],
			"syntax": "none | both | horizontal | vertical | block | inline",
			"description": "Specifies whether or not an element is resizable by the user, and if so, along which axis/axes.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "right",
			values: [
				{
					name: "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"description": "Specifies how far an absolutely positioned box's right margin edge is offset to the left of the right edge of the box's 'containing block'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "ruby-align",
			browsers: [
				"FF38"
			],
			values: [
				{
					name: "auto",
					browsers: [
						"FF38"
					],
					"description": "The user agent determines how the ruby contents are aligned. This is the initial value."
				},
				{
					name: "center",
					"description": "The ruby content is centered within its box."
				},
				{
					name: "distribute-letter",
					browsers: [
						"FF38"
					]
				},
				{
					name: "distribute-space",
					browsers: [
						"FF38"
					]
				},
				{
					name: "left",
					"description": "The ruby text content is aligned with the start edge of the base."
				},
				{
					name: "line-edge",
					browsers: [
						"FF38"
					]
				},
				{
					name: "right",
					browsers: [
						"FF38"
					],
					"description": "The ruby text content is aligned with the end edge of the base."
				},
				{
					name: "start",
					browsers: [
						"FF38"
					],
					"description": "The ruby text content is aligned with the start edge of the base."
				},
				{
					name: "space-between",
					browsers: [
						"FF38"
					],
					"description": "The ruby content expands as defined for normal text justification (as defined by 'text-justify'),"
				},
				{
					name: "space-around",
					browsers: [
						"FF38"
					],
					"description": "As for 'space-between' except that there exists an extra justification opportunities whose space is distributed half before and half after the ruby content."
				}
			],
			"status": "experimental",
			"syntax": "start | center | space-between | space-around",
			"description": "Specifies how text is distributed within the various ruby boxes when their contents do not exactly fill their respective boxes.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "ruby-overhang",
			browsers: [
				"FF10",
				"IE5"
			],
			values: [
				{
					name: "auto",
					"description": "The ruby text can overhang text adjacent to the base on either side. This is the initial value."
				},
				{
					name: "end",
					"description": "The ruby text can overhang the text that follows it."
				},
				{
					name: "none",
					"description": "The ruby text cannot overhang any text adjacent to its base, only its own base."
				},
				{
					name: "start",
					"description": "The ruby text can overhang the text that precedes it."
				}
			],
			"description": "Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "ruby-position",
			browsers: [
				"E12",
				"FF38"
			],
			values: [
				{
					name: "after"
				},
				{
					name: "before"
				},
				{
					name: "inline"
				},
				{
					name: "right",
					"description": "The ruby text appears on the right of the base. Unlike 'before' and 'after', this value is not relative to the text flow direction."
				}
			],
			"status": "experimental",
			"syntax": "over | under | inter-character",
			"description": "Used by the parent of elements with display: ruby-text to control the position of the ruby text with respect to its base.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "ruby-span",
			browsers: [
				"FF10"
			],
			values: [
				{
					name: "attr(x)"
				},
				{
					name: "none",
					"description": "No spanning. The computed value is '1'."
				}
			],
			"description": "Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "scrollbar-3dlight-color",
			browsers: [
				"IE6"
			],
			"description": "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "scrollbar-arrow-color",
			browsers: [
				"IE6"
			],
			"description": "Determines the color of the arrow elements of a scroll arrow.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "scrollbar-base-color",
			browsers: [
				"IE6"
			],
			"description": "Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "scrollbar-darkshadow-color",
			browsers: [
				"IE6"
			],
			"description": "Determines the color of the gutter of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "scrollbar-face-color",
			browsers: [
				"IE6"
			],
			"description": "Determines the color of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "scrollbar-highlight-color",
			browsers: [
				"IE6"
			],
			"description": "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "scrollbar-shadow-color",
			browsers: [
				"IE6"
			],
			"description": "Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "scrollbar-track-color",
			browsers: [
				"IE6"
			],
			"description": "Determines the color of the track element of a scroll bar.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "scroll-behavior",
			browsers: [
				"FF36",
				"C61",
				"O48"
			],
			values: [
				{
					name: "auto",
					"description": "Scrolls in an instant fashion."
				},
				{
					name: "smooth"
				}
			],
			"syntax": "auto | smooth",
			"description": "Specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation or CSSOM scrolling APIs.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "scroll-snap-coordinate",
			browsers: [
				"FF39"
			],
			values: [
				{
					name: "none",
					"description": "Specifies that this element does not contribute a snap point."
				}
			],
			"status": "obsolete",
			"syntax": "none | <position>#",
			"description": "Defines the x and y coordinate within the element which will align with the nearest ancestor scroll container’s snap-destination for the respective axis.",
			"restrictions": [
				"position",
				"length",
				"percentage",
				"enum"
			]
		},
		{
			name: "scroll-snap-destination",
			browsers: [
				"FF39"
			],
			"status": "obsolete",
			"syntax": "<position>",
			"description": "Define the x and y coordinate within the scroll container’s visual viewport which element snap points will align with.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			name: "scroll-snap-points-x",
			browsers: [
				"FF39",
				"S9"
			],
			values: [
				{
					name: "none",
					"description": "No snap points are defined by this scroll container."
				},
				{
					name: "repeat()",
					"description": "Defines an interval at which snap points are defined, starting from the container’s relevant start edge."
				}
			],
			"status": "obsolete",
			"syntax": "none | repeat( <length-percentage> )",
			"description": "Defines the positioning of snap points along the x axis of the scroll container it is applied to.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "scroll-snap-points-y",
			browsers: [
				"FF39",
				"S9"
			],
			values: [
				{
					name: "none",
					"description": "No snap points are defined by this scroll container."
				},
				{
					name: "repeat()",
					"description": "Defines an interval at which snap points are defined, starting from the container’s relevant start edge."
				}
			],
			"status": "obsolete",
			"syntax": "none | repeat( <length-percentage> )",
			"description": "Defines the positioning of snap points along the y axis of the scroll container it is applied to.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "scroll-snap-type",
			values: [
				{
					name: "none",
					"description": "The visual viewport of this scroll container must ignore snap points, if any, when scrolled."
				},
				{
					name: "mandatory",
					"description": "The visual viewport of this scroll container is guaranteed to rest on a snap point when there are no active scrolling operations."
				},
				{
					name: "proximity",
					"description": "The visual viewport of this scroll container may come to rest on a snap point at the termination of a scroll at the discretion of the UA given the parameters of the scroll."
				}
			],
			"syntax": "none | [ x | y | block | inline | both ] [ mandatory | proximity ]",
			"description": "Defines how strictly snap points are enforced on the scroll container.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "shape-image-threshold",
			browsers: [
				"FF62",
				"S10.1",
				"C37",
				"O24"
			],
			"syntax": "<number>",
			"description": "Defines the alpha channel threshold used to extract the shape using an image. A value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.",
			"restrictions": [
				"number"
			]
		},
		{
			name: "shape-margin",
			browsers: [
				"FF62",
				"S10.1",
				"C37",
				"O24"
			],
			"syntax": "<length-percentage>",
			"description": "Adds a margin to a 'shape-outside'. This defines a new shape that is the smallest contour that includes all the points that are the 'shape-margin' distance outward in the perpendicular direction from a point on the underlying shape.",
			"restrictions": [
				"url",
				"length",
				"percentage"
			]
		},
		{
			name: "shape-outside",
			browsers: [
				"FF62",
				"S10.1",
				"C37",
				"O24"
			],
			values: [
				{
					name: "margin-box"
				},
				{
					name: "none",
					"description": "The float area is unaffected."
				}
			],
			"syntax": "none | <shape-box> || <basic-shape> | <image>",
			"description": "Specifies an orthogonal rotation to be applied to an image before it is laid out.",
			"restrictions": [
				"image",
				"box",
				"shape",
				"enum"
			]
		},
		{
			name: "shape-rendering",
			values: [
				{
					name: "auto",
					"description": "Suppresses aural rendering."
				},
				{
					name: "crispEdges"
				},
				{
					name: "geometricPrecision",
					"description": "Emphasize geometric precision over speed and crisp edges."
				},
				{
					name: "optimizeSpeed",
					"description": "Emphasize rendering speed over geometric precision and crisp edges."
				}
			],
			"description": "Provides hints about what tradeoffs to make as it renders vector graphics elements such as <path> elements and basic shapes such as circles and rectangles.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "size",
			browsers: [
				"C",
				"O8"
			],
			"restrictions": [
				"length"
			]
		},
		{
			name: "src",
			values: [
				{
					name: "url()",
					"description": "Reference font by URL"
				},
				{
					name: "format()"
				},
				{
					name: "local()"
				}
			],
			"syntax": "[ <url> [ format( <string># ) ]? | local( <family-name> ) ]#",
			"description": "@font-face descriptor. Specifies the resource containing font data. It is required, whether the font is downloadable or locally installed.",
			"restrictions": [
				"enum",
				"url",
				"identifier"
			]
		},
		{
			name: "stop-color",
			"description": "Indicates what color to use at that gradient stop.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "stop-opacity",
			"description": "Defines the opacity of a given gradient stop.",
			"restrictions": [
				"number(0-1)"
			]
		},
		{
			name: "stroke",
			values: [
				{
					name: "url()",
					"description": "A URL reference to a paint server element, which is an element that defines a paint server: ‘hatch’, ‘linearGradient’, ‘mesh’, ‘pattern’, ‘radialGradient’ and ‘solidcolor’."
				},
				{
					name: "none",
					"description": "No paint is applied in this layer."
				}
			],
			"description": "Paints along the outline of the given graphical element.",
			"restrictions": [
				"color",
				"enum",
				"url"
			]
		},
		{
			name: "stroke-dasharray",
			values: [
				{
					name: "none",
					"description": "Indicates that no dashing is used."
				}
			],
			"description": "Controls the pattern of dashes and gaps used to stroke paths.",
			"restrictions": [
				"length",
				"percentage",
				"number",
				"enum"
			]
		},
		{
			name: "stroke-dashoffset",
			"description": "Specifies the distance into the dash pattern to start the dash.",
			"restrictions": [
				"percentage",
				"length"
			]
		},
		{
			name: "stroke-linecap",
			values: [
				{
					name: "butt"
				},
				{
					name: "round",
					"description": "Indicates that at each end of each subpath, the shape representing the stroke will be extended by a half circle with a radius equal to the stroke width."
				},
				{
					name: "square",
					"description": "Indicates that at the end of each subpath, the shape representing the stroke will be extended by a rectangle with the same width as the stroke width and whose length is half of the stroke width."
				}
			],
			"description": "Specifies the shape to be used at the end of open subpaths when they are stroked.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "stroke-linejoin",
			values: [
				{
					name: "bevel"
				},
				{
					name: "miter"
				},
				{
					name: "round",
					"description": "Indicates that a round corner is to be used to join path segments."
				}
			],
			"description": "Specifies the shape to be used at the corners of paths or basic shapes when they are stroked.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "stroke-miterlimit",
			"description": "When two line segments meet at a sharp angle and miter joins have been specified for 'stroke-linejoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path.",
			"restrictions": [
				"number"
			]
		},
		{
			name: "stroke-opacity",
			"description": "Specifies the opacity of the painting operation used to stroke the current object.",
			"restrictions": [
				"number(0-1)"
			]
		},
		{
			name: "stroke-width",
			"description": "Specifies the width of the stroke on the current object.",
			"restrictions": [
				"percentage",
				"length"
			]
		},
		{
			name: "suffix",
			browsers: [
				"FF33"
			],
			"syntax": "<symbol>",
			"description": "@counter-style descriptor. Specifies a <symbol> that is appended to the marker representation.",
			"restrictions": [
				"image",
				"string",
				"identifier"
			]
		},
		{
			name: "system",
			browsers: [
				"FF33"
			],
			values: [
				{
					name: "additive"
				},
				{
					name: "alphabetic",
					"description": "Interprets the list of counter symbols as digits to an alphabetic numbering system, similar to the default lower-alpha counter style, which wraps from \"a\", \"b\", \"c\", to \"aa\", \"ab\", \"ac\"."
				},
				{
					name: "cyclic"
				},
				{
					name: "extends"
				},
				{
					name: "fixed",
					"description": "Runs through its list of counter symbols once, then falls back."
				},
				{
					name: "numeric"
				},
				{
					name: "symbolic"
				}
			],
			"syntax": "cyclic | numeric | alphabetic | symbolic | additive | [ fixed <integer>? ] | [ extends <counter-style-name> ]",
			"description": "@counter-style descriptor. Specifies which algorithm will be used to construct the counter’s representation based on the counter value.",
			"restrictions": [
				"enum",
				"integer"
			]
		},
		{
			name: "symbols",
			browsers: [
				"FF33"
			],
			"syntax": "<symbol>+",
			"description": "@counter-style descriptor. Specifies the symbols used by the marker-construction algorithm specified by the system descriptor.",
			"restrictions": [
				"image",
				"string",
				"identifier"
			]
		},
		{
			name: "table-layout",
			values: [
				{
					name: "auto",
					"description": "Use any automatic table layout algorithm."
				},
				{
					name: "fixed",
					"description": "Use the fixed table layout algorithm."
				}
			],
			"syntax": "auto | fixed",
			"description": "Controls the algorithm used to lay out the table cells, rows, and columns.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "tab-size",
			browsers: [
				"FF4",
				"S6.1",
				"C21",
				"O15"
			],
			"syntax": "<integer> | <length>",
			"description": "Determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.",
			"restrictions": [
				"integer",
				"length"
			]
		},
		{
			name: "text-align",
			values: [
				{
					name: "center",
					"description": "The inline contents are centered within the line box."
				},
				{
					name: "end",
					"description": "The inline contents are aligned to the end edge of the line box."
				},
				{
					name: "justify",
					"description": "The text is justified according to the method specified by the 'text-justify' property."
				},
				{
					name: "left",
					"description": "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
				},
				{
					name: "right",
					"description": "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
				},
				{
					name: "start",
					"description": "The inline contents are aligned to the start edge of the line box."
				}
			],
			"syntax": "start | end | left | right | center | justify | match-parent",
			"description": "Describes how inline contents of a block are horizontally aligned if the contents do not completely fill the line box.",
			"restrictions": [
				"string"
			]
		},
		{
			name: "text-align-last",
			browsers: [
				"E12",
				"FF49",
				"C47",
				"IE",
				"O"
			],
			values: [
				{
					name: "auto",
					"description": "Content on the affected line is aligned per 'text-align' unless 'text-align' is set to 'justify', in which case it is 'start-aligned'."
				},
				{
					name: "center",
					"description": "The inline contents are centered within the line box."
				},
				{
					name: "justify",
					"description": "The text is justified according to the method specified by the 'text-justify' property."
				},
				{
					name: "left",
					"description": "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
				},
				{
					name: "right",
					"description": "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
				}
			],
			"syntax": "auto | start | end | left | right | center | justify",
			"description": "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "text-anchor",
			values: [
				{
					name: "end",
					"description": "The rendered characters are aligned such that the end of the resulting rendered text is at the initial current text position."
				},
				{
					name: "middle",
					"description": "The rendered characters are aligned such that the geometric middle of the resulting rendered text is at the initial current text position."
				},
				{
					name: "start",
					"description": "The rendered characters are aligned such that the start of the resulting rendered text is at the initial current text position."
				}
			],
			"description": "Used to align (start-, middle- or end-alignment) a string of text relative to a given point.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "text-decoration",
			values: [
				{
					name: "dashed"
				},
				{
					name: "dotted"
				},
				{
					name: "double"
				},
				{
					name: "line-through"
				},
				{
					name: "none",
					"description": "Produces no line."
				},
				{
					name: "overline"
				},
				{
					name: "solid"
				},
				{
					name: "underline"
				},
				{
					name: "wavy"
				}
			],
			"syntax": "<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'>",
			"description": "Decorations applied to font used for an element's text.",
			"restrictions": [
				"enum",
				"color"
			]
		},
		{
			name: "text-decoration-color",
			browsers: [
				"FF36",
				"S",
				"C57",
				"O44"
			],
			"syntax": "<color>",
			"description": "Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.",
			"restrictions": [
				"color"
			]
		},
		{
			name: "text-decoration-line",
			browsers: [
				"FF36",
				"S",
				"C",
				"O"
			],
			values: [
				{
					name: "line-through"
				},
				{
					name: "none",
					"description": "Neither produces nor inhibits text decoration."
				},
				{
					name: "overline"
				},
				{
					name: "underline"
				}
			],
			"syntax": "none | [ underline || overline || line-through || blink ]",
			"description": "Specifies what line decorations, if any, are added to the element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "text-decoration-style",
			browsers: [
				"FF36",
				"S",
				"C57",
				"O44"
			],
			values: [
				{
					name: "dashed"
				},
				{
					name: "dotted"
				},
				{
					name: "double"
				},
				{
					name: "none",
					"description": "Produces no line."
				},
				{
					name: "solid"
				},
				{
					name: "wavy"
				}
			],
			"syntax": "solid | double | dotted | dashed | wavy",
			"description": "Specifies the line style for underline, line-through and overline text decoration.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "text-indent",
			values: [],
			"syntax": "<length-percentage> && hanging? && each-line?",
			"description": "Specifies the indentation applied to lines of inline content in a block. The indentation only affects the first line of inline content in the block unless the 'hanging' keyword is specified, in which case it affects all lines except the first.",
			"restrictions": [
				"percentage",
				"length"
			]
		},
		{
			name: "text-justify",
			browsers: [
				"E14",
				"FF55",
				"C",
				"IE11",
				"O"
			],
			values: [
				{
					name: "auto",
					"description": "The UA determines the justification algorithm to follow, based on a balance between performance and adequate presentation quality."
				},
				{
					name: "distribute",
					"description": "Justification primarily changes spacing both at word separators and at grapheme cluster boundaries in all scripts except those in the connected and cursive groups. This value is sometimes used in e.g. Japanese, often with the 'text-align-last' property."
				},
				{
					name: "distribute-all-lines"
				},
				{
					name: "inter-cluster"
				},
				{
					name: "inter-ideograph"
				},
				{
					name: "inter-word"
				},
				{
					name: "kashida"
				},
				{
					name: "newspaper"
				}
			],
			"syntax": "auto | inter-character | inter-word | none",
			"description": "Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "text-orientation",
			browsers: [
				"FF41",
				"C48",
				"O"
			],
			values: [
				{
					name: "sideways",
					browsers: [
						"FF41",
						"C48",
						"O"
					]
				},
				{
					name: "sideways-right",
					browsers: [
						"FF41",
						"C48",
						"O"
					]
				},
				{
					name: "upright"
				}
			],
			"syntax": "mixed | upright | sideways",
			"description": "Specifies the orientation of text within a line.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "text-overflow",
			values: [
				{
					name: "clip"
				},
				{
					name: "ellipsis"
				}
			],
			"syntax": "[ clip | ellipsis | <string> ]{1,2}",
			"description": "Text can overflow for example when it is prevented from wrapping.",
			"restrictions": [
				"enum",
				"string"
			]
		},
		{
			name: "text-rendering",
			browsers: [
				"FF1",
				"S5",
				"C4",
				"O15"
			],
			values: [
				{
					name: "auto"
				},
				{
					name: "geometricPrecision",
					"description": "Indicates that the user agent shall emphasize geometric precision over legibility and rendering speed."
				},
				{
					name: "optimizeLegibility"
				},
				{
					name: "optimizeSpeed",
					"description": "Indicates that the user agent shall emphasize rendering speed over legibility and geometric precision."
				}
			],
			"syntax": "auto | optimizeSpeed | optimizeLegibility | geometricPrecision",
			"description": "The creator of SVG content might want to provide a hint to the implementation about what tradeoffs to make as it renders text. The ‘text-rendering’ property provides these hints.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "text-shadow",
			values: [
				{
					name: "none",
					"description": "No shadow."
				}
			],
			"syntax": "none | <shadow-t>#",
			"description": "Enables shadow effects to be applied to the text of the element.",
			"restrictions": [
				"length",
				"color"
			]
		},
		{
			name: "text-transform",
			values: [
				{
					name: "capitalize"
				},
				{
					name: "lowercase"
				},
				{
					name: "none",
					"description": "No effects."
				},
				{
					name: "uppercase"
				}
			],
			"syntax": "none | capitalize | uppercase | lowercase | full-width",
			"description": "Controls capitalization effects of an element’s text.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "text-underline-position",
			browsers: [
				"E12",
				"C33",
				"IE6"
			],
			values: [
				{
					name: "above"
				},
				{
					name: "auto",
					"description": "The user agent may use any algorithm to determine the underline’s position. In horizontal line layout, the underline should be aligned as for alphabetic. In vertical line layout, if the language is set to Japanese or Korean, the underline should be aligned as for over."
				},
				{
					name: "below",
					"description": "The underline is aligned with the under edge of the element’s content box."
				}
			],
			"syntax": "auto | [ under || [ left | right ] ]",
			"description": "Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements. This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "top",
			values: [
				{
					name: "auto",
					"description": "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
				}
			],
			"syntax": "<length> | <percentage> | auto",
			"description": "Specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's 'containing block'.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "touch-action",
			browsers: [
				"E12",
				"FF52",
				"C36",
				"IE11",
				"O23"
			],
			values: [
				{
					name: "auto",
					"description": "The user agent may determine any permitted touch behaviors for touches that begin on the element."
				},
				{
					name: "cross-slide-x",
					browsers: [
						"E12",
						"FF52",
						"C36",
						"IE11",
						"O23"
					]
				},
				{
					name: "cross-slide-y",
					browsers: [
						"E12",
						"FF52",
						"C36",
						"IE11",
						"O23"
					]
				},
				{
					name: "double-tap-zoom",
					browsers: [
						"E12",
						"FF52",
						"C36",
						"IE11",
						"O23"
					]
				},
				{
					name: "manipulation",
					"description": "The user agent may consider touches that begin on the element only for the purposes of scrolling and continuous zooming."
				},
				{
					name: "none",
					"description": "Touches that begin on the element must not trigger default touch behaviors."
				},
				{
					name: "pan-x",
					"description": "The user agent may consider touches that begin on the element only for the purposes of horizontally scrolling the element’s nearest ancestor with horizontally scrollable content."
				},
				{
					name: "pan-y",
					"description": "The user agent may consider touches that begin on the element only for the purposes of vertically scrolling the element’s nearest ancestor with vertically scrollable content."
				},
				{
					name: "pinch-zoom",
					browsers: [
						"E12",
						"FF52",
						"C36",
						"IE11",
						"O23"
					]
				}
			],
			"syntax": "auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation",
			"description": "Determines whether touch input may trigger default behavior supplied by user agent.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "transform",
			values: [
				{
					name: "matrix()"
				},
				{
					name: "matrix3d()"
				},
				{
					name: "none"
				},
				{
					name: "perspective()"
				},
				{
					name: "rotate()"
				},
				{
					name: "rotate3d()"
				},
				{
					name: "rotateX('angle')"
				},
				{
					name: "rotateY('angle')"
				},
				{
					name: "rotateZ('angle')"
				},
				{
					name: "scale()"
				},
				{
					name: "scale3d()"
				},
				{
					name: "scaleX()"
				},
				{
					name: "scaleY()"
				},
				{
					name: "scaleZ()"
				},
				{
					name: "skew()"
				},
				{
					name: "skewX()"
				},
				{
					name: "skewY()"
				},
				{
					name: "translate()"
				},
				{
					name: "translate3d()"
				},
				{
					name: "translateX()"
				},
				{
					name: "translateY()"
				},
				{
					name: "translateZ()"
				}
			],
			"syntax": "none | <transform-list>",
			"description": "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "transform-origin",
			"syntax": "[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?",
			"description": "Establishes the origin of transformation for an element.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			name: "transform-style",
			browsers: [
				"E12",
				"FF16",
				"S",
				"C12",
				"O15"
			],
			values: [
				{
					name: "flat"
				},
				{
					name: "preserve-3d",
					browsers: [
						"E12",
						"FF16",
						"S",
						"C12",
						"O15"
					]
				}
			],
			"syntax": "flat | preserve-3d",
			"description": "Defines how nested elements are rendered in 3D space.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "transition",
			values: [
				{
					name: "all",
					"description": "Every property that is able to undergo a transition will do so."
				},
				{
					name: "none",
					"description": "No property will transition."
				}
			],
			"syntax": "<single-transition>#",
			"description": "Shorthand property combines four of the transition properties into a single property.",
			"restrictions": [
				"time",
				"property",
				"timing-function",
				"enum"
			]
		},
		{
			name: "transition-delay",
			"syntax": "<time>#",
			"description": "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "transition-duration",
			"syntax": "<time>#",
			"description": "Specifies how long the transition from the old value to the new value should take.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "transition-property",
			values: [
				{
					name: "all",
					"description": "Every property that is able to undergo a transition will do so."
				},
				{
					name: "none",
					"description": "No property will transition."
				}
			],
			"syntax": "none | <single-transition-property>#",
			"description": "Specifies the name of the CSS property to which the transition is applied.",
			"restrictions": [
				"property"
			]
		},
		{
			name: "transition-timing-function",
			"syntax": "<single-transition-timing-function>#",
			"description": "Describes how the intermediate values used during a transition will be calculated.",
			"restrictions": [
				"timing-function"
			]
		},
		{
			name: "unicode-bidi",
			values: [
				{
					name: "bidi-override"
				},
				{
					name: "embed"
				},
				{
					name: "isolate",
					"description": "The contents of the element are considered to be inside a separate, independent paragraph."
				},
				{
					name: "isolate-override"
				},
				{
					name: "normal",
					"description": "The element does not open an additional level of embedding with respect to the bidirectional algorithm. For inline-level elements, implicit reordering works across element boundaries."
				},
				{
					name: "plaintext"
				}
			],
			"syntax": "normal | embed | isolate | bidi-override | isolate-override | plaintext",
			"description": "The level of embedding with respect to the bidirectional algorithm.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "unicode-range",
			values: [
				{
					name: "U+26"
				},
				{
					name: "U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F"
				},
				{
					name: "U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF"
				},
				{
					name: "U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD"
				},
				{
					name: "U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD"
				},
				{
					name: "U+00-7F"
				},
				{
					name: "U+80-FF"
				},
				{
					name: "U+100-17F"
				},
				{
					name: "U+180-24F"
				},
				{
					name: "U+1E00-1EFF"
				},
				{
					name: "U+250-2AF"
				},
				{
					name: "U+370-3FF"
				},
				{
					name: "U+1F00-1FFF"
				},
				{
					name: "U+400-4FF"
				},
				{
					name: "U+500-52F"
				},
				{
					name: "U+00-52F, U+1E00-1FFF, U+2200–22FF"
				},
				{
					name: "U+530–58F"
				},
				{
					name: "U+590–5FF"
				},
				{
					name: "U+600–6FF"
				},
				{
					name: "U+750–77F"
				},
				{
					name: "U+8A0–8FF"
				},
				{
					name: "U+700–74F"
				},
				{
					name: "U+900–97F"
				},
				{
					name: "U+980–9FF"
				},
				{
					name: "U+A00–A7F"
				},
				{
					name: "U+A80–AFF"
				},
				{
					name: "U+B00–B7F"
				},
				{
					name: "U+B80–BFF"
				},
				{
					name: "U+C00–C7F"
				},
				{
					name: "U+C80–CFF"
				},
				{
					name: "U+D00–D7F"
				},
				{
					name: "U+D80–DFF"
				},
				{
					name: "U+118A0–118FF"
				},
				{
					name: "U+E00–E7F"
				},
				{
					name: "U+1A20–1AAF"
				},
				{
					name: "U+AA80–AADF"
				},
				{
					name: "U+E80–EFF"
				},
				{
					name: "U+F00–FFF"
				},
				{
					name: "U+1000–109F"
				},
				{
					name: "U+10A0–10FF"
				},
				{
					name: "U+1200–137F"
				},
				{
					name: "U+1380–139F"
				},
				{
					name: "U+2D80–2DDF"
				},
				{
					name: "U+AB00–AB2F"
				},
				{
					name: "U+1780–17FF"
				},
				{
					name: "U+1800–18AF"
				},
				{
					name: "U+1B80–1BBF"
				},
				{
					name: "U+1CC0–1CCF"
				},
				{
					name: "U+4E00–9FD5"
				},
				{
					name: "U+3400–4DB5"
				},
				{
					name: "U+2F00–2FDF"
				},
				{
					name: "U+2E80–2EFF"
				},
				{
					name: "U+1100–11FF"
				},
				{
					name: "U+AC00–D7AF"
				},
				{
					name: "U+3040–309F"
				},
				{
					name: "U+30A0–30FF"
				},
				{
					name: "U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F"
				},
				{
					name: "U+A4D0–A4FF"
				},
				{
					name: "U+A000–A48F"
				},
				{
					name: "U+A490–A4CF"
				},
				{
					name: "U+2000-206F"
				},
				{
					name: "U+3000–303F"
				},
				{
					name: "U+2070–209F"
				},
				{
					name: "U+20A0–20CF"
				},
				{
					name: "U+2100–214F"
				},
				{
					name: "U+2150–218F"
				},
				{
					name: "U+2190–21FF"
				},
				{
					name: "U+2200–22FF"
				},
				{
					name: "U+2300–23FF"
				},
				{
					name: "U+E000-F8FF"
				},
				{
					name: "U+FB00–FB4F"
				},
				{
					name: "U+FB50–FDFF"
				},
				{
					name: "U+1F600–1F64F"
				},
				{
					name: "U+2600–26FF"
				},
				{
					name: "U+1F300–1F5FF"
				},
				{
					name: "U+1F900–1F9FF"
				},
				{
					name: "U+1F680–1F6FF"
				}
			],
			"syntax": "<unicode-range>#",
			"description": "@font-face descriptor. Defines the set of Unicode codepoints that may be supported by the font face for which it is declared.",
			"restrictions": [
				"unicode-range"
			]
		},
		{
			name: "user-select",
			values: [
				{
					name: "all",
					"description": "The content of the element must be selected atomically"
				},
				{
					name: "auto"
				},
				{
					name: "contain",
					"description": "UAs must not allow a selection which is started in this element to be extended outside of this element."
				},
				{
					name: "none",
					"description": "The UA must not allow selections to be started in this element."
				},
				{
					name: "text",
					"description": "The element imposes no constraint on the selection."
				}
			],
			"status": "nonstandard",
			"syntax": "auto | text | none | contain | all",
			"description": "Controls the appearance of selection.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "vertical-align",
			values: [
				{
					name: "auto",
					"description": "Align the dominant baseline of the parent box with the equivalent, or heuristically reconstructed, baseline of the element inline box."
				},
				{
					name: "baseline",
					"description": "Align the 'alphabetic' baseline of the element with the 'alphabetic' baseline of the parent element."
				},
				{
					name: "bottom",
					"description": "Align the after edge of the extended inline box with the after-edge of the line box."
				},
				{
					name: "middle",
					"description": "Align the 'middle' baseline of the inline element with the middle baseline of the parent."
				},
				{
					name: "sub",
					"description": "Lower the baseline of the box to the proper position for subscripts of the parent's box. (This value has no effect on the font size of the element's text.)"
				},
				{
					name: "super",
					"description": "Raise the baseline of the box to the proper position for superscripts of the parent's box. (This value has no effect on the font size of the element's text.)"
				},
				{
					name: "text-bottom"
				},
				{
					name: "text-top"
				},
				{
					name: "top",
					"description": "Align the before edge of the extended inline box with the before-edge of the line box."
				},
				{
					name: "-webkit-baseline-middle"
				}
			],
			"syntax": "baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>",
			"description": "Affects the vertical positioning of the inline boxes generated by an inline-level element inside a line box.",
			"restrictions": [
				"percentage",
				"length"
			]
		},
		{
			name: "visibility",
			values: [
				{
					name: "collapse",
					"description": "Table-specific. If used on elements other than rows, row groups, columns, or column groups, 'collapse' has the same meaning as 'hidden'."
				},
				{
					name: "hidden",
					"description": "The generated box is invisible (fully transparent, nothing is drawn), but still affects layout."
				},
				{
					name: "visible",
					"description": "The generated box is visible."
				}
			],
			"syntax": "visible | hidden | collapse",
			"description": "Specifies whether the boxes generated by an element are rendered. Invisible boxes still affect layout (set the ‘display’ property to ‘none’ to suppress box generation altogether).",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-animation",
			browsers: [
				"C",
				"S5"
			],
			values: [
				{
					name: "alternate"
				},
				{
					name: "alternate-reverse"
				},
				{
					name: "backwards"
				},
				{
					name: "both",
					"description": "Both forwards and backwards fill modes are applied."
				},
				{
					name: "forwards"
				},
				{
					name: "infinite",
					"description": "Causes the animation to repeat forever."
				},
				{
					name: "none",
					"description": "No animation is performed"
				},
				{
					name: "normal",
					"description": "Normal playback."
				},
				{
					name: "reverse",
					"description": "All iterations of the animation are played in the reverse direction from the way they were specified."
				}
			],
			"description": "Shorthand property combines six of the animation properties into a single property.",
			"restrictions": [
				"time",
				"enum",
				"timing-function",
				"identifier",
				"number"
			]
		},
		{
			name: "-webkit-animation-delay",
			browsers: [
				"C",
				"S5"
			],
			"description": "Defines when the animation will start.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-webkit-animation-direction",
			browsers: [
				"C",
				"S5"
			],
			values: [
				{
					name: "alternate"
				},
				{
					name: "alternate-reverse"
				},
				{
					name: "normal",
					"description": "Normal playback."
				},
				{
					name: "reverse",
					"description": "All iterations of the animation are played in the reverse direction from the way they were specified."
				}
			],
			"description": "Defines whether or not the animation should play in reverse on alternate cycles.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-animation-duration",
			browsers: [
				"C",
				"S5"
			],
			"description": "Defines the length of time that an animation takes to complete one cycle.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-webkit-animation-fill-mode",
			browsers: [
				"C",
				"S5"
			],
			values: [
				{
					name: "backwards"
				},
				{
					name: "both",
					"description": "Both forwards and backwards fill modes are applied."
				},
				{
					name: "forwards"
				},
				{
					name: "none",
					"description": "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
				}
			],
			"description": "Defines what values are applied by the animation outside the time it is executing.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-animation-iteration-count",
			browsers: [
				"C",
				"S5"
			],
			values: [
				{
					name: "infinite",
					"description": "Causes the animation to repeat forever."
				}
			],
			"description": "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
			"restrictions": [
				"number",
				"enum"
			]
		},
		{
			name: "-webkit-animation-name",
			browsers: [
				"C",
				"S5"
			],
			values: [
				{
					name: "none",
					"description": "No animation is performed"
				}
			],
			"description": "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
			"restrictions": [
				"identifier",
				"enum"
			]
		},
		{
			name: "-webkit-animation-play-state",
			browsers: [
				"C",
				"S5"
			],
			values: [
				{
					name: "paused"
				},
				{
					name: "running"
				}
			],
			"description": "Defines whether the animation is running or paused.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-animation-timing-function",
			browsers: [
				"C",
				"S5"
			],
			"description": "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
			"restrictions": [
				"timing-function"
			]
		},
		{
			name: "-webkit-appearance",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "button"
				},
				{
					name: "button-bevel"
				},
				{
					name: "caps-lock-indicator"
				},
				{
					name: "caret"
				},
				{
					name: "checkbox"
				},
				{
					name: "default-button"
				},
				{
					name: "listbox"
				},
				{
					name: "listitem"
				},
				{
					name: "media-fullscreen-button"
				},
				{
					name: "media-mute-button"
				},
				{
					name: "media-play-button"
				},
				{
					name: "media-seek-back-button"
				},
				{
					name: "media-seek-forward-button"
				},
				{
					name: "media-slider"
				},
				{
					name: "media-sliderthumb"
				},
				{
					name: "menulist"
				},
				{
					name: "menulist-button"
				},
				{
					name: "menulist-text"
				},
				{
					name: "menulist-textfield"
				},
				{
					name: "none"
				},
				{
					name: "push-button"
				},
				{
					name: "radio"
				},
				{
					name: "scrollbarbutton-down"
				},
				{
					name: "scrollbarbutton-left"
				},
				{
					name: "scrollbarbutton-right"
				},
				{
					name: "scrollbarbutton-up"
				},
				{
					name: "scrollbargripper-horizontal"
				},
				{
					name: "scrollbargripper-vertical"
				},
				{
					name: "scrollbarthumb-horizontal"
				},
				{
					name: "scrollbarthumb-vertical"
				},
				{
					name: "scrollbartrack-horizontal"
				},
				{
					name: "scrollbartrack-vertical"
				},
				{
					name: "searchfield"
				},
				{
					name: "searchfield-cancel-button"
				},
				{
					name: "searchfield-decoration"
				},
				{
					name: "searchfield-results-button"
				},
				{
					name: "searchfield-results-decoration"
				},
				{
					name: "slider-horizontal"
				},
				{
					name: "sliderthumb-horizontal"
				},
				{
					name: "sliderthumb-vertical"
				},
				{
					name: "slider-vertical"
				},
				{
					name: "square-button"
				},
				{
					name: "textarea"
				},
				{
					name: "textfield"
				}
			],
			"status": "nonstandard",
			"syntax": "none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield",
			"description": "Changes the appearance of buttons and other controls to resemble native controls.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-backdrop-filter",
			browsers: [
				"S9"
			],
			values: [
				{
					name: "none",
					"description": "No filter effects are applied."
				},
				{
					name: "blur()"
				},
				{
					name: "brightness()"
				},
				{
					name: "contrast()"
				},
				{
					name: "drop-shadow()"
				},
				{
					name: "grayscale()"
				},
				{
					name: "hue-rotate()"
				},
				{
					name: "invert()"
				},
				{
					name: "opacity()"
				},
				{
					name: "saturate()"
				},
				{
					name: "sepia()"
				},
				{
					name: "url()",
					"description": "A filter reference to a <filter> element."
				}
			],
			"description": "Applies a filter effect where the first filter in the list takes the element's background image as the input image.",
			"restrictions": [
				"enum",
				"url"
			]
		},
		{
			name: "-webkit-backface-visibility",
			browsers: [
				"C",
				"S5"
			],
			values: [
				{
					name: "hidden"
				},
				{
					name: "visible"
				}
			],
			"description": "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-background-clip",
			browsers: [
				"C",
				"S3"
			],
			"description": "Determines the background painting area.",
			"restrictions": [
				"box"
			]
		},
		{
			name: "-webkit-background-composite",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "border"
				},
				{
					name: "padding"
				}
			],
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-background-origin",
			browsers: [
				"C",
				"S3"
			],
			"description": "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
			"restrictions": [
				"box"
			]
		},
		{
			name: "-webkit-border-image",
			browsers: [
				"C",
				"S5"
			],
			values: [
				{
					name: "auto",
					"description": "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
				},
				{
					name: "fill",
					"description": "Causes the middle part of the border-image to be preserved."
				},
				{
					name: "none"
				},
				{
					name: "repeat"
				},
				{
					name: "round",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
				},
				{
					name: "space",
					"description": "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
				},
				{
					name: "stretch",
					"description": "The image is stretched to fill the area."
				},
				{
					name: "url()"
				}
			],
			"description": "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
			"restrictions": [
				"length",
				"percentage",
				"number",
				"url",
				"enum"
			]
		},
		{
			name: "-webkit-box-align",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "baseline",
					"description": "If this box orientation is inline-axis or horizontal, all children are placed with their baselines aligned, and extra space placed before or after as necessary. For block flows, the baseline of the first non-empty line box located within the element is used. For tables, the baseline of the first cell is used."
				},
				{
					name: "center",
					"description": "Any extra space is divided evenly, with half placed above the child and the other half placed after the child."
				},
				{
					name: "end",
					"description": "For normal direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element. For reverse direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element."
				},
				{
					name: "start",
					"description": "For normal direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element. For reverse direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element."
				},
				{
					name: "stretch",
					"description": "The height of each child is adjusted to that of the containing block."
				}
			],
			"description": "Specifies the alignment of nested elements within an outer flexible box element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-box-direction",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "normal",
					"description": "A box with a computed value of horizontal for box-orient displays its children from left to right. A box with a computed value of vertical displays its children from top to bottom."
				},
				{
					name: "reverse",
					"description": "A box with a computed value of horizontal for box-orient displays its children from right to left. A box with a computed value of vertical displays its children from bottom to top."
				}
			],
			"description": "In webkit applications, -webkit-box-direction specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-box-flex",
			browsers: [
				"C",
				"S3"
			],
			"description": "Specifies an element's flexibility.",
			"restrictions": [
				"number"
			]
		},
		{
			name: "-webkit-box-flex-group",
			browsers: [
				"C",
				"S3"
			],
			"description": "Flexible elements can be assigned to flex groups using the 'box-flex-group' property.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-webkit-box-ordinal-group",
			browsers: [
				"C",
				"S3"
			],
			"description": "Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-webkit-box-orient",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "block-axis"
				},
				{
					name: "horizontal",
					"description": "The box displays its children from left to right in a horizontal line."
				},
				{
					name: "inline-axis"
				},
				{
					name: "vertical",
					"description": "The box displays its children from stacked from top to bottom vertically."
				}
			],
			"description": "In webkit applications, -webkit-box-orient specifies whether a box lays out its contents horizontally or vertically.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-box-pack",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "center",
					"description": "The extra space is divided evenly, with half placed before the first child and the other half placed after the last child."
				},
				{
					name: "end",
					"description": "For normal direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child. For reverse direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child."
				},
				{
					name: "justify",
					"description": "The space is divided evenly in-between each child, with none of the extra space placed before the first child or after the last child. If there is only one child, treat the pack value as if it were start."
				},
				{
					name: "start",
					"description": "For normal direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child. For reverse direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child."
				}
			],
			"description": "Specifies alignment of child elements within the current element in the direction of orientation.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-box-reflect",
			browsers: [
				"S4",
				"C4",
				"O15"
			],
			values: [
				{
					name: "above",
					"description": "The reflection appears above the border box."
				},
				{
					name: "below",
					"description": "The reflection appears below the border box."
				},
				{
					name: "left",
					"description": "The reflection appears to the left of the border box."
				},
				{
					name: "right",
					"description": "The reflection appears to the right of the border box."
				}
			],
			"status": "nonstandard",
			"syntax": "[ above | below | right | left ]? <length>? <image>?",
			"description": "Defines a reflection of a border box."
		},
		{
			name: "-webkit-box-sizing",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "border-box"
				},
				{
					name: "content-box"
				}
			],
			"description": "Box Model addition in CSS3.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-break-after",
			browsers: [
				"S7"
			],
			values: [
				{
					name: "always",
					"description": "Always force a page break before/after the generated box."
				},
				{
					name: "auto",
					"description": "Neither force nor forbid a page/column break before/after the generated box."
				},
				{
					name: "avoid",
					"description": "Avoid a page/column break before/after the generated box."
				},
				{
					name: "avoid-column",
					"description": "Avoid a column break before/after the generated box."
				},
				{
					name: "avoid-page",
					"description": "Avoid a page break before/after the generated box."
				},
				{
					name: "avoid-region"
				},
				{
					name: "column",
					"description": "Always force a column break before/after the generated box."
				},
				{
					name: "left",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
				},
				{
					name: "page",
					"description": "Always force a page break before/after the generated box."
				},
				{
					name: "region"
				},
				{
					name: "right",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
				}
			],
			"description": "Describes the page/column break behavior before the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-break-before",
			browsers: [
				"S7"
			],
			values: [
				{
					name: "always",
					"description": "Always force a page break before/after the generated box."
				},
				{
					name: "auto",
					"description": "Neither force nor forbid a page/column break before/after the generated box."
				},
				{
					name: "avoid",
					"description": "Avoid a page/column break before/after the generated box."
				},
				{
					name: "avoid-column",
					"description": "Avoid a column break before/after the generated box."
				},
				{
					name: "avoid-page",
					"description": "Avoid a page break before/after the generated box."
				},
				{
					name: "avoid-region"
				},
				{
					name: "column",
					"description": "Always force a column break before/after the generated box."
				},
				{
					name: "left",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
				},
				{
					name: "page",
					"description": "Always force a page break before/after the generated box."
				},
				{
					name: "region"
				},
				{
					name: "right",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
				}
			],
			"description": "Describes the page/column break behavior before the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-break-inside",
			browsers: [
				"S7"
			],
			values: [
				{
					name: "auto",
					"description": "Neither force nor forbid a page/column break inside the generated box."
				},
				{
					name: "avoid",
					"description": "Avoid a page/column break inside the generated box."
				},
				{
					name: "avoid-column",
					"description": "Avoid a column break inside the generated box."
				},
				{
					name: "avoid-page",
					"description": "Avoid a page break inside the generated box."
				},
				{
					name: "avoid-region"
				}
			],
			"description": "Describes the page/column break behavior inside the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-column-break-after",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "always",
					"description": "Always force a page break before/after the generated box."
				},
				{
					name: "auto",
					"description": "Neither force nor forbid a page/column break before/after the generated box."
				},
				{
					name: "avoid",
					"description": "Avoid a page/column break before/after the generated box."
				},
				{
					name: "avoid-column",
					"description": "Avoid a column break before/after the generated box."
				},
				{
					name: "avoid-page",
					"description": "Avoid a page break before/after the generated box."
				},
				{
					name: "avoid-region"
				},
				{
					name: "column",
					"description": "Always force a column break before/after the generated box."
				},
				{
					name: "left",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
				},
				{
					name: "page",
					"description": "Always force a page break before/after the generated box."
				},
				{
					name: "region"
				},
				{
					name: "right",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
				}
			],
			"description": "Describes the page/column break behavior before the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-column-break-before",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "always",
					"description": "Always force a page break before/after the generated box."
				},
				{
					name: "auto",
					"description": "Neither force nor forbid a page/column break before/after the generated box."
				},
				{
					name: "avoid",
					"description": "Avoid a page/column break before/after the generated box."
				},
				{
					name: "avoid-column",
					"description": "Avoid a column break before/after the generated box."
				},
				{
					name: "avoid-page",
					"description": "Avoid a page break before/after the generated box."
				},
				{
					name: "avoid-region"
				},
				{
					name: "column",
					"description": "Always force a column break before/after the generated box."
				},
				{
					name: "left",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
				},
				{
					name: "page",
					"description": "Always force a page break before/after the generated box."
				},
				{
					name: "region"
				},
				{
					name: "right",
					"description": "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
				}
			],
			"description": "Describes the page/column break behavior before the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-column-break-inside",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "auto",
					"description": "Neither force nor forbid a page/column break inside the generated box."
				},
				{
					name: "avoid",
					"description": "Avoid a page/column break inside the generated box."
				},
				{
					name: "avoid-column",
					"description": "Avoid a column break inside the generated box."
				},
				{
					name: "avoid-page",
					"description": "Avoid a page break inside the generated box."
				},
				{
					name: "avoid-region"
				}
			],
			"description": "Describes the page/column break behavior inside the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-column-count",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "auto",
					"description": "Determines the number of columns by the 'column-width' property and the element width."
				}
			],
			"description": "Describes the optimal number of columns into which the content of the element will be flowed.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "-webkit-column-gap",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "normal",
					"description": "User agent specific and typically equivalent to 1em."
				}
			],
			"description": "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-webkit-column-rule",
			browsers: [
				"C",
				"S3"
			],
			"description": "This property is a shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
			"restrictions": [
				"length",
				"line-width",
				"line-style",
				"color"
			]
		},
		{
			name: "-webkit-column-rule-color",
			browsers: [
				"C",
				"S3"
			],
			"description": "Sets the color of the column rule",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-webkit-column-rule-style",
			browsers: [
				"C",
				"S3"
			],
			"description": "Sets the style of the rule between columns of an element.",
			"restrictions": [
				"line-style"
			]
		},
		{
			name: "-webkit-column-rule-width",
			browsers: [
				"C",
				"S3"
			],
			"description": "Sets the width of the rule between columns. Negative values are not allowed.",
			"restrictions": [
				"length",
				"line-width"
			]
		},
		{
			name: "-webkit-columns",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "auto",
					"description": "The width depends on the values of other properties."
				}
			],
			"description": "A shorthand property which sets both 'column-width' and 'column-count'.",
			"restrictions": [
				"length",
				"integer"
			]
		},
		{
			name: "-webkit-column-span",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "all",
					"description": "The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appear."
				},
				{
					name: "none",
					"description": "The element does not span multiple columns."
				}
			],
			"description": "Describes the page/column break behavior after the generated box.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-column-width",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "auto",
					"description": "The width depends on the values of other properties."
				}
			],
			"description": "This property describes the width of columns in multicol elements.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-webkit-filter",
			browsers: [
				"C18",
				"O15",
				"S6"
			],
			values: [
				{
					name: "none",
					"description": "No filter effects are applied."
				},
				{
					name: "blur()"
				},
				{
					name: "brightness()"
				},
				{
					name: "contrast()"
				},
				{
					name: "drop-shadow()"
				},
				{
					name: "grayscale()"
				},
				{
					name: "hue-rotate()"
				},
				{
					name: "invert()"
				},
				{
					name: "opacity()"
				},
				{
					name: "saturate()"
				},
				{
					name: "sepia()"
				},
				{
					name: "url()",
					"description": "A filter reference to a <filter> element."
				}
			],
			"description": "Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.",
			"restrictions": [
				"enum",
				"url"
			]
		},
		{
			name: "-webkit-flow-from",
			browsers: [
				"S6.1"
			],
			values: [
				{
					name: "none",
					"description": "The block container is not a CSS Region."
				}
			],
			"description": "Makes a block container a region and associates it with a named flow.",
			"restrictions": [
				"identifier"
			]
		},
		{
			name: "-webkit-flow-into",
			browsers: [
				"S6.1"
			],
			values: [
				{
					name: "none",
					"description": "The element is not moved to a named flow and normal CSS processing takes place."
				}
			],
			"description": "Places an element or its contents into a named flow.",
			"restrictions": [
				"identifier"
			]
		},
		{
			name: "-webkit-font-feature-settings",
			browsers: [
				"C16"
			],
			values: [
				{
					name: "\"c2cs\""
				},
				{
					name: "\"dlig\""
				},
				{
					name: "\"kern\""
				},
				{
					name: "\"liga\""
				},
				{
					name: "\"lnum\""
				},
				{
					name: "\"onum\""
				},
				{
					name: "\"smcp\""
				},
				{
					name: "\"swsh\""
				},
				{
					name: "\"tnum\""
				},
				{
					name: "normal",
					"description": "No change in glyph substitution or positioning occurs."
				},
				{
					name: "off"
				},
				{
					name: "on"
				}
			],
			"description": "This property provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
			"restrictions": [
				"string",
				"integer"
			]
		},
		{
			name: "-webkit-hyphens",
			browsers: [
				"S5.1"
			],
			values: [
				{
					name: "auto",
					"description": "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
				},
				{
					name: "manual"
				},
				{
					name: "none",
					"description": "Words are not broken at line breaks, even if characters inside the word suggest line break points."
				}
			],
			"description": "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-line-break",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "after-white-space"
				},
				{
					name: "normal"
				}
			],
			"description": "Specifies line-breaking rules for CJK (Chinese, Japanese, and Korean) text."
		},
		{
			name: "-webkit-margin-bottom-collapse",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "collapse"
				},
				{
					name: "discard"
				},
				{
					name: "separate"
				}
			],
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-margin-collapse",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "collapse"
				},
				{
					name: "discard"
				},
				{
					name: "separate"
				}
			],
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-margin-start",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "auto"
				}
			],
			"restrictions": [
				"percentage",
				"length"
			]
		},
		{
			name: "-webkit-margin-top-collapse",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "collapse"
				},
				{
					name: "discard"
				},
				{
					name: "separate"
				}
			],
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-mask-clip",
			browsers: [
				"C",
				"O15",
				"S4"
			],
			"status": "nonstandard",
			"syntax": "[ <box> | border | padding | content | text ]#",
			"description": "Determines the mask painting area, which determines the area that is affected by the mask.",
			"restrictions": [
				"box"
			]
		},
		{
			name: "-webkit-mask-image",
			browsers: [
				"C",
				"O15",
				"S4"
			],
			values: [
				{
					name: "none",
					"description": "Counts as a transparent black image layer."
				},
				{
					name: "url()",
					"description": "Reference to a <mask element or to a CSS image."
				}
			],
			"status": "nonstandard",
			"syntax": "<mask-reference>#",
			"description": "Sets the mask layer image of an element.",
			"restrictions": [
				"url",
				"image",
				"enum"
			]
		},
		{
			name: "-webkit-mask-origin",
			browsers: [
				"C",
				"O15",
				"S4"
			],
			"status": "nonstandard",
			"syntax": "[ <box> | border | padding | content ]#",
			"description": "Specifies the mask positioning area.",
			"restrictions": [
				"box"
			]
		},
		{
			name: "-webkit-mask-repeat",
			browsers: [
				"C",
				"O15",
				"S4"
			],
			"status": "nonstandard",
			"syntax": "<repeat-style>#",
			"description": "Specifies how mask layer images are tiled after they have been sized and positioned.",
			"restrictions": [
				"repeat"
			]
		},
		{
			name: "-webkit-mask-size",
			browsers: [
				"C",
				"O15",
				"S4"
			],
			values: [
				{
					name: "auto",
					"description": "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
				},
				{
					name: "contain",
					"description": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
				},
				{
					name: "cover",
					"description": "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
				}
			],
			"status": "nonstandard",
			"syntax": "<bg-size>#",
			"description": "Specifies the size of the mask layer images.",
			"restrictions": [
				"length",
				"percentage",
				"enum"
			]
		},
		{
			name: "-webkit-nbsp-mode",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "normal"
				},
				{
					name: "space"
				}
			],
			"description": "Defines the behavior of nonbreaking spaces within text."
		},
		{
			name: "-webkit-overflow-scrolling",
			browsers: [
				"C",
				"S5"
			],
			values: [
				{
					name: "auto"
				},
				{
					name: "touch"
				}
			],
			"status": "nonstandard",
			"syntax": "auto | touch",
			"description": "Specifies whether to use native-style scrolling in an overflow:scroll element."
		},
		{
			name: "-webkit-padding-start",
			browsers: [
				"C",
				"S3"
			],
			"restrictions": [
				"percentage",
				"length"
			]
		},
		{
			name: "-webkit-perspective",
			browsers: [
				"C",
				"S4"
			],
			values: [
				{
					name: "none",
					"description": "No perspective transform is applied."
				}
			],
			"description": "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
			"restrictions": [
				"length"
			]
		},
		{
			name: "-webkit-perspective-origin",
			browsers: [
				"C",
				"S4"
			],
			"description": "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
			"restrictions": [
				"position",
				"percentage",
				"length"
			]
		},
		{
			name: "-webkit-region-fragment",
			browsers: [
				"S7"
			],
			values: [
				{
					name: "auto",
					"description": "Content flows as it would in a regular content box."
				},
				{
					name: "break"
				}
			],
			"description": "The 'region-fragment' property controls the behavior of the last region associated with a named flow.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-tap-highlight-color",
			browsers: [
				"E",
				"C",
				"S3.1"
			],
			"status": "nonstandard",
			"syntax": "<color>",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-webkit-text-fill-color",
			browsers: [
				"E12",
				"FF49",
				"S",
				"C",
				"O"
			],
			"status": "nonstandard",
			"syntax": "<color>",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-webkit-text-size-adjust",
			browsers: [
				"E",
				"C",
				"S3"
			],
			values: [
				{
					name: "auto",
					"description": "Renderers must use the default size adjustment when displaying on a small device."
				},
				{
					name: "none",
					"description": "Renderers must not do size adjustment when displaying on a small device."
				}
			],
			"description": "Specifies a size adjustment for displaying text content in mobile browsers.",
			"restrictions": [
				"percentage"
			]
		},
		{
			name: "-webkit-text-stroke",
			browsers: [
				"E15",
				"FF49",
				"S3.1",
				"C4",
				"O15"
			],
			"status": "nonstandard",
			"syntax": "<length> || <color>",
			"restrictions": [
				"length",
				"line-width",
				"color",
				"percentage"
			]
		},
		{
			name: "-webkit-text-stroke-color",
			browsers: [
				"E15",
				"FF49",
				"S",
				"C",
				"O"
			],
			"status": "nonstandard",
			"syntax": "<color>",
			"restrictions": [
				"color"
			]
		},
		{
			name: "-webkit-text-stroke-width",
			browsers: [
				"E15",
				"FF49",
				"S",
				"C",
				"O"
			],
			"status": "nonstandard",
			"syntax": "<length>",
			"restrictions": [
				"length",
				"line-width",
				"percentage"
			]
		},
		{
			name: "-webkit-touch-callout",
			browsers: [
				"S4"
			],
			values: [
				{
					name: "none"
				}
			],
			"status": "nonstandard",
			"syntax": "default | none",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-transform",
			browsers: [
				"C",
				"O12",
				"S3.1"
			],
			values: [
				{
					name: "matrix()"
				},
				{
					name: "matrix3d()"
				},
				{
					name: "none"
				},
				{
					name: "perspective()"
				},
				{
					name: "rotate()"
				},
				{
					name: "rotate3d()"
				},
				{
					name: "rotateX('angle')"
				},
				{
					name: "rotateY('angle')"
				},
				{
					name: "rotateZ('angle')"
				},
				{
					name: "scale()"
				},
				{
					name: "scale3d()"
				},
				{
					name: "scaleX()"
				},
				{
					name: "scaleY()"
				},
				{
					name: "scaleZ()"
				},
				{
					name: "skew()"
				},
				{
					name: "skewX()"
				},
				{
					name: "skewY()"
				},
				{
					name: "translate()"
				},
				{
					name: "translate3d()"
				},
				{
					name: "translateX()"
				},
				{
					name: "translateY()"
				},
				{
					name: "translateZ()"
				}
			],
			"description": "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-transform-origin",
			browsers: [
				"C",
				"O15",
				"S3.1"
			],
			"description": "Establishes the origin of transformation for an element.",
			"restrictions": [
				"position",
				"length",
				"percentage"
			]
		},
		{
			name: "-webkit-transform-origin-x",
			browsers: [
				"C",
				"S3.1"
			],
			"description": "The x coordinate of the origin for transforms applied to an element with respect to its border box.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "-webkit-transform-origin-y",
			browsers: [
				"C",
				"S3.1"
			],
			"description": "The y coordinate of the origin for transforms applied to an element with respect to its border box.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "-webkit-transform-origin-z",
			browsers: [
				"C",
				"S4"
			],
			"description": "The z coordinate of the origin for transforms applied to an element with respect to its border box.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "-webkit-transform-style",
			browsers: [
				"C",
				"S4"
			],
			values: [
				{
					name: "flat"
				}
			],
			"description": "Defines how nested elements are rendered in 3D space.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-transition",
			browsers: [
				"C",
				"O12",
				"S5"
			],
			values: [
				{
					name: "all",
					"description": "Every property that is able to undergo a transition will do so."
				},
				{
					name: "none",
					"description": "No property will transition."
				}
			],
			"description": "Shorthand property combines four of the transition properties into a single property.",
			"restrictions": [
				"time",
				"property",
				"timing-function",
				"enum"
			]
		},
		{
			name: "-webkit-transition-delay",
			browsers: [
				"C",
				"O12",
				"S5"
			],
			"description": "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-webkit-transition-duration",
			browsers: [
				"C",
				"O12",
				"S5"
			],
			"description": "Specifies how long the transition from the old value to the new value should take.",
			"restrictions": [
				"time"
			]
		},
		{
			name: "-webkit-transition-property",
			browsers: [
				"C",
				"O12",
				"S5"
			],
			values: [
				{
					name: "all",
					"description": "Every property that is able to undergo a transition will do so."
				},
				{
					name: "none",
					"description": "No property will transition."
				}
			],
			"description": "Specifies the name of the CSS property to which the transition is applied.",
			"restrictions": [
				"property"
			]
		},
		{
			name: "-webkit-transition-timing-function",
			browsers: [
				"C",
				"O12",
				"S5"
			],
			"description": "Describes how the intermediate values used during a transition will be calculated.",
			"restrictions": [
				"timing-function"
			]
		},
		{
			name: "-webkit-user-drag",
			browsers: [
				"S3"
			],
			values: [
				{
					name: "auto"
				},
				{
					name: "element"
				},
				{
					name: "none"
				}
			],
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-user-modify",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "read-only"
				},
				{
					name: "read-write"
				},
				{
					name: "read-write-plaintext-only"
				}
			],
			"status": "nonstandard",
			"syntax": "read-only | read-write | read-write-plaintext-only",
			"description": "Determines whether a user can edit the content of an element.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "-webkit-user-select",
			browsers: [
				"C",
				"S3"
			],
			values: [
				{
					name: "auto"
				},
				{
					name: "none"
				},
				{
					name: "text"
				}
			],
			"description": "Controls the appearance of selection.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "white-space",
			values: [
				{
					name: "normal",
					"description": "Sets 'white-space-collapsing' to 'collapse' and 'text-wrap' to 'normal'."
				},
				{
					name: "nowrap",
					"description": "Sets 'white-space-collapsing' to 'collapse' and 'text-wrap' to 'none'."
				},
				{
					name: "pre"
				},
				{
					name: "pre-line"
				},
				{
					name: "pre-wrap"
				}
			],
			"syntax": "normal | pre | nowrap | pre-wrap | pre-line",
			"description": "Shorthand property for the 'white-space-collapsing' and 'text-wrap' properties.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "widows",
			browsers: [
				"E12",
				"C25",
				"IE8",
				"O9.2"
			],
			"syntax": "<integer>",
			"description": "Specifies the minimum number of line boxes of a block container that must be left in a fragment after a break.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "width",
			values: [
				{
					name: "auto",
					"description": "The width depends on the values of other properties."
				},
				{
					name: "fit-content"
				},
				{
					name: "max-content",
					"description": "Use the max-content inline size or max-content block size, as appropriate to the writing mode."
				},
				{
					name: "min-content",
					"description": "Use the min-content inline size or min-content block size, as appropriate to the writing mode."
				}
			],
			"syntax": "<viewport-length>{1,2}",
			"description": "Specifies the width of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "will-change",
			browsers: [
				"FF36",
				"S9.1",
				"C36",
				"O24"
			],
			values: [
				{
					name: "auto",
					"description": "Expresses no particular intent."
				},
				{
					name: "contents",
					"description": "Indicates that the author expects to animate or change something about the element’s contents in the near future."
				},
				{
					name: "scroll-position"
				}
			],
			"syntax": "auto | <animateable-feature>#",
			"description": "Provides a rendering hint to the user agent, stating what kinds of changes the author expects to perform on the element.",
			"restrictions": [
				"enum",
				"identifier"
			]
		},
		{
			name: "word-break",
			values: [
				{
					name: "break-all"
				},
				{
					name: "keep-all",
					"description": "Block characters can no longer create implied break points."
				},
				{
					name: "normal",
					"description": "Breaks non-CJK scripts according to their own rules."
				}
			],
			"syntax": "normal | break-all | keep-all | break-word",
			"description": "Specifies line break opportunities for non-CJK scripts.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "word-spacing",
			values: [
				{
					name: "normal",
					"description": "No additional spacing is applied. Computes to zero."
				}
			],
			"syntax": "normal | <length-percentage>",
			"description": "Specifies additional spacing between “words”.",
			"restrictions": [
				"length",
				"percentage"
			]
		},
		{
			name: "word-wrap",
			values: [
				{
					name: "break-word",
					"description": "An otherwise unbreakable sequence of characters may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
				},
				{
					name: "normal",
					"description": "Lines may break only at allowed break points."
				}
			],
			"syntax": "normal | break-word",
			"description": "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "writing-mode",
			values: [
				{
					name: "horizontal-tb"
				},
				{
					name: "sideways-lr"
				},
				{
					name: "sideways-rl"
				},
				{
					name: "vertical-lr"
				},
				{
					name: "vertical-rl"
				}
			],
			"syntax": "horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr",
			"description": "This is a shorthand property for both 'direction' and 'block-progression'.",
			"restrictions": [
				"enum"
			]
		},
		{
			name: "z-index",
			values: [
				{
					name: "auto",
					"description": "The stack level of the generated box in the current stacking context is 0. The box does not establish a new stacking context unless it is the root element."
				}
			],
			"syntax": "auto | <integer>",
			"description": "For a positioned box, the 'z-index' property specifies the stack level of the box in the current stacking context and whether the box establishes a local stacking context.",
			"restrictions": [
				"integer"
			]
		},
		{
			name: "zoom",
			browsers: [
				"E12",
				"S4",
				"C",
				"IE5.5",
				"O15"
			],
			values: [
				{
					name: "normal"
				}
			],
			"syntax": "auto | <number> | <percentage>",
			"description": "Non-standard. Specifies the magnification scale of the object. See 'transform: scale()' for a standards-based alternative.",
			"restrictions": [
				"enum",
				"integer",
				"number",
				"percentage"
			]
		},
		{
			name: "-ms-ime-align",
			"status": "nonstandard",
			"syntax": "auto | after",
			"description": "Aligns the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active."
		},
		{
			name: "-moz-binding",
			"status": "nonstandard",
			"syntax": "<url> | none",
			browsers: [
				"FF1"
			],
			"description": "The -moz-binding CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element."
		},
		{
			name: "-moz-context-properties",
			"status": "nonstandard",
			"syntax": "none | [ fill | fill-opacity | stroke | stroke-opacity ]#",
			browsers: [
				"FF55"
			],
			"description": "If you reference an SVG image in a webpage (such as with the <img> element or as a background image), the SVG image can coordinate with the embedding element (its context) to have the image adopt property values set on the embedding element. To do this the embedding element needs to list the properties that are to be made available to the image by listing them as values of the -moz-context-properties property, and the image needs to opt in to using those properties by using values such as the context-fill value.\n\nThis feature is available since Firefox 55, but is only currently supported with SVG images loaded via chrome:// or resource:// URLs. To experiment with the feature in SVG on the Web it is necessary to set the svg.context-properties.content.enabled pref to true."
		},
		{
			name: "-moz-float-edge",
			"status": "nonstandard",
			"syntax": "border-box | content-box | margin-box | padding-box",
			"description": "The non-standard -moz-float-edge CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness."
		},
		{
			name: "-moz-force-broken-image-icon",
			"status": "nonstandard",
			"syntax": "<integer>",
			"description": "The -moz-force-broken-image-icon extended CSS property can be used to force the broken image icon to be shown even when a broken image has an alt attribute."
		},
		{
			name: "-moz-image-region",
			"status": "nonstandard",
			"syntax": "<shape> | auto",
			browsers: [
				"FF1"
			],
			"description": "For certain XUL elements and pseudo-elements that use an image from the list-style-image property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance."
		},
		{
			name: "-moz-orient",
			"status": "nonstandard",
			"syntax": "inline | block | horizontal | vertical",
			browsers: [
				"FF6"
			],
			"description": "The -moz-orient CSS property specifies the orientation of the element to which it's applied."
		},
		{
			name: "-moz-outline-radius",
			"status": "nonstandard",
			"syntax": "<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?",
			browsers: [
				"FF1.5"
			],
			"description": "In Mozilla applications like Firefox, the -moz-outline-radius CSS property can be used to give an element's outline rounded corners."
		},
		{
			name: "-moz-outline-radius-bottomleft",
			"status": "nonstandard",
			"syntax": "<outline-radius>",
			"description": "In Mozilla applications, the -moz-outline-radius-bottomleft CSS property can be used to round the bottom-left corner of an element's outline."
		},
		{
			name: "-moz-outline-radius-bottomright",
			"status": "nonstandard",
			"syntax": "<outline-radius>",
			"description": "In Mozilla applications, the -moz-outline-radius-bottomright CSS property can be used to round the bottom-right corner of an element's outline."
		},
		{
			name: "-moz-outline-radius-topleft",
			"status": "nonstandard",
			"syntax": "<outline-radius>",
			"description": "In Mozilla applications, the -moz-outline-radius-topleft CSS property can be used to round the top-left corner of an element's outline."
		},
		{
			name: "-moz-outline-radius-topright",
			"status": "nonstandard",
			"syntax": "<outline-radius>",
			"description": "In Mozilla applications, the -moz-outline-radius-topright CSS property can be used to round the top-right corner of an element's outline."
		},
		{
			name: "-moz-stack-sizing",
			"status": "nonstandard",
			"syntax": "ignore | stretch-to-fit",
			"description": "-moz-stack-sizing is an extended CSS property. Normally, a stack will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible."
		},
		{
			name: "-moz-text-blink",
			"status": "nonstandard",
			"syntax": "none | blink",
			browsers: [
				"FF6"
			],
			"description": "The -moz-text-blink non-standard Mozilla CSS extension specifies the blink mode."
		},
		{
			name: "-moz-user-input",
			"status": "nonstandard",
			"syntax": "auto | none | enabled | disabled",
			browsers: [
				"FF1"
			],
			"description": "In Mozilla applications, -moz-user-input determines if an element will accept user input."
		},
		{
			name: "-moz-user-modify",
			"status": "nonstandard",
			"syntax": "read-only | read-write | write-only",
			"description": "The -moz-user-modify property has no effect. It was originally planned to determine whether or not the content of an element can be edited by a user."
		},
		{
			name: "-moz-window-dragging",
			"status": "nonstandard",
			"syntax": "drag | no-drag",
			"description": "The -moz-window-dragging CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X."
		},
		{
			name: "-moz-window-shadow",
			"status": "nonstandard",
			"syntax": "default | menu | tooltip | sheet | none",
			"description": "The -moz-window-shadow CSS property specifies whether a window will have a shadow. It only works on Mac OS X."
		},
		{
			name: "-webkit-border-before",
			"status": "nonstandard",
			"syntax": "<'border-width'> || <'border-style'> || <'color'>",
			browsers: [
				"C",
				"O"
			],
			"description": "The -webkit-border-before CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet."
		},
		{
			name: "-webkit-border-before-color",
			"status": "nonstandard",
			"syntax": "<'color'>",
			"description": "The -webkit-border-before-color CSS property sets the color of the individual logical block start border in a single place in the style sheet."
		},
		{
			name: "-webkit-border-before-style",
			"status": "nonstandard",
			"syntax": "<'border-style'>",
			"description": "The -webkit-border-before-style CSS property sets the style of the individual logical block start border in a single place in the style sheet."
		},
		{
			name: "-webkit-border-before-width",
			"status": "nonstandard",
			"syntax": "<'border-width'>",
			"description": "The -webkit-border-before-width CSS property sets the width of the individual logical block start border in a single place in the style sheet."
		},
		{
			name: "-webkit-mask",
			"status": "nonstandard",
			"syntax": "[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#",
			"description": "The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points."
		},
		{
			name: "-webkit-mask-attachment",
			"status": "nonstandard",
			"syntax": "<attachment>#",
			browsers: [
				"S4",
				"C"
			],
			"description": "If a -webkit-mask-image is specified, -webkit-mask-attachment determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block."
		},
		{
			name: "-webkit-mask-composite",
			"status": "nonstandard",
			"syntax": "<composite-style>#",
			browsers: [
				"E18",
				"S4",
				"C1"
			],
			"description": "The -webkit-mask-composite property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the -webkit-mask-image property."
		},
		{
			name: "-webkit-mask-position",
			"status": "nonstandard",
			"syntax": "<position>#",
			"description": "The mask-position CSS property sets the initial position, relative to the mask position layer defined by mask-origin, for each defined mask image."
		},
		{
			name: "-webkit-mask-position-x",
			"status": "nonstandard",
			"syntax": "[ <length-percentage> | left | center | right ]#",
			browsers: [
				"E18",
				"S4",
				"C1"
			],
			"description": "The -webkit-mask-position-x CSS property sets the initial horizontal position of a mask image."
		},
		{
			name: "-webkit-mask-position-y",
			"status": "nonstandard",
			"syntax": "[ <length-percentage> | top | center | bottom ]#",
			browsers: [
				"E18",
				"S4",
				"C1"
			],
			"description": "The -webkit-mask-position-y CSS property sets the initial vertical position of a mask image."
		},
		{
			name: "-webkit-mask-repeat-x",
			"status": "nonstandard",
			"syntax": "repeat | no-repeat | space | round",
			browsers: [
				"E18",
				"C",
				"O"
			],
			"description": "The -webkit-mask-repeat-x property specifies whether and how a mask image is repeated (tiled) horizontally."
		},
		{
			name: "-webkit-mask-repeat-y",
			"status": "nonstandard",
			"syntax": "repeat | no-repeat | space | round",
			browsers: [
				"E18",
				"C",
				"O"
			],
			"description": "The -webkit-mask-repeat-y property specifies whether and how a mask image is repeated (tiled) vertically."
		},
		{
			name: "appearance",
			"status": "experimental",
			"syntax": "none | auto | button | textfield | <compat>",
			browsers: [
				"E12",
				"FF1",
				"S3",
				"C1",
				"O15"
			],
			"description": "Changes the appearance of buttons and other controls to resemble native controls."
		},
		{
			name: "azimuth",
			"status": "obsolete",
			"syntax": "<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards",
			"description": "In combination with elevation, the azimuth CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage."
		},
		{
			name: "backdrop-filter",
			"status": "experimental",
			"syntax": "none | <filter-function-list>",
			browsers: [
				"E17",
				"S9",
				"C47",
				"O34"
			],
			"description": "The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent."
		},
		{
			name: "border-block",
			"syntax": "<'border-top-width'> || <'border-top-style'> || <'color'>",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "border-block-color",
			"syntax": "<'border-top-color'>{1,2}",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "border-block-style",
			"syntax": "<'border-top-style'>",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "border-block-width",
			"syntax": "<'border-top-width'>",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "border-end-end-radius",
			"syntax": "<length-percentage>{1,2}",
			browsers: [
				"FF66"
			],
			"description": "The border-end-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's writing-mode, direction, and text-orientation."
		},
		{
			name: "border-end-start-radius",
			"syntax": "<length-percentage>{1,2}",
			browsers: [
				"FF66"
			],
			"description": "The border-end-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation."
		},
		{
			name: "border-inline",
			"syntax": "<'border-top-width'> || <'border-top-style'> || <'color'>",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "border-inline-color",
			"syntax": "<'border-top-color'>{1,2}",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "border-inline-style",
			"syntax": "<'border-top-style'>",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "border-inline-width",
			"syntax": "<'border-top-width'>",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "border-start-end-radius",
			"syntax": "<length-percentage>{1,2}",
			browsers: [
				"FF66"
			],
			"description": "The border-start-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation."
		},
		{
			name: "border-start-start-radius",
			"syntax": "<length-percentage>{1,2}",
			browsers: [
				"FF66"
			],
			"description": "The border-start-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's writing-mode, direction, and text-orientation."
		},
		{
			name: "box-align",
			"status": "nonstandard",
			"syntax": "start | center | end | baseline | stretch",
			browsers: [
				"E",
				"FF49",
				"S3",
				"C",
				"O"
			],
			"description": "The box-align CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box."
		},
		{
			name: "box-direction",
			"status": "nonstandard",
			"syntax": "normal | reverse | inherit",
			browsers: [
				"E12",
				"FF",
				"S3",
				"C",
				"O"
			],
			"description": "The box-direction CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge)."
		},
		{
			name: "box-flex",
			"status": "nonstandard",
			"syntax": "<number>",
			browsers: [
				"E12",
				"FF",
				"S3",
				"C",
				"O"
			],
			"description": "The -moz-box-flex and -webkit-box-flex CSS properties specify how a -moz-box or -webkit-box grows to fill the box that contains it, in the direction of the containing box's layout."
		},
		{
			name: "box-flex-group",
			"status": "nonstandard",
			"syntax": "<integer>",
			browsers: [
				"S3",
				"C",
				"O"
			],
			"description": "The box-flex-group CSS property assigns the flexbox's child elements to a flex group."
		},
		{
			name: "box-lines",
			"status": "nonstandard",
			"syntax": "single | multiple",
			browsers: [
				"S3",
				"C",
				"O"
			],
			"description": "The box-lines CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes)."
		},
		{
			name: "box-ordinal-group",
			"status": "nonstandard",
			"syntax": "<integer>",
			browsers: [
				"E",
				"FF",
				"S3",
				"C",
				"O"
			],
			"description": "The box-ordinal-group CSS property assigns the flexbox's child elements to an ordinal group."
		},
		{
			name: "box-orient",
			"status": "nonstandard",
			"syntax": "horizontal | vertical | inline-axis | block-axis | inherit",
			browsers: [
				"E12",
				"FF",
				"S3",
				"C",
				"O"
			],
			"description": "The box-orient CSS property specifies whether an element lays out its contents horizontally or vertically."
		},
		{
			name: "box-pack",
			"status": "nonstandard",
			"syntax": "start | center | end | justify",
			browsers: [
				"E12",
				"FF",
				"S3",
				"C",
				"O"
			],
			"description": "The -moz-box-pack and -webkit-box-pack CSS properties specify how a -moz-box or -webkit-box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box."
		},
		{
			name: "color-adjust",
			"syntax": "economy | exact",
			browsers: [
				"FF48",
				"S6",
				"C49",
				"O15"
			],
			"description": "The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images in browsers based on the WebKit engine."
		},
		{
			name: "font-optical-sizing",
			"syntax": "auto | none",
			browsers: [
				"FF62"
			],
			"description": "The font-optical-sizing CSS property allows developers to control whether browsers render text with slightly differing visual representations to optimize viewing at different sizes, or not. This only works for fonts that have an optical size variation axis."
		},
		{
			name: "font-variation-settings",
			"syntax": "normal | [ <string> <number> ]#",
			browsers: [
				"E17",
				"FF62",
				"S11",
				"C62",
				"O49"
			],
			"description": "The font-variation-settings CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values."
		},
		{
			name: "gap",
			"syntax": "<'row-gap'> <'column-gap'>?",
			browsers: [
				"E16",
				"FF63",
				"S10.1",
				"C66",
				"O53"
			],
			"description": "The gap CSS property is a shorthand property for row-gap and column-gap specifying the gutters between grid rows and columns."
		},
		{
			name: "hanging-punctuation",
			"syntax": "none | [ first || [ force-end | allow-end ] || last ]",
			browsers: [
				"S10"
			],
			"description": "The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box."
		},
		{
			name: "image-resolution",
			"status": "experimental",
			"syntax": "[ from-image || <resolution> ] && snap?",
			"description": "The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element. It affects both content images (e.g. replaced elements and generated content) and decorative images (such as background-image). The intrinsic resolution of an image is used to determine the image’s intrinsic dimensions."
		},
		{
			name: "initial-letter",
			"status": "experimental",
			"syntax": "normal | [ <number> <integer>? ]",
			browsers: [
				"S9"
			],
			"description": "The initial-letter CSS property specifies styling for dropped, raised, and sunken initial letters."
		},
		{
			name: "initial-letter-align",
			"status": "experimental",
			"syntax": "[ auto | alphabetic | hanging | ideographic ]",
			"description": "The initial-letter-align CSS property specifies the alignment of initial letters within a paragraph."
		},
		{
			name: "inset",
			"syntax": "<'top'>{1,4}",
			"description": "The inset CSS property defines the logical block and inline start and end offsets of an element, which map to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			name: "inset-block",
			"syntax": "<'top'>{1,2}",
			"description": "The inset-block CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			name: "inset-block-end",
			"syntax": "<'top'>",
			browsers: [
				"FF63"
			],
			"description": "The inset-block-end CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			name: "inset-block-start",
			"syntax": "<'top'>",
			browsers: [
				"FF63"
			],
			"description": "The inset-block-start CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			name: "inset-inline",
			"syntax": "<'top'>{1,2}",
			"description": "The inset-inline CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			name: "inset-inline-end",
			"syntax": "<'top'>",
			browsers: [
				"FF63"
			],
			"description": "The inset-inline-end CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			name: "inset-inline-start",
			"syntax": "<'top'>",
			browsers: [
				"FF63"
			],
			"description": "The inset-inline-start CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation."
		},
		{
			name: "line-clamp",
			"status": "experimental",
			"syntax": "none | <integer>",
			"description": "The line-clamp property allows limiting the contents of a block container to the specified number of lines; remaining content is fragmented away and neither rendered nor measured. Optionally, it also allows inserting content into the last line box to indicate the continuity of truncated/interrupted content."
		},
		{
			name: "margin-block",
			"syntax": "<'margin-left'>{1,2}",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "margin-inline",
			"syntax": "<'margin-left'>{1,2}",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "mask",
			"syntax": "<mask-layer>#",
			browsers: [
				"E12",
				"FF2",
				"S4",
				"C1",
				"O"
			],
			"description": "The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points."
		},
		{
			name: "mask-border",
			"status": "experimental",
			"syntax": "<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>",
			"description": "The mask-border CSS property lets you create a mask along the edge of an element's border.\n\nThis property is a shorthand for mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, mask-border-repeat, and mask-border-mode. As with all shorthand properties, any omitted sub-values will be set to their initial value."
		},
		{
			name: "mask-border-mode",
			"status": "experimental",
			"syntax": "luminance | alpha",
			"description": "The mask-border-mode CSS property specifies the blending mode used in a mask border."
		},
		{
			name: "mask-border-outset",
			"status": "experimental",
			"syntax": "[ <length> | <number> ]{1,4}",
			"description": "The mask-border-outset CSS property specifies the distance by which an element's mask border is set out from its border box."
		},
		{
			name: "mask-border-repeat",
			"status": "experimental",
			"syntax": "[ stretch | repeat | round | space ]{1,2}",
			"description": "The mask-border-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border."
		},
		{
			name: "mask-border-slice",
			"status": "experimental",
			"syntax": "<number-percentage>{1,4} fill?",
			"description": "The mask-border-slice CSS property divides the image specified by mask-border-source into regions. These regions are used to form the components of an element's mask border."
		},
		{
			name: "mask-border-source",
			"status": "experimental",
			"syntax": "none | <image>",
			"description": "The mask-border-source CSS property specifies the source image used to create an element's mask border.\n\nThe mask-border-slice property is used to divide the source image into regions, which are then dynamically applied to the final mask border."
		},
		{
			name: "mask-border-width",
			"status": "experimental",
			"syntax": "[ <length-percentage> | <number> | auto ]{1,4}",
			"description": "The mask-border-width CSS property specifies the width of an element's mask border."
		},
		{
			name: "mask-clip",
			"syntax": "[ <geometry-box> | no-clip ]#",
			browsers: [
				"FF53",
				"S",
				"C",
				"O"
			],
			"description": "The mask-clip CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area."
		},
		{
			name: "mask-composite",
			"syntax": "<compositing-operator>#",
			browsers: [
				"E18",
				"FF53"
			],
			"description": "The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it."
		},
		{
			name: "max-lines",
			"status": "experimental",
			"syntax": "none | <integer>",
			"description": "The max-liens property forces a break after a set number of lines"
		},
		{
			name: "offset",
			"status": "experimental",
			"syntax": "[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?",
			browsers: [
				"C55"
			],
			"description": "The offset CSS property is a shorthand property for animating an element along a defined path."
		},
		{
			name: "offset-anchor",
			"status": "experimental",
			"syntax": "auto | <position>",
			"description": "Defines an anchor point of the box positioned along the path. The anchor point specifies the point of the box which is to be considered as the point that is moved along the path."
		},
		{
			name: "offset-distance",
			"status": "experimental",
			"syntax": "<length-percentage>",
			browsers: [
				"C55"
			],
			"description": "The offset-distance CSS property specifies a position along an offset-path."
		},
		{
			name: "offset-path",
			"status": "experimental",
			"syntax": "none | ray( [ <angle> && <size>? && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]",
			browsers: [
				"FF63",
				"C55",
				"O45"
			],
			"description": "The offset-path CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the offset-distance property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of \"0\" for offset-distance and an initial direction which specifies the rotation of the object to the initial position.\n\nIn this specification, a direction (or rotation) of 0 degrees is equivalent to the direction of the positive x-axis in the object’s local coordinate system. In other words, a rotation of 0 degree points to the right side of the UA if the object and its ancestors have no transformation applied."
		},
		{
			name: "offset-position",
			"status": "experimental",
			"syntax": "auto | <position>",
			"description": "Specifies the initial position of the offset path. If position is specified with static, offset-position would be ignored."
		},
		{
			name: "offset-rotate",
			"status": "experimental",
			"syntax": "[ auto | reverse ] || <angle>",
			browsers: [
				"C56"
			],
			"description": "The offset-rotate CSS property defines the direction of the element while positioning along the offset path."
		},
		{
			name: "overflow-anchor",
			"status": "experimental",
			"syntax": "auto | none",
			browsers: [
				"FF66",
				"C56",
				"O43"
			],
			"description": "The overflow-anchor CSS property provides a way to opt out browser scroll anchoring behavior which adjusts scroll position to minimize content shifts."
		},
		{
			name: "overflow-block",
			"status": "experimental",
			"syntax": "<'overflow'>",
			"description": "The overflow-block CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the block axis."
		},
		{
			name: "overflow-clip-box",
			"status": "nonstandard",
			"syntax": "padding-box | content-box",
			browsers: [
				"FF29"
			],
			"description": "The overflow-clip-box CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the overflow-clip-box-inline and overflow-clip-box-block properties."
		},
		{
			name: "overflow-inline",
			"status": "experimental",
			"syntax": "<'overflow'>",
			"description": "The overflow-inline CSS media feature can be used to test how the output device handles content that overflows the initial containing block along the inline axis."
		},
		{
			name: "overscroll-behavior",
			"status": "nonstandard",
			"syntax": "[ contain | none | auto ]{1,2}",
			browsers: [
				"E18",
				"FF59",
				"C63",
				"O50"
			],
			"description": "The overscroll-behavior CSS property is shorthand for the overscroll-behavior-x and overscroll-behavior-y properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached."
		},
		{
			name: "overscroll-behavior-x",
			"status": "nonstandard",
			"syntax": "contain | none | auto",
			browsers: [
				"E18",
				"FF59",
				"C63",
				"O50"
			],
			"description": "The overscroll-behavior-x CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction."
		},
		{
			name: "overscroll-behavior-y",
			"status": "nonstandard",
			"syntax": "contain | none | auto",
			browsers: [
				"E18",
				"FF59",
				"C63",
				"O50"
			],
			"description": "The overscroll-behavior-y CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction."
		},
		{
			name: "padding-block",
			"syntax": "<'padding-left'>{1,2}",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "padding-inline",
			"syntax": "<'padding-left'>{1,2}",
			browsers: [
				"FF66",
				"C69"
			],
			"description": ""
		},
		{
			name: "place-content",
			"syntax": "<'align-content'> <'justify-content'>?",
			browsers: [
				"FF60",
				"S",
				"C59",
				"O"
			],
			"description": "The place-content CSS shorthand property sets both the align-content and justify-content properties."
		},
		{
			name: "place-items",
			"syntax": "<'align-items'> <'justify-items'>?",
			browsers: [
				"FF45",
				"C59"
			],
			"description": "The CSS place-items shorthand property sets both the align-items and justify-items properties. The first value is the align-items property value, the second the justify-items one. If the second value is not present, the first value is also used for it."
		},
		{
			name: "place-self",
			"syntax": "<'align-self'> <'justify-self'>?",
			browsers: [
				"FF45",
				"C59"
			],
			"description": ""
		},
		{
			name: "rotate",
			"syntax": "none | [ x | y | z | <number>{3} ]? && <angle>",
			browsers: [
				"FF60",
				"C"
			],
			"description": "The rotate CSS property allows you to specify rotation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value."
		},
		{
			name: "row-gap",
			"syntax": "normal | <length-percentage>",
			browsers: [
				"E16",
				"FF63",
				"S10.1",
				"C66",
				"O53"
			],
			"description": "The row-gap CSS property specifies the gutter between grid rows."
		},
		{
			name: "ruby-merge",
			"status": "experimental",
			"syntax": "separate | collapse | auto",
			"description": "This property controls how ruby annotation boxes should be rendered when there are more than one in a ruby container box: whether each pair should be kept separate, the annotations should be collapsed and rendered as a group, or the separation should be determined based on the space available."
		},
		{
			name: "scale",
			"syntax": "none | <number>{1,3}",
			browsers: [
				"FF60",
				"C"
			],
			"description": "The scale CSS property allows you to specify scale transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value."
		},
		{
			name: "scrollbar-color",
			"syntax": "auto | dark | light | <color>{2}",
			browsers: [
				"FF64"
			],
			"description": "The scrollbar-color CSS property sets the color of the scrollbar track and thumb."
		},
		{
			name: "scrollbar-width",
			"syntax": "auto | thin | none",
			browsers: [
				"FF64"
			],
			"description": "The scrollbar-width property allows the author to set the maximum thickness of an element’s scrollbars when they are shown. "
		},
		{
			name: "scroll-margin",
			"syntax": "[ auto | <length> ]{1,4}",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-margin property is a shorthand property which sets all of the scroll-margin longhands, assigning values much like the margin property does for the margin-* longhands."
		},
		{
			name: "scroll-margin-block",
			"syntax": "[ auto | <length> ]{1,2}",
			browsers: [
				"C69",
				"O56"
			],
			"description": "The scroll-margin-block property is a shorthand property which sets the scroll-margin longhands in the block dimension."
		},
		{
			name: "scroll-margin-block-start",
			"syntax": "auto | <length> ",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-margin-block-start property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			name: "scroll-margin-block-end",
			"syntax": "auto | <length>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-margin-block-end property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			name: "scroll-margin-bottom",
			"syntax": "auto | <length>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-margin-bottom property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			name: "scroll-margin-inline",
			"syntax": "[auto | <length> ]{1,2}",
			"description": "The scroll-margin-inline property is a shorthand property which sets the scroll-margin longhands in the inline dimension."
		},
		{
			name: "scroll-margin-inline-start",
			"syntax": "auto | <length>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-margin-inline-start property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			name: "scroll-margin-inline-end",
			"syntax": "auto | <length>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-margin-inline-end property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			name: "scroll-margin-left",
			"syntax": "auto | <length>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-margin-left property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			name: "scroll-margin-right",
			"syntax": "auto | <length>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-margin-right property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			name: "scroll-margin-top",
			"syntax": "auto | <length>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-margin-top property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets."
		},
		{
			name: "scroll-padding",
			"syntax": "[ auto | <length> | <percentage> ]{1,4}",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-padding property is a shorthand property which sets all of the scroll-padding longhands, assigning values much like the padding property does for the padding-* longhands."
		},
		{
			name: "scroll-padding-block",
			"syntax": "[auto | <length> | <percentage> ]{1,2}",
			browsers: [
				"C69",
				"O56"
			],
			"description": "The scroll-padding-block property is a shorthand property which sets the scroll-padding longhands for the block dimension."
		},
		{
			name: "scroll-padding-block-start",
			"syntax": "auto | <length> | <percentage>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-padding-block-start property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			name: "scroll-padding-block-end",
			"syntax": "auto | <length> | <percentage>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-padding-block-end property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			name: "scroll-padding-bottom",
			"syntax": "auto | <length> | <percentage>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-padding-bottom property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			name: "scroll-padding-inline",
			"syntax": "[auto | <length> | <percentage> ]{1,2}",
			browsers: [
				"C69",
				"O56"
			],
			"description": "The scroll-padding-inline property is a shorthand property which sets the scroll-padding longhands for the inline dimension."
		},
		{
			name: "scroll-padding-inline-start",
			"syntax": "auto | <length> | <percentage>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-padding-inline-start property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			name: "scroll-padding-inline-end",
			"syntax": "auto | <length> | <percentage>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-padding-inline-end property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			name: "scroll-padding-left",
			"syntax": "auto | <length> | <percentage>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-padding-left property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			name: "scroll-padding-right",
			"syntax": "auto | <length> | <percentage>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-padding-right property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			name: "scroll-padding-top",
			"syntax": "auto | <length> | <percentage>",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-padding-top property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targeted element and the edges of the scrollport."
		},
		{
			name: "scroll-snap-align",
			"syntax": "[ none | start | end | center ]{1,2}",
			browsers: [
				"S11",
				"C69",
				"O56"
			],
			"description": "The scroll-snap-align property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value."
		},
		{
			name: "scroll-snap-stop",
			"syntax": "normal | always",
			"description": "The scroll-snap-stop CSS property defines whether the scroll container is allowed to \"pass over\" possible snap positions."
		},
		{
			name: "scroll-snap-type-x",
			"status": "nonstandard",
			"syntax": "none | mandatory | proximity",
			browsers: [
				"FF39",
				"S9"
			],
			"description": "The scroll-snap-type-x CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.\n\nSpecifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent."
		},
		{
			name: "scroll-snap-type-y",
			"status": "nonstandard",
			"syntax": "none | mandatory | proximity",
			browsers: [
				"FF39"
			],
			"description": "The scroll-snap-type-y CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.\n\nSpecifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent."
		},
		{
			name: "text-combine-upright",
			"syntax": "none | all | [ digits <integer>? ]",
			"description": "The text-combine-upright CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\nThis is used to produce an effect that is known as tate-chū-yoko (縦中横) in Japanese, or as 直書橫向 in Chinese."
		},
		{
			name: "text-decoration-skip",
			"status": "experimental",
			"syntax": "none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]",
			browsers: [
				"S8",
				"C57",
				"O44"
			],
			"description": "The text-decoration-skip CSS property specifies what parts of the element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors."
		},
		{
			name: "text-decoration-skip-ink",
			"status": "experimental",
			"syntax": "auto | none",
			browsers: [
				"C64",
				"O50"
			],
			"description": "The text-decoration-skip-ink CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders."
		},
		{
			name: "text-emphasis",
			"syntax": "<'text-emphasis-style'> || <'text-emphasis-color'>",
			browsers: [
				"FF46",
				"S",
				"C25",
				"O15"
			],
			"description": "The text-emphasis CSS property is a shorthand property for setting text-emphasis-style and text-emphasis-color in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters."
		},
		{
			name: "text-emphasis-color",
			"syntax": "<color>",
			browsers: [
				"FF46",
				"S",
				"C25",
				"O15"
			],
			"description": "The text-emphasis-color CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the text-emphasis shorthand."
		},
		{
			name: "text-emphasis-position",
			"syntax": "[ over | under ] && [ right | left ]",
			browsers: [
				"FF46",
				"S",
				"C",
				"O"
			],
			"description": "The text-emphasis-position CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased."
		},
		{
			name: "text-emphasis-style",
			"syntax": "none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>",
			browsers: [
				"FF46",
				"S",
				"C25",
				"O15"
			],
			"description": "The text-emphasis-style CSS property defines the type of emphasis used. It can also be set, and reset, using the text-emphasis shorthand."
		},
		{
			name: "text-size-adjust",
			"status": "experimental",
			"syntax": "none | auto | <percentage>",
			browsers: [
				"E12",
				"C54",
				"O42"
			],
			"description": "The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property."
		},
		{
			name: "transform-box",
			"syntax": "border-box | fill-box | view-box",
			browsers: [
				"FF55",
				"C64",
				"O51"
			],
			"description": "The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate."
		},
		{
			name: "translate",
			"syntax": "none | <length-percentage> [ <length-percentage> <length>? ]?",
			browsers: [
				"FF60",
				"C"
			],
			"description": "The translate CSS property allows you to specify translation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value."
		},
		{
			name: "speak-as",
			"syntax": "auto | bullets | numbers | words | spell-out | <counter-style-name>",
			"description": "The speak-as descriptor specifies how a counter symbol constructed with a given @counter-style will be represented in the spoken form. For example, an author can specify a counter symbol to be either spoken as its numerical value or just represented with an audio cue."
		},
		{
			name: "font-display",
			"status": "experimental",
			"syntax": "[ auto | block | swap | fallback | optional ]",
			"description": "The font-display descriptor determines how a font face is displayed based on whether and when it is downloaded and ready to use."
		},
		{
			name: "bleed",
			"status": "experimental",
			"syntax": "auto | <length>",
			"description": "The bleed CSS at-rule descriptor, used with the @page at-rule, specifies the extent of the page bleed area outside the page box. This property only has effect if crop marks are enabled using the marks property."
		},
		{
			name: "marks",
			"status": "experimental",
			"syntax": "none | [ crop || cross ]",
			"description": "The marks CSS at-rule descriptor, used with the @page at-rule, adds crop and/or cross marks to the presentation of the document. Crop marks indicate where the page should be cut. Cross marks are used to align sheets."
		},
		{
			name: "max-zoom",
			"syntax": "auto | <number> | <percentage>",
			"description": "The max-zoom CSS descriptor sets the maximum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom in any further than this, whether automatically or at the user's request.\n\nA zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out."
		},
		{
			name: "min-zoom",
			"syntax": "auto | <number> | <percentage>",
			"description": "The min-zoom CSS descriptor sets the minimum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom out any further than this, whether automatically or at the user's request.\n\nA zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out."
		},
		{
			name: "orientation",
			"syntax": "auto | portrait | landscape",
			"description": "The orientation CSS @media media feature can be used to apply styles based on the orientation of the viewport (or the page box, for paged media)."
		},
		{
			name: "user-zoom",
			"syntax": "zoom | fixed",
			"description": "The user-zoom CSS descriptor controls whether or not the user can change the zoom factor of a document defined by @viewport."
		}
	],
	"atDirectives": [
		{
			name: "@charset",
			browsers: [
				"FF1.5",
				"S4",
				"C2",
				"IE5.5",
				"O9"
			],
			"description": "Defines character set of the document."
		},
		{
			name: "@counter-style",
			browsers: [
				"FF33"
			],
			"description": "Defines a custom counter style."
		},
		{
			name: "@font-face",
			"description": "Allows for linking to fonts that are automatically activated when needed. This permits authors to work around the limitation of 'web-safe' fonts, allowing for consistent rendering independent of the fonts available in a given user's environment."
		},
		{
			name: "@font-feature-values",
			browsers: [
				"FF34",
				"S9.1"
			],
			"description": "Defines named values for the indices used to select alternate glyphs for a given font family."
		},
		{
			name: "@import",
			"description": "Includes content of another file."
		},
		{
			name: "@keyframes",
			"description": "Defines set of animation key frames."
		},
		{
			name: "@media",
			"description": "Defines a stylesheet for a particular media type."
		},
		{
			name: "@-moz-document",
			browsers: [
				"FF1.8"
			],
			"description": "Gecko-specific at-rule that restricts the style rules contained within it based on the URL of the document."
		},
		{
			name: "@-moz-keyframes",
			browsers: [
				"FF5"
			],
			"description": "Defines set of animation key frames."
		},
		{
			name: "@-ms-viewport",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Specifies the size, zoom factor, and orientation of the viewport."
		},
		{
			name: "@namespace",
			"description": "Declares a prefix and associates it with a namespace name."
		},
		{
			name: "@-o-keyframes",
			browsers: [
				"O12"
			],
			"description": "Defines set of animation key frames."
		},
		{
			name: "@-o-viewport",
			browsers: [
				"O11"
			],
			"description": "Specifies the size, zoom factor, and orientation of the viewport."
		},
		{
			name: "@page",
			browsers: [
				"E",
				"FF19",
				"C2",
				"IE8",
				"O6"
			],
			"description": "Directive defines various page parameters."
		},
		{
			name: "@supports",
			browsers: [
				"E12",
				"FF22",
				"S9",
				"C28",
				"O12.1"
			],
			"description": "A conditional group rule whose condition tests whether the user agent supports CSS property:value pairs."
		},
		{
			name: "@-webkit-keyframes",
			browsers: [
				"C",
				"S4"
			],
			"description": "Defines set of animation key frames."
		}
	],
	"pseudoClasses": [
		{
			name: ":active",
			"description": "Applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it."
		},
		{
			name: ":any-link",
			browsers: [
				"FF50",
				"S",
				"C",
				"O"
			],
			"description": "Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links."
		},
		{
			name: ":checked",
			"description": "Radio and checkbox elements can be toggled by the user. Some menu items are 'checked' when the user selects them. When such elements are toggled 'on' the :checked pseudo-class applies."
		},
		{
			name: ":corner-present",
			browsers: [
				"C",
				"S5"
			],
			"description": "Non-standard. Indicates whether or not a scrollbar corner is present."
		},
		{
			name: ":decrement",
			browsers: [
				"C",
				"S5"
			],
			"description": "Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will decrement the view’s position when used."
		},
		{
			name: ":default",
			browsers: [
				"FF4",
				"S5",
				"C10",
				"O10"
			],
			"description": "Applies to the one or more UI elements that are the default among a set of similar elements. Typically applies to context menu items, buttons, and select lists/menus."
		},
		{
			name: ":disabled",
			"description": "Represents user interface elements that are in a disabled state; such elements have a corresponding enabled state."
		},
		{
			name: ":double-button",
			browsers: [
				"C",
				"S5"
			],
			"description": "Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed together at the same end of the scrollbar."
		},
		{
			name: ":empty",
			"description": "Represents an element that has no children at all."
		},
		{
			name: ":enabled",
			"description": "Represents user interface elements that are in an enabled state; such elements have a corresponding disabled state."
		},
		{
			name: ":end",
			browsers: [
				"C",
				"S5"
			],
			"description": "Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed after the thumb."
		},
		{
			name: ":first",
			browsers: [
				"E",
				"IE8",
				"O9.2"
			],
			"description": "When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context."
		},
		{
			name: ":first-child",
			"description": "Same as :nth-child(1). Represents an element that is the first child of some other element."
		},
		{
			name: ":first-of-type",
			"description": "Same as :nth-of-type(1). Represents an element that is the first sibling of its type in the list of children of its parent element."
		},
		{
			name: ":focus",
			"description": "Applies while an element has the focus (accepts keyboard or mouse events, or other forms of input)."
		},
		{
			name: ":fullscreen",
			browsers: [
				"E12",
				"FF64",
				"S6",
				"C15",
				"IE11"
			],
			"description": "Matches any element that has its fullscreen flag set."
		},
		{
			name: ":future",
			browsers: [
				"C",
				"O16",
				"S6"
			],
			"description": "Represents any element that is defined to occur entirely after a :current element."
		},
		{
			name: ":horizontal",
			browsers: [
				"C",
				"S5"
			],
			"description": "Non-standard. Applies to any scrollbar pieces that have a horizontal orientation."
		},
		{
			name: ":host",
			browsers: [
				"FF63",
				"S",
				"C",
				"O"
			],
			"description": "When evaluated in the context of a shadow tree, matches the shadow tree’s host element."
		},
		{
			name: ":host()",
			browsers: [
				"C35",
				"O22"
			],
			"description": "When evaluated in the context of a shadow tree, it matches the shadow tree’s host element if the host element, in its normal context, matches the selector argument."
		},
		{
			name: ":host-context()",
			browsers: [
				"C35",
				"O22"
			],
			"description": "Tests whether there is an ancestor, outside the shadow tree, which matches a particular selector."
		},
		{
			name: ":hover",
			"description": "Applies while the user designates an element with a pointing device, but does not necessarily activate it. For example, a visual user agent could apply this pseudo-class when the cursor (mouse pointer) hovers over a box generated by the element."
		},
		{
			name: ":increment",
			browsers: [
				"C",
				"S5"
			],
			"description": "Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will increment the view’s position when used."
		},
		{
			name: ":indeterminate",
			"description": "Applies to UI elements whose value is in an indeterminate state."
		},
		{
			name: ":in-range",
			browsers: [
				"E",
				"FF29",
				"S",
				"C10",
				"O11"
			],
			"description": "Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes."
		},
		{
			name: ":invalid",
			"description": "An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification."
		},
		{
			name: ":lang()",
			browsers: [
				"E",
				"C",
				"FF1",
				"IE8",
				"O8",
				"S3"
			],
			"description": "Represents an element that is in language specified."
		},
		{
			name: ":last-child",
			"description": "Same as :nth-last-child(1). Represents an element that is the last child of some other element."
		},
		{
			name: ":last-of-type",
			"description": "Same as :nth-last-of-type(1). Represents an element that is the last sibling of its type in the list of children of its parent element."
		},
		{
			name: ":left",
			browsers: [
				"E",
				"IE8",
				"O9.2"
			],
			"description": "When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context."
		},
		{
			name: ":link",
			"description": "Applies to links that have not yet been visited."
		},
		{
			name: ":matches()",
			browsers: [
				"S9"
			],
			"description": "Takes a selector list as its argument. It represents an element that is represented by its argument."
		},
		{
			name: ":-moz-any()",
			browsers: [
				"FF4"
			],
			"description": "Represents an element that is represented by the selector list passed as its argument. Standardized as :matches()."
		},
		{
			name: ":-moz-any-link",
			browsers: [
				"FF1"
			],
			"description": "Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links."
		},
		{
			name: ":-moz-broken",
			browsers: [
				"FF3"
			],
			"description": "Non-standard. Matches elements representing broken images."
		},
		{
			name: ":-moz-drag-over",
			browsers: [
				"FF1"
			],
			"description": "Non-standard. Matches elements when a drag-over event applies to it."
		},
		{
			name: ":-moz-first-node",
			browsers: [
				"FF1"
			],
			"description": "Non-standard. Represents an element that is the first child node of some other element."
		},
		{
			name: ":-moz-focusring",
			browsers: [
				"FF4"
			],
			"description": "Non-standard. Matches an element that has focus and focus ring drawing is enabled in the browser."
		},
		{
			name: ":-moz-full-screen",
			browsers: [
				"FF9"
			],
			"description": "Matches any element that has its fullscreen flag set. Standardized as :fullscreen."
		},
		{
			name: ":-moz-last-node",
			browsers: [
				"FF1"
			],
			"description": "Non-standard. Represents an element that is the last child node of some other element."
		},
		{
			name: ":-moz-loading",
			browsers: [
				"FF3"
			],
			"description": "Non-standard. Matches elements, such as images, that haven’t started loading yet."
		},
		{
			name: ":-moz-only-whitespace",
			browsers: [
				"FF1"
			],
			"description": "The same as :empty, except that it additionally matches elements that only contain code points affected by whitespace processing. Standardized as :blank."
		},
		{
			name: ":-moz-placeholder",
			browsers: [
				"FF4"
			],
			"description": "Deprecated. Represents placeholder text in an input field. Use ::-moz-placeholder for Firefox 19+."
		},
		{
			name: ":-moz-submit-invalid",
			browsers: [
				"FF4"
			],
			"description": "Non-standard. Represents any submit button when the contents of the associated form are not valid."
		},
		{
			name: ":-moz-suppressed",
			browsers: [
				"FF3"
			],
			"description": "Non-standard. Matches elements representing images that have been blocked from loading."
		},
		{
			name: ":-moz-ui-invalid",
			browsers: [
				"FF4"
			],
			"description": "Non-standard. Represents any validated form element whose value isn't valid "
		},
		{
			name: ":-moz-ui-valid",
			browsers: [
				"FF4"
			],
			"description": "Non-standard. Represents any validated form element whose value is valid "
		},
		{
			name: ":-moz-user-disabled",
			browsers: [
				"FF3"
			],
			"description": "Non-standard. Matches elements representing images that have been disabled due to the user’s preferences."
		},
		{
			name: ":-moz-window-inactive",
			browsers: [
				"FF4"
			],
			"description": "Non-standard. Matches elements in an inactive window."
		},
		{
			name: ":-ms-fullscreen",
			browsers: [
				"IE11"
			],
			"description": "Matches any element that has its fullscreen flag set."
		},
		{
			name: ":-ms-input-placeholder",
			browsers: [
				"IE10"
			],
			"description": "Represents placeholder text in an input field. Note: for Edge use the pseudo-element ::-ms-input-placeholder. Standardized as ::placeholder."
		},
		{
			name: ":-ms-keyboard-active",
			browsers: [
				"IE10"
			],
			"description": "Windows Store apps only. Applies one or more styles to an element when it has focus and the user presses the space bar."
		},
		{
			name: ":-ms-lang()",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents an element that is in the language specified. Accepts a comma separated list of language tokens."
		},
		{
			name: ":no-button",
			browsers: [
				"C",
				"S5"
			],
			"description": "Non-standard. Applies to track pieces. Applies when there is no button at that end of the track."
		},
		{
			name: ":not()",
			browsers: [
				"E",
				"C",
				"FF1",
				"IE9",
				"O9.5",
				"S2"
			],
			"description": "The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument."
		},
		{
			name: ":nth-child()",
			browsers: [
				"E",
				"C",
				"FF3.5",
				"IE9",
				"O9.5",
				"S3.1"
			],
			"description": "Represents an element that has an+b-1 siblings before it in the document tree, for any positive integer or zero value of n, and has a parent element."
		},
		{
			name: ":nth-last-child()",
			browsers: [
				"E",
				"C",
				"FF3.5",
				"IE9",
				"O9.5",
				"S3.1"
			],
			"description": "Represents an element that has an+b-1 siblings after it in the document tree, for any positive integer or zero value of n, and has a parent element."
		},
		{
			name: ":nth-last-of-type()",
			browsers: [
				"E",
				"C",
				"FF3.5",
				"IE9",
				"O9.5",
				"S3.1"
			],
			"description": "Represents an element that has an+b-1 siblings with the same expanded element name after it in the document tree, for any zero or positive integer value of n, and has a parent element."
		},
		{
			name: ":nth-of-type()",
			browsers: [
				"E",
				"C",
				"FF3.5",
				"IE9",
				"O9.5",
				"S3.1"
			],
			"description": "Represents an element that has an+b-1 siblings with the same expanded element name before it in the document tree, for any zero or positive integer value of n, and has a parent element."
		},
		{
			name: ":only-child",
			"description": "Represents an element that has a parent element and whose parent element has no other element children. Same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity."
		},
		{
			name: ":only-of-type",
			"description": "Matches every element that is the only child of its type, of its parent. Same as :first-of-type:last-of-type or :nth-of-type(1):nth-last-of-type(1), but with a lower specificity."
		},
		{
			name: ":optional",
			"description": "A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional."
		},
		{
			name: ":out-of-range",
			browsers: [
				"E",
				"FF29",
				"S",
				"C10",
				"O11"
			],
			"description": "Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes."
		},
		{
			name: ":past",
			browsers: [
				"C",
				"O16",
				"S6"
			],
			"description": "Represents any element that is defined to occur entirely prior to a :current element."
		},
		{
			name: ":read-only",
			browsers: [
				"E",
				"FF1.5",
				"S",
				"C",
				"O"
			],
			"description": "An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only."
		},
		{
			name: ":read-write",
			browsers: [
				"E",
				"FF1.5",
				"S",
				"C",
				"O"
			],
			"description": "An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only."
		},
		{
			name: ":required",
			"description": "A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional."
		},
		{
			name: ":right",
			browsers: [
				"E",
				"IE8",
				"O9.2"
			],
			"description": "When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context."
		},
		{
			name: ":root",
			browsers: [
				"FF1",
				"S1",
				"C1",
				"IE9",
				"O9.5"
			],
			"description": "Represents an element that is the root of the document. In HTML 4, this is always the HTML element."
		},
		{
			name: ":scope",
			browsers: [
				"FF32",
				"S7",
				"C27",
				"O15"
			],
			"description": "Represents any element that is in the contextual reference element set."
		},
		{
			name: ":single-button",
			browsers: [
				"C",
				"S5"
			],
			"description": "Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed separately at either end of the scrollbar."
		},
		{
			name: ":start",
			browsers: [
				"C",
				"S5"
			],
			"description": "Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed before the thumb."
		},
		{
			name: ":target",
			"description": "Some URIs refer to a location within a resource. This kind of URI ends with a 'number sign' (#) followed by an anchor identifier (called the fragment identifier)."
		},
		{
			name: ":valid",
			"description": "An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification."
		},
		{
			name: ":vertical",
			browsers: [
				"C",
				"S5"
			],
			"description": "Non-standard. Applies to any scrollbar pieces that have a vertical orientation."
		},
		{
			name: ":visited",
			"description": "Applies once the link has been visited by the user."
		},
		{
			name: ":-webkit-any()",
			browsers: [
				"C",
				"S5"
			],
			"description": "Represents an element that is represented by the selector list passed as its argument. Standardized as :matches()."
		},
		{
			name: ":-webkit-full-screen",
			browsers: [
				"C",
				"S6"
			],
			"description": "Matches any element that has its fullscreen flag set. Standardized as :fullscreen."
		},
		{
			name: ":window-inactive",
			browsers: [
				"C",
				"S3"
			],
			"description": "Non-standard. Applies to all scrollbar pieces. Indicates whether or not the window containing the scrollbar is currently active."
		},
		{
			name: ":blank",
			"status": "experimental",
			"description": "The :blank CSS pseudo-class selects empty user input elements (eg. <input> or <textarea>)."
		},
		{
			name: ":defined",
			"status": "experimental",
			browsers: [
				"FF63",
				"S",
				"C",
				"O"
			],
			"description": "The :defined CSS pseudo-class represents any element that has been defined. This includes any standard element built in to the browser, and custom elements that have been successfully defined (i.e. with the CustomElementRegistry.define() method)."
		},
		{
			name: ":dir",
			browsers: [
				"FF49"
			],
			"description": "The :dir() CSS pseudo-class matches elements based on the directionality of the text contained in them."
		},
		{
			name: ":focus-visible",
			"status": "experimental",
			browsers: [
				"C67"
			],
			"description": "The :focus-visible pseudo-class applies while an element matches the :focus pseudo-class and the UA determines via heuristics that the focus should be made evident on the element."
		},
		{
			name: ":focus-within",
			"status": "experimental",
			browsers: [
				"FF52",
				"S10.1",
				"C60",
				"O47"
			],
			"description": "The :focus-within pseudo-class applies to any element for which the :focus pseudo class applies as well as to an element whose descendant in the flat tree (including non-element nodes, such as text nodes) matches the conditions for matching :focus."
		},
		{
			name: ":has",
			"status": "experimental",
			"description": ":The :has() CSS pseudo-class represents an element if any of the selectors passed as parameters (relative to the :scope of the given element), match at least one element."
		},
		{
			name: ":is",
			"status": "experimental",
			browsers: [
				"FF4",
				"S9",
				"C66",
				"O53"
			],
			"description": "The :is() CSS pseudo-class function takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list. This is useful for writing large selectors in a more compact form."
		},
		{
			name: ":placeholder-shown",
			"status": "experimental",
			browsers: [
				"FF51",
				"S9",
				"C47",
				"IE10",
				"O34"
			],
			"description": "The :placeholder-shown CSS pseudo-class represents any <input> or <textarea> element that is currently displaying placeholder text."
		},
		{
			name: ":where",
			"status": "experimental",
			"description": "The :where() CSS pseudo-class function takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list."
		}
	],
	"pseudoElements": [
		{
			name: "::after",
			"description": "Represents a styleable child pseudo-element immediately after the originating element’s actual content."
		},
		{
			name: "::backdrop",
			browsers: [
				"E",
				"FF47",
				"C37",
				"IE11"
			],
			"description": "Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen)."
		},
		{
			name: "::before",
			"description": "Represents a styleable child pseudo-element immediately before the originating element’s actual content."
		},
		{
			name: "::content",
			browsers: [
				"C35",
				"O22"
			],
			"description": "Deprecated. Matches the distribution list itself, on elements that have one. Use ::slotted for forward compatibility."
		},
		{
			name: "::cue",
			browsers: [
				"FF55",
				"C"
			]
		},
		{
			name: "::cue()",
			browsers: [
				"C",
				"O16",
				"S6"
			]
		},
		{
			name: "::cue-region",
			browsers: [
				"C",
				"O16",
				"S6"
			]
		},
		{
			name: "::cue-region()",
			browsers: [
				"C",
				"O16",
				"S6"
			]
		},
		{
			name: "::first-letter",
			"description": "Represents the first letter of an element, if it is not preceded by any other content (such as images or inline tables) on its line."
		},
		{
			name: "::first-line",
			"description": "Describes the contents of the first formatted line of its originating element."
		},
		{
			name: "::-moz-focus-inner",
			browsers: [
				"FF4"
			]
		},
		{
			name: "::-moz-focus-outer",
			browsers: [
				"FF4"
			]
		},
		{
			name: "::-moz-list-bullet",
			browsers: [
				"FF1"
			],
			"description": "Used to style the bullet of a list element. Similar to the standardized ::marker."
		},
		{
			name: "::-moz-list-number",
			browsers: [
				"FF1"
			],
			"description": "Used to style the numbers of a list element. Similar to the standardized ::marker."
		},
		{
			name: "::-moz-placeholder",
			browsers: [
				"FF19"
			],
			"description": "Represents placeholder text in an input field"
		},
		{
			name: "::-moz-progress-bar",
			browsers: [
				"FF9"
			],
			"description": "Represents the bar portion of a progress bar."
		},
		{
			name: "::-moz-selection",
			browsers: [
				"FF1"
			],
			"description": "Represents the portion of a document that has been highlighted by the user."
		},
		{
			name: "::-ms-backdrop",
			browsers: [
				"IE11"
			],
			"description": "Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen)."
		},
		{
			name: "::-ms-browse",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents the browse button of an input type=file control."
		},
		{
			name: "::-ms-check",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents the check of a checkbox or radio button input control."
		},
		{
			name: "::-ms-clear",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents the clear button of a text input control"
		},
		{
			name: "::-ms-expand",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents the drop-down button of a select control."
		},
		{
			name: "::-ms-fill",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents the bar portion of a progress bar."
		},
		{
			name: "::-ms-fill-lower",
			browsers: [
				"E",
				"IE"
			],
			"description": "Represents the portion of the slider track from its smallest value up to the value currently selected by the thumb. In a left-to-right layout, this is the portion of the slider track to the left of the thumb."
		},
		{
			name: "::-ms-fill-upper",
			browsers: [
				"E",
				"IE"
			],
			"description": "Represents the portion of the slider track from the value currently selected by the thumb up to the slider's largest value. In a left-to-right layout, this is the portion of the slider track to the right of the thumb."
		},
		{
			name: "::-ms-reveal",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents the password reveal button of an input type=password control."
		},
		{
			name: "::-ms-thumb",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents the portion of range input control (also known as a slider control) that the user drags."
		},
		{
			name: "::-ms-ticks-after",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents the tick marks of a slider that begin just after the thumb and continue up to the slider's largest value. In a left-to-right layout, these are the ticks to the right of the thumb."
		},
		{
			name: "::-ms-ticks-before",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents the tick marks of a slider that represent its smallest values up to the value currently selected by the thumb. In a left-to-right layout, these are the ticks to the left of the thumb."
		},
		{
			name: "::-ms-tooltip",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents the tooltip of a slider (input type=range)."
		},
		{
			name: "::-ms-track",
			browsers: [
				"E",
				"IE10"
			],
			"description": "Represents the track of a slider."
		},
		{
			name: "::-ms-value",
			browsers: [
				"E16",
				"IE10"
			],
			"description": "Represents the content of a text or password input control, or a select control."
		},
		{
			name: "::selection",
			"description": "Represents the portion of a document that has been highlighted by the user."
		},
		{
			name: "::shadow",
			browsers: [
				"C35",
				"O22"
			],
			"description": "Matches the shadow root if an element has a shadow tree."
		},
		{
			name: "::-webkit-file-upload-button",
			browsers: [
				"S",
				"C",
				"O"
			]
		},
		{
			name: "::-webkit-inner-spin-button",
			browsers: [
				"S",
				"C",
				"O"
			]
		},
		{
			name: "::-webkit-input-placeholder",
			browsers: [
				"C",
				"S4"
			]
		},
		{
			name: "::-webkit-keygen-select",
			browsers: [
				"C",
				"O",
				"S6"
			]
		},
		{
			name: "::-webkit-meter-bar",
			browsers: [
				"S",
				"C",
				"O"
			]
		},
		{
			name: "::-webkit-meter-even-less-good-value",
			browsers: [
				"S",
				"C",
				"O"
			]
		},
		{
			name: "::-webkit-meter-optimum-value",
			browsers: [
				"S",
				"C",
				"O"
			]
		},
		{
			name: "::-webkit-meter-suboptimal-value",
			browsers: [
				"E13",
				"C",
				"O15",
				"S6"
			]
		},
		{
			name: "::-webkit-outer-spin-button",
			browsers: [
				"S",
				"C",
				"O"
			]
		},
		{
			name: "::-webkit-progress-bar",
			browsers: [
				"S",
				"C",
				"O"
			]
		},
		{
			name: "::-webkit-progress-inner-element",
			browsers: [
				"S",
				"C",
				"O"
			]
		},
		{
			name: "::-webkit-progress-value",
			browsers: [
				"S",
				"C",
				"O"
			]
		},
		{
			name: "::-webkit-resizer",
			browsers: [
				"S",
				"C",
				"O15"
			]
		},
		{
			name: "::-webkit-scrollbar",
			browsers: [
				"S",
				"C",
				"O15"
			]
		},
		{
			name: "::-webkit-scrollbar-button",
			browsers: [
				"S",
				"C",
				"O15"
			]
		},
		{
			name: "::-webkit-scrollbar-corner",
			browsers: [
				"S",
				"C",
				"O15"
			]
		},
		{
			name: "::-webkit-scrollbar-thumb",
			browsers: [
				"S",
				"C",
				"O15"
			]
		},
		{
			name: "::-webkit-scrollbar-track",
			browsers: [
				"S",
				"C",
				"O15"
			]
		},
		{
			name: "::-webkit-scrollbar-track-piece",
			browsers: [
				"S",
				"C",
				"O15"
			]
		},
		{
			name: "::-webkit-search-cancel-button",
			browsers: [
				"S",
				"C"
			]
		},
		{
			name: "::-webkit-search-decoration",
			browsers: [
				"C",
				"S4"
			]
		},
		{
			name: "::-webkit-search-results-button",
			browsers: [
				"S",
				"C"
			]
		},
		{
			name: "::-webkit-search-results-decoration",
			browsers: [
				"C",
				"S4"
			]
		},
		{
			name: "::-webkit-slider-runnable-track",
			browsers: [
				"C",
				"O",
				"S6"
			]
		},
		{
			name: "::-webkit-slider-thumb",
			browsers: [
				"C",
				"O",
				"S6"
			]
		},
		{
			name: "::-webkit-textfield-decoration-container",
			browsers: [
				"C",
				"O",
				"S6"
			]
		},
		{
			name: "::-webkit-validation-bubble",
			browsers: [
				"C",
				"O",
				"S6"
			]
		},
		{
			name: "::-webkit-validation-bubble-arrow",
			browsers: [
				"C",
				"O",
				"S6"
			]
		},
		{
			name: "::-webkit-validation-bubble-arrow-clipper",
			browsers: [
				"C",
				"O",
				"S6"
			]
		},
		{
			name: "::-webkit-validation-bubble-heading",
			browsers: [
				"C",
				"O",
				"S6"
			]
		},
		{
			name: "::-webkit-validation-bubble-message",
			browsers: [
				"C",
				"O",
				"S6"
			]
		},
		{
			name: "::-webkit-validation-bubble-text-block",
			browsers: [
				"C",
				"O",
				"S6"
			]
		},
		{
			name: "::-moz-range-progress",
			"status": "nonstandard",
			browsers: [
				"FF22"
			],
			"description": "The ::-moz-range-progress CSS pseudo-element is a Mozilla extension that represents the lower portion of the track (i.e., groove) in which the indicator slides in an <input> of type=\"range\". This portion corresponds to values lower than the value currently selected by the thumb (i.e., virtual knob)."
		},
		{
			name: "::-moz-range-thumb",
			"status": "nonstandard",
			browsers: [
				"FF21"
			],
			"description": "The ::-moz-range-thumb CSS pseudo-element is a Mozilla extension that represents the thumb (i.e., virtual knob) of an <input> of type=\"range\". The user can move the thumb along the input's track to alter its numerical value."
		},
		{
			name: "::-moz-range-track",
			"status": "nonstandard",
			browsers: [
				"FF21"
			],
			"description": "The ::-moz-range-track CSS pseudo-element is a Mozilla extension that represents the track (i.e., groove) in which the indicator slides in an <input> of type=\"range\"."
		},
		{
			name: "::-webkit-progress-inner-value",
			"status": "nonstandard",
			"description": "The ::-webkit-progress-value CSS pseudo-element represents the filled-in portion of the bar of a <progress> element. It is a child of the ::-webkit-progress-bar pseudo-element.\n\nIn order to let ::-webkit-progress-value take effect, -webkit-appearance needs to be set to none on the <progress> element."
		},
		{
			name: "::grammar-error",
			"status": "experimental",
			"description": "The ::grammar-error CSS pseudo-element represents a text segment which the user agent has flagged as grammatically incorrect."
		},
		{
			name: "::placeholder",
			browsers: [
				"E",
				"FF51",
				"S10.1",
				"C57",
				"O44"
			],
			"description": "The ::placeholder CSS pseudo-element represents the placeholder text of a form element."
		},
		{
			name: "::slotted",
			browsers: [
				"FF63",
				"S",
				"C50",
				"O37"
			],
			"description": "The :slotted() CSS pseudo-element represents any element that has been placed into a slot inside an HTML template."
		},
		{
			name: "::spelling-error",
			"status": "experimental",
			"description": "The ::spelling-error CSS pseudo-element represents a text segment which the user agent has flagged as incorrectly spelled."
		}
	]
};
export const descriptions : any = {
	"100": "Thin",
	"200": "Extra Light (Ultra Light)",
	"300": "Light",
	"400": "Normal",
	"500": "Medium",
	"600": "Semi Bold (Demi Bold)",
	"700": "Bold",
	"800": "Extra Bold (Ultra Bold)",
	"900": "Black (Heavy)",
	"self-end": "The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.",
	"self-start": "The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis..",
	"alternate": "The animation cycle iterations that are odd counts are played in the normal direction, and the animation cycle iterations that are even counts are played in a reverse direction.",
	"alternate-reverse": "The animation cycle iterations that are odd counts are played in the reverse direction, and the animation cycle iterations that are even counts are played in a normal direction.",
	"backwards": "The beginning property value (as defined in the first @keyframes at-rule) is applied before the animation is displayed, during the period defined by 'animation-delay'.",
	"forwards": "The final property value (as defined in the last @keyframes at-rule) is maintained after the animation completes.",
	"paused": "A running animation will be paused.",
	"running": "Resume playback of a paused animation.",
	"multiply": "The source color is multiplied by the destination color and replaces the destination.",
	"screen": "Multiplies the complements of the backdrop and source color values, then complements the result.",
	"overlay": "Multiplies or screens the colors, depending on the backdrop color value.",
	"darken": "Selects the darker of the backdrop and source colors.",
	"lighten": "Selects the lighter of the backdrop and source colors.",
	"color-dodge": "Brightens the backdrop color to reflect the source color.",
	"color-burn": "Darkens the backdrop color to reflect the source color.",
	"hard-light": "Multiplies or screens the colors, depending on the source color value.",
	"soft-light": "Darkens or lightens the colors, depending on the source color value.",
	"difference": "Subtracts the darker of the two constituent colors from the lighter color..",
	"exclusion": "Produces an effect similar to that of the Difference mode but lower in contrast.",
	"hue": "Creates a color with the hue of the source color and the saturation and luminosity of the backdrop color.",
	"saturation": "Creates a color with the saturation of the source color and the hue and luminosity of the backdrop color.",
	"color": "Creates a color with the hue and saturation of the source color and the luminosity of the backdrop color.",
	"luminosity": "Creates a color with the luminosity of the source color and the hue and saturation of the backdrop color.",
	"repeat": "The image is tiled (repeated) to fill the area.",
	"clone": "Each box is independently wrapped with the border and padding.",
	"slice": "The effect is as though the element were rendered with no breaks present, and then sliced by the breaks afterward.",
	"inset": "Changes the drop shadow from an outer shadow (one that shadows the box onto the canvas, as if it were lifted above the canvas) to an inner shadow (one that shadows the canvas onto the box, as if the box were cut out of the canvas and shifted behind it).",
	"border-box": "The specified width and height (and respective min/max properties) on this element determine the border box of the element.",
	"content-box": "Behavior of width and height as specified by CSS2.1. The specified width and height (and respective min/max properties) apply to the width and height respectively of the content box of the element.",
	"rect()": "Specifies offsets from the edges of the border box.",
	"evenodd": "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and counting the number of path segments from the given shape that the ray crosses.",
	"nonzero": "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and then examining the places where a segment of the shape crosses the ray.",
	"linearRGB": "Color operations should occur in the linearized RGB color space.",
	"sRGB": "Color operations should occur in the sRGB color space.",
	"balance": "Balance content equally between columns, if possible.",
	"size": "For properties that can have effects on more than just an element and its descendants, those effects don't escape the containing element.",
	"layout": "Turns on layout containment for the element.",
	"paint": "Turns on paint containment for the element.",
	"attr()": "The attr(n) function returns as a string the value of attribute n for the subject of the selector.",
	"counter(name)": "Counters are denoted by identifiers (see the 'counter-increment' and 'counter-reset' properties).",
	"alias": "Indicates an alias of/shortcut to something is to be created. Often rendered as an arrow with a small curved arrow next to it.",
	"all-scroll": "Indicates that the something can be scrolled in any direction. Often rendered as arrows pointing up, down, left, and right with a dot in the middle.",
	"cell": "Indicates that a cell or set of cells may be selected. Often rendered as a thick plus-sign with a dot in the middle.",
	"col-resize": "Indicates that the item/column can be resized horizontally. Often rendered as arrows pointing left and right with a vertical bar separating them.",
	"context-menu": "A context menu is available for the object under the cursor. Often rendered as an arrow with a small menu-like graphic next to it.",
	"copy": "Indicates something is to be copied. Often rendered as an arrow with a small plus sign next to it.",
	"crosshair": "A simple crosshair (e.g., short line segments resembling a '+' sign). Often used to indicate a two dimensional bitmap selection mode.",
	"e-resize": "Indicates that east edge is to be moved.",
	"ew-resize": "Indicates a bidirectional east-west resize cursor.",
	"grab": "Indicates that something can be grabbed.",
	"grabbing": "Indicates that something is being grabbed.",
	"help": "Help is available for the object under the cursor. Often rendered as a question mark or a balloon.",
	"move": "Indicates something is to be moved.",
	"-moz-grab": "Indicates that something can be grabbed.",
	"-moz-grabbing": "Indicates that something is being grabbed.",
	"-moz-zoom-in": "Indicates that something can be zoomed (magnified) in.",
	"-moz-zoom-out": "Indicates that something can be zoomed (magnified) out.",
	"ne-resize": "Indicates that movement starts from north-east corner.",
	"nesw-resize": "Indicates a bidirectional north-east/south-west cursor.",
	"no-drop": "Indicates that the dragged item cannot be dropped at the current cursor location. Often rendered as a hand or pointer with a small circle with a line through it.",
	"not-allowed": "Indicates that the requested action will not be carried out. Often rendered as a circle with a line through it.",
	"n-resize": "Indicates that north edge is to be moved.",
	"ns-resize": "Indicates a bidirectional north-south cursor.",
	"nw-resize": "Indicates that movement starts from north-west corner.",
	"nwse-resize": "Indicates a bidirectional north-west/south-east cursor.",
	"pointer": "The cursor is a pointer that indicates a link.",
	"progress": "A progress indicator. The program is performing some processing, but is different from 'wait' in that the user may still interact with the program. Often rendered as a spinning beach ball, or an arrow with a watch or hourglass.",
	"row-resize": "Indicates that the item/row can be resized vertically. Often rendered as arrows pointing up and down with a horizontal bar separating them.",
	"se-resize": "Indicates that movement starts from south-east corner.",
	"s-resize": "Indicates that south edge is to be moved.",
	"sw-resize": "Indicates that movement starts from south-west corner.",
	"vertical-text": "Indicates vertical-text that may be selected. Often rendered as a horizontal I-beam.",
	"wait": "Indicates that the program is busy and the user should wait. Often rendered as a watch or hourglass.",
	"-webkit-grab": "Indicates that something can be grabbed.",
	"-webkit-grabbing": "Indicates that something is being grabbed.",
	"-webkit-zoom-in": "Indicates that something can be zoomed (magnified) in.",
	"-webkit-zoom-out": "Indicates that something can be zoomed (magnified) out.",
	"w-resize": "Indicates that west edge is to be moved.",
	"zoom-in": "Indicates that something can be zoomed (magnified) in.",
	"zoom-out": "Indicates that something can be zoomed (magnified) out.",
	"ltr": "Left-to-right direction.",
	"rtl": "Right-to-left direction.",
	"block": "The element generates a block-level box",
	"flex": "The element generates a principal flex container box and establishes a flex formatting context.",
	"flexbox": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
	"flow-root": "The element generates a block container box, and lays out its contents using flow layout.",
	"grid": "The element generates a principal grid container box, and establishes a grid formatting context.",
	"inline-block": "A block box, which itself is flowed as a single inline box, similar to a replaced element. The inside of an inline-block is formatted as a block box, and the box itself is formatted as an inline box.",
	"inline-flex": "Inline-level flex container.",
	"inline-flexbox": "Inline-level flex container. Standardized as 'inline-flex'",
	"inline-table": "Inline-level table wrapper box containing table box.",
	"list-item": "One or more block boxes and one marker box.",
	"-moz-box": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
	"-moz-inline-box": "Inline-level flex container. Standardized as 'inline-flex'",
	"-ms-flexbox": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
	"-ms-grid": "The element generates a principal grid container box, and establishes a grid formatting context.",
	"-ms-inline-flexbox": "Inline-level flex container. Standardized as 'inline-flex'",
	"-ms-inline-grid": "Inline-level grid container.",
	"run-in": "The element generates a run-in box. Run-in elements act like inlines or blocks, depending on the surrounding elements.",
	"table": "The element generates a principal table wrapper box containing an additionally-generated table box, and establishes a table formatting context.",
	"-webkit-box": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
	"-webkit-flex": "The element lays out its contents using flow layout (block-and-inline layout).",
	"-webkit-inline-box": "Inline-level flex container. Standardized as 'inline-flex'",
	"-webkit-inline-flex": "Inline-level flex container.",
	"hide": "No borders or backgrounds are drawn around/behind empty cells.",
	"show": "Borders and backgrounds are drawn around/behind empty cells (like normal cells).",
	"accumulate": "If the ancestor container element has a property of new, then all graphics elements within the current container are rendered both on the parent's background image and onto the target.",
	"new": "Create a new background image canvas. All children of the current container element can access the background, and they will be rendered onto both the parent's background image canvas in addition to the target device.",
	"blur()": "Applies a Gaussian blur to the input image.",
	"brightness()": "Applies a linear multiplier to input image, making it appear more or less bright.",
	"contrast()": "Adjusts the contrast of the input.",
	"drop-shadow()": "Applies a drop shadow effect to the input image.",
	"grayscale()": "Converts the input image to grayscale.",
	"hue-rotate()": "Applies a hue rotation on the input image. ",
	"invert()": "Inverts the samples in the input image.",
	"opacity()": "Applies transparency to the samples in the input image.",
	"saturate()": "Saturates the input image.",
	"sepia()": "Converts the input image to sepia.",
	"column-reverse": "Same as 'column', except the main-start and main-end directions are swapped.",
	"row-reverse": "Same as 'row', except the main-start and main-end directions are swapped.",
	"wrap-reverse": "Same as 'wrap', except the cross-start and cross-end directions are swapped.",
	"inline-end": "A keyword indicating that the element must float on the end side of its containing block. That is the right side with ltr scripts, and the left side with rtl scripts.",
	"inline-start": "A keyword indicating that the element must float on the start side of its containing block. That is the left side with ltr scripts, and the right side with rtl scripts.",
	"bold": "Same as 700",
	"bolder": "Specifies the weight of the face bolder than the inherited value.",
	"caption": "The font used for captioned controls (e.g., buttons, drop-downs, etc.).",
	"lighter": "Specifies the weight of the face lighter than the inherited value.",
	"menu": "The font used in menus (e.g., dropdown menus and menu lists).",
	"message-box": "The font used in dialog boxes.",
	"small-caption": "The font used for labeling small controls.",
	"status-bar": "The font used in window status bars.",
	"\"aalt\"": "Access All Alternates.",
	"\"abvf\"": "Above-base Forms. Required in Khmer script.",
	"\"abvm\"": "Above-base Mark Positioning. Required in Indic scripts.",
	"\"abvs\"": "Above-base Substitutions. Required in Indic scripts.",
	"\"afrc\"": "Alternative Fractions.",
	"\"akhn\"": "Akhand. Required in most Indic scripts.",
	"\"blwf\"": "Below-base Form. Required in a number of Indic scripts.",
	"\"blwm\"": "Below-base Mark Positioning. Required in Indic scripts.",
	"\"blws\"": "Below-base Substitutions. Required in Indic scripts.",
	"\"calt\"": "Contextual Alternates.",
	"\"case\"": "Case-Sensitive Forms. Applies only to European scripts; particularly prominent in Spanish-language setting.",
	"\"ccmp\"": "Glyph Composition/Decomposition.",
	"\"cfar\"": "Conjunct Form After Ro. Required in Khmer scripts.",
	"\"cjct\"": "Conjunct Forms. Required in Indic scripts that show similarity to Devanagari.",
	"\"clig\"": "Contextual Ligatures.",
	"\"cpct\"": "Centered CJK Punctuation. Used primarily in Chinese fonts.",
	"\"cpsp\"": "Capital Spacing. Should not be used in connecting scripts (e.g. most Arabic).",
	"\"cswh\"": "Contextual Swash.",
	"\"curs\"": "Cursive Positioning. Can be used in any cursive script.",
	"\"c2pc\"": "Petite Capitals From Capitals. Applies only to bicameral scripts.",
	"\"dist\"": "Distances. Required in Indic scripts.",
	"\"dnom\"": "Denominators.",
	"\"dtls\"": "Dotless Forms. Applied to math formula layout.",
	"\"expt\"": "Expert Forms. Applies only to Japanese.",
	"\"falt\"": "Final Glyph on Line Alternates. Can be used in any cursive script.",
	"\"fin2\"": "Terminal Form #2. Used only with the Syriac script.",
	"\"fin3\"": "Terminal Form #3. Used only with the Syriac script.",
	"\"fina\"": "Terminal Forms. Can be used in any alphabetic script.",
	"\"flac\"": "Flattened ascent forms. Applied to math formula layout.",
	"\"frac\"": "Fractions.",
	"\"fwid\"": "Full Widths. Applies to any script which can use monospaced forms.",
	"\"half\"": "Half Forms. Required in Indic scripts that show similarity to Devanagari.",
	"\"haln\"": "Halant Forms. Required in Indic scripts.",
	"\"halt\"": "Alternate Half Widths. Used only in CJKV fonts.",
	"\"hist\"": "Historical Forms.",
	"\"hkna\"": "Horizontal Kana Alternates. Applies only to fonts that support kana (hiragana and katakana).",
	"\"hlig\"": "Historical Ligatures.",
	"\"hngl\"": "Hangul. Korean only.",
	"\"hojo\"": "Hojo Kanji Forms (JIS X 0212-1990 Kanji Forms). Used only with Kanji script.",
	"\"hwid\"": "Half Widths. Generally used only in CJKV fonts.",
	"\"init\"": "Initial Forms. Can be used in any alphabetic script.",
	"\"isol\"": "Isolated Forms. Can be used in any cursive script.",
	"\"ital\"": "Italics. Applies mostly to Latin; note that many non-Latin fonts contain Latin as well.",
	"\"jalt\"": "Justification Alternates. Can be used in any cursive script.",
	"\"jp78\"": "JIS78 Forms. Applies only to Japanese.",
	"\"jp83\"": "JIS83 Forms. Applies only to Japanese.",
	"\"jp90\"": "JIS90 Forms. Applies only to Japanese.",
	"\"jp04\"": "JIS2004 Forms. Applies only to Japanese.",
	"\"lfbd\"": "Left Bounds.",
	"\"ljmo\"": "Leading Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
	"\"locl\"": "Localized Forms.",
	"\"ltra\"": "Left-to-right glyph alternates.",
	"\"ltrm\"": "Left-to-right mirrored forms.",
	"\"mark\"": "Mark Positioning.",
	"\"med2\"": "Medial Form #2. Used only with the Syriac script.",
	"\"medi\"": "Medial Forms.",
	"\"mgrk\"": "Mathematical Greek.",
	"\"mkmk\"": "Mark to Mark Positioning.",
	"\"nalt\"": "Alternate Annotation Forms.",
	"\"nlck\"": "NLC Kanji Forms. Used only with Kanji script.",
	"\"nukt\"": "Nukta Forms. Required in Indic scripts..",
	"\"numr\"": "Numerators.",
	"\"opbd\"": "Optical Bounds.",
	"\"ordn\"": "Ordinals. Applies mostly to Latin script.",
	"\"ornm\"": "Ornaments.",
	"\"palt\"": "Proportional Alternate Widths. Used mostly in CJKV fonts.",
	"\"pcap\"": "Petite Capitals.",
	"\"pkna\"": "Proportional Kana. Generally used only in Japanese fonts.",
	"\"pnum\"": "Proportional Figures.",
	"\"pref\"": "Pre-base Forms. Required in Khmer and Myanmar (Burmese) scripts and southern Indic scripts that may display a pre-base form of Ra.",
	"\"pres\"": "Pre-base Substitutions. Required in Indic scripts.",
	"\"pstf\"": "Post-base Forms. Required in scripts of south and southeast Asia that have post-base forms for consonants eg: Gurmukhi, Malayalam, Khmer.",
	"\"psts\"": "Post-base Substitutions.",
	"\"pwid\"": "Proportional Widths.",
	"\"qwid\"": "Quarter Widths. Generally used only in CJKV fonts.",
	"\"rand\"": "Randomize.",
	"\"rclt\"": "Required Contextual Alternates. May apply to any script, but is especially important for many styles of Arabic.",
	"\"rlig\"": "Required Ligatures. Applies to Arabic and Syriac. May apply to some other scripts.",
	"\"rkrf\"": "Rakar Forms. Required in Devanagari and Gujarati scripts.",
	"\"rphf\"": "Reph Form. Required in Indic scripts. E.g. Devanagari, Kannada.",
	"\"rtbd\"": "Right Bounds.",
	"\"rtla\"": "Right-to-left alternates.",
	"\"rtlm\"": "Right-to-left mirrored forms.",
	"\"ruby\"": "Ruby Notation Forms. Applies only to Japanese.",
	"\"salt\"": "Stylistic Alternates.",
	"\"sinf\"": "Scientific Inferiors.",
	"\"size\"": "Optical size.",
	"\"smpl\"": "Simplified Forms. Applies only to Chinese and Japanese.",
	"\"ssty\"": "Math script style alternates.",
	"\"stch\"": "Stretching Glyph Decomposition.",
	"\"subs\"": "Subscript.",
	"\"sups\"": "Superscript.",
	"\"titl\"": "Titling.",
	"\"tjmo\"": "Trailing Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
	"\"tnam\"": "Traditional Name Forms. Applies only to Japanese.",
	"\"trad\"": "Traditional Forms. Applies only to Chinese and Japanese.",
	"\"twid\"": "Third Widths. Generally used only in CJKV fonts.",
	"\"unic\"": "Unicase.",
	"\"valt\"": "Alternate Vertical Metrics. Applies only to scripts with vertical writing modes.",
	"\"vatu\"": "Vattu Variants. Used for Indic scripts. E.g. Devanagari.",
	"\"vert\"": "Vertical Alternates. Applies only to scripts with vertical writing modes.",
	"\"vhal\"": "Alternate Vertical Half Metrics. Used only in CJKV fonts.",
	"\"vjmo\"": "Vowel Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
	"\"vkna\"": "Vertical Kana Alternates. Applies only to fonts that support kana (hiragana and katakana).",
	"\"vkrn\"": "Vertical Kerning.",
	"\"vpal\"": "Proportional Alternate Vertical Metrics. Used mostly in CJKV fonts.",
	"\"vrt2\"": "Vertical Alternates and Rotation. Applies only to scripts with vertical writing modes.",
	"\"zero\"": "Slashed Zero.",
	"narrower": "Indicates a narrower value relative to the width of the parent element.",
	"wider": "Indicates a wider value relative to the width of the parent element.",
	"weight": "Allow synthetic bold faces.",
	"annotation()": "Enables display of alternate annotation forms.",
	"character-variant()": "Enables display of specific character variants.",
	"historical-forms": "Enables display of historical forms.",
	"ornaments()": "Enables replacement of default glyphs with ornaments, if provided in the font.",
	"styleset()": "Enables display with stylistic sets.",
	"stylistic()": "Enables display of stylistic alternates.",
	"swash()": "Enables display of swash glyphs.",
	"all-petite-caps": "Enables display of petite capitals for both upper and lowercase letters.",
	"all-small-caps": "Enables display of small capitals for both upper and lowercase letters.",
	"petite-caps": "Enables display of petite capitals.",
	"titling-caps": "Enables display of titling capitals.",
	"unicase": "Enables display of mixture of small capitals for uppercase letters with normal lowercase letters.",
	"full-width": "Enables rendering of full-width variants.",
	"jis04": "Enables rendering of JIS04 forms.",
	"jis78": "Enables rendering of JIS78 forms.",
	"jis83": "Enables rendering of JIS83 forms.",
	"jis90": "Enables rendering of JIS90 forms.",
	"proportional-width": "Enables rendering of proportionally-spaced variants.",
	"simplified": "Enables rendering of simplified forms.",
	"traditional": "Enables rendering of traditional forms.",
	"additional-ligatures": "Enables display of additional ligatures.",
	"common-ligatures": "Enables display of common ligatures.",
	"contextual": "Enables display of contextual alternates.",
	"discretionary-ligatures": "Enables display of discretionary ligatures.",
	"historical-ligatures": "Enables display of historical ligatures.",
	"no-additional-ligatures": "Disables display of additional ligatures.",
	"no-common-ligatures": "Disables display of common ligatures.",
	"no-contextual": "Disables display of contextual alternates.",
	"no-discretionary-ligatures": "Disables display of discretionary ligatures.",
	"no-historical-ligatures": "Disables display of historical ligatures.",
	"diagonal-fractions": "Enables display of lining diagonal fractions.",
	"lining-nums": "Enables display of lining numerals.",
	"oldstyle-nums": "Enables display of old-style numerals.",
	"ordinal": "Enables display of letter forms used with ordinal numbers.",
	"proportional-nums": "Enables display of proportional numerals.",
	"slashed-zero": "Enables display of slashed zeros.",
	"stacked-fractions": "Enables display of lining stacked fractions.",
	"tabular-nums": "Enables display of tabular numerals.",
	"span": "Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is N lines from its opposite edge.",
	"minmax()": "Defines a size range greater than or equal to min and less than or equal to max.",
	"dense": "If specified, the auto-placement algorithm uses a “dense” packing algorithm, which attempts to fill in holes earlier in the grid if smaller items come up later.",
	"fit-content": "Use the fit-content inline size or fit-content block size, as appropriate to the writing mode.",
	"manual": "Words are only broken at line breaks where there are characters inside the word that suggest line break opportunities",
	"flip": "After rotating by the precededing angle, the image is flipped horizontally. Defaults to 0deg if the angle is ommitted.",
	"from-image": "If the image has an orientation specified in its metadata, such as EXIF, this value computes to the angle that the metadata specifies is necessary to correctly orient the image.",
	"crisp-edges": "The image must be scaled with an algorithm that preserves contrast and edges in the image, and which does not smooth colors or introduce blur to the image in the process.",
	"optimizeQuality": "Deprecated.",
	"pixelated": "When scaling the image up, the 'nearest neighbor' or similar algorithm must be used, so that the image appears to be simply composed of very large pixels.",
	"active": "The input method editor is initially active; text entry is performed using it unless the user specifically dismisses it.",
	"disabled": "The input method editor is disabled and may not be activated by the user.",
	"inactive": "The input method editor is initially inactive, but the user may activate it if they wish.",
	"safe": "If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were start.",
	"unsafe": "Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.",
	"space-evenly": "The items are evenly distributed within the alignment container along the main axis.",
	"circle": "A hollow circle.",
	"disc": "A filled circle.",
	"inside": "The marker box is outside the principal block box, as described in the section on the ::marker pseudo-element below.",
	"outside": "The ::marker pseudo-element is an inline element placed immediately before all ::before pseudo-elements in the principal block box, after which the element's content flows.",
	"symbols()": "Allows a counter style to be defined inline.",
	"path()": "Defines an SVG path as a string, with optional 'fill-rule' as the first argument.",
	"block-axis": "Elements are oriented along the box's axis.",
	"inline-axis": "Elements are oriented vertically.",
	"padding-box": "The specified width and height (and respective min/max properties) on this element determine the padding box of the element.",
	"line-through": "Each line of text has a line through the middle.",
	"overline": "Each line of text has a line above it.",
	"underline": "Each line of text is underlined.",
	"dashed": "Produces a dashed line style.",
	"dotted": "Produces a dotted line.",
	"double": "Produces a double line.",
	"solid": "Produces a solid line.",
	"wavy": "Produces a wavy line.",
	"matrix()": "Specifies a 2D transformation in the form of a transformation matrix of six values. matrix(a,b,c,d,e,f) is equivalent to applying the transformation matrix [a b c d e f]",
	"matrix3d()": "Specifies a 3D transformation as a 4x4 homogeneous matrix of 16 values in column-major order.",
	"perspective": "Specifies a perspective projection matrix.",
	"rotate()": "Specifies a 2D rotation by the angle specified in the parameter about the origin of the element, as defined by the transform-origin property.",
	"rotate3d()": "Specifies a clockwise 3D rotation by the angle specified in last parameter about the [x,y,z] direction vector described by the first 3 parameters.",
	"rotateX('angle')": "Specifies a clockwise rotation by the given angle about the X axis.",
	"rotateY('angle')": "Specifies a clockwise rotation by the given angle about the Y axis.",
	"rotateZ('angle')": "Specifies a clockwise rotation by the given angle about the Z axis.",
	"scale()": "Specifies a 2D scale operation by the [sx,sy] scaling vector described by the 2 parameters. If the second parameter is not provided, it is takes a value equal to the first.",
	"scale3d()": "Specifies a 3D scale operation by the [sx,sy,sz] scaling vector described by the 3 parameters.",
	"scaleX()": "Specifies a scale operation using the [sx,1] scaling vector, where sx is given as the parameter.",
	"scaleY()": "Specifies a scale operation using the [sy,1] scaling vector, where sy is given as the parameter.",
	"scaleZ()": "Specifies a scale operation using the [1,1,sz] scaling vector, where sz is given as the parameter.",
	"skew()": "Specifies a skew transformation along the X and Y axes. The first angle parameter specifies the skew on the X axis. The second angle parameter specifies the skew on the Y axis. If the second parameter is not given then a value of 0 is used for the Y angle (ie: no skew on the Y axis).",
	"skewX()": "Specifies a skew transformation along the X axis by the given angle.",
	"skewY()": "Specifies a skew transformation along the Y axis by the given angle.",
	"translate()": "Specifies a 2D translation by the vector [tx, ty], where tx is the first translation-value parameter and ty is the optional second translation-value parameter.",
	"translate3d()": "Specifies a 3D translation by the vector [tx,ty,tz], with tx, ty and tz being the first, second and third translation-value parameters respectively.",
	"translateX()": "Specifies a translation by the given amount in the X direction.",
	"translateY()": "Specifies a translation by the given amount in the Y direction.",
	"translateZ()": "Specifies a translation by the given amount in the Z direction. Note that percentage values are not allowed in the translateZ translation-value, and if present are evaluated as 0.",
	"false": "The element does not contain an accelerator key sequence.",
	"true": "The element contains an accelerator key sequence.",
	"bt": "Bottom-to-top block flow. Layout is horizontal.",
	"lr": "Left-to-right direction. The flow orientation is vertical.",
	"rl": "Right-to-left direction. The flow orientation is vertical.",
	"tb": "Top-to-bottom direction. The flow orientation is horizontal.",
	"zoom": "The element is zoomable.",
	"no-limit": "There is no limit.",
	"mode": "Any of the range of mode values available to the -ms-layout-grid-mode property.",
	"type": "Any of the range of type values available to the -ms-layout-grid-type property.",
	"-ms-autohiding-scrollbar": "Indicates the element displays auto-hiding scrollbars during mouse interactions and panning indicators during touch and keyboard interactions.",
	"scrollbar": "Scrollbars are typically narrow strips inserted on one or two edges of an element and which often have arrows to click on and a \"thumb\" to drag up and down (or left and right) to move the contents of the element.",
	"ideograph-alpha": "Creates 1/4em extra spacing between runs of ideographic letters and non-ideographic letters, such as Latin-based, Cyrillic, Greek, Arabic or Hebrew.",
	"ideograph-numeric": "Creates 1/4em extra spacing between runs of ideographic letters and numeric glyphs.",
	"ideograph-parenthesis": "Creates extra spacing between normal (non wide) parenthesis and ideographs.",
	"ideograph-space": "Extends the width of the space character while surrounded by ideographs.",
	"punctuation": "Creates extra non-breaking spacing around punctuation as required by language-specific typographic conventions.",
	"digits": "Attempt to typeset horizontally each maximal sequence of consecutive ASCII digits (U+0030–U+0039) that has as many or fewer characters than the specified integer such that it takes up the space of a single character within the vertical line box.",
	"inter-cluster": "Justification primarily changes spacing at word separators and at grapheme cluster boundaries in clustered scripts. This value is typically used for Southeast Asian scripts such as Thai.",
	"inter-ideograph": "Justification primarily changes spacing at word separators and at inter-graphemic boundaries in scripts that use no word spaces. This value is typically used for CJK languages.",
	"inter-word": "Justification primarily changes spacing at word separators. This value is typically used for languages that separate words using spaces, like English or (sometimes) Korean.",
	"kashida": "Justification primarily stretches Arabic and related scripts through the use of kashida or other calligraphic elongation.",
	"clip": "Clip inline content that overflows. Characters may be only partially rendered.",
	"ellipsis": "Render an ellipsis character (U+2026) to represent clipped inline content.",
	"over": "The underline is aligned with the 'top' (right in vertical writing) edge of the element's em-box. In this mode, an overline also switches sides.",
	"under": "The underline is aligned with the 'bottom' (left in vertical writing) edge of the element's em-box. In this case the underline usually does not cross the descenders. This is sometimes called 'accounting' underline.",
	"grippers": "Grippers are always on.",
	"break-all": "Lines may break between any two grapheme clusters for non-CJK scripts.",
	"clear": "Inline flow content can only wrap on top and bottom of the exclusion and must leave the areas to the start and end edges of the exclusion box empty.",
	"maximum": "Inline flow content can wrap on the side of the exclusion with the largest available space for the given line, and must leave the other side of the exclusion empty.",
	"minimum": "Inline flow content can flow around the edge of the exclusion with the smallest available space within the flow content’s containing block, and must leave the other edge of the exclusion empty.",
	"current": "Indicates that the user agent should target the frame that the element is in.",
	"root": "Indicates that the user agent should target the full window.",
	"scale-down": "Size the content as if ‘none’ or ‘contain’ were specified, whichever would result in a smaller concrete object size.",
	"invert": "Performs a color inversion on the pixels on the screen.",
	"-moz-hidden-unscrollable": "Same as the standardized 'clip', except doesn’t establish a block formatting context.",
	"painted": "The given element can be the target element for pointer events when the pointer is over a \"painted\" area. ",
	"visibleFill": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over the interior of the element.",
	"visiblePainted": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over a ‘painted’ area.",
	"visibleStroke": "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over the perimeter of the element.",
	"absolute": "The box's position (and possibly size) is specified with the 'top', 'right', 'bottom', and 'left' properties. These properties specify offsets with respect to the box's 'containing block'.",
	"-ms-page": "The box's position is calculated according to the 'absolute' model.",
	"relative": "The box's position is calculated according to the normal flow (this is called the position in normal flow). Then the box is offset relative to its normal position.",
	"static": "The box is a normal box, laid out according to the normal flow. The 'top', 'right', 'bottom', and 'left' properties do not apply.",
	"sticky": "The box's position is calculated according to the normal flow. Then the box is offset relative to its flow root and containing block and in all cases, including table elements, does not affect the position of any following boxes.",
	"-webkit-sticky": "The box's position is calculated according to the normal flow. Then the box is offset relative to its flow root and containing block and in all cases, including table elements, does not affect the position of any following boxes.",
	"distribute-letter": "If the width of the ruby text is smaller than that of the base, then the ruby text contents are evenly distributed across the width of the base, with the first and last ruby text glyphs lining up with the corresponding first and last base glyphs. If the width of the ruby text is at least the width of the base, then the letters of the base are evenly distributed across the width of the ruby text.",
	"distribute-space": "If the width of the ruby text is smaller than that of the base, then the ruby text contents are evenly distributed across the width of the base, with a certain amount of white space preceding the first and following the last character in the ruby text. That amount of white space is normally equal to half the amount of inter-character space of the ruby text.",
	"line-edge": "If the ruby text is not adjacent to a line edge, it is aligned as in 'auto'. If it is adjacent to a line edge, then it is still aligned as in auto, but the side of the ruby text that touches the end of the line is lined up with the corresponding edge of the base.",
	"after": "The ruby text appears after the base. This is a relatively rare setting used in ideographic East Asian writing systems, most easily found in educational text.",
	"before": "The ruby text appears before the base. This is the most common setting used in ideographic East Asian writing systems.",
	"attr(x)": "The value of attribute 'x' is a string value. The string value is evaluated as a <number> to determine the number of ruby base elements to be spanned by the annotation element.",
	"smooth": "Scrolls in a smooth fashion using a user-agent-defined timing function and time period.",
	"margin-box": "The background is painted within (clipped to) the margin box.",
	"crispEdges": "Emphasize the contrast between clean edges of artwork over rendering speed and geometric precision.",
	"format()": "Optional hint describing the format of the font resource.",
	"local()": "Format-specific string that identifies a locally available copy of a given font.",
	"butt": "Indicates that the stroke for each subpath does not extend beyond its two endpoints.",
	"bevel": "Indicates that a bevelled corner is to be used to join path segments.",
	"miter": "Indicates that a sharp corner is to be used to join path segments.",
	"additive": "Represents “sign-value” numbering systems, which, rather than using reusing digits in different positions to change their value, define additional digits with much larger values, so that the value of the number can be obtained by adding all the digits together.",
	"cyclic": "Cycles repeatedly through its provided symbols, looping back to the beginning when it reaches the end of the list.",
	"extends": "Use the algorithm of another counter style, but alter other aspects.",
	"numeric": "interprets the list of counter symbols as digits to a \"place-value\" numbering system, similar to the default 'decimal' counter style.",
	"symbolic": "Cycles repeatedly through its provided symbols, doubling, tripling, etc. the symbols on each successive pass through the list.",
	"sideways": "This value is equivalent to 'sideways-right' in 'vertical-rl' writing mode and equivalent to 'sideways-left' in 'vertical-lr' writing mode.",
	"sideways-right": "In vertical writing modes, this causes text to be set as if in a horizontal layout, but rotated 90° clockwise.",
	"upright": "In vertical writing modes, characters from horizontal-only scripts are rendered upright, i.e. in their standard horizontal orientation.",
	"optimizeLegibility": "Indicates that the user agent shall emphasize legibility over rendering speed and geometric precision.",
	"capitalize": "Puts the first typographic letter unit of each word in titlecase.",
	"lowercase": "Puts all letters in lowercase.",
	"uppercase": "Puts all letters in uppercase.",
	"perspective()": "Specifies a perspective projection matrix.",
	"flat": "All children of this element are rendered flattened into the 2D plane of the element.",
	"preserve-3d": "Flattening is not performed, so children maintain their position in 3D space.",
	"bidi-override": "Inside the element, reordering is strictly in sequence according to the 'direction' property; the implicit part of the bidirectional algorithm is ignored.",
	"embed": "If the element is inline-level, this value opens an additional level of embedding with respect to the bidirectional algorithm. The direction of this embedding level is given by the 'direction' property.",
	"isolate-override": "This combines the isolation behavior of 'isolate' with the directional override behavior of 'bidi-override'",
	"plaintext": "For the purposes of the Unicode bidirectional algorithm, the base directionality of each bidi paragraph for which the element forms the containing block is determined not by the element's computed 'direction'.",
	"U+26": "Ampersand.",
	"U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F": "WGL4 character set (Pan-European).",
	"U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF": "The Multilingual European Subset No. 1. Latin. Covers ~44 languages.",
	"U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD": "The Multilingual European Subset No. 2. Latin, Greek, and Cyrillic. Covers ~128 language.",
	"U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD": "The Multilingual European Subset No. 3. Covers all characters belonging to European scripts.",
	"U+00-7F": "Basic Latin (ASCII).",
	"U+80-FF": "Latin-1 Supplement. Accented characters for Western European languages, common punctuation characters, multiplication and division signs.",
	"U+100-17F": "Latin Extended-A. Accented characters for for Czech, Dutch, Polish, and Turkish.",
	"U+180-24F": "Latin Extended-B. Croatian, Slovenian, Romanian, Non-European and historic latin, Khoisan, Pinyin, Livonian, Sinology.",
	"U+1E00-1EFF": "Latin Extended Additional. Vietnamese, German captial sharp s, Medievalist, Latin general use.",
	"U+250-2AF": "International Phonetic Alphabet Extensions.",
	"U+370-3FF": "Greek and Coptic.",
	"U+1F00-1FFF": "Greek Extended. Accented characters for polytonic Greek.",
	"U+400-4FF": "Cyrillic.",
	"U+500-52F": "Cyrillic Supplement. Extra letters for Komi, Khanty, Chukchi, Mordvin, Kurdish, Aleut, Chuvash, Abkhaz, Azerbaijani, and Orok.",
	"U+00-52F, U+1E00-1FFF, U+2200–22FF": "Latin, Greek, Cyrillic, some punctuation and symbols.",
	"U+530–58F": "Armenian.",
	"U+590–5FF": "Hebrew.",
	"U+600–6FF": "Arabic.",
	"U+750–77F": "Arabic Supplement. Additional letters for African languages, Khowar, Torwali, Burushaski, and early Persian.",
	"U+8A0–8FF": "Arabic Extended-A. Additional letters for African languages, European and Central Asian languages, Rohingya, Tamazight, Arwi, and Koranic annotation signs.",
	"U+700–74F": "Syriac.",
	"U+900–97F": "Devanagari.",
	"U+980–9FF": "Bengali.",
	"U+A00–A7F": "Gurmukhi.",
	"U+A80–AFF": "Gujarati.",
	"U+B00–B7F": "Oriya.",
	"U+B80–BFF": "Tamil.",
	"U+C00–C7F": "Telugu.",
	"U+C80–CFF": "Kannada.",
	"U+D00–D7F": "Malayalam.",
	"U+D80–DFF": "Sinhala.",
	"U+118A0–118FF": "Warang Citi.",
	"U+E00–E7F": "Thai.",
	"U+1A20–1AAF": "Tai Tham.",
	"U+AA80–AADF": "Tai Viet.",
	"U+E80–EFF": "Lao.",
	"U+F00–FFF": "Tibetan.",
	"U+1000–109F": "Myanmar (Burmese).",
	"U+10A0–10FF": "Georgian.",
	"U+1200–137F": "Ethiopic.",
	"U+1380–139F": "Ethiopic Supplement. Extra Syllables for Sebatbeit, and Tonal marks",
	"U+2D80–2DDF": "Ethiopic Extended. Extra Syllables for Me'en, Blin, and Sebatbeit.",
	"U+AB00–AB2F": "Ethiopic Extended-A. Extra characters for Gamo-Gofa-Dawro, Basketo, and Gumuz.",
	"U+1780–17FF": "Khmer.",
	"U+1800–18AF": "Mongolian.",
	"U+1B80–1BBF": "Sundanese.",
	"U+1CC0–1CCF": "Sundanese Supplement. Punctuation.",
	"U+4E00–9FD5": "CJK (Chinese, Japanese, Korean) Unified Ideographs. Most common ideographs for modern Chinese and Japanese.",
	"U+3400–4DB5": "CJK Unified Ideographs Extension A. Rare ideographs.",
	"U+2F00–2FDF": "Kangxi Radicals.",
	"U+2E80–2EFF": "CJK Radicals Supplement. Alternative forms of Kangxi Radicals.",
	"U+1100–11FF": "Hangul Jamo.",
	"U+AC00–D7AF": "Hangul Syllables.",
	"U+3040–309F": "Hiragana.",
	"U+30A0–30FF": "Katakana.",
	"U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F": "Japanese Kanji, Hiragana and Katakana characters plus Yen/Yuan symbol.",
	"U+A4D0–A4FF": "Lisu.",
	"U+A000–A48F": "Yi Syllables.",
	"U+A490–A4CF": "Yi Radicals.",
	"U+2000-206F": "General Punctuation.",
	"U+3000–303F": "CJK Symbols and Punctuation.",
	"U+2070–209F": "Superscripts and Subscripts.",
	"U+20A0–20CF": "Currency Symbols.",
	"U+2100–214F": "Letterlike Symbols.",
	"U+2150–218F": "Number Forms.",
	"U+2190–21FF": "Arrows.",
	"U+2200–22FF": "Mathematical Operators.",
	"U+2300–23FF": "Miscellaneous Technical.",
	"U+E000-F8FF": "Private Use Area.",
	"U+FB00–FB4F": "Alphabetic Presentation Forms. Ligatures for latin, Armenian, and Hebrew.",
	"U+FB50–FDFF": "Arabic Presentation Forms-A. Contextual forms / ligatures for Persian, Urdu, Sindhi, Central Asian languages, etc, Arabic pedagogical symbols, word ligatures.",
	"U+1F600–1F64F": "Emoji: Emoticons.",
	"U+2600–26FF": "Emoji: Miscellaneous Symbols.",
	"U+1F300–1F5FF": "Emoji: Miscellaneous Symbols and Pictographs.",
	"U+1F900–1F9FF": "Emoji: Supplemental Symbols and Pictographs.",
	"U+1F680–1F6FF": "Emoji: Transport and Map Symbols.",
	"text-bottom": "Align the bottom of the box with the after-edge of the parent element's font.",
	"text-top": "Align the top of the box with the before-edge of the parent element's font.",
	"break": "If the content fits within the CSS Region, then this property has no effect.",
	"pre": "Sets 'white-space-collapsing' to 'preserve' and 'text-wrap' to 'none'.",
	"pre-line": "Sets 'white-space-collapsing' to 'preserve-breaks' and 'text-wrap' to 'normal'.",
	"pre-wrap": "Sets 'white-space-collapsing' to 'preserve' and 'text-wrap' to 'normal'.",
	"scroll-position": "Indicates that the author expects to animate or change the scroll position of the element in the near future.",
	"horizontal-tb": "Top-to-bottom block flow direction. The writing mode is horizontal.",
	"sideways-lr": "Left-to-right block flow direction. The writing mode is vertical, while the typographic mode is horizontal.",
	"sideways-rl": "Right-to-left block flow direction. The writing mode is vertical, while the typographic mode is horizontal.",
	"vertical-lr": "Left-to-right block flow direction. The writing mode is vertical.",
	"vertical-rl": "Right-to-left block flow direction. The writing mode is vertical."
};