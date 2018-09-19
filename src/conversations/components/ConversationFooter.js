import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import Loadable from 'react-loadable';
import './conversation-footer.scss';
import Loading from './Loading';

const AsyncConversationAttachment = Loadable({
  loader: () => import(/* webpackChunkName: "conversation-attachment", webpackPrefetch: true */'./ConversationAttachment'),
  loading: Loading
});


export default class ConversationFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAttachmentEnabled: false,
      attachmentType: null,
    };

    this._onPreloadAttachment = this._onPreloadAttachment.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', (evt) => {
      if (!this.conversationFooterRef.contains(evt.target)) {
        if (this.props.isAttachmentEnabled) this.props._toggleAttachmentState(!this.props.isAttachmentEnabled);
      }
    });
  }

  _handleAttachmentToggle(state, e) {
    e.preventDefault();
    this.setState({
      attachmentType: e.currentTarget.id,
    }, () => this.props._toggleAttachmentState(state));
  }

  _onPreloadAttachment() {
    AsyncConversationAttachment.preload();
  }

  render() {
    return (
      <div className="conversation___footer bg-light d-flex flex-row justify-content-around p-2" ref={el => this.conversationFooterRef = el}>
        <CSSTransition
          in={this.props.isAttachmentEnabled}
          timeout={500}
          classNames="conversation-attachment___animate"
          unmountOnExit>
          <AsyncConversationAttachment
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
          <a href="" id="photos" className="mx-1 align-self-center icon-md" onClick={this._handleAttachmentToggle.bind(this, true)} onMouseOver={this._onPreloadAttachment}>
            <FontAwesomeIcon icon="image"/>
          </a>
          <a href="" id="stickers" className="mx-1 align-self-center icon-md" onClick={this._handleAttachmentToggle.bind(this, true)} onMouseOver={this._onPreloadAttachment}>
            <FontAwesomeIcon icon="grin"/>
          </a>
        </div>
      </div>
    );
  }
}