<template>
<div>
		<div id="headPortrait"><img/></div>
    <div class="tec_message">
			<form>
				<ul style="list-style:none;">
					<li><span class="register-span-left">姓名</span><span class="register-span-right"><input type="text"/></span></li>
					<li><span class="register-span-left">性别</span><span class="register-span-right"><input type="text"/></span></li>
					<li><span class="register-span-left">手机号</span><span class="register-span-right"><input type="text"/></span></li>
					<li><span class="register-span-left">验证码</span><span class="register-span-right"><input type="text" class="registerInput" id="verifyCode"/><div id="verifycodeBtn" class="item-media" style="padding:0px 0px 0px 10px;color:#4778c7;">获取验证码</div></span></li>
				</ul>
			</form>
		</div>
		<div class="buttonGroup">
			<button class="button"><router-link to="/mine">提交注册</router-link></button>
		</div>
</div>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
       background:white
   body
       background:white
   #headPortrait
       width:80px
       height:80px
       border-radius:50%
       background:#ccc
       margin:0 auto
       margin-top:20px
   #headPortrait img
        height:100%
        width:100%
        border-radius:50%
   input
       border-radius:4px
       border:1px solid #ccc
       height:25px
       width:90%
       padding-left:5px
   .registerInput
      width:35%
   ul
       padding:0px
       width:78%
       margin:0 auto
       font-size:12px
       margin-top:20px
   ul li
       height:35px
       margin-top:5px
   .register-span-left
       display:inline-block
       width:55px
   .register-span-right
       display:inline-block
       width:calc(100% - 55px)
   #verifycodeBtn
       display:inline-block
       font-size:12px
   .buttonGroup
       top:40px
       position:relative
   .buttonGroup .button
       display:block
       width:80%
       height:40px
       background:rgb(71,120,199)
       color:white
       border:none
       margin:0 auto
</style>
