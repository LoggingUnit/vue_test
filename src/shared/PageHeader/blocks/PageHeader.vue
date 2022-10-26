<template>
  <PageHeaderLayout>
    <template #title>
      <PageHeaderTitle />
    </template>
    <template #search v-if="isSearchVisible">
      <PageHeaderSearch />
    </template>
  </PageHeaderLayout>
</template>

<script>
import { defineComponent } from "vue";
import PageHeaderLayout from "@/shared/PageHeader/components/PageHeaderLayout.vue";
import PageHeaderTitle from "@/shared/PageHeader/blocks/PageHeaderTitle.vue";
import PageHeaderSearch from "@/shared/PageHeader/blocks/PageHeaderSearch.vue";

export default defineComponent({
  name: "PageHeader",

  components: {
    PageHeaderSearch,
    PageHeaderTitle,
    PageHeaderLayout,
  },

  computed: {
    isSearchVisible() {
      return !this.$route.params.login;
    },
  },
});
</script>
