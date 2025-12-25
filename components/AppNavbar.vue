<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

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
  <header class="w-full border-b border-gray-100 bg-white">
    <div class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">

      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="TumWebSME"
          class="h-9"
        />
        <span class="text-base font-semibold text-gray-900">
          TumWebSME
        </span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center gap-3">
        <UButton
          color="primary"
          class="rounded-full px-5 text-sm font-medium"
        >
          ปรึกษาฟรี
        </UButton>

        <UButton
          variant="soft"
          color="gray"
          class="rounded-full px-4 text-sm font-medium"
          trailing-icon="i-heroicons-chevron-down"
        >
          TH
        </UButton>
      </div>

      <!-- Mobile Hamburger -->
      <UButton
        icon="i-heroicons-bars-3"
        variant="ghost"
        color="gray"
        class="md:hidden"
        @click="isOpen = true"
      />
    </div>
  </header>

  <!-- MOBILE SLIDEOVER -->
  <USlideover v-model="isOpen">
    <div class="flex h-full flex-col p-6">

      <!-- Mobile Header -->
      <div class="mb-8 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/images/logo.png" class="h-8" />
          <span class="text-base font-semibold">
            TumWebSME
          </span>
        </div>

        <UButton
          icon="i-heroicons-x-mark"
          variant="ghost"
          @click="isOpen = false"
        />
      </div>

      <!-- Mobile Links -->
      <nav class="flex flex-col gap-5">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="text-base font-medium text-gray-700"
          @click="isOpen = false"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Mobile Actions -->
      <div class="mt-auto flex flex-col gap-4 pt-8">
        <UButton
          color="primary"
          class="w-full rounded-full"
        >
          ปรึกษาฟรี
        </UButton>

        <UButton
          variant="soft"
          color="gray"
          class="w-full rounded-full"
          trailing-icon="i-heroicons-chevron-down"
        >
          TH
        </UButton>
      </div>
    </div>
  </USlideover>
</template>