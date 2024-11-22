import { connectDatabase } from "@/lib/connectDB";
import { topicModel } from "@/lib/models/topicModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  let data = await request.json();
  
  await connectDatabase();
  try {
    const dataa = await topicModel.create(data);
    return NextResponse.json(
      {
        dataa,
        msg: "data added successfully",
        success: true,
      },
      { statsu: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        msg: "data added failed",
        success: false,
      },
      { statsu: 501 }
    );
  }
}

export async function GET() {
  await connectDatabase();
  const data = await topicModel.find();

  try {
    if (data) {
      return NextResponse.json(
        {
         result : data,
          msg: "data fetched successfully",
          success: true,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        msg: "data fetched failed",
        success: false,
      },
      { statsu: 501 }
    );
  }
}
