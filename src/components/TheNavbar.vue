<template>
  <div class="container">
    <img :src="Logo" alt="Lean Law Logo" width="196" height="55.41" class="leanlaw-logo" />
    <ul class="nav-list">
      <li>
        <FeatureDropdown />
      </li>
      <li>
        <FeatureSolution />
      </li>
      <li>
        <FeatureCaseStudy />
      </li>
      <li>
        <FeaturePricing />
      </li>
      <li>
        <FeatureResources />
      </li>
      <li>
        <FeatureAbout />
      </li>
    </ul>
    <div>
      <button class="login-btn">{{loginBtn}}</button>
      <button class="request-btn">{{ requestBtn }}</button>
    </div>
    <div>
      <FeatureSearch />
    </div>
  </div>
</template>
  
<script>
import LeanLawLogo from '@/assets/LeanLawLogo.png';
import FeatureDropdown from '../Navbar/FeatureDropdown.vue';
import FeatureSolution from '../Navbar/FeatureSolution.vue';
import FeatureSearch from '../Navbar/FeatureSearch.vue'
import FeatureCaseStudy from '../Navbar/FeatureCaseStudy.vue';
import FeaturePricing from '../Navbar/FeaturePricing.vue';
import FeatureResources from '../Navbar/FeatureResources.vue';
import FeatureAbout from '../Navbar/FeatureAbout.vue';

export default {
  data() {
    return {
      Logo: LeanLawLogo,
      showList: false,
      loginBtn: "Login",
      requestBtn: "Request a Demo"
    };
  },
  components: {
    FeatureDropdown,
    FeatureSolution,
    FeatureCaseStudy,
    FeaturePricing,
    FeatureResources,
    FeatureAbout,
    FeatureSearch
  }
};
</script>


<style scoped>
.container {
  display: flex;
  margin: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
}

.leanlaw-logo {
  margin-top: 1.2rem;
}
.nav-list {
  display: flex;
  list-style: none;
}

.nav-list li {
  margin-right: 10px;
  margin-left: 30px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: #223843;
  position: relative;
  cursor: pointer;
  top: 0;
}
.nav-list li:hover {
  color: #29BF12;
}

.login-btn {
  font-family: "Lexend", sans-serif;
  font-weight: 500;
  text-align: center;
  border-radius: 22px;
  text-decoration: none;
  transition: opacity ease 0.25s;
  font-size: 14px;
  padding: 12px 20px;
  border: 1px solid#29BF12;
  margin-left: 65px;
  cursor: pointer;
  margin-top: 1.6rem;
}
.login-btn:hover {
    background: #e3ffde;
}

.request-btn {
  color: #fff;
  font-family: "Lexend", sans-serif;
  font-weight: 500;
  text-align: center;
  border-radius: 22px;
  text-decoration: none;
  transition: opacity ease 0.25s;
  font-size: 14px;
  padding: 14px 22px;
  background: linear-gradient(270deg, #aafe4e 0%, #29bf12 100%);
  border: none;
  margin-left: 10px;
  cursor: pointer;
}
.request-btn:hover {
  background: #9af089;;
}
</style>





