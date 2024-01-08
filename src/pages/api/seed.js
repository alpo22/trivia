// i think this file works... i never tried it

return;

import { db } from "@vercel/postgres";

export default async function handler(request, response) {
  const client = await db.connect();

  try {
    await client.sql`CREATE TABLE quotes(id SERIAL PRIMARY KEY, qdate VARCHAR(10), character VARCHAR(50), quote VARCHAR(255))`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES(TO_CHAR(NOW(), 'yyyy-mm-dd'), 'Abraham (Grampa) Simpson', 'I''m in love... no wait, it''s a stroke.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES(TO_CHAR(NOW(), 'yyyy-mm-dd'), 'Agnes Skinner', 'No driving through tunnels! You know what that symbolizes.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES(TO_CHAR(NOW(), 'yyyy-mm-dd'), 'Alice Glick', 'Filthy... but genuinely arousing.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES(TO_CHAR(NOW(), 'yyyy-mm-dd'), 'Apu Nahasapeemapetilon', 'Hey! Hey! This is not a lending library. If you''re not going to buy that thing put it down or I''ll blow your heads off!')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES(TO_CHAR(NOW(), 'yyyy-mm-dd'), 'Arnie Pye', 'I CAN''T SEE THROUGH METAL, KENT!')`;
  } catch (error) {
    return response.status(500).json({ error });
  }

  const quotes = await client.sql`SELECT * FROM quotes`;
  return response.status(200).json({ quotes: quotes.rows });
}
