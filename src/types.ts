export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId?: number;
}

export interface ShortPost {
  title: string;
  body: string;
}
export interface IGetAllPostsResponse {
  limit: number;
  posts: Post[];
  skip: number;
  total: number;
}

export interface PostDetails {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface ILogin {
  user: string;
  password: string;
}
