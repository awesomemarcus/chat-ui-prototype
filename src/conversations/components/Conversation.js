import React from 'react';
import './conversation.scss';

import ConversationBody from './ConversationBody';
import ConversationHeader from './ConversationHeader';
import ConversationFooter from './ConversationFooter';

export default class Conversation extends React.Component {
  render() {
    return (
      <div className="right" id="conversation">
        <ConversationHeader />
        <ConversationBody />
        <ConversationFooter />
      </div>
    );
  }
}