// const countElem = document.querySelector(".count");
// const addBtn = document.querySelector("button.count-add");
// const minusBtn = document.querySelector("button.count-minus");

// addBtn.addEventListener("click", () => {
//   const count = countElem.textContent;

//   // few ways to convert a string into a number
//   //   const newCount = parseInt(count) + 1;
//   //   const newCount = Number(count) + 1;
//   countElem.textContent = +count + 1;
// });

// minusBtn.addEventListener("click", () => {
//   const count = countElem.textContent;
//   countElem.textContent = +count - 1;
// });

class CounterModel {
  #count;
  constructor() {
    this.#count = 0;
  }
  getCount() {
    return this.#count;
  }

  setCount(count) {
    this.#count = count;
  }

  add() {
    this.#count++;
  }
  minus() {
    this.#count--;
  }
}

class CounterView {
  constructor() {
    this.countElem = document.querySelector(".count");
    this.addBtn = document.querySelector("button.count-add");
    this.minusBtn = document.querySelector("button.count-minus");
  }

  updateCount(count) {
    this.countElem.textContent = count;
  }
}

const COUNT_URL = "http://localhost:3000/count";
class CounterController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.handleAddEvent();
    this.handleMinusEvent();

    this.init();
  }

  async init() {
    const count = await this.fetchCount();
    this.model.setCount(count);
    this.view.updateCount(count);
  }

  async fetchCount() {
    const res = await fetch(COUNT_URL);
    const count = await res.json();
    return count.value;
  }

  handleAddEvent() {
    this.view.addBtn.addEventListener("click", async () => {
      const count = this.model.getCount();
      try {
        await updateCountAPI(count + 1);

        this.model.add();
        this.view.updateCount(this.model.getCount());
      } catch (error) {
        console.error(error);
      }
    });
  }
  handleMinusEvent() {
    this.view.minusBtn.addEventListener("click", async () => {
      const count = this.model.getCount();
      try {
        await updateCountAPI(count - 1);

        this.model.minus();
        this.view.updateCount(this.model.getCount());
      } catch (error) {
        console.error(error);
      }
    });
  }
}

const counterModel = new CounterModel();
const counterView = new CounterView();
const counterController = new CounterController(counterModel, counterView);

// console.log(counterModel.getCount());
// counterModel.add();
// console.log(counterModel.getCount());
// counterModel.minus();
// console.log(counterModel.getCount());
