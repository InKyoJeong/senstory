export interface LikeInfo {
  PostId: number;
  UserId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostLiker {
  id: number;
  Like: LikeInfo;
}

export interface PostImage {
  id: number;
  PostId: number;
  createdAt: Date;
  src: string;
  updatedAt: Date;
}

export interface PostUser {
  id: number;
  nickname: string;
  avatar: string;
}

export interface PostComment {
  PostId: number;
  User: PostUser;
  UserId: number;
  content: string;
  createdAt: Date;
  id: number;
  updatedAt: Date;
}

export interface PostRepost {
  id: number;
  Images: PostImage[];
  RepostId: null;
  User: PostUser;
  UserId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: number;
  Images: PostImage[];
  User: PostUser;
  RepostId: number;
  UserId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  Likers: PostLiker[];
  Repost: null | PostRepost;
  Comments: Comment[];
}

export interface PostinitialState {
  mainPosts: Post[];
  hasMorePosts: boolean;
  singlePost: Post | null;
  imagePaths: string[];
  loadAllPostLoading: boolean;
  loadAllPostFinish: boolean;
  loadAllPostError: string | null;
  loadUserAllPostLoading: boolean;
  loadUserAllPostFinish: boolean;
  loadUserAllPostError: string | null;
  loadSinglePostLoading: boolean;
  loadSinglePostFinish: boolean;
  loadSinglePostError: string | null;
  loadHashtagPostsLoading: boolean;
  loadHashtagPostsFinish: boolean;
  loadHashtagPostsError: string | null;
  loadRelatedPostsLoading: boolean;
  loadRelatedPostsFinish: boolean;
  loadRelatedPostsError: string | null;
  addPostLoading: boolean;
  addPostFinish: boolean;
  addPostError: string | null;
  removePostLoading: boolean;
  removePostFinish: boolean;
  removePostError: string | null;
  updatePostLoading: boolean;
  updatePostFinish: boolean;
  updatePostError: string | null;
  likePostLoading: boolean;
  likePostFinish: boolean;
  likePostError: string | null;
  unlikePostLoading: boolean;
  unlikePostFinish: boolean;
  unlikePostError: string | null;
  addCommentLoading: boolean;
  addCommentFinish: boolean;
  addCommentError: string | null;
  uploadImagesLoading: boolean;
  uploadImagesFinish: boolean;
  uploadImagesError: string | null;
  repostLoading: boolean;
  repostFinish: boolean;
  repostError: string | null;
}
