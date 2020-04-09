import React, { useState } from 'react';
import {
  EuiButtonIcon,
  EuiDragDropContext,
  EuiFlexGroup,
  EuiFlexItem,
  EuiDraggable,
  EuiDroppable,
  EuiIcon,
  EuiPanel,
} from '@elastic/eui';

import {
  euiDragDropCopy,
  euiDragDropReorder,
} from '@elastic/eui';

import { makeId, makeList } from './helper';


function DataList(props) {
  const [isItemRemovable, setIsItemRemovable] = useState(false);
  const [list1, setList1] = useState(makeList(8));
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

        actions[sourceId](result[sourceId]);
        actions[destinationId](result[destinationId]);
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
            <EuiPanel
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >{content}</EuiPanel>
          </EuiDraggable>
        ))}
      </EuiDroppable>
    )
  }

  function DataListVisualizer() {
    return (
      <EuiDroppable droppableId="DROPPABLE_AREA_COPY_2" withPanel grow>
        {list2.length ? (
          list2.map(({ content, id }, idx) => (
            <EuiDraggable
              key={id}
              index={idx}
              draggableId={id}
              spacing="s"
              isRemovable={isItemRemovable}>
              <EuiPanel>
                <EuiFlexGroup gutterSize="none" alignItems="center">
                  <EuiFlexItem>{content}</EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    {isItemRemovable ? (
                      <EuiIcon type="trash" color="danger" />
                    ) : (
                        <EuiButtonIcon
                          iconType="cross"
                          aria-label="Remove"
                          onClick={() => remove('DROPPABLE_AREA_COPY_2', idx)}
                        />
                      )}
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiPanel>
            </EuiDraggable>
          ))
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

  function onMouseEnter() {
    console.log('mouse entered')
  }

  function onMouseLeave() {
    console.log('mouse left')
  }
  return (
    <EuiDragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <EuiFlexGroup>
        <EuiFlexItem style={{ width: '50px' }}>
          <DataListSidebar />
        </EuiFlexItem>
        <EuiFlexItem>
          <DataListVisualizer />
        </EuiFlexItem>

      </EuiFlexGroup>
    </EuiDragDropContext>
  );
};

export default DataList