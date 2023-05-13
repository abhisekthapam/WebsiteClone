<template>
    <div>
        <div class="carousel">
            <div v-show="currentSlide === 1">
                <TheCustomerOne />
            </div>
            <div v-show="currentSlide === 2">
                <TheCustomerTwo />
            </div>
            <div v-show="currentSlide === 3">
                <TheCustomerThree />
            </div>
        </div>
        <div class="controls">
            <div class="controls-btn">
    <button :class="{ 'active': currentSlide === 1 }" @click="showSlide(1)"></button>
    <button :class="{ 'active': currentSlide === 2 }" @click="showSlide(2)"></button>
    <button :class="{ 'active': currentSlide === 3 }" @click="showSlide(3)"></button>
</div>
        </div>
    </div>
</template>
  
<script>
import TheCustomerOne from '@/About/TheCustomerOne.vue'
import TheCustomerTwo from '@/About/TheCustomerTwo.vue';
import TheCustomerThree from '@/About/TheCustomerThree.vue';
export default {
    components: {
        TheCustomerOne,
        TheCustomerTwo,
        TheCustomerThree
    },
    data() {
        return {
            currentSlide: 1,
        }
    },
    methods: {
        showSlide(slideNumber) {
            this.currentSlide = slideNumber;
        },
    }

}
</script>

<style scoped>
.controls {
    margin-bottom: 5rem;
}

.controls-btn {
    margin-left: 36rem;
}

button {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-left: 1rem;
    border: 1px solid #29BF12;
}

.controls-btn button.active {
        background-color: #29BF12;
    }

</style>

