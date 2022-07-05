import React from "react";
import 'antd/dist/antd.css';
import { Radio, Divider, Table, Button, Popconfirm, Typography } from "antd";

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
                
                    window.location.reload(false);
                  
            };
           
function Home() {
  return (
    <div>
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