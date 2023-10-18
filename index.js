class Formatter {
  //add static methods here
  
    static capitalize(string) {
      if (string.charAt(0).toLowerCase() === string.charAt(0)) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      } else {
        return string;
      }
    }
  
    static sanitize(string) {
      const regex = string.replace(/[^-a-zA-Z0-9' -]/g, "");
      const empty = "";
      if (string === "!") {
        return empty;
      } else {
        return regex;
      }
    }
  
    static titleize(string) {
      const exceptions = new Set([
        "the",
        "a",
        "an",
        "but",
        "of",
        "and",
        "for",
        "at",
        "by",
        "from",
      ]);
  
      const stringArray = string.split(" ");
  
      for (let i = 0; i < stringArray.length; i++) {
        if (!exceptions.has(stringArray[i])) {
          stringArray[i] =
            stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
        }
      }
  
      if (stringArray.length > 0) {
        stringArray[0] =
          stringArray[0].charAt(0).toUpperCase() + stringArray[0].slice(1);
      }
  
      return stringArray.join(" ");
    }
  }
