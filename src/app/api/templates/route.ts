import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { code } = await req.json();
  // You can save this to Supabase here
  console.log('Submitted:', code);
  return NextResponse.json({ success: true });
}
