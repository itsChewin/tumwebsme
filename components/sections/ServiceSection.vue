<script setup lang="ts">
import ServiceCard from '@/components/cards/ServiceCard.vue'

const services = [
  {
    title: 'Web Domain+',
    description: 'บริการจดโดเมนเว็บไซต์ ดูแลความพร้อมใช้งาน และความปลอดภัย',
    icon: '/images/services/domain.png',
    variant: 'blue',
    size: 'sm',
    iconScale: 'large'
  },
  {
    title: 'Web Analytic+',
    description: 'วิเคราะห์พฤติกรรมผู้ใช้งาน เพื่อนำข้อมูลไปพัฒนาเว็บไซต์',
    icon: '/images/services/analytics.png',
    variant: 'blue',
    size: 'sm',
    iconScale: 'large'
  },
  {
    title: 'Google Analytic+',
    description: 'ติดตั้งและวิเคราะห์ข้อมูลจาก Google Analytics',
    icon: '/images/services/google-analytics.png',
    variant: 'pink',
    size: 'lg' 
  },
  {
    title: 'Integration LINE OA+',
    description: 'เชื่อมต่อ LINE OA, Rich Menu และระบบอัตโนมัติ',
    icon: '/images/services/line-2.png',
    variant: 'green',
    size: 'lg'
  },
  {
    title: 'Cloud + SSL Hosting',
    description: 'โฮสติ้ง Cloud ประสิทธิภาพสูง พร้อม SSL',
    icon: '/images/services/cloud.png',
    variant: 'yellow',
    size: 'sm'
  },
  {
    title: 'Care+ บริการหลังการขาย',
    description: 'ดูแลเว็บไซต์ อัปเดตระบบ และแก้ไขปัญหา',
    icon: '/images/services/support.png',
    variant: 'blue',
    size: 'sm',
    iconScale: 'large'
  },
  {
    title: 'Branding Design+',
    description: 'ออกแบบ CI และ Brand Guideline',
    icon: '/images/services/branding.png',
    variant: 'blue',
    size: 'sm',
    iconScale: 'large'
  }
] as const
</script>

<template>
  <section class="py-20 bg-white">
    <div class="mx-auto max-w-7xl px-6">
      <div
        class="grid grid-cols-3 gap-6"
        style="grid-auto-rows: 180px"
      >
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          v-bind="service"
        />
      </div>
    </div>
  </section>
</template>