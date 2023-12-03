import { MouseEvent, ReactNode } from "react";

export type ButtonType = {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
    disabled?: boolean;
}