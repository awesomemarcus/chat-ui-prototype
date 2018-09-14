import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import 'animate.css';
import './scss/main.scss';
import './scss/chat.scss';
import 'bootstrap/scss/bootstrap.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faSearch, faEllipsisV, faVideo, faCamera, faImage, faGrin, faPlus } from '@fortawesome/free-solid-svg-icons';

import ConversationsList from './conversations/components/ConversationsList';
import Conversation from './conversations/components/Conversation';

library.add(faTrashAlt, faSearch, faEllipsisV, faVideo, faCamera, faImage, faGrin, faPlus);

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
        </nav>
        <div id="chat">
          <ConversationsList />
          <Conversation />
        </div>
      </React.Fragment>
    );
  }
}

const Root = hot(module)(App);

ReactDOM.render(<Root />, document.getElementById('root'));