import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';


const ListPage = () => {
    const history = useHistory(); 
    const [posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(true);

    const deleteBlog = (e, id) => {
        e.stopPropagation();
        axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
            setPosts(prevPosts => {
                return prevPosts.filter(post => {return post.id !== id;})
            })
        })
    }

    const getPost = () => {
        axios.get('http://localhost:3001/posts').then((response) => {
            setPosts(response.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        getPost();
    }, []);
    
    return (
        <div>
            <div className = "d-flex justify-content-between">
            <h1>Blogs</h1>
            <div>
                <Link to ="/blogs/create" className="btn btn-success" >
                글쓰기
                </Link>
            </div>
            </div>
            {loading? <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
                </div> 
            : posts.length > 0 ? posts.map((post) => {
            return (
                <Card key={post.id} title ={post.title} onClick ={() => history.push(`/blogs/${post.id}`)} >
                    <div><button className = "btn btn-secondary btn-sm" onClick ={(e) => deleteBlog(e, post.id)}>삭제</button></div>
                </Card>
            );
            }) : <div>오늘 하루는 어떠셨나요?<br></br>글쓰기를 통해 기록으로 남겨보세요</div>}
        </div>    
    );
};
export default ListPage;