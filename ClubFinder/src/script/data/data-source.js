class DataSource {
  static searchClub(keyword) {
    return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.teams) {
          return Promise.resolve(res.teams);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
