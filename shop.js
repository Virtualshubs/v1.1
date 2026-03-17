document.addEventListener("DOMContentLoaded", () => {
  const buyButton = document.getElementById("buyButton");
  buyButton.style.display = "inline-block"; // siempre visible

  const urlParams = new URLSearchParams(window.location.search);
  const sceneParam = urlParams.get("scene");
  let sceneBuyURL = '';

  if(sceneParam){
    try {
      // 1️⃣ Decodificamos scene
      const decodedScene = atob(decodeURIComponent(sceneParam));

      // 2️⃣ Extraemos buyURL de la escena interna
      const sceneURL = new URL(decodedScene);
      const buyParam = sceneURL.searchParams.get("buyURL");

      if(buyParam){
        sceneBuyURL = decodeURIComponent(buyParam); // <-- solo decodeURIComponent
      }
    } catch(e){
      console.warn("No se pudo decodificar buyURL desde scene:", e);
    }
  }

  // 3️⃣ Configuramos acción del botón
  buyButton.onclick = () => {
    if(sceneBuyURL && sceneBuyURL.startsWith("https://")){
      window.open(sceneBuyURL, "_blank");
    } else {
      alert("Producto no disponible");
    }
  };
});
