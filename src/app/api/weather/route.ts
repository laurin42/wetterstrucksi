import { NextResponse } from 'next/server'

let cache: { data: any; timestamp: number } | null = null
const CACHE_DURATION = 10 * 60 * 1000

export async function GET() {
  const now = Date.now()

  if (cache && now - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data)
  }

  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=51.233334&longitude=6.783333&daily=sunrise,sunset&current=temperature_2m,wind_speed_10m,wind_direction_10m,rain&timezone=Europe%2FBerlin&forecast_days=1'
  )
  const data = await response.json()

  cache = { data, timestamp: now }

  return NextResponse.json(data)
}
