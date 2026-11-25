const {test,expect} =require('@playwright/test');

test('GET api request', async({request}) =>
{

    const response  = await request.get('https://jsonplaceholder.typicode.com/users');
        console.log("Status Code:", response.status());

        const data = await response.json();

        console.log(data);

expect(response.status()).toBe(200);

expect(data[0].name).toBe('Leanne Graham');

expect(data[0].email).toBe('Sincere@april.biz');

});