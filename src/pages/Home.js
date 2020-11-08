import { Link } from 'react-router-dom'
import settings from '../settings.svg'
import { connect } from 'react-redux'
import { Wrapper, Container, Img, H1, H2, P, Pwrap } from '../Styles/mainStyles'

function Home(props) {
 
    return (
        <Wrapper>

            <H1>Home</H1>
            <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</P>
            {
                props.myPosts.length > 0 ? props.myPosts.map(post =>
                    <Container key={post.id}>
                        <Link to={'/' + post.id} style={{ padding: 0 }}>
                            <H2>Post Title</H2>
                        </Link>
                        <Pwrap>{post.content}</Pwrap>
                        <Img src={settings} alt="setting icon" />

                    </Container>
                ) : <Pwrap>Loading...</Pwrap>
            }
        </Wrapper>
    )
}

//conect --> returns HOC that wrap our component and give the ability grab sata from the store

const mapStateToProps = (state) => {
    return {
        myPosts: state.posts
    }
}

//HOC
export default connect(mapStateToProps)(Home)
