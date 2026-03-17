document.addEventListener("DOMContentLoaded", () => {
  const buyButton = document.getElementById("buyButton");
  const urlParams = new URLSearchParams(window.location.search);
  let sceneBuyURL = urlParams.get("buyURL");

  if(sceneBuyURL){
    try {
      sceneBuyURL = atob(decodeURIComponent(sceneBuyURL));
    } catch(e){
      console.warn("No se pudo decodificar buyURL:", e);
      sceneBuyURL = '';
    }
  }

  if(sceneBuyURL && sceneBuyURL.startsWith('https://')){
    buyButton.style.display = 'inline-block';
    buyButton.onclick = () => window.open(sceneBuyURL, '_blank');
  } else {
    buyButton.style.display = 'inline-block';
    buyButton.onclick = () => alert("Producto no disponible");
  }
});
