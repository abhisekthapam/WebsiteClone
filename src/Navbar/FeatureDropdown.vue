<template>
  <div>
    <button @mouseenter="isOpen = true"  class="Feature-btn" :style="{ color: isOpen ? '#29BF12' : '' }">
      Features <i :class="[isOpen ? 'fa fa-angle-up' : 'fa fa-angle-down']"></i>
    </button>
    <div>
      <div v-if="isOpen" class="modal" @mouseleave="isOpen = false">
        <div class="Feature-div one">
          <div class="nav-head">
            <h1 @click="navigateToFeaturesLink">{{ div1Head }}<img :src="icon" alt="Arrow Right" class="icon"></h1>
          </div>
          <p>{{ div1P }}</p>
        </div>
        <div class="Feature-div 2">
          <ul>
            <li @click="navigateToTrustAccounting">
              <img :src="icon" alt="Arrow Right" class="icon1">Trust Accounting
            </li>
            <li @click="navigateToTheReportsAndCompensionTracking">
              <img :src="icon" alt="Arrow Right" class="icon1">Reports & Compension Tracking
            </li>
            <li @click="navigateToTheBilling">
              <img :src="icon" alt="Arrow Right" class="icon1">Billing
            </li>
          </ul>
        </div>
        <div class="Feature-div 3">
          <ul>
            <li @click="navigateToTheLeanLawPayments">
              <img :src="icon" alt="Arrow Right" class="icon1">LeanLaw Payments
            </li>
            <li @click="navigateToTheMatterManagement">
              <img :src="icon" alt="Arrow Right" class="icon1">Matter Management
            </li>
            <li @click="navigateToTheTimeAndExpenseTracking">
              <img :src="icon" alt="Arrow Right" class="icon1">Time & Expense Tracking
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrowRight from '@/assets/arrowRight.png';
import router from '@/router';

export default {
  data() {
    return {
      isOpen: false,
      div1Head: "Features",
      div1P: "The easiest way to bill and efficiently grow your firm.",
      icon: arrowRight
    }
  },
  methods: {
    arrowIconClass() {
      return this.isOpen ? 'fa fa-angle-up' : 'fa fa-angle-down';
    },
    navigateToFeaturesLink() {
      router.push({ name: 'TheFeaturesLink' });
    },
    navigateToTrustAccounting() {
      router.push({ name: 'TheTrustAccounting' });
    },
    navigateToTheReportsAndCompensionTracking() {
      router.push({ name: 'TheReportAndCompensionTracking' });
    },
    navigateToTheBilling() {
      router.push({name: 'TheBilling' });
    },
    navigateToTheLeanLawPayments() {
      router.push({name: 'TheLeanLawPayments'});
    },
    navigateToTheMatterManagement() {
      router.push({name: 'TheMatterManagement'});
    },
    navigateToTheTimeAndExpenseTracking() {
      router.push({name: 'TheTimeAndExpenseTracking'});
    }
  }
}
</script>






<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  margin-left: -5%;
  width: 1050px;
  height: 300px;
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
  width: 220px;
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
  line-height: 3.5;
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

</style>
