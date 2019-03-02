DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  content VARCHAR,
  description VARCHAR,  
  author VARCHAR,  
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR,
  username VARCHAR,
  password VARCHAR,
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);

INSERT INTO users ( first_name, last_name, email, username, password )
VALUES ('Kill', 'Bill', 'user@example.com', 'username', '$2a$10$jIRLZjxlI34eFayDBliJq.trVAh3E4VfjvbGI7vG1SBPkBESB6PRm');

INSERT INTO posts ( title, content, description, author )
VALUES ( 'title with spaces', '
1. Description
1. Code Example
1. Paragraph

***

Voluptas fuga quibusdam nostrum cum dolorem ab amet suscipit doloribus. Voluptas qui totam omnis sapiente et possimus alias dolorem minima. Quisquam dolorem debitis et sapiente. Sit et officia sit qui eos quae iusto. Deserunt velit et a laboriosam odio laboriosam quos.

#### Code Example
~~~js
import Post from ''components/Post''
import PropTypes from ''prop-types''
import Wrapper from ''./wrapper''
import theme from ''./theme''

function posts () {
  return [
   {
    title: ''test'',
    content: ''test'',
    author: ''test''
   }
  ]
}

const Title = () =>
  <Wrapper>
    <div className=''post-list''>
      { posts().data.map((post, n) => {
        return <Post key={n} post={post} />
      })}
    </div>
    
    <div className=''contact-info''>
      <h3>Contact</h3>
      <div className=''address''>
        Tulsa, OK, 74136
      </div>
      <div className=''phone''>918-555-5555</div>
      <div className=''email''><a href=''#''>email@example.org</a></div>
    </div>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Title

~~~

Sed praesentium debitis. Veniam vitae aut. Ex eos ipsum qui sed corrupti et.',
'Harum pariatur excepturi voluptate aliquam at quasi.',
'Michael Prather'
);

INSERT INTO posts ( title, content, description, author )
VALUES ( 'quos odit quod', '
1. Description
1. Code Example
1. Paragraph

***

Delectus aut ratione qui. Eum sapiente ipsum est ipsum ut. Quaerat esse qui exercitationem qui dignissimos expedita dolorem et. Et nobis sit nulla ipsa corporis voluptatem sint.

#### Code Example
~~~js
import Post from ''components/Post''
import PropTypes from ''prop-types''
import Wrapper from ''./wrapper''
import theme from ''./theme''

function posts () {
  return [
   {
    title: ''test'',
    content: ''test'',
    author: ''test''
   }
  ]
}

const Title = () =>
  <Wrapper>
    <div className=''post-list''>
      { posts().data.map((post, n) => {
        return <Post key={n} post={post} />
      })}
    </div>
    
    <div className=''contact-info''>
      <h3>Contact</h3>
      <div className=''address''>
        Tulsa, OK, 74136
      </div>
      <div className=''phone''>918-555-5555</div>
      <div className=''email''><a href=''#''>email@example.org</a></div>
    </div>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Title

~~~

Mollitia fugit perspiciatis est quia rem consectetur praesentium laborum. Dolor molestiae aspernatur ut quis nobis. Veniam ipsa rerum in. Illo sunt tempora saepe amet ipsum rerum esse dolores. Atque fugiat molestiae omnis sit voluptas nam dolore. Dolor voluptatem quam voluptas perferendis quam aliquid.',
'Assumenda voluptatem sit dolorum qui eaque.',
'Michael Prather'
);

INSERT INTO posts ( title, content, description, author )
VALUES ( 'placeat aut numquam', '
1. Description
1. Code Example
1. Paragraph

***

Provident corporis repudiandae omnis suscipit molestiae praesentium aut. Est saepe sed debitis mollitia vero ut. Velit eum possimus tempora unde est assumenda recusandae.

#### Code Example
~~~js
import Post from ''components/Post''
import PropTypes from ''prop-types''
import Wrapper from ''./wrapper''
import theme from ''./theme''

function posts () {
  return [
   {
    title: ''test'',
    content: ''test'',
    author: ''test''
   }
  ]
}

const Title = () =>
  <Wrapper>
    <div className=''post-list''>
      { posts().data.map((post, n) => {
        return <Post key={n} post={post} />
      })}
    </div>
    
    <div className=''contact-info''>
      <h3>Contact</h3>
      <div className=''address''>
        Tulsa, OK, 74136
      </div>
      <div className=''phone''>918-555-5555</div>
      <div className=''email''><a href=''#''>email@example.org</a></div>
    </div>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Title

~~~

Laborum amet et pariatur et eum odit dignissimos odio. Rerum est rerum nemo quis voluptas dicta eos. Magni ut molestias.',
'Voluptatem aut est quidem fugiat blanditiis omnis repellendus voluptatibus.',
'Michael Prather'
);

INSERT INTO posts ( title, content, description, author )
VALUES ( 'debitis perspiciatis necessitatibus', '
1. Description
1. Code Example
1. Paragraph

***

Ratione quis ea. Reprehenderit cupiditate et numquam veritatis ipsa eos fugit aspernatur pariatur. Ab labore sapiente recusandae voluptas autem.

#### Code Example
~~~js
import Post from ''components/Post''
import PropTypes from ''prop-types''
import Wrapper from ''./wrapper''
import theme from ''./theme''

function posts () {
  return [
   {
    title: ''test'',
    content: ''test'',
    author: ''test''
   }
  ]
}

const Title = () =>
  <Wrapper>
    <div className=''post-list''>
      { posts().data.map((post, n) => {
        return <Post key={n} post={post} />
      })}
    </div>
    
    <div className=''contact-info''>
      <h3>Contact</h3>
      <div className=''address''>
        Tulsa, OK, 74136
      </div>
      <div className=''phone''>918-555-5555</div>
      <div className=''email''><a href=''#''>email@example.org</a></div>
    </div>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Title

~~~

Voluptatem odit qui ea distinctio officiis deleniti earum. Ipsum ut voluptas ab eum molestias qui qui quo suscipit. Reiciendis commodi non minus pariatur et repellat tempore voluptatem.',
'Fuga repellendus ipsam est velit quo commodi eos qui aliquid.',
'Michael Prather'
);

INSERT INTO posts ( title, content, description, author )
VALUES ( 'ipsum perspiciatis laborum', '
1. Description
1. Code Example
1. Paragraph

***

Laboriosam earum non est beatae. Quisquam ut commodi. Eaque ducimus non maxime.

#### Code Example
~~~js
import Post from ''components/Post''
import PropTypes from ''prop-types''
import Wrapper from ''./wrapper''
import theme from ''./theme''

function posts () {
  return [
   {
    title: ''test'',
    content: ''test'',
    author: ''test''
   }
  ]
}

const Title = () =>
  <Wrapper>
    <div className=''post-list''>
      { posts().data.map((post, n) => {
        return <Post key={n} post={post} />
      })}
    </div>
    
    <div className=''contact-info''>
      <h3>Contact</h3>
      <div className=''address''>
        Tulsa, OK, 74136
      </div>
      <div className=''phone''>918-555-5555</div>
      <div className=''email''><a href=''#''>email@example.org</a></div>
    </div>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Title

~~~

Consectetur explicabo eos necessitatibus illo. Placeat rerum unde quam quam. Explicabo unde ullam harum consequatur minima. Corrupti voluptatem consectetur necessitatibus neque ipsa qui harum quo. Omnis aut sed debitis nulla libero minus porro ut. Occaecati non quia nulla unde explicabo in et nobis atque.',
'Rerum aut exercitationem suscipit dolore deleniti dolorum odit rerum consequatur.',
'Michael Prather'
);

INSERT INTO posts ( title, content, description, author )
VALUES ( 'repellat voluptatem ea', '
1. Description
1. Code Example
1. Paragraph

***

Atque laudantium occaecati. Ut ut beatae quaerat velit vero placeat quia aliquam et. Voluptatem similique esse aut nulla porro laboriosam soluta eos. Facere molestias natus. Ut quia perferendis. Perferendis sint voluptatem quam ut quos.

#### Code Example
~~~js
import Post from ''components/Post''
import PropTypes from ''prop-types''
import Wrapper from ''./wrapper''
import theme from ''./theme''

function posts () {
  return [
   {
    title: ''test'',
    content: ''test'',
    author: ''test''
   }
  ]
}

const Title = () =>
  <Wrapper>
    <div className=''post-list''>
      { posts().data.map((post, n) => {
        return <Post key={n} post={post} />
      })}
    </div>
    
    <div className=''contact-info''>
      <h3>Contact</h3>
      <div className=''address''>
        Tulsa, OK, 74136
      </div>
      <div className=''phone''>918-555-5555</div>
      <div className=''email''><a href=''#''>email@example.org</a></div>
    </div>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Title

~~~

Velit qui minima nulla maiores et in. Enim dolorum amet aut repellendus eos laboriosam iste dolor suscipit. Vel dolor et eum qui ea excepturi molestiae ut quaerat.',
'Dolorem omnis est vero consectetur esse.',
'Michael Prather'
);

INSERT INTO posts ( title, content, description, author )
VALUES ( 'nam deserunt illo', '
1. Description
1. Code Example
1. Paragraph

***

Ut labore est eos eum impedit est iure commodi. At in corrupti aut ex et. Omnis non reprehenderit non at vero corporis aut doloribus. Velit error nemo iusto.

#### Code Example
~~~js
import Post from ''components/Post''
import PropTypes from ''prop-types''
import Wrapper from ''./wrapper''
import theme from ''./theme''

function posts () {
  return [
   {
    title: ''test'',
    content: ''test'',
    author: ''test''
   }
  ]
}

const Title = () =>
  <Wrapper>
    <div className=''post-list''>
      { posts().data.map((post, n) => {
        return <Post key={n} post={post} />
      })}
    </div>
    
    <div className=''contact-info''>
      <h3>Contact</h3>
      <div className=''address''>
        Tulsa, OK, 74136
      </div>
      <div className=''phone''>918-555-5555</div>
      <div className=''email''><a href=''#''>email@example.org</a></div>
    </div>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Title

~~~

Minima provident quos maxime molestiae officiis. Aut non ut suscipit veniam aliquid. Voluptas quis omnis ab. Quo qui cupiditate eum. Rerum qui recusandae fugiat ut. Voluptatem ex alias quo quas illum id.',
'Quia esse nisi.',
'Michael Prather'
);

INSERT INTO posts ( title, content, description, author )
VALUES ( 'natus voluptas a', '
1. Description
1. Code Example
1. Paragraph

***

Id dolorem fugit. Nobis culpa aut facere quia blanditiis ab non et. Eius tempore voluptate non totam non autem mollitia. Ex nesciunt assumenda reprehenderit ut quibusdam. Pariatur consequuntur autem magni consequatur minima.

#### Code Example
~~~js
import Post from ''components/Post''
import PropTypes from ''prop-types''
import Wrapper from ''./wrapper''
import theme from ''./theme''

function posts () {
  return [
   {
    title: ''test'',
    content: ''test'',
    author: ''test''
   }
  ]
}

const Title = () =>
  <Wrapper>
    <div className=''post-list''>
      { posts().data.map((post, n) => {
        return <Post key={n} post={post} />
      })}
    </div>
    
    <div className=''contact-info''>
      <h3>Contact</h3>
      <div className=''address''>
        Tulsa, OK, 74136
      </div>
      <div className=''phone''>918-555-5555</div>
      <div className=''email''><a href=''#''>email@example.org</a></div>
    </div>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Title

~~~

Expedita quia soluta enim dolor veritatis sed ut temporibus. Dolores maxime aut soluta voluptatum corporis. Est similique quia reiciendis ut est id possimus aut.',
'Tenetur qui quia nostrum ut a.',
'Michael Prather'
);

INSERT INTO posts ( title, content, description, author )
VALUES ( 'incidunt deserunt occaecati', '
1. Description
1. Code Example
1. Paragraph

***

Ab eos qui ut aut quas illum sunt sed. Vel qui id est est. Eveniet dicta voluptas architecto unde sit nostrum quia reprehenderit. Beatae et molestiae. Quo nostrum nisi possimus.

#### Code Example
~~~js
import Post from ''components/Post''
import PropTypes from ''prop-types''
import Wrapper from ''./wrapper''
import theme from ''./theme''

function posts () {
  return [
   {
    title: ''test'',
    content: ''test'',
    author: ''test''
   }
  ]
}

const Title = () =>
  <Wrapper>
    <div className=''post-list''>
      { posts().data.map((post, n) => {
        return <Post key={n} post={post} />
      })}
    </div>
    
    <div className=''contact-info''>
      <h3>Contact</h3>
      <div className=''address''>
        Tulsa, OK, 74136
      </div>
      <div className=''phone''>918-555-5555</div>
      <div className=''email''><a href=''#''>email@example.org</a></div>
    </div>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Title

~~~

Autem debitis rem autem dolore ullam rem voluptas quos temporibus. Laudantium voluptatem in. Officia laborum illum aspernatur.',
'Omnis quaerat accusantium dolores consequatur consequatur rerum.',
'Michael Prather'
);

INSERT INTO posts ( title, content, description, author )
VALUES ( 'nihil tempore est', '
1. Description
1. Code Example
1. Paragraph

***

Illum accusamus eius doloribus omnis in doloremque et iusto qui. Est quisquam velit officia in. Et enim corporis voluptatum eaque explicabo. Sint laudantium delectus id esse. Fugiat delectus eos. Labore ratione expedita libero velit qui reprehenderit veritatis ut.

#### Code Example
~~~js
import Post from ''components/Post''
import PropTypes from ''prop-types''
import Wrapper from ''./wrapper''
import theme from ''./theme''

function posts () {
  return [
   {
    title: ''test'',
    content: ''test'',
    author: ''test''
   }
  ]
}

const Title = () =>
  <Wrapper>
    <div className=''post-list''>
      { posts().data.map((post, n) => {
        return <Post key={n} post={post} />
      })}
    </div>
    
    <div className=''contact-info''>
      <h3>Contact</h3>
      <div className=''address''>
        Tulsa, OK, 74136
      </div>
      <div className=''phone''>918-555-5555</div>
      <div className=''email''><a href=''#''>email@example.org</a></div>
    </div>
  </Wrapper>

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Title

~~~

Quia laboriosam voluptates. Sapiente sed consequatur debitis et voluptatibus veritatis quo et. Occaecati praesentium voluptatum asperiores consequatur amet rem.',
'Officiis accusantium excepturi tenetur et dolor eum expedita unde.',
'Michael Prather'
);


---------------------------------------------------------------------------
