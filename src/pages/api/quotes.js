// This works (go to /api/quotes)

import "dotenv/config";
import { connect } from "@planetscale/database";

export default async function handler(request, response) {
  const config = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  };

  const conn = connect(config);
  const results = await conn.execute(
    "SELECT id, qdate, quote, qcharacter FROM quotes WHERE qdate = CURDATE() ORDER BY id ASC"
  );

  return response.status(200).json({ quotes: results.rows });
}
