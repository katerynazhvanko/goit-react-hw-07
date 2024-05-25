import { ThreeCircles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#48cae4"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
