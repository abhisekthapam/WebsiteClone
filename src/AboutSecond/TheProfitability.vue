<template>
    <div>
        <div class="Container">
            <div class="text-div">
                <h1 class="headText">
                    More productivity. More <span class="color">profitability.</span>
                </h1>
            </div>
            <div class="text-div">
                <p class="pText">{{ headP }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headP: "Collaborate seamlessly to get paid faster, automate reports and grow your law firm."
        }
    }
}
</script>

<style scoped>
.Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
}

.text-div {
    display: flex;
    justify-content: center;
}

.headText {
    font-size: 35px;
    color: #223843;
    font-family: "Lexend",sans-serif;
    text-transform: none;
    font-weight: 700;
}

.color {
    color: #29BF12;
}

.pText {
    font-family: "Open Sans",sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.63;
    --flktyDotColor: #B5B5B5;
    word-spacing: 1px;
}
</style>