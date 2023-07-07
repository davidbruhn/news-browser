import { Card, CardBody } from '@chakra-ui/react';
import ArticlePreview from './ArticlePreview';
import type { Article } from '../types';
import './Articles.css'

function Articles({ articles }: { articles: Article[] }) {
    const articlePreviews = articles.map((article: Article) => (<Card className="card">
        <CardBody>
            <ArticlePreview article={article} key={article.url} />
        </CardBody>
    </Card>));

    return (
        <div className='articles'>
            {articlePreviews}
        </div>
    )
}

export default Articles
