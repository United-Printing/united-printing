<template>
  <div class="rings">
    <div class="ring ring-1" />
    <div class="ring ring-2" />
    <div class="ring ring-3" />
  </div>
</template>

<style scoped>
.rings {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 146px;
  flex-shrink: 0;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(254, 225, 55, 0.6);
}

.ring-1 {
  width: 146px;
  height: 146px;
}

.ring-2 {
  width: 110px;
  height: 110px;
}

.ring-3 {
  width: 74px;
  height: 74px;
}

@media screen and (min-width: 1200px) {
  .rings { width: 112px; height: 112px; }
  .ring-1 { width: 112px; height: 112px; }
  .ring-2 { width: 84px; height: 84px; }
  .ring-3 { width: 56px; height: 56px; }
}

@media screen and (min-width: 1920px) {
  .rings { width: 146px; height: 146px; }
  .ring-1 { width: 146px; height: 146px; }
  .ring-2 { width: 110px; height: 110px; }
  .ring-3 { width: 74px; height: 74px; }
}
</style>
