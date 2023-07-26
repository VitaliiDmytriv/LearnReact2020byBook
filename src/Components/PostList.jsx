import PostItem from "./PostItem";

function PostList({ posts = [], title = "", removePost = (f) => f }) {
    if (posts.length === 0) {
        return <h2 style={{ textAlign: "center" }}>There are now Posts</h2>;
    }
    return (
        <>
            <h1 style={{ textAlign: "center" }}>{title}</h1>

            {posts.map((post, i) => {
                return (
                    <PostItem
                        key={post.id}
                        removePost={removePost}
                        post={post}
                        id={i + 1}
                    />
                );
            })}
        </>
    );
}

export default PostList;
