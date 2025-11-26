import * as React from "react";

interface MenuToggleIconProps extends React.SVGProps<SVGSVGElement> {
    open?: boolean;
    duration?: number;
}

export const MenuToggleIcon: React.FC<MenuToggleIconProps> = ({
    open = false,
    duration = 300,
    ...props
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4 6H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                    transformOrigin: "center",
                    transition: `all ${duration}ms ease`,
                    transform: open ? "rotate(45deg) translateY(6px)" : "rotate(0deg)",
                }}
            />
            <path
                d="M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                    transition: `all ${duration}ms ease`,
                    opacity: open ? 0 : 1,
                }}
            />
            <path
                d="M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                    transformOrigin: "center",
                    transition: `all ${duration}ms ease`,
                    transform: open ? "rotate(-45deg) translateY(-6px)" : "rotate(0deg)",
                }}
            />
        </svg>
    );
};
