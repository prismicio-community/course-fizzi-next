import { exitPreview } from "@prismicio/next";

/**
 * This endpoint exits a preview session.
 */
export function GET() {
  return exitPreview();
}
