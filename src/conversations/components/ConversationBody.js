import React from 'react';
import ChatItem from './ChatItem';
import './conversation-body.scss';
import withScrollToComponent from '../../hoc/components/withScrollToComponent';

class ConversationBody extends React.Component {
  constructor(props) {
    super(props);
    this._scrollToBottomOnAttachmentEnabled = this._scrollToBottomOnAttachmentEnabled.bind(this);
  }
  componentDidUpdate(prevProps) {
    if ((prevProps.isAttachmentEnabled !== this.props.isAttachmentEnabled) && this.props.isAttachmentEnabled) {
      clearTimeout(this.scrollIntoView);
      this._scrollToBottomOnAttachmentEnabled();
    } 
  }

  _scrollToBottomOnAttachmentEnabled() {
    this.scrollIntoView = setTimeout(() => {
      if (this.conversationBody.scrollTop > this.conversationBody.clientHeight) {
        this.messageEnd.scrollIntoView({ behavior: 'smooth'});
      }
    }, 500);
  }

  render() {
    return (
      <div className={`conversation___body p-2 attachment-${this.props.isAttachmentEnabled ? 'on' : 'off'} scroll-style-1`} ref={el => this.conversationBody = el}>
        <ChatItem />
        <div id="chat-filler" ref={(el) => this.messageEnd = el }></div>
      </div>
    );
  }
}

export default ConversationBody;