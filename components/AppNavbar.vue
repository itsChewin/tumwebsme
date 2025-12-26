<script setup lang="ts">
import { ref, computed } from 'vue'

import { UButton, USlideover } from '#components'

type NavbarVariant = 'transparent' | 'solid'

const props = withDefaults(defineProps<{
  variant?: NavbarVariant
}>(), {
  variant: 'transparent'
})

const isOpen = ref(false)

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
    <div class="mx-auto flex h-22 items-center justify-between px-4 lg:px-6">

      <!-- Logo -->
      <a href="#" class="flex items-center gap-2">
        <img src="/images/logo.png" alt="TumWebSME" class="h-11 w-auto" />
        <span class="text-xl font-semibold text-[#424242]">
          TumWebSME
        </span>
      </a>

      <!-- Desktop Navigation & Actions -->
      <div class="hidden md:flex items-center gap-10 ml-auto">
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
          class="rounded-full bg-[#1537AA] px-6 py-3 text-sm font-medium text-white hover:bg-[#102d8f]"
        >
          ปรึกษาฟรี
        </UButton>

        <!-- Language -->
        <UButton
          variant="soft"
          class="rounded-full bg-[#E8EDFC] px-5 py-3 text-sm font-medium text-[#1537AA] hover:bg-[#d3e0fa]"
          trailing-icon="i-heroicons-chevron-down"
        >
          TH
        </UButton>
      </div>
    </div>
      <UButton
        icon="i-heroicons-bars-3"
        variant="ghost"
        class="md:hidden text-[#314158]"
        aria-label="Open menu"
        @click="isOpen = true"
      />
    </div>
  </header>

  <!-- MOBILE USlideover -->
  <USlideover v-if="isOpen" v-model="isOpen">
    <div class="flex h-full flex-col p-6">

      <!-- Mobile Header -->
      <div class="mb-8 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/images/logo.png" alt="TumWebSME" class="h-8 w-auto" />
          <span class="text-base font-semibold text-[#314158]">
            TumWebSME
          </span>
        </div>

        <UButton
          icon="i-heroicons-x-mark"
          variant="ghost"
          aria-label="Close menu"
          @click="isOpen = false"
        />
      </div>

      <!-- Mobile Links -->
      <nav class="flex flex-col gap-5">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="text-base font-medium text-[#314158] hover:text-[#1537AA]"
          @click="isOpen = false"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Mobile Actions -->
      <div class="mt-auto flex flex-col gap-4 pt-8">
        <UButton
          class="w-full rounded-full bg-[#1537AA] py-3 text-white"
        >
          ปรึกษาฟรี
        </UButton>

        <UButton
          variant="soft"
          class="w-full rounded-full py-3 text-[#1537AA]"
          trailing-icon="i-heroicons-chevron-down"
        >
          TH
        </UButton>
      </div>
    </div>
  </USlideover>
</template>