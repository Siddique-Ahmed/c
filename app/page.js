import Header from "@/components/Header";
import TopicList from "@/components/TopicList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <TopicList />
    </div>
  );
}
