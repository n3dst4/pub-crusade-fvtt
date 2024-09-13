import React, { useRef, useState } from "react";

import { RichTextEditor } from "../copiedFromInvestigator/components/inputs/RichTextEditor";
import { CharacterActor } from "../v10Types";

interface NotesProps {
  actor: CharacterActor;
  className?: string;
}

export const Notes: React.FC<NotesProps> = ({ actor, className }) => {
  const [editMode, setEditMode] = useState(false);
  const temp = useRef(actor.system.notes);

  const handleSave = async () => {
    await actor.setNotes(temp.current);
    setEditMode(false);
  };

  const handleClickEdit = () => {
    temp.current = actor.system.notes;
    setEditMode(true);
  };

  const handleChange = async (newValue: string) => {
    temp.current = newValue;
  };

  return (
    <div className={className} css={{ position: "relative" }}>
      {!editMode && (
        <div>
          Notes <a onClick={handleClickEdit}>Edit</a>
        </div>
      )}
      {editMode ? (
        <RichTextEditor
          value={actor.system.notes}
          onChange={handleChange}
          onSave={handleSave}
        />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: actor.system.notes }} />
      )}
    </div>
  );
};

Notes.displayName = "Notes";
