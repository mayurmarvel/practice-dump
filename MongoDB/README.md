# MongoDB Basics

## Launching Mongosh -> mongosh

## View Databases 
```
show dbs
```
## Using a Databases 
#### using existing
```
use appdb
```
#### using new db + create
```
use newdbname
```
## Showing Collections (Tables in DB)
```
show collections
```
## Deleting DB 
#### Enter into that specific DB and then
```
db.dropDatabase()
```
## Inserting Data in DB 
#### Enter into that specific DB and then
Entering a **Single Data** -> **insertOne()**
```
db.users.insertOne({pass an object})
```
Entering a **Multiple Data** -> **insertMany()**
```
db.users.insertOne([{Array of objects},{}])
```
## Reading All Files in a Collection
```
db.collectionName.find()
```
# Querying Commands
## Sorting based on Files
**Command**
```
db.collectionName.find().sort({object to use sort})
```
**Example**
```
db.users.find().sort({name : 1}) // 1 - means ascending
```
## limiting the Query Results
**Command**
```
db.collectionName.find().sort({object to use sort}).limit(noOfResults)
```
**Example**
```
db.users.find().sort({name : 1}).limit(2) // 2 results
```
## Skip a result in the Query Results
**Command**
```
db.collectionName.find().skip(noOfResToSkip).limit(noOfResults)
```
**Example**
```
db.collectionName.find().skip(1).limit(2)
```
