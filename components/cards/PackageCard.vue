<script setup lang="ts">
defineProps<{
  title: string
  oldPrice: number
  price: number
  features: [string, string][]
  theme: 'starter' | 'standard' | 'ecommerce' | 'system'
  hot?: boolean
  description?: string
  topBgColor?: string
  bottomBgColor?: string
}>()
</script>

<template>
  <div
    class="
      relative
      rounded-2xl
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      transition
      hover:-translate-y-1
      hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]
      overflow-hidden
    "
  >
    <!-- UPPER SECTION: TITLE, PRICE, DESCRIPTION -->
    <div
      class="px-6 pt-6 pb-4"
      :style="{
        background: topBgColor || (
          theme === 'starter' ? 'linear-gradient(to bottom right, #FFFCF8, #FFE0B1)' :
          theme === 'standard' ? 'linear-gradient(to bottom right, #EFF6FF, #97E8D0)' :
          theme === 'ecommerce' ? 'linear-gradient(to bottom right, #EEF2FF, #9FB5FF)' :
          'linear-gradient(to bottom right, #F3E8FF, #FDC2FF)'
        )
      }"
    >
      <!-- HOT BADGE -->
      <span
        v-if="hot"
        class="absolute right-4 top-4 rounded-md bg-red-500 px-2 py-1 text-xs font-bold text-white"
      >
        HOT
      </span>

      <!-- TITLE -->
      <h3 class="text-lg font-semibold text-gray-900">
        {{ title }}
      </h3>

      <!-- PRICE -->
      <div class="mt-4">
        <div class="text-sm text-gray-400 line-through">
          เริ่มต้น {{ oldPrice.toLocaleString() }}
        </div>

        <div class="mt-1 flex items-end gap-1">
          <span class="text-3xl font-bold text-gray-900">
            {{ price.toLocaleString() }}
          </span>
          <span class="mb-1 text-sm font-medium text-gray-500">.-</span>
        </div>

        <!-- DESCRIPTION -->
        <p v-if="description" class="mt-2 text-sm text-gray-600">
          {{ description }}
        </p>
      </div>
    </div>

    <!-- LOWER SECTION: FEATURES & CTA -->
    <div
      class="px-6 pb-8"
      :style="{
        backgroundColor: bottomBgColor || '#FFFFFF'
      }"
    >

    <!-- FEATURES -->
    <ul class="mt-6 divide-y divide-[#E2E8F0] text-sm text-gray-700">
      <li
        v-for="([label, value], i) in features"
        :key="i"
        class="flex items-center justify-between py-3"
      >
        <span>{{ label }}</span>
        <span class="font-medium text-blue-600">{{ value }}</span>
      </li>
    </ul>

      <!-- CTA -->
      <div class="mt-6">
        <AppButton
          :color="hot ? 'blue' : 'outline'"
          size="md"
          class="w-full"
        >
          ติดต่อเรา
        </AppButton>
      </div>
    </div>
  </div>
</template>