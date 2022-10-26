<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UserDetailsReposLayout",
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    padding-bottom: 10px;
  }
}
</style>
