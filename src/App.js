import { useState } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const[title, setTitle] = useState('');
  const[body, setBody] = useState('');
  const onSubmit = () => {
    axios.post('http://localhost:3001/posts', {
      title,
      body
    })
  }
  return (
    <Router>
      <div>
        <Link to ="/">Home</Link>
        <Link to = "/blogs">Blogs</Link>
      </div>
      <Switch>
        <Route path ="/" exact>
          Home page
        </Route>
        <Route path ="/blogs">
          <div className="container">
            <div className="mb-3">
            <label>
              <label className="form-label">Title</label>
              <textarea className="form-control" vlaue={title} onChange = {(event) =>  {setTitle(event.target.value)}}/>
            </label>
            </div>
            <div className="mb-3">
            <label>
              <label className="form-label">Body</label>
              <textarea rows={20} className="form-control" vlaue={body} onChange = {(event) =>  {setBody(event.target.value)}}/>
            </label>
            </div>
            <button className="btn btn-outline-danger" onClick={onSubmit}>포스팅</button>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
