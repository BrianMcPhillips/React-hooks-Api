export const getThisDay = () => {
  return fetch('https://history.muffinlabs.com/date')
    .then(res => res.json())
    .then(result => result.data.Events);
};
