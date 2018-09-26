

class Greeter {
  constructor(private first_name: string, private last_name: string) {
  }
 
  showGreeting() {
   
    const banner = document.getElementById('banner');
    banner.innerHTML = 'Hello ' + this.first_name + ' ' + this.last_name + ', I take it you are having a good day' + '?';

  }
  hideGreeting() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'r1c2';
  }


}
const greeter = new Greeter ('Eric', 'Rodriguez');


class Troll {
  constructor(private message: string) {

  }
  showMessage() {
    const rando = document.getElementById('rando');
    rando.innerHTML = 'The message you looking for is elsewhere' + "," + ' ' + this.message + "."
  }

  hideMessage() {
      const rando = document.getElementById('rando');
      rando.innerHTML = 'r3c2';
    }


  }

const trolli = new Troll ('Look above dummy');

class notHere {
  constructor(private scold: string) {

  }
  showTease() {
    const haha = document.getElementById('haha');
    haha.innerHTML = 'Not here my dude.' + ' ' + this.scold + '.'
  }
  hideTease() {
    const haha = document.getElementById('haha');
    haha.innerHTML = 'r2c3';
  }
}
const teaser = new notHere ('Getting closer.')
