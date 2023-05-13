<template>
    <div class="Footer-Nav-main">
        <div>
            <img :src="image" alt="LeanLaw Logo" class="Navbar-footer-logo">
        </div>
        <div>
            <button class="btn-1">{{ btn1 }}</button>
            <button class="btn-2">{{ btn2 }}</button>
        </div>
    </div>
</template>

<script>
import LeanLawLogo from '@/assets/LeanLawLogo.png';

export default {
    data() {
        return {
            image: LeanLawLogo,
            btn1: "Free Trial",
            btn2: "Get a Demo"
        }
    }
}
</script>

<style scoped>
.Footer-Nav-main {
    display: flex;
    justify-content: space-between;
    margin-left: 10rem;
    margin-right: 13rem;
}

.Navbar-footer-logo {
    width: 196px;
    height: 55.41px;
}

.btn-1 {
    font-family: "Lexend", sans-serif;
    font-weight: 400;
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
    border: 2px solid #29bf12e0;
}

.btn-1:hover {
    background: rgba(0, 248, 0, 0.115);
}

.btn-2 {
    font-family: "Lexend", sans-serif;
    font-weight: 400;
    padding: 20px 50px;
    font-size: 18px;
    border-radius: 30px;
    line-height: 1;
    transition: all ease-in-out 0.2s;
    text-align: center;
    position: relative;
    display: inline-block;
    text-decoration: none !important;
    background: transparent;
    background: linear-gradient(270deg, #a9fe4ea3 0%, #29bf12 100%);
    border: none;
    margin-left: 10px;
    cursor: pointer;
    margin-left: 2rem;
}
.btn-2:active{
    color: #29bf12;
}

.btn-2:hover {
    z-index: 1;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
</style>