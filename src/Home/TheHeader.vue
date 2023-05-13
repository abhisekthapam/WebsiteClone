<template>
    <div class="home">
        <div class="content">
            <div class="image-container">
                <img :src="Image" alt="Lean Law Billing" class="leanlaw-home" />
            </div>
            <h1 class="text">The <span class="home-linear">leaner</span> alternative to practice management software for law
                firms</h1>
            <p class="text-paragraph">{{ pText }}</p>
            <ul class="text-list">
                <li>{{ li1 }}</li>
                <li>{{ li2 }}</li>
                <li>{{ li3 }}</li>
                <li>{{ li4 }}</li>
            </ul>
            <div class="home-button">
                <button class="btn btn1">{{ demoBtn }}</button>
                <button class="btn btn2">{{ productBtn }}</button>
            </div>
        </div>
    </div>
</template>



<script>
import LeanLawHome from '@/assets/LeanLawHome.png';
export default {
    data() {
        return {
            Image: LeanLawHome,
            pText: "LeanLaw is the legal billing software for law firms built on QuickBooks Online that makes running a profitable law firm straightforward and simple for everyone involved.",
            li1: "Get paid faster with invoice delivery and online payments",
            li2: "Track profitability by attorney, client, or matter",
            li3: "Run compensation reports with the click of a button",
            li4: "Time tracking, matter management, and trust accounting",
            demoBtn: "Schedule a Demo",
            productBtn: "Product Overview"
        };
    },
}
</script>

<style scoped>

.text {
    display: block;
    width: 492px;
    line-height: 1.33;
    font-size: 48px;
    font-family: "Lexend", sans-serif;
    font-weight: 700;
    margin-left: 10rem;
    color: #223843;
    padding-top: 4.5rem;
}

.home-linear {
    color: #29BF12;
}

.text-paragraph {
    font: 18px/1.65em sans-serif;
    -webkit-text-size-adjust: 100%;
    line-height: 1.33;
    letter-spacing: 1px;
    display: block;
    width: 450px;
    margin-left: 10rem;
}

.text-list {
    font: 18px/1.65em sans-serif;
    -webkit-text-size-adjust: 100%;
    display: block;
    width: 700px;
}

ul.text-list {
    list-style-type: none;
    margin-left: 40px;
}

ul.text-list li {
    position: relative;
    padding-left: 1.2em;
    line-height: 2;
    margin-left: 5rem;
    letter-spacing: 1px;
}

ul.text-list li::before {
    content: "";
    background-color: #29BF12;
    display: inline-block;
    width: 0.50em;
    height: 0.50em;
    position: absolute;
    left: 0;
    margin-top: 0.8rem;
    border-radius: 50%;
}

.home-button {
    display: flex;
}

.btn {
    width: 15rem;
    color: #fff;
    font-family: "Lexend", sans-serif;
    text-align: center;
    border-radius: 22px;
    font-weight: 600;
    transition: opacity ease 0.25s;
    font-size: 17px;
    padding: 15px 40px;
    border: 1px solid#29BF12;
    cursor: pointer;
}

.btn1 {
    background: linear-gradient(270deg, #aafe4e 0%, #29bf12 100%);
    margin-top: 2rem;    
    margin-left: 10rem;
}

.btn1:hover {
    text-decoration: none;
    transition: all ease-in-out .2s;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .2);
}

.btn2 {
    margin-top: 2rem;
    color: #223843;  
    background: #fff;  
    margin-left: 2rem;
}

.btn2:hover {
    background: #e3ffde;
}

.leanlaw-home {
    width: 640.01px;
    height: 461.31px;
}

.image-container .leanlaw-home {
    float: right;
    margin-top: 9rem;

}
</style>