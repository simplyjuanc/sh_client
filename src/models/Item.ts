import { Money } from "./Money";

export type Item = {
  id: string;
  condition?: ItemCondition;
  ownerId: string;
  notes?: string;
  price: Money;
  releaseId: string;
  format?: FormatType
}

export type ItemCondition = "MINT" | "NEAR_MINT" | "VERY_GOOD_PLUS" | "VERY_GOOD" | "GOOD_PLUS" | "GOOD" | "FAIR" | "POOR"

export type FormatType = "VINYL" | "CD" | "CASSETTE" | "DIGITAL" | "OTHER"

