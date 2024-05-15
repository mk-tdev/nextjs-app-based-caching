import Messages from "@/components/messages";

const MessagesPage = async () => {
  const response = await fetch("http://localhost:8080/messages", {
    next: {
      revalidate: 5, // Revalidate the page every 60 seconds
    },
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
};

export default MessagesPage;