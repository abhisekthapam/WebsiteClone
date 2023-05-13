<template>
    <QuickBookPlusLeanLaw />
    <TheAboutHead />
    <TheAboutBody />
    <TheAboutBodyFooter />
    <TheAboutFinal />
    <TheCustomer />
</template>

<script>
import QuickBookPlusLeanLaw from '../About/QuickBookPlusLeanLaw.vue'
import TheAboutHead from '@/About/TheAboutHead.vue';
import TheAboutBody from '@/About/TheAboutBody.vue';
import TheAboutBodyFooter from '@/About/TheAboutBodyFooter.vue';
import TheAboutFinal from '@/About/TheAboutFinal.vue';
import TheCustomer from '@/components/TheCustomer.vue';

export default {
    components: {
        QuickBookPlusLeanLaw,
        TheAboutHead,
        TheAboutBody,
        TheAboutBodyFooter,
        TheAboutFinal,
        TheCustomer
    }
}
</script>
