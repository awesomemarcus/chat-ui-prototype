import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './conversation-attachment.scss';
import ConversationAttachmentImage from './ConversationAttachmentImage';
import ConversationAttachmentStickers from './ConversationAttachmentStickers';

export default class ConversationAttachment extends React.Component {
  render() {
      const { attachmentType } =  this.props;
    return (
      <div id="conversation-attachment">
        <a href=""
          onClick={this.props._handleAttachmentToggleClose}
          id="conversation-attachment___close-btn"
          className="pos-absolute absolute-tm bg-white px-1 text-danger">
            <small>CLOSE</small>
          </a>
        <div className="conversation-attachment___header text-center p-2 d-flex justify-content-around">
          <a href="" className="w-100 mx-1">
            <p className={`p-1 my-0 bg-${attachmentType === 'photos' ? 'secondary text-white' : 'light'} rounded`}>Photos</p>
          </a>
          <a href="" className="w-100 mx-1">
            <p className={`p-1 my-0 bg-${attachmentType === 'stickers' ? 'secondary text-white' : 'light'} rounded`}>Stickers</p>
          </a>
        </div>
        <CSSTransition
          in={(attachmentType === 'photos')}
          timeout={300}
          classNames={{
            enter: 'animated',
            enterActive: 'fadeIn',
            exit: 'animated',
            exitActive: 'fadeOut'
          }}
          unmountOnExit>
          <ConversationAttachmentImage />
        </CSSTransition>
        <CSSTransition
          in={(attachmentType === 'stickers')}
          timeout={300}
          classNames={{
            enter: 'animated',
            enterActive: 'fadeIn',
            exit: 'animated',
            exitActive: 'fadeOut'
          }}
          unmountOnExit>
          <ConversationAttachmentStickers />
        </CSSTransition>
      </div>
    );
  }
}