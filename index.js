import Ftp2Telegram from './lib/Ftp2telegram';
import config from './config/production';

const ftp2telegram = new Ftp2Telegram(config);
ftp2telegram.listen();
