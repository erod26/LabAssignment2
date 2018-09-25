

class Greeter {
  constructor(private first_name: string, private last_name: string) {
  }
 
  showGreeting() {
   
    const banner = document.getElementById('banner');
    banner.innerHTML = 'Hello ' + this.first_name + ' ' + this.last_name + '.';

  }
  hideGreeting() {
    const banner = document.getElementById('banner');
    banner.innerHTML = 'r1c2';
  }


}




const greeter = new Greeter ('Eric', 'Rodriguez');


