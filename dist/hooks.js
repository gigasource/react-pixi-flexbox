import React, { useState, useEffect, useContext } from 'react';
import { Node } from 'yoga-layout-prebuilt';
import { setWidth, setHeight, setMinHeight, setMinWidth, setMaxHeight, setMaxWidth, setAlignContent, setAlignItems, setDisplay, setFlex, setFlexGrow, setFlexShrink, setFlexBasis, setFlexDirection, setFlexWrap, setJustifyContent, setBorderWidths, setPositionType, setPositions, setMargins, setPaddings } from './setters.js';

const YogaContext = React.createContext(Node.create());
function getRootNode(node) {
    const parent = node.getParent();
    return !parent ? node : getRootNode(parent);
}
function useModified(fn, [value, node]) {
    const [previousValue, setPreviousValue] = useState();
    const [currNode, setNode] = useState();
    useEffect(() => {
        let nodeChanged = false;
        if (currNode !== node) {
            setNode(node);
            nodeChanged = true;
        }
        if (previousValue !== value || (value && nodeChanged)) {
            setPreviousValue(value);
            fn();
        }
    }, [value, node]);
}
function useCurrentNode(currContext) {
    const [currentNode, setCurrentNode] = useState();
    useEffect(() => {
        if (currContext) {
            const node = Node.create();
            setCurrentNode(node);
            currContext.insertChild(node, currContext.getChildCount());
        }
        return () => {
            if (currentNode) {
                if (currContext) {
                    currContext.removeChild(currentNode);
                }
                currentNode.freeRecursive();
            }
        };
    }, [currContext]);
    return currentNode;
}
function getLayout(node) {
    const box = { x: 0, y: 0, width: node.getComputedWidth(), height: node.getComputedHeight() };
    do {
        const layout = node.getComputedLayout();
        box.x += layout.left;
        box.y += layout.right;
    } while (node = node.getParent());
    return box;
}
function useLayout(style) {
    const node = useContext(YogaContext);
    const [layout, setLayout] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    useModified(() => setWidth(style.width, node), [style.width, node]);
    useModified(() => setHeight(style.height, node), [style.height, node]);
    useModified(() => setMinHeight(style.minHeight, node), [style.minHeight, node]);
    useModified(() => setMinWidth(style.minWidth, node), [style.minWidth, node]);
    useModified(() => setMaxHeight(style.maxHeight, node), [style.maxHeight, node]);
    useModified(() => setMaxWidth(style.maxWidth, node), [style.maxWidth, node]);
    useModified(() => setAlignContent(style.alignContent, node), [style.alignContent, node]);
    useModified(() => setAlignItems(style.alignItems, node), [style.alignItems, node]);
    useModified(() => setAlignItems(style.alignSelf, node), [style.alignSelf, node]);
    useEffect(() => setDisplay(style.display, node), [style.display, node]);
    useModified(() => setFlex(style.flex, node), [style.flex, node]);
    useModified(() => setFlexGrow(style.flexGrow, node), [style.flexGrow, node]);
    useModified(() => setFlexShrink(style.flexShrink, node), [style.flexShrink, node]);
    useModified(() => setFlexBasis(style.flexBasis, node), [style.flexBasis, node]);
    useEffect(() => setFlexDirection(style.flexDirection, node), [style.flexDirection, node]);
    useModified(() => setFlexWrap(style.flexWrap, node), [style.flexWrap, node]);
    useModified(() => setJustifyContent(style.justifyContent, node), [style.justifyContent, node]);
    useModified(() => setBorderWidths(8 /* ALL */, style.borderWidth, node), [style.borderWidth, node]);
    useModified(() => setBorderWidths(3 /* BOTTOM */, style.borderBottomWidth, node), [
        style.borderBottomWidth,
        node
    ]);
    useModified(() => setBorderWidths(1 /* TOP */, style.borderTopWidth, node), [style.borderTopWidth, node]);
    useModified(() => setBorderWidths(0 /* LEFT */, style.borderLeftWidth, node), [style.borderLeftWidth, node]);
    useModified(() => setBorderWidths(2 /* RIGHT */, style.borderRightWidth, node), [style.borderRightWidth, node]);
    useModified(() => setPositionType(style.position, node), [style.position, node]);
    useModified(() => setPositions(3 /* BOTTOM */, style.bottom, node), [style.bottom, node]);
    useModified(() => setPositions(1 /* TOP */, style.top, node), [style.top, node]);
    useModified(() => setPositions(0 /* LEFT */, style.left, node), [style.left, node]);
    useModified(() => setPositions(2 /* RIGHT */, style.right, node), [style.right, node]);
    useModified(() => setMargins(8 /* ALL */, style.margin, node), [style.margin, node]);
    useModified(() => setMargins(3 /* BOTTOM */, style.marginBottom, node), [style.marginBottom, node]);
    useModified(() => setMargins(1 /* TOP */, style.marginTop, node), [style.marginTop, node]);
    useModified(() => setMargins(0 /* LEFT */, style.marginLeft, node), [style.marginLeft, node]);
    useModified(() => setMargins(2 /* RIGHT */, style.marginRight, node), [style.marginRight, node]);
    useModified(() => setPaddings(8 /* ALL */, style.padding, node), [style.padding, node]);
    useModified(() => setPaddings(3 /* BOTTOM */, style.paddingBottom, node), [style.paddingBottom, node]);
    useModified(() => setPaddings(1 /* TOP */, style.paddingTop, node), [style.paddingTop, node]);
    useModified(() => setPaddings(0 /* LEFT */, style.paddingLeft, node), [style.paddingLeft, node]);
    useModified(() => setPaddings(2 /* RIGHT */, style.paddingRight, node), [style.paddingRight, node]);
    const updateLayout = () => {
        if (node) {
            const root = getRootNode(node);
            if (root && root.isDirty) {
                root.calculateLayout();
            }
            setLayout(getLayout(node));
        }
    };
    useEffect(updateLayout, [...Object.values(style), node]);
    return [layout, updateLayout];
}

export { YogaContext, useCurrentNode, useLayout, useModified };
