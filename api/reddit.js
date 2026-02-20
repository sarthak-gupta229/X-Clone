export default async function handler(req, res) {
  // Extract the subreddit path from query params
  // e.g. /api/reddit?path=r/all/hot.json&limit=10&after=xyz
  const { path, ...rest } = req.query;

  if (!path) {
    return res.status(400).json({ error: "Missing path param" });
  }

  const queryString = new URLSearchParams(rest).toString();
  const redditUrl = `https://www.reddit.com/${path}${queryString ? "?" + queryString : ""}`;

  try {
    const response = await fetch(redditUrl, {
      headers: {
        "User-Agent": "XClone/1.0.0 (Personal Project)",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Reddit API error" });
    }

    const data = await response.json();

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=30");

    return res.status(200).json(data);
  } catch (err) {
    console.error("Reddit proxy error:", err);
    return res.status(500).json({ error: "Failed to fetch from Reddit" });
  }
}
