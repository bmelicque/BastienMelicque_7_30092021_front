import React from 'react';
import { useState } from 'react/cjs/react.development';
import { likePost } from '../utils/axiosServices';
import { getCookie } from '../utils/functions';

const LikeButton = props => {
    const { postId } = props;
    const userId = +getCookie('userId'); // '+' to convert string into number
    const [usersLiked, setUsersLiked] = useState(props.usersLiked ? props.usersLiked.split(' ').map(e => +e) : []);
    const [liked, setLiked] = useState(usersLiked.includes(userId));

    const handleLike = () => {
        const like = !liked;

        if (like) setUsersLiked([...usersLiked, userId]);
        else setUsersLiked(usersLiked.filter(user => user != userId));
        setLiked(!liked);

        likePost(postId, like);
    }

    return (
        <button
            className="post__like"
            className={liked ? "post__like--liked" : null}
            onClick={handleLike}>
                {liked ?
                    <i class="fas fa-heart"></i> :
                    <i class="far fa-heart"></i>
                }
             {usersLiked.length}
        </button>
    );
};

export default LikeButton;