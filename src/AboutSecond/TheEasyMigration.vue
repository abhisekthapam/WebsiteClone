<template>
    <div class="image-div">
        <div class="div-one">
            <h1 class="head-text">{{ h1 }} <br> <span class="head-text-two">{{ h2 }}</span></h1>
            </div>
        <div>
            <p class="pText">{{ p }}</p>
        </div>
        <div class="btn-div">
            <button class="btn">{{ btn }}</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            h1: "Easy migration.",
            h2: "Simplified workflows.",
            p: "LeanLaw makes it easy to streamline and modernize your mid-size law firm. Integrations with best-in-breed software, plus our world-class customer support team help you migrate from your existing tools and integrate your data sets so the transition is as seamless as possible for the entire firm. Plus, LeanLaw’s network of Accounting Pros is always there to advise when you need help.",
            btn: "Why LeanLaw"
        }
    }
}
</script>

<style scoped>
.image-div {
    border: 1px solid black;
    width: 100%;
    height: 75vh;
    margin: 5rem 0 7rem 0;
    background-image: url('@/assets/LeanLawBackgroundImage.jpg');
    border-bottom-right-radius: 200px;
}

.head-text {
    font-family: "Lexend",sans-serif;
    text-transform: none;
    font-weight: 700;
    font-size: 33px;
    line-height: 1.26;
    color:#fff;
}

.head-text-two {
    color: #29BF12;
}

.div-one {
    margin-top: 6rem;
    margin-left: 13rem;
}

.btn-div{
    margin-top: 3rem;   
    margin-left: 13rem; 
}

.pText {
    font-family: "Open Sans",sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.63;
    Color: #fff;
    width: 38.9rem;
    margin-top: 0.5rem;
    margin-left: 13rem;
}

.btn {
    font-family: "Lexend", sans-serif;
    padding: 18px 45px;
    font-size: 18px;
    border-radius: 30px;
    line-height: 1;
    transition: opacity ease 0.25s;
    text-align: center;
    position: relative;
    display: inline-block;
    text-decoration: none;
    background: 0 0;
    z-index: 1;
    cursor: pointer;
    border: 2px solid #29BF12;
    color: #fff;
    font-weight: 700;
}

.btn:hover {  
    background: rgba(0, 248, 0, 0.06);
    color: #fff;
    
}
</style>