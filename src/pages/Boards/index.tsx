/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Columns } from "../../types";
import { Board } from "../../data/board";
import { useState } from "react";

const Boards = () => {
  const [columns, setcolumns] = useState<Columns>(Board);

  return (
    <>
      <DragDropContext onDragEnd={(result: any) => console.log(result)}>
        <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
          {Object.entries(columns).map(([columnId, column]: any) => (
            <div key={columnId} className="w-full flex flex-col">
              <Droppable droppableId={columnId} key={columnId}>
                {(provided:any) => (
                  <div ref={provided.innerRef}></div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </>
  );
};

export default Boards;
