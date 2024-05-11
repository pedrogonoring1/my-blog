import { Link } from "react-router-dom";

export const PostItem = ({ post }) => (
    <>
        <h3><Link to={`post/${post.Id}`}>{post.Title}</Link> </h3>
        <p>{post.Description}</p>
    </>
);