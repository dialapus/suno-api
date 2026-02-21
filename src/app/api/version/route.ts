import { NextResponse } from "next/server";
import { corsHeaders } from "@/lib/utils";

export const dynamic = "force-dynamic";

const BUILD_VERSION = "2026-02-21-v2-nocaptcha-first";
const BUILD_TIME = new Date().toISOString();

export async function GET() {
  return new NextResponse(JSON.stringify({ 
    version: BUILD_VERSION, 
    built: BUILD_TIME,
    timestamp: Date.now()
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders
    }
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders
  });
}
