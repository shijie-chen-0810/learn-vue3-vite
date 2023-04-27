<template>
  <div class="container">
    <div
      :class="{ item: true, 'home-one-animation1': true }"
      :style="{ backgroundColor: '#eef5fe', color: '#dfe54e' }"
    >
      浅紫
    </div>
    <div
      :class="{ item: true, 'home-one-animation2': true }"
      :style="{ backgroundColor: '#f2f9ec', color: '#7ebf50' }"
    >
      浅绿
    </div>
    <div
      :class="{ item: true, 'home-one-animation3': true }"
      :style="{ backgroundColor: '#fcf6ed', color: '#dda450' }"
    >
      浅黄
    </div>
    <div
      :class="{ item: true, 'home-one-animation4': true }"
      :style="{ backgroundColor: '#fcf0f0', color: '#e57470' }"
    >
      浅红
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
}
.item {
  color: #fff;
  text-align: center;
  flex: 0.2;
  line-height: 40px;
  font-size: 16px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
.home-one-animation1 {
  opacity: 0;
  animation-name: error-num;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 0s;
}
.home-one-animation2 {
  opacity: 0;
  animation-name: error-num;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 0.25s;
}
.home-one-animation3 {
  opacity: 0;
  animation-name: error-num;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
}
.home-one-animation4 {
  opacity: 0;
  animation-name: error-num;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 0.75s;
}
@keyframes error-num {
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
