import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";
import { unstable_noStore } from "next/cache";

// disabling cache
// export const revalidate = 5; // Revalidate the page every 5 seconds

// this disables route cache as well
// export const dynamic = "force-dynamic";

const MessagesPage = async () => {
  // disabling cache
  // unstable_noStore();
  // const response = await fetch("http://localhost:8080/messages", {
  //   // next: {
  //   //   revalidate: 5, // Revalidate the page every 60 seconds
  //   // },
  //   next: {
  //     tags: ["msg"],
  //   },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
};

export default MessagesPage;
