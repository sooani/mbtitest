import React, {Component} from 'react';
import { HashRouter, Routes ,Route,} from 'react-router-dom'
import './App.css';
import Mbti from './Mbti'

function App() {
  
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) kakao.init('f6ab6b088a5dbf4cdf6d934c96752962')
  }


  return (
    <div className="App">
      <React.StrictMode>
        <HashRouter>
            <Routes>
              <Route path="/" element={<Mbti/>}/>
            </Routes>
        </HashRouter>
      </React.StrictMode>
 
    </div>
  );
}

export default App;