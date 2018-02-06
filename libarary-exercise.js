class Media {
  constructor(title) {
    this._title = title;
    this._checkout = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get ratings() {
    return this._ratings;
  }
  get checkout() {
    return this._checkout;
  }
  addRating(rating) {
    this._ratings.push(rating);
  }
  getAverageRating() {
    const sum = this.ratings.reduce(function(a, b) {
      return a + b;
    });
    const avg = sum / this.ratings.length;
    return avg;
  }
  toggleCheckOutStatus() {
    this._checkout = !this.checkout;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runtime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

let book = new Book("Moby Dick", "Herman Melville", 200);
let movie = new Movie("Saw");
