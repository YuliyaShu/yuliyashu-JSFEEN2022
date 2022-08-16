import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'e4ade38a77d04d8081ae2a42230f6fa2',
        });
    }
}

export default AppLoader;
