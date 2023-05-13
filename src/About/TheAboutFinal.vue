<template>
    <div>
        <div class="head-box">
        <h1 class="head-text">{{ h1 }}</h1>
        <h2 class="head-text two">{{ h2 }}</h2>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            h1: "Trusted by 500+ law firms.",
            h2: "Hundreds of 5-Star review ratings. 99% retention."
        }
    }
}

</script>

<style scoped>
.head-box {
    margin-bottom: 5rem;
    margin-top: 7rem;
}
.head-text {
    font-family: "Lexend",sans-serif;
    text-transform: none;
    font-weight: 700;
    font-size: 33px;
    line-height: 1.26;
    color: #223843;
    margin: 0;
    display: flex;
    justify-content: center;
}
.two{
color: #29BF12;
margin-top: 0;
}

</style>
