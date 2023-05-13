<template>
    <div>
        <the-navbar />
        <div class="feature-main">
            <div class="feature-container">
                <div class="feature-text">
                    <div class="feature-head-div">
                        <h1>{{ h1 }}<span>{{ h12 }}</span></h1>
                    </div>
                    <div class="feature-p-div">
                        <p class="p-head">{{ pHead }}</p>
                        <p>{{ pText }}</p>
                    </div>
                    <button>{{ button }}</button>
                </div>
                <div>
                    <img :src="image1" class="featureOne" alt="Image One" title="LeanLaw Software Features" />
                </div>
            </div>
        </div>
    </div>
</template>
  

<script>
import FeatureOne from "@/assets/FeaturesHome/FeatureOne.png";

export default {
    data() {
        return {
            h1: "LeanLaw",
            h12: " software features",
            pHead: "Software features that boost firm productivity.",
            pText: "See how LeanLaw revolutionizes workflow automation and makes running your law firm easy.",
            button: "Get a Demo",
            image1: FeatureOne,
        };
    },
};
</script>

<style scoped>
.feature-main {
    margin-top: 7rem;
}

.featureOne {
    width: 530px;
    height: 490px;
    margin-left: 9rem;
}

.feature-head-div {
    width: 25rem;
    margin-top: 6rem;
}

.feature-container {
    display: flex;
}

h1 {
    font-family: "Lexend", sans-serif;
    text-transform: none;
    font-weight: 700;
    font-size: 42px;
    color: #223843;
}

p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.63;
    color: #223843;
}

.p-head {
    line-height: 0;
    font-weight: 700;
}

.feature-p-div {
    width: 30rem;
    margin-top: 1.5rem;
}

span {
    margin-left: 5rem;
    color: #29BF12;
}

button {
    margin-top: 2.5rem;
    font-family: "Lexend", sans-serif;
    font-weight: 400;
    color: #fff;
    padding: 19px 50px;
    font-size: 18px;
    border-radius: 30px;
    line-height: 1;
    transition: all ease-in-out 0.2s;
    text-align: center;
    position: relative;
    display: inline-block;
    text-decoration: none !important;
    z-index: 1;
    border: none;
    cursor: pointer;
    background: linear-gradient(270deg, #aafe4e 0%, #29bf12 100%);
    ;
}

button:hover {
    filter: drop-shadow(0px 25px 10px rgba(0, 0, 0, 0.1));
}

.feature-text {
    margin-left: 10rem;
}
</style>
  

