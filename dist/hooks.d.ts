import { YogaNode } from 'yoga-layout-prebuilt';
import { ILayoutStyles } from './props.interface';
import React from 'react';
export declare const YogaContext: React.Context<YogaNode | undefined>;
export declare function useModified(fn: () => any, [value, node]: [any, YogaNode | undefined]): void;
export declare function useCurrentNode(currContext?: YogaNode): YogaNode | undefined;
export declare function useLayout(style: ILayoutStyles): readonly [{
    x: number;
    y: number;
    width: number;
    height: number;
}, () => void];
