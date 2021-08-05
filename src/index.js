import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" time="Today at 7:30pm" commentSnippet="Super cool post!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Joseph" time="Today at 4:15pm" commentSnippet="OMG wow! Seriously?" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Elizabeth" time="Yesterday at 12:00pm" commentSnippet="That's amazing. Btw Hiiiiii ❤️" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jeremiah" time="2 Weeks ago" commentSnippet="Yep. Amazing blog post as always!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Candy" time="1 Month ago" commentSnippet="Heyyyyy!" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'))