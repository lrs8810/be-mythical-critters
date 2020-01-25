class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    this.clothes.dresses = this.clothes.dresses.concat(flowers);
  }

  provoke() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
    this.humanWards.push(infant);
    if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
    } else {
      return infant;
    };
    if (this.humanWards.length === 3) {
      this.disposition = 'Good natured';
    }
  };
}

module.exports = Fairy;
