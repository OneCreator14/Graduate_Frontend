
<script setup>
import LayoutHeaderC from '@/views/Committee/layout/header.vue'
import LayoutSidebarC from '@/views/Committee/layout/sidebar.vue'

import LayoutHeaderF from '@/views/Federation/layout/header.vue'
import LayoutSidebarF from '@/views/Federation/layout/sidebar.vue'

function ready() {

  if (window.location.href.includes('Committee')) {
    document.getElementById('FederationHeader').style.display = 'none'
    document.getElementById('FederationSidebar').style.display = 'none'
  } else {
    document.getElementById('CommitteeHeader').style.display = 'none'
    document.getElementById('CommitteeSidebar').style.display = 'none'
  }
}

document.addEventListener('DOMContentLoaded', ready)
</script>

<template>
  <div>
    <LayoutHeaderC id="CommitteeHeader" />
    <LayoutHeaderF id="FederationHeader" />
    <LayoutSidebarC id="CommitteeSidebar" />
    <LayoutSidebarF id="FederationSidebar" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/light-styles.scss';

.content {
  max-width: 1650px;
  margin-left: 250px;
}
</style>