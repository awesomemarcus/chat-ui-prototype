import React from 'react';
import './chat-item.scss';

export default class ChatItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.renderChatLeft()}
        {this.renderChatRight()}
        {this.renderChatLeft()}
        {this.renderChatRight()}
        {this.renderChatLeft()}
        {this.renderChatRight()}
      </React.Fragment>
    );
  }

  renderChatLeft() {
    return (
      <div className="conversation___chat___item-wrapper d-flex flex-row mb-3">
        <div className="conversation___chat___item-avatar avatar___sm bg-dark"></div>
        <div className="conversation___chat___item chat___item-left mr-auto">
          <p className="mb-0">hey first Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, perspiciatis?</p> 
          <div className="meta text-dark mt-2">
            <small><i>07:00 PM, Thursday</i></small>
          </div>
        </div>
      </div>
    );
  }

  renderChatRight() {
    return (
      <div className="conversation___chat___item-wrapper d-flex flex-row mb-3">
        <div className="conversation___chat___item chat___item-right ml-auto text-right">
          <p className="mb-0">hey last Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, placeat.</p>
          <div className="meta text-dark mt-2">
            <small><i>07:00 PM, Thursday</i></small>
          </div>
        </div>
        <div className="conversation___chat___item-avatar avatar___sm bg-dark"></div>
      </div>
    );
  }
}