export declare const enum JustifyContent {
    JUSTIFY_FLEX_START = 0,
    JUSTIFY_CENTER = 1,
    JUSTIFY_FLEX_END = 2,
    JUSTIFY_SPACE_BETWEEN = 3,
    JUSTIFY_SPACE_AROUND = 4,
    JUSTIFY_SPACE_EVENLY = 5
}
export declare const enum Align {
    AUTO = 0,
    FLEX_START = 1,
    CENTER = 2,
    FLEX_END = 3,
    STRETCH = 4,
    BASELINE = 5,
    SPACE_BETWEEN = 6,
    SPACE_AROUND = 7
}
export declare const enum Dimension {
    WIDTH = 0,
    HEIGHT = 1
}
export declare const enum Direction {
    INHERIT = 0,
    LTR = 1,
    RTL = 2
}
export declare const enum Display {
    FLEX = 0,
    NONE = 1
}
export declare const enum Edge {
    LEFT = 0,
    TOP = 1,
    RIGHT = 2,
    BOTTOM = 3,
    START = 4,
    END = 5,
    HORIZONTAL = 6,
    VERTICAL = 7,
    ALL = 8
}
export declare enum ExperimentalFeature {
    FLEX_BASIS = 0
}
export declare enum FlexDirection {
    COLUMN = 0,
    COLUMN_REVERSE = 1,
    ROW = 2,
    ROW_REVERSE = 3
}
export declare enum Justify {
    FLEX_START = 0,
    CENTER = 1,
    FLEX_END = 2,
    SPACE_BETWEEN = 3,
    SPACE_AROUND = 4,
    SPACE_EVENLY = 5
}
export declare enum LogLevel {
    ERROR = 0,
    WARN = 1,
    INFO = 2,
    DEBUG = 3,
    VERBOSE = 4,
    FATAL = 5
}
export declare enum MeasureMode {
    UNDEFINED = 0,
    EXACTLY = 1,
    AT_MOST = 2
}
export declare enum NodeType {
    DEFAULT = 0,
    TEXT = 1
}
export declare enum Overflow {
    VISIBLE = 0,
    HIDDEN = 1,
    SCROLL = 2
}
export declare enum PositionType {
    RELATIVE = 0,
    ABSOLUTE = 1
}
export declare enum PrintOptions {
    LAYOUT = 0,
    STYLE = 1,
    CHILDREN = 2
}
export declare enum Unit {
    UNDEFINED = 0,
    POINT = 1,
    PERCENT = 2,
    AUTO = 3
}
export declare enum Wrap {
    NO_WRAP = 0,
    WRAP = 1,
    WRAP_REVERSE = 2
}
export declare enum CSSProp {
    ALIGN_ITEMS = "alignItems",
    ALIGN_SELF = "alignSelf",
    ALIGN_CONTENT = "alignContent",
    DISPLAY = "display",
    BOTTOM = "bottom",
    FLEX = "flex",
    FLEX_GROW = "flexGrow",
    FLEX_SHRINK = "flexShrink",
    FLEX_BASIS = "flexBasis",
    FLEX_DIRECTION = "flexDirection",
    FLEX_WRAP = "flexWrap",
    HEIGHT = "height",
    JUSTIFY_CONTENT = "justifyContent",
    LEFT = "left",
    MARGIN = "margin",
    MARGIN_VERTICAL = "marginVertical",
    MARGIN_HORIZONTAL = "marginHorizontal",
    MARGIN_LEFT = "marginLeft",
    MARGIN_RIGHT = "marginRight",
    MARGIN_TOP = "marginTop",
    MARGIN_BOTTOM = "marginBottom",
    MARGIN_START = "marginStart",
    MARGIN_END = "marginEnd",
    PADDING = "padding",
    PADDING_VERTICAL = "paddingVertical",
    PADDING_HORIZONTAL = "paddingHorizontal",
    PADDING_LEFT = "paddingLeft",
    PADDING_RIGHT = "paddingRight",
    PADDING_TOP = "paddingTop",
    PADDING_BOTTOM = "paddingBottom",
    PADDING_START = "paddingStart",
    PADDING_END = "paddingEnd",
    POSITION = "position",
    RIGHT = "right",
    TOP = "top",
    WIDTH = "width",
    START = "start",
    END = "end",
    MIN_WIDTH = "minWidth",
    MAX_WIDTH = "maxWidth",
    MIN_HEIGHT = "minHeight",
    MAX_HEIGHT = "maxHeight",
    OVERFLOW = "overflow",
    BORDER_WIDTH = "borderWidth",
    BORDER_LEFT_WIDTH = "borderLeftWidth",
    BORDER_START_WIDTH = "borderStartWidth",
    BORDER_END_WIDTH = "borderEndWidth",
    BORDER_TOP_WIDTH = "borderTopWidth",
    BORDER_RIGHT_WIDTH = "borderRightWidth",
    BORDER_BOTTOM_WIDTH = "borderBottomWidth"
}
export declare type MarginPaddingSpacing = Edge.ALL | Edge.VERTICAL | Edge.HORIZONTAL | Edge.START | Edge.END | Edge.TOP | Edge.BOTTOM | Edge.LEFT | Edge.RIGHT;
export declare type PositionSpacing = Edge.START | Edge.END | Edge.TOP | Edge.BOTTOM | Edge.LEFT | Edge.RIGHT;
export declare type BorderSpacing = Edge.ALL | Edge.START | Edge.END | Edge.TOP | Edge.BOTTOM | Edge.LEFT | Edge.RIGHT;
