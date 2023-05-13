<template>
    <div class="container">
        <div class="head-div">
            <h1 class="head-text">{{ h1 }}<span class="head-text2">{{ h1Text }}</span></h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            h1: "The legal software you need to work.",
            h1Text: " The support you need to grow your firm."
        }
    }
}

</script>
<style scoped>
.head-div {
    width: 40rem;
}

.head-text {
    font-family: "Lexend", sans-serif;
    text-transform: none;
    font-weight: 700;
    font-size: 33px;
    line-height: 1.26;
    text-align: center;
}

.head-text2 {
    color: #29BF12;
}
.container {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
}
</style>