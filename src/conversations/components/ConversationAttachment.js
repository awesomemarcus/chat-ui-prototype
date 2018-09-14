import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './conversation-attachment.scss';

export default class ConversationAttachment extends React.Component {
  render() {
    return (
      <div id="conversation-attachment">
        <a href=""
          onClick={this.props._handleAttachmentToggle}
          id="conversation-attachment___close-btn"
          className="pos-absolute absolute-tm bg-white px-1 text-danger">
            <small>CLOSE</small>
          </a>
        <div className="conversation-attachment___header text-center p-2 d-flex justify-content-around">
          <a href="" className="w-100 mx-1">
            <p className="p-1 my-0 bg-secondary text-white rounded">Photos</p>
          </a>
          <a href="" className="w-100 mx-1">
            <p className="p-1 my-0 bg-light rounded">Stickers</p>
          </a>
        </div>
        <div className="conversation-attachment___body p-2 horizontal-scroll-style-1">
          <div className="conversation-attachment___img conversation-attachment___upload-btn m-1 rounded pos-relative">
            <div className="pos-absolute absolute-middle text-center">
              <FontAwesomeIcon icon="plus"/>
            </div>
          </div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
          <div className="conversation-attachment___img bg-dark m-1 rounded"></div>
        </div>
        {/* <div class="photos-sticker___body p-2 horizontal-scroll-style-1">
          <div class="photos___sticker-emojis scroll-style-1 d-flex flex-wrap">
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
            <div class="photos-sticker___sticker chat__item__avatar bg-dark mr-2"></div>
          </div>
        </div> */}
      </div>
    );
  }
}