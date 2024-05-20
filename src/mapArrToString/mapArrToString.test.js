const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
    test('Корректное значение', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
    });
    test('Мешанина', () => {
        expect(mapArrToString([1, 2, 3, null, undefined, '2dsds'])).toEqual([
            '1',
            '2',
            '3',
        ]);
    });
    test('Пустой массив', () => {
        expect(mapArrToString([])).toEqual([]);
    });
    test('Отрицания', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual(['1', '2', '3', '4']);
    });
});
