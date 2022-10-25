<script setup lang="ts">
import { RouterView } from "vue-router";
import PageLayout from "@/shared/components/PageLayout.vue";
import PageHeader from "@/shared/PageHeader/blocks/PageHeader.vue";
import PageFooter from "@/shared/PageFooter/blocks/PageFooter.vue";
</script>

<template>
  <PageLayout>
    <template #header>
      <PageHeader />
    </template>
    <template #main>
      <RouterView />
    </template>
    <template #footer>
      <PageFooter />
    </template>
  </PageLayout>
</template>
