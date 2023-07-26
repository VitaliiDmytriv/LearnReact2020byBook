import { forwardRef } from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = forwardRef(({ post, removePost, id }, ref) => {
    const navigate = useNavigate();

    return (
        <div className="post" ref={ref}>
            <div className="post__content">
                <strong>
                    {post.id} {post.title}
                </strong>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton
                    onClick={() => {
                        navigate(`/posts/${post.id}`);
                    }}
                >
                    Open
                </MyButton>
                <MyButton
                    onClick={() => {
                        removePost(post);
                    }}
                >
                    Delete
                </MyButton>
            </div>
        </div>
    );
});

export default PostItem;
