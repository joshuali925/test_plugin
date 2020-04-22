import { EuiTreeView, EuiToken } from '@elastic/eui';
import React from 'react';

export const TreeViewCompressed = () => {
  const items = [
    {
      label: 'airports_idx',
      id: 'airports_idx',
      icon: <EuiToken size="xs" iconType="tokenObject" />,
    },
    {
      label: 'flights_idx',
      id: 'flights_idx',
      icon: <EuiToken size="xs" iconType="tokenObject" />,
    },
    {
      label: 'Cargo',
      id: 'Cargo',
      icon: <EuiToken size="xs" iconType="tokenObject" />,
    },
    {
      label: 'Passengers',
      id: 'Passengers',
      icon: <EuiToken size="xs" iconType="tokenObject" />,
      children: [
        {
          label: 'name',
          id: 'name',
          icon: <EuiToken size="xs" iconType="tokenString" />,
        },
      ],
    },
  ];

  return (
    <div style={{ width: 200 }}>
      <EuiTreeView
        items={items}
        display="compressed"
        expandByDefault
        showExpansionArrows
        aria-label="Document Outline"
      />
    </div>
  );
};