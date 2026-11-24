const {test,expect} =require('@playwright/test');

test('GET api request', async({request}) =>
{

    const response  = await request.get('https://jsonplaceholder.typicode.com/users');
        console.log("Status Code:", response.status());

expect(response.status()).toBe(200);

});