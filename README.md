<p  align="center">
	<a  href="https://fossnssorg">#FOSSNSS</a>
</p>


# FOSS Cell NSSCE 

 
This is the home page repo for the Free and Open Source Cell of NSS College of Engineering, Palakkad.


## 🚀 Quick start

  

1.  **Install NodeJs and NPM.**

  

We recommend using NodeJs version 12(LTS). To manage different versions of NodeJS installations, you may use `nvm` script for `bash` or your favourite shell.
Follow [this](https://github.com/nvm-sh/nvm) official guide to add `nvm` to your shell

  

```shell

# install NodeJs v12 and use it in nvm
nvm install 12
nvm use 12

```


2.  **Install GatsbyJS.**

Now you need to install GatsbyJS. Which is used to generate our static site.
Follow [this official guide](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli) to install GatsbyJS onto your machine.
  

```shell
npm install -g gatsby-cli
```

  

3.  **Clone this repo.**

  

Now you need to clone this repo using `git` to your local machine to develop or to test.

  

```shell

#if you have not added ssh keys to your gitlab account(😥)
git clone https://gitlab.com/fossnss/website.git fossnss

#else, if you have ssh added your ssh keys 🤩
git clone git@gitlab.com:fossnss/website.git fossnss

cd fossnss/

gatsby develop

```

  

1.  **Open the source code and start editing!**

  

Your site is now running at `http://localhost:8000`!

  

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

  

Open the `fossnss`(or whatever you have named) directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

Before helping us by pushing changes, make sure to not to break things 😜 

## 🧐 What's inside?


The src directory contains most of the functionality.
This folder contains following directories in it: components  content  images  pages  styles  templates.



1. All the pages used in this website are defined under src/pages dir. Namely 404.js  about.js  blog.js  events.js  index.js. Pages are created using Gatsby JSX style syntax.



2. The components used in all the pages are defined under ```src/components``` dir.


3. All the images including favicons and logos are listed under ```src/images``` dir.


4. We have used scss as the css preprocessor. All the defined styles are defined under ```src/styles``` dir.


5. Markdown posts for all the blogs and events are stored under ```src/content``` 
  
  We still need to structure our project a little bit to showcase what is what....
  A little help, maybe 😊


## 🤔 How do I add a post in blog or events?

* To add a post in blog or events, create a directory in ```src/content/blog``` or in ```src/content/events``` respectively.

* The created dir name should stick to the following convention
```yyyy-mm-dd--postname```. <br>
for eg: ```2020-01-25--test-post```

* Create an index.md file to list down the post contents. All the related assets can be added to the dir that you just created.

* All the posts created should have a frontmatter with the below syntax.

For Blogs,

```shell
    path: /blog/test-post
    date: "2019-11-05"
    cover: "./coverimageforthepost.jpg"
    tag: "tagsforthispost"
    author: "authorusername"
    name: "Author Name"
    title: "A new face for PLUS."
    desc: "A welcome post"
```

For events, 

```shell
    path: /events/testevent
    date: "2020-01-1"
    author: "authorusername"
    title: "Test event"
    cover: "./poster2.jpeg"
```

* This frotnmatter should be enclosed with three hyphens without spaces.

* For more Gatsby MD syntax, visit [Gatsby Markdown Docs](https://www.gatsbyjs.org/docs/mdx/markdown-syntax/) 
<br>


The path should be unique. That is it should not conflict with already existing posts. Please refer to a post inside these dirs for more insights. If unclear, ask doubts in above listed communication methods.
