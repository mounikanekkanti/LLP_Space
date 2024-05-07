import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerComponent() {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker/>
      </DemoContainer>
    </LocalizationProvider>

<style>{`
fieldset {
    border-radius: 4px !important;
    border-color: rgba(111, 113, 113, 1) !important;
    border-style: solid !important;
    border-width: 1px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: start !important;
    gap: 0px !important;
    justify-content: center !important;
    padding: 12px !important;
  }

`}</style>
</>
  );
}
