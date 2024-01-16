import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react'
import data from './data'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const SubDepartment = () => {
const [index] = useState(1);
const {department, sub_departments} = data[index];
const [expander, setExpander] = useState(false);

const [checked, setChecked] = useState([true, false]);
const [correct, setCorrect] = useState([true, false]);
const [correct1, setCorrect1] = useState([true, false]);

const handleExpander = () => {
    if(expander){
      setExpander(false)
    }else{
      setExpander(true);
    }
}

const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
    setCorrect([event.target.checked, event.target.checked]);
    setCorrect1([event.target.checked, event.target.checked]);
   
   if(!(checked || correct || correct1)){
    setChecked([false,false]);
     setCorrect([false,false]);
     setCorrect1([false,false]);

    }
    
    
    
  };





 

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
    
    
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCorrect1([correct1[0], event.target.checked]);
    
  };
  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCorrect([correct[0], event.target.checked]);
  };

  

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label={sub_departments[0]}
        control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
      />
      <FormControlLabel
       label={sub_departments[1]}
        control={<Checkbox checked={correct1[1]} onChange={handleChange3} />}
        
      />
      <FormControlLabel
        label={sub_departments[2]}
        control={<Checkbox checked={correct[1]} onChange={handleChange4} />}
      />
    </Box>
  );

  
  return (
    <div>
       {expander ? <Button sx={{ ml: -11 }} onClick={handleExpander} style={{ fontSize: '30px' }}>-</Button> : <Button onClick={handleExpander} sx={{ ml: -11 }} style={{ fontSize: '30px' }}>+</Button> }
      <FormControlLabel
        label={department}
        control={
          <Checkbox
            checked={(checked[0] && checked[1]) || (correct[0] && correct[1]) || (correct1[0] && correct1[1])}
            indeterminate={(correct[0] !== correct[1]) || (checked[0] !== checked[1]) || (correct1[0] !== correct1[1])}
            onChange={handleChange1}

          />
        }
      />
      {expander && children}
    </div>
  );
}

export default SubDepartment;
