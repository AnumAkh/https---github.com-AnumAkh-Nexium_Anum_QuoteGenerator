'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

export default function Home() {

  const [topic, setTopic] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted topic:", topic)
    // You can filter quotes or do anything here
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
          <h2 className="text-xl font-semibold">Enter a topic</h2>

          <Input
            type="text"
            placeholder="e.g. love, motivation, life"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />

          <Button type="submit">Generate Quotes</Button>
        </form>
      </main>
    </div>
  );
}
