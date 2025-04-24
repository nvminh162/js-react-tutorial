# JSON Server

A simple REST API mock server based on [json-server](https://github.com/typicode/json-server).

## Installation

```bash
# Initialize a new Node.js project
npm init -y

# Install json-server
npm install json-server
```

## Configuration

Edit your `package.json` file to include the following script:

```json
"scripts": {
    "start": "json-server --watch db.json --port 3000",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

## Usage

1. Create a `db.json` file in your project root with your mock data
2. Start the server:
   ```bash
   npm start
   ```
3. Access your API at `http://localhost:3000`

## Examples

### Sample `db.json`
```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { 
    "name": "typicode" 
  }
}
```

### Available Routes
- GET /posts
- GET /posts/1
- POST /posts
- PUT /posts/1
- PATCH /posts/1
- DELETE /posts/1

## More Information

For advanced usage and options, refer to the [official documentation](https://github.com/typicode/json-server).