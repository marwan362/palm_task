import axios from 'axios';
import Config from 'react-native-config';

type WellnessEntry = {
  mood: string;
  sleep: number;
  notes: string;
};

type WellnessResponse = {
  message: string;
  suggestions: string[];
};

export const createWellnessEntry = (
  entry: WellnessEntry,
): Promise<{ data: WellnessResponse }> => {
  return axios.post(`${Config.API_BASE_URL}`, entry);
};

export const getWellnessHistory = (): Promise<{
  data: WellnessEntry[];
}> => {
  return axios.get(`${Config.API_BASE_URL}`);
};
