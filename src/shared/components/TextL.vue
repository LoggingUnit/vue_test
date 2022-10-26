<template>
  <p :class="$style.root">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "TextL",
};
</script>

<style lang="scss" module>
.root {
  display: inline-block;
  font-size: var(--typo-font-size-l);
  font-weight: var(--type-font-weight-xl);
}
</style>
