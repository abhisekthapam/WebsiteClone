<template>
    <img :src="Image" alt="Account And Book Keeping Image" class="Image">
</template>

<script>
import AccountingAndBookKeeping from '@/assets/AccountingAndBookKeeping.png';

export default {
    data() {
        return {
            Image: AccountingAndBookKeeping
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
