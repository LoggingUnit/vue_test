<template>
  <UsersListLayout>
    <template #title>
      <UsersListTitle>Top Users</UsersListTitle>
    </template>
    <template #content>
      <p>{{ usersList }}</p>
    </template>
  </UsersListLayout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UsersListLayout from "@/pages/usersList/components/UsersListLayout.vue";
import UsersListTitle from "@/pages/usersList/components/UsersListTitle.vue";

export default {
  name: "TopUsers",

  components: {
    UsersListTitle,
    UsersListLayout,
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

<style scoped></style>
