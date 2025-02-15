const webpush = require('web-push');

//let vapidKeys = webpush.generateVAPIDKeys();
//console.log(vapidKeys);

// VAPID keys should only be generated only once.

const vapidKeys = {
  publicKey: 'BK0qH443Cl13IWTyo8jc6DCVm27hC1pnF9ltM_AnDsF_1CQepY8dQnfssbOBwC9ryt_LV34yv-bL25AjRUnFO6c',
  privateKey: 'YhgL29VK_Mr3nxc6IjUsbGxx2Xx6pyEWiFtR-wkAfUY'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  "endpoint":"https://fcm.googleapis.com/fcm/send/e8uzOewC5GA:APA91bH9YUoeaRc88MxG_HKUZV5-YJAyXiqdF2m6v4Vj7WpdDiHisyvBq2kFSw7BFSKcNhmGejHyWSt2dywh_X69HJfAaGpHpuMfxhl0QH018NCh36vu3C_uNnSfam_BmFFKj3PNT6Wh",
  "expirationTime":null,
  "keys":{"p256dh":"BK0RZ6Hn5tX25cWf20yY7ZWg9MSQ3AzwBIhVNdSJ4HD-xEHqOg6ljuqkJegVvYqXx7Ry94wdNW4bhOQAXq3EPhQ","auth":"goTJx7KHpMUSnjXnOo3rjg"}};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
