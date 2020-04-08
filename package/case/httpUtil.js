
/**
 * Created by xupuxin on 2018/4/19.
 */
/**
 * 封装联网方式
 * @param type
 * @param url
 * @param params
 * @param callback
 * @returns {*}
 */
const baseUrl='http://203.3.87.25:5566/'//'http://92.99.8.181:5566/'//'http://192.168.1.126:5566/'//
const GET = 'GET';
const POST = 'POST';
$.xhrPool = [];
$.abortAll = function() {
  $(this).each(function(idx, jqXHR) {
    jqXHR.abort();
  });
  $.xhrPool = [];
};
$.ajaxSetup({
  // data:{
  //   "tokens": $.session.get('token')
  // },
  beforeSend: function(jqXHR) {
    $.xhrPool.push(jqXHR);
  },
  complete: function(XMLHttpRequest, textStatus) {
    // try {
    //   if(XMLHttpRequest.responseText && XMLHttpRequest.responseText.indexOf("errcode")>0){
    //     var json = $.parseJSON(XMLHttpRequest.responseText);
    //     var notlogin = json.errcode;
    //     if(notlogin=='-2'){
    //       $.session.set('userId', '');
    //       $.session.set('userName', '');
    //       $.session.set('token', '');
    //       $.ajax({
    //         type: "get",
    //         url: url+'login/logout',
    //         dataType: "json",
    //         success:function(data){
    //           if(data.errcode!=-1){
    //           }
    //         },
    //         error:function(){}
    //       });
    //       top.location.href = "login.html";
    //       $.xhrPool.abortAll();
    //       return;
    //     }
    //   }
    // } catch(e) {};
  }
});
function httpConnect(type, url, params, callback,error) {
  console.log('c')
  return $.ajax({
    type: type ? type : 'GET',
    url: baseUrl+url,
    data: params,
    contentType:type=="POST" || type=="post"?"application/json;charset=UTF-8":"application/x-www-form-urlencoded;charset=UTF-8",
    //返回数据格式为json
    dataType: "json",
    scriptCharset: 'utf-8',
    success: function (data) {
      if (typeof callback == 'function') {
        callback(data);
      }

    }, error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest)
      console.log(textStatus)
      console.log(errorThrown)
      error(XMLHttpRequest);
    }
  });

}
export  default
{
  GET,
  POST,
  httpConnect,
}
