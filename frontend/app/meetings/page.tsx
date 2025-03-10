'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

// Mock data for meetings
const MOCK_MEETINGS = [
  {
    id: 'meet-1',
    title: 'Weekly Product Sync',
    date: '2025-03-09T14:30:00',
    duration: 45,
    participants: [
      { id: 'user1', name: 'Alex Johnson', avatar: '/images/avatar-1.png' },
      { id: 'user2', name: 'Sarah Chen', avatar: '/images/avatar-2.png' },
      { id: 'user3', name: 'Miguel Rodriguez', avatar: '/images/avatar-3.png' },
      { id: 'user4', name: 'Taylor Kim', avatar: '/images/avatar-4.png' },
    ],
    summary: 'Discussed Q2 roadmap, feature prioritization, and upcoming release schedule.',
    tags: ['Product', 'Planning', 'Roadmap'],
    hasTranscript: true,
    hasRecording: true,
  },
  {
    id: 'meet-2',
    title: 'Design Review - Mobile App',
    date: '2025-03-08T10:00:00',
    duration: 60,
    participants: [
      { id: 'user2', name: 'Sarah Chen', avatar: '/images/avatar-2.png' },
      { id: 'user5', name: 'Jordan Taylor', avatar: '/images/avatar-5.png' },
      { id: 'user6', name: 'Priya Sharma', avatar: '/images/avatar-6.png' },
    ],
    summary: 'Reviewed design mockups for the new mobile app. Discussed user flow and accessibility improvements.',
    tags: ['Design', 'Mobile', 'UX'],
    hasTranscript: true,
    hasRecording: true,
  },
  {
    id: 'meet-3',
    title: 'Engineering Standup',
    date: '2025-03-07T09:15:00',
    duration: 15,
    participants: [
      { id: 'user1', name: 'Alex Johnson', avatar: '/images/avatar-1.png' },
      { id: 'user3', name: 'Miguel Rodriguez', avatar: '/images/avatar-3.png' },
      { id: 'user7', name: 'Olivia Wilson', avatar: '/images/avatar-7.png' },
      { id: 'user8', name: 'David Chen', avatar: '/images/avatar-8.png' },
      { id: 'user9', name: 'Emily Lopez', avatar: '/images/avatar-9.png' },
    ],
    summary: 'Daily engineering standup. Team discussed progress on current sprint tasks and blockers.',
    tags: ['Engineering', 'Standup', 'Sprint'],
    hasTranscript: true,
    hasRecording: false,
  },
  {
    id: 'meet-4',
    title: 'Marketing Campaign Planning',
    date: '2025-03-06T13:00:00',
    duration: 90,
    participants: [
      { id: 'user4', name: 'Taylor Kim', avatar: '/images/avatar-4.png' },
      { id: 'user10', name: 'Raj Patel', avatar: '/images/avatar-10.png' },
      { id: 'user11', name: 'Grace Lee', avatar: '/images/avatar-11.png' },
    ],
    summary: 'Planned Q2 marketing campaigns. Discussed budget allocation, channel strategy, and success metrics.',
    tags: ['Marketing', 'Planning', 'Budget'],
    hasTranscript: true,
    hasRecording: true,
  },
  {
    id: 'meet-5',
    title: 'Customer Feedback Session',
    date: '2025-03-05T11:30:00',
    duration: 60,
    participants: [
      { id: 'user1', name: 'Alex Johnson', avatar: '/images/avatar-1.png' },
      { id: 'user6', name: 'Priya Sharma', avatar: '/images/avatar-6.png' },
      { id: 'user12', name: 'Customer: John Smith', avatar: '/images/avatar-12.png' },
    ],
    summary: 'Gathered feedback from key customer about recent product changes. Identified several areas for improvement.',
    tags: ['Customer', 'Feedback', 'Product'],
    hasTranscript: true,
    hasRecording: true,
  },
];

export default function Meetings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(MOCK_MEETINGS.flatMap(meeting => meeting.tags))
  ).sort();
  
  // Filter meetings based on search query and selected tag
  const filteredMeetings = MOCK_MEETINGS.filter(meeting => {
    const matchesSearch = searchQuery === '' || 
      meeting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meeting.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag === '' || 
      meeting.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  // Format date to readable string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Format time to readable string
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Your Meetings</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search meetings..."
                className="glass-panel py-2 pl-10 pr-4 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            
            <Link href="/record" className="primary-button flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              New Meeting
            </Link>
          </div>
        </div>
        
        {/* Tags filter */}
        <div className="mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
          <button
            className={`mr-2 px-4 py-1 rounded-full transition-all ${
              selectedTag === '' ? 'bg-primary text-white' : 'glass-button'
            }`}
            onClick={() => setSelectedTag('')}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`mr-2 px-4 py-1 rounded-full transition-all ${
                selectedTag === tag ? 'bg-primary text-white' : 'glass-button'
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Meetings list */}
        <div className="grid grid-cols-1 gap-6">
          {filteredMeetings.length > 0 ? (
            filteredMeetings.map((meeting) => (
              <Link href={`/meetings/${meeting.id}`} key={meeting.id}>
                <div className="meeting-card hover:cursor-pointer">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-bold mb-2 md:mb-0">{meeting.title}</h3>
                    <div className="text-text-secondary">
                      {formatDate(meeting.date)} • {formatTime(meeting.date)} • {meeting.duration} min
                    </div>
                  </div>
                  
                  <p className="text-text-secondary mb-4 line-clamp-2">{meeting.summary}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {meeting.participants.slice(0, 4).map((participant) => (
                        <div key={participant.id} className="w-8 h-8 rounded-full border border-white/10 overflow-hidden">
                          <Image
                            src={participant.avatar}
                            alt={participant.name}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      ))}
                      {meeting.participants.length > 4 && (
                        <div className="w-8 h-8 rounded-full bg-background-light flex items-center justify-center text-xs border border-white/10">
                          +{meeting.participants.length - 4}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      {meeting.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 text-xs rounded-full bg-background-light text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {meeting.hasTranscript && (
                        <span className="text-text-secondary" title="Transcript available">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </span>
                      )}
                      
                      {meeting.hasRecording && (
                        <span className="text-text-secondary" title="Recording available">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="glass-panel p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">No meetings found</h3>
              <p className="text-text-secondary mb-6">Try adjusting your search or filters to find what you're looking for.</p>
              <Link href="/record" className="primary-button inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Start a New Meeting
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
