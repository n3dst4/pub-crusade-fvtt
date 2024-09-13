import React from "react";

interface PanelProps extends React.PropsWithChildren {
  className?: string;
}

export const Panel: React.FC<PanelProps> = ({ children, className }) => {
  return (
    <div
      className={className}
      css={{
        position: "relative",
        border: "1px solid #0007",
        padding: "0.5em",
        backgroundColor: "#fff6",
      }}
    >
      {children}
    </div>
  );
};

Panel.displayName = "Panel";
