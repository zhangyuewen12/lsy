<template>
<div>
  <router-link to="/page2">Go to page2</router-link>
  <router-link to="/page3">Go to page3</router-link>

  <head>
    <title>登录</title>
    <!-- Meta tag Keywords -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" />
    <meta name="keywords" content="Triple Forms Responsive Widget,Login form widgets, Sign up Web forms , Login signup Responsive web form,Flat Pricing table,Flat Drop downs,Registration Forms,News letter Forms,Elements" />

    <!-- Meta tag Keywords -->

    <!-- css files -->
<!--    <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />-->
<!--    &lt;!&ndash; Style-CSS &ndash;&gt;-->
<!--    <link href="css/font-awesome.min.css" rel="stylesheet">-->
    <!-- Font-Awesome-Icons-CSS -->
    <!-- //css files -->

  </head>

  <body>
  <div class="main-bg" id="mian">
    <!-- title -->
    <h1>uimaker后台管理系统</h1>
    <!-- //title -->
    <div class="sub-main-w3">
<!--       vertical tabs -->
      <div class="vertical-tab">
        <div id="section1" class="section-w3ls">
          <input type="radio" name="sections" id="option1" checked>
          <label for="option1" class="icon-left-w3pvt"><span class="fa fa-user-circle" aria-hidden="true"></span>登录</label>
          <article>
            <form action="#" method="post">
              <h3 class="legend">账号登录</h3>
              <div class="input">
                <span class="fa fa-envelope-o" aria-hidden="true"></span>
                <input type="email" v-model="temp" placeholder="邮箱" name="email" required />
              </div>
              <div class="input">
                <span class="fa fa-key" aria-hidden="true"></span>
                <input type="password" v-model="temp" placeholder="密码" name="password" required />
              </div>
              <button type="submit" class="btn submit">登 录</button>
              <a href="#" class="bottom-text-w3ls">忘记密码?</a>
            </form>
          </article>
        </div>
        <div id="section2" class="section-w3ls">
          <input type="radio" name="sections" id="option2">
          <label for="option2" class="icon-left-w3pvt"><span class="fa fa-pencil-square" aria-hidden="true"></span>注册</label>
          <article>
            <form action="#" method="post">
              <h3 class="legend">注册帐户</h3>
              <div class="input">
                <span class="fa fa-user-o" aria-hidden="true"></span>
                <input type="text" v-model="temp"  placeholder="用户名" name="name" required />
              </div>
              <div class="input">
                <span class="fa fa-key" aria-hidden="true"></span>
                <input type="password" v-model="temp"  placeholder="密码" name="password" required />
              </div>
              <div class="input">
                <span class="fa fa-key" aria-hidden="true"></span>
                <input type="password" v-model="temp"  placeholder="确认密码" name="confirmPassword" required />
              </div>
              <button type="submit" class="btn submit">注 册</button>
            </form>
          </article>
        </div>
        <div id="section3" class="section-w3ls">
          <input type="radio" name="sections" id="option3">
          <label for="option3" class="icon-left-w3pvt"><span class="fa fa-lock" aria-hidden="true"></span>忘记密码?</label>
          <article>
            <form action="#" method="post">
              <h3 class="legend last">重置密码</h3>
              <p class="para-style">请在下面输入您的电子邮件地址，我们将给您发送一封带有说明的电子邮件。</p>
              <p class="para-style-2"><strong>需要帮助?</strong>了解更多关于如何 <a href="#">#</a></p>
              <div class="input">
                <span class="fa fa-envelope-o" aria-hidden="true"></span>
                <input type="email" v-model="temp" placeholder="邮箱" name="email" required />
              </div>
              <button type="submit" class="btn submit last-btn">提交</button>
            </form>
          </article>
        </div>
      </div>
      <!-- //vertical tabs -->
      <div class="clear"></div>
    </div>
    <!-- copyright -->
<!--    <div class="copyright">-->
<!--      <h2>Copyright &copy; 2019 - {{nowYear}} 版权所有| by-->
<!--        <a href="#">ChanKwongwing</a>-->
<!--      </h2>-->
<!--    </div>-->
    <!-- //copyright -->
  </div>

  </body>
</div>
</template>

<script>
import "@/assets/css/style.css";
import "@/assets/css/style.css";
export default {
  name: "Login",
  data: {
    nowYear:new Date().getFullYear(),
    temp:""
  }
}
</script>

<style scoped>

</style>
