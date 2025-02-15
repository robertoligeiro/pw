/*self.addEventListener('push', () => {
  self.registration.showNotification('Hello world!', options);
});*/
/*
let data = event.data.json();
const image = 'https://cdn.glitch.com/614286c9-b4fc-4303-a6a9-a4cef0601b74%2Flogo.png?v=1605150951230';
const options = {
  body: data.options.body,
  icon: image
}
self.registration.showNotification(
  data.title, 
  options
);
*/

self.addEventListener('push', function(e)
{
 var options = {
  body: 'This notification was generated from a push!',
  icon: 'images/icon.png',
  vibrate: [100, 50, 100],
  data: {
    dateOfArrival: Date.now(),
    primaryKey: '2'
  },
  actions: [
    {action: 'explore', 
      title: 'Go to the site',
      icon: 'images/checkmark.png'},
    {action: 'close', title: 'Close the notification',
      icon: 'images/xmark.png'},
  ]  
};
e.waitUntil(self.registration.showNotification('Hello world!', options));
console.log('Notification received');
});
