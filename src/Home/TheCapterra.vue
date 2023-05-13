<template>
    <div class="boxes">
        <div class="Capterra-box">
            <div class="rating">
                <div class="star">
                    <i class="fa-solid fa-star fa-xl" style="color: #f0c430;"></i>
                    <i class="fa-solid fa-star fa-xl" style="color: #f0c430;"></i>
                    <i class="fa-solid fa-star fa-xl" style="color: #f0c430;"></i>
                    <i class="fa-solid fa-star fa-xl" style="color: #f0c430;"></i>
                    <i class="fa-sharp fa-regular fa-star-half-stroke fa-xl" style="color: #f0c131;"></i>
                </div>
            </div>
            <div>
                <img :src="Image" alt="Capterra" class="Capterra-image">
            </div>
        </div>
        <TheGoogle />
        <TheQuickBook />
    </div>
</template>

<script>
import Capterra from '@/assets/Capterra.png';
import TheGoogle from './TheGoogle.vue';
import TheQuickBook from './TheQuickBook.vue';


export default {
    data() {
        return {
            Image: Capterra
        };
    },
    components: {
        TheGoogle,
        TheQuickBook
    }
}

</script>

<style scoped>
.boxes {
    display: flex;
    margin: 5rem;
}

.Capterra-box {
    width: 290px;
    height: 110px;
    margin-left: 9rem;
    background-color: #fff;
    padding: 21px 35px;
    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));
    border-radius: 10px;
    z-index: 1;
}

.Capterra-image {
    width: 167px;
    margin: 2rem;
    margin-top: 2rem;
    margin-left: 0;
}

.rating {
    margin-top: 0.5rem;
}

.star i {
    margin: 0.5rem;
    margin-top: 0.1rem;
}
</style>

