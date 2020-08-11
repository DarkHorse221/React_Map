export const getRouteName = (path) => {
  const paths = {
    "/vms": "Virtual Messaging System",
    "/cctv": "CCTV",
    "/ims": "Incident Management System",
    "/parking":"Parking Managment System",
    "/beacons": "Beacons"
  }
  return paths[path];
}