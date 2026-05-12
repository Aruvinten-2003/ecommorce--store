<template>
  <header class="border-b border-cyan-100/10 bg-slate-950/95">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
      <NuxtLink to="/" class="text-xl font-black text-white">
        AquaMart
      </NuxtLink>

      <div class="hidden items-center gap-8 text-sm font-semibold text-cyan-50/80 md:flex">
        <NuxtLink to="/" class="hover:text-emerald-300">Home</NuxtLink>
        <NuxtLink to="/products" class="hover:text-emerald-300">Shop</NuxtLink>
        <NuxtLink to="/cart" class="hover:text-emerald-300">Cart</NuxtLink>
        <NuxtLink to="/checkout" class="hover:text-emerald-300">Checkout</NuxtLink>
      </div>

      <NuxtLink
        to="/products"
        class="rounded-lg bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
      >
        Browse
      </NuxtLink>
    </nav>
  </header>
</template>
