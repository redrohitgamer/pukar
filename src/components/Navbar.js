import React from "react";

function Navbar() {
	return (
		<>
			<div className="navbar flex justify-between items-center px-5 md:px-24 my-2 md:my-10">
				<div className="logo text-3xl font-bold">Pukar</div>
				<div className="menu hidden md:block ">
					<ul className="flex md:space-x-3 lg:space-x-7 items-center lg:text-xl">
						<li className=" hover:underline underline-offset-4">About us</li>
						<li className=" hover:underline underline-offset-4">Services</li>
						<li className=" hover:underline underline-offset-4">Use cases</li>
						<li className=" hover:underline underline-offset-4">Pricing</li>
						<li className=" hover:underline underline-offset-4">Blog</li>
						<li className=" ">
							<button className=" border border-black md:px-2 lg:px-8 md:py-3 lg:py-5 hover:underline underline-offset-4">
								Request a quote
							</button>
						</li>
					</ul>
				</div>
				<div className="md:hidden ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="19"
						viewBox="0 0 26 19"
						fill="none"
					>
						<path
							d="M1 1.80664H25"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M1 9.80664H25"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M1 17.8066H25"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
			</div>
		</>
	);
}

export default Navbar;
