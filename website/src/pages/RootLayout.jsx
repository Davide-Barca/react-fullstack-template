import { Outlet } from "react-router-dom"

// Components
// import MainNavigation from "../components/MainNavigation"
// import FooterNavigation from "../components/FooterNavigation"

export default function RootLayout(){
	return (
		<>
			{/* <MainNavigation /> */}
			<main>
				<Outlet />
			</main>
			{/* <FooterNavigation /> */}
		</>
	)
}