<script setup lang="ts">
import { type Recipe } from "../../../types/types";

const { id } = useRoute().params;
const { data, error } = await useFetch<Recipe>(
  `https://dummyjson.com/recipes/${id}`
);

const getImageUrl = (imagePath: string) => {
  return `https://cdn.dummyjson.com/${imagePath}`;
};

if (error.value) {
  throw createError({
    statusCode: error.value?.statusCode,
    statusMessage: error.value?.statusMessage,
  });
}

// SEO Meta Setup
useSeoMeta({
  title: data.value?.name,
  description: "Recipes for you to cook!",
  ogTitle: data.value?.name,
  ogDescription: "Recipes for you to cook!",
  ogImage: data.value?.image,
  ogUrl: `http://localhost:3001/recipes/${data.value?.id}`,
  twitterTitle: data.value?.name,
  twitterDescription: "Recipes for you to cook!",
  twitterImage: data.value?.image,
  twitterCard: "summary",
});
</script>

<template>
  <div class="flex flex-col max-w-screen-lg container py-20">
    <!-- Header -->
    <NuxtImg
      :src="getImageUrl(data?.image)"
      densities="x1"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw"
      class="w-full max-h-[500px] object-cover rounded-md shadow-sm mb-12"
      alt=""
    />
    <!-- Rest of your code -->
  </div>
</template>
