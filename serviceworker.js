self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("fetch", () => {});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
   function unlock() {
  const pass = document.getElementById("pwd").value;
  if (pass === "jjk123") {
    document.getElementById("lock").style.display = "none";
  }
}

    
