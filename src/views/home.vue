<script setup>
let lxList = [
  {
    label: 'Tel：',
    value: '+86 13602659020'
  },
  {
    label: 'E_mail：',
    value: 'evincesong888@outlook.com'
  },
  {
    label: 'Address：',
    value: '8th Floor, Yangtian Industrial Building,Fenghuang Subdistrict, Guangming DistricShenzhen, Guangdong Province, China'
  }
]
</script>

<template>
  <div class="app">
    <div class="link-box">
      <router-link to="research">Electronic product research and development</router-link>
      <router-link to="products">Electronic product manufacturing/sales</router-link>
    </div>
    <div class="lx">
      <div class="lx-item" v-for="(item, i) in lxList" :key="i">
        <p class="label">{{ item.label }}</p>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  width: 100vw;
  height: 100vh;
  background: url(../assets/images/banner.jpg) no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

.link-box {
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding-top: 4vw;
  padding-left: 4vw;
  a {
    color: #fff;
    font-size: 4vw;
    transition: transform .3s ease-in-out,color .3s ease-in-out;
    &:hover {
      color: #f00;
      transform: translateX(1vw);
      text-decoration: underline;
    }
  }
}
.lx {
    width: 40vw;
    position: absolute;
    bottom: 2vw;
    right: 0vw;
    color: #fff;
    .lx-item {
        display: flex;
        align-items: flex-start;
        gap: 1vw;
        font-size: 1.2vw;
        text-shadow: 0px 0px 1vw rgba(0, 0, 0, 0.5);
        p {
            display: block;
            min-width: 12vw;
            text-align: right;
        }
    }
}

@media (max-width: 768px) {
  .link-box {
    gap: 6vw;
    padding-top: 10vw;
    padding-left: 6vw;
    a {
      font-size: 6vw;
    }
  }
  .lx {
    width: 90vw;
    bottom: 4vw;
    left: 5vw;
    right: auto;
    .lx-item {
      flex-direction: column;
      gap: 2vw;
      font-size: 3.5vw;
      margin-bottom: 3vw;
      p {
        min-width: auto;
        text-align: left;
      }
    }
  }
}
</style>
