import React, { useState } from "react";

const testData = {
  items: [
    { name: "Soda", price: 1.25 },
    { name: "Chips", price: 1.0 },
    { name: "Candy", price: 0.75 },
  ] as Item[],
  coins: [
    { name: "Dollar", value: 1.0 },
    { name: "Quarter", value: 0.25 },
    { name: "Dime", value: 0.1 },
    { name: "Nickel", value: 0.05 },
    { name: "Penny", value: 0.01 },
  ] as Coin[],
};

interface Item {
  name: string;
  price: number;
}

interface Coin {
  name: string;
  value: number;
}

export default function VendingMachine({
  items = testData.items,
  coins = testData.coins,
}: {
  items: Item[];
  coins: Coin[];
}) {
  const [boughtItems, setBoughtItems] = useState<Record<string, number>>({});
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState("");

  const addCoin = (value: number) => {
    setError("");
    setBalance((prevBalance) => prevBalance + value);
  };

  const buyItem = (item: Item) => {
    const { price, name } = item;
    if (price > balance) {
      setError("Insufficient fund");
    } else {
      setBalance((prevBalance) => prevBalance - price);
      setError("");
      setBoughtItems((prev) => {
        const newItems = { ...prev };
        if (prev[name]) {
          newItems[name] += 1;
        } else {
          newItems[name] = 1;
        }
        return newItems;
      });
    }
  };

  const finishTransaction = () => {
    const changes = {};
    let newBalance = balance;
    const _coins = [...coins].sort((a, b) => b.value - a.value);
    for(const coin of _coins){
        while(newBalance >= coin.value){
            newBalance -= coin.value;
        }
    }

    setError("");
    setBoughtItems({});
    setBalance(0);
  }

  console.log("Bought Items:", boughtItems);

  return (
    <div>
      <h1>Vending Machine</h1>
      <h2>Balance: {balance.toFixed(2)}</h2>
      <button>Finish Transaction</button>

      {Object.keys(boughtItems).length > 0 && (
        <div>
          <h2>Bought Items:</h2>
          <ul>
            {Object.entries(boughtItems).map(([name, quantity]) => (
              <li key={name}>
                {name} x {quantity}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>Returned Coins:</div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div style={{ display: "flex" }}>
        {items.map((item) => {
          const { name, price } = item;
          return (
            <div key={name}>
              <div>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
              </div>
              <button onClick={() => buyItem(item)}>Buy</button>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex" }}>
        {coins.map((item) => {
          const { name, value } = item;
          return (
            <div key={name}>
              <h2>{name}</h2>
              <div>${value}</div>
              <button onClick={() => addCoin(value)}>Insert</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
