import superagent from 'superagent';

export const renderIf = (test, component) => (test ? component : undefined);

export const fetchData = url => getCache(url)
  .then(data => data)
  .catch(err => superagent.get(url)
    .then((result) => {
      setCache(url, result.body);
      return result.body;
    })
    .catch(console.log))
  .then(data => data);

export const getCache = key => new Promise((resolve, reject) => {
  const data = localStorage.getItem(key);
  if (data) { resolve(JSON.parse(data)); } else { reject('Invalid cache key', key); }
});

export const setCache = (key, value) => new Promise((resolve, reject) => {
  const safeValue = typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(key, safeValue);
  resolve();
});
