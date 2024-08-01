import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

import Confetti from "react-confetti";
import HomeIndex from "../components/home";

function HomePage() {
  console.log("home page")
  const { auth } = useAuth();

  const [party, setParty] = useState(false);
  function celebrate() {
    setParty(!party);
  }

  return (
    <main className="home-page">
      {auth && party && <Confetti className="celebrate-canvas" />}
      <HomeIndex.HomeIntro />
      <div className="home-links">
        {!auth ? (
          <HomeIndex.HomeLinks />
        ) : (
          <HomeIndex.PartyBtn party={party} celebrate={celebrate} />
        )}
      </div>
    </main>
  );
}
export default HomePage;
