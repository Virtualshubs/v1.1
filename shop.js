document.addEventListener("DOMContentLoaded", () => {
  const buyButton = document.getElementById("buyButton");
  buyButton.style.display = "inline-block"; // siempre visible

  const urlParams = new URLSearchParams(window.location.search);
  const sceneParam = urlParams.get("scene");
  let sceneBuyURL = '';

  if(sceneParam){
    try {

      const decodedScene = atob(decodeURIComponent(sceneParam));

      const sceneURL = new URL(decodedScene);
      const buyParam = sceneURL.searchParams.get("buyURL");

      if(buyParam){
        sceneBuyURL = atob(decodeURIComponent(buyParam));
      }
    } catch(e){
      console.warn("No se pudo decodificar buyURL desde scene:", e);
    }
  }

  buyButton.onclick = () => {
    if(sceneBuyURL && sceneBuyURL.startsWith("https://")){
      window.open(sceneBuyURL, "_blank");
    } else {
      alert("Producto no disponible");
    }
  };
});
