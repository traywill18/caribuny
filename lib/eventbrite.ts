export interface Event {
    id: string;
    name: { text: string };
    description: { text: string | null };
    url: string;
    start: { local: string };
    end: { local: string };
  }
  
  export async function fetchEventbriteEvents(): Promise<Event[]> {
    const API_URL = 'https://www.eventbriteapi.com/v3/events/search/?q=party';
    const TOKEN = process.env.EVENTBRITE_PRIVATE_TOKEN;
  
    try {
      console.log('Fetching from URL:', API_URL); // Debug the URL
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response Error:', errorText); // Debug response error
        throw new Error(`Error ${response.status}: ${errorText}`);
      }
  
      const data = await response.json();
      console.log('Response Data:', data); // Debug the response data
      return data.events || [];
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  }
  