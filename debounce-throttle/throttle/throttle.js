//throttle需求来源：
//我们有一个callback函数（更新数据和dom），往往会将其绑定在某个event上，在event触发的时候由浏览器调用
//然而当event触发频率过高的时候，我们希望在设置好的时间间隔内只调用一次callback函数

//全局数据存储
var container = document.getElementById('container');
var count = 0;

//callback函数：递增count并更新dom
function increment(){
    container.innerHTML = count++;
}

//需求1: 不使用throttle封装，直接讲callback函数绑定在mousemove这个event上
container.onmousemove = increment;


//需求2: 使用时间戳实现一个throttle函数，要求：event第一次触发时调用一次callback，
//event最后一次触发后不再调用
function throttleFirst(callback, wait){
    let prev = 0;
    return function(){
        let context = this;
        let cur = +new Date();
        if (cur - prev >= wait){
            callback.call(context);
            prev = cur;
        }
    }
}

container.onmousemove = throttleFirst(increment, 1000);

//需求3: 使用setTimeout实现throttle，特点：event第一次触发后wait时间内调用第一次callback
//event最后一次触发后会再调用一次callback
function throttleSecond(callback, wait){
    let timeout = null;
    return function(){
        let context = this;
        if(!timeout){
            timeout = setTimeout(function(){
                callback.call(context);
                timeout = null;
            }, wait);
        }
    }
}

container.onmousemove = throttleSecond(increment, 1000);


//需求4: 结合两种实现方式，特点：event第一次触发时会调用一次callback，最后一次触发后会再调用一次callback

//实现思路：
//event触发进入函数后有两种状态：此次event应该调用callback（时间已经到了），或此次event不应该调用callback
//通过时间戳来判断这次event是哪一个状态
//前者：直接调用并且取消等待中的timeout
//后者：尝试setTimeout
function throttleThird(callback, wait){

    let prev = 0;
    let timeout = null;

    return function(){
        let context = this;
        let cur = +new Date();
        //状态1
        if (cur - prev >= wait){
            if(timeout){
                clearTimeout(timeout);
                timeout = null;
            }
            callback.call(context);
            prev = cur;
        } else{
            //状态2
            if(!timeout){
                timeout = setTimeout(callback, wait);
            }
        }
    }    
}

container.onmousemove = throttleThird(increment, 1000);