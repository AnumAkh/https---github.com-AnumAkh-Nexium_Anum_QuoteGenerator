'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Quote = {
  text: string
  topic: string
}

export default function QuotePage() {
  const [topic, setTopic] = useState('')
  const [quotes, setQuotes] = useState<Quote[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch(`/api/quotes?topic=${topic}`)
    const data = await res.json()
    setQuotes(data.quotes)
  }

  return (
    <main className="h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-4xl font-bold text-center">Quote Generator</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter topic (e.g., motivation)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
          <div className="flex justify-center">
            <Button type="submit">Generate</Button>
          </div>
        </form>

        <div className="space-y-3">
          {quotes.length > 0 ? (
            quotes.map((q, i) => (
              <div key={i} className="p-4 bg-gray-100 rounded shadow">{q.text}</div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center">Quotes will appear here...</p>
          )}
        </div>
      </div>
    </main>
  )
}
