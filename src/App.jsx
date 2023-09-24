import "./App.css";
import AvatarImage from "./assets/images/image-jeremy.png";

function App() {
	return (
		<div className="bg-[#0D1323] px-6 py-16 min-h-screen">
			<div className="bg-[#1D204B] rounded-xl overflow-hidden">
				<div className="bg-[#5746EA] rounded-xl flex p-8 gap-4 items-center justify-center">
					<img
						src={AvatarImage}
						alt=""
						className="h-20 w-20 border-4 rounded-full"
					/>
					<div className="text-white opacity-80 ">
						<div>Report for</div>
						<div className="text-[32px]">Jeremy Robson</div>
					</div>
				</div>
				<div className="flex justify-around py-6 text-white opacity-50">
					<div>Daily</div>
					<div>Weekly</div>
					<div>Monthly</div>
				</div>
			</div>
		</div>
	);
}

export default App;
