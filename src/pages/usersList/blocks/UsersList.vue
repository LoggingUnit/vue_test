<template>
  <UsersListLayout>
    <template #title>
      <p>title</p>
    </template>
    <template #content>
      <p>{{ usersList }}</p>
    </template>
  </UsersListLayout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UsersListLayout from "@/pages/usersList/components/UsersListLayout.vue";

export default {
  name: "TopUsers",

  components: {
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
