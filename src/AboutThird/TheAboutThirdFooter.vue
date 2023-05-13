<template>
    <div class="Footer-main-div">
        <div class="Footer-main">
            <div class="p-div-div">
                <p class="p">{{ p }}</p>
            </div>
            <div class="h1-div">
                <h1 class="h1">{{ h1 }}</h1>
            </div>
            <div class="p1-div">
                <p class="p1">{{ p1 }}</p>
            </div>
            <div class="btn-div">
                <button class="btn">{{ btn }}</button>
            </div>
        </div>
        <div class="image-div">
            <img :src="image" alt="LeanLaw Book" class="LeanLaw-book">
        </div>
    </div>
</template>

<script>
import LeanLawBook from '@/assets/LeanLawBook.png'
export default {
    data() {
        return {
            p: "INDUSTRY EBOOK",
            h1: "How to buy billing and accounting software for a mid-size law firm",
            p1: "Finding the right accounting and billing software process for your law firm can be tedious. The complexities of new software can leave you and your law firm stressed. Learn how to address your team’s needs and select the best financial software for your mid-size law firm.",
            btn: "Read the eBook",
            image: LeanLawBook
        }
    }
}

</script>

<style scoped>
.Footer-main-div {
    display: flex;
    margin-bottom: 5rem;
    background-color: #f6fdf5;
    padding-bottom: 4rem;
}

.Footer-main {
    width: 40rem;
    margin-left: 10rem;
    margin-top: 9rem;
}


.p {
    font-weight: bold;
    font-size: 16px;
    font-family: "Lexend", sans-serif;
    color: #29bf12;
    margin-bottom: 0;
}

.h1-div {
    width: 32rem;
}

.h1 {
    font-family: "Lexend", sans-serif;
    font-size: 33px;
    line-height: 1.26;
    font-weight: 700;
    text-transform: none;
    color: #223843;
    margin-top: 0;
}

.p1-div {
    width: 34rem;
}

.p1 {
    font-family: "Lexend", sans-serif;
    color: #223843;
    font-size: 18px;
    line-height: 1.4;
    text-transform: none;
    font-weight: 400;
}

.btn-div {
    margin-top: 2rem;
    margin-bottom: 3rem;
}

.btn {
    font-family: "Lexend", sans-serif;
    font-weight: 400;
    color: var(--buttonColor);
    padding: 18px 50px;
    font-size: 18px;
    border-radius: 30px;
    line-height: 1;
    transition: all ease-in-out 0.2s;
    text-align: center;
    position: relative;
    display: inline-block;
    text-decoration: none !important;
    background: transparent;
    z-index: 1;
    cursor: pointer;
    border: 2px solid #29bf12;
}

.btn:hover {
    background: rgba(0, 248, 0, 0.078);
}

.image-div {
    margin-top: 4rem;
}

.LeanLaw-book {
    width: 520px;
    height: 534px;
}
</style>

