export const storiesFetcher = async (path: string) => {
  return fetch(path).then((res) => res.json());
};
