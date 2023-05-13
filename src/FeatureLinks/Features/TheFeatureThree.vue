<template>
    <div>

        <div class="feature-three-main-one">
            <div>
                <div class="feature-three-container-one">
                    <img :src="cardLogo1" alt="RecordPaymentLogo" class="Logo">
                    <h1 class="feature-three-head-text">{{ cardHead1 }}</h1>
                    <p class="feature-three-ptext">{{ cardText1 }}</p>
                    <h2 class="more-text">{{ cardLearn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
                </div>
            </div>

            <div>
                <div class="feature-three-container-one">
                    <img :src="cardLogo2" alt="RecordPaymentLogo" class="Logo">
                    <h1 class="feature-three-head-text card-head-two">{{ cardHead2 }}</h1>
                    <p class="feature-three-ptext card-ptext-two">{{ cardText2 }}</p>
                    <h2 class="more-text">{{ cardLearn2 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
                </div>
            </div>

            <div>
                <div class="feature-three-container-one">
                    <img :src="cardLogo3" alt="RecordPaymentLogo" class="Logo">
                    <h1 class="feature-three-head-text">{{ cardHead3 }}<br>{{ cardHead3a }}</h1>
                    <p class="feature-three-ptext card-ptext-three">{{ cardText3 }}</p>
                    <h2 class="more-text more-text-three">{{ cardLearn3 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
                </div>
            </div>
        </div>

        <div class="feature-three-main-one two">
            <div>
                <div class="feature-three-container-one">
                    <img :src="cardLogo4" alt="RecordPaymentLogo" class="Logo logofour">
                    <h1 class="feature-three-head-text">{{ cardHead4 }}<br><div class="card-head-four-span"><span>{{ cardHead4a }}</span></div></h1>
                    <p class="feature-three-ptext card-ptext-four">{{ cardText4 }}</p>
                    <h2 class="more-text">{{ cardLearn4 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
                </div>
            </div>

            <div>
                <div class="feature-three-container-one">
                    <img :src="cardLogo5" alt="RecordPaymentLogo" class="Logo">
                    <h1 class="feature-three-head-text card-head-five">{{ cardHead5 }}<br>{{ cardHead5a }}</h1>
                    <p class="feature-three-ptext card-ptext-five">{{ cardText5 }}</p>
                    <h2 class="more-text">{{ cardLearn5 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
                </div>
            </div>

            <div>
                <div class="feature-three-container-one">
                    <img :src="cardLogo6" alt="RecordPaymentLogo" class="Logo">
                    <h1 class="feature-three-head-text">{{ cardHead6 }}<br>{{ cardHead6a }}</h1>
                    <p class="feature-three-ptext card-ptext-six">{{ cardText6 }}</p>
                    <h2 class="more-text more-text-six">{{ cardLearn6 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import RecordPaymentLogo from '@/assets/RecordPaymentLogo.png';
import QuickStartOnBoardingLogo from '@/assets/QuickStartOnBoardingLogo.png';
import CloudBasedLegalBillingLogo from '@/assets/CloudBasedLegalBillingLogo.png';
import LeanLawMatterManagementGray from '@/assets/FeaturesHome/LeanLawMatterManagementGray.png';
import LeanLawTimeAndExpense from '@/assets/FeaturesHome/LeanLawTimeAndExpense.png';
import LeanLawClientExperience from '@/assets/FeaturesHome/LeanLawClientExperience.png';

export default {
    data() {
        return {
            cardLogo1: RecordPaymentLogo,
            cardHead1: "Trust accounting",
            cardText1: "Comply with trust accounting regulations, maintain appropriate records and simplify reconciliations.",
            cardLearn1: "Learn More",

            cardLogo2: QuickStartOnBoardingLogo,
            cardHead2: "Reports & compensation tracking",
            cardText2: "Visualize data and view custom reports, while gaining real-time insights into your firm’s profitability and progress.",
            cardLearn2: "Learn More",

            cardLogo3: CloudBasedLegalBillingLogo,
            cardHead3: "Legal",
            cardHead3a: "billing",
            cardText3: "Reduce manual data entry and the time needed to generate and send invoices. Get paid faster by billing clients via a straightforward client portal.",
            cardLearn3: "Learn More",

            cardLogo4: LeanLawMatterManagementGray,
            cardHead4: "Matter",
            cardHead4a: "management",
            cardText4: "Track all financial aspects of every matter in one centralized location and access it from anywhere at any time.",
            cardLearn4: "Learn More",

            cardLogo5: LeanLawTimeAndExpense,
            cardHead5: "Time tracking",
            cardHead5a: "& expenses",
            cardText5: "Automatically capture more billable hours and keep track of your time from any location with our mobile app.",
            cardLearn5: "Learn More",

            cardLogo6: LeanLawClientExperience,
            cardHead6: "Client",
            cardHead6a: "experience",
            cardText6: "All-in-one tool that provides a client-centric experience, while making client-lawyer communication and collaboration stronger.",
            cardLearn6: "Learn More",
        }
    }
}



</script>

<style scoped>
.feature-three-main-one {
    display: flex;
    margin-left: 10rem;
    gap: 2rem;
}

.Logo {
    width: 71px;
    height: 71px;
    cursor: pointer;
    margin-top: 4rem;
}

.feature-three-container-one {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    width: 370px;
    height: 494px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.feature-three-head-text {
    font-family: "Lexend", sans-serif;
    text-transform: none;
    font-weight: 600;
    color: #223843;
    padding: 0;
    width: 140px;
    text-align: center;
    cursor: pointer;
    margin-top: 3.5rem;
}

.card-head-five {
    width: 80%;
}
.feature-three-head-text:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
}

.feature-three-ptext {
    font-family: "Lexend", sans-serif;
    text-transform: none;
    font-weight: 400;
    color: #223843;
    padding: 0;
    margin-top: 1.5rem;
    width: 260px;
    text-align: center;
    line-height: 1.5;
}

.more-text {
    color: #223843;
    font-size: 18px;
    font-weight: 600;
    font-family: "Lexend", sans-serif;
    border-bottom: 1.5px solid black;
    padding-bottom: 2px;
    transition: all 0.8s ease;
    width: 7.5rem;
    cursor: pointer;
    margin-top: 2rem;
}

.more-text:hover {
    width: 9.5rem;
    transition: all 0.3s ease;
}

.more-text:hover .fa-sharp {
    transition: all 0.3s ease;
    transform: translateX(2rem);
}

.fa-sharp {
    margin-left: 0.4rem;
    transition: all 0.8s ease;
}

.two {
    margin-top: 2rem;
    margin-bottom: 5rem;
}

.card-head-two {
    width: 100%;
}

.card-ptext-two, .card-ptext-three, .card-ptext-four , .card-ptext-five{
    width: 80%;
}
.card-ptext-six {
    width: 76%;
}

.more-text-three, .more-text-six {
    margin-top: 0.5rem;
}

.card-head-four-span {
    margin-left: -2rem;
}


</style>