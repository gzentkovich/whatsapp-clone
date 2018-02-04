import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Chats, Messages } from '../lib/collections';

Meteor.startup(function() {
  if (Chats.find().count() !== 0) return;

  Messages.remove({});

  const messages = [
      {
        text: 'You on your way?',
        timestamp: Moment().subtract(1, 'hours').toDate()
      },
      {
        text: 'I should buy a Macbook',
        timestamp: Moment().subtract(1, 'days').toDate()
      },
      {
        text: 'What are you wearing tonight?',
        timestamp: Moment().subtract(4, 'days').toDate()
      },
      {
        text: 'I making a mobile app with Meteor and Ionic',
        timestamp: Moment().subtract(1, 'week').toDate()
      },
      {
        text: 'Greg is so cool!',
        timestamp: Moment().subtract(2, 'weeks').toDate()
      },
      {
        text: 'Hey, I saw Greg first!',
        timestamp: Moment().subtract(2, 'weeks').toDate()
      },
      {
        text: 'He is definitely mine... so back off you two!',
        timestamp: Moment().subtract(2, 'weeks').toDate()
      }
  ];

  messages.forEach((m) => {
    Messages.insert(m);
  });

  const chats = [
      {
        name: 'Johnny Holland',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
      },
      {
        name: 'Avery Williams',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
      },
      {
        name: 'Laura Reynolds',
        picture: 'https://randomuser.me/api/portraits/thumb/women/32.jpg',
      },
      {
        name: 'Greg Miller',
        picture: 'https://randomuser.me/api/portraits/thumb/men/55.jpg',
      },
      {
        name: 'Katie McCully',
        picture: 'https://randomuser.me/api/portraits/thumb/women/3.jpg',
      },
      {
        name: 'Ally Billings',
        picture: 'https://randomuser.me/api/portraits/thumb/women/12.jpg',
      },
      {
        name: 'Terri Adams',
        picture: 'https://randomuser.me/api/portraits/thumb/women/22.jpg',
      }
  ];

  chats.forEach((chat) => {
    const message = Messages.findOne({ chatId: { $exists: false } });
    chat.lastMessage = message;
    const chatId = Chats.insert(chat);
    Messages.update(message._id, { $set: { chatId } });
  });

});
