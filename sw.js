self.addEventListener('install', (event) => {
    console.log('Service Worker installé.');
});

self.addEventListener('fetch', (event) => {
    // Permet de valider les critères PWA sans bloquer vos requêtes réseau
});
