<template>
    <div class="image-div">
      <div class="image-wrapper">
        <img :src="image" alt="Primary Focus" class="image">
      </div>
    </div>
  </template>
  
  <script>
  import PrimaryFocus from '@/assets/PrimaryFocus.png'
  
  export default {
    data() {
      return {
        image: PrimaryFocus
      }
    }
  }
  </script>
  
  <style scoped>
  .image {
    width: 208px;
    height: 78px;
  }
  
  .image-div {
    width: 208px;
    height: 78px;
    margin-left: 4rem;
    opacity:0.5;
  }
  
  .image-wrapper {
    width: 15rem;
    height: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: grayscale(1);
  }

  .image-wrapper:hover {
    background: #fff;
    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));
    border-radius: 10px;
  }
.image-div:hover {
    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));
    border-radius: 10px;
    z-index: 1;
    opacity: 1;
    background: #fff;
    transition: linear 2s ease-out;
}
  </style>
  
