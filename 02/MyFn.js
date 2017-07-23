/**
 * Created by Administrator on 2017/4/28.
 */
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

};
var myFn = {
    $:function(tagId){
        return  document.getElementById(tagId);
    },
    getSymByTagName:function(dom,tagName){
        return   dom.getElementsByTagName(tagName);
    },
    each:function(doms,fn){
        for(var i = 0;i<doms.length;i ++ ){
            fn(doms[i]);
        }
    }
}
