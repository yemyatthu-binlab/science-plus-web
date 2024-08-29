import React, { useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ThemeText from "./themeText";

export default function DragAndDrop() {
  const [items, setItems] = useState({
    root: [],
    container1: ["1", "2", "3", "4", "5"],
  });
  const [activeId, setActiveId] = useState();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="flex flex-row bg-gray-100 rounded-md p-7 mt-10 items-center justify-center">
      <DndContext
        // announcements={defaultAnnouncements}
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-col">
          <ContainerAns id="root" items={items.root} />
          <ContainerQues id="container1" items={items.container1} />
          <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
        </div>
      </DndContext>
    </div>
  );

  function findContainer(id: string) {
    if (id in items) {
      return id as "root" | "container1";
    }

    return Object.keys(items).find((key) =>
      items[key as "root" | "container1"].includes(id)
    ) as "root" | "container1";
  }

  function handleDragStart(event: any) {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
  }

  function handleDragOver(event: any) {
    const { active, over, draggingRect } = event;

    const { id } = active;
    const { id: overId } = over;

    // Find the containers
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.indexOf(id);
      const overIndex = overItems.indexOf(overId);

      let newIndex;
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem = over && overIndex === overItems.length - 1;
        // draggingRect.offsetTop > over.rect.offsetTop + over.rect.height;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== active.id),
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length),
        ],
      };
    });
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;
    console.log("dragEndEvt::", event);

    const { id } = active;
    const { id: overId } = over;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer].indexOf(active.id);
    const overIndex = items[overContainer].indexOf(overId);

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(
          items[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }
    setActiveId(undefined);
  }
}

export function ContainerAns(props: any) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div
        ref={setNodeRef}
        className="min-h-[60px] p-3 w-[300px] border border-gray-400 rounded-md border-dashed"
      >
        {items.length == 0 && (
          <ThemeText className="text-sm text-gray-400 text-center mt-[6px]">Drag Here</ThemeText>
        )}
        {items.map((id: any) => (
          <SortableItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
}

export function ContainerQues(props: any) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} className="mt-3">
        {items.map((id: any) => (
          <SortableItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
}

export function SortableItem(props: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} className="" {...attributes} {...listeners}>
      <Item id={props.id} />
    </div>
  );
}

export function Item(props: any) {
  type ItemType = { [key: string]: React.ReactElement };
  const { id } = props;

  const mapper: ItemType = {
    "1": (
      <>
        <b>Set</b> A <b>to</b> B
      </>
    ),
    "2": (
      <>
        <b>Set</b> A <b>to</b> C
      </>
    ),
    "3": (
      <>
        <b>Set</b> B <b>to</b> A
      </>
    ),
    "4": (
      <>
        <b>Set</b> B <b>to</b> C
      </>
    ),
    "5": (
      <>
        <b>Set</b> C <b>to</b> A
      </>
    ),
  };

  return (
    <div className="border border-b-4 border-black px-2 py-1 rounded-md my-3 w-[90px]">
      {id && <ThemeText className="text-sm">{mapper[id as string]}</ThemeText>}
    </div>
  );
}
