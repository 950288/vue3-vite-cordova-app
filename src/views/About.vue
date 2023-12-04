<template>
    <main>
        <h1>秸秆回收</h1>
        <section id="home">
            <p>欢迎使用秸秆回收App，您可以在这里快速提交秸秆回收请求，查看回收进度，以及获取最新的秸秆回收信息。</p>
        </section>

        <section id="submission">
            <h2>秸秆提交</h2>
            <form>
                <label for="straw-type">秸秆类型:</label>
                <select id="straw-type" name="straw-type">
                    <option value="wheat">小麦秸秆</option>
                    <option value="corn">玉米秸秆</option>
                    <!-- 其他秸秆类型选项 -->
                </select>

                <label for="quantity">数量:</label>
                <input type="number" id="quantity" name="quantity" min="1">

                <label for="location">位置信息:</label>
                <input type="text" id="location" name="location">

                <label for="date">预计回收时间:</label>
                <input type="date" id="date" name="date">

                <input type="submit" value="提交">
            </form>
        </section>

        <section id="progress">
            <h2>回收进度</h2>
            <p>您可以在这里查看您的秸秆回收请求的最新进度。</p>
            <progress class="progress is-success" value="60" max="100">60%</progress>
            <!-- 回收进度信息展示 -->
        </section>

        <section id="info">
            <h2>信息中心</h2>
            <p>获取关于秸秆回收的最新知识和政策信息。</p>
            <!-- 信息中心内容 -->
        </section>

        <section id="feedback">
            <h2>用户反馈</h2>
            <p>我们非常重视您的反馈，请告诉我们您的使用体验和建议。</p>
            <!-- 用户反馈表单 -->
        </section>

        <!-- <section id="settings">
            <h2>设置</h2>
            <p>在这里您可以修改您的账户信息和App设置。</p>
        </section> -->
    </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
*{
    text-align: left;
}
$primary-color: #4CAF50; // 主题颜色
$secondary-color: #FFC107; // 辅助颜色
$font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; // 字体

main {
  font-family: $font-family;
  color: #333;
  background-color: #f4f4f4;
  padding: 20px;
}

h1, h2 {
  color: $primary-color;
}

h2{
   margin-top: .5em;
   margin-bottom: .5em; 
}

section {
  margin-bottom: 20px;
  padding: 7px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

// 首页
#home {
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
  }
}

// 秸秆提交表单
#submission {
  form {
    display: flex;
    flex-direction: column;
    
    label {
      margin-bottom: 5px;
    }
    
    input[type="number"],
    input[type="text"],
    input[type="date"],
    select {
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    select, input{
        background: #fff;
        color: #000;
    }
    
    input[type="submit"] {
      background-color: $primary-color;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      width: 100px;
      margin: 0 auto;
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
  }
}

// 回收进度
#progress {
    .progress {
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;
    border-radius: 9999px;
    display: block;
    background: #e5e5e5;
    height: 1rem;
    overflow: hidden;
    padding: 0;
    width: 100%;
}
}

// 信息中心
#info {
  // 样式内容
}

// 用户反馈
#feedback {
  // 样式内容
}

</style>