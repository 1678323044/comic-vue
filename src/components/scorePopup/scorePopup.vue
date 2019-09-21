<template>
  <section>
    <div class="popup-bg" @click="handleClose"></div>
    <div class="score-popup">
      <div>
        <h6>打分</h6>
      </div>
      <div>
        <span><i @click="handleSelected(index)" v-for="(item,index) in 5" :class="['iconfont',action >= index ? icon2 : icon1]"></i></span>
      </div>
      <div>
        <button @click="handleScoring">确定</button>
      </div>
      <div class="close" @click="handleClose"><i class="iconfont iconcuowu"></i></div>
    </div>
  </section>
</template>

<script>
  import {reqScore} from '../../api/index'
  export default {
      data(){
          return{
              icon1: 'iconshoucangxingxing-xianxing',
              icon2: 'iconshoucangxingxing',
              action: -1,  // 保存当前点击的星星的索引值
              param: {}
          }
      },
      methods: {
          async handleScoring(){
              let result = await reqScore(this.param);
              if (result.state === 'ok'){
                  console.log(result.message)
                  return
              }
              console.log(result.message)
              this.$emit('closePopup',false)
          },
          handleClose(){
            this.$emit('closePopup',false)
          },
          handleSelected(index){
              this.action = index
              this.param = {"bookId": this.$route.query.bookId,"grade": (index + 1) * 2}; //评分2到10
          }
      }
  }
</script>

<style>
  .score-popup{
    width: 70%;
    height: 40%;
    border-radius: 12px;
    background: #ffffff;
    position: fixed;
    z-index: 99999;
    top: 50%;
    left: 50%;
    margin: -45% 0 0 -35%;
    overflow: hidden;
    text-align: center;
  }
  .score-popup div:nth-child(1){
    height: 20%;
    background: #FA6653;
  }
  .score-popup h6{
    font-size: 2.4rem;
    color: #ffffff;
    margin: 0;
  }
  .score-popup div:nth-child(2){
    height: 50%;
    padding: 20% 0 0 0;
    box-sizing: border-box;
  }
  .score-popup span i{
    font-size: 4.6rem;
    color: #FA6653;
  }
  .score-popup div:nth-child(3){
    height: 30%;
  }
  .score-popup button{
    width: 80%;
    display: block;
    margin: 0 auto;
    line-height: 3.2rem;
    text-align: center;
    background: #FA6653;
    border-radius: 40px;
    color: #ffffff;
    border: none;
    font-size: 1.8rem;
  }
  .score-popup .close{
    position: absolute;
    top: 4%;
    right: 4%;
    color: #ffffff;
  }
  .score-popup .close i{
    font-size: 2.4rem;
  }
</style>
