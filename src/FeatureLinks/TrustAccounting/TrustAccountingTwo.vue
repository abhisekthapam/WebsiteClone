<template>
    <div>
        <div class="trust-accounting-two-head-div">
            <h1 class="trust-accounting-two-head-text">
                {{ h1 }}<span class="color-change">{{ h12 }}</span> <span>{{ h123 }}</span>
            </h1>
        </div>
        <div class="trust-accounting-two-head-ptext-div">
            <p class="trust-accounting-two-head-ptext">{{ p }}</p>
        </div>

        <div class="video-div">
            <section class="back-border">
                <iframe width="1200" height="600" src="https://www.youtube.com/embed/SduomcMYJhA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </section>
        </div>
        <div class="btn-div"><button class="btn-1">{{ button1 }}</button></div>
        <div class="trust-accounting-div-head-two twoo">
            <h1 class="trust-accounting-two-head-text ">
                {{ h2 }}<span class="color-change">{{ h23 }}</span>
            </h1>
        </div>
        <div class="twooo-div">
            <div class="twooo">
                <p class="trust-accounting-two-head-ptext">{{ p2 }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            h1: 'Fully Integrated',
            h12: ' Trust Accounting',
            h123: ' with LeanLaw',
            p:
                'See how simple it is to use LeanLaw’s trust accounting system in under four minutes. Then ask for your demo today!',
            button1: "Request a Demo",

            h2: "True trust",
            h23: " accounting compliance",
            p2: "Retainers in LeanLaw are easy to track. LeanLaw’s trust accounting solution increases the law firm profitability through easy to use automation.",


        };
    },
};
</script>
  
<style scoped>
.trust-accounting-two-head-text {
    font-family: 'Lexend', sans-serif;
    color: #223843;
    font-size: 38px;
    line-height: 1.33;
    text-transform: none;
    font-weight: 700;
}

.color-change {
    color: #29bf12;
}

.trust-accounting-two-head-div {
    margin-top: 8rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
}

.trust-accounting-two-head-ptext-div {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
}

.trust-accounting-two-head-ptext {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #223843;
}

.video-player {
    width: 640px;
    height: 360px;
}

.video-div {
    display: flex;
    justify-content: center;
}


iframe {
    border-radius: 8px;
    margin-left: -1.5rem;
    margin-top: -1.5rem;
    border: 1px solid #223843;
}

.back-border {
    background: linear-gradient(270deg, #aafe4e 0%, #29bf12 100%);
    border-radius: 10px;
    z-index: -1;
    height: 600px;
    width: 1200px;
}


.btn-1 {
    background: linear-gradient(270deg, #aafe4e 0%, #29bf12 100%);
    padding: 20px 50px;
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

.btn-1:hover {
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .2);
}

.btn-div {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 5rem;
}

.twoo {
    display: flex;
    justify-content: center;
}

.twooo {
    width: 75rem;
    text-align: center;
    margin-top: -1.5rem;
}

.twooo-div {
    display: flex;
    justify-content: center;
}
</style>
  