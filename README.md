# Bitly Url Shortener

Node.js urlshortener using bitly

## Getting Started

Just simply install the npm package and you can rock!

### Installing and Usage

First, you need to install the package via npm
```
npm install bitlyurl
```

And import the package in your project directory

```
const bitlyUrl = require('bitlyurl')
```

Before using the bitlyShortenUrl function, YOU MUST HAVE THE BITLY ACCESS TOKEN TO GENERATE BITLY LINKS

1) First, go to bitly website and login or create your account

2) Second, go to your account profile and GENERIC ACCESS TOKEN

![GENERIC ACCESS TOKEN](https://user-images.githubusercontent.com/18108171/65507521-24112280-def4-11e9-874e-047727ac444c.png)

3) Copy the access token and pass with function call.

Then, call the **bitlyShortenUrl** async function and pass the correct url

```
bitlyUrl.bitlyShortenUrl("https://www.youtube.com/watch?v=3I78ELjTzlQ&feature=youtu.be", accessToken).then((data) => {
	console.log(data)
})
```

On success shortening, it will return 

```
{ created_at: '1970-01-01T00:00:00+0000',
  id: 'bit.ly/2H9KBfl',
  link: 'http://bit.ly/2H9KBfl',
  custom_bitlinks: [],
  long_url:
   'https://www.youtube.com/watch?v=3I78ELjTzlQ&feature=youtu.be',
  archived: false,
  tags: [],
  deeplinks: [],
  references: { group: 'https://api-ssl.bitly.com/v4/groups/Bibn4PNFqIn' } }
```

On failure,

```
{ message: 'INVALID_ARG_LONG_URL',
  resource: 'bitlinks',
  description: 'The value provided is invalid.',
  errors: [ { field: 'long_url', error_code: 'invalid' } ] }
```

## Authors

* **Zaw HLaing Bwar** - [Here I am](https://zaw-hlaing-bwar.github.io/)

