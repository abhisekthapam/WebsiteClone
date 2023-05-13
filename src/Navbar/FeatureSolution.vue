<template>
  <div>
    <button @mouseenter="isOpen = true" class="Feature-btn" :style="{ color: isOpen ? '#29BF12' : '' }">
      Solutions <i :class="isOpen ? 'fa fa-angle-up' : 'fa fa-angle-down'"></i>
    </button>
    <div>
      <div v-if="isOpen" class="modal" @mouseleave="isOpen = false">
        <div class="Feature-div one">
          <div class="nav-head">
            <h1>{{ div1Head }}<img :src="icon" alt="Arrow Right" class="icon"></h1>
          </div>
          <p>{{ div1P }}</p>
        </div>
        <div v-for="(section, index) in sections" :key="index" :class="'Feature-div ' + section.class">
        <h2>{{ section.heading }}</h2>
        <ul>
          <li v-for="(item, i) in section.items" :key="i"><img :src="icon" alt="Arrow Right" class="icon1">{{ item }}</li>
        </ul>
      </div>
        <div class="Feature-div three">
          <h2>{{ div3h2 }}</h2>
          <ul>
            <li><img :src="icon" alt="Arrow Right" class="icon1">{{ div3li1 }}</li>
            <li><img :src="icon" alt="Arrow Right" class="icon1">{{ div3li2 }}</li>
            <li class="icon2"><img :src="icon" alt="Arrow Right" class="icon1 arr">{{ div3li3 }}</li>
          </ul>
        </div>
        <div class="Feature-div">
          <h2>{{ div4h2 }}</h2>
          <ul>
            <li><img :src="icon" alt="Arrow Right" class="icon1">{{ div4li1 }}</li>
            <li><img :src="icon" alt="Arrow Right" class="icon1">{{ div4li2 }}</li>
            <li><img :src="icon" alt="Arrow Right" class="icon1">{{ div4li3 }}</li>
            <li><img :src="icon" alt="Arrow Right" class="icon1">{{ div4li4 }}</li>
          </ul>
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
      div1Head: "Solutions",
      div1P: "LeanLaw’s cloud-based software helps your firm run efficiently, with solutions that fit you and your clients’ needs.",

      sections: [
        {
          class: 'two',
          heading: 'By Use Case',
          items: ['Fixed Fees', 'Hourly Billing', 'Contingency Fees']
        },
      ],

      div3h2: "By Firm Type",
      div3li1: "Small Law Firms",
      div3li2: "Mid-size Law Firms",
      div3li3: "Modern & Distributed Law Firms",

      div4h2: "By Role",
      div4li1: "Firm Administrators",
      div4li2: "Billing & Accounting Staff",
      div4li3: "Partners & Attorneys",
      div4li4: "LeanLaw Pros",

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
  margin-left: -14%;
  width: 1050px;
  height: 400px;
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
  width: 210px;
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
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease-in;
  line-height: 2;
  margin-left: -2.5rem;
}

li:hover {
  transform: translateX(1rem);
}

.two {
  width: 250px;
  margin-left: 4rem;
}

.three {
  width: 250px;
  margin-left: 1rem;
  margin-right: 2rem;
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
  margin-top: 4rem;
  color: #223843;
}

.icon2 {
  align-items: flex-start;
}

.arr {
  padding-top: 0.2rem;
}
</style>
