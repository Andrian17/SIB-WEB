//Parent Class
class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }

  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this._contacts.push(to);
  }
  showAllContacts() {
    return this._contacts;
  }

  detailClassMail() {
    console.log(`This is a mail class created by ${this.from}`);
  }
}

class WhatsApp extends Mail {
  constructor(username, isBussinessAccount) {
    super("Andrian");
    this.username = username;
    this.isBussinessAccount = isBussinessAccount;
  }

  //melakukan Override
  sendMessage(msg, to) {
    //memanggil method pada parent Class
    super.sendMessage(msg, to);
    console.log("Send By WA");
  }

  myProfile() {
    return `my name ${this.username}, is ${
      this.isBussinessAccount ? "Business" : "Personal"
    }`;
  }
}

const testWA1 = new WhatsApp("Cimen", false);
//console.log(testWA1.myProfile());
//testWA1.detailClassMail();
testWA1.sendMessage("Hello", "Cimen");
