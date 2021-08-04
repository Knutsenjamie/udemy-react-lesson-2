import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                {/* the image tag above shows how you access certain elements from faker js. Simply access faker, then add .(type you want to access) and . (attribute of said type you wish to access) */}
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:00pm
                        </span>
                    </div>
                    <div className="text">Nice Blog Post!</div>
                </div>
            </div>
    );
};

export default CommentDetail;