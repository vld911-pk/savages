
export async function getUserCardsResults() {
    const data = await fetch('http://localhost:3002/games/cards/user-results', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await data.json();
};

export async function setUserCardsResult(results) {
    console.log({results});
    const data = await fetch('http://localhost:3002/games/cards/set-cards-result', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({results}),
    });
    return await data.json();
}
