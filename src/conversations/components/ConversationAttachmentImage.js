import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ConversationAttachmentImage extends React.Component {
  render() {
    return (
      <div id="conversation-attachment-image" className="conversation-attachment___body p-2 horizontal-scroll-style-1">
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
    );
  }
}