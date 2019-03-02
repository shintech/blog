# mprather1/blog

## Table of Contents
1. [ Synopsis ](#synopsis)
2. [ Usage ](#usage) <br />
	a. [.env ](#env) <br />
	b. [Development ](#development) <br />
	c. [Production ](#production)
3. [ TODO ](#todo)

<a name="synopsis"></a>
### Synopsis

Next.js + Koa.js - Blog
  
### Installation

    ./install.sh

<a name="usage"></a>
### Usage
<a name="env"></a>
#### config/env/.env
    
    PORT=8000
    NODE_ENV=development
    BASE_URL=https://domain
    EMAIL=example@example.org
    POSTGRES_URI=postgresURI

<a name="development"></a>
#### Development

    npm run dev
    
    # or
    
    yarn dev

<a name="production"></a>
#### Production
    docker-compose build && docker-compose up -d

<a name="todo"></a>
### TODO
- [x] Create admin page
- [x] Home page - parallax scroll
- [ ] Contact page
- [ ] Contact component - reusability 
- [ ] Mobile support
- [x] Production environment - Docker database instance
- [ ] RSS feed - https://www.npmjs.com/package/feed
- [ ] Links to social media
- [ ] Social media sharing
- [x] Different size header on home page
- [ ] Write tests
- [ ] Better animations for navbar and branding
- [x] Secure admin page
- [ ] Improve CSS on admin page
- [ ] Improve font on header
- [ ] Match CSS on posts page with blog page
- [ ] Create page to edit blog posts
- [ ] Create login flash message
- [ ] Create flash message when post is created
- [ ] Form validations
- [ ] Server validations
- [ ] Refactor authentication