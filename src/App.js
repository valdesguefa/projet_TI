import React from "react";
// import MyMap from "./components/MyMap";

// function App() {
//   return <MyMap />;
// }

// export default App;

import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

// pages
import Admin from "./pages/Admin";
import Layout from "./components/Layout";
import MyMap from "./components/MyMap";
import Landing from "./pages/Landing";
import DrawerContextProvider from "./contexts/drawerContext";
import DefenceContextProvider from "./contexts/defenceContext";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* <DrawerContextProvider> */}
				<DefenceContextProvider>
					<Routes>
						{/* <Route path="/" element={<MyMap />} />
          <Route path="/" element={<Landing />} /> */}
						<Route path="/" element={<Landing />} />

						<Route
							path="/interface"
							element={
								<Layout>
									<Admin />
								</Layout>
							}
						/>
					</Routes>
				</DefenceContextProvider>
				{/* </DrawerContextProvider> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
