import React from 'react';
import scrollToComponent from 'react-scroll-to-component';

const withScrollToComponent = Component => (
  class withScrollToComponentHOC extends React.Component {
    constructor(props) {
      super(props);
      this.scrollMe = this.scrollMe.bind(this);
      this.scrollComponentRef = React.createRef();
    }

    // this function uses the created ref to be attached to the component that you want to scroll to.
    scrollMe() {
      scrollToComponent(this.scrollComponentRef.current);
    }

    render() {
      const newProps = {
        scrollMe: this.scrollMe,
      };
      return <Component {...this.props} {...newProps} scrollComponentRef={this.scrollComponentRef} />;
    }
  }
);

export default withScrollToComponent;
