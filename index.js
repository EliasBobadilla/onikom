/**
 * Get differences between two string arrays
 */
function difference(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}

/**
 * Calculate added and removed items in two arrays
 */
function compute_differences(before, after) {
  let result = {
    added: {},
    removed: {},
  };

  const keys = [
    ...new Set(Object.keys(before).concat(Object.keys(after))),
  ].sort();

  for (const key of keys) {
    if (!before[key]) {
      result.added[key] = after[key];
      continue;
    }
    if (!after[key]) {
      result.remove[key] = before[key];
      continue;
    }

    const removed = difference(before[key], after[key]);
    const added = difference(after[key], before[key]);

    if (removed.length) result.removed[key] = removed;
    if (added.length) result.added[key] = added;
  }

  return result;
}

const obj1 = {
  "Mercedes-Benz": ["AMG GT", "S-Class"],
  Porsche: ["911", "Boxster", "Roadster"],
  Tesla: ["Model S", "Model X"],
};

const obj2 = {
  Acura: ["Integra", "RSX"],
  "Mercedes-Benz": ["Roadster"],
  Porsche: ["911", "Roadster"],
  Tesla: ["Model 3", "Model Y"],
};

const result = compute_differences(obj1, obj2);

console.log(result);
