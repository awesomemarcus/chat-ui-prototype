import React from 'react';
import './conversations-list-item.scss';

export default class ConversationsListItem extends React.Component {
  render() {
    return (
      <div className="p-2 conversations-list___item">
        <a href="" className="d-flex flex-row justify-content-around text-dark">
          <div className="conversations-list___avatar avatar___sm bg-dark mr-2 align-self-center">
          </div>
          <div className="conversations-list___item-meta-info align-self-center p-2">
            <p className="m-0 align-self-center">Juan First</p>
            <small className="align-self-center"><i>Lorem ipsum dolor..</i></small>
          </div>
          <p class=" m-0 text-right">
            <small><i>10 minutes</i></small>
          </p>
        </a>
      </div>
    );
  }
}