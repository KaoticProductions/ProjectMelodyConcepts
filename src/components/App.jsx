import React from 'react'
import ReactDOM from 'react-dom';
import SidePanel from './SidePanel'

var appSize = {
  width: '100%',
  height: '100%'
}

var App  = React.createClass({

  render: function() {
      return (
          <div id="bodyContainer" style={appSize}>
            <SidePanel />
          </div>
      )
  }
});

export default App
