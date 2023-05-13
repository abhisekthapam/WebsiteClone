<template>
    <div>
        <div>
            <h1 class="Three-head-detail extra">{{ threehead }}</h1>
            <div class="Three-div">
                <h1 class="Three-head-detail">{{ threeh1 }}</h1>
                <ul>
                    <li>{{ threeh1list1 }}</li>
                    <li>{{ threeh1list2 }}</li>
                    <li>{{ threeh1list3 }}</li>
                </ul>
            </div>
            <div class="Three-div">
                <h1 class="Three-head-detail">{{ threeh2 }}</h1>
                <ul>
                    <li>{{ threeh2list1 }}</li>
                    <li>{{ threeh2list1 }}</li>
                    <li>{{ threeh2list1 }}</li>
                </ul>
            </div>
            <div class="Three-div">
                <h1 class="Three-head-detail">{{ threeh3 }}</h1>
                <ul>
                    <li>{{ threeh3list1 }}</li>
                    <li>{{ threeh3list2 }}</li>
                    <li>{{ threeh3list3 }}</li>
                    <li>{{ threeh3list4 }}</li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            threehead: "Solutions",
            threeh1: "BY USE CASE",
            threeh1list1: "Fixed Fees",
            threeh1list2: "Hourly Billing",
            threeh1list3: "Contigency Fees",
            threeh2: "BY FIRM TYPE",
            threeh2list1: "Small Law Firms",
            threeh2list2: "Mid-size Law Firms",
            threeh2list3: "Modern & Distributed Firms",
            threeh3: "BY ROLE",
            threeh3list1: "Firm Administrators",
            threeh3list2: "Billing & Accounting Staff",
            threeh3list3: "Partners & Attorneys",
            threeh3list4: "LeanLaw Pros"
        }
    }
}
</script>

<style scoped>
.Three-head-detail {
    font-family: "Open Sans", sans-serif;
    color: #223843;
    font-size: 14px;
    font-weight: 700;
    cursor: default;
}
.extra {
    font-size: 14px;
    color: #29BF12 !important;
    cursor: pointer;
}

.extra:hover{
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

