import { action } from "typesafe-actions";
import { Ticket } from "../models/Ticket";

// use typescript enum rather than action constants
export enum actionTypes {
  ADD = "ADD",
  DELETE = "DELETE",
  TICKETSLIST = "TICKETSLIST",
}

export const todoActions = {
  add: (item: string) => action(actionTypes.ADD, item),
  delete: (idx: number) => action(actionTypes.DELETE, idx),
  ticketList: (data: Ticket[]) => action(actionTypes.TICKETSLIST, data)
};