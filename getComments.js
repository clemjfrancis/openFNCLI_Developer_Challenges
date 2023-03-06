/*
🏆 Challenge: extract names & emails

Using https://jsonplaceholder.typicode.com/posts/1/comments API fetch comments for post with id 1 and extract name and email from each comment in that post

Get post all comments for post id 1
Extract name and email from comments
Log the extracted data from comments
Discuss the results with your administrator.
 */
// Get all comments
get("posts/1/comments");

//
fn((state) => {
    const comments = state.data;
    console.log(comments.filter(comment => comment.postId === 1).map(comment => {
        return {
            name: comment.name,
            email: comment.email
        }
    }))
});

/*
 Output:
 [
{
"name": "id labore ex et quam laborum",
"email": "Eliseo@gardner.biz"
},
{
"name": "quo vero reiciendis velit similique earum",
"email": "Jayne_Kuhic@sydney.com"
},
{
"name": "odio adipisci rerum aut animi",
"email": "Nikita@garfield.biz"
},
{
"name": "alias odio sit",
"email": "Lew@alysha.tv"
},
{
"name": "vero eaque aliquid doloribus et culpa",
"email": "Hayden@althea.biz"
}
]
*/
