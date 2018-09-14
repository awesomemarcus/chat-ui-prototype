import React from 'react';
import './conversation.scss';

import ConversationBody from './ConversationBody';
import ConversationHeader from './ConversationHeader';
import ConversationFooter from './ConversationFooter';

export default class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAttachmentEnabled: false,
    };

    this._toggleAttachmentState = this._toggleAttachmentState.bind(this);
  }

  _toggleAttachmentState(state) {
    this.setState({
      isAttachmentEnabled: state,
    });
  }

  render() {
    return (
      <div className="right" id="conversation">
        <ConversationHeader />
        <ConversationBody
          isAttachmentEnabled={this.state.isAttachmentEnabled}/>
        <ConversationFooter
          _toggleAttachmentState={this._toggleAttachmentState}
          isAttachmentEnabled={this.state.isAttachmentEnabled}/>
      </div>
    );
  }
}