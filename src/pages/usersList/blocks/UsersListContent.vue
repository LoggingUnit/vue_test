<template>
  <UsersListContentLayout>
    <UsersListItem v-for="user in usersList" :key="user.id" :user="user" />
  </UsersListContentLayout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UsersListContentLayout from "@/pages/usersList/components/UsersListContentLayout.vue";
import UsersListItem from "@/pages/usersList/blocks/UsersListItem.vue";

export default {
  name: "UsersListContent",

  components: {
    UsersListItem,
    UsersListContentLayout,
  },

  methods: {
    ...mapActions(["getUsersList"]),
  },

  computed: {
    ...mapGetters(["usersList"]),
  },

  mounted() {
    this.getUsersList(10);
  },
};
</script>
