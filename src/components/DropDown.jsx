import React from 'react'
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space ,Button} from 'antd';

const items = [
  {
    label: <Link>Music</Link>,
    key: '0',
  },
  {
    label: <Link >Podcasts</Link>,
    key: '1',
  },
  {
    type: 'divider',
  },
  
];
const DropDown = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']} 
    style={{color:"white" ,  backgroundColor: "black"}}

  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        LIBRARY
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>

);

export default DropDown