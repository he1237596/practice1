/**
 * Created by Administrator on 2017/4/28.
 */
/*0.抽取获取标签函数*/
function $(id){
//            return typeof id ==='string'?document.getElementById(id):id;
    return document.getElementById(id);

}

function  scroll(){
    if(window.pageXOffset!= null){//ie9以及新的版本
        /*我们要通过字典访问,所以返回一个字典*/
        return {
            top:window.pageYOffset,
            left:window.pageXOffset
        }
    }
    else if(document.compatMode == 'CSS1Compat'){//符合w3c
        return{
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }
    else{
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
}function  scroll(){
    if(window.pageXOffset!= null){//ie9以及新的版本
        /*我们要通过字典访问,所以返回一个字典*/
        return {
            top:window.pageYOffset,
            left:window.pageXOffset
        }
    }
    else if(document.compatMode == 'CSS1Compat'){//符合w3c
        return{
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }
    else{
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
}
/*抽取函数用来获取对应的浏览器的宽度和高度*/
function client(){
    if(window.innerWidth!= null){//ie9以及最新的版本
        return{
            width:window.innerWidth,
            height:window.innerHeight
        }
    }
    else if(document.compatMode == 'CSS1Compat'){
        return{
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
    else{
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
}

/*用来封装匀速动画*/
function constant(obj,speed,target){

    /*对于timer我们可以使用给对应的标签,扩展属性来设置timer,就不需要使用变量
    * 封装函数的时候,一般不把对应的符号作为参数*/

    clearInterval(obj.timer);
    obj.timer =setInterval(function(){

        /*设定速度*/
        var mySpeed = target>obj.offsetLeft?speed:-speed;



        obj.style.left = obj.offsetLeft +mySpeed +'px';
        /*为了让对应的值不超出最终的值,我们可以使用target- begin和速度比较*/
        if( Math.abs(target -obj.offsetLeft)  < Math.abs(mySpeed)){
            clearInterval(obj.timer);
            obj.style.left =target+'px';
        }

    },10)

}



