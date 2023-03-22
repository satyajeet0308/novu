import { BulksmsSmsProvider } from './bulkSms.provider';

test('should trigger bulkSms library correctly', async () => {
  /*
   * Demo of how bulksms works
   * Your authentication key
   */
  const BASE_URL = 'http://login.bulksmsoffers.com/api/sendhttp.php?';

  const authKey = 'YourAuthKey';

  //Multiple mobiles numbers separated by comma
  const mobileNumber = 'mobilenumber';

  //Sender ID,While using route4 sender id should be 6 characters long.
  const sender = 'ABCXYZ';

  //Your message to send, Add URL encoding here.
  const message = 'Test message';

  //Define route
  const route = 'default';

  const url =
    BASE_URL +
    'authkey=' +
    authKey +
    '&mobiles=' +
    mobileNumber +
    '&message=' +
    message +
    '&sender=' +
    sender +
    '&route=' +
    route;

  const res = fetch(url.toString());

  const resAsTxt = '' + res + '';

  console.log(resAsTxt);
});
