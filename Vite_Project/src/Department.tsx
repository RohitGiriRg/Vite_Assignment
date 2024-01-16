import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import data from './data';

interface SubDepartmentProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SubDepartmentCheckbox: React.FC<SubDepartmentProps> = ({ label, checked, onChange }) => {
  return (
    <FormControlLabel
      label={label}
      control={<Checkbox checked={checked} onChange={onChange} />}
    />
  );
};

const IndeterminateCheckbox: React.FC = () => {
  const [index] = useState(0);
  const [expander, setExpander] = useState(false);
  const { department, sub_departments } = data[index];
  const [checked, setChecked] = useState<[boolean, boolean]>([true, false]);

  const handleExpander = () => {
    setExpander(!expander);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  return (
    <>
      <div>
        {expander ? (
          <Button onClick={handleExpander} style={{ fontSize: '30px' }}>
            -
          </Button>
        ) : (
          <Button onClick={handleExpander} style={{ fontSize: '30px' }}>
            +
          </Button>
        )}

        <FormControlLabel
          sx={{ ml: 0 }}
          label={department}
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />

        {expander && (
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <SubDepartmentCheckbox
              label={sub_departments[0]}
              checked={checked[0]}
              onChange={handleChange2}
            />
            <SubDepartmentCheckbox
              label={sub_departments[1]}
              checked={checked[1]}
              onChange={handleChange3}
            />
          </Box>
        )}
      </div>
    </>
  );
};

export default IndeterminateCheckbox;
