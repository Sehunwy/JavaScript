function mySome(nums,call) {
    //1,获得数组的长度
    var length = nums.length;
    //2,遍历
    for(var i=0;i<length;i++){
        var buffer=nums[i];
        if(call(buffer)){
            return true;
        }
    }
    return false;
}