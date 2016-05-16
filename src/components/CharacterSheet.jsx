import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal'

var modalBody = {
  height: '400px'
}

var CharacterSheet = React.createClass({
  ///<summary>
  /// Wrapper around the Modal class with specific UI settings and content
  /// used to display a window containing the info for a given game character.
  ///</summary>

  getInitialState: function () {
    return {
      //Content of modal's header text.
      title: this.props.name ? "Character Sheet: " + this.props.name : "Character Sheet",

      zIndex: this.props.zIndex ? this.props.zIndex : 100, //TODO: N/A as of now

      //Used to notify outside components of this components closure.
      onCloseCallback: this.props.onCloseCallback ? this.props.onCloseCallback : null,

      //HTML content of the modal's body block.
      modalBody: this.getModalBody(),  //TODO: type check this to be an HTMLElement

      //Determines whether or not this component will be rendered.
      display: this.props.display === true ? true : false
    };

  },

  onCloseCallback: function() {
    this.setState({display: false});
  },

  componentWillReceiveProps: function(nextProps) {
    ///<summary>
    ///Callback occurs whenever a property on this class changes.
    ///Used to update state on property changes.
    ///</summary>
    if (nextProps.display != this.state.display) {
      this.setState({display: nextProps.display});
    }
  },

  render: function () {
    return (
        <Modal
          title={this.state.title}
          modalBody={this.state.modalBody}
          display={this.state.display}
          onCloseCallback={this.state.onCloseCallback}
        />
    );
  },

  getModalBody: function() {
      return (
        <div style={modalBody}>Hello world!</div>
      );

  }
});
export default CharacterSheet
//ReactDOM.render(<Example/>, document.body);
