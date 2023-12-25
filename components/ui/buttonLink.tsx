import Link from "next/link";
import React from "react";

const ButtonLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={to}
      className="inline-flex items-center px-4 mr-4 text-center rounded-md bg-slate-200 hover:bg-slate-300"
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
