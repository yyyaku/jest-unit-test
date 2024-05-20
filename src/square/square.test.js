const square = require('./square');

describe('square', () => {
    let mocks;
    // Перед каждым тестом
    // beforeEach = () => {
    //     Добаввить чтот-то в бд
    // }
    // Один раз перед всем тестами
    // beforeAll = () => {

    // }
    test('Корректное зачение', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();
    });
    // После каждого теста
    // afteEach = () => {
    //     Удалить из бд
    // }
    // После всех тестов
    // afteAll = () => {

    // }
});
