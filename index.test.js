const removeElement = require('./index.js');

describe('removeElement function', () => {

    test('should remove existing element from array', () => {
        const array = [1, 2, 3, 4, 5];
        const result = removeElement(array, 5);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test('attempt to remove non-existent element should not change array', () => {
        const array = [1, 2, 3, 4];
        const result = removeElement(array, 5);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test('should remove all occurrences of a repeating element', () => {
        const array = [1, 2, 3, 5, 4, 5, 5];
        const result = removeElement(array, 5);
        expect(result).toEqual([1, 2, 3, 4]);
    });

});
