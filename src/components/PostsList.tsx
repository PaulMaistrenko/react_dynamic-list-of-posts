import classNames from 'classnames';

import { Post } from '../types/Post';

type Props = {
  postsList: Post[],
  selectedPost: Post | null,
  setSelectedPost: (post: Post | null) => void;
};

export const PostsList: React.FC<Props> = ({
  postsList,
  selectedPost,
  setSelectedPost,
}) => {
  const toggleOpenerSidebar = (post: Post | null) => {
    setSelectedPost(post);
  };

  return (
    <div data-cy="PostsList">
      <p className="title">Posts:</p>

      <table className="table is-fullwidth is-striped is-hoverable is-narrow">
        <thead>
          <tr className="has-background-link-light">
            <th>#</th>
            <th>Title</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {postsList.map(post => (
            <tr
              key={post.id}
              data-cy="Post"
            >
              <td data-cy="PostId">{post.id}</td>
              <td data-cy="PostTitle">{post.title}</td>

              <td className="has-text-right is-vcentered">
                <button
                  type="button"
                  data-cy="PostButton"
                  className={classNames(
                    'button',
                    'is-link',
                    { 'is-light': selectedPost?.id !== post.id },
                  )}
                  onClick={() => {
                    toggleOpenerSidebar(
                      selectedPost?.id === post.id ? null : post,
                    );
                  }}
                >
                  {selectedPost?.id === post.id
                    ? 'Close'
                    : 'Open'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
