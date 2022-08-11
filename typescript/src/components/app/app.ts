import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesStart = document.querySelector('.sources');
        if (sourcesStart)
            sourcesStart.addEventListener('click', (e) =>
                this.controller.newsResp(e, (data) => {
                    console.log('im here');
                    this.view.drawNews(data);
                })
            );
        this.controller.sourcesResp((data) => this.view.drawSources(data));
    }
}

export default App;
