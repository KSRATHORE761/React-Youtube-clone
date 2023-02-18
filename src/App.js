import React from 'react';
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  // Switch, 
  Routes,
  Route
} from "react-router-dom";

import SearchPage from './SearchPage';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
        <Route path='/video/:videoId'
        element={
          <React.Fragment>
            <div className='app_page'>
              <VideoPlayer></VideoPlayer>
            </div>
          </React.Fragment>
        }>
        </Route>
          <Route path='/search/:searchItem'
          element = {
            <React.Fragment>
              <div className='app_page'>
                <Sidebar/>
               <SearchPage/>
              </div>
            </React.Fragment>
          }
          />
          <Route path='/'
          element = {
            <React.Fragment>
              <div className='app_page'>
                <Sidebar/>
                <RecommendedVideos />
              </div>
            </React.Fragment>
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
