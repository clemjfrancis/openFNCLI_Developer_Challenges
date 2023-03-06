/*
 🏆 Challenge: Reduce, filter, and map

 Using Javascript globals i.e Array.reduce, Array.filter or Array.map, build function that will get posts by user id.

 Create a file called job1.js
 Add the 1st operation which is get all posts
 Add 2nd operation which has a function that filter posts by id
 Use the function from 2nd operation to get all post for user id 1
 Discuss the results with your administrator
 Get all posts
*/
get('posts');

// Group posts by user
fn(state => {
    const posts = state.data;

    // Filter posts by userId
    const filterPostsByUserId = (userId) => {
      return posts.filter(post => post.userId === userId)
    }

    return { ...state, filterPostsByUserId };
});

// Log posts where userId = 1
fn(state => {
    const { filterPostsByUserId } = state;
    const posts = filterPostsByUserId(1);

    return { ...state, posts };
});

each('posts', state => {
    console.log('Posts', state.data);
});

/*
Output:
[{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
},
{
"userId": 1,
"id": 2,
"title": "qui est esse",
"body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
},
{
"userId": 1,
"id": 3,
"title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
"body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
},
...]
 */