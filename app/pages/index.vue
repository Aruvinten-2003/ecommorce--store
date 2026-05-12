<script setup lang="ts">
const products = [
  {
    id: '1',
    name: 'Ocean Breeze Hoodie',
    category: 'Fashion',
    price: 89,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: '2',
    name: 'Mint Wireless Speaker',
    category: 'Electronics',
    price: 129,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: '3',
    name: 'Teal Everyday Backpack',
    category: 'Accessories',
    price: 74,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80'
  }
]
</script>

<template>
  <main class="min-h-screen bg-slate-950">
    <SiteHeader />

    <section class="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-12 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:px-8">
      <div class="space-y-7">
        <h1 class="max-w-2xl text-5xl font-bold leading-tight text-white md:text-6xl">
          Shop smarter. Live fresher.
        </h1>
        <p class="max-w-xl text-lg leading-8 text-cyan-50/75">
          Discover everyday products with a crisp blue-green shopping experience built for quick browsing and easy checkout.
        </p>

        <div class="flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            to="/products"
            class="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
          >
            Shop Now
          </NuxtLink>
          <NuxtLink
            to="/cart"
            class="inline-flex items-center justify-center rounded-lg border border-cyan-200/30 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-200/70"
          >
            View Cart
          </NuxtLink>
        </div>
      </div>

      <div class="rounded-2xl border border-cyan-100/10 bg-cyan-50 p-4 shadow-2xl shadow-cyan-950/40">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80"
          alt="Shopping bags and products"
          class="aspect-[4/3] w-full rounded-xl object-cover"
        >
      </div>
    </section>

    <section class="bg-white px-6 py-14 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 class="text-3xl font-bold text-slate-950">Featured Products</h2>
            <p class="mt-2 text-slate-600">Fresh picks for your new storefront.</p>
          </div>
          <NuxtLink to="/products" class="text-sm font-bold text-teal-700 hover:text-teal-900">
            View all
          </NuxtLink>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
  </main>
</template>
