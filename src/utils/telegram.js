export async function getTelegramUserId(username, apiKey) {
  const response = await fetch(
    `https://api.apify.com/v2/acts/akula.marketing~telegram-get-username-info/run-sync-get-dataset-items?token=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        usernames: [username]
      })
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка при получении ID");
  }

  const data = await response.json();
  if (!data || data.length === 0) {
    throw new Error("Пользователь не найден");
  }

  return data[0]; // вернётся { id, username, firstName, lastName, photoUrl }
}
