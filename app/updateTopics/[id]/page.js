import UpdateTopicsForm from "@/components/UpdateTopicForm";

export default function UpdateTopics({params}) {
  const {id} = params  
  return (
    <div className="bg-gray-100 min-h-screen px-4 py-3 flex items-center justify-center">
      <UpdateTopicsForm id={id} />
    </div>
  );
}
