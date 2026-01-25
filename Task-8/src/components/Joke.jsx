import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography, CircularProgress } from '@mui/material';
import { RefreshCw, Quote, SmilePlus } from 'lucide-react';

const JokeGenerator = () => {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Concept: Effects - Fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    setRefreshing(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Concept: Events - Handling the button click
  const handleNewJokeClick = () => {
    fetchJoke();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-xl border-t-4 border-blue-500">
        <CardContent className="flex flex-col items-center text-center p-8">
          <div className="bg-blue-100 p-3 rounded-full mb-4">
            <SmilePlus className="text-blue-600 w-8 h-8" />
          </div>

          <Typography variant="h5" className="font-bold text-slate-800 mb-6">
            Joke Generator
          </Typography>

          {loading ? (
            <div className="h-32 flex items-center">
              <CircularProgress size={30} />
            </div>
          ) : (
            <div className="space-y-4 min-h-32">
              <div className="relative">
                <Quote className="absolute -left-4 -top-2 opacity-10 w-8 h-8" />
                <Typography variant="body1" className="italic text-slate-600 text-lg">
                  "{joke.setup}"
                </Typography>
              </div>
              
              <Typography variant="h6" className="font-semibold text-blue-600 animate-in fade-in duration-700">
                — {joke.punchline}
              </Typography>
            </div>
          )}

          <div className="mt-8 w-full">
            <Button
              variant="contained"
              fullWidth
              disabled={refreshing}
              onClick={handleNewJokeClick}
              startIcon={
                <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              }
              sx={{ 
                backgroundColor: '#3b82f6',
                '&:hover': { backgroundColor: '#2563eb' },
                textTransform: 'none',
                fontWeight: 'bold',
                paddingY: '10px'
              }}
            >
              {refreshing ? 'Fetching...' : 'Tell Me Another'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JokeGenerator;