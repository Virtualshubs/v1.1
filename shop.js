document.addEventListener('DOMContentLoaded', () => {
  const buyButton = document.getElementById('buyButton'); 
  if(!buyButton) return;

  const urlParams = new URLSearchParams(window.location.search);
  const base64Scene = urlParams.get('scene') || '';

  let sceneBuyURL = '';
  if(base64Scene){
    try {
      const decodedScene = atob(decodeURIComponent(base64Scene));
      const params = new URLSearchParams(decodedScene.split('?')[1]);
      sceneBuyURL = params.get('buyURL') ? atob(params.get('buyURL')) : '';
    } catch(e){
      console.error('Error decodificando buyURL:', e);
    }
  }

  if(sceneBuyURL && sceneBuyURL.startsWith('https://')){
    buyButton.style.display = 'inline-block';
    buyButton.addEventListener('click', () => window.open(sceneBuyURL, '_blank'));
  } else {
    buyButton.style.display = 'none';
    buyButton.addEventListener('click', () => alert('Producto no disponible'));
  }
});
