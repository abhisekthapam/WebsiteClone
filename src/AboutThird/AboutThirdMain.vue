<template>
    <div>
        <div class="main-div">
            <TheTrustAndState />
            <TheAccountingManagementService />
            <TheLegalEase />
            <TheMintageLabs />
            <ThePrimaryFocus />
        </div>
        <TheReadyToRun />
    </div>
    <div>
        <TheAboutThirdFooter />
    </div>
</template>

<script>
import TheTrustAndState from '@/AboutThird/TheTrustAndState.vue'
import TheAccountingManagementService from './TheAccountingManagementService.vue';
import TheLegalEase from './TheLegalEase.vue';
import TheMintageLabs from './TheMintageLabs.vue';
import ThePrimaryFocus from './ThePrimaryFocus.vue';
import TheReadyToRun from './TheReadyToRun.vue';
import TheAboutThirdFooter from './TheAboutThirdFooter.vue';

export default {
    components: {
        TheTrustAndState,
        TheAccountingManagementService,
        TheLegalEase,
        TheMintageLabs,
        ThePrimaryFocus,
        TheReadyToRun,
        TheAboutThirdFooter
    }
}
</script>

<style scoped>
.main-div {
    margin-bottom: 5rem;
    display: flex;
}
</style>