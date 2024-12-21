const API_URL = "https://www.eventbriteapi.com/v3/events/search/";
const TOKEN = process.env.EVENTBRITE_PRIVATE_TOKEN;

export interface EventbriteEvent {
  id: string;
  name: { text: string };
  description: { text: string };
  url: string;
  start: { local: string };
  end: { local: string };
}

export async function fetchEventbriteEvents(query: string = "party"): Promise<EventbriteEvent[]> {
  try {
    const response = await fetch(`${API_URL}?q=${query}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(errorDetails.error_description || "Failed to fetch events");
    }

    const data = await response.json();
    console.log("Raw Eventbrite API Response:", data); // Debugging

    return data.events || [];
  } catch (error) {
    console.error("Error in fetchEventbriteEvents:", error);
    throw error;
  }
}
