import { useAtom } from 'jotai';
import Articles from './Articles';
import type { Article } from '../types';
import { favoritesAtom } from '../store';

function FavoriteArticles() {
    const [getFavorites] = useAtom(favoritesAtom);
    const favorites = Object.values<Article>(JSON.parse(getFavorites));
    return <Articles articles={favorites} />
}

export default FavoriteArticles
