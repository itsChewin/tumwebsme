<template>
  <footer class="bg-[#1E1F22] text-white">
    <!-- MAIN FOOTER AREA -->
    <div
      class="flex-col px-6 py-10 lg:px-16 lg:py-26"
    >
      <!-- TOP CONTENT -->
      <div class="grid grid-cols-12 gap-16 items-start md:grid-cols-[8fr_1fr_2fr]">
        <!-- LOGO + BRAND -->
        <div class="ml-15">
          <img
            src="/images/logo.png"
            alt="TumWebSME"
            class="mb-6 h-40 w-auto"
          />
          <h2 class="font-logo text-5xl font-bold">TumWebSME</h2>
        </div>

       
        <!-- SITEMAP -->
        <div>
          <h3 class="mb-6 text-3xl font-semibold">Sitemap</h3>
          <ul class="space-y-3 text-white/80 leading-relaxed">
            <li>หน้าแรก</li>
            <li>แพ็กเกจและบริการ</li>
            <li>ผลงานและรีวิว</li>
            <li>เกี่ยวกับเรา</li>
            <li>บทความ</li>
            <li>ติดตามเรา</li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div>
          <h3 class="mb-6 text-3xl font-semibold">Contact</h3>
          <div class="space-y-2 text-white/80 leading-normal">
            <p>บริษัท ซูเปอร์เดฟ จำกัด <br />
              89 รามคำแหง82 ถนนรามคำแหง <br /> 
              แขวงหัวหมาก เขตบางกะปิ 10240 กทม.
            </p>
            <p>โทร: 088-983-9386, 099-856-3198 <br />
            Line: @tumwebsme <br />
            อีเมล: tw-sme@superdev.tech
            </p>
          </div>
          <!-- SOCIAL ICONS -->
            <div class="mt-6 flex gap-4">
                <img src="/images/facebook.png" class="h-9 w-9 object-contain" alt="Facebook" />
                <img src="/images/instagram.png" class="h-9 w-9 object-contain scale-120" alt="Instagram" />
                <img src="/images/youtube.png" class="h-9 w-9 object-contain" alt="YouTube" />
                <img src="/images/tiktok.png" class="h-9 w-9 object-contain" alt="TikTok" />
            </div>
        </div>
      </div>
      </div>
   

    <!-- BOTTOM BAR (Full Width) -->
    <div class="border-t border-white/10">
      <div class="flex flex-col gap-4 px-6 py-8 text-md text-white/60 lg:px-16 md:flex-row md:items-center md:justify-between">
          <p class="ml-15">
            Copyright © 2026 TumWebSME.com
            <span class="underline">นโยบายความเป็นส่วนตัว</span>
          </p>

          <div class="mr-15 flex items-center gap-4">
            <span>Operated by Superdev Co., Ltd :</span>
            <div
                class="flex items-center gap-2 rounded-full bg-[#3F3F46] px-6 py-1.5"
            >
                <img src="/images/superdev-academy.png" class="h-8" />
            </div>

            <div
                class="flex items-center gap-2 rounded-full bg-[#3F3F46] px-6 py-1.5"
            >
                <img src="/images/superdev.png" class="h-8" />
            </div>
          </div>
        </div>
      </div>
  </footer>
</template>