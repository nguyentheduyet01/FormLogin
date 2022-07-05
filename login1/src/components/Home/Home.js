import React, { useState, useRef } from "react";
import 'antd/dist/antd.css';
import {  Divider, Table, Button, Popconfirm } from "antd";

function Home() {
  const listu = useRef(null);
  const [count , setCount] = useState(2);
  const [data, setData] = useState(localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : []);
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Password',
      dataIndex: 'password',
    },
    {
        title: 'Edit',
        key: 'edit',
        fixed: 'right',
        render: (text) => <a>Edit</a>,
    },
    {
        title: 'Delete',
        key: 'delete',
        fixed: 'right',
        width: 100,
        render: (index) => <Popconfirm title = "Are u sure to delete" onConfirm={()=> {deleteUser( index.email,data)} }><Button type="primary" shape="round" >delete</Button></Popconfirm>,
      }
  ];
  
const handleAdd = () => {
  const newData = {
    name: `Edward King ${count}`,
    email: `admin${count}@gmail.com`,
    password: `London, Park Lane no. ${count}`,
  };
  setCount(count+1);
  setData([...data,newData]);
 localStorage.setItem('user', JSON.stringify([...data,newData]));
};

const deleteUser = (email, data1) =>{
  if (data1.length > 0) {
      for (let i = 0; i < data1.length; i++) {
          if (data1[i].email === email) {
            data1.splice(i,1);
              break;
          }
      }
  }
  setData([...data])
  localStorage.setItem('user', JSON.stringify(data1));
  
    
};
  return (
    <div ref={listu}>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          margin: 20,
        }}
      >
        Add a row
      </Button>
      
      <Divider />

      <Table
      rowKey="email"
        columns={columns}
        dataSource={data}
      />
    </div>
  );

}
export default Home;