<@fn.weixin css=["${basePath}/weixin/css/platformtec/order_manage.css${versionControl}"]
script=["${basePath}/weixin/js/iscroll.js${versionControl}","${basePath}/weixin/js/platform/tec/order_manage.js${versionControl}"] title="兑换历史">
<div class="page">
  <div class="empty"  v-show="isempty">
    <#include "/include/weixin/empty.ftl"/>
  </div>
  <div id="wrapper">
    <div id="scroller">
      <!-- content应该拥有"pull-to-refresh-content"类,表示启用下拉刷新 -->
      <div class="content pull-to-refresh-content infinite-scroll infinite-scroll-bottom" data-distance="100" data-ptr-distance="55">
        <!-- 默认的下拉刷新层 -->
        <div class="pull-to-refresh-layer">
          <div class="preloader"></div>
          <div class="pull-to-refresh-arrow"></div>
        </div>
        <!-- 下面是正文 -->
        <div class="list-block">
          <ul class="list" id="list" v-cloak>
            <li class="materials_row" v-for="(materialApply, index) in listMaterialApply" v-on:click="detail(index)">
              <div class="time-message">
                <span class="span time">{{materialApply.date}}</span>
                <span class="span week">{{materialApply.week}}</span>
              </div>
              <div class="materials_message">
                <span class="span materials_amount">{{materialApply.orderNo}}</span>
                <span class="span materials_code">共<span style="color:blue;">{{materialApply.orderQuantity}}</span>件商品</span>
              </div>
              <div class="materials_status" style="display:none;">
                <span class="span" :class=materialApply.statusStyle>{{materialApply.statusName}}</span>
                <span class="span secondary_apply" v-on:click.stop="drawAgain(index)" v-show="materialApply.enableDrawAgain">再次申请</span>
              </div>
            </li>
          </ul>
        </div>
        <!-- 加载提示符 -->
        <div class="infinite-scroll-preloader">
          <div class="preloader"></div>
        </div>
      </div>
      <#include "/include/weixin/tec_shop_footbar.ftl"/>
    </div>
  </div>
</div>
<div class="materials_detail-mask" id="detail">
  <div class="materials_detail">
    <div class="materials_wrap">
      <div class="detail_message">
        <ul class="ul detail_message-ul">
          <li class="li detail_message-li"><span class="span">订单编号: </span><span class="span">{{materialApply.orderNo}}</span></li>
          <li class="li detail_message-li"><span class="span">订单时间: </span><span class="span">{{materialApply.orderTime}}</span></li>
          <li class="li detail_message-li"><span class="span">订单状态: </span><span class="span">{{materialApply.orderStatus}}</span></li>
          <li class="li detail_message-li" style="margin-bottom:10px;"><span class="span">智七币: </span><span class="span">{{materialApply.orderCoin}}</span></li>
          <li class="li detail_message-li"><span class="span">收货人: </span><span class="span">{{materialApply.orderDeliveryName}}</span></li>
          <li class="li detail_message-li"><span class="span">收货人手机: </span><span class="span">{{materialApply.orderDeliveryMobile}}</span></li>
          <li class="li detail_message-li"><span class="span">收货人地址: </span><span class="span">{{materialApply.orderDeliveryAddress}}</span></li>
        </ul>
        <span class="message_title">{{materialApply.statusName}}</span>
      </div>
      <div class="detail_list">
        <ul class="ul detail_list-ul">
          <li class="li detail_list-li" v-for="(material, index) in listMaterial">
                        <span class="span span-brand">
                            <span class="message">{{material.materialName}}</span>&nbsp;&nbsp;<span class="brand" style="float:right;">单位：{{material.materialUnit}}</span></span>
            </span>
                        <span class="span span-amount">
                            <span class="span span-apply-amount">订单数量 :</span><span class="span-apply-val acount">{{material.materialQuantity}}</span><span>|</span>
                            <span class="span span-price">智七币 :</span><span class="span-price-val">{{material.materialCoin | toFixed(0)}}</span>
                        </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="materials_btn_group">
      <div class="btn btn-back active" v-on:click="hide">关闭</div>
    </div>
  </div>
</div>
</@fn.weixin>
/*物料管理列表页面*/
.content{height:100%;}
.list-block{margin:0px;}
#wrapper{height:calc(100%);overflow: auto;position:relative;}
ul{padding:0px;margin:0px;width:100%;overflow: auto;font-size:14px;font-family: "Microsoft YaHei"}
li{list-style:none;}
.bar .searchbar{padding:0.4rem 0.7rem;}
.bar .searchbar .search-input input{padding-left:40px;border-radius:0px;}
.materials_row{background:white;font-size:12px;height:83px;width:100%;padding-top:24px;border-bottom:1px solid rgb(236,236,236);}
.materials_row .span{display:block;text-align:center;}
.time-message,.materials_message,.materials_status{display:inline-block;height:36px;float:left;}
.time-message{width:20%;border-right:1px solid rgb(236,236,236);color:#999999;}
.time-message .week{font-size:16px;}
.materials_message{width:55%;}
.materials_message .span{text-align:left;padding-left:10px;}
.materials_message .materials_amount{font-size:14px;}
.materials_status{width:72px;}
.materials_row .unused,.materials_row .unsure{color:#ff6600;display:inline-block;line-height: 36px;height:36px;}
.materials_row .sure,.materials_row .delete,.materials_row .secondary_apply{display:inline-block;text-align: right;}
.materials_row .sure{color:#ff6600;}
.materials_row .materials_status .span{width:100%;text-align:right;width:72px;}
.materials_row .sure,.materials_row .delete{margin-top:-5px;margin-bottom:5px;}
.materials_row .materials_status .secondary_apply{color:#7387f4;border:1px solid #7387f4;height:25px;line-height:20px;width:55px;text-align:center;border-radius:4px;width:72px;}
/*菜单*/
.bar-tab .tab-item.active, .bar-tab .tab-item:active{color:#4778c7}
.icon-board{background:url("/weixin/images/my-application-form.svg") no-repeat;background-size:20px 20px;height:20px;width:20px;}
.icon-task{background:url("/weixin/images/application-list.svg") no-repeat;background-size:20px 20px;height:20px;width:20px;}
.icon-ranking{background:url("/weixin/images/my-stock.svg") no-repeat;background-size:20px 20px;height:20px;width:20px;}
.icon-time-clock{background:url("/weixin/images/my-inventory-list.svg") no-repeat;background-size:20px 20px;height:20px;width:20px;}
.active .icon-board{background:url('/weixin/images/my-application-form-selected.svg')  no-repeat;background-size: 20px 20px;height: 20px;width: 20px}
.active .icon-task{background:url('/weixin/images/application-list-selected.svg')  no-repeat;background-size: 20px 20px;height: 20px;width: 20px}
.active .icon-scans{background:url('/weixin/images/my-stock-selected.svg')  no-repeat;background-size: 20px 20px;height: 20px;width: 20px}
.active .icon-ranking{background:url('/weixin/images/rmy-inventory-list-selected.svg')  no-repeat;background-size: 20px 20px;height: 20px;width: 20px}
.active .icon-time-clock{background:url('/weixin/images/time-clock-active.svg')  no-repeat;background-size: 20px 20px;height: 20px;width: 20px}
/*物料管理详情页面*/
.materials_detail-mask{display:none;position:absolute;top:0px;left:0px;width:100%;height:calc(100%);background:rgba(0,0,0,0.7);z-index:2000;}
.materials_wrap{height:calc(100% - 60px);overflow:auto;}
.materials_detail{position:absolute;top:5%;left:5%;height:calc(90%);width:90%;overflow: auto;background:white;margin:0px auto;}
.materials_wrap{padding:0 17px;padding-top:5px;}
.detail_message-ul{width:75%;font-size:12px;float:left;padding:15px 0px;overflow:hidden;}
.message_title{padding-top:15px;float:right;font-size:16px;font-family: "Microsoft YaHei";color:#ff6600;}
.detail_message{height:82px;}
.detail_message-li{height:18px;line-height:18px;}
.detail_list-ul{height:auto;}
.detail_list-li{background:#f0f2f5;padding:15px 10px;margin-bottom:15px;}
.detail_list-li .span{display:inline-block;}
.detail_list-li .span-brand{width:100%;font-size:15px;color:#333333}
.brand,.message{margin-right:10px;}
.span-amount{width:100%;font-size:13px;}
.span-apply-amount,.span-materials-amount,.span-price,.span-apply-val,.span-materials-val,.span-price-val{margin-right:6px;}
.span-apply-val,.span-materials-val,.span-price-val{color:#7387f4}
.acount{width:25px;display:inline-block;}
.materials_btn_group{display:flex;padding:0 10px;}
.materials_btn_group .btn{display:inline-block;flex:1;text-align:center;height:45px;line-height:45px;border:1px solid #4778c7;}
.materials_btn_group .btn-decide，.materials_btn_group .btn-delete{margin-right:10px;}
.btn.active{background:#4778c7;color:white;}
/*筛选侧边栏*/
.panel-cover{position:absolute;width:100%;height:100%;top:0px;left:0px;opacity: 0.8;background:black;z-index:2000;display:none;}
#panel-right{position:absolute;top:0px;left:10%;background:rgb(240,241,245);z-index:2001;width:90%;display:none;height:100%;}
.sider-card{background:white;font-size:12px;font-family: Microsoft YaHei;padding:10px;padding-bottom:20px;}
.sider-card:first-child{margin-top:0px;}
.sider-card-title{height:30px;line-height: 30px;font-size:14px;}
.sider-card-select{display:inline-block;min-width:90px;text-align:center;background:rgb(240,241,245);border-radius: 4px;height:25px;line-height:25px;margin:0px 5px 8px 0px;padding:0 5px;}
.sider-card-select.active{color:rgb(71,120,199);}
.sider-card-select.active:before{content:"\2713  ";}
.row-btn{font-size:18px;}
.btn{color:rgb(51,51,51);font-family: Microsoft YaHei;font-size:12px;height:50px;line-height:50px;}
.btn.active{background:rgb(71,120,199);color:white;}
.row-btn .reset-panel{background:rgb(249,249,249);}
$(function() {

var statusStyle = ["unused", "unsure", "sure", "delete"];
// scroll是否初始化
var initialized = false;
var emptydata={"isempty":false,}
var listdata={
listMaterialApply: [],
total: 0,
page: 1,
pageSize: 10
}

// 是否正在进行无限加载
var loading = false;

var $empty = new Vue({
"el":".empty",
data:emptydata,
});

// 列表
var $list = new Vue({
el: "#list",
data: function(){
return listdata;
},
methods:{
detail: function(index){
$.utils.post({
data: JSON.stringify({ //详情
id: $list.listMaterialApply[index].id
}),
url:  '/weixin/platform/tec/order_material/list',
successCallback: function(res) {
$detail.materialApply = $list.listMaterialApply[index];
$detail.materialApply.index = index;
$detail.listMaterial = res.data;
}
});
}
},
updated: function(){

if(listdata.total==0){
$empty.isempty=true;
}
else{
$empty.isempty=false;
}
// scroll 未初始化，则初始化
if(!initialized){
$.init();
initialized = true;
}
// 加载完毕需要重置
$.pullToRefreshDone('.pull-to-refresh-content');
//容器发生改变,如果是js滚动，需要刷新滚动
$.refreshScroller();
}
});
// 详情
var $detail = new Vue({
el: "#detail",
data: {
materialApply: {},
listMaterial: []
},
methods:{
hide: function(){
$(this.$el).hide();
}
},
updated: function(){
$(this.$el).show();
},
filters:{
toFixed: function(value, precision){
return Number(value).toFixed(precision);
}
}
});

var search = function(){
$.utils.post({
data: JSON.stringify({
page: $list.page,
pageSize: $list.pageSize,
sort:[{field: "applyDate", dir: "desc"}]
}),
url:  '/weixin/platform/tec/order/search',
successCallback: function(res) {
for(var i = 0; i < res.data.length; i++){
var orderTime = res.data[i].orderTime;
if(res.data[i].orderTime != null){
orderTime = new Date(res.data[i].orderTime.replace(/-/g, "/"));
}
res.data[i].week = orderTime.getWeekDay();
res.data[i].date = orderTime.JDateFormat("MM/dd");
res.data[i].statusStyle = statusStyle[res.data[i].status];
res.data[i].enableDrawAgain = res.data[i].status == 2 || res.data[i].status == 3;
}
if($list.page > 1){
$list.listMaterialApply =  $list.listMaterialApply.concat(res.data);
}else{
$list.listMaterialApply =  res.data;
}
$list.total = res.total;
loading = false;
$('.infinite-scroll-preloader').hide();
}
});
}

//下拉刷新当前数据
function pullDownAction () {
$list.page = 1;
search();
}

//上拉加载更多数据
function pullUpAction () {
if($list.total > $list.listMaterialApply.length){
++$list.page;
search();
}else{
}
}

//初始状态，加载数据
pullDownAction ();

// 添加'refresh'监听器
$(document).off('refresh','.pull-to-refresh-content').on('refresh', '.pull-to-refresh-content',function(e) {
pullDownAction();
});

// 注册'infinite'事件处理函数
$(document).off('infinite','.infinite-scroll-bottom').on('infinite', '.infinite-scroll-bottom',function() {

// 如果正在加载，则退出
if (loading) return;

// 设置flag
loading = true;

pullUpAction();
});

show_default_button($(".a-task"));
})
