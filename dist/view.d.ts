import { YogaNode } from 'yoga-layout-prebuilt';
import React, { FunctionComponent } from 'react';
import { IViewProps } from './props.interface';
export declare const ViewProvider: FunctionComponent<{
    currContext?: YogaNode;
}>;
export declare const ViewConsumer: FunctionComponent;
declare type ExcludeLayoutProps<T> = Exclude<T, 'x' | 'y' | 'width' | 'height'>;
export declare function withView<P>(Component?: React.ComponentType<P>): FunctionComponent<IViewProps & ExcludeLayoutProps<P>>;
export declare const View: React.FunctionComponent<IViewProps>;
export {};
