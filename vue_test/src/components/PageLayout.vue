<template>
  <div :class="$style.root">
    <header :class="$style.header">
      <slot name="header" />
    </header>
    <main :class="$style.main">
      <slot name="main" />
    </main>
    <footer :class="$style.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "PageLayout"
};
</script>

<style lang="scss" module>
  .root {
    position: relative;

    .header {
      position: fixed;
      top: 0;
      width: 100%;
    }
  }
</style>