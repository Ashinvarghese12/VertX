export default function Profile() {
    return (
        <>
            <div className="xsm:flex hidden justify-between border-b-[1px] border-[#1D1D1D] h-[50px]">
                <div className="flex text-[16px] font-[600] ">
                    <span className="px-[23px] py-[12.39px] text-white  border-e-[1px] border-[#1D1D1D]">
                        <p>Overview</p>
                    </span>
                    <span className="px-[23px] py-[12.39px] text-[#555555]  border-e-[1px] border-[#1D1D1D]">
                        <p>Portfolio</p>
                    </span>
                    <span className="px-[23px] py-[12.39px] text-[#555555]  border-e-[1px] border-[#1D1D1D]">
                        <p>Experience</p>
                    </span>
                    <span className="px-[23px] py-[12.39px] text-[#555555]  border-e-[1px] border-[#1D1D1D]">
                        <p>Media</p>
                    </span>
                </div>
                <div className="px-[41px] py-[12.39px] text-white  border-s-[1px] border-[#1D1D1D]">
                    <p>More</p>
                </div>
            </div>
            <div className="ps-[23px] msx:ps-[60.33px] pe-[22px] msx:pe-[73.49px] pt-[34.8px] xsm:pb-[74.43px] pb-[22px] bg-[#080808] xsm:h-[calc(100vh-100px)] smx:h-[calc(100vh-205px)] h-[calc(100vh-185px)] overflow-y-auto">
                <p className="text-[28px] font-[800] text-white pb-[24.81px]">Overview</p>
                <div className="flex flex-col">
                    <div className="msx:block hidden bg-black rounded-lg min-w-[430px] h-[198.48px] mb-[14.89px] border-[1px] border-[#272727]">
                        <div className="flex ">
                            <div className="pt-[45.13px] pb-[33.35px] ps-[44.67px] pe-[33px]">
                                <img src="./images/person.svg" alt="person" className="h-[120px] w-[120px]" />
                            </div>
                            <div className="flex flex-col pt-[28.13px] pb-[29.05px]">
                                <span className="flex gap-[150px]">
                                    <p className="text-[24px] font-[700] text-white">Mr. A</p>
                                    <img src="./images/TwitterBadge.svg" alt="badge" className="h-[20px] w-[20px]" />
                                </span>
                                <span className="flex gap-1 pb-[13.12px]">
                                    <p className="text-[12px] font-[500] text-white">Co-Founder & CEO @Vertx</p>
                                    <div className="flex items-center  bg-white w-[11px] h-[11px] rounded">
                                        <img src="./images/Group 7.svg" alt="logoBadge" className="h-[7.99px] w-[7.99px]" />
                                    </div>
                                </span>
                                <span className="bg-white rounded-[2px] px-[4.29px] pt-[1px] pb-[2px] w-[72.4px] ">
                                    <p className="text-[8px] font-[500] text-black">Entrepreneur</p>
                                </span>
                                <div className="flex gap-2 pt-[32.11px]">
                                    <img src="./images/Rectangle 26.svg" alt="logoBadge" className="h-[30px] w-[30px]" />
                                    <img src="./images/twitter-logo-2 1.svg" alt="logoBadge" className="h-[31px] w-[31px]" />
                                    <img src="./images/gmail.svg" alt="logoBadge" className="h-[30px] w-[30px]" />
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* mobile responsive */}

                    <div className="msx:hidden block bg-black rounded-lg  h-[270px] mb-[10px] border-[1px] border-[#272727]">
                        <div className="flex flex-col">
                            <div className="pt-[19px] pb-[13.93px] pe-[30px]">
                                <img src="./images/person.svg" alt="person" className="h-[135px] w-[135px]" />
                            </div>
                            <div className="flex flex-col ps-[22px]">
                                <span className="flex gap-[120px] ">
                                    <p className="text-[24px] font-[700] text-white">Mr. ABC</p>
                                    <img src="./images/TwitterBadge.svg" alt="badge" className="h-[20px] w-[20px]" />
                                </span>
                                <span className="flex gap-1 pb-[13.12px]">
                                    <p className="text-[12px] font-[500] text-white">Co-Founder & CEO @Vertx</p>
                                    <div className="flex items-center  bg-white w-[11px] h-[11px] rounded">
                                        <img src="./images/Group 7.svg" alt="logoBadge" className="h-[7.99px] w-[7.99px]" />
                                    </div>
                                </span>
                                <div className="flex justify-between">
                                    <span className="flex items-center bg-white rounded-[2px] px-[4.29px] w-[72.4px] ">
                                        <p className="text-[8px] font-[500] text-black">Entrepreneur</p>
                                    </span>
                                    <div className="flex gap-2 pe-[50px]">
                                        <img src="./images/Rectangle 26.svg" alt="logoBadge" className="h-[18px] w-[18px]" />
                                        <img src="./images/twitter-logo-2 1.svg" alt="logoBadge" className="h-[18px] w-[18px]" />
                                        <img src="./images/gmail.svg" alt="logoBadge" className="h-[18px] w-[18px]" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* mobile responsive */}


                    <div className="flex flex-wrap gap-4">
                        <div className="bg-black px-[22px] msx:ps-[27.42px] msx:pe-[28.52px] pt-[17.86px] pb-[84.52px] rounded-lg text-white flex-1 smx:min-w-[430px] h-[347.34px] border-[1px] border-[#272727]">
                            <h3 className="text-[18px] font-[800] text-white">Founded Companies</h3>
                            <div className="text-[64px] font-[700] text-white pt-[10.1px] pb-[15.07px]">02</div>

                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center bg-white w-8 h-8 rounded">
                                            <img src="./images/Group 7.svg" alt="logoBadge" className="h-[18.72px] w-[18.72px]" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-[8.78px]">
                                                <span className="text-[14px] font-[700] text-white">Vertx</span>
                                                <span className="bg-[#579560] px-[5.48px] py-[1px] text-[8px] font-[500] rounded-[2px] text-[#04470B]">CEO</span>
                                            </div>
                                            <div className="text-[10px] font-[400] text-white pt-[3.97px]">Founded in 2025, in <span className="text-[10px] font-[600]">Fintech</span>.</div>
                                        </div>
                                    </div>
                                    <button className=" text-[8px] font-[500] text-white whitespace-nowrap msx:pb-0 pb-7">View Profile</button>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white w-8 h-8 rounded flex items-center justify-center text-black"></div>
                                        <div>
                                            <div className="flex items-center gap-[4.78px]">
                                                <span className="msx:block hidden text-[14px] font-[700] text-white">Company</span>
                                                <span className="msx:hidden block text-[14px] font-[700] text-white">Comp 1</span>
                                                <span className="bg-[#B1BDEB] px-[5.48px] py-[1px] text-[8px] font-[500] rounded-[2px] text-[#10074F]">PROPRIETOR</span>
                                            </div>
                                            <div className="msx:block hidden text-[10px] font-[500] text-white">Details/Information<br />like acquired text/m&a</div>
                                            <div className="msx:hidden block text-[10px] font-[500] text-white">Founded in 2023. Acquired <br />by abc. in <span className="text-[10px] font-[600] text-white">QuickCommerce</span>.</div>
                                        </div>
                                    </div>
                                    <button className=" text-[8px] font-[500] text-white whitespace-nowrap msx:pb-0 pb-10">View Profile</button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black ps-[27.42px] pe-[28.52px] pt-[17.86px] pb-[70.46px] rounded-lg text-white flex-1 smx:min-w-[430px] h-[347.34px] border-[1px] border-[#272727]">
                            <h3 className="text-[18px] font-[800] text-white">Experience</h3>
                            <div className="text-[64px] font-[700] text-white pt-[10.1px] pb-[16.80px]">03</div>

                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white w-[32.91px] h-[29.77px] rounded-[2px]"></div>
                                        <span className="text-[14px] font-[700] text-white">Company 1</span>
                                    </div>
                                    <button className="text-[8px] font-[500] text-white">View Profile</button>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white w-[32.91px] h-[29.77px] rounded-[2px]"></div>
                                        <span className="text-[14px] font-[700] text-white">Company 2</span>
                                    </div>
                                    <button className="text-[8px] font-[500] text-white">View Profile</button>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white w-[32.91px] h-[29.77px] rounded-[2px]"></div>
                                        <span className="text-[14px] font-[700] text-white">Company 3</span>
                                    </div>
                                    <button className="text-[8px] font-[500] text-white">View Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}