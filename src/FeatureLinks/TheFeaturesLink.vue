<template>
    <TheFeature /> 
    <TheFeatureTwo /> 
    <TheFeatureThree />  
    <TheFeatureFour />  
    <TheFeatureFive /> 
    <the-footer /> 
</template>

<script>
import TheFeature from '@/FeatureLinks/Features/TheFeature.vue';
import TheFeatureTwo from '@/FeatureLinks/Features/TheFeatureTwo.vue';
import TheFeatureThree from '@/FeatureLinks/Features/TheFeatureThree.vue';
import TheFeatureFour from '@/FeatureLinks/Features/TheFeatureFour.vue';
import TheFeatureFive from '@/FeatureLinks/Features/TheFeatureFive.vue';

export default {
    components: {
        TheFeature,
        TheFeatureTwo,
        TheFeatureThree,
        TheFeatureFour,
        TheFeatureFive
    }
}

</script>