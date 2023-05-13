<template>
    <img :src="Image" alt="Partners And Attorny Image" class="Image">
</template>

<script>
import PartnersAndAttorny from '@/assets/PartnersAndAttorney.png';

export default {
    data() {
        return {
            Image: PartnersAndAttorny
        }
    }
}
</script>

<style scoped>
.Image {
    width: 480px;
    height: 460px;
}
</style>
