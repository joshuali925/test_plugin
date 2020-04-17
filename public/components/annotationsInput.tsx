import makeId from '@elastic/eui';
import React, { useState } from 'react';

import {
  EuiButton,
  EuiButtonEmpty,
  EuiFieldText,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
} from '@elastic/eui';


export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);

  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };


  let modal;
  
  const cancel = () => {
    closeModal();
    setValue('');
  }
  
  const save = () => {
    closeModal();
    
  }

  if (isModalVisible) {
    modal = (
      <EuiOverlayMask>
        <EuiModal onClose={closeModal} initialFocus="[name=input]">
          <EuiModalHeader>
            <EuiModalHeaderTitle>Add Annotation</EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiFieldText
              name="input"
              placeholder="Enter annotation"
              value={value}
              onChange={e => onChange(e)}
            />
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButtonEmpty onClick={cancel}>
              Cancel
            </EuiButtonEmpty>
            <EuiButton onClick={save} fill>
              Save
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    );
  }
  return (
    <div>
      <EuiButton onClick={showModal}>Show modal</EuiButton>

      {modal}
    </div>
  );
};