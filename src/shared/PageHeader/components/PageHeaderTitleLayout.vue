<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script>
export default {
  name: "PageHeaderTitleLayout",
};
</script>

<style lang="scss" module>
.root {
  p {
    color: var(--color-white);
    padding-left: 16px;
    font-weight: var(--type-font-weight-l);
  }
}
</style>
