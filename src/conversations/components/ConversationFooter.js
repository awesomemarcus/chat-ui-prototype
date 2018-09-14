import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './conversation-footer.scss';
import ConversationAttachment from './ConversationAttachment';

export default class ConversationFooter extends React.Component {
  constructor(props) {
    super(props);

    this._handleAttachmentToggle = this._handleAttachmentToggle.bind(this);
    this.state = {
      isAttachmentEnabled: false,
    };
  }

  _handleAttachmentToggle(e) {
    e.preventDefault();
    this.props._toggleAttachmentState();
  }

  render() {
    return (
      <div className="conversation___footer bg-light d-flex flex-row justify-content-around p-2">
        {this.props.isAttachmentEnabled ?
        <ConversationAttachment
          _handleAttachmentToggle={this._handleAttachmentToggle}/> : null}
        <textarea name="" id="chat-input" className="w-100 mx-1" placeholder="write here..."></textarea>
        <a href="" className="mx-1 align-self-center icon-md">
          <FontAwesomeIcon icon="camera"/>
        </a>
        <a href="" className="mx-1 align-self-center icon-md" onClick={this._handleAttachmentToggle}>
          <FontAwesomeIcon icon="image"/>
        </a>
        <a href="" className="mx-1 align-self-center icon-md">
          <FontAwesomeIcon icon="grin"/>
        </a>
      </div>
    );
  }
}