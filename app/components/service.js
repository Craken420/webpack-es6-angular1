export default class HeaderServices {
    constructor(){
        this.greet = 'Hi, Welcome from the service';
        this.mainSection = 'This is the main section of the service';
        this.arrayObjs = [{'Number': 1, 'Name': 'Angel'}, {'Number': 2, 'Name': 'Lolo'}, {'Number': 3, 'Name': 'Peto'}]
    }
    getGreet() {
        return this.greet
    }
    getMainSection() {
        return this.mainSection
    }
}
