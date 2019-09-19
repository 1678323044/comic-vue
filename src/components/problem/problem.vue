<template>
  <div class="problem">
    <h5>关于金币充值常见问题</h5>
    <ul>
      <li v-for="(problem,index) in problems" :key="index">
        <div @click="handleShow(index)">{{problem.doubt}} <i class="mui-icon mui-icon-arrowdown"></i></div>
        <div v-show="problem.state">{{problem.answer}}</div>
      </li>
      <li>
        <div>5、如有其他问题请联系客服</div>
      </li>
      <li>
        <button>联系客服</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
      props: ['problems'],
      methods: {
          handleShow(index){
            this.problems[index].state = !this.problems[index].state
          }
      }
  }
</script>

<style scoped>
  .problem{
    background: #ffffff;
    border-radius: 8px;
  }
  .problem h5{
    line-height: 60px;
    font-size: 18px;
    color: #333333;
    text-align: center;
  }
  .problem li{
    border-bottom: #f6f6f6 solid 1px;
    padding: 0 10px 0 17px;
  }
  .problem li:last-child{
    text-align: center;
    padding: 30px 0;
    border: none;
  }
  .problem li:last-child button{
    padding: 3% 15%;
    background: #FA6653;
    border: 1px transparent solid;
    color: #ffffff;
    border-radius: 40px;
    font-size: 18px;
  }
  .problem li div:nth-child(1){
    font-size: 17px;
    display: flex;
    padding: 14px 0;
    justify-content: space-between;
  }
  .problem li div:nth-child(1) i{
    color: #666666;
  }
  .problem li div:nth-child(2){
    line-height: 28px;
    color: #999999;
  }
</style>
