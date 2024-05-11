import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Blog } from './views/Blog';
import { Header } from './components/Header';
import { Post } from './views/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='post/:id' element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
