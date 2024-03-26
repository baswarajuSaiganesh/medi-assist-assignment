import Header from "./components/Header";
import BecomeACCAIn18Months from "./components/BecomeACCAIn18Months";
import WhyChooseUs from "./components/WhyChooseUs";
import ACCAEligibility from "./components/ACCAEligibility";
import WhatWillWouLearnInACCA from "./components/WhatWillYouLearnInACCA";
import PlacementAssistance from "./components/PlacementAssistance";
import KickOffYourACCAPrepJourneyWithIndigoLearn from "./components/KickOffYourACCAPrepJourneyWithIndigoLearn";

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => (
  <div>
    <Header />
    <BecomeACCAIn18Months />
    <WhyChooseUs />
    <ACCAEligibility />
    <WhatWillWouLearnInACCA />
    <PlacementAssistance />
    <KickOffYourACCAPrepJourneyWithIndigoLearn />
  </div>
);

export default App;
