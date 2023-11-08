export interface Article {
  id: string;
  title: string;
  slug: string;
  categories: 'Journal';
  tags: ('Site web' | 'API')[];
  article: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
