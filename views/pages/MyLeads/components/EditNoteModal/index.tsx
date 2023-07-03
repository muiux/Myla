import { Button, Modal, Textarea } from "flowbite-react";
import React, { useEffect, useState } from "react";

interface Props {
  open: boolean;
  notes: string;
  onSave: (notes: string) => void;
  onClose: () => void;
}

const EditNoteModal: React.FC<Props> = ({ open, notes, onSave, onClose }) => {
  const [newNotes, setNewNotes] = useState(notes);

  useEffect(() => {
    setNewNotes(notes);
  }, [notes]);

  const handleSubmit = () => {
    //
  };

  return (
    <Modal show={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <Modal.Header>Edit Notes</Modal.Header>
        <Modal.Body className="!p-6">
          <div className="space-y-6">
            <Textarea
              id="notes"
              placeholder="New notes here..."
              required
              rows={4}
              value={newNotes!}
              onChange={(e) => setNewNotes(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-end">
          <Button color="primary" onClick={() => onSave(newNotes)}>
            Save
          </Button>
          <Button color="gray" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default EditNoteModal;
