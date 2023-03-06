/*
 🏆 Challenge: Get and inspect data via HTTP​

 Using the https://jsonplaceholder.typicode.com/users API, get a list of users and print the first user object.

 Create file called getUsers.js and write your operation to fetch the user.
 Run the job using the OpenFn/cli openfn getUsers.js -a http.
 Validate that you receive this expected CLI logs:
 openfn getUsers.js -a http

 Validate that you receive this expected CLI logs: [...]
*/
get('https://jsonplaceholder.typicode.com/users');
fn(state => {
    console.log(state.data[0]);
    return state;
});

/*
Output:
{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
"street": "Kulas Light",
"suite": "Apt. 556",
"city": "Gwenborough",
"zipcode": "92998-3874",
"geo": {
"lat": "-37.3159",
"lng": "81.1496"
}
},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
"name": "Romaguera-Crona",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"
}}
 */