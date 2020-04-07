import React from 'react';

const TopicDetails = (props) => {
    const topicList = props.topicList;
    topicList.map(t => <div className="topicDetail"><h1>{t.name}</h1></div>)
}

export default TopicDetails;