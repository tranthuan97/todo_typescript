import React from 'react';
import { Carousel } from 'antd';
import './styles.css'

const contentStyle: React.CSSProperties = {
  height: 'max-content',
  lineHeight: '160px',
  textAlign: 'center',
};

const IntroduceCarousel: React.FC = () => {
  return (
    <Carousel autoplay dots={{ className: 'ic-dots' }}>
      <div>
        <p style={contentStyle}>
          <img style={{ margin: 'auto' }} height={250} src={'/assets/images/todo_1.jpg'} alt="todo_1" />
          Đây là một ứng dụng nhỏ, rất đơn giản và dễ sử dụng để ghi chú những công việc hằng ngày.
        </p>
      </div>
      <div>
        <p style={contentStyle}>
          <img style={{ margin: 'auto' }} height={250} src={'/assets/images/todo_2.png'} alt="todo_2" />
          Ứng dụng với các ghi chú theo lịch giúp nhắc nhở và quản lý công việc hằng ngày.
        </p>
      </div>
      <div>
        <p style={contentStyle}>
          <img style={{ margin: 'auto' }} height={250} src={'/assets/images/todo_3.png'} alt="todo_3" />
          Đồng hành cùng bạn mọi lúc, mọi nơi.
        </p>
      </div>
    </Carousel>
  );
};

export default IntroduceCarousel