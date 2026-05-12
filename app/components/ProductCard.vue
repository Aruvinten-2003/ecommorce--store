<script setup lang="ts">
defineProps<{
  product: {
    id: string
    name: string
    category: string
    price: number
    rating: number
    image: string
  }
}>()
</script>

<template>
  <article class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
    <img
      :src="product.image"
      :alt="product.name"
      class="aspect-[4/3] w-full object-cover"
    >

    <div class="space-y-4 p-5">
      <div>
        <p class="text-xs font-bold uppercase tracking-wide text-teal-700">
          {{ product.category }}
        </p>
        <h3 class="mt-1 text-lg font-bold text-slate-950">
          {{ product.name }}
        </h3>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-xl font-black text-slate-950">${{ product.price }}</p>
        <p class="text-sm font-semibold text-emerald-700">{{ product.rating }} rating</p>
      </div>

      <button class="w-full rounded-lg bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-teal-800">
        Add to Cart
      </button>
    </div>
  </article>
</template>
