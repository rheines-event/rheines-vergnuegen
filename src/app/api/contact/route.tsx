import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
 

type ContactFormData = {
  reason: string,
  email: string,
  content: string
};


export async function POST(request: Request) {
  try {
    await sql`CREATE TABLE IF NOT EXISTS ContactFormData ( Reason varchar(255), Email varchar(255), Content text );`;
    
    const { reason = undefined, email = undefined, content = undefined }: Partial<ContactFormData> = await request.json();
    if (reason != null && email != null && content != null) {

      const result = await sql`INSERT INTO ContactFormData (Reason, Email, Content) VALUES (${reason}, ${email}, ${content});`;
      if (result.rowCount !== 0) {
        return NextResponse.json({ success: true }, { status: 200 });
      } else {
        throw new Error('Could not insert data');
      }

    } else {
      throw new Error('Reason, email and content are required fields.');
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
