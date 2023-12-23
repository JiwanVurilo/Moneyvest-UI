import Card from "./components/UI/Card";
import LeftBar from "./components/UI/Leftbar";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <>
      <div className="flex justify-between overflow-hidden">
        <LeftBar />
        <div className="flex flex-[5] flex-col">
          <Navbar />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
