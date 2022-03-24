const canSendMessage = (self) => ({
  sendMessage: () => console.log(`send message`, self.message),
});

const checkValidPhone = (self) => ({
  isValid: () => {
    console.log(`valid phonr`, self.from);
  },
});

const personalEnterprise = (from, message, store) => {
  const self = {
    from,
    message,
    store,
  };

  const personalEnterpriseBehaviors = (self) => ({
    createCatalog: () => console.log(`create catalog`, self.store),
  });

  return Object.assign(
    self,
    personalEnterpriseBehaviors(self),
    canSendMessage(self),
    checkValidPhone(self)
  );
};

const personalEnterprise1 = personalEnterprise(
  "0812-345-67890",
  "hello ada produk baru ini",
  "Toko And Makmur"
);

personalEnterprise1.createCatalog();
personalEnterprise1.sendMessage();
personalEnterprise1.isValid();
