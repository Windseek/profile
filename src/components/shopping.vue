<@fn.weixin css=["${basePath}/weixin/css/platformtec/material_manage.css${versionControl}"]
script=["${basePath}/weixin/js/iscroll.js${versionControl}","${basePath}/weixin/js/platform/tec/material_manage.js${versionControl}"] title="积分兑换">
<body>
<div class="page">
  <div class="page-material" id="material_page">
    <div class="list-model" style="position:relative;height:100%;width:100%;">
      <listul></listul>
      <totalMessage></totalMessage>
      <btngroup></btngroup>
      <empty></empty>
    </div>
    <#include "/include/weixin/tec_shop_footbar.ftl"/>
  </div>
  <template id="list_template">
    <ul class="material_ul" id="list" v-cloak>
      <li class="material_li" v-for="(material, index) in listMaterial">
        <label class="label-checkbox item-content">
          <input type="checkbox" name="check" class="check" v-model="material.toggle" v-on:change.stop="select($event, index)">
          <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
        </label>
            <span class="message-opt">
                    <span class="span message"><span class="brand" style="font-weight: bold;">{{material.code}}&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="message" style="font-weight: bold;">{{material.name}}</span><span class="unit" style="float:right;padding-right:15px;">单位：{{material.unit}}</span></span>
                    <span class="span opt">
                        <span class="unit">智七币：{{material.coin}}</span>
                    <span class="opt-amount">
                    <span class="minus" v-on:click.stop="minus($event, index)">－</span>
                    <input type="number" class="number-input" v-model="material.applyCount" v-on:keyup="keyup($event, index)" v-on:keydown="keyup($event, index)" v-on:focus="focus" v-on:blur="blur($event, index)">
                    <span class="plus" v-on:click.stop="plus($event, index)">＋</span>
                    <span v-on:click="remove(index)">
                    <img src="/weixin/images/remove.svg" class="remove" style="display:none;">
                    <span class="remove-word" style="visibility: hidden;">移除</span>
                    <span>
                    </span>
                </span>
      </li>
    </ul>
  </template>
  <template id="total-message_template">
    <div class="total-message"><span>当前可用智七币： {{coin}}</span>&nbsp;&nbsp;<span>本次兑换智七币： {{cointouser}}</span></div>
  </template>
  <template id="btn_group_template">
    <div class="btn-group">
      <label class="label-checkbox item-content" v-show="isshow">
        <input type="checkbox" name="check" v-model="toggle" v-on:change.stop="selectAll($event)">
        <div class="item-media"><i class="icon icon-form-checkbox all-select"></i></div>
        <span class="select-all">全选</span>
      </label>
      <span class="submit" v-on:click.stop="create" v-show="isshow"  v-on:click.stop="create">去结算</span>
    </div>
  </template>
  <template id="empty_template">
    <div class="empty" style="height:100%;width:100%;"  v-show="isempty">
      <#include "/include/weixin/empty.ftl"/>
    </div>
  </template>
</div>
<div class="popup" id="popupDetail" style="display:none;">
  <div class="popupcontent">
    <div class="address-header">
      收货地址：
    </div>
    <ul class="address">
      <li class="address-li">
        <span class="address-title">收货人姓名：</span><input type="text" v-model="platformTecReceiveAddress.receiveName" >
      </li>
      <li class="address-li">
        <span class="address-title">收货人手机：</span><input type="text" v-model="platformTecReceiveAddress.receiveMobile" >
      </li>
      <li class="address-li">
        <span class="address-title">区域选择：</span><input type="text" class="area-select">
      </li>
      <li class="address-li">
        <span class="address-title">详细地址：</span><input type="text" v-model="platformTecReceiveAddress.receiveAddress">
      </li>
    </ul>
    <div class="material-detail-header">
      商品详情：
    </div>
    <div class="material-detail-div">
      <ul class="material-detail-ul">
        <li class="material-detail-li" v-for="(material, index) in orderMaterialList">
          <span class="material-detail-span"><span class="material-detail-title">{{material.code}}&nbsp;&nbsp;&nbsp;&nbsp;{{material.name}}</span><span class="material-detail-unit">单位：{{material.unit}}</span></span>
          <span class="material-detail-span"><span>智七币：{{material.coin}} </span><span class="material-detail-unit">数量：{{material.quantity}}</span></span>
        </li>
      </ul>
    </div>
  </div>
  <div class="total-message"><span>当前可用智七币：{{datacoin.coin}}</span>&nbsp;&nbsp;<span>本次兑换智七币：{{datacoin.cointouser}}</span></div>
  <div class="btn-group">
    <span class="cancel">返回</span>
    <span class="submit" style="float:right;">提交订单</span>
  </div>
</div>
</body>
</@fn.weixin>
#material_page{background:white;height:calc(100%);overflow:hidden;}
#material_page .code{display:inline-block;margin-right:7px;}
.material_title{height:36px;line-height:36px;text-align:right;padding-right:10px;background:rgb(71,120,199);color:white;font-family: "Microsoft YaHei";font-size:14px;}
ul{margin:0px;padding:0px;height:calc(100% - 150px);overflow: auto;}
li{list-style: none;background:none;height:50px;margin-top:10px;}
.message{font-family:"Microsoft YaHei";}
.label-checkbox,.message-opt{float:left;width:50px;}
label.label-checkbox i.icon-form-checkbox{display:block;margin:0 auto;}
label.label-checkbox{margin-top:12px;}
.message-opt{width:calc(100% - 50px);font-size:14px;line-height:25px;padding-bottom:10px;border-bottom:1px solid #e1e1e1;}
.opt{display:inline-block;width:calc(100% - 10px)}
.opt .unit{float:left;}
.opt .opt-amount{float:right;}
.opt .minus,.opt .plus{display:inline-block;width:25px;height:25px;border-radius: 4px 0 0 4px;border:1px solid #999999;float:left;text-align:center;font-size:20px;padding:0px;line-height:20px;color:#999;font-weight: 900;}
.opt .plus{border-radius: 0 4px 4px 0;}
.opt .number-input{width:50px;height:25px;text-align:right;float:left;}
.opt .remove, .opt .remove-word{color:#999;float:left;margin-left:3px;display:inline-block;}
.opt .remove{height:23px;width:20px;vertical-align:middle;margin-left:10px;}
.page-material-select{height:100%;width:100%;position:absolute;top:0px;left:0px;}
.btn-group{height:50px;line-height: 30px;margin-top:14px;}
.btn-group .label-checkbox{float:left;width:calc(100% - 97px);margin-top:0px;}
.btn-group .select-all,.btn-group input,.btn-group .item-media{display:inline-block;float:left;height:35px;line-height: 40px;}
.btn-group .item-media{margin-top:7px;padding-left:15px;padding-right:15px;}
.btn-group .submit,.btn-group .cancel{border-radius:4px;text-align:center;display:inline-block;color:white;font-family:"Microsoft YaHei";margin-right:3px;height:30px;width:90px;background:rgb(71,120,199);}
.on{}
.total-message{font-size:14px;text-align:center;line-height: 30px;background:rgb(242,242,242);}
/*收货地址*/
#popupDetail{padding:15px 15px 0 15px;  font-size:14px;overflow:hidden;}
.address{padding:0 15px 15px 15px;height:auto;}
.address-li{line-height:30px;height:auto;}
.address input{border-radius:4px;border:1px solid #ccc;padding-left:3px;}
.address-title{width:100px;display:inline-block;}
.address-header,.material-detail-header{border-bottom:1px solid #ccc;line-height:30px;}
.material-detail-ul{height:auto;}
.material-detail-li{border-bottom:1px solid #ccc;height:65px;}
.material-detail-span{display:block;line-height:30px;}
.material-detail-unit{float:right;}
.material-detail-title{font-weight:bold;}
.popupcontent{height:calc(100% - 90px);overflow-y:auto;}
$(function(){
var listPreparedPurchasingMaterial = [];
var datacoin={coin:"",cointouser:"0"};
var popupDetaildata={
platformTecReceiveAddress:{
"cityName": "",
"dataCreateTime": "",
"dataCreatedByName": "",
"dataDiscardStatus": "",
"dataUpdateTime": "",
"dataUpdatedByName": "",
"districtName": "",
"id": "",
"memberId": "",
"provinceName": "",
"receiveAddress": "",
"receiveMobile": "",
"receiveName": ""
},
orderMaterialList:[],
datacoin:datacoin
};
$.utils.post({
async:false,
dataType:"json",
contentType:"Application/json",
url: "/weixin/platform/tec/receive_address/list",
normalCallback:function(data){
if(data.data){
popupDetaildata.platformTecReceiveAddress.cityName=data.data.cityName;
popupDetaildata.platformTecReceiveAddress.districtName=data.data.districtName;
popupDetaildata.platformTecReceiveAddress.provinceName=data.data.provinceName;
popupDetaildata.platformTecReceiveAddress.receiveAddress=data.data.receiveAddress;
popupDetaildata.platformTecReceiveAddress.receiveMobile=data.data.receiveMobile;
popupDetaildata.platformTecReceiveAddress.receiveName=data.data.receiveName;
popupDetaildata.platformTecReceiveAddress.memberId=data.data.memberId;
}
}
})
var data={listMaterial:[],oldValue: 1,};
var btndata={
isshow:true,
toggle: false,
};
var emptydata={isempty:false,};
// 列出购物车物料
$.utils.post({
data: JSON.stringify({
}),
url: '/weixin/platform/tec/material/list',
successCallback: function(res) {
$.each(res.data.list, function(index, item){
item.toggle = false;
item.applyCount=1;
});
datacoin.coin=res.data.coin;
var list=res.data.list;
data.listMaterial = res.data.list;
}
});

var ulcomponent=Vue.component('listul', {
template: '#list_template',
data: function(){
return data;
},
updated:function(){
if(data.listMaterial.length){
btndata.isshow=true;
emptydata.isempty=false;
}
else{
btndata.isshow=false;
emptydata.isempty=true;
}
},
methods:{
plus: function(event, index){
var value = Number(data.listMaterial[index].applyCount||0);
value+=1;
if(!/^\d{1,3}$/g.test(value)){
$.confirm("警告框","输入框最多输入3位");
return;
}
data.listMaterial[index].applyCount = value;
// 数量更新
Vue.set(data.listMaterial, index, data.listMaterial[index]);
if(data.listMaterial[index].toggle){
totalUpdate(1,data.listMaterial[index].coin);
}
},
minus: function(event, index){
var value = data.listMaterial[index].applyCount||0;
if(value==1){
$.confirm("警告框","输入框数量不能小于1");
return;
}
value=value-1;
data.listMaterial[index].applyCount = value;
Vue.set(data.listMaterial, index, data.listMaterial[index]);
if(data.listMaterial[index].toggle){
totalUpdate(-1,data.listMaterial[index].coin);
}
},
focus: function(event){
var target = event.target;
var value = $(target).val();
this.oldValue = value;
},
keyup: function(event, index){
var target = event.target;
var value = $(target).val();
if($.trim(value) == ""){
return;
}
},
blur: function(event, index){
var target = event.target;
var value = $(target).val();
data.listMaterial[index].applyCount = value;
Vue.set(data.listMaterial, index, data.listMaterial[index]);
if($.trim(value) < 1){
$.confirm("警告框","输入框数量不能小于1");
data.listMaterial[index].applyCount = 1;
Vue.set(data.listMaterial, index, data.listMaterial[index]);
return;
}
if(!/^\d{1,3}$/g.test(value)){
$.confirm("警告框","输入框最多输入3位");
data.listMaterial[index].applyCount = this.oldValue;
Vue.set(data.listMaterial, index, data.listMaterial[index]);
//this.listMaterial[index].applyCount = this.oldValue;
return;
}
if(data.listMaterial[index].toggle){
datacoin.cointouser=Number(datacoin.cointouser)-Number(data.listMaterial[index].coin)*Number(this.oldValue);
totalUpdate(value,data.listMaterial[index].coin);
}
},
select: function(event, index, select){
if(event.target.checked){
data.listMaterial[index].toggle=true;
totalUpdate(data.listMaterial[index].applyCount||0,data.listMaterial[index].coin);
}else{
data.listMaterial[index].toggle=false;
totalUpdate(-data.listMaterial[index].applyCount||0,data.listMaterial[index].coin);
}
var selectall="select";
_.each(data.listMaterial,function(obj){
if(obj.toggle == false){
selectall="";
}
})
btndata.toggle=selectall=="select"?true:false;
}
}
});
var btncompoent=Vue.component('btngroup',{
"template":'#btn_group_template',
data: function(){
return btndata
},
methods: {
selectAll: function(event){
var toggle=this.toggle;
for(var i = 0; i < data.listMaterial.length; i ++){
data.listMaterial[i].toggle = toggle;
}
if(this.toggle) {
for (var i = 0; i < data.listMaterial.length; i++) {
totalUpdate(data.listMaterial[i].applyCount || 0, data.listMaterial[i].coin || 0);
}
}else{
for (var i = 0; i < data.listMaterial.length; i++) {
totalUpdate(-data.listMaterial[i].applyCount || 0, data.listMaterial[i].coin || 0);
}
}
},
create: function() {
if(datacoin.coin<datacoin.cointouser){
$.alert("本次兑换智七币能大于当前可用智七币");
return;
}
var submitflag=false;
for(var i=0;i<data.listMaterial.length;i++){
if(data.listMaterial[i].applyCount&&data.listMaterial[i].toggle){
submitflag=true;
}
}
if(!submitflag){
$.alert("必须选择商品且商品数量大于1");
return
}
$.popup("#popupDetail");
popupDetaildata.orderMaterialList=[]
for(var i=0;i<data.listMaterial.length;i++){
if(data.listMaterial[i].toggle&&data.listMaterial[i].applyCount>0){
var obj={};
obj.id=data.listMaterial[i].id;
obj.quantity=data.listMaterial[i].applyCount||0;
obj.coin=data.listMaterial[i].coin;
obj.name=data.listMaterial[i].name;
obj.code=data.listMaterial[i].code;
obj.unit=data.listMaterial[i].unit;
popupDetaildata.orderMaterialList.push(obj);
}
}
}
}
});
var emptycompoent=Vue.component('empty',{"template":'#empty_template',data:function(){
return emptydata;
}})
var totalMessageCompoent=Vue.component('totalmessage',{"template":'#total-message_template',
data:function(){
return datacoin;
},
methods: {
}
})
var $list=new Vue({
el: ".list-model",
methods:{
}
});
function totalUpdate(price,amount){
datacoin.cointouser=Number(price)*Number(amount)+Number(datacoin.cointouser);
}
//popup的vue数据绑定
var popupDetailVue=new Vue({
el: "#popupDetail",
data:function(){
return popupDetaildata;
}
});
//popup 页面取消
$(document).on("click",".btn-group .cancel",function(){
$.closeModal("#popupDetail")
})
//省市区绑定
if(popupDetaildata.platformTecReceiveAddress.provinceName){
$(document).find($(".area-select")).attr("value",popupDetaildata.platformTecReceiveAddress.provinceName+" "+popupDetaildata.platformTecReceiveAddress.cityName+" "+popupDetaildata.platformTecReceiveAddress.districtName);
}
$(document).find($(".area-select")).cityPicker({
toolbarTemplate: '<header class="bar bar-nav">\
  <button class="button button-link pull-right close-picker">确定</button>\
  <h1 class="title">选择收货地址</h1>\
</header>'
});
//提交订单
$("#popupDetail .submit").off("click").on("click",function(){
var address=$(".area-select").val();
var addressarr=address.split(" ");
popupDetaildata.platformTecReceiveAddress.provinceName=addressarr[0];
popupDetaildata.platformTecReceiveAddress.cityName=addressarr[1];
if(addressarr[2]){
popupDetaildata.platformTecReceiveAddress.districtName=addressarr[2];
}
$.confirm("确定要提交吗",function(){
$.utils.post({
dataType:"json",
contentType:"Application/json",
url: "/weixin/platform/tec/order/create",
data:JSON.stringify(popupDetaildata),
normalCallback:function(data){
$.alert("保存成功");
window.location.href =  '/weixin/platform/tec/order/manage';
}
})
})
});
});
$(function(){
show_default_button($(".a-application-list"));
})
