<template>
  <div class="box">
    <div class="swiper-container">
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, i) in productList" :key="i">
          <div class="product-card">
            <div class="img-box">
              <img :src="item.image" :alt="item.name" />
            </div>
            <div class="content-box">
              <h3>{{ item.name }}</h3>
              <p>{{ item.desc }}</p>
              <router-link :to="item.path" class="action-btn">
                查看详情
              </router-link>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <button class="button" @click="$router.push('/')">
      <span class="text">home</span>
      <span class="svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 38 15" fill="none">
          <path fill="white"
            d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z">
          </path>
        </svg>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import b1 from '../assets/images/b1.jpg';
import other from '../assets/images/other.png';
const modules = [EffectCoverflow, Pagination, Navigation];
const productList = ref([
  { name: 'charger', desc: 'INPUT:100-240~50/60Hz OUTPUT:DC 5V 3A', path: '/sales', image: b1 },
  { name: 'other', desc: 'under construction', path: '/other', image: other },
]);
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: url(../assets/images/banner.jpg) no-repeat;
  background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.swiper-container {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 60px;

  .swiper {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 40px;
  }

  .swiper-slide {
    width: 300px;
    height: 420px;
    opacity: 0.5;
    filter: blur(4px); 
    transition: all 0.4s ease;

    &.swiper-slide-active {
      opacity: 1;
      filter: blur(0);
      z-index: 10;
    }
  }
}

.product-card {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 106, 255, 0.5);
    box-shadow: 0 25px 50px rgba(0, 106, 255, 0.2);
  }

  .img-box {
    width: 100%;
    height: 58%;
    overflow: hidden;
    border-bottom: 1px solid rgba(255,255,255,0.05);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
  }

  &:hover .img-box img {
    transform: scale(1.12);
  }

  .content-box {
    flex: 1;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff;

    h3 {
      font-size: 1.6rem;
      margin: 0 0 12px 0;
      font-weight: 700;
      letter-spacing: 1px;
    }

    p {
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: auto;
      line-height: 1.5;
    }

    .action-btn {
      margin-top: 20px;
      padding: 10px 28px;
      background: linear-gradient(90deg, #006aff, #00a2ff);
      color: #fff;
      text-decoration: none;
      border-radius: 30px;
      font-size: 0.95rem;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 106, 255, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 106, 255, 0.5);
      }
      &:active {
        transform: translateY(0);
      }
    }
  }
}

:deep(.swiper-pagination-bullet) {
  width: 24px;
  height: 4px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  margin: 0 6px !important;
  opacity: 1;
  transition: all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000);

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
}

:deep(.swiper-pagination-bullet-active) {
  width: 48px;
  background: #006aff;
  box-shadow: 0 0 20px rgba(0, 106, 255, 0.7);
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(8px);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fff; 
  transition: all 0.3s ease;
  svg {
    width: 10px;
  }
  
  &:hover {
    background: rgba(0, 106, 255, 0.15); 
    border-color: rgba(0, 106, 255, 0.6);
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(0, 106, 255, 0.4);
    color: #fff;
  }
}

:deep(.swiper-button-prev) {
    left: 20px;
}
:deep(.swiper-button-next) {
    right: 20px;
}


.button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 32px;
  background-color: #006aff;
  border: 8px solid #c0dfff;
  color: white;
  gap: 8px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 100;
  box-shadow: 0 10px 20px -10px rgba(0, 106, 255, 0.5);
}

.text {
  font-size: 1.2em;
  font-weight: 700;
  letter-spacing: 1px;
}

.svg {
  padding-top: 5px;
  height: 100%;
  width: fit-content;
}

.svg svg {
  width: 50px;
  height: 30px;
}

.button:hover {
  border: 8px solid #b1d8ff;
  background-color: #1b7aff;
  transform: translateY(-2px);
}

.button:active {
  border: 5px solid #c0dfff;
  transform: translateY(0);
}

.button:hover .svg svg {
  animation: jello-vertical 0.9s both;
  transform-origin: left;
}

@keyframes jello-vertical {
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(0.75, 1.25, 1); }
  40% { transform: scale3d(1.25, 0.75, 1); }
  50% { transform: scale3d(0.85, 1.15, 1); }
  65% { transform: scale3d(1.05, 0.95, 1); }
  75% { transform: scale3d(0.95, 1.05, 1); }
  100% { transform: scale3d(1, 1, 1); }
}
</style>