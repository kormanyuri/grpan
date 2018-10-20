
export default class StaticContent {


  constructor(route, locale){
    this.route = route;
    this.locale = locale;
  }

  update(callback){
    fetch('http://greenpanda.ceant.net/admin/rest/static-content?route=' + this.route + '&locale=' + this.locale)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

}
