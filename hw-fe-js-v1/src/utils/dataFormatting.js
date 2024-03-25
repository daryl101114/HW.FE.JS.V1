export const formattingOptions = {
  text: textFormatter,
  date: dateFormatter,
  list: listFormatter,
  address: addressFormatter,
};
function textFormatter(formatArr, dataObject) {
  try {
    let formattedText = "";
    formatArr.forEach((prop, idx) => {
      if (idx < formatArr.length - 1) {
        formattedText += dataObject[prop] + " ";
      } else {
        formattedText += dataObject[prop];
      }
    });
    return formattedText;
  } catch (error) {
    console.error("Something went wrong while formatting text", error);
    return null;
  }
}

function dateFormatter(formatArr, dataObject) {
  let formattedDate = "";
  try {
    formatArr.forEach((prop) => {
      const date = new Date(dataObject[prop]);
      const options = { month: "short", day: "numeric" };
      //   console.log(date);
      formattedDate += !isNaN(date.getTime())
        ? date.toLocaleDateString("en-US", options)
        : dataObject[prop];
    });
    return formattedDate;
  } catch (error) {
    console.log("An Error Occured while converting to Date", error);
    return null;
  }
}

function listFormatter(formatArr, dataObject) {
  let formattedList = "";
  try {
    formatArr.forEach((prop) => {
      formattedList += dataObject[prop]?.toLocaleString() || "Non Listed";
    });
    return formattedList;
  } catch (error) {
    console.error("Failed to format list", error);
    return null;
  }
}

function addressFormatter(formatArr, dataObject) {
  let formattedAddress = "";
  try {
    formatArr.forEach((prop, idx) => {
      if (idx < formatArr.length - 1) {
        formattedAddress += dataObject[prop] ? dataObject[prop] + ", " : "";
      } else {
        formattedAddress += dataObject[prop] ? dataObject[prop] : "";
      }
    });
    return formattedAddress;
  } catch (error) {
    console.error("Something went wrong while formatting the array", error);
    return null;
  }
}
