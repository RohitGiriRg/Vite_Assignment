import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  name: string;
  phonenum: string;
  email: string;
}

const FirstPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phonenum, setPhonenum] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(name, phonenum, email);
    const user: User = { name, phonenum, email };
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const userdata = localStorage.getItem('user');

  useEffect(() => {
    if (userdata) {
      navigate('secondpage');
    }
  }, [navigate, userdata]);

  return (
    <div>
      <div className="container">
        <h4>Please Enter the given details below</h4>
        <form onSubmit={handleSubmit}>
          <Stack direction="column">
            <TextField
              label="Enter Name"
              sx={{ mb: 2 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
            />
            <TextField
              label="Phone Number"
              sx={{ mb: 2 }}
              value={phonenum}
              onChange={(e) => setPhonenum(e.target.value)}
              type="number"
              required
            />
            <TextField
              label="Email"
              sx={{ mb: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <Button color="secondary" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default FirstPage;
