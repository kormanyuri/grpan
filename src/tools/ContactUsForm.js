import queryString from 'query-string';

export default class ContactUsForm {

  constructor(data){
    this.data = data;
  }

  send(callback){
    fetch('http://greenpanda.ceant.net/admin/rest/public-form/send', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      mode: 'cors',
      body: queryString.stringify(this.data)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(callback);
  }

}
