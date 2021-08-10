import React, { useState } from 'react';
import { Card, Tag } from 'antd';

const AboutPage = () => {
  const [count, setCount] = useState(0);

  return (
    <Card title="AboutPage">
      <Tag color="error" onClick={() => setCount(count + 1)}>
        click here：{count}
      </Tag>
    </Card>
  );
};
export default AboutPage;
