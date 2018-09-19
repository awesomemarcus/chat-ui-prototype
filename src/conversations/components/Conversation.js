import React from 'react';
import './conversation.scss';
import Loadable from 'react-loadable';
import Loading from './Loading';

const AsyncConversationBody = Loadable({
  loader: () => import('./ConversationBody'),
  loading: Loading
});

const AsyncConversationHeader = Loadable({
  loader: () => import('./ConversationHeader'),
  loading: Loading
});

const AsyncConversationFooter = Loadable({
  loader: () => import('./ConversationFooter'),
  loading: Loading
});

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
        <AsyncConversationHeader />
        <AsyncConversationBody
          isAttachmentEnabled={this.state.isAttachmentEnabled}/>
        <AsyncConversationFooter
          _toggleAttachmentState={this._toggleAttachmentState}
          isAttachmentEnabled={this.state.isAttachmentEnabled}/>
      </div>
    );
  }
}