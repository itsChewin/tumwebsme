<template>
  <div
    class="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8"
  >
    <!-- TITLE -->
    <h3 class="mb-2 text-xl font-semibold text-[#1E1F22]">
      {{ title }}
    </h3>

    <!-- PRICE / SUBTITLE -->
    <p class="mb-6 text-sm text-gray-500">
      {{ subtitle }}
    </p>

    <!-- FEATURES -->
    <ul class="mb-8 space-y-3 text-sm text-gray-700">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-start gap-2"
      >
        <span class="mt-1 h-1.5 w-1.5 rounded-full bg-[#1537AA]" />
        <span>{{ feature }}</span>
      </li>
    </ul>

    <!-- CTA -->
    <div class="mt-auto">
      <AppButton color="blue" size="md" class="w-full">
        เลือกแพ็กเกจ
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  features: string[]
}>()
</script>