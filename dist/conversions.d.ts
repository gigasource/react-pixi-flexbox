import { Align, Dimension, Direction, Display, Edge, ExperimentalFeature, FlexDirection, Justify, LogLevel, MeasureMode, NodeType, Overflow, PositionType, PrintOptions, Unit, Wrap } from './constants';
declare type AllValues<T extends Record<PropertyKey, PropertyKey>> = {
    [P in keyof T]: {
        key: P;
        value: T[P];
    };
}[keyof T];
declare type InvertResult<T extends Record<PropertyKey, PropertyKey>> = {
    [P in AllValues<T>['value']]: Extract<AllValues<T>, {
        value: P;
    }>['key'];
};
declare type ReverseMapped<T extends Record<number, string>> = {
    [K in keyof T]: T[K];
} & InvertResult<T>;
declare type GetValues<T extends (...args: any[]) => any> = Exclude<Parameters<T>[0], number>;
export declare const convertAlign: <F extends Align | "auto" | "flex-start" | "center" | "flex-end" | "stretch" | "baseline" | "space-between" | "space-around">(value: F) => ReverseMapped<{
    readonly [Align.AUTO]: "auto";
    readonly [Align.FLEX_START]: "flex-start";
    readonly [Align.CENTER]: "center";
    readonly [Align.FLEX_END]: "flex-end";
    readonly [Align.STRETCH]: "stretch";
    readonly [Align.BASELINE]: "baseline";
    readonly [Align.SPACE_BETWEEN]: "space-between";
    readonly [Align.SPACE_AROUND]: "space-around";
}>[F];
export declare type AlignValues = GetValues<typeof convertAlign>;
export declare const convertDimension: <F extends "width" | "height" | Dimension>(value: F) => ReverseMapped<{
    readonly [Dimension.WIDTH]: "width";
    readonly [Dimension.HEIGHT]: "height";
}>[F];
export declare type DimensionValues = GetValues<typeof convertDimension>;
export declare const convertDirection: <F extends Direction | "inherit" | "ltr" | "rtl">(value: F) => ReverseMapped<{
    readonly [Direction.INHERIT]: "inherit";
    readonly [Direction.LTR]: "ltr";
    readonly [Direction.RTL]: "rtl";
}>[F];
export declare type DirectionValues = GetValues<typeof convertDirection>;
export declare const convertDisplay: <F extends Display | "flex" | "none">(value: F) => ReverseMapped<{
    readonly [Display.FLEX]: "flex";
    readonly [Display.NONE]: "none";
}>[F];
export declare type DisplayValues = GetValues<typeof convertDisplay>;
export declare const convertEdge: <F extends Edge | "left" | "top" | "right" | "bottom" | "start" | "end" | "horizontal" | "vertical" | "all">(value: F) => ReverseMapped<{
    readonly [Edge.LEFT]: "left";
    readonly [Edge.TOP]: "top";
    readonly [Edge.RIGHT]: "right";
    readonly [Edge.BOTTOM]: "bottom";
    readonly [Edge.START]: "start";
    readonly [Edge.END]: "end";
    readonly [Edge.HORIZONTAL]: "horizontal";
    readonly [Edge.VERTICAL]: "vertical";
    readonly [Edge.ALL]: "all";
}>[F];
export declare type EdgeValues = GetValues<typeof convertEdge>;
export declare const convertExperimentalFeature: <F extends ExperimentalFeature.FLEX_BASIS | "web-flex-basis">(value: F) => ReverseMapped<{
    readonly [ExperimentalFeature.FLEX_BASIS]: "web-flex-basis";
}>[F];
export declare type ExperimentalFeatureValues = GetValues<typeof convertExperimentalFeature>;
export declare const convertFlexDirection: <F extends FlexDirection | "column" | "column-reverse" | "row" | "row-reverse">(value: F) => ReverseMapped<{
    readonly [FlexDirection.COLUMN]: "column";
    readonly [FlexDirection.COLUMN_REVERSE]: "column-reverse";
    readonly [FlexDirection.ROW]: "row";
    readonly [FlexDirection.ROW_REVERSE]: "row-reverse";
}>[F];
export declare type FlexDirectionValues = GetValues<typeof convertFlexDirection>;
export declare const convertJustify: <F extends "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | Justify | "space-evenly">(value: F) => ReverseMapped<{
    readonly [Justify.FLEX_START]: "flex-start";
    readonly [Justify.CENTER]: "center";
    readonly [Justify.FLEX_END]: "flex-end";
    readonly [Justify.SPACE_BETWEEN]: "space-between";
    readonly [Justify.SPACE_AROUND]: "space-around";
    readonly [Justify.SPACE_EVENLY]: "space-evenly";
}>[F];
export declare type JustifyValues = GetValues<typeof convertJustify>;
export declare const convertLogLevel: <F extends LogLevel | "error" | "warn" | "info" | "debug" | "verbose" | "fatal">(value: F) => ReverseMapped<{
    readonly [LogLevel.ERROR]: "error";
    readonly [LogLevel.WARN]: "warn";
    readonly [LogLevel.INFO]: "info";
    readonly [LogLevel.DEBUG]: "debug";
    readonly [LogLevel.VERBOSE]: "verbose";
    readonly [LogLevel.FATAL]: "fatal";
}>[F];
export declare type LogLevelValues = GetValues<typeof convertLogLevel>;
export declare const convertMeasureMode: <F extends "undefined" | MeasureMode | "exactly" | "at-most">(value: F) => ReverseMapped<{
    readonly [MeasureMode.UNDEFINED]: "undefined";
    readonly [MeasureMode.EXACTLY]: "exactly";
    readonly [MeasureMode.AT_MOST]: "at-most";
}>[F];
export declare type MeasureModeValues = GetValues<typeof convertMeasureMode>;
export declare const convertNodeType: <F extends "text" | NodeType | "default">(value: F) => ReverseMapped<{
    readonly [NodeType.DEFAULT]: "default";
    readonly [NodeType.TEXT]: "text";
}>[F];
export declare type NodeTypeValues = GetValues<typeof convertNodeType>;
export declare const convertOverflow: <F extends "visible" | Overflow | "hidden" | "scroll">(value: F) => ReverseMapped<{
    readonly [Overflow.VISIBLE]: "visible";
    readonly [Overflow.HIDDEN]: "hidden";
    readonly [Overflow.SCROLL]: "scroll";
}>[F];
export declare type OverflowValues = GetValues<typeof convertOverflow>;
export declare const convertPositionType: <F extends PositionType | "relative" | "absolute">(value: F) => ReverseMapped<{
    readonly [PositionType.RELATIVE]: "relative";
    readonly [PositionType.ABSOLUTE]: "absolute";
}>[F];
export declare type PositionValues = GetValues<typeof convertPositionType>;
export declare const convertPrintOptions: <F extends "children" | "style" | PrintOptions | "layout">(value: F) => ReverseMapped<{
    readonly [PrintOptions.LAYOUT]: "layout";
    readonly [PrintOptions.STYLE]: "style";
    readonly [PrintOptions.CHILDREN]: "children";
}>[F];
export declare type PrintOptionValues = GetValues<typeof convertPrintOptions>;
export declare const convertUnit: <F extends "undefined" | Unit | "auto" | "point" | "percent">(value: F) => ReverseMapped<{
    readonly [Unit.UNDEFINED]: "undefined";
    readonly [Unit.POINT]: "point";
    readonly [Unit.PERCENT]: "percent";
    readonly [Unit.AUTO]: "auto";
}>[F];
export declare type UnitValues = GetValues<typeof convertUnit>;
export declare const convertWrap: <F extends Wrap | "no-wrap" | "wrap" | "wrap-reverse">(value: F) => ReverseMapped<{
    readonly [Wrap.NO_WRAP]: "no-wrap";
    readonly [Wrap.WRAP]: "wrap";
    readonly [Wrap.WRAP_REVERSE]: "wrap-reverse";
}>[F];
export declare type WrapValues = GetValues<typeof convertWrap>;
export {};
