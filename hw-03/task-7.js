/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const cObj = {};
    this.transactions.push(cObj);
    return { amount, type, id: this.transactions.length + 1 };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const cObj = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(cObj);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      alert`Снятие суммы ${amount}  у.е. невозможно, недостаточно средств`;
      return;
    }
    this.balance -= amount;
    const cObj = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(cObj);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i++) {
      const cObj = this.transactions[i];
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      const cObj = this.transactions[i];
      if (cObj.type == type) {
        total += cObj.amount;
      }
    }
    return total;
  },
};

// ПРОВЕРОЧНЫЙ КОД
account.deposit(100);
account.deposit(200);
account.withdraw(100);
// account.withdraw(500);
account.getTransactionDetails();
account.getTransactionTotal();
account.getBalance();

console.log(account.getTransactionTotal(deposit));
