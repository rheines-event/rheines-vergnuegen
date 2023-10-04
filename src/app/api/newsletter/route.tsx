import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
 

type NewsletterUserData = {
  email: string;
};


export async function POST(request: Request) {
  try {
    await sql`CREATE TABLE IF NOT EXISTS NewsletterUserData ( Email varchar(255) );`;
    
    const { email = undefined }: Partial<NewsletterUserData> = await request.json();
    if (email != null) {

      const result = await sql`INSERT INTO NewsletterUserData (Email) VALUES (${email});`;
      if (result.rowCount !== 0) {
        return NextResponse.json({ success: true }, { status: 200 });
      } else {
        throw new Error('Could not insert data');
      }

    } else {
      throw new Error('Email is a required field.');
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
