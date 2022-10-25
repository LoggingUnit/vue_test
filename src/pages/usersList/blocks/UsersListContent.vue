<template>
  <UsersListContentLayout v-if="!isSearchReturnNoResult">
    <UsersListItem
      v-for="user in usersSearchResultsList"
      :key="user.id"
      :user="user"
    />
  </UsersListContentLayout>
  <UsersListContentNotFound v-else />
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import UsersListContentLayout from "@/pages/usersList/components/UsersListContentLayout.vue";
import UsersListItem from "@/pages/usersList/blocks/UsersListItem.vue";
import UsersListContentNotFound from "@/pages/usersList/blocks/UsersListContentNotFound.vue";

export default {
  name: "UsersListContent",

  components: {
    UsersListContentNotFound,
    UsersListContentLayout,
    UsersListItem,
  },

  methods: {
    ...mapActions(["getUsersList"]),
  },

  computed: {
    ...mapGetters(["usersSearchResultsList", "isSearchReturnNoResult"]),
  },

  mounted() {
    this.getUsersList(10);
  },
};
</script>
