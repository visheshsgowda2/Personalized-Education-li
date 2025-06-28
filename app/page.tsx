"use client"

import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Star, Users, ExternalLink, GraduationCap, Search, AlertCircle } from "lucide-react"

export default function PersonalizedEducationChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  const renderMessage = (message: any) => {
    // Handle tool calls and their results
    if (message.toolInvocations) {
      return (
        <div className="space-y-4">
          {message.toolInvocations.map((toolInvocation: any, index: number) => {
            if (toolInvocation.toolName === "searchCourses" && toolInvocation.result) {
              const { topic, level, courses, totalFound, searchPerformed, error } = toolInvocation.result
              return (
                <div key={index} className="space-y-4">
                  <div className="bg-orange-100 border border-orange-200 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-900 flex items-center gap-2 mb-2">
                      <Search className="w-5 h-5" />
                      {searchPerformed ? "Found" : "Search Limited - Showing"} {totalFound} courses for "{topic}"
                      {level !== "all" && ` (${level} level)`}
                    </h3>
                    {error && (
                      <div className="flex items-center gap-2 text-orange-700 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {error}
                      </div>
                    )}
                  </div>

                  <div className="grid gap-4">
                    {courses.map((course: any, courseIndex: number) => (
                      <Card key={courseIndex} className="border-orange-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-800 flex-1 pr-2">{course.title}</h4>
                            <Badge
                              variant="secondary"
                              className={`ml-2 ${
                                course.level === "beginner"
                                  ? "bg-green-100 text-green-700"
                                  : course.level === "intermediate"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                              }`}
                            >
                              {course.level}
                            </Badge>
                          </div>

                          <p className="text-gray-600 text-sm mb-3">{course.description}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                {course.rating}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {course.students.toLocaleString()} students
                              </span>
                              <span className="text-orange-600 font-medium">{course.provider}</span>
                            </div>

                            <a
                              href={course.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              View Course
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
      )
    }

    // Handle regular text content
    return <p className="text-gray-700 whitespace-pre-wrap">{message.content}</p>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Personalized Education</h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your AI-powered learning companion with real-time web search. Ask me about any topic and I'll find actual
              courses from top platforms!
            </p>
          </div>

          {/* Chat Container */}
          <Card className="shadow-lg border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Your Personalized learning Companion
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages Area */}
              <div className="h-[500px] overflow-y-auto p-6 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center py-12">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to Learn ?</h3>
                    <p className="text-gray-600 mb-6">
                      I'll search the web to find actual courses from top platforms like Udemy, Coursera, and edX!
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                        "Find React courses"
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                        "Python for beginners"
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                        "Advanced data science"
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                        "Digital marketing courses"
                      </Badge>
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-3 ${
                        message.role === "user"
                          ? "bg-orange-500 text-white"
                          : "bg-white border border-orange-200 shadow-sm"
                      }`}
                    >
                      {message.role === "user" ? (
                        <p className="text-white">{message.content}</p>
                      ) : (
                        renderMessage(message)
                      )}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-orange-200 shadow-sm rounded-lg px-4 py-3 max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                        <span className="text-gray-600 text-sm">Searching the web for courses...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-orange-200 p-4 bg-orange-50">
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="What would you like to learn? (e.g., 'Find me Python courses for beginners')"
                    className="flex-1 border-orange-300 focus:border-orange-500 focus:ring-orange-500"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="border-orange-200">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Real-Time Search</h3>
                <p className="text-gray-600 text-sm">
                  Live web search to find the latest courses from top educational platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Working Links</h3>
                <p className="text-gray-600 text-sm">
                  All course links are real and lead directly to the actual course pages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Top Platforms</h3>
                <p className="text-gray-600 text-sm">
                  Searches across Udemy, Coursera, edX, Pluralsight, and other leading platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
