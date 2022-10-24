<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "UsersListItemUsernameLayout",
};
</script>

<style lang="scss" module>
.root {
  p {
    color: var(--color-text-base);
  }
  :hover {
    text-decoration: underline;
  }
}
</style>
