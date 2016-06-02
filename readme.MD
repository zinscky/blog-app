##Blog App

A simple blog like web app where users can post articles and like or comment
on other articles.

####User Stories.
- I can post new articles.
- I can read articles by other users.
- I can post comments on articles.
- I can like comments as well as articles.
- I can create my own profile.
- I can create my account using my email or google or github or facebook.


####Conventions.
- JSON response format.

```javascript
  {
    success: true/false,
    data: payload,
    errors: [{
      status: status_code,
      message: error_message
    }]
  }
```
