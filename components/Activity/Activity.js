import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineManageSearch } from "react-icons/md";
import { ImPageBreak } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { GoTag } from "react-icons/go";

const Activity = () => {
  return (
     <div className=" m-12 h-screen">
      {/* User profile */}
      <div className="my-14">
        <div className="bg-white w-[374px] h-[126px] rounded-lg shadow-lg px-9 py-4 flex gap-5">
          <div className="w-[76px] h-[76px] overflow-hidden">
            <img
              className="w-[76px] h-[76px]"
              src="/images/profile.png"
              alt=""
            />
          </div>
          <div className="w-[162px] h-[94px]">
            <h2 className="text-lg leading-10 font-semibold">Hi, Roxy</h2>
            <p className="text-lg leading-8">Good Morning</p>
            <p className="text-base">User ID: 000024</p>
          </div>
          <div className=" relative">
            <img
              draggable={false}
              className="w-6 h-6"
              src="/images/pen.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Activity button */}
      <div className="flex items-end justify-between">
        <div>
          <ul className="flex gap-8">
            <li>
              <Link href={"#"}>Activity</Link>
            </li>
            <li>
              <Link href={"#"}>Message</Link>
            </li>
            <li>
              <Link href={"#"}>Account setting</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="w-[209px] h-14 shadow-lg bg-secondary text-white shadow-[ 0px 10px 15px rgba(255, 164, 28, 0.2)] rounded">
            Become a seller
          </button>
        </div>
      </div>
      {/* Activity */}
      <div>
        <div className="relative before:content-normal before:absolute before:w-4 before:h-4 before:border-l before:border-t before:bg-bg before:border-[#9E9E9E]  before:-top-2 before:left-5 before:rotate-45 border-t border-[#9E9E9E] mt-10 pt-16 flex justify-between">
          {/* Activity Menu */}
          <div className="w-[285px] h-[376px] bg-white p-6 rounded-[10px]">
            <ul className="flex flex-col gap-6">
              <li>
                {/* Summary */}
                <Link
                  className="flex items-center gap-3 rounded-[10px] py-3 px-4 bg-blueLight text-blueLight bg-opacity-25 text-md w-[156.99px]"
                  href={"#"}
                >
                  <span>
                    <img src="/icons/summary.svg" alt="" />
                  </span>
                  Summary
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-3 rounded-[10px]   text-grey bg-opacity-25 text-md "
                  href={"#"}
                >
                  <span>
                    <img src="/icons/eye.svg" alt="" />
                  </span>
                  Recently viewed
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-3 rounded-[10px]   text-grey bg-opacity-25 text-md "
                  href={"#"}
                >
                  <span>
                    <img src="/icons/bookmark.svg" alt="" />
                  </span>
                  Saved Sellers
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-3 rounded-[10px]   text-grey bg-opacity-25 text-md "
                  href={"#"}
                >
                  <span>
                    <img src="/icons/heart.svg" alt="" />
                  </span>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-3 rounded-[10px]   text-grey bg-opacity-25 text-md "
                  href={"#"}
                >
                  <span>
                    <img src="/icons/bag.svg" alt="" />
                  </span>
                  Buy Again
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-3 rounded-[10px]   text-grey bg-opacity-25 text-md "
                  href={"#"}
                >
                  <span>
                    <img src="/icons/tag.svg" alt="" />
                  </span>
                  Switch to selling
                </Link>
              </li>
            </ul>
          </div>
          {/* Summary details */}
          <div className="w-[867px]">
            <div className="flex justify-center mb-16">
              <div className="w-80">
                <h2 className="text-lg mb-5 font-medium">
                  Get more out of My ebakx
                </h2>
                <p className="text-[14px] text-center">
                  ebakx's a big place, here is your space to keep an eye on the
                  items that matter most to you.
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-[85px]">
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="flex justify-center">
                    <MdOutlineManageSearch className="text-grey text-2xl"/>
                  </div>
                  <p className="my-8 text-base">
                    Find deals on items just for you
                  </p>
                  <button className="border-2  border-secondary py-[10px] px-4 rounded">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="flex justify-center">
                  <ImPageBreak className="text-grey text-2xl"/>
                  </div>
                  <p className="my-8 text-base">Watch items you want to buy</p>
                  <button className="border-2 border-secondary py-[10px] px-4 rounded">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="flex justify-center">
                  <AiOutlineHeart className="text-grey text-2xl"/>
                  </div>
                  <p className="my-8 text-base">See favorite you want to buy</p>
                  <button className="border-2 border-secondary py-[10px] px-4 rounded">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="flex justify-center">
                  <GoTag className="text-grey text-2xl"/>
                  </div>
                  <p className="my-8 text-base">List item & start selling</p>
                  <button className="border-2 border-secondary py-[10px] px-4 rounded">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
