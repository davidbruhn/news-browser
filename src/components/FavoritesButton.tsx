import type { Article } from '../types';
import _ from 'lodash-es';
import { useAtom } from 'jotai';
import { IconButton } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

import { MdStar, MdStarOutline } from 'react-icons/md';
import { favoritesAtom } from '../store';
import './FavoritesButton.css'

function FavoritesButton({ article }: { article: Article }) {
    const [getFavorites, setFavorites] = useAtom(favoritesAtom);

    const favorites = JSON.parse(getFavorites);

    function handleClick() {
        if (article.url in favorites && favorites[article.url]) {
            const clone = { ...favorites };
            delete clone[article.url];
            setFavorites(JSON.stringify(clone));
        } else {
            setFavorites(JSON.stringify({ ...favorites, [article.url]: article }))
        }
    }

    return (
        <IconButton aria-label="Favorites button" onClick={handleClick} variant='ghost' icon={favorites[article.url] ? <MdStar /> : <MdStarOutline />} />
    )
}
export default FavoritesButton;
