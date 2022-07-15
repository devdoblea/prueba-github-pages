import { ref, computed } from 'vue';

export const collapsed = ref(true);
export const toggleSideBar = () => {collapsed.value = !collapsed.value; /*console.log(collapsed.value);*/};

export const SIDEBAR_WIDTH = 30 // mantener este tamaño para que el boton de menu no rompa la distribucion de la barra de menu
export const SIDEBAR_WIDTH_COLLAPSED = 30
export const sidebarWidth = computed (
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)