import React, { useEffect, useState} from "react";
import { TableBody, TableRow, TableCell, Button } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// reordering when dragged and dropped
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

// styling for draggable
const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
  
    ...(isDragging && {
      background: "rgb(235,235,235)"
    })
  });

const TableMain = ({users, page, rowsPerPage}) => {
       const [items, setItems] = useState([]);
      
        // get color based on status
        const getColor = (status) => {
            if(status == "Active") return "success";
            else if(status == "Blocked") return "error";
            else if(status=="Pending") return "primary";
            return "secondary";
        }
    
        // drag end functionality
        const onDragEnd = (result) => {
            if (!result.destination) {
                return;
              }
              const temp = reorder(
                items,
                result.source.index,
                result.destination.index
              );
          
             setItems(temp);
        }

        useEffect(()=>{
            setItems(users);
            rowsPerPage > 0
            ? setItems(users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
            : setItems(users);
        },[page, rowsPerPage, users]);

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
          <TableBody 
          {...provided.droppableProps}
           ref={provided.innerRef}
           >
            {items&&items.map((u,i)=>(
                <Draggable key={u.id} draggableId={'q-'+u.id} index={i}>
                {(provided, snapshot) => (
                <TableRow ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}

                style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                  )}
                >
                <TableCell component="th" scope="row">{u.first_name+" "+u.last_name}</TableCell>
                <TableCell component="th" scope="row"><Button color = {getColor(u.subscription.status)}>{u.subscription.status}</Button></TableCell>
                <TableCell component="th" scope="row">{u.gender}</TableCell>
                <TableCell component="th" scope="row">{u.credit_card.cc_number}</TableCell>
                <TableCell component="th" scope="row">{u.address.city}</TableCell>
              </TableRow>)}
              </Draggable>
            ))}

            {provided.placeholder}
          </TableBody>
          )}
        </Droppable>
      </DragDropContext>
    );
}

export default TableMain
