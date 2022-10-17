import { useEffect, useRef, useCallback } from "react";
export const scrollToTop = () => {};

export const formatNumber = (number) => {
  let numberArr = number.toString().split(".");
  if (numberArr[1]) {
    return parseFloat(number).toLocaleString("en-IN", {
      minimumFractionDigits: 3,
    });
  } else {
    return parseFloat(number).toLocaleString("en-IN", {});
  }
};

export const useDebounce = (fn, delay, dep = []) => {
  const { current } = useRef({ fn, timer: null });
  useEffect(
    function () {
      current.fn = fn;
    },
    [fn]
  );

  return useCallback(function f(...args) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.fn.call(this, ...args);
    }, delay);
  }, dep);
};
