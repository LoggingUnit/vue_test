<template>
  <UserDetailsReposLayout>
    <UserDetailsReposItem
      v-for="reposItem in userRepos"
      :repos-item="reposItem"
      :key="reposItem.id"
    />
  </UserDetailsReposLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserDetailsReposLayout from "../components/UserDetailsReposLayout.vue";
import { mapGetters } from "vuex";
import UserDetailsReposItem from "@/pages/userDetails/blocks/UserDetailsReposItem.vue";

export default defineComponent({
  name: "UserDetailsRepos",

  components: {
    UserDetailsReposItem,
    UserDetailsReposLayout,
  },

  computed: {
    ...mapGetters("userDetailsModule", ["userRepos"]),
  },
});
</script>
