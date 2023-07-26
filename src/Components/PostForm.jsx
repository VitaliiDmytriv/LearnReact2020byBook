import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

function PostForm({ createPost }) {
    const [post, setPost] = useState({
        title: "",
        body: "",
    });

    function addNewPost(e) {
        e.preventDefault();
        const newPost = { ...post, id: Date.now() };
        createPost(newPost);
        setPost({
            title: "",
            body: "",
        });
    }

    return (
        <form action="">
            <MyInput
                value={post.title}
                type="text"
                placeholder="post name"
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                value={post.body}
                type="text"
                placeholder="post description"
                onChange={(e) => setPost({ ...post, body: e.target.value })}
            />
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
    );
}

export default PostForm;
