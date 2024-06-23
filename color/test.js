import convertColors from './script.js';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!DOCTYPE html><input id="colorInput" value="">')).window;
global.document = document;
global.alert = jest.fn();

// Mock colorMap for testing
const colorMap = {
    red: '#ff0000',
    blue: '#0000ff',
    'light blue': '#add8e6'
};

describe('convertColors function', () => {
    beforeEach(() => {
        document.getElementById('colorInput').value = '';
        global.alert.mockClear();
    });

    test('alerts when no input is provided', () => {
        document.getElementById('colorInput').value = '';
        convertColors();
        expect(global.alert).toHaveBeenCalledWith('Please enter at least one color name.');
    });

    test('removes duplicates and converts color names to hex codes', () => {
        document.getElementById('colorInput').value = 'red, blue, red';
        const expected = [{ name: 'red', hex: '#ff0000' }, { name: 'blue', hex: '#0000ff' }];
        const result = convertColors();
        expect(result).toEqual(expect.arrayContaining(expected));
        expect(result.length).toBe(2); 
    });

    test('converts hyphenated color names and handles invalid input', () => {
        document.getElementById('colorInput').value = 'light-blue, !@#$%^';
        const expected = [{ name: 'light-blue', hex: '#add8e6' }, { name: '!@#$%^', hex: 'Not a Color' }];
        const result = convertColors();
        expect(result).toEqual(expect.arrayContaining(expected));
    });
});