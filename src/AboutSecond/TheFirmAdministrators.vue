<template>
  <div class="main-container">
    <div class="main-div">
      <div>
        <div class="text-container" :class="{ 'details-shown': showDetails }">
          <h1 class="head-text" :style="{ color: showDetails ? '#29bf12' : '#223843' }">
            {{ headText }}
            <i class="fa-sharp fa-solid fa-plus" @click="showDetails = true; activeImage = 'TheFirmAdministratorImage'"
              v-show="!showDetails"></i>

            <i class="fa-sharp fa-solid fa-xmark fa-lg" style="color: #29bf12;" v-show=" showDetails "
              @click=" showDetails = false "></i>
          </h1>
          <p class="ptext" v-show=" showDetails ">{{ headP }}</p>
          <div class="learn-div" v-show=" showDetails ">
            <p class="learn"><strong>Learn More<i class="fa-sharp fa-solid fa-arrow-right"></i></strong></p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="text-container1" :class=" { 'details-shown': showDetails1 } ">
            <h1 class="head-text" :style=" { color: showDetails1 ? '#29bf12' : '#223843' } ">
              {{ headText1 }}
              <i class="fa-sharp fa-solid fa-plus icon1"
                @click=" showDetails1 = true; activeImage = 'TheAccountingAndBookkeepingImage' "
                v-show=" !showDetails1 "></i>

              <i class="fa-sharp fa-solid fa-xmark fa-lg icon1" style="color: #29bf12;" v-show=" showDetails1 "
                @click=" showDetails1 = false "></i>
            </h1>
            <p class="ptext" v-show=" showDetails1 ">{{ headP1 }}</p>
            <div class="learn-div" v-show=" showDetails1 ">
              <p class="learn"><strong>Learn More<i class="fa-sharp fa-solid fa-arrow-right"></i></strong></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="text-container2" :class=" { 'details-shown': showDetails2 } ">
          <h1 class="head-text" :style=" { color: showDetails2 ? '#29bf12' : '#223843' } ">
            {{ headText2 }}
            <i class="fa-sharp fa-solid fa-plus icon2"
              @click=" showDetails2 = true; activeImage = 'ThePartnersAndAttorneysImage' " v-show=" !showDetails2 "></i>

            <i class="fa-sharp fa-solid fa-xmark fa-lg icon2" style="color: #29bf12;" v-show=" showDetails2 "
              @click=" showDetails2 = false "></i>
          </h1>
          <p class="ptext" v-show=" showDetails2 ">{{ headP2 }}</p>
          <div class="learn-div" v-show=" showDetails2 ">
            <p class="learn"><strong>Learn More<i class="fa-sharp fa-solid fa-arrow-right"></i></strong></p>
          </div>
        </div>
      </div>
    </div>
    <div class="image">
      <component :is="activeImage" />
    </div>
  </div>
</template>

<script>
import TheFirmAdministratorImage from './TheFirmAdministratorImage.vue';
import TheAccountingAndBookkeepingImage from './TheAccountingAndBookkeepingImage.vue';
import ThePartnersAndAttorneysImage from './ThePartnersAndAttorneysImage.vue';

export default {
  components: {
    TheFirmAdministratorImage,
    TheAccountingAndBookkeepingImage,
    ThePartnersAndAttorneysImage,
  },
  data() {
    return {
      activeImage: 'TheFirmAdministratorImage',
      headText: "Firm Administrators",
      headP:
        "Remove billing process bottlenecks, streamline invoicing, track time and easily run firm reports",
      showDetails: true,
      headText1: "Accountants & Bookkeeping",
      headP1:
        "Manage law firm financials without pulling your hair out, and always know you’re audit-ready",
      showDetails1: false,
      headText2: "Partners & Attorneys",
      headP2:
        "Make your law firm a billing machine, maximize your staff’s billable time to leave nothing on the table",
      showDetails2: false,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    handleOutsideClick(event) {
      const details = this.$el.querySelector('.text-container');
      const details1 = this.$el.querySelector('.text-container1');
      const details2 = this.$el.querySelector('.text-container2');
      if (details && !details.contains(event.target)) {
        this.showDetails = false;
      }
      if (details1 && !details1.contains(event.target)) {
        this.showDetails1 = false;
      }
      if (details2 && !details2.contains(event.target)) {
        this.showDetails2 = false;
      }
    },
  },
};

</script>
    
  
<style scoped>
.image {
  float: right;
  margin-left: 7rem;
}

.text-container {
  width: 520px;
  border-top: 3px solid rgb(237, 230, 230);
  border-bottom: 3px solid rgb(237, 230, 230);
  margin-bottom: 1.5rem;
}

.text-container1 {
  width: 520px;
  border-top: 3px solid rgb(237, 230, 230);
  border-bottom: 3px solid rgb(237, 230, 230);
  margin-bottom: 1.5rem;
}

.text-container2 {
  width: 520px;
  border-top: 3px solid rgb(237, 230, 230);
  border-bottom: 3px solid rgb(237, 230, 230);
  margin-bottom: 1.5rem;
}

.head-text {
  font-size: 28px;
  font-family: "Open Sans", sans-serif;
  text-transform: none;
  font-weight: 700;
  margin-top: 1.5rem;
}

.ptext {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.63;
}

.learn {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 20px;
  border-bottom: 2px solid black;
  width: 8.2rem;
  transition: all 0.3s ease;
}

.learn:hover {
  width: 9.9rem;
  transition: all 0.3s ease;
}


.learn:hover i {
  transform: translateX(2rem);
  transition: all 0.3s ease;
}

.fa-sharp {
  margin-left: 1rem;
  font-weight: 900;
  font-size: 20px;
  transition: all 0.3s ease;
}

.fa-plus {
  color: black;
  margin-left: 14rem;
}

.fa-xmark {
  margin-left: 14rem;
}

.text-container:not(.details-shown) {
  border: none;
}

.text-container1:not(.details-shown) {
  border: none;
}

.text-container2:not(.details-shown) {
  border: none;
}

.main-div {
  width: 520px;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-left: 13rem;
  margin-top: 5rem;
}

.main-container {
  display: flex;
  flex-direction: row;
}

.icon1 {
  margin-left: 6.8rem;
}

.icon2 {
  margin-left: 13.2rem;
}
</style>
