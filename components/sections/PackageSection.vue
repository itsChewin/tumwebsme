<template>
  <section class="px-6 py-24 lg:px-16">
    <div class="mx-auto max-w-6xl">
      
      <!-- SECTION HEADER -->
      <div class="mb-14 text-center">
        <h2 class="mb-4 text-3xl font-bold text-[#1E1F22]">
          แพ็กเกจและบริการ
        </h2>
        <p class="mx-auto max-w-2xl text-gray-600">
          เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ
          เราพร้อมช่วยให้คุณเติบโตบนโลกออนไลน์
        </p>
      </div>

      <!-- PACKAGE GRID -->
      <div class="grid gap-8 md:grid-cols-3">
        <PackageCard
          v-for="pkg in packages"
          :key="pkg.title"
          :title="pkg.title"
          :subtitle="pkg.subtitle"
          :features="pkg.features"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PackageCard from '@/components/cards/PackageCard.vue'

const packages = [
  {
    title: 'Starter',
    subtitle: 'เหมาะสำหรับธุรกิจเริ่มต้น',
    features: [
      'ออกแบบเว็บไซต์ 1 หน้า',
      'รองรับมือถือ',
      'โดเมน + โฮสติ้ง 1 ปี',
      'ดูแลหลังบ้านเบื้องต้น'
    ]
  },
  {
    title: 'Business',
    subtitle: 'เหมาะสำหรับธุรกิจ SME',
    features: [
      'ออกแบบเว็บไซต์หลายหน้า',
      'รองรับ SEO',
      'เชื่อมต่อ Line / Facebook',
      'ดูแลและอัปเดตเว็บไซต์'
    ]
  },
  {
    title: 'Enterprise',
    subtitle: 'สำหรับธุรกิจที่ต้องการระบบเฉพาะ',
    features: [
      'ออกแบบ UI/UX ตามต้องการ',
      'พัฒนาระบบเฉพาะ',
      'รองรับผู้ใช้งานจำนวนมาก',
      'ทีมซัพพอร์ตเฉพาะ'
    ]
  }
]
</script>