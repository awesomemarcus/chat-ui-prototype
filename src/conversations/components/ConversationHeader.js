import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './conversation-header.scss';

export default class ConversationHeader extends React.Component {
  render() {
    return (
      <div className="conversation___header d-flex align-items-center p-2 bg-light">
        <div className="meta-info w-100 text-center">
          <p className="m-0"><strong>Juan Dela Cruz</strong></p>
          <div className="conversation___header-meta"><small><i>9 minutes ago</i></small></div>
        </div>
        <a href="" className="mr-2 ml-auto icon-md">
          <FontAwesomeIcon icon="video"/>
        </a>
        <a href="" className="text-dark icon-md">
          <FontAwesomeIcon icon="ellipsis-v"/>
        </a>
      </div>
    );
  }
}