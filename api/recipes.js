export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { image, mediaType } = req.body;

  if (!image) return res.status(400).json({ error: 'No image provided' });

  const prompt = `Look at this photo carefully. Identify all visible food ingredients, produce, vegetables, fruits, proteins, dairy items, condiments, or anything edible you can see.

Return ONLY a JSON object with no markdown, no backticks, no extra text:
{
  "ingredients": ["ingredient1", "ingredient2", "ingredient3"]
}

Use common simple names (e.g. "chicken breast", "cheddar cheese", "cherry tomatoes"). 
If you cannot see any food items clearly, return: {"ingredients": []}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mediaType || 'image/jpeg', data: image } },
            { type: 'text', text: prompt }
          ]
        }]
      })
    });

    const data = await response.json();
    const text = data.content?.map(b => b.text || '').join('') || '';
    const clean = text.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);
    res.status(200).json(parsed);
  } catch (e) {
    console.error('Scan error:', e);
    res.status(500).json({ error: 'Failed to scan image', ingredients: [] });
  }
}
