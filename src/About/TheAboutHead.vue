<template>
    <div>
        <div class="TheAboutHead-Box">
            <div class="TheAboutHead-head">
                <h1>See invoices paid <span class="text-color">70% faster </span>with LeanLaws streamlined accounting workflows</h1>
            </div>
            <div class="TheAboutHead-text">
                <p>{{ pText }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pText: "Easily push to invoice for prompt payment. Automated workflows tag the matter, client, and attorney in every step to keep data integrity and boost cash flow."
        }
    }
}
</script>



<style scoped>
.TheAboutHead-Box {
    margin-bottom: 5rem;
}

.TheAboutHead-head {
    font-size: 20px;
    font-family: "Lexend", sans-serif;
    text-transform: none;
    font-weight: 700;
    color: #223843;
    margin-left: 31%;
    margin-right: 31%;
    text-align: center;
}

.TheAboutHead-text {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 815px;
    margin-left: 21%;
    margin-right: 21%;
    font-family: "Open Sans",sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.63;
    --flktyDotColor: #B5B5B5;
    text-align: center;
}

.text-color {
    color: #29BF12;
}

</style>