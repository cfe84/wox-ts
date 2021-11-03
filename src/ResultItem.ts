import { JsonRPCAction } from "./JsonRPCAction";

export interface ResultItem {
  Title: string;
  Subtitle: string;
  IcoPath: string;
  JsonRPCAction: JsonRPCAction;
  /**
   * Higher is better
   */
  Score?: number;
}
