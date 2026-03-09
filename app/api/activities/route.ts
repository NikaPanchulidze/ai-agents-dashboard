import { NextResponse } from "next/server";
import { Activity } from "@/lib/types";

export async function GET() {
  const activities: Activity[] = [
    {
      id: "1",
      user: "agent_01",
      type: "lead_analysis",
      status: "success",
      createdAt: "2026-03-01T12:10:00Z",
      description: "Analysed lead from Zoopla listing #4821.",
    },
    {
      id: "2",
      user: "agent_05",
      type: "message_reply",
      status: "processing",
      createdAt: "2026-03-02T10:10:00Z",
      description:
        "Preparing automated reply to inbound enquiry from client #882.",
    },
    {
      id: "3",
      user: "agent_03",
      type: "document_parse",
      status: "failed",
      createdAt: "2026-03-03T09:00:00Z",
      description: "Failed to parse corrupted PDF from applicant #291.",
    },
    {
      id: "4",
      user: "agent_02",
      type: "lead_analysis",
      status: "success",
      createdAt: "2026-03-04T11:20:00Z",
      description: "Scored and enriched inbound lead from RightMove campaign.",
    },
    {
      id: "5",
      user: "agent_04",
      type: "message_reply",
      status: "failed",
      createdAt: "2026-03-05T08:45:00Z",
      description: "Reply failed — SMTP connection dropped mid-send.",
    },
    {
      id: "6",
      user: "agent_03",
      type: "document_parse",
      status: "processing",
      createdAt: "2026-03-05T13:15:00Z",
      description: "Parsing tenancy agreement submitted by applicant #304.",
    },
    {
      id: "7",
      user: "agent_02",
      type: "lead_analysis",
      status: "success",
      createdAt: "2026-03-06T14:00:00Z",
      description: "Completed lead scoring for March acquisition batch.",
    },
    {
      id: "8",
      user: "agent_01",
      type: "document_parse",
      status: "processing",
      createdAt: "2026-03-06T16:30:00Z",
      description: "Extracting clauses from uploaded contract for client #119.",
    },
    {
      id: "9",
      user: "agent_05",
      type: "message_reply",
      status: "failed",
      createdAt: "2026-03-07T09:10:00Z",
      description:
        "Auto-reply blocked — recipient address returned a hard bounce.",
    },
    {
      id: "10",
      user: "agent_04",
      type: "lead_analysis",
      status: "success",
      createdAt: "2026-03-07T12:25:00Z",
      description:
        "Analysed and flagged high-priority lead from Zoopla listing #5103.",
    },
  ];

  return NextResponse.json(activities);
}
