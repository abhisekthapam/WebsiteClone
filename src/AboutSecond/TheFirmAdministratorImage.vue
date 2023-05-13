<template>
    <img :src="Image" alt="Firm Administrator Image" class="Image">
</template>

<script>
import FirmAdministrator from '@/assets/FirmAdministrator.png';

export default {
    data() {
        return {
            Image: FirmAdministrator
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
