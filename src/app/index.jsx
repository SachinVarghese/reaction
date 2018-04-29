import 'babel-polyfill';
import "../styles/main.scss";
import Icon from '../assets/me.jpeg';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';

ReactDOM.render(<Main />, document.getElementById('app'));