import { useState } from 'react';

const TestInputOtp = () => {
  const nums = document.querySelectorAll('input');
  const form = document.querySelector('form');

  nums.forEach((num, index) => {
    num.dataset.id = index;

    num.addEventListener('keyup', () => {
      if (num.value.length == 1) {
        if (nums[nums.length - 1].value.length == 1) form.submit();
        nums[parseInt(num.dataset.id) + 1].focus();
       
      }
    });
  });


  const [otpPhone, setOtpPhone] = useState(['', '', '', '', '', '']);

  return (
    <div>
      <form>
        {otpPhone.map((otp) => {
          return <input maxLength={1} mode="numeric"/>;
        })}
      </form>
    </div>
  );
};

export default TestInputOtp;
