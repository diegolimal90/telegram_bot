'use strict';

const Telegram = require('telegram-node-bot');
const tg = new Telegram.Telegram('363490918:AAGE0O5ILl55womEHhORYMDEVRU987AnK0U',{
		workes: 1
	});
const MenuController = require('./controller/menu');
const menuCtrl = new MenuController();

tg.router.otherwise(menuCtrl);

