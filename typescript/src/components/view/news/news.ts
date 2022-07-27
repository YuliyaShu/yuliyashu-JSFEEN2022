import { Articles, NewsUnit } from '../../interfaces/newsInterface';
import './news.css';

class News {
    draw(data: Articles): void {
        const news: Articles = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: NewsUnit, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            const newsCloneItem: HTMLElement | null = newsClone?.querySelector('.news__item');
            if (idx % 2) {
                if (newsCloneItem) newsCloneItem?.classList.add('alt');
            }

            const newsCloneMetaPhoto: HTMLElement | null = newsClone?.querySelector('.news__meta-photo');
            if (newsCloneMetaPhoto)
                newsCloneMetaPhoto.style.backgroundImage = `url(${item.urlToImage || '/images/header-background.jpg'})`;

            const newsCloneMetaAuthor: HTMLElement | null = newsClone?.querySelector('.news__meta-author');
            if (newsCloneMetaAuthor) newsCloneMetaAuthor.textContent = item.author || item.source.name;

            const newsCloneMetaDate: HTMLElement | null = newsClone?.querySelector('.news__meta-date');
            if (newsCloneMetaDate)
                newsCloneMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsCloneDescriptionTitle: HTMLElement | null = newsClone?.querySelector('.news__description-title');
            if (newsCloneDescriptionTitle) newsCloneDescriptionTitle.textContent = item.title;

            const newsCloneDescriptionSource: HTMLElement | null = newsClone?.querySelector(
                '.news__description-source'
            );
            if (newsCloneDescriptionSource) newsCloneDescriptionSource.textContent = item.source.name;

            const newsCloneDescriptionContent: HTMLElement | null = newsClone?.querySelector(
                '.news__description-content'
            );
            if (newsCloneDescriptionContent) newsCloneDescriptionContent.textContent = item.description;

            const newsCloneReadMore: HTMLElement | null = newsClone?.querySelector('.news__read-more a');
            if (newsCloneReadMore) newsCloneReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsGeneral: HTMLElement | null = document.querySelector('.news');
        if (newsGeneral) {
            newsGeneral.innerHTML = '';
            newsGeneral.appendChild(fragment);
        }
    }
}

export default News;
