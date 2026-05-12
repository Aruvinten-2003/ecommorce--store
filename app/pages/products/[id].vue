<template>
  <main class="min-h-screen bg-white">
    <SiteHeader />

    <section class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <NuxtLink to="/products" class="text-sm font-bold text-teal-700 hover:text-teal-900">
        Back to products
      </NuxtLink>
      <h1 class="mt-6 text-4xl font-bold text-slate-950">Product Details</h1>
      <p class="mt-3 max-w-2xl text-slate-600">
        This page will show one product from MongoDB using the product id in the URL.
      </p>
    </section>
  </main>
</template>
