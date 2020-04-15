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
  euiDragDropCopy,
  euiDragDropReorder,
} from '@elastic/eui';

import { makeId, makeList, makeFromList, covidData } from './dataloader';
import Hover from './hover'

import Plt from './plt'
import { EuiSearchBar } from '@elastic/eui';


function Visualization(props) {
  const [isItemRemovable, setIsItemRemovable] = useState(false);
  // const [list1, setList1] = useState(makeList());
  const list1_all = makeFromList(Object.keys(covidData));
  const [list1, setList1] = useState(list1_all);
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
      {/* TODO fix height */}
      <EuiFlexGroup gutterSize="none">

        <EuiFlexItem grow={false}>
          <EuiFlexGroup direction="column" gutterSize="none" style={{ height: "40vh", maxHeight: "40vh" }}>

            <EuiFlexItem grow={false}>

              <EuiSearchBar
                defaultQuery={EuiSearchBar.Query.MATCH_ALL}
                box={{
                  placeholder: 'filter: country',
                  incremental: true,
                }}
                onChange={({ query, error }) => {
                  if (query.text === "") {
                    setList1(list1_all)
                    return;
                  }
                  let result = []
                  list1_all.forEach(element => {
                    if (element.content.includes(query.text)) 
                      result.push(element)
                  });
                  setList1(result)
                }}
              />
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <DataListSidebar />
            </EuiFlexItem>

          </EuiFlexGroup>
        </EuiFlexItem>


        <EuiFlexItem>
          <EuiFlexGroup direction="column" style={{ height: "85vh", maxHeight: "85vh" }}>

            <EuiFlexItem>
              <DataListVisualizer />
            </EuiFlexItem>

            <EuiFlexItem grow={false}>Another content grid item</EuiFlexItem>

          </EuiFlexGroup>
        </EuiFlexItem>

      </EuiFlexGroup>
    </EuiDragDropContext>
  );
};

export default Visualization