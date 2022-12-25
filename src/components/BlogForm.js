import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import propTypes from 'prop-types';

const BlogForm = ({ edit }) => {
  const history = useHistory();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [originalTitle, setOriginalTitle] = useState('');
  const [body, setBody] = useState('');
  const [originalBody, setOriginalBody] = useState('');


  useEffect(() => {
    if (edit) {
      axios.get(`http://localhost:3001/posts/${id}`).then(res => {
        setTitle(res.data.title);
        setOriginalTitle(res.data.title);
        setBody(res.data.body);
        setOriginalBody(res.data.body);
  
      })
    }
  }, [id, edit]);

  const onSubmit = () => {
   
      if (edit) {
        axios.patch(`http://localhost:3001/posts/${id}`, {
          title,
          body,
        }).then(res => {
          history.push(`/blogs/${id}`)
        })
      } else {
        axios.post('http://localhost:3001/posts', {
          title,
          body,
          createdAt: Date.now()
        }).then(() =>  {
          history.push(`/blogs`);
        }
          )
      }
  };


  return (
    <div>
      <div className="mb-3">
        <input placeholder='제목을 입력해주세요'
          className={`form-control`}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <textarea placeholder='내용을 입력해주세요'
          className={`form-control`}
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
          rows="18"
        />
      </div>

      <button 
        className="btn btn-success"
        onClick={onSubmit}
      >
        {edit ? '저장' : '포스팅' }
      </button>
    </div>
  );
};

BlogForm.propTypes = {
  edit: propTypes.bool
}

BlogForm.defaultProps = {
  edit: false
}

export default BlogForm;