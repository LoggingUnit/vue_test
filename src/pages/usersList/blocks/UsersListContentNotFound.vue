<template>
  <UsersListContentNotFoundLayout>
    <TextM>Users not found</TextM>
  </UsersListContentNotFoundLayout>
</template>

<script lang="ts">
import UsersListContentNotFoundLayout from "@/pages/usersList/components/UsersListContentNotFoundLayout.vue";
import TextM from "@/shared/components/TextM.vue";

export default {
  name: "UsersListContentNotFound",

  components: {
    TextM,
    UsersListContentNotFoundLayout,
  },
};
</script>
