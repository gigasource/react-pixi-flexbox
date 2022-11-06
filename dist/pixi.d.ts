/// <reference types="pixi.js" />
/// <reference types="react" />
export declare const BitmapText: import("react").FunctionComponent<import("./props.interface").IViewProps & Pick<Pick<Partial<import("@inlet/react-pixi")._ReactPixi.WithPointLike<any, "anchor">>, string | number | symbol>, string | number | symbol> & {
    position?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    scale?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    pivot?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
} & import("@inlet/react-pixi")._ReactPixi.InteractionEvents & {
    style?: unknown;
}>;
export declare const Container: import("react").FunctionComponent<import("./props.interface").IViewProps & Pick<Pick<Partial<PIXI.Container>, "position" | "scale" | "pivot" | "x" | "y" | "width" | "height" | "getChildByName" | "addChild" | "addChildAt" | "swapChildren" | "getChildIndex" | "setChildIndex" | "getChildAt" | "removeChild" | "removeChildAt" | "removeChildren" | "updateTransform" | "calculateBounds" | "renderWebGL" | "renderAdvancedWebGL" | "renderCanvas" | "destroy" | "once" | "on" | "off" | "cacheAsBitmap" | "name" | "getGlobalPosition" | "accessible" | "accessibleTitle" | "accessibleHint" | "tabIndex" | "interactive" | "interactiveChildren" | "hitArea" | "buttonMode" | "cursor" | "trackedPointers" | "defaultCursor" | "transform" | "alpha" | "visible" | "renderable" | "parent" | "worldAlpha" | "filterArea" | "worldTransform" | "localTransform" | "skew" | "rotation" | "worldVisible" | "mask" | "filters" | "getBounds" | "getLocalBounds" | "toGlobal" | "toLocal" | "setParent" | "setTransform" | "removeListener" | "removeAllListeners" | "addListener" | "eventNames" | "listeners" | "emit" | "setMaxListeners">, "x" | "y" | "width" | "height" | "getChildByName" | "addChild" | "addChildAt" | "swapChildren" | "getChildIndex" | "setChildIndex" | "getChildAt" | "removeChild" | "removeChildAt" | "removeChildren" | "updateTransform" | "calculateBounds" | "renderWebGL" | "renderAdvancedWebGL" | "renderCanvas" | "destroy" | "once" | "on" | "off" | "cacheAsBitmap" | "name" | "getGlobalPosition" | "accessible" | "accessibleTitle" | "accessibleHint" | "tabIndex" | "interactive" | "interactiveChildren" | "hitArea" | "buttonMode" | "cursor" | "trackedPointers" | "defaultCursor" | "transform" | "alpha" | "visible" | "renderable" | "parent" | "worldAlpha" | "filterArea" | "worldTransform" | "localTransform" | "skew" | "rotation" | "worldVisible" | "mask" | "filters" | "getBounds" | "getLocalBounds" | "toGlobal" | "toLocal" | "setParent" | "setTransform" | "removeListener" | "removeAllListeners" | "addListener" | "eventNames" | "listeners" | "emit" | "setMaxListeners"> & {
    position?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    scale?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    pivot?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
} & import("@inlet/react-pixi")._ReactPixi.InteractionEvents>;
export declare const NineSlicePlane: import("react").FunctionComponent<import("./props.interface").IViewProps & Pick<Pick<any, string | number | symbol>, string | number | symbol> & {
    position?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    scale?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    pivot?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
} & import("@inlet/react-pixi")._ReactPixi.InteractionEvents & import("@inlet/react-pixi")._ReactPixi.WithSource>;
export declare const ParticleContainer: import("react").FunctionComponent<import("./props.interface").IViewProps & Pick<Pick<any, string | number | symbol>, string | number | symbol> & {
    position?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    scale?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    pivot?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
} & import("@inlet/react-pixi")._ReactPixi.InteractionEvents & {
    maxSize?: unknown;
    properties?: unknown;
    batchSize?: unknown;
    autoResize?: unknown;
}>;
export declare const SimpleMesh: import("react").FunctionComponent<import("./props.interface").IViewProps & Pick<Pick<any, string | number | symbol>, string | number | symbol> & {
    position?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    scale?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    pivot?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
} & import("@inlet/react-pixi")._ReactPixi.InteractionEvents & import("@inlet/react-pixi")._ReactPixi.WithSource & {
    uvs?: unknown;
    indices?: unknown;
}>;
export declare const SimpleRope: import("react").FunctionComponent<import("./props.interface").IViewProps & Pick<Pick<any, string | number | symbol>, string | number | symbol> & {
    position?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    scale?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    pivot?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
} & import("@inlet/react-pixi")._ReactPixi.InteractionEvents & import("@inlet/react-pixi")._ReactPixi.WithSource>;
export declare const Sprite: import("react").FunctionComponent<import("./props.interface").IViewProps & Pick<import("@inlet/react-pixi")._ReactPixi.Container<PIXI.Sprite>, "position" | "scale" | "pivot" | "pointerdown" | "pointercancel" | "pointerup" | "pointertap" | "pointerupoutside" | "pointermove" | "pointerover" | "pointerout" | "touchstart" | "touchcancel" | "touchend" | "touchendoutside" | "touchmove" | "tap" | "rightdown" | "mousedown" | "rightup" | "mouseup" | "rightclick" | "click" | "rightupoutside" | "mouseupoutside" | "mousemove" | "mouseover" | "mouseout" | "added" | "removed" | "x" | "y" | "width" | "height" | "getChildByName" | "addChild" | "addChildAt" | "swapChildren" | "getChildIndex" | "setChildIndex" | "getChildAt" | "removeChild" | "removeChildAt" | "removeChildren" | "updateTransform" | "calculateBounds" | "renderWebGL" | "renderAdvancedWebGL" | "renderCanvas" | "destroy" | "once" | "on" | "off" | "cacheAsBitmap" | "name" | "getGlobalPosition" | "accessible" | "accessibleTitle" | "accessibleHint" | "tabIndex" | "interactive" | "interactiveChildren" | "hitArea" | "buttonMode" | "cursor" | "trackedPointers" | "defaultCursor" | "transform" | "alpha" | "visible" | "renderable" | "parent" | "worldAlpha" | "filterArea" | "worldTransform" | "localTransform" | "skew" | "rotation" | "worldVisible" | "mask" | "filters" | "getBounds" | "getLocalBounds" | "toGlobal" | "toLocal" | "setParent" | "setTransform" | "removeListener" | "removeAllListeners" | "addListener" | "eventNames" | "listeners" | "emit" | "setMaxListeners" | "tint" | "blendMode" | "pluginName" | "texture" | "vertexData" | "calculateVertices" | "containsPoint"> & {
    anchor?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
} & import("@inlet/react-pixi")._ReactPixi.WithSource>;
export declare const Text: import("react").FunctionComponent<import("./props.interface").IViewProps & Pick<import("@inlet/react-pixi")._ReactPixi.Container<PIXI.Text>, "position" | "scale" | "pivot" | "pointerdown" | "pointercancel" | "pointerup" | "pointertap" | "pointerupoutside" | "pointermove" | "pointerover" | "pointerout" | "touchstart" | "touchcancel" | "touchend" | "touchendoutside" | "touchmove" | "tap" | "rightdown" | "mousedown" | "rightup" | "mouseup" | "rightclick" | "click" | "rightupoutside" | "mouseupoutside" | "mousemove" | "mouseover" | "mouseout" | "added" | "removed" | "style" | "x" | "y" | "width" | "height" | "getChildByName" | "addChild" | "addChildAt" | "swapChildren" | "getChildIndex" | "setChildIndex" | "getChildAt" | "removeChild" | "removeChildAt" | "removeChildren" | "updateTransform" | "calculateBounds" | "renderWebGL" | "renderAdvancedWebGL" | "renderCanvas" | "destroy" | "once" | "on" | "off" | "cacheAsBitmap" | "name" | "getGlobalPosition" | "accessible" | "accessibleTitle" | "accessibleHint" | "tabIndex" | "interactive" | "interactiveChildren" | "hitArea" | "buttonMode" | "cursor" | "trackedPointers" | "defaultCursor" | "transform" | "alpha" | "visible" | "renderable" | "parent" | "worldAlpha" | "filterArea" | "worldTransform" | "localTransform" | "skew" | "rotation" | "worldVisible" | "mask" | "filters" | "getBounds" | "getLocalBounds" | "toGlobal" | "toLocal" | "setParent" | "setTransform" | "removeListener" | "removeAllListeners" | "addListener" | "eventNames" | "listeners" | "emit" | "setMaxListeners" | "tint" | "blendMode" | "pluginName" | "texture" | "vertexData" | "calculateVertices" | "containsPoint" | "canvas" | "context" | "resolution" | "text" | "dirty"> & {
    anchor?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
}>;
export declare const TilingSprite: import("react").FunctionComponent<import("./props.interface").IViewProps & Pick<Pick<Pick<Partial<import("@inlet/react-pixi")._ReactPixi.WithPointLike<any, "tileScale" | "tilePosition">>, string | number | symbol>, string | number | symbol> & {
    position?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    scale?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
    pivot?: number | PIXI.Point | PIXI.ObservablePoint | [number, number] | [number] | undefined;
} & import("@inlet/react-pixi")._ReactPixi.InteractionEvents & import("@inlet/react-pixi")._ReactPixi.WithSource, string | number | symbol> & {
    tilePosition: any;
}>;
