'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock data for a meeting
const getMeetingData = (id: string) => {
  return {
    id,
    title: 'Product Roadmap Discussion',
    date: new Date('2023-11-15T14:30:00'),
    endTime: new Date('2023-11-15T15:45:00'),
    duration: '1h 15m',
    participants: [
      { id: '1', name: 'Alex Johnson', role: 'Product Manager' },
      { id: '2', name: 'Sarah Chen', role: 'Lead Developer' },
      { id: '3', name: 'Miguel Rodriguez', role: 'UX Designer' },
      { id: '4', name: 'Taylor Kim', role: 'Marketing Director' }
    ],
    summary: 'Discussion about Q4 product roadmap, feature prioritization, and upcoming release timeline.',
    tags: ['Product', 'Planning', 'Q4'],
    transcript: [
      { time: '00:00:15', speaker: 'Alex Johnson', text: 'Welcome everyone to our product roadmap discussion. Today we\'ll be focusing on our Q4 priorities.' },
      { time: '00:00:30', speaker: 'Sarah Chen', text: 'I\'ve prepared some technical considerations we should keep in mind when planning the next features.' },
      { time: '00:01:45', speaker: 'Miguel Rodriguez', text: 'From a UX perspective, I think we need to address the onboarding flow issues before adding new features.' },
      { time: '00:02:30', speaker: 'Taylor Kim', text: 'Marketing is planning a big push in November, so anything we can showcase by then would be ideal.' },
      { time: '00:03:15', speaker: 'Alex Johnson', text: 'Great points. Let\'s start by outlining our must-have features for Q4.' },
      { time: '00:04:20', speaker: 'Sarah Chen', text: 'The authentication system needs to be refactored before we can implement the new user roles feature.' },
      { time: '00:05:45', speaker: 'Miguel Rodriguez', text: 'I can have the design mockups for the improved onboarding flow by next week.' },
      { time: '00:07:10', speaker: 'Taylor Kim', text: 'We should also consider how these features align with our overall marketing message for Q4.' },
      { time: '00:08:30', speaker: 'Alex Johnson', text: 'Agreed. Let\'s prioritize the features that align with both technical feasibility and marketing goals.' },
      { time: '00:10:15', speaker: 'Sarah Chen', text: 'I suggest we break down the authentication refactoring into smaller tasks to make it more manageable.' },
    ],
    notes: {
      summary: 'This meeting focused on aligning the Q4 product roadmap with technical feasibility and marketing objectives.',
      outline: [
        {
          title: 'Technical Considerations',
          items: [
            'Authentication system refactoring needed for new user roles',
            'API optimization for improved performance',
            'Technical debt reduction in core modules'
          ]
        },
        {
          title: 'UX Improvements',
          items: [
            'Redesign of onboarding flow',
            'Dashboard customization options',
            'Mobile responsive improvements'
          ]
        },
        {
          title: 'Marketing Alignment',
          items: [
            'Feature showcase planned for November campaign',
            'User testimonial integration',
            'Analytics enhancement for better user insights'
          ]
        }
      ],
      actionItems: [
        { assignee: 'Sarah Chen', task: 'Create detailed plan for authentication refactoring', dueDate: '2023-11-22' },
        { assignee: 'Miguel Rodriguez', task: 'Deliver onboarding flow mockups', dueDate: '2023-11-20' },
        { assignee: 'Taylor Kim', task: 'Finalize Q4 marketing messaging document', dueDate: '2023-11-18' },
        { assignee: 'Alex Johnson', task: 'Update product roadmap with agreed priorities', dueDate: '2023-11-17' }
      ]
    }
  };
};

// Component for the transcript mode
const TranscriptMode = ({ transcript }: { transcript: any[] }) => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <div className="text-sm text-gray-400 mb-2">Transcript</div>
        <div className="p-4 glass-panel rounded-lg">
          {transcript.map((entry, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-start">
                <div className="text-xs text-gray-400 w-16">{entry.time}</div>
                <div className="flex-1">
                  <div className="inline-block bg-primary/20 text-white px-2 py-1 rounded-full text-xs mb-1">
                    {entry.speaker}
                  </div>
                  <div className="text-white">{entry.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Component for the meeting notes mode
const MeetingNotesMode = ({ notes }: { notes: any }) => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <div className="text-sm text-gray-400 mb-2">Meeting Notes</div>
        <div className="p-4 glass-panel rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-white">Executive Summary</h2>
          <p className="text-white mb-6">{notes.summary}</p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Outline</h2>
          {notes.outline.map((section: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-white">{section.title}</h3>
              <ul className="list-disc list-inside">
                {section.items.map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="text-white ml-4 mb-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <h2 className="text-xl font-bold mb-4 mt-6 text-white">Action Items</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-300">Assignee</th>
                  <th className="text-left py-2 text-gray-300">Task</th>
                  <th className="text-left py-2 text-gray-300">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {notes.actionItems.map((item: any, index: number) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-2 text-white">{item.assignee}</td>
                    <td className="py-2 text-white">{item.task}</td>
                    <td className="py-2 text-white">{new Date(item.dueDate).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MeetingDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [meeting, setMeeting] = useState<any>(null);
  const [activeMode, setActiveMode] = useState<'transcript' | 'notes'>('transcript');
  
  useEffect(() => {
    // In a real app, you would fetch the meeting data from an API
    // For now, we'll use our mock data function
    const data = getMeetingData(id);
    setMeeting(data);
  }, [id]);
  
  if (!meeting) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/meetings" className="text-white flex items-center mb-6 hover:text-primary transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Meetings
      </Link>
      
      <div className="glass-panel rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">{meeting.title}</h1>
        <div className="flex flex-wrap text-gray-400 text-sm mb-4">
          <div className="mr-6 mb-2">
            <span className="block text-xs uppercase">Date & Time</span>
            <span>{formatDate(meeting.date)}</span>
          </div>
          <div className="mr-6 mb-2">
            <span className="block text-xs uppercase">Duration</span>
            <span>{meeting.duration}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap mb-4">
          <div className="text-xs uppercase text-gray-400 mb-2 w-full">Participants</div>
          <div className="flex flex-wrap">
            {meeting.participants.map((participant: any) => (
              <div 
                key={participant.id} 
                className="mr-2 mb-2 px-3 py-1 bg-primary/20 rounded-full text-white text-xs"
              >
                {participant.name}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap">
          <div className="text-xs uppercase text-gray-400 mb-2 w-full">Tags</div>
          <div className="flex flex-wrap">
            {meeting.tags.map((tag: string, index: number) => (
              <div 
                key={index} 
                className="mr-2 mb-2 px-3 py-1 bg-gray-700/50 rounded-full text-white text-xs"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tab switcher for Transcript and Notes modes */}
      <div className="glass-panel rounded-lg p-2 mb-6 flex">
        <button 
          className={`flex-1 py-2 px-4 rounded-md transition-colors ${activeMode === 'transcript' ? 'bg-primary/30 text-white' : 'text-gray-400 hover:text-white'}`}
          onClick={() => setActiveMode('transcript')}
        >
          Transcript Mode
        </button>
        <button 
          className={`flex-1 py-2 px-4 rounded-md transition-colors ${activeMode === 'notes' ? 'bg-primary/30 text-white' : 'text-gray-400 hover:text-white'}`}
          onClick={() => setActiveMode('notes')}
        >
          Meeting Notes Mode
        </button>
      </div>
      
      {/* Content based on active mode */}
      {activeMode === 'transcript' ? (
        <TranscriptMode transcript={meeting.transcript} />
      ) : (
        <MeetingNotesMode notes={meeting.notes} />
      )}
    </div>
  );
}
