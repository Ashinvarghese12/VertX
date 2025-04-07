import React from 'react';

const EmptyScreen = ({selectedItem}) => {
    return (
        <>
            <div className="xsm:flex hidden justify-between border-b-[1px] border-[#1D1D1D] h-[50px]">
                <div className="flex text-[16px] font-[600] ">
                    <span className="px-[23px] py-[12.39px] text-white  border-e-[1px] border-[#1D1D1D]">
                        <p>{selectedItem}</p>
                    </span>
                </div>
                <div className="px-[41px] py-[12.39px] text-white  border-s-[1px] border-[#1D1D1D]">
                    <p>More</p>
                </div>
            </div><div className="flex flex-col justify-center  items-center xsm:h-[calc(100vh-100px)] smx:h-[calc(100vh-205px)] h-[calc(100vh-185px)]">
                <img src="./images/clipart1039237.png" alt="logo" className="h-[250px] w-[250px] bg-transparent" />
                <p className="text-white text-[24px] font-[700] text-center px-[10px] pt-[5px]">No activity to report!!</p>
                <p className="text-[#555555] text-[14px] font-[700] text-center px-[10px] pt-[5px]">Move to ANALYTICS or PROFILE section to view data</p>
            </div>
        </>
    );
};

export default EmptyScreen;
