<template>
  <InputSearch :value="usersSearch" @input="onSearchInput" />
</template>

<script lang="ts">
import InputSearch from "@/shared/InputSearch/blocks/InputSearch.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PageHeaderSearch",

  components: {
    InputSearch,
  },

  computed: {
    ...mapGetters(["usersSearch"]),
  },

  methods: {
    ...mapActions(["setUsersSearch"]),

    onSearchInput(e) {
      this.setUsersSearch(e);
    },
  },
};
</script>
