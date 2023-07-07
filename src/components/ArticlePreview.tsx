import moment from 'moment';
import _ from 'lodash-es';
import FavoritesButton from './FavoritesButton';
import './ArticlePreview.css'
import type { Article } from '../types';

function ArticlePreview({ article }: { article: Article }) {
    return (
        <div className="article">
            {article.urlToImage && <img src={article.urlToImage} className="article__image" />}
            <i>{article.source.name}</i>
            <a href={article.url} className="article__title">{article.title}</a>
            <div className="article__description">{article.description}</div>
            <i>{moment(article.publishedAt).calendar()}</i>
            <FavoritesButton article={article} />
        </div>)
}
export default ArticlePreview;
