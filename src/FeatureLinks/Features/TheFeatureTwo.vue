<template>
<div>
    <div class="feature-two-container">
        <div class="feature-two-head">
            <h1 class="feature-two-head-text">{{h1}}</h1>
        </div>
    <div class="feature-two-text">
        <p class="feature-two-ptext">{{ p1 }}</p>
    </div>
    </div>
</div>
</template>

<script>

export default {
    data() {
        return {
            h1: "The best of LeanLaw",
            p1: "Insightful, cloud-based billing software, powered by QuickBooks – at your fingertips.",

        }
    }
}

</script>

<style scoped>
.feature-two-container {
    margin-top: 10rem;
    margin-bottom: 3rem;
}

.feature-two-head, .feature-two-text {
    display: flex;
    justify-content: center;
}

.feature-two-head-text{
    font-family: "Lexend",sans-serif;
    font-size: 35px;
    text-transform: none;
    font-weight: 700;
    color: #223843;
}

.feature-two-ptext {
    font-family: "Lexend",sans-serif;
    text-transform: none;
    font-weight: 400;
    color: #223843;
    padding: 0;
    margin-top: 0.5rem;
}
</style>

