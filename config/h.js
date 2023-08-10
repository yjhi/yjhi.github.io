function GetUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

    var r = window.location.search.substr(1).match(reg);

    if (r != null) return unescape(r[2]);
    return null;
}

function GetBaseUrl(t){
  if(t=="y"){
     return "https://y.hhvy.cn:81";
  }else if(t=="a"){
     return "https://a.hhvy.cn:18088";
  }
  
  return  window.location.protocol + '//' + window.location.host;    
}

function GetRequestUrl(){
   return  window.location.protocol + '//' + window.location.host;    
}

