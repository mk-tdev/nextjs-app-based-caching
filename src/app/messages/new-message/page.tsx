import { redirect } from "next/navigation";

import { addMessage } from "@/lib/messages";
import FormActionButtons from "@/components/form-action";
import { revalidatePath, revalidateTag } from "next/cache";

const NewMessage = ({ createPost }: any) => {
  const createMessage = async (formData: any) => {
    "use server";

    const message = formData.get("message");
    console.log("Creating new message:", message);
    addMessage(message);
    // revalidatePath("/messages", "layout");
    revalidateTag("msg");
    redirect("/messages");
  };

  return (
    <div className="p-5">
      <form className="py-2" action={createMessage}>
        <div className="my-3 flex flex-col ">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            name="message"
            required
            className="outline-none border-4"
          />
        </div>

        <div className="flex justify-end">
          <FormActionButtons />
        </div>
      </form>
    </div>
  );
};

export default NewMessage;
