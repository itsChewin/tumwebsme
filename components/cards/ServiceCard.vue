<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
  size?: 'sm' | 'lg'
  variant?: 'blue' | 'pink' | 'green' | 'yellow'
  iconScale?: 'normal' | 'large'
}>()

const bgMap = {
  blue: 'bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF]',
  pink: 'bg-gradient-to-br from-[#FFE4E6] to-[#FECACA]',
  green: 'bg-gradient-to-br from-[#DCFCE7] to-[#BBF7D0]',
  yellow: 'bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A]'
}

const sizeMap = {
  sm: 'h-[180px]',
  lg: 'h-[380px] row-span-2'
}

const iconSizeMap = {
  normal: 'h-8 w-8',
  large: 'h-10 w-10'
}
</script>

<template>
  <div
    class="relative rounded-2xl p-6 transition"
    :class="[
      bgMap[variant ?? 'blue'],
      sizeMap[size ?? 'sm']
    ]"
  >
    <!-- ICON -->
    <div
      class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm"
    >
      <img
        :src="icon"
        :alt="title"
        :class="[
          iconSizeMap[iconScale ?? 'normal'],
          'object-contain'
        ]"
      />
    </div>

    <!-- TITLE -->
    <h3 class="mb-2 text-base font-semibold text-[#314158]">
      {{ title }}
    </h3>

    <!-- DESCRIPTION -->
    <p class="text-sm leading-relaxed text-[#314158]/70">
      {{ description }}
    </p>
  </div>
</template>