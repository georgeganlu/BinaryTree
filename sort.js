
// 冒泡排序。
function maopao(list) {
    let tem = '';
    let len = list.length;
    while (len) {
        for (let i = 0; i < len; i++) {
            if (list[i] > list[i + 1]) {
                tem = list[i + 1];
                list[i + 1] = list[i];
                list[i] = tem;
            }
        }
        len--;
    }
    return list;
}


// 归并排序算法。
function sort(list) {
    if (list.length === 1) {
        return list;
    }
    let middle = Math.floor(list.length / 2);
    let left = list.slice(0, middle);
    let right = list.slice(middle);
    let leftRes = sort(left);
    let rightRes = sort(right);
    return merge(leftRes, rightRes);
}

function merge(left, right) {
    let result = [];    // 产生一个新的数据来连通过while循环来连接两个数组，并比较大小进行排序。    
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }
    return result.concat(left).concat(right);   // 执行完上面的while的话，left和right一定有一个为空。这个是向上合并的过程。 [1, 3, 5, 7, 8, 50, 400] 与 [6, 10, 30, 40, 50];
}



// 快速排序。
function quickSort(list) {
    // 这个时候需要递归调用的函数。
    const sort = (list, left = 0, right = list.length - 1) => {
        if (left >= right) {   // 当输入的子值是left的索引大于等于右边的时候，说时，已经完成了，如果递归没有终止条件，瞬间崩溃。
            return;
        }
        // 不管是那一堆都要选择一个基数
        let i = left;
        let j = right
        let baseVal = list[j];  // 选择一个值作为基准值，正常来说这个值无所谓选取那个位置的。 这里选取了数组最后的一个数。

        while(i < j) {
            while(i < j && list[i] <= baseVal) {  // 找到一个arr[i] 大于基准值的数。
                i++;
            }
            list[j] = list[i];   // 把找到的这个大于基准值的数赋值给最后一个数。
            while(i < j && list[j] >= baseVal) {
                j--;
            }
            list[i] = list[j];
        }
        list[i] = baseVal;
        sort(list, left, i - 1);
        sort(list, i + 1, right);
    }
    const newArr = list.concat();
    sort(newArr);
    return newArr;
}


let list = [];
let times = process.argv[2];
for (let i = 0; i < times; i++) {
    list.push(Math.floor(Math.random() * times));
}


const list1 = list.slice(0);
const list2 = list.slice(0);
const list3 = list.slice(0);

// console.time('maopao')
// console.log(maopao(list1));
// console.timeEnd('maopao')

console.time('guibin');
console.log(sort(list2));
console.timeEnd('guibin');

console.time('quick')
console.log(quickSort(list3));
console.timeEnd('quick')



// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function merge(left, right) {
//     var result = [];
//     while (left.length > 0 && right.length > 0) {
//         if (left[0] < right[0]) {
//             /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }
//     return result.concat(left).concat(right);
// }

// function mergeSort(items) {
//     if (items.length == 1) {
//         return items;
//     }
//     var middle = Math.floor(items.length / 2),
//         left = items.slice(0, middle),
//         right = items.slice(middle);
//     return merge(mergeSort(left), mergeSort(right));
// }

// let times = process.argv[2];

// let list = [];
// for (let i = 0; i < times; i++) {
//     list.push(Math.floor(Math.random() * times))
// }
// console.time('guibin');
// console.log(mergeSort(list));
// console.timeEnd('guibin');

// console.time('maopao')
// console.log(maopao(list));
// console.timeEnd('maopao')