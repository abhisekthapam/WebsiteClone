<template>
    <div class="trust-accounting-seven-main-div">

        <div>
            <div class="trust-accounting-seven-head-text-div">
                <h1 class="trust-accounting-seven-head-text">{{ h1 }}</h1>
            </div>
            <div class="trust-accounting-seven-ptext-div-two">
                <div class="trust-accounting-seven-ptext-div">
                    <p class="trust-accounting-seven-ptext">{{ ptext }}</p>
                </div>
            </div>
        </div>

        <div class="trust-accounting-seven-buttons">
            <h2 class="more-text">{{ Learn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
            <h2 class="more-text one">{{ Learn2 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
            <h2 class="more-text two">{{ Learn3 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            h1: "Get started with LeanLaw",
            ptext: "Discover how LeanLaw’s accounting tools automate the trust accounting process in a few simple clicks and get started with your legal practice.",

            Learn1: "Schedule a Demo",
            Learn2: "Get a Free Trial",
            Learn3: "View More Features",
        }
    }
}

</script>


<style scoped>
.trust-accounting-seven-main-div {
    width: 100%;
    height: 70vh;
    margin-bottom: 5rem;
    background-color: #223843;
}

.trust-accounting-seven-head-text-div {
    display: flex;
    justify-content: center;
    padding-top: 6.5rem;
}

.trust-accounting-seven-head-text {
    font-family: "Lexend", sans-serif;
    text-transform: none;
    font-size: 33px;
    color: #29bf12;
    font-weight: 700;
    line-height: 1.4;
}

.trust-accounting-seven-ptext-div {
    width: 45rem;
}

.trust-accounting-seven-ptext-div-two {
    display: flex;
    justify-content: center;
}

.trust-accounting-seven-ptext {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    list-style: none;
    color: #fff;
    line-height: 1.5;
    text-align: center;
}

.trust-accounting-seven-buttons {
    display: flex;
    gap: 13rem;
    margin-left: 18rem;
    margin-top: 2rem;
}

.more-text {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    font-family: "Lexend", sans-serif;
    border-bottom: 1.5px solid white;
    padding-bottom: 2px;
    transition: all 0.8s ease;
    width: 10.8rem;
    cursor: pointer;
    margin-top: 2rem;
}

.more-text:hover {
    width: 12.7rem;
    transition: all 0.3s ease;
}

.more-text:hover .fa-sharp {
    transition: all 0.3s ease;
    transform: translateX(2rem);
}


.one {
    width: 9.6rem;
}

.one:hover {
    width: 11.5rem;
    transition: all 0.3s ease;
}

.two {
    width: 12rem;
}

.two:hover {
    width: 14rem;
    transition: all 0.3s ease;
}

.fa-sharp {
    margin-left: 0.4rem;
    transition: all 0.8s ease;
}</style>