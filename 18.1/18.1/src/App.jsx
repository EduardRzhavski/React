import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Avatar from './Avatar';
import CreateAvatar from './CreateAvatar';
import EditAvatar from './EditAvatar';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Avatar CRUD App</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Avatar</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create" element={<CreateAvatar />} />
          <Route path="/edit/:id" element={<EditAvatar />} />
          <Route path="/" element={<Avatar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
