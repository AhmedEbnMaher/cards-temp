import { LoaingIcon } from "@/app/_components/icons";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center min-h-96">
      <LoaingIcon height={60} width={60} className="text-[#285F9D]" />
    </div>
  );
};

export default Loading;
