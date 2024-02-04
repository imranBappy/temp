/*
    1. make and object with key and value pair
    2. add new key value pair to the object key will be district name and value will be an array 
    3. loop through all upzilla and push the object to the district

*/

const fs = require("fs");

const districtFile = fs.readFileSync("district.json", "utf8");
const districtData = JSON.parse(districtFile);

const upzillaFile = fs.readFileSync("upzilla.json", "utf8");
const upzillaData = JSON.parse(upzillaFile);

const district = {
  1: "dhaka",
};

const output = {};

for (let i = 0; i < districtData.length; i++) {
  const dt = districtData[i];
  const districtName = dt.name?.toLowerCase().replace(/ /g, "_");
  district[dt.id] = districtName;
  output[districtName] = [];
}
for (let i = 0; i < upzillaData.length; i++) {
  const dt = upzillaData[i];
  const districtName = district[dt.district_id];
  const upzillaName = dt.name?.toLowerCase().replace(/ /g, "_");
  const obj = {
    id: dt.id,
    bn_name: dt.bn_name,
    label: dt.name,
    value: upzillaName,
  };
  output[districtName].push(obj);
}
console.log(output.pirojpur);
fs.writeFileSync("data.json", JSON.stringify(output), "utf8");
