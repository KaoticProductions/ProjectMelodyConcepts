import React from 'react'
import CharacterSheet from './CharacterSheet'
import Chat from './Chat'
var FaFile = require('react-icons/lib/fa/file-text');
var FaUser = require('react-icons/lib/fa/user');
var FaCogs = require('react-icons/lib/fa/cogs');
var FaInfo = require('react-icons/lib/fa/info-circle');
var FaChat = require('react-icons/lib/fa/wechat');

var panelContainer = {
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  width: '350px',
  backgroundColor: '#818588',
  borderLeft: '1px solid black',
  color: '#A0A0A0',
  boxShadow: 'inset 0px 0px 60px -16px rgba(38,57,74,1)'
}

var panelHeaderContainer = {
  borderBottom: '5px solid #05668D',
  backgroundColor: '#282828',
  padding: '5px'
}

var iconStyle = {
  width: '40px'
}

var buttonContainer = {
  width: '97%',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'transparent',
  height: '30px',
  paddingBottom: '5px'
}

var button = {
      display: 'inline-block',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      cursor: 'pointer',
      backgroundColor: '#3C8CD5',
      color: 'white',
      paddingTop: '5px',
      paddingBottom: '5px',
      border: '1px solid transparent',
      borderRadius: '.25rem',
      marginTop: '5px',
      float: 'right',
}

//TODO: Empty style provided to improve markup readability.
//      Will eventually fill will panel content styles.
var panelBodyContainer = {

}

var TabPagesEnum = {
    Chat : 0,
    Characters : 1,
    Search: 2,
    Settings : 3
}


var SidePanel  = React.createClass({
  ///<summary>
  /// UI component used to house, interact and toggle various user actions.
  /// Contains the components (Chat, Search, Settings, ...)
  ///</summary>

  //<img style={iconStyle} src={png} />

  onCharacterSheetClose: function() {
    ///<summary>
    /// If the modal component was closed from an external source (ex: close button on modal dialog)
    /// then updated character sheet display state to preserve toggle buttons functionality.
    ///</summary>
    if(this.state.isCharWinDisplayed == false)
      return;

    this.setState({isCharWinDisplayed: false });
  },

  toggleCharacterSheet: function() {
    ///<summary>
    /// Hide/Show the character sheet based on it's current display state.
    ///</summary>
    var isOpen = !this.state.isCharWinDisplayed;
    this.setState({isCharWinDisplayed: isOpen });
  },

  getInitialState: function(){
    return {
         activeTabKey: TabPagesEnum.Chat,
         isCharWinDisplayed: false,
         navHeaderEntries: [{
           key: TabPagesEnum.Chat,
           icon: <FaChat />,
           onClickCallback: () => this.setActiveTab(TabPagesEnum.Chat),
           isActive: true
         },
         {
           key: TabPagesEnum.Characters,
           icon: <FaUser />,
           onClickCallback: () => this.setActiveTab(TabPagesEnum.Characters),
           isActive: false
         },
         {
           key: TabPagesEnum.Search,
           icon: <FaInfo />,
           onClickCallback: () => this.setActiveTab(TabPagesEnum.Search),
           isActive: false
         },
         {
           key: TabPagesEnum.Settings,
           icon: <FaCogs />,
           onClickCallback: () => this.setActiveTab(TabPagesEnum.Settings),
           isActive: false
         }]
    }
  },

  setActiveTab: function(targetPageKey) {
    debugger;

    if(targetPageKey == this.state.activeTabKey)
      return; //Don't nav if already on selected tab.

    switch(targetPageKey) {
      case TabPagesEnum.Chat:
        this.setState({activeTabKey: TabPagesEnum.Chat});
        break;
      case TabPagesEnum.Search:
        this.setState({activeTabKey: TabPagesEnum.Search});
        break;
      case TabPagesEnum.Characters:
        this.setState({activeTabKey: TabPagesEnum.Characters});
        break;
      case TabPagesEnum.Settings:
        this.setState({activeTabKey: TabPagesEnum.Settings});
        break;
    }

    //Set active flag on each component so UI reflects state in next render loop.
    this.state.navHeaderEntries.map(function(entry, i){
      entry.isActive = entry.key == targetPageKey;
    });
  },

  getSidePanelBodyContents: function() {
    return [{
        contentElement: <Chat />,
        tabKey: TabPagesEnum.Chat
    },
    {
        contentElement: <div> <span onClick={this.toggleCharacterSheet} className="sidePanelHeaderButton tempBodyStyle">
            <FaUser />
          </span>
          </div>,
        tabKey: TabPagesEnum.Characters
    },
    {
        contentElement: <div>Search Body</div>,
        tabKey: TabPagesEnum.Search
    },
    {
        contentElement: <div>Settings Body</div>,
        tabKey: TabPagesEnum.Settings
    }]

  },


//TODO: The panelBodyContainer will be a 'Tab' container will a switch on which content will be displayed.
render: function() {

    //var isChatVisible = this.state.activeTabKey == "Chat";
    return (
        <div>
          <div style={panelContainer}>
            <div style={panelHeaderContainer}>

              { this.state.navHeaderEntries && this.state.navHeaderEntries.map(function(entry, idx) {
                  debugger;
              return (

                  <span key={idx} className={"sidePanelHeaderButton " + (entry.isActive ? ' activeMenuItem' : '')} onClick={entry.onClickCallback}>
                    {entry.icon}
                  </span>)
              }.bind(this))}

            </div>
            <div style={panelBodyContainer}>

              { this.getSidePanelBodyContents && this.getSidePanelBodyContents().map(function(entry, idx) {
                return (
                  <div key={idx} className={(this.state.activeTabKey == entry.tabKey ? 'show' : 'hidden')}>
                    {entry.contentElement}
                  </div>
                )
              }.bind(this))}

            </div>
          </div>

          <CharacterSheet
            name="TestName"
            display={this.state.isCharWinDisplayed}
            onCloseCallback={this.onCharacterSheetClose}
            className="characterSheet"
          />

        </div>
    );
  }

});

export default SidePanel
