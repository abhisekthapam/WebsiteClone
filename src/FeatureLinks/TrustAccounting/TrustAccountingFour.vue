<template>
    <div class="trust-accounting-four-main">

        <div class="trust-accounting-four-div1">
            <div class="trust-accounting-four-container">
                <div class="trust-accounting-four-logo-div">
                    <img :src="logo1" alt="Three-way Reconciliation" class="Logo" title="LeanLaw Three-way Reconciliation Icon">
                </div>
                <div class="trust-accounting-four-head-div">
                    <h1 class="trust-accounting-four-head-text">{{ head1 }}</h1>
                </div>
                <div  class="trust-accounting-four-ptext-div">
                    <p class="trust-accounting-four-ptext">{{ ptext1 }}</p>
                </div>
                <div>
                    <button class="trust-accounting-four-button">{{ button }}</button>
                </div>
            </div>
            <div class="trust-accounting-four-image-div">
                <img :src="image1" title="LeanLaw-Feature-Three-Way-Reconciliation" alt="FeatureQuickBook" class="trust-accounting-four-image">
            </div>
        </div>


        <div class="trust-accounting-four-div1">
            <div class="trust-accounting-four-image-div image-background">
                <img :src="image2" alt="FeatureQuickBook" class="trust-accounting-four-image image2" title="LeanLaw-Double-Down-On-Accuracy-Not-Duplicate-Data">
            </div>
            <div class="trust-accounting-four-container two">
                <div class="trust-accounting-four-logo-div">
                    <img :src="logo2" alt="LeanLaw-IOLTA-Inflow-And-Outflow-Accountability-Icon (2)" class="Logo" title="LeanLaw-IOLTA-Inflow-And-Outflow-Accountability-Icon (2)">
                </div>
                <div class="trust-accounting-four-head-div">
                    <h1 class="trust-accounting-four-head-text">{{ head2 }}</h1>
                </div>
                <div  class="trust-accounting-four-ptext-div">
                    <p class="trust-accounting-four-ptext">{{ ptext2 }}</p>
                </div>
            </div>
        </div>

        <div class="trust-accounting-four-div1">
            <div class="trust-accounting-four-container">
                <div class="trust-accounting-four-logo-div">
                    <img :src="logo3" alt="LeanLaw-IOLTA-Inflow-And-Outflow-Accountability-Icon" class="Logo" title="LeanLaw-IOLTA-Inflow-And-Outflow-Accountability-Icon">
                </div>
                <div class="trust-accounting-four-head-div">
                    <h1 class="trust-accounting-four-head-text">{{ head3 }}</h1>
                </div>
                <div  class="trust-accounting-four-ptext-div">
                    <ul>
                        <li class="trust-accounting-four-ptext"><i class="fa-solid fa-circle fa-2xs" style="color: #29bf12;"></i>{{ li1 }}</li>
                        <li class="trust-accounting-four-ptext"><i class="fa-solid fa-circle fa-2xs" style="color: #29bf12;"></i>{{ li2 }}</li>
                        <li class="trust-accounting-four-ptext"><i class="fa-solid fa-circle fa-2xs" style="color: #29bf12;"></i>{{ li3 }}</li>
                        <li class="trust-accounting-four-ptext"><i class="fa-solid fa-circle fa-2xs" style="color: #29bf12;"></i>{{ li4 }}</li>
                    </ul>
                </div>
                <div>
                    <button class="trust-accounting-four-button">{{ button }}</button>
                </div>
            </div>
            <div class="trust-accounting-four-image-div image-background2">
                <img :src="image3" alt="LeanLaw IOLTA Inflow And Outflow Accountability" class="trust-accounting-four-image image2" title="LeanLaw IOLTA Inflow And Outflow Accountability">
            </div>
        </div>

        <div class="trust-accounting-four-div1">
            <div class="trust-accounting-four-image-div image-background image-back">
                <img :src="image4" alt="LeanLaw Features Visualize Simplify Everything" class="trust-accounting-four-image image2" title="LeanLaw Features Visualize Simplify Everything">
            </div>
            <div class="trust-accounting-four-container two">
                <div class="trust-accounting-four-logo-div">
                    <img :src="logo4" alt="LeanLaw Visualize Simply Everything 1 Icon" class="Logo" title="LeanLaw Visualize Simply Everything 1 Icon">
                </div>
                <div class="trust-accounting-four-head-div">
                    <h1 class="trust-accounting-four-head-text">{{ head4 }}</h1>
                </div>
                <div  class="trust-accounting-four-ptext-div">
                    <p class="trust-accounting-four-ptext">{{ ptext4 }}</p>
                </div>
                <div>
                    <button class="trust-accounting-four-button">{{ button }}</button>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import ThreeWay from '@/assets/FeaturesHome/ThreeWay.png';
import FeatureQuickBook from '@/assets/FeaturesHome/FeatureQuickBook.jpg';
import DoubleDown from '@/assets/FeaturesHome/DoubleDown.png';
import LeanLawDoubleDown from '@/assets/FeaturesHome/LeanLawDoubleDown.jpg';
import InflowAndOutflow from '@/assets/FeaturesHome/InflowAndOutflow.png';
import LeanLawInflowAndOutflow from '@/assets/FeaturesHome/LeanLawInflowAndOutflow.jpg';
import Visualize from '@/assets/FeaturesHome/Visualize.png';
import LeanLawVisualize from '@/assets/FeaturesHome/LeanLawVisualize.png';

export default {
    data() {
        return {
            logo1: ThreeWay,
            head1: "Three-way Reconciliation",
            ptext1: "Bank accounts, trust accounts and QuickBooks Online are in continuous sync and in-line with state bar standards, so you are well positioned for your weekly or monthly three-way reconciliation. That’s less time spent on your law firm’s end.",
            button: "Request a Demo",
            image1: FeatureQuickBook,

            logo2: DoubleDown,
            head2: "Double Down on Accuracy, Not Duplicate Data",
            ptext2: "Eliminate errors in trust fund accounting by removing the need for duplicate data entry or reviewing bank statements. LeanLaw is always in sync with QuickBooks Online and bank accounts, automatically.",
            image2: LeanLawDoubleDown,

            logo3: InflowAndOutflow,
            head3: "IOLTA Inflow and Outflow Accountability",
            image3: LeanLawInflowAndOutflow,
            li1:"Request and track IOLTA funds electronically with our Gravity Legal integration.",
            li2:"Better understand how funds are flowing in and out of trust and bank accounts with clear reporting.",
            li3:"Realize higher accounts receivable.",
            li4:"Use memos integrated into the legal billing software to communicate with clients.",

            logo4: Visualize,
            head4: "Straightforward Dashboard Functionality",
            ptext4: "Visualize and quantify all income, invoice payments, transactions connected to a client and IOLTA transactions.",
            image4: LeanLawVisualize,
        }
    }
}
</script>

<style scoped>

.trust-accounting-four-main {
    margin-bottom: 10rem;
    margin-top: 10rem;
}

.trust-accounting-four-div1{
    display: flex;
    margin-left: 8rem;
    gap: 10rem;
    margin-top: 10rem;
}
.trust-accounting-four-container {
    width: 33.82rem;
}

.two {
    margin-left: -3rem;
}

.Logo {
    width: 72px;
    height: 72px;
}

.trust-accounting-four-head-div {
    width: 22rem;
}

.trust-accounting-four-head-text {
    font-family: "Open Sans",sans-serif;
    font-weight: 600;
    font-size: 25px;
    line-height: 1.63;
    color: #223843;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
}

.trust-accounting-four-ptext {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #223843;
    word-spacing: 2px;
    margin-top: -0.5rem;
    line-height: 1.5;
}

.trust-accounting-four-button {
    background: linear-gradient(270deg, #aafe4e 0%, #29bf12 100%);
    padding: 19px 50px;
    border: none;
    font-family: "Lexend", sans-serif;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    font-weight: 400;
    border-radius: 30px;
    line-height: 1;
    transition: all ease-in-out 0.2s;
    text-align: center;
    position: relative;
    display: inline-block;
    text-decoration: none !important;
    z-index: 1;
    cursor: pointer;
}

.trust-accounting-four-button:hover {
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .2);
}

.trust-accounting-four-image-div {
    background: #29bf1280;
    border-radius: 10px;
    width: 550px;
    height: 350px;
}

.trust-accounting-four-image {
    width: 550px;
    height: 350px;
    border-radius: 8px;
    margin-left: -1.5rem;
    margin-top: -1.5rem;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .2);
}

.image2 {
    width: 580px;
    height: 420px;
}

.image-background {
    background: #f09133bf;
    border-radius: 10px;
    width: 580px;
    height: 420px;
}

.image-background2 {
    background:#067ac29d;
    border-radius: 10px;
    width: 580px;
    height: 420px;
    margin-top: 3rem;
}

.image-back {
    background: #ecc30ba1;;
}

li {
    list-style: none;
    padding-top: 1rem;
    margin-left: 1.2rem;
}
ul {
padding-left: 0;
}

.fa-circle{
    margin-right: 0.5rem;
    margin-left: -1.2rem;
}

</style>