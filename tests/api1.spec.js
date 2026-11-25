const {test,expect} = require ('@playwright/test');


test('get api request', async({request}) =>
{
 const responce = await request.get('https://jsonplaceholder.typicode.com/users/');

 console.log('status code',responce.status());

 const data = await responce.json();

 console.log(data);

expect(responce.status()).toBe(200);


});
