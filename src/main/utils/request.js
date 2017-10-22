
const request = (url, data) => {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  const options = {
    method: 'post',
    body: JSON.stringify(data),
  };

  return fetch(`http://127.0.0.1:4000${url}`, options).then(res => res.json());
};

export default request;

