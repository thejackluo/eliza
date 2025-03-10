import React from 'react';
import RecordingInterface from '../../components/RecordingInterface';
import Navbar from '../../components/Navbar';

const RecordPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Record a New Meeting</h1>
        <RecordingInterface />
      </div>
    </div>
  );
};

export default RecordPage;
