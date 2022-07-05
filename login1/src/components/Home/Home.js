import React from "react";
import 'antd/dist/antd.css';
import {  Divider, Table, Button, Popconfirm } from "antd";
import { useState } from "react";
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
  
  const  data = localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user'))
            : [];
    const deleteUser = (email, data) =>{
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].email === email) {
                          data.splice(i,1);
                            break;
                        }
                    }
                }
                console.log(data);
                localStorage.setItem('user', JSON.stringify(data));
                
                    window.location.reload(true);
                  
            };
    
     
function Home() {
const [count , setCount] = useState(2);
const handleAdd = () => {
  const newData = {
    name: `Edward King ${count}`,
    email: `admin${count}@gmail.com`,
    password: `London, Park Lane no. ${count}`,
  };
  setCount(count +1);
 const user = [...data, newData];
 localStorage.setItem('user', JSON.stringify(user));
 window.location.reload(true);
};
  return (
    <div>
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