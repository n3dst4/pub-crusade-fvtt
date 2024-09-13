import React, { useRef, useState } from "react";

import { RichTextEditor } from "../copiedFromInvestigator/components/inputs/RichTextEditor";
import { CharacterActor } from "../v10Types";
import { Panel } from "./Panel";

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

  const handleChange = (newValue: string) => {
    temp.current = newValue;
  };

  return (
    <Panel className={className}>
      {!editMode && (
        <h2>
          Notes <a onClick={handleClickEdit}>Edit</a>
        </h2>
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
    </Panel>
  );
};

Notes.displayName = "Notes";
