import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './conversation-attachment-stickers.scss';

export default class ConversationAttachmentStickers extends React.Component {
  constructor(props) {
    super(props);

    this._handleActiveStickerMenu = this._handleActiveStickerMenu.bind(this);

    this.state = {
      activeSticker: 'smileys',
    };
    
  }

  _handleActiveStickerMenu(e) {
    e && e.preventDefault();

    this.setState({
      activeSticker: e.currentTarget.id,
    });

  }

  render() {
    return (
      <div id="conversation-attachment-stickers" className="conversation-attachment___body p-2 horizontal-scroll-style-1 pos-relative">
        <div id="sticker-menu" className="pos-absolute absolute-tl full-height scroll-style-hidden">
          <div className={`p-1 ${this.state.activeSticker === 'smileys' ? 'active' : ''}`}>
            <a onClick={this._handleActiveStickerMenu} href="" id="smileys">
              <div className="avatar___sm bg-dark pos-relative"></div>
            </a>
          </div>
          <div className={`p-1 ${this.state.activeSticker === 'animals' ? 'active' : ''}`}>
            <a onClick={this._handleActiveStickerMenu} href="" id="animals">
              <div className="avatar___sm bg-dark pos-relative"></div>
            </a>
          </div>
          <div className={`p-1 ${this.state.activeSticker === 'foods' ? 'active' : ''}`}>
            <a onClick={this._handleActiveStickerMenu} href="" id="foods">
              <div className="avatar___sm bg-dark pos-relative"></div>
            </a>
          </div>
        </div>
        <CSSTransition
          in={(this.state.activeSticker === 'smileys')}
          timeout={300}
          classNames={{
            enter: 'animated',
            enterActive: 'fadeIn',
            exit: 'animated',
            exitActive: 'd-none',
          }}
          unmountOnExit>
          <div id="sticker-emojis-smileys" className="photos___sticker-emojis scroll-style-1">
            <p className="mb-1 text-secondary">
              <small>SMILEYS</small>
            </p>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={(this.state.activeSticker === 'animals')}
          timeout={400}
          classNames={{
            enter: 'animated',
            enterActive: 'fadeIn',
            exit: 'animated',
            exitActive: 'd-none'
          }}
          unmountOnExit>
          <div id="sticker-emojis-animals" className="photos___sticker-emojis scroll-style-1">
          <p className="mb-1 text-secondary">
            <small>ANIMALS</small>
          </p>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
            <div className="conversation-attachment___sticker avatar___sm bg-dark mr-2"></div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}