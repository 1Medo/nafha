import React from "react";

import { switchesSharedStyles } from "@/app/utils/switchesSharedStyles";
import { cn } from "@/lib/utils";

type CheckBoxProps = {
  name: string;
  value: string;
  className?: string;
  id: string;
  checked?: boolean;
  onChange?: (val: string) => void;
}

export default function CheckBox({ name, value, id , checked, onChange}: CheckBoxProps) {
  return (
    <>
      <input
        type="checkbox"
        className="peer hidden"
        id={id}
        checked={checked}
        value={value}
        name={name}
        onChange={() => onChange?.(value)}
      />

      <span
        className={cn(
          switchesSharedStyles.box,
          switchesSharedStyles.states,
          "peer-checked:[&_svg]:opacity-100 rounded"
        )}
      >

        <svg
          className={cn(switchesSharedStyles.checkboxIcon, "mt-[1px]")}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.782715 4.55981L3.2175 7.62231L8.78271 0.622314"
            stroke="#CC702A"
            strokeWidth="2"
          />
        </svg>
      </span>
    </>
  );
}
