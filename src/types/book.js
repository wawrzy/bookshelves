// @flow

export type Author = {
  id: string,
  name: string,
  slug: string,
};

export type Price = {
  amount: number,
  currency: string,
  includes_taxes: boolean,
};

export type Book = {
  authors: Array<Author>,
  book: {
    id: string,
    slug: string,
  },
  description: string,
  form: string,
  id: string,
  is_free: boolean,
  isbn: string,
  language: string,
  short_title: string,
  averageRating: ?number,
  title: string,
  price?: Price,
  can: {
    buy?: boolean,
    access: boolean,
  },
};
