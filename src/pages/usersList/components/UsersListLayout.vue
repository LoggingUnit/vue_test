<template>
  <div :class="$style.root">
    <div :class="$style.title">
      <slot name="title" />
    </div>
    <div :class="$style.content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersListLayout",
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;

  .title {
    margin: 60px 0 60px;
    text-align: center;
  }
}
</style>
