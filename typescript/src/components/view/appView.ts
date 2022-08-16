import { NewsInt, NewsUnit } from '../interfaces/newsInterface';
import { SourceInt, SourcesUnit } from '../interfaces/sourcesInterface';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    sources: Sources;
    news: News;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: NewsInt): void {
        const values: NewsUnit[] = data?.articles || [];
        this.news.draw(values as NewsUnit[]);
    }

    drawSources(data?: SourceInt): void {
        const values: SourcesUnit[] = data?.sources ? data.sources : [];
        this.sources.draw(values as SourcesUnit[]);
    }
}

export default AppView;
