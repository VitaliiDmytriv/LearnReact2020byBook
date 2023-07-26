import React, { useEffect, useState } from "react";
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import MyModal from "../Components/UI/MyModal/MyModal";
import MyButton from "../Components/UI/button/MyButton";
import { usePosts } from "../hooks/usePost";
import PostService from "../../API/PostService";
import Loader from "../Components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import MyError from "../Components/UI/error/MyError";
import { getPageCount } from "../utils/pages";
import Pagination from "../Components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const searchedAndSordetPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        fetchPosts();
    }, [page]);

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function removePost(post) {
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    function changePage(page) {
        setPage(page);
    }

    return (
        <>
            <div className="App">
                <MyButton onClick={fetchPosts}>Get posts</MyButton>
                <MyButton
                    style={{ marginTop: "30px" }}
                    onClick={() => setModal(true)}
                >
                    Create Post
                </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm createPost={createPost} />
                </MyModal>
                <hr style={{ margin: "15px 0" }} />
                <PostFilter filter={filter} setFilter={setFilter} />
                {isPostLoading ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "50px",
                        }}
                    >
                        <Loader />
                    </div>
                ) : (
                    <PostList
                        removePost={removePost}
                        posts={searchedAndSordetPosts}
                        title="List of Posts"
                    />
                )}
                {postError && <MyError error={postError} />}
                <Pagination
                    totalPages={totalPages}
                    page={page}
                    changePage={changePage}
                />
            </div>
        </>
    );
}

export default Posts;
