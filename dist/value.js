import { Unit } from './constants.js';

function getValue(value) {
    if (value === null || value === undefined) {
        return { unit: Unit.UNDEFINED, value: NaN };
    }
    if (typeof value === 'number') {
        return {
            unit: Unit.POINT,
            value: value,
        };
    }
    if (value === 'auto') {
        return { unit: Unit.AUTO, value: NaN };
    }
    if (value.endsWith('%')) {
        return {
            unit: Unit.PERCENT,
            value: parseFloat(value.substring(0, value.length - 1))
        };
    }
    throw new Error(`Incorrect value given: ${value}`);
}

export { getValue };
