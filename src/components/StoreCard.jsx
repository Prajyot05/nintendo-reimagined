// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Link from "next/link";

export function StoreCard({num, text}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#F0F1F1] bg-opacity-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[30rem] h-auto rounded-[30px] p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={`/assets/store_switch_${num}.png`}
            // height="1000"
            // width="1000"
            // className={`${num == 3 ? 'h-50' : 'h-60'} w-full object-cover rounded-xl`}
            className="h-60 w-full object-contain rounded-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center flex-col items-center mt-20">
          <CardItem
            translateZ={20}
            // as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 text-[1.5rem] font-semibold text-black"
          >
            {text}
          </CardItem>
          {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
  );
}