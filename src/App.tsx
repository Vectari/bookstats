import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchBar } from './components/SearchBar/SearchBar';
import { BookDetail } from './view/BookDetail/BookDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/detail/:edition_key" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
