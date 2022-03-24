//Prototype
// function Mail() {
//   this.from = "penngirim@andrian.com";
// }

// Mail.prototype.sendMessage = function (to, message) {
//   console.log(
//     "Sending message from " + this.from + " to " + to + ": " + message
//   );
// };

// const testMail = new Mail();
// testMail.sendMessage("penerima@cimen.com", "Hello World!");

//Tanpa Prototype
// function mail() {
//   this.from = "pengirim@andrian.com";
//   this.sendMessage = function (to, message) {
//     console.log(`Sending message from ${this.from} to ${to} : ${message}`);
//   };
// }

// const testMail2 = new mail();
// testMail2.sendMessage("penerima@gmail.com", "Hello World!");

class Mail {
  constructor(saya, author) {
    this.from = author;
    this._codeToken = "12345";
    console.log(`Hay ${saya}`);
    this._contacts = [];
  }
  sendMessage(to, message) {
    console.log(`you send`, message, `to`, to, `from`, this.from);
    this._contacts.push(to);
  }

  showAllContacts() {
    return this._contacts;
  }

  detailMessage(to, message) {
    console.log(
      `Sending message from ${this.from} to ${to} : ${message} code token : ${this._codeToken}`
    );
  }
  static aboutMe(nama) {
    console.log("This is a mail class created by " + nama);
  }
}

// const testMail3 = new Mail("Andrian", "andriancimen@gmail.com");
// testMail3.sendMessage("cimen@gmail.com", "Hello World!");
// testMail3.sendMessage("peneriman@gmail.com", "Pesan Kamu Bagus");
// console.log(testMail3.showAllContacts());

// testMail3.sendMessage("peneriman@gmail.com", "Hello World!");
// testMail3.detailMessage("p1", "Ini Code tokennya");
// console.log(testMail3._codeToken);

//Mengakses static method
//Mail.aboutMe("Andrian");

//Inheritance
class WhatsApp extends Mail {
  constructor(username, isBussinessAccount) {
    //overiding Constactior
    super("Andrian", "Iy Say");
    this.username = username;
    this.isBussinessAccount = isBussinessAccount;
    this.recipients = [];
  }

  myProfile() {
    return `Username : ${this.username} ${
      this.isBussinessAccount ? "Bussiness Account" : "Personal Account"
    }`;
  }

  sendBroadcastMassage(message, recipients) {
    this.recipients.push(recipients);
    console.log("Broadcast Message : " + message);
  }

  countRecipents() {
    this.recipients.forEach((e) => console.log(`Contancts : ${e}`));
    return this.recipients.length;
  }
}

const testWhatsApp = new WhatsApp("Andrian", true);
testWhatsApp.sendBroadcastMassage("Hello World", [081, 082, 083, 084]);
testWhatsApp.countRecipents();

testWhatsApp.detailMessage("penerima1", "Hay Bro");
