<template>
    <div>

        <div class="trust-accounting-six-main-div">
            <div class="trust-accounting-six-container-one">
                <div>
                    <h1 class="trust-accounting-six-head-text">{{ h1 }}<br>
                        <div class="trust-accounting-six-head-div"><span class="trust-accounting-six-head-span">{{ h2
                        }}</span></div>
                    </h1>
                </div>
                <div class="trust-accounting-six-head-ptext-div">
                    <p class="trust-accounting-six-head-ptext">{{ ptext }}</p>
                </div>
            </div>

            <div class="trust-accounting-six-container-two">
                <div>
                    <ul>
                        <li><i class="fa-solid fa-circle-check fa-xl" style="color: #29bf12;"></i>{{ li1 }}<i
                                class="fa-sharp fa-solid fa-arrow-right fa-xl"></i></li>
                        <li><i class="fa-solid fa-circle-check fa-xl" style="color: #29bf12;"></i>{{ li2 }}<i
                                class="fa-sharp fa-solid fa-arrow-right fa-xl"></i></li>
                        <li><i class="fa-solid fa-circle-check fa-xl" style="color: #29bf12;"></i>{{ li3 }}<i
                                class="fa-sharp fa-solid fa-arrow-right fa-xl"></i></li>
                        <li><i class="fa-solid fa-circle-check fa-xl" style="color: #29bf12;"></i>{{ li4 }}<i
                                class="fa-sharp fa-solid fa-arrow-right fa-xl"></i></li>
                        <li><i class="fa-solid fa-circle-check fa-xl" style="color: #29bf12;"></i>{{ li5 }}<i
                                class="fa-sharp fa-solid fa-arrow-right fa-xl"></i></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            h1: "All-in-One",
            h2: "Legal Accounting Features",
            ptext: "Explore all the other features the LeanLaw financial operating system offers to streamline your legal operations and reduce the workload on your team of legal professionals:",

            li1: "Reporting & Compensation",
            li2: "Cloud-Based Billing Software",
            li3: "Reporting & Compensation",
            li4: "Timekeeping & Expense Tracking",
            li5: "Superior Customer Experience",

        }
    }
}

</script>

<style scoped>

.trust-accounting-six-main-div {
    display: flex;
    margin-left: 10rem;
    gap: 3rem;
    margin-bottom: 5rem;
}
.trust-accounting-six-container-one {
    width: 35rem;
}

.trust-accounting-six-container-two {
    width: 25rem;
}

.trust-accounting-six-head-text {
    font-family: "Lexend", sans-serif;
    text-transform: none;
    font-size: 33px;
    color: #223843;
    font-weight: 700;
    line-height: 1.4;
}

.trust-accounting-six-head-div {
    width: 20rem;
}

.trust-accounting-six-head-span {
    color: #29bf12;
}


.trust-accounting-six-head-ptext-div {
    width: 30rem;
    margin-top: 2rem;
}

.trust-accounting-six-head-ptext {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    list-style: none;
    color: #223843;
    line-height: 1.5;
}

li {
    list-style: none;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    list-style: none;
    color: #223843;
    font-weight: 600;
    line-height: 3;
    cursor: pointer;
}

.fa-circle-check {
    margin-right: 0.7rem;
}

.fa-arrow-right {
    margin-left: 0.7rem;
}</style>