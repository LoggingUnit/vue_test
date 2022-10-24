<template>
  <p :class="$style.root">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "TextXl",
};
</script>

<style lang="scss" module>
.root {
  display: inline-block;
  font-size: var(--typo-font-size-xl);
  font-weight: var(--type-font-weight-xl);
}
</style>
