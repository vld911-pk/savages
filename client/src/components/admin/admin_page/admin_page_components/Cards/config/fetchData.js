
export async function getUserCardsResults(userId) {
    const data = await fetch(`http://localhost:3002/games/cards/user-results/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    const json = await data.json();
    return json;
};

export async function setUserCardsResult(results, userId) {
    console.log({ results, userId });
    const data = await fetch(`http://localhost:3002/games/cards/set-cards-result/${userId}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({results, date: new Date()}),
    });
    return await data.json();
}
