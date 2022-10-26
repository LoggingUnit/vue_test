<template>
  <div :class="$style.root">
    <img :class="$style.image" :src="iconSrc" alt="" />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    iconSrc: String,
  },

  name: "LabelWithIcon",
});
</script>

<style lang="scss" module>
.root {
  display: flex;
  align-items: center;

  .image {
    padding-right: 8px;
  }
}
</style>
