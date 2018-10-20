/**
 * This is class for parse route from browser
 */
export default class Parser {

  get locale(){
    return this._locale;
  }

  get route(){
    return this._route;
  }

  get localeLabel(){
    let label = 'English';

    switch (this._locale) {
      case 'en':
          label = 'English';
        break;
      case 'fr':
          label = 'Français';
        break;
      case 'ru':
          label = 'Русский';
        break;
    }

    return label;
  }

  constructor(){
    let regRoute=/(ru|en|fr)(\/[a-z\-]+)/;
    let routeObject = regRoute.exec(window.location.pathname);

    if (routeObject == null) {
      regRoute = /(ru|en|fr)/;
      routeObject = regRoute.exec(window.location.pathname);
    }
    this._route = typeof routeObject[2] == 'undefined' ? '/' : routeObject[2];
    this._locale = routeObject[1];
  }


}
