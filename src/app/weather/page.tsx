import { getPostsWithMeta } from "@/lib/getPostsWithMeta";
import { PostWithMeta } from "@tryghost/admin-api";
import { WeatherOverviewClient } from "@/components/weather/WeatherOverviewClient";

export const revalidate = 300;

export default async function WeatherOverviewPage() {
  const posts: PostWithMeta[] = await getPostsWithMeta();

  return <WeatherOverviewClient posts={posts} />;
}
