import { FILTERS } from "../constants/constants";

export function receiveFilters(
  filters = { answered: false, unanswered: true }
) {
  return {
    type: FILTERS,
    filters,
  };
}
