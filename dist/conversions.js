import { ExperimentalFeature, FlexDirection, Justify, LogLevel, MeasureMode, NodeType, Overflow, PositionType, PrintOptions, Unit, Wrap } from './constants.js';

function throwError(func, received) {
    throw new Error(`Incorrect value passed to ${func}: '${received}' that has type of ${typeof received}`);
}
function reverseMap(mappings) {
    return Object.keys(mappings).map(Number).reduce((prev, key) => {
        // TODO: Figure out how to do these types correctly...
        const value = mappings[key];
        prev[key] = value;
        prev[value] = key;
        return prev;
    }, {});
}
function createConverter(name, values) {
    function convert(value) {
        const conversion = values[value];
        if (conversion === undefined) {
            return throwError(name, value);
        }
        return conversion;
    }
    return convert;
}
const convertAlign = createConverter('convertAlign', reverseMap({
    [0 /* AUTO */]: 'auto',
    [1 /* FLEX_START */]: 'flex-start',
    [2 /* CENTER */]: 'center',
    [3 /* FLEX_END */]: 'flex-end',
    [4 /* STRETCH */]: 'stretch',
    [5 /* BASELINE */]: 'baseline',
    [6 /* SPACE_BETWEEN */]: 'space-between',
    [7 /* SPACE_AROUND */]: 'space-around'
}));
const convertDimension = createConverter('convertDimension', reverseMap({
    [0 /* WIDTH */]: 'width',
    [1 /* HEIGHT */]: 'height'
}));
const convertDirection = createConverter('convertDirection', reverseMap({
    [0 /* INHERIT */]: 'inherit',
    [1 /* LTR */]: 'ltr',
    [2 /* RTL */]: 'rtl'
}));
const convertDisplay = createConverter('convertDisplay', reverseMap({
    [0 /* FLEX */]: 'flex',
    [1 /* NONE */]: 'none'
}));
const convertEdge = createConverter('convertEdge', reverseMap({
    [0 /* LEFT */]: 'left',
    [1 /* TOP */]: 'top',
    [2 /* RIGHT */]: 'right',
    [3 /* BOTTOM */]: 'bottom',
    [4 /* START */]: 'start',
    [5 /* END */]: 'end',
    [6 /* HORIZONTAL */]: 'horizontal',
    [7 /* VERTICAL */]: 'vertical',
    [8 /* ALL */]: 'all'
}));
const convertExperimentalFeature = createConverter('convertExperimentalFeature', reverseMap({
    [ExperimentalFeature.FLEX_BASIS]: 'web-flex-basis'
}));
const convertFlexDirection = createConverter('convertFlexDirection', reverseMap({
    [FlexDirection.COLUMN]: 'column',
    [FlexDirection.COLUMN_REVERSE]: 'column-reverse',
    [FlexDirection.ROW]: 'row',
    [FlexDirection.ROW_REVERSE]: 'row-reverse'
}));
const convertJustify = createConverter('convertJustify', reverseMap({
    [Justify.FLEX_START]: 'flex-start',
    [Justify.CENTER]: 'center',
    [Justify.FLEX_END]: 'flex-end',
    [Justify.SPACE_BETWEEN]: 'space-between',
    [Justify.SPACE_AROUND]: 'space-around',
    [Justify.SPACE_EVENLY]: 'space-evenly'
}));
const convertLogLevel = createConverter('convertLogLevel', reverseMap({
    [LogLevel.ERROR]: 'error',
    [LogLevel.WARN]: 'warn',
    [LogLevel.INFO]: 'info',
    [LogLevel.DEBUG]: 'debug',
    [LogLevel.VERBOSE]: 'verbose',
    [LogLevel.FATAL]: 'fatal'
}));
const convertMeasureMode = createConverter('convertMeasureMode', reverseMap({
    [MeasureMode.UNDEFINED]: 'undefined',
    [MeasureMode.EXACTLY]: 'exactly',
    [MeasureMode.AT_MOST]: 'at-most'
}));
const convertNodeType = createConverter('convertNodeType', reverseMap({
    [NodeType.DEFAULT]: 'default',
    [NodeType.TEXT]: 'text'
}));
const convertOverflow = createConverter('convertOverflow', reverseMap({
    [Overflow.VISIBLE]: 'visible',
    [Overflow.HIDDEN]: 'hidden',
    [Overflow.SCROLL]: 'scroll'
}));
const convertPositionType = createConverter('convertPositionType', reverseMap({
    [PositionType.RELATIVE]: 'relative',
    [PositionType.ABSOLUTE]: 'absolute'
}));
const convertPrintOptions = createConverter('convertPrintOptions', reverseMap({
    [PrintOptions.LAYOUT]: 'layout',
    [PrintOptions.STYLE]: 'style',
    [PrintOptions.CHILDREN]: 'children'
}));
const convertUnit = createConverter('convertUnit', reverseMap({
    [Unit.UNDEFINED]: 'undefined',
    [Unit.POINT]: 'point',
    [Unit.PERCENT]: 'percent',
    [Unit.AUTO]: 'auto'
}));
const convertWrap = createConverter('convertWrap', reverseMap({
    [Wrap.NO_WRAP]: 'no-wrap',
    [Wrap.WRAP]: 'wrap',
    [Wrap.WRAP_REVERSE]: 'wrap-reverse'
}));

export { convertAlign, convertDimension, convertDirection, convertDisplay, convertEdge, convertExperimentalFeature, convertFlexDirection, convertJustify, convertLogLevel, convertMeasureMode, convertNodeType, convertOverflow, convertPositionType, convertPrintOptions, convertUnit, convertWrap };
