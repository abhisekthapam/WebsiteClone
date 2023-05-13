<template>
    <div class="FooterSemiMain-div">
        <div class="Navbar-Footer">
            <TheFooterNavbar />
        </div>
        <div class="Footer-detail-div">
            <div class="Footer-Nav-Detail-Div">
            <TheFooterNavDetail />
            </div>
            <div class="TheFooterNavDetailTwo-div">
            <TheFooterNavDetailTwo />
            </div>
            <div class="TheFooterNavDetailThree-div">
            <TheFooterNavDetailThree />
            </div>
            <div class="TheFooterNavDetailFour-div">
            <TheFooterNavDetailFour />
            </div>
        </div>
        <div>
            <TheFooterFooter />
        </div>
    </div>
</template>

<script>
import TheFooterNavbar from '@/Footer/TheFooterNavbar.vue';
import TheFooterNavDetail from '@/Footer/TheFooterNavDetail.vue';
import TheFooterNavDetailTwo from '@/Footer/TheFooterNavDetailTwo.vue';
import TheFooterNavDetailThree from '@/Footer/TheFooterNavDetailThree.vue';
import TheFooterNavDetailFour from '@/Footer/TheFooterNavDetailFour.vue';
import TheFooterFooter from '@/Footer/TheFooterFooter.vue'

export default {
    components: {
        TheFooterNavbar,
        TheFooterNavDetail,
        TheFooterNavDetailTwo,
        TheFooterNavDetailThree,
        TheFooterNavDetailFour,
        TheFooterFooter
    }
}

</script>

<style scoped>

.FooterSemiMain-div {
    margin-bottom: 1.4rem;
}
.Navbar-Footer {
    margin-bottom: 3rem;
}

.Footer-Nav-Detail-Div {
    width: 20rem;
    margin-left: 10rem;
}

.Footer-detail-div {
    display: flex;
}

.TheFooterNavDetailTwo-div {
    margin-left: 5rem;
}
.TheFooterNavDetailThree-div {
    margin-left: 8rem;
}
.TheFooterNavDetailFour-div {
    margin-left: 6rem;
}
</style>