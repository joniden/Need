Need
====

Need javascript template framework

Need.js is a simple and small template framework that is still under development

Include ```<script src="need.js"></script>``` in your html <head>.

The script uses html5 for finding the right part to start with.

```
<div data-name="posts">
            <article data-posts="container">
                <h1 data-posts="title"></h1>
                <h2 data-posts="author"></h2>
                <div data-posts="body"></div>
            </article>
        </div>
```

Because we now created **data-name="posts"**, need.js will look for **posts.json**

This is the content inside posts.json

```
[{
"title":"test title",
"body":"Super long test",
"author":"Jocke"
},
{
"title":"another title",
"body":"This text is even longer",
"author":"Jocke as well"
}]
```

It will start to look for data-posts="container" and duplicate it until there is no more posts in posts.json.

During the copying it will look for (in this case) title, author and body in posts.json. Because we defined it as data-attributes. So if you add ```data-posts="date"``` it will look for ```date``` in ```posts.json``` and print it out.





