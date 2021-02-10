//Task: 输入一个数组，输出一个去除重复元素后的数组
const unique = (array) => {
    const result = [];
    for (let i = 0; i < array.length; ++i){
        const value = array[i];
        for (var j = 0; j < result.length; ++j){
            if (value === result[j]) break;
        }
        if(j === result.length) result.push(value);
    }
    return result;
}

console.log(unique([1, 2, 1, 8, 1, 1, 2, 1, 9, 9]));

//index of简化内层循环
let unique2 = (array) => {
    let result = [];
    for (let i = 0; i < array.length; ++i){
        let value = array[i];
        if (result.indexOf(value) === -1){
            result.push(value);
        }
    }
    return result;
}

console.log(unique2([1, 2, 1, 8, 1, 1, 2, 1, 9, 9]));

console.log([4, 3, 2, 1].concat().sort());

//方法2: 排序后去重
const sortAndUnique = (array) => {
    const result = [];
    const sortedArray = array.sort();

    result.push(sortedArray[0]);
    for (let i = 1; i < sortedArray.length; ++i){
        if (sortedArray[i] !== sortedArray[i-1]){
            result.push(sortedArray[i]);
        }
    }

    return result;
}
console.log(sortAndUnique([1, 2, 1, 8, 1, 1, 2, 1, 9, 9]));

//TODO: 实现以下去重接口
//@param array: 输入数组
//@param sorted: 输入数组是否已经拍序
//@iteratee: 对数组中的数值进行迭代的函数（迭代后的值用于比较）
const uniqueThird = (array, sorted, iteratee) => {

}

//es6 set
let u = (array) => [...new Set(array)]
console.log(u([1, 2, 1, 8, 1, 1, 2, 1, 9, 9]));
