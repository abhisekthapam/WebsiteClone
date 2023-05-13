<template>
    <div class="box">
        <div class="QuickBookPlusLeanLaw">
            <div class="QuickBookPlusLeanLaw-div">
                <img :src="Image" alt="LeanLaw And QuickBooks Online Logo" class="QuickBookPlusLeanLaw-img"
                    title="LeanLaw And QuickBooks Online Logo">
            </div>
            <div>
                <h1 class="QuickBookPlusLeanLaw-head">LeanLaw is the <span class="text">top-rated Legal App</span> in the
                    QuickBooks <span class="text">Online
                        marketplace</span>
                </h1>
            </div>
            <div class="QuickBookPlusLeanLaw-box">
                <p class="QuickBookPlusLeanLaw-text">{{ pText }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import QuickBookPlusLeanLaw from '@/assets/QuickBookPlusLeanLaw.png'

export default {
    data() {
        return {
            Image: QuickBookPlusLeanLaw,
            pText : "Seamless integration. Real-time, 2-way sync."
        }
    }
}

</script>

<style scoped>
.QuickBookPlusLeanLaw {
    width: 1030px;
    height: 438px;
    margin-top: 8rem;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.QuickBookPlusLeanLaw-div {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.QuickBookPlusLeanLaw-img {
    width: 780px;
    height: 80px;
}

.QuickBookPlusLeanLaw-head {
    font-size: 35px;
    font-family: "Lexend", sans-serif;
    text-transform: none;
    font-weight: 700;
    color: #223843;
    margin-left: 13%;
    margin-right: 13%;
    line-height: 4rem;
}

.QuickBookPlusLeanLaw-box {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.QuickBookPlusLeanLaw-text {
    font-family: "Lexend", sans-serif;
    text-transform: none;
    user-select: none;
    cursor: default;
    transition: cursor 0.3s ease-out;
}

.QuickBookPlusLeanLaw-text:active {
    cursor: not-allowed;
}

.box {
    display: flex;
    justify-content: center;
    margin-bottom: 10rem;
}

.text {
    color: #29BF12;
}
</style>