
export default class GameCategory {

  update(callback){
    fetch('http://greenpanda.ceant.net/admin/rest/game-category')
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

}
