// @flow

export type Shelve = {
  id: string,
  slug: string,
  title: string,
  user: {
    id: string,
    name: string,
    username: string,
    cover?: string,
    image: string,
  },
};
