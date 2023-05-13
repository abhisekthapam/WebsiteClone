<template>
    <div class="trust-accounting-main-div">

        <div class="trust-accounting-container">
            <div class="trust-accounting-logo-div">
                <img :src="logo1" alt="Identification" class="Logo">
            </div>
            <div class="trust-accounting-head-div">
                <h1 class="trust-accounting-head-text">{{ head1 }}</h1>
            </div>
            <div  class="trust-accounting-ptext-div">
                <p class="trust-accounting-ptext">{{ ptext1 }}</p>
            </div>
        </div>

        
        <div class="trust-accounting-container">
            <div class="trust-accounting-logo-div">
                <img :src="logo2" alt="Separation" class="Logo">
            </div>
            <div class="trust-accounting-head-div">
                <h1 class="trust-accounting-head-text">{{ head2 }}</h1>
            </div>
            <div  class="trust-accounting-ptext-div">
                <p class="trust-accounting-ptext">{{ ptext2 }}</p>
            </div>
        </div>

        
        <div class="trust-accounting-container">
            <div class="trust-accounting-logo-div">
                <img :src="logo3" alt="Accounting" class="Logo">
            </div>
            <div class="trust-accounting-head-div">
                <h1 class="trust-accounting-head-text">{{ head3 }}</h1>
            </div>
            <div  class="trust-accounting-ptext-div">
                <p class="trust-accounting-ptext">{{ ptext3 }}</p>
            </div>
        </div>

    </div>
</template>

<script>
import Identification from '@/assets/FeaturesHome/Identification.png';
import Separation from '@/assets/FeaturesHome/Separation.png';
import Accounting from '@/assets/FeaturesHome/Accounting.png';

export default {
    data() {
        return {
            logo1: Identification,
            head1: "Identification",
            ptext1: "Assign trust and bank accounts for each client trust to track incoming and outgoing funds.",

            logo2: Separation,
            head2: "Separation",
            ptext2: "LeanLaw helps keep client funds separate from your law firm’s operating funds.",
            
            logo3: Accounting,
            head3: "Accounting",
            ptext3: "Create client ledgers and maintain appropriate bookkeeping of account balances with LeanLaw’s automated trust reports.",
            
        }
    }
}

</script>

<style scoped>

.trust-accounting-main-div {
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin-bottom: 5rem;
}
.trust-accounting-container {
    width: 20rem;
    height: 17rem;
}

.trust-accounting-logo-div , .trust-accounting-head-div, .trust-accounting-ptext-div {
    display: flex;
    justify-content: center;
}

.Logo {
    width: 72px;
    height: 72px;
}

.trust-accounting-head-text {
    font-family: "Open Sans",sans-serif;
    font-weight: 600;
    font-size: 25px;
    line-height: 1.63;
    color: #223843;
}

.trust-accounting-ptext {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #223843;
    text-align: center;
    word-spacing: 2px;
    margin-top: -0.5rem;
    line-height: 1.5;
}
</style>