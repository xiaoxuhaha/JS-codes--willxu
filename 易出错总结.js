/**
 * 基本数据类型与值类型，一个是传值，一个是改变地址。
 *  这种经常拿来考察
 */
function test1(){
	var var6 = [1, 23, 5];   
        function changeValue(obj) {
            obj.pop();
        };
        
        changeValue(var6);
        console.log(var6); //[1, 23]

        var num = 1;
        function changeNum(num) {
            num = num + 1;
        };
        console.log(num); // 1
}
test1();


/**
 *数组类型是Object
 *1、创建数组
 */
	var arr=new Array();
	var arrWidthLength=new Array(1000);
	var arrLikesLiteral=new Array(1,2,3);
　　//--new  其实是可以省略的
/*
　 数组是动态的，无需指定大小
    arr[arr.length]  --尾部添加一个元素
	arr.length-=1   --删除尾部元素
    若要往数组尾添加一个或多个元素，可用push(),
    删除最后一个元素，可用pop(),
　　删除数组头一个元素，可用shif(),
　　delete arr[2] --第三个元素索引不存在，仍然会存在这个位置，值为undefined
　　向数组头添加一个或多个元素，可使用unshift,
 */
var testArry = [1, 2, 3, 4, 5, 6];
var first = testArry.push(7);
console.log(first); // 返回新增的元素值 7

var second = testArry.pop();
console.log(second); //返回最后一个删除的元素值 7
console.log(testArry); //[1, 2, 3, 4, 5, 6]

var three = testArry.shift(); 
console.log(three); //返回数组删除的第一个元素 1
console.log(testArry); //[2, 3, 4, 5, 6]


testArry.unshift('unshift1', 'unshift2'); 
console.log(testArry); //返回新增后的新的数组["unshift1", "unshift2", 2, 3, 4, 5, 6]
     

concatArry= testArry.concat('concat1'); //concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组

console.log(concatArry); //拼接结果数组 [1, 2, 3, 4, 5, 6, "concat1"] 

console.log(testArry);//原来的元素还是不变的[1, 2, 3, 4, 5, 6]


var stringone ="helloworld concat1";
//判断字符串中是否存在某个字符串
var index = stringone.indexOf('concat1');
console.log(index); //返回11（从1开始数到11） 如果要检索的字符串值没有出现，则该方法返回 -1。

var index = stringone.indexOf('doncat1');
console.log(index); //检索出来找不到返回-1


var testArry = [1, 2, 3, 4, 5, 6];
testArry.splice(0, 1);//splice() 方法向/从数组中添加/
console.log(testArry);// [2, 3, 4, 5, 6] 删除项目，然后返回被删除的项目。注释：该方法会改变原始数组。


var testArry = [1, 2, 3, 4, 5, 6];
testArry.splice(0, 1, 'replace1','replace2');//删除项目，然后从删除项目位置开始新增元素。
console.log(testArry);//["replace1", "replace2", 2, 3, 4, 5, 6]




//循环
//数组不可定义为var arr ={1,2,3}; 大括号是对象，中括号是数组，数组虽然也是一个object   数组是对象，对象不一定是数组
//　 { }=>Object.prototype
//　  []=>Array.prototype
var arr =[1,2,3,4,5,6,7,8,9];
for(var i in arr) {
 	console.log(arr[i]);
}
/**
 *　6.五个迭代函数

　　这五个迭代函数是.every .some .filter .forEach  .map他们都有三个参数(item,key,value),key是从0开始计数，后两个参数可选用。

　　. every()      对数组中的每一项运行给定的函数，如果该函数对每一项都返回true，则返回true   

　　. some()      对数组中的每一项运行给定的函数，如果该函数对任意一项返回true，则返回true  

　　. filter()       对数组中的每一项运行给定的函数，返回该函数返回true的项组成的数组，不会影响原函数

　　. forEach()   对数组中的每一项运行给定的函数，这个方法没有返回值  

　　. map()        对数组中的每一项运行给定的函数，返回每次函数调用的结果组成的数组，不会影响原函数
 *
 *
 * 
 */

var testArry = [1, 2, 3, 4, 5, 6];
var isAllBig2 = testArry.every(function (item) {
return item > 2;
});
console.log(isAllBig2); //false

var isSomeBig2 = testArry.some(function (item) {
return item > 2;
});
console.log(isSomeBig2);//true

var filterArray = testArry.filter(function (item) {
return item > 2;
});
console.log(filterArray);//[3, 4, 5, 6]

var mapArray = testArry.map(function (item) {
return item + 2;
});
console.log(mapArray);//[3, 4, 5, 6, 7, 8]

var forEachResult = testArry.forEach(function (item) {
if (item >5) {
    console.log(item); //只输出6
}
});



var arr=[1,2,3];  arr.reverse();  

console.log(arr);//---[3,2,1]



//Array.prototype.slice  返回部分数组　　　  
// 　　　　 var arr=[1,2,3,4,5];
// 　　　　 arr.slice(1,3); --- 2,3  左开右闭区间 ，若省略第二个参数，表示删除index后面所有的元素
// 　　　　 arr.slice(1,-1); --- 2,3,4  -1表示从最后一个元素






//hasOwnProperty：是用来判断一个对象是否有你给出名称的属性或对象。不过需要注意的是，此方法无法检查该对象的原型链中是否具有该属性，该属性必须是对象本身的一个成员。