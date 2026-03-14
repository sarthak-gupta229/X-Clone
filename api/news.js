export default async function handler(req, res) {
  const API_KEY = "49e99235ed39451e974188ce2cd24953";
  const { category = "general", lang = "en" } = req.query;

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&apikey=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(`GNews API error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news data" });
  }
}
