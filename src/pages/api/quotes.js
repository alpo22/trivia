// This works (go to /api/quotes)

// Note: the server is on eastern time

import { db } from "@vercel/postgres";

export default async function handler(request, response) {
  const client = await db.connect();

  const quotes =
    await client.sql`SELECT id, qdate, quote, character FROM quotes WHERE qdate = TO_CHAR(NOW(), 'yyyy-mm-dd') ORDER BY id ASC`;


  return response.status(200).json({ quotes: quotes.rows });
}
