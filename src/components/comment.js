import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const Comment = () => {
    const history = useHistory(); 
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
    }, [comment]);
    

    const onSubmit = () => {
        if(comment != ' '){          
            axios.post('http://localhost:3001/comment', {
            text : comment,
            tag : id
        }).then((res) => {history.go(0);})
    }
    }
    
      
    return(
        <>
          { loading? <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
                </div> :""
         }        
            
            <div className="input-group mb-3">
            <input className="form-control"
            type="text"
            placeholder="댓글을 달아주세요"
            value={comment} onChange={(event) => {
              setComment(event.target.value);}}/>
            <button className="btn btn-secondary" onClick = {onSubmit}  >게시</button>
            </div>
            {commentArray.length > 0 ? commentArray.map((command) => {
                  return (<div className='mb-3'> 
                      <div className="">{id == command.tag && command.text}</div>
                  </div>);
            }) : <div>오늘 하루는 어떠셨나요?<br></br>글쓰기를 통해 기록으로 남겨보세요</div>}

        
    </>
    );
}


export default Comment;