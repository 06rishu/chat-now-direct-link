
import React from 'react';

interface FeatureCardProps {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, iconColor, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className={`${iconColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
        <i className={`${icon} text-lg`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
