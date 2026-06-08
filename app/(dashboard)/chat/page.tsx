"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { BoundedBox } from "@/components/BoundedBox";
import { Chat as ChatIcon } from "@phosphor-icons/react";
import { Form, FormControl, FormField, FormItem } from "@/components/Form";
import { Input } from "@/components/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import OpenAI from "openai";
import React from "react";
import { ThreeDotsBounce } from "@/components/animations/ThreeDotsBounce";
import { MessageContainer } from "@/components/MessageContainer";
import { Loader } from "@/components/animations/Loader";
import { useProModal } from "@/hooks/useProModal";
import toast from "react-hot-toast";

const STORAGE_KEY = "sentientai_chat_history";

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = React.useState<
    OpenAI.Chat.Completions.ChatCompletionMessageParam[]
  >([]);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const proModal = useProModal();
  const hasHydrated = React.useRef(false);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setMessages(JSON.parse(saved));
    } catch {}
    hasHydrated.current = true;
  }, []);

  React.useEffect(() => {
    if (!hasHydrated.current) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([]);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: OpenAI.Chat.Completions.ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/chat", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Sorry! Something went wrong on our end!");
      }
    } finally {
      router.refresh();
    }

    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    }
  };

  return (
    <BoundedBox yPadding="none" className="pt-10 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ChatIcon className="w-10 h-10" />
          <p className="font-ysa font-semibold text-24">Chat With SentientAI</p>
        </div>
        {messages.length > 0 && (
          <button
            onClick={clearHistory}
            className="font-noto text-14 text-gray-400 hover:text-matteBlack transition duration-200"
          >
            Clear history
          </button>
        )}
      </div>

      <div className="mt-10 overflow-y-scroll scrollbar-hide" ref={scrollRef}>
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-5 pb-4">
            {messages.length === 0 && !isLoading && (
              <>
                <p className="font-noto text-20 font-semibold tracking-wide text-matteBlack">
                  Start a Conversation
                </p>
                <ThreeDotsBounce />
              </>
            )}
          </div>
        )}
        {isLoading && <Loader />}
        <div className="flex flex-col gap-y-4">
          {messages.map((message, index) => (
            <MessageContainer
              key={index}
              message={typeof message.content === "string" ? message.content : null}
              role={message.role as "user" | "assistant" | "system" | "function"}
            />
          ))}
        </div>
      </div>

      <div className="mt-auto mb-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-4 mt-6"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-full lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent pl-2 placeholder:font-noto placeholder:text-14"
                      disabled={isLoading}
                      placeholder="What is 10 times 10?"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <button
              className="col-span-full lg:col-span-2 px-6 py-1.5 bg-matteBlack text-creme hover:bg-creme hover:text-matteBlack duration-200 ease-in-out transition rounded-lg font-ysa text-18"
              disabled={isLoading}
            >
              Create
            </button>
          </form>
        </Form>
      </div>
    </BoundedBox>
  );
}
