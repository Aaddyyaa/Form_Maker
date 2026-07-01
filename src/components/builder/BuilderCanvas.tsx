import {
  DndContext,
  closestCenter,
  type DragEndEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useForm } from "../../context/FormContext";

import FieldEditor from "./FieldEditor";
import SortableField from "./SortableField";

const BuilderCanvas = () => {
  const { fields, moveField } = useForm();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id === over.id) return;

    const oldIndex = fields.findIndex(
      (field) => field.id === active.id
    );

    const newIndex = fields.findIndex(
      (field) => field.id === over.id
    );

    moveField(oldIndex, newIndex);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-2xl font-bold mb-6">
          Form Builder
        </h2>

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={fields.map((field) => field.id)}
            strategy={verticalListSortingStrategy}
          >
            {fields.length === 0 ? (
              <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-16 text-center">

                <h3 className="text-2xl font-semibold text-gray-600">
                  No fields added
                </h3>

                <p className="mt-3 text-gray-500">
                  Choose a field from the sidebar to begin.
                </p>

              </div>
            ) : (
              <div className="space-y-6">

                {fields.map((field) => (
                  <SortableField
                    key={field.id}
                    id={field.id}
                  >
                    <FieldEditor field={field} />
                  </SortableField>
                ))}

              </div>
            )}

          </SortableContext>
        </DndContext>

      </div>
    </div>
  );
};

export default BuilderCanvas;