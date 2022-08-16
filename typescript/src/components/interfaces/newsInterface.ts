interface NewsSource {
    readonly id: string;
    readonly name: string;
}

interface NewsUnit {
    readonly author: string;
    readonly content: string;
    readonly description: string;
    readonly publishedAt: string;
    readonly source: NewsSource;
    readonly title: string;
    readonly url: string;
    readonly urlToImage: string;
}

interface Articles extends Array<NewsUnit> {
    [index: number]: NewsUnit;
}

interface NewsInt {
    readonly articles: Articles;
    readonly status: string;
    readonly totalResults: number;
}

export { NewsUnit, NewsInt, Articles };
