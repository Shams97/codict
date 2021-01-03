import { useEffect } from "react";

/**
 *
 * @param {*} options array of objects returned from db in teh form of
 * [
 *  {
 *     value: 'name',
 *     label: 'name'
 *  }
 * ]
 * @param {*} spreadWords dispatch function used to update the wordsCtx
 *
 * A React hook that returns an array of objects containing label and
 * value to be used inside react-select library Input field
 */
export default function useLabels(options, spreadWords) {
  useEffect(() => {
    spreadWords(options);
  }, []);
}
