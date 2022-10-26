<template>
  <img :class="$style.root" :src="src" alt="" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: String,
  },

  name: "AvatarCircle",
});
</script>

<style lang="scss" module>
.root {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background: var(--color-blue) url(public/duck-icon.svg) no-repeat;
  background-size: 70% 70%;
  background-position: 40% 40%;
}
</style>
