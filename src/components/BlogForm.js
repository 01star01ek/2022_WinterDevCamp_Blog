import { useState } from "react";
import axios from 'axios';


const BlogForm = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const onSubmit = () => {
      axios.post('http://localhost:3001/posts', {
        title,
        body
      })
    }

    return (
        <div className="container">
            <h1>blog posting</h1>
            <div className="mb-3">
                <form>
                <label className="form-label">Title</label>
                <textarea className="form-control" vlaue={title} onChange = {(event) =>  {setTitle(event.target.value)}}/>
                </form>
            </div>
            <div className="mb-3">
                <form>
                <label className="form-label">Body</label>
                <textarea rows={20} className="form-control" vlaue={body} onChange = {(event) =>  {setBody(event.target.value)}}/>
                </form>
            </div>
            <button className="btn btn-success" onClick={onSubmit}>포스팅</button>
        </div>    
    );
};
export default BlogForm;