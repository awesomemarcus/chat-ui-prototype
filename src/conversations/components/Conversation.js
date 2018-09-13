import React from 'react';
import './conversation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ConversationBody from './ConversationBody';
import ConversationHeader from './ConversationHeader';

export default class Conversation extends React.Component {
  render() {
    return (
      <div className="right" id="conversation">
        <ConversationHeader />
        <ConversationBody />
        <div className="chat-footer bg-light d-flex flex-row justify-content-around p-2">
          <textarea name="" id="chat-input" className="w-100 mx-1" placeholder="write here..."></textarea>
          <a href="" className="mx-1 align-self-center icon-sm">
            <FontAwesomeIcon icon="camera"/>
          </a>
          <a href="" className="mx-1 align-self-center icon-sm">
            <FontAwesomeIcon icon="image"/>
          </a>
          <a href="" className="mx-1 align-self-center icon-sm">
            <FontAwesomeIcon icon="grin"/>
          </a>
        </div>
      </div>
    );
  }
}