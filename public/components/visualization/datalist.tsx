import React, { useState } from 'react';
import SplitPane, { Pane } from 'react-split-pane';

import {
  EuiButtonIcon,
  EuiDragDropContext,
  EuiFlexGroup,
  EuiFlexItem,
  EuiDraggable,
  EuiDroppable,
  EuiIcon,
  EuiPanel,
  euiDragDropCopy,
  euiDragDropReorder,
} from '@elastic/eui';

import { makeId, makeList, makeFromList } from './dataloader';
import Hover from './hover'

import { covidData } from './dataloader';
import Plt from '../plt'


function DataList(props) {
  const [isItemRemovable, setIsItemRemovable] = useState(false);
  // const [list1, setList1] = useState(makeList());
  const [list1, setList1] = useState(makeFromList(Object.keys(covidData)));
  const [list2, setList2] = useState([]);
  const lists = { DROPPABLE_AREA_COPY_1: list1, DROPPABLE_AREA_COPY_2: list2 };
  const actions = {
    DROPPABLE_AREA_COPY_1: setList1,
    DROPPABLE_AREA_COPY_2: setList2,
  };
  const remove = (droppableId, index) => {
    const list = Array.from(lists[droppableId]);
    list.splice(index, 1);

    actions[droppableId](list);
  };

  const onDragUpdate = ({ source, destination }) => {
    const shouldRemove =
      !destination && source.droppableId === 'DROPPABLE_AREA_COPY_2';
    setIsItemRemovable(shouldRemove);
  };
  const onDragEnd = ({ source, destination }) => {
    if (source && destination) {
      if (source.droppableId === destination.droppableId) {
        const items = euiDragDropReorder(
          lists[destination.droppableId],
          source.index,
          destination.index
        );

        actions[destination.droppableId](items);
      } else {
        const sourceId = source.droppableId;
        const destinationId = destination.droppableId;
        const result = euiDragDropCopy(
          lists[sourceId],
          lists[destinationId],
          source,
          destination,
          {
            property: 'id',
            modifier: makeId,
          }
        );
        actions[sourceId](result[sourceId]);  // set list1
        actions[destinationId](result[destinationId]);  // set list2
      }
    } else if (!destination && source.droppableId === 'DROPPABLE_AREA_COPY_2') {
      remove(source.droppableId, source.index);
    }
  };

  function DataListSidebar() {
    return (
      <EuiDroppable
        droppableId="DROPPABLE_AREA_COPY_1"
        cloneDraggables={true}
        spacing="s"
        grow>
        {list1.map(({ content, id }, idx) => (
          <EuiDraggable key={id} index={idx} draggableId={id} spacing="s">
            <Hover content={content} hoverMessage={`this is the popover for item ${idx}, content = ${content}`} />
          </EuiDraggable>
        ))}
      </EuiDroppable>
    )
  }

  function DataListVisualizer() {
    return (
      <EuiDroppable droppableId="DROPPABLE_AREA_COPY_2" withPanel grow>
        {list2.length ? (
          // list2.map(({ content, id }, idx) => (
          //   <EuiDraggable
          //     key={id}
          //     index={idx}
          //     draggableId={id}
          //     spacing="s"
          //     isRemovable={isItemRemovable}>
          //     <EuiPanel>
          //       <EuiFlexGroup gutterSize="none" alignItems="center">
          //         <EuiFlexItem>{content}</EuiFlexItem>
          //         <EuiFlexItem grow={false}>
          //           {isItemRemovable ? (
          //             <EuiIcon type="trash" color="danger" />
          //           ) : (
          //               <EuiButtonIcon
          //                 iconType="cross"
          //                 aria-label="Remove"
          //                 onClick={() => remove('DROPPABLE_AREA_COPY_2', idx)}
          //               />
          //             )}
          //         </EuiFlexItem>
          //       </EuiFlexGroup>
          //     </EuiPanel>
          //   </EuiDraggable>
          // ))
          <Plt y={covidData[list2[0].content].y} title={list2[0].content} />
        ) : (
            <EuiFlexGroup
              alignItems="center"
              justifyContent="spaceAround"
              gutterSize="none"
              style={{ height: '100%' }}>
              <EuiFlexItem grow={false}>Drop Items Here</EuiFlexItem>
            </EuiFlexGroup>
          )}
      </EuiDroppable>
    )
  }

  return (
    <EuiDragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <EuiFlexGroup>
        <SplitPane split="vertical" defaultSize="10%">
          <div>
            <EuiFlexItem grow={false}>
              <DataListSidebar />
            </EuiFlexItem>
          </div>
          <div>
            <EuiFlexItem>
              <DataListVisualizer />
            </EuiFlexItem>
          </div>
        </SplitPane>
      </EuiFlexGroup>
    </EuiDragDropContext>
  );
};

export default DataList