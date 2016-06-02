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

    {
      success: true/false,
      data: result/payload,
      errors: [{ // Array of error objects
        status: status_code, // Generally HTTP codes
        message: error_message,
      }]
    }
