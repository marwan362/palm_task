const wellnessData = [];

exports.createSuggestion = (req, res) => {
  const { mood, sleep, notes } = req.body;

  const newEntry = {
    mood,
    sleep,
    notes,
    suggestions: [
      `Based on your ${mood} mood, try a 10-minute meditation`,
      `With ${sleep} hours of sleep, consider a power nap today`,
      `For your notes about ${notes}, journaling might help`,
      "Drink more water throughout the day",
      "Take a short walk outside",
    ],
  };

  wellnessData.push(newEntry);
  res.json({ message: "Data received", suggestions: newEntry.suggestions });
};

exports.getSuggestions = (req, res) => {
  res.json(wellnessData);
};
