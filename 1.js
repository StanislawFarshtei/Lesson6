/**
 * Задача 1.
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */




const array = [1, 2, 3];

const forEach = function(array, cb) {
    if (Array.isArray(array) !== true) {
        throw new Error('First parameter has to be an array')
    }
    if (typeof cb !== 'function') {
        throw new Error('Second argument should be a function');
    }
    for (let i = 0; i < array.length; i++) {
        const result =  cb (array[i], i, array);
    }
}

const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

});
console.log(result); // undefined
