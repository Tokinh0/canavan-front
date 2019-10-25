import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import AppBar from './components/base/app-bar';
import AppContent from './components/app-content';

import './App.scss';

const App = () => (
 <Router>
   <AppBar />
   <AppContent />
 </Router>
);

export default App;
