<template>
<div>
<div id="tecMessage">
	<div class="success">签到成功</div>
	<ul>
		<li><span>师傅张三：</span></li>
		<li><span>当日签到成功，新增12智七币</span></li>
		<li><span>截至今日，累计120智七币</span></li>
	</ul>
</div>
<div id="calender"></div>
<div id="buttongroup">
	<button id="button">签到</button>
</div>
</div>
</template>
<script>
  window.onload = function () {
    var dateJson = [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 19]
    function isLeap (year) {
      return year % 4 === 0 ? (year % 100 !== 0 ? 1 : (year % 400 === 0 ? 1 : 0)) : 0
    }
    var i
    var k
    var j
    var flag
    var today = new Date()
    var y = today.getFullYear()
    var m = today.getMonth()
    var firstday = new Date(y, m, 1)
    var dayOfWeek = firstday.getDay()
    var daysPerMonth = []
    daysPerMonth = [31, 28 + isLeap(y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var strNums = Math.ceil((dayOfWeek + daysPerMonth[m]) / 7)
    var html = "<table cellspacing='0'><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>"
    for (i = 0; i < strNums; i += 1) {
      html += '<tr>'
      for (k = 0; k < 7; k++) {
        var idx = 7 * i + k
        var date = idx - dayOfWeek + 1
        if (date <= 0 || date > daysPerMonth[m]) {
          date = '&nbsp;'
        } else {
          date = idx - dayOfWeek + 1
        }
        for (j in dateJson) {
          if (date === dateJson[j]) {
            flag = true
          }
        }
        flag ? (html += '<td date = ' + date + '><div class="today" style="margin:0 auto;width:80%;padding:5px 0px;">' + date + '</div></td>') : (html += '<td>' + date + '</td>')
        flag = false
      }
      html += '</tr>'
    }
    html += '</table>'
    var calender = document.getElementById('calender')
    calender.innerHTML = html
    var register = document.getElementById('button')
    var registerfun = function () {
      alert('签到成功')
    }
    register.addEventListener('click', registerfun, false)
  }
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    #calender table
       margin:0 auto
       height:200px
       width:calc(100% - 40px)
    #calender table td
      text-align:center
    .today
      background:rgb(0,204,0)
		tr
		  font-size:12px
		tr:first-child
		  font-size:14px
		#tecMessage
		  font-size:14px
		ul
		  list-style:none
		#buttongroup
		  top:40px
		  position:relative
    #button
      display:block
      width:80%
      height:40px
      background:rgb(71,120,199)
      color:white
      border:none
      margin:0 auto
</style>
