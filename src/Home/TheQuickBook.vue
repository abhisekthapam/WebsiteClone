<template>
    <div class="QuickBooks-box">
        <div class="rating">
            <div class="star">
                <i class="fa-solid fa-star fa-xl" style="color: #f0c430;"></i>
                <i class="fa-solid fa-star fa-xl" style="color: #f0c430;"></i>
                <i class="fa-solid fa-star fa-xl" style="color: #f0c430;"></i>
                <i class="fa-solid fa-star fa-xl" style="color: #f0c430;"></i>
                <i class="fa-solid fa-star fa-xl" style="color: #f0c430;"></i>
            </div>
        </div>
        <div>
            <img :src="Image" alt="QuickBooks" class="QuickBooks-image">
        </div>
    </div>
</template>

<script>
import QuickBooks from '@/assets/QuickBooks.png';


export default {
    data() {
        return {
            Image: QuickBooks
        }
    }
}

</script>

<style scoped>

.QuickBooks-box {
    width: 290px;
    height: 110px;
    margin-left: 1.5rem;
    background-color: #fff;
    filter: drop-shadow(0px 10px 20px rgba(0,0,0,0.1));
    padding: 21px 35px;
    border-radius: 10px;
    z-index: 1;
}
.QuickBooks-image {
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

