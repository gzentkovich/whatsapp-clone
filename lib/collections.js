import { Mongo } from 'meteor/mongo';

export const Chats = new Mongo.Collections('chats');
export const Messages = new Mongo.Collections('messages');
