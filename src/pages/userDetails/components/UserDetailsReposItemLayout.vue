<template>
  <div :class="$style.root">
    <div :class="$style.name">
      <slot name="name" />
    </div>
    <div :class="$style.rightColumn">
      <div :class="$style.watch">
        <slot name="watch" />
      </div>
      <div :class="$style.stars">
        <slot name="stars" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetailsReposItemLayout",
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .name,
  .stars,
  .watch {
    p {
      color: var(--color-black);
      font-weight: var(--type-font-weight-s);
    }
  }

  .name {
    text-transform: capitalize;
    p:hover {
      color: var(--color-blue);
    }
  }

  .rightColumn {
    display: flex;
    width: 28%;

    .watch,
    .stars {
      width: 50%;
    }
  }
}
</style>
