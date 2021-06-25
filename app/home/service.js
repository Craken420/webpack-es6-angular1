export default class HeaderServices {
    constructor(){
        this.greet = 'Hi, Welcome';
        this.header = 'Header application';
    }
    getGreet() {
        return  this.greet
    }
    getHeader() {
        return  this.header
    }
}
