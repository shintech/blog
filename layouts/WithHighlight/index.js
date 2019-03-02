import marked from 'marked'
import Highlight from 'react-highlight'
import Wrapper from './wrapper'

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
})

const WithHighlight = (content) =>
  <Wrapper>
    <Highlight innerHTML>
      {marked(content)}
    </Highlight>
  </Wrapper>

export default WithHighlight
