import React from "react";

function Home() {
	return (
		<>
			<div className="mobile md:hidden px-5">
				<div className="text-3xl inline-flex font-semibold pt-4 pb-10">
					Lorem ipsum dolor sit amet consectetur.
				</div>
				<div>
					<img className="flex mx-auto" src="Header.jpg" alt="" />
				</div>
				<div className=" text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
					deserunt laudantium nisi veniam perferendis quasi, placeat magnam
					dolorem nesciunt, eveniet aliquid.
				</div>
				<div className="my-3">
					<button className=" border border-black bg-black text-white py-3 w-full rounded-xl">
						Book a consulation
					</button>
				</div>
			</div>
			<div className="desktop hidden md:block px-24 py-20 ">
				<div className="flex">
					<div className="w-1/2 lg:w-[531px] flex flex-col md:space-y-3 lg:space-y-7 justify-between lg:mx-auto">
						<div className=" text-2xl lg:text-6xl font-semibold ">
							Lorem ipsum dolor sit amet consectetur.
						</div>
						<div className="lg:text-2xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
							deserunt laudantium nisi veniam perferendis quasi, placeat magnam
							dolorem nesciunt, eveniet aliquid.
						</div>
						<div className="">
							<button className=" border border-black bg-black text-white md:px-4 md:py-3 lg:px-8 lg:py-5 rounded-xl">
								Book a consulation
							</button>
						</div>
					</div>
					<div className="w-1/2 flex justify-center">
						<img src="Header.jpg" alt="" />
					</div>
				</div>
			</div>
            <div className="flex items-center px-5 md:px-24 flex-wrap justify-between gap-4 md:space-y-0 md:gap-6 lg:gap-3 mx-auto ">
                <div className=" w-28 md:w-32"><img src="Company logo.jpg" alt="" /></div>
                <div className=" w-28 md:w-32"><img src="Company logo (1).jpg" alt="" /></div>
                <div className=" w-28 md:w-32"><img src="Company logo (2).jpg" alt="" /></div>
                <div className=" w-28 md:w-32"><img src="Company logo (3).jpg" alt="" /></div>
                <div className=" w-28 md:w-32"><img src="Company logo (4).jpg" alt="" /></div>
                <div className=" w-28 md:w-32"><img src="Company logo (5).jpg" alt="" /></div>
            </div>
		</>
	);
}

export default Home;
