<template>
  <div class="main-main-div">

    <div class="main-div">
      <div class="seperator-div1">
        <div class="logo-div">
          <img :src="Logo1" alt="Check List Icon" title="checklist icon" class="icon">
        </div>
        <div class="text-div">
          <h1 class="head-text">{{ h1 }}</h1>
          <p class="p-text">{{ p1 }}</p>
        </div>
        <div class="more-div">
          <h2 class="more-text">{{ Learn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
        </div>
      </div>
      <div class="seperator-div2">
        <img :src="Image1" alt="Feature Record Your Payment" title="Feature Record your payment" class="image">
      </div>
    </div>

    <div class="main-div two">
      <div class="seperator-div2 reverse2">
        <img :src="Image2" alt="Feature Legal billing sequence" title="Legal billing sequence" class="image">
      </div>
      <div class="seperator-div1 reverse1">
        <div class="logo-div">
          <img :src="Logo2" alt="icon legal billing" title="icon legal billing" class="icon r">
        </div>
        <div class="text-div">
          <h1 class="head-text">{{ h2 }}</h1>
          <p class="p-text">{{ p2 }}</p>
        </div>
        <div class="more-div">
          <h2 class="more-text">{{ Learn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
        </div>
      </div>
    </div>

    <div class="main-div">
      <div class="seperator-div1">
        <div class="logo-div">
          <img :src="Logo3" alt="icon legal reports" title="icon legal reports" class="icon">
        </div>
        <div class="text-div">
          <h1 class="head-text">{{ h3 }}</h1>
          <p class="p-text">{{ p3 }}</p>
        </div>
        <div class="more-div">
          <h2 class="more-text">{{ Learn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
        </div>
      </div>
      <div class="seperator-div2">
        <img :src="Image3" alt="Feature Revenue by client and matter reports" title="Feature Revenue by client and matter reports" class="image">
      </div>
    </div>

    <div class="main-div two">
      <div class="seperator-div2 reverse2">
        <img :src="Image4" alt="illustration of leanlaw integrations" title="illustration of leanlaw integrations" class="image">
      </div>
      <div class="seperator-div1 reverse1">
        <div class="logo-div">
          <img :src="Logo4" alt="integrations icon" title="integrations icon" class="icon r">
        </div>
        <div class="text-div">
          <h1 class="head-text">{{ h4 }}</h1>
          <p class="p-text">{{ p4 }}</p>
        </div>
        <div class="more-div">
          <h2 class="more-text">{{ Learn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
        </div>
      </div>
    </div>

    
    <div class="main-div">
      <div class="seperator-div1">
        <div class="logo-div">
          <img :src="Logo5" alt="time tracking icon" title="time tracking icon" class="icon">
        </div>
        <div class="text-div">
          <h1 class="head-text">{{ h5 }}</h1>
          <p class="p-text">{{ p5 }}</p>
        </div>
        <div class="more-div">
          <h2 class="more-text">{{ Learn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
        </div>
      </div>
      <div class="seperator-div2">
        <img :src="Image5" alt="expense tracking for lawyers illustration" title="expense tracking for lawyers illustration" class="image">
      </div>
    </div>

    <div class="main-div">
      <div class="seperator-div1">
        <div class="logo-div">
          <img :src="Logo6" alt="onboarding icon" title="onboarding icon" class="icon">
        </div>
        <div class="text-div">
          <h1 class="head-text">{{ h6 }}</h1>
          <p class="p-text">{{ p6 }}</p>
        </div>
        <div class="more-div">
          <h2 class="more-text">{{ Learn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
        </div>
      </div>
      <div class="seperator-div2">
        <img :src="Image6" alt="LeanLaw quickstart onboarding for clients" title="LeanLaw quickstart onboarding for clients" class="image">
      </div>
    </div>

    <div class="main-div two">
      <div class="seperator-div2 reverse2">
        <img :src="Image7" alt="lawyer create new matter illustration" title="lawyer create new matter illustration" class="image">
      </div>
      <div class="seperator-div1 reverse1">
        <div class="logo-div">
          <img :src="Logo7" alt="Matter management icon" title="Matter management icon" class="icon r">
        </div>
        <div class="text-div">
          <h1 class="head-text">{{ h7 }}</h1>
          <p class="p-text">{{ p7 }}</p>
        </div>
        <div class="more-div">
          <h2 class="more-text">{{ Learn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
        </div>
      </div>
    </div>

    <div class="main-div">
      <div class="seperator-div1">
        <div class="logo-div">
          <img :src="Logo8" alt="law firm reporting automated icon" title="law firm reporting automated icon" class="icon">
        </div>
        <div class="text-div">
          <h1 class="head-text">{{ h8 }}</h1>
          <p class="p-text">{{ p8 }}</p>
        </div>
        <div class="more-div">
          <h2 class="more-text">{{ Learn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
        </div>
      </div>
      <div class="seperator-div2">
        <img :src="Image8" alt="law firm reporting automated illustration" title="law firm reporting automated illustration" class="image">
      </div>
    </div>

    <div class="main-div two">
      <div class="seperator-div2 reverse2">
        <img :src="Image9" alt="LeanLaw integrations illustration" title="LeanLaw integrations illustration" class="image">
      </div>
      <div class="seperator-div1 reverse1">
        <div class="logo-div">
          <img :src="Logo9" alt="LeanLaw Practice Management Icon" title="LeanLaw Practice Management Icon" class="icon r">
        </div>
        <div class="text-div">
          <h1 class="head-text">{{ h9 }}</h1>
          <p class="p-text">{{ p9 }}</p>
        </div>
        <div class="more-div">
          <h2 class="more-text">{{ Learn1 }}<i class="fa-sharp fa-solid fa-arrow-right"></i></h2>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import RecordPaymentLogo from '@/assets/RecordPaymentLogo.png';
import RecordPayment from '@/assets/RecordPayment.png';
import CloudBasedLegalBillingLogo from '@/assets/CloudBasedLegalBillingLogo.png';
import CloudBasedLegalBilling from '@/assets/CloudBasedLegalBilling.png';
import CompensionRecordingLogo from '@/assets/CompensionRecordingLogo.png';
import CompensionRecording from '@/assets/CompensionRecording.png';
import BestInBreedIntegrationLogo from '@/assets/BestInBreedIntegrationLogo.png';
import BestInBreedIntegration from '@/assets/BestInBreedIntegration.png';
import AddExpenseLogo from '@/assets/AddExpenseLogo.png';
import AddExpense from '@/assets/AddExpense.png';
import QuickStartOnBoardingLogo from '@/assets/QuickStartOnBoardingLogo.png';
import QuickStartOnBoarding from '@/assets/QuickStartOnBoarding.png';
import CreateMatterLogo from '@/assets/CreateMatterLogo.png';
import CreateMatter from '@/assets/CreateMatter.png';
import SummaryLogo from '@/assets/SummaryLogo.png';
import Summary from '@/assets/Summary.png';
import PracticeManagementLogo from '@/assets/PracticeManagementLogo.png';
import PracticeManagement from '@/assets/PracticeManagement.png';

export default {
  data() {
    return {
      h1: "IOLTA Trust Accounting",
      p1: "Best in class, 3 way sync",
      Learn1: "Learn More",
      Logo1: RecordPaymentLogo,
      Image1: RecordPayment,
      
      h2: "Cloud-based Legal Billing",
      p2: "Easily track hourly, flat fees and LEDES billing",
      Logo2: CloudBasedLegalBillingLogo,
      Image2: CloudBasedLegalBilling,

      h3: "Compensation Reporting",
      p3: "Track compensation and productivity for attorneys",
      Logo3: CompensionRecordingLogo,
      Image3: CompensionRecording,

      h4: "Best-in-Breed Integrations",
      p4: "Integrate LeanLaw with your favorite tech stack",
      Logo4: BestInBreedIntegrationLogo,
      Image4: BestInBreedIntegration,

      h5: "Legal Time & Expense Tracking",
      p5: "Desktop timers and mobile app timekeeping, for billable hours with just a click",
      Logo5: AddExpenseLogo,
      Image5: AddExpense,

      h6: "Seamless experience",
      p6: "Easy onboarding and customizable migration for faster success",
      Logo6: QuickStartOnBoardingLogo,
      Image6: QuickStartOnBoarding,

      h7: "Matter management",
      p7: "Keep it all together, easier than ever",
      Logo7: CreateMatterLogo,
      Image7: CreateMatter,

      h8: "Firm reports",
      p8: "Easily create and automate real-time firm reports",
      Logo8: SummaryLogo,
      Image8: Summary,

      h9: "Practice management",
      p9: "Use Best of Breed integrated tools to run your whole practice",
      Logo9: PracticeManagementLogo,
      Image9: PracticeManagement


    };
  },
};
</script>

<style scoped>

.main-main-div {
  margin-top: 7rem;
}
.main-div {
  display: flex;
  margin-bottom: 9rem;
}

.icon {
  width: 72px;
  height: 72px;
  margin-top: 3rem;
}

.head-text {
  color: #223843;
  font-family: "Lexend", sans-serif;
  text-transform: none;
  font-weight: 700;
  font-size: 35px;
}

.p-text {
  color: #223843;
  font-size: 1em;
  font-weight: 600;
  font-family: "Lexend", sans-serif;
}

.more-text {
  color: #223843;
  font-size: 18px;
  font-weight: 600;
  font-family: "Lexend", sans-serif;
  border-bottom: 2px solid black;
  padding-bottom: 2px;
  transition: all 0.8s ease;
  width: 7.5rem;
}

.more-text:hover {
  width: 9.5rem;
  transition: all 0.3s ease;
}

.more-text:hover .fa-sharp {
  transition: all 0.3s ease;
  transform: translateX(2rem);
}

.more-div {
  width: 7.5rem;
  margin-top: 2rem;
  cursor: pointer;
}

.fa-sharp {
  margin-left: 0.4rem;
  transition: all 0.8s ease;
}
.seperator-div1 {
  width: 30rem;
  margin-left: 15rem;
}

.seperator-div2 {
  width: 30rem;
  height: 22rem;
  margin-left: 3rem;
}

.image {
  width: 470px;
  height: 367px;
}

.reverse2{
  margin-left: 15rem;
}

.reverse1 {
  margin-left: 3rem;
}

.two {
  margin-left: 2rem;
}

.r {
  margin: 0;
  margin-bottom: 1rem;
}
</style>
