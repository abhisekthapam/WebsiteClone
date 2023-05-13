<template>
    <div>
        <div>
            <p class="footer-p">{{ p }}</p>
        </div>
        <div class="footer-quickBook">
            <h1 class="footer-h1">{{ h1 }}</h1>
            <h2 class="footer-h1">{{ h2 }}</h2>
            <div class="Footer-Image-Div">
                <img :src="image" alt="Quick Books" class="Footer-QuickBooks">
            </div>
        </div>
        <div class="Footer-Icon-Div">
            <img :src="icon1" alt="Facebook Icon" class="icon" title="Facebook">
            <img :src="icon2" alt="Twitter Icon" class="icon icon2" title="Twitter">
            <img :src="icon3" alt="Youtube Icon" class="icon icon2" title="Youtube">
            <img :src="icon4" alt="Linkedin Icon" class="icon icon2" title="Linkedin">            
        </div>
        <div>
            <h3>{{ port }}</h3>
        </div>
    </div>
</template>

<script>
import QuickBooks from '@/assets/QuickBooks.png';
import Facebook from '@/assets/Facebook.png';
import TwitterIcon from '@/assets/TwitterIcon.png';
import YoutubeIcon from '@/assets/YoutubeIcon.png';
import LinkedinIcon from '@/assets/LinkedinIcon.png';


export default {
    data() {
        return {
            p: "See invoices paid 70% faster with LeanLaw’s streamlined accounting workflows. Boost collections and increase your cash flow. LeanLaw is the alternative to law practice management software.",
            h1: "QuickBooks Online",
            h2: "Premium App Partner",
            image: QuickBooks,
            icon1 : Facebook,
            icon2 : TwitterIcon,
            icon3 : YoutubeIcon,
            icon4 : LinkedinIcon,
            port : "888.882.3017"
        }
    }
}
</script>

<style scoped>
.footer-p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.63;
}

.footer-quickBook {
    background-color: #F6FDF5;
}

.footer-h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #29BF12 !important;
    text-align: center;
}

.Footer-Image-Div {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}


.Footer-QuickBooks {
    width: 220px;
    height: 60px;
}

.Footer-Icon-Div {
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
}

.icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 10px;
}

.icon:hover {
    border-radius: 5px;
    width: 30px;
    height: 30px;
    transition: color ease 0.2s;
    filter: brightness(115%);
}

.icon2 {
    margin-left: 0.9rem;
}


</style>