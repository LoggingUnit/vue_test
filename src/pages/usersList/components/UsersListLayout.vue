<template>
  <div :class="$style.root">
    <h1 :class="$style.title">
      <slot name="title" />
    </h1>
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

  .content {
    padding: 0 86px 160px;
  }
}
</style>
