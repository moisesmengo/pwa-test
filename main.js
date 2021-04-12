if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(function (registration) {
      console.log('Service Work ok', registration.scope)
    }).catch(function (err) {
      console.log('Error service worker')
    })
}