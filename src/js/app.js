import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Layout from './component/layout';
import Header from './component/Header';
require('../sass/style.sass');



let people = require('./people.js');
let $ = require('jquery');
for(var i=0 ; i<people.length; i++){

  $('body').append('<h1>'+ people[i].name+'</h1>')
  console.log(people[i].name);
}

const app = document.getElementById('app');
ReactDOM.render(<Header />, app);
ReactDOM.render(<Layout />, app);
