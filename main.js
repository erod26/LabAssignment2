var Greeter = /** @class */ (function () {
    function Greeter(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Greeter.prototype.showGreeting = function () {
        var banner = document.getElementById('banner');
        banner.innerHTML = 'Hello ' + this.first_name + ' ' + this.last_name + ', I take it you are having a good day' + '?';
    };
    Greeter.prototype.hideGreeting = function () {
        var banner = document.getElementById('banner');
        banner.innerHTML = 'r1c2';
    };
    return Greeter;
}());
var greeter = new Greeter('Eric', 'Rodriguez');
var Troll = /** @class */ (function () {
    function Troll(message) {
        this.message = message;
    }
    Troll.prototype.showMessage = function () {
        var rando = document.getElementById('rando');
        rando.innerHTML = 'The message you looking for is elsewhere' + "," + ' ' + this.message + ".";
    };
    Troll.prototype.hideMessage = function () {
        var rando = document.getElementById('rando');
        rando.innerHTML = 'r3c2';
    };
    return Troll;
}());
var trolli = new Troll('Look above dummy');
var notHere = /** @class */ (function () {
    function notHere(scold) {
        this.scold = scold;
    }
    notHere.prototype.showTease = function () {
        var haha = document.getElementById('haha');
        haha.innerHTML = 'Not here my dude.' + ' ' + this.scold + '.';
    };
    notHere.prototype.hideTease = function () {
        var haha = document.getElementById('haha');
        haha.innerHTML = 'r2c3';
    };
    return notHere;
}());
var teaser = new notHere('Getting closer.');
