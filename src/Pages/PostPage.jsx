import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../Components/UI/Loader/Loader";

function PostPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, []);

    return (
        <div style={{ marginTop: "1rem" }}>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    {post.id} {post.title}
                </div>
            )}
            {isComLoading ? (
                <Loader />
            ) : (
                <div style={{ marginTop: "15px" }}>
                    <h2>Comments</h2>
                    {comments.map((com) => {
                        return (
                            <div style={{ marginTop: "15px" }} key={com.id}>
                                <h5>{com.email}</h5>
                                <div>{com.body}</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default PostPage;
