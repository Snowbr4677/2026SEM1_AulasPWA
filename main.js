if ('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./serviceWorker.js')
        .then(reg => console.log('Service Worker registrado com sucesso', reg))
        .catch(err => console.log( 'Falha ao registrar o Service worker:', err));
    });
} else {
    console.log('Service Workers não são suportados.');
}