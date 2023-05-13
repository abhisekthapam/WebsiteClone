<template>
    <div class="Ready-div">
        <div class="h1-div">
            <h1>{{ h1 }}<span>{{ sp }}</span></h1>
        </div>
        <div class="p1-div">
            <p>{{ p }}</p>
        </div>
        <div class="btn-div">
            <button class="btn1">{{ btn1 }}</button>
            <button class="btn2">{{ btn2 }}</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            h1: "Ready to run your firm ",
            sp: "with less hassle?",
            p: "LeanLaw’s functionality helps everyone in the firm — legal professionals and accounting — at every stage in the process do more and do better.",
            btn1: "Why LeanLaw?",
            btn2 : "Book a personalized demo"

        }
    }
}

</script>

<style scoped>

.Ready-div {
    border: 1px solid black;
    background: #223843;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    font-family: "Lexend",sans-serif;
    text-transform: none;
    font-weight: 700;
    font-size: 33px;
    line-height: 1.26;
    color: #fff;
}

.h1-div {
    width: 25rem;
    text-align: center;
    margin-top: 2rem;
}

p {
    font-family: "Lexend",sans-serif;
    text-transform: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.26;
    color: #fff;
    word-spacing: 2px;
}

.p1-div {
    width: 40rem;
    text-align: center;
}

.btn-div {
    margin-top: 3rem;
    margin-bottom: 4rem;
}

.btn1{
    color: #fff;
    font-family: "Lexend",sans-serif;
    font-weight: 600;
    padding: 18px 50px;
    font-size: 18px;
    border-radius: 30px;
    background:linear-gradient(#a9fe4e 0%, #29bf12 100%);
    line-height: 1;
    transition: all ease-in-out 0.2s;
    text-align: center;
    position: relative;
    display: inline-block;
    text-decoration: none !important;
    z-index: 1;
    border: none;
}

.btn1:hover {
    cursor: pointer;
    z-index: 1;
    box-shadow:  0px 5px 20px 0px rgb(38, 37, 37);
}

.btn2{
    color: #fff;
    font-family: "Lexend",sans-serif;
    font-weight: 600;
    padding: 18px 50px;
    font-size: 18px;
    border-radius: 30px;
    background:transparent;
    line-height: 1;
    transition: all ease-in-out 0.2s;
    text-align: center;
    position: relative;
    display: inline-block;
    text-decoration: none !important;
    z-index: 1;
    cursor: pointer;
    border: 2px solid #29bf12;
    margin-left: 1.5rem;
}

.btn2:hover {
    background: rgba(0, 248, 0, 0.06);
}

span {
    color: #29bf12;
}
</style>