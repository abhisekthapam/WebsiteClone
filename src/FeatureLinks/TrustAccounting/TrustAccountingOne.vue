<template>
    <div class="Trust-Accounting-Main-Div">
        <div class="trust-accounting-main-div-one">
            <div class="trust-accounting-head-div">
                <h1 class="trust-accounting-head-text">{{ h1 }}<span class="trust-accounting-span">{{ h12 }}</span></h1>
            </div>
            <div class="trust-accounting-ptext-div">
                <p class="trust-accounting-ptext p1">{{ p1 }}</p>
            </div>
            <div class="trust-accounting-list-div">
                <ul>
                    <li class="trust-accounting-ptext"><i class="fa-solid fa-circle fa-2xs" style="color: #29bf12;"></i><span class="list-span">{{ li1 }}</span></li>
                    <li class="trust-accounting-ptext"><i class="fa-solid fa-circle fa-2xs" style="color: #29bf12;"></i><span class="list-span">{{ li2 }}</span></li>
                     <li class="trust-accounting-ptext"><i class="fa-solid fa-circle fa-2xs" style="color: #29bf12;"></i><span class="list-span">{{ li3 }}</span></li>
                </ul>
            </div>
            <div>
                <p class="trust-accounting-ptext p2">{{ p2 }}</p>
            </div>
            <div class="trust-accounting-button-div">
                <div><button class="btn-1">{{ button1 }}</button></div>
                <div><button class="btn-2">{{ button2 }}</button></div>
            </div>
        </div>

        <div class="trust-accounting-main-div-two">
            <div>
                <img :src="image1" alt="LeanLaw Trust Accounting" title="LeanLaw-A-Better-Approach-To-Trust-Accounting" class="image1">
            </div>

        </div>
    </div>
</template>

<script>
import TrustAccountingOne from '@/assets/FeaturesHome/TrustAccountingOne.png';

export default {
    data() {
        return {
            h1: "User-Friendly IOLTA",
            h12: " Trust Accounting",
            p1: "LeanLaw’s cloud-based, native QuickBooks Online integrated trust accounting software helps your law firm:",
            li1: "stay in compliance with industry practices and state bar standards",
            li2: "automates the way your law practice manages client funds",
            li3: "increase cash flow and decrease AR",
            p2: "A true, cloud-based solution — continually updating with three way reconciliation.",
            button1: "Schedule a Demo",
            button2: "Product Features",

            image1: TrustAccountingOne
        }
    }
}

</script>

<style scoped>

.Trust-Accounting-Main-Div {
    display: flex;
    gap: 5rem;
    margin-top: 3rem;
}

.trust-accounting-main-div-one {
    width: 35rem;
    margin-left: 8rem;
}
.trust-accounting-head-div {
    width: 30rem;
}

.trust-accounting-head-text {
    font-family: "Lexend", sans-serif;
    color: #223843;
    font-size: 42px;
    line-height: 1.33;
    text-transform: none;
    font-weight: 700;
}

.trust-accounting-span {
    color: #29bf12;
}

.trust-accounting-ptext {
    font-family: "Open Sans",sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 2;
    color: #223843;
}

.trust-accounting-ptext-div {
    width: 30rem;
}

.trust-accounting-list-div {
width: 35rem;
}

li {
    list-style: none;
    display: flex;
    align-items: center;
}
ul {
margin: 0;
padding: 0;
}

.list-span {
    margin-left: 0.7rem;
}

.p1, .p2{
    line-height: 1.4;
    width: 32rem;
}

.trust-accounting-button-div {
    display: flex;
    width: 35rem;
    gap: 1.5rem;
    margin-top: 1.5rem;
}

button {
    font-family: "Lexend",sans-serif;
    font-weight: 400;
    padding: 18px 50px;
    font-size: 18px;
    border-radius: 30px;
    line-height: 1;
    transition: all ease-in-out 0.2s;
    text-align: center;
    position: relative;
    display: inline-block;
    text-decoration: none !important;
    background: transparent;
    z-index: 1;
    cursor: pointer;
}

.btn-1 {
    background: linear-gradient(270deg, #aafe4e 0%, #29bf12 100%);
    padding: 20px 50px;
    border: none;
    font-family: "Lexend",sans-serif;
    font-size: 21px;
    color: #fff;
    font-weight: 500;
}
.btn-1:hover {
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .2);
}

.btn-2 {
    padding: 18px 50px;
    border: 2px solid #29bf12;
    font-family: "Lexend",sans-serif;
    font-size: 21px;
    color: #223843;
    font-weight: 500;
}

.btn-2:hover {
    background: #e3ffdeb4;
}

.image1 {
    width: 570px;
}
</style>