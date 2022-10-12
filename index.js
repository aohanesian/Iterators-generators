`use strict`;

let phrase = [`Capitan`, `Jack`, `Sparrow`];
console.log(phrase);

function iter(array) {
    let index = 0;
    let output = {};
    return {
        next() {
            if (index < array.length) {
                output = {
                    value: array[index],
                    done: false
                };
                index++;
                return output;
            } else {
                return {value: undefined, done: true};
            }
        }
    }
}

const itr = iter(phrase);
console.log(itr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

// let output2 = phrase.map(item => item[Symbol.iterator]().next().value);
// console.log(output2);
//
// function iter2(array) {
//     const eArr = array[Symbol.iterator]();
//     let output3 = array.map(item => eArr.next());
//     return output3
// }
// console.log(iter2(phrase));

// https://blog.csdn.net/margin_0px/article/details/82971545
// https://blog.csdn.net/weixin_49866029/article/details/115833009
