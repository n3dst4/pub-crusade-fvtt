import React, { useContext } from "react";

import { ThemeContext } from "../copiedFromInvestigator/themes/ThemeContext";

interface PanelProps extends React.PropsWithChildren {
  className?: string;
}

export const Panel = ({ children, className }: PanelProps) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={className}
      css={{
        position: "relative",
        border: "1px solid #0007",
        padding: "0.5em",
        backgroundColor: theme.colors.backgroundPrimary,
      }}
    >
      {children}
    </div>
  );
};

Panel.displayName = "Panel";
