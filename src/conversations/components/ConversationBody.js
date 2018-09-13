import React from 'react';
import ChatItem from './ChatItem';
import './conversation-body.scss';

export default class ConversationBody extends React.Component {
  render() {
    return (
      <div className="conversation___body p-2 attachment-on scroll-style-1">
        <ChatItem />
      </div>
    );
  }
}