<script setup lang="ts">
import ServiceSection from '@/components/sections/ServiceSection.vue'
import PackageSection from '@/components/sections/PackageSection.vue'
import ConsultSection from '@/components/ConsultSection.vue'
</script>

<template>
<section class="bg-white pt-20 py-16">
  <div class="mx-auto max-w-7xl px-6">

     <div class="mb-2 ml-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#314158] mb-3">
            บริการครบวงจร ครอบคลุมทุกความต้องการ
          </h2>
          <p class="text-lg text-[#314158] leading-relaxed">
            บริการเสริมครบวงจร ที่เปิดให้บริการเฉพาะลูกค้าที่ทำเว็บไซต์กับTumWebSME <br/> เพื่อให้คุณได้รับการดูแลอย่างมืออาชีพทุกขั้นตอน
          </p>
        </div>
        <div class="mb-6 mr-6 flex flex-wrap gap-4">
            <AppButton color="green" size="lg">
              <template #icon>
                <img src="/images/line.png" class="h-5 w-5" />
              </template>
              @tumwebsme
            </AppButton>

            <AppButton color="blue" size="lg">
              <template #icon>
                <img src="/images/phone.png" class="h-5 w-5" />
              </template>
              088-983-9386
            </AppButton>
          </div>
      </div>
    <ServiceSection class="mb-12"/>

    <div class="flex items-start justify-between gap-8 ml-8">
      <div class="max-w-2xl text-left">
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#314158] mb-3">
          เลือกแพ็กเกจที่ใช่สำหรับคุณ
        </h2>
        <p class="text-lg text-[#314158] leading-relaxed">
          แพ็กเกจทำเว็บไซต์และระบบครบวงจร รองรับทั้งเว็บไซต์ธุรกิจ เว็บไซต์ขายสินค้า <br/>
          และระบบภายในองค์กร พร้อมบริการดูแลหลังเปิดใช้งาน เพื่อให้คุณจบครบในที่เดียว
        </p>
      </div>
      <button class="mr-7 flex items-center gap-2 px-8 py-2.5 border-2 border-[#314158] text-[#314158] font-medium rounded-full whitespace-nowrap hover:bg-[#314158] hover:text-white transition mt-2">
        ดูรายละเอียดแพ็คเกจ
        <span>→</span>
      </button>
    </div>
      <PackageSection />
    </div>
  </section>
      <ConsultSection />
</template>