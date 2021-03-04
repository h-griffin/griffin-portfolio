# Made by : [H Griffin](https://github.com/h-griffin)
### Firebase Hosting Console [h-griffin-portfolio](https://console.firebase.google.com//u/0/project/h-griffin-portfolio/hosting/sites)
### Live Site [h-griffin-portfolio](https://h-griffin-portfolio.web.app/)
### Github [griffin-portfolio](https://github.com/h-griffin/griffin-portfolio)

![whiteboard](images/whiteboard.png)

## set up
```
> $ mkdir griffin-portfolio 
> $ cd griffin-portfolio 
> $ npx create-react-app griffin-portfolio 
> $ cd griffin-portfolio npm run dev
```

#### css modules
```
> $ npm run eject
> y
```

acivate css modules
```
> $ npm install webpack -g  
> $ npm i -D webpack 
> $ npm i -D babel-loader babel-core babel-preset-env   
> $ npm i -D css-loader style-loader
```

#### fa icons (nav/contact)
```
> $ npm i --save @fortawesome/fontawesome-svg-core
> $ npm install --save @fortawesome/free-solid-svg-icons
> $ npm install --save @fortawesome/react-fontawesome
> $ npm install --save @fortawesome/free-brands-svg-icons
> $ npm install --save @fortawesome/free-regular-svg-icons
```
#### css grid component
```
> $ npm install --save styled-components
> $ npm install --save styled-css-grid
```
#### firebase hosting config
```
? What do you want to use as your public directory? 
    > build
? Configure as a single-page app (rewrite all urls to /index.html)? 
    > yes
? Set up automatic builds and deploys with GitHub? 
    > Yes
? File build/index.html already exists. Overwrite? 
    > no
? For which GitHub repository would you like to set up a GitHub workflow? 
    > h-griffin/griffin-portfolio
? Set up the workflow to run a build script before every deploy? 
    > Yes
? What script should be run before every deploy? 
    > npm run build
? Set up automatic deployment to your site's live channel when a PR is merged? 
    > Yes
? What is the name of the GitHub branch associated with your site's live channel? 
    > master
```


- todo
    mobile nav bar 
        space
        hover
    mobile other screen sizes

    clean code
    project modal
        live vs code
    rpg page grid layout
    instagram feed

- app description
React-router & React-router-dom 

- projects to add
book app
snake game