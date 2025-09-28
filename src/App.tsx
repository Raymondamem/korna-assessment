import { useState } from "react";
import Header from "./components/Header";
import AsideComponent from "./components/AsideComponent";
import TabHeader from "./components/TabComponents/TabHeader";
import TabFirstScreen from "./components/TabComponents/TabFirstScreen";
import TabSecondScreen from "./components/TabComponents/TabSecondScreen";

function App() {
  const [tab, setTab] = useState(true);

  return (
    <div className="w-full min-h-fit">
      <Header />
      <div className="w-full min-h-screen grid grid-cols-[1fr_350px] grid-rows-1">
        <main className="w-4/5 mx-auto h-fit px-18_ py-8">
          <TabHeader tab={tab} setTab={setTab} />
          {tab ? <TabFirstScreen /> : <TabSecondScreen />}
        </main>
        <aside className="w-full h-fit py-8 !sticky !top-0 border-l-1 border-l-gray-100">
          <AsideComponent />
        </aside>
      </div>
    </div>
  );
}

export default App;
