<template>
  <section class="px-6 lg:px-32 py-30 bg-white">
    <div
      class="mx-auto max-w-8xl rounded-2xl bg-gradient-to-r from-[#FFF6DA] to-[#D9E1F9] p-8 lg:p-12"
    >
      <div class="grid gap-36 lg:grid-cols-2">
        
        <!-- LEFT -->
        <div>
          <h2 class="mb-8 text-5xl font-bold text-[#1E1F22]">
            ปรึกษาฟรี
          </h2>

          <p class="mb-8 text-2xl font-normal text-[#4B5563]">
            เรายินดีให้คำปรึกษา บริการทำเว็บไซต์และระบบ <br/>
            เพื่อเป็นเครื่องมือในการต่อยอดธุรกิจของคุณ
          </p>

          <!-- BUTTONS -->
          <div class="mb-6 flex flex-wrap gap-4">
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

          <!-- SOCIAL -->
          
          <div class="mt-52 flex flex-col gap-3">
            <p class="text-sm font-normal text-[#4B5563]">หรือติดตามเรา</p>
            <div class="flex items-center gap-4">
              <img src="/images/facebook.png" class="h-9 w-9 scale-120" />
              <img src="/images/instagram.png" class="h-9 w-9 scale-140" />
              <img src="/images/youtube.png" class="h-9 w-9 scale-120" />
              <img src="/images/tiktok.png" class="h-9 w-9 scale-120" />
            </div>
          </div>
        </div>

        <!-- RIGHT FORM -->
        <form class="rounded-xl bg-transparent">
          <h3 class="mb-4 text-2xl font-bold text-[#1E1F22]">
            ให้เราติดต่อหาคุณ
          </h3>

          <div class="space-y-4">
            <p class="text-sm font-normal text-[#4B5563]">ชื่อ - สกุล*</p>
            <input
              type="text"
              placeholder="กรอกชื่อสกุล"
              class="w-full rounded-lg border px-4 py-3 bg-white text-[#90A1B9]"
            />
            <p class="text-sm font-normal text-[#4B5563]">อีเมล*</p>
            <input
              type="email"
              placeholder="กรอกอีเมล"
              class="w-full rounded-lg border px-4 py-3 bg-white text-[#90A1B9]"
            />
            <p class="text-sm font-normal text-[#4B5563]">เบอร์โทรศัพท์*</p>
            <input
              type="tel"
              placeholder="กรอกเบอร์โทรศัพท์"
              class="w-full rounded-lg border px-4 py-3 bg-white text-[#90A1B9]"
            />
          <p class="mt-4 text-xs font-normal text-gray-400">
            เมื่อคลิก “ส่งแบบฟอร์ม” หมายถึงคุณยินยอมให้ TumWebSME จัดการข้อมูลตาม <br/> 
            <span class="underline">นโยบายความเป็นส่วนตัว</span> และรับข่าวสารจากเรา
          </p>
            <button
              type="submit"
              class="mt-4 w-full rounded-full bg-black py-3 text-white"
            >
              ส่งแบบฟอร์ม
            </button>
          </div>
        </form>

      </div>
    </div>
  </section>
</template>