import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const BlogForm = ({edit}) => {
const History = useHistory();

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const onSubmit = () => {
      axios.post('http://localhost:3001/posts', {
        title,
        body,
        date : Date.now()
      }).then(() => {
        History.push('/blogs');
      })
    }

    return (
        <div className="container">
            <div className="mb-3">
                <form>
                <textarea rows="1" placeholder = "제목을 입력해주세요" className="form-control" vlaue={title} onChange = {(event) =>  {setTitle(event.target.value)}}/>
                </form>
            </div>
            <div className="mb-3">
                <form>
                <textarea rows="18" className="form-control" vlaue={body} onChange = {(event) =>  {setBody(event.target.value)}}/>
                </form>
            </div>
            <button className="btn btn-success" onClick={onSubmit}>{edit ? "저장" : "포스팅"}</button>
        </div>    
    );
};
export default BlogForm;

BlogForm.propTypes = {
  edit: Boolean
}

BlogForm.defaultProps = {
  edit : false
}