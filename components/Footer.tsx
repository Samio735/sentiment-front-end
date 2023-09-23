import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <div className="flex items-center justify-center pb-10" id="footer">
      <div className="flex items-center w-1/2 px-5">
        <div className="w-[80%] flex flex-col gap-4">
          <span className="contact">contact us</span>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-4">
              <span className="li-footer flex items-center">
                <AiOutlineMessage /> cdscds cdscds
              </span>
              <span className="li-footer flex items-center">
                <BsTelephone />
                +213 540 757 85
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="li-footer flex items-center">
                <AiOutlineMail />
                s_zegtouf@estin.dz
              </span>
              <span className="li-footer flex items-center">
                <MdOutlineLocationOn /> amizour, bejaiafd{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[2px] h-[120px] bg-white"></div>
      <div className="flex items-center w-1/2 flex-col gap-4">
        <span className="bytecraft">© Bytecraft team</span>
        <span className="hackwave">Hackwave Hackathon / 2023</span>
        <span className="madeByLove">
          Made by love and 9 cheeses family packs
        </span>
      </div>
    </div>
  );
}
