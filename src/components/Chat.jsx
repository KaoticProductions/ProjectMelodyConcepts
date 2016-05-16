import React from 'react'
import ChatEntry from './ChatEntry'

//var png = require("file?name=[path][name].[ext]&context=./src!./chat.png");
//<img style={iconStyle} src={png} />

var Chat  = React.createClass({

  addChatEntry: function() {
    var textAreaElement = document.getElementById('chatText');
    var text = textAreaElement.value;

    //Prevent blank messages from being submitted. (Should check on API for this as well).
    if(text.trim() == "")
      return;

    textAreaElement.value = "";
    var chatEntry = {message: text};
    this.setState({chatEntryList: this.state.chatEntryList.concat([chatEntry]) });
  },

  submitMessage: function(e) {
    this.addChatEntry();
  },

  getInitialState: function(){
    return {
         chatEntryList: [],
         textMessage: ""
    }
  },

  keyDown: function(e) {
    ///<summary>
    /// Keypress listener for the chat textarea which provides functionality
    /// to submit a chat message when the Enter key is pressed and the textarea has focus.
    ///</summary>
       if (e.keyCode == 13 && !e.shiftKey) {
         this.addChatEntry();
         e.preventDefault();
       }

  },

  sizeChatForScroll: function() {
    ///<summary>
    /// Dynamically set height of the chat entries container so that the
    /// scroll bar will show and hide when necessary because height of
    /// chat list can change (resize window ect.).
    ///</summary>
    var newEntryContainer = document.getElementById('chatNewEntryContainer');
    var chatEntriesContainer = document.getElementById('chatEntriesContainer');

    if(newEntryContainer == null || chatEntriesContainer == null)
      return;

    var entryBoxTopPos = newEntryContainer.getBoundingClientRect().top;
    var chatListTopPos = chatEntriesContainer.getBoundingClientRect().top;
    var desiredHeight = entryBoxTopPos - chatListTopPos;

    chatEntriesContainer.style.height = desiredHeight + 'px';
  },

  setScrollToBottom: function() {
    ///<summary>
    /// Programatically scrolls to the bottom of the chat entries list.
    ///</summary>
    var chatEntriesContainer = document.getElementById('chatEntriesContainer');
    chatEntriesContainer.scrollTop = chatEntriesContainer.scrollHeight;
  },

  componentDidUpdate: function() {
    ///<summary>
    /// When chat list is modified make sure the most recent message is in focus.
    ///</summary>
    this.setScrollToBottom();
  },

render: function() {
    this.sizeChatForScroll();
    return (
        <div id="chatContainer">
          <div id="chatEntriesContainer">
            { this.state.chatEntryList && this.state.chatEntryList.map(function(chatEntry, idx) {
              return <ChatEntry key={idx} message={chatEntry.message} />;
            }.bind(this))}
          </div>

          <div id="chatNewEntryContainer">
            <div className="chatTextContainerTopBorder">
              <textarea id="chatText" onKeyDown={this.keyDown}></textarea>

              <div className="buttonContainer">
                <button onClick={this.addChatEntry} className="button floatRight" value={this.state.textMessage}>Send</button>
              </div>
            </div>
          </div>

        </div>
    );
  }

});

export default Chat
