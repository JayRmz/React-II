import React from "react";
import QuoteList from '../components/quotes/QuoteList';

const DUMMYQUOTES = [
    { id: 'q1', author: 'Jay', text: 'Learning Swift is fun' },
    { id: 'q2', author: 'Some Random Dev', text: 'Learning ReactJS is fun' },
    { id: 'q3', author: 'Jay', text: 'Learning React Native is fun' },
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMYQUOTES} />
}

export default AllQuotes;