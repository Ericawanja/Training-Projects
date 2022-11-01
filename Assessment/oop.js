function Phamarcy() {
  this.pharmacist = () => {
    return { role: "prescribe drugs" };
  };
  this.cashier = () => {
    return { role: "take money" };
  };
}
let phamarcy = new Phamarcy("erica");
let manager = { Mainrole: "manage employees" };
Object.assign(manager, phamarcy);

//test case
console.log("pharmacy role ", phamarcy.pharmacist());
console.log("cashier role ", phamarcy.cashier());
console.log("manager as a cashier ", manager.cashier());
console.log("manager as a pharmacist ", manager.pharmacist());
console.log("manager managing employees ", manager.Mainrole);
