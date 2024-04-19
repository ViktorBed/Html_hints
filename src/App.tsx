import React from 'react';

import "@/Components/styles.css"
import {Navbar} from "./Components/Navbar";
import {Hero} from "@/Components/Hero";
import {Clients} from "@/Components/Clients";
import {Community} from "@/Components/Community";
import {Unlock} from "@/Components/Unlock";
import {Achivments} from "@/Components/Achivments";
import {Lock} from "@/Components/Lock";
import {Customer} from "@/Components/Customer";

function App() {
  return (
      <>
        <Navbar/>
        <Hero/>
        <Clients/>
        <Community/>
        <Unlock/>
        <Achivments/>
        <Lock/>
        <Customer/>
      </>
  );
}

export default App;
