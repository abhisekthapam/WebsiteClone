<template>
    <div class="main-div">
        <div class="first-div">
            <div>
                <h1 class="head-text">{{ h1 }}</h1>
                <p class="p-text">{{ p1 }}</p>
            </div>
        </div>
        <div class="second-div">
            <div class="third-div">
                <div class="fifth-div fif ">
                    <div>
                        <h2 class="head-text">{{ h2 }}</h2>
                        <p class="p-text">{{ p2 }}</p>
                    </div>
                </div>
                <div class="sixth-div">
                    <div class="head3-div">
                        <h3 class="head-text head3">{{ h3 }}</h3>
                        <p class="p-text pthree">{{ p3 }}</p>
                    </div>
                </div>
            </div>
            <div class="fourth-div">
                <div class="h4-div">
                    <h4 class="head-text h4-text">{{ h4 }}</h4>
                    <p class="p-text p4">{{ p4 }}</p>
                    <img :src="ImageFive" alt="Accounting Props" class="logo">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import LeanLawImageOne from '@/assets/LeanLawImageOne.png';
import LeanLawImageTwo from '@/assets/LeanLawImageTwo.png';
import LeanLawImageThree from '@/assets/LeanLawImageThree.png';
import LeanLawImageFour from '@/assets/LeanLawImageFour.png';
import LeanLawImageFive from '@/assets/LeanLawImageFive.png';

export default {
    data() {
        return {
            ImageOne: LeanLawImageOne,
            ImageTwo: LeanLawImageTwo,
            ImageThree: LeanLawImageThree,
            ImageFour: LeanLawImageFour,
            ImageFive: LeanLawImageFive,
            h1: "Live chat & email support",
            p1: "Get help and answers with real humans via chat and email, any time you need it.",
            h2: "14 day free trial",
            p2: "Get started with LeanLaw",
            h3: "Onboarding resources & training",
            p3: "Secure data migration, quick-start training, and customizable setup to get you going.",
            h4: "LeanLaw accounting Props",
            p4: "Access accountants and bookkeeping experts in law firm accounting."
        }
    }
}
</script>
  
<style scoped>
.main-div {
    margin-bottom: 3rem;
    display: flex;
}

.first-div {
    width: 690px;
    height: 545px;
    margin-left: 3rem;
    background-image: url(@/assets/LeanLawImageOne.png);
    background-size: 690px 400px;
    background-repeat: no-repeat;
    background-position-y: 9.1rem;
    background-color: #067BC2;
    border-radius: 18px;
    border-top-right-radius: 0;
}


.second-div {
    width: 690px;
    height: 545px;
    margin-left: 1rem;
    display: flex;
}

.third-div {
    width: 337px;
    height: 545px;
}

.fourth-div {
    width: 337px;
    height: 545px;
    margin-left: 1rem;
    position: relative;
    background-image: url(@/assets/LeanLawImageFour.png);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 360px 350px;
    border-radius: 18px;
    border-top-right-radius: 0;
}

.fourth-div::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #29bf12da;
    border-radius: 18px;
    border-top-right-radius: 0;
}

.fourth-div h4 {
    position: relative;
    z-index: 1;
}

.fourth-div p {
    position: relative;
    z-index: 1;
}


.fifth-div {
    height: 262.5px;
    position: relative;
    z-index: 1;
    background-image: url(@/assets/LeanLawImageTwo.png);
    background-size: 335px 190px;
    background-repeat: no-repeat;
    background-position: bottom;
    border-radius: 18px;
    border-top-right-radius: 0;
}

.fifth-div::before {
    content: "";
    background-color: #ff8002d6;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 18px;
    border-top-right-radius: 0;
}

.fifth-div h2 {
    position: relative;
    z-index: 1;
}

.fifth-div p {
    position: relative;
    z-index: 1;
}


.sixth-div {
    height: 262.5px;
    background-image: url(@/assets/LeanLawImageThree.png);
    background-repeat: no-repeat;
    background-size: 290px 120px;
    background-position-y: bottom;
    background-position-x: 1rem;
    background-color: #ECC30B;
    border-radius: 18px;
    border-top-right-radius: 0;
}

.logo {
    width: 109px;
    height: 109px;
    position: relative;
    z-index: 1;
    margin-left: 12.8rem;
    top: -0.5rem;
}

.head-text {
    font-size: 25px;
    font-weight: 600;
    line-height: 1.52;
    font-family: "Lexend", sans-serif;
    color: #fff;
    margin-left: 2rem;
}

.p-text {
    font-family: "Lexend", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.63;
    color: #fff;
    margin-left: 2rem;
    margin-top: 0;
}

.fif {
    border: 1px solid #ff8102;
}

h2 {
    margin: 0;
    margin-top: 2rem;
}

.head3 {
    margin: 0;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
    color: #223843;
}

.pthree {
    color: #223843;
    margin-right: 2rem;
}

.h4-text {
    margin: 0;
    margin-top: 2rem;
    margin-right: 2rem;
    margin-left: 2rem;
}

.p4 {
    margin-top: 0.2rem;
}
</style>
  