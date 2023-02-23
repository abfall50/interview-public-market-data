import { Trade } from "../context/symbolContext";

export type SortableObject = {
  [key: string]: number | string | boolean;
};

function merge<T extends Trade>(
  left: T[],
  right: T[],
  prop: keyof T
): T[] {
  const result = [];
  let leftProp;
  let rightProp;

  while (left.length && right.length) {
    if (typeof left[0][prop] === "string") {
      leftProp = parseFloat(left[0][prop] as unknown as string);
    } else {
      leftProp = left[0][prop];
    }
    if (typeof right[0][prop] === "string") {
      rightProp = parseFloat(right[0][prop] as unknown as string);
    } else {
      rightProp = right[0][prop];
    }

    if (leftProp > rightProp) {
      result.push(left.shift() as T);
    } else {
      result.push(right.shift() as T);
    }
  }

  while (left.length) {
    result.push(left.shift() as T);
  }

  while (right.length) {
    result.push(right.shift() as T);
  }

  return result;
}

export function mergesort<T extends Trade>(
  arr: T[] | null | undefined,
  prop: keyof T
): T[] {
  if (!arr) return [];
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergesort(left, prop), mergesort(right, prop), prop);
}
