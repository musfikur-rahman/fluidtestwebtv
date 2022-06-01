window.addEventListener('load', () => {
    registerSW();
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('sw_cached_site.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
