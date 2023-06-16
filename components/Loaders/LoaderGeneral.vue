<template>
  <div class="loader_general">
    <div class="image_loader">
      <img src="@/assets/media/images/others/bot.png" alt="" />
    </div>
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
.loader_general {
  background: var(--body_bg);
  height: inherit;
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-block: 100px;

  .image_loader {
    position: relative;

    img {
      position: relative;
      animation: animationGeneral 2s infinite;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 150px;
      height: 40px;
      border-radius: 50%;
      background-color: #eee;
      left: 0;
      right: 0;
      margin: 0 auto;
      animation: animationGeneralShadow 2s infinite;
    }
  }

  span {
    position: relative;
    height: 20px;
    font-size: 4rem;

    &::after {
      animation: animationGeneralSpan 2s infinite;
      content: ".";
      color: var(--main);
    }
  }
}

@keyframes animationGeneral {
  0% {
    top: -20px;
  }

  50% {
    top: 0px;
  }

  100% {
    top: -20px;
  }
}

@keyframes animationGeneralShadow {
  0% {
    bottom: 0;
    width: 60px;
    background-color: #eee;
  }

  50% {
    bottom: 0;
    width: 150px;
    background-color: #e2e2e2;
  }

  100% {
    bottom: 0;
    width: 60px;
    background-color: #eee;
  }
}

@keyframes animationGeneralSpan {
  0% {
    content: ".";
  }

  10% {
    content: "..";
  }

  20% {
    content: "...";
  }

  30% {
    content: "....";
  }

  40% {
    content: ".....";
  }

  50% {
    content: ".......";
  }

  60% {
    content: ".......";
  }
}
</style>
