import { NextResponse } from "next/server";

export function GET(response) {
    return NextResponse.json({
        message: 'worked api getting data'
    })

}