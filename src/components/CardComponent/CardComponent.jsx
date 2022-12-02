import React from 'react';

const CardComponent = () => (
  <div className='card_item'> 
    <div className='card_img'>
      <img alt="example" src="https://a0.muscache.com/im/pictures/miso/Hosting-717383292590854818/original/28a1caa5-c886-4b9d-95f5-9a2bebe7d970.jpeg?im_w=720" />
      <div className='card_img_icon'>@$%</div>
    </div>
    <div className='card_content'>
        <div className='card_name'>
            <div className='card_name_text'>Paris, France</div>
            <div className='card_name_icon'>
               <span>@#$</span>
            </div>
        </div>
        <div className='card_des'>Đã thêm cách đây 10 tuần</div>
        <div className='card_time'>Ngày 30-11-2022</div>
        <div className='card_price'>$500/1night</div>
    </div>
  </div>
);
export default CardComponent;
