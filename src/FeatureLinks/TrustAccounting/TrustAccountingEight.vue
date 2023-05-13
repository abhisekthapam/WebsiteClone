<template>
    <div class="trust-accounting-eight-main-div">
        <div>
            <div class="trust-accounting-eight-head-text-div">
                <h1 class="trust-accounting-eight-head-text">{{ head1 }}</h1>
            </div>
            <div class="trust-accounting-eight-ptext-div">
                <p class="trust-accounting-eight-ptext">{{ pHeadText }}</p>
            </div>
        </div>



        <div class="trust-accounting-question-answer-div">
            <div class="questions-div">
                <div class="question-div">
                    <div>
                        <h1 class="trust-accounting-eight-question-text">
                            {{ question1 }}
                        </h1>
                    </div>
                    <div class="text-container">
                        <i class="fa-solid fa-angle-up fa-xl" style="color: #29bf12" v-show="showAnswer1"
                            :class="{ rotate: !showAnswer }" @click="showAnswer = showAnswer"></i>
                        <i class="fa-solid fa-angle-down fa-xl" style="color: #29bf12" v-show="!showAnswer1"
                            :class="{ rotate: showAnswer }" @click="showAnswer = !showAnswer"></i>
                    </div>
                </div>
            </div>
            <div class="border-bottom-flex">
                <div class="border-bottom-div">
                    <div v-show="showAnswer" class="answers-div">
                        <div class="answer-div">
                            <div>
                                <p class="main-ptext">
                                    <span class="answer-one">{{ answer1 }}</span><br /><span class="answer-two">{{ answer1a
                                    }}</span><br /><span class="answer-three">{{ answer1aa }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="trust-accounting-question-answer-div">
            <div class="questions-div">
                <div class="question-div">
                    <div>
                        <h1 class="trust-accounting-eight-question-text">
                            {{ question2 }}
                        </h1>
                    </div>
                    <div class="text-container2">
                        <i class="fa-solid fa-angle-up fa-xl" style="color: #29bf12" v-show="showAnswer2"
                            :class="{ rotate: !showAnswerr }" @click="showAnswerr = showAnswerr"></i>
                        <i class="fa-solid fa-angle-down fa-xl" style="color: #29bf12" v-show="!showAnswer2"
                            :class="{ rotate: showAnswerr }" @click="showAnswerr = !showAnswerr"></i>
                    </div>
                </div>
            </div>
            <div class="border-bottom-flex">
                <div class="border-bottom-div">
                    <div v-show="showAnswerr" class="answers-div">
                        <div class="answer-div">
                            <div>
                                <p class="main-ptext">
                                    <span class="answer-two">{{ answer2 }}</span><br /><span class="answer-two">{{ answer2a
                                    }}</span><br /><span class="answer-three">{{ answer2aa }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="trust-accounting-question-answer-div">
            <div class="questions-div">
                <div class="question-div">
                    <div>
                        <h1 class="trust-accounting-eight-question-text">
                            {{ question3 }}
                        </h1>
                    </div>
                    <div class="text-container3">
                        <i class="fa-solid fa-angle-up fa-xl" style="color: #29bf12" v-show="showAnswer3"
                            :class="{ rotate: !showAnswerrr }" @click="showAnswerrr = showAnswer"></i>
                        <i class="fa-solid fa-angle-down fa-xl" style="color: #29bf12" v-show="!showAnswer3"
                            :class="{ rotate: showAnswerrr }" @click="showAnswerrr = !showAnswer"></i>
                    </div>
                </div>
            </div>
            <div class="border-bottom-flex">
                <div class="border-bottom-div">
                    <div v-show="showAnswerrr" class="answers-div">
                        <div class="answer-div">
                            <div>
                                <p class="main-ptext">
                                    <span class="answer-two">{{ answer3 }}</span><br /><span class="answer-two">{{ answer3a
                                    }}</span><br /><span class="answer-three">{{ answer3aa }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="trust-accounting-question-answer-div">
            <div class="questions-div">
                <div class="question-div">
                    <div>
                        <h1 class="trust-accounting-eight-question-text">
                            {{ question4 }}
                        </h1>
                    </div>
                    <div class="text-container4">
                        <i class="fa-solid fa-angle-up fa-xl" style="color: #29bf12" v-show="showAnswer4"
                            :class="{ rotate: !showAnswerrrr }" @click="showAnswerrrr = showAnswerrrr"></i>
                        <i class="fa-solid fa-angle-down fa-xl" style="color: #29bf12" v-show="!showAnswer4"
                            :class="{ rotate: showAnswerrrr }" @click="showAnswerrrr = !showAnswerrrr"></i>
                    </div>
                </div>
            </div>
            <div class="border-bottom-flex">
                <div class="border-bottom-div">
                    <div v-show="showAnswerrrr" class="answers-div">
                        <div class="answer-div">
                            <div>
                                <p class="main-ptext">
                                    <span class="answer-two">{{ answer4 }}</span><br /><span class="answer-two">{{ answer4a
                                    }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div class="trust-accounting-question-answer-div">
            <div class="questions-div">
                <div class="question-div">
                    <div>
                        <h1 class="trust-accounting-eight-question-text">
                            {{ question5 }}
                        </h1>
                    </div>
                    <div class="text-container5">
                        <i class="fa-solid fa-angle-up fa-xl" style="color: #29bf12" v-show="showAnswer5"
                            :class="{ rotate: !showAnswerrrrr }" @click="showAnswerrrrr = showAnswerrrrr"></i>
                        <i class="fa-solid fa-angle-down fa-xl" style="color: #29bf12" v-show="!showAnswer5"
                            :class="{ rotate: showAnswerrrrr }" @click="showAnswerrrrr = !showAnswerrrrr"></i>
                    </div>
                </div>
            </div>
            <div class="border-bottom-flex">
                <div class="border-bottom-div">
                    <div v-show="showAnswerrrrr" class="answers-div">
                        <div class="answer-div">
                            <div>
                                <p class="main-ptext">
                                    <span class="answer-two">{{ answer5 }}</span><br /><span class="answer-two">{{ answer5a
                                    }}</span><br /><span class="answer-three">{{ answer5aa }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div class="trust-accounting-question-answer-div">
            <div class="questions-div">
                <div class="question-div">
                    <div>
                        <h1 class="trust-accounting-eight-question-text">
                            {{ question6 }}
                        </h1>
                    </div>
                    <div class="text-container6">
                        <i class="fa-solid fa-angle-up fa-xl" style="color: #29bf12" v-show="showAnswer6"
                            :class="{ rotate: !showAnswerrrrrr }" @click="showAnswerrrrrr = showAnswerrrrrr"></i>
                        <i class="fa-solid fa-angle-down fa-xl" style="color: #29bf12" v-show="!showAnswer6"
                            :class="{ rotate: showAnswerrrrrr }" @click="showAnswerrrrrr = !showAnswerrrrrr"></i>
                    </div>
                </div>
            </div>
            <div class="border-bottom-flex">
                <div class="border-bottom-div">
                    <div v-show="showAnswerrrrrr" class="answers-div">
                        <div class="answer-div">
                            <div>
                                <p class="main-ptext">
                                    <span class="answer-two">{{ answer6 }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div class="trust-accounting-question-answer-div">
            <div class="questions-div">
                <div class="question-div">
                    <div>
                        <h1 class="trust-accounting-eight-question-text">
                            {{ question7 }}
                        </h1>
                    </div>
                    <div class="text-container7">
                        <i class="fa-solid fa-angle-up fa-xl" style="color: #29bf12" v-show="showAnswer7"
                            :class="{ rotate: !showAnswerrrrrrr }" @click="showAnswerrrrrrr = showAnswerrrrrrr"></i>
                        <i class="fa-solid fa-angle-down fa-xl" style="color: #29bf12" v-show="!showAnswer7"
                            :class="{ rotate: showAnswerrrrrrr }" @click="showAnswerrrrrrr = !showAnswerrrrrrr"></i>
                    </div>
                </div>
            </div>
            <div class="border-bottom-flex">
                <div class="border-bottom-div">
                    <div v-show="showAnswerrrrrrr" class="answers-div">
                        <div class="answer-div">
                            <div>
                                <p class="main-ptext">
                                    <span class="answer-two">{{ answer7 }}</span><br /><span class="answer-two">{{ answer7a
                                    }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    
    mounted() {
        document.addEventListener('click', this.handleOutsideClick);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    },

    methods: {
        handleOutsideClick(event) {
            const details = this.$el.querySelector('.text-container');
            const details2 = this.$el.querySelector('.text-container2');
            const details3 = this.$el.querySelector('.text-container3');
            const details4 = this.$el.querySelector('.text-container4');
            const details5 = this.$el.querySelector('.text-container5');
            const details6 = this.$el.querySelector('.text-container6');
            const details7 = this.$el.querySelector('.text-container7');
            if (details && !details.contains(event.target)) {
                this.showAnswer = false;
            }
            if (details2 && !details2.contains(event.target)) {
                this.showAnswerr = false;
            }
            if (details3 && !details3.contains(event.target)) {
                this.showAnswerrr = false;
            }
            if (details4 && !details4.contains(event.target)) {
                this.showAnswerrrr = false;
            }
            if (details5 && !details5.contains(event.target)) {
                this.showAnswerrrrr = false;
            }
            if (details6 && !details6.contains(event.target)) {
                this.showAnswerrrrrr = false;
            }
            if (details7 && !details7.contains(event.target)) {
                this.showAnswerrrrrrr = false;
            }
        },
    },

    data() {
        return {
            showAnswer: false,
            showAnswerr: false,
            showAnswerrr: false,
            showAnswerrrr: false,
            showAnswerrrrr: false,
            showAnswerrrrrr: false,
            showAnswerrrrrrr: false,
            head1: "LeanLaw frequently asked questions",
            pHeadText:
                "Feel free to contact us along your LeanLaw journey. But here are some FAQ to get you started.",

            question1: "What is Trust Accounting in LeanLaw?",
            answer1:
                "Trust Accounting is a feature in LeanLaw that helps law firms manage their trust funds, maintain client trust account records, and ensure compliance with ethical and legal requirements.",
            answer1a:
                "LeanLaw trust accounting software has a three way reconciliation — Bank accounts, trust accounts and QuickBooks Online are in continuous sync and in-line with state bar association standards. You are well positioned for your weekly or monthly three-way reconciliation.",
            answer1aa:
                "Even better: IOLTA accounting is built into the invoicing workflow: You can make legal trust deposits and pay invoices using from trust liability account using LeanLaw. What used to be a daunting 12-step trust accounting process in QuickBooks Online is now just a few clicks.",


            question2:
                "What is an IOLTA Account?",
            answer2:
                "IOLTA is an acronym for Interest on Lawyer Trust Accounts.",
            answer2a:
                "First started in 1981, an IOLTA account is an account that is set up by a law firm to hold those client funds that are not large",
            answer2aa:
                "enough – or won’t be held for long enough – to justify having their own separate trust account.",

            question3:
                "How does LeanLaw’s Trust Accounting work?",
            answer3:
                "LeanLaw’s Trust Accounting allows you to create and manage trust funds, track client funds, generate reports, and reconcile",
            answer3a:
                "accounts. The feature integrates with your billing and accounting systems to provide a complete view of your trust funds and",
            answer3aa:
                "transactions.",

            question4:
                "What kind of reports can I generate with LeanLaw’s Trust Accounting?",
            answer4:
                "You can generate reports on trust fund balances, transactions, and reconcile accounts. Reports can be customized based on date",
            answer4a:
                "range, client, and other parameters.",

            question5:
                "Is LeanLaw’s Trust Accounting compliant with ethical and legal requirements?",
            answer5:
                "Yes, LeanLaw’s Trust Accounting is designed to meet the ethical and legal requirements for trust fund management, ensuring that",
            answer5a:
                "your firm’s trust accounts are always in compliance. Please be aware that each state has different requirements for IOLTA",
            answer5aa:
                "accounts.",

            question6:
                "Can I manage multiple trust accounts in LeanLaw’s Trust Accounting?",
            answer6:
                "Yes, you can manage multiple trust accounts and maintain records for each account in LeanLaw’s Trust Accounting feature.",

            question7:
                "Can I integrate LeanLaw’s Trust Accounting with my existing billing and accounting systems?",
            answer7:
                "Yes, LeanLaw’s Trust Accounting integrates with your existing billing and accounting systems, providing a comprehensive view of",
            answer7a:
                "your trust funds and transactions.",


        };
    },
};
</script>
  


<style scoped>
.trust-accounting-question-answer-div {
    margin-bottom: 2rem;
}

.trust-accounting-eight-main-div {
    margin-top: -5rem;
    padding-top: 5rem;
    margin-bottom: 3rem;
    padding-bottom: 5rem;
    background: #29bf120c;
}

.trust-accounting-eight-head-text-div {
    display: flex;
    justify-content: center;
}

.trust-accounting-eight-ptext-div {
    display: flex;
    justify-content: center;
    margin-top: -1.3rem;
}

.trust-accounting-eight-head-text {
    font-family: "Open Sans", sans-serif;
    text-transform: none;
    font-weight: 700;
    font-size: 35px;
    line-height: 1.26;
    color: #223843;
}

.trust-accounting-eight-ptext {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    list-style: none;
    color: #223843;
    line-height: 1.5;
    margin-bottom: 5rem;
}

.rotate {
    transform: rotate(180deg);
    transition: all 0.3s ease;
}

.question-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75rem;
}

.questions-div {
    display: flex;
    justify-content: center;
    border-bottom: 5rem;
}

.answer-div {
    width: 65rem;
    margin-top: -2rem;
    margin-bottom: 2rem;
}

.trust-accounting-eight-question-text,
.answer-one {
    color: #29bf12;
    font-size: 25px;
    font-weight: 600;
    line-height: 1.52;
    font-family: "Lexend", sans-serif;
}

.answer-one {
    color: #223843;
}

.answer-two,
.answer-three {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    list-style: none;
    color: #223843;
    line-height: 1.5;
}

.border-bottom-div {
    width: 75rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.479);
}

.border-bottom-flex {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.main-ptext {
    line-height: 2.2;
}
</style>