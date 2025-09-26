<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">
        <p>Copyright © 2025-present AKTIN e.V.</p>
        <p>Documentation is licensed under CC-BY-4.0. Logos and other branding materials are excluded from this license</p>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
  color: #666;
  border-top: 1px solid #ddd;
}
</style>
