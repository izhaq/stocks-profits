import path from 'path';

export default class ServerConfiguration {
    static setGlobalConfiguration(app){
        app.set('views', path.join(__dirname, '../views'));
        app.set('view engine', 'pug');
    }
}