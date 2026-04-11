import { useState } from 'react';
import { getDriverImage } from '../utils/driverImages';

const DriverImage = ({ code, name, size = 120, className = '' }) => {
  const [imgError, setImgError] = useState(false);
  const imageUrl = getDriverImage(code);

  if (!imageUrl || imgError) {
    return (
      <div
        style={{
          width: size,
          height: size * 1.2,
          background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          color: '#E10600',
          fontSize: size * 0.3,
          fontWeight: 'bold',
          letterSpacing: 2,
          fontFamily: "'Space Grotesk', sans-serif",
        }}
        className={className}
      >
        {code?.slice(0, 3)}
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={name || code}
      onError={() => setImgError(true)}
      style={{
        width: size,
        height: size * 1.2,
        objectFit: 'cover',
        objectPosition: 'top center',
        borderRadius: 8,
      }}
      className={className}
    />
  );
};

export default DriverImage;
