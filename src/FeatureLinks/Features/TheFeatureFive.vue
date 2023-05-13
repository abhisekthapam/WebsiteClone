<template>
    <div class="the-feature-five-main">
        <div class="the-feature-five-head-div">
            <h1>{{ h1 }}</h1>
        </div>
        <div class="the-feature-five-ptext">
            <p>{{ p1 }}</p>
        </div>
        <div class="the-feature-five-learn">
            <h2 class="more-text">{{ Learn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
            <h2 class="more-text one">{{ Learn2 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
            <h2 class="more-text two">{{ Learn3 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            h1: "Ready to get started with LeanLaw?",
            p1: "The all-in-one billing software for your law firm.",
            Learn1: "Why LeanLaw",
            Learn2: "Get a Free Trial",
            Learn3: "Schedule a Demo",
        }
    }
}

</script>


<style scoped>

.the-feature-five-head-div {
    display: flex;
    justify-content: center;
}

.the-feature-five-ptext {
    display: flex;
    justify-content: center;
}
.the-feature-five-learn {
    display: flex;
    gap: 15rem;
    margin-left: 15rem;
    margin-top: 5rem;
}

h1 {
    font-size: 36px;
    font-family: "Open Sans", sans-serif;
    text-transform: none;
    font-weight: 750;
    margin-top: 6rem;
    color: #29bf12;
    line-height: 1.2;
}

p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.63;
    color: #fff;
}
.the-feature-five-main {
    height: 550px;
    margin-bottom: 5rem;
    background-image: url('@/assets/FeaturesHome/FeatureBackground.jpg');
    background-repeat: no-repeat;
    background-size: auto 520px;
}


.more-text {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  font-family: "Lexend", sans-serif;
  border-bottom: 1.5px solid white;
  padding-bottom: 2px;
  transition: all 0.8s ease;
  width: 8.9rem;
  cursor: pointer;
  margin-top: 2rem;
}
.more-text:hover {
  width: 11rem;
  transition: all 0.3s ease;
}

.more-text:hover .fa-sharp {
  transition: all 0.3s ease;
  transform: translateX(2rem);
}


.one {
  width: 9.6rem;
}
.one:hover {
  width: 11.5rem;
  transition: all 0.3s ease;
}

.two {
  width: 10.8rem;
}

.two:hover {
  width: 12.8rem;
  transition: all 0.3s ease;
}

.fa-sharp {
  margin-left: 0.4rem;
  transition: all 0.8s ease;
}

</style>