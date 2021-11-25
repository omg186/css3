import GradientButton from "../../component/GradientButton/Index";
import LoadingFirst from "../../component/LoadingFirst/Index";

const HomePage = () => {
  return (
    <div className={"grid grid-cols-4 gap-20 p-20"}>
      <div className="rounded-2xl bg-pink-300 bg-opacity-50 flex justify-center items-center">
        <LoadingFirst></LoadingFirst>
      </div>
      <div className="rounded-2xl bg-gray-400 bg-opacity-60 flex justify-center items-center">
        <GradientButton></GradientButton>
      </div>
    </div>
  );
};

export default HomePage;
