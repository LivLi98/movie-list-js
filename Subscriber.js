class Subscriber{
    constructor(firstName, lastName, cardNumber, age, monthlyFee) {
        this.firstName= firstName
        this.lastName= lastName
        this.cardNumber= cardNumber
        this.age=age
        this.monthlyFee= monthlyFee
    
    }
}
export default Subscriber


let oldMember= new Subscriber("Megan", "Watts", 9173354678, 31,8.99)
let newMember= new Subscriber("Sarah", "Johnson", 4581274401, 24,8.99)

console.log("Due to your longtime subscription Ms.",oldMember.lastName, "Please enjoy these 2 AMC movie tickets! Thank you so much")
console.log("Thank you for your subscription",newMember.firstName,"We truly apperciate you!");

