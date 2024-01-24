import React from "react";

export default function Card({children, primary}: { children: React.ReactNode, primary?: boolean }) {
    return (
        <div className={primary ? "colorfulCard primaryColor" : "colorfulCard"}>
            {children}
        </div>
    )
}