import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class ChatsCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.data = [
      {
        _id: 0,
        name: 'Johnny Holland',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        lastMessage: {
          text: 'You on your way?',
          timestamp: Moment().subtract(1, 'hours').toDate()
        }
      },
      {
        _id: 1,
        name: 'Avery Williams',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
        lastMessage: {
          text: 'I should buy a Macbook',
          timestamp: Moment().subtract(1, 'days').toDate()
        }
      },
      {
        _id: 2,
        name: 'Laura Reynolds',
        picture: 'https://randomuser.me/api/portraits/thumb/women/32.jpg',
        lastMessage: {
          text: 'What are you wearing tonight?',
          timestamp: Moment().subtract(4, 'days').toDate()
        }
      },
      {
        _id: 3,
        name: 'Greg Miller',
        picture: 'https://randomuser.me/api/portraits/thumb/men/55.jpg',
        lastMessage: {
          text: 'I making a mobile app with Meteor and Ionic',
          timestamp: Moment().subtract(1, 'week').toDate()
        }
      },
      {
        _id: 4,
        name: 'Katie McCully',
        picture: 'https://randomuser.me/api/portraits/thumb/women/3.jpg',
        lastMessage: {
          text: 'Greg is so cool!',
          timestamp: Moment().subtract(2, 'weeks').toDate()
        }
      },
      {
        _id: 5,
        name: 'Ally Billings',
        picture: 'https://randomuser.me/api/portraits/thumb/women/12.jpg',
        lastMessage: {
          text: 'Hey, I saw Greg first!',
          timestamp: Moment().subtract(2, 'weeks').toDate()
        }
      },
      {
        _id: 6,
        name: 'Terri Adams',
        picture: 'https://randomuser.me/api/portraits/thumb/women/22.jpg',
        lastMessage: {
          text: 'He is definitely mine... so back off you two!',
          timestamp: Moment().subtract(2, 'weeks').toDate()
        }
      }
    ];
  }

  remove(chat) {
    this.data.splice(this.data.indexOf(chat), 1);
  }
}

ChatsCtrl.$name = 'ChatsCtrl';
