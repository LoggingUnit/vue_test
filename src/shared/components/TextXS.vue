<template>
  <p :class="$style.root">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "TextXS",
};
</script>

<style lang="scss" module>
.root {
  display: inline-block;
  font-size: var(--typo-font-size-xs);
}
</style>
