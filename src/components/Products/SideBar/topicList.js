import React from 'react';
// import TopicDetails from './topicDetails';

const TopicList = (props) => {
    const topicList= ["About Us", "Products"];
    return( 
        <div className="topicList">
            {topicList.map(t => <div>{t}</div>)}
        </div>
    );
}

export default TopicList;