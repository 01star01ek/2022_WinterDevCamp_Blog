import { useParams } from "react-router-dom";
import axios  from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default function ShowPages({edit}) {
    const {id} = useParams();
    const[loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    const printDAte = (date) => {
        return new Date(date).toLocaleString();
    }

    const show = (id) => {
        axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
        setPost(res.data)
        setLoading(false);
        });
    };

    useEffect (() => {
        show(id)}, [id]
    )

    if(loading) {
        return (<div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span className="sr-only"></span>
        </div>
        </div> );
    }

    return (
        <div>
            <div className ="d-flex flex-row">
            <h1 className="flex-grow-1">{post.title}</h1>
            <div>
                {edit && <Link className ="btn btn-secondary" to ={`/blogs/${id}/edit`}>수정</Link> }
            </div>
            
            </div>
            <small className ="text-muted">
                {printDAte(post.date)}
            </small>
            <hr/>
            <p>{post.body}</p>
        </div>
    );
}

ShowPages.defaultProps = {
    edit : false
}