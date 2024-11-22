import { connectDatabase } from "@/lib/connectDB";
import { topicModel } from "@/lib/models/topicModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const data = await request.json();
  const { id } = params;

  await connectDatabase();

  try {
    const newData = await topicModel.findByIdAndUpdate(id, data);

    return NextResponse.json(
      {
        result: newData,
        msg: "data updated successfully",
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        msg: "something went wrong to update",
        success: false,
      },
      { status: 501 }
    );
  }
}

export async function GET(request, { params }) {
  const { id } = params;

  await connectDatabase();
  try {
    const data = await topicModel.findOne({_id : id});
    if (!data) {
      return NextResponse.json(
        { msg: "something went wrong", success: false },
        { status: 401 }
      );
    } else {
      return NextResponse.json(
        { result: data, success: true },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      { msg: "data fetched failed", success: false },
      { status: 401 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectDatabase();
  try {
    const data = await topicModel.findByIdAndDelete(id);
    return NextResponse.json({
      result: data,
      msg: "data deleted successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "sorry something went wrong",
      success: false,
    });
  }
}
