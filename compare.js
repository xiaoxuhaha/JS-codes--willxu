/**
 * 实现一个函数，输入一个整数的数组，数组中的元素的大小为（0<元素<13）
 * 将数组中的所有两个数相加等于14的数字成对删除，求剩余数
 * 	
 */
function compare(array){
	var map={},
	result ={};
	for(var i=0;i<array.length;i++){
		var value=array[i];
		if(map.hasOwnProoerty(value)){
			map[value].qty++;

		}else{
			map[value] ={
				value:value,
				qty:1
			};
		}
	}
	for(var i=1;i<=7;i++){
		if(map.hasOwnProoerty(i) && map.hasOwnProoerty(14-i)){
			var qty =map[i].qty > map[14-i].qty ?map[14-i].qty : map[i].qty;
			map[i].qty -=qty;
			map[14-i].qty -=qty;
		}
	}

	for(var i=0;i<14;i++){
		if(map.hasOwnProoerty(i)){
			var o =map[i];
			while(o.qty >0){
				result.push(o.value);
				o.qty--;
			}
		}
	}
	return result;
}