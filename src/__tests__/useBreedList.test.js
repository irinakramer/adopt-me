import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks';
import useBreedList from "../useBreedList.js";

test("gives an empty list with no animal", async () => {
    const { result } = renderHook(() => useBreedList(""))
    const [breedList, status] = result.current;

    expect(breedList).toHaveLength(0);
    expect(status).toBe("unloaded");
});

test ("gives back breeds with animal", async () => {
    const breeds = [
        "Havanese",
        "Bichon Frise",
        "Poodle",
        "Maltese",
        "Golden Retriever",
        "Labrador",
        "Husky",
      ];

      fetch.mockResponseOnce(JSON.stringify({
          animal: "god",
          breeds
      }));

      const { result, waitForNextUpdate } = renderHook(() => useBreedList("dog"));

      await waitForNextUpdate();

      const [breedList, status] = result.current;
      expect(status).toBe("loaded");
      expect(breedList).toEqual(breeds);

})