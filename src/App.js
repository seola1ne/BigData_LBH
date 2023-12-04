import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Analysis from './Analysis';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/analysis" element={<Analysis />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
