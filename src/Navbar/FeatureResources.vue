<template>
  <div>
    <button @mouseenter="isOpen = true" class="Feature-btn" :class="{ 'open': isOpen }" :style="{ color: isOpen ? '#29BF12' : '' }">
      Resources <i :class="arrowIconClass"></i>
    </button>
    <div>
      <div v-if="isOpen" class="modal" @mouseleave="isOpen = false">
        <div class="Feature-div one">
          <div class="nav-head">
            <h1>{{ div1Head }}<img :src="icon" alt="Arrow Right" class="icon"></h1>
          </div>
          <p>{{ div1P }}</p>
        </div>
        <div class="Feature-div two">
          <ul>
            <li v-for="(item, index) in div2List" :key="index">
              <img :src="icon" alt="Arrow Right" class="icon1">{{ item }}
            </li>
          </ul>
        </div>
        <div class="Feature-div">
          <ul>
            <li v-for="(item, index) in div3List1" :key="index">
              <img :src="icon" alt="Arrow Right" class="icon1">{{ item }}
            </li>
          </ul>
          <div>
            <h2>{{ div3li3 }}<img :src="icon" alt="Arrow Right" class="icon2"></h2>
            <h2>{{ div3li4 }}<img :src="icon" alt="Arrow Right" class="icon2"></h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrowRight from '@/assets/arrowRight.png';

export default {
  data() {
    return {
      isOpen: false,
      div1Head: "Resources",
      div1P: "Trusted LeanLaw resources and ideas on running a more efficient, profitable law firm.",

      div2List: ["Demo Center", "Blog", "Reviews"],

      div3List1: ["Support", "API & Documentation"],
      div3li3: "Integrations",
      div3li4: "Onboarding",

      icon: arrowRight
    }
  },
  computed: {
    arrowIconClass() {
      return this.isOpen ? 'fa fa-angle-up' : 'fa fa-angle-down';
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  margin-left: -41%;
  width: 1050px;
  height: 330px;
  background: #fff;
  display: flex;
  transition-property: opacity, transform, top;
  transition-timing-function: ease-in-out;
  transition-duration: 0.25s;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.16);
  border-radius: 29px;
}

.Feature-div {
  width: 350px;
}

.one {
  width: 215px;
  margin-left: 3rem;
}

.icon {
  width: 40px;
  height: 40px;
  margin-left: 1rem;
}

.icon1 {
  width: 25px;
  height: 25px;
}

.icon2 {
  width: 25px;
  height: 25px;
  margin-left: 1rem;
}

h1 {
  font-family: "Lexend", sans-serif;
  font-size: 35px;
  color: #29BF12;
  text-decoration: none;
  transition: color ease 0.25s, opacity ease 0.25s;
  position: relative;
  font-weight: 700;
  margin-top: 4rem;
  display: flex;
}

h1:hover {
  filter: grayscale(100%) brightness(0.1%) opacity(0.7);
}

p {
  font-family: "Lexend", sans-serif;
  font-size: 16px;
  color: #223843;
  line-height: 1.88;
  font-weight: 700;
  margin-top: 2.5rem;
}

li {
  list-style: none;
  color: #223843;
  font-family: "Lexend", sans-serif;
  line-height: 2;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease-in;
}

li:hover {
  transform: translateX(1rem);
}

.two {
  margin-left: 5rem;
}

.Feature-btn {
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: #fff;
  font-size: 16px;
  color: #223843;
}

.fa {
  margin-left: 0.3rem;
}

h2 {
  color: #223843;
  transition: all 0.3s ease-in;
  padding-left: 3rem;
  line-height: 2;
  display: flex;
  align-items: center;
}

h2:hover {
  color: #29BF12;
  transform: translateX(1rem);
}
</style>
