import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        // console.log("sortedPosts worked");
        if (sort)
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        return posts;
    }, [posts, sort]);

    return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const searchedAndSordetPosts = useMemo(() => {
        // console.log("searchedAndSordetPosts worked");
        return sortedPosts.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, sortedPosts]);

    return searchedAndSordetPosts;
};
