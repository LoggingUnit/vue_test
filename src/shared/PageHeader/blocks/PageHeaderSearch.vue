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
    ...mapGetters("usersListModule", ["usersSearch"]),
  },

  methods: {
    ...mapActions("usersListModule", ["setUsersSearch"]),

    onSearchInput(e) {
      this.setUsersSearch(e);
    },
  },
};
</script>
