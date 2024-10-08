import React from 'react';

interface StarProps {
  count: number;
}

const Stars: React.FC<StarProps> = ({ count }) => {
  const filledStar = (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#F6F9FC"/>
    </svg>
  );

  const unfilledStar = (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1.61804L14.2186 8.4463L14.3309 8.7918H14.6942H21.8738L16.0654 13.0119L15.7715 13.2254L15.8837 13.5709L18.1024 20.3992L12.2939 16.1791L12 15.9656L11.7061 16.1791L5.89763 20.3992L8.11627 13.5709L8.22853 13.2254L7.93464 13.0119L2.12616 8.7918H9.30583H9.6691L9.78136 8.4463L12 1.61804Z" stroke="#F6F9FC"/>
    </svg>
  );

  return (
    <div className="flex gap-2">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < count ? filledStar : unfilledStar}</span>
      ))}
    </div>
  );
};

export default Stars;
