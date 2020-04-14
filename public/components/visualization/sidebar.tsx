// not supported by Kibana yet, needs @elastic/eui 22.2.0
import { EuiCollapsibleNav, EuiButton, EuiButtonToggle, EuiTitle, EuiSpacer, EuiText, EuiCode } from '@elastic/eui';
import React, { useState } from 'react';

export function SideBar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [navIsDocked, setNavIsDocked] = useState(false);

  return (
      <EuiCollapsibleNav
        isOpen={navIsOpen}
        button={
          <EuiButton onClick={() => setNavIsOpen(!navIsOpen)}>
            Toggle nav
          </EuiButton>
        }
        isDocked={navIsDocked}
        onClose={() => setNavIsOpen(false)}>
        <div style={{ padding: 16 }}>
          <EuiTitle>
            <h2>I am some nav</h2>
          </EuiTitle>
          <EuiSpacer />
          <EuiButtonToggle
            label={`Docked: ${navIsDocked ? 'on' : 'off'}`}
            fill={navIsDocked}
            onChange={() => {
              setNavIsDocked(!navIsDocked);
            }}
          />
        </div>
      </EuiCollapsibleNav>
  );
};

