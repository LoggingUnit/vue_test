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
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import UsersListContentLayout from "@/pages/usersList/components/UsersListContentLayout.vue";
import UsersListItem from "@/pages/usersList/blocks/UsersListItem.vue";
import UsersListContentNotFound from "@/pages/usersList/blocks/UsersListContentNotFound.vue";

export default defineComponent({
  name: "UsersListContent",

  components: {
    UsersListContentNotFound,
    UsersListContentLayout,
    UsersListItem,
  },

  methods: {
    ...mapActions("usersListModule", ["getUsersList"]),
  },

  computed: {
    ...mapGetters("usersListModule", [
      "usersSearchResultsList",
      "isSearchReturnNoResult",
    ]),
  },

  mounted() {
    this.getUsersList(25);
  },
});
</script>
