document.addEventListener("DOMContentLoaded", () => {
  const buyButton = document.getElementById("buyButton");
  const urlParams = new URLSearchParams(window.location.search);
  let base64Scene = urlParams.get("scene");
  let sceneBuyURL = '';

  if (base64Scene) {
    try {
      const decodedScene = atob(base64Scene);
      const params = new URLSearchParams(decodedScene.split('?')[1]);
      const encodedBuyURL = params.get("buyURL");
      if (encodedBuyURL) {
        sceneBuyURL = atob(decodeURIComponent(encodedBuyURL));
      }
    } catch(e){
      console.warn("No se pudo decodificar la buyURL:", e);
      sceneBuyURL = '';
    }
  }

  // Configuramos el botón
  buyButton.style.display = 'inline-block';
  buyButton.onclick = () => {
    if(sceneBuyURL && sceneBuyURL.startsWith('https://')){
      window.open(sceneBuyURL, '_blank');
    } else {
      alert("Producto no disponible");
    }
  };
});
