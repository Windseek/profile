<template>
<nav class="bar bar-tab" id="nav">
    <a class="tab-item external a-board" href="#">
        <span class="icon icon-board"></span>
        <span class="tab-label">积分兑换</span>
    </a>
    <a class="tab-item external a-task" href="#">
        <span class="icon icon-task"></span>
        <span class="tab-label">兑换历史</span>
    </a>
    <a class="tab-item external a-mine" href="#">
        <span class="icon icon-mine"></span>
        <span class="tab-label"><router-link to="/mine" style="text-decoration: none;color:rgb(102,102,102)">我的</router-link></span>
    </a>
</nav>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #nav
      width:100%
      display:flex
      position:absolute
      bottom:0px
    #nav .tab-item
      flex:1
      display:inline-block
      text-align:center
      text-decoration:none
    #nav .tab-label
      display:block
      color:rgb(146,146,146)
    .bar-tab .tab-item .icon ~ .tab-label
      top:0px
      font-size:12px
    #nav .bar-tab .tab-item.active, .bar-tab .tab-item:active
      color:#4778c7
    #nav .icon
      display:inline-block
    #nav .icon-board
      background:url("../img/board.svg") no-repeat
      background-size:30px 30px
      height:30px
      width:30px
    #nav .icon-task
      background:url("../img/task.svg") no-repeat
      background-size:30px 30px
      height:30px
      width:30px
    #nav .icon-scans
      background:url("../img/scans.svg") no-repeat
      background-size:30px 30px
      height:30px
      width:30px
    #nav .icon-ranking
      background:url("../img/ranking.svg") no-repeat
      background-size:30px 30px
      height:30px
      width:30px
    #nav .icon-time-clock
      background:url("../img/time-clock.svg") no-repeat
      background-size:30px 30px
      height:30px
      width:30px
    #nav .icon-mine
      background:url('../img/mine.svg')  no-repeat
      background-size:30px 30px
      height:30px
      width:30px
    #nav .active .icon-board
      background:url('../img/board-active.svg')  no-repeat
      background-size: 30px 30px
      height: 30px
      width: 30px
    #nav .active .icon-task
      background:url('../img/task-active.svg')  no-repeat
      background-size: 30px 30px
      height: 30px
      width: 30px
    #nav .active .icon-scans
      background:url('../img/scans-active.svg')  no-repeat
      background-size: 30px 30px
      height: 30px
      width: 30px
    #nav .active .icon-ranking
      background:url('../img/ranking-active.svg')  no-repeat
      background-size: 30px 30px
      height: 30px
      width: 30px
    #nav .active .icon-time-clock
      background:url('../img/time-clock-active.svg')  no-repeat
      background-size: 30px 30px
      height: 30px
      width: 30px
    #nav .active .icon-mine
      background:url('../img/mine-active.svg')  no-repeat
      background-size:30px 30px
      height:30px
      width:30px
</style>
