import { createRouter, createWebHistory } from 'vue-router';
import TheFeaturesLink from './FeatureLinks/TheFeaturesLink.vue';
import TheTrustAccounting from './FeatureLinks/TheTrustAccounting.vue';
import TheReportsAndCompensionTracking from './FeatureLinks/TheReportsAndCompensionTracking.vue';
import TheBilling from './FeatureLinks/TheBilling.vue';
import TheLeanLawPayments from './FeatureLinks/TheLeanLawPayments';
import TheMatterManagement from './FeatureLinks/TheMatterManagement.vue';
import TheTimeAndExpenseTracking from './FeatureLinks/TheTimeAndExpenseTracking.vue';


const routes = [
    {
        path: '/features',
        name: 'TheFeaturesLink',
        component: TheFeaturesLink
      },
      {
        path: '/trustaccounting',
        name: 'TheTrustAccounting',
        component: TheTrustAccounting
      },
      {
        path: '/reportsandcompensiontracking',
        name: 'TheReportAndCompensionTracking',
        component: TheReportsAndCompensionTracking
      },
      {
        path: '/billing',
        name: 'TheBilling',
        component: TheBilling
      },
      {
        path: '/leanlawpayments',
        name: 'TheLeanLawPayments',
        component: TheLeanLawPayments
      },
      {
        path: '/mattermanagement',
        name: 'TheMatterManagement',
        component: TheMatterManagement
      },
      {
        path: '/timeandexpensetracking',
        name: 'TheTimeAndExpenseTracking',
        component: TheTimeAndExpenseTracking
      },

  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  

export default router
