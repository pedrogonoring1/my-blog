import { Link } from "react-router-dom";
import { PostListContainer } from "../styles/PostListContainer";
import { PostItem } from "./PostItem";

export const PostList = () => {
    
    const posts = [
        { Id: 123, Title: 'Unveiling the Essence of Software Architecture: A Comprehensive Guide', Description: 'In the ever-evolving landscape of technology, software architecture serves as the backbone, shaping the way we build and design digital solutions.'},
        { Id: 234, Title: 'Arquitetura Back-End', Description: 'Get ready to embark on a transformative voyage through the realm of software architecture. The possibilities are limitless, and the future is ours to architect!'}]
    
    return (
        <PostListContainer>
            <div className="body-list-posts">
                
                <h2>Recent Post</h2>
                {posts.map(m => <PostItem post={m} />)}

                <label><Link to="/"> See All</Link></label>
            </div>
            
        </PostListContainer>
    );
}
