<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UsersListContentNotFoundLayout",
};
</script>

<style lang="scss" module>
.root {
  padding-top: 80px;
  display: flex;
  justify-content: center;

  p {
    font-weight: var(--type-font-weight-l);
  }
}
</style>
