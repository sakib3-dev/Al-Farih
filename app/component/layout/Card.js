import React from "react";
import Link from "next/link";

export default function Card({ filteredItems }) {
  return (
    <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 items-center justify-center shadow-sm">
      {filteredItems.slice(0, 10).map((item) => (
        <div key={item.id} className="mt-10 group  relative overflow-hidden hover:overflow-visible hover:shadow-DropDownShadow">
          <Link href={`/${item.id}`}>
            <img src={item.img} alt="product" />
          </Link>
          <div className="mt-4 px-4 text-center">
            <h3 className="text-base font-semibold mb-2">{item.name}</h3>

            <div className="flex justify-between">
              <p className="font-semibold text-primary">${item.price}</p>
            </div>
          </div>

          <div className="text-center bg-primary absolute shadow-DropDownShadow w-full border border-primary py-3 ">
            <Link href={""}>ADD TO CARD</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
