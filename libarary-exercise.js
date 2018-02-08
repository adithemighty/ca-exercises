class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get ratings() {
    return this._ratings;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  addRating(rating) {
    if (rating <= 5 && rating > 0) {
      this._ratings.push(rating);
    } else {
      return `Please give a rating between 1 and 5`;
    }
  }
  getAverageRating() {
    const sum = this.ratings.reduce(function(a, b) {
      return a + b;
    });
    const avg = sum / this.ratings.length;
    return avg.toFixed(1);
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
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

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  addSong(songTitle, songLength) {
    let song;
    song = {
      songTitle: songTitle,
      songLength: `${songLength} minutes`
    };
    this._songs.push(song);
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  shuffle() {
    let shuffledPlaylist = this._songs;
    for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledPlaylist[i], shuffledPlaylist[j]] = [
        shuffledPlaylist[j],
        shuffledPlaylist[i]
      ];
    }
    return shuffledPlaylist;
  }
}

const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);

const speed = new Movie("Speed", "Jan de Bont", 116);

const bohemianRapsody = new CD("Bohemian Rapsody");
