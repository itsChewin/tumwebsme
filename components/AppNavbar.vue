<script setup lang="ts">
import { computed } from 'vue'

import { UButton } from '#components'

type NavbarVariant = 'transparent' | 'solid'

const props = withDefaults(defineProps<{
  variant?: NavbarVariant
}>(), {
  variant: 'transparent'
})

const navbarClass = computed(() =>
  props.variant === 'solid'
    ? 'bg-white shadow-md border-b border-gray-100'
    : 'bg-transparent'
)

const links = [
  { label: 'หน้าแรก', href: '#' },
  { label: 'แพ็กเกจและบริการ', href: '#services' },
  { label: 'ผลงานและรีวิว', href: '#work' },
  { label: 'เกี่ยวกับเรา', href: '#about' },
  { label: 'บทความ', href: '#blog' },
  { label: 'ติดตามเรา', href: '#contact' }
]
</script>

<template>
  <!-- NAVBAR -->
  <header
    :class="[
      'fixed top-0 z-50 w-full transition-all duration-300',
      navbarClass
    ]"
  >
    <div class="mx-auto flex items-center justify-between px-4 lg:px-12 h-22">

      <!-- Logo -->
      <a href="#" class="flex items-center gap-2">
        <img src="/images/logo.png" alt="TumWebSME" class="h-11 w-auto" />
        <span class="text-xl font-semibold text-[#424242]">
          TumWebSME
        </span>
      </a>

      <!-- Desktop Navigation & Actions -->
      <div class="flex-1 flex items-center justify-end gap-10">
        <!-- Desktop Navigation -->
        <nav class="flex items-center gap-10">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            class="text-sm font-medium text-[#314158] hover:text-[#1537AA] transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Desktop Actions -->
        <div class="flex items-center gap-4">
          <!-- CTA -->
          <UButton
            class="rounded-full bg-[#1537AA] px-8 py-3 text-base font-medium text-white hover:bg-[#102d8f]"
          >
            ปรึกษาฟรี
          </UButton>

          <!-- Language -->
          <UButton
            variant="soft"
            class="rounded-full bg-[#E8EDFC] px-8 py-3 text-base font-medium text-[#1537AA] hover:bg-[#d3e0fa]"
            trailing-icon="i-heroicons-chevron-down"
          >
            TH
          </UButton>
        </div>
      </div>
    </div>
  </header>
</template>