import PostMessage from  


 export const getPosts = (req, res) => {
    const post = req.body;

    const newPost = new postMessage(post)
}

export const createPost = (req, res) => {
        req.send('Post Creation');
}