// Get all posts
get("posts");

//
// Posts by user
fn((state) => {
    const posts = state.data;

    // Group posts by userId
    const groupPostsByUserId = posts.reduce((acc, post) => {
        const existingValue = acc[post.userId] || [];
        return { ...acc, [post.userId]: [...existingValue, post] };
    }, {});

    // console.log(groupPostsByUserId);
    return { ...state, groupPostsByUserId };
});

// Log posts where userId = 1
fn((state) => {
    const { groupPostsByUserId } = state;
    console.log("Post with userId 1", groupPostsByUserId[1]);
    return state;
});