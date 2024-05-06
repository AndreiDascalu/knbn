/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Columns } from "../../types";
import { Board } from "../../data/board";
import { useState } from "react";
import { AddOutline } from "react-ionicons";
import Task from "../../components/Task";

const Boards = () => {
  const [columns, setColumns] = useState<Columns>(Board);
  const [modalOpen, setmodalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  const openModal = (columnId: any) => {
    setSelectedColumn(columnId);
    setmodalOpen(true);
  };

  const closeModal = () => {
    setmodalOpen(false);
  };

  const handleAddTask = (taskData: any) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
  };

  return (
    <>
      <DragDropContext onDragEnd={(result: any) => console.log(result)}>
        <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
          {Object.entries(columns).map(([columnId, column]: any) => (
            <div key={columnId} className="w-full flex flex-col">
              <Droppable droppableId={columnId} key={columnId}>
                {(provided: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-20"
                  >
                    <div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-15px">
                      {column.name}
                    </div>
                    {column.items.map((task: any, index: any) => {
                      <Draggable
                        key={task.id.toString()}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided: any) => (
                          <>
                            <Task provided={provided} task={task} />
                          </>
                        )}
                      </Draggable>;
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white shadow-sm rounded-lg font-medium">
                <AddOutline color={"#555"} />
                Add Task
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>
    </>
  );
};

export default Boards;
