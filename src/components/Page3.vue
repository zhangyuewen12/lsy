<template>
  <div>
    <table>
      <tr>
        <td><img :src=imgUrl></td>
        <td><img :src=imgUrl></td>
        <td style="vertical-align:top;overflow: hidden;">
          <p>地点：第一食堂</p>
          <p>可容纳人数：第一食堂</p>
          <p>当前人数：第一食堂</p>
          <p>状态：第一食堂</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl:require("../assets/images/1.png")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td{
  height: 400px;
  width: 300px;
  padding-left: 10px;
}

table{
  margin: 0 auto;
}
p{
  padding-top: 40px;
}
</style>
