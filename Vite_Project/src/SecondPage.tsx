import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './MyContext';
import DataGrida from './DataGrid';
import Department from './Department';
import SubDepartment from './SubDepartment';
import data from './data';

interface Tour {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const url = 'https://jsonplaceholder.typicode.com/posts';

const SecondPage: React.FC = () => {
  const navigate = useNavigate();
  const userdata = localStorage.getItem('user');
  const [tours, setTours] = useState<Tour[]>([]);

  const context = useContext(MyContext);
  const { setText } = context ?? {};

  useEffect(() => {
    if (!userdata) {
      navigate('/');
      setText(true);
    }
  }, [navigate, setText, userdata]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div>
      <DataGrida tours={tours} {...data} />
      <Department />
      <SubDepartment />
    </div>
  );
};

export default SecondPage;
