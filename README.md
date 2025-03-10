# Eliza.ai - AI Meeting Notes Assistant

Eliza is an intelligent meeting assistant that helps you record, transcribe, and summarize your meetings, creating a searchable knowledge base for better information retrieval and recall.

## Features

- **Automatic Recording**: Connect with Zoom, Google Meet, and Microsoft Teams to automatically record your meetings.
- **Transcription**: Generate accurate transcripts with speaker identification and timestamps.
- **AI Summaries**: Create intelligent summaries, action items, and key takeaways from your meetings.
- **Knowledge Base**: Build a searchable repository of all your meeting information.
- **People Insights**: Track meeting participants and build profiles based on their contributions.
- **Integrations**: Connect with popular meeting platforms and tools you already use.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **AI/ML**: OpenAI, Whisper for transcription

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/eliza.git
   cd eliza
   ```

2. Install dependencies
   ```
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies (when ready)
   cd ../backend
   npm install
   ```

3. Run the development server
   ```
   # Frontend
   cd frontend
   npm run dev
   
   # Backend (when ready)
   cd ../backend
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Development Structure

- `/frontend`: Next.js application
  - `/app`: App router for Next.js pages
  - `/components`: Reusable React components
  - `/public`: Static assets
  
- `/backend`: Node.js/Express server (coming soon)
  - `/routes`: API routes
  - `/controllers`: Business logic
  - `/models`: Data models
  - `/services`: External service connections

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
