import { NewsInt } from '../interfaces/newsInterface';
import { SourceInt } from '../interfaces/sourcesInterface';
import { CallBack } from '../types/callbackType';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: CallBack<SourceInt>): void {
        super.getResp<SourceInt>({ endpoint: 'sources' }, callback);
    }

    getNews(e: Event, callback: CallBack<NewsInt>): void {
        let target = e.target;
        const newsContainer = e.currentTarget;
        if (!(target instanceof HTMLElement) || !(newsContainer instanceof HTMLElement)) {
            return;
        }
        const sourceId = target.getAttribute('data-source-id');

        while (target !== newsContainer) {
            if (target instanceof HTMLElement) {
                if (target.classList.contains('source__item')) {
                    if (newsContainer && sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp<NewsInt>(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                target = <HTMLElement>target.parentNode;
            }
        }
    }
}

export default AppController;
