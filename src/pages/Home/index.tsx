import React, { useEffect, useState } from 'react';
import { Card, Tag } from 'antd';

const HomePage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const Timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(Timer);
  }, []);

  return (
    <Card title="HomePage">
      mounted start <Tag color="cyan">count：{count}</Tag> unmounted clear
    </Card>
  );
};
export default HomePage;
