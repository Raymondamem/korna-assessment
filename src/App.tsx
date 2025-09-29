import { useState } from "react";
import Header from "./components/Header";
import AsideComponent from "./components/AsideComponents/AsideComponent";
import TabHeader from "./components/TabComponents/TabHeader";
import TabFirstScreen from "./components/TabComponents/TabFirstScreen";
import TabSecondScreen from "./components/TabComponents/TabSecondScreen";

function App() {
  const [tab, setTab] = useState(true);

  return (
    <div className="w-full min-h-fit">
      <Header />
      <div className="w-full min-h-screen lg:grid lg:grid-cols-[1fr_350px] lg:grid-rows-1 xl:w-[1200px] xl:mx-auto xl:gap-8 max-xl:block max-xl:px-4">
        <main className="w-4/5 mx-auto h-fit pb-8">
          <TabHeader tab={tab} setTab={setTab} />
          {tab ? <TabFirstScreen /> : <TabSecondScreen />}
        </main>
        <aside className="w-full h-fit py-8 !sticky !top-0 border-l-1 border-l-gray-100 max-lg:hidden">
          <AsideComponent />
        </aside>
      </div>
    </div>
  );
}

export default App;
