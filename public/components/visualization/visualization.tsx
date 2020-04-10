import React from 'react';

import {
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
} from '@elastic/eui';

import DataList from './datalist';

// put visualization page layout here

export default () => (
  // <EuiPage>
    // <EuiPageSideBar>
      <DataList />
    // </EuiPageSideBar>
  //   <EuiPageBody component="div">
  //     <DataList />
  //   </EuiPageBody>
  // </EuiPage>
);