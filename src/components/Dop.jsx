import React from 'react';

var divStyle = {
  backgroundColor: 'red',
  height: '100px'
}

class ConceptComponent extends React.Component {

  classes() {
    return {
      'default': {
            modal: {
              color: '#8BC640',
          },
        }
      }
  }

    render() {
          return <div style={divStyle}>This is my shit</div>
        //return <div style={{backgroundColor: 'red', height: '100px'}}>This is my shit</div>
    }
}

export default ConceptComponent
