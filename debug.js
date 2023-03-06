/*
🏆 Challenge: control error messages

Debug what is causing an error on the following line of code and display the error message

// Get post where id is 180
get('posts/180');

Discuss the results with your administrator.
 */
// Get post where id is 180
get('posts/180');

/*
This error is caused by a 404 status code error. There is no post by id 180, hence an AxiosError is thrown.
 */