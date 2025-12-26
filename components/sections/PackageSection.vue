<script setup lang="ts">
import PackageCard from '~/components/cards/PackageCard.vue'

const packages: { id: string; title: string; oldPrice: number; price: number; description: string; theme: 'starter' | 'standard' | 'ecommerce' | 'system'; features: [string, string][]; hot?: boolean }[] = [
  {
    id: 'starter',
    title: 'Starter',
    oldPrice: 100000,
    price: 89000,
    description: 'แพ็กเกจพื้นฐาน เหมาะสำหรับธุรกิจขนาดเล็ก',
    theme: 'starter',
    features: [
      ['เว็บไซต์', '2 หน้า'],
      ['แก้ไขดีไซน์', '2 รอบ'],
      ['ภาษา', '1 ภาษา'],
      ['ฟรี โดเมน', '12 เดือน'],
      ['ฟรี Premium Hosting', '12 เดือน'],
      ['ฟรี ดูแลหลังการขาย', '12 เดือน'],
      ['ฟรี บทความ SEO', '2 บท'],
      ['ฟรี รายงานการเข้าชมเว็บ', '12 เดือน'],
    ],
  },
  {
    id: 'standard',
    title: 'Standard',
    oldPrice: 100000,
    price: 109000,
    description: 'แพ็กเกจมาตรฐาน เหมาะสำหรับธุรกิจขนาดกลาง',
    theme: 'standard',
    hot: true,
    features: [
      ['เว็บไซต์', '6 หน้า'],
      ['แก้ไขดีไซน์', '3 รอบ'],
      ['ภาษา', '2 ภาษา'],
      ['ฟรี โดเมน', '12 เดือน'],
      ['ฟรี Premium Hosting', '12 เดือน'],
      ['ฟรี ดูแลหลังการขาย', '12 เดือน'],
      ['ฟรี บทความ SEO', '2 เดือน'],
      ['ฟรี รายงานการเข้าชมเว็บ', '12 เดือน'],
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    oldPrice: 100000,
    price: 199000,
    description: 'แพ็กเกจร้านค้าออนไลน์ เหมาะสำหรับธุรกิจที่ต้องการขายสินค้าออนไลน์',
    theme: 'ecommerce',
    features: [
      ['เว็บไซต์', 'ไม่จำกัด'],
      ['แก้ไขดีไซน์', '3 รอบ'],
      ['ภาษา', '2 ภาษา'],
      ['ฟรี โดเมน', '12 เดือน'],
      ['ฟรี Premium Hosting', '12 เดือน'],
      ['ฟรี ดูแลหลังการขาย', '12 เดือน'],
      ['ฟรี บทความ SEO', '2 บท'],
      ['ฟรี รายงานการเข้าชมเว็บ', '12 เดือน'],
    ],
  },
  {
    id: 'system',
    title: 'System',
    oldPrice: 100000,
    price: 249000,
    description: 'แพ็กเกจระบบเฉพาะทาง เหมาะสำหรับธุรกิจที่ต้องการระบบตามความต้องการ',
    theme: 'system',
    features: [
      ['เว็บไซต์', 'ไม่จำกัด'],
      ['แก้ไขดีไซน์', '3 รอบ'],
      ['ภาษา', '2 ภาษา'],
      ['ฟรี โดเมน', '12 เดือน'],
      ['ฟรี Premium Hosting', '12 เดือน'],
      ['ฟรี ดูแลหลังการขาย', '12 เดือน'],
      ['ฟรี บทความ SEO', 'ไม่ใช้ในระบบ'],
      ['ฟรี รายงานการเข้าชมเว็บ', 'ไม่ใช้ในระบบ'],
    ],
  },
]
</script>

<template>
  <section class="bg-[#FFFFFF] py-20">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <PackageCard
          v-for="pkg in packages"
          :key="pkg.id"
          v-bind="pkg"
        />
      </div>
    </div>
  </section>
</template>