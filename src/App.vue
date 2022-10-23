<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import PageLayout from "@/shared/components/PageLayout.vue";
import Header from "@/shared/blocks/Header.vue";
import Footer from "@/shared/blocks/Footer.vue";
</script>

<template>
  <!--  <header>-->
  <!--    <img-->
  <!--      alt="Vue logo"-->
  <!--      class="logo"-->
  <!--      src="@/assets/logo.svg"-->
  <!--      width="125"-->
  <!--      height="125"-->
  <!--    />-->

  <!--    <div class="wrapper">-->
  <!--      <HelloWorld msg="You did it!" />-->

  <!--      <nav>-->
  <!--        <RouterLink to="/">Home</RouterLink>-->
  <!--        <RouterLink to="/about">About</RouterLink>-->
  <!--      </nav>-->
  <!--    </div>-->
  <!--  </header>-->
  <PageLayout>
    <template #header>
      <Header />
    </template>
    <template #main>
      <RouterView />
    </template>
    <template #footer>
      <Footer />
    </template>
  </PageLayout>
</template>
