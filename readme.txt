nextjs caching
to read more..
https://nextjs.org/docs/app/building-your-application/caching

data cache
- with next revalidate

unstable_noStore
export const revalidate = 5; // Revalidate the page every 5 seconds

this disables route cache as well
export const dynamic = "force-dynamic";

revalidatePath("/messages", "layout");
revalidateTag("msg");

react cache

api and alternate data source caching and revalidation

Request Memoization, Data Cache, Full route cache, Router cache