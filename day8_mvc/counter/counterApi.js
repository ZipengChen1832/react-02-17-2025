const COUNTER_API_URL = "http://localhost:3000/count";

const updateCountAPI = async (newCount) => {
  await fetch(COUNTER_API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: newCount }),
  });
};
