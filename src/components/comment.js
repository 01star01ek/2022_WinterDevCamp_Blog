import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Comment = () => {
    const[comment, setComment] = useState('');
    const {id} = useParams();
    const [commentArray, setArray] = useState([]);
    const[loading, setLoading] = useState(true);



    const getPrint = () => {
        axios.get('http://localhost:3001/comment').then((response) => {
            setArray(() => response.data);
            setLoading(() => false);
        })
    }

    useEffect(() => {
        getPrint();
    }, []);
    

    const onSubmit = () => {
          axios.post('http://localhost:3001/comment', {
            text : comment,
            tag : id
        })
    }
    
      
    return(
        <div className="input-group mb-3" onSubmit={onSubmit}>
          <input className="form-control"
          type="text"
          placeholder="댓글을 달아주세요"
          value={comment} onChange={(event) => {
            setComment(event.target.value)}}/>
          <button className="btn btn-secondary" onClick = {onSubmit}  >게시</button>
          { loading? <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
                </div> 
            : commentArray.length > 0 ? commentArray.map((command) => {
                  <div className='card-body'> 
                  <div className="d-flex justify-content-between">
                      <div>{id == command.tag && command.text}</div>
                  </div>
                  </div>
            }) : <div>오늘 하루는 어떠셨나요?<br></br>글쓰기를 통해 기록으로 남겨보세요</div>}

        
        </div>
    );
}


export default Comment;