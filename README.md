# Onikom

You are given two input strings before and after that are in valid JSON format.
Each input contains a set of car makes, and nested under each make a list of car models.
The general structure of the JSON data looks like this:

```json
{
  "Make0": ["Model0", "Model1", ...],
  "Make1": ["Model0", "Model1", ...]
}
```

Your task is to implement compute_differences which returns a string that is in JSON format containing makes and models that were added and removed from the after data set from the before data set. The top level of your output JSON formatted string will have the keys added and removed with values in the same format as the original JSON data. Results at each level of the JSON dictionary needs to be alphabetically sorted. Your output should look like this:

```json
{
 "added": {
  "Make0": [
   "Model0",
   "Model1",
   ...
  ],
  "Make1": [
   "Model0",
   "Model1",
   ...
  ],
  ...
 },
 "removed": {
  "Make0": [
   "Model0",
   "Model1",
   ...
  ],
  "Make1": [
   "Model0",
   "Model1",
   ...
  ],
  ...
 }
}
```

- You may use any resources you need including any common libraries available in the language of your choosing.
- Feel free to use any language. Below are some examples of function signature in various languages.

**JavaScript**: `function compute_differences(before, after)`

**Python**: def `compute_differences(before, after):`

**Java**: `public static String compute_differences(String before, String after)`

**C**++: `string compute_differences(string before, string after)`

## Example

**Before:**

```json
{
  "Mercedes-Benz": ["AMG GT", "S-Class"],
  "Porsche": ["911", "Boxster", "Roadster"],
  "Tesla": ["Model S", "Model X"]
}
```

**After:**

```json
{
  "Acura": ["Integra", "RSX"],
  "Mercedes-Benz": ["Roadster"],
  "Porsche": ["911", "Roadster"],
  "Tesla": ["Model 3", "Model Y"]
}
```

**Output:**

```json
{
  "added": {
    "Acura": ["Integra", "RSX"],
    "Mercedes-Benz": ["Roadster"],
    "Tesla": ["Model 3", "Model Y"]
  },
  "removed": {
    "Mercedes-Benz": ["AMG GT", "S-Class"],
    "Porsche": ["Boxster"],
    "Tesla": ["Model S", "Model X"]
  }
}
```
