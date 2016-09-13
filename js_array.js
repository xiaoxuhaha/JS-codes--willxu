// js数组操作方法总结

//判断数值数组中各个数字出现的奇偶次数
    <script type="text/javascript">
        var arr=[3,1,2,2,1,3,1];
        var sum=[];
        var res=[];
        var count=0;
        var temp;
        for(var i=0;i<arr.length;i++){
            if(res.indexOf(arr[i])==-1){
                res.push(arr[i]);
            }
        }
        for(var i=0;i<res.length;i++){
            for(var j=0;j<arr.length;j++){
                if(arr[j]==res[i]){
                    count++;
                }
            }
            sum.push(count);
            count=0;
        }
        console.log(res);//[3,1,2]
        for(var i=0;i<res.length;i++){
            var str=(sum[i]%2==0)?"偶数":"奇数";
            console.log(res[i]+"出现了"+sum[i]+"次");
            console.log(res[i]+"出现了"+str+"次");
        }
    </script>


//数组操作-找出两个数组中不同的元素

<script type="text/javascript">  
    function diff(arr1,arr2){  
    var ress = [];  
    var arr = arr1.concat(arr2);  
    for(var i=0,len=arr.length;i<len;i++){  
          if((arr1.indexOf(arr[i])>=0 && arr2.indexOf(arr[i])<0) || (arr1.indexOf(arr[i])<0 && arr2.indexOf(arr[i])>=0)){  
                ress.push(arr[i]);  
          }  
    }  
    return ress;  
}  
var arr1 = [1,2,3,5,7,6];  
var arr2 = [1,2,5];  
var res = diff(arr1,arr2);  
console.log(res);//[3, 7, 6]  
</script>  

//数组去重
<script type="text/javascript">  
    //给数组原型添加方法  
        Array.prototype.unique = function(){  
            var arr = [];  
            for(var i=0,i=this.length;i<len;i++){  
                if(arr.indexOf(this[i]) == -1){  
                    arr.push(this[i]);  
                }  
            }  
            return arr;  
        };  
        console.log([1,2,3,2,5,6,3].unique());//[1, 2, 3, 5, 6]  
    </script>  

//法二
<script type="text/javascript">  
        Array.prototype.unique = function(){  
        var n = {},  
                r=[]; //n为哈希表，r为临时数组  
        for(var i = 0; i < this.length; i++) //遍历当前数组  
        {  
            if (!n[this[i]]) //如果hash表中没有当前项  
            {  
                n[this[i]] = true; //存入哈希表  
                r.push(this[i]); //把当前数组的当前项push到临时数组里面  
            }  
        }  
        return r;  
    }  
    console.log([1,2,3,2,5,6,3].unique());//[1, 2, 3, 5, 6]  
    </script>      