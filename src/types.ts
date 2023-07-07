interface Source {
    id: string;
    name: string;
}
export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface ErrorResponse {
    status: 'error';
    code: string;
    message: string;
}

export interface ArticlesResponse {
    status: 'ok';
    totalResults: number;
    articles: Article[];
}
