import styled from 'styled-components'

const Wrapper = styled.main.attrs(props => ({
  role: !props.as && 'main',
  id: !props.as && 'main-content',
}))`
  position: relative;
  border-radius: 5px;
  width: 100%;
  max-width: 770px;
  word-wrap: break-word;
  background-color: var(--color-wrapperBackground);
  margin: 0px auto 30px auto;
  padding: 50px;
  box-shadow: 0 0 0 0, 0 6px 12px var(--color-wrapperShadow);

  @media (max-width: 770px) {
    width: 100%;
    padding: 25px;
  }
`

export default Wrapper
