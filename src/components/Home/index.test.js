/* global document it describe expect b:true*/
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

const server = require('../../../server/app');
const request = require('supertest-as-promised');

describe('express serving', () => {
  it('responds to / with the index.html', () => {
    request(server)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => expect(res.request.response.text.indexOf('<div id="root"></div>') > -1));
  });

  it('responds to favicon.icon request', () => {
    request(server)
      .get('/favicon.ico')
      .expect('Content-Type', 'image/x-icon')
      .expect(200);
  });

  it('responds to any route with the index.html', () => {
    request(server)
      .get('/foo/bar')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => expect(res.request.response.text.indexOf('<div id="root"></div>') > -1));
  });
});

describe('react rendering', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
