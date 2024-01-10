import { db } from "@vercel/postgres";

export default async function handler(request, response) {
  const client = await db.connect();

  try {
    // await client.sql`CREATE TABLE IF NOT EXISTS quotes(id SERIAL PRIMARY KEY, qdate VARCHAR(10), character VARCHAR(50), quote VARCHAR(255))`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-10', 'Mayor Joe Quimby', 'First, one announcement: I regret to inform you we are not offering childcare tonight. I don''t know who that guy was you were leaving your kids with.')`;

    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-10', 'Homer Simpson', 'Operator! Give me the number for 911!')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-10', 'Principal Seymour Skinner', 'One of the hardest jobs I have is throwing cold water on young children''s dreams. Ralph, you''re not a kangaroo.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-10', 'Duffman', 'I''m just giving it to your wife! She is going to be sore tomorrow.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-10', 'Lisa Simpson', 'I just think you and Jessica are too different from each other to get along. She''s a sweet, kind reverend''s daughter and you''re the devil''s cabana boy.')`;

    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-11', 'Abraham Grampa Simpson', 'I''m in love... no wait, it''s a stroke.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-11', 'Homer Simpson', 'Oh yeah, what are you gonna do? Release the dogs? Or the bees? Or the dogs with bees in their mouths and when they bark, they shoot bees at you?')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-11', 'Otto Mann', 'Taxes!? Isn''t this the line for Metallica?')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-11', 'Krusty the Clown', 'Homer gave me a kidney, it wasn''t his, I didn''t need it and it came postage due, but still a lovely gesture.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-11', 'Dr Nick Riviera', 'Inflammable means flammable? What a country!')`;

    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-12', 'Bart Simpson', 'Ohhh, my ovaries!')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-12', 'Sherri and Terri', 'You ruined everything, you big ruiner! ...My sister likes you.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-12', 'Moe Szyslak', 'Oh a "garage"? Well la-di-dah Mr. Frenchman!')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-12', 'Nelson Muntz', 'Gotta nuke somethin''.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-12', 'Montgomery Burns', '"It was the best of times, it was the ''blurst'' of times?" You stupid monkey!')`;

    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-13', 'Lisa Simpson', 'They want sentiment? I''ll pump ''em so full of sap they''ll have to blow their nose with a pancake!')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-13', 'Marge Simpson', 'Look at that adorable spice rack. Eight spices? Some must be doubles.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-13', 'Barney Gumble', 'Of course I''ll be back; if you didn''t close I''d never leave.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-13', 'Chief Clancy Wiggum', 'Oh my God, it just disappeared! It''s a ghost car! There are ghost cars all over these highways, you know.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-13', 'Cookie Kwan', 'Are you guys talking about the West Side?!')`;

    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-14', 'Jimbo Jones', 'Nice PJs, Simpson. Did your mommy buy them for ya?')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-14', 'Edna Krabappel', 'Bart, you''re the closest thing to a man in my life, and that''s so depressing, I think I''m going to cry.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-14', 'Bart Simpson', 'I didn''t think it was physically possible, but this both sucks and blows.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-14', 'Homer Simpson', 'To alcohol! The cause of, and solution to, all of life''s problems.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-14', 'Troy McClure', 'You may remember me from such self-help videos as "Smoke Yourself Thin" and "Get Confident, Stupid."')`;

    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-15', 'Arnie Pye', 'I CAN''T SEE THROUGH METAL, KENT!')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-15', 'Kent Brockman', 'I for one welcome our new insect overlords and I''d like to remind them as a trusted TV personality I can be helpful in rounding up others to toil in the underground sugar caves.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-15', 'Agnes Skinner', 'No driving through tunnels! You know what that symbolizes.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-15', 'Jasper Beardsley', 'That''s a paddlin''.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-15', 'Apu Nahasapeemapetilon', 'Hey! Hey! This is not a lending library. If you''re not going to buy that thing put it down or I''ll blow your heads off!')`;

    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-16', 'Lionel Hutz', 'I was watching Matlock in a bar last night. The sound wasn''t on but I got the gist of it.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-16', 'Homer Simpson', 'Dear Baby, Welcome to Dumpsville. Population: you.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-16', 'Milhouse Van Houten', 'Hey, wait! I''m okay today! My mom bought me deodorant!')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-16', 'Alice Glick', 'Filthy... but genuinely arousing.')`;
    await client.sql`INSERT INTO quotes(qdate, character, quote) VALUES('2024-01-16', 'Hans Moleman', 'I was saying Boo-urns.')`;
  } catch (error) {
    return response.status(500).json({ error });
  }

  const quotes = await client.sql`SELECT * FROM quotes`;
  return response.status(200).json({ quotes: quotes.rows });
}
