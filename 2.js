/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];


const filter = function (array, cb) {
    if (Array.isArray(array) !== true) {
        throw new Error('First parameter has to be an array')
    }
    if (typeof cb !== 'function') {
        throw new Error('Second argument should be a function');
    }
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const result = cb (array[i], i, array);
        if (result) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const filteredArray = filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
    return element === 'Добрый вечер!';
});
console.log(filteredArray); // ['Добрый вечер!']














// const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];
//
// const filteredArray = array.filter(function (element, index, arrayRef) {
//     console.log(`${index}:`, element, arrayRef)
//     return element === 'Добрый вечер!';
// });
//
// console.log(filteredArray);

