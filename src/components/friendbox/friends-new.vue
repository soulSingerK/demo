<template>
  <div class="wrapper">
    <div class="searchInput">
      <a href="###"><i class="m-icon">&#xe62f;</i></a>
      <input type="text" placeholder="请输入搜索的内容"  @input="searchWay(searchName)">
    </div>
    <div class="add-friend-time">
      <p class="time">今天</p>
      <ul class="items">
        <li class="item">
          <div class="img-wrapper">
            <img src="" alt="">
          </div>
          <div class="friend-info">
            <p class="friend-name">菲菲</p>
            <p class="friend-comment">添加申请文案什么数据</p>
          </div>
          <div class="user-operate">
            <button class="current-state" v-if="true">添加</button>
            <span v-if="false" class="current-state part-state">已添加</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
   name: 'friendsNew'
  }
</script>

<style lang="sass" scoped>
  .wrapper
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #D8D8D8;
  .searchInput
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #D8D8D8;
    i
      margin-left: 13px;
      font-size: 13px;
      color: #646464;
    >input
      width: calc(100% - 45px);
      height: 30px;
      line-height: 30px;
      padding: 5px 5px;
      border: none;
      &::-webkit-input-placeholder
        color: #999;
  .add-friend-time
    .time
      padding-left: 14px;
      height: 24px;
      line-height: 24px;
      background-color: #F5F8FB;
      font-size: 12px;
      color: #333333;
    .items
      padding-left: 14px;
      .item
        overflow: hidden;
        box-sizing: border-box;
        padding: 8px 0;
        border-bottom: 1px solid #D8D8D8;
        .img-wrapper
          float: left;
          width: 28px;
          height: 28px;
          background: #333;
          margin-right: 5px;
          img
            width: 100%;
            height: 100%;
        .friend-info
          float: left;
          .friend-name
            line-height: 1;
            font-size: 12px;
            color: #333;
          .friend-comment
            line-height: 1;
            font-size: 12px;
            color: #999;
            margin-top: 4px;
            width: 84px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        .user-operate
          float: right;
          .current-state
            background: #459AE9;
            border-radius: 3px;
            width: 40px;
            height: 20px;
            color: #fff;
            border: none;
            margin-top: 4px;
            margin-right: 14px;
            font-size: 12px;
            text-align: center;
            line-height: 20px;
            &.part-state
              display: block;
              color: #999;
              background-color: #F2F2F2;
</style>
