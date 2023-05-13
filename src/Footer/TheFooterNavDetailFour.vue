<template>
    <div>
        <div>
            <div class="four-div">
                <h1 class="four-head">{{ fourh1 }}</h1>
                <ul>
                    <li>{{ fourh1list1 }}</li>
                    <li>{{ fourh1list2 }}</li>
                    <li>{{ fourh1list3 }}</li>
                    <li>{{ fourh1list4 }}</li>
                </ul>
            </div>
            <div class="four-div">
                <h1 class="four-head">{{ fourh2 }}</h1>
                <ul>
                    <li>{{ fourh2list1 }}</li>
                    <li>{{ fourh2list2 }}</li>
                    <li>{{ fourh2list3 }}</li>
                    <li>{{ fourh2list4 }}</li>
                    <li>{{ fourh2list5 }}</li>
                </ul>
            </div>
            <div class="four-div">
                <h1 class="four-head">{{ fourh3 }}</h1>
                <h1 class="four-head">{{ fourh4 }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fourh1: "Resources",
            fourh1list1: "Demo Center",
            fourh1list2: "Blog",
            fourh1list3: "Support",
            fourh1list4: "APIs & Documentation",
            fourh2: "About",
            fourh2list1: "Why LeanLaw",
            fourh2list2: "Client Experience",
            fourh2list3: "News",
            fourh2list4: "Careers",
            fourh2list5: "Contact",
            fourh3: "Pricing",
            fourh4: "Reviews"
        }
    }
}

</script>

<style scoped>
.four-head {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #29BF12 !important;
    cursor: pointer;
}

.four-head:hover {
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