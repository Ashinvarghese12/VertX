import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Analytics from "./Analytics";
import { AiOutlinePlus } from "react-icons/ai";
import EmptyScreen from "./EmptyScreen";

export default function NavBar() {

    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Profile");

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000); // Simulated delay
        return () => clearTimeout(timer);
    }, [selectedItem]);

    return (
        <>
            <div className="xsm:flex hidden justify-between h-[50px] w-full border-b-2 border-[#1D1D1D]">
                <div className="flex">
                    <span className="ps-[10px] pe-[12px] pt-[8px] pb-[12px] w-[50px]">
                        <img src="./images/Group 13.svg" alt="logo" className="h-[30px] w-[30px]" />
                    </span>
                    <span className="ps-[23px] pe-[57px] pt-[13px] pb-[14px] border-e-[1px] border-[#1D1D1D]">
                        <p className="text-[18px] font-[700] text-[#FFFFFF]">Vertxlabs, Inc</p>
                    </span>
                    <span className="ps-[23px] py-[14px]">
                        <p className="text-[16px] font-[600] text-[#FFFFFF]">{selectedItem}</p>
                    </span>
                </div>
                <div className="flex">
                    <span className="ps-[30px] pe-[31px] pt-[14px] pb-[18px] border-x-[1px] border-[#1D1D1D]">
                        <p className="text-[16px] font-[600] text-[#FFFFFF]">Activity</p>
                    </span>
                    <span className="ps-[30px] pe-[32px] py-[14px]">
                        <p className="text-[16px] font-[600] text-[#FFFFFF]">Log out</p>
                    </span>
                </div>
            </div>


            {/* mobile responsive */}

            <div className="flex flex-col xsm:hidden smx:h-[140px] h-[120px] smx:pt-[14px] pt-[10px] px-[11px] border-b-[1px] border-[#1D1D1D]">
                <div className="flex justify-between">
                    <div>
                        <img src="./images/profile.avif" alt="logo" className="h-[30px] w-[30px] rounded-full" />
                    </div>
                    <div>
                        <img src="./images/Vertx New SVG 1 1 1.svg" alt="Vertx Logo" className="smx:h-[40px] smx:w-[40px] h-[30px] w-[30px]" />
                    </div>
                    <div>
                        <img src="./images/Vector.svg" alt="Vector Icon" className="smx:h-[35px] smx:w-[14px] h-[30px] w-[7px]" />
                    </div>
                </div>
                {selectedItem === "Profile" ? (
                    <div className="flex justify-between smx:text-[16px] text-[12px] font-[600] smx:px-[29px] px-[20px] pt-[48.77px]">
                        <span className="text-white underline decoration-2 underline-offset-[10px]">
                            <p>Overview</p>
                        </span>
                        <span className="text-[#555555]">
                            <p>Portfolio</p>
                        </span>
                        <span className="text-[#555555]">
                            <p>Experience</p>
                        </span>
                        <span className="text-[#555555]">
                            <p>Media</p>
                        </span>
                    </div>
                ) : selectedItem === "Analytics" ? (
                    <div className="flex justify-between smx:text-[16px] text-[12px] font-[600] smx:px-[29px] px-[20px] pt-[48.77px]">
                        <span className="text-white underline decoration-2 underline-offset-[10px]">
                            <p>Overview</p>
                        </span>
                        <span className="text-[#555555]">
                            <p>Reports</p>
                        </span>
                        <span className="text-[#555555]">
                            <p>Demographics</p>
                        </span>
                    </div>
                ): (
                    <div className="flex justify-start smx:text-[16px] text-[12px] font-[600] smx:px-[29px] px-[20px] pt-[48.77px]">
                        <span className="text-white underline decoration-2 underline-offset-[10px]">
                            <p>{selectedItem}</p>
                        </span>
                    </div>
                )}
            </div>

            {/* mobile responsive */}


            <div className="flex xsm:flex-row flex-col w-full">
                {selectedItem === "Profile" ?
                    (
                        <div className="xsm:flex hidden flex-col h-[calc(100vh-50px)] w-[50px] min-w-[50px] border-e-[1px] border-[#1D1D1D]">
                            <span className="px-[10px] pt-[8px] pb-[12px] bg-[#3A3030] border-b-[1px] border-[#1D1D1D] ">
                                <div className="relative h-[30px] w-[30px] flex items-center justify-center">
                                    <img src="./images/profile.avif" alt="logo" className="h-[30px] w-[30px] rounded-full" />
                                    <div className="absolute bottom-0 right-0 h-[8px] w-[8px] bg-[#01754F] rounded-full"></div>
                                </div>
                            </span>
                            <span className="px-[10px] pt-[8px] pb-[12px] border-b-[1px] border-[#1D1D1D]">
                                <div className="relative h-[30px] w-[30px] flex items-center justify-center">
                                    <div className="h-[30px] w-[30px] bg-white border border-white rounded-full"></div>
                                    <div className="absolute bottom-0 right-0 h-[8px] w-[8px] bg-[#8B3A08] rounded-full"></div>
                                </div>
                            </span>
                            <span className="px-[10px] pt-[8px] pb-[12px] border-b-[1px] border-[#1D1D1D]">
                                <div className="relative h-[30px] w-[30px] flex items-center justify-center">
                                    <div className="h-[30px] w-[30px] bg-white border border-white rounded-full"></div>
                                    <div className="absolute bottom-0 right-0 h-[8px] w-[8px] bg-[#01754F] rounded-full"></div>
                                </div>
                            </span>
                        </div>
                    ) : (
                        <div className="xsm:flex hidden flex-col justify-between h-[calc(100vh-50px)] w-[50px] min-w-[50px] border-e-[1px] border-[#1D1D1D]">
                            <span className="px-[10px] pt-[8px] pb-[12px] border-b-[1px] border-[#1D1D1D] ">
                                <div className="relative h-[30px] w-[30px] flex items-center justify-center">
                                    <img src="./images/profile.avif" alt="logo" className="h-[30px] w-[30px] rounded-full" />
                                    <div className="absolute bottom-0 right-0 h-[8px] w-[8px] bg-[#01754F] rounded-full"></div>
                                </div>
                            </span>
                            <span className="px-[10px] pt-[8px] pb-[12px] border-t-[1px] border-[#1D1D1D]">
                                <div className="relative h-[30px] w-[30px] flex items-center justify-center">
                                    <AiOutlinePlus size={20} className="text-white" />
                                </div>
                            </span>
                        </div>
                    )}
                <div className="xsm:flex hidden flex-col gap-y-[30px] ps-[23px] pt-[18px] pe-[87px] w-[199px] min-w-[199px] border-e-[1px] border-[#1D1D1D]">
                    {["Dashboard", "Analytics", "Connect", "Dealroom", "Profile", "Settings"].map((item) => (
                        <p
                            key={item}
                            className={`text-[16px] font-[700] cursor-pointer ${selectedItem === item ? "text-[#FFFFFF]" : "text-[#555555]"
                                }`}
                            onClick={() => handleItemClick(item)}
                        >
                            {item}
                        </p>
                    ))}
                </div>

                {selectedItem === "Profile" && (
                    <div className="flex-1 overflow-x-auto ">
                        {loading ? (
                            <div className="xsm:h-[calc(100vh-100px)] smx:h-[calc(100vh-205px)] h-[calc(100vh-185px)] flex justify-center items-center">
                                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-500 "></div>
                            </div>
                        ) : (
                            <Profile />
                        )}
                    </div>
                )}
                {selectedItem === "Analytics" && (
                    <div className="flex-1 overflow-x-auto ">
                        {loading ? (
                            <div className="xsm:h-[calc(100vh-100px)] smx:h-[calc(100vh-205px)] h-[calc(100vh-185px)] flex justify-center items-center">
                                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-500 "></div>
                            </div>
                        ) : (
                            <Analytics />
                        )}
                    </div>
                )}

                {(selectedItem === "Dashboard" || selectedItem === "Connect" || selectedItem === "Dealroom" || selectedItem === "Settings") && (
                    <div className="flex-1 overflow-x-auto ">
                        {loading ? (
                            <div className="xsm:h-[calc(100vh-100px)] smx:h-[calc(100vh-205px)] h-[calc(100vh-185px)] flex justify-center items-center">
                                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-500 "></div>
                            </div>
                        ) : (
                            <EmptyScreen selectedItem={selectedItem}/>
                        )}
                    </div>
                )}


                {/* mobile responsive */}

                <div className="flex xsm:hidden h-[65px] px-[15px] pt-[13px] pb-[10px]">
                    <div className="flex justify-between text-[#555555] smx:text-[14px] text-[10px] font-[600] w-full">
                    <span className={`flex flex-col gap-1 items-center ${selectedItem === "Dashboard" ? "text-white" : ""}`}
                            onClick={() => handleItemClick("Dashboard")}
                        >
                            <img src="./images/dashboard.svg" className="h-[20px] w-[20px]" />
                            <p>Dashboard</p>
                        </span>
                        <span className={`flex flex-col gap-1 items-center ${selectedItem === "Analytics" ? "text-white" : ""}`}
                            onClick={() => handleItemClick("Analytics")}
                        >
                            <img src="./images/analyic.svg" className="h-[20px] w-[20px]" />
                            <p>Analytics</p>
                        </span>
                        <span className={`flex flex-col gap-1 items-center ${selectedItem === "Profile" ? "text-white" : ""}`}
                            onClick={() => handleItemClick("Profile")}
                        >
                            <img src="./images/dealroom.svg" className="h-[20px] w-[20px]" />
                            <p>Profile</p>
                        </span>
                        <span className={`flex flex-col gap-1 items-center ${selectedItem === "Connect" ? "text-white" : ""}`}
                            onClick={() => handleItemClick("Connect")}
                        >
                            <img src="./images/connect.svg" className="h-[20px] w-[20px]" />
                            <p>Connect</p>
                        </span>
                        <span className={`flex flex-col gap-1 items-center ${selectedItem === "Settings" ? "text-white" : ""}`}
                            onClick={() => handleItemClick("Settings")}
                        >
                            <img src="./images/activity.svg" className="h-[20px] w-[20px]" />
                            <p>Settings</p>
                        </span>
                    </div>
                </div>

                {/* mobile responsive */}


            </div>
        </>
    );
} 