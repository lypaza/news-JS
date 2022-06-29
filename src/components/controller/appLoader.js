import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5d6f02d3aac742169ad63835cb2937fd', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
