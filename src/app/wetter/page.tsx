import { WeatherOverviewClient } from "@/components/wetter/WeatherOverviewClient";
import { getPostsWithTags } from "../api/posts/getPostsWithMeta";
import { SkeletonWrapper } from "@/components/SkeletonWrapper";

export const revalidate = 300;

export default async function WeatherOverviewPage() {
  const rueckblicke = await getPostsWithTags("rueckblick");
  const updates = await getPostsWithTags("warnlage");
  const vorhersagen = await getPostsWithTags([
    "wetter",
    "wetterprognose",
    "wetter kurz und kompakt",
    "wetteraussichten",
    "aussichten",
  ]);
  const biowetter = await getPostsWithTags(["biowetter"]);
  const presseschau = await getPostsWithTags(["presseschau"]);
  const privates = await getPostsWithTags(["privates"]);

  const posts = {
    rueckblicke,
    updates,
    vorhersagen,
    biowetter,
    presseschau,
    privates,
  };

  return (
    <SkeletonWrapper data={Object.values(posts).flat()} minDuration={200}>
      <WeatherOverviewClient posts={posts} />
    </SkeletonWrapper>
  );
}
