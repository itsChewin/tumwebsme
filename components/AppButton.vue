<template>
  <button
    :class="[
      'inline-flex items-center gap-2 rounded-full font-medium transition',
      sizeClass,
      colorClass
    ]"
  >
    <!-- ICON SLOT -->
    <slot name="icon" />

    <!-- DEFAULT SLOT -->
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color?: 'green' | 'blue' | 'outline'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    color: 'blue',
    size: 'md'
  }
)

const sizeClass = computed(() => {
  return {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  }[props.size]
})

const colorClass = computed(() => {
  return {
    green: 'bg-green-500 text-white',
    blue: 'bg-blue-600 text-white',
    outline: 'border border-blue-600 text-blue-600'
  }[props.color]
})
</script>