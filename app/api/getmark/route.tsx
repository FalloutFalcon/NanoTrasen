import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
  const { searchParams } = new URL(req.url as string);
  const id = searchParams.get('id');
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    if (!id || Array.isArray(id)) {
      throw new Error('Invalid ID');
    }

    const mark = await sql`SELECT * FROM Marks WHERE id = ${id};`;

    if (mark.rows.length === 0) {
      return res.status(404).json({ message: 'Mark not found' });
    }

    return res.status(200).json(mark.rows[0]); // Returning the fetched mark
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to fetch mark entry' });
  }
}
