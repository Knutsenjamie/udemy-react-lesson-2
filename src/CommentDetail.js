import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
                {/* the image tag above shows how you access certain elements from faker js. Simply access faker, then add .(type you want to access) and . (attribute of said type you wish to access) */}
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {props.time}
                        </span>
                    </div>
                    <div className="text">{props.commentSnippet}</div>
                </div>
            </div>
    );
};

export default CommentDetail;