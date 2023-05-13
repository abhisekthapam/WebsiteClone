<template>
  <div>
    <div v-if="$route.path === '/features'">
      <div>
        <router-view></router-view>
      </div>
    </div>

    <div v-else-if="$route.path === '/trustaccounting'">
      <div>
        <router-view></router-view>
      </div>
    </div>

    <div v-else-if="$route.path === '/reportsandcompensiontracking'">
      <div>
        <router-view></router-view>
      </div>
    </div>

    <div v-else-if="$route.path === '/billing'">
      <div>
        <router-view></router-view>
      </div>
    </div>

    <div v-else-if="$route.path === '/leanlawpayments'">
      <div>
        <router-view></router-view>
      </div>
    </div>

    <div v-else-if="$route.path === '/mattermanagement'">
      <div>
        <router-view></router-view>
      </div>
    </div>

    <div v-else-if="$route.path === '/timeandexpensetracking'">
      <div>
        <router-view></router-view>
      </div>
    </div>

    <div v-else>
      <TheNavbar />
      <TheHome />
      <TheRibbon />
      <TheAbout />
      <TheAboutSecond />
      <TheAboutThird />
      <TheFooter />
    </div>
  </div>
</template>


<script>
import TheNavbar from './components/TheNavbar.vue'
import TheHome from './components/TheHome.vue'
import TheRibbon from './components/TheRibbon.vue';
import TheAbout from './components/TheAbout.vue';
import TheAboutSecond from './components/TheAboutSecond.vue';
import TheAboutThird from './components/TheAboutThird.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'App',
  components: {
    TheNavbar,
    TheHome,
    TheRibbon,
    TheAbout,
    TheAboutSecond,
    TheAboutThird,
    TheFooter,
  }
}
</script>


