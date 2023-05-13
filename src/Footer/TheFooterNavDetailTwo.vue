<template>
    <div>
        <div>
            <h1 class="head-detail">{{ twoh1 }}</h1>
            <div class="list-div">
                <ul>
                    <li>{{ twoli1 }}</li>
                    <li>{{ twoli2}}</li>
                    <li>{{ twoli3 }}</li>
                    <li>{{ twoli4 }}</li>
                    <li>{{ twoli5 }}</li>
                </ul>
            </div>
            <h2 class="head-detail">{{ twoh2 }}</h2>
            <h3 class="head-detail">{{ twoh3 }}</h3>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            twoh1: "Features",
            twoli1: "Trust Accounting",
            twoli2: "Reports & Compensation Tracking",
            twoli3: "Billing",
            twoli4: "Matter Management",
            twoli5: "Time and Expense Tracking",
            twoh2: "Integrations",
            twoh3: "Onboarding"
        }
    }
}
</script>

<style scoped>
.head-detail {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #29BF12 !important;
    cursor: pointer;
}

.head-detail:hover{
    text-decoration: underline;
    text-decoration-color: #29BF12;
    text-decoration-thickness: 1.2px;
    filter: brightness(110%);
}

li {
    font-family: "Open Sans", sans-serif;
    color: #223843;
    font-size: 13px;
    list-style: none;
    margin-left: 0;
    line-height: 2.5;
    cursor: pointer;
}

li:hover {
    text-decoration: underline;
    text-decoration-color: #29BF12;
    text-decoration-thickness: 1.2px;
    opacity: 0.8;
}
ul {
    padding: 0;
    margin: 0;
}


</style>
