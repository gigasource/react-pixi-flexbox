var ExperimentalFeature;
(function (ExperimentalFeature) {
    ExperimentalFeature[ExperimentalFeature["FLEX_BASIS"] = 0] = "FLEX_BASIS";
})(ExperimentalFeature || (ExperimentalFeature = {}));
var FlexDirection;
(function (FlexDirection) {
    FlexDirection[FlexDirection["COLUMN"] = 0] = "COLUMN";
    FlexDirection[FlexDirection["COLUMN_REVERSE"] = 1] = "COLUMN_REVERSE";
    FlexDirection[FlexDirection["ROW"] = 2] = "ROW";
    FlexDirection[FlexDirection["ROW_REVERSE"] = 3] = "ROW_REVERSE";
})(FlexDirection || (FlexDirection = {}));
var Justify;
(function (Justify) {
    Justify[Justify["FLEX_START"] = 0] = "FLEX_START";
    Justify[Justify["CENTER"] = 1] = "CENTER";
    Justify[Justify["FLEX_END"] = 2] = "FLEX_END";
    Justify[Justify["SPACE_BETWEEN"] = 3] = "SPACE_BETWEEN";
    Justify[Justify["SPACE_AROUND"] = 4] = "SPACE_AROUND";
    Justify[Justify["SPACE_EVENLY"] = 5] = "SPACE_EVENLY";
})(Justify || (Justify = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 4] = "VERBOSE";
    LogLevel[LogLevel["FATAL"] = 5] = "FATAL";
})(LogLevel || (LogLevel = {}));
var MeasureMode;
(function (MeasureMode) {
    MeasureMode[MeasureMode["UNDEFINED"] = 0] = "UNDEFINED";
    MeasureMode[MeasureMode["EXACTLY"] = 1] = "EXACTLY";
    MeasureMode[MeasureMode["AT_MOST"] = 2] = "AT_MOST";
})(MeasureMode || (MeasureMode = {}));
var NodeType;
(function (NodeType) {
    NodeType[NodeType["DEFAULT"] = 0] = "DEFAULT";
    NodeType[NodeType["TEXT"] = 1] = "TEXT";
})(NodeType || (NodeType = {}));
var Overflow;
(function (Overflow) {
    Overflow[Overflow["VISIBLE"] = 0] = "VISIBLE";
    Overflow[Overflow["HIDDEN"] = 1] = "HIDDEN";
    Overflow[Overflow["SCROLL"] = 2] = "SCROLL";
})(Overflow || (Overflow = {}));
var PositionType;
(function (PositionType) {
    PositionType[PositionType["RELATIVE"] = 0] = "RELATIVE";
    PositionType[PositionType["ABSOLUTE"] = 1] = "ABSOLUTE";
})(PositionType || (PositionType = {}));
var PrintOptions;
(function (PrintOptions) {
    PrintOptions[PrintOptions["LAYOUT"] = 0] = "LAYOUT";
    PrintOptions[PrintOptions["STYLE"] = 1] = "STYLE";
    PrintOptions[PrintOptions["CHILDREN"] = 2] = "CHILDREN";
})(PrintOptions || (PrintOptions = {}));
var Unit;
(function (Unit) {
    Unit[Unit["UNDEFINED"] = 0] = "UNDEFINED";
    Unit[Unit["POINT"] = 1] = "POINT";
    Unit[Unit["PERCENT"] = 2] = "PERCENT";
    Unit[Unit["AUTO"] = 3] = "AUTO";
})(Unit || (Unit = {}));
var Wrap;
(function (Wrap) {
    Wrap[Wrap["NO_WRAP"] = 0] = "NO_WRAP";
    Wrap[Wrap["WRAP"] = 1] = "WRAP";
    Wrap[Wrap["WRAP_REVERSE"] = 2] = "WRAP_REVERSE";
})(Wrap || (Wrap = {}));
var CSSProp;
(function (CSSProp) {
    CSSProp["ALIGN_ITEMS"] = "alignItems";
    CSSProp["ALIGN_SELF"] = "alignSelf";
    CSSProp["ALIGN_CONTENT"] = "alignContent";
    CSSProp["DISPLAY"] = "display";
    CSSProp["BOTTOM"] = "bottom";
    CSSProp["FLEX"] = "flex";
    CSSProp["FLEX_GROW"] = "flexGrow";
    CSSProp["FLEX_SHRINK"] = "flexShrink";
    CSSProp["FLEX_BASIS"] = "flexBasis";
    CSSProp["FLEX_DIRECTION"] = "flexDirection";
    CSSProp["FLEX_WRAP"] = "flexWrap";
    CSSProp["HEIGHT"] = "height";
    CSSProp["JUSTIFY_CONTENT"] = "justifyContent";
    CSSProp["LEFT"] = "left";
    CSSProp["MARGIN"] = "margin";
    CSSProp["MARGIN_VERTICAL"] = "marginVertical";
    CSSProp["MARGIN_HORIZONTAL"] = "marginHorizontal";
    CSSProp["MARGIN_LEFT"] = "marginLeft";
    CSSProp["MARGIN_RIGHT"] = "marginRight";
    CSSProp["MARGIN_TOP"] = "marginTop";
    CSSProp["MARGIN_BOTTOM"] = "marginBottom";
    CSSProp["MARGIN_START"] = "marginStart";
    CSSProp["MARGIN_END"] = "marginEnd";
    CSSProp["PADDING"] = "padding";
    CSSProp["PADDING_VERTICAL"] = "paddingVertical";
    CSSProp["PADDING_HORIZONTAL"] = "paddingHorizontal";
    CSSProp["PADDING_LEFT"] = "paddingLeft";
    CSSProp["PADDING_RIGHT"] = "paddingRight";
    CSSProp["PADDING_TOP"] = "paddingTop";
    CSSProp["PADDING_BOTTOM"] = "paddingBottom";
    CSSProp["PADDING_START"] = "paddingStart";
    CSSProp["PADDING_END"] = "paddingEnd";
    CSSProp["POSITION"] = "position";
    CSSProp["RIGHT"] = "right";
    CSSProp["TOP"] = "top";
    CSSProp["WIDTH"] = "width";
    CSSProp["START"] = "start";
    CSSProp["END"] = "end";
    CSSProp["MIN_WIDTH"] = "minWidth";
    CSSProp["MAX_WIDTH"] = "maxWidth";
    CSSProp["MIN_HEIGHT"] = "minHeight";
    CSSProp["MAX_HEIGHT"] = "maxHeight";
    CSSProp["OVERFLOW"] = "overflow";
    CSSProp["BORDER_WIDTH"] = "borderWidth";
    CSSProp["BORDER_LEFT_WIDTH"] = "borderLeftWidth";
    CSSProp["BORDER_START_WIDTH"] = "borderStartWidth";
    CSSProp["BORDER_END_WIDTH"] = "borderEndWidth";
    CSSProp["BORDER_TOP_WIDTH"] = "borderTopWidth";
    CSSProp["BORDER_RIGHT_WIDTH"] = "borderRightWidth";
    CSSProp["BORDER_BOTTOM_WIDTH"] = "borderBottomWidth";
})(CSSProp || (CSSProp = {}));

export { CSSProp, ExperimentalFeature, FlexDirection, Justify, LogLevel, MeasureMode, NodeType, Overflow, PositionType, PrintOptions, Unit, Wrap };
