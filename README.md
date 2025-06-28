# Personalized Education Chat 🎓

An AI-powered educational assistant that helps users discover real courses from top learning platforms using live web search. Built with Next.js, Google Gemini AI, and the Tavily Search API.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/visheshsgowda7-7315s-projects/v0-personalized-education-chat)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/pYaEpDkNLOC)

## ✨ Features

- **🔍 Real-Time Course Search**: Live web search to find actual courses from top educational platforms
- **🤖 AI-Powered Recommendations**: Google Gemini AI provides personalized course suggestions
- **🎯 Multi-Platform Support**: Searches across Udemy, Coursera, edX, Pluralsight, LinkedIn Learning, and more
- **📊 Course Details**: Displays ratings, student counts, difficulty levels, and direct links
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Fast Performance**: Built with Next.js 15 and optimized for speed

## 🚀 Live Demo

Visit the live application: [https://vercel.com/visheshsgowda7-7315s-projects/v0-personalized-education-chat](https://vercel.com/visheshsgowda7-7315s-projects/v0-personalized-education-chat)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **AI**: Google Gemini AI (via AI SDK)
- **Search**: Tavily Search API
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- Google Generative AI API key
- Tavily Search API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/personalized-education-chat.git
   cd personalized-education-chat
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Google Gemini API Key
   # Get your API key from: https://makersuite.google.com/app/apikey
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key_here
   
   # Tavily Search API Key (for web search)
   # Get your API key from: https://tavily.com
   TAVILY_API_KEY=your_tavily_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🔑 API Keys Setup

### Google Generative AI API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your `.env.local` file

### Tavily Search API Key

1. Visit [Tavily](https://tavily.com)
2. Sign up for an account
3. Navigate to your dashboard
4. Generate an API key
5. Copy the key and add it to your `.env.local` file

## 🎯 Usage

### Basic Usage

1. **Start a Conversation**: Type your learning query in the chat input
2. **Get Course Recommendations**: The AI will search for relevant courses and display them
3. **Explore Courses**: Click on course links to visit the actual course pages
4. **Refine Your Search**: Ask follow-up questions to get more specific recommendations

### Example Queries

- "Find React courses for beginners"
- "I want to learn Python programming"
- "Show me advanced data science courses"
- "Digital marketing courses on Coursera"
- "Machine learning courses with certificates"

### Course Information

Each course result includes:
- **Title**: Course name and description
- **Provider**: Platform (Udemy, Coursera, edX, etc.)
- **Level**: Beginner, Intermediate, or Advanced
- **Rating**: Star rating out of 5
- **Students**: Number of enrolled students
- **Direct Link**: Click to visit the course page

## 🏗️ Project Structure

```
personalized-education-chat/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # AI chat API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── loading.tsx               # Loading component
│   └── page.tsx                  # Main chat interface
├── components/
│   ├── ui/                       # shadcn/ui components
│   └── theme-provider.tsx        # Theme provider
├── hooks/
│   ├── use-mobile.tsx            # Mobile detection hook
│   └── use-toast.ts              # Toast notifications
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── .env.local                    # Environment variables
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google Gemini AI API key | Yes |
| `TAVILY_API_KEY` | Tavily Search API key | Yes |

### Customization

#### Modify Search Behavior

Edit `app/api/chat/route.ts` to customize:
- Search queries and platforms
- Course extraction logic
- AI model parameters

#### Update UI Components

The interface uses shadcn/ui components. Customize:
- Colors in `tailwind.config.ts`
- Component styles in `components/ui/`
- Layout in `app/page.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in the Vercel dashboard
   - Deploy

3. **Set Environment Variables**
   
   In your Vercel project dashboard:
   - Go to Settings → Environment Variables
   - Add `GOOGLE_GENERATIVE_AI_API_KEY`
   - Add `TAVILY_API_KEY`

### Other Deployment Options

- **Netlify**: Similar process to Vercel
- **Railway**: Connect GitHub and add environment variables
- **Docker**: Use the included Dockerfile for containerization

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Features

1. **New Course Platforms**: Update the platform detection logic in `extractCourseInfo()`
2. **Enhanced AI Responses**: Modify the system prompt in `route.ts`
3. **Additional Search Parameters**: Extend the search tool parameters
4. **UI Improvements**: Add new components in `components/ui/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [v0.dev](https://v0.dev) for the initial project scaffolding
- [Google AI](https://ai.google.dev/) for the Gemini AI model
- [Tavily](https://tavily.com) for the search API
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com) for hosting and deployment

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/personalized-education-chat/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

## 🔮 Roadmap

- [ ] User authentication and course bookmarking
- [ ] Course comparison features
- [ ] Learning path recommendations
- [ ] Integration with more educational platforms
- [ ] Offline course caching
- [ ] Advanced filtering options

---

**Built with ❤️ using v0.dev and modern web technologies**
