import React, { useState } from "react";

export const useLoading = (defaultLoading = true) => {
  const [isLoading, setIsLoading] = useState(defaultLoading);

  return { isLoading, setIsLoading };
};
