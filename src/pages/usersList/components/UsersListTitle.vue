<template>
  <p :class="$style.root">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "UsersListTitle",
};
</script>

<style lang="scss" module>
.root {
  font-size: var(--typo-font-size-xl);
  font-weight: var(--type-font-weight-xl);
}
</style>
