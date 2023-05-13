<template>
    <div>
        <div class="footer-underline"></div>
        <div class="Footer-Footer-div">
            <p class="pText"><span class="under">{{ footer }}</span><span class="Or under">{{ or }}</span><span class="under">{{ span }}</span><br><span class="rights">{{ rights }}</span></p>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            footer: "Privacy Policy ",
            or: "|",
            span: " Terms of Use",
            rights: "© 2023 LeanLaw. All Rights Reserved"
        }
    }
}
</script>

<style scoped>
.Footer-Footer-div {
    display: flex;
    justify-content: center;
}

.pText {
    font-size: 14px;
    color: #12bf12;
    font-family: "Open Sans", sans-serif;
    line-height: 1.63;
    font-weight: 400;
    cursor: pointer;
    text-align: center;
}

.under{
    text-decoration: underline;
}
.under:hover{
    filter: brightness(110%);
}

.Or{
    color: #2E2E2E;
}

.rights {
    font-size: 14px;
    color: #2E2E2E;
    font-family: "Open Sans", sans-serif;
    line-height: 1.63;
    font-weight: 400;
    cursor: default;
}

.footer-underline {
    border: 0.1px solid #2e2e2e1f;
    margin-top: 2.5rem;
    margin-left: 10rem;
    margin-right: 10rem;
    margin-bottom: 0.5rem;
}
</style>