import React, { useEffect } from "react";
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from '../lib/api';
import NoQuotesFound from '../components/quotes/NoQuotesFound'

const DUMMYQUOTES = [
    { id: 'q1', author: 'Jay', text: 'Learning Swift is fun' },
    { id: 'q2', author: 'Some Random Dev', text: 'Learning ReactJS is fun' },
    { id: 'q3', author: 'Jay', text: 'Learning React Native is fun' },
]

const AllQuotes = () => {


    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest()
    }, [sendRequest]);


    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return <p className="centered focused">{error}</p>
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }

    return <QuoteList quotes={loadedQuotes} />
}

export default AllQuotes;