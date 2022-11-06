import React, { isValidElement } from 'react';
import { useCurrentNode, YogaContext, useLayout } from './hooks.js';
import { Container, Graphics } from '@inlet/react-pixi';

const ViewProvider = ({ children, currContext }) => {
    const currentNode = useCurrentNode(currContext);
    if (!currentNode) {
        return null;
    }
    return React.createElement(YogaContext.Provider, { value: currentNode }, children);
};
ViewProvider.displayName = 'ViewProvider';
const Box = ({ style = {}, children, inherit }) => {
    const [layout] = useLayout(style);
    return (React.createElement(Container, null,
        style.background ? React.createElement(Graphics, { draw: (g) => {
                g.clear();
                g.beginFill(style.background, style.opacity);
                g.drawRect(layout.x, layout.y, layout.width, layout.height);
                g.endFill();
            } }) : null,
        inherit ? (React.Children.map(children, (Child) => {
            if (!isValidElement(Child)) {
                return;
            }
            return (React.createElement(Child.type, Object.assign({}, Child.props, { x: layout.x, y: layout.y, width: layout.width, height: layout.height })));
        })) : (children)));
};
Box.displayName = 'Box';
const ViewConsumer = ({ children }) => {
    return (React.createElement(YogaContext.Consumer, null, (context) => (React.createElement(ViewProvider, { currContext: context }, children))));
};
ViewConsumer.displayName = 'ViewConsumer';
function withView(Component) {
    return ({ style, children, debug, ...restProps }) => {
        return (React.createElement(ViewConsumer, null,
            React.createElement(Box, { debug: true, style: style, inherit: true }, Component ? (React.createElement(Component, Object.assign({}, restProps), children))
                : children)));
    };
}
const View = withView();

export { View, ViewConsumer, ViewProvider, withView };
