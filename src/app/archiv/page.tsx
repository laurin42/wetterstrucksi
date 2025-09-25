import { ArchiveOverviewClient } from "@/components/archive/ArchiveOverviewClient";
import { getPostsWithTags } from "@/lib/getPostsWithMeta";

export const revalidate = 60;

export default async function ArchiveOverviewPage() {
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

  return (
    <ArchiveOverviewClient
      posts={{
        rueckblicke,
        updates,
        vorhersagen,
        biowetter,
        presseschau,
        privates,
      }}
    />
  );
}
