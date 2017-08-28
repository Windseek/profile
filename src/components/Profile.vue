<template>
<div class="outside">
<div class='page'>
  <div style="height:calc(100% - 50px);overflow-y: auto;overflow-x:hidden">
        <div class='header'>
            <div class='inline-block'><img src='/images/workbench/user.png' id='headimg'><span class='message-span'>个人信息表</span></div>
        </div>
        <div class='personContent'>
                    <div class='basicInfo content-section'>
                        <div class='line'>
                            <span class='text-left content-left'>个人基本信息<span class='spanrequired'>&nbsp;&nbsp;&nbsp;*</span></span>
                            <span class='text-right content-right'><span><span class='nocomplete' v-show='data.isEmptyObject'>不完整&nbsp;&nbsp;&nbsp;</span> <span class='add' v-show='data.isEmptyObject' v-on:click.stop="basicInfoCancel()">新增</span><span class='edit' v-show='!data.isEmptyObject' v-on:click.stop="basicInfoEdit()">编辑</span></span></span>
                        </div>
                        <div class='spread' v-show='!data.isEmptyObject'>
                            <ul class='ul'>
                                <li class='li'><span class='ul-left'>姓名:</span><span class='ul-right'>{{data.tecProfile.name}}</span></li>
                                <li class='li'><span class='ul-left'>性别:</span><span class='ul-right'>{{data.tecProfile.sex}}</span></li>
                                <li class='li'><span class='ul-left'>民族:</span><span class='ul-right'>{{data.tecProfile.nation}}</span></li>
                                <li class='li'><span class='ul-left'>政治面貌:</span><span class='ul-right'>{{data.tecProfile.politicalStatus}}</span></li>
                                <li class='li'><span class='ul-left'>婚姻情况:</span><span class='ul-right'>{{data.tecProfile.maritalStatus}}</span></li>
                                <li class='li'><span class='ul-left'>出生年月:</span><span class='ul-right'>{{data.tecProfile.birthYearMonth}}</span></li>
                                <li class='li'><span class='ul-left'>籍贯:</span><span class='ul-right'>{{data.tecProfile.nativePlace}}</span></li>
                                <li class='li'><span class='ul-left'>户口所在地:</span><span class='ul-right'>{{data.tecProfile.registeredResidence}}</span></li>
                                <li class='li'><span class='ul-left'>现居住地:</span><span class='ul-right'>{{data.tecProfile.currentResidence}}</span></li>
                                <li class='li'><span class='ul-left'>学历:</span><span class='ul-right'>{{data.tecProfile.educationalBackground}}</span></li>
                                <li class='li'><span class='ul-left'>所学专业:</span><span class='ul-right'>{{data.tecProfile.major}}</span></li>
                                <li class='li'><span class='ul-left'>开始工作年月:</span><span class='ul-right'>{{data.tecProfile.firstStartWorkYearMonth}}</span></li>
                                <li class='li'><span class='ul-left'>联系地址:</span><span class='ul-right'>{{data.tecProfile.contactAddress}}</span></li>
                                <li class='li'><span class='ul-left'>邮政编码:</span><span class='ul-right'>{{data.tecProfile.contactPostcode}}</span></li>
                                <li class='li'><span class='ul-left'>身份证号码:</span><span class='ul-right'>{{data.tecProfile.idCardNumber}}</span></li>
                                <li class='li'><span class='ul-left'>移动电话:</span><span class='ul-right'>{{data.tecProfile.mobile}}</span></li>
                                <li class='li'><span class='ul-left'>紧急联系人:</span><span class='ul-right'>{{data.tecProfile.emergencyContactName}}</span></li>
                                <li class='li'><span class='ul-left'>紧急联系人电话:</span><span class='ul-right'>{{data.tecProfile.emergencyContactMobile}}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class='workHistory content-section'>
                        <div class='line'>
                            <span class='text-left content-left'>工作经历<span class='spanrequired'>&nbsp;&nbsp;&nbsp;*</span></span>
                            <span class='text-right content-right'><span><span class='nocomplete' v-show='data.experienceList.length'>不完整&nbsp;&nbsp;&nbsp;</span> <span class='edit add'  v-on:click.stop="experienceInfoAdd()">添加</span></span></span>
                        </div>
                        <div class='spread'>
                            <div class='spread-section'  v-for='item in data.experienceList'>
                             <div class='radio'></div>
                                <div class='spread-section-title'><span class='companyName'>{{item.companyName}}</span><span class='opration'><span class='icon icon-edit' :idc='item.idc' :id='item.id'v-on:click.stop="experienceInfoEdit(item.id,item.idc)">编辑</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='icon icon-remove' :idc='item.idc' :id='item.id' v-on:click.stop="experienceInfoDelete(item.id,item.idc)">删除</span></span></div>
                                <ul class='ul'>
                                    <li class='li'><span class='ul-left':test="item">起始年月:</span><span class='ul-right'>{{item.beginWorkYearMonth}}</span></li>
                                    <li class='li'><span class='ul-left'>截止年月:</span><span class='ul-right'>{{item.endWorkYearMonth}}</span></li>
                                    <li class='li'><span class='ul-left'>公司名称:</span><span class='ul-right'>{{item.companyName}}</span></li>
                                    <li class='li'><span class='ul-left'>岗位名称:</span><span class='ul-right'>{{item.position}}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tecTitle content-section">
                         <div class="line">
                             <span class="text-left content-left">技能职称</span>
                             <span class="text-right content-right"><span><span class="edit add"  v-on:click.stop="technicalInfoAdd()">添加</span></span></span>
                         </div>
                         <div class="spread">
                             <div class="spread-section" v-for="item in data.technicalList">
                                 <div class="radio"></div>
                                 <div class="spread-section-title"><span class="companyName">{{item.titleName}}</span><span class="opration"><span class="icon icon-edit" :id="item.id" :idc="item.idc" v-on:click.stop="technicalInfoEdit(item.id,item.idc)">编辑</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="icon icon-remove" :id="item.id" :idc="item.idc" v-on:click.stop="technicalInfoDelete(item.id,item.idc)">删除</span></span></div>
                                 <ul class="ul">
                                     <li class="li"><span class="ul-left">技能名称:</span><span class="ul-right">{{item.titleName}}</span></li>
                                     <li class="li"><span class="ul-left">评定时间:</span><span class="ul-right">{{item.titlePassTime}}</span></li>
                                 </ul>
                             </div>
                         </div>
                    </div>
                    <div class="certificate content-section">
                        <div class="line">
                            <span class="text-left content-left">证书</span>
                            <span class="text-right content-right"><span><span class="edit add" v-on:click.stop="certificateInfoAdd()">添加</span></span></span>
                        </div>
                        <div class="spread">
                            <div class="spread-section" v-for="item in data.certificateList">
                                <div class="radio"></div>
                                <div class="spread-section-title"><span class="companyName">{{item.certificateName}}</span><span class="opration"><span class="icon icon-edit" :id="item.id" :idc="item.idc" v-on:click.stop="certificateInfoEdit(item.id,item.idc)">编辑</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="icon icon-remove" :id="item.id" :idc="item.idc" v-on:click.stop="certificateInfoDelete(item.id,item.idc)">删除</span></span></div>
                                <ul class="ul">
                                    <li class="li"><span class="ul-left">证书名称:</span><span class="ul-right">{{item.certificateName}}</span></li>
                                    <li class="li"><span class="ul-left">评定时间:</span><span class="ul-right">{{item.certificatePassTime}}</span></li>
                                    <li class="li"><span class="ul-left">说明:</span><span class="ul-right">{{item.certificateRemark}}</span></li>
                                    <li class="li"><span class="ul-left">照片下载:</span><span class="ul-right"><span v-show="item.certificateAttachment" :href="item.certificateAttachment">下载</span><span v-show="!item.certificateAttachment">无</span></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
  </div>
        <div style="display:flex;width:100%;padding-top:2px;"><div class="page_back"><router-link to="/mine" style="text-decoration: none;color:rgb(102,102,102)">返回</router-link></div><div class="page_save">保存</div></div>
    </div>
    <div class='popup' id='popupBasicInfo' style='display:none;'>
        <div class='popupBasicInfoContent'>
            <ul class='ul'>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>姓名</span><span class='span-right'><input type='text' v-model="data.tecProfile.name"></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>性别</span><span class='span-right'><input type='radio' value='男' name='sex' id='formale' v-model="data.tecProfile.sex"/><label for='formale'>&nbsp;男</label>&nbsp;&nbsp;&nbsp;<input type='radio' value='女' name='sex' id='male' v-model="data.tecProfile.sex"/><label for='male'>&nbsp;女</label></span></li>
                <li class='li'><span class='span-left'>民族</span><span class='span-right'><input type='text'v-model="data.tecProfile.nation"></span></li>
                <li class='li'><span class='span-left'>政治面貌</span><span class='span-right'><input type='text' v-model="data.tecProfile.politicalStatus"></span></li>
                <li class='li'><span class='span-left'>婚姻情况</span><span class='span-right'><select v-model="data.tecProfile.maritalStatus"><option>未婚</option><option>已婚</option><option>保密</option></select></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>出生年月</span><span class='span-right'><input type='text'  v-model="data.tecProfile.birthYearMonth"></span></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>现在居住地</span><span class='span-right'><input type='text' v-model="data.tecProfile.currentResidence"></span></li>
                <li class='li'><span class='span-left'>户口所在地</span><span class='span-right'><input type='text' v-model="data.tecProfile.registeredResidence"></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>学历</span><span class='span-right'><select  v-model="data.tecProfile.educationalBackground"><option>初中及以下</option><option>高中</option><option>技校/职高</option><option>中专</option><option>大专</option><option>本科</option><option>硕士研究生</option><option>博士研究生</option></select></span></li>
                <li class='li'><span class='span-left'>所学专业</span><span class='span-right'><input type='text'  v-model="data.tecProfile.major"></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>开始工作年月</span><span class='span-right'><input type='text' v-model="data.tecProfile.firstStartWorkYearMonth"></span></li>
                <li class='li'><span class='span-left'>联系地址</span><span class='span-right'><input type='text' v-model="data.tecProfile.contactAddress"></span></li>
                <li class='li'><span class='span-left'>邮政编码</span><span class='span-right'><input type='text' v-model="data.tecProfile.contactPostcode"></span></li>
                <li class='li'><span class='span-left'>身份证号</span><span class='span-right'><input type='text' v-model="data.tecProfile.idCardNumber"></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>移动电话</span><span class='span-right'><input type='text' v-model="data.tecProfile.mobile"></span></li>
                <li class='li'><span class='span-left'>紧急联系人</span><span class='span-right'><input type='text' v-model="data.tecProfile.emergencyContactName"></span></li>
                <li class='li'><span class='span-left'>紧急联系人电话</span><span class='span-right'><input type='text' v-model="data.tecProfile.emergencyContactMobile"></span></li>
            </ul>
        </div>
        <div class='btnGroupBasicInfo btnGroup' id='btnGroupBasicInfo'>
            <input type='button' class='cancel' value='取消' v-on:click.stop="basicInfoCancel()">
            <input type='button' class='sure' value='确定' v-on:click.stop="basicInfoSure()">
        </div>
    </div>
    <div class='popup' id='popupWorkHistory' style='display:none;'>
        <div class='popupWorkHistoryContent' id='popupWorkHistoryContent'>
            <ul class='ul'>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>起始年月</span><span class='span-right'><input type='text' v-model="data.experience_info.beginWorkYearMonth"></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>截止年月</span><span class='span-right'><input type='text' v-model="data.experience_info.endWorkYearMonth"></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>公司名称</span><span class='span-right'><input type='text' v-model="data.experience_info.companyName"></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>岗位名称</span><span class='span-right'><input type='text' v-model="data.experience_info.position"></span></li>
            </ul>
        </div>
        <div class='btnGroupWorkHistory btnGroup' id='btnGroupWorkHistory'>
            <input type='button' class='cancel' value='取消' v-on:click.stop="experienceInfoCancel(data.experience_info.id,data.experience_info.idc)">
            <input type='button' class='sure' value='确定'  v-on:click.stop="experienceInfoSure(data.experience_info.id,data.experience_info.idc)">
        </div>
    </div>
    <div class='popup' id='popupTecTitle' style='display:none;'>
        <div class='popupTecTitleContent' id='popupTecTitleContent'>
            <ul class='ul'>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>技能职称</span><span class='span-right'><input type='text' v-model="data.technical_info.titleName"></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>评定时间</span><span class='span-right'><input type='text' v-model="data.technical_info.titlePassTime"></span></li>
            </ul>
        </div>
        <div class='btnGroupTecTitle btnGroup' id='btnGroupTecTitle'>
            <input type='button' class='cancel' value='取消' v-on:click.stop="technicalInfoCancel(data.technicalList.id,data.technical_info.idc)">
            <input type='button' class='sure' value='确定' v-on:click.stop="technicalInfoSure(data.technicalList.id,data.technical_info.idc)">
        </div>
    </div>
    <div class='popup' id='popupCertificate' style='display:none;'>
        <div class='popupCertificateContent' id='popupCertificateContent'>
            <ul class='ul'>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>证书名称</span><span class='span-right'><input type='text' v-model="data.certificate_info.certificateName"></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>评定时间</span><span class='span-right'><input type='text' v-model="data.certificate_info.certificatePassTime"></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>说明</span><span class='span-right'><input type='text' v-model="data.certificate_info.certificateRemark"></span></li>
                <li class='li'><span class='spanrequired'>*</span><span class='span-left'>证书上传</span><span class='span-right'><button id='upload'>上传</button></span></li>
            </ul>
        </div>
        <div class='btnGroupCertificate btnGroup' id='btnGroupTecTitle'>
            <input type='button' class='cancel' value='取消'  v-on:click.stop="certificateInfoCancel(data.technicalList.id,data.technical_info.idc)">
            <input type='button' class='sure' value='确定' v-on:click.stop="certificateInfoSure(data.technicalList.id,data.technical_info.idc)">
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
  function extend (obj) {
    if (!obj || ('object' !== (typeof obj))){
      return obj;
    }
    var o = obj.constructor === Array ? [] : {};
    for(var i in obj){
      //if(obj.hasOwnProperty(i)){
      o[i] = typeof obj[i] === "object" ? extend(obj[i]) : obj[i];
      //}
    }
    return o;
  }
  //  个人基本信息 工作经历 技能职称 证书 数据存放
  //  个人基本信息 数据存放
  var tec_profile_data = {
    "id": "",
    "memberId": "",
    "name": "",
    "sex": "男",
    "nation": "",
    "politicalStatus": "",
    "maritalStatus": "",
    "birthYearMonth": "",
    "nativePlace": "",
    "registeredResidence": "",
    "currentResidence": "",
    "educationalBackground": "",
    "major": "",
    "firstStartWorkYearMonth": "",
    "contactAddress": "",
    "contactPostcode": "",
    "idCardNumber": "",
    "mobile": "",
    "emergencyContactName": "",
    "emergencyContactMobile": "",
    "dataCreatedByName": "",
    "dataCreateTime": "",
    "dataUpdatedByName": "",
    "dataUpdateTime": "",
    "dataDiscardStatus": "",
    isEmptyObject:true
  }
  //  工作经历列表信息 数据存放
  var experience_list_data = [];
  //  新增工作经历详细信息 数据存放
  var experience_info={
    "idc":"",
    "id": "",
    "memberId": "",
    "beginWorkYearMonth": "",
    "endWorkYearMonth": "",
    "companyName": "",
    "position": "",
    "dataCreatedByName": "",
    "dataCreateTime": "",
    "dataUpdatedByName": "",
    "dataUpdateTime": "",
    "dataDiscardStatus": ""
  };
  //  技能列表 数据存放
  var technical_list_data = [];
  //  技能详情 数据存放
  var technical_info = {
    "id": "",
    "memberId": "",
    "titleName": "",
    "titlePassTime": "",
    "dataCreatedByName": "",
    "dataCreateTime": "",
    "dataUpdatedByName": "",
    "dataUpdateTime": "",
    "dataDiscardStatus": ""
  };
  //  技能列表 数据存放
  var certificate_list_data = [];
  //  技能详情 数据存放
  var certificate_info = {
    "id": "",
    "memberId": "",
    "applyNo": "",
    "applyTime": "",
    "applyStatus": "",
    "applyStatusRemark": "",
    "certificateName": "",
    "certificatePassTime": "",
    "certificateRemark": "",
    "certificateAttachment": "",
    "dataCreatedByName": "",
    "dataCreateTime": "",
    "dataUpdatedByName": "",
    "dataUpdateTime": "",
    "dataDiscardStatus": ""
  };
  //  个人基本信息 工作经历 技能职称 证书 数据备份
  //  个人基本信息数据备份
  var tec_profile_data_back = extend(tec_profile_data);
  //  工作经历详情数据备份
  var experience_info_back = extend(experience_info);
  //  技能详情 数据备份
  var technical_info_back = extend(technical_info);
  //  证书详情 数据备份
  var certificate_info_back = extend(certificate_info);
export default {
  data () {
    return {
      data: {
        tecProfile: {},
        technicalList: [],
        experienceList: [],
        certificateList: [],
        experience_info:experience_info,
        technical_info:technical_info,
        certificate_info:certificate_info
      }
    }
  },
  methods: {
    basicInfoAdd: function () {
      document.getElementById('popupBasicInfo').style.display = 'block'
    },
    basicInfoEdit: function () {
      tec_profile_data_back = extend(this.data.tecProfile);//个人基本信息数据备份
      document.getElementById('popupBasicInfo').style.display = 'block'
    },
    basicInfoSure: function () {
      document.getElementById('popupBasicInfo').style.display = 'none'
    },
    basicInfoCancel: function () {
      this.data.tecProfile=tec_profile_data_back;
      document.getElementById('popupBasicInfo').style.display = 'none'
    },
    experienceInfoAdd: function(){
      this.data.experience_info={
        "idc":"",
        "id": "",
        "memberId": "",
        "beginWorkYearMonth": "",
        "endWorkYearMonth": "",
        "companyName": "",
        "position": "",
        "dataCreatedByName": "",
        "dataCreateTime": "",
        "dataUpdatedByName": "",
        "dataUpdateTime": "",
        "dataDiscardStatus": ""
      };
      document.getElementById('popupWorkHistory').style.display = 'block'
    },
    experienceInfoEdit: function(id,idc){
      var editdata="";
      if(id){
        editdata=this.data.experienceList.filter(function(obj) {
          return obj.id == id;
        });
      }
      if(idc){
        editdata=this.data.experienceList.filter(function(obj) {
          return obj.idc == idc;
        });
      }
      experience_info=editdata[0];
      this.data.experience_info=experience_info;
      experience_info_back=extend(experience_info);
      document.getElementById('popupWorkHistory').style.display = 'block'
    },
    experienceInfoDelete: function(id,idc){
      var experienceList=this.data.experienceList;
      if(id){
        this.data.experienceList.forEach(function(obj,key) {
          if(obj&&obj.id==id){
            experienceList.splice(key,1);
          }
        });
      }
      if(idc){
        this.data.experienceList.forEach(function(obj,key) {
          if(obj&&obj.id==id){
            experienceList.splice(key,1);
          }
        });
      }
    },
    experienceInfoCancel: function(id,idc){
      experience_info=extend(experience_info_back);
      var experienceList=this.data.experienceList;
      if(id){
        this.data.experienceList.forEach(function(obj,key) {
          if(obj.id == id){
            experienceList.splice(key, 1, experience_info)
          }
        });
      }
      if(idc){
        this.data.experienceList.forEach(function(obj,key) {
          if(obj.idc == idc){
            experienceList.splice(key, 1, experience_info)
          }
        });
      }
      document.getElementById('popupWorkHistory').style.display = 'none'
    },
    experienceInfoSure: function(id,idc){
      var experienceList=this.data.experienceList;
      var experience_info=this.data.experience_info;
      if(id){
        experienceList.forEach(function(obj) {
          if(obj.id == id){
            experience_info.idc=new Date().getTime();
          }
        });
      }
      else if(idc){
        experienceList.forEach(function(obj) {
          if(obj.idc == idc){
            experience_info.idc=new Date().getTime();
          }
        });
      }else{
        experience_info.idc=new Date().getTime();
        experienceList.push(experience_info);
      }
      document.getElementById('popupWorkHistory').style.display = 'none'
    },
    technicalInfoAdd: function(){
      this.data.technical_info={
        "id": "",
        "memberId": "",
        "titleName": "",
        "titlePassTime": "",
        "dataCreatedByName": "",
        "dataCreateTime": "",
        "dataUpdatedByName": "",
        "dataUpdateTime": "",
        "dataDiscardStatus": ""
      };
      document.getElementById('popupTecTitle').style.display = 'block'
    },
    technicalInfoEdit: function(id,idc){
      var editdata="";
      if(id){
        editdata=this.data.technicalList.filter(function(obj) {
          return obj.id == id;
        });
      }
      if(idc){
        editdata=this.data.technicalList.filter(function(obj) {
          return obj.idc == idc;
        });
      }
      technical_info=editdata[0];
      this.data.technical_info=technical_info;
      technical_info_back=extend(technical_info);
      document.getElementById('popupTecTitle').style.display = 'block'
    },
    technicalInfoDelete: function(id,idc){
      var technicalList=this.data.technicalList;
      if(id){
        this.data.technicalList.forEach(function(obj,key) {
          if(obj&&obj.id==id){
            technicalList.splice(key,1);
          }
        });
      }
      if(idc){
        this.data.technicalList.forEach(function(obj,key) {
          if(obj&&obj.id==id){
            technicalList.splice(key,1);
          }
        });
      }
    },
    technicalInfoCancel: function(id,idc){
      technical_info=extend(technical_info_back);
      var technicalList=this.data.technicalList;
      if(id){
        this.data.technicalList.forEach(function(obj,key) {
          if(obj.id == id){
            technicalList.splice(key, 1, technical_info)
          }
        });
      }
      if(idc){
        this.data.technicalList.forEach(function(obj,key) {
          if(obj.idc == idc){
            technicalList.splice(key, 1, technical_info)
          }
        });
      }
      document.getElementById('popupTecTitle').style.display = 'none'
    },
    technicalInfoSure: function(id,idc){
      var technicalList=this.data.technicalList;
      var technical_info=this.data.technical_info;
      if(id){
        technicalList.forEach(function(obj) {
          if(obj.id == id){
            technical_info.idc=new Date().getTime();
          }
        });
      }
      else if(idc){
        technicalList.forEach(function(obj) {
          if(obj.idc == idc){
            technical_info.idc=new Date().getTime();
          }
        });
      }else{
        technical_info.idc=new Date().getTime();
        technicalList.push(technical_info);
      }
      document.getElementById('popupTecTitle').style.display = 'none'
    },
    certificateInfoAdd: function(){
      this.data.certificate_info={
        "id": "",
        "memberId": "",
        "applyNo": "",
        "applyTime": "",
        "applyStatus": "",
        "applyStatusRemark": "",
        "certificateName": "",
        "certificatePassTime": "",
        "certificateRemark": "",
        "certificateAttachment": "",
        "dataCreatedByName": "",
        "dataCreateTime": "",
        "dataUpdatedByName": "",
        "dataUpdateTime": "",
        "dataDiscardStatus": ""
      };
      document.getElementById('popupCertificate').style.display = 'block'
    },
    certificateInfoEdit: function(id,idc){
      var editdata="";
      if(id){
        editdata=this.data.certificateList.filter(function(obj) {
          return obj.id == id;
        });
      }
      if(idc){
        editdata=this.data.certificateList.filter(function(obj) {
          return obj.idc == idc;
        });
      }
      certificate_info=editdata[0];
      this.data.certificate_info=certificate_info;
      certificate_info_back=extend(certificate_info);
      document.getElementById('popupCertificate').style.display = 'block'
    },
    certificateInfoDelete: function(id,idc){
      var certificateList=this.data.certificateList;
      if(id){
        this.data.certificateList.forEach(function(obj,key) {
          if(obj&&obj.id==id){
            certificateList.splice(key,1);
          }
        });
      }
      if(idc){
        this.data.certificateList.forEach(function(obj,key) {
          if(obj&&obj.id==id){
            certificateList.splice(key,1);
          }
        });
      }
    },
    certificateInfoCancel: function(id,idc){
      certificate_info=extend(certificate_info_back);
      var certificateList=this.data.certificateList;
      if(id){
        this.data.certificateList.forEach(function(obj,key) {
          if(obj.id == id){
            certificateList.splice(key, 1, certificate_info)
          }
        });
      }
      if(idc){
        this.data.certificateList.forEach(function(obj,key) {
          if(obj.idc == idc){
            certificateList.splice(key, 1, certificate_info)
          }
        });
      }
      document.getElementById('popupCertificate').style.display = 'none'
    },
    certificateInfoSure: function(id,idc){
      var certificateList=this.data.certificateList;
      var certificate_info=this.data.certificate_info;
      if(id){
        technicalList.forEach(function(obj) {
          if(obj.id == id){
            certificate_info.idc=new Date().getTime();
          }
        });
      }
      else if(idc){
        certificateList.forEach(function(obj) {
          if(obj.idc == idc){
            certificate_info.idc=new Date().getTime();
          }
        });
      }else{
        certificate_info.idc=new Date().getTime();
        certificateList.push(certificate_info);
      }
      document.getElementById('popupCertificate').style.display = 'none'
    }
  },
  created () {
    this.$http.get('api/tecProfile').then((response) => {
      response = response.body
      this.data.tecProfile = response.data
    })
    this.$http.get('api/technicalList').then((response) => {
      response = response.body
      this.data.technicalList = response.data
    })
    this.$http.get('api/experienceList').then((response) => {
      response = response.body
      this.data.experienceList = response.data
    })
    this.$http.get('api/certificateList').then((response) => {
      response = response.body
      this.data.certificateList = response.data
    })
  }
}
</script>

<style>
  html,body,#app,.outside,.page{height:calc(100%);overflow:hidden;margin:0px;}
  .outside{background:rgb(239, 239, 244)}
  .page{font-size:14px;color:#666;overflow-y:hidden;}
  .page.page-current{overflow-y:auto;}
  .inline-block{display:inline-block;height:110px;padding:20px;}
  #headimg{height:70px;width:70px;border-radius:50%;}
  .message-span{vertical-align: top;margin-left:15px;padding-top:10px;display:inline-block;}
  .header{background:white;margin-bottom:10px;}
  .spanrequired{color:red;}
  .content-section{min-height:70px;background:white;margin-bottom:10px;padding:15px;}
  .line{border-bottom:1px solid #ccc;height:35px;}
  .text-left{text-align:left;}
  .text-right{text-align:right;}
  .content-left{width:180px;overflow:hidden;display:inline-block;}
  .content-right{width:calc(100% - 188px);overflow:hidden;display:inline-block;}
  .nocomplete{color:red;font-size:12px;}
  .ul{padding:0px;list-style: none;padding-left:5px;margin:0px;}
  .li{height:30px;}
  .ul-left{width:120px;display:inline-block;}
  .ul-right{width:calc(100% - 135px);display:inline-block;}
  .spread{padding-top:10px;}
  .spread-section{padding-left:15px;border-left:1px solid rgb(243,152,0);}
  .spread-section-title{width:100%;}
  .companyName{width:calc(100% - 80px);display:inline-block;overflow:hidden;height:30px;vertical-align:top;}
  .opration{width:80px;display:inline-block;vertical-align: top;text-align:right;}
  .radio{height:10px;width:10px;border-radius:50%;background:rgb(243,152,0);postion:relative;margin-left:-20px;}
  .popup{background:white;position:fixed;top:0px;left:0px;height:calc(100%);overflow:auto;z-index:10000;width:100%;}
  /*个人基本信息pop页面*/
  #popupBasicInfo{overflow:hidden;}
  .popupBasicInfoContent{font-size:14px;background:rgb(239,239,244);height:calc(100% - 60px);overflow-y:auto;}
  .popupBasicInfoContent .ul{padding:0px;}
  .popupBasicInfoContent .li{background:white;height:40px;margin:10px;padding-left:15px;line-height:40px;border:1px solid #ccc;}
  .popupBasicInfoContent .li input{height:30px;border:none;}
  .popupBasicInfoContent .li input[type=radio]{height:auto;}
  .span-left{min-width:60px;display:inline-block;}
  .span-right{margin-left:10px;}
  .btnGroup{height:50px;width:calc(100% - 20px);display:flex;font-size:12px;margin:0 10px;margin-top:10px;}
  .btnGroup .cancel,.btnGroup .sure{border-radius: 1px;height:40px;line-height:30px;flex:1;background:white;border:1px solid #2f5bc2;font-family:"Microsoft YaHei";font-size:14px;}
  .btnGroup .sure{background:#2f5bc2;color:white;}
  .btnGroup .cancel{margin-right:20px;}
  /*工作经历pop页面*/
  #popupWorkHistory{overflow:hidden; position:fixed;top:0px;left:0px;}
  .popupWorkHistoryContent{font-size:14px;background:rgb(239,239,244);height:calc(100% - 60px);overflow-y:auto;}
  .popupWorkHistoryContent .ul{padding:0px;}
  .popupWorkHistoryContent .li{background:white;height:40px;margin:10px;padding-left:15px;line-height:40px;border:1px solid #ccc;}
  .popupWorkHistoryContent .li input{height:30px;border:none;}
  .popupWorkHistoryContent .li input[type=radio]{height:auto;}
  .span-left{min-width:60px;display:inline-block;}
  .span-right{margin-left:10px;}
  .btnGroup{height:50px;width:calc(100% - 20px);display:flex;font-size:12px;margin:0 10px;margin-top:10px;}
  .btnGroup .cancel,.btnGroup .sure{border-radius: 1px;height:40px;line-height:30px;flex:1;background:white;border:1px solid #2f5bc2;font-family:"Microsoft YaHei";font-size:14px;}
  .btnGroup .sure{background:#2f5bc2;color:white;}
  .btnGroup .cancel{margin-right:20px;}
  /*技能职称*/
  #popupTecTitle{overflow:hidden; position:fixed;top:0px;left:0px;}
  .popupTecTitleContent{font-size:14px;background:rgb(239,239,244);height:calc(100% - 60px);overflow-y:auto;}
  .popupTecTitleContent .ul{padding:0px;}
  .popupTecTitleContent .li{background:white;height:40px;margin:10px;padding-left:15px;line-height:40px;border:1px solid #ccc;}
  .popupTecTitleContent .li input{height:30px;border:none;}
  .popupTecTitleContent .li input[type=radio]{height:auto;}
  .span-left{min-width:60px;display:inline-block;}
  .span-right{margin-left:10px;}
  .btnGroup{height:50px;width:calc(100% - 20px);display:flex;font-size:12px;margin:0 10px;margin-top:10px;}
  .btnGroup .cancel,.btnGroup .sure{border-radius: 1px;height:40px;line-height:30px;flex:1;background:white;border:1px solid #2f5bc2;font-family:"Microsoft YaHei";font-size:14px;}
  .btnGroup .sure{background:#2f5bc2;color:white;}
  .btnGroup .cancel{margin-right:20px;}
  /*证书*/
  #popupCertificate{overflow:hidden; position:fixed;top:0px;left:0px;}
  .popupCertificateContent{font-size:14px;background:rgb(239,239,244);height:calc(100% - 60px);overflow-y:auto;}
  .popupCertificateContent .ul{padding:0px;}
  .popupCertificateContent .li{background:white;height:40px;margin:10px;padding-left:15px;line-height:40px;border:1px solid #ccc;}
  .popupCertificateContent .li input{height:30px;border:none;}
  .popupCertificateContent .li input[type=radio]{height:auto;}
  .span-left{min-width:60px;display:inline-block;}
  .span-right{margin-left:10px;}
  .btnGroup{height:50px;width:calc(100% - 20px);display:flex;font-size:12px;margin:0 10px;margin-top:10px;}
  .btnGroup .cancel,.btnGroup .sure{border-radius: 1px;height:40px;line-height:30px;flex:1;background:white;border:1px solid #2f5bc2;font-family:"Microsoft YaHei";font-size:14px;}
  .btnGroup .sure{background:#2f5bc2;color:white;}
  .btnGroup .cancel{margin-right:20px;}
  #upload{height:30px;line-height:25px;width:60px;font-size:14px;}
  /*页面信息保存*/
  .page_save,.page_back{flex:1;margin:2px 15px;font-family:"Microsoft YaHei";background:#2f5bc2;line-height:40px;color:white;text-align: center;}
  .page_back{border:1px solid #2f5bc2; background:white;color:rgb(102,102,102);}
</style>
