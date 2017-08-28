<template>
  <div>
<div>
		<div id="headPortrait"><img src="" /></div>
		<div class="tec_message">
			<form>
				<ul style="list-style:none;">
					<li><span class="mine-span-left">姓名</span><span class="mine-span-right">杨龙飞</span></li>
					<li><span class="mine-span-left">性别</span><span class="mine-span-right">男</span></li>
					<li><span class="mine-span-left">手机号</span><span class="mine-span-right">18217163953</span></li>
					<li><span class="mine-span-left">积分</span><span class="mine-span-right">120</span></li>
					<li><span class="mine-span-left">智七币</span><span class="mine-span-right">1200</span></li>
				</ul>
			</form>
		</div>
	</div>
  <div class="buttonGroup">
    <button class="button"><router-link to="/profile" style="text-decoration: none;color:white;">完善简历，赚取智七币</router-link></button>
  </div>
  <v-menu></v-menu>
  </div>
</template>

<script>
import menu from './Menu.vue'
export default {
  components: {
    'v-menu': menu
  }
}
window.onload=function(){
  document.getElementsByClassName("tab-item")[2].className+=" "+"active";
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
   ul
       padding:0px
       width:78%
       margin:0 auto
       font-size:12px
       margin-top:20px
   ul li
       height:35px
       margin-top:5px
   .mine-span-left
       display:inline-block
       width:55px
   .mine-span-right
       display:inline-block
       width:calc(100% - 55px)
       text-align:right
   #verifycodeBtn
       display:inline-block
       font-size:12px
   .buttonGroup
       width:100%
       bottom:50px
       position:absolute
   .buttonGroup .button
       display:block
       width:100%
       height:40px
       background:rgb(71,120,199)
       color:white
       border:none
       margin:0 auto
       margin-left:-8px
       text-decoration:none
</style>
