<template>
    <div>
        <div class="final-div">
            <div class="image-div">
                <div class="image-background">
                    <img :src="Image" alt="Customer Two" class="customerTwo">
                </div>
            </div>
            <div class="text-div">
                <p class="text">{{ text }}</p>
                <div class="text-div-two">
                    <p>{{ pText }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LeanLawCustomerTwo from '@/assets/LeanLawCustomerTwo.jpg'
export default {
    data() {
        return {
            Image: LeanLawCustomerTwo,
            text : "“With LeanLaw Accounting Pros, I connect monthly and stay on top of the software and the new features. The LeanLaw team is so responsive and partners with me to assist my clients. I don’t know of any other software team that works so closely and appreciates us more.”",
            pText : "- LYNDA ARTESANI"
        }
    }
}
</script>

<style scoped>
.customerTwo {
    width: 250px;
    height: 250px;
    border-radius: 10px;
    margin-left: 1.1rem;
    margin-top: -1.2rem;
}

.image-background {
    width: 250px;
    height: 247px;
    margin: 5rem;
    background-color: #ECC30B;
    border-radius: 10px;
    z-index: -1;
}

.image-div {
    width: 400px;
    height: 340px;
    margin-left: 5rem;
}

.final-div {
    display: flex;
}

.text {
    font-size: 23px;
    font-family: "Lexend", sans-serif;
    color: #2E2E2E;
    line-height: 2;
    margin-bottom: 50px;
    margin-top: 4rem;
    word-break: 2px;
}

.text-div {
    width: 740px;
    margin-left: 7rem;
}

.text-div-two {
    font-size: 15px;
    font-family: "Lexend", sans-serif;
    color: #29BF12;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: calc((15px / 1000) * 75);
}
</style>