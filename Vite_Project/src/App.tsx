import './App.css';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyContext } from './MyContext';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

interface AppProps {}

function App({}: AppProps) {
  const [text, setText] = useState<boolean>(false);

  return (
    <>
      <MyContext.Provider value={{ setText }}>
        <BrowserRouter>
          {text && <Alert severity="error">Must enter their details before accessing the page.</Alert>}
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/secondpage" element={<SecondPage />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
