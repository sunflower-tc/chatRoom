/**
 * Created by sunflower on 2016/8/27.
 */
angular.module('chat').factory('socket',function(){
      var socket=io.connect('/');
     return {
         on:function(event,listener){
             socket.on(event,listener);

         },
         emit:function(event,data){
                socket.emit(event,data)
         }
     }
})