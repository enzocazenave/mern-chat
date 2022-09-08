import { Post } from './';

export const Posts = ({hasPhoto}) => {
    return (
        <div className={`Posts-container ${ (hasPhoto) && 'separation-posts' } fadeIn`}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
