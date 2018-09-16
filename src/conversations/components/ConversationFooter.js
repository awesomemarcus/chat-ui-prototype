import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import './conversation-footer.scss';
import ConversationAttachment from './ConversationAttachment';

export default class ConversationFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAttachmentEnabled: false,
      attachmentType: null,
    };
  }

  _handleAttachmentToggle(state, e) {
    e.preventDefault();
    this.setState({
      attachmentType: e.currentTarget.id,
    }, () => this.props._toggleAttachmentState(state));
  }

  render() {
    return (
      <div className="conversation___footer bg-light d-flex flex-row justify-content-around p-2">
        <CSSTransition
          in={this.props.isAttachmentEnabled}
          timeout={500}
          classNames="conversation-attachment___animate"
          unmountOnExit>
          <ConversationAttachment
            attachmentType={this.state.attachmentType}
            _handleAttachmentToggleStickers={this._handleAttachmentToggle.bind(this, true)}
            _handleAttachmentTogglePhotos={this._handleAttachmentToggle.bind(this, true)}
            _handleAttachmentToggleClose={this._handleAttachmentToggle.bind(this, false)}/>
        </CSSTransition>
        <div className="chat-box___wrapper d-flex flex-row justify-content-around p-2 bg-light">
          <textarea name="" id="chat-input" className="w-100 mx-1" placeholder="write here..."></textarea>
          <a href="" className="mx-1 align-self-center icon-md">
            <FontAwesomeIcon icon="camera"/>
          </a>
          <a href="" id="photos" className="mx-1 align-self-center icon-md" onClick={this._handleAttachmentToggle.bind(this, true)}>
            <FontAwesomeIcon icon="image"/>
          </a>
          <a href="" id="stickers" className="mx-1 align-self-center icon-md" onClick={this._handleAttachmentToggle.bind(this, true)}>
            <FontAwesomeIcon icon="grin"/>
          </a>
        </div>
      </div>
    );
  }
}