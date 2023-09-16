import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './styles.css'
import HomeScreen from './components/containers/Home';
import MatchesScreen from './components/containers/Matches';
import MessagesScreen from './components/containers/Messages';
import ProfileScreen from './components/containers/Profile';
import Icon from './components/Icon';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="tabBar">
          <ul className="tabList">
            <li className="tabItem">
              <Link to="/" className="tabLin">
                <Icon name="explore" />
                <span>Explore</span>
              </Link>
            </li>
            <li className="tabItem">
              <Link to="/matches" className="tabLink">
                <Icon name="heart" />
                <span>Matches</span>
              </Link>
            </li>
            <li className="tabItem">
              <Link to="/chat" className="tabLink">
                <Icon name="chat" />
                <span>Chat</span>
              </Link>
            </li>
            <li className="tabItem">
              <Link to="/profile" className="tabLink">
                <Icon name="user" />
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/matches" element={<MatchesScreen />} />
          <Route path="/chat" element={<MessagesScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
