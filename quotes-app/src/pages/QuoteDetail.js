import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'


const DUMMYQUOTES = [
    { id: 'q1', author: 'Jay', text: 'Learning REACTJS is fun' },
    { id: 'q2', author: 'Some Random Dev', text: 'Learning Swift is fun' },
    { id: 'q3', author: 'Jay', text: 'Learning React Native is fun' },
]


const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();

    console.log(match)

    const quote = DUMMYQUOTES.find(quote => quote.id === params.id)

    if (!quote) {
        return <p> No quote found</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>

        </>
    )
}

export default QuoteDetail;