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
import { EuiCard, EuiText } from '@elastic/eui';
import { TreeList } from './treelist';
import { EuiTreeView } from '@elastic/eui';
import { EuiListGroup } from '@elastic/eui';
import { EuiListGroupItem } from '@elastic/eui';
import Assets from './assets';
import Axises from './axises';
import Charts from './charts';


function Visualization(props) {
  const [isItemRemovable, setIsItemRemovable] = useState(false);
  // const [list1, setList1] = useState(makeList());
  const list1_all = makeFromList(Object.keys(covidData));
  const [list1, setList1] = useState(list1_all);
  const [list2, setList2] = useState([]);
  const [currIndex, setCurrIndex] = useState("");
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
            <Hover loadIndex={setCurrIndex} content={content} hoverMessage={`this is the popover for item ${idx}, content = ${content}`} />
          </EuiDraggable>
        ))}
      </EuiDroppable>
    )
  }

  function DataDetails() {
    return (
      <EuiCard
        textAlign="left"
        title=""
        description="">
        {currIndex !== "" ? (
          // <EuiText size="s">{covidData[list2[0].content].description}</EuiText>
          <EuiListGroup>
            {covidData[currIndex].y.map((num, idx) => (
              <EuiListGroupItem label={num} key={idx} onClick={() => { }} />
            ))}
          </EuiListGroup>
        ) : (
            <EuiText></EuiText>
          )}
      </EuiCard>
    )
  }

  function DataListVisualizer() {
    return (
      <EuiDroppable droppableId="DROPPABLE_AREA_COPY_2" withPanel grow>
        {list2.length ? (
          <EuiFlexGroup>
            <EuiFlexItem>
              <Plt y={covidData[list2[0].content].y} title={list2[0].content} />
            </EuiFlexItem>
            <EuiFlexItem sytle={{padding: 30}}>
              <Axises />
            </EuiFlexItem>
          </EuiFlexGroup>
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
      <EuiFlexGroup gutterSize="s">

        <EuiFlexItem grow={false}>
          <EuiFlexGroup direction="column" gutterSize="none">

            <EuiFlexItem grow={false}>

              <EuiSearchBar
                defaultQuery={EuiSearchBar.Query.MATCH_ALL}
                box={{
                  placeholder: 'Search',
                  incremental: true,
                }}
                onChange={({ query, error }) => {
                  setList1(list1_all.filter(element => element.content.toLowerCase().includes(query.text.toLowerCase())))
                }}
              />
            </EuiFlexItem>

            <EuiFlexItem grow={false} style={{ height: "39vh" }}>
              <DataListSidebar />
            </EuiFlexItem>

            <EuiFlexItem style={{ width: 200, minHeight: 300 }}>
              <Assets />
            </EuiFlexItem>

          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexItem grow={false} style={{ width: 200 }}>
          <DataDetails />
        </EuiFlexItem>


        <EuiFlexItem>
          <EuiFlexGroup direction="column" style={{ height: "88vh", maxHeight: "88vh" }}>

            <EuiFlexItem>
              <DataListVisualizer />
            </EuiFlexItem>

            <EuiFlexItem grow={false} style={{height: 100}}>
              <Charts />
            </EuiFlexItem>

          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiDragDropContext>
  );
};

export default Visualization