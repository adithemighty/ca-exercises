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

let book = new Media("Moby Dick");
book.toggleCheckOutStatus();
book.addRating(3);
book.addRating(6);
console.log(book);
console.log(book.title);
console.log(book.getAverageRating());
