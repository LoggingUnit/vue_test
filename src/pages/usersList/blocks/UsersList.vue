<template>
  <UsersListLayout>
    <template #title>
      <TextXL>Top Users</TextXL>
    </template>
    <template #content>
      <UsersListContent />
    </template>
  </UsersListLayout>
</template>

<script>
import UsersListLayout from "@/pages/usersList/components/UsersListLayout.vue";
import UsersListContent from "@/pages/usersList/blocks/UsersListContent.vue";
import TextXL from "@/shared/components/TextXL.vue";

export default {
  name: "UsersList",

  components: {
    TextXL,
    UsersListContent,
    UsersListLayout,
  },
};
</script>
