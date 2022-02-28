"use strict";


/** choice
 * 
 * @param {Array} items an array of items
 * @returns random item from the array
 */

function choice(items) {
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

/** remove
 * 
 * @param {Array} items an array of items
 * @param {*} item an item inside the array
 * @returns item that was removed or undefined if it doesn't exist
 */

function remove(items, item) {
  const idx = items.indexOf(item);
  if (idx === -1) {
    return;
  }

  return items.splice(idx, 1);
}

export { choice, remove };