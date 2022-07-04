import React from 'react';
import { Carousel } from 'antd';
import './styles.css'

const contentStyle: React.CSSProperties = {
  height: '160px',
  lineHeight: '160px',
  textAlign: 'center',
};

const IntroduceCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel dots={{className: 'ic-dots'}} afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          Đây là một ứng dụng nhỏ, rất đơn giản và dễ sử dụng để ghi chú những công việc hằng ngày.
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          Ứng dụng với các ghi chú theo lịch giúp nh
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default IntroduceCarousel