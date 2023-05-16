import { useState, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useAppDispatch } from "../store/store";
import { addNewPage } from "../store/features/recipeSlice";
import { IRecipes } from "../types/recipes";

export const useFetching = (recipesList: IRecipes[], canLoad: boolean) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 500
  });
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (canLoad) return;

    if (inView && recipesList.length && recipesList.length < 500) {
      dispatch(
        addNewPage(recipesList[recipesList.length - 1]._links.next.href)
      );
      console.log('inview')
    }
  }, [inView, canLoad, dispatch, recipesList ]);

  return { ref };
};
