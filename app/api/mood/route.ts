import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import Mood from '@/models/Mood'; // Import your Mongoose Mood model

// GET API route to fetch a user's latest mood data
export async function GET(req: NextRequest) {
  try {
    // 1. Connect to the database using your custom function
    await connectDB();

    // 2. Get the user ID from the request URL's query parameters
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required in the query parameters.' },
        { status: 400 }
      );
    }

    // 3. Find the user's mood document using the Mongoose model
    const moodDocument = await Mood.findOne({ userId: userId });

    if (!moodDocument) {
      return NextResponse.json(
        { message: 'Mood data not found for this user.' },
        { status: 404 }
      );
    }

    // 4. Return the found document
    return NextResponse.json(moodDocument, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Internal server error.', error: (error as Error).message },
      { status: 500 }
    );
  }
}

// POST API route to save and update a user's mood data
export async function POST(req: NextRequest) {
  try {
    // 1. Connect to the database
    await connectDB();

    // 2. Parse the request body
    const { userId, formData } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required.' },
        { status: 400 }
      );
    }

    // 3. Use Mongoose's findOneAndUpdate for the upsert logic
    const updateDocument = {
      $set: {
        ...formData,
      },
      $setOnInsert: {
        createdAt: new Date(),
      },
    };

    const result = await Mood.findOneAndUpdate(
      { userId: userId },
      updateDocument,
      {
        new: true, // Return the updated document
        upsert: true, // Create a new document if one doesn't exist
        runValidators: true, // Run schema validators on the update
      }
    );

    // 4. Return the result of the operation
    const responseBody = {
      message: 'Mood data saved successfully.',
      data: result,
    };
    return NextResponse.json(responseBody, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Internal server error.', error: (error as Error).message },
      { status: 500 }
    );
  }
}