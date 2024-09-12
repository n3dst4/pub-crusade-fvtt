import React from "react";

interface PCSheetProps {
  actor: Actor;
  foundryApplication: Application;
}

export const PCSheet: React.FC<PCSheetProps> = ({
  actor,
  foundryApplication,
}) => {
  return <div>PC Sheet</div>;
};

PCSheet.displayName = "PCSheet";
