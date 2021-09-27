import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

export function Topic() {
    let match = useRouteMatch();
    console.log('match-topic', match);
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}