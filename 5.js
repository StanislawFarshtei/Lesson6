/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;


const reduce = function (array, cb, INITIAL_ACCUMULATOR) {
    if (Array.isArray(array) !== true) {
        throw new Error('First parameter has to be an array')
    }

    if (typeof cb !== 'function') {
        throw new Error('Second argument should be a function');
    }


    let sum = INITIAL_ACCUMULATOR;
    if (typeof INITIAL_ACCUMULATOR === 'undefined') {
        sum = array[0];
    }

    for (let i = 0; i < array.length; i++) {
        const el = array[i];

        sum = cb (sum, el, i, array);
    }

    return sum;
}

const result = reduce(
    array,
    (accumulator, element, index, arrayRef) => {
        console.log(`${index}:`, accumulator, element, arrayRef);

        return accumulator + element;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

