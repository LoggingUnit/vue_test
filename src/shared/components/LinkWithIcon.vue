<template>
  <a :href="href" :class="$style.root">
    <img :class="$style.image" :src="iconSrc" alt="" />
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    iconSrc: String,
    href: String,
  },

  name: "LinkWithIcon",
});
</script>

<style lang="scss" module>
.root {
  display: flex;
  align-items: center;
  color: var(--color-blue);

  :hover {
    text-decoration: underline;
  }

  .image {
    padding-right: 5px;
  }
}
</style>
