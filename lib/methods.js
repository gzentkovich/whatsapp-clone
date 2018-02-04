import { Meteor } from 'meteor/meteor';
import { Chats, Messages } from '../lib/collections';

Meteor.methods({
  newMessage(message) {

    // validate new message data types with Meteor check package
    check(message, {
      type: String,
      text: String,
      chatId: String
    });

    message.timestamp = new Date();

    const messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });

    return messageId;
  }
});
