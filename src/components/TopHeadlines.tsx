import { useCallback, useState, useEffect } from 'react'
import { Input } from '@chakra-ui/react'
import _ from 'lodash-es';
import Articles from './Articles';
import { getTopHeadlines, getTopHeadlinesByKeyword } from '../api';
import type { Article } from '../types';

function TopHeadlines() {
    const [query, setQuery] = useState("");

    const updateNewsForKeyword = (keyword: string) => {
        getTopHeadlinesByKeyword(keyword).then((res) => {
            if (res.status === 'ok') {
                setArticles(res.articles);
            }
        })
    };

    const delayedQuery = useCallback(_.debounce((keyword: string) => updateNewsForKeyword(keyword), 250), []);

    function handleChange(keyword: string) {
        setQuery(keyword);
        delayedQuery(keyword);
    }

    const [recentArticles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        getTopHeadlines().then((res) => {
            if (res.status === 'ok') {
                setArticles(res.articles);
            }
        });
    }, []);

    const articles = query ? recentArticles.filter((article) => JSON.stringify(article).includes(query)) : recentArticles;

    return <>
        <Input placeholder="Search by keyword..." onChange={(e) => handleChange(e.target.value)} value={query} />
        <Articles articles={articles} />
    </>
}

export default TopHeadlines
