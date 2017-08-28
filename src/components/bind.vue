<@fn.weixin css=["${basePath}/weixin/css/platformtec/tec_bind.css${versionControl}"]
script=["${basePath}/weixin/js/platform/tec/tec_bind.js${versionControl}","http://res.wx.qq.com/open/js/jweixin-1.2.0.js${versionControl}"] title="技师注册">
<body>
<div>
  <div id="headPortrait">
    <img class='card-cover' src="/images/workbench/user.png" />
  </div>
  <div class="tec_message">
    <form>
      <ul style="list-style:none;">
        <li><span class="span-left">姓名</span><span class="span-right"><input type="text" id="name"/></span></li>
        <li><span class="span-left">性别</span><span class="span-right"><select id="sex"><option value ="男">男</option><option value ="女">女</option></select></li>
        <li><span class="span-left">手机号</span><span class="span-right"><input type="text" id="mobile"/></span></li>
        <li><span class="span-left">验证码</span><span class="span-right"><input type="text" class="registerInput" id="verifyCode"/><div id="verifycodeBtn" class="item-media" style="padding:0px 0px 0px 10px;color:#4778c7;">获取验证码</div></span></li>
      </ul>
    </form>
  </div>
  <div class="buttonGroup">
    <button class="button" id="registerButton">提交注册</button>
  </div>
</div>
</body>
</@fn.weixin>
body{background:white;}
#headPortrait{
width:80px;
height:80px;
border-radius:50%;
background:#ccc;
margin:0 auto;
margin-top:20px;
}
#headPortrait img{height:100%;width:100%;border-radius:50%;}
input{border-radius:4px;border:1px solid #ccc;height:25px;width:90%;padding-left:5px;}
.registerInput{width:35%;}
ul{padding:0px;width:78%;margin:0 auto;font-size:12px;margin-top:20px;}
ul li{height:35px;margin-top:5px;}
.span-left{
display:inline-block;
width:55px;
}
.span-right{
display:inline-block;
width:calc(100% - 55px);
}
#verifycodeBtn{display:inline-block;font-size:12px;}
.buttongroup{top:40px;position:relative;}
.buttongroup .button{display:block;width:80%;height:40px;background:rgb(71,120,199);color:white;border:none;margin:0 auto;}
#sex{border:1px solid #ccc;border-radius:4px;width:80px;height:25px;}
$(function(){
function wxconfig(){
wx.config({
debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
appId: appId, // 必填，公众号的唯一标识
timestamp: timestamp, // 必填，生成签名的时间戳
nonceStr: nonceStr, // 必填，生成签名的随机串
signature: signature,// 必填，签名，见附录1
jsApiList: [
'chooseImage',
'uploadImage',
'downloadImage'
]
});
};
$.utils.get({
url:  "/weixin/platform/tec/weixin/jssdk?url=" + location.href.split('#')[0],
normalCallback: function(data) {
appId = data.data.appId;
timestamp = Number(data.data.timestamp);
nonceStr = data.data.nonceStr;
signature= data.data.signature;
wxconfig();
}
});


var headImgUrl;
//上传头像
$("#headPortrait").click(
function(e){
wx.ready(function () {
//拍照或从手机相册中选图接口
wx.chooseImage({
count: 1, // 最多能选择多少张图片，默认9
sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
success: function (res) {
var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
var localIdImg=localIds.toString().split(",");
//上传图片接口
if (localIdImg.length == 0) {
return;
}
function upload() {
wx.uploadImage({
localId: localIds[0],
isShowProgressTips: 1,
success: function (res) {
$.utils.post({
ajaxloading:true,
url:  "/weixin/platform/tec/weixin/upload?appid=" + $.commonCookie.getPlatformTecAppid()+"&media_id="+res.serverId,
normalCallback: function(data) {
//$.alert(JSON.stringify(data));
if(data){
$(".card-cover").attr("src",data.data);
headImgUrl = data.data;
}
}
});
},

fail: function (res) {
$.alert("上传失败，请重试");
}
});
};
upload();
}
});

});
}
);
//发送验证码
var fn_handle = $("#verifycodeBtn");
function sent_code() {
var mobile = $("#mobile").val();
var verifyCode = $("#verifycode").val();
var _Reg = /^0?(13[0-9]|15[012356789]|18[0-9]||17[0-9]|14[57])[0-9]{8}$/;
if (!_Reg.test(mobile)) {
$("#mobile").focus();
$.alert("手机号码不正确！");
return ;
}
//倒计时
$.utils.get({ url:'/weixin/platform/tec/bind/getVerifyCode?mobile='+mobile,
normalCallback:function(data){
if(data.returnCode === 0){
fn_handle.unbind("click");
loopVerify(1);

//$("#verifycode").val(data.data);
}

}
});


}
fn_handle.bind("click", sent_code);
function loopVerify(seconds) {
if (seconds == 60) {
fn_handle.bind("click", function () { sent_code(); }).text("获取验证码");
}
else {
fn_handle.text((60 - (seconds++)) + "秒后重新获取")
setTimeout(function () { loopVerify(seconds) }, 1000);
}
}
//注册
$("#registerButton").click(
function(){
var mobile=$("#mobile").val();
var verifyCode=$("#verifyCode").val();
var name=$("#name").val();
var sex=$("#sex").val();
var headImgUrl=$(".card-cover").attr("src");
if(!name){
$.alert("请输入姓名");
return;
}
if(!sex){
$.alert("请输入性别");
return;
}
if(!mobile){
$.alert("请输入手机号");
return;
}
if(!verifyCode){
$.alert("验证码不能为空");
return;
}

var postdata={
mobile:mobile,
verifyCode:verifyCode,
name:name,
sex:sex,
headImgUrl:headImgUrl
}
$.utils.post({
url: '/weixin/platform/tec/bind/openid?mobile='+mobile+"&verifyCode="+verifyCode+"&name="+name+"&sex="+sex + "&headImage="+headImgUrl,
successCallback: function (data) {
$.alert("注册成功",function(){
window.location.replace("/weixin/platform/tec/tecInfoPage");
})
}
})
}
)
})
