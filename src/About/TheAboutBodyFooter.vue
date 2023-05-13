<template>
    <div class="theAboutBodyFooterDiv">
        <div class="image-detail-div">
            <div class="image">
                <img :src="Image" alt="aw firms use LeanLaw for legal billing"
                    title="Law firms use LeanLaw for legal billing" class="LeanLaw-image">
            </div>
            <div class="image-detail">
                <h1 class="head-text"><strong>{{ h1 }}</strong></h1>
                <ul class="list">
                    <li><i class="fa-solid fa-circle-check fa-lg" style="color: #29be13;"></i><strong>Easy billing
                            system</strong></li>
                    <li><i class="fa-solid fa-circle-check fa-lg" style="color: #29be13;"></i><strong>Easy
                            reporting</strong></li>
                    <li><i class="fa-solid fa-circle-check fa-lg" style="color: #29be13;"></i><strong>Easy
                            migration</strong></li>
                    <li><i class="fa-solid fa-circle-check fa-lg" style="color: #29be13;"></i><strong>Easy to use</strong>
                    </li>
                    <li><i class="fa-solid fa-circle-check fa-lg" style="color: #29be13;"></i><strong>Easy
                            invoicing</strong></li>
                    <li><i class="fa-solid fa-circle-check fa-lg" style="color: #29be13;"></i><strong>Easy payments</strong>
                    </li>
                </ul>
            </div>
        </div>
        <div class="why-btn-div">
            <button class="why-btn"><strong> Why Leanlaw</strong></button>
        </div>
    </div>
</template>

<script>
import LeanLawBodyImage from '@/assets/LeanLawBodyImage.png'

export default {
    data() {
        return {
            Image: LeanLawBodyImage,
            h1: "LeanLaw makes it ridiculously easy for legal teams to efficiently run and grow the firm."
        }
    }
}

</script>

<style scoped>
.theAboutBodyFooterDiv {
    width: 100%;
    height: 110vh;
    background-color: #223843;
    color: #fff;
    margin-bottom: 5rem;
    border-bottom-right-radius: 200px;
    font-family: "Lexend", sans-serif;
}

.image {
    margin-left: 8rem;
    margin-top: 7rem;
}

.image-detail-div {
    display: flex;
}

.LeanLaw-image {
    width: 520px;
    height: 433px;
}

.head-text {
    width: 600px;
    font-size: 25px;
    font-weight: 600;
    line-height: 1.52;
    font-family: "Lexend", sans-serif;
    margin-top: 2rem;
}

.list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    font-size: 25px;
    line-height: 2.5;
    font-family: "Lexend", sans-serif;
    padding: 0;
    margin-top: 3rem;
}

.list strong {
    margin-left: 1rem;
}

.image-detail {
    width: 600px;
    height: 433px;
    margin-top: 7rem;
    margin-left: 5rem;
}

.why-btn-div {
    margin-top: 4rem;
    margin-left: 8rem;
    width: 20rem;
    height: 5rem;
}

.why-btn {
    font-weight: 400;
    color: white;
    padding: 18px 50px;
    font-size: 18px;
    border: #aafe4e;
    border-radius: 30px;
    line-height: 1;
    transition: all ease-in-out 0.2s;
    text-align: center;
    position: relative;
    text-decoration: none;
    background: linear-gradient(#aafe4e 0%, #29bf12 100%);
}

.why-btn:hover {
    cursor: pointer;
    z-index: 1;
    box-shadow:  0px 5px 20px 0px rgb(38, 37, 37);
    border: #aafe4e;
}


</style>

