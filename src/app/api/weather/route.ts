import { NextResponse } from 'next/server'

let cache: { data: any; timestamp: number } | null = null
const CACHE_DURATION = 10 * 60 * 10000

export async function GET() {
    console.log("=== /api/weather GET called ===", new Date().toISOString());
  console.trace();
  const now = Date.now()

  if (cache && now - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data)
  }

  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=51.2217&longitude=6.7762&daily=sunrise,sunset&current=weather_code,temperature_2m,is_day&timezone=Europe%2FBerlin'
  )
  const data = await response.json()

  cache = { data, timestamp: now }

  return NextResponse.json(data)
}
