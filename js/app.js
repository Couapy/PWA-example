if ('serviceWorker' in navigator) {
    try {
        navigator.serviceWorker.register('./sw.js')
        .then(function () {
            console.log('[serviceWorker] Registration success')
        })
        .catch(function (e) {
            console.log('[serviceWorker] Registration failed', e)
        })
    } catch (e) {
        console.log('[serviceWorker] Registration failed', e)
    }
    
}