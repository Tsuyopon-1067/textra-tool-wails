import React from "react";

export const HandleButtonClick = (
  operationFunction: Promise<string>,
  setResultText: React.Dispatch<React.SetStateAction<string>>,
  setLoadingState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoadingState(true);
  operationFunction
    .then((result) => {
      setResultText(result);
      setLoadingState(false);
    })
    .catch((error) => {
      console.error(error);
    });
};
