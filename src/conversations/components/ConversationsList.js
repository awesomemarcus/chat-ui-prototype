import React from 'react';
import Loadable from 'react-loadable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './conversations-list.scss';

const AsyncConversationsListItem = Loadable({
  loader: () => import('./ConversationsListItem'),
  loading: <p>loading...</p>
})

export default class ConversationsList extends React.Component {
  render() {
    return (
      <div id="conversations" className="left">
        <div className="list-container d-flex flex-column">
          <div className="chat___search bg-light text-white d-flex flex-column">
            <div className="text-dark text-center p-2 d-flex flex-row">
              <h5 className="w-100 m-0">Conversations</h5>
              <a href="" className="text-danger ml-auto icon-sm">
                <FontAwesomeIcon icon="trash-alt"/>
              </a>
            </div>
            <div className="d-flex flex-row px-2 py-1">
              <input type="text" id="chat-search___input" className="mr-2 w-100"/>
              <a href="" id="chat-search___btn" className="icon-sm">
                <FontAwesomeIcon icon="search" />
              </a>
            </div>
          </div>
          <div id="conversations-list">
            <AsyncConversationsListItem />
          </div>
        </div>
      </div>
    );
  }
}