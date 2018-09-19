import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Loadable from 'react-loadable';

import './conversation-attachment.scss';
import Loading from './Loading';

const AsyncConversationAttachmentImage = Loadable({
  loader: () => import('./ConversationAttachmentImage'),
  loading: Loading
});

const AsyncConversationAttachmentStickers = Loadable({
  loader: () => import('./ConversationAttachmentStickers'),
  loading: Loading
});

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
          <a onClick={this.props._handleAttachmentTogglePhotos} href="" className="w-100 mx-1" id="photos">
            <p className={`p-1 my-0 bg-${attachmentType === 'photos' ? 'secondary text-white' : 'light'} rounded`}>Photos</p>
          </a>
          <a onClick={this.props._handleAttachmentToggleStickers} href="" className="w-100 mx-1" id="stickers">
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
          <AsyncConversationAttachmentImage />
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
          <AsyncConversationAttachmentStickers />
        </CSSTransition>
      </div>
    );
  }
}