import { NextResponse } from 'next/server'
import quotes from '@/data/quotes.json'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const topic = searchParams.get('topic')

  if (!topic) {
    return NextResponse.json({ quotes: [] })
  }

  const filtered = quotes
    .filter((quote) => quote.topic.toLowerCase() === topic.toLowerCase())
    .slice(0, 3)

  return NextResponse.json({ quotes: filtered })
}
