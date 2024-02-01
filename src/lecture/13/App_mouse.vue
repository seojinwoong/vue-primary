<template>
  <div>
    <div id="modifier">
      <div @click="clickDIV">
        DIV 영역
        <p @click="clickP">
          P 영역
          <span @click="clickSPAN">
            SPAN 영역
          </span>
          <a href="https://naver.com" @click.prevent="clickA">a 영역</a>
        </p>
      </div>
    </div>
  </div>
  <button @click.once="clickDIV">원스</button>
</template>

<script>
export default {
  setup () {
    const clickDIV = () => {
      console.log('clickDIV');
    }
    const clickP = () => {
      console.log('clickP');
    }
    const clickSPAN = () => {
      console.log('clickSPAN');
    }
    const clickA = () => {
      alert('어떤 기능');
    }

    return {clickDIV ,clickP ,clickSPAN ,clickA}
  }
}
</script>

<style scoped>
  #modifier div, 
  #modifier p, 
    #modifier span {
      padding: 40px;
    } 
    #modifier div {
      background-color: #ccc;
    }
    #modifier p {
      background-color: #999;
    } 
    #modifier span {
      display: block;
      background-color: #666;
    } 
</style>