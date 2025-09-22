import mongoose, { Schema, Document } from 'mongoose';

// 1. Interfaces for Mongoose Document Types
// These interfaces define the shape of our nested objects for type safety.

export interface IUserDetail extends Document {
  age: string;
  birthPlace: string;
  timeExpectation: string;
  zodiacSign: string;
  background: string;
  identity: string;
}

export interface IMoodji extends Document {
  name: string;
  description: string;
}

export interface IMoodSelection extends Document {
  category: string;
  genre: string;
}

export interface IMoodContext extends Document {
  headlineOption: string;
  headline: string;
  emotionTrigger: string;
}

// 2. Main Interface for the entire Mood Document
export interface IMood extends Document {
  userId: string;
  userDetails?: IUserDetail;
  moodji?: IMoodji;
  moodSelection?: IMoodSelection;
  moodContext?: IMoodContext;
  selectedDesires?: string[];
  aboutMood?: string;
}

// 3. Schema Definitions
// Each nested object gets its own schema for clear structure and validation.

const UserDetailSchema: Schema = new Schema({
  age: { type: String, required: false },
  birthPlace: { type: String, required: false },
  timeExpectation: { type: String, required: false },
  zodiacSign: { type: String, required: false },
  background: { type: String, required: false },
  identity: { type: String, required: false },
});

const MoodjiSchema: Schema = new Schema({
  name: { type: String, required: false },
  description: { type: String, required: false },
});

const MoodSelectionSchema: Schema = new Schema({
  category: { type: String, required: false },
  mood: { type: String, required: false },
  genre: { type: String, required: false },
});

const MoodContextSchema: Schema = new Schema({
  headlineOption: { type: String, required: false },
  headline: { type: String, required: false },
  emotionTrigger: { type: String, required: false },
});

// 4. Main Mood Schema
// This is the core schema for the "moods" collection.

const MoodSchema: Schema = new Schema(
  {
    userId: { type: String, unique: true },
    userDetails: { type: UserDetailSchema, required: false },
    moodji: { type: MoodjiSchema, required: false },
    moodSelection: { type: MoodSelectionSchema, required: false },
    moodContext: { type: MoodContextSchema, required: false },
    selectedDesires: { type: [String], required: false },
    aboutMood: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

// 5. Model Export
// This checks if the model already exists before creating it, which is important
// for Next.js development mode to prevent re-compilation errors.

const Mood = mongoose.models.Mood || mongoose.model<IMood>('Mood', MoodSchema);

export default Mood;