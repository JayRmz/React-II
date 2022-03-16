import react from "react";
import { useParams, Route, Switch } from "react-router-dom";
import Comments from '../components/comments/Comments'
const QuoteDetail = () => {
    const params = useParams();
    return (
        <>
            <h2> Quote detail</h2>
            <h1> {params.id}</h1>
            <Route path='/quotes/:id/comments'>
                <Comments />
            </Route>

        </>
    )
}

export default QuoteDetail;