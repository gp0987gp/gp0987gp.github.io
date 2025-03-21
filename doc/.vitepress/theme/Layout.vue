<template>
    <Layout>
      <template #nav-bar-content>
        <button class="menu-btn" @click="toggleSidebar" aria-label="Abrir menu">
          ☰ Menu
        </button>
      </template>
      
      <div class="sidebar-overlay" v-if="sidebarOpen" @click="closeSidebar"></div>
      
      <aside class="VPSidebar" :class="{ open: sidebarOpen }">
        <Sidebar />
      </aside>
    </Layout>
  </template>
  
  <script setup>
  import DefaultTheme from 'vitepress/theme';
  import { ref } from 'vue';
  
  const { Layout } = DefaultTheme;
  const sidebarOpen = ref(false);
  
  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
  };
  
  const closeSidebar = () => {
    sidebarOpen.value = false;
  };
  </script>
  
  <style>
  .menu-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 1rem;
  }
  
  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7); /* Mais escuro */
    z-index: 9;
  }
  
  .VPSidebar {
    position: fixed;
    left: -250px;
    top: 0;
    width: 250px;
    height: 100vh;
    background: #1e1e1e;
    transition: left 0.3s ease, transform 0.3s ease;
    z-index: 10;
  }
  
  .VPSidebar.open {
    left: 0;
    transform: translateX(0);
  }
  
  @media (max-width: 768px) {
    .VPSidebar {
      width: 200px;
    }
    .menu-btn {
      font-size: 1.2rem;
    }
  }
  </style>
  