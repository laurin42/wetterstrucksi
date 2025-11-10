import { NextResponse } from 'next/server'

let cache: { data: any; timestamp: number } | null = null
const CACHE_DURATION = 10 * 60 * 1000

export async function GET() {
  const now = Date.now()

  if (cache && now - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data)
  }

  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=sunrise,sunset,uv_index_max&current=temperature_2m,rain,weather_code,wind_speed_10m,wind_direction_10m,is_day&timezone=Europe%2FBerlin'
  )
  const data = await response.json()

  cache = { data, timestamp: now }

  return NextResponse.json(data)
}
