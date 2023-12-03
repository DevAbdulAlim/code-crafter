import { ReactNode } from "react";

export type ButtonType = {
    to: string;
    children: ReactNode;
    disabled?: boolean;
}