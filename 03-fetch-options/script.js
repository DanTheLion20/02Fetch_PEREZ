function createPost(title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify({
                title,
                body,
            }),

            headers: {
                "Content-Type": "application/json",
                token: "abc123", //Fake token for demo purposes
            },
        })
        .then((res) => res.json())
        .then((data) => console.log(data)) //return ng promise
}

createPost({
    title: "My Post",
    body: "This is my Post"
});