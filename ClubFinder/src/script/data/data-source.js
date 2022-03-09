import clubs from "./clubs.js";

class DataSource {
  static searchClub(keyword) {
    // return new Promise((resolve, reject) => {
    //   const filteredClubs = clubs.filter((club) =>
    //     club.name.toUpperCase().includes(keyword.toUpperCase())
    //   );
    //   if (filteredClubs.length) {
    //     resolve(filteredClubs);
    //   } else {
    //     reject(`${keyword} is not found"`);
    //   }
    // });

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
