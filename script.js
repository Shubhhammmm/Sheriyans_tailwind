let user = ({
    name: "Abhilash",
    _adharNo: 7843933,
    hadBankAccount: true,
  
    get adharNo() {
      return this._adharNo;
    },
  
    set adharNo(newAdharNo) {
      return this._adharNo = newAdharNo;
    },
  })

// Object.defineProperty(user, "adharNo", {
//   writable: false,
// });

user.adharNo = 93923;

console.log(user);
