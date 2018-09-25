var Greeter = /** @class */ (function () {
    function Greeter(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Greeter.prototype.showGreeting = function () {
        var banner = document.getElementById('banner');
        banner.innerHTML = 'Hello ' + this.first_name + ' ' + this.last_name + '.';
    };
    Greeter.prototype.hideGreeting = function () {
        var banner = document.getElementById('banner');
        banner.innerHTML = 'r1c2';
    };
    return Greeter;
}());
var greeter = new Greeter('Eric', 'Rodriguez');
