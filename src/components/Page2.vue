<template>
<div>


  <table border="1">
    <tr>东华大学食堂人口监控系统</tr>
    <tr></tr>
    <tr>
      <th> <img :src=imgUrl></th>
      <th> <img :src=imgUrl></th>
      <th> <img :src=imgUrl></th>
    </tr>
    <tr>
      <th> <img :src=imgUrl></th>
      <th> <img :src=imgUrl></th>
      <th> <img :src=imgUrl></th>
    </tr>
  </table>
</div>
</template>

<script>
export default {
name: "Picture1",
  data(){
    return {
      imgUrl:require("../assets/images/1.png")

    }

  }
}
</script>

<style scoped>
.main{
  margin: 40px auto;
}
.pic{
  width: 300px;
  float: left;
}
.clear{
  clear: both;
}
th{
  width: 300px;
  float: left;
}
table{
  margin: 0 auto;
}
</style>
