//var Radium = require('radium');
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
var FaClose = require('react-icons/lib/fa/times-circle');

var modal = (function(){
  var startPosition = (window.outerWidth / 2) - 200;
  return {
    width: '500px',
    backgroundColor: 'white',
    border: '1px solid black',
    boxShadow: '0px 0px 17px 2px rgba(0,0,0,0.61)',
    borderRadius: '4px',
    position: 'absolute',
    top: '50px',
    left: startPosition + 'px',
    zIndex: 100
  }
})();

var Modal = React.createClass({

  onClose: function() {
    if(this.state.onCloseCallback) {

      //TODO: Should do type definition (of type function) for this state variable instead.
      try {
        this.state.onCloseCallback();
      } catch(e) {console.log(e); }
    }

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

  getInitialState: function () {
    return {
    //Draggable Window Settings
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      },

    //Modal UI display Settings

      //Content of modal's header text.
      title: this.props.title ? this.props.title : "Modal Title",

      //Used to notify outside components of this components closure.
      onCloseCallback: this.props.onCloseCallback ? this.props.onCloseCallback : null,

      //Determines whether or not this component will be rendered.
      display: this.props.display === true ? true : false,

      //HTML content of the modal's body block.
      modalBody: this.props.modalBody ? this.props.modalBody : <div style={modalBody}></div> //TODO: type check this to be an HTMLElement
    };

  },

// -- Draggable Library Functions --- ///

  handleDrag: function (e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  },

  onStart: function() {
    this.setState({activeDrags: ++this.state.activeDrags});
  },

  onStop: function() {
    this.setState({activeDrags: --this.state.activeDrags});
  },

  adjustXPos: function(e) {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  },

  adjustYPos: function(e) {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  },

  onControlledDrag: function(e, position) {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  },

  onControlledDragStop: function(e, position) {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  },


  render: function () {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;

    var displayClass = this.state.display === false ? 'hide' : 'show';
    return (

      <div className={displayClass}>
        <Draggable handle="#modalHeader" {...dragHandlers}>

          <div className="box" style={modal}>
            <div className="box no-cursor">

            <div id="modalHeader" className="modalHeader">
              { this.state.title }
              <div onClick={this.onClose} className="closeButton">
                <FaClose />
              </div>
            </div>

            <div className="modalBody">
              { this.state.modalBody }
            </div>


            <div className="modalFooter">
              <button className="button">Click Me!</button>
            </div>

          </div>
          </div>
        </Draggable>
      </div>

    );
  }
});
export default Modal
