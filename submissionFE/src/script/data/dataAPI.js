class DataAPI {
  static searchGadget(keyword) {
    return fetch(
      `http://api-mobilespecs.azharimm.site/v2/search?query=${keyword}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.status) {
          return Promise.resolve(res.data.phones);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataAPI;
