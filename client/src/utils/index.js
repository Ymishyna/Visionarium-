import FileSaver from 'file-saver'; // FileSaver library to save files from the browser to the local machine

import { surpriseMePrompts } from '../constants'; 

// Function to get a random prompt from the surpriseMePrompts array 
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

// Function to download an image from the browser to the local machine 
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}