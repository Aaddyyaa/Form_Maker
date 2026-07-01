import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
}

const SortableField = ({ id, children }: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative"
    >
      <div
        {...attributes}
        {...listeners}
        className="absolute top-4 right-4 cursor-grab active:cursor-grabbing text-gray-500 text-xl select-none"
      >
        ⋮⋮
      </div>

      {children}
    </div>
  );
};

export default SortableField;