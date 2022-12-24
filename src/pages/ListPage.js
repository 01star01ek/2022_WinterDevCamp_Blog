import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';


const ListPage = () => {
    const history = useHistory(); 
    const [posts, setPosts] = useState([]);

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
            {posts.map((post) => {
                return (
                    <Card key={post.id} title ={post.title} onClick ={() => history.push('/blogs/edit')} >
                        <div><button className = "btn btn-secondary btn-sm" onClick ={(e) => deleteBlogs(e, post.id)}>삭제</button></div>
                    </Card>
                );
            })}
        </div>    
    );
};
export default ListPage;