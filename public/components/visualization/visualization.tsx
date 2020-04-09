
import React from 'react';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiTitle,
} from '@elastic/eui';

import DataList from './datalist';


export default () => (
  <EuiPage>
    <EuiPageSideBar>
      <DataList />
    </EuiPageSideBar>
    <EuiPageBody component="div">
      <DataList />
    </EuiPageBody>
  </EuiPage>
);