self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
s
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
   
  
}

    



