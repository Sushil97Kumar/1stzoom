# CRUD Rest API Nodejs with Typescript

Sample Nodejs API with Typescript and Mongodb

## Script:

- npm install
- npm start

## Nodejs Typescript project

Follow these steps to create a new nodejs project with Typescript

- npm init
- tsc --init
- configure tsconfig.json file:
  - "outDir": "./build", ( Redirect output structure to the directory. )
  - "rootDir": "./src", ( Specify the root directory of input files. Use to control the output directory structure with outDir.)

## Mongodb

Mongodb options you can use a local or a remote database:

- Local
- [Mongodb Atals](https://account.mongodb.com/account/login)

## Endponts:
###  Postman collection
-  https://api.postman.com/collections/15627309-3c3d6e6a-a8fe-4779-9a7b-09694621f3fb?access_key=PMAT-01GXJM2H16D0RJ8BAW528QJNBT
### Camera:

- localhost:3005/api/camera/addcamera
- localhost:3005/api/camera/listingbycameraid
- localhost:3005/api/camera/allcameralisting
- localhost:3005/api/camera/updatecamerainformation
- localhost:3005/api/camera/deletecamera  (Both deleted camera and network camera)


### Network Camera:

- localhost:3005/api/cameranetwork/deletecameranetwork
- localhost:3005/api/cameranetwork/update
- localhost:3005/api/cameranetwork/allcameranetworklisting
- localhost:3005/api/cameranetwork/listingbycameranetworkid
- localhost:3005/api/cameranetwork/addcameranetwork