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
"endpoint":"https://fcm.googleapis.com/fcm/send/euLjsuF3OXI:APA91bFJNEZR0JsYAcJRIs1xHTkVVAbHGWneWmHxLWcCHeuYxjPq5KS8mccUYbQAsqeu0PBYGLZ8YUT_dwL9R0JyfGUpCm4_FeFnm9IrRaDPsP0skxzhoB9EMHi0V7Eyir6Azy7VTa89",
"expirationTime":null,
"keys":{"p256dh":"BMnpTClrA-gmOTGRq4U5q6qrPMCZOtMrThdUNqIdOj-O2KVGfQnxV_Tvf6RvqAZmLd2nklvKW6I4Oz3HrRggVoE","auth":"MXXJXl82lWne_aoWzlhl2A"}
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
