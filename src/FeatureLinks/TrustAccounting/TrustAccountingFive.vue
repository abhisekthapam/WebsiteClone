<template>
    <div>

        <div class="trust-accounting-five-main-div">
            <div class="trust-accounting-five-head-div">
                <h1 class="trust-accounting-five-head">{{ head }}</h1>
            </div>
            <div class="trust-accounting-ptext-list-div">
            <div class="trust-accounting-five-ptext-div">
                <p class="trust-accounting-five-ptext">{{ ptext }}</p>
            </div>
            <div  class="trust-accounting-five-ul-div">
                <div  class="trust-accounting-five-list-one-div">
                    <ul>
                        <li class="trust-accounting-five-list-text"><i class="fa-solid fa-circle-check fa-xl" style="color: #067bc2;"></i>{{ li1 }}</li>
                        <li class="trust-accounting-five-list-text"><i class="fa-solid fa-circle-check fa-xl" style="color: #067bc2;"></i>{{ li2 }}</li>
                        <li class="trust-accounting-five-list-text"><i class="fa-solid fa-circle-check fa-xl" style="color: #067bc2;"></i>{{ li3 }}</li>
                    </ul>
                </div>
                <div  class="trust-accounting-five-list-two-div">
                    <ul>
                        <li class="trust-accounting-five-list-text"><i class="fa-solid fa-circle-check fa-xl" style="color: #067bc2;"></i>{{ li4 }}</li>
                        <li class="trust-accounting-five-list-text"><i class="fa-solid fa-circle-check fa-xl" style="color: #067bc2;"></i>{{ li5 }}</li>
                    </ul>
                </div>
            </div>
            </div>
            <div class="btn-div">
            <button class="btn"><strong> {{ btn }}</strong></button>
        </div>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            head: "The LeanLaw difference",
            ptext: "What sets LeanLaw’s trust accounting engine apart",
            li1: "LeanLaw makes 3-way reconciliation easier",
            li2: "Disburse funds from trust accounts",
            li3: "Automated trust financial reports and syncing of data",
            li4: "Give clients the flexibility to deposit funds",
            li5: "True integration with QuickBooks Online",
            btn: "Request a Demo"
        }
    }
}

</script>

<style scoped>
.trust-accounting-five-main-div {
    width: 100%;
    height: 80vh;
    margin-bottom: 5rem;
    background-image: url(@/assets/FeaturesHome/TrustAccountingBackgroundImage.jpg);
    background-repeat: no-repeat;
    background-size: auto 80vh;
}

.trust-accounting-five-head{
    font-family: "Lexend",sans-serif;
    text-transform: none;
    font-size: 33px;
    color: #29bf12;
    font-weight: 700;
    margin-left: 16rem;
    padding-top: 7rem;
}

.trust-accounting-five-ptext, .trust-accounting-five-list-text {
    font-family: "Open Sans",sans-serif;
    font-weight: 400;
    font-size: 18px;
    list-style: none;
    line-height: 3;
    margin-left: 16rem;
    color: #fff;
    margin-left: 0;
}

.fa-circle-check {
    margin-right: 0.7rem;
}

.trust-accounting-five-ul-div {
    display: flex;
}

.btn {
    font-family: "Lexend",sans-serif;
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

.btn:hover {
    cursor: pointer;
    z-index: 1;
    box-shadow:  0px 5px 20px 0px rgb(38, 37, 37);
    border: #aafe4e;
}

.btn-div {
    display: flex;
    justify-content: center;
}

.trust-accounting-ptext-list-div {
    margin-left: 16rem;
}

</style>