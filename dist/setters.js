import { Unit, FlexDirection, Wrap, Justify, Overflow, PositionType } from './constants.js';
import { convertFlexDirection, convertWrap, convertAlign, convertJustify, convertOverflow, convertDisplay, convertPositionType } from './conversions.js';
import { getValue } from './value.js';

function debug(name, ...value) {
    console.log(name, ...value);
}
function setWidth(width, node) {
    if (!node) {
        return;
    }
    const boxedValue = getValue(width);
    debug('setWidth', width, boxedValue, node);
    switch (boxedValue.unit) {
        case Unit.POINT:
        case Unit.UNDEFINED:
            node.setWidth(boxedValue.value);
            break;
        case Unit.PERCENT:
            node.setWidthPercent(boxedValue.value);
            break;
        case Unit.AUTO:
            node.setWidthAuto();
            break;
    }
}
function setHeight(height, node) {
    if (!node) {
        return;
    }
    const boxedValue = getValue(height);
    debug('setHeight', height, boxedValue, node);
    switch (boxedValue.unit) {
        case Unit.POINT:
        case Unit.UNDEFINED:
            node.setHeight(boxedValue.value);
            break;
        case Unit.PERCENT:
            node.setHeightPercent(boxedValue.value);
            break;
        case Unit.AUTO:
            node.setHeightAuto();
            break;
    }
}
function setMinWidth(width, node) {
    if (!node) {
        return;
    }
    const boxedValue = getValue(width);
    debug('setMinWidth', width, boxedValue, node);
    switch (boxedValue.unit) {
        case Unit.POINT:
        case Unit.UNDEFINED:
            node.setMinWidth(boxedValue.value);
            break;
        case Unit.PERCENT:
            node.setMinWidthPercent(boxedValue.value);
            break;
        case Unit.AUTO:
            throw new Error('Minimum width cannot be auto');
    }
}
function setMinHeight(height, node) {
    if (!node) {
        return;
    }
    const boxedValue = getValue(height);
    debug('setMinHeight', height, boxedValue, node);
    switch (boxedValue.unit) {
        case Unit.POINT:
        case Unit.UNDEFINED:
            node.setMinHeight(boxedValue.value);
            break;
        case Unit.PERCENT:
            node.setMinHeightPercent(boxedValue.value);
            break;
        case Unit.AUTO:
            throw new Error('Minimum height cannot be auto');
    }
}
function setMaxWidth(width, node) {
    if (!node) {
        return;
    }
    const boxedValue = getValue(width);
    debug('setMaxWidth', width, boxedValue, node);
    switch (boxedValue.unit) {
        case Unit.POINT:
        case Unit.UNDEFINED:
            node.setMaxWidth(boxedValue.value);
            break;
        case Unit.PERCENT:
            node.setMaxWidthPercent(boxedValue.value);
            break;
        case Unit.AUTO:
            throw new Error('Maximum width cannot be auto');
    }
}
function setMaxHeight(height, node) {
    if (!node) {
        return;
    }
    const boxedValue = getValue(height);
    debug('setMaxHeight', height, boxedValue, node);
    switch (boxedValue.unit) {
        case Unit.POINT:
        case Unit.UNDEFINED:
            node.setMaxHeight(boxedValue.value);
            break;
        case Unit.PERCENT:
            node.setMaxHeightPercent(boxedValue.value);
            break;
        case Unit.AUTO:
            throw new Error('Maximum height cannot be auto');
    }
}
function setFlex(flex = 0, node) {
    if (!node) {
        return;
    }
    debug('setFlex', flex, node);
    node.setFlex(flex);
}
function setFlexGrow(flex = 0, node) {
    if (!node) {
        return;
    }
    debug('setFlexGrow', flex, node);
    node.setFlexGrow(flex);
}
function setFlexShrink(flex = 0, node) {
    if (!node) {
        return;
    }
    debug('setFlexShrink', flex, node);
    node.setFlexShrink(flex);
}
function setFlexBasis(flexBasis, node) {
    if (!node) {
        return;
    }
    const boxedValue = getValue(flexBasis);
    debug('setFlexBasis', flexBasis, boxedValue, node);
    switch (boxedValue.unit) {
        case Unit.POINT:
        case Unit.UNDEFINED:
            node.setFlexBasis(boxedValue.value);
            break;
        case Unit.PERCENT:
            node.setFlexBasisPercent(boxedValue.value);
            break;
        case Unit.AUTO:
            // TODO: Bad typing?
            node.setFlexBasisAuto();
    }
}
function setFlexDirection(flexDirection, node) {
    if (!node) {
        return;
    }
    if (!flexDirection) {
        debug('setFlexDirection', 'DEFAULT', FlexDirection.COLUMN, node);
        node.setFlexDirection(FlexDirection.COLUMN);
        return;
    }
    debug('setFlexDirection', 'NOT_DEFAULT', flexDirection, node);
    node.setFlexDirection(convertFlexDirection(flexDirection));
}
function setFlexWrap(flexWrap, node) {
    if (!node) {
        return;
    }
    if (!flexWrap) {
        debug('setFlexWrap', 'DEFAULT', Wrap.NO_WRAP, node);
        node.setFlexWrap(Wrap.NO_WRAP);
        return;
    }
    debug('setFlexWrap', 'NOT_DEFAULT', flexWrap, node);
    node.setFlexWrap(convertWrap(flexWrap));
}
function setAlignSelf(alignSelf, node) {
    if (!node) {
        return;
    }
    if (!alignSelf) {
        debug('setAlignSelf', 'DEFAULT', 0 /* AUTO */, node);
        node.setAlignSelf(0 /* AUTO */);
        return;
    }
    debug('setAlignSelf', 'NOT_DEFAULT', alignSelf, node);
    node.setAlignSelf(convertAlign(alignSelf));
}
function setAlignItems(alignItems, node) {
    if (!node) {
        return;
    }
    if (!alignItems) {
        debug('setAlignItems', 'DEFAULT', 4 /* STRETCH */, node);
        node.setAlignItems(4 /* STRETCH */);
        return;
    }
    debug('setAlignItems', 'NOT_DEFAULT', alignItems, node);
    node.setAlignItems(convertAlign(alignItems));
}
function setAlignContent(alignContent, node) {
    if (!node) {
        return;
    }
    if (!alignContent) {
        debug('setAlignContent', 'DEFAULT', 1 /* FLEX_START */, node);
        node.setAlignContent(1 /* FLEX_START */);
        return;
    }
    debug('setAlignContent', 'NOT_DEFAULT', alignContent, node);
    node.setAlignContent(convertAlign(alignContent));
}
function setJustifyContent(justifyContent, node) {
    if (!node) {
        return;
    }
    if (!justifyContent) {
        debug('setJustifyContent', 'DEFAULT', Justify.FLEX_START, node);
        node.setJustifyContent(Justify.FLEX_START);
        return;
    }
    debug('setJustifyContent', 'NOT_DEFAULT', justifyContent, node);
    node.setJustifyContent(convertJustify(justifyContent));
}
function setOverflow(overflow, node) {
    if (!node) {
        return;
    }
    if (!overflow) {
        debug('setOverflow', 'DEFAULT', Overflow.VISIBLE, node);
        node.setOverflow(Overflow.VISIBLE);
        return;
    }
    debug('setOverflow', 'NOT_DEFAULT', overflow, node);
    node.setOverflow(convertOverflow(overflow));
}
function setDisplay(display, node) {
    if (!node) {
        return;
    }
    if (!display) {
        debug('setDisplay', 'DEFAULT', 0 /* FLEX */, node);
        node.setDisplay(0 /* FLEX */);
        return;
    }
    debug('setDisplay', 'NOT_DEFAULT', display, node);
    node.setDisplay(convertDisplay(display));
}
function setMargins(marginType, margin, node) {
    if (!node) {
        return;
    }
    marginType = transformRL2SE(marginType);
    const value = getValue(margin);
    debug('setMargins', marginType, margin, value, node);
    switch (value.unit) {
        case Unit.UNDEFINED:
        case Unit.POINT:
            node.setMargin(marginType, value.value);
            break;
        case Unit.AUTO:
            node.setMarginAuto(marginType);
            break;
        case Unit.PERCENT:
            node.setMarginPercent(marginType, value.value);
            break;
    }
}
function setPaddings(paddingType, padding, node) {
    if (!node) {
        return;
    }
    paddingType = transformRL2SE(paddingType);
    const value = getValue(padding);
    debug('setPaddings', paddingType, padding, value, node);
    switch (value.unit) {
        case Unit.UNDEFINED:
        case Unit.POINT:
            node.setPadding(paddingType, value.value);
            break;
        case Unit.PERCENT:
            node.setPaddingPercent(paddingType, value.value);
            break;
        case Unit.AUTO:
            throw new Error('Padding auto is not a valid value');
    }
}
function setBorderWidths(borderType, border, node) {
    if (!node) {
        return;
    }
    borderType = transformRL2SE(borderType);
    const value = getValue(border);
    debug('setBorderWidths', borderType, border, value, node);
    node.setBorder(borderType, value.value);
}
function setPositions(positionType, position, node) {
    if (!node) {
        return;
    }
    positionType = transformRL2SE(positionType);
    const value = getValue(position);
    debug('setPositions', positionType, position, value, node);
    switch (value.unit) {
        case Unit.UNDEFINED:
        case Unit.POINT:
            node.setPosition(positionType, value.value);
            break;
        case Unit.PERCENT:
            node.setPositionPercent(positionType, value.value);
            break;
        case Unit.AUTO:
            throw new Error('Position auto is not a valid value');
    }
}
function setPositionType(position, node) {
    if (!node) {
        return;
    }
    if (!position) {
        debug('setPositionType', 'DEFAULT', PositionType.RELATIVE, node);
        node.setPositionType(PositionType.RELATIVE);
        return;
    }
    debug('setPositionType', 'NOT_DEFAULT', position, node);
    node.setPositionType(convertPositionType(position));
}
function transformRL2SE(spacingType) {
    switch (spacingType) {
        case 0 /* LEFT */:
            return 4 /* START */;
        case 2 /* RIGHT */:
            return 5 /* END */;
    }
    return spacingType;
}

export { setAlignContent, setAlignItems, setAlignSelf, setBorderWidths, setDisplay, setFlex, setFlexBasis, setFlexDirection, setFlexGrow, setFlexShrink, setFlexWrap, setHeight, setJustifyContent, setMargins, setMaxHeight, setMaxWidth, setMinHeight, setMinWidth, setOverflow, setPaddings, setPositionType, setPositions, setWidth, transformRL2SE };
