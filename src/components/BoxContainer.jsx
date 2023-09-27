import React  from 'react'
import { Card } from 'antd';

function BoxContainer () {
  return (
    <Card
            hoverable
            style={{
            width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <p style={{color:"white"}}>Sunita</p>
    </Card>

  )
          
}

export default BoxContainer