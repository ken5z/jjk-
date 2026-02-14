self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("fetch", () => {});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
   
  }
}

    

